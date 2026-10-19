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
['as1', 'as2', 'as3', 'as4', 'as5', 'as6', 'mu1', 'mu2', 'mu3', 'mu4', 'mu5', 'mu6', 'mu7', 'pv1', 'pv2', 'pv3', 'pv4', 'pv5', 'pv6', 'pv7', 'pv8', 'pv9', 'ro1', 'ro2', 'ro3', 'ro4', 'ro5', 'ro6', 'words', 'skills'].forEach(f => require(path.join(ROOT, 'data', f + '.js')));
const LL = require(path.join(ROOT, 'lessons.js'));   // only for part 10 (to BUILD the student's facts); never to check
const IDS = ['AS1', 'AS2', 'AS3', 'AS4', 'AS5', 'AS6', 'MU1', 'MU2', 'MU3', 'MU4', 'MU5', 'MU6', 'MU7', 'PV1', 'PV2', 'PV3', 'PV4', 'PV5', 'PV6', 'PV7', 'PV8', 'PV9', 'RO1', 'RO2', 'RO3', 'RO4', 'RO5', 'RO6'];
const M = '−';
const nums = s => (String(s).match(/\d+/g) || []).map(Number);
const N = s => Number(String(s).replace(/,/g, ''));              // "6,250" → 6250
const F = n => Number(n).toLocaleString('en-US');
const UNIT = { ten: 10, hundred: 100, thousand: 1000 };

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
  if ((m = q.q.match(/^What number is ([\d +,]+)\?$/))) {
    const parts = m[1].split(' + ').map(N);
    return { kind: 'expanded', parts, ans: parts.reduce((a, b) => a + b, 0) };
  }
  if ((m = q.q.match(/^([\d,]+) is between which two (ten|hundred|thousand)s\?$/))) {
    const n = N(m[1]), unit = UNIT[m[2]], low = Math.floor(n / unit) * unit;
    return { kind: 'bench', n, unit, low, ans: `${F(low)} and ${F(low + unit)}` };
  }
  if ((m = q.q.match(/^What is halfway from ([\d,]+) to ([\d,]+)\?$/))) {
    const a = N(m[1]), b = N(m[2]);
    return { kind: 'halfway', low: a, high: b, unit: b - a, ans: (a + b) / 2 };
  }
  if ((m = q.q.match(/^Round ([\d,]+) to the nearest (ten|hundred|thousand)\.$/))) {
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
    case 'Compared the wrong way': { const t = R.kind === 'compare' && R.truth(pick); return !!t && !t.ok && t.rel !== 'equal to'; }
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
  if (R.op !== '×' && typeof R.ans === 'number' && !/^(PV|RO)/.test(lesson) && !within(R.ans)) return false;
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
  if (p.rline && /is between which two/.test(q.q) && !p.rline.hideEnds) return true;   // the line's two ends ARE the answer
  if (p.rline && (p.rline.arrow != null || (p.rline.half && !/halfway/.test(q.q) ? false : p.rline.half) || p.rline.bench)) return true;
  return false;
}

/* ── one scored / pre item ── */
function checkItem(lesson, q) {
  const out = [];
  const R = readQ(q);
  if (!R) { out.push(`${q.id}: question text not understood: "${q.q}"`); return out; }
  if (R.kind === 'family' && !R.stated) out.push(`${q.id}: the adding fact in the question is wrong`);
  const same = (a, b) => (typeof a === 'string' ? a === b : N(b) === a);
  if (!same(R.ans, q.answer)) out.push(`${q.id}: answer ${q.answer}, worked out ${R.ans}`);
  if (R.kind === 'value' && !R.ok) out.push(`${q.id}: the digit is not in the number exactly once`);
  if (typeof R.ans === 'number' && R.ans >= 1000 && !/,/.test(q.answer)) out.push(`${q.id}: ${q.answer} is shown without its comma`);
  if (!Array.isArray(q.choices) || q.choices.length !== 4) out.push(`${q.id}: ${q.choices && q.choices.length} choices`);
  if (new Set(q.choices).size !== q.choices.length) out.push(`${q.id}: a choice is listed twice`);
  if (!q.choices.includes(q.answer)) out.push(`${q.id}: the answer is not a choice`);
  if (q.choices.filter(c => same(R.ans, c)).length !== 1) out.push(`${q.id}: not exactly one right choice`);
  q.choices.filter(c => c !== q.answer).forEach(c => {
    if (R.kind === 'bench' ? !/^[\d,]+ and [\d,]+$/.test(c) : R.kind === 'compare' ? !R.truth(c) : !/^\d{1,3}(,\d{3})*$/.test(c)) out.push(`${q.id}: choice "${c}" is not written right`);
    const s = q.slips && q.slips[c];
    if (!s || !s.say || !s.tag) { out.push(`${q.id}: wrong choice ${c} has no mistake note`); return; }
    if (!slipFits(s.tag, R.kind === 'bench' || R.kind === 'compare' ? c : N(c), R, lesson, q)) out.push(`${q.id}: slip "${s.tag}" does not fit the pick ${c} (answer ${R.ans})`);
  });
  Object.keys(q.slips || {}).forEach(k => { if (!q.choices.includes(k)) out.push(`${q.id}: a note for ${k}, which is not a choice`); });
  badEquations(allText(q)).forEach(e => out.push(`${q.id}: false equation "${e}"`));
  badCounts(allText(q)).forEach(e => out.push(`${q.id}: wrong counting list "${e}"`));
  if (!inLimits(lesson, R, q)) out.push(`${q.id}: outside the lesson's limits: ${q.q}`);
  if (picLeaks(q)) out.push(`${q.id}: the picture under the question shows the answer`);
  if (q.kind === 'pre' && (q.pic || q.hint)) out.push(`${q.id}: Show what you know has a picture or hint`);
  if (lesson === 'AS6' && (q.pic || q.hint)) out.push(`${q.id}: the facts check has a picture or hint`);
  if (q.fact) {
    const fv = q.fact.op === '+' ? q.fact.a + q.fact.b : q.fact.op === '×' ? q.fact.a * q.fact.b : q.fact.a - q.fact.b;
    if (fv !== N(q.answer)) out.push(`${q.id}: the fact tag ${q.fact.a} ${q.fact.op} ${q.fact.b} does not give the answer`);
  } else if (!['partner', 'value', 'expanded', 'bench', 'halfway', 'round', 'compare', 'rename'].includes(R.kind)) out.push(`${q.id}: no fact tag (a miss would not reach the student's list)`);
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
  if (q.kind === 'step' && q.pic && q.pic.rline && /which two/.test(q.q) && !q.pic.rline.hideEnds) out.push(`${q.id}: the step's picture shows the benchmarks it asks for`);
  return out;
}

const factKey = q => { const R = readQ(q); return !R ? q.q : R.kind === 'compare' ? `compare:${R.a}/${R.b}` : ['value', 'expanded', 'bench', 'halfway', 'round', 'rename'].includes(R.kind) ? `${R.kind}:${q.q}` : R.op === '×' ? (R.kind === 'fact' ? `x${Math.min(R.a, R.b)}x${Math.max(R.a, R.b)}` : `${R.kind}${R.a}x${R.b}`) : R.kind === 'fact' ? (R.op === '+' ? `${Math.min(R.a, R.b)}+${Math.max(R.a, R.b)}` : `${R.a}-${R.b}`) : R.kind === 'partner' ? `p${R.p}` : `f${R.top}-${R.take}`; };

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
  const n = ranks.reduce((a, b) => a + b, 0);
  // Place value and rounding choices are named mistakes, which sit where they sit (the whole number is always bigger than
  // a digit's value; times 100's mistakes are mostly smaller), so those lessons may lean more than the facts lessons.
  const lean = /^PV/.test(id) ? 0.8 : /^RO/.test(id) ? 0.6 : 0.45;
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
  const truth = rec => {
    const u = rec.unit, low = Math.floor(rec.n / u) * u;
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
      const R = readQ(item), want = truth(rec);
      const got = R && (typeof want === 'string' ? R.ans : N(R.ans));
      if (got !== want) errs.push(`asks "${item.q}" (answer ${R && R.ans}), but the record ${LL.ownKey(rec)} needs ${want}`);
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
    ['times-as-many outside the lesson', 'MU6', () => { const q = clone(window.LAB_MU6.find(x => !x.kind)); q.q = q.q.replace(/has (\d+) times as many/, 'has 9 times as many'); return q; }]
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
process.stdout.write(`\nItems checked: ${items} (${IDS.length} lessons × 4 versions) · own-fact items built and checked: ${own.built}\n`);
process.stdout.write(`Problems: ${problems.length}\n`);
process.stdout.write(`Planted mistakes caught: ${p.caught} of ${p.total}${p.missed.length ? ' — MISSED: ' + p.missed.join('; ') : ''}\n`);
process.exit(problems.length || p.missed.length ? 1 : 0);
