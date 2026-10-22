#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════
   THE LAB · tools/check-reading.js — checks the Reading for Meaning lessons (data/rcN.js)
   Usage: node tools/check-reading.js [RC1 RC2 …]   (no name = every reading lesson found)
          node tools/check-reading.js --plants      (also proves each planted mistake is caught)
   Exit 1 on any problem (or a planted mistake that slips through).

   Every lesson:
   - teach.story + a flow of watch / step screens; 4 versions, each with pre + 2 turn stories
   - every version has the same ids, types, skills and pick counts, in the same order (a retry is the
     same lesson with new stories)
   - each story reads in its FK range and word range (tools/CONTENT-SPEC-READING.md); titles are
     unique across the Lab and not used by Inference Practice, Read Literary or R.A.D. Practice
   - a "which sentence" choice, a Part B choice, a click sentence and a lit sentence are EXACT sentences
     of the story (LabReading.split — the same split the site uses)
   - mc: 4 different choices; ebsr: Part A + Part B with 4 each; hot: answers in the clickable area,
     enough sentences to click, the test's stem; ms: pick + 3 or more wrong choices
   - every wrong choice has a known kind or its own note; every question has a why; a why never names
     a choice by position (they shuffle)
   - no giveaways: an earlier question's notes / why never quote 7+ words of a later answer sentence;
     Part A's notes never quote Part B's answer; two questions on one story never share 2+ wrong choices
   - why lines, notes and watch lines read at FK ≤ 3.0 together per version; questions at FK ≤ 4.0
   - no student first names, no blanks (____), the right answer is not the longest choice most of the time
   LEVEL 2 (RD1 …, Marcos 10/22: "growth opportunities to kids at all levels"): grade 4–5 stories (LEVEL2_RANGE), and
   - every version has its OWN teaching story and worked example, taught the same way (one method, new stories)
   - close wrong choices: a "which sentence" question or Part B has a wrong sentence from the proof's own paragraph;
     Part A and Choose TWO have a wrong choice that is partly right (toofar / onedetail)
   - click: a pick-2 list is 6 sentences, a pick-2 paragraph has 6 or more; Choose TWO has exactly 5 choices
═══════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = path.resolve(__dirname, '..');
const R = require(path.join(SITE, 'reading.js'));

const STORY_RANGE = {
  teach: { fk: [1.8, 2.8], words: [90, 170] },
  pre:   { fk: [1.8, 2.8], words: [70, 140] },
  turn:  { fk: [1.8, 2.8], words: [100, 180] }
};
// lessons whose Your-turn stories need more sentences (four click questions on one story)
const TURN_RANGE = { RC3: { fk: [1.8, 2.8], words: [130, 210] }, RC8: { fk: [2.8, 3.3], words: [130, 220] }, RD3: { fk: [4.0, 5.0], words: [320, 450] } };
// Level 2 (RD): grade 4–5 stories. The class's IAB-style practice forms measure FK 3.6–4.6 at 630–735 words.
const LEVEL2_RANGE = {
  teach: { fk: [3.5, 4.5], words: [180, 280] },
  pre:   { fk: [4.0, 5.0], words: [180, 280] },
  turn:  { fk: [4.0, 5.0], words: [280, 400] }
};
const isLevel2 = form => /^RD\d+$/.test(form);
const rangeOf = (form, part) => (part === 'turn' && TURN_RANGE[form]) || (isLevel2(form) ? LEVEL2_RANGE : STORY_RANGE)[part];
const CLOSE_KINDS = new Set(['toofar', 'onedetail']);   // a partly-right wrong choice
const KNOWN_KINDS = new Set(Object.keys(R.KINDS));
const POSITION_RE = /\b(first|second|third|fourth|last|top|bottom) (choice|answer|option)\b|\b(choice|answer|option) [A-E]\b/i;

/* ── load the lessons ── */
function loadLessons(dir) {
  const box = { window: {} };
  vm.createContext(box);
  fs.readdirSync(dir).filter(f => /^r[cd]\d+\.js$/.test(f)).sort().forEach(f => vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), box));
  return box.window.LAB_RC || {};
}

/* ── student first names (roster in script.js) ── */
const roster = fs.readFileSync(path.join(SITE, 'script.js'), 'utf8').match(/const ROSTER = \[([\s\S]*?)\];/)[1];
const firstNames = [...roster.matchAll(/name: "[^,"]*, ([^" ]+)/g)].map(m => m[1].replace(/[^A-Za-z']/g, '')).filter(n => n.length > 1);
const nameRe = new RegExp(`\\b(${firstNames.join('|')})\\b`);

/* ── titles already used by the class's other reading sites ── */
function otherTitles() {
  const out = new Map();
  const root = path.resolve(SITE, '..');
  const tryRun = (files, read) => {
    try {
      const box = { window: {} }; vm.createContext(box);
      files.forEach(f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), box));
      read(box.window);
    } catch (e) { /* a sibling site that is not on this computer is skipped */ }
  };
  const ipDir = path.join(root, 'inference-practice/data');
  if (fs.existsSync(ipDir)) tryRun(['inference-practice/data/inference.js', ...fs.readdirSync(ipDir).filter(f => f.startsWith('act-')).map(f => 'inference-practice/data/' + f)],
    w => { w.INF_SETS = w.INF_SETS || {}; Object.values(w.INF_SETS).forEach(s => Object.values(s.levels || {}).forEach(ps => ps.forEach(p => out.set(norm(p.title), 'Inference Practice')))); });
  ['w', 'a', 'b', 'c'].forEach(L => tryRun([`sbac-read-literary-iab-review/data/form_${L}.js`],
    w => { const F = w['FORM_' + L.toUpperCase()]; (F && F.passages || []).forEach(p => out.set(norm(p.title), 'Read Literary')); }));
  ['rad-practice/data/rad.js', 'rad-practice/data/rad-versions.js'].forEach(f => {
    try { for (const m of fs.readFileSync(path.join(root, f), 'utf8').matchAll(/title:\s*["']([^"']+)["']/g)) out.set(norm(m[1]), 'R.A.D. Practice'); } catch (e) { /* skipped */ }
  });
  return out;
}
const norm = t => String(t || '').toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();

/* ── Level 2: which paragraph a sentence is in (-1 = none) ── */
const paraOf = (story, sentence) => (story.paragraphs || []).findIndex(p => R.split(p).includes(sentence));
// a wrong sentence from the proof's own paragraph: true, about the idea, but not the proof
const hasCloseWrong = (story, right, wrongs) => { const at = paraOf(story, right); return at >= 0 && wrongs.some(w => paraOf(story, w) === at); };
const hasPartlyRight = c => (c.kinds || []).some(k => CLOSE_KINDS.has(k));

/* ── 7-word pieces, for the giveaway check ── */
const words7 = t => { const w = String(t || '').toLowerCase().replace(/[^a-z0-9' ]+/g, ' ').split(/\s+/).filter(Boolean);
  const out = new Set(); for (let k = 0; k + 7 <= w.length; k++) out.add(w.slice(k, k + 7).join(' ')); return out; };

/* ═══ THE CHECK ═══ */
function checkAll(LESSONS, only, others) {
  const fails = [];
  const report = [];
  const fail = m => fails.push(m);
  const titles = new Map();
  const allText = [];

  const storyCheck = (form, at, story, range) => {
    if (!story || !story.title) { fail(`${at}: no story or no title`); return []; }
    const t = norm(story.title);
    if (titles.has(t)) fail(`${at}: title "${story.title}" also used at ${titles.get(t)}`);
    else titles.set(t, at);
    if (others.has(t)) fail(`${at}: title "${story.title}" is already used by ${others.get(t)}`);
    const paras = story.paragraphs || [];
    const maxP = isLevel2(form) ? 10 : 8;
    if (paras.length < 4 || paras.length > maxP) fail(`${at} "${story.title}": ${paras.length} paragraphs (want 4–${maxP})`);
    const st = R.stats(paras);
    const ok = st.fk >= range.fk[0] && st.fk <= range.fk[1] && st.words >= range.words[0] && st.words <= range.words[1];
    if (st.fk < range.fk[0] || st.fk > range.fk[1]) fail(`${at} "${story.title}": FK ${st.fk.toFixed(2)} (want ${range.fk[0]}–${range.fk[1]})`);
    if (st.words < range.words[0] || st.words > range.words[1]) fail(`${at} "${story.title}": ${st.words} words (want ${range.words[0]}–${range.words[1]})`);
    report.push(`${ok ? '  ' : '✗ '}${at.padEnd(14)} FK ${st.fk.toFixed(2)} · ${String(st.words).padStart(3)} words · "${story.title}"`);
    allText.push([at, story.title], ...paras.map(p => [at, p]));
    return paras.flatMap(R.split);
  };

  // returns { right, longestIsRight } for an mc-shaped choice set
  const choiceCheck = (at, c, sentences, mustBeSentences, notes) => {
    const choices = c.choices || [];
    if (choices.length !== 4) fail(`${at}: ${choices.length} choices (want 4)`);
    if (new Set(choices.map(x => norm(x))).size !== choices.length) fail(`${at}: two choices are the same`);
    choices.forEach((ch, i) => {
      if (!String(ch || '').trim()) fail(`${at}: choice ${i + 1} is empty`);
      if (/ \| | \/ /.test(ch)) fail(`${at}: choice ${i + 1} has " | " or " / " (it would break the saved pick)`);
      if (i === 0) return;
      const k = c.kinds && c.kinds[i];
      const n = c.notes && c.notes[i];
      if (k && !KNOWN_KINDS.has(k)) fail(`${at}: unknown kind "${k}"`);
      // a kind on EVERY wrong choice: the Lab counts kinds to see the same kind of mistake on a new story
      if (!(k && KNOWN_KINDS.has(k))) fail(`${at}: wrong choice ${i + 1} ("${String(ch).slice(0, 40)}…") has no kind (a note is extra, the kind is required)`);
      if (n) notes.push(n);
    });
    if (mustBeSentences) choices.forEach((ch, i) => { if (!sentences.includes(ch)) fail(`${at}: choice ${i + 1} is not an exact sentence of the story: "${ch}"`); });
    if (!c.why) fail(`${at}: no why`);
    if (c.why && POSITION_RE.test(c.why)) fail(`${at}: why names a choice by position (choices are shuffled)`);
    if (c.why && POSITION_RE.test((c.notes || []).join(' '))) fail(`${at}: a note names a choice by position`);
    return { right: choices[0] || '', longestIsRight: choices.length === 4 && choices.slice(1).every(x => String(x).length < String(choices[0]).length) };
  };

  // one item; returns its slot shape (for the version-to-version check)
  const itemCheck = (form, at, it, story, sentences, acc) => {
    const iat = `${at} ${it.id || '?'}`;
    const shape = { id: it.id, type: it.type, skill: JSON.stringify(it.skill || ''), pick: it.pick || 0, para: it.para != null, list: Array.isArray(it.list) };
    if (!it.id) fail(`${iat}: no id`);
    if (!it.skill && !acc.step) fail(`${iat}: no skill`);
    if (it.para != null && !(story.paragraphs || [])[it.para - 1]) fail(`${iat}: paragraph ${it.para} does not exist`);
    if (it.type === 'mc') {
      if (!it.q) fail(`${iat}: no question`);
      acc.qs.push(it.q);
      const r = choiceCheck(iat, it, sentences, !!it.evidence, acc.notes);
      if (r.longestIsRight) acc.longest++;
      acc.mc++;
      if (it.evidence && !/\bBEST\b/.test(it.q)) fail(`${iat}: a "which sentence" question says BEST, like the test`);
      if (isLevel2(form) && !acc.step && it.evidence && !hasCloseWrong(story, it.choices[0], it.choices.slice(1)))
        fail(`${iat}: Level 2 needs a close wrong choice: a sentence from the proof's own paragraph that does not prove the idea`);
      if (it.why) acc.whys.push(it.why);
      acc.asked.push([it.id, it]);
      if (it.evidence) acc.keys.push([it.id, it.choices[0]]);
      allText.push([iat, it.q], ...(it.choices || []).map(c => [iat, c]));
    } else if (it.type === 'ebsr') {
      if (!it.a || !it.b) { fail(`${iat}: Part A + Part B need a and b`); return shape; }
      if (!Array.isArray(it.skill) || it.skill.length !== 2) fail(`${iat}: an ebsr skill is [Part A skill, Part B skill]`);
      if (!/^Part A — /.test(it.a.q || '')) fail(`${iat}: Part A's question starts "Part A — "`);
      if (it.b.q) fail(`${iat}: leave b.q out (the site adds the test's Part B question)`);
      acc.qs.push(it.a.q);
      const ra = choiceCheck(iat + '.A', it.a, sentences, false, acc.notes);
      const rb = choiceCheck(iat + '.B', it.b, sentences, true, acc.notes);
      if (isLevel2(form) && !acc.step) {
        if (!hasCloseWrong(story, it.b.choices[0], it.b.choices.slice(1))) fail(`${iat}.B: Level 2 needs a close wrong choice: a sentence from the proof's own paragraph that does not prove the answer`);
        if (!hasPartlyRight(it.a)) fail(`${iat}.A: Level 2 needs a partly-right wrong choice in Part A (kind toofar or onedetail)`);
      }
      // both parts count: a child can learn "pick the longest sentence" from Part B just as well
      if (ra.longestIsRight) acc.longest++;
      if (rb.longestIsRight) acc.longest++;
      acc.mc += 2;
      [it.a.why, it.b.why].filter(Boolean).forEach(w => acc.whys.push(w));
      const grams = words7(rb.right);
      [...(it.a.notes || []), it.a.why].filter(Boolean).forEach(t => {
        const hit = [...words7(t)].find(g => grams.has(g));
        if (hit) fail(`${iat}: Part A's note or why gives away the Part B sentence ("…${hit}…")`);
      });
      acc.asked.push([it.id + '.A', it.a], [it.id + '.B', it.b]);
      acc.keys.push([it.id, rb.right]);
      allText.push([iat, it.a.q], ...it.a.choices.map(c => [iat, c]));
    } else if (it.type === 'hot') {
      const pick = it.pick || 1;
      if (pick !== 1 && pick !== 2) fail(`${iat}: pick must be 1 or 2`);
      if (!it.q) fail(`${iat}: no question`);
      acc.qs.push(it.q);
      const stem = pick === 1 ? /Click on the sentence/ : /Click on the TWO sentences/;
      if (!stem.test(it.q || '')) fail(`${iat}: the question says "${pick === 1 ? 'Click on the sentence' : 'Click on the TWO sentences'}", like the test`);
      if (it.para == null && !Array.isArray(it.list)) fail(`${iat}: a click question needs para (one paragraph) or list (exact sentences)`);
      const area = R.hotArea(story, it);
      const want = pick === 1 ? 4 : 5;
      if (area.length < want) fail(`${iat}: only ${area.length} sentences to click (want ${want} or more)`);
      if (isLevel2(form) && !acc.step && pick === 2) {
        if (Array.isArray(it.list) && it.list.length !== 6) fail(`${iat}: a Level 2 pick-2 list has 6 sentences (it has ${it.list.length})`);
        if (it.para != null && area.length < 6) fail(`${iat}: a Level 2 pick-2 paragraph has 6 or more sentences (it has ${area.length})`);
      }
      if (Array.isArray(it.list)) {
        it.list.forEach(s => { if (!sentences.includes(s)) fail(`${iat}: list sentence is not an exact sentence of the story: "${s}"`); });
        const order = it.list.map(s => sentences.indexOf(s));
        if (order.some((x, i) => i && x < order[i - 1])) fail(`${iat}: list sentences are not in story order`);
        if (it.list.length > 7) fail(`${iat}: ${it.list.length} sentences in the list (want 5–6)`);
      }
      const answers = it.answers || (it.answer ? [it.answer] : []);
      if (answers.length !== pick) fail(`${iat}: ${answers.length} answers for pick ${pick}`);
      answers.forEach(a => { if (area.filter(s => s === a).length !== 1) fail(`${iat}: answer is not exactly one clickable sentence: "${a}"`); });
      Object.keys(it.kinds || {}).forEach(k => {
        if (!area.includes(k)) fail(`${iat}: kind for a sentence that is not clickable: "${k}"`);
        if (!KNOWN_KINDS.has(it.kinds[k])) fail(`${iat}: unknown kind "${it.kinds[k]}"`);
      });
      Object.entries(it.notes || {}).forEach(([k, n]) => {
        if (!area.includes(k)) fail(`${iat}: note for a sentence that is not clickable: "${k}"`);
        if (answers.includes(k)) fail(`${iat}: note on a right sentence`);
        acc.notes.push(n);
      });
      if (!it.why) fail(`${iat}: no why`); else acc.whys.push(it.why);
      if (it.why && POSITION_RE.test(it.why)) fail(`${iat}: why names a choice by position`);
      answers.forEach(a => acc.keys.push([it.id, a]));
      if (Array.isArray(it.list)) acc.lists.push([it.id, it.list]);
      acc.asked.push([it.id, { choices: area, answer: 0, _hot: answers }]);
      allText.push([iat, it.q]);
    } else if (it.type === 'ms') {
      const pick = it.pick || 2;
      const choices = it.choices || [];
      if (!it.q) fail(`${iat}: no question`);
      acc.qs.push(it.q);
      if (!/Choose TWO|Choose THREE/.test(it.q || '')) fail(`${iat}: the question says "Choose TWO" (or THREE), like the test`);
      if (choices.length < pick + 3) fail(`${iat}: ${choices.length} choices for pick ${pick} (want ${pick + 3} or more)`);
      if (new Set(choices.map(norm)).size !== choices.length) fail(`${iat}: two choices are the same`);
      choices.forEach((ch, i) => {
        if (i < pick) return;
        const k = it.kinds && it.kinds[i], n = it.notes && it.notes[i];
        if (k && !KNOWN_KINDS.has(k)) fail(`${iat}: unknown kind "${k}"`);
        if (!(k && KNOWN_KINDS.has(k))) fail(`${iat}: wrong choice ${i + 1} has no kind (a note is extra, the kind is required)`);
        if (n) acc.notes.push(n);
      });
      if (isLevel2(form) && !acc.step) {
        if (choices.length !== pick + 3) fail(`${iat}: Level 2 Choose ${pick === 2 ? 'TWO' : pick} has ${pick + 3} choices (it has ${choices.length})`);
        if (!hasPartlyRight(it)) fail(`${iat}: Level 2 needs a partly-right wrong choice (kind toofar or onedetail)`);
      }
      if (!it.why) fail(`${iat}: no why`); else acc.whys.push(it.why);
      if (it.why && POSITION_RE.test(it.why)) fail(`${iat}: why names a choice by position`);
      choices.slice(0, pick).forEach(a => acc.keys.push([it.id, a]));
      acc.asked.push([it.id, { choices, answer: 0, _ms: pick }]);
      // Choose TWO: the right answers are not the longest choices (or the shortest) — a child can learn that trick too
      const len = x => String(x).length, rights = choices.slice(0, pick), wrongs = choices.slice(pick);
      if (rights.every(r => wrongs.every(w => len(w) < len(r)))) acc.longest++;
      if (rights.every(r => wrongs.every(w => len(w) > len(r)))) fail(`${iat}: both right answers are shorter than every wrong one`);
      acc.mc++;
      allText.push([iat, it.q], ...choices.map(c => [iat, c]));
    } else fail(`${iat}: unknown type "${it.type}"`);
    return shape;
  };

  // per story: giveaways + shared wrong choices + list overlap
  const storyItemsCheck = (at, acc) => {
    const wrongOf = ([, c]) => new Set((c.choices || []).filter((x, i) => (c._hot ? !c._hot.includes(x) : i >= (c._ms || 1))));
    acc.asked.forEach((a, i) => acc.asked.slice(i + 1).forEach(b => {
      if (a[1]._hot || b[1]._hot) return;          // click areas share the story's sentences by design
      const shared = [...wrongOf(a)].filter(x => wrongOf(b).has(x));
      if (shared.length >= 2) fail(`${at}: ${a[0]} and ${b[0]} share ${shared.length} wrong choices (give the later one different ones)`);
    }));
    acc.lists.forEach(([idA, la], i) => acc.lists.slice(i + 1).forEach(([idB, lb]) => {
      const both = la.filter(s => lb.includes(s));
      if (both.length) fail(`${at}: ${idA} and ${idB} list the same sentence: "${both[0]}"`);
    }));
    acc.items.forEach((later, j) => {
      const keys = acc.keys.filter(([id]) => id === later.id).map(([, s]) => s);
      keys.forEach(key => {
        const grams = words7(key);
        acc.items.slice(0, j).forEach(earlier => {
          const said = [earlier.why, ...(earlier.notes ? Object.values(earlier.notes) : []),
            ...(earlier.a ? [earlier.a.why, ...(earlier.a.notes || [])] : []), ...(earlier.b ? [earlier.b.why, ...(earlier.b.notes || [])] : [])].filter(Boolean);
          said.forEach(t => {
            const hit = [...words7(t)].find(g => grams.has(g));
            if (hit) fail(`${at} ${earlier.id}: a note or why gives away ${later.id}'s answer sentence ("…${hit}…")`);
          });
        });
      });
    });
  };

  const newAcc = () => ({ qs: [], whys: [], notes: [], asked: [], keys: [], lists: [], items: [], longest: 0, mc: 0, step: false });

  Object.keys(LESSONS).sort((a, b) => a.slice(0, 2).localeCompare(b.slice(0, 2)) || Number(a.slice(2)) - Number(b.slice(2))).forEach(form => {
    if (only.length && !only.includes(form)) return;
    const L = LESSONS[form];
    if (!/^R[CD]\d+$/.test(form)) { fail(`${form}: a reading lesson is named RC or RD + a number`); return; }
    const turnRange = rangeOf(form, 'turn');

    // ── teaching: one story for every version (Level 1), or a new one in every version (Level 2: v.teach) ──
    // returns the flow's shape, so every version can be held to the same teaching steps
    const teachCheck = (at, T) => {
      if (!T || !T.story) { fail(`${at}: no teaching story`); return ''; }
      const tsent = storyCheck(form, at, T.story, rangeOf(form, 'teach'));
      const acc = newAcc(); acc.step = true;
      const flow = T.flow || [];
      if (!flow.some(f => f.kind === 'watch')) fail(`${at}: the teaching flow has no watch screen`);
      const lines = [];
      flow.forEach((f, i) => {
        const fat = `${at} ${f.id || '#' + (i + 1)}`;
        if (f.kind === 'watch') {
          if (!f.title) fail(`${fat}: watch has no title`);
          if (!Array.isArray(f.lines) || !f.lines.length) fail(`${fat}: watch has no lines`);
          (f.lines || []).forEach(l => { lines.push(l); allText.push([fat, l]); });
          (f.lit || []).forEach(s => { if (!tsent.includes(s)) fail(`${fat}: lit sentence is not an exact sentence of the teaching story: "${s}"`); });
        } else if (f.kind === 'step') {
          itemCheck(form, fat, f, T.story, tsent, acc);
        } else fail(`${fat}: kind must be watch or step`);
      });
      const lf = R.stats(lines).fk;
      if (lf > 3.0) fail(`${at}: the watch lines read at ${lf.toFixed(2)} (want ≤ 3.0)`);
      // Level 2: the steps' why lines and notes are the teaching voice too
      const sw = R.stats([...acc.whys, ...acc.notes]).fk;
      if (isLevel2(form) && acc.whys.length && sw > 3.0) fail(`${at}: the steps' why lines and notes read at ${sw.toFixed(2)} (want ≤ 3.0)`);
      report.push(`${at}: watch lines FK ${lf.toFixed(2)}, ${R.stats(lines).words} words${isLevel2(form) ? ` · steps' whys FK ${sw.toFixed(2)}` : ''}`);
      return JSON.stringify(flow.map(f => [f.kind, f.id, f.type || '', f.pick || 0, JSON.stringify(f.skill || '')]));
    };
    const own = (L.versions || []).filter(v => v.teach).length;
    if (isLevel2(form) && own !== (L.versions || []).length) fail(`${form}: a Level 2 lesson has a teaching story in EVERY version (a new worked example each try); ${own} of ${(L.versions || []).length} have one`);
    else if (own && own !== (L.versions || []).length) fail(`${form}: ${own} of ${(L.versions || []).length} versions have their own teaching story (all or none)`);
    if (own && L.teach) fail(`${form}: has both one teaching story and one per version (pick one)`);
    if (!own) teachCheck(`${form} teach`, L.teach);
    else {
      const shapes = L.versions.map((v, vi) => teachCheck(`${form} v${vi + 1} teach`, v.teach));
      shapes.forEach((sh, vi) => { if (vi && sh !== shapes[0]) fail(`${form} v${vi + 1} teach: its steps differ from version 1's (the same method every try: same screens, same step types)`); });
      const seen = new Map();
      L.versions.forEach((v, vi) => {
        const k = JSON.stringify((v.teach && v.teach.story && v.teach.story.paragraphs) || []);
        if (seen.has(k)) fail(`${form} v${vi + 1} teach: the same teaching story as version ${seen.get(k)} (a retry needs a new worked example)`);
        else seen.set(k, vi + 1);
      });
    }

    // ── versions ──
    const V = L.versions || [];
    if (V.length !== 4) fail(`${form}: ${V.length} versions (want 4)`);
    let base = null;
    V.forEach((v, vi) => {
      const vat = `${form} v${vi + 1}`;
      const shapes = [];
      const vacc = newAcc();
      const parts = [['pre', v.pre, rangeOf(form, 'pre')], ...((v.turn || []).map((t, ti) => [`turn ${'AB'[ti]}`, t, turnRange]))];
      if (!v.pre) fail(`${vat}: no pre`);
      if ((v.turn || []).length !== 2) fail(`${vat}: ${(v.turn || []).length} turn stories (want 2)`);
      parts.forEach(([name, part, range]) => {
        if (!part) return;
        const at = `${vat} ${name}`;
        const sentences = storyCheck(form, at, part.story, range);
        const acc = newAcc();
        (part.items || []).forEach(it => {
          shapes.push(name.slice(0, 4) + ':' + JSON.stringify(itemCheck(form, at, it, part.story || {}, sentences, acc)));
          acc.items.push(it);
        });
        if (!(part.items || []).length) fail(`${at}: no items`);
        storyItemsCheck(at, acc);
        ['qs', 'whys', 'notes'].forEach(k => vacc[k].push(...acc[k]));
        vacc.longest += acc.longest; vacc.mc += acc.mc;
      });
      const pts = (v.turn || []).flatMap(t => t.items || []).reduce((n, it) => n + (it.type === 'ebsr' ? 2 : 1), 0);
      if (form !== 'RC7' && pts !== 8) fail(`${vat}: Your turn is worth ${pts} points (want 8)`);
      const w = R.stats(vacc.whys).fk, n = R.stats(vacc.notes).fk, q = R.stats(vacc.qs).fk;
      if (vacc.whys.length && w > 3.0) fail(`${vat}: the why lines read at ${w.toFixed(2)} (want ≤ 3.0 together)`);
      if (vacc.notes.length && n > 3.0) fail(`${vat}: the wrong-choice notes read at ${n.toFixed(2)} (want ≤ 3.0 together)`);
      if (vacc.qs.length && q > 4.0) fail(`${vat}: the questions read at ${q.toFixed(2)} (want ≤ 4.0 together)`);
      if (vacc.mc >= 4 && vacc.longest > vacc.mc / 2) fail(`${vat}: the right answer is the longest choice in ${vacc.longest} of ${vacc.mc} questions`);
      vacc.whys.forEach(t => allText.push([vat + ' why', t]));
      vacc.notes.forEach(t => allText.push([vat + ' note', t]));
      report.push(`${vat}: ${pts} points · why FK ${w.toFixed(2)} · notes FK ${n.toFixed(2)} · questions FK ${q.toFixed(2)}`);
      if (!base) base = shapes;
      else {
        if (shapes.length !== base.length) fail(`${vat}: ${shapes.length} items (version 1 has ${base.length})`);
        shapes.forEach((s, i) => { if (s !== base[i]) fail(`${vat}: item ${i + 1} ${s} ≠ version 1 ${base[i]}`); });
      }
    });

    // the site's own view of the lesson builds without throwing, and every scored item has points
    try {
      V.forEach((_, vi) => {
        const bank = R.bankOf(form, L, vi);
        bank.forEach(q => {
          if (q.kind === 'watch') return;
          if (q.type === 'ebsr') { if (!q.partA.choices.includes(q.partA.answer) || !q.partB.choices.includes(q.partB.answer)) fail(`${form} v${vi + 1} ${q.id}: built Part A/B answer is not a choice`); }
          else if (q.type === 'hot' || q.type === 'ms') { if (!q.answers.every(a => q.choices.includes(a))) fail(`${form} v${vi + 1} ${q.id}: built answers are not all choices`); }
          else if (!q.choices.includes(q.answer)) fail(`${form} v${vi + 1} ${q.id}: built answer is not a choice`);
        });
      });
    } catch (e) { fail(`${form}: the site could not build the lesson: ${e.message}`); }
  });

  allText.forEach(([where, t]) => {
    const s = String(t || '');
    const m = s.match(nameRe);
    if (m) fail(`${where}: uses a student's first name "${m[1]}"`);
    if (/_{2,}/.test(s)) fail(`${where}: has a blank (____)`);
  });
  return { fails, report };
}

/* ═══ PLANTED MISTAKES — each one must be caught ═══ */
/* Each plant runs on EVERY lesson. A plant that needs a question type a lesson does not have (a Part B on a
   click-only lesson) is "does not apply" there, not a miss; every plant must apply to at least one lesson. */
function plants(LESSONS, others) {
  const out = [];
  Object.keys(LESSONS).sort().forEach(form => plantsFor(LESSONS, others, form).forEach(r => out.push([`${form} · ${r[0]}`, ...r.slice(1), r[0]])));
  return out;
}
function plantsFor(LESSONS, others, form) {
  const clone = () => JSON.parse(JSON.stringify(LESSONS[form]));
  const firstOf = (L, type) => { for (const v of L.versions) for (const t of [v.pre, ...v.turn]) for (const it of t.items) if (it.type === type) return { it, story: t.story }; return null; };
  const firstStoryWith2 = L => { for (const v of L.versions) for (const t of v.turn) if (t.items.length >= 2) return t; return null; };
  const aChoiceSet = L => { const x = firstOf(L, 'mc') || firstOf(L, 'ebsr'); return x && (x.it.type === 'mc' ? x.it : x.it.a); };
  const level2 = () => { if (!/^RD\d+$/.test(form)) throw new Error('a Level 2 rule'); };
  const firstEvidence = L => { for (const v of L.versions) for (const t of [v.pre, ...v.turn]) for (const it of t.items) if (it.type === 'mc' && it.evidence) return { it, story: t.story }; return null; };
  const paraOfP = (story, t) => story.paragraphs.findIndex(p => R.split(p).includes(t));
  // [name, plant, the message it must cause]
  const P = [
    ['answer not a sentence', L => { const x = firstOf(L, 'mc') || firstOf(L, 'ebsr'); if (x.it.type === 'mc') { x.it.evidence = true; x.it.choices[0] = 'This sentence is nowhere in the story.'; } else x.it.b.choices[0] = 'This sentence is nowhere in the story.'; }, /not an exact sentence/],
    ['two choices the same', L => { const c = aChoiceSet(L); c.choices[2] = c.choices[1]; }, /two choices are the same/],
    ['wrong choice with no kind', L => { const c = aChoiceSet(L); c.kinds = [null, null, null, null]; }, /has no kind/],
    ['unknown kind', L => { const c = aChoiceSet(L); c.kinds = [null, 'oops', 'oops', 'oops']; }, /unknown kind/],
    ['no why', L => { delete aChoiceSet(L).why; }, /no why/],
    ['why names a position', L => { aChoiceSet(L).why = 'The first choice is right.'; }, /by position/],
    ['story too hard', L => { L.versions[0].turn[0].story.paragraphs = L.versions[0].turn[0].story.paragraphs.map(p => p + ' Extraordinarily complicated vocabulary, unquestionably overwhelming understandably bewildered elementary participants.'); }, /FK \d+\.\d+ \(want/],
    ['story too short', L => { L.versions[0].pre.story.paragraphs = L.versions[0].pre.story.paragraphs.slice(0, 1); }, /paragraphs \(want 4–\d+\)/],
    ['title used twice', L => { L.versions[1].pre.story.title = L.versions[0].pre.story.title; }, /also used at/],
    ['title from another site', L => { L.versions[0].pre.story.title = [...others.keys()][0] || L.teach.story.title; }, others.size ? /already used by/ : /also used at/],
    // swap one word for a name / a blank, so the reading level barely moves and only the name/blank check can catch it
    ['student first name', L => { const ps = L.versions[0].turn[0].story.paragraphs; ps[0] = ps[0].replace(/\b[A-Z][a-z]+\b/, firstNames[0]); }, /student's first name/],
    ['a blank', L => { const ps = L.versions[0].turn[0].story.paragraphs; ps[0] = ps[0].replace(/\b[a-z]{4,}\b/, '____'); }, /has a blank/],
    ['version shape differs', L => { L.versions[1].turn[0].items[0].id = 'Q99'; }, /≠ version 1/],
    ['only 3 versions', L => { L.versions.pop(); }, /versions \(want 4\)/],
    ['lit sentence not in story', L => { const w = L.teach.flow.find(f => f.kind === 'watch'); w.lit = ['A sentence that is not in the teaching story.']; }, /lit sentence is not an exact sentence/],
    ['giveaway in a note', L => {
      const t = firstStoryWith2(L);
      const later = t.items[t.items.length - 1];
      const key = later.type === 'ebsr' ? later.b.choices[0] : later.type === 'hot' ? (later.answers || [later.answer])[0] : later.choices[0];
      const first = t.items[0];
      if (first.type === 'ebsr') first.b.why = 'Look: ' + key; else first.why = 'Look: ' + key;
    }, /gives away/],
    ['hot answer not clickable', L => { const x = firstOf(L, 'hot'); if (x) x.it.answers = ['Not a sentence of this story at all.', ...(x.it.answers || []).slice(1)]; else { const c = (firstOf(L, 'ebsr') || {}).it; if (c) c.b.choices[0] = 'Not a sentence of this story at all.'; else { const y = firstOf(L, 'mc').it; y.evidence = true; y.choices[0] = 'Not a sentence of this story at all.'; } } }, /not exactly one clickable sentence|not an exact sentence/],
    ['Part B question written', L => { const x = firstOf(L, 'ebsr'); if (x) x.it.b.q = 'Which one?'; else { const y = firstOf(L, 'mc').it; y.evidence = true; y.q = y.q.replace(/BEST/g, 'best'); } }, /leave b\.q out|says BEST/],
    // click questions (RC3 is all click questions)
    ['click list out of story order', L => { const x = (() => { for (const v of L.versions) for (const t of [v.pre, ...v.turn]) for (const it of t.items) if (it.type === 'hot' && Array.isArray(it.list)) return it; return null; })(); x.list.reverse(); }, /not in story order/],
    ['click answers do not match the pick', L => { const it = firstOf(L, 'hot').it; it.pick = (it.pick || 1) === 1 ? 2 : 1; }, /answers for pick|says "Click on the/],
    ['click question not in the test words', L => { const it = firstOf(L, 'hot').it; it.q = it.q.replace(/Click on the (TWO )?sentences?/, 'Choose the line'); }, /like the test/],
    ['why lines too hard', L => { L.versions[0].turn.forEach(t => t.items.forEach(it => { const c = it.type === 'ebsr' ? it.a : it; c.why = 'Consequently, comprehensive understanding necessitates considerable deliberation regarding characteristics.'; })); }, /why lines read at/],
    // every choice set of version 1 (Part A AND Part B: a lesson made only of Part A + Part B must still be caught)
    ['right answer always longest', L => { const v = L.versions[0]; [v.pre, ...v.turn].forEach(t => t.items.forEach(it => { const cs = it.type === 'ebsr' ? [it.a, it.b] : it.type === 'mc' ? [it] : []; cs.forEach(c => { c.choices[0] = c.choices[0] + ' And that was a very long and important thing to see.'; c.evidence = false; });
      if (it.type === 'ms') it.choices = it.choices.map((c, i) => (i < (it.pick || 2) ? c + ' And that was a very long and important thing to see.' : c)); })); }, /longest choice/],
    // Choose TWO (RD4)
    ['Choose TWO not in the test words', L => { const it = firstOf(L, 'ms').it; it.q = it.q.replace(/Choose (TWO|THREE)/g, 'Pick'); }, /says "Choose TWO"/],
    ['Choose TWO with too few choices', L => { const it = firstOf(L, 'ms').it; it.choices = it.choices.slice(0, 4); if (it.kinds) it.kinds = it.kinds.slice(0, 4); if (it.notes) it.notes = it.notes.slice(0, 4); }, /choices for pick|Choose TWO has 5 choices/],
    ['Choose TWO wrong choice with no kind', L => { firstOf(L, 'ms').it.kinds = []; }, /has no kind/],
    // Level 2 (RD): a new worked example every try, grade 4–5 stories, close wrong choices
    ['L2 · teaching story shared by two versions', L => { level2(L); L.versions[1].teach = JSON.parse(JSON.stringify(L.versions[0].teach)); }, /the same teaching story as version/],
    ['L2 · a version with no teaching story', L => { level2(L); delete L.versions[2].teach; }, /teaching story in EVERY version/],
    ['L2 · teaching steps differ between versions', L => { level2(L); L.versions[1].teach.flow.find(f => f.kind === 'step').id = 'S9'; }, /steps differ from version 1/],
    ['L2 · story too easy', L => { level2(L); const st = L.versions[0].turn[0].story; st.paragraphs = st.paragraphs.map(() => Array(9).fill('The dog ran to the big red barn.').join(' ')); }, /FK -?\d+\.\d+ \(want 4/],
    ['L2 · no close wrong choice', L => { level2(L); const x = firstOf(L, 'ebsr') || firstEvidence(L); if (!x) throw new Error('no proof question');
      const c = x.it.type === 'ebsr' ? x.it.b : x.it, story = x.story, at = paraOfP(story, c.choices[0]);
      const far = story.paragraphs.flatMap((p, i) => (i === at ? [] : R.split(p))).filter(t => !c.choices.includes(t));
      c.choices = c.choices.map((t, i) => (i && paraOfP(story, t) === at ? far.shift() : t)); }, /close wrong choice/],
    ['L2 · no partly-right wrong choice', L => { level2(L); const x = firstOf(L, 'ebsr') || firstOf(L, 'ms'); const c = x.it.type === 'ebsr' ? x.it.a : x.it;
      c.kinds = (c.kinds || []).map(k => (k === 'toofar' || k === 'onedetail' ? 'noclue' : k)); }, /partly-right wrong choice/],
    ['L2 · a pick-2 list of 5', L => { level2(L); const it = (() => { for (const v of L.versions) for (const t of [v.pre, ...v.turn]) for (const q of t.items) if (q.type === 'hot' && q.pick === 2 && Array.isArray(q.list)) return q; return null; })();
      const out = it.list.find(t => !it.answers.includes(t)); it.list = it.list.filter(t => t !== out); if (it.kinds) delete it.kinds[out]; if (it.notes) delete it.notes[out]; }, /pick-2 list has 6 sentences/]
  ];
  // caught = the plant adds a problem the lesson did not have before (a lesson that already fails
  // would otherwise "catch" every plant)
  const before = new Set(checkAll(LESSONS, [form], others).fails);
  return P.map(([name, make, want]) => {
    const L = clone();
    try { make(L); } catch (e) { return [name, null, 'does not apply here (' + e.message + ')']; }
    if (JSON.stringify(L) === JSON.stringify(LESSONS[form])) return [name, null, 'does not apply here (nothing changed)'];
    const fresh = checkAll({ ...LESSONS, [form]: L }, [form], others).fails.filter(f => !before.has(f));
    const hit = fresh.find(f => want.test(f));
    return [name, !!hit, hit || (fresh[0] ? 'only other problems: ' + fresh[0] : 'no new problem')];
  });
}

/* ═══ RUN ═══ */
if (require.main === module) {
  const args = process.argv.slice(2);
  const only = args.filter(a => /^R[CD]\d+$/i.test(a)).map(a => a.toUpperCase());
  const LESSONS = loadLessons(path.join(SITE, 'data'));
  const others = otherTitles();
  if (!Object.keys(LESSONS).length) { console.log('No reading lessons found (data/rcN.js, data/rdN.js).'); process.exit(1); }
  const { fails, report } = checkAll(LESSONS, only, others);
  console.log(report.join('\n'));
  let bad = fails.length;
  if (args.includes('--plants')) {
    const res = plants(only.length ? Object.fromEntries(Object.entries(LESSONS).filter(([f]) => only.includes(f))) : LESSONS, others);
    const ran = res.filter(r => r[1] !== null), missed = ran.filter(r => !r[1]);
    console.log(`\nPlanted mistakes: ${ran.length - missed.length} of ${ran.length} caught (${res.length - ran.length} do not apply to a lesson's question types)`);
    missed.forEach(m => console.log(`  ✗ NOT CAUGHT: ${m[0]} ${m[2]}`));
    // every plant must apply somewhere, or it tests nothing
    const names = [...new Set(res.map(r => r[3]))];
    const never = names.filter(n => !res.some(r => r[3] === n && r[1] !== null));
    never.forEach(n => console.log(`  ✗ APPLIES TO NO LESSON: ${n}`));
    bad += missed.length + (only.length ? 0 : never.length);
  }
  if (fails.length) {
    console.log(`\n✗ ${fails.length} problem(s):`);
    fails.forEach(f => console.log('  - ' + f));
  }
  if (bad) process.exit(1);
  console.log('\n✓ all checks passed');
}
module.exports = { checkAll, loadLessons, otherTitles, plants };
