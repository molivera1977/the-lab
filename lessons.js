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
const onesOf = k => `${k} ${k === 1 ? 'one' : 'ones'}`;                     // "1 one", "7 ones"

/* A scored question (or a 'pre' one) from a right answer and its wrong choices.
   wrongs = [{ v, tag, say, keep }] — every `keep` slip is used (the slip this lesson teaches against);
   the rest are drawn at random, so the right answer is not always in the same place when the four
   choices are put in order (a child could learn "the second smallest is right"). tools/check-lab.js checks it. */
function question(base, answer, wrongs, r) {
  // candidates: the builder's slips, then plain "a little off" ones (used only to balance the order)
  // noNear: place value and rounding use only named slips (a wrong place, not "3 off")
  const near = base.noNear ? [] : [3, -3, 4, -4].map(d => ({ v: answer + d, tag: 'Off by a little', say: `Count again. ${base.explanation}` }));
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
  // commas: numbers of 1,000 and more are shown the way the question shows them ("6,250", not "6250")
  const { noNear, commas, ...rest } = base;
  const show = v => (commas ? Number(v).toLocaleString('en-US') : String(v));
  const shownSlips = {};
  Object.entries(slips).forEach(([k, v]) => { shownSlips[show(k)] = v; });
  return { ...rest, choices: [show(answer), ...picked.map(w => show(w.v))], answer: show(answer), slips: shownSlips };
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
    hint = `10 is 1 ten. Write 1 ten and ${onesOf(n)}.`;
    why = `10 is 1 ten. ${expr} is 1 ten and ${onesOf(n)}: ${ans}.`;
    pic = { teen: { tens: 1, ones: n } };
    explain = { teen: { tens: 1, ones: n, show: ans } };
    wrongs = [
      { v: 20 + n, keep: true, tag: 'Made the ten into 2 tens', say: `That is 2 tens. 10 is only 1 ten. ${expr} is 1 ten and ${onesOf(n)}: ${ans}.` },
      { v: n + 1, tag: 'Used 10 as 1', say: `You added 1, not 10. 10 is 1 ten. ${expr} is 1 ten and ${onesOf(n)}: ${ans}.` },
      { v: ans + 1, tag: 'Teen number off by one', say: `Look at the ones. There ${n === 1 ? 'is' : 'are'} ${onesOf(n)}. ${expr} is 1 ten and ${onesOf(n)}: ${ans}.` },
      { v: ans - 1, tag: 'Teen number off by one', say: `Look at the ones. There ${n === 1 ? 'is' : 'are'} ${onesOf(n)}. ${expr} is 1 ten and ${onesOf(n)}: ${ans}.` },
      { v: ans + 2, tag: 'Teen number off by one', say: `Look at the ones. There ${n === 1 ? 'is' : 'are'} ${onesOf(n)}. ${expr} is 1 ten and ${onesOf(n)}: ${ans}.` },
      { v: ans - 2, tag: 'Teen number off by one', say: `Look at the ones. There ${n === 1 ? 'is' : 'are'} ${onesOf(n)}. ${expr} is 1 ten and ${onesOf(n)}: ${ans}.` }
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

/* ═══ A RETRY TEACHES AGAIN, THE SAME WAY (Marcos 10/21: "yes, I like the new worked example"; then "switch to one
   method, new numbers") ═══
   teach(skill, ctx) builds a lesson's worked examples and steps for ONE version, with the lesson's one method and one
   picture (the picture its questions use), and numbers of its own:
     ctx.v    1–4 (a retry gets the next version)
     ctx.pick(pool, n) → n facts from the lesson's pool, none used anywhere else in this version (so no question
              repeats a worked example), and none another version's worked example used where it can (its own numbers)
     ctx.take(fact) sets a fact aside too (a ten partner's other half) · ctx.used(fact): is it already in this version?
   Nothing is typed: every number, answer and note below comes from the facts picked. */
const NUM_WORD = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six' };
// a step's wrong choices: the first two that are not the answer, not below 0, and not the same as each other
const wrongsOf = (answer, cands) => {
  const seen = new Set([String(answer)]);
  return cands.filter(([v]) => v != null && !(typeof v === 'number' && v < 0) && !seen.has(String(v)) && seen.add(String(v))).slice(0, 2);
};
// the same counting list, with the start said too (a slip), or the first number skipped (a slip)
const withStart = (from, n, dir) => [from, ...range(1, n - 1).map(i => from + dir * i)].join(', ');
const skipFirst = (from, n, dir) => range(2, n + 1).map(i => from + dir * i).join(', ');
const one = (pick, pool) => pick(pool, 1)[0];
const boxesOf = n => `${n} ${n === 1 ? 'box' : 'boxes'}`;

/* AS1 · Count on to add — the number line */
function teachCountOn(sk, { pick }) {
  const bigFirst = (s, lo) => countOnPool().filter(([a, b]) => b === s && a >= lo && a <= 15);
  const smallFirst = (s, lo) => countOnPool().filter(([a, b]) => a === s && b >= lo && b <= 15);
  // each example its own numbers, so every version's are new
  const [a1, s1] = one(pick, bigFirst(3, 5)), [a2, s2] = one(pick, bigFirst(3, 6));
  const [s3, a3] = one(pick, smallFirst(2, 7)), [s4, a4] = one(pick, smallFirst(2, 10));
  const said = (s, a) => seqUp(a, s);
  const line = (from, jumps) => ({ line: { lo: 0, hi: 20, from, jumps, dir: 1 } });
  const startStep = (id, x, y, big, small) => step(id, sk, `${add(x, y)}. Which number do you start at?`, big, [
    [small, `Start at the bigger number. ${big} is bigger than ${small}. Start at ${big}.`]
  ], { pic: { line: { lo: 0, hi: 20 } } });
  const sayStep = (id, big, small) => step(id, sk, `Start at ${big}. Count on ${small} more. Which numbers do you say?`, said(small, big),
    wrongsOf(said(small, big), [
      [withStart(big, small, 1), `Do not say the ${big}. You are already at ${big}. The first number you say is ${big + 1}: ${said(small, big)}.`],
      [skipFirst(big, small, 1), `You skipped ${big + 1}. The number after ${big} is ${big + 1}. Say ${said(small, big)}.`]
    ]), { pic: { line: { lo: 0, hi: 20, from: big } } });
  const answerStep = (id, x, y, big, small) => step(id, sk, `You said ${said(small, big)}. So what is ${add(x, y)}?`, big + small, wrongsOf(big + small, [
    [big + small - 1, `The last number you said is the answer. You said ${said(small, big)}. The last one is ${big + small}.`],
    [big + small + 1, `You said ${NUM_WORD[small]} numbers: ${said(small, big)}. Stop at ${big + small}. The answer is ${big + small}.`]
  ]), { explain: line(big, small) });
  return [
    watch('W1', sk, 'Count on to add', [
      `${add(a1, s1)}. Start at the big number, ${a1}.`,
      `Do not count the ${a1}. You are already there.`,
      `Count on ${s1} more. Say ${said(s1, a1)}. Hold up one finger for each number you say.`,
      `You stopped at ${a1 + s1}. So ${add(a1, s1)} = ${a1 + s1}.`
    ], line(a1, s1)),
    startStep('S1', a2, s2, a2, s2), sayStep('S2', a2, s2), answerStep('S3', a2, s2, a2, s2),
    watch('W2', sk, 'Start with the bigger number', [
      `${add(s3, a3)}. The ${a3} is the bigger number.`,
      `Start at ${a3}. Starting at ${a3} is faster than starting at ${s3}.`,
      `Count on ${s3} more. Say ${said(s3, a3)}.`,
      `So ${add(s3, a3)} = ${a3 + s3}. And ${add(a3, s3)} = ${a3 + s3} too.`
    ], line(a3, s3)),
    startStep('S4', s4, a4, a4, s4), sayStep('S5', a4, s4), answerStep('S6', s4, a4, a4, s4)
  ];
}

/* AS2 · Make 10 — ten frames */
function teachMake10(sk, { pick, take }) {
  // a ten partner is one fact both ways: "7 and 3" is also the question "What number and 3 make 10?"
  const p1 = one(pick, [5, 6, 7, 8]); take(10 - p1);
  const p2 = one(pick, [2, 3, 4, 9]); take(10 - p2);        // its own list, so every version's example is new
  const bigFirst = make10Pool().filter(([a, b]) => a > b);
  const [a, b] = one(pick, bigFirst), [c, d] = one(pick, bigFirst);
  const n = 10 - a, m = 10 - c;
  const empty = k => (k === 1 ? 'There is 1 empty box' : `There are ${k} empty boxes`);
  return [
    watch('W1', sk, 'Ten partners', [
      'Two numbers that make 10 are ten partners.',
      `1 and 9. 2 and 8. 3 and 7. 4 and 6. 5 and 5.`,
      `Look at the ten frame. It has 10 boxes. ${p1} boxes have dots. ${boxesOf(10 - p1)} ${10 - p1 === 1 ? 'is' : 'are'} empty.`,
      `So ${p1} and ${10 - p1} are ten partners. ${add(p1, 10 - p1)} = 10.`
    ], { frames: { a: p1, fill: 10 - p1 } }),
    step('S1', 'Ten partners', `${p2} boxes have dots. How many boxes are empty?`, 10 - p2, wrongsOf(10 - p2, [
      [p2, `Count the EMPTY boxes, not the dots. ${empty(10 - p2)}. ${p2} and ${10 - p2} make 10.`],
      [10 - p2 - 1, `Count the empty boxes again. ${empty(10 - p2)}. ${p2} and ${10 - p2} make 10.`],
      [10 - p2 + 1, `Count the empty boxes again. ${empty(10 - p2)}. ${p2} and ${10 - p2} make 10.`]
    ]), { pic: { frames: { a: p2 } }, explain: { frames: { a: p2, fill: 10 - p2 } } }),
    watch('W2', sk, 'Make 10 to add', [
      `${add(a, b)}. ${a} needs ${n} to make 10.`,
      `Take ${n} from the ${b}. ${b} is ${n} and ${b - n}.`,
      `${add(a, n)} = 10. Then ${add(10, b - n)} = ${a + b}.`,
      `So ${add(a, b)} = ${a + b}.`
    ], { frames: { a, b, make10: true } }),
    step('S2', sk, `${add(c, d)}. ${c} needs how many to make 10?`, m, wrongsOf(m, [
      [d, `${c} and ${m} make 10. ${c} needs only ${m}.`],
      [m + 1, `${c} and ${m} make 10. ${c} needs ${m}.`],
      [m + 2, `${c} and ${m} make 10. ${c} needs ${m}.`]
    ]), { pic: { frames: { a: c, b: d } } }),
    step('S3', sk, `Take ${m} from the ${d}. How many are left?`, d - m, wrongsOf(d - m, [
      [d, `You took ${m} away, so there are fewer. ${d} is ${m} and ${d - m}. ${d - m} are left.`],
      [d + m, `Take away, do not add. ${d} is ${m} and ${d - m}. ${d - m} are left.`],
      [d - m + 1, `${d} is ${m} and ${d - m}. ${d - m} are left.`]
    ]), { pic: { frames: { a: c, b: d, make10: true } } }),
    step('S4', sk, `Now it is ${add(10, d - m)}. So what is ${add(c, d)}?`, c + d, wrongsOf(c + d, [
      [10 + d, `You added 10 and ${d}. But ${m} of the ${d} went to make 10. Only ${d - m} are left. ${add(10, d - m)} = ${c + d}.`],
      [c + d - 1, `${add(10, d - m)} = ${c + d}. 10 and ${d - m} more is ${c + d}.`],
      [c + d + 1, `${add(10, d - m)} = ${c + d}. 10 and ${d - m} more is ${c + d}.`]
    ]), { explain: { frames: { a: c, b: d, make10: true } } })
  ];
}

/* AS3 · Teen numbers — a ten stick and ones */
function teachTeen(sk, { pick }) {
  const pool = kind => teenPool().filter(t => t[0] === kind);
  const [, , n1] = one(pick, pool('ten').filter(t => t[2] >= 2)), [, , n2] = one(pick, pool('ten').filter(t => t[2] >= 2));
  const [, w, x] = one(pick, pool('plus')), [, w2, x2] = one(pick, pool('plus'));
  const [, y, z] = one(pick, pool('minus')), [, y2, z2] = one(pick, pool('minus'));
  const o = k => k - 10;   // the ones of a teen number
  return [
    watch('W1', sk, 'Teen numbers', [
      'A teen number is 10 and some more.',
      `${10 + n1} is 10 and ${n1}. ${add(10, n1)} = ${10 + n1}.`,
      `The 1 in ${10 + n1} stands for 1 ten. The ${n1} stands for ${n1} ones.`,
      `1 ten and ${n1} ones is ${10 + n1}.`
    ], { teen: { tens: 1, ones: n1, show: 10 + n1 } }),
    step('S1', sk, `${add(10, n2)}. The 10 is 1 ten. How many ones are there?`, n2, wrongsOf(n2, [
      [1, `The 1 ten is the 10. The ones are the ${n2}. There are ${n2} ones.`],
      [10, `The 10 is 1 ten. The ones are the ${n2}. There are ${n2} ones.`]
    ]), { pic: { teen: { tens: 1, ones: n2 } } }),
    step('S2', sk, `1 ten and ${n2} ones. What number is that?`, 10 + n2, wrongsOf(10 + n2, [
      [Number(`${n2}1`), `The ten comes first. 1 ten and ${n2} ones is ${10 + n2}.`],
      [20 + n2, `There is only 1 ten. 1 ten and ${n2} ones is ${10 + n2}.`]
    ]), { pic: { teen: { tens: 1, ones: n2 } }, explain: { teen: { tens: 1, ones: n2, show: 10 + n2 } } }),
    watch('W2', sk, 'Add ones to a teen number', [
      `${add(w, x)}. ${w} is 10 and ${o(w)}.`,
      `Add the ones: ${add(o(w), x)} = ${o(w) + x}.`,
      'The ten stays 1 ten.',
      `1 ten and ${onesOf(o(w) + x)} is ${w + x}. So ${add(w, x)} = ${w + x}.`
    ], { teen: { tens: 1, ones: o(w), more: x, show: w + x } }),
    step('S3', sk, `${add(w2, x2)}. Add the ones. What is ${add(o(w2), x2)}?`, o(w2) + x2, wrongsOf(o(w2) + x2, [
      [o(w2) + x2 - 1, `Count on from ${o(w2)}: ${seqUp(o(w2), x2)}. ${add(o(w2), x2)} = ${o(w2) + x2}.`],
      [Math.abs(o(w2) - x2), `Add, do not take away. ${add(o(w2), x2)} = ${o(w2) + x2}.`],
      [o(w2) + x2 + 1, `Count on from ${o(w2)}: ${seqUp(o(w2), x2)}. ${add(o(w2), x2)} = ${o(w2) + x2}.`]
    ]), { pic: { teen: { tens: 1, ones: o(w2), more: x2 } } }),
    step('S4', sk, `The ten stays. So what is ${add(w2, x2)}?`, w2 + x2, wrongsOf(w2 + x2, [
      [w2 + x2 + 10, `You made 2 tens. The ten stays 1 ten. 1 ten and ${onesOf(o(w2) + x2)} is ${w2 + x2}.`],
      [o(w2) + x2, `Keep the ten. 1 ten and ${onesOf(o(w2) + x2)} is ${w2 + x2}.`]
    ]), { explain: { teen: { tens: 1, ones: o(w2), more: x2, show: w2 + x2 } } }),
    watch('W3', sk, 'Take ones from a teen number', [
      `${sub(y, z)}. ${y} is 10 and ${o(y)}.`,
      `Take from the ones: ${sub(o(y), z)} = ${o(y) - z}.`,
      'The ten stays 1 ten.',
      `1 ten and ${onesOf(o(y) - z)} is ${y - z}. So ${sub(y, z)} = ${y - z}.`
    ], { teen: { tens: 1, ones: o(y), away: z, show: y - z } }),
    step('S5', sk, `${sub(y2, z2)}. Take from the ones. What is ${sub(o(y2), z2)}?`, o(y2) - z2, wrongsOf(o(y2) - z2, [
      [o(y2) + z2, `Take away, do not add. ${sub(o(y2), z2)} = ${o(y2) - z2}.`],
      [o(y2) - z2 + 1, `Count back ${z2} from ${o(y2)}: ${seqDown(o(y2), z2)}. ${sub(o(y2), z2)} = ${o(y2) - z2}.`],
      [o(y2) - z2 + 2, `Count back ${z2} from ${o(y2)}: ${seqDown(o(y2), z2)}. ${sub(o(y2), z2)} = ${o(y2) - z2}.`]
    ]), { pic: { teen: { tens: 1, ones: o(y2), away: z2 } } }),
    step('S6', sk, `The ten stays. So what is ${sub(y2, z2)}?`, y2 - z2, wrongsOf(y2 - z2, [
      [o(y2) - z2, `Keep the ten. 1 ten and ${onesOf(o(y2) - z2)} is ${y2 - z2}.`],
      [y2 + z2, `You added. The minus sign means take away. 1 ten and ${onesOf(o(y2) - z2)} is ${y2 - z2}.`]
    ]), { explain: { teen: { tens: 1, ones: o(y2), away: z2, show: y2 - z2 } } })
  ];
}

/* AS4 · Count back to subtract — the number line */
function teachCountBack(sk, { pick }) {
  const back = (s, lo, hi) => countBackPool().filter(([a, b]) => b === s && a >= lo && a <= hi);
  // each example its own numbers, so every version's are new
  const [a1, s1] = one(pick, back(3, 10, 13)), [a2, s2] = one(pick, back(2, 8, 13));
  const [a3, s3] = one(pick, back(3, 14, 17)), [a4, s4] = one(pick, back(3, 6, 9));
  const line = (from, jumps) => ({ line: { lo: 0, hi: 20, from, jumps, dir: -1 } });
  const said = (a, s) => seqDown(a, s);
  const saySteps = (ids, a, s) => [
    step(ids[0], sk, `Start at ${a}. Count back ${s}. Which numbers do you say?`, said(a, s), wrongsOf(said(a, s), [
      [withStart(a, s, -1), `Do not say the ${a}. You are already at ${a}. Say ${said(a, s)}.`],
      [seqUp(a, s), `That is counting up. Take away means count back. Say ${said(a, s)}.`]
    ]), { pic: { line: { lo: 0, hi: 20, from: a } } }),
    step(ids[1], sk, `You said ${said(a, s)}. So what is ${sub(a, s)}?`, a - s, wrongsOf(a - s, [
      [a - s + 1, `The last number you said is the answer. You said ${said(a, s)}. The answer is ${a - s}.`],
      [a + s, `Take away makes the number smaller. You said ${said(a, s)}. The answer is ${a - s}.`]
    ]), { explain: line(a, s) })
  ];
  return [
    watch('W1', sk, 'Count back to subtract', [
      `${sub(a1, s1)}. Start at ${a1}.`,
      `Do not count the ${a1}. You are already there.`,
      `Count back ${s1}. Say ${said(a1, s1)}. Hold up one finger for each number you say.`,
      `You stopped at ${a1 - s1}. So ${sub(a1, s1)} = ${a1 - s1}.`
    ], line(a1, s1)),
    step('S1', sk, `${sub(a2, s2)}. Which number do you start at?`, a2, [[s2, `Start at the first number, the ${a2}. Then count back ${s2}.`]], { pic: { line: { lo: 0, hi: 20 } } }),
    ...saySteps(['S2', 'S3'], a2, s2),
    watch('W2', sk, 'Taking away makes a number smaller', [
      `${sub(a3, s3)}. Start at ${a3}.`,
      `Count back ${s3}. Say ${said(a3, s3)}.`,
      `So ${sub(a3, s3)} = ${a3 - s3}.`,
      `${a3 - s3} is smaller than ${a3}. When you take away, the answer is smaller.`
    ], line(a3, s3)),
    ...saySteps(['S4', 'S5'], a4, s4)
  ];
}

/* AS5 · Subtract by thinking addition — count up on the number line, and a fact family */
function teachThinkAdd(sk, { pick, take, used }) {
  // a subtraction asked another way in this version (a fact family question, or Show what you know) is not an example
  const up = d => countUpPool().filter(([big, small]) => big - small === d && big <= 15 && !used([d, small]) && !used([small, d]));
  const [b1, m1] = one(pick, up(4)), [b2, m2] = one(pick, up(3));     // the example counts up 4, the steps 3: each version its own
  const d1 = b1 - m1, d2 = b2 - m2;
  // the same subtraction is never asked or taught twice: "12 − 8" counted up is also the fact family [4, 8] …
  [[d1, m1], [m1, d1], [d2, m2], [m2, d2]].forEach(take);
  const fam = familyPool().filter(([a, b]) => a + b <= 15 && !used([a + b, a]) && !used([a + b, b]));
  const [f1, g1] = one(pick, fam), [f2, g2] = one(pick, fam);
  const c1 = f1 + g1, c2 = f2 + g2;
  // … and a fact family's "13 − 7" is also the count-up question [13, 7]
  [[c1, f1], [c1, g1], [c2, f2], [c2, g2]].forEach(take);
  const said = seqUp(m2, d2);
  return [
    watch('W1', sk, 'Count up to subtract', [
      `${sub(b1, m1)}. The two numbers are close together.`,
      `Start at the small number, ${m1}. Do not count the ${m1}.`,
      `Count up to ${b1}. Say ${seqUp(m1, d1)}. Hold up one finger for each number you say.`,
      `You said ${d1} numbers. So ${sub(b1, m1)} = ${d1}.`
    ], { line: { lo: 0, hi: 20, from: m1, jumps: d1, dir: 1 } }),
    step('S1', 'Count up to subtract', `${sub(b2, m2)}. Start at ${m2}. Count up to ${b2}. Which numbers do you say?`, said, wrongsOf(said, [
      [withStart(m2, d2 + 1, 1), `Do not say the ${m2}. You are already at ${m2}. Say ${said}.`],
      [skipFirst(m2, d2 - 1, 1), `You skipped ${m2 + 1}. The number after ${m2} is ${m2 + 1}. Say ${said}.`]
    ]), { pic: { line: { lo: 0, hi: 20, from: m2 } } }),
    step('S2', 'Count up to subtract', `You said ${said}. So what is ${sub(b2, m2)}?`, d2, wrongsOf(d2, [
      [d2 + 1, `Count the numbers you said: ${said}. That is ${d2} numbers. The answer is ${d2}.`],
      [b2, `${b2} is where you stopped. The answer is how many numbers you said: ${d2}.`]
    ]), { explain: { line: { lo: 0, hi: 20, from: m2, jumps: d2, dir: 1 } } }),
    watch('W2', sk, 'Fact families', [
      `${add(f1, g1)} = ${c1}.`,
      `So ${sub(c1, g1)} = ${f1}. And ${sub(c1, f1)} = ${g1}.`,
      `The same three numbers: ${Math.min(f1, g1)}, ${Math.max(f1, g1)} and ${c1}.`,
      'You can add and take away with the same three numbers. They are a fact family.'   // FK 2.3 (was 4.0)
    ], { bond: { a: f1, b: g1, c: c1 } }),
    step('S3', sk, `${add(f2, g2)} = ${c2}. So what is ${sub(c2, g2)}?`, f2, wrongsOf(f2, [
      [g2, `${g2} is the number you take away. ${add(f2, g2)} = ${c2}, so ${sub(c2, g2)} = ${f2}.`],
      [c2 + g2, `You added. The minus sign means take away. ${add(f2, g2)} = ${c2}, so ${sub(c2, g2)} = ${f2}.`]
    ]), { pic: { bond: { a: f2, b: g2, c: c2, ask: 'a' } }, explain: { bond: { a: f2, b: g2, c: c2 } } }),
    step('S4', sk, `${add(f2, g2)} = ${c2}. So what is ${sub(c2, f2)}?`, g2, wrongsOf(g2, [
      [f2, `${f2} is the number you take away. ${add(f2, g2)} = ${c2}, so ${sub(c2, f2)} = ${g2}.`],
      [Math.abs(f2 - g2), `Use the adding fact. ${add(f2, g2)} = ${c2}, so ${sub(c2, f2)} = ${g2}.`],
      [g2 + 1, `Use the adding fact. ${add(f2, g2)} = ${c2}, so ${sub(c2, f2)} = ${g2}.`]
    ]), { pic: { bond: { a: f2, b: g2, c: c2, ask: 'b' } }, explain: { bond: { a: f2, b: g2, c: c2 } } })
  ];
}

/* ═══ THE LESSONS ═══
   teach(skill, ctx) → the watch + step items of one version: the lesson's one method, new numbers each version
                        (teachCountOn … teachThinkAdd above; a lesson not changed yet ignores ctx and teaches the same in each)
   parts       → [{ pool, build, n, filter? }] scored questions, in order
   pre         → { pool, build } for 🎯 Show what you know (5) — none on the facts check */
const LESSONS = [
  {
    id: 'AS1', title: 'Count On to Add', skill: 'Count on to add',
    pre: { pool: countOnPool, build: countOnQ },
    teach: teachCountOn,
    parts: [{ pool: countOnPool, build: countOnQ, n: 10 }]
  },
  {
    id: 'AS2', title: 'Make 10', skill: 'Make 10 to add',
    pre: { pool: make10Pool, build: make10Q },
    teach: teachMake10,
    parts: [
      { pool: () => range(1, 9), build: partnerQ, n: 4, skill: 'Ten partners' },
      { pool: make10Pool, build: make10Q, n: 6 }
    ]
  },
  {
    id: 'AS3', title: 'Teen Numbers: 10 and Some More', skill: 'Teen numbers: 10 and some more',
    pre: { pool: teenPool, build: teenQ },
    teach: teachTeen,
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
    teach: teachCountBack,
    parts: [{ pool: countBackPool, build: countBackQ, n: 10 }]
  },
  {
    id: 'AS5', title: 'Subtract by Thinking Addition', skill: 'Subtract by thinking addition',
    pre: { pool: familyPool, build: familyQ },
    teach: teachThinkAdd,
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


/* ═══ STRAND 2 · MULTIPLYING (Marcos 10/17: multiplying waits until adding and subtracting are passed) ═══ */
const TIMES = '×';
const skip = (k, n) => range(1, n).map(i => i * k).join(', ');

/* MU1 EQUAL GROUPS: g groups of n (g 2–6, n 2–6) */
function groupsPool() { const o = []; for (let g = 2; g <= 6; g++) for (let n = 2; n <= 6; n++) o.push([g, n]); return o; }
function groupsQ(id, [g, n], { pre, skill, r }) {
  const ans = g * n, adds = Array(g).fill(n).join(' + ');
  const how = `${g} groups of ${n}: ${adds} = ${ans}. So ${g} ${TIMES} ${n} = ${ans}.`;
  return question({
    id, skill, fact: { op: TIMES, a: g, b: n }, q: `There are ${g} groups. Each group has ${n}. How many in all?`,
    ...(pre ? { kind: 'pre' } : { hint: `Add ${n} one time for each group: ${g} times.`, pic: { groups: { g, n } }, explain: { groups: { g, n, show: ans } } }),
    explanation: how
  }, ans, [
    { v: g + n, keep: true, tag: 'Added the two numbers', say: `You added ${g} + ${n}. That is ${g} and ${n}, not ${g} groups of ${n}. ${how}` },
    { v: ans - n, tag: 'Counted one group too few', say: `You counted one group too few. There are ${g} groups. ${how}` },
    { v: ans + n, tag: 'Counted one group too many', say: `You counted one group too many. There are ${g} groups. ${how}` },
    { v: ans + 1, tag: 'Groups count off by one', say: `Count again. ${how}` },
    { v: ans - 1, tag: 'Groups count off by one', say: `Count again. ${how}` }
  ], r);
}

/* MU2 ARRAYS: rows × cols (2–6 × 2–6) */
function arrayPool() { const o = []; for (let a = 2; a <= 6; a++) for (let b = 2; b <= 6; b++) o.push([a, b]); return o; }
function arrayQ(id, [rows, cols], { pre, skill, r }) {
  const ans = rows * cols;
  const how = `${rows} rows of ${cols}: ${skip(cols, rows)}. So ${rows} ${TIMES} ${cols} = ${ans}.`;
  return question({
    id, skill, fact: { op: TIMES, a: rows, b: cols }, q: `An array has ${rows} rows. Each row has ${cols} dots. How many dots in all?`,
    ...(pre ? { kind: 'pre' } : { hint: `Count by ${cols}s, one count for each row.`, pic: { array: { rows, cols } }, explain: { array: { rows, cols, show: ans } } }),
    explanation: how
  }, ans, [
    { v: rows + cols, keep: true, tag: 'Added rows and columns', say: `You added ${rows} + ${cols}. Count the dots: ${rows} rows of ${cols}. ${how}` },
    { v: ans - cols, tag: 'Missed a row', say: `You left out one row. There are ${rows} rows. ${how}` },
    { v: ans + cols, tag: 'Counted an extra row', say: `You counted one row too many. There are ${rows} rows. ${how}` },
    { v: ans - rows, tag: 'Missed a column', say: `You left out one dot in every row. Each row has ${cols}. ${how}` },
    { v: ans + rows, tag: 'Counted an extra column', say: `You counted one dot too many in every row. Each row has ${cols}. ${how}` }
  ], r);
}

/* MU3 SKIP COUNT: n × k by counting by k (k = 2, 5, 10; n 2–10) */
function skipPool() { const o = []; for (const k of [2, 5, 10]) for (let n = 2; n <= 10; n++) o.push([n, k]); return o; }
function skipQ(id, [n, k], { pre, skill, r }) {
  const ans = n * k, seq = skip(k, n);
  const how = `Count by ${k}s, ${n} times: ${seq}. So ${n} ${TIMES} ${k} = ${ans}.`;
  return question({
    id, skill, fact: { op: TIMES, a: n, b: k }, q: `What is ${n} ${TIMES} ${k}?`,
    ...(pre ? { kind: 'pre' } : { hint: `Count by ${k}s. Hold up one finger each time. Stop at ${n} fingers.`, pic: { line: { lo: 0, hi: Math.max(20, ans + k), step: k } }, explain: { line: { lo: 0, hi: Math.max(20, ans + k), from: 0, jumps: n, dir: 1, step: k } } }),
    explanation: how
  }, ans, [
    { v: ans - k, keep: true, tag: 'Skip count one too few', say: `You stopped one count too soon. Count by ${k}s, ${n} times: ${seq}.` },
    { v: ans + k, tag: 'Skip count one too many', say: `You counted one time too many. Count by ${k}s, ${n} times: ${seq}.` },
    { v: n + k, tag: 'Added the two numbers', say: `You added ${n} + ${k}. Times means groups: ${how}` },
    { v: ans + 1, tag: 'Skip count off by a little', say: `Count again. ${how}` },
    { v: ans - 1, tag: 'Skip count off by a little', say: `Count again. ${how}` }
  ], r);
}

/* MU6 TIMES AS MANY: Ben has b; Ana has t times as many (t 2–5, b 2–9) */
const NAMES = [['Ana', 'Ben', 'stickers'], ['Mia', 'Leo', 'shells'], ['Kim', 'Sam', 'cards'], ['Ava', 'Max', 'marbles'], ['Zoe', 'Eli', 'books']];
function timesPool() { const o = []; for (let t = 2; t <= 5; t++) for (let b = 2; b <= 9; b++) o.push([t, b]); return o; }
function timesQ(id, [t, b], { pre, skill, r }) {
  const [p1, p2, thing] = NAMES[(t * 7 + b) % NAMES.length], ans = t * b;
  const how = `${t} times as many as ${b} means ${t} groups of ${b}. ${t} ${TIMES} ${b} = ${ans}. ${p1} has ${ans} ${thing}.`;
  return question({
    id, skill, fact: { op: TIMES, a: t, b }, q: `${p2} has ${b} ${thing}. ${p1} has ${t} times as many ${thing} as ${p2}. How many ${thing} does ${p1} have?`,
    ...(pre ? { kind: 'pre' } : { hint: `"${t} times as many" means ${t} groups of ${b}.`, pic: { bars: { t, b } }, explain: { bars: { t, b, show: ans } } }),
    explanation: how
  }, ans, [
    { v: t + b, keep: true, tag: 'Added instead of times as many', say: `You added ${t} + ${b}. "Times as many" means multiply. ${how}` },
    { v: b, tag: 'Gave the smaller amount', say: `${b} is how many ${p2} has. ${p1} has ${t} times as many. ${how}` },
    { v: ans - b, tag: 'One group too few', say: `You made one group too few. ${how}` },
    { v: ans + b, tag: 'One group too many', say: `You made one group too many. ${how}` }
  ], r);
}

/* MU4 / MU5 / MU7 FACTS: a × b */
function factsPool(set) { const o = []; for (const k of set) for (let n = 1; n <= 10; n++) o.push([n, k]); return o; }
function multQ(id, [a, b], { pre, skill, r }) {
  const ans = a * b, small = Math.min(a, b), big = Math.max(a, b);
  const how = `${a} ${TIMES} ${b} = ${ans}. Count by ${big}s, ${small} times: ${skip(big, small)}.`;
  return question({
    id, skill, fact: { op: TIMES, a, b }, q: `What is ${a} ${TIMES} ${b}?`, ...(pre ? { kind: 'pre' } : {}), explanation: how
  }, ans, [
    { v: ans - big, tag: 'One group too few', say: `Your answer is one group of ${big} too small. ${how}` },
    { v: ans + big, tag: 'One group too many', say: `Your answer is one group of ${big} too big. ${how}` },
    { v: a + b, tag: 'Added instead of multiplying', say: `You added ${a} + ${b}. The times sign means groups. ${how}` },
    { v: ans - small, tag: 'Off by a group', say: `Your answer is ${small} too small. ${how}` },
    { v: ans + small, tag: 'Off by a group', say: `Your answer is ${small} too big. ${how}` },
    { v: ans + 1, tag: 'Off by one', say: `Your answer is 1 too big. ${how}` },
    { v: ans - 1, tag: 'Off by one', say: `Your answer is 1 too small. ${how}` }
  ], r);
}


const MU_LESSONS = ({ watch, step, B }) => [
  {
    id: 'MU1', title: 'Equal Groups', skill: 'Equal groups',
    pre: { pool: B.groupsPool, build: B.groupsQ },
    teach: sk => [
      watch('W1', sk, 'Equal groups', [
        'Look at the picture. There are 3 groups.',
        'Each group has 4 dots. Every group has the same number of dots. That makes them equal groups.',
        'Add 4 one time for each group: 4 + 4 + 4 = 12.',
        `3 groups of 4 is 12. We write it 3 ${TIMES} 4 = 12. The ${TIMES} sign means "groups of."`
      ], { groups: { g: 3, n: 4, show: 12 } }),
      step('S1', sk, 'How many groups are there?', 2, [
        [5, '5 is how many dots are in each group. Count the circles: there are 2 groups.'],
        [7, 'Count only the circles. There are 2 groups.']
      ], { pic: { groups: { g: 2, n: 5 } } }),
      step('S2', sk, 'How many dots are in each group?', 5, [
        [2, '2 is how many groups there are. Count the dots in one circle: 5.'],
        [10, '10 is all the dots. Count the dots in one circle: 5.']
      ], { pic: { groups: { g: 2, n: 5 } } }),
      step('S3', sk, 'Which adding shows 2 groups of 5?', '5 + 5', [
        ['2 + 5', '2 + 5 adds the two numbers. 2 groups of 5 is 5, and 5 more: 5 + 5.'],
        ['5 + 5 + 5', '5 + 5 + 5 is 3 groups. There are 2 groups: 5 + 5.']
      ], { pic: { groups: { g: 2, n: 5 } } }),
      step('S4', sk, `So what is 2 ${TIMES} 5?`, 10, [
        [7, `7 is 2 + 5. 2 groups of 5 is 5 + 5 = 10. So 2 ${TIMES} 5 = 10.`],
        [15, `15 is 3 groups of 5. There are 2 groups: 5 + 5 = 10.`]
      ], { explain: { groups: { g: 2, n: 5, show: 10 } } }),
      watch('W2', sk, `${TIMES} means groups of, not plus`, [
        `4 ${TIMES} 3 means 4 groups of 3.`,
        '3 + 3 + 3 + 3 = 12.',
        `So 4 ${TIMES} 3 = 12. It is not 4 + 3. 4 + 3 = 7, and that is a different answer.`
      ], { groups: { g: 4, n: 3, show: 12 } })
    ],
    parts: [{ pool: B.groupsPool, build: B.groupsQ, n: 10 }]
  },
  {
    id: 'MU2', title: 'Arrays', skill: 'Arrays',
    pre: { pool: B.arrayPool, build: B.arrayQ },
    teach: sk => [
      watch('W1', sk, 'Arrays', [
        'An array is dots in rows. Every row has the same number of dots.',
        'This array has 3 rows. Each row has 5 dots.',
        'Count by 5s, one count for each row: 5, 10, 15.',
        `3 rows of 5 is 15. 3 ${TIMES} 5 = 15.`
      ], { array: { rows: 3, cols: 5, show: 15 } }),
      step('S1', sk, 'How many rows does this array have? Rows go across.', 4, [
        [2, '2 is how many dots are in one row. Rows go across. Count the rows: 4.'],
        [8, '8 is all the dots. Count the rows: 4.']
      ], { pic: { array: { rows: 4, cols: 2 } } }),
      step('S2', sk, 'How many dots are in each row?', 2, [
        [4, '4 is how many rows there are. Count the dots in one row: 2.'],
        [8, '8 is all the dots. Count the dots in one row: 2.']
      ], { pic: { array: { rows: 4, cols: 2 } } }),
      step('S3', sk, 'Count by 2s, one count for each row. Which numbers do you say?', '2, 4, 6, 8', [
        ['2, 4, 6', 'There are 4 rows, so say 4 numbers: 2, 4, 6, 8.'],
        ['4, 8, 12, 16', 'That is counting by 4s. Each row has 2, so count by 2s: 2, 4, 6, 8.']
      ], { pic: { array: { rows: 4, cols: 2 } } }),
      step('S4', sk, `So what is 4 ${TIMES} 2?`, 8, [
        [6, `6 is 4 + 2. Count by 2s four times: 2, 4, 6, 8. So 4 ${TIMES} 2 = 8.`],
        [10, `10 is 5 rows of 2. There are 4 rows: 2, 4, 6, 8.`]
      ], { explain: { array: { rows: 4, cols: 2, show: 8 } } })
    ],
    parts: [{ pool: B.arrayPool, build: B.arrayQ, n: 10 }]
  },
  {
    id: 'MU3', title: 'Skip Count by 2s, 5s and 10s', skill: 'Skip count to multiply',
    pre: { pool: B.skipPool, build: B.skipQ },
    teach: sk => [
      watch('W1', sk, 'Skip count to multiply', [
        'Counting by 5s is a fast way to multiply by 5.',
        `6 ${TIMES} 5 means count by 5s, 6 times. Hold up one finger each time.`,
        '5, 10, 15, 20, 25, 30. That is 6 fingers.',
        `So 6 ${TIMES} 5 = 30.`
      ], { line: { lo: 0, hi: 40, from: 0, jumps: 6, dir: 1, step: 5 } }),
      step('S1', sk, 'Count by 2s: 2, 4, 6. Which number comes next?', 8, [
        [7, 'Counting by 2s skips one number each time. After 6 comes 8.'],
        [10, 'Count by 2s: 2, 4, 6, then 8.']
      ], { pic: { line: { lo: 0, hi: 20, step: 2 } } }),
      step('S2', sk, 'Count by 10s, 4 times. Which number do you stop on?', 40, [
        [14, '14 is 10 + 4. Count by 10s, 4 times: 10, 20, 30, 40.'],
        [30, '30 is only 3 counts. Count 4 times: 10, 20, 30, 40.']
      ], { pic: { line: { lo: 0, hi: 50, step: 10 } }, explain: { line: { lo: 0, hi: 50, from: 0, jumps: 4, dir: 1, step: 10 } } }),
      step('S3', sk, `So what is 4 ${TIMES} 10?`, 40, [
        [14, `14 is 4 + 10. Count by 10s, 4 times: 10, 20, 30, 40. So 4 ${TIMES} 10 = 40.`],
        [50, '50 is 5 counts of 10. Count 4 times: 10, 20, 30, 40.']
      ], { explain: { line: { lo: 0, hi: 50, from: 0, jumps: 4, dir: 1, step: 10 } } })
    ],
    parts: [{ pool: B.skipPool, build: B.skipQ, n: 10 }]
  },
  {
    id: 'MU4', title: 'Facts: 2s, 5s and 10s', skill: 'Facts: 2s, 5s and 10s',
    pre: { pool: () => B.factsPool([2, 5, 10]), build: B.multQ },
    teach: sk => [
      watch('W1', sk, 'Three fast ways', [
        `Times 2 is a double. 2 ${TIMES} 7 is 7 + 7 = 14.`,
        `Times 10: count by 10s. 10 ${TIMES} 6 is 10, 20, 30, 40, 50, 60. That is 60.`,
        `Times 5: count by 5s. 5 ${TIMES} 4 is 5, 10, 15, 20. That is 20.`
      ]),
      step('S1', sk, `2 ${TIMES} 8 is the same as which double?`, '8 + 8', [
        ['2 + 8', `2 + 8 adds the two numbers. 2 ${TIMES} 8 is 2 groups of 8: 8 + 8.`],
        ['8 + 8 + 8', `That is 3 groups of 8. 2 ${TIMES} 8 is 8 + 8.`]
      ]),
      step('S2', sk, `So what is 2 ${TIMES} 8?`, 16, [
        [10, `10 is 2 + 8. 2 ${TIMES} 8 is 8 + 8 = 16.`],
        [18, `8 + 8 = 16. Count on from 8: 9, 10, 11, 12, 13, 14, 15, 16.`]
      ]),
      step('S3', sk, `Count by 5s to find 5 ${TIMES} 3. Which number do you stop on?`, 15, [
        [8, `8 is 5 + 3. Count by 5s, 3 times: 5, 10, 15.`],
        [20, `20 is 4 counts. Count 3 times: 5, 10, 15.`]
      ], { explain: { line: { lo: 0, hi: 30, from: 0, jumps: 3, dir: 1, step: 5 } } })
    ],
    parts: [{ pool: () => B.factsPool([2, 5, 10]), build: B.multQ, n: 10 }]
  },
  {
    id: 'MU5', title: '3s and 4s', skill: 'Facts: 3s and 4s',
    pre: { pool: () => B.factsPool([3, 4]), build: B.multQ },
    teach: sk => [
      watch('W1', sk, 'Times 4: double, then double again', [
        `4 ${TIMES} 6. First double 6: 6 + 6 = 12. That is 2 groups of 6.`,
        'Then double again: 12 + 12 = 24. That is 4 groups of 6.',
        `So 4 ${TIMES} 6 = 24.`
      ], { groups: { g: 4, n: 6, show: 24 } }),
      step('S1', sk, `4 ${TIMES} 7. First double 7. What is 7 + 7?`, 14, [
        [11, '11 is 7 + 4. Double 7 means 7 + 7 = 14.'],
        [13, 'Count on from 7: 8, 9, 10, 11, 12, 13, 14. 7 + 7 = 14.']
      ]),
      step('S2', sk, `Now double 14. What is 14 + 14? That is 4 ${TIMES} 7.`, 28, [
        [21, '21 is 3 groups of 7. Double 14: 14 + 14 = 28.'],
        [18, '18 is 14 + 4. Double 14: 14 + 14 = 28.']
      ], { explain: { groups: { g: 4, n: 7, show: 28 } } }),
      watch('W2', sk, 'Times 3: times 2, and one more group', [
        `3 ${TIMES} 6. First 2 ${TIMES} 6: 6 + 6 = 12.`,
        'Add one more group of 6: 12 + 6 = 18.',
        `So 3 ${TIMES} 6 = 18.`
      ], { groups: { g: 3, n: 6, show: 18 } }),
      step('S3', sk, `3 ${TIMES} 5. 2 ${TIMES} 5 = 10. Add one more 5. What is 10 + 5?`, 15, [
        [8, `8 is 3 + 5. 3 ${TIMES} 5 is 2 groups of 5 and one more: 10 + 5 = 15.`],
        [20, `20 is 4 groups of 5. Add only one more 5: 10 + 5 = 15.`]
      ], { explain: { groups: { g: 3, n: 5, show: 15 } } })
    ],
    parts: [{ pool: () => B.factsPool([3, 4]), build: B.multQ, n: 10 }]
  },
  {
    id: 'MU6', title: 'Times as Many', skill: 'Times as many',
    pre: { pool: B.timesPool, build: B.timesQ },
    teach: sk => [
      watch('W1', sk, 'Times as many', [
        'Ben has 4 stickers. Ana has 3 times as many stickers as Ben.',
        `3 times as many means 3 groups of Ben's 4.`,
        `4 + 4 + 4 = 12. So 3 ${TIMES} 4 = 12.`,
        'Ana has 12 stickers. Times as many means multiply, not add.'
      ], { bars: { t: 3, b: 4, show: 12 } }),
      step('S1', sk, 'Leo has 5 shells. Mia has 2 times as many shells as Leo. How many groups of 5 does Mia have?', 2, [
        [5, '5 is how many shells Leo has. 2 times as many means 2 groups of 5.'],
        [7, '7 is 2 + 5. 2 times as many means 2 groups of 5.']
      ], { pic: { bars: { t: 2, b: 5 } } }),
      step('S2', sk, 'So how many shells does Mia have?', 10, [
        [7, `7 is 2 + 5. Times as many means groups. 2 groups of 5 is 10.`],
        [5, `5 is Leo's shells. Mia has 2 groups of 5: 10.`]
      ], { explain: { bars: { t: 2, b: 5, show: 10 } } })
    ],
    parts: [{ pool: B.timesPool, build: B.timesQ, n: 10 }]
  },
  {
    id: 'MU7', title: 'Multiplication Facts Check', skill: 'Multiplication facts (check)', check: true,
    teach: sk => [
      watch('W1', sk, 'The facts check', [
        'This is the facts check. It has 20 facts. They are 2s, 3s, 4s, 5s and 10s.',
        'Use your fast ways: doubles for 2s, double and double again for 4s, count by 5s and 10s, and times 2 plus one more group for 3s.',
        'There are no hints and no pictures this time.',
        'Get 18 of 20 right to finish Multiplying.'
      ])
    ],
    parts: [{ pool: () => B.factsPool([2, 3, 4, 5, 10]).filter(([n]) => n >= 2), build: B.multQ, n: 20 }]
  }
];
LESSONS.push(...MU_LESSONS({ watch, step, B: { groupsPool, groupsQ, arrayPool, arrayQ, skipPool, skipQ, timesPool, timesQ, factsPool, multQ } }));

/* ═══ STRAND 3 · PLACE VALUE (not facts: 70%) ═══
   Every question carries a `mistake` record ({ type, n, … }) so a miss comes back as the student's own question
   (Marcos 10/19: "everything in the lab should be tailored to each student's needs"). Types:
   V value of a digit · E expanded form · C compare · N rename (how many tens / hundreds) · B benchmarks · H halfway · R round.
   Sentences are short (reading grade 3 or lower). */
const fmt = n => Number(n).toLocaleString('en-US');
const PLACES = ['ones', 'tens', 'hundreds', 'thousands', 'ten thousands', 'hundred thousands'];
const digitsOf = n => String(n).split('').reverse().map(Number);   // [ones, tens, hundreds, …]
const pow = p => 10 ** p;

/* V · VALUE OF A DIGIT: the digit appears once; ask about place p (tens and up) */
function valuePool(len) {
  const out = [];
  const lo = pow(len - 1), hi = pow(len) - 1;
  for (let n = lo; n <= hi; n += len === 3 ? 7 : 61) {
    const d = digitsOf(n);
    if (d.includes(0) || new Set(d).size !== d.length) continue;
    for (let p = 1; p < len; p++) out.push([n, p]);
  }
  return out;
}
function valueQ(id, [n, p], { pre, skill, r }) {
  const d = digitsOf(n), digit = d[p], ans = digit * pow(p), place = PLACES[p];
  const how = `The ${digit} is in the ${place} place. ${digit} ${place} is ${fmt(ans)}. So the ${digit} is worth ${fmt(ans)}.`;
  return question({
    id, skill, q: `In ${fmt(n)}, what is the value of the ${digit}?`, mistake: { type: 'V', n, p }, noNear: true, commas: true,
    ...(pre ? { kind: 'pre' } : { hint: `Find the place of the ${digit}. Count the places from the right.`, pic: { places: { n } }, explain: { places: { n, mark: p } } }),
    explanation: how
  }, ans, [
    { v: digit, keep: true, tag: 'Gave the digit, not its value', say: `${digit} is the digit. Its place tells what it is worth. ${how}` },
    { v: digit * pow(p + 1), tag: 'One place too far left', say: `That is one place too far left. ${how}` },
    ...(p > 1 ? [{ v: digit * pow(p - 1), tag: 'One place too far right', say: `That is one place too far right. ${how}` }] : []),
    { v: n, tag: 'Gave the whole number', say: `${fmt(n)} is the whole number. The question asks about the ${digit}. ${how}` },
    { v: digit * pow(p + 2), tag: 'Two places too far left', say: `That is two places too far left. ${how}` }
  ], r);
}

/* E · EXPANDED FORM: "300 + 40 + 7" → 347, any size, zeros hold places */
function expandedPool() {
  const out = [];
  for (let h = 1; h <= 9; h++) for (let t = 0; t <= 9; t += 3) for (let o = 1; o <= 9; o += 2) out.push([h * 100 + t * 10 + o]);
  return out;
}
function expandedQ(id, [n], { pre, skill, r }) {
  const d = digitsOf(n);
  const parts = d.map((x, i) => x * pow(i)).filter(x => x > 0).reverse();
  const exp = parts.map(fmt).join(' + ');
  const zero = d.some((x, i) => x === 0 && i < d.length - 1);
  const how = `Put each part in its place. ${exp} = ${fmt(n)}.${zero ? ' A 0 holds the empty place.' : ''}`;
  // a part moved one place left (8,000 + 90 read as 8,900); the zeros dropped (8,090 → 89)
  const moved = parts.length > 1 ? n - parts[parts.length - 1] + parts[parts.length - 1] * 10 : null;
  const noZeros = zero ? Number(String(n).replace(/0/g, '')) : null;
  return question({
    id, skill, q: `What number is ${exp}?`, mistake: { type: 'E', n }, noNear: true, commas: true,
    ...(pre ? { kind: 'pre' } : { hint: 'Put each part in its place. A 0 holds an empty place.', pic: { places: { parts } }, explain: { places: { n } } }),
    explanation: how
  }, n, [
    ...(noZeros ? [{ v: noZeros, keep: true, tag: 'Left out a zero', say: `A place was left out. A 0 must hold it. ${how}` }] : []),
    ...(moved && moved !== n ? [{ v: moved, keep: !noZeros, tag: 'Put a part in the wrong place', say: `A part went one place too far left. ${how}` }] : []),
    { v: d.reduce((a, b) => a + b, 0), tag: 'Added the digits', say: `You added the digits. Each digit has a place. ${how}` },
    { v: n + pow(d.length - 1), tag: 'Biggest place off by one', say: `Look at the biggest place again. ${how}` },
    { v: n - pow(d.length - 1), tag: 'Biggest place off by one', say: `Look at the biggest place again. ${how}` },
    ...(!zero && d.length >= 2 ? [{ v: Number(String(n).slice(0, -2) + String(n).slice(-1) + String(n).slice(-2, -1)), tag: 'Swapped the last two places', say: `The last two digits got swapped. ${how}` }] : [])
  ], r);
}

/* C · COMPARE: which sentence is true? (4 sentences, one true) */
function comparePool() {
  const out = [];
  for (let a = 1203; a <= 9876; a += 389) {
    const b1 = a + (a % 7 + 1) * 100 - (a % 3) * 10;          // differ in the hundreds
    const b2 = Number(String(a).slice(0, 1) + String((a + 5) % 1000).padStart(3, '0'));   // same thousands
    [b1, b2].forEach(b => { if (b !== a && b >= 1000 && b <= 9999) out.push(a > b ? [a, b] : [b, a]); });
  }
  return out;
}
function compareQ(id, [big, small], { pre, skill, r }) {
  const A = fmt(big), Bv = fmt(small);
  const db = digitsOf(big).reverse(), ds = digitsOf(small).reverse();
  let i = 0; while (i < db.length && db[i] === ds[i]) i++;
  const place = PLACES[db.length - 1 - i];
  const how = `Compare from the left. The first place that is different is the ${place} place: ${db[i]} and ${ds[i]}. ${db[i]} is more. So ${A} is greater than ${Bv}.`;
  const answer = `${A} is greater than ${Bv}`;
  return wordQuestion({
    id, skill, q: `Which sentence is true?`, mistake: { type: 'C', n: big, m: small }, compare: [big, small],
    ...(pre ? { kind: 'pre' } : { hint: 'Compare the digits from the left. Find the first place that is different.', pic: { places: { n: big, n2: small } } }),
    explanation: how
  }, answer, [
    { v: `${A} is less than ${Bv}`, tag: 'Compared the wrong way', say: `${A} is not less. ${how}` },
    { v: `${Bv} is greater than ${A}`, tag: 'Compared the wrong way', say: `${Bv} is not greater. ${how}` },
    { v: `${A} is equal to ${Bv}`, tag: 'Said the numbers are equal', say: `The numbers are not the same. ${how}` }
  ], r);
}

/* N · RENAME: n is how many tens / hundreds? */
function renamePool() {
  const out = [];
  for (let k = 12; k <= 98; k += 7) { out.push([k * 10, 10]); out.push([k * 100, 100]); }
  for (let k = 120; k <= 990; k += 73) out.push([k * 10, 10]);
  return out;
}
function renameQ(id, [n, unit], { pre, skill, r }) {
  const name = unit === 10 ? 'tens' : 'hundreds', ans = n / unit;
  const how = `Every ${unit === 10 ? 'ten' : 'hundred'} is ${unit}. ${fmt(n)} ÷ ${unit} = ${fmt(ans)}. So ${fmt(n)} is ${fmt(ans)} ${name}.`;
  return question({
    id, skill, q: `${fmt(n)} is the same as how many ${name}?`, mistake: { type: 'N', n, unit }, noNear: true, commas: true,
    ...(pre ? { kind: 'pre' } : { hint: `Cover the last ${unit === 10 ? '0' : 'two 0s'}. The rest is how many ${name}.` }),
    explanation: how.replace(` ${fmt(n)} ÷ ${unit} = ${fmt(ans)}.`, ` Take off ${unit === 10 ? 'one 0' : 'two 0s'}: ${fmt(ans)}.`)
  }, ans, [
    { v: n, keep: true, tag: 'Gave the same number', say: `${fmt(n)} is the number itself. Count how many ${name} make it. Take off ${unit === 10 ? 'one 0' : 'two 0s'}: ${fmt(ans)}.` },
    { v: n * 10, tag: 'Added a zero instead of taking one off', say: `Take a 0 off. Do not add one. ${fmt(n)} is ${fmt(ans)} ${name}.` },
    ...(unit === 10
      ? [{ v: Math.floor(n / 100), tag: 'Counted only the hundreds', say: `That counts only the hundreds. Count all the tens. Take off one 0: ${fmt(ans)}.` },
         ...(Math.floor(n / 10) % 10 ? [{ v: Math.floor(n / 10) % 10, tag: 'Gave only the tens digit', say: `That is only the digit in the tens place. Count all the tens. Take off one 0: ${fmt(ans)}.` }] : [])]
      : [{ v: n / 10, tag: 'Counted tens instead of hundreds', say: `That counts tens. Count hundreds. Take off two 0s: ${fmt(ans)}.` },
         { v: Math.floor(n / 1000), tag: 'Counted only the thousands', say: `That counts only the thousands. Count all the hundreds. Take off two 0s: ${fmt(ans)}.` },
         ...(Math.floor(n / 100) % 10 ? [{ v: Math.floor(n / 100) % 10, tag: 'Gave only the hundreds digit', say: `That is only the digit in the hundreds place. Count all the hundreds. Take off two 0s: ${fmt(ans)}.` }] : [])])
  ], r);
}

/* × 10 / × 100 */
function times10Pool(k) { const out = []; for (let n = 2; n <= (k === 10 ? 99 : 49); n += (k === 10 ? 3 : 2)) if (n % 10) out.push([n, k]); return out; }
function times10Q(id, [n, k], { pre, skill, r }) {
  const ans = n * k, zeros = k === 10 ? 'one 0' : 'two 0s';
  const how = `${k} ${TIMES} ${n}. Each digit moves ${k === 10 ? 'one place' : 'two places'} left. ${k === 10 ? 'A 0 fills the empty place' : 'Two 0s fill the empty places'}. ${k} ${TIMES} ${n} = ${fmt(ans)}.`;
  return question({
    id, skill, fact: { op: TIMES, a: k, b: n }, q: `What is ${k} ${TIMES} ${n}?`, noNear: true, commas: true,
    ...(pre ? { kind: 'pre' } : { hint: `Times ${k}: write ${n}. Then write ${zeros}.`, pic: { shift: { n, k } }, explain: { shift: { n, k, show: ans } } }),
    explanation: how
  }, ans, [
    { v: n + k, keep: true, tag: 'Added instead of multiplying', say: `You added ${n} + ${k}. Times ${k} makes it ${k} times as big. ${how}` },
    { v: k === 10 ? n * 100 : n * 10, tag: k === 10 ? 'Two zeros instead of one' : 'One zero instead of two', say: `Count the 0s in ${k}: ${k === 10 ? 'one' : 'two'}. ${how}` },
    { v: n * 1000, tag: 'Too many zeros', say: `That has too many 0s. ${how}` },
    { v: Number(`${k}${n}`), tag: 'Wrote the numbers side by side', say: `${k} and ${n} were put side by side. That is not times. ${how}` },
    { v: Number(String(n) + String(n).slice(-1)), tag: 'Repeated a digit', say: `A 0 fills the ones place. Not a copy of a digit. ${how}` },
    { v: n, tag: 'Left off the zeros', say: `${n} did not move. Times ${k} adds ${zeros}. ${how}` }
  ], r);
}

/* MULTIPLES OF 10: a × (b tens) */
function multiplesPool() { const out = []; for (let a = 2; a <= 9; a++) for (let b = 2; b <= 9; b++) out.push([a, b * 10]); return out; }
function multiplesQ(id, [a, m], { pre, skill, r }) {
  const b = m / 10, base = a * b, ans = a * m;
  const how = `${m} is ${b} tens. ${a} ${TIMES} ${b} = ${base}. ${base} tens is ${fmt(ans)}. So ${a} ${TIMES} ${m} = ${fmt(ans)}.`;
  return question({
    id, skill, fact: { op: TIMES, a, b: m }, q: `What is ${a} ${TIMES} ${m}?`, noNear: true, commas: true,
    ...(pre ? { kind: 'pre' } : { hint: `First ${a} ${TIMES} ${b}. Then write a 0.` }),
    explanation: how
  }, ans, [
    { v: base, keep: true, tag: 'Forgot the zero', say: `${base} is ${a} ${TIMES} ${b}. But ${m} is ${b} tens. Write the 0. ${how}` },
    { v: base * 100, tag: 'Two zeros instead of one', say: `${m} has one 0. So the answer has one 0 after ${base}. ${how}` },
    { v: (base + 1) * 10, tag: 'Fact off by one', say: `Check the fact. ${a} ${TIMES} ${b} = ${base}. ${how}` },
    { v: (base - 1) * 10, tag: 'Fact off by one', say: `Check the fact. ${a} ${TIMES} ${b} = ${base}. ${how}` },
    { v: a + m, tag: 'Added instead of multiplying', say: `You added ${a} + ${m}. ${how}` }
  ], r);
}

/* ═══ STRAND 4 · ROUNDING — the class's method: benchmarks, halfway, before/past, round (70%) ═══ */
const PLACE = { 10: 'ten', 100: 'hundred', 1000: 'thousand', 10000: 'ten thousand', 100000: 'hundred thousand', 1000000: 'million' };

/* A question whose choices are words ("40 and 50") — one right, three named slips, placed at random. */
function wordQuestion(base, answer, wrongs, r) {
  const seen = new Set([answer]);
  const picked = shuffled(wrongs.filter(w => w.v && !seen.has(w.v) && seen.add(w.v)), r).slice(0, 3);
  if (picked.length < 3) throw new Error(`${base.id}: fewer than 3 wrong choices for ${base.q}`);
  const slips = {};
  picked.forEach(w => { slips[w.v] = { tag: w.tag, say: w.say }; });
  return { ...base, choices: shuffled([answer, ...picked.map(w => w.v)], r), answer, slips };
}

function benchPool(unit) {
  const out = [];
  const lo = unit === 10 ? 11 : unit === 100 ? 101 : 1001, hi = unit === 10 ? 99 : unit === 100 ? 999 : 9999;
  const step = unit === 10 ? 1 : unit === 100 ? 7 : 61;
  for (let n = lo; n <= hi; n += step) if (n % unit) out.push([n, unit]);
  return out;
}
const pair = (a, b) => `${fmt(a)} and ${fmt(b)}`;
/* halfway questions: one per pair of benchmarks (43 and 47 would both ask "halfway between 40 and 50") */
function halfPool(unit, big) {
  const out = [];
  const lo = big ? 1000 : unit, hi = big ? 9900 : unit * 9;
  for (let low = lo; low <= hi; low += unit) out.push([low + unit / 2, unit]);
  return out;
}
/* B · THE TWO BENCHMARKS */
function benchQ(id, [n, unit], { pre, skill, r }) {
  const low = Math.floor(n / unit) * unit, high = low + unit, name = PLACE[unit];
  const how = `Count by ${name}s: ${fmt(low)}, ${fmt(high)}. ${fmt(n)} is more than ${fmt(low)}. It is less than ${fmt(high)}. So it is between ${pair(low, high)}.`;
  const smaller = unit / 10;
  const lowS = Math.floor(n / smaller) * smaller;
  return wordQuestion({
    // "which two hundred thousands" sounds like 200,000s: for that place the question says benchmarks (Big Numbers)
    id, skill, mistake: { type: 'B', n, unit }, q: unit === 100000 ? `${fmt(n)} is between which two benchmarks? Count by hundred thousands.` : `${fmt(n)} is between which two ${name}s?`,
    ...(pre ? { kind: 'pre' } : { hint: `Count by ${name}s. Find the ${name} below ${fmt(n)}. Then the one above it.`, pic: { rline: { n, unit, hideEnds: true } }, explain: { rline: { n, unit, bench: true } } }),
    explanation: how
  }, pair(low, high), [
    ...(smaller >= 10 ? [{ v: pair(lowS, lowS + smaller), tag: 'Used the wrong place', say: `Those are ${PLACE[smaller]}s. The question asks for ${name}s. ${how}` }] : []),
    { v: pair(low - unit, low), tag: 'One benchmark too low', say: `${fmt(n)} is more than ${fmt(low)}. ${how}` },
    { v: pair(high, high + unit), tag: 'One benchmark too high', say: `${fmt(n)} is less than ${fmt(high)}. ${how}` },
    ...(unit < 1000 ? [{ v: pair(Math.floor(n / (unit * 10)) * unit * 10, Math.floor(n / (unit * 10)) * unit * 10 + unit * 10), tag: 'Used the wrong place', say: `Those are ${PLACE[unit * 10]}s. The question asks for ${name}s. ${how}` }] : [])
  ], r);
}

/* H · HALFWAY */
function halfwayQ(id, [n, unit], { pre, skill, r }) {
  const low = Math.floor(n / unit) * unit, high = low + unit, half = low + unit / 2;
  const how = `Halfway is the middle. It is ${fmt(unit / 2)} past ${fmt(low)}. It is ${fmt(unit / 2)} before ${fmt(high)}. So halfway is ${fmt(half)}.`;
  return question({
    id, skill, noNear: true, commas: true, mistake: { type: 'H', n: half, unit }, q: `What is halfway from ${fmt(low)} to ${fmt(high)}?`,
    ...(pre ? { kind: 'pre' } : { hint: `Halfway is the middle. For ${PLACE[unit]}s, it ends in ${fmt(unit / 2)}.`, pic: { rline: { n: half, unit, hideN: true } }, explain: { rline: { n: half, unit, half: true, hideN: true } } }),
    explanation: how
  }, half, [
    { v: low + unit / 10 * 5 + unit / 10, tag: 'Missed the middle', say: `That is past the middle. ${how}` },
    { v: low + unit / 10 * 4, tag: 'Missed the middle', say: `That is before the middle. ${how}` },
    ...(unit > 10 && unit <= 1000 ? [{ v: low + 5, tag: 'Halfway of the wrong place', say: `That is halfway for tens. ${how}` }] : []),
    // big numbers (Big Numbers strand): halfway for the next smaller place, 40,500 for 40,000 to 50,000
    ...(unit >= 10000 ? [{ v: low + unit / 20, tag: 'Halfway of a smaller place', say: `That is halfway for ${PLACE[unit / 10]}s. ${how}` }] : []),
    { v: high, tag: 'Gave a benchmark', say: `${fmt(high)} is an end, not the middle. ${how}` },
    { v: low, tag: 'Gave a benchmark', say: `${fmt(low)} is an end, not the middle. ${how}` }
  ], r);
}

/* R · ROUND to the nearest ten / hundred / thousand */
function roundQ(id, [n, unit], { pre, skill, r }) {
  const low = Math.floor(n / unit) * unit, high = low + unit, half = low + unit / 2, name = PLACE[unit];
  const up = n >= half, ans = up ? high : low, other = up ? low : high;
  const how = `${fmt(n)} is between ${pair(low, high)}. Halfway is ${fmt(half)}. ${fmt(n)} is ${n === half ? 'right at halfway. Halfway rounds up' : up ? 'past halfway' : 'before halfway'}. So it rounds ${up ? 'up' : 'down'} to ${fmt(ans)}.`;
  const tenRound = Math.round(n / (unit / 10)) * (unit / 10);
  const bigUnit = unit * 10, bigRound = Math.round(n / bigUnit) * bigUnit;
  return question({
    id, skill, noNear: true, commas: true, mistake: { type: 'R', n, unit }, q: `Round ${fmt(n)} to the nearest ${name}.`,
    ...(pre ? { kind: 'pre' } : { hint: `${unit === 100000 ? 'Find the benchmarks. Count by hundred thousands.' : `Find the two ${name}s.`} Find halfway. Before halfway rounds down. Halfway or past rounds up.`, pic: { rline: { n, unit } }, explain: { rline: { n, unit, bench: true, half: true, arrow: ans } } }),
    explanation: how
  }, ans, [
    { v: other, keep: true, tag: up ? 'Rounded down instead of up' : 'Rounded up instead of down', say: `${fmt(other)} is the other end. ${how}` },
    ...(unit > 10 && tenRound !== ans && tenRound !== n ? [{ v: tenRound, tag: 'Rounded to the wrong place', say: `That is the nearest ${PLACE[unit / 10]}. The question says ${name}. ${how}` }] : []),
    ...(bigRound !== ans && bigRound > 0 ? [{ v: bigRound, tag: 'Rounded to the wrong place', say: `That is the nearest ${PLACE[bigUnit] || 'ten thousand'}. The question says ${name}. ${how}` }] : []),
    { v: low + unit * 2, tag: 'One benchmark too high', say: `${fmt(n)} is less than ${fmt(high)}. ${how}` },
    ...(low - unit > 0 ? [{ v: low - unit, tag: 'One benchmark too low', say: `${fmt(n)} is more than ${fmt(low)}. ${how}` }] : []),
    { v: n, tag: 'Did not round', say: `Rounding gives a ${name} number. ${how}` }
  ], r);
}


const PV_LESSONS = ({ watch, step, B }) => [
  {
    id: 'PV1', title: 'Ones, Tens, Hundreds', skill: 'Value of a digit',
    pre: { pool: () => B.valuePool(3), build: B.valueQ },
    teach: sk => [
      watch('W1', sk, 'Every digit has a place', [
        'Look at 347. It has three digits: 3, 4 and 7.',
        'Count the places from the right. Ones, tens, hundreds.',
        'The 7 is in the ones place. The 4 is in the tens place. The 3 is in the hundreds place.',
        'The 4 is in the tens place. So it is worth 4 tens. 4 tens is 40.'
      ], { places: { n: 347, mark: 1 } }),
      step('S1', sk, 'In 582, which place is the 8 in?', 'tens', [
        ['ones', 'Count from the right. The 2 is in the ones place. The 8 is in the tens place.'],
        ['hundreds', 'Count from the right. Ones, tens, hundreds. The 8 is in the tens place.']
      ], { pic: { places: { n: 582 } } }),
      step('S2', sk, 'The 8 is in the tens place. What is the 8 worth?', 80, [
        [8, '8 is the digit. In the tens place, it is worth 8 tens. That is 80.'],
        [800, '800 is 8 hundreds. The 8 is in the tens place. It is worth 80.']
      ], { explain: { places: { n: 582, mark: 1 } } }),
      watch('W2', sk, 'Same digit, new place', [
        'In 435, the 3 is in the tens place. It is worth 30.',
        'In 352, the 3 is in the hundreds place. It is worth 300.',
        'The digit is the same. The place changes what it is worth.'
      ], { places: { n: 352, mark: 2 } })
    ],
    parts: [{ pool: () => B.valuePool(3), build: B.valueQ, n: 10 }]
  },
  {
    id: 'PV2', title: 'Expanded Form', skill: 'Expanded form',
    pre: { pool: B.expandedPool, build: B.expandedQ },
    teach: sk => [
      watch('W1', sk, 'Expanded form', [
        '347 is 3 hundreds, 4 tens and 7 ones.',
        'Expanded form shows what each digit is worth. 300 + 40 + 7.',
        '300 + 40 + 7 = 347.'
      ], { places: { parts: [300, 40, 7] } }),
      watch('W2', sk, 'A zero holds a place', [
        '506 is 5 hundreds, 0 tens and 6 ones.',
        'There are no tens. But the 0 must stay. It holds the tens place.',
        '500 + 6 = 506. With no 0, it would be 56. That is much smaller.'
      ], { places: { n: 506, mark: 1 } }),
      step('S1', sk, 'What number is 400 + 20 + 9?', 429, [
        [492, 'The tens and ones got swapped. 20 is 2 tens. 9 is 9 ones. So it is 429.'],
        [15, 'You added the digits. Put each one in its place. 4 hundreds, 2 tens, 9 ones: 429.']
      ], { pic: { places: { parts: [400, 20, 9] } }, explain: { places: { n: 429 } } }),
      step('S2', sk, 'What number is 700 + 3?', 703, [
        [73, 'There are no tens. A 0 holds the tens place. 700 + 3 = 703.'],
        [730, '3 is 3 ones, not 3 tens. 700 + 3 = 703.']
      ], { pic: { places: { parts: [700, 3] } }, explain: { places: { n: 703, mark: 1 } } })
    ],
    parts: [{ pool: B.expandedPool, build: B.expandedQ, n: 10 }]
  },
  {
    id: 'PV3', title: 'Thousands', skill: 'Value of a digit (thousands)',
    pre: { pool: () => B.valuePool(4), build: B.valueQ },
    teach: sk => [
      watch('W1', sk, 'The thousands place', [
        'After hundreds comes thousands.',
        '4,823 has four places. Thousands, hundreds, tens, ones.',
        'The comma comes after the thousands digit. It helps you find the thousands.',
        'The 4 is in the thousands place. It is worth 4,000.'
      ], { places: { n: 4823, mark: 3 } }),
      step('S1', sk, 'In 6,251, which place is the 6 in?', 'thousands', [
        ['hundreds', 'Count from the right. Ones, tens, hundreds, thousands. The 6 is in the thousands place.'],
        ['ones', 'The ones place is on the right. The 6 is on the left. It is in the thousands place.']
      ], { pic: { places: { n: 6251 } } }),
      step('S2', sk, 'So what is the 6 worth?', '6,000', [
        ['600', '600 is 6 hundreds. The 6 is in the thousands place. It is worth 6,000.'],
        ['6', '6 is the digit. In the thousands place, it is worth 6,000.']
      ], { explain: { places: { n: 6251, mark: 3 } } })
    ],
    parts: [{ pool: () => B.valuePool(4), build: B.valueQ, n: 10 }]
  },
  {
    id: 'PV4', title: 'Compare Numbers', skill: 'Compare numbers',
    pre: { pool: B.comparePool, build: B.compareQ },
    teach: sk => [
      watch('W1', sk, 'Compare from the left', [
        'Which is greater, 9,426 or 9,237?',
        'Start on the left. Thousands: 9 and 9. They are the same.',
        'Go to the next place. Hundreds: 4 and 2. 4 is more.',
        'So 9,426 is greater than 9,237.'
      ], { places: { n: 9426, n2: 9237, mark: 2 } }),
      step('S1', sk, '5,381 and 5,318. Thousands are the same. Hundreds are the same. Which place is different?', 'tens', [
        ['ones', 'Go from the left. The tens are different first: 8 and 1.'],
        ['thousands', 'The thousands are both 5. Go on to the tens: 8 and 1.']
      ], { pic: { places: { n: 5381, n2: 5318 } } }),
      step('S2', sk, 'Tens: 8 and 1. So which sentence is true?', '5,381 is greater than 5,318', [
        ['5,381 is less than 5,318', '8 tens is more than 1 ten. So 5,381 is greater.'],
        ['5,381 is equal to 5,318', 'The numbers are not the same. 5,381 is greater.']
      ], { explain: { places: { n: 5381, n2: 5318, mark: 1 } } })
    ],
    parts: [{ pool: B.comparePool, build: B.compareQ, n: 10 }]
  },
  {
    id: 'PV5', title: 'Rename Numbers', skill: 'Rename numbers (tens and hundreds)',
    pre: { pool: B.renamePool, build: B.renameQ },
    teach: sk => [
      watch('W1', sk, 'How many tens?', [
        '3,700 is the same as how many tens?',
        'Every ten is 10. Take off one 0.',
        '3,700 is 370 tens.'
      ]),
      watch('W2', sk, 'How many hundreds?', [
        '3,700 is the same as how many hundreds?',
        'Every hundred is 100. Take off two 0s.',
        '3,700 is 37 hundreds.'
      ]),
      step('S1', sk, '450 is the same as how many tens?', 45, [
        [450, '450 is the number itself. Take off one 0. 450 is 45 tens.'],
        [4, '4 is how many hundreds. Count tens. Take off one 0: 45.']
      ]),
      step('S2', sk, '2,600 is the same as how many hundreds?', 26, [
        [260, '260 is how many tens. Take off two 0s for hundreds: 26.'],
        ['2,600', '2,600 is the number itself. Take off two 0s: 26.']
      ])
    ],
    parts: [{ pool: B.renamePool, build: B.renameQ, n: 10 }]
  },
  {
    id: 'PV6', title: 'Times 10', skill: 'Multiply by 10',
    pre: { pool: () => B.times10Pool(10), build: B.times10Q },
    teach: sk => [
      watch('W1', sk, 'Times 10', [
        '10 × 34 means 10 groups of 34. The number gets 10 times as big.',
        'Each digit moves one place left. 3 tens become 3 hundreds. 4 ones become 4 tens.',
        'The ones place is empty now. A 0 fills it.',
        '10 × 34 = 340.'
      ], { shift: { n: 34, k: 10, show: 340 } }),
      step('S1', sk, '10 × 52. The 5 tens move one place left. What do they become?', '5 hundreds', [
        ['5 ones', 'Times 10 moves each digit LEFT. 5 tens become 5 hundreds.'],
        ['5 tens', 'The 5 moves left. 5 tens turn into 5 hundreds.']
      ], { pic: { shift: { n: 52, k: 10 } } }),
      step('S2', sk, 'So what is 10 × 52?', 520, [
        [62, '62 is 52 + 10. Times 10: the digits move left. A 0 fills the ones place. 520.'],
        ['5,200', 'That has two 0s. 10 has one 0. 520.']
      ], { explain: { shift: { n: 52, k: 10, show: 520 } } })
    ],
    parts: [{ pool: () => B.times10Pool(10), build: B.times10Q, n: 10 }]
  },
  {
    id: 'PV7', title: 'Times 100', skill: 'Multiply by 100',
    pre: { pool: () => B.times10Pool(100), build: B.times10Q },
    teach: sk => [
      watch('W1', sk, 'Times 100', [
        '100 × 23 makes the number 100 times as big.',
        'Each digit moves two places left.',
        'Two places are empty now. Two 0s fill them.',
        '100 × 23 = 2,300.'
      ], { shift: { n: 23, k: 100, show: 2300 } }),
      step('S1', sk, 'How many 0s does 100 have?', 2, [
        [1, 'Count again. 1, 0, 0. That is two 0s.'],
        [3, '100 has three digits. Only two of them are 0s.']
      ]),
      step('S2', sk, 'So what is 100 × 7?', 700, [
        [70, '70 has one 0. 100 has two 0s. 700.'],
        [107, '107 is 100 + 7. Times 100: write 7. Then two 0s. 700.']
      ], { explain: { shift: { n: 7, k: 100, show: 700 } } })
    ],
    parts: [{ pool: () => B.times10Pool(100), build: B.times10Q, n: 10 }]
  },
  {
    id: 'PV8', title: 'Multiples of 10', skill: 'Multiply by a multiple of 10',
    pre: { pool: B.multiplesPool, build: B.multiplesQ },
    teach: sk => [
      watch('W1', sk, 'Times tens', [
        '3 × 40. 40 is 4 tens.',
        'So 3 × 40 is 3 × 4 tens.',
        '3 × 4 = 12. 12 tens is 120.',
        'So 3 × 40 = 120. Do the fact. Then write the 0.'
      ], { shift: { n: 12, k: 10, show: 120 } }),
      step('S1', sk, '6 × 30. First do the fact. What is 6 × 3?', 18, [
        [9, '9 is 6 + 3. 6 × 3 = 18.'],
        [21, '21 is 7 groups of 3. 6 × 3 = 18.']
      ]),
      step('S2', sk, '6 × 3 = 18. So what is 6 × 30?', 180, [
        [18, '18 is the fact. But 30 is 3 tens. Write the 0. 180.'],
        ['1,800', 'That has two 0s. 30 has one 0. 180.']
      ], { explain: { shift: { n: 18, k: 10, show: 180 } } })
    ],
    parts: [{ pool: B.multiplesPool, build: B.multiplesQ, n: 10 }]
  },
  {
    id: 'PV9', title: 'Place Value Check', skill: 'Place value (check)', check: true,
    teach: sk => [
      watch('W1', sk, 'The place value check', [
        'This is the place value check. It has 20 questions.',
        'Find what a digit is worth. Compare numbers. Rename numbers. Times 10, 100 and tens.',
        'There are no hints and no pictures this time.',
        'Get 15 of 20 right to finish Place Value.'
      ])
    ],
    parts: [
      { pool: () => B.valuePool(4), build: B.valueQ, n: 3 },
      { pool: B.expandedPool, build: B.expandedQ, n: 3 },
      { pool: B.comparePool, build: B.compareQ, n: 3 },
      { pool: B.renamePool, build: B.renameQ, n: 3 },
      { pool: () => B.times10Pool(10), build: B.times10Q, n: 3 },
      { pool: () => B.times10Pool(100), build: B.times10Q, n: 2 },
      { pool: B.multiplesPool, build: B.multiplesQ, n: 3 }
    ]
  }
];
const RO_LESSONS = ({ watch, step, B }) => {
  const tens = () => B.benchPool(10);
  const hundreds3 = () => B.benchPool(100);
  const hundreds4 = () => { const o = []; for (let n = 1012; n <= 9988; n += 53) if (n % 100) o.push([n, 100]); return o; };
  const thousands = () => B.benchPool(1000);
  return [
    {
      id: 'RO1', title: 'The Two Benchmarks', skill: 'Find the two benchmarks',
      pre: { pool: tens, build: B.benchQ },
      teach: sk => [
        watch('W1', sk, 'Benchmarks', [
          'To round 46 to the nearest ten, first find the two tens it lives between.',
          'Count by tens: 10, 20, 30, 40, 50. 46 is more than 40 and less than 50.',
          '40 and 50 are the benchmarks. 46 lives between 40 and 50.'
        ], { rline: { n: 46, unit: 10, bench: true } }),
        step('S1', sk, '73 is between which two tens?', '70 and 80', [
          ['7 and 8', '7 and 8 are digits. Count by tens: 70, 80. 73 is between 70 and 80.'],
          ['60 and 70', '73 is more than 70. Count by tens: 70, 80.']
        ], { pic: { rline: { n: 73, unit: 10, hideEnds: true } }, explain: { rline: { n: 73, unit: 10, bench: true } } }),
        watch('W2', sk, 'Benchmarks for hundreds', [
          'To round 6,284 to the nearest hundred, find the two hundreds it lives between.',
          'Count by hundreds: 6,200, 6,300. 6,284 is more than 6,200 and less than 6,300.',
          'Not 6,280 and 6,290: those are tens. The question asks for hundreds.'
        ], { rline: { n: 6284, unit: 100, bench: true } })
      ],
      parts: [
        { pool: tens, build: B.benchQ, n: 4 },
        { pool: hundreds3, build: B.benchQ, n: 3 },
        { pool: hundreds4, build: B.benchQ, n: 3 }
      ]
    },
    {
      id: 'RO2', title: 'Halfway', skill: 'Find the halfway point',
      pre: { pool: () => B.halfPool(100, true), build: B.halfwayQ },
      teach: sk => [
        watch('W1', sk, 'Halfway', [
          'Halfway is the middle. It is between the two ends.',
          'Between 40 and 50, halfway is 45. It is 5 past 40 and 5 before 50.',
          'Between 600 and 700, halfway is 650. For hundreds, the middle ends in 50.'
        ], { rline: { n: 45, unit: 10, half: true, hideN: true } }),
        step('S1', sk, 'What is halfway from 80 to 90?', 85, [
          [84, 'The middle of 80 and 90 is 85: 5 past 80 and 5 before 90.'],
          [90, '90 is a benchmark. The middle is 85.']
        ], { pic: { rline: { n: 85, unit: 10, hideN: true } }, explain: { rline: { n: 85, unit: 10, half: true, hideN: true } } }),
        step('S2', sk, 'What is halfway from 300 to 400?', 350, [
          [305, '305 is halfway for tens. Between 300 and 400 the middle is 350.'],
          [345, 'For hundreds, the middle ends in 50: 350.']
        ], { pic: { rline: { n: 350, unit: 100, hideN: true } }, explain: { rline: { n: 350, unit: 100, half: true, hideN: true } } })
      ],
      parts: [
        { pool: () => B.halfPool(10), build: B.halfwayQ, n: 4 },
        { pool: () => B.halfPool(100), build: B.halfwayQ, n: 3 },
        { pool: () => B.halfPool(100, true), build: B.halfwayQ, n: 3 }
      ]
    },
    {
      id: 'RO3', title: 'Round to the Nearest Ten', skill: 'Round to the nearest ten',
      pre: { pool: tens, build: B.roundQ },
      teach: sk => [
        watch('W1', sk, 'Round to the nearest ten', [
          'Round 46 to the nearest ten. The benchmarks are 40 and 50.',
          'Halfway is 45. 46 is past halfway.',
          'Past halfway rounds up. Halfway rounds up too. Before halfway rounds down.',
          '46 rounds up to 50.'
        ], { rline: { n: 46, unit: 10, bench: true, half: true, arrow: 50 } }),
        step('S1', sk, 'Round 32 to the nearest ten. The benchmarks are 30 and 40. Is 32 before or past halfway (35)?', 'before halfway', [
          ['past halfway', '32 is less than 35, so it is before halfway.'],
          ['exactly halfway', 'Halfway is 35. 32 is before it.']
        ], { pic: { rline: { n: 32, unit: 10, bench: true, half: true } } }),
        step('S2', sk, 'So 32 rounds to what?', 30, [
          [40, 'Before halfway rounds DOWN, to 30.'],
          [32, 'Rounding gives a ten. 32 rounds down to 30.']
        ], { explain: { rline: { n: 32, unit: 10, bench: true, half: true, arrow: 30 } } })
      ],
      parts: [{ pool: () => tens().concat(hundreds3().map(([n]) => [n, 10]).filter(([n]) => n % 10)), build: B.roundQ, n: 10 }]
    },
    {
      id: 'RO4', title: 'Round to the Nearest Hundred', skill: 'Round to the nearest hundred',
      pre: { pool: hundreds3, build: B.roundQ },
      teach: sk => [
        watch('W1', sk, 'Round to the nearest hundred', [
          'Round 6,284 to the nearest hundred.',
          'The benchmarks are 6,200 and 6,300. Halfway is 6,250.',
          '6,284 is past halfway, so it rounds up.',
          '6,284 rounds to 6,300.'
        ], { rline: { n: 6284, unit: 100, bench: true, half: true, arrow: 6300 } }),
        step('S1', sk, 'Round 418 to the nearest hundred. Which two hundreds?', '400 and 500', [
          ['410 and 420', 'Those are tens. Count by hundreds: 400, 500.'],
          ['300 and 400', '418 is more than 400. Count by hundreds: 400, 500.']
        ], { pic: { rline: { n: 418, unit: 100, hideEnds: true } } }),
        step('S2', sk, 'Halfway is 450. 418 is before halfway. So 418 rounds to what?', 400, [
          [500, 'It is before halfway. So it rounds down to 400.'],
          [420, '420 is the nearest ten. The question says hundred: 400.']
        ], { explain: { rline: { n: 418, unit: 100, bench: true, half: true, arrow: 400 } } })
      ],
      parts: [
        { pool: hundreds3, build: B.roundQ, n: 5 },
        { pool: hundreds4, build: B.roundQ, n: 5 }
      ]
    },
    {
      id: 'RO5', title: 'Round to the Place Named', skill: 'Round to the place named',
      pre: { pool: thousands, build: B.roundQ },
      teach: sk => [
        watch('W1', sk, 'Read the place first', [
          'Read the question. It names the place: ten, hundred, or thousand.',
          'Round 6,284 to the nearest thousand. The benchmarks are 6,000 and 7,000.',
          'Halfway is 6,500. 6,284 is before halfway.',
          'So 6,284 rounds down to 6,000. To the nearest hundred, it was 6,300. The place changes the answer.'
        ], { rline: { n: 6284, unit: 1000, bench: true, half: true, arrow: 6000 } }),
        step('S1', sk, 'Round 3,742 to the nearest thousand. Which two thousands?', '3,000 and 4,000', [
          ['3,700 and 3,800', 'Those are hundreds. Count by thousands: 3,000, 4,000.'],
          ['4,000 and 5,000', '3,742 is less than 4,000. Count by thousands: 3,000, 4,000.']
        ], { pic: { rline: { n: 3742, unit: 1000, hideEnds: true } } }),
        step('S2', sk, 'Halfway is 3,500. 3,742 is past halfway. So it rounds to what?', '4,000', [
          ['3,000', 'Past halfway rounds UP: 4,000.'],
          ['3,700', '3,700 is the nearest hundred. The question says thousand: 4,000.']
        ], { explain: { rline: { n: 3742, unit: 1000, bench: true, half: true, arrow: 4000 } } })
      ],
      parts: [
        { pool: hundreds4, build: B.roundQ, n: 4 },
        { pool: thousands, build: B.roundQ, n: 4 },
        { pool: tens, build: B.roundQ, n: 2 }
      ]
    },
    {
      id: 'RO6', title: 'Rounding Check', skill: 'Rounding (check)', check: true,
      teach: sk => [
        watch('W1', sk, 'The rounding check', [
          'This is the rounding check. It has 20 questions.',
          'Find the benchmarks. Find halfway. Before halfway rounds down. Halfway or past rounds up.',
          'There are no hints and no pictures this time.',
          'Get 15 of 20 right to finish Rounding.'
        ])
      ],
      parts: [
        { pool: hundreds4, build: B.benchQ, n: 4 },
        { pool: tens, build: B.roundQ, n: 4 },
        { pool: hundreds3, build: B.roundQ, n: 4 },
        { pool: hundreds4, build: B.roundQ, n: 4 },
        { pool: thousands, build: B.roundQ, n: 4 }
      ]
    }
  ];
};
LESSONS.push(...PV_LESSONS({ watch, step, B: { valuePool, valueQ, expandedPool, expandedQ, comparePool, compareQ, renamePool, renameQ, times10Pool, times10Q, multiplesPool, multiplesQ } }));
LESSONS.push(...RO_LESSONS({ watch, step, B: { benchPool, halfPool, benchQ, halfwayQ, roundQ } }));

/* ═══ STRANDS 5–6 · BIG NUMBERS — a stretch for the middle and top students (not facts: 75%) ═══
   Marcos 10/22, after the Place Value FIAB of 10/21: the whole class was weakest on rounding (33%) and on comparing
   numbers written in different ways (38%), the top students too. Numbers to the hundred thousands:
     Place Value: Big Numbers  BP1 places · BP2 parts in any order · BP3 more than 9 in a place · BP4 compare in any form · BP5 check
     Rounding: Big Numbers     BR1 benchmarks and halfway · BR2 round · BR3 any place · BR4 which one rounds to it · BR5 check
   Rounding is the class's method only: benchmarks → halfway → before or past (Marcos 10/21: no "5 or more" rule).
   A retry teaches again the same way, with new numbers (teach(sk, ctx)). A mistake is named by its place. The FIAB's own
   numbers are never used (tools/check-lab.js rule 13). */
const PLACE_ONE = ['one', 'ten', 'hundred', 'thousand', 'ten thousand', 'hundred thousand'];
const term = (p, k) => `${k} ${k === 1 ? PLACE_ONE[p] : PLACES[p]}`;          // "4 tens", "1 thousand"
const placeOfUnit = u => Math.round(Math.log10(u));
const noHelp = build => (id, t, o) => { const q = build(id, t, o); delete q.hint; delete q.pic; return q; };   // a check: no hint, no picture
// the FIAB's own numbers (practice test sources/grade4_math_place_value_fiab_blueprint.md): never a question here
const FIAB_AVOID = new Set([53894, 31902, 32304, 31499, 68215, 24285, 23516, 24740, 787347, 67737, 9057, 9507, 3156, 2060, 2006, 5931, 2401, 1534, 1901, 2657]);
const FIAB_TARGETS = new Set([32000, 24000, 68000, 53900, 790000]);

/* BP1 · the value of a digit in 5- and 6-digit numbers (hundreds and up) */
const bigValuePool = () => [...valuePool(5), ...valuePool(6)].filter(([n, p]) => p >= 2 && !FIAB_AVOID.has(n));
const takeNumber = (take, n) => range(1, String(n).length - 1).forEach(p => take([n, p]));   // a taught number is never asked
function teachBigPlaces(sk, { pick, take }) {
  const pool = bigValuePool();
  const first = list => { const f = one(pick, list); takeNumber(take, f[0]); return f; };
  const dig = (n, p) => digitsOf(n)[p];
  const [n1, p1] = first(pool.filter(([n, p]) => n >= 100000 && p >= 4));
  const [n2] = first(pool.filter(([n, p]) => n < 100000 && p === 4));
  const [a] = first(pool.filter(([n, p]) => n < 100000 && p === 3));
  const d = dig(a, 3), d2 = dig(n2, 4);
  const [b] = first(pool.filter(([n, p]) => n >= 100000 && p === 5 && dig(n, 5) === d));
  return [
    watch('W1', sk, 'Big numbers have more places', [
      `Look at ${fmt(n1)}. Count the places from the right.`,
      'First the ones, the tens, the hundreds. Then the thousands.',
      'Then the ten thousands. Then the hundred thousands.',
      `The ${dig(n1, p1)} is in the ${PLACES[p1]} place. It is worth ${fmt(dig(n1, p1) * pow(p1))}.`
    ], { places: { n: n1, mark: p1 } }),
    step('S1', sk, `In ${fmt(n2)}, which place is the ${d2} in?`, 'ten thousands', [
      ['thousands', `Count from the right. Ones, tens, hundreds, thousands, ten thousands. The ${d2} is in the ten thousands place.`],
      ['hundred thousands', `${fmt(n2)} has 5 places. The 5th place from the right is ten thousands.`]
    ], { pic: { places: { n: n2 } } }),
    step('S2', sk, `The ${d2} is in the ten thousands place. What is it worth?`, fmt(d2 * 10000), [
      [String(d2), `${d2} is the digit. In the ten thousands place, it is worth ${fmt(d2 * 10000)}.`],
      [fmt(d2 * 1000), `${fmt(d2 * 1000)} is ${term(3, d2)}. The ${d2} is one more place to the left. It is worth ${fmt(d2 * 10000)}.`]
    ], { explain: { places: { n: n2, mark: 4 } } }),
    watch('W2', sk, 'Same digit, new place', [
      `In ${fmt(a)}, the ${d} is in the thousands place. It is worth ${fmt(d * 1000)}.`,
      `In ${fmt(b)}, the ${d} is in the hundred thousands place. It is worth ${fmt(d * 100000)}.`,
      'The digit is the same. The place changes what it is worth.'
    ], { places: { n: b, mark: 5 } })
  ];
}

/* BP2 · parts in any order: "4 tens + 7 thousands + 2 ones", "60 + 5,000 + 3 + 200" (the FIAB's trap: the parts are not
   in place order). A number's order is fixed (seeded by the number), so a student's own miss comes back the same way. */
function partsOrder(n) {
  const d = digitsOf(n), places = range(0, d.length - 1).filter(p => d[p]);
  if (places.length < 2) return null;
  const r = rng(seedOf(`parts-${n}`));
  for (let i = 0; i < 12; i++) {
    const o = shuffled(places, r);
    const biggestFirst = o.every((p, j) => j === 0 || o[j - 1] > p);
    if (!biggestFirst && Number(o.map(p => d[p]).join('')) !== n) return o;
  }
  return null;
}
const partsWords = n => n % 2 === 1;      // odd numbers in place words, even ones as numbers: one fixed way per number
const partOf = (n, p) => (partsWords(n) ? term(p, digitsOf(n)[p]) : fmt(digitsOf(n)[p] * pow(p)));
const partsList = n => partsOrder(n).map(p => partOf(n, p));
const partsText = n => partsList(n).join(' + ');
const emptyPlaces = n => { const d = digitsOf(n); return range(0, d.length - 2).filter(p => !d[p]); };
function mixedPartsPool() {
  const out = [];
  for (let n = 1046; n <= 989999; n += n < 10000 ? 83 : n < 100000 ? 787 : 7877) {
    const nz = digitsOf(n).filter(Boolean).length;
    if (nz >= 3 && nz <= 5 && partsOrder(n) && !FIAB_AVOID.has(n)) out.push([n]);
  }
  return out;
}
function mixedPartsQ(id, [n], { pre, skill, r }) {
  const d = digitsOf(n), top = d.length - 1, order = partsOrder(n), terms = partsText(n), empty = emptyPlaces(n);
  const how = `Put each part in its place. Start with the biggest place: ${term(top, d[top])}. ` +
    empty.map(p => `A 0 holds the ${PLACES[p]} place. `).join('') + `${terms} = ${fmt(n)}.`;
  const listed = Number(order.map(p => d[p]).join(''));
  const noZeros = empty.length ? Number(String(n).replace(/0/g, '')) : null;
  const last = order[order.length - 1], lastV = d[last] * pow(last);
  const f = order.find((p, j) => p !== order.length - 1 - j);   // the first digit that lands in the wrong place when read in order
  return question({
    id, skill, q: `What number is ${terms}?`, mistake: { type: 'E', n }, noNear: true, commas: true,
    ...(pre ? { kind: 'pre' } : { hint: 'Find the biggest place first. Put each part in its place. A 0 holds an empty place.', pic: { places: { parts: partsList(n) } }, explain: { places: { n } } }),
    explanation: how
  }, n, [
    { v: listed, keep: true, tag: 'Wrote the parts in the order listed', say: `You wrote the digits in the order they are listed. The ${d[f]} is ${term(f, d[f])}. It goes in the ${PLACES[f]} place. ${how}` },
    ...(noZeros ? [{ v: noZeros, tag: 'Left out a zero', say: `A place was left out. A 0 must hold it. ${how}` }] : []),
    { v: n - lastV + lastV * 10, tag: 'Put a part in the wrong place', say: `The ${term(last, d[last])} went one place too far left. ${how}` },
    { v: d.reduce((a, b) => a + b, 0), tag: 'Added the digits', say: `You added the digits. Each digit has a place. ${how}` },
    { v: n + pow(top), tag: 'Biggest place off by one', say: `Look at the biggest place again. ${how}` },
    { v: n - pow(top), tag: 'Biggest place off by one', say: `Look at the biggest place again. ${how}` }
  ], r);
}
function teachMixedParts(sk, { pick }) {
  const pool = mixedPartsPool();
  const oneZero = n => emptyPlaces(n).length === 1;
  const [n1] = one(pick, pool.filter(([n]) => partsWords(n) && oneZero(n) && n < 100000));
  const [n2] = one(pick, pool.filter(([n]) => partsWords(n) && oneZero(n) && n < 100000));
  const [n3] = one(pick, pool.filter(([n]) => !partsWords(n) && n < 100000));
  const d1 = digitsOf(n1), d2 = digitsOf(n2), d3 = digitsOf(n3);
  const t1 = d1.length - 1, t2 = d2.length - 1, t3 = d3.length - 1;
  const z1 = emptyPlaces(n1)[0], z2 = emptyPlaces(n2)[0];
  const o2 = partsOrder(n2), listed2 = Number(o2.map(p => d2[p]).join(''));
  const firstNotTop = o2.find(p => p !== t2), low2 = o2.filter(p => p !== t2 && p !== firstNotTop)[0];
  const has2 = o2.filter(p => p !== t2).slice(0, 2);
  return [
    watch('W1', sk, 'Parts in any order', [
      `What number is ${partsText(n1)}?`,
      'The parts are mixed up. Find the biggest place first.',
      `The biggest place is ${term(t1, d1[t1])}. Then put each part in its place.`,
      `There are no ${PLACES[z1]}. A 0 holds the ${PLACES[z1]} place.`,
      `${partsText(n1)} = ${fmt(n1)}.`
    ], { places: { n: n1 } }),
    step('S1', sk, `What number is ${partsText(n2)}? Which part is the biggest place?`, term(t2, d2[t2]), wrongsOf(term(t2, d2[t2]), [
      ...[firstNotTop, low2].filter(p => p != null).map(p => [term(p, d2[p]), `${term(p, d2[p])} is not the biggest place. ${term(t2, d2[t2])} is.`])
    ]), { pic: { places: { parts: partsList(n2) } } }),
    step('S2', sk, `${partsText(n2)}. Which place has no part?`, PLACES[z2], has2.map(p => [PLACES[p], `There is a part for the ${PLACES[p]}: ${term(p, d2[p])}. The ${PLACES[z2]} place has no part. A 0 holds it.`]),
      { pic: { places: { parts: partsList(n2) } } }),
    step('S3', sk, `So what number is ${partsText(n2)}?`, fmt(n2), wrongsOf(fmt(n2), [
      [fmt(listed2), `You wrote the digits in the order they are listed. Put each part in its place. ${fmt(n2)}.`],
      [fmt(Number(String(n2).replace(/0/g, ''))), `A 0 must hold the ${PLACES[z2]} place. ${fmt(n2)}.`],
      [fmt(n2 + pow(t2)), `Look at the biggest place again: ${term(t2, d2[t2])}. ${fmt(n2)}.`]
    ]), { explain: { places: { n: n2 } } }),
    watch('W2', sk, 'Parts as numbers', [
      `What number is ${partsText(n3)}?`,
      `${fmt(d3[t3] * pow(t3))} is the biggest part. It is ${term(t3, d3[t3])}.`,
      'Put each part in its place, from the biggest to the smallest.',
      `${partsText(n3)} = ${fmt(n3)}.`
    ], { places: { n: n3 } })
  ];
}

/* BP3 · more than 9 in a place: "3 thousands + 12 hundreds + 4 tens" (trade 10 hundreds for 1 thousand) and "42 hundreds".
   A number's trade is fixed (seeded by the number), so a student's own miss (E n) comes back the same way. */
function tradeOf(n) {
  const d = digitsOf(n), top = d.length - 1;
  const at = range(0, top - 1).filter(p => d[p + 1] >= 1);    // a place that can take 10 from the place to its left
  if (!at.length) return null;
  const r = rng(seedOf(`trade-${n}`));
  const P = at[Math.floor(r() * at.length)];
  const k = d[P + 1] >= 2 && r() < 0.3 ? 2 : 1;
  const counts = d.slice(); counts[P] += 10 * k; counts[P + 1] -= k;
  if (counts.filter(Boolean).length < 2) return null;
  return { P, k, counts };   // counts by place (ones first); 0 = no part
}
const countsText = counts => range(0, counts.length - 1).reverse().filter(p => counts[p]).map(p => term(p, counts[p])).join(' + ');
// fact [n] = a number written with one place traded; fact [n, unit] = one count by itself ("42 hundreds")
function countsOf(fact) {
  if (fact.length === 2) { const p = placeOfUnit(fact[1]), c = Array(p).fill(0); c[p] = fact[0] / fact[1]; return { P: p, k: Math.floor(c[p] / 10), counts: c }; }
  return tradeOf(fact[0]);
}
function regroupPool() {
  const out = [];
  for (let n = 1043; n <= 98765; n += n < 10000 ? 67 : 731) {
    const t = tradeOf(n);
    if (t && digitsOf(n).filter(Boolean).length >= 3 && !FIAB_AVOID.has(n)) out.push([n]);
  }
  for (const unit of [100, 1000]) for (let c = 11; c <= 98; c += 3) if (c % 10) out.push([c * unit, unit]);
  return out;
}
function tradeSay(P, c) {
  const k = Math.floor(c / 10), rest = c % 10;
  return `10 ${PLACES[P]} make 1 ${PLACE_ONE[P + 1]}. So ${term(P, c)} is ${term(P + 1, k)}${rest ? ` and ${term(P, rest)}` : ''}.`;
}
function regroupQ(id, fact, { pre, skill, r }) {
  const single = fact.length === 2, n = fact[0];
  const { P, counts } = countsOf(fact), c = counts[P], k = Math.floor(c / 10);
  const terms = countsText(counts);
  const how = `${tradeSay(P, c)} ${terms} = ${fmt(n)}.`;
  const topListed = Math.max(...range(0, counts.length - 1).filter(p => counts[p]));
  const sideBySide = Number(range(0, topListed).reverse().map(p => String(counts[p] || 0)).join(''));
  const dropped = counts.reduce((s, x, p) => s + (x % 10) * pow(p), 0);
  const wrongs = [
    ...(sideBySide !== n ? [{ v: sideBySide, keep: true, tag: 'Wrote a count in one place', say: `A place holds one digit. ${term(P, c)} will not fit in the ${PLACES[P]} place. ${how}` }] : []),
    ...(dropped !== n && dropped > 0 ? [{ v: dropped, keep: sideBySide === n, tag: 'Did not trade', say: `The extra ${term(P + 1, k)} got lost. ${how}` }] : []),
    { v: n - k * pow(P + 1) + k * pow(P + 2), tag: 'Traded to the wrong place', say: `The traded ${PLACE_ONE[P + 1]} went too far left. ${how}` },
    ...(single
      ? [{ v: c, tag: 'Gave only the count', say: `${c} is the count. Each one is ${fmt(pow(P))}. ${how}` },
         { v: n / 10, tag: 'One zero too few', say: `That is ${term(P - 1, c)}. The question says ${PLACES[P]}. ${how}` }]
      : [{ v: counts.reduce((a, b) => a + b, 0), tag: 'Added the counts', say: `You added the counts. Each count has its own place. ${how}` }])
  ];
  return question({
    id, skill, q: `What number is ${terms}?`, mistake: single ? { type: 'N', n, unit: fact[1] } : { type: 'E', n }, noNear: true, commas: true,
    ...(pre ? { kind: 'pre' } : { hint: `Trade 10 ${PLACES[P]} for 1 ${PLACE_ONE[P + 1]}. Then write the number.`, pic: { places: { counts } }, explain: { places: { counts, trade: true, n } } }),
    explanation: how
  }, n, wrongs, r);
}
function teachTrade(sk, { pick }) {
  const pool = regroupPool();
  const plain = f => f.length === 1 && countsOf(f).k === 1 && digitsOf(f[0])[countsOf(f).P] > 0 && countsOf(f).counts[countsOf(f).P + 1] >= 1;
  const f1 = one(pick, pool.filter(plain)), f2 = one(pick, pool.filter(plain)), f3 = one(pick, pool.filter(f => f.length === 2));
  const A = countsOf(f1), Bq = countsOf(f2), C = countsOf(f3);
  const n1 = f1[0], n2 = f2[0], m = f3[0];
  const cA = A.counts[A.P], cB = Bq.counts[Bq.P], cC = C.counts[C.P];
  const upB = Bq.counts[Bq.P + 1];
  const topB = Math.max(...range(0, Bq.counts.length - 1).filter(p => Bq.counts[p]));
  const sideB = Number(range(0, topB).reverse().map(p => String(Bq.counts[p] || 0)).join(''));
  const dropB = Bq.counts.reduce((s, x, p) => s + (x % 10) * pow(p), 0);
  return [
    watch('W1', sk, 'Ten make one', [
      `What number is ${countsText(A.counts)}?`,
      `${term(A.P, cA)} is more than 9. A place holds one digit.`,
      `${tradeSay(A.P, cA)}`,
      `Trade them. Now there are ${term(A.P + 1, A.counts[A.P + 1] + 1)}.`,
      `${countsText(A.counts)} = ${fmt(n1)}.`
    ], { places: { counts: A.counts, trade: true, n: n1 } }),
    step('S1', sk, `${countsText(Bq.counts)}. What is ${term(Bq.P, cB)}?`, `${term(Bq.P + 1, 1)} and ${term(Bq.P, cB - 10)}`, [
      [term(Bq.P + 1, cB), `Trade only 10 of them. ${tradeSay(Bq.P, cB)}`],
      [`${term(Bq.P + 1, 1)} and ${term(Bq.P, cB)}`, `You took 10 ${PLACES[Bq.P]} away. ${tradeSay(Bq.P, cB)}`]
    ], { pic: { places: { counts: Bq.counts } } }),
    step('S2', sk, `Add the 1 ${PLACE_ONE[Bq.P + 1]} to the ${term(Bq.P + 1, upB)}. How many ${PLACES[Bq.P + 1]} now?`, upB + 1, [
      [upB, `Do not forget the traded ${PLACE_ONE[Bq.P + 1]}. ${upB} + 1 = ${upB + 1}.`],
      [upB + 10, `Only 1 ${PLACE_ONE[Bq.P + 1]} is added. ${upB} + 1 = ${upB + 1}.`]
    ], { pic: { places: { counts: Bq.counts } } }),
    step('S3', sk, `So what number is ${countsText(Bq.counts)}?`, fmt(n2), wrongsOf(fmt(n2), [
      [fmt(sideB), `A place holds one digit. Trade first. ${countsText(Bq.counts)} = ${fmt(n2)}.`],
      [fmt(dropB), `The traded ${PLACE_ONE[Bq.P + 1]} got lost. ${countsText(Bq.counts)} = ${fmt(n2)}.`]
    ]), { explain: { places: { counts: Bq.counts, trade: true, n: n2 } } }),
    watch('W2', sk, 'A count by itself', [
      `What number is ${term(C.P, cC)}?`,
      `${tradeSay(C.P, cC)}`,
      `So ${term(C.P, cC)} = ${fmt(m)}.`
    ], { places: { counts: C.counts, trade: true, n: m } })
  ];
}

/* BP4 · compare in any form: "8,045 ___ 4 tens + 8 thousands + 5 ones" — pick <, > or = (the FIAB's way). The other side
   is the same number another way (=), or the same digits in other places (the trap: 9,057 and 9,507). */
const SIGNS = { '<': '< less than', '>': '> greater than', '=': '= equal to' };
const SIGN_LIST = [SIGNS['<'], SIGNS['>'], SIGNS['=']];
const REL_WORD = { '<': 'less than', '>': 'greater than', '=': 'equal to' };
const formText = m => (tradeOf(m) && m % 3 === 0 ? countsText(tradeOf(m).counts) : partsText(m));   // one fixed way per number
function signPool() {
  const out = [];
  for (let n = 1205; n <= 98760; n += n < 10000 ? 71 : 643) {
    const d = digitsOf(n);
    if (d.filter(Boolean).length < 3 || FIAB_AVOID.has(n) || !partsOrder(n)) continue;
    out.push({ n, m: n });                                         // the same number, written another way
    const r = rng(seedOf(`swap-${n}`));
    const i = Math.floor(r() * d.length), j = (i + 1 + Math.floor(r() * (d.length - 1))) % d.length;
    if (d[i] === d[j]) continue;
    const e = d.slice(); [e[i], e[j]] = [e[j], e[i]];
    if (!e[e.length - 1]) continue;                                // no 0 in front
    const m = Number(e.slice().reverse().join(''));
    if (partsOrder(m) && !FIAB_AVOID.has(m)) out.push({ n, m });   // the same digits in other places
  }
  return out;
}
const relOf = f => (f.n < f.m ? '<' : f.n > f.m ? '>' : '=');
function firstDiff(n, m) {
  const a = digitsOf(n).reverse(), b = digitsOf(m).reverse();
  let i = 0; while (i < a.length && a[i] === b[i]) i++;
  return i < a.length ? { p: a.length - 1 - i, a: a[i], b: b[i] } : null;
}
function signQ(id, f, { pre, skill, r }) {
  const { n, m } = f, rel = relOf(f), right = formText(m), diff = firstDiff(n, m);
  const same = [...String(n)].sort().join('') === [...String(m)].sort().join('');
  const compare = rel === '=' ? `Every place is the same. So ${fmt(n)} is equal to ${fmt(m)}.`
    : `Compare from the left. The first place that is different is the ${PLACES[diff.p]} place: ${diff.a} and ${diff.b}. So ${fmt(n)} is ${REL_WORD[rel]} ${fmt(m)}.`;
  const how = `Write the parts as a number first. ${right} = ${fmt(m)}. ${compare}`;
  const slips = {};
  ['<', '>', '='].filter(s => s !== rel).forEach(s => {
    slips[SIGNS[s]] = rel === '=' ? { tag: 'Missed that they are equal', say: `They are the same number. ${how}` }
      : s === '=' ? { tag: 'Called them equal', say: `${same ? 'The digits are the same, but they are in other places. ' : ''}${how}` }
      : { tag: 'Compared the wrong way', say: `${fmt(n)} is not ${REL_WORD[s]} ${fmt(m)}. ${how}` };
  });
  return {
    id, skill, q: `${fmt(n)} ___ ${right}. Which sign goes in the blank?`, signs: true,
    mistake: rel === '=' ? { type: 'E', n: m } : { type: 'C', n: Math.max(n, m), m: Math.min(n, m) },
    ...(pre ? { kind: 'pre' } : { hint: 'Write the parts as a number first. Then compare from the left.', explain: { places: { n, n2: m, ...(diff ? { mark: diff.p } : {}) } } }),
    explanation: how, choices: [...SIGN_LIST], answer: SIGNS[rel], slips
  };
}
/* BP4 · a missing digit: "4?,512 is greater than 47,512. Which digit makes it true?" (one right digit among the choices) */
function missingPool() {
  const out = [];
  for (let n = 10234; n <= 98765; n += 389) {
    if (FIAB_AVOID.has(n)) continue;
    const d = digitsOf(n);
    for (let p = 1; p <= 4; p++) {
      const x = d[p], lead = p === 4;
      if (x <= 8 && x >= (lead ? 3 : 2)) out.push([n, p, 'greater']);
      if (x <= 7 && x >= (lead ? 2 : 1)) out.push([n, p, 'less']);
    }
  }
  return out;
}
// "4?512" → "4?,512": groups of 3 from the right (a regex \B would skip the comma next to the ?)
const withCommas = s => { const out = []; for (let i = s.length; i > 0; i -= 3) out.unshift(s.slice(Math.max(0, i - 3), i)); return out.join(','); };
const hideDigit = (n, p) => { const d = String(n).split(''); d[d.length - 1 - p] = '?'; return d.join(''); };
function missingDigitQ(id, [n, p, rel], { pre, skill, r }) {
  const d = digitsOf(n), x = d[p], lead = p === d.length - 1, big = rel === 'greater';
  const shown = hideDigit(n, p);
  const ok = range(lead ? 1 : 0, 9).filter(v => (big ? v > x : v < x));
  const ans = ok[Math.floor(r() * ok.length)];
  const other = range(lead ? 1 : 0, 9).filter(v => (big ? v < x : v > x));
  const filled = v => n + (v - x) * pow(p);
  const how = `${lead ? `The ? is in the ${PLACES[p]} place. It is the first place.` : 'The places to the left of the ? are the same.'} ` +
    `With ${x}, the numbers would be equal. So the ? must be ${big ? 'more' : 'less'} than ${x}. ${ans} works: ${fmt(filled(ans))} is ${rel} than ${fmt(n)}.`;
  return question({
    id, skill, q: `${withCommas(shown)} is ${rel} than ${fmt(n)}. Which digit makes it true?`, noNear: true,
    mistake: { type: 'C', n: Math.max(n, filled(ans)), m: Math.min(n, filled(ans)) },
    ...(pre ? { kind: 'pre' } : { hint: 'Compare from the left. Find the place with the ?.', pic: { places: { n: shown, n2: n } }, explain: { places: { n: filled(ans), n2: n, mark: p } } }),
    explanation: how
  }, ans, [
    { v: x, keep: true, tag: 'Made the numbers equal', say: `With ${x}, the numbers are equal. The question says ${rel} than. ${how}` },
    ...shuffled(other, r).slice(0, 3).map(v => ({ v, tag: big ? 'Made it less' : 'Made it greater', say: `With ${v}, ${fmt(filled(v))} is ${big ? 'less' : 'greater'} than ${fmt(n)}. ${how}` }))
  ], r);
}
function teachCompareForms(sk, { pick }) {
  const sp = signPool(), mp = missingPool();
  const swap = f => f.n !== f.m;
  const f1 = one(pick, sp.filter(f => swap(f) && !(tradeOf(f.m) && f.m % 3 === 0)));
  const f2 = one(pick, sp.filter(swap));
  const [n3, p3] = one(pick, mp.filter(([, p, rel]) => p <= 3 && rel === 'greater'));
  const [n4, p4] = one(pick, mp.filter(([, p, rel]) => p <= 3 && rel === 'less'));
  const r1 = relOf(f1), r2 = relOf(f2), D1 = firstDiff(f1.n, f1.m), D2 = firstDiff(f2.n, f2.m);
  const x3 = digitsOf(n3)[p3], ok3 = x3 + 1, x4 = digitsOf(n4)[p4], ok4 = x4 - 1;
  const o2 = partsOrder(f2.m), listed2 = /\+/.test(formText(f2.m)) && !(tradeOf(f2.m) && f2.m % 3 === 0) ? Number(o2.map(p => digitsOf(f2.m)[p]).join('')) : null;
  const otherPlaces = range(0, String(f2.n).length - 1).filter(p => p !== D2.p).slice(-2);
  return [
    watch('W1', sk, 'Make both sides numbers', [
      `${fmt(f1.n)} ___ ${formText(f1.m)}.`,
      `First write the parts as a number. ${formText(f1.m)} = ${fmt(f1.m)}.`,
      `Compare from the left. The ${PLACES[D1.p]} place is different first: ${D1.a} and ${D1.b}.`,
      `So ${fmt(f1.n)} is ${REL_WORD[r1]} ${fmt(f1.m)}. The sign is ${SIGNS[r1]}.`
    ], { places: { n: f1.n, n2: f1.m, mark: D1.p } }),
    step('S1', sk, `${fmt(f2.n)} ___ ${formText(f2.m)}. First, what number is ${formText(f2.m)}?`, fmt(f2.m), wrongsOf(fmt(f2.m), [
      ...(listed2 ? [[fmt(listed2), `You wrote the digits in the order they are listed. Put each part in its place. ${fmt(f2.m)}.`]] : []),
      [fmt(f2.n), `${fmt(f2.n)} is the other side. Write the parts as a number: ${fmt(f2.m)}.`],
      [fmt(f2.m + pow(String(f2.m).length - 1)), `Look at the biggest place again. ${fmt(f2.m)}.`]
    ])),
    step('S2', sk, `Compare ${fmt(f2.n)} and ${fmt(f2.m)} from the left. Which place is different first?`, PLACES[D2.p],
      otherPlaces.map(p => [PLACES[p], `Go from the left. The ${PLACES[D2.p]} place is different first: ${D2.a} and ${D2.b}.`]),
      { pic: { places: { n: f2.n, n2: f2.m } } }),
    step('S3', sk, 'So which sign goes in the blank?', SIGNS[r2], ['<', '>', '='].filter(s => s !== r2).map(s => [SIGNS[s],
      `${D2.a} ${PLACES[D2.p]} and ${D2.b} ${PLACES[D2.p]}. So ${fmt(f2.n)} is ${REL_WORD[r2]} ${fmt(f2.m)}.`]),
      { signs: true, explain: { places: { n: f2.n, n2: f2.m, mark: D2.p } } }),
    watch('W2', sk, 'Which digit fits?', [
      `${withCommas(hideDigit(n3, p3))} is greater than ${fmt(n3)}. Which digit makes it true?`,
      'Compare from the left. The places to the left of the ? are the same.',
      `With ${x3}, the numbers would be equal. So the ? must be more than ${x3}.`,
      `${ok3} works: ${fmt(n3 + pow(p3))} is greater than ${fmt(n3)}.`
    ], { places: { n: hideDigit(n3, p3), n2: n3 } }),
    step('S4', sk, `${withCommas(hideDigit(n4, p4))} is less than ${fmt(n4)}. Which digit makes it true?`, ok4, [
      [x4, `With ${x4}, the numbers are equal. The ? must be less than ${x4}.`],
      [Math.min(9, x4 + 1), `With ${Math.min(9, x4 + 1)}, it is greater. The ? must be less than ${x4}.`]
    ], { pic: { places: { n: hideDigit(n4, p4), n2: n4 } }, explain: { places: { n: n4 - pow(p4), n2: n4, mark: p4 } } })
  ];
}

/* ── Rounding: Big Numbers ── the class's method: benchmarks → halfway → before or past (no digit rule) */
function bigBenchPool(unit) {
  const out = [];
  const lo = unit === 100000 ? 100001 : 10001, step = unit === 100 ? 613 : unit === 1000 ? 937 : 9377;
  for (let n = lo; n <= 989999; n += step) if (n % unit && n > unit && !FIAB_AVOID.has(n) && (unit !== 100000 || n >= 100000)) out.push([n, unit]);
  return out;
}
function bigHalfPool(unit) {
  const out = [];
  const lo = unit === 1000 ? 10000 : unit === 10000 ? 10000 : 100000, hi = unit === 1000 ? 98000 : 980000;
  for (let low = lo; low <= hi; low += unit) out.push([low + unit / 2, unit]);
  return out;
}
const roundOf = (n, unit) => { const low = Math.floor(n / unit) * unit, half = low + unit / 2, up = n >= half; return { low, high: low + unit, half, up, to: up ? low + unit : low }; };
const posOf = (n, R) => (n === R.half ? 'right at halfway. Halfway rounds up' : R.up ? 'past halfway' : 'before halfway');
const takeAllUnits = (take, n) => [100, 1000, 10000, 100000].forEach(u => take([n, u]));
function teachBigBench(sk, { pick, take }) {
  const [n1, u1] = one(pick, bigBenchPool(10000)); takeAllUnits(take, n1);
  const [n2, u2] = one(pick, bigBenchPool(1000)); takeAllUnits(take, n2);
  const [h3, u3] = one(pick, bigHalfPool(10000));
  const [h4, u4] = one(pick, bigHalfPool(100000));
  const R1 = roundOf(n1, u1), R2 = roundOf(n2, u2), lo3 = h3 - u3 / 2, lo4 = h4 - u4 / 2;
  return [
    watch('W1', sk, 'Find the benchmarks', [
      `${fmt(n1)} is between which two ten thousands?`,
      `Count by ten thousands: ${fmt(R1.low)}, ${fmt(R1.high)}.`,
      `${fmt(n1)} is more than ${fmt(R1.low)}. It is less than ${fmt(R1.high)}.`,
      `So the benchmarks are ${pair(R1.low, R1.high)}.`
    ], { rline: { n: n1, unit: u1, bench: true } }),
    step('S1', sk, `${fmt(n2)} is between which two thousands?`, pair(R2.low, R2.high), [
      [pair(Math.floor(n2 / 100) * 100, Math.floor(n2 / 100) * 100 + 100), `Those are hundreds. Count by thousands: ${pair(R2.low, R2.high)}.`],
      [pair(R2.high, R2.high + 1000), `${fmt(n2)} is less than ${fmt(R2.high)}. Count by thousands: ${pair(R2.low, R2.high)}.`]
    ], { pic: { rline: { n: n2, unit: u2, hideEnds: true } }, explain: { rline: { n: n2, unit: u2, bench: true } } }),
    watch('W2', sk, 'Find halfway', [
      `What is halfway from ${fmt(lo3)} to ${fmt(lo3 + u3)}?`,
      `Halfway is the middle. It is ${fmt(u3 / 2)} past ${fmt(lo3)}.`,
      `It is ${fmt(u3 / 2)} before ${fmt(lo3 + u3)}.`,
      `So halfway is ${fmt(h3)}.`
    ], { rline: { n: h3, unit: u3, half: true, hideN: true } }),
    step('S2', sk, `What is halfway from ${fmt(lo4)} to ${fmt(lo4 + u4)}?`, fmt(h4), [
      [fmt(lo4 + u4 / 20), `That is halfway for ten thousands. The middle of ${pair(lo4, lo4 + u4)} is ${fmt(h4)}.`],
      [fmt(lo4 + u4), `${fmt(lo4 + u4)} is an end, not the middle. Halfway is ${fmt(h4)}.`]
    ], { pic: { rline: { n: h4, unit: u4, hideN: true } }, explain: { rline: { n: h4, unit: u4, half: true, hideN: true } } })
  ];
}
// a worked rounding, 3 lines: the benchmarks and halfway, before or past, the answer
const roundLines = (n, unit) => {
  const R = roundOf(n, unit);
  return [`The benchmarks are ${pair(R.low, R.high)}. Halfway is ${fmt(R.half)}.`, `${fmt(n)} is ${posOf(n, R)}.`, `So ${fmt(n)} rounds ${R.up ? 'up' : 'down'} to ${fmt(R.to)}.`];
};
const roundLine = (n, unit) => ({ rline: { n, unit, bench: true, half: true, arrow: roundOf(n, unit).to } });
function roundSteps(ids, sk, n, unit) {
  const R = roundOf(n, unit), name = PLACE[unit], smaller = unit / 10, lowS = Math.floor(n / smaller) * smaller;
  const at = n === R.half, pos = at ? 'right at halfway' : R.up ? 'past halfway' : 'before halfway';
  const which = unit === 100000 ? 'Which two benchmarks is it between? Count by hundred thousands.' : `Which two ${name}s is it between?`;
  return [
    step(ids[0], sk, `Round ${fmt(n)} to the nearest ${name}. ${which}`, pair(R.low, R.high), [
      [pair(lowS, lowS + smaller), `Those are ${PLACE[smaller]}s. Count by ${name}s: ${pair(R.low, R.high)}.`],
      [pair(R.high, R.high + unit), `${fmt(n)} is less than ${fmt(R.high)}. Count by ${name}s: ${pair(R.low, R.high)}.`]
    ], { pic: { rline: { n, unit, hideEnds: true } } }),
    step(ids[1], sk, `Halfway is ${fmt(R.half)}. Is ${fmt(n)} before or past halfway?`, pos, at
      ? [['before halfway', `${fmt(n)} is not less than ${fmt(R.half)}. It is right at halfway.`], ['past halfway', `${fmt(n)} is not more than ${fmt(R.half)}. It is right at halfway.`]]
      : [
        [R.up ? 'before halfway' : 'past halfway', `${fmt(n)} is ${R.up ? 'more' : 'less'} than ${fmt(R.half)}. It is ${pos}.`],
        ['right at halfway', `Halfway is ${fmt(R.half)}. ${fmt(n)} is not ${fmt(R.half)}. It is ${pos}.`]
      ], { pic: { rline: { n, unit, bench: true, half: true } } }),
    step(ids[2], sk, `So ${fmt(n)} rounds to what?`, fmt(R.to), [
      [fmt(R.up ? R.low : R.high), `${at ? 'Halfway rounds up' : R.up ? 'Past halfway rounds up' : 'Before halfway rounds down'}. ${fmt(n)} rounds to ${fmt(R.to)}.`],
      [fmt(Math.round(n / smaller) * smaller) === fmt(R.to) ? fmt(n) : fmt(Math.round(n / smaller) * smaller), `The question says ${name}. ${fmt(n)} rounds to ${fmt(R.to)}.`]
    ], { explain: roundLine(n, unit) })
  ];
}
function teachRoundBig(sk, { pick, take }) {
  const [n1] = one(pick, bigBenchPool(1000)); takeAllUnits(take, n1);
  const [n2, u2] = one(pick, [...bigBenchPool(1000), ...bigBenchPool(10000)]); takeAllUnits(take, n2);
  const [n3] = one(pick, bigBenchPool(10000)); takeAllUnits(take, n3);
  return [
    watch('W1', sk, 'Round to the nearest thousand', [`Round ${fmt(n1)} to the nearest thousand.`, ...roundLines(n1, 1000)], roundLine(n1, 1000)),
    ...roundSteps(['S1', 'S2', 'S3'], sk, n2, u2),
    watch('W2', sk, 'Round to the nearest ten thousand', [`Round ${fmt(n3)} to the nearest ten thousand.`, ...roundLines(n3, 10000)], roundLine(n3, 10000))
  ];
}
function teachRoundAny(sk, { pick, take }) {
  const differs = n => roundOf(n, 100).to !== roundOf(n, 1000).to;    // the two places give two answers
  const [n1] = one(pick, bigBenchPool(1000).filter(([n]) => differs(n) && n >= 100000)); takeAllUnits(take, n1);
  const [n2, u2] = one(pick, [...bigBenchPool(100), ...bigBenchPool(100000)]); takeAllUnits(take, n2);
  return [
    watch('W1', sk, 'Read the place first', [`Round ${fmt(n1)} to the nearest thousand.`, ...roundLines(n1, 1000)], roundLine(n1, 1000)),
    watch('W2', sk, 'A new place, a new answer', [`Now round ${fmt(n1)} to the nearest hundred.`, ...roundLines(n1, 100), 'The place changes the answer.'], roundLine(n1, 100)),
    ...roundSteps(['S1', 'S2', 'S3'], sk, n2, u2)
  ];
}

/* BR4 · which number rounds to it? "Which number rounds to 47,000? Round to the nearest thousand." Four numbers, one rounds
   to it. The right one is sometimes below 47,000, sometimes above it, sometimes right at halfway below it. */
function roundsToPool() {
  const out = [];
  for (const unit of [1000, 10000]) {
    const lo = unit === 1000 ? 11000 : 20000, hi = unit === 1000 ? 98000 : 970000, st = unit === 1000 ? 1000 : 30000;
    for (let T = lo; T <= hi; T += st) if (!FIAB_TARGETS.has(T)) out.push([T, unit]);
  }
  return out;
}
const sideOf = (T, unit) => { const s = seedOf(`side-${T}-${unit}`) % 5; return s < 2 ? 'below' : s < 4 ? 'above' : 'half'; };
// a number strictly between lo and hi that is not a round number (r picks it)
const between = (lo, hi, r, unit) => { for (let i = 0; i < 40; i++) { const v = lo + 1 + Math.floor(r() * (hi - lo - 1)); if (v % (unit / 10) && !FIAB_AVOID.has(v)) return v; } return lo + 1 + Math.floor((hi - lo) / 3); };
function roundSay(c, unit) { const R = roundOf(c, unit); return `${fmt(c)} is between ${pair(R.low, R.high)}. Halfway is ${fmt(R.half)}. ${fmt(c)} is ${posOf(c, R)}. So it rounds ${R.up ? 'up' : 'down'} to ${fmt(R.to)}.`; }
function roundsToQ(id, [T, unit], { pre, skill, r }) {
  const name = PLACE[unit], h = unit / 2, side = sideOf(T, unit);
  const right = side === 'half' ? T - h : side === 'below' ? between(T - h, T, r, unit) : between(T, T + h, r, unit);
  const how = roundSay(right, unit);
  const wrongs = [
    { v: between(T - unit, T - h, r, unit), tag: 'Before halfway: rounds down' },
    { v: between(T - unit, T - h, r, unit), tag: 'Before halfway: rounds down' },
    { v: between(T - unit - h, T - unit, r, unit), tag: 'Past halfway: rounds up' },
    { v: between(T + h, T + unit, r, unit), tag: 'Past halfway: rounds up' },
    { v: T + h, tag: 'Halfway rounds up' }
  ].map(w => ({ ...w, say: `${roundSay(w.v, unit)} Not ${fmt(T)}. ${how}` }));
  return question({
    id, skill, q: `Which number rounds to ${fmt(T)}? Round to the nearest ${name}.`, noNear: true, commas: true,
    mistake: { type: 'R', n: right, unit },
    ...(pre ? { kind: 'pre' } : { hint: `Round each one to the nearest ${name}. Use benchmarks and halfway.`, explain: { rline: { n: right, unit, bench: true, half: true, arrow: T } } }),
    explanation: how
  }, right, wrongs, r);
}
function teachRoundsTo(sk, { pick }) {
  const [T1, u1] = one(pick, roundsToPool().filter(([, u]) => u === 1000));
  const [T2, u2] = one(pick, roundsToPool().filter(([, u]) => u === 10000));
  const r = rng(seedOf(`BR4-teach-${T1}-${T2}`));
  const c1 = between(T1 - u1 / 2, T1, r, u1), w2 = between(T2 + u2 / 2, T2 + u2, r, u2), c2 = between(T2, T2 + u2 / 2, r, u2);
  const W = roundOf(w2, u2), C2 = roundOf(c2, u2);
  return [
    watch('W1', sk, 'Which one rounds to it?', [
      `Which number rounds to ${fmt(T1)}? Round to the nearest thousand.`,
      'Round each number. Find its benchmarks and halfway.',
      ...roundLines(c1, u1),
      `${fmt(c1)} is the one.`
    ], roundLine(c1, u1)),
    step('S1', sk, `Which number rounds to ${fmt(T2)}? Round to the nearest ten thousand. Look at ${fmt(w2)}. Halfway is ${fmt(W.half)}. Is it before or past halfway?`, 'past halfway', [
      ['before halfway', `${fmt(w2)} is more than ${fmt(W.half)}. It is past halfway.`],
      ['right at halfway', `Halfway is ${fmt(W.half)}. ${fmt(w2)} is past it.`]
    ], { pic: { rline: { n: w2, unit: u2, bench: true, half: true } } }),
    step('S2', sk, `So does ${fmt(w2)} round to ${fmt(T2)}?`, 'No', [
      ['Yes', `Past halfway rounds up. ${fmt(w2)} rounds up to ${fmt(W.to)}. Not ${fmt(T2)}.`]
    ], { explain: roundLine(w2, u2) }),
    step('S3', sk, `Now look at ${fmt(c2)}. Does it round to ${fmt(T2)}?`, 'Yes', [
      ['No', `${fmt(c2)} is before halfway (${fmt(C2.half)}). It rounds down to ${fmt(T2)}.`]
    ], { pic: { rline: { n: c2, unit: u2, bench: true, half: true } }, explain: roundLine(c2, u2) })
  ];
}

const checkWatch = (title, lines) => sk => [watch('W1', sk, title, lines)];
const BIG_LESSONS = [
  {
    id: 'BP1', title: 'Big Number Places', skill: 'Value of a digit (big numbers)',
    pre: { pool: bigValuePool, build: valueQ },
    teach: teachBigPlaces,
    parts: [{ pool: bigValuePool, build: valueQ, n: 10 }]
  },
  {
    id: 'BP2', title: 'Parts in Any Order', skill: 'Parts in any order',
    pre: { pool: mixedPartsPool, build: mixedPartsQ },
    teach: teachMixedParts,
    parts: [{ pool: mixedPartsPool, build: mixedPartsQ, n: 10 }]
  },
  {
    id: 'BP3', title: 'More Than 9 in a Place', skill: 'More than 9 in a place',
    pre: { pool: regroupPool, build: regroupQ },
    teach: teachTrade,
    parts: [
      { pool: regroupPool, build: regroupQ, n: 7, filter: f => f.length === 1 },
      { pool: regroupPool, build: regroupQ, n: 3, filter: f => f.length === 2 }
    ]
  },
  {
    id: 'BP4', title: 'Compare in Any Form', skill: 'Compare in any form',
    pre: { pool: signPool, build: signQ },
    teach: teachCompareForms,
    parts: [
      { pool: signPool, build: signQ, n: 2, filter: f => relOf(f) === '=' },
      { pool: signPool, build: signQ, n: 2, filter: f => relOf(f) === '<' },
      { pool: signPool, build: signQ, n: 2, filter: f => relOf(f) === '>' },
      { pool: signPool, build: signQ, n: 1 },
      { pool: missingPool, build: missingDigitQ, n: 3, skill: 'Missing digit' }
    ]
  },
  {
    id: 'BP5', title: 'Big Place Value Check', skill: 'Place value: big numbers (check)', check: true,
    teach: checkWatch('The big place value check', [
      'This is the check for Place Value: Big Numbers. It has 20 questions.',
      'Find what a digit is worth. Put parts in their places. Trade 10 for 1. Compare numbers.',
      'There are no hints and no pictures this time.',
      'Get 15 of 20 right to finish Place Value: Big Numbers.'
    ]),
    parts: [
      { pool: bigValuePool, build: noHelp(valueQ), n: 5 },
      { pool: mixedPartsPool, build: noHelp(mixedPartsQ), n: 5 },
      { pool: regroupPool, build: noHelp(regroupQ), n: 4 },
      { pool: signPool, build: noHelp(signQ), n: 1, filter: f => relOf(f) === '=' },
      { pool: signPool, build: noHelp(signQ), n: 3, filter: f => relOf(f) !== '=' },
      { pool: missingPool, build: noHelp(missingDigitQ), n: 2 }
    ]
  },
  {
    id: 'BR1', title: 'Benchmarks for Big Numbers', skill: 'Benchmarks (big numbers)',
    pre: { pool: () => bigBenchPool(10000), build: benchQ },
    teach: teachBigBench,
    parts: [
      { pool: () => bigBenchPool(1000), build: benchQ, n: 2 },
      { pool: () => bigBenchPool(10000), build: benchQ, n: 2 },
      { pool: () => bigBenchPool(100000), build: benchQ, n: 2 },
      { pool: () => bigHalfPool(1000), build: halfwayQ, n: 1, skill: 'Halfway (big numbers)' },
      { pool: () => bigHalfPool(10000), build: halfwayQ, n: 2, skill: 'Halfway (big numbers)' },
      { pool: () => bigHalfPool(100000), build: halfwayQ, n: 1, skill: 'Halfway (big numbers)' }
    ]
  },
  {
    id: 'BR2', title: 'Round Big Numbers', skill: 'Round big numbers',
    pre: { pool: () => bigBenchPool(10000), build: roundQ },
    teach: teachRoundBig,
    parts: [
      { pool: () => bigBenchPool(1000), build: roundQ, n: 5 },
      { pool: () => bigBenchPool(10000), build: roundQ, n: 5 }
    ]
  },
  {
    id: 'BR3', title: 'Round to Any Place', skill: 'Round to any place',
    pre: { pool: () => [...bigBenchPool(100), ...bigBenchPool(100000)], build: roundQ },
    teach: teachRoundAny,
    parts: [
      { pool: () => bigBenchPool(100), build: roundQ, n: 2 },
      { pool: () => bigBenchPool(1000), build: roundQ, n: 3 },
      { pool: () => bigBenchPool(10000), build: roundQ, n: 3 },
      { pool: () => bigBenchPool(100000), build: roundQ, n: 2 }
    ]
  },
  {
    id: 'BR4', title: 'Which One Rounds To It?', skill: 'Which number rounds to it',
    pre: { pool: roundsToPool, build: roundsToQ },
    teach: teachRoundsTo,
    parts: [
      { pool: roundsToPool, build: roundsToQ, n: 6, filter: ([, u]) => u === 1000 },
      { pool: roundsToPool, build: roundsToQ, n: 4, filter: ([, u]) => u === 10000 }
    ]
  },
  {
    id: 'BR5', title: 'Big Rounding Check', skill: 'Rounding: big numbers (check)', check: true,
    teach: checkWatch('The big rounding check', [
      'This is the check for Rounding: Big Numbers. It has 20 questions.',
      'Find the benchmarks. Find halfway. Before halfway rounds down. Halfway or past rounds up.',
      'There are no hints and no pictures this time.',
      'Get 15 of 20 right to finish Rounding: Big Numbers.'
    ]),
    parts: [
      { pool: () => [...bigBenchPool(1000), ...bigBenchPool(10000), ...bigBenchPool(100000)], build: noHelp(benchQ), n: 3 },
      { pool: () => [...bigHalfPool(10000), ...bigHalfPool(100000)], build: noHelp(halfwayQ), n: 2 },
      { pool: () => bigBenchPool(1000), build: noHelp(roundQ), n: 4 },
      { pool: () => bigBenchPool(10000), build: noHelp(roundQ), n: 4 },
      { pool: () => [...bigBenchPool(100), ...bigBenchPool(100000)], build: noHelp(roundQ), n: 3 },
      { pool: roundsToPool, build: noHelp(roundsToQ), n: 4 }
    ]
  }
];
LESSONS.push(...BIG_LESSONS);

/* A typed record with a big number comes back in the Big Numbers lesson that teaches it (the same records as the
   other strands: V E C N B H R, so the seed format does not change) */
const BIG_UNITS = [100, 1000, 10000, 100000];
function fitsBig(lessonId, rec) {
  if (!rec || !rec.type || !(rec.n > 0)) return false;
  const { type, n, p, unit } = rec, digits = String(n).length, is = (...ids) => ids.includes(lessonId);
  switch (type) {
    case 'V': { const d = digitsOf(n); return is('BP1', 'BP5') && digits >= 5 && digits <= 6 && p >= 2 && p < digits && d[p] > 0 && d.indexOf(d[p]) === p && d.lastIndexOf(d[p]) === p; }
    case 'E': return digits >= 4 && digits <= 6 && (is('BP3') ? !!tradeOf(n) : is('BP2', 'BP4', 'BP5') && !!partsOrder(n));
    case 'N': return is('BP3', 'BP5') && [100, 1000].includes(unit) && n % unit === 0 && n / unit >= 11 && n / unit <= 99 && (n / unit) % 10 !== 0;
    case 'C': return is('BP4', 'BP5') && rec.m > 0 && rec.m !== n && digits >= 4 && String(rec.m).length === digits && !!partsOrder(rec.m);
    case 'B': return is('BR1', 'BR5') && unit >= 1000 && BIG_UNITS.includes(unit) && n % unit !== 0 && n > unit;
    case 'H': return is('BR1') && unit >= 1000 && BIG_UNITS.includes(unit) && n % unit === unit / 2 && n > unit;
    case 'R': return BIG_UNITS.includes(unit) && n >= 1000 && n % unit !== 0 && n > unit && (is('BR3', 'BR5') || (is('BR2') && (unit === 1000 || unit === 10000)));
    default: return false;
  }
}
function bigItem(lessonId, rec, id, r, skill) {
  const q = bigItemOf(lessonId, rec, id, { pre: false, skill, r });
  if (/^(BP5|BR5)$/.test(lessonId)) { delete q.hint; delete q.pic; }    // a check: no hint, no picture
  return q;
}
function bigItemOf(lessonId, rec, id, o) {
  const { type, n, unit } = rec;
  if (type === 'V') return valueQ(id, [n, rec.p], o);
  if (type === 'E') return lessonId === 'BP3' ? regroupQ(id, [n], o) : lessonId === 'BP4' ? signQ(id, { n, m: n }, o) : mixedPartsQ(id, [n], o);
  if (type === 'N') return regroupQ(id, [n, unit], o);
  if (type === 'C') return signQ(id, { n, m: rec.m }, o);
  if (type === 'B') return benchQ(id, [n, unit], o);
  if (type === 'H') return halfwayQ(id, [n, unit], o);
  return roundQ(id, [n, unit], o);
}

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
  if (op === '×') {
    const lo = Math.min(a, b), hi = Math.max(a, b);
    if (lo < 1 || hi > 10) return false;
    if (lessonId === 'MU1') return a >= 2 && a <= 6 && b >= 2 && b <= 6;
    if (lessonId === 'MU2') return a >= 2 && a <= 6 && b >= 2 && b <= 6;
    if (lessonId === 'MU3') return [2, 5, 10].includes(b) && a >= 2 || [2, 5, 10].includes(a) && b >= 2;
    if (lessonId === 'MU4') return [2, 5, 10].includes(a) || [2, 5, 10].includes(b);
    if (lessonId === 'MU5') return [3, 4].includes(a) || [3, 4].includes(b);
    if (lessonId === 'MU7') return lo >= 2 && ([2, 3, 4, 5, 10].includes(a) || [2, 3, 4, 5, 10].includes(b));
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
  if (lessonId === 'MU1') return groupsQ(id, [a, b], o);
  if (lessonId === 'MU2') return arrayQ(id, [a, b], o);
  if (lessonId === 'MU3') return [2, 5, 10].includes(b) ? skipQ(id, [a, b], o) : skipQ(id, [b, a], o);
  if (op === '×') return multQ(id, [a, b], o);
  if (lessonId === 'AS5') return a - b <= 6 && b >= 2 ? countUpQ(id, [a, b], o) : familyQ(id, [a - b, b], o);
  return mixedQ(id, [op === '+' ? 'add' : 'sub', a, b], o);
}

/* ═══ A STUDENT'S OWN MISTAKES THAT ARE NOT PLAIN FACTS (Marcos 10/19: "everything in the lab should be tailored") ═══
   rec = { type, n, p | unit | m } — V value of a digit · E expanded form · C compare · N rename · B benchmarks ·
   H halfway · R round. ownKey names one; fitsOwn says which lesson teaches it; ownItem builds it with that lesson's
   own builder, with the student's own numbers (a miss on 6,284 comes back as 6,284). A plain fact goes to fits/factItem. */
const PLACE_OF = { 10: 'ten', 100: 'hundred', 1000: 'thousand' };
function ownKey(rec) {
  if (!rec || !rec.type) return null;
  const x = rec.type === 'V' ? rec.p : rec.type === 'C' ? rec.m : rec.type === 'E' ? 0 : rec.unit;
  return `${rec.type} ${rec.n}/${x}`;
}
function fitsOwn(lessonId, rec) {
  if (!rec) return false;
  if (/^(BP|BR)/.test(lessonId)) return fitsBig(lessonId, rec);
  if (!rec.type) {
    if (rec.op === TIMES) {
      const { a, b } = rec, small = Math.min(a, b), big = Math.max(a, b);
      if (lessonId === 'PV6') return (a === 10 || b === 10) && small >= 2 && big <= 99;
      if (lessonId === 'PV7') return (a === 100 || b === 100) && small >= 2 && small <= 99;
      if (lessonId === 'PV8') return [a, b].some(x => x % 10 === 0 && x >= 20 && x <= 90) && small >= 2 && small <= 9;
    }
    return fits(lessonId, rec);
  }
  const { type, n, p, unit } = rec;
  if (!(n > 0)) return false;
  const digits = String(n).length;
  switch (type) {
    case 'V': {
      const d = String(n).split('').reverse();
      if (!(p >= 1 && p < digits && p <= 5) || d.indexOf(d[p]) !== p || d.lastIndexOf(d[p]) !== p || d[p] === '0') return false;
      return lessonId === 'PV9' || (lessonId === 'PV1' ? digits === 3 : lessonId === 'PV3' ? digits >= 4 : false);
    }
    case 'E': return (lessonId === 'PV2' || lessonId === 'PV9') && digits >= 3 && digits <= 6;
    case 'C': return (lessonId === 'PV4' || lessonId === 'PV9') && rec.m > 0 && rec.m !== n && String(rec.m).length === digits;
    case 'N': return (lessonId === 'PV5' || lessonId === 'PV9') && [10, 100].includes(unit) && n % unit === 0 && n / unit >= 2;
    case 'B': return PLACE_OF[unit] && n % unit !== 0 && (lessonId === 'RO1' || lessonId === 'RO6');
    case 'H': return PLACE_OF[unit] && unit >= 10 && (lessonId === 'RO2');
    case 'R': return PLACE_OF[unit] && n % unit !== 0 && (lessonId === 'RO5' || lessonId === 'RO6' || (lessonId === 'RO3' && unit === 10) || (lessonId === 'RO4' && unit === 100));
    default: return false;
  }
}
function ownItem(lessonId, rec, id, r, skill) {
  const o = { pre: false, skill, r };
  if (/^(BP|BR)/.test(lessonId)) return bigItem(lessonId, rec, id, r, skill);
  if (!rec.type) {
    if (rec.op === TIMES && /^PV[678]$/.test(lessonId)) {
      const { a, b } = rec;
      if (lessonId === 'PV8') { const m = [a, b].find(x => x % 10 === 0 && x >= 20 && x <= 90), k = m === a ? b : a; return multiplesQ(id, [k, m], o); }
      const k = lessonId === 'PV6' ? 10 : 100, n = a === k ? b : a;
      return times10Q(id, [n, k], o);
    }
    return factItem(lessonId, rec, id, r, skill);
  }
  const { type, n, p, unit } = rec;
  if (type === 'V') return valueQ(id, [n, p], o);
  if (type === 'E') return expandedQ(id, [n], o);
  if (type === 'C') return compareQ(id, n > rec.m ? [n, rec.m] : [rec.m, n], o);
  if (type === 'N') return renameQ(id, [n, unit], o);
  if (type === 'B') return benchQ(id, [n, unit], o);
  if (type === 'H') return halfwayQ(id, [n, unit], o);
  return roundQ(id, [n, unit], o);
}

const api = { MINUS, TIMES, rng, seedOf, shuffled, range, question, LESSONS, fits, factItem, ownKey, fitsOwn, ownItem,
  valueQ, expandedQ, compareQ, renameQ, times10Q, multiplesQ, benchQ, halfwayQ, roundQ,
  valuePool, expandedPool, comparePool, renamePool, times10Pool, multiplesPool, benchPool, halfPool,
  groupsQ, arrayQ, skipQ, timesQ, multQ, groupsPool, arrayPool, skipPool, timesPool, factsPool,
  countOnQ, countBackQ, partnerQ, make10Q, teenQ, countUpQ, familyQ, mixedQ,
  countOnPool, countBackPool, make10Pool, teenPool, countUpPool, familyPool, mixedPool,
  mixedPartsQ, regroupQ, signQ, missingDigitQ, roundsToQ, partsOrder, tradeOf, formText,
  bigValuePool, mixedPartsPool, regroupPool, signPool, missingPool, bigBenchPool, bigHalfPool, roundsToPool, SIGN_LIST };
root.LabLessons = api;
if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
