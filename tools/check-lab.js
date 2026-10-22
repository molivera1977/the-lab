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
     7b. retries teach again, the same way (Marcos 10/21: "one method, new numbers") — in the lessons listed in
        RETRY_TEACH: each version's worked examples use their own facts; no worked example's fact is a question in its
        version; the teaching uses only pictures its questions use (one model, so nothing new to learn on a retry);
        the counting lists in the teaching are right
     8. the right answer is not "usually" in one place when the choices are put in order
     9. no word card's example is a fact a lesson asks
    10. the student's-own-facts path: every fact up to 20 that a lesson takes is built and passes 1–6
    11. Big Numbers (BP/BR): every line a student hears is reading grade 3 or lower (FK, scored per line like tools/fk.js)
    12. rounding (RO/BR) uses the class's method only: no "5 or more" / "the digit to the right" rule (Marcos 10/21)
    13. Big Numbers never uses the Place Value FIAB's own numbers
    14. a check's "Get N of M right" is the real pass mark (script.js PASS_PCT / FACTS_PASS_PCT, rounded up)
   Then it plants mistakes in copies of real items and must catch every one.
═══════════════════════════════════════════════════════ */
'use strict';
const path = require('path');
const ROOT = path.join(__dirname, '..');
global.window = {};
['as1', 'as2', 'as3', 'as4', 'as5', 'as6', 'mu1', 'mu2', 'mu3', 'mu4', 'mu5', 'mu6', 'mu7', 'pv1', 'pv2', 'pv3', 'pv4', 'pv5', 'pv6', 'pv7', 'pv8', 'pv9', 'ro1', 'ro2', 'ro3', 'ro4', 'ro5', 'ro6',
  'bp1', 'bp2', 'bp3', 'bp4', 'bp5', 'br1', 'br2', 'br3', 'br4', 'br5', 'words', 'skills'].forEach(f => require(path.join(ROOT, 'data', f + '.js')));
const LL = require(path.join(ROOT, 'lessons.js'));
// 14. the pass marks, read from the site itself (script.js), never typed here
const SCRIPT = require('fs').readFileSync(path.join(ROOT, 'script.js'), 'utf8');
const PASS_PCT = +(/const PASS_PCT\s*=\s*(\d+)/.exec(SCRIPT) || [])[1];
const FACTS_PCT = +(/const FACTS_PASS_PCT\s*=\s*(\d+)/.exec(SCRIPT) || [])[1];
const FACTS_IDS = new Set([...SCRIPT.matchAll(/^\s*([A-Z]{2}\d+): \{[^}\n]*facts: true/gm)].map(m => m[1]));
if (!(PASS_PCT > 0 && FACTS_PCT > 0 && FACTS_IDS.size)) throw new Error('could not read the pass marks from script.js');   // only for part 10 (to BUILD the student's facts); never to check
const BIG = ['BP1', 'BP2', 'BP3', 'BP4', 'BP5', 'BR1', 'BR2', 'BR3', 'BR4', 'BR5'];     // Big Numbers (Marcos 10/22)
const IDS = ['AS1', 'AS2', 'AS3', 'AS4', 'AS5', 'AS6', 'MU1', 'MU2', 'MU3', 'MU4', 'MU5', 'MU6', 'MU7', 'PV1', 'PV2', 'PV3', 'PV4', 'PV5', 'PV6', 'PV7', 'PV8', 'PV9', 'RO1', 'RO2', 'RO3', 'RO4', 'RO5', 'RO6', ...BIG];
const M = '−';
const nums = s => (String(s).match(/\d+/g) || []).map(Number);
const N = s => Number(String(s).replace(/,/g, ''));              // "6,250" → 6250
const F = n => Number(n).toLocaleString('en-US');
const UNIT = { ten: 10, hundred: 100, thousand: 1000, 'ten thousand': 10000, 'hundred thousand': 100000 };
const PLACE_RE = '(ten thousand|hundred thousand|ten|hundred|thousand)';
// a place word, one or many: "ones", "1 ten", "4 hundred thousands" → its place (0 ones, 1 tens, …)
const PLACE_OF_WORD = { one: 0, ones: 0, ten: 1, tens: 1, hundred: 2, hundreds: 2, thousand: 3, thousands: 3,
  'ten thousand': 4, 'ten thousands': 4, 'hundred thousand': 5, 'hundred thousands': 5 };
const SIGN = { '<': '< less than', '>': '> greater than', '=': '= equal to' };
const roundTo = (n, u) => (n % u >= u / 2 ? n - (n % u) + u : n - (n % u));
/* "4 tens + 7 thousands + 2 ones" / "60 + 5,000 + 3 + 200" / "3 thousands + 12 hundreds + 4 tens" → the parts, in the
   order listed: { v value, k count, p place, words } (null if a part is not understood) */
function readTerms(text) {
  const terms = String(text).split(' + ').map(t => {
    let m;
    if ((m = t.match(/^(\d+) (ones?|tens?|hundreds?|thousands?|ten thousands?|hundred thousands?)$/))) {
      const k = +m[1], p = PLACE_OF_WORD[m[2]];
      if ((k === 1) !== !/s$/.test(m[2]) && !(k === 1 && m[2] === 'one')) return { bad: `"${t}": one/many wrong` };
      return { v: k * 10 ** p, k, p, words: true };
    }
    if ((m = t.match(/^(\d{1,3}(?:,\d{3})*)$/))) { const v = N(m[1]), p = String(v).length - 1; return /^\d0*$/.test(String(v)) ? { v, k: Math.floor(v / 10 ** p), p, words: false } : { bad: `"${t}" is not one place` }; }
    return null;
  });
  return terms.some(t => !t) ? null : terms;
}
const termsValue = terms => terms.reduce((a, t) => a + t.v, 0);

/* ── what the question asks, read from its words ── */
function readQ(q) {
  let m;
  if ((m = q.q.match(/^What is (\d+) ([+−]) (\d+)\?$/))) {
    const a = +m[1], b = +m[3], op = m[2];
    return { kind: 'fact', op, a, b, ans: op === '+' ? a + b : a - b };
  }
  if ((m = q.q.match(/^What number and (\d+) make 10\?$/))) return { kind: 'partner', p: +m[1], ans: 10 - +m[1] };
  if ((m = q.q.match(/^In ([\d,]+), what is the value of the (\d)\?$/))) {
    const n = N(m[1]), d = +m[2], digs = String(n).split('').reverse().map(Number), p = digs.indexOf(d);
    return { kind: 'value', n, d, p, digs, ans: d * 10 ** p, ok: p >= 0 && digs.lastIndexOf(d) === p };
  }
  if (q.q === 'Which sentence is true?' && Array.isArray(q.choices)) {
    const truth = c => { const k = String(c).match(/^([\d,]+) is (greater than|less than|equal to) ([\d,]+)$/); if (!k) return null; const a = N(k[1]), b = N(k[3]); return { a, b, ok: k[2] === 'greater than' ? a > b : k[2] === 'less than' ? a < b : a === b, rel: k[2] }; };
    const ts = q.choices.map(truth);
    const right = q.choices.filter((c, i) => ts[i] && ts[i].ok);
    const nums = ts.find(Boolean);
    return { kind: 'compare', truth, a: nums && Math.max(nums.a, nums.b), b: nums && Math.min(nums.a, nums.b), ans: right.length === 1 ? right[0] : `(${right.length} true sentences)` };
  }
  if ((m = q.q.match(/^([\d,]+) is the same as how many (tens|hundreds)\?$/))) {
    const n = N(m[1]), unit = m[2] === 'tens' ? 10 : 100;
    return { kind: 'rename', n, unit, ans: n / unit };
  }
  // expanded form: "300 + 40 + 7", and (Big Numbers) parts in place words and in any order, or a count over 9 in one place
  if ((m = q.q.match(/^What number is (.+)\?$/))) {
    const terms = readTerms(m[1]);
    if (!terms || terms.some(t => t.bad)) return terms ? { kind: 'bad', why: terms.find(t => t.bad).bad } : null;
    const ans = termsValue(terms), ps = terms.map(t => t.p);
    return { kind: 'expanded', terms, parts: terms.map(t => t.v), ans, words: terms.some(t => t.words),
      regroup: terms.some(t => t.k > 9), mixed: ps.some((p, i) => i > 0 && ps[i - 1] < p), places: new Set(ps).size === ps.length };
  }
  if ((m = q.q.match(/^([\d,]+) ___ (.+)\. Which sign goes in the blank\?$/))) {
    const left = N(m[1]), terms = readTerms(m[2]);
    if (!terms || terms.some(t => t.bad)) return null;
    const right = termsValue(terms), rel = left < right ? '<' : left > right ? '>' : '=';
    return { kind: 'sign', left, right, terms, rel, ans: SIGN[rel], mixed: terms.some((t, i) => i > 0 && terms[i - 1].p < t.p) || terms.some(t => t.k > 9) };
  }
  if ((m = q.q.match(/^([\d,?]+) is (greater|less) than ([\d,]+)\. Which digit makes it true\?$/))) {
    const shown = m[1].replace(/,/g, ''), other = N(m[3]), big = m[2] === 'greater';
    if ((shown.match(/\?/g) || []).length !== 1 || shown.length !== String(other).length) return { kind: 'bad', why: 'the missing digit is not one place of a number the same size' };
    const at = shown.length - 1 - shown.indexOf('?');
    // written like every other number: commas every 3 places from the right ("4?,512")
    const one = F(Number(shown.replace('?', '1'))), withQ = one.split('');   // 1, not 0: a ? in front must keep its place
    let k = -1;
    for (let i = withQ.length - 1, pl = 0; i >= 0; i--) { if (withQ[i] === ',') continue; if (pl === at) k = i; pl++; }
    withQ[k] = '?';
    if (withQ.join('') !== m[1]) return { kind: 'bad', why: `"${m[1]}" is not written with its commas (${withQ.join('')})` };
    const fill = c => Number(shown.replace('?', String(c)));
    const works = c => /^\d$/.test(String(c)) && !(at === shown.length - 1 && +c === 0) && (big ? fill(c) > other : fill(c) < other);
    const right = (q.choices || []).filter(works);
    return { kind: 'digit', shown, other, big, at, x: Number(String(other).split('').reverse()[at]), fill, ans: right.length === 1 ? right[0] : `(${right.length} digits work)` };
  }
  if ((m = q.q.match(new RegExp(`^Which number rounds to ([\\d,]+)\\? Round to the nearest ${PLACE_RE}\\.$`)))) {
    const target = N(m[1]), unit = UNIT[m[2]];
    const right = (q.choices || []).filter(c => roundTo(N(c), unit) === target);
    return { kind: 'roundsTo', target, unit, ans: right.length === 1 ? N(right[0]) : `(${right.length} round to it)` };
  }
  if ((m = q.q.match(new RegExp(`^([\\d,]+) is between which two ${PLACE_RE}s\\?$`))) ||
      (m = q.q.match(new RegExp(`^([\\d,]+) is between which two benchmarks\\? Count by ${PLACE_RE}s\\.$`)))) {
    const n = N(m[1]), unit = UNIT[m[2]], low = Math.floor(n / unit) * unit;
    return { kind: 'bench', n, unit, low, ans: `${F(low)} and ${F(low + unit)}` };
  }
  if ((m = q.q.match(/^What is halfway from ([\d,]+) to ([\d,]+)\?$/))) {
    const a = N(m[1]), b = N(m[2]);
    return { kind: 'halfway', low: a, high: b, unit: b - a, ans: (a + b) / 2 };
  }
  if ((m = q.q.match(new RegExp(`^Round ([\\d,]+) to the nearest ${PLACE_RE}\\.$`)))) {
    const n = N(m[1]), unit = UNIT[m[2]], low = Math.floor(n / unit) * unit, half = low + unit / 2;
    return { kind: 'round', n, unit, low, high: low + unit, half, ans: n >= half ? low + unit : low };
  }
  if ((m = q.q.match(/^What is (\d+) × (\d+)\?$/))) return { kind: 'fact', op: '×', a: +m[1], b: +m[2], ans: +m[1] * +m[2] };
  if ((m = q.q.match(/^There are (\d+) groups\. Each group has (\d+)\. How many in all\?$/))) return { kind: 'groups', op: '×', a: +m[1], b: +m[2], ans: +m[1] * +m[2] };
  if ((m = q.q.match(/^An array has (\d+) rows\. Each row has (\d+) dots\. How many dots in all\?$/))) return { kind: 'array', op: '×', a: +m[1], b: +m[2], ans: +m[1] * +m[2] };
  if ((m = q.q.match(/^(\w+) has (\d+) (\w+)\. (\w+) has (\d+) times as many \3 as \1\. How many \3 does \4 have\?$/))) return { kind: 'times', op: '×', a: +m[5], b: +m[2], ans: +m[5] * +m[2] };
  if ((m = q.q.match(/^(\d+) \+ (\d+) = (\d+)\. So what is (\d+) − (\d+)\?$/))) {
    const a = +m[1], b = +m[2], c = +m[3];
    return { kind: 'family', a, b, c, top: +m[4], take: +m[5], ans: +m[4] - +m[5], stated: a + b === c };
  }
  return null;
}

/* ── every "x + y = z" / "x − y = z" in a text must be true ── */
function badEquations(text) {
  const bad = [];
  const re = /(?:^|[^\d+−×,] ?)(\d[\d,]*(?: [+−×] \d[\d,]*)+) = (\d[\d,]*)/g;
  let m;
  while ((m = re.exec(text))) {
    const toks = m[1].split(' ').map(t => t.replace(/,/g, ''));
    let v;
    if (toks.includes('×')) v = toks.filter((_, i) => i % 2 === 0).reduce((p, x) => p * +x, 1);
    else { v = +toks[0]; for (let i = 1; i < toks.length; i += 2) v = toks[i] === '+' ? v + +toks[i + 1] : v - +toks[i + 1]; }
    if (v !== N(m[2])) bad.push(`${m[1]} = ${m[2]}`);
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
  // the worked examples' wording: a start, then "Count on 3 more. Say 9, 10, 11." / "Count back 3. Say …" / "Count up to 15. Say …"
  const teachStart = /Start at (?:the (?:big|bigger|small) number, )?(\d+)\.([^]*?)Say ([\d, ]+)\./g;
  while ((m = teachStart.exec(text))) {
    const start = +m[1], between = m[2], list = nums(m[3]);
    const dir = /Count back/.test(between) ? -1 : 1;
    const want = Array.from({ length: list.length }, (_, i) => start + dir * (i + 1));
    const n = (/Count (?:on|back) (\d+)/.exec(between) || [])[1];
    const upTo = (/Count up to (\d+)/.exec(between) || [])[1];
    if (JSON.stringify(list) !== JSON.stringify(want) || (n && +n !== list.length) || (upTo && list[list.length - 1] !== +upTo)) bad.push(m[0].replace(/\s+/g, ' '));
  }
  const sk = /Count by (\d+)s, (\d+) times: ([\d, ]+)\./g;
  while ((m = sk.exec(text))) {
    const k = +m[1], n = +m[2], list = nums(m[3]);
    if (JSON.stringify(list) !== JSON.stringify(Array.from({ length: n }, (_, i) => (i + 1) * k))) bad.push(m[0]);
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
    case 'Gave the digit, not its value': return R.kind === 'value' && pick === R.d;
    case 'One place too far left': return R.kind === 'value' && pick === R.d * 10 ** (R.p + 1);
    case 'Two places too far left': return R.kind === 'value' && pick === R.d * 10 ** (R.p + 2);
    case 'One place too far right': return R.kind === 'value' && pick === R.d * 10 ** (R.p - 1);
    case 'Gave the whole number': return R.kind === 'value' && pick === R.n;
    case 'Left out a zero': return R.kind === 'expanded' && /0/.test(String(R.ans)) && String(pick) === String(R.ans).replace(/0/g, '');
    case 'Put a part in the wrong place': { if (R.kind !== 'expanded') return false; const last = R.parts[R.parts.length - 1]; return pick === R.ans - last + last * 10; }
    case 'Swapped the last two places': return R.kind === 'expanded' && String(pick) === String(R.ans).slice(0, -2) + String(R.ans).slice(-1) + String(R.ans).slice(-2, -1);
    case 'Added the digits': return R.kind === 'expanded' && pick === String(R.ans).split('').reduce((a, b) => a + +b, 0);
    case 'Biggest place off by one': return R.kind === 'expanded' && Math.abs(pick - R.ans) === 10 ** (String(R.ans).length - 1);
    case 'Compared the wrong way': {
      if (R.kind === 'sign') return R.rel !== '=' && pick !== SIGN['='] && pick !== R.ans && Object.values(SIGN).includes(pick);
      const t = R.kind === 'compare' && R.truth(pick); return !!t && !t.ok && t.rel !== 'equal to';
    }
    // Big Numbers
    case 'Wrote the parts in the order listed': return R.kind === 'expanded' && !!R.terms && pick === Number(R.terms.map(t => t.k).join(''));
    case 'Wrote a count in one place': {
      if (R.kind !== 'expanded' || !R.terms) return false;
      const top = Math.max(...R.terms.map(t => t.p)), at = p => (R.terms.find(t => t.p === p) || { k: 0 }).k;
      return pick === Number(Array.from({ length: top + 1 }, (_, i) => String(at(top - i))).join(''));
    }
    case 'Did not trade': return R.kind === 'expanded' && !!R.terms && R.regroup && pick === R.terms.reduce((a, t) => a + (t.k % 10) * 10 ** t.p, 0);
    case 'Added the counts': return R.kind === 'expanded' && !!R.terms && pick === R.terms.reduce((a, t) => a + t.k, 0);
    case 'Traded to the wrong place': {
      const big = R.kind === 'expanded' && R.terms && R.terms.find(t => t.k > 9);
      if (!big) return false;
      const k = Math.floor(big.k / 10);
      return pick === R.ans - k * 10 ** (big.p + 1) + k * 10 ** (big.p + 2);
    }
    case 'Gave only the count': return R.kind === 'expanded' && !!R.terms && R.terms.length === 1 && pick === R.terms[0].k;
    case 'One zero too few': return R.kind === 'expanded' && pick * 10 === R.ans;
    case 'Called them equal': return R.kind === 'sign' && R.rel !== '=' && pick === SIGN['='];
    case 'Missed that they are equal': return R.kind === 'sign' && R.rel === '=' && pick !== SIGN['='] && Object.values(SIGN).includes(pick);
    case 'Made the numbers equal': return R.kind === 'digit' && pick === R.x;
    case 'Made it less': return R.kind === 'digit' && R.big && R.fill(pick) < R.other;
    case 'Made it greater': return R.kind === 'digit' && !R.big && R.fill(pick) > R.other;
    case 'Halfway of a smaller place': return R.kind === 'halfway' && R.unit >= 10000 && pick === R.low + R.unit / 20;
    case 'Before halfway: rounds down': return R.kind === 'roundsTo' && roundTo(pick, R.unit) !== R.target && pick % R.unit < R.unit / 2;
    case 'Past halfway: rounds up': return R.kind === 'roundsTo' && roundTo(pick, R.unit) !== R.target && pick % R.unit > R.unit / 2;
    case 'Halfway rounds up': return R.kind === 'roundsTo' && roundTo(pick, R.unit) !== R.target && pick % R.unit === R.unit / 2;
    case 'Said the numbers are equal': { const t = R.kind === 'compare' && R.truth(pick); return !!t && t.rel === 'equal to' && t.a !== t.b; }
    case 'Gave the same number': return R.kind === 'rename' && pick === R.n;
    case 'Counted tens instead of hundreds': return R.kind === 'rename' && R.unit === 100 && pick * 10 === R.n;
    case 'Gave only the tens digit': return R.kind === 'rename' && R.unit === 10 && pick === Math.floor(R.n / 10) % 10;
    case 'Gave only the hundreds digit': return R.kind === 'rename' && R.unit === 100 && pick === Math.floor(R.n / 100) % 10;
    case 'Wrote the numbers side by side': return R.kind === 'fact' && R.op === '×' && pick === Number(`${R.a}${R.b}`);
    case 'Counted only the hundreds': return R.kind === 'rename' && R.unit === 10 && pick === Math.floor(R.n / 100);
    case 'Counted only the thousands': return R.kind === 'rename' && R.unit === 100 && pick === Math.floor(R.n / 1000);
    case 'Added a zero instead of taking one off': return R.kind === 'rename' && pick === R.n * 10;
    case 'Two zeros instead of one': return R.op === '×' && pick === ans * 10;
    case 'One zero instead of two': return R.op === '×' && pick * 10 === ans;
    case 'Too many zeros': return R.op === '×' && pick > ans && pick % (ans * 10) === 0;
    case 'Repeated a digit': return R.op === '×' && String(pick) === String(Math.min(R.a, R.b) === 10 || Math.min(R.a, R.b) === 100 ? Math.max(R.a, R.b) : R.b).replace(/(\d)$/, '$1$1');
    case 'Left off the zeros': return R.op === '×' && (R.a === 10 || R.a === 100) && pick === R.b;
    case 'Forgot the zero': return R.op === '×' && pick * 10 === ans;
    case 'Fact off by one': return R.op === '×' && Math.abs(pick - ans) === 10;
    case 'Used the wrong place': {
      if (R.kind !== 'bench') return false;
      return [R.unit / 10, R.unit * 10].filter(u => u >= 10).some(u => { const l = Math.floor(R.n / u) * u; return pick === `${F(l)} and ${F(l + u)}`; });
    }
    case 'One benchmark too low':
      if (R.kind === 'bench') return pick === `${F(R.low - R.unit)} and ${F(R.low)}`;
      return R.kind === 'round' && pick === R.low - R.unit;
    case 'One benchmark too high':
      if (R.kind === 'bench') return pick === `${F(R.low + R.unit)} and ${F(R.low + 2 * R.unit)}`;
      return R.kind === 'round' && pick === R.low + 2 * R.unit;
    case 'Missed the middle': return R.kind === 'halfway' && Math.abs(pick - R.ans) === R.unit / 10;
    case 'Halfway of the wrong place': return R.kind === 'halfway' && pick === R.low + 5;
    case 'Gave a benchmark': return R.kind === 'halfway' && (pick === R.low || pick === R.high);
    case 'Rounded down instead of up': return R.kind === 'round' && R.ans === R.high && pick === R.low;
    case 'Rounded up instead of down': return R.kind === 'round' && R.ans === R.low && pick === R.high;
    case 'Rounded to the wrong place': return R.kind === 'round' && [R.unit / 10, R.unit * 10].some(u => u >= 10 && pick === Math.round(R.n / u) * u);
    case 'Did not round': return R.kind === 'round' && pick === R.n;
    case 'Added the two numbers': case 'Added rows and columns': case 'Added instead of multiplying': case 'Added instead of times as many':
      return R.op === '×' && pick === R.a + R.b;
    case 'Counted one group too few': return R.kind === 'groups' && pick === ans - R.b;
    case 'Counted one group too many': return R.kind === 'groups' && pick === ans + R.b;
    case 'Missed a row': return R.kind === 'array' && pick === ans - R.b;
    case 'Counted an extra row': return R.kind === 'array' && pick === ans + R.b;
    case 'Missed a column': return R.kind === 'array' && pick === ans - R.a;
    case 'Counted an extra column': return R.kind === 'array' && pick === ans + R.a;
    case 'Skip count one too few': return R.op === '×' && (pick === ans - R.b || pick === ans - R.a);
    case 'Skip count one too many': return R.op === '×' && (pick === ans + R.b || pick === ans + R.a);
    case 'Gave the smaller amount': return R.kind === 'times' && pick === R.b;
    case 'One group too few': return R.op === '×' && (pick === ans - Math.max(R.a, R.b) || pick === ans - R.b);
    case 'One group too many': return R.op === '×' && (pick === ans + Math.max(R.a, R.b) || pick === ans + R.b);
    case 'Off by a group': return R.op === '×' && Math.abs(d) === Math.min(R.a, R.b);
    case 'Groups count off by one': case 'Skip count off by a little': case 'Off by one':
      return d !== 0 && Math.abs(d) <= 4;
    default: return false;
  }
}

/* ── the lesson's limits ── */
function inLimits(lesson, R, q) {
  if (q.mine) return true;                 // a student's own fact is whatever they missed (checked by part 10)
  const within = n => n >= 0 && n <= 20;
  if (R.op !== '×' && typeof R.ans === 'number' && !/^(PV|RO|BP|BR)/.test(lesson) && !within(R.ans)) return false;
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
    case 'MU1': return R.kind === 'groups' && R.a >= 2 && R.a <= 6 && R.b >= 2 && R.b <= 6;
    case 'MU2': return R.kind === 'array' && R.a >= 2 && R.a <= 6 && R.b >= 2 && R.b <= 6;
    case 'MU3': return R.kind === 'fact' && R.op === '×' && [2, 5, 10].includes(R.b) && R.a >= 2 && R.a <= 10;
    case 'MU4': return R.kind === 'fact' && R.op === '×' && [2, 5, 10].includes(R.b) && R.a >= 1 && R.a <= 10;
    case 'MU5': return R.kind === 'fact' && R.op === '×' && [3, 4].includes(R.b) && R.a >= 1 && R.a <= 10;
    case 'MU6': return R.kind === 'times' && R.a >= 2 && R.a <= 5 && R.b >= 2 && R.b <= 9;
    case 'MU7': return R.kind === 'fact' && R.op === '×' && [2, 3, 4, 5, 10].includes(R.b) && R.a >= 2 && R.a <= 10;
    case 'PV1': return R.kind === 'value' && R.n >= 100 && R.n <= 999 && R.p >= 1;
    case 'PV2': return R.kind === 'expanded' && R.ans >= 100 && R.ans <= 999;
    case 'PV3': return R.kind === 'value' && R.n >= 1000 && R.n <= 9999 && R.p >= 1;
    case 'PV4': return R.kind === 'compare' && R.a >= 1000 && R.a <= 9999 && R.b >= 1000;
    case 'PV5': return R.kind === 'rename' && R.n % R.unit === 0 && R.ans >= 2;
    case 'PV6': return R.kind === 'fact' && R.a === 10 && R.b >= 2 && R.b <= 99;
    case 'PV7': return R.kind === 'fact' && R.a === 100 && R.b >= 2 && R.b <= 49;
    case 'PV8': return R.kind === 'fact' && R.a >= 2 && R.a <= 9 && R.b % 10 === 0 && R.b >= 20 && R.b <= 90;
    case 'PV9': return ['PV2', 'PV3', 'PV4', 'PV5', 'PV6', 'PV7', 'PV8'].some(id => inLimits(id, R, q));
    case 'RO1': return R.kind === 'bench';
    case 'RO2': return R.kind === 'halfway' && [10, 100].includes(R.unit);
    case 'RO3': return R.kind === 'round' && R.unit === 10;
    case 'RO4': return R.kind === 'round' && R.unit === 100;
    case 'RO5': case 'RO6': return R.kind === 'round' || R.kind === 'bench';
    // Big Numbers: 5- and 6-digit numbers; parts in a mixed order; one place over 9; any form compared; any place rounded
    case 'BP1': return R.kind === 'value' && R.n >= 10000 && R.n <= 999999 && R.p >= 2;
    case 'BP2': return R.kind === 'expanded' && !!R.terms && !R.regroup && R.mixed && R.places && R.terms.length >= 3 && R.ans >= 1000 && R.ans <= 999999;
    case 'BP3': return R.kind === 'expanded' && !!R.terms && R.regroup && R.places && R.terms.filter(t => t.k > 9).length === 1 && R.terms.every(t => t.k <= 99) && R.ans >= 1000;
    case 'BP4': return (R.kind === 'sign' && R.left >= 1000 && R.mixed && String(R.left).length === String(R.right).length) || (R.kind === 'digit' && R.other >= 10000);
    case 'BP5': return ['BP1', 'BP2', 'BP3', 'BP4'].some(id => inLimits(id, R, q));
    case 'BR1': return (R.kind === 'bench' && R.unit >= 1000 && R.n >= 10000) || (R.kind === 'halfway' && R.unit >= 1000 && R.low >= 10000);
    case 'BR2': return R.kind === 'round' && [1000, 10000].includes(R.unit) && R.n >= 10000;
    case 'BR3': return R.kind === 'round' && [100, 1000, 10000, 100000].includes(R.unit) && R.n >= 10000;
    case 'BR4': return R.kind === 'roundsTo' && [1000, 10000].includes(R.unit) && R.target >= 10000;
    case 'BR5': return ['BR1', 'BR2', 'BR3', 'BR4'].some(id => inLimits(id, R, q));
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
  if ((p.groups && p.groups.show != null) || (p.array && p.array.show != null) || (p.bars && p.bars.show != null)) return true;
  if ((p.places && p.places.mark != null) || (p.shift && p.shift.show != null)) return true;
  if (p.places && p.places.trade) return true;                                                       // the traded row is the answer
  if (p.places && /Which digit makes it true/.test(q.q) && !/\?/.test(String(p.places.n))) return true;   // the chart must keep the ?
  if (p.rline && /is between which two/.test(q.q) && !p.rline.hideEnds) return true;   // the line's two ends ARE the answer
  if (p.rline && (p.rline.arrow != null || (p.rline.half && !/halfway/.test(q.q) ? false : p.rline.half) || p.rline.bench)) return true;
  return false;
}

/* ── 11. reading level of one line a student hears (the same formula as tools/fk.js, one line at a time) ── */
function fkOf(line) {
  const syl = w => { w = w.toLowerCase().replace(/[^a-z]/g, ''); if (!w) return 0; if (w.length <= 3) return 1;
    w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, ''); const m = w.match(/[aeiouy]{1,2}/g); return m ? m.length : 1; };
  const t = String(line).replace(/\b(Mr|Mrs|Ms|Dr|St)\./g, '$1');
  const s = Math.max(1, t.split(/[.!?…]+/).filter(x => /[A-Za-z]/.test(x)).length);
  const words = t.split(/\s+/).filter(x => /[A-Za-z0-9]/.test(x));
  if (!words.length) return 0;
  return 0.39 * (words.length / s) + 11.8 * (words.reduce((a, x) => a + syl(x), 0) / words.length) - 15.59;
}
const FK_MAX = 3;
const kidLines = q => [q.title, ...(q.text ? q.text.split('\n') : []), q.q, q.hint, q.explanation, ...Object.values(q.slips || {}).map(x => x.say)].filter(Boolean);
const tooHard = q => kidLines(q).filter(l => fkOf(l) > FK_MAX).map(l => `FK ${fkOf(l).toFixed(1)}: "${l}"`);
/* ── 12. the class's rounding method only (Marcos 10/21: no digit rule) ── */
const DIGIT_RULE = /\b(5|five) or more\b|\b(4|four) or less\b|digit to the right|next digit|look next door|underline the|circle the digit/i;
const digitRule = q => kidLines(q).filter(l => DIGIT_RULE.test(l));
/* ── 13. the FIAB's own numbers (practice test sources/grade4_math_place_value_fiab_blueprint.md) ── */
const FIAB_NUMS = new Set([53894, 31902, 32304, 31499, 68215, 24285, 23516, 24740, 787347, 67737, 9057, 9507, 3156, 2060, 2006, 5931, 2401, 1534, 1901, 2657]);
const FIAB_TARGETS = /rounds to (32,000|24,000|68,000|53,900|790,000)\b/;
const fiabNums = q => {
  const text = [...kidLines(q), ...(q.choices || []), q.answer].join(' ');
  return [...new Set((text.match(/\d{1,3}(?:,\d{3})+|\d{4,}/g) || []).map(N).filter(n => FIAB_NUMS.has(n)))].concat(FIAB_TARGETS.test(text) ? [FIAB_TARGETS.exec(text)[1]] : []);
};
function bigRules(lesson, q) {
  const out = [];
  if (BIG.includes(lesson)) {
    tooHard(q).forEach(e => out.push(`${q.id}: reads above grade 3 (${e})`));
    fiabNums(q).forEach(n => out.push(`${q.id}: uses the FIAB's own number ${n}`));
  }
  if (/^(RO|BR)/.test(lesson)) digitRule(q).forEach(l => out.push(`${q.id}: the digit rule, not the class method: "${l}"`));
  // "which two hundred thousands" is heard as 200,000s: that place says "benchmarks" instead
  kidLines(q).filter(l => /two hundred thousands/i.test(l)).forEach(l => out.push(`${q.id}: "two hundred thousands" sounds like 200,000s: "${l}"`));
  return out;
}
/* every "4 tens + 7 thousands + 2 ones = 7,042" in a text must be true */
function badPlaceEquations(text) {
  const bad = [];
  const re = /((?:\d[\d,]* (?:ones?|tens?|hundreds?|thousands?|ten thousands?|hundred thousands?)|\d[\d,]*)(?: \+ (?:\d[\d,]* (?:ones?|tens?|hundreds?|thousands?|ten thousands?|hundred thousands?)|\d[\d,]*))*) = ([\d,]+)/g;
  let m;
  while ((m = re.exec(text))) {
    if (!/[a-z]/.test(m[1])) continue;                      // plain numbers: badEquations checks those
    const terms = readTerms(m[1]);
    if (!terms || terms.some(t => t.bad) || termsValue(terms) !== N(m[2])) bad.push(`${m[1]} = ${m[2]}`);
  }
  return bad;
}

/* ── one scored / pre item ── */
function checkItem(lesson, q) {
  const out = [];
  const R = readQ(q);
  if (!R) { out.push(`${q.id}: question text not understood: "${q.q}"`); return out; }
  if (R.kind === 'bad') { out.push(`${q.id}: ${R.why}: "${q.q}"`); return out; }
  if (R.kind === 'family' && !R.stated) out.push(`${q.id}: the adding fact in the question is wrong`);
  const same = (a, b) => (typeof a === 'string' ? a === b : N(b) === a);
  if (!same(R.ans, q.answer)) out.push(`${q.id}: answer ${q.answer}, worked out ${R.ans}`);
  if (R.kind === 'value' && !R.ok) out.push(`${q.id}: the digit is not in the number exactly once`);
  if (typeof R.ans === 'number' && R.ans >= 1000 && !/,/.test(q.answer)) out.push(`${q.id}: ${q.answer} is shown without its comma`);
  // a sign question has the three signs, always in the same order (like the FIAB); every other question has 4 choices
  if (R.kind === 'sign') { if (JSON.stringify(q.choices) !== JSON.stringify([SIGN['<'], SIGN['>'], SIGN['=']])) out.push(`${q.id}: the sign choices are not < > = in order`); if (!q.signs) out.push(`${q.id}: a sign question not marked to keep its order`); }
  else if (!Array.isArray(q.choices) || q.choices.length !== 4) out.push(`${q.id}: ${q.choices && q.choices.length} choices`);
  if (new Set(q.choices).size !== q.choices.length) out.push(`${q.id}: a choice is listed twice`);
  if (!q.choices.includes(q.answer)) out.push(`${q.id}: the answer is not a choice`);
  if (q.choices.filter(c => same(R.ans, c)).length !== 1) out.push(`${q.id}: not exactly one right choice`);
  q.choices.filter(c => c !== q.answer).forEach(c => {
    if (R.kind === 'sign' ? !Object.values(SIGN).includes(c) : R.kind === 'digit' ? !/^\d$/.test(c) : R.kind === 'bench' ? !/^[\d,]+ and [\d,]+$/.test(c) : R.kind === 'compare' ? !R.truth(c) : !/^\d{1,3}(,\d{3})*$/.test(c)) out.push(`${q.id}: choice "${c}" is not written right`);
    const s = q.slips && q.slips[c];
    if (!s || !s.say || !s.tag) { out.push(`${q.id}: wrong choice ${c} has no mistake note`); return; }
    if (!slipFits(s.tag, R.kind === 'bench' || R.kind === 'compare' || R.kind === 'sign' ? c : N(c), R, lesson, q)) out.push(`${q.id}: slip "${s.tag}" does not fit the pick ${c} (answer ${R.ans})`);
  });
  Object.keys(q.slips || {}).forEach(k => { if (!q.choices.includes(k)) out.push(`${q.id}: a note for ${k}, which is not a choice`); });
  badEquations(allText(q)).forEach(e => out.push(`${q.id}: false equation "${e}"`));
  badPlaceEquations(allText(q)).forEach(e => out.push(`${q.id}: false equation "${e}"`));
  badCounts(allText(q)).forEach(e => out.push(`${q.id}: wrong counting list "${e}"`));
  out.push(...bigRules(lesson, q));
  if (!inLimits(lesson, R, q)) out.push(`${q.id}: outside the lesson's limits: ${q.q}`);
  if (picLeaks(q)) out.push(`${q.id}: the picture under the question shows the answer`);
  if (q.kind === 'pre' && (q.pic || q.hint)) out.push(`${q.id}: Show what you know has a picture or hint`);
  if (/^(AS6|BP5|BR5)$/.test(lesson) && (q.pic || q.hint)) out.push(`${q.id}: the check has a picture or hint`);
  // a Big Numbers miss must reach the student's list: every question carries its typed record
  if (BIG.includes(lesson) && !(q.mistake && q.mistake.type)) out.push(`${q.id}: no mistake record (a miss would not come back)`);
  if (q.fact) {
    const fv = q.fact.op === '+' ? q.fact.a + q.fact.b : q.fact.op === '×' ? q.fact.a * q.fact.b : q.fact.a - q.fact.b;
    if (fv !== N(q.answer)) out.push(`${q.id}: the fact tag ${q.fact.a} ${q.fact.op} ${q.fact.b} does not give the answer`);
  } else if (!['partner', 'value', 'expanded', 'bench', 'halfway', 'round', 'compare', 'rename', 'sign', 'digit', 'roundsTo'].includes(R.kind)) out.push(`${q.id}: no fact tag (a miss would not reach the student's list)`);
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
function checkTeach(q, lesson) {
  const out = [];
  badEquations(allText(q)).forEach(e => out.push(`${q.id}: false equation "${e}"`));
  badPlaceEquations(allText(q)).forEach(e => out.push(`${q.id}: false equation "${e}"`));
  out.push(...bigRules(lesson, q));
  // 14. a check's pass number (the real one, from script.js)
  const g = q.kind === 'watch' && /Get (\d+) of (\d+) right/.exec(q.text || '');
  if (g) { const want = Math.ceil((FACTS_IDS.has(lesson) ? FACTS_PCT : PASS_PCT) / 100 * +g[2]); if (+g[1] !== want) out.push(`${q.id}: says "Get ${g[1]} of ${g[2]}", but the pass is ${want} of ${g[2]}`); }
  badCounts(allText(q)).forEach(e => out.push(`${q.id}: wrong counting list "${e}"`));
  if (q.kind === 'step') {
    if (!q.choices.includes(q.answer)) out.push(`${q.id}: step answer not a choice`);
    if (new Set(q.choices).size !== q.choices.length) out.push(`${q.id}: step choice listed twice`);
    q.choices.filter(c => c !== q.answer).forEach(c => { if (!q.slips[c]) out.push(`${q.id}: step choice ${c} has no note`); });
  }
  if (q.kind === 'watch' && !q.text) out.push(`${q.id}: worked example with no words`);
  if (q.kind === 'step' && q.pic && q.pic.rline && /which two/.test(q.q) && !q.pic.rline.hideEnds) out.push(`${q.id}: the step's picture shows the benchmarks it asks for`);
  // a "before or past halfway?" step: its answer worked out from its own words (a number right at halfway is "right at halfway")
  if (q.kind === 'step' && /before or past halfway\?$/.test(q.q)) {
    let h, n, m2;
    if ((m2 = /Halfway is ([\d,]+)\. Is ([\d,]+) before or past halfway\?$/.exec(q.q))) { h = N(m2[1]); n = N(m2[2]); }
    else if ((m2 = /Look at ([\d,]+)\. Halfway is ([\d,]+)\. Is it before or past halfway\?$/.exec(q.q))) { n = N(m2[1]); h = N(m2[2]); }
    const want = n == null ? null : n === h ? 'right at halfway' : n > h ? 'past halfway' : 'before halfway';
    if (!want) out.push(`${q.id}: a before-or-past step the checker cannot read: "${q.q}"`);
    else if (q.answer !== want) out.push(`${q.id}: ${F(n)} with halfway ${F(h)} is "${want}", not "${q.answer}"`);
  }
  return out;
}

const factKey = q => { const R = readQ(q); return !R ? q.q : R.kind === 'compare' ? `compare:${R.a}/${R.b}` : ['value', 'expanded', 'bench', 'halfway', 'round', 'rename', 'sign', 'digit', 'roundsTo'].includes(R.kind) ? `${R.kind}:${q.q}` : R.op === '×' ? (R.kind === 'fact' ? `x${Math.min(R.a, R.b)}x${Math.max(R.a, R.b)}` : `${R.kind}${R.a}x${R.b}`) : R.kind === 'fact' ? (R.op === '+' ? `${Math.min(R.a, R.b)}+${Math.max(R.a, R.b)}` : `${R.a}-${R.b}`) : R.kind === 'partner' ? `p${R.p}` : `f${R.top}-${R.take}`; };

/* ── 7b. retries teach again, the same way (Marcos 10/21: "switch to one method, new numbers") ── */
const RETRY_TEACH = ['AS1', 'AS2', 'AS3', 'AS4', 'AS5', 'BP1', 'BP2', 'BP3', 'BP4', 'BR1', 'BR2', 'BR3', 'BR4'];
// Big Numbers teach with numbers, not facts: a number a student works with (46,382 — not a benchmark like 40,000)
const NUM_TEACH = new Set(['BP1', 'BP2', 'BP3', 'BP4', 'BR1', 'BR2', 'BR3', 'BR4']);
const workNums = s => (String(s).match(/\d{1,3}(?:,\d{3})+|\d{4,}/g) || []).map(N).filter(n => n % 100 !== 0).map(n => `n${n}`);
const isTeach = q => q.kind === 'watch' || q.kind === 'step';
const isNewWay = q => q.kind === 'watch' && /-W0$/.test(q.id);
// what a teaching item is about: the first "a + b" / "a − b" / "a × b" in its words — and every way a question could ask it
function teachKeys(q, id) {
  if (NUM_TEACH.has(id)) return workNums(q.kind === 'watch' ? q.text : `${q.q} ${q.answer}`);
  const m = /(\d+) ([+−×]) (\d+)/.exec(q.kind === 'watch' ? q.text : q.q);
  if (!m) return [];
  const [a, op, b] = [+m[1], m[2], +m[3]];
  if (op === '×') return [`x${Math.min(a, b)}x${Math.max(a, b)}`];
  if (op === '−') return [`${a}-${b}`, `f${a}-${b}`];
  return [`${Math.min(a, b)}+${Math.max(a, b)}`, `f${a + b}-${a}`, `f${a + b}-${b}`, ...(a + b === 10 ? [`p${a}`, `p${b}`] : [])];
}
const picKinds = q => [q.pic, q.explain].filter(Boolean).flatMap(p => Object.keys(p));
function checkRetryTeach(id, V) {
  const out = [];
  V.forEach((v, vi) => { if (v.some(isNewWay)) out.push(`${id} v${vi + 1}: a "new way" screen (one method only)`); });
  if (!RETRY_TEACH.includes(id)) return out;
  const firstWatch = v => v.find(q => q.kind === 'watch' && /-W[1-9]\d*$/.test(q.id));
  V.forEach((v, vi) => {
    const where = `${id} v${vi + 1}`, teach = v.filter(isTeach), asked = v.filter(q => !isTeach(q));
    // no worked example is a question in its own version
    const keys = new Set(NUM_TEACH.has(id) ? asked.flatMap(q => workNums(`${q.q} ${q.answer}`)) : asked.map(factKey));
    teach.forEach(q => teachKeys(q, id).forEach(k => { if (keys.has(k)) out.push(`${where} ${q.id}: the worked example's fact (${k}) is also a question in this version`); }));
    // one model: the teaching shows only pictures the questions show
    const qPics = new Set(asked.flatMap(picKinds));
    teach.forEach(q => picKinds(q).forEach(k => { if (!qPics.has(k)) out.push(`${where} ${q.id}: teaches with a picture (${k}) its questions do not use`); }));
  });
  // a new worked example every version, and new steps too
  const fw = V.map(v => teachKeys(firstWatch(v) || {}, id).join('|'));
  if (new Set(fw).size !== 4) out.push(`${id}: the worked examples repeat across versions (${fw.join(' / ')})`);
  const stepsOf = v => v.filter(q => q.kind === 'step').map(q => q.q).join('|');
  if (new Set(V.map(stepsOf)).size !== 4) out.push(`${id}: the steps repeat across versions`);
  return out;
}

function checkLesson(id) {
  const out = [];
  const V = window[`LAB_${id}_V`];
  if (!Array.isArray(V) || V.length !== 4) return [`${id}: expected 4 versions, found ${V && V.length}`];
  if (V[0] !== window[`LAB_${id}`]) out.push(`${id}: version 1 is not LAB_${id}`);
  const shape = v => v.filter(q => !isTeach(q)).map(q => q.kind || 'q').join(',');
  const tshape = v => v.filter(isTeach).map(q => q.id.replace(/^[A-Z]+\d+-/, '')).join(',');   // every version teaches with the same items
  const ranks = [0, 0, 0, 0];
  const v1facts = new Set(V[0].filter(q => !q.kind).map(factKey));
  V.forEach((v, vi) => {
    const where = `${id} v${vi + 1}`;
    if (shape(v) !== shape(V[0])) out.push(`${where}: not the same kinds of item as version 1`);
    const ids = v.map(q => q.id);
    if (new Set(ids).size !== ids.length) out.push(`${where}: an id is used twice`);
    const seen = new Set();
    v.forEach(q => {
      if (q.kind === 'watch' || q.kind === 'step') { out.push(...checkTeach(q, id).map(e => `${where} ${e}`)); return; }
      out.push(...checkItem(id, q).map(e => `${where} ${e}`));
      const k = factKey(q);
      if (seen.has(k)) out.push(`${where} ${q.id}: the same fact twice in one version (${q.q})`);
      seen.add(k);
      if (!/ and | than | equal /.test(q.answer)) {
        const sorted = q.choices.map(N).sort((x, y) => x - y);
        ranks[sorted.indexOf(N(q.answer))]++;
      }
      if (!(window.SKILLS || {})[q.id]) out.push(`${where} ${q.id}: no skill tag`);
    });
    if (vi > 0) {
      const scored = v.filter(q => !q.kind);
      const fresh = scored.filter(q => !v1facts.has(factKey(q))).length;
      // Make 10 has only 9 ten partners to go round. The multiplication facts lessons draw from small sets (the 3s
      // and 4s are 19 facts), so a retry repeats some facts by nature; it still gets a different set and order.
      const need = id === 'AS2' ? 0.5 : /^(MU[3457]|PV[567])$/.test(id) ? 0.3 : /^(MU|PV|RO)/.test(id) ? 0.5 : 0.7;
      if (fresh < scored.length * need) out.push(`${where}: only ${fresh} of ${scored.length} questions are new facts`);
    }
  });
  out.push(...checkRetryTeach(id, V));
  V.forEach((v, vi) => { if (tshape(v) !== tshape(V[0])) out.push(`${id} v${vi + 1}: not the same teaching items as version 1`); });
  const n = ranks.reduce((a, b) => a + b, 0);
  // Place value and rounding choices are named mistakes, which sit where they sit (the whole number is always bigger than
  // a digit's value; times 100's mistakes are mostly smaller), so those lessons may lean more than the facts lessons.
  const lean = /^(PV|BP)/.test(id) ? 0.8 : /^(RO|BR)/.test(id) ? 0.6 : 0.45;
  ranks.forEach((r, i) => { if (r > n * lean) out.push(`${id}: the right answer is choice #${i + 1} in order ${r} of ${n} times`); });
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
  for (let a = 0; a <= 20; a++) for (let b = 0; b <= 20; b++) for (const op of ['+', M, '×']) {
    const f = { op, a, b };
    IDS.forEach(id => {
      if (!LL.fitsOwn(id, f)) return;
      let q;
      try { q = LL.ownItem(id, f, `${id}-M1`, r, 'own'); } catch (e) { out.push(`${id} own fact ${a} ${op} ${b}: did not build (${e.message})`); return; }
      built++;
      const item = { ...q, mine: true };
      const errs = checkItem(id, item);
      // the question may be asked as the family form; its answer must still be the fact's
      const R = readQ(item);
      const fv = op === '+' ? a + b : op === '×' ? a * b : a - b;
      if (R && R.ans !== fv) errs.push(`asks ${item.q}, but the fact is ${a} ${op} ${b} = ${fv}`);
      errs.forEach(e => out.push(`own fact ${a} ${op} ${b} in ${e}`));
    });
  }
  // typed records: their place value and rounding misses ("R 6284/100"). Each is built in every lesson that takes it,
  // passes 1–6, and asks about THAT number — worked out here again from the words.
  const recs = [];
  [123, 407, 958, 1234, 6284, 7051, 30465, 254613].forEach(n => String(n).split('').forEach((d, i, arr) => { const p = arr.length - 1 - i; if (p >= 1) recs.push({ type: 'V', n, p }); }));
  [304, 572, 6284, 9050, 41207].forEach(n => recs.push({ type: 'E', n }));
  [[6284, 6248], [5419, 4519], [720, 702], [3001, 2999]].forEach(([n, m]) => recs.push({ type: 'C', n, m }));
  [[340, 10], [1270, 10], [4500, 100], [9900, 100], [3000, 100]].forEach(([n, unit]) => recs.push({ type: 'N', n, unit }));
  [[46, 10], [6284, 100], [418, 100], [3742, 1000], [6284, 10], [68750, 1000], [68750, 100]].forEach(([n, unit]) => recs.push({ type: 'B', n, unit }));
  [[45, 10], [650, 100], [6250, 100], [3500, 1000], [68500, 1000]].forEach(([n, unit]) => recs.push({ type: 'H', n, unit }));
  [[46, 10], [32, 10], [350, 100], [6284, 100], [6284, 1000], [3742, 1000], [95, 10], [9950, 100], [68750, 1000], [81642, 100]].forEach(([n, unit]) => recs.push({ type: 'R', n, unit }));
  // Big Numbers records: 5- and 6-digit numbers, the ten and hundred thousands
  [[46382, 4], [46382, 2], [254613, 5], [254613, 3]].forEach(([n, p]) => recs.push({ type: 'V', n, p }));
  [7042, 40506, 123405, 50147, 9310].forEach(n => recs.push({ type: 'E', n }));
  [[46382, 43682], [9750, 9570]].forEach(([n, m]) => recs.push({ type: 'C', n, m }));
  [[4200, 100], [27000, 1000], [4500, 100]].forEach(([n, unit]) => recs.push({ type: 'N', n, unit }));
  [[46382, 1000], [46382, 10000], [254613, 100000]].forEach(([n, unit]) => recs.push({ type: 'B', n, unit }));
  [[45000, 10000], [46500, 1000], [250000, 100000]].forEach(([n, unit]) => recs.push({ type: 'H', n, unit }));
  [[46382, 1000], [46382, 10000], [254613, 100000], [46382, 100]].forEach(([n, unit]) => recs.push({ type: 'R', n, unit }));
  const relSign = (a, b) => SIGN[a < b ? '<' : a > b ? '>' : '='];
  const truth = (rec, id) => {
    const u = rec.unit, low = Math.floor(rec.n / u) * u;
    // Big Numbers asks some records another way: a compare as a sign question, a rename as "What number is 42 hundreds?"
    if (/^BP[45]$/.test(id) && rec.type === 'C') return relSign(rec.n, rec.m);
    if (id === 'BP4' && rec.type === 'E') return SIGN['='];
    if (/^BP[35]$/.test(id) && rec.type === 'N') return rec.n;
    switch (rec.type) {
      case 'V': return Number(String(rec.n).split('').reverse()[rec.p]) * 10 ** rec.p;
      case 'E': return rec.n;
      case 'C': return `${rec.n.toLocaleString('en-US')} is greater than ${rec.m.toLocaleString('en-US')}`;
      case 'N': return rec.n / u;
      case 'B': return `${low.toLocaleString('en-US')} and ${(low + u).toLocaleString('en-US')}`;
      case 'H': return low + u / 2;
      case 'R': return rec.n - low >= u / 2 ? low + u : low;
    }
  };
  let typed = 0;
  const lessonsTaking = {};
  recs.forEach(rec => {
    const takers = IDS.filter(id => LL.fitsOwn(id, rec));
    lessonsTaking[rec.type] = (lessonsTaking[rec.type] || 0) + takers.length;
    takers.forEach(id => {
      let q;
      try { q = LL.ownItem(id, rec, `${id}-M1`, r, 'own'); } catch (e) { out.push(`${id} own ${LL.ownKey(rec)}: did not build (${e.message})`); return; }
      typed++;
      const item = { ...q, mine: true };
      const errs = checkItem(id, item);
      const R = readQ(item), want = truth(rec, id);
      const got = R && (typeof want === 'string' ? R.ans : N(R.ans));
      if (got !== want) errs.push(`asks "${item.q}" (answer ${R && R.ans}), but the record ${LL.ownKey(rec)} needs ${want}`);
      // a sign question about a record must be about THAT record's numbers
      if (R && R.kind === 'sign' && (R.left !== rec.n || R.right !== (rec.type === 'C' ? rec.m : rec.n))) errs.push(`asks "${item.q}", not about the record ${LL.ownKey(rec)}`);
      if (!item.mistake || LL.ownKey(item.mistake) !== LL.ownKey(rec)) errs.push(`the item is not tagged with its record ${LL.ownKey(rec)}`);
      errs.forEach(e => out.push(`own ${LL.ownKey(rec)} in ${e}`));
    });
  });
  ['V', 'E', 'C', 'N', 'B', 'H', 'R'].forEach(t => { if (!lessonsTaking[t]) out.push(`no lesson takes a typed record of type ${t}`); });
  built += typed;
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
    ['hint on the facts check', 'AS6', () => { const q = clone(window.LAB_AS6.find(x => !x.kind)); q.hint = 'Count on.'; return q; }],
    ['wrong product', 'MU4', () => { const q = clone(window.LAB_MU4.find(x => !x.kind)); q.answer = q.choices.find(c => c !== q.answer); return q; }],
    ['"added the numbers" on the wrong pick', 'MU1', () => { const q = clone(window.LAB_MU1.find(x => !x.kind)); const w = q.choices.find(c => c !== q.answer && q.slips[c].tag !== 'Added the two numbers'); q.slips[w].tag = 'Added the two numbers'; return q; }],
    ['group picture shows the total', 'MU1', () => { const q = clone(window.LAB_MU1.find(x => !x.kind)); q.pic = { groups: { ...q.pic.groups, show: +q.answer } }; return q; }],
    ['wrong skip-count list', 'MU3', () => { const q = clone(window.LAB_MU3.find(x => !x.kind)); q.explanation = q.explanation.replace(/: ([\d, ]+)\./, (m, l) => `: ${nums(l).map(x => x + 1).join(', ')}.`); return q; }],
    ['false adding chain', 'MU1', () => { const q = clone(window.LAB_MU1.find(x => !x.kind)); q.explanation = q.explanation.replace(/ = (\d+)\. So/, (m, v) => ` = ${+v + 1}. So`); return q; }],
    ['place value: the digit marked right', 'PV1', () => { const q = clone(window.LAB_PV1.find(x => !x.kind)); const R = readQ(q); q.answer = String(R.d); if (!q.choices.includes(q.answer)) q.choices[3] = q.answer; return q; }],
    ['expanded form: the zero dropped in the answer', 'PV2', () => { const q = clone(window.LAB_PV2_V.flat().find(x => !x.kind && /^\d0\d$/.test(x.answer))); q.answer = String(N(q.answer)).replace(/^(\d)0(\d)$/, '$1$2'); return q; }],
    ['rounding: rounded the wrong way', 'RO3', () => { const q = clone(window.LAB_RO3.find(x => !x.kind)); const R = readQ(q); q.answer = String(R.ans === R.high ? R.low : R.high); return q; }],
    ['rounding: the arrow shows under the question', 'RO4', () => { const q = clone(window.LAB_RO4.find(x => !x.kind)); q.pic = { rline: { ...q.pic.rline, arrow: N(q.answer) } }; return q; }],
    ['benchmark question shows the ends', 'RO1', () => { const q = clone(window.LAB_RO1.find(x => !x.kind)); q.pic = { rline: { ...q.pic.rline, hideEnds: false } }; return q; }],
    ['halfway in the wrong place', 'RO2', () => { const q = clone(window.LAB_RO2.find(x => !x.kind)); const R = readQ(q); q.answer = String(R.low + R.unit / 10 * 4); if (!q.choices.includes(q.answer)) q.choices[3] = q.answer; return q; }],
    ['a 4-digit answer without its comma', 'PV3', () => { const q = clone(window.LAB_PV3.find(x => !x.kind)); const plain = String(N(q.answer)); q.choices = q.choices.map(c => (c === q.answer ? plain : c)); q.answer = plain; return q; }],
    ['compare: two true sentences', 'PV4', () => { const q = clone(window.LAB_PV4.find(x => !x.kind)); const w = wrongOf(q); const t = q.answer.replace(/ is greater than | is less than /, m => m); q.choices[q.choices.indexOf(w)] = t.replace(/^([\d,]+) is (greater|less) than ([\d,]+)$/, (m, a, rel, b) => `${b} is ${rel === 'greater' ? 'less' : 'greater'} than ${a}`); return q; }],
    ['compare: "wrong way" label on the equal choice', 'PV4', () => { const q = clone(window.LAB_PV4_V.flat().find(x => !x.kind && Object.values(x.slips).some(s => s.tag === 'Said the numbers are equal'))); const w = Object.keys(q.slips).find(k => q.slips[k].tag === 'Said the numbers are equal'); q.slips[w].tag = 'Compared the wrong way'; return q; }],
    ['rename: a decimal choice', 'PV5', () => { const q = clone(window.LAB_PV5.find(x => !x.kind)); const w = wrongOf(q); q.choices[q.choices.indexOf(w)] = '7.5'; q.slips['7.5'] = q.slips[w]; delete q.slips[w]; return q; }],
    ['rename: hundreds asked, tens answered', 'PV5', () => { const q = clone(window.LAB_PV5_V.flat().find(x => !x.kind && / hundreds\?$/.test(x.q))); const R = readQ(q); q.answer = String(R.n / 10); if (!q.choices.includes(q.answer)) q.choices[3] = q.answer; return q; }],
    ['times 10 in the times 100 lesson', 'PV7', () => { const q = clone(window.LAB_PV6.find(x => !x.kind)); return q; }],
    ['times-as-many outside the lesson', 'MU6', () => { const q = clone(window.LAB_MU6.find(x => !x.kind)); q.q = q.q.replace(/has (\d+) times as many/, 'has 9 times as many'); return q; }],
    // Big Numbers
    ...bigPlants(clone, wrongOf)
  ];
  let caught = 0;
  const missed = [];
  const why = (name, errs) => { if (process.env.PLANTS) process.stdout.write(`  plant "${name}" → ${(process.env.PLANTS === 'all' ? errs.join(' ;; ') : errs[0]) || 'MISSED'}\n`); };   // PLANTS=1: what caught each one
  P.forEach(([name, lesson, make]) => {
    const errs = checkItem(lesson, make());
    why(name, errs);
    if (errs.length) caught++; else missed.push(name);
  });
  // lesson-level plants
  const saveV = window.LAB_AS1_V;
  const vClone = saveV.map(v => v.map(q => JSON.parse(JSON.stringify(q))));
  const lv = [
    ['same fact twice in a version', () => { const v = vClone.map(x => x.slice()); const s = v[0].filter(q => !q.kind); v[0][v[0].indexOf(s[1])] = { ...s[0], id: s[1].id }; return v; }],
    ['a version repeats version 1', () => { const v = vClone.map(x => x.slice()); v[2] = v[0].map(q => ({ ...q })); return v; }],
    ['three versions only', () => vClone.slice(0, 3)],
    // 7b. retries teach again
    ['a retry teaches the same worked example as try 1', () => { const v = vClone.map(x => x.slice()); v[2] = v[2].map(q => (isTeach(q) ? { ...v[0].find(t => t.id === q.id) } : q)); return v; }],
    ['a worked example on a picture its questions do not use', () => { const v = vClone.map(x => x.slice()); const w = v[1].findIndex(q => q.kind === 'watch'); v[1][w] = { ...v[1][w], pic: { frames: { a: 6, b: 3 } } }; return v; }],
    ['a "new way" screen on a retry', () => { const v = vClone.map(x => x.slice()); v[1] = [{ id: 'AS1-W0', kind: 'watch', skill: 'Count on to add', title: 'A new way', text: 'You are trying this lesson again.' }, ...v[1]]; return v; }],
    ['a worked example asked as a question', () => {
      const v = vClone.map(x => x.slice()); const q = v[0].find(x => !x.kind); const R = readQ(q); const w = v[0].findIndex(x => x.kind === 'watch');
      v[0][w] = { ...v[0][w], text: `${R.a} + ${R.b} = ${R.a + R.b}.` }; return v; }],
    ['a wrong counting list in a worked example', () => { const v = vClone.map(x => x.slice()); const w = v[0].findIndex(x => x.kind === 'watch'); v[0][w] = { ...v[0][w], text: v[0][w].text.replace(/Say (\d+), /, (s, n) => `Say ${+n + 1}, `) }; return v; }]
  ];
  lv.forEach(([name, make]) => {
    const v = make();
    window.LAB_AS1_V = v; window.LAB_AS1 = v[0];
    const errs = checkLesson('AS1');
    if (errs.length) caught++; else missed.push(name);
  });
  window.LAB_AS1_V = saveV; window.LAB_AS1 = saveV[0];
  // lesson-level plants in any lesson: edit a copy of its 4 versions, check it, put the real one back
  const lessonPlant = (id, edit) => {
    const save = window[`LAB_${id}_V`], v = save.map(x => x.map(q => JSON.parse(JSON.stringify(q))));
    edit(v); window[`LAB_${id}_V`] = v; window[`LAB_${id}`] = v[0];
    const errs = checkLesson(id);
    window[`LAB_${id}_V`] = save; window[`LAB_${id}`] = save[0];
    return errs;
  };
  const scoredOf = v => v.filter(q => !q.kind);
  const lv2 = [
    ['14. PV9 says "Get 14 of 20" (the pass is 15)', 'PV9', v => v.forEach(x => { const w = x.find(q => q.kind === 'watch'); w.text = w.text.replace(/Get \d+ of 20/, 'Get 14 of 20'); })],
    ['14. BR5 says "Get 14 of 20"', 'BR5', v => { const w = v[1].find(q => q.kind === 'watch'); w.text = w.text.replace(/Get \d+ of 20/, 'Get 14 of 20'); }],
    ['7b. BR2: a retry teaches the same worked example as try 1', 'BR2', v => { v[2] = v[2].map(q => (isTeach(q) ? JSON.parse(JSON.stringify(v[0].find(t => t.id === q.id))) : q)); }],
    ['7b. BP2: a worked example\'s number is a question in its version', 'BP2', v => { const q = scoredOf(v[0]).find(x => N(x.answer) % 100); const w = v[0].find(x => x.kind === 'watch'); w.text += `\nLook at ${q.answer}.`; }],
    ['7b. BR2: a worked example on a picture its questions do not use', 'BR2', v => { const w = v[3].find(q => q.kind === 'watch'); w.pic = { places: { n: 12345 } }; }],
    ['11. BP3: a worked example line above grade 3', 'BP3', v => { const w = v[0].find(q => q.kind === 'watch'); w.text += '\nConsequently, regrouping establishes equivalent representations.'; }],
    ['BR3: a step says "past halfway" for a number right at halfway', 'BR3', v => { const st = v[0].find(q => q.kind === 'step' && /before or past halfway\?$/.test(q.q)); const h = /Halfway is ([\d,]+)\./.exec(st.q)[1]; st.q = `Halfway is ${h}. Is ${h} before or past halfway?`; st.answer = 'past halfway'; if (!st.choices.includes('past halfway')) st.choices[0] = 'past halfway'; }],
    ['BR4: a before-or-past step with the wrong answer', 'BR4', v => { const st = v[1].find(q => q.kind === 'step' && /before or past halfway\?$/.test(q.q)); const other = st.choices.find(c => c !== st.answer); st.answer = other; }],
    ['12. BR3: the digit rule in a worked example', 'BR3', v => { const w = v[0].find(q => q.kind === 'watch'); w.text += '\nLook at the digit to the right. 5 or more rounds up.'; }]
  ];
  lv2.forEach(([name, id, edit]) => { const errs = lessonPlant(id, edit); why(name, errs); if (errs.length) caught++; else missed.push(name); });
  return { caught, total: P.length + lv.length + lv2.length, missed };
}

/* Big Numbers item plants: each is one real item with one mistake put in */
function bigPlants(clone, wrongOf) {
  const all = id => window[`LAB_${id}_V`].flat().filter(q => q && !q.kind && q.q);
  const find = (id, test) => clone(all(id).find(test));
  const slipKey = (q, tag) => Object.keys(q.slips).find(k => q.slips[k].tag === tag);
  const mark = (q, choice) => { q.answer = choice; return q; };
  const r = LL.rng(7);
  return [
    ['big: parts read in the order listed, marked right', 'BP2', () => { const q = find('BP2', x => slipKey(x, 'Wrote the parts in the order listed')); return mark(q, slipKey(q, 'Wrote the parts in the order listed')); }],
    ['big: parts in place order (nothing mixed up)', 'BP2', () => { const q = find('BP2', () => true); const t = /^What number is (.+)\?$/.exec(q.q)[1].split(' + '); const v = x => termsValue(readTerms(x)); q.q = `What number is ${t.sort((a, b) => v(b) - v(a)).join(' + ')}?`; return q; }],
    ['big: a false place-word equation', 'BP2', () => { const q = find('BP2', x => /thousands? \+|\+ \d+ (ones?|tens?)/.test(x.q) && /[a-z] = /.test(x.explanation)); q.explanation = q.explanation.replace(/= ([\d,]+)\.$/, (m, n) => `= ${F(N(n) + 1)}.`); return q; }],
    ['big: the trade shows under the question', 'BP3', () => { const q = find('BP3', x => x.pic); q.pic = { places: { ...q.pic.places, trade: true, n: N(q.answer) } }; return q; }],
    ['big: "Did not trade" on the side-by-side pick', 'BP3', () => { const q = find('BP3', x => slipKey(x, 'Wrote a count in one place')); q.slips[slipKey(q, 'Wrote a count in one place')].tag = 'Did not trade'; return q; }],
    ['big: the side-by-side number marked right', 'BP3', () => { const q = find('BP3', x => slipKey(x, 'Wrote a count in one place')); return mark(q, slipKey(q, 'Wrote a count in one place')); }],
    ['big: a sign question says equal when it is not', 'BP4', () => { const q = find('BP4', x => x.signs && x.answer !== SIGN['=']); return mark(q, SIGN['=']); }],
    ['big: the sign choices out of order', 'BP4', () => { const q = find('BP4', x => x.signs); q.choices = q.choices.slice().reverse(); return q; }],
    ['big: a fourth choice on a sign question', 'BP4', () => { const q = find('BP4', x => x.signs); q.choices = [...q.choices, '≠ not equal to']; q.slips['≠ not equal to'] = { tag: 'Compared the wrong way', say: 'x' }; return q; }],
    ['big: a sign question that would shuffle its choices', 'BP4', () => { const q = find('BP4', x => x.signs); delete q.signs; return q; }],
    ['big: two digits make the missing digit true', 'BP4', () => {
      const works = x => { const R = readQ(x), lead = R.at === R.shown.length - 1; return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(d => !(lead && d === 0) && (R.big ? R.fill(d) > R.other : R.fill(d) < R.other)).length; };
      const q = find('BP4', x => /Which digit makes it true/.test(x.q) && works(x) >= 2); const R = readQ(q);
      const lead = R.at === R.shown.length - 1;
      const extra = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].find(d => String(d) !== q.answer && !q.choices.includes(String(d)) && !(lead && d === 0) && (R.big ? R.fill(d) > R.other : R.fill(d) < R.other));
      if (extra == null) throw new Error('plant: no second digit that works');
      const w = wrongOf(q); q.choices[q.choices.indexOf(w)] = String(extra); q.slips[String(extra)] = q.slips[w]; delete q.slips[w]; return q; }],
    ['big: a missing-digit number without its comma', 'BP4', () => { const q = find('BP4', x => /Which digit makes it true/.test(x.q)); q.q = q.q.replace(/^([\d,?]+)/, t => t.replace(/,/g, '')); return q; }],
    ['big: the missing-digit chart shows the filled number', 'BP4', () => { const q = find('BP4', x => /Which digit makes it true/.test(x.q) && x.pic); q.pic = { places: { n: N(q.explain.places.n), n2: q.pic.places.n2 } }; return q; }],
    ['big: "Halfway of a smaller place" on a middle miss', 'BR1', () => { const q = find('BR1', x => /^What is halfway/.test(x.q) && slipKey(x, 'Missed the middle')); q.slips[slipKey(q, 'Missed the middle')].tag = 'Halfway of a smaller place'; return q; }],
    ['big: ten thousands rounded the wrong way', 'BR2', () => { const q = find('BR2', x => /ten thousand\.$/.test(x.q)); const R = readQ(q); return mark(q, F(R.ans === R.high ? R.low : R.high)); }],
    ['big: two choices round to the target', 'BR4', () => { const q = find('BR4', () => true); const R = readQ(q); const twin = F(R.target + 1); const w = wrongOf(q); q.choices[q.choices.indexOf(w)] = twin; q.slips[twin] = q.slips[w]; delete q.slips[w]; return q; }],
    ['big: "Halfway rounds up" on a number not at halfway', 'BR4', () => { const q = find('BR4', x => slipKey(x, 'Before halfway: rounds down')); q.slips[slipKey(q, 'Before halfway: rounds down')].tag = 'Halfway rounds up'; return q; }],
    ['big: the arrow under a rounds-to question', 'BR4', () => { const q = find('BR4', x => x.explain); q.pic = { rline: { ...q.explain.rline } }; return q; }],
    ['big: no mistake record (a miss would not come back)', 'BP1', () => { const q = find('BP1', () => true); delete q.mistake; return q; }],
    ['big: a hint on the Big Numbers check', 'BP5', () => { const q = find('BP5', () => true); q.hint = 'Count the places.'; return q; }],
    ['11. a question line above grade 3', 'BP1', () => { const q = find('BP1', x => x.hint); q.hint = 'Consequently, the positional location determines magnitude.'; return q; }],
    ['12. the digit rule in a rounding note', 'BR2', () => { const q = find('BR2', () => true); const w = wrongOf(q); q.slips[w].say += ' Look at the digit to the right. 5 or more rounds up.'; return q; }],
    ['big: "two hundred thousands" in a question', 'BR1', () => { const q = find('BR1', x => /benchmarks\? Count by hundred thousands/.test(x.q)); q.q = q.q.replace(/ is between which two benchmarks\? Count by hundred thousands\./, ' is between which two hundred thousands?'); return q; }],
    ['13. a FIAB number in a question', 'BR3', () => LL.roundQ('BR3-Q99', [53894, 100], { pre: false, skill: 'Round to any place', r })],
    ['13. a FIAB rounds-to target', 'BR4', () => LL.roundsToQ('BR4-Q99', [32000, 1000], { pre: false, skill: 'Which number rounds to it', r })]
  ];
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
process.stdout.write(`\nItems checked: ${items} (${IDS.length} lessons × 4 versions) · own-fact items built and checked: ${own.built}\n`);
process.stdout.write(`Problems: ${problems.length}\n`);
process.stdout.write(`Planted mistakes caught: ${p.caught} of ${p.total}${p.missed.length ? ' — MISSED: ' + p.missed.join('; ') : ''}\n`);
process.exit(problems.length || p.missed.length ? 1 : 0);
