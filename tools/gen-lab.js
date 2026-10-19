#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════
   THE LAB · question builder for Strand 1 — Adding and Subtracting to 20
   Marcos 10/17/2026: "if they cant add or subtract how are they going to multiply
   and divide?" — so the Lab starts here, for every Lab student; facts lessons pass at 90%.

   Every lesson is built like the Math Module 2 Warm-Up (Marcos 10/15):
     🎯 Show what you know  5 questions (kind 'pre') — all 5 right on the first try = the lesson is skipped
     👀 Watch               a worked example the student must hear to the end (kind 'watch')
     🪜 Step by step        one small step of a problem at a time, not scored (kind 'step')
     ✏️ Your turn          10 scored questions (no kind) — 9 of 10 (90%) passes
   Lesson 6 is the facts check: 20 mixed facts, no pictures, no hints, 18 of 20.

   NOTHING IS TYPED: every answer, wrong choice and mistake note is worked out here from
   the two numbers. Each wrong choice stands for one slip, and its note names that slip with
   the problem's own numbers (Marcos 10/12: name the mistake, do not just say "try again").
   A retry gets new facts (Marcos 10/16): 4 versions per lesson, version 1 = LAB_<ID>.
   The worked examples and steps stay the same in every version; the questions change.

   Run:  node tools/gen-lab.js        → writes data/as1.js … data/as6.js, data/skills.js
   Check: node tools/check-lab.js     (an independent checker — it re-works every answer)
═══════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'data');
const N_VERSIONS = 4;
const L = require('../lessons.js');
const { MINUS, rng, seedOf, shuffled, range, LESSONS } = L;

/* ═══ BUILD ═══ */
// a + b and b + a are the same fact inside one version
const sameFactAny = t => {
  if (!Array.isArray(t)) return JSON.stringify(t);
  if (t.length === 2) return JSON.stringify([...t].sort((x, y) => x - y));
  // [kind, a, b]: adding kinds are the same fact either way round (8 + 6 = 6 + 8); taking away is not
  const [kind, a, b] = t;
  return /^(add|addT|ten|tenB|plus)$/.test(kind) ? `+${Math.min(a, b)},${Math.max(a, b)}` : `${kind === 'sub' || kind === 'minus' || kind === 'minus10' ? '-' : kind}${a},${b}`;
};

const ORDERED = new Set(['MU1', 'MU2', 'MU6']);   // groups, arrays, times as many: a × b and b × a are different pictures
function buildVersion(L, v, lessonUsed) {
  const r = rng(seedOf(`${L.id}-v${v}`));
  const sameFact = t => (ORDERED.has(L.id) ? JSON.stringify(t) : sameFactAny(t));
  const items = [];
  const taken = new Set();
  const usedFact = new Set();
  const markTaken = t => { taken.add(JSON.stringify(t)); usedFact.add(sameFact(t)); if (Array.isArray(t) && t.length === 2) taken.add(JSON.stringify([t[1], t[0]])); };
  const pick = (pool, n) => {
    const order = [...shuffled(pool, r)];
    const fresh = order.filter(t => !usedFact.has(sameFact(t)) && !lessonUsed.has(sameFact(t)));
    const reuse = order.filter(t => !usedFact.has(sameFact(t)) && lessonUsed.has(sameFact(t)));
    const out = [];
    for (const t of [...fresh, ...reuse]) {
      if (out.length === n) break;
      if (usedFact.has(sameFact(t))) continue;
      out.push(t); markTaken(t);
    }
    if (out.length < n) throw new Error(`${L.id} v${v}: pool too small (${out.length} of ${n})`);
    return out;
  };
  let pi = 0, si = 0;
  if (L.pre) {
    pick(L.pre.pool(), 5).forEach(t => { pi++; items.push(L.pre.build(`${L.id}-P${pi}`, t, { pre: true, skill: L.skill, r })); });
  }
  const teach = L.teach(L.skill).map(it => ({ ...it, id: `${L.id}-${it.id}` }));
  // teaching first: watch / step items, then the scored questions
  items.push(...teach);
  for (const part of L.parts) {
    const pool = part.filter ? part.pool().filter(part.filter) : part.pool();
    pick(pool, part.n).forEach(t => { si++; items.push(part.build(`${L.id}-Q${String(si).padStart(2, '0')}`, t, { pre: false, skill: part.skill || L.skill, r })); });
  }
  usedFact.forEach(k => lessonUsed.add(k));
  return items;
}

function writeLesson(L) {
  const lessonUsed = new Set();
  const versions = [];
  for (let v = 1; v <= N_VERSIONS; v++) versions.push(buildVersion(L, v, lessonUsed));
  const name = `LAB_${L.id}`;
  const scored = versions[0].filter(q => !q.kind).length;
  const header = `/* ═══════════════════════════════════════════════════════
   THE LAB · ${L.id} — ${L.title}
   BUILT BY A SCRIPT (tools/gen-lab.js) — every answer, wrong choice and mistake
   note is computed, none is typed. Do not edit by hand: change the script and rebuild.
   ${L.pre ? '5 "show what you know" (kind pre) · ' : ''}${versions[0].filter(q => q.kind === 'watch').length} watch · ${versions[0].filter(q => q.kind === 'step').length} steps · ${scored} scored questions
   ${name}_V = ${N_VERSIONS} versions (a retry gets the next one); version 1 = ${name}.
═══════════════════════════════════════════════════════ */
`;
  const body = `window.${name} = [\n${versions[0].map(q => '  ' + JSON.stringify(q)).join(',\n')}\n];\n` +
    `window.${name}_V = [window.${name},\n${versions.slice(1).map(ver => '  [\n' + ver.map(q => '    ' + JSON.stringify(q)).join(',\n') + '\n  ]').join(',\n')}\n];\n`;
  fs.writeFileSync(path.join(OUT, `${L.id.toLowerCase()}.js`), header + body);
  return versions;
}

if (require.main === module) {
  fs.mkdirSync(OUT, { recursive: true });
  const skills = {};
  for (const L of LESSONS) {
    const versions = writeLesson(L);
    versions.flat().forEach(q => { skills[q.id] = skills[q.id] || q.skill; });
    const v1 = versions[0];
    process.stdout.write(`${L.id}  ${v1.length} items · ${v1.filter(q => !q.kind).length} scored · ${N_VERSIONS} versions\n`);
  }
  fs.writeFileSync(path.join(OUT, 'skills.js'),
    `/* THE LAB · skill tag of every question id (dashboard groups by it). BUILT BY tools/gen-lab.js. */\nwindow.SKILLS = ${JSON.stringify(skills, null, 1)};\n`);
}

module.exports = { N_VERSIONS };
