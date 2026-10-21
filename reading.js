/* ═══════════════════════════════════════════════════════
   THE LAB · reading.js — the Reading for Meaning strand (RC1 …)
   Marcos 10/20/2026: "build a comprehension strand" · "I would prefer the Lab stuff all be in the Lab."
   Used in TWO places, so a lesson is read the same way in both:
     - the site (browser): turns each data/rcN.js lesson into the Lab's question list (window.LAB_RCn,
       window.LAB_RCn_V = 4 versions) and keeps every story by its key (window.LAB_STORIES)
     - tools/check-reading.js (Node): checks the same lessons
   A lesson file is written by hand (data/rcN.js, the shape is in tools/CONTENT-SPEC-READING.md):
     teach    = one teaching story + the worked examples (watch) and small steps (step) on that story
     versions = 4 × { pre: one story + its Show-what-you-know questions, turn: two stories + their questions }
   The right choice is written FIRST; the site shuffles. Every wrong choice carries a KIND (or its own
   note), so the Lab can see a student make the same kind of mistake again on a new story.
═══════════════════════════════════════════════════════ */
(function (root) {
'use strict';

/* Why a wrong choice is wrong. Copied from Inference Practice (data/inference.js INF_KIND_NOTES),
   worded for "passage", the test's word, plus "literal" for figurative language. */
const KINDS = {
  notproof:  'This sentence is in the passage. But it does not prove the idea.',
  noclue:    'The passage gives no clue for this.',
  toofar:    'Too far. The clues do not prove this.',
  opposite:  'The passage shows the opposite.',
  onedetail: 'This is just one detail. It is not the main idea.',
  wrongwho:  'This is about someone else in the passage.',
  wrongtime: 'This is about a different part of the passage.',
  literal:   'This takes the words word for word. The phrase means something else.'
};
/* The same kinds as a few words, for the teacher's dashboard and the saved miss */
const KIND_LABEL = {
  notproof:  'true but not proof',
  noclue:    'no clue in the passage',
  toofar:    'went too far',
  opposite:  'the opposite',
  onedetail: 'one detail, not the main idea',
  wrongwho:  'the wrong person',
  wrongtime: 'the wrong part of the passage',
  literal:   'word for word',
  note:      'wrong choice'
};
/* What the next lesson says first to a student who keeps making one kind of mistake */
const KIND_WATCH = {
  notproof:  'Before you start: you have picked sentences that are true but do not prove the idea. Today, ask one thing. Does this sentence SHOW the idea?',
  noclue:    'Before you start: you have picked answers the passage gives no clue for. Today, find the clue in the passage before you pick.',
  toofar:    'Before you start: you have picked answers that go too far. Today, pick only what the clues prove.',
  opposite:  'Before you start: you have picked answers that are the opposite of the passage. Today, check your answer against the passage.',
  onedetail: 'Before you start: you have picked one small detail instead of the main idea. Today, ask what the whole part is about.',
  wrongwho:  'Before you start: you have picked answers about the wrong person. Today, check who the question asks about.',
  wrongtime: 'Before you start: you have picked sentences from the wrong part of the passage. Today, find the part the question is about first.',
  literal:   'Before you start: you have taken some phrases word for word. Today, ask what the phrase really means.'
};
const PART_B_Q = 'Part B — Which sentence from the passage BEST supports the answer in Part A?';

/* One paragraph → its sentences. Copied from Inference Practice (INF_SPLIT), so a sentence the checker
   approves is exactly a sentence the student can click. A sentence ends at . ! ? (and a closing quote)
   when the next word starts with a capital, a number or an opening quote. Mr. Mrs. Ms. Dr. St. never end one. */
function split(para) {
  const text = String(para).replace(/\s+/g, ' ').trim();
  const out = [];
  let start = 0;
  const re = /[.!?]["”’]?(?=\s+["“‘A-Z0-9])/g;
  let m;
  while ((m = re.exec(text))) {
    const end = m.index + m[0].length;
    if (/\b(Mr|Mrs|Ms|Dr|St)\.$/.test(text.slice(start, end))) continue;
    out.push(text.slice(start, end).trim());
    start = end;
  }
  const rest = text.slice(start).trim();
  if (rest) out.push(rest);
  return out;
}

/* Reading level (Flesch-Kincaid) — the same formula as Inference Practice and R.A.D. Practice */
function syl(w) { w = w.toLowerCase().replace(/[^a-z]/g, ''); if (!w) return 0; if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, ''); const m = w.match(/[aeiouy]{1,2}/g); return m ? m.length : 1; }
function stats(texts) {
  let s = 0, w = 0, y = 0;
  texts.forEach(t => { t = String(t).replace(/\b(Mr|Mrs|Ms|Dr|St)\./g, '$1'); s += Math.max(1, t.split(/[.!?…]+/).filter(x => /[A-Za-z]/.test(x)).length);
    const words = t.split(/\s+/).filter(x => /[A-Za-z0-9]/.test(x)); w += words.length; words.forEach(x => { y += syl(x); }); });
  return { words: w, fk: w ? 0.39 * (w / s) + 11.8 * (y / w) - 15.59 : 0 };
}

/* ── the lesson file → the Lab's question list ── */
const storyKey = (form, where) => `${form}-${where}`;

function slipsFor(c, wrongs) {
  const slips = {};
  wrongs.forEach(({ text, i }) => {
    const kind = c.kinds && c.kinds[i];
    const note = c.notes && c.notes[i];
    slips[text] = { tag: kind || 'note', say: note || KINDS[kind] || '' };
  });
  return slips;
}
function mcPart(form, c) {
  const choices = (c.choices || []).slice();
  return { q: c.q, choices, answer: choices[0], slips: slipsFor(c, choices.slice(1).map((text, k) => ({ text, i: k + 1 }))), explanation: c.why || '' };
}
/* A click item's sentences: one paragraph's (para), a given list (list), or every sentence of the passage */
function hotArea(story, it) {
  if (it.para != null) return split((story.paragraphs || [])[it.para - 1] || '');
  if (Array.isArray(it.list)) return it.list.slice();
  return (story.paragraphs || []).flatMap(split);
}
function item(form, it, story, sKey, extra) {
  const base = { id: `${form}-${it.id}`, story: sKey, skill: it.skill, ...extra };
  if (it.para != null) base.para = it.para;
  if (it.type === 'ebsr') {
    const a = mcPart(form, it.a), b = mcPart(form, { ...it.b, q: PART_B_Q });
    return { ...base, type: 'ebsr', q: it.a.q, partA: a, partB: b };
  }
  if (it.type === 'hot' || it.type === 'ms') {
    const pick = it.pick || 1;
    const choices = it.type === 'hot' ? hotArea(story, it) : it.choices.slice();
    const answers = it.type === 'hot' ? (it.answers || [it.answer]).slice() : it.choices.slice(0, pick);
    const slips = {};
    choices.forEach((text, i) => {
      if (answers.includes(text)) return;
      const kind = it.type === 'ms' ? it.kinds && it.kinds[i] : (it.kinds || {})[text];
      const note = it.type === 'ms' ? it.notes && it.notes[i] : (it.notes || {})[text];
      slips[text] = { tag: kind || (it.type === 'hot' ? 'notproof' : 'note'), say: note || KINDS[kind || (it.type === 'hot' ? 'notproof' : '')] || '' };
    });
    const out = { ...base, type: it.type, pick, q: it.q, choices, answers, answer: answers.join(' / '), slips, explanation: it.why || '' };
    if (it.type === 'hot') out.layout = it.para != null ? 'para' : 'list';
    return out;
  }
  const p = mcPart(form, it);
  return { ...base, type: 'mc', q: it.q, choices: p.choices, answer: p.answer, slips: p.slips, explanation: p.explanation, ...(it.evidence ? { evidence: true } : {}) };
}

/* Every story of a lesson by key: RC1-T (teaching), RC1-v1-P (Show what you know), RC1-v1-A / -B (Your turn) */
function storiesOf(form, L) {
  const out = {};
  if (L.teach && L.teach.story) out[storyKey(form, 'T')] = L.teach.story;
  (L.versions || []).forEach((v, vi) => {
    if (v.pre && v.pre.story) out[storyKey(form, `v${vi + 1}-P`)] = v.pre.story;
    (v.turn || []).forEach((t, ti) => { out[storyKey(form, `v${vi + 1}-${'AB'[ti] || ti}`)] = t.story; });
  });
  return out;
}

/* One version's question list, in lesson order: Show what you know → teaching (watch / step) → Your turn.
   The engine adds the "Now let's learn it" screen and the student's own example itself. */
function bankOf(form, L, vi) {
  const v = (L.versions || [])[vi];
  if (!v) return [];
  const out = [];
  if (v.pre) {
    const k = storyKey(form, `v${vi + 1}-P`);
    v.pre.items.forEach((it, i) => out.push(item(form, { ...it, id: it.id || `P${i + 1}` }, v.pre.story, k, { kind: 'pre' })));
  }
  if (L.teach) {
    const k = storyKey(form, 'T');
    (L.teach.flow || []).forEach((f, i) => {
      if (f.kind === 'watch') out.push({ id: `${form}-${f.id || 'W' + (i + 1)}`, kind: 'watch', skill: 'Lab step', story: k,
        title: f.title, text: (f.lines || []).join('\n'), lit: (f.lit || []).slice() });
      else out.push(item(form, { ...f, id: f.id || `S${i + 1}` }, L.teach.story, k, { kind: 'step', skill: 'Lab step' }));
    });
  }
  (v.turn || []).forEach((t, ti) => {
    const k = storyKey(form, `v${vi + 1}-${'AB'[ti] || ti}`);
    t.items.forEach(it => out.push(item(form, it, t.story, k, {})));
  });
  return out;
}

/* Points: Part A + Part B = 2 (like the test), a written answer = 0 (Mr. O scores it), everything else 1 */
function pointsOf(q) {
  if (!q || q.kind) return 0;
  if (q.type === 'ebsr') return 2;
  if (q.type === 'rad') return 0;
  return 1;
}

/* In the browser: turn every loaded lesson file into the Lab's globals */
function install(win) {
  const all = win.LAB_RC || {};
  win.LAB_STORIES = win.LAB_STORIES || {};
  Object.keys(all).forEach(form => {
    const L = all[form];
    Object.assign(win.LAB_STORIES, storiesOf(form, L));
    const V = (L.versions || []).map((_, vi) => bankOf(form, L, vi));
    win['LAB_' + form + '_V'] = V;
    win['LAB_' + form] = V[0] || [];
  });
}

const api = { KINDS, KIND_LABEL, KIND_WATCH, PART_B_Q, split, stats, syl, storiesOf, bankOf, pointsOf, install, hotArea, storyKey };
if (typeof module === 'object' && module.exports) module.exports = api;
else { root.LabReading = api; install(root); }
})(typeof self !== 'undefined' ? self : this);
