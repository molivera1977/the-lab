#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════
   THE LAB · independent checker — node tools/check-lab.js
   Does NOT reuse the builder's math. It reads the finished data files and works
   everything out again from the words a student sees:
     1. every answer, from the question text
     2. every equation in every note, hint, explanation and worked example ("8 + 3 = 11" must be true)
     3. every counting list ("Count on 3: 9, 10, 11" must start right after the start and be 3 long)
     4. every wrong choice's slip label matches the number it stands for ("Counted the start number" on
        8 + 3 must be 10)
     5. the lesson's limits (Count On: one number 1–3; Make 10: a 7, 8 or 9 and a sum past 10; …)
     6. no picture under a question gives the answer away
     7. versions: 4 per lesson, the same kinds of item, new facts, no fact twice in one version
     8. the right answer is not "usually" in one place when the choices are put in order
     9. no word card's example is a fact a lesson asks
    10. the student's-own-facts path: every fact up to 20 that a lesson takes is built and passes 1–6
   Then it plants mistakes in copies of real items and must catch every one.
═══════════════════════════════════════════════════════ */
'use strict';
const path = require('path');
const ROOT = path.join(__dirname, '..');
global.window = {};
['as1', 'as2', 'as3', 'as4', 'as5', 'as6', 'words', 'skills'].forEach(f => require(path.join(ROOT, 'data', f + '.js')));
const LL = require(path.join(ROOT, 'lessons.js'));   // only for part 10 (to BUILD the student's facts); never to check
const IDS = ['AS1', 'AS2', 'AS3', 'AS4', 'AS5', 'AS6'];
const M = '−';
const nums = s => (String(s).match(/\d+/g) || []).map(Number);

/* ── what the question asks, read from its words ── */
function readQ(q) {
  let m;
  if ((m = q.q.match(/^What is (\d+) ([+−]) (\d+)\?$/))) {
    const a = +m[1], b = +m[3], op = m[2];
    return { kind: 'fact', op, a, b, ans: op === '+' ? a + b : a - b };
  }
  if ((m = q.q.match(/^What number and (\d+) make 10\?$/))) return { kind: 'partner', p: +m[1], ans: 10 - +m[1] };
  if ((m = q.q.match(/^(\d+) \+ (\d+) = (\d+)\. So what is (\d+) − (\d+)\?$/))) {
    const a = +m[1], b = +m[2], c = +m[3];
    return { kind: 'family', a, b, c, top: +m[4], take: +m[5], ans: +m[4] - +m[5], stated: a + b === c };
  }
  return null;
}

/* ── every "x + y = z" / "x − y = z" in a text must be true ── */
function badEquations(text) {
  const bad = [];
  const re = /(\d+) ([+−]) (\d+) = (\d+)/g;
  let m;
  while ((m = re.exec(text))) {
    const v = m[2] === '+' ? +m[1] + +m[3] : +m[1] - +m[3];
    if (v !== +m[4]) bad.push(m[0]);
  }
  return bad;
}
/* ── "Start at X. Count on N: a, b, c" / "Count back N: …" / "Count up to Y: …" lists must be right ── */
function badCounts(text) {
  const bad = [];
  let m;
  const on = /Start at (\d+)\.(?: Do not count the \d+\.)? Count (on|back) (\d+)(?: more)?: ([\d, ]+)\./g;
  while ((m = on.exec(text))) {
    const start = +m[1], dir = m[2] === 'on' ? 1 : -1, n = +m[3], list = nums(m[4]);
    const want = Array.from({ length: n }, (_, i) => start + dir * (i + 1));
    if (JSON.stringify(list) !== JSON.stringify(want)) bad.push(m[0]);
  }
  const up = /Start at (\d+)\.(?: Do not count the \d+\.)? Count up to (\d+): ([\d, ]+)\. That is (\d+) numbers\./g;
  while ((m = up.exec(text))) {
    const start = +m[1], end = +m[2], list = nums(m[3]), n = +m[4];
    const want = Array.from({ length: end - start }, (_, i) => start + i + 1);
    if (JSON.stringify(list) !== JSON.stringify(want) || n !== want.length) bad.push(m[0]);
  }
  return bad;
}
const allText = q => [q.q, q.hint, q.explanation, q.text, q.title, ...Object.values(q.slips || {}).map(s => s.say)].filter(Boolean).join(' \n ');

/* ── the slip label must match the wrong number ── */
function slipFits(tag, pick, R, lesson, q) {
  const ans = R.ans, d = pick - ans;
  const small = R.kind === 'fact' ? Math.min(R.a, R.b) : 0, big = R.kind === 'fact' ? Math.max(R.a, R.b) : 0;
  switch (tag) {
    case 'Counted the start number':
      if (lesson === 'AS1' || (R.op === '+' && lesson !== 'AS5')) return d === -1;
      return d === 1;                                         // counting back or counting up from the start
    case 'Counted one too many': return R.op === '+' ? d === 1 : d === -1;
    case 'Counted too many': return R.op === '+' ? d >= 1 && d <= 2 : d <= -1 && d >= -2;
    case 'Counted too few': return R.op === '+' ? d <= -1 && d >= -2 : d >= 1 && d <= 2;
    case 'Took away instead of adding': return R.op === '+' && pick === big - small;
    case 'Added instead of taking away':
      if (R.kind === 'family') return pick === R.top + R.take;
      return R.op === M && pick === R.a + R.b;
    case 'Made 10 but did not take from the other number': {
      const other = R.a >= 7 && R.a <= 9 && R.a >= R.b ? R.b : R.b >= 7 && R.b <= 9 ? R.a : null;
      return other != null && pick === 10 + other;
    }
    case 'Made the ten into 2 tens': return d === 10;
    case 'Added another ten': return d === 10;
    case 'Added a ten': return d === 10;
    case 'Used 10 as 1': return pick === (R.a === 10 ? R.b : R.a) + 1;
    case 'Dropped the ten': return d === -10;
    case 'Took away 1, not 10': return pick === R.a - 1;
    case 'Kept the ten': return pick === 10;
    case 'Picked the same number': return R.kind === 'partner' && pick === R.p;
    case 'Picked the number taken away': return R.kind === 'family' && pick === R.take;
    case 'Ten partner off by one':
    case 'Make-10 sum off by one':
    case 'Teen number off by one':
    case 'Ones added wrong':
    case 'Ones taken away wrong':
    case 'Count-up off by one':
    case 'Fact family off by one':
    case 'Sum off by a little':
    case 'Difference off by a little':
    case 'Off by a little':
      return d !== 0 && Math.abs(d) <= 4;
    default: return false;
  }
}

/* ── the lesson's limits ── */
function inLimits(lesson, R, q) {
  if (q.mine) return true;                 // a student's own fact is whatever they missed (checked by part 10)
  const within = n => n >= 0 && n <= 20;
  if (!within(R.ans)) return false;
  switch (lesson) {
    case 'AS1': return R.kind === 'fact' && R.op === '+' && Math.min(R.a, R.b) >= 1 && Math.min(R.a, R.b) <= 3 && R.a + R.b <= 20;
    case 'AS2':
      if (R.kind === 'partner') return R.p >= 1 && R.p <= 9;
      return R.kind === 'fact' && R.op === '+' && Math.max(R.a, R.b) >= 7 && Math.max(R.a, R.b) <= 9 && R.ans >= 11 && R.ans <= 18;
    case 'AS3': {
      if (R.kind !== 'fact') return false;
      if (R.op === '+') return (Math.max(R.a, R.b) === 10 && Math.min(R.a, R.b) <= 9) || (Math.max(R.a, R.b) >= 11 && Math.max(R.a, R.b) <= 18 && (Math.max(R.a, R.b) % 10) + Math.min(R.a, R.b) <= 9);
      return R.a >= 11 && R.a <= 19 && (R.b === 10 || R.b < R.a % 10);
    }
    case 'AS4': return R.kind === 'fact' && R.op === M && R.b >= 1 && R.b <= 3;
    case 'AS5':
      if (R.kind === 'family') return R.stated && R.top === R.c && (R.take === R.b) && R.c >= 11;
      return R.kind === 'fact' && R.op === M && R.ans >= 2 && R.ans <= 6 && R.b >= 6;
    case 'AS6':
      if (R.kind !== 'fact') return false;
      return R.op === '+' ? R.ans <= 20 : R.a >= 11 && R.a <= 18 && R.b <= 9;
    default: return false;
  }
}

/* ── a picture under a question must not give the answer away ── */
function picLeaks(q) {
  const p = q.pic;
  if (!p) return false;
  if (p.line && (p.line.jumps || p.line.from != null) && q.kind !== 'step') return true;
  if (p.frames && (p.frames.fill || p.frames.make10)) return true;
  if (p.teen && p.teen.show != null) return true;
  if (p.bond && !p.bond.ask) return true;
  return false;
}

/* ── one scored / pre item ── */
function checkItem(lesson, q) {
  const out = [];
  const R = readQ(q);
  if (!R) { out.push(`${q.id}: question text not understood: "${q.q}"`); return out; }
  if (R.kind === 'family' && !R.stated) out.push(`${q.id}: the adding fact in the question is wrong`);
  if (String(R.ans) !== q.answer) out.push(`${q.id}: answer ${q.answer}, worked out ${R.ans}`);
  if (!Array.isArray(q.choices) || q.choices.length !== 4) out.push(`${q.id}: ${q.choices && q.choices.length} choices`);
  if (new Set(q.choices).size !== q.choices.length) out.push(`${q.id}: a choice is listed twice`);
  if (!q.choices.includes(q.answer)) out.push(`${q.id}: the answer is not a choice`);
  if (q.choices.filter(c => c === String(R.ans)).length !== 1) out.push(`${q.id}: not exactly one right choice`);
  q.choices.filter(c => c !== q.answer).forEach(c => {
    if (!/^\d+$/.test(c)) out.push(`${q.id}: choice "${c}" is not a whole number`);
    const s = q.slips && q.slips[c];
    if (!s || !s.say || !s.tag) { out.push(`${q.id}: wrong choice ${c} has no mistake note`); return; }
    if (!slipFits(s.tag, +c, R, lesson, q)) out.push(`${q.id}: slip "${s.tag}" does not fit the pick ${c} (answer ${R.ans})`);
  });
  Object.keys(q.slips || {}).forEach(k => { if (!q.choices.includes(k)) out.push(`${q.id}: a note for ${k}, which is not a choice`); });
  badEquations(allText(q)).forEach(e => out.push(`${q.id}: false equation "${e}"`));
  badCounts(allText(q)).forEach(e => out.push(`${q.id}: wrong counting list "${e}"`));
  if (!inLimits(lesson, R, q)) out.push(`${q.id}: outside the lesson's limits: ${q.q}`);
  if (picLeaks(q)) out.push(`${q.id}: the picture under the question shows the answer`);
  if (q.kind === 'pre' && (q.pic || q.hint)) out.push(`${q.id}: Show what you know has a picture or hint`);
  if (lesson === 'AS6' && (q.pic || q.hint)) out.push(`${q.id}: the facts check has a picture or hint`);
  if (q.fact) {
    const fv = q.fact.op === '+' ? q.fact.a + q.fact.b : q.fact.a - q.fact.b;
    if (String(fv) !== q.answer) out.push(`${q.id}: the fact tag ${q.fact.a} ${q.fact.op} ${q.fact.b} does not give the answer`);
  } else if (R.kind !== 'partner') out.push(`${q.id}: no fact tag (a miss would not reach the student's list)`);
  // Count On / Count Back notes start at the right number
  if (lesson === 'AS1' && R.kind === 'fact') Object.values(q.slips).concat([{ say: q.explanation }]).forEach(s => {
    const m = /Start at (\d+)\./.exec(s.say); if (m && +m[1] !== Math.max(R.a, R.b)) out.push(`${q.id}: Count On starts at ${m[1]}, not the bigger number`);
  });
  if (lesson === 'AS4' && R.kind === 'fact') Object.values(q.slips).concat([{ say: q.explanation }]).forEach(s => {
    const m = /Start at (\d+)\./.exec(s.say); if (m && +m[1] !== R.a) out.push(`${q.id}: Count Back starts at ${m[1]}, not ${R.a}`);
  });
  return out;
}

/* ── teaching items: true equations, right counting, answer among the choices ── */
function checkTeach(q) {
  const out = [];
  badEquations(allText(q)).forEach(e => out.push(`${q.id}: false equation "${e}"`));
  badCounts(allText(q)).forEach(e => out.push(`${q.id}: wrong counting list "${e}"`));
  if (q.kind === 'step') {
    if (!q.choices.includes(q.answer)) out.push(`${q.id}: step answer not a choice`);
    if (new Set(q.choices).size !== q.choices.length) out.push(`${q.id}: step choice listed twice`);
    q.choices.filter(c => c !== q.answer).forEach(c => { if (!q.slips[c]) out.push(`${q.id}: step choice ${c} has no note`); });
  }
  if (q.kind === 'watch' && !q.text) out.push(`${q.id}: worked example with no words`);
  return out;
}

const factKey = q => { const R = readQ(q); return !R ? q.q : R.kind === 'fact' ? (R.op === '+' ? `${Math.min(R.a, R.b)}+${Math.max(R.a, R.b)}` : `${R.a}-${R.b}`) : R.kind === 'partner' ? `p${R.p}` : `f${R.top}-${R.take}`; };

function checkLesson(id) {
  const out = [];
  const V = window[`LAB_${id}_V`];
  if (!Array.isArray(V) || V.length !== 4) return [`${id}: expected 4 versions, found ${V && V.length}`];
  if (V[0] !== window[`LAB_${id}`]) out.push(`${id}: version 1 is not LAB_${id}`);
  const shape = v => v.map(q => q.kind || 'q').join(',');
  const ranks = [0, 0, 0, 0];
  const v1facts = new Set(V[0].filter(q => !q.kind).map(factKey));
  V.forEach((v, vi) => {
    const where = `${id} v${vi + 1}`;
    if (shape(v) !== shape(V[0])) out.push(`${where}: not the same kinds of item as version 1`);
    const ids = v.map(q => q.id);
    if (new Set(ids).size !== ids.length) out.push(`${where}: an id is used twice`);
    const seen = new Set();
    v.forEach(q => {
      if (q.kind === 'watch' || q.kind === 'step') { out.push(...checkTeach(q).map(e => `${where} ${e}`)); return; }
      out.push(...checkItem(id, q).map(e => `${where} ${e}`));
      const k = factKey(q);
      if (seen.has(k)) out.push(`${where} ${q.id}: the same fact twice in one version (${q.q})`);
      seen.add(k);
      const sorted = q.choices.map(Number).sort((x, y) => x - y);
      ranks[sorted.indexOf(Number(q.answer))]++;
      if (!(window.SKILLS || {})[q.id]) out.push(`${where} ${q.id}: no skill tag`);
    });
    if (vi > 0) {
      const scored = v.filter(q => !q.kind);
      const fresh = scored.filter(q => !v1facts.has(factKey(q))).length;
      const need = id === 'AS2' ? 0.5 : 0.7;   // Make 10 has only 9 ten partners to go round
      if (fresh < scored.length * need) out.push(`${where}: only ${fresh} of ${scored.length} questions are new facts`);
    }
  });
  const n = ranks.reduce((a, b) => a + b, 0);
  ranks.forEach((r, i) => { if (r > n * 0.45) out.push(`${id}: the right answer is choice #${i + 1} in order ${r} of ${n} times`); });
  return out;
}

/* ── word cards ── */
function checkWords() {
  const out = [];
  const asked = new Set();
  IDS.forEach(id => window[`LAB_${id}_V`].flat().forEach(q => { if (!q || !q.q) return; const R = readQ(q); if (R && R.kind === 'fact') asked.add(`${R.a} ${R.op} ${R.b}`); }));
  (window.WORDS || []).forEach(w => {
    badEquations(w.ex + ' ' + w.means).forEach(e => out.push(`word ${w.key}: false equation "${e}"`));
    const re = /(\d+) ([+−]) (\d+) =/g; let m;
    while ((m = re.exec(w.ex))) if (asked.has(`${m[1]} ${m[2]} ${m[3]}`)) out.push(`word ${w.key}: its example ${m[0]} is a question a lesson asks`);
  });
  return out;
}

/* ── 10. the student's-own-facts path: every fact up to 20 a lesson takes ── */
function checkOwnFacts() {
  const out = [];
  let built = 0;
  const r = LL.rng(99);
  for (let a = 0; a <= 20; a++) for (let b = 0; b <= 20; b++) for (const op of ['+', M]) {
    const f = { op, a, b };
    IDS.forEach(id => {
      if (!LL.fits(id, f)) return;
      let q;
      try { q = LL.factItem(id, f, `${id}-M1`, r, 'own'); } catch (e) { out.push(`${id} own fact ${a} ${op} ${b}: did not build (${e.message})`); return; }
      built++;
      const item = { ...q, mine: true };
      const errs = checkItem(id, item);
      // the question may be asked as the family form; its answer must still be the fact's
      const R = readQ(item);
      const fv = op === '+' ? a + b : a - b;
      if (R && R.ans !== fv) errs.push(`asks ${item.q}, but the fact is ${a} ${op} ${b} = ${fv}`);
      errs.forEach(e => out.push(`own fact ${a} ${op} ${b} in ${e}`));
    });
  }
  return { out, built };
}

/* ── planted mistakes: each must be caught ── */
function plants() {
  const base = window.LAB_AS1.find(q => !q.kind);
  const base4 = window.LAB_AS4.find(q => !q.kind);
  const base2 = window.LAB_AS2.find(q => !q.kind && /make 10/.test(q.q));
  const base3 = window.LAB_AS3.find(q => !q.kind && /^What is 10 \+/.test(q.q)) || window.LAB_AS3.find(q => !q.kind);
  const fam = window.LAB_AS5.find(q => /So what is/.test(q.q));
  const clone = q => JSON.parse(JSON.stringify(q));
  const wrongOf = q => q.choices.find(c => c !== q.answer);
  const P = [
    ['wrong answer', 'AS1', () => { const q = clone(base); const w = wrongOf(q); q.answer = w; return q; }],
    ['choice listed twice', 'AS1', () => { const q = clone(base); q.choices[3] = q.choices[1]; return q; }],
    ['missing mistake note', 'AS1', () => { const q = clone(base); delete q.slips[wrongOf(q)]; return q; }],
    ['false equation in a note', 'AS1', () => { const q = clone(base); const w = wrongOf(q); q.slips[w].say += ' 2 + 2 = 5.'; return q; }],
    ['wrong counting list', 'AS1', () => { const q = clone(base); q.explanation = q.explanation.replace(/Count on (\d+): ([\d, ]+)\./, (m, n, l) => `Count on ${n}: ${nums(l).map(x => x + 1).join(', ')}.`); return q; }],
    ['slip label on the wrong number', 'AS1', () => { const q = clone(base); const w = wrongOf(q); q.slips[w].tag = 'Made the ten into 2 tens'; return q; }],
    ['count-on starts at the small number', 'AS1', () => { const q = clone(base); const R = readQ(q); const sm = Math.min(R.a, R.b); q.explanation = q.explanation.replace(/^Start at \d+\./, `Start at ${sm}.`); return q; }],
    ['outside the lesson (count on 5)', 'AS1', () => { const q = clone(base); q.q = 'What is 9 + 5?'; q.answer = '14'; q.choices = ['14', '13', '15', '4']; q.slips = { 13: { tag: 'Counted the start number', say: 'x' }, 15: { tag: 'Counted one too many', say: 'x' }, 4: { tag: 'Took away instead of adding', say: 'x' } }; q.fact = { op: '+', a: 9, b: 5 }; q.explanation = '9 + 5 = 14.'; return q; }],
    ['picture shows the hops', 'AS1', () => { const q = clone(base); q.pic = { line: { lo: 0, hi: 20, from: 5, jumps: 2, dir: 1 } }; return q; }],
    ['count back starts wrong', 'AS4', () => { const q = clone(base4); q.explanation = q.explanation.replace(/^Start at (\d+)\./, (m, n) => `Start at ${+n + 1}.`); return q; }],
    ['make-10 frames filled under the question', 'AS2', () => { const q = clone(base2 || window.LAB_AS2.find(x => !x.kind)); q.pic = { frames: { a: 8, b: 5, make10: true } }; return q; }],
    ['teen picture shows the answer', 'AS3', () => { const q = clone(base3); q.pic = { teen: { tens: 1, ones: 3, show: 13 } }; return q; }],
    ['fact family with a false adding fact', 'AS5', () => { const q = clone(fam); q.q = q.q.replace(/^(\d+) \+ (\d+) = (\d+)/, (m, a, b, c) => `${a} + ${b} = ${+c + 1}`); return q; }],
    ['fact tag does not match', 'AS1', () => { const q = clone(base); q.fact = { ...q.fact, a: q.fact.a + 1 }; return q; }],
    ['hint on the facts check', 'AS6', () => { const q = clone(window.LAB_AS6.find(x => !x.kind)); q.hint = 'Count on.'; return q; }]
  ];
  let caught = 0;
  const missed = [];
  P.forEach(([name, lesson, make]) => {
    const errs = checkItem(lesson, make());
    if (errs.length) caught++; else missed.push(name);
  });
  // lesson-level plants
  const saveV = window.LAB_AS1_V;
  const vClone = saveV.map(v => v.map(q => JSON.parse(JSON.stringify(q))));
  const lv = [
    ['same fact twice in a version', () => { const v = vClone.map(x => x.slice()); const s = v[0].filter(q => !q.kind); v[0][v[0].indexOf(s[1])] = { ...s[0], id: s[1].id }; return v; }],
    ['a version repeats version 1', () => { const v = vClone.map(x => x.slice()); v[2] = v[0].map(q => ({ ...q })); return v; }],
    ['three versions only', () => vClone.slice(0, 3)]
  ];
  lv.forEach(([name, make]) => {
    const v = make();
    window.LAB_AS1_V = v; window.LAB_AS1 = v[0];
    const errs = checkLesson('AS1');
    if (errs.length) caught++; else missed.push(name);
  });
  window.LAB_AS1_V = saveV; window.LAB_AS1 = saveV[0];
  return { caught, total: P.length + lv.length, missed };
}

/* ── run ── */
let problems = [];
let items = 0;
IDS.forEach(id => { problems.push(...checkLesson(id)); items += window[`LAB_${id}_V`].flat().length; });
problems.push(...checkWords());
const own = checkOwnFacts();
problems.push(...own.out);
const p = plants();
problems.forEach(e => process.stdout.write('PROBLEM ' + e + '\n'));
process.stdout.write(`\nItems checked: ${items} (6 lessons × 4 versions) · own-fact items built and checked: ${own.built}\n`);
process.stdout.write(`Problems: ${problems.length}\n`);
process.stdout.write(`Planted mistakes caught: ${p.caught} of ${p.total}${p.missed.length ? ' — MISSED: ' + p.missed.join('; ') : ''}\n`);
process.exit(problems.length || p.missed.length ? 1 : 0);
