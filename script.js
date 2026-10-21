/* ═══════════════════════════════════════════════════════
   THE LAB · script.js
   Back-to-basics lessons for the students who need them most (Marcos 10/17/2026: "The Lab is a
   necessary need after looking at all the numbers"). Engine = a copy of Math Module 2 (the newest
   math site, per the build standard), with its parts turned into LESSONS:
     STRAND 1 · Adding and Subtracting to 20 — AS1 … AS6 (Marcos: "if they cant add or subtract how
     are they going to multiply and divide?"). Facts lessons pass at 90% ("90% for facts only").
     Later strands (multiplying, place value, rounding) are listed and locked: multiplying stays
     locked until Strand 1 is passed ("repeated addition means nothing if they cant").
   EVERY LESSON (built like the MM2 Warm-Up, Marcos 10/15):
     🎯 Show what you know  5 questions, first try only — all 5 right = the lesson is skipped (speed: Marcos
                            "We need to get them progressed as fast as possible")
     👀 Watch               a worked example the student must hear to the end
     🪜 Step by step        one small step at a time, not scored
     ✏️ Your turn          10 questions (the facts check: 20) — 90% passes and opens the next lesson
   TAILORED (Marcos 10/17: "learn from their earlier work … see if they repeat their mistakes … very
   tailored to the exact student's needs and deficits" / "not saying exclude other questions but
   incorporate the known areas of weakness"): the facts this student missed before — on the fact
   sites (the lab-seed tab) and in the Lab itself — are ADDED to the lesson that teaches that kind of
   fact (up to MINE_MAX), marked "⭐ You missed this one before". Picking the same wrong answer again
   is logged as a 'repeat' event. A fact stays on the student's list until answered right MASTER_RIGHT
   times in the Lab. The list never goes in the site's files: it comes from the results sheet at sign-in.
   HEAR IT FIRST (Marcos 10/17: "force them to hear the read aloud"): every question's choices stay
   locked until the question (and its hint) has been read aloud to the end. After a miss, Next waits
   until the mistake has been heard (same as MM2).
   Saved after every screen; a student picks up where they stopped (Marcos: "time is very fluid").
   Game keys lab-as1 … lab-as6, one row per try; lab-progress = one backup row per student (lessons
   passed + facts still on the list), so a new device gets it back. Storage prefix lab_.
   PIN: 9377 (Teacher override)
═══════════════════════════════════════════════════════ */

/* ── CONFIG ─────────────────────────────────────────── */
const SHARE_MODE    = !!window.SHARE_MODE;   // set by share.js — a visitor's link, never a student's
const LAB_OPEN      = true;    // false = students locked out; Teacher Access still works
const ANY_ORDER     = false;   // true = no gates at all
const PASS_PCT      = 75;      // every other lesson (place value, rounding, reading) — Marcos 10/20: "75 for LAB lessons and 90 for math facts"
const FACTS_PASS_PCT = 90;     // facts lessons — Marcos 10/17: "90% for facts only"
const PRE_COUNT     = 5;       // 🎯 Show what you know
const MINE_MAX      = 4;       // at most this many of the student's own missed facts added to one try
const MINE_PRE_MAX  = 2;       // … and this many added to Show what you know
const MASTER_RIGHT  = 2;       // right this many times in the Lab → off the student's list
const INSTRUCT_SECS = 20;
// After an answer: a short pause before Next (after a miss, Next waits for the Listen instead)
const NEXT_SECS     = 4;
const STEP_NEXT_SECS = 3;
// A device with no voice: the question unlocks after a wait long enough to read it (listenDwellMs)
const STORAGE_KEY   = 'lab_session_v1';
const SCORES_KEY    = 'lab_scores_v1';
const WEAK_KEY      = 'lab_weak_v1';      // + ':' + student name
const RNDQ_SESSION_ID_KEY = 'lab_session_id_v1';
let SESSION_ID = (() => {
  let id = localStorage.getItem(RNDQ_SESSION_ID_KEY);
  if (!id) { id = 'LAB-' + Math.random().toString(36).slice(2, 9).toUpperCase(); localStorage.setItem(RNDQ_SESSION_ID_KEY, id); }
  return id;
})();

/* ── THE STRANDS AND LESSONS ─────────────────────────── */
const STRANDS = [
  { id: 'as', icon: '➕', name: 'Adding and Subtracting to 20', lessons: ['AS1', 'AS2', 'AS3', 'AS4', 'AS5', 'AS6'] },
  { id: 'mu', icon: '✖️', name: 'Multiplying', lessons: ['MU1', 'MU2', 'MU3', 'MU4', 'MU5', 'MU6', 'MU7'], after: 'as' },
  { id: 'pv', icon: '🔢', name: 'Place Value', lessons: ['PV1', 'PV2', 'PV3', 'PV4', 'PV5', 'PV6', 'PV7', 'PV8', 'PV9'], after: 'as' },
  { id: 'ro', icon: '🎯', name: 'Rounding', lessons: ['RO1', 'RO2', 'RO3', 'RO4', 'RO5', 'RO6'], after: 'as' },
  // Reading for Meaning (Marcos 10/20: "build a comprehension strand"): stands alone, no math gate
  { id: 'rc', icon: '🔎', name: 'Reading for Meaning', lessons: ['RC1', 'RC2', 'RC3'] }
];
const LESSONS = {
  AS1: { title: 'Count On to Add',                  icon: '🦘', facts: true },
  AS2: { title: 'Make 10',                          icon: '🔟', facts: true },
  AS3: { title: 'Teen Numbers: 10 and Some More',   icon: '🧱', facts: true },
  AS4: { title: 'Count Back to Subtract',           icon: '⬅️', facts: true },
  AS5: { title: 'Subtract by Thinking Addition',    icon: '🔁', facts: true },
  AS6: { title: 'Facts Check to 20',                icon: '🏁', facts: true, check: true, hints: false, pre: false },
  MU1: { title: 'Equal Groups',                     icon: '🫘', facts: true },
  MU2: { title: 'Arrays',                           icon: '🔵', facts: true },
  MU3: { title: 'Skip Count by 2s, 5s and 10s',     icon: '🐸', facts: true },
  MU4: { title: 'Facts: 2s, 5s and 10s',            icon: '✋', facts: true },
  MU5: { title: '3s and 4s',                        icon: '🧩', facts: true },
  MU6: { title: 'Times as Many',                    icon: '📏', facts: true },
  MU7: { title: 'Multiplication Facts Check',       icon: '🏁', facts: true, check: true, hints: false, pre: false },
  PV1: { title: 'Ones, Tens, Hundreds',             icon: '🔢' },
  PV2: { title: 'Expanded Form',                    icon: '🧩' },
  PV3: { title: 'Thousands',                        icon: '🏔️' },
  PV4: { title: 'Compare Numbers',                  icon: '⚖️' },
  PV5: { title: 'Rename Numbers',                   icon: '🔁' },
  PV6: { title: 'Times 10',                         icon: '🔟' },
  PV7: { title: 'Times 100',                        icon: '💯' },
  PV8: { title: 'Multiples of 10',                  icon: '✖️' },
  PV9: { title: 'Place Value Check',                icon: '🏁', check: true, hints: false, pre: false },
  RO1: { title: 'The Two Benchmarks',               icon: '📍' },
  RO2: { title: 'Halfway',                          icon: '↔️' },
  RO3: { title: 'Round to the Nearest Ten',         icon: '🎯' },
  RO4: { title: 'Round to the Nearest Hundred',     icon: '🎯' },
  RO5: { title: 'Round to the Place Named',         icon: '🗺️' },
  RO6: { title: 'Rounding Check',                   icon: '🏁', check: true, hints: false, pre: false },
  // the passage, the questions and the stories: data/rcN.js, read by reading.js; the screens: reading-ui.js
  RC1: { title: 'Find the Proof',                   icon: '🔍', reading: true, hints: false },
  RC2: { title: 'Part A and Part B',                icon: '🅰️', reading: true, hints: false },
  RC3: { title: 'Click the Sentences',              icon: '👆', reading: true, hints: false }
};
/* WHAT EACH LESSON HELPS WITH, in the student's words (Marcos 10/20: "say the titles of each lesson so the kids know
   what they are working on" · "I want them to know what they need help in"). A verb phrase: the plan says "You will
   learn to …", a lesson button and the lesson's banner show it as a sentence. */
const LESSON_GOALS = {
  AS1: 'add by counting on from the bigger number', AS2: 'make a 10 to add numbers past 10',
  AS3: 'see a teen number as 10 and some more', AS4: 'take away by counting back',
  AS5: 'use an adding fact to subtract', AS6: 'show you know your adding and subtracting facts to 20',
  MU1: 'see multiplying as equal groups', MU2: 'multiply with rows that are the same size',
  MU3: 'skip count by 2s, 5s and 10s', MU4: 'learn the 2s, 5s and 10s facts', MU5: 'learn the 3s and 4s facts',
  MU6: 'know what "times as many" means', MU7: 'show you know your times facts',
  PV1: 'know what each digit is worth', PV2: 'write a number as the sum of its places',
  PV3: 'read and write numbers in the thousands', PV4: 'tell which number is greater',
  PV5: 'name a number in tens or hundreds', PV6: 'multiply a number by 10', PV7: 'multiply a number by 100',
  PV8: 'multiply by numbers like 40 and 300', PV9: 'show what you know about place value',
  RO1: 'find the two numbers a number is between', RO2: 'find the number halfway between',
  RO3: 'round to the nearest ten', RO4: 'round to the nearest hundred', RO5: 'round to the place the question names',
  RO6: 'show what you know about rounding',
  RC1: 'find the ONE sentence that proves an idea', RC2: 'answer Part A, then prove your answer in Part B',
  RC3: 'click the sentences that show an idea'
};
Object.entries(LESSON_GOALS).forEach(([id, g]) => { if (LESSONS[id]) LESSONS[id].goal = g; });
const goalSentence = id => { const g = (LESSONS[id] || {}).goal || ''; return g ? g[0].toUpperCase() + g.slice(1) + '.' : ''; };
// a skill as a student reads it (reading skill names are the test's; math ones already read plainly)
const KID_SKILL = {
  'Evidence selection': 'finding the sentence that proves an idea', 'Supporting detail': 'finding the sentence that proves your answer',
  'Character inference': 'figuring out what a character is like', 'Drawing conclusions': 'putting clues together',
  'Character feelings': 'figuring out how a character feels'
};
const kidSkill = skill => { const base = String(skill || '').split(' · ')[0].replace(/ \(check\)$/, '').trim(); return KID_SKILL[base] || base; };
// "RC2-Q01.B" → "Question 1, Part B" (a student never sees a code)
function questionLabel(id) {
  const m = /-Q0*(\d+)(?:\.([AB]))?$/.exec(id || '');
  if (m) return `Question ${m[1]}${m[2] ? ', Part ' + m[2] : ''}`;
  if (/-M\d+$/.test(id || '')) return 'One you missed before';
  return 'A question';
}

// WHO IS ON A PLAN is not written in this file (the site's code is public). A student is on a plan when the
// sheet's lab-seed tab has a row for them, form "plan=as,mu,pv,ro" (loadHistory fills PLANS at sign-in).
// Everyone else who signs in sees the same lessons as practice.
const PLANS = {};
const FORMS = STRANDS.flatMap(st => st.lessons);
const strandOf = id => STRANDS.find(st => st.lessons.includes(id));
const passPct = id => (LESSONS[id] && LESSONS[id].facts ? FACTS_PASS_PCT : PASS_PCT);
const isWarmUp = form => !!LESSONS[form];      // every lesson works like the MM2 Warm-Up
const isTest   = form => false;
// Every lesson teaches: the right answer + why + the mistake named, every time
const teaches = form => true;
// Lessons stay in their order: Show what you know, then watch, steps, then your turn
const keepsOrder = form => true;
// The hint is open and read with the question (Marcos 10/15, Practice A); the facts check has none
const autoHint = form => !!LESSONS[form] && LESSONS[form].hints !== false;
/* Only questions count toward the score. 'watch', 'step' and 'pre' (Show what you know) do not. */
const isScored = q => !!q && !q.kind;
// Points, not questions: a reading Part A + Part B is worth 2 (like the test); every math question is 1
const pointsOfQ = q => (q.type === 'ebsr' ? 2 : q.type === 'rad' ? 0 : 1);
const scoredCount = bank => (bank || []).reduce((n, q) => n + (isScored(q) ? pointsOfQ(q) : 0), 0);
// Word help (a button per math word) — on in the lessons, off on the facts check
const wordHelp = form => !!LESSONS[form] && LESSONS[form].hints !== false;
const TWINS = {};
const FORM_NAMES = Object.fromEntries(FORMS.map(id => [id, LESSONS[id].title]));
function formOpen(form) {
  return SHARE_MODE || (LAB_OPEN && !!LESSONS[form]);
}
const ANY_OPEN = LAB_OPEN;
/* Sheet / dashboard game key — one per lesson */
function gameKey(form) {
  return 'lab-' + String(form).toLowerCase();
}

/* ── SHEET SUBMISSION ───────────────────────────────── */
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzv8CWv1yyi8NeH04now9UxVL4IZm5yMqqsEGMcgGdrcAOWVB-aSp5siTvSSJXIUpzFMA/exec';

let tabSwitchCount = 0;

/* One saved miss: "[ID] (Skill) question (picked: answer)" — the standard every
   review uses. Skill comes from data/skills.js by question id, so misses restored
   from an older saved attempt still get tagged. " | " separates entries, so it is
   swapped out of the pick just in case. */
function missEntry(m) {
  const skill  = (m.skill || (window.SKILLS || {})[m.id] || 'Unsorted') + (m.mine ? ' · missed before' : '') + (m.repeat ? ' · SAME MISTAKE AGAIN' : '');
  const picked = m.yourAnswer == null || m.yourAnswer === '' ? '' :
    ` (picked: ${String(m.yourAnswer).replace(/\s*\|\s*/g, ' / ').replace(/\s+/g, ' ').trim()})`;
  return `[${m.id}] (${skill}) ${m.q}${picked}`;
}

/* What the sheet's "form" column says: "AS1 · Count On to Add" (· Tested out when Show what you know was all right) */
function formLabel(attempt) {
  const id = app.currentForm;
  return `${id} · ${(LESSONS[id] || {}).title || id}${app.testedOut ? ' · Tested out' : ''}`;
}
/* The attempt this session will be once it finishes (finished ones on this device + 1). */
function upcomingAttempt() {
  return (getFormAttempts(app.studentName)[app.currentForm] || 0) + 1;
}

/* The score of this try: a skipped lesson (all of Show what you know right) counts those questions */
function sessionTotals() {
  return app.testedOut ? { score: app.preRight, total: app.preTotal } : { score: app.score, total: scoredCount(app.currentBank) };
}

function submitScorePartial() {
  const { total } = sessionTotals();
  const pct = total ? Math.round((app.score / total) * 100) : 0;
  fetch(SHEET_URL, {
    method: 'POST', mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action:    'submit',
      game:      gameKey(app.currentForm),
      sessionId: SESSION_ID + '-' + (app.currentForm || 'x'),
      name:      app.studentName || 'Unknown',
      form:      formLabel(upcomingAttempt()),
      score:     app.score,
      total:     total,
      percent:   pct,
      status:    `In Progress (Q${app.currentIndex + 1}/${app.currentBank.length})`,
      done:           false,
      elapsed:        app.timerSeconds,
      tabSwitches:    tabSwitchCount,
      wrongQuestions: (app.missedQuestions||[]).map(missEntry).join(' | '),
      startedAt:      app.startedAt || '',
      finishedAt:     app.finishedAt || '',
      events:         JSON.stringify(app.events || []),
      timestamp:      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    })
  }).catch(() => {});
}

function submitScoreFinal() {
  const { score, total } = sessionTotals();
  const pct = total ? Math.round((score / total) * 100) : 0;
  fetch(SHEET_URL, {
    method: 'POST', mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action:    'submit',
      game:      gameKey(app.currentForm),
      sessionId: SESSION_ID + '-' + (app.currentForm || 'x') + '-A' + (app.currentAttemptNum || 1),
      name:      app.studentName || 'Unknown',
      form:      formLabel(app.currentAttemptNum),
      attempt:   app.currentAttemptNum || 1,
      score:     score,
      total:     total,
      percent:   pct,
      status:    'Complete',
      done:           true,
      elapsed:        app.timerSeconds,
      tabSwitches:    tabSwitchCount,
      wrongQuestions: (app.missedQuestions||[]).map(missEntry).join(' | '),
      startedAt:      app.startedAt || '',
      finishedAt:     app.finishedAt || '',
      events:         JSON.stringify(app.events || []),
      timestamp:      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    })
  }).catch(() => {});
}

/* ── THE STUDENT'S LIST AND THEIR PROGRESS (Marcos 10/17: "learn from their earlier work") ──
   weak = { "6 + 8": { op, a, b, picks: ["13"], right: 0, src: 'facts' | 'lab' } } — the facts this student missed.
   Kept on the device under WEAK_KEY:<name>, and backed up in the lab-progress row (one per student, the same
   sessionId every time, done:false so the sheet overwrites it) together with the lessons passed. At sign-in the
   site reads lab-seed (their misses on the fact sites, written once by Mr. O's side) and lab-progress, and joins
   them with what the device already has. Nothing here is in the site's files. A guest's work is never sent. */
const FACT_RE = /^(\d+) ([+−×-]) (\d+) \(([^)]*)\)$/;
const factKey = f => `${f.a} ${f.op} ${f.b}`;
/* Mistakes that are not plain facts (Marcos 10/19: "everything in the lab should be tailored to each student's needs"):
   { type, n, p | m | unit } — V value of a digit · E expanded form · C compare · N rename · B benchmarks · H halfway · R round.
   Saved as "R 6284/100 (6300; 6200)" beside the facts ("6 + 8 (13, 14)"). Picks are kept without commas. */
const OWN_RE = /^([VECNBHR]) (\d+)\/(\d+) \(([^)]*)\)$/;
const recKey = rec => (rec && rec.type ? `${rec.type} ${rec.n}/${rec.type === 'V' ? rec.p : rec.type === 'C' ? rec.m : rec.type === 'E' ? 0 : rec.unit}` : factKey(rec));
const normPick = p => String(p == null ? '' : p).replace(/,/g, '').trim();
const showPick = p => String(p).replace(/\d+/g, d => (Number(d) >= 1000 ? Number(d).toLocaleString('en-US') : d));
const recordOf = q => q && (q.mistake || q.fact) || null;
function readWeak(name) {
  try { return JSON.parse(localStorage.getItem(WEAK_KEY + ':' + name) || '{}') || {}; } catch (e) { return {}; }
}
function writeWeak(name, weak) {
  try { localStorage.setItem(WEAK_KEY + ':' + name, JSON.stringify(weak)); } catch (e) {}
}
/* "6 + 8 (13, 14) | 10 − 4 (4)" → weak facts (the fact sites' own wrongQuestions format) */
function parseFactList(text, src) {
  const out = {};
  String(text || '').split(' | ').forEach(entry => {
    const m = entry.trim().match(FACT_RE);
    const o = m ? null : entry.trim().match(OWN_RE);
    if (!m && !o) return;
    const f = m ? { op: m[2] === '+' ? '+' : m[2] === '×' ? '×' : '−', a: +m[1], b: +m[3] }
      : { type: o[1], n: +o[2], ...(o[1] === 'V' ? { p: +o[3] } : o[1] === 'C' ? { m: +o[3] } : o[1] === 'E' ? {} : { unit: +o[3] }) };
    const k = recKey(f);
    const picks = (m ? m[4].split(',') : o[4].split(';')).map(x => normPick(x)).filter(x => x && x !== '?');
    const prev = out[k] || { ...f, picks: [], right: 0, src };
    picks.forEach(p => { if (!prev.picks.includes(p)) prev.picks.push(p); });
    out[k] = prev;
  });
  return out;
}
function factListText(weak) {
  return Object.values(weak).map(f => `${recKey(f)} (${f.picks.join(f.type ? '; ' : ', ')})`).join(' | ');
}
/* Join two lists: picks are added up; a fact mastered on one side stays mastered (it is left out of `mastered`). */
function mergeWeak(into, from, mastered) {
  Object.entries(from).forEach(([k, f]) => {
    if (mastered && mastered.has(k)) return;
    const have = into[k];
    if (!have) { into[k] = { ...f, picks: [...f.picks] }; return; }
    f.picks.forEach(p => { if (!have.picks.includes(p)) have.picks.push(p); });
    have.right = Math.max(have.right || 0, f.right || 0);
  });
  return into;
}
function passedList(name) {
  return FORMS.filter(id => passed(name, id));
}
const MASTERED_KEY = 'lab_mastered_v1';   // + ':' + name — facts taken off the list here, so a stale backup cannot put them back
function readMastered(name) {
  try { return new Set(JSON.parse(localStorage.getItem(MASTERED_KEY + ':' + name) || '[]')); } catch (e) { return new Set(); }
}
function sendProgress(name) {
  if (SHARE_MODE || !name || / \((Guest|Teacher)\)$/.test(name)) return;
  const weak = readWeak(name);
  const done = passedList(name);
  fetch(SHEET_URL, {
    method: 'POST', mode: 'no-cors', keepalive: true,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'submit', game: 'lab-progress', sessionId: 'labp-' + name, name,
      form: 'passed=' + done.join(',') + '|mastered=' + [...readMastered(name)].join(',') +
        (typeof kindsText === 'function' ? '|kinds=' + kindsText(readKinds(name)) : ''),
      score: done.length, total: FORMS.length, percent: Math.round(done.length / FORMS.length * 100),
      done: false, elapsed: 0, tabSwitches: 0,
      wrongQuestions: factListText(weak),
      timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    })
  }).catch(() => {});
}
/* Read one tab back (one entry per student). null = the sheet could not be reached. */
async function readTab(game) {
  try {
    const res = await fetch(`${SHEET_URL}?action=leaderboard&game=${encodeURIComponent(game)}`, { cache: 'no-store' });
    const rows = await res.json();
    return Array.isArray(rows) ? rows : null;
  } catch (e) { return null; }
}
/* WHO IS ON A PLAN (Marcos 10/18: a student not on the list sees "Under Construction"). The list is the sheet's
   lab-seed tab; the device keeps the last answer (PLAN_KEY) so a short loss of the network does not lock a Lab
   student out. Mr. O and a share-link visitor see everything. */
const PLAN_KEY = 'lab_plan_v1';   // + ':' + name
const seesAll = name => SHARE_MODE || name === 'Mr. O (Teacher)';
function cachedPlan(name) {
  try { const v = JSON.parse(localStorage.getItem(PLAN_KEY + ':' + name) || 'null'); return Array.isArray(v) ? v : null; } catch (e) { return null; }
}
function planFor(name) {
  if (seesAll(name)) return STRANDS.map(st => st.id);
  return PLANS[name] || cachedPlan(name) || null;
}
/* At sign-in: their fact-site misses (lab-seed) and their Lab backup (lab-progress) join what this device has.
   Runs in the background — a lesson started before it lands simply has fewer of their own facts. */
async function loadHistory(name) {
  if (SHARE_MODE || !name || name === 'Mr. O (Teacher)') return false;   // a guest reads too (finds nothing); a guest never writes
  const [seed, prog] = await Promise.all([readTab('lab-seed'), readTab('lab-progress')]);
  if (app.studentName !== name) return false;
  if (seed === null) return cachedPlan(name) ? 'cached' : 'offline';   // could not reach the sheet
  const mine = rows => rows.find(r => r.name === name);
  const s = mine(seed), p = mine(prog || []);
  const plan = s && /plan=([a-z,]+)/.exec(s.form || '');
  if (plan) PLANS[name] = plan[1].split(',').filter(id => STRANDS.some(st => st.id === id));
  else delete PLANS[name];
  try { if (PLANS[name]) localStorage.setItem(PLAN_KEY + ':' + name, JSON.stringify(PLANS[name])); else localStorage.removeItem(PLAN_KEY + ':' + name); } catch (e) {}
  const mastered = readMastered(name);
  if (p && p.form) {
    const m = /mastered=([^|]*)/.exec(p.form);
    if (m) m[1].split(',').filter(Boolean).forEach(k => mastered.add(k));
    if (typeof mergeKinds === 'function') mergeKinds(name, (/kinds=([^|]*)/.exec(p.form) || [])[1]);   // 🔎 kinds of reading mistakes
    try { localStorage.setItem(MASTERED_KEY + ':' + name, JSON.stringify([...mastered])); } catch (e) {}
    // lessons passed on another device count here too
    const got = (/passed=([^|]*)/.exec(p.form) || [])[1] || '';
    const scores = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
    got.split(',').filter(id => LESSONS[id] && !passed(name, id)).forEach(id => {
      scores.push({ name, form: id, attempt: 0, score: 1, total: 1, pct: 100, elapsed: 0, date: '', time: '', done: true, restored: true });
    });
    localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
  }
  const weak = readWeak(name);
  if (s) mergeWeak(weak, parseFactList(s.wrongQuestions, 'facts'), mastered);
  if (s && typeof notePractice === 'function') notePractice(name, s.wrongQuestions);   // 🔎 their reading-practice misses
  if (p) mergeWeak(weak, parseFactList(p.wrongQuestions, 'lab'), mastered);
  writeWeak(name, weak);
  return true;
}
/* After an answer to one of the student's facts (or any fact a lesson asks): update the list.
   A miss adds the fact (or the new wrong pick); right MASTER_RIGHT times takes it off. */
function noteFact(name, q, pick, correct) {
  const rec = recordOf(q);
  if (SHARE_MODE || reviewMode || !name || !rec) return { repeat: false };
  const weak = readWeak(name);
  const k = recKey(rec);
  pick = normPick(pick);
  const had = weak[k];
  let repeat = false;
  if (correct) {
    if (had) {
      had.right = (had.right || 0) + 1;
      if (had.right >= MASTER_RIGHT) {
        delete weak[k];
        const mastered = readMastered(name); mastered.add(k);
        try { localStorage.setItem(MASTERED_KEY + ':' + name, JSON.stringify([...mastered])); } catch (e) {}
      }
    }
  } else {
    repeat = !!had && had.picks.includes(String(pick));
    const f = had || { ...rec, picks: [], right: 0, src: 'lab' };
    if (!f.picks.includes(String(pick))) f.picks.push(String(pick));
    f.right = 0;
    weak[k] = f;
    const mastered = readMastered(name);
    if (mastered.delete(k)) { try { localStorage.setItem(MASTERED_KEY + ':' + name, JSON.stringify([...mastered])); } catch (e) {} }
  }
  writeWeak(name, weak);
  return { repeat };
}

/* 📖 QPS (the QPS Literacy Hub) only FEEDS the Lab: qps-feed.js reads it and shows the card at the end of the plan */

/* ── ROSTER ─────────────────────────────────────────── */
const ROSTER = [
  { name: "Mr. O (Teacher)",           id: "9377" },
  { name: "Avery, Jo'Von",             id: "10053632" },
  { name: "Belasquez Bonilla, Eduin",  id: "10058674" },
  { name: "Castaneda, Kelvin",         id: "10053248" },
  { name: "Chicas-Santos, Allison",    id: "10066737" },
  { name: "Collado, Roniel",           id: "10060249" },
  { name: "Dejesus, Michael",          id: "10049434" },
  { name: "Dock, Fakeem",              id: "10059720" },
  { name: "Douglas, Iyana",            id: "10070980" },
  { name: "Dumphrey, Christopher",     id: "10060696" },
  { name: "Flores, Kiara",             id: "10052834" },
  { name: "Johnson, Destiny",          id: "10052926" },
  { name: "Jones, Tahji",              id: "10060315" },
  { name: "Lawrence, Eric",            id: "10057451" },
  { name: "Madero, Jovany",            id: "10076374" },
  { name: "Pettway, Lanaura",          id: "10060616" },
  { name: "Polanco Soriano, Thiara",   id: "10060503" },
  { name: "Roberts, Robyn",            id: "10060925" },
  { name: "Rodriguez-Jimenez, Marcos", id: "10048936" },
  { name: "Rojas, Alanie",             id: "10076388" },
  { name: "Sanchez Rodriguez, Johanelyz", id: "10076767" },
  { name: "Vega, Taishmara",           id: "10054043" },
  { name: "Watts, Autumn",             id: "10039032" },
  { name: "Zelaya-Osorto, Nazareth",   id: "10053626" }
];

const GUEST_SLOTS = {
  '937701': 'Guest 1', '937702': 'Guest 2', '937703': 'Guest 3',
  '937704': 'Guest 4', '937705': 'Guest 5', '937706': 'Guest 6',
  '937707': 'Guest 7', '937708': 'Guest 8', '937709': 'Guest 9',
  '937710': 'Guest 10'
};

/* ── BUILD DROPDOWN ─────────────────────────────────── */
(function buildRoster() {
  const sel = document.getElementById('name-select');
  ROSTER.forEach(s => {
    const o = document.createElement('option');
    o.value = s.name; o.textContent = s.name;
    sel.appendChild(o);
  });
  const div = document.createElement('option');
  div.disabled = true; div.textContent = '── Guest Slots ──';
  sel.appendChild(div);
  Object.entries(GUEST_SLOTS).forEach(([code, label]) => {
    const o = document.createElement('option');
    o.value = `GUEST:${code}`; o.textContent = `🙋 ${label}`;
    sel.appendChild(o);
  });
})();

/* ── STATE ──────────────────────────────────────────── */
let loggedInName    = '';
let unlockedForms   = new Set();
let retakeUnlocked  = false;   // set by the Teacher PIN; cleared on Home
let pinModalCallback = null;
let activeSpeakBtn  = null;
let reviewMode      = false;
let reviewAutoRun   = false;

/* ── MATH HELPERS ───────────────────────────────────── */
function frac(n, d) {
  return `<span class="fraction"><span class="frac-top">${n}</span><span class="frac-bottom">${d}</span></span>`;
}
function mixed(w, n, d) {
  return `<span class="mixed-num">${w}<span class="fraction"><span class="frac-top">${n}</span><span class="frac-bottom">${d}</span></span></span>`;
}
function formatMathText(raw) {
  if (!raw) return '';
  let s = raw;
  s = s.replace(/(\d+)\s+(\d+)\/(\d+)/g, (_, w, n, d) => mixed(w, n, d));
  s = s.replace(/(\d+)\/(\d+)/g, (_, n, d) => frac(n, d));
  s = s.replace(/\bx\b/g, '×');
  return s;
}

const ORDINALS = {
  '2':'halves','3':'thirds','4':'fourths','5':'fifths','6':'sixths',
  '7':'sevenths','8':'eighths','9':'ninths','10':'tenths',
  '12':'twelfths','16':'sixteenths','100':'hundredths'
};
const SINGULAR_DENOM = {
  'halves':'half','thirds':'third','fourths':'fourth','fifths':'fifth',
  'sixths':'sixth','sevenths':'seventh','eighths':'eighth','ninths':'ninth',
  'tenths':'tenth','twelfths':'twelfth','sixteenths':'sixteenth','hundredths':'hundredth'
};
function denomToWord(d) { return ORDINALS[d] || `over ${d}`; }
function numToWord(n) {
  const w = ['zero','one','two','three','four','five','six','seven','eight','nine',
             'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen',
             'seventeen','eighteen','nineteen','twenty'];
  return w[parseInt(n)] !== undefined ? w[parseInt(n)] : n;
}
function convertToSpokenText(raw) {
  return raw
    .replace(/\u00a0{2,}/g, ', ')
    .replace(/(\d+)\s+(\d+)\/(\d+)/g, (_, w, n, d) => {
      const dWord = denomToWord(d), nNum = parseInt(n);
      const dFinal = nNum === 1 ? (SINGULAR_DENOM[dWord] || dWord) : dWord;
      return `${w} and ${numToWord(n)} ${dFinal}`;
    })
    .replace(/(\d+)\/(\d+)/g, (_, n, d) => {
      const dWord = denomToWord(d), nNum = parseInt(n);
      const dFinal = nNum === 1 ? (SINGULAR_DENOM[dWord] || dWord) : dWord;
      return `${numToWord(n)} ${dFinal}`;
    })
    .replace(/×/g, ' times ')
    .replace(/(^|\s)\+(?=\s|$)/g, '$1plus')
    .replace(/(^|\s)=(?=\s|$)/g, '$1equals')
    .replace(/\bx\b/g, ' times ')
    .replace(/\s\+\s/g, ' plus ')
    .replace(/\s−\s/g, ' minus ');
}

/* ── LETTER GRADE ───────────────────────────────────── */
function letterGrade(pct) {
  if (pct >= 97) return 'A+';
  if (pct >= 93) return 'A';
  if (pct >= 90) return 'A-';
  if (pct >= 87) return 'B+';
  if (pct >= 83) return 'B';
  if (pct >= 80) return 'B-';
  if (pct >= 77) return 'C+';
  if (pct >= 73) return 'C';
  if (pct >= 70) return 'C-';
  if (pct >= 67) return 'D+';
  if (pct >= 63) return 'D';
  if (pct >= 60) return 'D-';
  return 'F';
}

/* ── HELPERS ────────────────────────────────────────── */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getFirstName(name) {
  if (!name) return 'Student';
  if (name.includes(' - ')) return name.split(' - ').pop().trim();
  const parts = name.split(',');
  return parts.length > 1 ? parts[1].trim().split(' ')[0] : name.split(' ')[0];
}

let hlTimer = null;
const liveUtterances = new Set();   // speech in progress, held so its events still arrive
/* ── LISTEN, THEN NEXT (Marcos 10/11: "these should be forced for them to hear like in Science… the kids
   have to hear something before they can move on to the next item") ──
   After a MISS in Practice A, Practice B or the Review, the Next button stays hidden until the mistake and
   the right answer have been heard to the end. One big Listen button; stopping early does not count; a
   second tap while it is speaking does nothing. A device that will not speak (no sound started within 4 s,
   or the voice reports an error) gets a wait long enough to read it, then an "I read it" button.
   Same rules and numbers as guide.js in science-starting-and-stopping. Not in the Test (it shows no
   answer), not after a right answer, not in the teacher's look.
   What it proves: the audio played to the end. Not that the child listened. */
const LISTEN_START_WAIT = 4000;
const listenDwellMs = words => Math.min(15000, Math.max(3000, words * 450));
let listenJob = null;   // the forced listen now speaking, if any

function stopActiveSpeech() {
  clearTimeout(hlTimer);
  if (listenJob && !listenJob.settled) listenJob.abort();   // cut off before the end → it does not count
  window.speechSynthesis.cancel();
  document.querySelectorAll('.wrd.hl').forEach(e => e.classList.remove('hl'));
  if (activeSpeakBtn) { activeSpeakBtn.textContent = '🔊'; activeSpeakBtn = null; }
}

/* ── HINT BOX (Marcos 10/7) ──
   "The hints should not play automatically. They should be there if
   needed." — still the rule in Practice B. In Practice A and the Warm-Up the hint is open
   and reads itself aloud (Marcos 10/15, see autoHint). Until the student taps 💡 Need a hint?, only that button shows
   and nothing is read. Once opened, the hint has its own 🔊 on the LEFT,
   same toggle as every other speaker (tap to play, tap to stop, tap again
   to restart); every word (including "Hint:") is a span for the highlight.
   The question's 🔊 reads the question only. */
function hintBoxHTML(hint, shown) {
  if (!shown) {
    return `<div class="hint-wrap"><button type="button" class="hint-reveal-btn" ` +
      `aria-label="Show a hint" onclick="event.stopPropagation(); app.showHint()">` +
      `💡 Need a hint?</button></div>`;
  }
  const words = ('Hint: ' + hint).split(/\s+/)
    .map(w => `<span class="wrd">${formatMathText(w)}</span>`).join(' ');
  return `<div class="hint-box"><button type="button" class="speak-btn hint-speak-btn" ` +
    `title="Read the hint aloud" aria-label="Read the hint aloud" ` +
    `onclick="event.stopPropagation(); speakHint(this)">🔊</button>` +
    `<span class="hint-text"><span aria-hidden="true">💡</span> ${words}</span></div>`;
}

function speakHint(btn) {
  if (activeSpeakBtn === btn) { stopActiveSpeech(); return; }
  stopActiveSpeech();
  const q = app.currentQ();
  if (!q || !q.hint) return;
  const spans = Array.from(btn.parentElement.querySelectorAll('.wrd'));
  activeSpeakBtn = btn;
  btn.textContent = '⏹';
  const u = new SpeechSynthesisUtterance(convertToSpokenText('Hint: ' + q.hint));
  u.lang = 'en-US'; u.rate = 0.92;
  let hlIdx = 0;
  u.onboundary = e => {
    if (e.name !== 'word') return;
    spans.forEach(el => el.classList.remove('hl'));
    if (spans[hlIdx]) spans[hlIdx].classList.add('hl');
    hlIdx++;
  };
  u.onend = () => {
    spans.forEach(el => el.classList.remove('hl'));
    if (activeSpeakBtn === btn) { btn.textContent = '🔊'; activeSpeakBtn = null; }
  };
  addHighlightFallback(u, spans);
  window.speechSynthesis.speak(u);
}

/* ── WORD HELP (Marcos 10/10) ──
   Each math word in the question gets a button under it. Tapping one opens a
   card: what the word means, an example, sometimes a picture, and its own 🔊.
   Nothing opens or speaks on its own. Practice A and Practice B only (see wordHelp) —
   the Review and the Test check whether the student knows these words. Every open is logged
   (event "word") so the dashboard can show who needed which word. */
const WORD_MAX = 4;
function wordsIn(q) {
  const text = ' ' + String(q.q).toLowerCase() + ' ';
  const found = [];
  (window.WORDS || []).forEach(w => {
    let at = -1;
    w.find.forEach(ph => {
      const m = new RegExp('[^a-z]' + ph.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[^a-z]').exec(text);
      if (m && (at < 0 || m.index < at)) at = m.index;
    });
    // never a card whose example ends in this question's own answer (a student's own fact could be anything)
    if (at >= 0 && !(q.answer != null && new RegExp(`= ${String(q.answer).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(w.ex))) found.push({ w, at });
  });
  return found.sort((a, b) => a.at - b.at).slice(0, WORD_MAX).map(x => x.w);
}
function wordChipsHTML(q, openKey) {
  const list = wordsIn(q);
  if (!list.length) return '';
  const chips = list.map(w =>
    `<button type="button" class="word-chip${w.key === openKey ? ' open' : ''}" aria-expanded="${w.key === openKey}" ` +
    `onclick="app.showWord('${w.key}')">${w.word}</button>`).join('');
  const w = list.find(x => x.key === openKey);
  const card = !w ? '' :
    `<div class="word-card" role="note"><button type="button" class="speak-btn word-speak-btn" title="Read this aloud" ` +
    `aria-label="Read the meaning of ${w.word} aloud" onclick="speakWordCard(this)">🔊</button>` +
    `<div class="word-card-text"><div class="word-card-means">${wrapWords('<strong>' + w.word + '</strong> — ' + formatMathText(w.means))}</div>` +
    `<div class="word-card-ex">${wrapWords('<em>Example:</em> ' + formatMathText(w.ex))}</div>` +
    `${w.pic ? LabV.picHTML(w.pic) : ''}</div>` +
    `<button type="button" class="word-close" aria-label="Close" onclick="app.showWord('${w.key}')">✕</button></div>`;
  return `<div class="word-row"><span class="word-label" aria-hidden="true">📖 Word help:</span>${chips}</div>${card}`;
}
function speakWordCard(btn) {
  if (activeSpeakBtn === btn) { stopActiveSpeech(); return; }
  stopActiveSpeech();
  const spans = Array.from(btn.parentElement.querySelectorAll('.word-card-text .wrd')).filter(s => /[A-Za-z0-9+=×−]/.test(s.textContent));
  if (!spans.length) return;
  activeSpeakBtn = btn;
  btn.textContent = '⏹';
  const u = new SpeechSynthesisUtterance(convertToSpokenText(spans.map(s => s.textContent).join(' ')));
  u.lang = 'en-US'; u.rate = 0.92;
  let hlIdx = 0;
  u.onboundary = e => {
    if (e.name !== 'word') return;
    spans.forEach(el => el.classList.remove('hl'));
    if (spans[hlIdx]) spans[hlIdx].classList.add('hl');
    hlIdx++;
  };
  u.onend = () => {
    spans.forEach(el => el.classList.remove('hl'));
    if (activeSpeakBtn === btn) { btn.textContent = '🔊'; activeSpeakBtn = null; }
  };
  addHighlightFallback(u, spans);
  window.speechSynthesis.speak(u);
}

/* ── PART BANNER (Marcos 10/8: "I want to be able to know which part the
   students are on") — a big colored label on top of every question:
   the step number and the part's name, one color per part. ── */
function setPartBanner(form) {
  const el = document.getElementById('part-banner');
  const L = LESSONS[form], st = strandOf(form);
  if (!el || !L) return;
  el.className = 'part-banner pb-lab pb-' + (st ? st.id : 'as');
  // the lesson's name, not its code (Marcos 10/20: "say the titles of each lesson so the kids know what they are working on")
  el.innerHTML = `<span aria-hidden="true">${L.icon}</span> ${L.title}` +
    (reviewMode ? ' <span class="pb-teacher">(teacher view)</span>' : '') +
    (L.goal ? `<span class="pb-goal">You are learning to ${L.goal}.</span>` : '');
}

/* ── HIGHLIGHT FALLBACK ─────────────────────────────
   Some voices (and some browsers) never fire word-boundary
   events, so the highlight would never move. If no boundary
   arrives shortly after speaking starts, step through the
   words on a timer paced by word length and speech rate. */
function addHighlightFallback(u, spans) {
  let fired = false, i = 0, ended = false;
  const prevB = u.onboundary, prevE = u.onend;
  u.onboundary = e => { if (e.name === 'word' && !fired) { fired = true; clearTimeout(hlTimer); } if (prevB) prevB(e); };
  // The end of the speech always stops the highlight, however the voice reports it:
  // a normal end, an error or cancel, or (some Chromebook voices) no event at all,
  // which the watch below catches by seeing the voice go quiet AFTER it started.
  // A voice that never starts is left alone: the page's own no-sound wait handles that.
  const finish = e => {
    if (ended) return;
    ended = true;
    clearInterval(watch);
    clearTimeout(hlTimer);
    spans.forEach(s => s.classList.remove('hl'));
    liveUtterances.delete(u);
    if (prevE) prevE(e || {});
  };
  u.onend = finish;
  u.onerror = finish;
  // Chrome can drop an utterance's events if nothing else holds on to it.
  liveUtterances.add(u);
  let started = false, quietTicks = 0;
  const prevS = u.onstart;
  u.onstart = e => { started = true; if (prevS) prevS(e); };
  const watch = setInterval(() => {
    const voice = window.speechSynthesis;
    if (voice.speaking) { started = true; quietTicks = 0; return; }
    quietTicks = started && !voice.pending ? quietTicks + 1 : 0;
    if (quietTicks >= 2) finish();
  }, 400);
  const step = () => {
    if (fired || ended) return;
    spans.forEach(s => s.classList.remove('hl'));
    if (i >= spans.length) return;
    const w = spans[i++];
    w.classList.add('hl');
    const len = (w.textContent || '').replace(/[^A-Za-z0-9]/g, '').length;
    hlTimer = setTimeout(step, Math.max(280, len * 70 + 120) / (u.rate || 1));
  };
  clearTimeout(hlTimer);
  hlTimer = setTimeout(step, 500);
}

/* ── ATTEMPT TRACKING ───────────────────────────────── */
function getFormAttempts(name) {
  const scores = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
  const counts = Object.fromEntries(FORMS.map(id => [id, 0]));
  scores.filter(s => s.name === name && s.done && !s.restored).forEach(s => {
    if (counts[s.form] !== undefined) counts[s.form]++;
  });
  return counts;
}
function testCompleted(name) { return false; }   // the Lab has no one-try test

/* ── THE GATES ──
   Inside a strand, a lesson opens when the one before it is passed (90% on a facts lesson, or every
   Show-what-you-know question right). A strand with `after` opens when that whole strand is passed
   (Marcos 10/17: multiplying waits for adding and subtracting). The Teacher PIN lets one student past. */
function bestScore(name, form) {
  const scores = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
  return scores.filter(s => s.name === name && s.form === form && s.done && s.total > 0)
    .reduce((best, s) => (!best || s.score / s.total > best.score / best.total ? s : best), null);
}
function passed(name, form) {
  const best = bestScore(name, form);
  return !!best && best.score / best.total * 100 >= passPct(form);
}
/* How many right it takes on the lesson's own questions: 90% of 10 = 9 */
function needFor(form) {
  return Math.ceil(passPct(form) / 100 * scoredCount(window['LAB_' + form]));
}
function strandPassed(name, strandId) {
  const st = STRANDS.find(x => x.id === strandId);
  return !!st && st.lessons.length > 0 && st.lessons.every(id => passed(name, id));
}
/* Why this lesson is not open for this student yet ('' = it is open). */
function lessonWait(name, form) {
  if (ANY_ORDER || SHARE_MODE) return '';
  const st = strandOf(form);
  if (!st) return 'Not open yet';
  if (st.after && !strandPassed(name, st.after)) {
    const first = STRANDS.find(x => x.id === st.after);
    return `Pass ${first ? first.name : 'the strand before'} first`;
  }
  const i = st.lessons.indexOf(form);
  if (i > 0 && !passed(name, st.lessons[i - 1])) return `Pass ${LESSONS[st.lessons[i - 1]].title} first`;
  return '';
}

/* ── THE ROUTE (Marcos 10/20: "Will the lessons push the kids along the route?" → full flow, and math and reading
   TAKE TURNS). The next lesson = the first open, not-yet-passed lesson of the student's plan, strand by strand in the
   plan row's order. A plan with math AND reading alternates: after a math lesson, the next reading lesson; after a
   reading lesson, the next math lesson (the first one in plan order when the student has done neither yet). A lesson
   missed is still unpassed, so it comes back on its turn. The plan's ▶ Continue button and the end screen's Next both
   follow this. */
const isReadingStrand = st => !!st && st.id === 'rc';
function lastLessonDone(name, ids) {
  const scores = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
  const mine = scores.filter(s => s.name === name && s.done && !s.restored && ids.includes(s.form));
  return mine.length ? mine[mine.length - 1].form : null;
}
function nextStep(name, strands) {
  const open = st => st.lessons.find(id => !passed(name, id) && !lessonWait(name, id)) || null;
  const firstOpen = list => list.map(open).find(Boolean) || null;
  const math = strands.filter(st => !isReadingStrand(st)), read = strands.filter(isReadingStrand);
  const nm = firstOpen(math), nr = firstOpen(read);
  if (!nm || !nr) return nm || nr;
  const last = lastLessonDone(name, strands.flatMap(st => st.lessons));
  if (!last) return isReadingStrand(strands[0]) ? nr : nm;      // nothing done yet: the plan row's first strand
  return LESSONS[last] && LESSONS[last].reading ? nm : nr;      // take turns
}
const planStrands = name => (planFor(name) || []).map(id => STRANDS.find(st => st.id === id)).filter(Boolean);

/* A lesson that is not open yet shows a gray locked button that still explains why. */
function setFormButton(form, label, sub, waiting, el) {
  const btn = el || document.getElementById('btn-form-' + form);
  if (!btn) return;
  const open = formOpen(form);
  btn.disabled = !open;
  // "waiting" = open but not yet earned: looks locked, still tappable so it can explain why
  btn.classList.toggle('locked', !open || !!waiting);
  btn.innerHTML = !open
    ? `🔒 ${label.replace(/^\S+\s/, '')}<span class="form-btn-sub">Not open yet</span>`
    : waiting
      ? `🔒 ${label.replace(/^\S+\s/, '')}<span class="form-btn-sub">${waiting}</span>`
      : `${label}<span class="form-btn-sub">${sub}</span>`;
}

/* MY PLAN — one card per strand, one button per lesson, the next lesson to do marked "Do this next". */
function applyFormLocks(name, state) {
  const box = document.getElementById('plan-box');
  if (!box) return;
  const rules = document.getElementById('lab-rules');
  const plan = planFor(name);
  if (!plan) {
    // not on the list (or the list has not arrived yet): no lessons
    if (rules) rules.classList.add('hidden');
    const msg = state === 'checking'
      ? { icon: '⏳', head: 'Getting your plan…', text: 'One moment. The Lab is getting your plan.' }
      : state === 'offline'
        ? { icon: '📡', head: 'We could not get your plan', text: 'The Lab could not reach the internet. Tap Try Again. If it still does not work, ask Mr. O.' }
        : { icon: '🚧', head: 'Under Construction', text: 'The Lab is not ready for you yet. Mr. O will tell you when it is ready.' };
    box.innerHTML = `<div class="dir-section uc-box" id="lab-uc" data-state="${state || 'none'}"><div class="dir-row"><button class="speak-btn" onclick="speakDir(this)">🔊</button>` +
      `<h3 style="margin:0;">${msg.icon} ${msg.head}</h3></div><p class="dir-text">${msg.text}</p>` +
      (state === 'offline' ? `<button class="start-btn" id="lab-retry" onclick="app.checkPlan()">🔄 Try Again<span class="form-btn-sub">Get my plan again.</span></button>` : '') +
      (state === 'checking' ? '' : `<button class="signout-btn" onclick="app.restart()">🚪 Sign Out<span class="signout-sub">You will go back to the start.</span></button>`) + `</div>`;
    return;
  }
  if (rules) rules.classList.remove('hidden');
  const strands = plan.map(id => STRANDS.find(st => st.id === id)).filter(Boolean);
  const listed = !!PLANS[name] || !!cachedPlan(name);
  const first = getFirstName(name);
  // the next lesson comes from the strands this student is shown (a reading-only plan never points at math),
  // math and reading taking turns (nextStep)
  const nextUp = nextStep(name, strands);
  box.innerHTML = '';
  const hi = document.createElement('div');
  hi.className = 'dir-section plan-hi-row';
  hi.innerHTML = `<div class="dir-row"><button class="speak-btn" onclick="speakDir(this)">🔊</button><h3 style="margin:0;">🧪 ${listed ? `${first}'s Plan` : 'Lab Practice'}</h3></div>` +
    `<p class="dir-text">${nextUp ? `Your next lesson is ${LESSONS[nextUp].title}. You will learn to ${LESSONS[nextUp].goal}. Tap it to start.` : 'You passed every lesson that is open. Great work!'}</p>`;
  box.appendChild(hi);
  // ▶ CONTINUE: the next lesson on the route, one big button at the top (the list below stays for a redo)
  if (nextUp) {
    const go = document.createElement('button');
    go.className = 'start-btn continue-btn';
    go.id = 'btn-continue';
    go.innerHTML = `▶ Continue: ${LESSONS[nextUp].title}<span class="form-btn-sub">${goalSentence(nextUp)}</span>`;
    go.onclick = () => app.attemptStart(nextUp);
    box.appendChild(go);
  }
  strands.forEach(st => {
    const card = document.createElement('div');
    card.className = 'step-card strand-card strand-' + st.id;
    card.innerHTML = `<span class="step-label">${st.icon} ${st.name}</span>`;
    if (st.soon || !st.lessons.length) {
      const why = st.after ? `Opens after ${STRANDS.find(x => x.id === st.after).name}.` : 'Coming soon.';
      card.insertAdjacentHTML('beforeend', `<p class="form-note">🔒 ${why}</p>`);
      box.appendChild(card);
      return;
    }
    const grid = document.createElement('div');
    grid.className = 'start-grid lesson-grid';
    st.lessons.forEach(id => {
      const L = LESSONS[id];
      const b = document.createElement('button');
      b.className = 'start-btn lesson-btn' + (id === nextUp ? ' next-up' : '');
      b.id = 'btn-form-' + id;
      b.onclick = () => app.attemptStart(id);
      grid.appendChild(b);
      const best = bestScore(name, id);
      const n = scoredCount(window['LAB_' + id]);
      const rd = !!L.reading;   // reading counts points (Part A + Part B = 2) and a retry gets new stories
      const goal = L.goal ? `<span class="lesson-goal">${goalSentence(id)}</span>` : '';
      const sub = !best ? `${id === nextUp ? '⭐ Do this next · ' : ''}${n} ${rd ? 'points' : 'questions'} · get ${needFor(id)} right`
        : passed(name, id) ? (best.restored ? '✅ Passed' : `✅ Passed · best ${best.score} of ${best.total}`)
        : `🔁 Best ${best.score} of ${best.total} · get ${Math.round(passPct(id))}% · ${rd ? 'new stories' : 'new numbers'}`;
      setFormButton(id, `${L.icon} ${L.title}`, goal + sub, lessonWait(name, id), b);
    });
    card.appendChild(grid);
    box.appendChild(card);
  });
  if (typeof qpsCard === 'function') qpsCard(box, name);   // 📖 QPS progress, read-only (qps-feed.js)
}

/* ── SPEAK DIRECTIONS ───────────────────────────────── */
function speakDir(btn) {
  if (activeSpeakBtn === btn) { stopActiveSpeech(); return; }
  stopActiveSpeech();

  const p = btn.closest('.dir-section').querySelector('.dir-text');
  if (!p) return;
  if (!p.querySelector('.wrd')) p.innerHTML = wrapWords(p.innerHTML);

  const spans = Array.from(p.querySelectorAll('.wrd'));
  if (!spans.length) return;

  activeSpeakBtn = btn;
  btn.textContent = '⏹';

  const speechText = spans.map(s => s.textContent).join(' ');
  let hlIdx = 0;
  const u = new SpeechSynthesisUtterance(speechText);
  u.lang = 'en-US'; u.rate = 0.92;

  u.onboundary = e => {
    if (e.name !== 'word') return;
    document.querySelectorAll('.dir-text .wrd.hl').forEach(el => el.classList.remove('hl'));
    if (spans[hlIdx]) spans[hlIdx].classList.add('hl');
    hlIdx++;
  };
  u.onend = () => {
    document.querySelectorAll('.dir-text .wrd.hl').forEach(el => el.classList.remove('hl'));
    if (activeSpeakBtn === btn) { btn.textContent = '🔊'; activeSpeakBtn = null; }
  };
  addHighlightFallback(u, spans);
  window.speechSynthesis.speak(u);
}

/* ── READ-ALOUD INTRO SPEAKS ITSELF ─────────────────
   Marcos 10/6: the "Read Aloud is Available!" screen announces itself
   the moment it opens — no reading, no button. The click on "Let's Get
   Started!" is the user gesture the browser needs. The icons are said
   as words, and each word lights up as it is read. Leaving the screen
   (app.show) cancels the speech. */
const INTRO_SAY = { '🔊': 'the speaker button', '⏹': 'the stop button', '—': ',' };
const INTRO_RATE = 0.82;   // Marcos 10/6: 0.92 ran ahead of the highlight
let introToken = 0, introTimer = null;
let introMsPerChar = null, introMsPerWord = null;   // learned from this device's voice
function speakReadAloudIntro() {
  stopActiveSpeech();
  clearTimeout(introTimer);
  const screen = document.getElementById('readaloud-screen');
  const els = Array.from(screen.querySelectorAll('.ra-read'));
  els.forEach(el => { if (!el.querySelector('.wrd')) el.innerHTML = wrapWords(el.innerHTML); });
  // One piece per SENTENCE (Marcos 10/6: the end of a long sentence lost its
  // highlight). Each piece = the words to say + the on-screen word each one lights.
  const pieces = [];
  els.forEach(el => {
    let words = [], wordSpan = [];
    const flush = () => { if (words.length) pieces.push({ words, wordSpan }); words = []; wordSpan = []; };
    el.querySelectorAll('.wrd').forEach(sp => {
      const t = sp.textContent.replace(/\uFE0F/g, '').trim();
      const key = t.replace(/[.!?,]+$/, ''), punct = t.slice(key.length);   // "🔊." → icon + "."
      let say = INTRO_SAY[key] != null ? INTRO_SAY[key] + punct : (/[A-Za-z0-9]/.test(t) ? t : '');
      if (!say) return;
      if (say === ',') { if (words.length) words[words.length - 1] += ','; return; }
      if (/^the /.test(say) && /^(every|each)$/i.test(words[words.length - 1] || '')) say = say.slice(4);
      // past-tense "read" ("is read aloud") must sound like "red", not "reed" (Marcos 10/6)
      if (/^read[.!?,]?$/i.test(say) && /^(is|was|are|were|be|been|being)$/i.test(words[words.length - 1] || '')) say = say.replace(/^read/i, 'red');
      say.split(' ').forEach(w => { words.push(w); wordSpan.push(sp); });
      if (/[.!?]$/.test(say)) flush();
    });
    if (words.length && !/[.!?,]$/.test(words[words.length - 1])) words[words.length - 1] += '.';
    flush();
  });
  const factor = (typeof READ_SPEEDS !== 'undefined' && typeof readSpeed !== 'undefined' && READ_SPEEDS[readSpeed]) ? READ_SPEEDS[readSpeed].factor : 1;
  const rate = INTRO_RATE * factor;
  const token = ++introToken;
  const live = () => token === introToken && !screen.classList.contains('hidden');
  const sayPiece = k => {
    if (!live() || k >= pieces.length) return;
    const p = pieces[k];
    const text = p.words.join(' ');
    const starts = []; let pos = 0;
    p.words.forEach(w => { starts.push(pos); pos += w.length + 1; });
    const lit = new Set(p.wordSpan);
    let idx = -1, lastHeard = 0, startedAt = 0, viaVoice = false;
    const mark = j => {
      j = Math.max(0, Math.min(j, p.words.length - 1));
      if (j === idx) return;
      idx = j;
      lit.forEach(sp => sp.classList.remove('hl'));
      p.wordSpan[j].classList.add('hl');
    };
    // Watchdog: when the voice goes quiet about word positions (some voices
    // never report them, Chrome sometimes stops partway), step on at a
    // speaking pace — never past the last word, which stays lit until the end.
    // Pace comes from how long this voice really took on the sentences before
    // (first sentence: a guess), so the highlight keeps up on any voice.
    // (a hair quick on purpose: the last word stays lit until the voice ends, so early is safe, late is not)
    const wordMs = w => introMsPerChar ? 0.92 * (w.length + 1) * introMsPerChar : (120 + w.replace(/[^A-Za-z0-9]/g, '').length * 55) / rate;
    const tick = () => {
      if (!live()) return;
      // while the voice is reporting words it leads; step in only once it has gone quiet
      const base = wordMs(p.words[idx] || ''), quiet = Date.now() - lastHeard;
      const avg = Math.max(base, introMsPerWord || 0);   // a normal pause between reported words is never "quiet"
      if (idx >= 0 && viaVoice && quiet > avg * 1.8) {
        const n = Math.max(1, Math.floor(quiet / avg));   // catch up the words said while it was quiet
        viaVoice = false; mark(idx + n); lastHeard += n * avg;
      } else if (idx >= 0 && !viaVoice && quiet > base) {
        mark(idx + 1); lastHeard = Math.min(Date.now(), lastHeard + base);   // keep exact time between steps
      }
      introTimer = setTimeout(tick, 60);
    };
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = rate;
    u.onstart = () => { startedAt = lastHeard = Date.now(); mark(0); clearTimeout(introTimer); tick(); };
    u.onboundary = e => {
      if (e.name !== 'word') return;
      let j = 0;
      while (j + 1 < starts.length && starts[j + 1] <= e.charIndex) j++;
      mark(j); lastHeard = Date.now(); viaVoice = true;
    };
    u.onend = () => {
      clearTimeout(introTimer);
      const took = Date.now() - startedAt;
      if (startedAt && live() && took > 300) {   // learn the voice's real speed (skip cancelled/odd pieces)
        const perChar = took / (text.length + 1);
        introMsPerChar = introMsPerChar ? (introMsPerChar + perChar) / 2 : perChar;
        const perWord = took / p.words.length;
        introMsPerWord = introMsPerWord ? (introMsPerWord + perWord) / 2 : perWord;
      }
      lit.forEach(sp => sp.classList.remove('hl'));
      if (live()) introTimer = setTimeout(() => sayPiece(k + 1), 250);
    };
    window.speechSynthesis.speak(u);
  };
  sayPiece(0);
}

function wrapWords(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  let idx = 0;
  function walk(node) {
    if (node.nodeType === 3) {
      const text = node.textContent.replace(/—/g, ' — ').replace(/  +/g, ' ');
      const words = text.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      words.forEach(part => {
        if (/\S/.test(part)) {
          const sp = document.createElement('span');
          sp.className = 'wrd'; sp.dataset.wi = idx++; sp.textContent = part;
          frag.appendChild(sp);
        } else if (part) {
          frag.appendChild(document.createTextNode(part));
        }
      });
      node.parentNode.replaceChild(frag, node);
    } else {
      [...node.childNodes].forEach(walk);
    }
  }
  walk(tmp);
  return tmp.innerHTML;
}

/* ══════════════════════════════════════════════════════
   APP OBJECT
══════════════════════════════════════════════════════ */
/* ── SESSION EVENT LOG ───────────────────────────────
   start · leave · return · resume · close · finish, each with the
   on-task clock. elapsed is time ON TASK: the timer pauses while the
   page is hidden and counts ticks, so a slept device cannot inflate it. */
function logEvent(kind, extra) {
  if (!app.events) app.events = [];
  app.events.push(Object.assign({
    at: new Date().toISOString(),
    e:  kind,
    q:  (app.currentIndex || 0) + 1,
    on: app.timerSeconds || 0
  }, extra || {}));
  if (app.events.length > 200) app.events.splice(0, app.events.length - 200);
}

const app = {

  /* ── state ── */
  studentName:       '',
  currentForm:       '',
  currentBank:       [],
  currentIndex:      0,
  score:             0,
  streak:            0,
  missedQuestions:   [],
  currentAttemptNum: 1,
  selectedAnswer:    null,
  questionLocked:    false,
  timerSeconds:      0,
  timerInterval:     null,
  timerOn:           false,
  instructInterval:  null,
  readInterval:      null,
  nextInterval:      null,

  /* ── screens ── */
  show(id) {
    ['start-screen','readaloud-screen','directions-screen','quiz-screen','end-screen','scoreboard-screen']
      .forEach(s => document.getElementById(s).classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    if (id !== 'quiz-screen') document.body.classList.remove('story-active');   // 🔎 the passage layout ends with the lesson
    window.scrollTo(0, 0);   // every new screen starts at the top
    window.speechSynthesis.cancel();
  },

  /* ── INIT ── */
  init() {
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.remove('hidden');
    document.getElementById('student-login-panel').classList.add('hidden');
  },

  /* ── READ ALOUD INTRO ── */
  showReadAloudIntro() {
    if (!SHARE_MODE && (!ANY_OPEN)) return;
    document.getElementById('welcome-panel').classList.add('hidden');
    this.show('readaloud-screen');
    setTimeout(speakReadAloudIntro, 150);   // announces itself (show() just cancelled any speech)
    const btn   = document.getElementById('readaloud-btn');
    const fill  = document.getElementById('readaloud-fill');
    const count = document.getElementById('readaloud-count');
    btn.disabled = true; btn.style.opacity = '0.45'; btn.style.cursor = 'not-allowed';
    count.textContent = 6;
    fill.style.transition = 'none';
    fill.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = 'width 6s linear';
      fill.style.width = '0%';
    }));
    let remaining = 6;
    const iv = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(iv);
        btn.disabled = false; btn.style.opacity = '1';
        btn.style.cursor = 'pointer'; btn.textContent = "✅ Got It — Show Me the Directions!";
      }
    }, 1000);
  },

  /* ── DIRECTIONS ── */
  showDirections() {
    this.show('directions-screen');
    this.startInstructionsTimer();
  },

  showLogin() {
    if (this.instructInterval) { clearInterval(this.instructInterval); this.instructInterval = null; }
    window.speechSynthesis.cancel();
    document.querySelectorAll('.dir-text .wrd.hl').forEach(e => e.classList.remove('hl'));
    this.studentName = '';
    loggedInName = '';
    document.getElementById('resume-container').classList.add('hidden');
    document.getElementById('form-select-section').classList.add('hidden');
    const loginCard = document.getElementById('login-step-card');
    if (loginCard) loginCard.classList.remove('hidden');
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.add('hidden');
    document.getElementById('student-login-panel').classList.remove('hidden');
    if (SHARE_MODE) this._shareSignIn();
  },

  /* After sign-in: who is on the list comes from the sheet (with the device's last answer as the fallback).
     Their earlier misses and their Lab backup (lessons passed on another device) come with it. */
  checkPlan() {
    const name = this.studentName;
    if (!name) return;
    if (seesAll(name)) { applyFormLocks(name); this.checkResume(); return; }
    applyFormLocks(name, planFor(name) ? '' : 'checking');
    if (planFor(name)) this.checkResume();
    if (typeof loadQpsFeed === 'function') loadQpsFeed(name).then(() => { if (this.studentName === name && planFor(name)) applyFormLocks(name); });   // 📖 QPS (qps-feed.js)
    loadHistory(name).then(got => {
      if (this.studentName !== name) return;
      applyFormLocks(name, got === 'offline' ? 'offline' : '');
      if (planFor(name)) this.checkResume();
      else document.getElementById('resume-container').classList.add('hidden');
    });
  },

  /* Shared preview: no roster, no student number — straight to the parts. */
  _shareSignIn() {
    loggedInName     = 'Guest';
    this.studentName = 'Guest';
    const loginCard = document.getElementById('login-step-card');
    if (loginCard) loginCard.classList.add('hidden');
    document.getElementById('form-select-section').classList.remove('hidden');
    applyFormLocks(this.studentName);
    this.checkResume();
  },

  /* ── NAME SELECT ── */
  onNameSelect() {
    const val = document.getElementById('name-select').value;
    const pinSec   = document.getElementById('pin-section');
    const guestSec = document.getElementById('guest-name-section');
    document.getElementById('login-error').textContent = '';
    if (!val) { pinSec.classList.add('hidden'); return; }
    pinSec.classList.remove('hidden');
    if (val.startsWith('GUEST:')) {
      guestSec.classList.remove('hidden');
      document.getElementById('pin-label').textContent = '🔒 Enter guest code:';
    } else {
      guestSec.classList.add('hidden');
      document.getElementById('pin-label').textContent = '🔒 Enter your student number:';
    }
    setTimeout(() => document.getElementById('student-pin').focus(), 80);
  },

  /* ── LOGIN ── */
  attemptLogin() {
    const selVal = document.getElementById('name-select').value;
    const pin    = document.getElementById('student-pin').value.trim();
    const errEl  = document.getElementById('login-error');
    errEl.textContent = ''; errEl.style.color = '#c0392b';

    if (!selVal) { errEl.textContent = '⚠️ Please select your name.'; return; }
    if (!pin)    { errEl.textContent = '⚠️ Please enter your student number.'; return; }

    let matched = false, displayName = '';

    if (selVal.startsWith('GUEST:')) {
      const code = selVal.replace('GUEST:', '');
      if (pin === code) {
        const firstName = (document.getElementById('guest-display-name').value || '').trim();
        if (!firstName) { errEl.textContent = '⚠️ Please enter your first name.'; return; }
        matched = true;
        displayName = firstName + ' (Guest)';
      } else {
        errEl.textContent = '❌ Incorrect guest code. Try again.'; return;
      }
    } else {
      const student = ROSTER.find(s => s.name === selVal);
      if (student && student.id === pin) {
        matched = true; displayName = selVal;
      } else {
        errEl.textContent = '❌ Incorrect student number. Try again.'; return;
      }
    }

    if (matched) {
      loggedInName     = displayName;
      this.studentName = displayName;
      document.getElementById('student-pin').value = '';
      document.getElementById('login-error').textContent = '';
      const loginCard = document.getElementById('login-step-card');
      if (loginCard) loginCard.classList.add('hidden');
      document.getElementById('form-select-section').classList.remove('hidden');
      retakeUnlocked = false;   // a PIN unlock never carries over to the next student
      this.checkPlan();
    }
  },

  /* ── ATTEMPT START ── */
  attemptStart(form) {
    if (!this.studentName || !LESSONS[form] || !formOpen(form)) return;
    if (!reviewMode && !planFor(this.studentName)) { applyFormLocks(this.studentName); return; }   // not on the list
    // The gate: the lesson before it in the strand must be passed. The Teacher PIN lets this one student past.
    const why = lessonWait(this.studentName, form);
    if (why) {
      this.showPinModal(
        '📘 Not Yet',
        `${getFirstName(this.studentName)}: ${why.charAt(0).toLowerCase() + why.slice(1)}. ` +
        `Teachers: enter your PIN to let this student start ${FORM_NAMES[form]} now.`,
        () => this.startSession(form)
      );
      return;
    }
    this.startSession(form);
  },

  /* ── TEACHER REVIEW MODE ── */
  promptTeacherReview() {
    const pin = prompt('Enter Teacher PIN to access Review Mode:');
    if (pin !== '9377') { if (pin !== null) alert('Incorrect PIN.'); return; }
    this.studentName = 'Mr. O (Teacher)';
    reviewMode = true;
    localStorage.removeItem(STORAGE_KEY);
    this._showReviewPicker();
  },

  _showReviewPicker() {
    const list = FORMS.map((id, i) => `${i + 1} — ${id} ${LESSONS[id].title}`).join('\n');
    const pick = prompt(`Choose a lesson to look at:\n${list}\n\nEnter a number:`);
    const form = FORMS[Number(pick) - 1];
    if (!form) { alert('Invalid choice.'); reviewMode = false; return; }
    const mode = prompt('Choose review mode:\n1 — Manual (tap Next each question)\n2 — Auto-run (fully automatic)\n\nEnter 1 or 2:');
    if (mode !== '1' && mode !== '2') { alert('Invalid choice.'); reviewMode = false; return; }
    reviewAutoRun = (mode === '2');
    this.startSession(form);
  },

  exitReviewMode() {
    reviewMode    = false;
    reviewAutoRun = false;
    this.stopTimerEngine();
    const banner = document.getElementById('review-mode-banner');
    if (banner) banner.classList.add('hidden');
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.remove('hidden');
    document.getElementById('student-login-panel').classList.add('hidden');
  },

  /* The question on screen */
  currentQ() {
    return (this.currentBank && this.currentBank[this.currentIndex]) || null;
  },

  _autoAnswer() {
    const q = this.currentQ();
    if (typeof readingAutoAnswer === 'function' && readingAutoAnswer(this, q)) return;   // 🔎 reading-ui.js
    document.querySelectorAll('.answer-btn').forEach(btn => {
      if (btn.dataset.answer === q.answer) {
        this._selectChoice(q.answer, btn);
      }
    });
    setTimeout(() => this.confirmAnswer(), 600);
  },

  /* THIS STUDENT'S OWN FACTS for this lesson (Marcos 10/17: "incorporate the known areas of weakness"):
     the facts on their list that this lesson teaches, most-missed first, never one the lesson already asks.
     Built by the lesson's own builder (lessons.js), so the slips and pictures match the lesson. */
  _mineFor(form, bank, max, pre) {
    if (reviewMode || SHARE_MODE || !window.LabLessons) return [];
    const asked = new Set(bank.filter(recordOf).map(q => recKey(recordOf(q))));
    const weak = Object.values(readWeak(this.studentName)).filter(f => LabLessons.fitsOwn(form, f) && !asked.has(recKey(f)));
    // most-missed first; ties broken differently each try, so a long list takes turns
    const r = LabLessons.rng(LabLessons.seedOf(`${this.studentName}|${form}|${this.version}|${Math.floor(Date.now() / 600000)}`));
    const order = LabLessons.shuffled(weak, r).sort((x, y) => y.picks.length - x.picks.length);
    const skill = (LabLessons.LESSONS.find(L => L.id === form) || {}).skill || form;
    return order.slice(0, max).map((f, i) => {
      const q = LabLessons.ownItem(form, f, `${form}-${pre ? 'K' : 'M'}${i + 1}`, r, skill);
      const item = { ...q, mine: true, before: [...f.picks] };
      // their earlier wrong answer is always a choice (a repeat can only be seen if it can be picked):
      // it takes the place of the last wrong choice, with the problem worked out in its note
      const shapeOk = p => (/ and /.test(item.answer) ? / and /.test(p) : / than | equal /.test(item.answer) ? / than | equal /.test(p) : /^\d+$/.test(p));
      const earlier = [...f.picks].reverse().map(showPick).find(p => shapeOk(normPick(p)) && normPick(p) !== normPick(item.answer));
      if (earlier && !item.choices.includes(earlier)) {
        const out = item.choices.filter(c => c !== item.answer).pop();
        item.choices = item.choices.map(c => (c === out ? earlier : c));
        const slips = { ...item.slips }; delete slips[out];
        slips[earlier] = { tag: 'Same answer as before', say: item.explanation };
        item.slips = slips;
      }
      if (pre) { item.kind = 'pre'; delete item.hint; delete item.pic; delete item.explain; }
      return item;
    });
  },

  /* ── START SESSION ── */
  startSession(form) {
    this.events = []; this.startedAt = new Date().toISOString();
    this.finishedAt = '';
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(RNDQ_SESSION_ID_KEY);
    tabSwitchCount     = 0;
    const warnBanner = document.getElementById('tab-warning-banner');
    if (warnBanner) warnBanner.classList.add('hidden');
    this.currentForm   = form;
    this.score         = 0;
    this.streak        = 0;
    this.missedQuestions = [];
    this.currentIndex  = 0;
    this.questionLocked = false;   // a finished lesson leaves it set
    this.twin          = null;
    this.lastMissed    = false;
    this.timerSeconds  = 0;
    this.testedOut     = false;
    this.preRight      = 0;
    this.preTotal      = 0;
    this.heardStories  = [];   // reading: the passages heard to the end in this try
    this.kindsSeen     = {};   // reading: the kinds of mistakes made in this try (a second one = a repeat)

    // NEW NUMBERS ON A RETRY (Marcos 10/16): LAB_<id>_V holds the versions (data/*.js): try 1 → version 1,
    // try 2 → version 2 … then round again. "Try" = finished tries on this device. The version rides in the start event.
    const versions = window['LAB_' + form + '_V'];
    const triesDone = (reviewMode || SHARE_MODE) ? 0 : (getFormAttempts(this.studentName)[form] || 0);
    this.version = Array.isArray(versions) && versions.length ? triesDone % versions.length : 0;
    let rawBank = [...(this.version ? versions[this.version] : window['LAB_' + form])];
    // 🎯 Show what you know: only on the first try at a lesson not yet passed (a retry goes straight to the lesson)
    const offerPre = !reviewMode && triesDone === 0 && !passed(this.studentName, form);
    if (!offerPre) rawBank = rawBank.filter(q => q.kind !== 'pre');
    // the student's own missed facts: up to MINE_PRE_MAX in Show what you know, up to MINE_MAX more questions
    const preIdx = rawBank.filter(q => q.kind === 'pre').length;
    // ONE YOU MISSED BEFORE (Marcos 10/19: tailored to each student): their most-missed mistake for this lesson,
    // worked out as an example they must hear, on their first try at the lesson. It is picked first, so even a student
    // with one mistake for this lesson sees it. It is not asked in that try (they just heard its answer); it stays on
    // their list and comes back as a question on a retry and in the strand's check.
    const exampleOf = !reviewMode && triesDone === 0 ? this._mineFor(form, rawBank, 1, false) : [];
    const example = exampleOf[0] || null;
    const minePre = offerPre && preIdx ? this._mineFor(form, [...rawBank, ...exampleOf], MINE_PRE_MAX, true) : [];
    const mineQ = this._mineFor(form, [...rawBank, ...exampleOf, ...minePre], MINE_MAX, false);
    if (minePre.length) rawBank.splice(preIdx, 0, ...minePre);
    if (mineQ.length) {
      // spread them through "your turn", never two in a row
      const scoredAt = rawBank.map((q, i) => (isScored(q) ? i : -1)).filter(i => i >= 0);
      const gap = Math.max(1, Math.floor(scoredAt.length / (mineQ.length + 1)));
      mineQ.slice().reverse().forEach((m, k) => {
        const slot = scoredAt[Math.min(scoredAt.length - 1, gap * (mineQ.length - k))];
        rawBank.splice(slot + 1, 0, m);
      });
    }
    if (example) {
      const firstQ = rawBank.findIndex(isScored);
      const last = example.before.length ? showPick(example.before[example.before.length - 1]) : '';
      // a compare question names its numbers only in the choices: say them, and read their pick as a quote
      const nums = example.mistake && example.mistake.type === 'C' ? [example.mistake.n, example.mistake.m].map(showPick) : null;
      const said = / than | equal /.test(last) ? `"${last}"` : last;
      const lines = [`This one is yours. You missed it before.`, nums ? `Compare ${nums[0]} and ${nums[1]}. Which sentence is true?` : example.q, ...(last ? [`You picked ${said}.`] : []),
        ...String(example.explanation).split(/(?<=\.)\s+/).filter(Boolean)];
      rawBank.splice(firstQ < 0 ? rawBank.length : firstQ, 0, { id: `${form}-YOU`, kind: 'watch', skill: 'Lab step', mine: true,
        title: 'One you missed before', text: lines.join('\n'), pic: example.explain || example.pic || null });
    }
    // after Show what you know (when it was not all right): one short screen, then the lesson
    const nPre = rawBank.filter(q => q.kind === 'pre').length;
    if (nPre) {
      rawBank.splice(nPre, 0, { id: `${form}-GO`, kind: 'watch', title: "Now let's learn it", skill: 'Lab step',
        text: 'Some of those were tricky. That is OK.\nNow watch and listen.\nThen you will try it one step at a time.' });
    }
    this.readingStart = typeof readingExtras === 'function' ? readingExtras(this, form, rawBank) : null;   // 🔎 their practice miss + a warning about their most common kind of mistake

    const shuffleQ = q => {
      if (q.type === 'hot') return { ...q };     // click sentences stay in the passage's order
      if (q.type === 'ebsr') {
        const mix = part => ({ ...part, choices: [...part.choices].sort(() => Math.random() - 0.5) });
        return { ...q, partA: mix(q.partA), partB: mix(q.partB) };
      }
      if (!q.choices) return { ...q };           // a worked example has no choices
      const shuffled = [...q.choices].sort(() => Math.random() - 0.5);
      return { ...q, choices: shuffled };
    };
    this.currentBank = rawBank.map(shuffleQ);
    if (!keepsOrder(form)) shuffle(this.currentBank);

    const banner = document.getElementById('review-mode-banner');
    if (banner) {
      banner.classList.toggle('hidden', !reviewMode);
      const label = banner.querySelector('span');
      if (label) label.textContent = reviewAutoRun
        ? '🔍 Teacher Review Mode — auto-run'
        : '🔍 Teacher Review Mode — tap Next to advance';
    }

    this.show('quiz-screen');
    logEvent('start', { v: this.version + 1, mine: minePre.length + mineQ.length, ...(example ? { ex: recKey(recordOf(example)) } : {}), ...(this.readingStart || {}) });
    this.startTimer();
    this.renderQuestion();
    if (!reviewMode && !SHARE_MODE) submitScorePartial();   // Mr. O sees who is in which lesson right away
  },

  /* ── RESUME ── */
  checkResume() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const rc = document.getElementById('resume-container');
    const formSelect = document.getElementById('form-select-section');
    if (saved && rc) {
      const data = JSON.parse(saved);
      if (this.studentName && data.studentName === this.studentName) {
        rc.classList.remove('hidden');
        document.getElementById('resume-detail').textContent =
          `${FORM_NAMES[data.currentForm] || 'Test'} — Q${data.currentIndex + 1} of ${data.currentBank.length}`;
        if (formSelect) formSelect.classList.add('hidden');
      } else {
        rc.classList.add('hidden');
        if (formSelect && this.studentName) formSelect.classList.remove('hidden');
      }
    } else if (rc) {
      rc.classList.add('hidden');
      if (formSelect && this.studentName) formSelect.classList.remove('hidden');
    }
  },

  resumeSession() {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;
    this.studentName    = saved.studentName;
    this.currentForm    = saved.currentForm;
    this.currentBank    = saved.currentBank;
    this.currentIndex   = saved.currentIndex;
    this.score          = saved.score;
    this.streak         = saved.streak || 0;
    this.missedQuestions = saved.missedQuestions || [];
    this.timerSeconds   = saved.timerSeconds || 0;
    this.events = saved.events || [];
    this.startedAt = saved.startedAt || new Date().toISOString();
    this.version = saved.version || 0;           // the saved questions are already that version's
    this.preRight = saved.preRight || 0; this.preTotal = saved.preTotal || 0; this.testedOut = false;
    this.heardStories = saved.heardStories || []; this.kindsSeen = saved.kindsSeen || {};
    this.twin = null; this.lastMissed = false;   // a twin is a bonus question — it is not carried across a restart
    logEvent('resume');
    this.show('quiz-screen');
    this.startTimer();
    // Saved right after answering the last question → nothing left to ask
    if (this.currentIndex >= this.currentBank.length) { this._finishSession(); return; }
    this.renderQuestion();
  },

  saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      studentName:     this.studentName,
      currentForm:     this.currentForm,
      currentBank:     this.currentBank,
      currentIndex:    (this.questionLocked || this.twin) ? this.currentIndex + 1 : this.currentIndex, // answered (or on its twin) → resume at the next one
      score:           this.score,
      streak:          this.streak,
      missedQuestions: this.missedQuestions,
      timerSeconds:    this.timerSeconds,
      events: this.events,
      startedAt: this.startedAt,
      version:   this.version || 0,
      preRight:  this.preRight || 0,
      preTotal:  this.preTotal || 0,
      heardStories: this.heardStories || [],   // reading: passages already heard to the end
      kindsSeen:    this.kindsSeen || {}
    }));
  },

  discardProgress() {
    this.showPinModal(
      '🗑️ Discard Progress',
      'Enter Teacher PIN to clear the current in-progress session. The student will start fresh.',
      () => {
        localStorage.removeItem(STORAGE_KEY);
        document.getElementById('resume-container').classList.add('hidden');
        applyFormLocks(this.studentName);
        this.checkResume();
      }
    );
  },

  /* ── OVERALL TIMER ── */
  startTimer() {
    this.stopTimerEngine();
    this.timerOn = true;
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      this._tickTimer();
      if (this.timerSeconds % 30 === 0) this.saveProgress();
    }, 1000);
  },

  stopTimerEngine() {
    if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; }
    this.timerOn = false;
  },

  _tickTimer() {
    const m = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
    const s = String(this.timerSeconds % 60).padStart(2, '0');
    const el = document.getElementById('timer-display');
    if (el) el.textContent = `${m}:${s}`;
  },

  /* ── INSTRUCTIONS LOCK (20s) ── */
  startInstructionsTimer() {
    if (this.instructInterval) { clearInterval(this.instructInterval); this.instructInterval = null; }
    const btn   = document.getElementById('ready-btn');
    const fill  = document.getElementById('instruct-fill');
    const count = document.getElementById('instruct-count');
    if (!btn) return;
    if (reviewMode) {
      btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer';
      btn.textContent = "✅ Got It — Let's Begin!";
      return;
    }
    btn.disabled = true;
    btn.style.opacity = '0.45';
    btn.style.cursor  = 'not-allowed';
    if (count) count.textContent = INSTRUCT_SECS;
    if (fill) {
      fill.style.transition = 'none';
      fill.style.width = '100%';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        fill.style.transition = `width ${INSTRUCT_SECS}s linear`;
        fill.style.width = '0%';
      }));
    }
    let remaining = INSTRUCT_SECS;
    this.instructInterval = setInterval(() => {
      remaining--;
      if (count) count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(this.instructInterval);
        this.instructInterval = null;
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.cursor  = 'pointer';
        btn.textContent   = "✅ Got It — Let's Begin!";
      }
    }, 1000);
  },

  /* ── NEXT SOAK TIMER (a short pause after an answer) ── */
  startNextTimer() {
    if (this.nextInterval) { clearInterval(this.nextInterval); this.nextInterval = null; }
    const bar   = document.getElementById('next-timer-bar');
    const fill  = document.getElementById('next-fill');
    const count = document.getElementById('next-count');

    if (reviewMode) {
      bar.classList.add('hidden');
      if (reviewAutoRun) {
        setTimeout(() => this.nextQuestion(), 800);
      } else {
        document.getElementById('next-btn').classList.remove('hidden');
      }
      return;
    }

    const secs = this.nextSecs || NEXT_SECS;
    bar.classList.remove('hidden');
    count.textContent = secs;

    // Single CSS transition — truly smooth over full duration
    fill.style.transition = 'none';
    fill.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = `width ${secs}s linear`;
      fill.style.width = '0%';
    }));

    let remaining = secs;
    this.nextInterval = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(this.nextInterval);
        this.nextInterval = null;
        bar.classList.add('hidden');
        this.soakDone = true;
        this._maybeShowNext();
      }
    }, 1000);
  },

  /* ── RENDER QUESTION ── */
  renderQuestion() {
    setPartBanner(this.currentForm);
    const q     = this.currentQ();
    const total = this.currentBank.length;

    document.getElementById('progress-text').textContent =
      `${q.kind === 'watch' ? '👀 Watch' : q.kind === 'step' ? '🪜 Step by step' : q.kind === 'pre' ? '🎯 Show what you know' : '✏️ Your turn'} · ${this.currentIndex + 1} of ${total}`;
    this.nextSecs = q.kind === 'step' || q.kind === 'pre' ? STEP_NEXT_SECS : NEXT_SECS;
    // ⭐ one of this student's own missed facts
    const mineNote = document.getElementById('mine-note');
    if (mineNote) mineNote.classList.toggle('hidden', !q.mine);
    // 🔎 a reading question: the passage rides beside it (reading-ui.js)
    if (typeof readingRender === 'function' && readingRender(this, q, total)) return;
    if (q.kind === 'watch') { this._renderWatch(q, total); return; }
    document.getElementById('speak-q-btn').classList.remove('hidden');
    // "Try one like it" strip: shown only while a twin question is up
    document.getElementById('score-text').textContent    = `${getFirstName(this.studentName)} · ${this.score}`;
    document.getElementById('progress-fill').style.width = `${(this.currentIndex / total) * 100}%`;

    this._renderStreak();

    // Question text
    const qtEl = document.getElementById('question-text');
    let qHTML = formatMathText(q.q);
    // Practice B: every question starts with the hint closed. Practice A / Warm-Up: open, and it reads itself (below).
    const sayHint = !!q.hint && autoHint(this.currentForm) && !reviewMode;
    this.hintShown = sayHint;
    if (q.hint) qHTML += hintBoxHTML(q.hint, sayHint);
    qtEl.innerHTML = qHTML;
    // The picture lives outside #question-text, so speakQuestion's
    // word-wrapping never touches it
    document.getElementById('q-visual').innerHTML = LabV.picHTML(q.pic);
    // Word help buttons (not on the tests; the teacher's look at a test shows none either)
    this.mustHear = false;   // set after a miss on a part that teaches (see _armListen)
    this.soakDone = false;
    this.wordOpen = null;
    this._renderWords();

    // Reset feedback / buttons
    const fb = document.getElementById('feedback');
    fb.className = 'feedback-box';
    fb.style.display = 'none';
    fb.textContent = '';

    document.getElementById('confirm-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('next-timer-bar').classList.add('hidden');

    // Build choices
    this.selectedAnswer  = null;
    this.questionLocked  = false;
    const wrap = document.getElementById('answers');
    wrap.innerHTML = '';

    q.choices.forEach((text, i) => {
      const row = document.createElement('div');
      row.className = 'answer-row';

      const speakBtn = document.createElement('button');
      speakBtn.className = 'choice-speak-btn';
      speakBtn.textContent = '🔊';
      speakBtn.title = 'Read this choice aloud';
      speakBtn.onclick = e => {
        e.stopPropagation();
        if (activeSpeakBtn === speakBtn) { stopActiveSpeech(); return; }
        stopActiveSpeech();

        // Wrap choice words in spans on first speak for word-by-word highlighting
        if (!btn.querySelector('.wrd')) {
          const parts = text.split(/(\s+)/);
          let choiceHTML = `<strong>${['A','B','C','D'][i]}.</strong>&nbsp;`;
          parts.forEach(w => { choiceHTML += /^\s+$/.test(w) ? w : (w ? `<span class="wrd">${formatMathText(w)}</span>` : ''); });
          btn.innerHTML = choiceHTML.trim();
        }
        const hlSpans = Array.from(btn.querySelectorAll('.wrd'));

        activeSpeakBtn = speakBtn;
        speakBtn.textContent = '⏹';

        let hlIdx = 0;
        const u = new SpeechSynthesisUtterance(convertToSpokenText(text));
        u.lang = 'en-US'; u.rate = 0.9;
        u.onboundary = e => {
          if (e.name !== 'word') return;
          btn.querySelectorAll('.wrd.hl').forEach(el => el.classList.remove('hl'));
          if (hlSpans[hlIdx]) hlSpans[hlIdx].classList.add('hl');
          hlIdx++;
        };
        u.onend = () => {
          btn.querySelectorAll('.wrd.hl').forEach(el => el.classList.remove('hl'));
          if (activeSpeakBtn === speakBtn) { speakBtn.textContent = '🔊'; activeSpeakBtn = null; }
        };
        addHighlightFallback(u, hlSpans);
        window.speechSynthesis.speak(u);
      };

      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.dataset.answer = text;
      btn.innerHTML = `<strong>${['A','B','C','D'][i]}.</strong>&nbsp;${formatMathText(text)}`;
      btn.onclick = () => this._selectChoice(text, btn);

      row.appendChild(speakBtn);
      row.appendChild(btn);
      wrap.appendChild(row);
    });

    if (!this.twin && this.currentIndex > 0 && this.currentIndex % 5 === 0) submitScorePartial();
    this.saveProgress();
    this._armQuestionListen(q);
  },

  /* HEAR IT FIRST (Marcos 10/17: "force them to hear the read aloud"): the choices stay locked until the
     question — and its hint, read right after it — has been heard to the end. Same rules as the Listen after
     a miss (_listenGate): stopping early does not count, a second tap does not restart it, and a device with
     no voice gets a wait long enough to read it, then "I read it". The small 🔊 replays it afterwards. */
  _armQuestionListen(q) {
    const lock = on => document.querySelectorAll('.answer-btn').forEach(b => { b.disabled = on; b.classList.toggle('locked-choice', on); });
    const qBtn = document.getElementById('speak-q-btn');
    const box = document.getElementById('q-listen');
    box.innerHTML = '';
    if (reviewMode) {
      lock(false);
      document.getElementById('confirm-btn').classList.remove('hidden');
      setTimeout(() => this._autoAnswer(), 300);
      return;
    }
    this.qHeard = false;
    lock(true);
    document.getElementById('confirm-btn').classList.add('hidden');
    qBtn.classList.add('hidden');                 // one thing to press
    const qt = document.getElementById('question-text');
    let html = q.q.split(/\s+/).map(w => `<span class="wrd">${formatMathText(w)}</span>`).join(' ');
    if (q.hint) html += hintBoxHTML(q.hint, this.hintShown);
    qt.innerHTML = html;
    const spans = Array.from(qt.querySelectorAll('.wrd')).filter(el => /[A-Za-z0-9+=×−]/.test(el.textContent));
    const text = convertToSpokenText(q.q + (q.hint && this.hintShown ? ' Hint: ' + q.hint : ''));
    const row = document.createElement('div');
    row.className = 'listen-row q-listen-row';
    row.innerHTML = `<button type="button" class="listen-btn" id="q-listen-btn">🔊 Listen to the question</button>` +
      `<span class="listen-note" id="q-listen-note" aria-live="polite">Listen to the end. Then you can answer.</span>`;
    box.appendChild(row);
    const btn = row.querySelector('#q-listen-btn'), note = row.querySelector('#q-listen-note');
    const heard = how => {
      if (this.qHeard || this.currentQ() !== q || !btn.isConnected) return;
      this.qHeard = true;
      if (how === 'read') logEvent('heard', { id: q.id, how });   // no voice on this device
      lock(false);
      row.remove();
      qBtn.classList.remove('hidden');
      document.getElementById('confirm-btn').classList.remove('hidden');
      // the next thing to press must be on screen (Marcos 10/10)
      const first = document.querySelector('.answer-btn');
      if (first && first.scrollIntoView) first.scrollIntoView({ block: 'center', behavior: 'smooth' });
    };
    this._listenGate(btn, note, spans, text, () => !this.qHeard, heard, { listen: '🔊 Listen to the question', again: '🔊 Listen again' });
  },

  /* 👀 WATCH (Warm-Up): a worked example. No choices. The student must hear it to the end
     (the same Listen as after a miss), then Next shows. Not scored. */
  _renderWatch(q, total) {
    document.getElementById('score-text').textContent = `${getFirstName(this.studentName)} · ${this.score}`;
    document.getElementById('progress-fill').style.width = `${(this.currentIndex / total) * 100}%`;
    this._renderStreak();
    document.getElementById('question-text').innerHTML = `<span class="watch-tag">👀 Watch and listen</span> ${formatMathText(q.title)}`;
    document.getElementById('speak-q-btn').classList.add('hidden');   // the Listen button below reads this screen
    document.getElementById('q-visual').innerHTML = '';
    document.getElementById('q-listen').innerHTML = '';   // no "Listen to the question" on a screen with no question
    document.getElementById('q-words').innerHTML = '';
    document.getElementById('answers').innerHTML = '';
    ['confirm-btn', 'next-btn', 'next-timer-bar', 'reading-timer-bar'].forEach(id => document.getElementById(id).classList.add('hidden'));
    this.selectedAnswer = null; this.questionLocked = false; this.hintShown = false; this.wordOpen = null;
    const fb = document.getElementById('feedback');
    fb.className = 'feedback-box teach-box';
    fb.style.display = 'block';
    // one line per place / idea ("\n" in the data); the voice reads it all in one go
    fb.innerHTML = q.text.split('\n').map((line, i, all) => `<div class="watch-line${i === all.length - 1 ? ' watch-sum' : ''}">${wrapWords(formatMathText(line))}</div>`).join('');
    const spans = Array.from(fb.querySelectorAll('.wrd')).filter(el => /[A-Za-z0-9+=×−]/.test(el.textContent));
    const spoken = convertToSpokenText(spans.map(el => el.textContent).join(' '));
    const small = document.createElement('button');
    small.className = 'speak-btn';
    fb.prepend(small);
    this.soakDone = true;                       // no pause here: hearing it to the end is the wait
    this.mustHear = !reviewMode;
    if (this.mustHear) this._armListen(fb, small, spans, spoken, q.id, () => { this.questionLocked = true; });
    else { small.remove(); this.questionLocked = true; }
    fb.insertAdjacentHTML('beforeend', LabV.explainHTML(q.pic));   // the worked picture, under the Listen button
    this.saveProgress();
    if (reviewMode) {
      document.getElementById('next-btn').classList.remove('hidden');
      if (reviewAutoRun) setTimeout(() => this.nextQuestion(), 1200);
    }
  },

  _selectChoice(text, btn) {
    if (this.questionLocked) return;
    document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
    this.selectedAnswer = text;
    btn.classList.add('selected');
  },

  _renderStreak() {
    const el = document.getElementById('streak-bar');
    if (this.streak >= 3) {
      el.textContent = '🔥'.repeat(Math.min(this.streak, 8)) + ` ${this.streak} in a row!`;
    } else {
      el.textContent = '';
    }
  },

  /* Next appears when the 8 second pause is over and — after a miss — the feedback has been heard */
  _maybeShowNext() {
    if (!this.soakDone || this.mustHear) return;
    const next = document.getElementById('next-btn');
    next.classList.remove('hidden');
    next.scrollIntoView({ block: 'nearest' });
  },

  /* LISTEN, THEN NEXT — the big Listen button under the feedback after a miss (see LISTEN_START_WAIT) */
  _armListen(fb, smallBtn, spans, text, qid, onHeard) {
    smallBtn.style.display = 'none';              // one thing to press
    const row = document.createElement('div');
    row.className = 'listen-row';
    row.innerHTML = `<button type="button" class="listen-btn" id="listen-btn">🔊 Listen</button>` +
      `<span class="listen-note" id="listen-note" aria-live="polite">Listen to the end. Then you can go on.</span>`;
    fb.appendChild(row);
    const btn = row.querySelector('#listen-btn'), note = row.querySelector('#listen-note');
    let play = null;
    const heard = how => {
      if (!this.mustHear || !btn.isConnected) return;
      this.mustHear = false;
      logEvent('heard', { id: qid, how });      // how: 'voice' or 'read' (no sound on the device)
      if (onHeard) onHeard();
      btn.disabled = false; btn.classList.add('heard'); btn.onclick = play;
      btn.classList.remove('playing'); btn.textContent = '🔊 Listen again';
      note.textContent = '✅ Done. You can go on.';
      this.saveProgress();
      this._maybeShowNext();
    };
    play = this._listenGate(btn, note, spans, text, () => this.mustHear, heard, { listen: '🔊 Listen', again: '🔊 Listen again' });
  },

  /* One Listen button that must be heard to the end (shared by the question, the worked example and the
     mistake). pending() = still has to be heard; heard(how) runs once, how = 'voice' | 'read'. */
  _listenGate(btn, note, spans, text, pending, heard, labels) {
    const words = text.split(/\s+/).filter(Boolean).length;
    const clearHl = () => spans.forEach(el => el.classList.remove('hl'));
    const idle = () => { btn.classList.remove('playing'); btn.textContent = pending() ? labels.listen : labels.again; };

    // This device will not speak: wait long enough to read it, then an "I read it" button
    const noVoice = () => {
      clearHl();
      if (!pending()) { idle(); return; }
      btn.classList.remove('playing'); btn.disabled = true; btn.textContent = '⏳ Read it first…';
      note.textContent = 'No sound here. Read it. Then tap the button.';
      setTimeout(() => {
        if (!pending() || !btn.isConnected) return;
        btn.disabled = false; btn.textContent = '✅ I read it';
        btn.onclick = () => heard('read');
      }, listenDwellMs(words));
    };

    const play = () => {
      if (listenJob && !listenJob.settled && listenJob.btn === btn) return;   // a second tap must not cut the voice off
      stopActiveSpeech();
      if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') { noVoice(); return; }
      const job = listenJob = { btn, settled: false, started: false, startTimer: null, watchdog: null };
      const settle = () => { job.settled = true; clearTimeout(job.startTimer); clearTimeout(job.watchdog); clearHl(); };
      const finish = ok => {
        if (job.settled) return;
        settle();
        if (!btn.isConnected) return;
        if (ok && pending()) { heard('voice'); return; }
        idle();
        if (!ok && pending()) note.textContent = 'It stopped early. Tap Listen. Hear it to the end.';
      };
      job.abort = () => finish(false);
      btn.classList.add('playing'); btn.textContent = '🔊 Listening…';
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US'; u.rate = 0.9;
      let hlIdx = 0;
      u.onstart = () => {
        job.started = true;
        // Some voices never report that they finished. Generous on purpose (about 80 words a minute),
        // so it can only fire after a real voice would be done.
        job.watchdog = setTimeout(() => finish(true), words * 750 + 6000);
      };
      u.onboundary = e => {
        if (e.name !== 'word') return;
        clearHl();
        if (spans[hlIdx]) spans[hlIdx].classList.add('hl');
        hlIdx++;
      };
      u.onend = () => finish(true);
      u.onerror = () => { if (job.settled) return; settle(); noVoice(); };
      addHighlightFallback(u, spans);
      job.startTimer = setTimeout(() => {
        if (job.started || job.settled) return;      // no sound started: this device cannot speak
        settle(); window.speechSynthesis.cancel(); noVoice();
      }, LISTEN_START_WAIT);
      window.speechSynthesis.speak(u);
    };
    btn.onclick = play;
    return play;
  },

  /* ── CONFIRM ANSWER ── */
  confirmAnswer() {
    if (typeof readingConfirm === 'function' && readingConfirm(this, this.currentQ())) return;   // 🔎 reading-ui.js
    if (!this.selectedAnswer) return;
    this.questionLocked = true;

    const q = this.currentQ();
    const correct = this.selectedAnswer === q.answer;
    const isStep = q.kind === 'step';
    const isPre  = q.kind === 'pre';
    // Every fact asked (Show what you know or Your turn) updates this student's list; the same wrong pick
    // as before is a REPEAT (Marcos 10/17: "see if they repeat their mistakes").
    const { repeat } = noteFact(this.studentName, q, this.selectedAnswer, correct);
    this.lastRepeat = repeat;
    if (repeat) logEvent('repeat', { id: q.id, f: recKey(recordOf(q)), pick: this.selectedAnswer });
    if (!correct && q.mine) logEvent('mine', { id: q.id, f: recKey(recordOf(q)), pick: this.selectedAnswer });

    if (isStep) {
      // A step is teaching, not a question: it never changes the score and is not a "missed
      // question". It rides in the event log so the dashboard can show which step tripped whom.
      logEvent('step', Object.assign({ id: q.id, ok: correct }, correct ? {} : { pick: this.selectedAnswer }));
    } else if (isPre) {
      // Show what you know: not part of the score. All right = the lesson is skipped (see nextQuestion).
      this.preTotal++;
      if (correct) this.preRight++;
      logEvent('pre', Object.assign({ id: q.id, ok: correct }, correct ? {} : { pick: this.selectedAnswer }));
    } else if (correct) {
      this.score++;
      this.streak++;
      this.lastMissed = false;
    } else {
      this.streak = 0;
      this.lastMissed = true;
      this.missedQuestions.push({ id: q.id, q: q.q, skill: q.skill || (window.SKILLS || {})[q.id], yourAnswer: this.selectedAnswer, correct: q.answer, explanation: q.explanation || '', mine: !!q.mine, repeat });
    }

    // Practice A, Practice B and the Review teach: the right answer + why, every time.
    // The Test and its retake: mark only the student's own pick — the right
    // answer is never shown (the teacher's review mode still sees it).
    const teach = teaches(this.currentForm) || reviewMode;
    document.querySelectorAll('.answer-btn').forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.answer === this.selectedAnswer) btn.classList.add(correct ? 'correct' : 'incorrect');
      else if (teach && btn.dataset.answer === q.answer) btn.classList.add('correct');
    });

    const fb = document.getElementById('feedback');
    fb.className = 'feedback-box ' + (correct ? 'correct' : 'incorrect');
    fb.style.display = 'block';
    // A wrong answer names the mistake (Marcos 10/10): each wrong choice stands for one slip
    const slip0 = !correct && teach && q.slips ? q.slips[this.selectedAnswer] : null;
    const slip = slip0 && this.lastRepeat ? { ...slip0, say: `You picked ${this.selectedAnswer} on this one before, too. ${slip0.say}` } : slip0;
    fb.innerHTML = !teach
      ? (correct ? `✅ <strong>Correct!</strong>` : `❌ <strong>Not quite.</strong>`)
      : correct
        ? `✅ <strong>Correct!</strong>${q.mine ? ' You fixed one you missed before!' : ''}<br>${formatMathText(q.explanation)}`
        // After a miss the screen stays short (Marcos 10/10 — too much on a page gets lost): the mistake,
        // the right answer, then the worked picture. The general explanation is only the fallback for a
        // wrong choice with no mistake note; a right answer still gets it.
        : `❌ <strong>Not quite.</strong>${slip ? ` <span class="slip-note">${formatMathText(slip.say)}</span>` : ''} The correct answer is: <strong>${formatMathText(q.answer)}</strong>${slip ? '' : `<br>${formatMathText(q.explanation)}`}`;

    // Feedback read-aloud button
    const fbSpeakBtn = document.createElement('button');
    fbSpeakBtn.className = 'speak-btn';
    fbSpeakBtn.style.cssText = 'float:left;margin:0 10px 4px 0;';
    fbSpeakBtn.textContent = '🔊';
    // Wrap feedback words in spans for word-by-word highlighting (skip emoji-only tokens)
    fb.innerHTML = wrapWords(fb.innerHTML);
    const fbSpans = Array.from(fb.querySelectorAll('.wrd')).filter(s => /[A-Za-z0-9+=×−]/.test(s.textContent))   /* keep + − = × so they are read aloud */;
    const spokenFb = convertToSpokenText(fbSpans.map(s => {
      const gap = s.nextSibling && s.nextSibling.nodeType === 3 && /\u00a0{2,}/.test(s.nextSibling.textContent);
      return s.textContent + (gap ? ',' : '');
    }).join(' '));
    fbSpeakBtn.onclick = () => {
      if (activeSpeakBtn === fbSpeakBtn) { stopActiveSpeech(); return; }
      stopActiveSpeech();
      activeSpeakBtn = fbSpeakBtn; fbSpeakBtn.textContent = '⏹';
      const u = new SpeechSynthesisUtterance(spokenFb);
      u.lang = 'en-US'; u.rate = 0.9;
      let hlIdx = 0;
      u.onboundary = e => {
        if (e.name !== 'word') return;
        fbSpans.forEach(el => el.classList.remove('hl'));
        if (fbSpans[hlIdx]) fbSpans[hlIdx].classList.add('hl');
        hlIdx++;
      };
      u.onend = () => {
        fbSpans.forEach(el => el.classList.remove('hl'));
        fbSpeakBtn.textContent = '🔊'; if (activeSpeakBtn === fbSpeakBtn) activeSpeakBtn = null;
      };
      addHighlightFallback(u, fbSpans);
      window.speechSynthesis.speak(u);
    };
    fb.prepend(fbSpeakBtn);

    // After a miss the student must HEAR the mistake and the right answer before Next shows
    this.mustHear = teach && !correct && !reviewMode && !isPre;
    if (this.mustHear) this._armListen(fb, fbSpeakBtn, fbSpans, spokenFb, q.id);

    // Review: show the worked pictures (bar model · rectangle · columns)
    if (teach) fb.insertAdjacentHTML('beforeend', LabV.explainHTML(q.explain));

    document.getElementById('confirm-btn').classList.add('hidden');
    document.getElementById('score-text').textContent = `${getFirstName(this.studentName)} · ${this.score}`;
    this._renderStreak();
    this.saveProgress();
    this.startNextTimer();
  },

  /* ── NEXT QUESTION ── */
  nextQuestion() {
    stopActiveSpeech();
    const was = this.currentQ();
    this.currentIndex++;
    // The end of Show what you know: every one right → the lesson is skipped (it counts as passed)
    const now = this.currentQ();
    if (was && was.kind === 'pre' && (!now || now.kind !== 'pre') && this.preTotal > 0 && this.preRight === this.preTotal) {
      this.testedOut = true;
      this._finishSession();
      return;
    }
    if (this.currentIndex >= this.currentBank.length) {
      this._finishSession();
    } else {
      this.renderQuestion();
    }
  },

  /* ── FINISH SESSION ── */
  _finishSession() {
    this.twin = null;
    this.finishedAt = new Date().toISOString(); logEvent('finish', this.testedOut ? { out: true } : {});
    this.stopTimerEngine();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(RNDQ_SESSION_ID_KEY);

    const { score, total } = sessionTotals();      // watch, step and Show-what-you-know items are not in a lesson's score
    const pct   = total ? Math.round((score / total) * 100) : 0;
    const date  = new Date();
    const form  = this.currentForm;
    const wasPassed = !reviewMode && !SHARE_MODE && passed(this.studentName, form);

    const scores   = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
    const prevDone = (reviewMode || SHARE_MODE) ? 0 : scores.filter(s => s.name === this.studentName && s.form === form && s.done && !s.restored).length;
    const attemptNum = prevDone + 1;
    this.currentAttemptNum = attemptNum;

    if (!reviewMode && !SHARE_MODE) {
      scores.push({
        name:    this.studentName,
        form,
        attempt: attemptNum,
        score,
        total,
        pct,
        testedOut: !!this.testedOut,
        elapsed: this.timerSeconds,
        date:    date.toLocaleDateString(),
        time:    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        done:    true
      });
      localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
    }

    submitScoreFinal();
    sendProgress(this.studentName);

    const pass = pct >= passPct(form);
    const need = Math.ceil(passPct(form) / 100 * total);
    // the next lesson on the route (it may be in another strand: math and reading take turns)
    const nextId = nextStep(this.studentName, planStrands(this.studentName));
    const msg = this.testedOut ? '🎯 You already know this! On to the next lesson.'
      : pass ? (wasPassed ? '✅ Passed again. Nice practice!' : `✅ You passed ${FORM_NAMES[form]}!${nextId ? ' The next lesson is open.' : ''}`)
      : wasPassed ? `This try: ${score} of ${total}. You already passed ${FORM_NAMES[form]}, so it stays passed. Practice it again, or go on.`
      : `Get ${need} of ${total} to pass. Do it again — you will get ${LESSONS[form] && LESSONS[form].reading ? 'new stories' : 'new numbers'}.`;

    this.show('end-screen');

    const reviewNextBtn = document.getElementById('review-next-btn');
    if (reviewNextBtn) reviewNextBtn.classList.toggle('hidden', !reviewMode);
    document.getElementById('end-title').textContent = this.testedOut
      ? `🎯 ${FORM_NAMES[form]} — Skipped`
      : `${pass ? '🎉' : '💪'} ${FORM_NAMES[form]} — ${pass ? 'Passed' : 'Not yet'}`;

    document.getElementById('final-score-sub').textContent = SHARE_MODE
      ? `${FORM_NAMES[form]} · Guest view — this score was not saved`
      : `${FORM_NAMES[form]}${this.testedOut ? ' · Skipped' : ''}${attemptNum > 1 ? ' · Try ' + attemptNum : ''} · ${this.studentName}`;
    document.getElementById('final-msg').textContent = msg;
    // WHAT TO KEEP PRACTICING (Marcos 10/20: "I want them to know what they need help in"): what this lesson
    // works on, the skills this try missed, and (reading) the kind of mistake made most
    const pbox = document.getElementById('practice-box');
    if (pbox) {
      const counts = {};
      this.missedQuestions.forEach(m => { const k = kidSkill(m.skill); if (k) counts[k] = (counts[k] || 0) + 1; });
      const lines = [];
      if (LESSONS[form] && LESSONS[form].goal) lines.push(`This lesson helps you ${LESSONS[form].goal}.`);
      const skills = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      if (skills.length) lines.push(`Keep practicing ${skills.map(([k, n]) => `${k} (${n} missed)`).join(', ')}.`);
      else if (!this.testedOut) lines.push('You did not miss any questions. Great work!');
      const kw = typeof kindTip === 'function' ? kindTip(this.kindsSeen) : '';
      if (kw) lines.push(kw);
      document.getElementById('practice-text').textContent = lines.join(' ');
      pbox.classList.toggle('hidden', !lines.length);
    }

    const pctEl = document.getElementById('final-percent');
    pctEl.innerHTML = `${score}/${total}<br><small style="font-size:0.5em;color:${pass ? 'var(--correct)' : 'var(--danger)'};">${pct}% · ${pass ? 'Passed' : `${Math.round(passPct(form))}% passes`}</small>`;
    setTimeout(() => pctEl.classList.add('revealed'), 50);

    // The buttons say where they go (Marcos 10/14); the student stays signed in.
    const nextBtn = document.getElementById('end-next-btn');
    const redoBtn = document.getElementById('end-redo-btn');
    const backBtn = document.getElementById('end-again-btn');
    // Next Lesson whenever the next lesson is open (after a pass, or after a practice redo of a lesson passed before)
    const canNext = !reviewMode && nextId && nextId !== form && !lessonWait(this.studentName, nextId);
    if (nextBtn) {
      nextBtn.classList.toggle('hidden', !canNext);
      if (canNext) {
        nextBtn.innerHTML = `➡️ Next Lesson: ${FORM_NAMES[nextId]}<span class="form-btn-sub">Start it now. You stay signed in.</span>`;
        nextBtn.onclick = () => { stopConfetti(); this.attemptStart(nextId); };
      }
    }
    if (redoBtn) {
      redoBtn.classList.toggle('hidden', reviewMode || pass);
      redoBtn.onclick = () => { stopConfetti(); this.attemptStart(form); };
    }
    if (backBtn) backBtn.classList.toggle('hidden', reviewMode);

    const missedSec = document.getElementById('missed-section');
    if (this.missedQuestions.length) {
      missedSec.classList.remove('hidden');
      document.getElementById('missed-items').innerHTML =
        this.missedQuestions.map(m =>
          `<div class="missed-item">
            <div class="mi-label">${questionLabel(m.id)} · ${kidSkill(m.skill)}${m.mine ? ' · ⭐ missed before' : ''}${m.repeat ? ' · same mistake again' : ''}</div>
            <div style="margin:3px 0;">${formatMathText(m.q)}</div>
            <div>Your answer: <span style="color:var(--danger);">${formatMathText(m.yourAnswer)}</span> &nbsp; ✅ Correct: <strong style="color:var(--correct);">${formatMathText(m.correct)}</strong></div>
            ${m.explanation ? `<div class="mi-why">💡 ${formatMathText(m.explanation)}</div>` : ''}
          </div>`
        ).join('');
    } else {
      missedSec.classList.add('hidden');
    }

    if (pass) startConfetti(pct);
  },

  /* 📖 Word help: draw the buttons (and the open card) under the question */
  _renderWords() {
    const box = document.getElementById('q-words');
    if (!box) return;
    const q = this.currentQ();
    // Warm-Up steps get no word help: a card could hand over the step's answer ("how many more" → subtract)
    box.innerHTML = q && wordHelp(this.currentForm) && !q.kind ? wordChipsHTML(q, this.wordOpen) : '';
  },

  /* Tap a word button → its card opens (tap again → closes). Nothing is read until its 🔊 is tapped. */
  showWord(key) {
    const q = this.currentQ();
    if (!q) return;
    stopActiveSpeech();
    const opening = this.wordOpen !== key;
    this.wordOpen = opening ? key : null;
    if (opening) { logEvent('word', { id: q.id, w: key }); this.saveProgress(); }
    this._renderWords();
    const focus = document.querySelector(opening ? '#q-words .word-speak-btn' : `#q-words .word-chip`);
    if (focus) focus.focus();
  },

  /* ── SPEAK QUESTION ── */
  /* 💡 Need a hint? → open the hint box (not read aloud until its own 🔊 is tapped) */
  showHint() {
    const q = this.currentQ();
    const wrap = document.querySelector('#question-text .hint-wrap');
    if (!q || !q.hint || !wrap) return;
    this.hintShown = true;
    // Hint use is saved in the attempt's event log → the dashboard shows who
    // opened which hint (Marcos 10/8: "add hint tracking to dashboard")
    logEvent('hint', { id: q.id });
    this.saveProgress();
    wrap.outerHTML = hintBoxHTML(q.hint, true);
    const btn = document.querySelector('#question-text .hint-speak-btn');
    if (btn) btn.focus();
  },

  speakQuestion() {
    const qBtn = document.getElementById('speak-q-btn');
    const rq = this.currentQ();
    if (rq && rq.story && typeof speakEl === 'function') { speakEl(qBtn, document.getElementById('question-text')); return; }
    if (activeSpeakBtn === qBtn) { stopActiveSpeech(); return; }
    stopActiveSpeech();
    activeSpeakBtn = qBtn;
    qBtn.textContent = '⏹';

    const q = this.currentQ();
    if (!q) return;

    // the hint box is read aloud after the question (class reads mostly at Level 1)
    // the question only — a hint is read by its own 🔊, and only after the student opens it
    const spokenText = convertToSpokenText(q.q);
    const qtEl = document.getElementById('question-text');
    const originalWords = q.q.split(/\s+/);

    let qHTML = '';
    originalWords.forEach((w, i) => {
      qHTML += `<span class="wrd" id="wrd${i}">${formatMathText(w)}</span> `;
    });
    if (q.hint) qHTML += hintBoxHTML(q.hint, this.hintShown);
    qtEl.innerHTML = qHTML;

    const hlSpans = originalWords.map((_, i) => document.getElementById('wrd' + i));
    let hlIdx = 0;

    const u = new SpeechSynthesisUtterance(spokenText);
    u.lang = 'en-US'; u.rate = 0.92;

    u.onboundary = e => {
      if (e.name !== 'word') return;
      document.querySelectorAll('#question-text .wrd.hl').forEach(el => el.classList.remove('hl'));
      if (hlSpans[hlIdx]) hlSpans[hlIdx].classList.add('hl');
      hlIdx++;
    };
    u.onend = () => {
      document.querySelectorAll('#question-text .wrd.hl').forEach(el => el.classList.remove('hl'));
      if (activeSpeakBtn === qBtn) { qBtn.textContent = '🔊'; activeSpeakBtn = null; }
    };
    addHighlightFallback(u, hlSpans.filter(Boolean));
    window.speechSynthesis.speak(u);
  },

  /* ── SCORES ── */
  showScores(autoShow = false) {
    this.show('scoreboard-screen');
    const teacherBtns = document.getElementById('teacher-score-btns');
    if (teacherBtns) teacherBtns.style.display = this.studentName === 'Mr. O (Teacher)' ? 'flex' : 'none';
    if (!reviewMode) this._startScoreLock(autoShow ? 60 : 0);

    const all    = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
    const listEl = document.getElementById('score-list');
    const noEl   = document.getElementById('no-scores-msg');

    if (!all.length) {
      listEl.innerHTML = '';
      noEl.style.display = 'block';
      return;
    }
    noEl.style.display = 'none';

    const forms = FORMS;

    const summaryCards = forms.map(form => {
      const best = all.filter(s => s.form === form && s.done)
        .reduce((b, r) => (!b || r.pct > b.pct) ? r : b, null);
      if (!best) {
        return `<div class="sb-summary-card">
          <div class="sb-summary-label">${FORM_NAMES[form]}</div>
          <div class="sb-summary-grade" style="color:#ccc;">—</div>
          <div class="sb-summary-score" style="color:#aaa;">Not yet completed</div>
        </div>`;
      }
      const grade = letterGrade(best.pct);
      const gc = best.pct>=90?'#27ae60':best.pct>=80?'#2980b9':best.pct>=70?'#f39c12':best.pct>=60?'#e67e22':'#e74c3c';
      return `<div class="sb-summary-card">
        <div class="sb-summary-label">${FORM_NAMES[form]}</div>
        <div class="sb-summary-grade" style="color:${gc};">${grade}</div>
        <div class="sb-summary-score">${best.score}/${best.total} · ${best.pct}%</div>
        <div class="sb-summary-attempt">Best of ${all.filter(s=>s.form===form&&s.done).length} attempt(s)</div>
      </div>`;
    }).join('');

    const details = forms.map(form => {
      const rows = all.filter(s => s.form === form && s.done);
      if (!rows.length) return '';
      const att1 = rows.filter(r => (r.attempt||1) === 1);
      const att2 = rows.filter(r => (r.attempt||1) >= 2);

      const buildTable = (attempts, label, headerColor) => {
        if (!attempts.length) return '';
        return `<div style="margin-bottom:14px;">
          <div style="display:inline-block;background:${headerColor};color:white;
                      font-size:0.72rem;font-weight:bold;letter-spacing:1px;
                      text-transform:uppercase;border-radius:6px;padding:3px 10px;
                      margin-bottom:6px;">${label}</div>
          <table class="scoreboard-table">
            <thead><tr><th>Score</th><th>%</th><th>Grade</th><th>Time</th><th>Date</th></tr></thead>
            <tbody>${attempts.map(r => {
              const grade = letterGrade(r.pct);
              const cls   = r.pct>=90?'score-good':r.pct>=70?'score-ok':'score-bad';
              return `<tr>
                <td>${r.score}/${r.total}</td>
                <td class="${cls}">${r.pct}%</td>
                <td class="${cls}" style="font-weight:800;">${grade}</td>
                <td>${r.time||'—'}</td>
                <td>${r.date}</td>
              </tr>`;
            }).join('')}</tbody>
          </table>
        </div>`;
      };

      return `<h3 style="color:var(--primary);margin:22px 0 8px;border-bottom:2px solid #e0e0e0;padding-bottom:6px;">${FORM_NAMES[form]}</h3>
        ${buildTable(att1,'Attempt 1','#5b3cc4')}
        ${buildTable(att2,'Attempt 2','#f39c12')}`;
    }).join('');

    listEl.innerHTML = `
      <div style="margin-bottom:6px;font-size:0.8rem;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;">Your Best Scores</div>
      <div class="sb-summary-row">${summaryCards}</div>
      <div style="margin-top:24px;">${details}</div>`;
  },

  _startScoreLock(secs) {
    const bar     = document.getElementById('sb-lock-bar');
    const fill    = document.getElementById('sb-lock-fill');
    const count   = document.getElementById('sb-lock-count');
    const buttons = document.querySelectorAll('#scoreboard-screen button:not(#sb-lock-bar button)');
    if (!secs || secs <= 0) { if (bar) bar.classList.add('hidden'); return; }
    bar.classList.remove('hidden');
    fill.style.width = '100%';
    count.textContent = secs;
    buttons.forEach(b => { b.disabled = true; b.style.opacity = '0.4'; });
    let remaining = secs;
    const iv = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      fill.style.width = (remaining / secs * 100) + '%';
      if (remaining <= 0) {
        clearInterval(iv);
        bar.classList.add('hidden');
        buttons.forEach(b => { b.disabled = false; b.style.opacity = '1'; });
      }
    }, 1000);
  },

  clearScores() {
    const panel = document.getElementById('clear-confirm-panel');
    panel.classList.remove('hidden');
    document.getElementById('clear-pin-input').value = '';
    document.getElementById('clear-pin-error').textContent = '';
    setTimeout(() => document.getElementById('clear-pin-input').focus(), 80);
  },

  confirmClearScores() {
    const pin = document.getElementById('clear-pin-input').value.trim();
    if (pin === '9377') {
      localStorage.removeItem(SCORES_KEY);
      document.getElementById('clear-confirm-panel').classList.add('hidden');
      this.showScores();
    } else {
      document.getElementById('clear-pin-error').textContent = '❌ Incorrect PIN. Try again.';
      document.getElementById('clear-pin-input').value = '';
      document.getElementById('clear-pin-input').focus();
    }
  },

  cancelClearScores() {
    document.getElementById('clear-confirm-panel').classList.add('hidden');
  },

  printResults() {
    const all = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
    if (!all.length) { alert('No scores to print yet!'); return; }
    const rows = FORMS.flatMap(form =>
      all.filter(s => s.form === form).map(r => {
        const cc  = r.pct >= 80 ? 'good' : r.pct >= 60 ? 'ok' : 'bad';
        const att = r.attempt || 1;
        const attStyle = att === 1
          ? 'background:#d35400;color:white;padding:2px 7px;border-radius:4px;font-size:0.8em;'
          : 'background:#f39c12;color:#5a3000;padding:2px 7px;border-radius:4px;font-size:0.8em;';
        return `<tr>
          <td>${r.name||'—'}</td>
          <td>${FORM_NAMES[r.form] || 'Form ' + r.form}</td>
          <td><span style="${attStyle}">Attempt ${att}</span></td>
          <td>${r.score}/${r.total}</td>
          <td class="${cc}">${r.pct}%</td>
          <td>${r.time||'—'}</td>
          <td>${r.date}</td>
        </tr>`;
      })
    ).join('');
    const html = `<html><head><title>The Lab Scores</title>
      <style>body{font-family:Arial;padding:20px;}h2{color:#5b3cc4;}
      table{width:100%;border-collapse:collapse;margin-top:12px;}
      th,td{border:1px solid #ccc;padding:8px 12px;text-align:center;}
      th{background:#5b3cc4;color:white;}
      .good{color:green;font-weight:bold;}.ok{color:orange;font-weight:bold;}.bad{color:red;font-weight:bold;}</style>
      </head><body>
      <h2>🧪 The Lab — Score Report</h2>
      <p>Printed: ${new Date().toLocaleString()}</p>
      <table><tr><th>Name</th><th>Form</th><th>Attempt</th><th>Score</th><th>%</th><th>Time</th><th>Date</th></tr>${rows}</table>
      </body></html>`;
    const w = window.open('', '_blank');
    w.document.write(html); w.document.close(); w.print();
  },

  /* ── END SCREEN ACTIONS ── */
  tryAgain() {
    stopConfetti();
    this.timerSeconds = 0;
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.add('hidden');
    document.getElementById('student-login-panel').classList.remove('hidden');
    applyFormLocks(this.studentName);
    this.checkResume();
  },

  /* Marcos 10/14: "Back to …" keeps a signed-in student signed in; only Sign Out starts over. */
  backToMenu() {
    if (!this.studentName) { this.restart(); return; }
    this.tryAgain();
  },

  restart() {
    stopConfetti();
    this.stopTimerEngine();
    this.timerSeconds   = 0;
    this.studentName    = '';
    loggedInName        = '';
    unlockedForms       = new Set();
    retakeUnlocked      = false;
    document.getElementById('name-select').value = '';
    document.getElementById('student-pin').value = '';
    document.getElementById('pin-section').classList.add('hidden');
    document.getElementById('form-select-section').classList.add('hidden');
    document.getElementById('resume-container').classList.add('hidden');
    document.getElementById('login-error').textContent = '';
    const loginCard = document.getElementById('login-step-card');
    if (loginCard) loginCard.classList.remove('hidden');
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.remove('hidden');
    document.getElementById('student-login-panel').classList.add('hidden');
  },

  /* ── GLOBAL PIN MODAL ── */
  showPinModal(title, msg, onSuccess) {
    pinModalCallback = onSuccess;
    document.getElementById('pin-modal-title').textContent = title;
    document.getElementById('pin-modal-msg').textContent   = msg;
    document.getElementById('pin-modal-input').value       = '';
    document.getElementById('pin-modal-error').textContent = '';
    document.getElementById('pin-modal').classList.remove('hidden');
    setTimeout(() => document.getElementById('pin-modal-input').focus(), 80);
  },

  confirmPinModal() {
    const pin = document.getElementById('pin-modal-input').value.trim();
    if (pin === '9377') {
      document.getElementById('pin-modal').classList.add('hidden');
      const cb = pinModalCallback;
      pinModalCallback = null;
      if (cb) cb();
    } else {
      document.getElementById('pin-modal-error').textContent = '❌ Incorrect PIN. Try again.';
      document.getElementById('pin-modal-input').value = '';
      document.getElementById('pin-modal-input').focus();
    }
  },

  cancelPinModal() {
    document.getElementById('pin-modal').classList.add('hidden');
    pinModalCallback = null;
  }
};

/* ── VISIBILITY / UNLOAD ─────────────────────────────── */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (!app.timerOn) return;
    tabSwitchCount++;
    logEvent('leave');
    app.stopTimerEngine();
    app.saveProgress();
    if (app.instructInterval) { clearInterval(app.instructInterval); }
    app._wasTimerRunning = true;
  } else {
    if (!app._wasTimerRunning) return;
    app._wasTimerRunning = false;
    logEvent('return');
    const warnBanner = document.getElementById('tab-warning-banner');
    if (warnBanner) warnBanner.classList.remove('hidden');
    app.stopTimerEngine();
    app.timerInterval = setInterval(() => {
      app.timerSeconds++;
      app._tickTimer();
      if (app.timerSeconds % 30 === 0) app.saveProgress();
    }, 1000);
    app.timerOn = true;
  }
});

window.addEventListener('beforeunload', () => {
  if (app.timerOn) logEvent('close');
  if (app.timerOn) app.saveProgress();
});

/* ── CONFETTI ────────────────────────────────────────── */
const canvas = document.getElementById('confetti-canvas');
const ctx    = canvas.getContext('2d');
let particles = [], animId = null;

function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();

function startConfetti(pct) {
  particles = [];
  let count, cols;
  if (pct === 100) {
    count = 300;
    cols = ['#FFD700','#FFA500','#FFFACD','#f39c12','#ffffff','#FFD700'];
  } else if (pct >= 90) {
    count = 220;
    cols = ['#d35400','#f39c12','#2ecc71','#3498db','#9b59b6','#e74c3c','#FFD700'];
  } else if (pct >= 80) {
    count = 160;
    cols = ['#d35400','#f39c12','#2ecc71','#3498db','#e74c3c','#9b59b6'];
  } else {
    count = 80;
    cols = ['#d35400','#f39c12','#7f8c8d','#95a5a6','#bdc3c7'];
  }
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      c: cols[~~(Math.random() * cols.length)],
      s: Math.random() * 5 + 3,
      d: Math.random() * 5 + 2,
      r: Math.random() * Math.PI * 2
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r += 0.05);
    ctx.fillStyle = p.c; ctx.fillRect(-p.s/2, -p.s/2, p.s, p.s);
    ctx.restore();
    p.y += p.d; p.x += Math.sin(p.r) * 1.5;
    if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
  });
  animId = requestAnimationFrame(animateConfetti);
}

function stopConfetti() {
  if (animId) cancelAnimationFrame(animId);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  animId = null;
}

/* ── BOOT ────────────────────────────────────────────── */
app.init();

/* ── CLOSED-TO-STUDENTS LOCK ────────────────────────── */
(function applyReviewLock() {
  if (SHARE_MODE || ANY_OPEN) return;   // any part open → students can get in
  const btn = document.querySelector('.lgs-btn');
  if (!btn) return;
  btn.disabled = true;
  btn.classList.add('locked');
  btn.textContent = '🔒 Not Open Yet';
  const note = document.createElement('p');
  note.className = 'locked-note';
  note.textContent = "Mr. O will let you know when this is ready!";
  btn.insertAdjacentElement('afterend', note);
})();
