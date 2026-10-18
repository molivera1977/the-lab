/* ═══════════════════════════════════════════════════════
   THE LAB · lessons.js — the lessons and the question builders
   Used in TWO places, so a question is built the same way in both:
     - tools/gen-lab.js (Node) builds each lesson's questions and its 4 versions into data/
     - the site (browser) builds a student's OWN missed facts into the lesson they are on
       (Marcos 10/17: "incorporate the known areas of weakness" — the regular questions stay,
       the student's missed facts are added)
   NOTHING IS TYPED: every answer, wrong choice and mistake note is worked out here from the
   two numbers. Each wrong choice stands for one slip, and its note names that slip with the
   problem's own numbers.
═══════════════════════════════════════════════════════ */
(function (root) {
'use strict';
const MINUS = '−';

/* ── seeded random (mulberry32), so a rebuild gives the same questions ── */
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const seedOf = text => [...text].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) >>> 0, 7);
const shuffled = (arr, r) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};
const range = (lo, hi) => Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
const seqUp = (from, n) => range(from + 1, from + n).join(', ');
const seqDown = (from, n) => range(from - n, from - 1).reverse().join(', ');
const add = (a, b) => `${a} + ${b}`;
const sub = (a, b) => `${a} ${MINUS} ${b}`;

/* A scored question (or a 'pre' one) from a right answer and its wrong choices.
   wrongs = [{ v, tag, say, keep }] — every `keep` slip is used (the slip this lesson teaches against);
   the rest are drawn at random, so the right answer is not always in the same place when the four
   choices are put in order (a child could learn "the second smallest is right"). tools/check-lab.js checks it. */
function question(base, answer, wrongs, r) {
  // candidates: the builder's slips, then plain "a little off" ones (used only to balance the order)
  const near = [3, -3, 4, -4].map(d => ({ v: answer + d, tag: 'Off by a little', say: `Count again. ${base.explanation}` }));
  const seen = new Set([String(answer)]);
  const cands = [];
  [...wrongs, ...near].forEach(w => { if (w.v >= 0 && !seen.has(String(w.v))) { seen.add(String(w.v)); cands.push(w); } });
  // Where the right answer falls when the four choices are put in order: picked at random, then the wrong
  // choices are chosen to fit it — so no place (smallest, second, …) is "usually right".
  const target = Math.floor(r() * 4);
  const combos = [];
  for (let i = 0; i < cands.length; i++) for (let j = i + 1; j < cands.length; j++) for (let k = j + 1; k < cands.length; k++) {
    const set = [cands[i], cands[j], cands[k]];
    const rank = set.filter(w => w.v < answer).length;
    const keeps = set.filter(w => w.keep).length;
    const nears = set.filter(w => w.tag === 'Off by a little').length;
    combos.push({ set, rank, score: keeps * 10 - nears * 3 + r() });
  }
  if (!combos.length) throw new Error(`${base.id}: fewer than 3 wrong choices for ${base.q}`);
  const best = [0, 1, 2, 3].map(d => combos.filter(c => Math.abs(c.rank - target) === d)).find(list => list.length)
    .sort((x, y) => y.score - x.score)[0];
  const picked = shuffled(best.set, r);
  const slips = {};
  picked.forEach(w => { slips[String(w.v)] = { tag: w.tag, say: w.say }; });
  return { ...base, choices: [String(answer), ...picked.map(w => String(w.v))], answer: String(answer), slips };
}

/* ═══ FACT POOLS + QUESTION BUILDERS, one per kind of question ═══ */

/* COUNT ON: one number is 1, 2 or 3; start at the bigger one. */
function countOnPool() {
  const out = [];
  for (let s = 1; s <= 3; s++) for (let big = 4; big + s <= 20; big++) { out.push([big, s]); out.push([s, big]); }
  return out;
}
function countOnQ(id, [a, b], { pre, skill, r }) {
  const big = Math.max(a, b), s = Math.min(a, b), ans = a + b, seq = seqUp(big, s);
  const tail = `${add(a, b)} = ${ans}.`;
  return question({
    id, skill, fact: { op: '+', a, b }, q: `What is ${add(a, b)}?`,
    ...(pre ? { kind: 'pre' } : {
      hint: `Start at the bigger number, ${big}. Count on ${s} more.`,
      pic: { line: { lo: 0, hi: 20 } },
      explain: { line: { lo: 0, hi: 20, from: big, jumps: s, dir: 1 } }
    }),
    explanation: `Start at ${big}. Count on ${s}: ${seq}. ${tail}`
  }, ans, [
    { v: ans - 1, keep: true, tag: 'Counted the start number', say: `You counted the ${big} again. Start at ${big}. Do not count the ${big}. Count on ${s}: ${seq}. ${tail}` },
    { v: ans - 2, tag: 'Counted too few', say: `You counted too few. Start at ${big}. Count on ${s}: ${seq}. ${tail}` },
    { v: ans + 1, tag: 'Counted one too many', say: `You counted one number too many. Start at ${big}. Count on ${s}: ${seq}. Stop there. ${tail}` },
    { v: big - s, tag: 'Took away instead of adding', say: `You took away. The plus sign means add. Start at ${big}. Count on ${s}: ${seq}. ${tail}` },
    { v: ans + 2, tag: 'Counted too many', say: `You counted too many. Start at ${big}. Count on ${s}: ${seq}. Stop there. ${tail}` }
  ], r);
}

/* COUNT BACK: take away 1, 2 or 3. */
function countBackPool() {
  const out = [];
  for (let s = 1; s <= 3; s++) for (let big = 5; big <= 20; big++) out.push([big, s]);
  return out;
}
function countBackQ(id, [big, s], { pre, skill, r }) {
  const ans = big - s, seq = seqDown(big, s), tail = `${sub(big, s)} = ${ans}.`;
  return question({
    id, skill, fact: { op: MINUS, a: big, b: s }, q: `What is ${sub(big, s)}?`,
    ...(pre ? { kind: 'pre' } : {
      hint: `Start at ${big}. Count back ${s}.`,
      pic: { line: { lo: 0, hi: 20 } },
      explain: { line: { lo: 0, hi: 20, from: big, jumps: s, dir: -1 } }
    }),
    explanation: `Start at ${big}. Count back ${s}: ${seq}. ${tail}`
  }, ans, [
    { v: ans + 2, tag: 'Counted too few', say: `You counted too few. Start at ${big}. Count back ${s}: ${seq}. ${tail}` },
    { v: ans + 1, keep: true, tag: 'Counted the start number', say: `You counted the ${big} again. Start at ${big}. Do not count the ${big}. Count back ${s}: ${seq}. ${tail}` },
    { v: ans - 1, tag: 'Counted one too many', say: `You counted one number too many. Start at ${big}. Count back ${s}: ${seq}. Stop there. ${tail}` },
    { v: big + s, tag: 'Added instead of taking away', say: `You counted up. The minus sign means take away. Start at ${big}. Count back ${s}: ${seq}. ${tail}` },
    { v: ans - 2, tag: 'Counted too many', say: `You counted too many. Start at ${big}. Count back ${s}: ${seq}. Stop there. ${tail}` }
  ], r);
}

/* TEN PARTNERS: what number and p make 10? */
function partnerQ(id, p, { pre, skill, r }) {
  const ans = 10 - p;
  return question({
    id, skill, q: `What number and ${p} make 10?`,
    ...(pre ? { kind: 'pre' } : {
      hint: `Count the empty boxes in the ten frame.`,
      pic: { frames: { a: p } },
      explain: { frames: { a: p, fill: ans } }
    }),
    explanation: `${p} and ${ans} make 10. ${add(p, ans)} = 10.`
  }, ans, [
    { v: ans - 1, tag: 'Ten partner off by one', say: `${add(p, ans - 1)} = ${p + ans - 1}, not 10. ${p} needs ${ans} more to make 10. ${add(p, ans)} = 10.` },
    { v: ans + 1, tag: 'Ten partner off by one', say: `${add(p, ans + 1)} = ${p + ans + 1}, not 10. ${p} needs ${ans} more to make 10. ${add(p, ans)} = 10.` },
    { v: p === ans ? ans + 2 : p, keep: p !== ans, tag: p === ans ? 'Ten partner off by one' : 'Picked the same number', say: p === ans
        ? `${add(p, ans + 2)} = ${p + ans + 2}, not 10. ${add(p, ans)} = 10.`
        : `${add(p, p)} = ${p + p}, not 10. ${p} needs ${ans} more to make 10. ${add(p, ans)} = 10.` },
    { v: ans - 2, tag: 'Ten partner off by one', say: `${add(p, ans - 2)} = ${p + ans - 2}, not 10. ${add(p, ans)} = 10.` },
    { v: ans + 2, tag: 'Ten partner off by one', say: `${add(p, ans + 2)} = ${p + ans + 2}, not 10. ${add(p, ans)} = 10.` }
  ], r);
}

/* MAKE 10: big is 7, 8 or 9; the sum goes past 10. */
function make10Pool() {
  const out = [];
  for (const big of [7, 8, 9]) for (let o = 11 - big; o <= big; o++) { out.push([big, o]); if (o !== big) out.push([o, big]); }
  return out.filter(([a, b]) => a + b > 10 && a + b <= 18);
}
function make10Q(id, [a, b], { pre, skill, r }) {
  const big = Math.max(a, b);
  const other = a === big ? b : a;
  const k = 10 - big, left = other - k, ans = a + b;
  const how = `${big} needs ${k} to make 10. Take ${k} from the ${other}. ${other} is ${k} and ${left}. ${add(10, left)} = ${ans}.`;
  return question({
    id, skill, fact: { op: '+', a, b }, q: `What is ${add(a, b)}?`,
    ...(pre ? { kind: 'pre' } : {
      hint: `Make 10 first. ${big} needs ${k} to make 10.`,
      pic: { frames: { a: big, b: other } },
      explain: { frames: { a: big, b: other, make10: true } }
    }),
    explanation: how
  }, ans, [
    { v: 10 + other, keep: true, tag: 'Made 10 but did not take from the other number', say: `You added 10 + ${other}. But ${big} is not 10. ${how}` },
    { v: ans - 1, tag: 'Make-10 sum off by one', say: `Count again. ${how}` },
    { v: ans + 1, tag: 'Make-10 sum off by one', say: `Count again. ${how}` },
    { v: ans + 2, tag: 'Make-10 sum off by one', say: `Count again. ${how}` },
    { v: ans - 2, tag: 'Make-10 sum off by one', say: `Count again. ${how}` }
  ], r);
}

/* TEEN NUMBERS: 10 + n, n + 10, 1x + y, 1x − y, 1x − 10 (no crossing ten). */
function teenPool() {
  const out = [];
  for (let n = 1; n <= 9; n++) { out.push(['ten', 10, n]); out.push(['tenB', n, 10]); out.push(['minus10', 10 + n, 10]); }
  for (let x = 1; x <= 8; x++) for (let y = 1; x + y <= 9; y++) out.push(['plus', 10 + x, y]);
  for (let x = 2; x <= 9; x++) for (let y = 1; y < x; y++) out.push(['minus', 10 + x, y]);
  return out;
}
function teenQ(id, [kind, a, b], { pre, skill, r }) {
  const sign = kind === 'minus' || kind === 'minus10' ? MINUS : '+';
  const ans = sign === '+' ? a + b : a - b;
  const expr = sign === '+' ? add(a, b) : sub(a, b);
  const tail = `${expr} = ${ans}.`;
  let hint, why, wrongs, pic, explain;
  if (kind === 'ten' || kind === 'tenB') {
    const n = kind === 'ten' ? b : a;
    hint = `10 is 1 ten. Write 1 ten and ${n} ones.`;
    why = `10 is 1 ten. ${expr} is 1 ten and ${n} ones: ${ans}.`;
    pic = { teen: { tens: 1, ones: n } };
    explain = { teen: { tens: 1, ones: n, show: ans } };
    wrongs = [
      { v: 20 + n, keep: true, tag: 'Made the ten into 2 tens', say: `That is 2 tens. 10 is only 1 ten. ${expr} is 1 ten and ${n} ones: ${ans}.` },
      { v: n + 1, tag: 'Used 10 as 1', say: `You added 1, not 10. 10 is 1 ten. ${expr} is 1 ten and ${n} ones: ${ans}.` },
      { v: ans + 1, tag: 'Teen number off by one', say: `Look at the ones. There are ${n} ones. ${expr} is 1 ten and ${n} ones: ${ans}.` },
      { v: ans - 1, tag: 'Teen number off by one', say: `Look at the ones. There are ${n} ones. ${expr} is 1 ten and ${n} ones: ${ans}.` },
      { v: ans + 2, tag: 'Teen number off by one', say: `Look at the ones. There are ${n} ones. ${expr} is 1 ten and ${n} ones: ${ans}.` },
      { v: ans - 2, tag: 'Teen number off by one', say: `Look at the ones. There are ${n} ones. ${expr} is 1 ten and ${n} ones: ${ans}.` }
    ];
  } else if (kind === 'plus') {
    const x = a - 10, y = b, ones = x + y;
    hint = `${a} is 10 and ${x}. Add the ones.`;
    why = `${a} is 10 and ${x}. Add the ones: ${add(x, y)} = ${ones}. The ten stays. ${tail}`;
    pic = { teen: { tens: 1, ones: x, more: y } };
    explain = { teen: { tens: 1, ones: x, more: y, show: ans } };
    wrongs = [
      { v: ans + 10, keep: true, tag: 'Added another ten', say: `You added another ten. The ten stays 1 ten. Add the ones: ${add(x, y)} = ${ones}. ${tail}` },
      { v: ones, tag: 'Dropped the ten', say: `You forgot the ten. ${a} is 10 and ${x}. Add the ones: ${add(x, y)} = ${ones}. Keep the ten. ${tail}` },
      { v: ans + 1, tag: 'Ones added wrong', say: `Add the ones again: ${add(x, y)} = ${ones}. The ten stays. ${tail}` },
      { v: ans - 1, tag: 'Ones added wrong', say: `Add the ones again: ${add(x, y)} = ${ones}. The ten stays. ${tail}` },
      { v: ans + 2, tag: 'Ones added wrong', say: `Add the ones again: ${add(x, y)} = ${ones}. The ten stays. ${tail}` },
      { v: ans - 2, tag: 'Ones added wrong', say: `Add the ones again: ${add(x, y)} = ${ones}. The ten stays. ${tail}` }
    ];
  } else if (kind === 'minus') {
    const x = a - 10, y = b, ones = x - y;
    hint = `${a} is 10 and ${x}. Take from the ones.`;
    why = `${a} is 10 and ${x}. Take from the ones: ${sub(x, y)} = ${ones}. The ten stays. ${tail}`;
    pic = { teen: { tens: 1, ones: x, away: y } };
    explain = { teen: { tens: 1, ones: x, away: y, show: ans } };
    wrongs = [
      { v: ones, keep: true, tag: 'Dropped the ten', say: `You forgot the ten. ${a} is 10 and ${x}. Take from the ones: ${sub(x, y)} = ${ones}. Keep the ten. ${tail}` },
      { v: a + b, tag: 'Added instead of taking away', say: `You added. The minus sign means take away. Take from the ones: ${sub(x, y)} = ${ones}. ${tail}` },
      { v: ans + 1, tag: 'Ones taken away wrong', say: `Take from the ones again: ${sub(x, y)} = ${ones}. The ten stays. ${tail}` },
      { v: ans - 1, tag: 'Ones taken away wrong', say: `Take from the ones again: ${sub(x, y)} = ${ones}. The ten stays. ${tail}` },
      { v: ans + 2, tag: 'Ones taken away wrong', say: `Take from the ones again: ${sub(x, y)} = ${ones}. The ten stays. ${tail}` },
      { v: ans - 2, tag: 'Ones taken away wrong', say: `Take from the ones again: ${sub(x, y)} = ${ones}. The ten stays. ${tail}` }
    ];
  } else {                      // minus10: 1x − 10
    const x = a - 10;
    hint = `${a} is 10 and ${x}. Take away the ten.`;
    why = `${a} is 10 and ${x}. Take away the 10. ${x} is left. ${tail}`;
    pic = { teen: { tens: 1, ones: x } };
    explain = { teen: { tens: 1, ones: x, awayTen: true, show: ans } };
    wrongs = [
      { v: a - 1, keep: true, tag: 'Took away 1, not 10', say: `You took away 1. This takes away 10. ${a} is 10 and ${x}. Take away the 10. ${x} is left. ${tail}` },
      { v: 10, tag: 'Kept the ten', say: `You kept the ten and took the ones. Take away the 10. ${x} is left. ${tail}` },
      { v: x + 1, tag: 'Teen number off by one', say: `${a} is 10 and ${x}. Take away the 10. ${x} is left. ${tail}` },
      { v: x + 2, tag: 'Teen number off by one', say: `${a} is 10 and ${x}. Take away the 10. ${x} is left. ${tail}` },
      { v: x - 1, tag: 'Teen number off by one', say: `${a} is 10 and ${x}. Take away the 10. ${x} is left. ${tail}` }
    ];
  }
  return question({
    id, skill, fact: { op: sign, a, b }, q: `What is ${expr}?`,
    ...(pre ? { kind: 'pre' } : { hint, pic, explain }),
    explanation: why
  }, ans, wrongs, r);
}

/* COUNT UP: the two numbers are close (difference 2 to 6, the smaller one 6 or more). */
function countUpPool() {
  const out = [];
  for (let small = 6; small <= 15; small++) for (let d = 2; d <= 6 && small + d <= 20; d++) out.push([small + d, small]);
  return out;
}
function countUpQ(id, [big, small], { pre, skill, r }) {
  const ans = big - small, seq = seqUp(small, ans), tail = `${sub(big, small)} = ${ans}.`;
  return question({
    id, skill, fact: { op: MINUS, a: big, b: small }, q: `What is ${sub(big, small)}?`,
    ...(pre ? { kind: 'pre' } : {
      hint: `The numbers are close. Start at ${small}. Count up to ${big}.`,
      pic: { line: { lo: 0, hi: 20 } },
      explain: { line: { lo: 0, hi: 20, from: small, jumps: ans, dir: 1 } }
    }),
    explanation: `Start at ${small}. Count up to ${big}: ${seq}. That is ${ans} numbers. ${tail}`
  }, ans, [
    { v: ans + 1, keep: true, tag: 'Counted the start number', say: `You counted the ${small} too. Start at ${small}. Do not count the ${small}. Count up to ${big}: ${seq}. That is ${ans} numbers. ${tail}` },
    { v: big + small, tag: 'Added instead of taking away', say: `You added. The minus sign means take away. Start at ${small}. Count up to ${big}: ${seq}. That is ${ans} numbers. ${tail}` },
    { v: ans - 1, tag: 'Count-up off by one', say: `Count again. Start at ${small}. Count up to ${big}: ${seq}. That is ${ans} numbers. ${tail}` },
    { v: ans + 2, tag: 'Count-up off by one', say: `Count again. Start at ${small}. Count up to ${big}: ${seq}. That is ${ans} numbers. ${tail}` },
    { v: ans - 2, tag: 'Count-up off by one', say: `Count again. Start at ${small}. Count up to ${big}: ${seq}. That is ${ans} numbers. ${tail}` }
  ], r);
}

/* FACT FAMILY: a + b = c, so c − b = a. */
function familyPool() {
  const out = [];
  for (let a = 3; a <= 9; a++) for (let b = 3; b <= 9; b++) if (a !== b && a + b >= 11) out.push([a, b]);
  return out;
}
function familyQ(id, [a, b], { pre, skill, r }) {
  const c = a + b, tail = `${sub(c, b)} = ${a}.`;
  return question({
    id, skill, fact: { op: MINUS, a: c, b }, q: `${add(a, b)} = ${c}. So what is ${sub(c, b)}?`,
    ...(pre ? { kind: 'pre' } : {
      hint: `Use the adding fact. The same three numbers: ${a}, ${b} and ${c}.`,
      pic: { bond: { a, b, c, ask: 'a' } },
      explain: { bond: { a, b, c } }
    }),
    explanation: `${add(a, b)} = ${c}. The same three numbers make ${tail}`
  }, a, [
    { v: b, keep: true, tag: 'Picked the number taken away', say: `${b} is the number you take away. ${add(a, b)} = ${c}. So ${tail}` },
    { v: c + b, tag: 'Added instead of taking away', say: `You added. The minus sign means take away. ${add(a, b)} = ${c}. So ${tail}` },
    { v: a + 1, tag: 'Fact family off by one', say: `Use the adding fact. ${add(a, b)} = ${c}. So ${tail}` },
    { v: a - 1, tag: 'Fact family off by one', say: `Use the adding fact. ${add(a, b)} = ${c}. So ${tail}` },
    { v: a + 2, tag: 'Fact family off by one', say: `Use the adding fact. ${add(a, b)} = ${c}. So ${tail}` },
    { v: a - 2, tag: 'Fact family off by one', say: `Use the adding fact. ${add(a, b)} = ${c}. So ${tail}` }
  ], r);
}

/* MIXED FACTS (the facts check): any + or − within 20. */
function mixedPool() {
  const out = [];
  for (let a = 2; a <= 9; a++) for (let b = 2; b <= 9; b++) {
    out.push(['add', a, b]);                   // sums 4–18
    if (a + b > 10) out.push(['sub', a + b, b]);   // 11–18 take away a one-digit number
  }
  for (let a = 11; a <= 19; a++) for (let b = 1; b <= 8 && (a % 10) + b <= 9; b++) out.push(['addT', a, b]);
  return out;
}
function mixedQ(id, [kind, a, b], { pre, skill, r }) {
  const plus = kind !== 'sub';
  const ans = plus ? a + b : a - b;
  const expr = plus ? add(a, b) : sub(a, b);
  const check = plus ? `${expr} = ${ans}.` : `Check with adding: ${add(ans, b)} = ${a}. So ${expr} = ${ans}.`;
  // The wrong choices are the slips our fact sites actually logged (10/17 facts report): answers 1 or 2 off
  // (6 + 8 → 13, 14 − 3 → 12, 2 + 6 → 7, 9 − 1 → 7) and a stray ten (5 + 2 → 17, 5 + 4 → 19).
  const tag = plus ? 'Sum off by a little' : 'Difference off by a little';
  return question({
    id, skill, fact: { op: plus ? '+' : MINUS, a, b }, q: `What is ${expr}?`,
    ...(pre ? { kind: 'pre' } : {}),
    explanation: check
  }, ans, [
    { v: ans + 1, tag, say: `Your answer is 1 too big. ${check}` },
    { v: ans - 1, tag, say: `Your answer is 1 too small. ${check}` },
    ...(plus && ans < 10 ? [{ v: ans + 10, tag: 'Added a ten', say: `Your answer is 10 too big. There is no extra ten. ${check}` }] : []),
    { v: ans + 2, tag, say: `Your answer is 2 too big. ${check}` },
    { v: ans - 2, tag, say: `Your answer is 2 too small. ${check}` },
    { v: ans + 3, tag, say: `Your answer is 3 too big. ${check}` },
    { v: ans - 3, tag, say: `Your answer is 3 too small. ${check}` }
  ], r);
}

/* ═══ STEPS (not scored) — a 2 or 3 choice step of a worked problem ═══ */
function step(id, skill, q, answer, wrongs, extra = {}) {
  const slips = {};
  wrongs.forEach(([v, say]) => { slips[String(v)] = { tag: 'Lab step', say }; });
  return { id, kind: 'step', skill, q, choices: [String(answer), ...wrongs.map(w => String(w[0]))], answer: String(answer), slips, ...extra };
}
const watch = (id, skill, title, lines, pic) => ({ id, kind: 'watch', skill, title, text: lines.join('\n'), pic });

/* ═══ THE LESSONS ═══
   teach(skill) → the watch + step items (same in every version)
   parts       → [{ pool, build, n, filter? }] scored questions, in order
   pre         → { pool, build } for 🎯 Show what you know (5) — none on the facts check */
const LESSONS = [
  {
    id: 'AS1', title: 'Count On to Add', skill: 'Count on to add',
    pre: { pool: countOnPool, build: countOnQ },
    teach: sk => [
      watch('W1', sk, 'Count on to add', [
        `${add(6, 3)}. Start at the big number, 6.`,
        'Do not count the 6. You are already there.',
        'Count on 3 more. Say 7, 8, 9. Hold up one finger for each number you say.',
        `You stopped at 9. So ${add(6, 3)} = 9.`
      ], { line: { lo: 0, hi: 20, from: 6, jumps: 3, dir: 1 } }),
      step('S1', sk, `${add(8, 3)}. Which number do you start at?`, 8, [[3, 'Start at the bigger number. 8 is bigger than 3. Start at 8.']], { pic: { line: { lo: 0, hi: 20 } } }),
      step('S2', sk, 'Start at 8. Count on 3 more. Which numbers do you say?', '9, 10, 11', [
        ['8, 9, 10', 'Do not say the 8. You are already at 8. The first number you say is 9: 9, 10, 11.'],
        ['10, 11, 12', 'You skipped 9. The number after 8 is 9. Say 9, 10, 11.']
      ], { pic: { line: { lo: 0, hi: 20, from: 8 } } }),
      step('S3', sk, `You said 9, 10, 11. So what is ${add(8, 3)}?`, 11, [
        [10, 'The last number you said is the answer. You said 9, 10, 11. The last one is 11.'],
        [12, 'You said three numbers: 9, 10, 11. Stop at 11. The answer is 11.']
      ], { explain: { line: { lo: 0, hi: 20, from: 8, jumps: 3, dir: 1 } } }),
      watch('W2', sk, 'Start with the bigger number', [
        `${add(2, 9)}. The 9 is the bigger number.`,
        'Start at 9. Starting at 9 is faster than starting at 2.',
        'Count on 2 more. Say 10, 11.',
        `So ${add(2, 9)} = 11. And ${add(9, 2)} = 11 too.`
      ], { line: { lo: 0, hi: 20, from: 9, jumps: 2, dir: 1 } }),
      step('S4', sk, `${add(2, 14)}. Which number do you start at?`, 14, [[2, 'Start at the bigger number. 14 is bigger than 2. Start at 14. Then count on 2.']], { pic: { line: { lo: 0, hi: 20 } } }),
      step('S5', sk, 'Start at 14. Count on 2. Which numbers do you say?', '15, 16', [
        ['14, 15', 'Do not say the 14. You are already at 14. Say 15, 16.'],
        ['16, 17', 'You skipped 15. The number after 14 is 15. Say 15, 16.']
      ], { pic: { line: { lo: 0, hi: 20, from: 14 } } }),
      step('S6', sk, `You said 15, 16. So what is ${add(2, 14)}?`, 16, [
        [15, 'The last number you said is the answer. You said 15, 16. The answer is 16.'],
        [17, 'You said two numbers: 15, 16. Stop at 16. The answer is 16.']
      ], { explain: { line: { lo: 0, hi: 20, from: 14, jumps: 2, dir: 1 } } })
    ],
    parts: [{ pool: countOnPool, build: countOnQ, n: 10 }]
  },
  {
    id: 'AS2', title: 'Make 10', skill: 'Make 10 to add',
    pre: { pool: make10Pool, build: make10Q },
    teach: sk => [
      watch('W1', sk, 'Ten partners', [
        'Two numbers that make 10 are ten partners.',
        `1 and 9. 2 and 8. 3 and 7. 4 and 6. 5 and 5.`,
        'Look at the ten frame. It has 10 boxes. 7 boxes have dots. 3 boxes are empty.',
        `So 7 and 3 are ten partners. ${add(7, 3)} = 10.`
      ], { frames: { a: 7, fill: 3 } }),
      step('S1', 'Ten partners', '6 boxes have dots. How many boxes are empty?', 4, [
        [6, 'Count the EMPTY boxes, not the dots. There are 4 empty boxes. 6 and 4 make 10.'],
        [3, 'Count the empty boxes again. There are 4. 6 and 4 make 10.']
      ], { pic: { frames: { a: 6 } }, explain: { frames: { a: 6, fill: 4 } } }),
      watch('W2', sk, 'Make 10 to add', [
        `${add(8, 5)}. 8 needs 2 to make 10.`,
        'Take 2 from the 5. 5 is 2 and 3.',
        `${add(8, 2)} = 10. Then ${add(10, 3)} = 13.`,
        `So ${add(8, 5)} = 13.`
      ], { frames: { a: 8, b: 5, make10: true } }),
      step('S2', sk, `${add(9, 4)}. 9 needs how many to make 10?`, 1, [
        [2, '9 and 1 make 10. 9 needs 1.'],
        [4, '9 and 1 make 10. 9 needs only 1.']
      ], { pic: { frames: { a: 9, b: 4 } } }),
      step('S3', sk, 'Take 1 from the 4. How many are left?', 3, [
        [4, 'You took 1 away, so there are fewer. 4 is 1 and 3. 3 are left.'],
        [5, 'Take away, do not add. 4 is 1 and 3. 3 are left.']
      ], { pic: { frames: { a: 9, b: 4, make10: true } } }),
      step('S4', sk, `Now it is ${add(10, 3)}. So what is ${add(9, 4)}?`, 13, [
        [14, `You added 10 + 4. But 1 of the 4 went to make 10. Only 3 are left. ${add(10, 3)} = 13.`],
        [12, `${add(10, 3)} = 13. 10 and 3 more is 13.`]
      ], { explain: { frames: { a: 9, b: 4, make10: true } } })
    ],
    parts: [
      { pool: () => range(1, 9), build: partnerQ, n: 4, skill: 'Ten partners' },
      { pool: make10Pool, build: make10Q, n: 6 }
    ]
  },
  {
    id: 'AS3', title: 'Teen Numbers: 10 and Some More', skill: 'Teen numbers: 10 and some more',
    pre: { pool: teenPool, build: teenQ },
    teach: sk => [
      watch('W1', sk, 'Teen numbers', [
        'A teen number is 10 and some more.',
        `15 is 10 and 5. ${add(10, 5)} = 15.`,
        'The 1 in 15 stands for 1 ten. The 5 stands for 5 ones.',
        `1 ten and 5 ones is 15.`
      ], { teen: { tens: 1, ones: 5, show: 15 } }),
      step('S1', sk, `${add(10, 7)}. The 10 is 1 ten. How many ones are there?`, 7, [
        [1, 'The 1 ten is the 10. The ones are the 7. There are 7 ones.'],
        [10, 'The 10 is 1 ten. The ones are the 7. There are 7 ones.']
      ], { pic: { teen: { tens: 1, ones: 7 } } }),
      step('S2', sk, '1 ten and 7 ones. What number is that?', 17, [
        [71, 'The ten comes first. 1 ten and 7 ones is 17.'],
        [27, 'There is only 1 ten. 1 ten and 7 ones is 17.']
      ], { pic: { teen: { tens: 1, ones: 7 } }, explain: { teen: { tens: 1, ones: 7, show: 17 } } }),
      watch('W2', sk, 'Add ones to a teen number', [
        `${add(13, 4)}. 13 is 10 and 3.`,
        `Add the ones: ${add(3, 4)} = 7.`,
        'The ten stays 1 ten.',
        `1 ten and 7 ones is 17. So ${add(13, 4)} = 17.`
      ], { teen: { tens: 1, ones: 3, more: 4, show: 17 } }),
      step('S3', sk, `${add(12, 5)}. Add the ones. What is ${add(2, 5)}?`, 7, [
        [6, `Count on from 2: 3, 4, 5, 6, 7. ${add(2, 5)} = 7.`],
        [3, `Add, do not take away. ${add(2, 5)} = 7.`]
      ], { pic: { teen: { tens: 1, ones: 2, more: 5 } } }),
      step('S4', sk, `The ten stays. So what is ${add(12, 5)}?`, 17, [
        [27, 'You made 2 tens. The ten stays 1 ten. 1 ten and 7 ones is 17.'],
        [7, 'Keep the ten. 1 ten and 7 ones is 17.']
      ], { explain: { teen: { tens: 1, ones: 2, more: 5, show: 17 } } }),
      watch('W3', sk, 'Take ones from a teen number', [
        `${sub(18, 5)}. 18 is 10 and 8.`,
        `Take from the ones: ${sub(8, 5)} = 3.`,
        'The ten stays 1 ten.',
        `1 ten and 3 ones is 13. So ${sub(18, 5)} = 13.`
      ], { teen: { tens: 1, ones: 8, away: 5, show: 13 } }),
      step('S5', sk, `${sub(16, 4)}. Take from the ones. What is ${sub(6, 4)}?`, 2, [
        [10, `Take 4 from the 6 ones. ${sub(6, 4)} = 2.`],
        [3, `Count back 4 from 6: 5, 4, 3, 2. ${sub(6, 4)} = 2.`]
      ], { pic: { teen: { tens: 1, ones: 6, away: 4 } } }),
      step('S6', sk, `The ten stays. So what is ${sub(16, 4)}?`, 12, [
        [2, 'Keep the ten. 1 ten and 2 ones is 12.'],
        [20, 'You added. The minus sign means take away. 1 ten and 2 ones is 12.']
      ], { explain: { teen: { tens: 1, ones: 6, away: 4, show: 12 } } })
    ],
    parts: [
      { pool: teenPool, build: teenQ, n: 3, filter: t => t[0] === 'ten' || t[0] === 'tenB' },
      { pool: teenPool, build: teenQ, n: 4, filter: t => t[0] === 'plus' },
      { pool: teenPool, build: teenQ, n: 2, filter: t => t[0] === 'minus' },
      { pool: teenPool, build: teenQ, n: 1, filter: t => t[0] === 'minus10' }
    ]
  },
  {
    id: 'AS4', title: 'Count Back to Subtract', skill: 'Count back to subtract',
    pre: { pool: countBackPool, build: countBackQ },
    teach: sk => [
      watch('W1', sk, 'Count back to subtract', [
        `${sub(12, 3)}. Start at 12.`,
        'Do not count the 12. You are already there.',
        'Count back 3. Say 11, 10, 9. Hold up one finger for each number you say.',
        `You stopped at 9. So ${sub(12, 3)} = 9.`
      ], { line: { lo: 0, hi: 20, from: 12, jumps: 3, dir: -1 } }),
      step('S1', sk, `${sub(10, 2)}. Which number do you start at?`, 10, [[2, 'Start at the first number, the 10. Then count back 2.']], { pic: { line: { lo: 0, hi: 20 } } }),
      step('S2', sk, 'Start at 10. Count back 2. Which numbers do you say?', '9, 8', [
        ['10, 9', 'Do not say the 10. You are already at 10. Say 9, 8.'],
        ['11, 12', 'That is counting up. Take away means count back. Say 9, 8.']
      ], { pic: { line: { lo: 0, hi: 20, from: 10 } } }),
      step('S3', sk, `You said 9, 8. So what is ${sub(10, 2)}?`, 8, [
        [9, 'The last number you said is the answer. You said 9, 8. The answer is 8.'],
        [12, 'Take away makes the number smaller. You said 9, 8. The answer is 8.']
      ], { explain: { line: { lo: 0, hi: 20, from: 10, jumps: 2, dir: -1 } } }),
      watch('W2', sk, 'Taking away makes a number smaller', [
        `${sub(15, 3)}. Start at 15.`,
        'Count back 3. Say 14, 13, 12.',
        `So ${sub(15, 3)} = 12.`,
        '12 is smaller than 15. When you take away, the answer is smaller.'
      ], { line: { lo: 0, hi: 20, from: 15, jumps: 3, dir: -1 } }),
      step('S4', sk, 'Start at 14. Count back 3. Which numbers do you say?', '13, 12, 11', [
        ['14, 13, 12', 'Do not say the 14. You are already at 14. Say 13, 12, 11.'],
        ['15, 16, 17', 'That is counting up. Take away means count back. Say 13, 12, 11.']
      ], { pic: { line: { lo: 0, hi: 20, from: 14 } } }),
      step('S5', sk, `You said 13, 12, 11. So what is ${sub(14, 3)}?`, 11, [
        [12, 'The last number you said is the answer. You said 13, 12, 11. The answer is 11.'],
        [17, 'Take away makes the number smaller. You said 13, 12, 11. The answer is 11.']
      ], { explain: { line: { lo: 0, hi: 20, from: 14, jumps: 3, dir: -1 } } })
    ],
    parts: [{ pool: countBackPool, build: countBackQ, n: 10 }]
  },
  {
    id: 'AS5', title: 'Subtract by Thinking Addition', skill: 'Subtract by thinking addition',
    pre: { pool: familyPool, build: familyQ },
    teach: sk => [
      watch('W1', sk, 'Count up to subtract', [
        `${sub(13, 9)}. The two numbers are close together.`,
        'Start at the small number, 9. Do not count the 9.',
        'Count up to 13. Say 10, 11, 12, 13. Hold up one finger for each number you say.',
        `You said 4 numbers. So ${sub(13, 9)} = 4.`
      ], { line: { lo: 0, hi: 20, from: 9, jumps: 4, dir: 1 } }),
      step('S1', 'Count up to subtract', `${sub(12, 8)}. Start at 8. Count up to 12. Which numbers do you say?`, '9, 10, 11, 12', [
        ['8, 9, 10, 11, 12', 'Do not say the 8. You are already at 8. Say 9, 10, 11, 12.'],
        ['10, 11, 12', 'You skipped 9. The number after 8 is 9. Say 9, 10, 11, 12.']
      ], { pic: { line: { lo: 0, hi: 20, from: 8 } } }),
      step('S2', 'Count up to subtract', `You said 9, 10, 11, 12. So what is ${sub(12, 8)}?`, 4, [
        [5, 'Count the numbers you said: 9, 10, 11, 12. That is 4 numbers. The answer is 4.'],
        [12, '12 is where you stopped. The answer is how many numbers you said: 4.']
      ], { explain: { line: { lo: 0, hi: 20, from: 8, jumps: 4, dir: 1 } } }),
      watch('W2', sk, 'Fact families', [
        `${add(7, 6)} = 13.`,
        `So ${sub(13, 6)} = 7. And ${sub(13, 7)} = 6.`,
        'The same three numbers: 6, 7 and 13.',
        'Adding and taking away use the same three numbers. They are a fact family.'
      ], { bond: { a: 7, b: 6, c: 13 } }),
      step('S3', sk, `${add(8, 5)} = 13. So what is ${sub(13, 5)}?`, 8, [
        [5, `5 is the number you take away. ${add(8, 5)} = 13, so ${sub(13, 5)} = 8.`],
        [18, `You added. The minus sign means take away. ${add(8, 5)} = 13, so ${sub(13, 5)} = 8.`]
      ], { pic: { bond: { a: 8, b: 5, c: 13, ask: 'a' } }, explain: { bond: { a: 8, b: 5, c: 13 } } }),
      step('S4', sk, `${add(8, 5)} = 13. So what is ${sub(13, 8)}?`, 5, [
        [8, `8 is the number you take away. ${add(8, 5)} = 13, so ${sub(13, 8)} = 5.`],
        [3, `Use the adding fact. ${add(8, 5)} = 13, so ${sub(13, 8)} = 5.`]
      ], { pic: { bond: { a: 8, b: 5, c: 13, ask: 'b' } }, explain: { bond: { a: 8, b: 5, c: 13 } } })
    ],
    parts: [
      { pool: countUpPool, build: countUpQ, n: 5, skill: 'Count up to subtract' },
      { pool: familyPool, build: familyQ, n: 5 }
    ]
  },
  {
    id: 'AS6', title: 'Facts Check to 20', skill: 'Facts to 20 (check)', check: true,
    teach: sk => [
      watch('W1', sk, 'The facts check', [
        'This is the facts check. It has 20 facts.',
        'Adding: count on, or make 10. Taking away: count back, count up, or use the adding fact.',
        'There are no hints and no pictures this time.',
        'Get 18 of 20 right to finish Adding and Subtracting to 20.'
      ])
    ],
    parts: [
      { pool: mixedPool, build: mixedQ, n: 6, filter: t => t[0] === 'add' && t[1] + t[2] > 10 },
      { pool: mixedPool, build: mixedQ, n: 4, filter: t => (t[0] === 'add' && t[1] + t[2] <= 10) || t[0] === 'addT' },
      { pool: mixedPool, build: mixedQ, n: 10, filter: t => t[0] === 'sub' }
    ]
  }
];


/* ═══ A STUDENT'S OWN FACTS ═══
   A missed fact from an earlier try: { op: '+' | '−', a, b }. fits(lessonId, f) says whether the
   lesson teaches that kind of fact; factItem builds it with the lesson's own builder (same slips,
   same pictures) as one more scored question. */
function fits(lessonId, f) {
  const { op, a, b } = f;
  if (!(a >= 0 && b >= 0)) return false;
  if (op === '+') {
    const s = a + b, lo = Math.min(a, b), hi = Math.max(a, b);
    if (s > 20) return false;
    if (lessonId === 'AS1') return lo >= 1 && lo <= 3;
    if (lessonId === 'AS2') return hi >= 7 && hi <= 9 && s >= 11 && s <= 18;
    if (lessonId === 'AS3') return (hi === 10 && lo >= 1 && lo <= 9) || (hi >= 11 && hi <= 19 && lo >= 1 && (hi % 10) + lo <= 9);
    if (lessonId === 'AS6') return true;
    return false;
  }
  if (op === '−') {
    if (b > a || a > 20) return false;
    if (lessonId === 'AS3') return a >= 11 && a <= 19 && (b === 10 || (b >= 1 && b < a % 10));
    if (lessonId === 'AS4') return b >= 1 && b <= 3 && a >= b;   // small facts like 2 − 1 and 3 − 2 count back too
    if (lessonId === 'AS5') return b >= 4 && a - b >= 1;
    if (lessonId === 'AS6') return true;
    return false;
  }
  return false;
}
function factItem(lessonId, f, id, r, skill) {
  const { op, a, b } = f;
  const o = { pre: false, skill, r };
  if (lessonId === 'AS1') return countOnQ(id, [a, b], o);
  if (lessonId === 'AS2') return make10Q(id, [a, b], o);
  if (lessonId === 'AS3') {
    if (op === '+') return teenQ(id, a === 10 ? ['ten', a, b] : b === 10 ? ['tenB', a, b] : ['plus', Math.max(a, b), Math.min(a, b)], o);
    return teenQ(id, b === 10 ? ['minus10', a, b] : ['minus', a, b], o);
  }
  if (lessonId === 'AS4') return countBackQ(id, [a, b], o);
  if (lessonId === 'AS5') return a - b <= 6 && b >= 2 ? countUpQ(id, [a, b], o) : familyQ(id, [a - b, b], o);
  return mixedQ(id, [op === '+' ? 'add' : 'sub', a, b], o);
}

const api = { MINUS, rng, seedOf, shuffled, range, question, LESSONS, fits, factItem,
  countOnQ, countBackQ, partnerQ, make10Q, teenQ, countUpQ, familyQ, mixedQ,
  countOnPool, countBackPool, make10Pool, teenPool, countUpPool, familyPool, mixedPool };
root.LabLessons = api;
if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
