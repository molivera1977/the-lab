/* ═══════════════════════════════════════════════════════
   📖 QPS FEEDS THE LAB (Marcos 10/20/2026: "go with my idea but allow QPS results to feed into the LAB")
   QPS (the QPS Literacy Hub) stays its own site: the phonics stops and Words in context. The Lab only SHOWS a
   student's QPS progress at the end of their plan, read aloud. Nothing here opens QPS or writes a row.
   QPS's rules, kept the same here (qps-literacy-hub/login.js and practice.js):
   - a pass = a Check at 80% or better; two passes on a stop move the student on to the next stop by themselves
     (Marcos 10/21: "Let's allow them to move without me but flag me to remind to test them"), and that stop
     waits for Mr. O's check; after the last stop, two passes = ready for Mr. O's check
   - where a student STARTS = QPS's TRACKS list; where they are NOW = their progress: ONE row per student on the
     sheet's 'qps-progress' tab ("stop=6;passes=1;test=5|t=<ms>"), kept on the device too (qps_progress_v1:<name>);
     the newer one counts, and a hand move in TRACK_SINCE beats an older row
   - stars: a Check's stars are 3 at 90%+, 2 at 70%+, else 1; a stop keeps its best (practice.js)
   What the Lab reads: QPS's login.js (TRACKS, TRACK_SINCE), the sheet (qps-progress, then the stop's own tab for how
   many Checks and the best one, or qps-levels for a Words in context student) and this Chromebook's QPS records.
   The sheet cannot be reached: the card shows this Chromebook's records.
═══════════════════════════════════════════════════════ */
const QPS_READY = 80;       // a passed Check (QPS's PASS)
const QPS_PASSES = 2;       // passes on a stop to move on (QPS's PASSES_NEEDED)
const QPS_LEVELS = 4;       // Words in context levels (QPS's MAX_LEVEL)
const QPS_STOP_IDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9a', '9b', '9c', '10'];   // QPS's stops, in order
const QPS_STOP_NAMES = { '1': 'Letter sounds', '2': 'Short vowels', '3': 'sh ch th', '4': 'Blends', '5': 'Silent e', '6': 'Bossy R',
  '7': 'Tricky letters', '8': 'Vowel teams', '9a': 'Two-part words', '9b': 'Three-part words', '9c': 'Four-part words', '10': 'Word parts' };
const qpsStarsFor = pct => (pct >= 90 ? 3 : pct >= 70 ? 2 : 1);

let qpsTracks = null, qpsSince = {}, qpsTracksTried = false;
async function loadQpsTracks() {
  if (qpsTracksTried) return qpsTracks;
  qpsTracksTried = true;
  try {
    const src = await fetch('../qps-literacy-hub/login.js', { cache: 'no-store' }).then(r => (r.ok ? r.text() : ''));
    const block = (/const TRACKS = \{([\s\S]*?)\};/.exec(src) || [])[1];
    if (!block) return null;
    qpsTracks = {};
    block.split('\n').forEach(line => {
      const m = /^\s*"([^"]+)":\s*(?:"([^"]+)"|null)/.exec(line);
      if (m) qpsTracks[m[1]] = m[2] || null;
    });
    qpsSince = {};
    ((/const TRACK_SINCE = \{([\s\S]*?)\};/.exec(src) || [])[1] || '').split('\n').forEach(line => {
      const m = /^\s*"([^"]+)":\s*(\d+)/.exec(line);
      if (m) qpsSince[m[1]] = Number(m[2]);
    });
  } catch (e) { qpsTracks = null; }
  return qpsTracks;
}

function qpsParseProgress(form) {
  const [pairs, t] = String(form || '').split('|t=');
  const p = { stop: '', passes: 0, test: [], t: Number(t) || 0 };
  String(pairs || '').split(';').forEach(kv => {
    const [k, v] = kv.split('=');
    if (k === 'stop') p.stop = v || '';
    if (k === 'passes') p.passes = Math.max(0, Math.min(QPS_PASSES, Number(v) || 0));
    if (k === 'test') p.test = String(v || '').split(',').filter(Boolean);
  });
  return p;
}
function qpsDevice(key) {
  try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (e) { return null; }
}

/* What the sheet said, per student: { progress, stop, checks, best } or { comp: true, level, t }.
   Missing = not read yet, or the sheet could not be reached. */
const qpsSheet = {};

/* Their progress: the newer of this Chromebook's and the sheet's (QPS keeps this Chromebook's unless the sheet's is newer) */
function qpsProgressOf(name) {
  const d = qpsDevice('qps_progress_v1:' + name);
  const dev = d && d.stop ? { stop: String(d.stop), passes: Math.max(0, Math.min(QPS_PASSES, Number(d.passes) || 0)),
    test: Array.isArray(d.test) ? d.test.map(String) : [], t: Number(d.t) || 0 } : null;
  const sh = qpsSheet[name] && qpsSheet[name].progress;
  return sh && (!dev || sh.t > dev.t) ? sh : dev;
}
/* The stop they work on now, and their progress if it counts (QPS's effectiveStop) */
function qpsNow(name) {
  const start = qpsTracks ? qpsTracks[name] : undefined;
  if (!start || !QPS_STOP_IDS.includes(start)) return { stop: start, prog: null };
  const p = qpsProgressOf(name);
  const prog = p && QPS_STOP_IDS.includes(p.stop) && p.t > (qpsSince[name] || 0) ? p : null;
  return { stop: prog ? prog.stop : start, prog };
}

/* At sign-in, in the background: the sheet's side of it */
async function loadQpsFeed(name) {
  await loadQpsTracks();
  if (!qpsTracks || seesAll(name)) return;
  const start = qpsTracks[name];
  if (start === 'comp') {
    const rows = await readTab('qps-levels');
    if (rows === null) return;
    const row = rows.find(r => r.name === name);
    const [pairs, t] = String((row && row.form) || '').split('|t=');
    qpsSheet[name] = { comp: true, level: Number((/(?:^|;)context=(\d+)/.exec(pairs || '') || [])[1]) || 0, t: Number(t) || 0 };
    return;
  }
  if (!QPS_STOP_IDS.includes(start)) return;
  const progRows = await readTab('qps-progress');
  if (progRows === null) return;
  const row = progRows.find(r => r.name === name);
  const p = row ? qpsParseProgress(row.form) : null;
  const entry = { progress: p && p.stop ? p : null };
  qpsSheet[name] = entry;
  const stop = qpsNow(name).stop;
  const rows = await readTab('qps-' + stop);
  if (rows === null) return;
  const best = rows.find(r => r.name === name);
  Object.assign(entry, { stop, checks: best ? Number(best.sessions) || 0 : 0, best: best ? Number(best.percent) || 0 : null });
}

/* One student's QPS standing for the card. null = no card. */
function qpsStatus(name) {
  if (!qpsTracks || seesAll(name)) return null;
  const start = qpsTracks[name];
  const sh = qpsSheet[name];
  if (start === 'comp') {
    // the newer of this Chromebook's level and the sheet's backup row (QPS writes the row when the level moves)
    const dev = qpsDevice('qps_comp_v1:' + name);
    const devLevel = dev && dev.skills && dev.skills.context ? Number(dev.skills.context.level) || 0 : 0;
    const useSheet = !!(sh && sh.comp && sh.level) && (!devLevel || sh.t >= (Number(dev.t) || 0));
    return { comp: true, level: useSheet ? sh.level : devLevel };
  }
  if (!QPS_STOP_IDS.includes(start)) return null;
  const { stop, prog } = qpsNow(name);
  const rec = (qpsDevice('qps_practice_v1:' + name) || {})[stop] || {};
  const fromSheet = sh && !sh.comp && sh.stop === stop && sh.checks != null ? sh : null;
  const best = fromSheet && fromSheet.checks ? fromSheet.best : null;
  // passes on this stop: their progress row when it counts (it follows them to any Chromebook), else QPS's record here
  const passes = prog ? prog.passes : Math.max(0, Math.min(QPS_PASSES, Number(rec.passes) || 0));
  return {
    stop, title: QPS_STOP_NAMES[stop], passes, last: stop === QPS_STOP_IDS[QPS_STOP_IDS.length - 1],
    stars: Math.max(Math.min(3, Number(rec.stars) || 0), best != null ? qpsStarsFor(best) : 0),
    checks: fromSheet ? fromSheet.checks : null,
    tried: (!!fromSheet && fromSheet.checks > 0) || rec.lastScore != null || passes > 0,
    test: prog ? prog.test.filter(id => QPS_STOP_NAMES[id]) : []
  };
}

/* The words on the card, all read aloud. Short sentences (FK ≤ 3). */
function qpsWords(s) {
  if (s.comp) {
    return s.level ? `In QPS, you are on Level ${s.level} of ${QPS_LEVELS} in Words in context.`
                   : 'In QPS, you have not started Words in context yet.';
  }
  const out = [`Your QPS stop is Stop ${s.stop}, ${s.title}.`];
  if (s.test.length) out.push(`Mr. O will check ${s.test.length > 1 ? 'Stops' : 'Stop'} ${s.test.join(' and ')} with you soon.`);
  if (s.checks) out.push(`You did ${s.checks} ${s.checks === 1 ? 'Check' : 'Checks'} on this stop.`);
  else if (!s.tried) out.push('You have not done a Check on this stop yet.');
  if (s.stars) out.push(`You have ${s.stars} ${s.stars === 1 ? 'star' : 'stars'}.`);
  const then = s.last ? 'to be ready for Mr. O' : 'to move on to the next stop';
  if (s.passes >= QPS_PASSES) out.push(`You passed ${QPS_PASSES} Checks. You are ready for Mr. O's check!`);
  else if (s.passes) out.push(`You passed 1 Check. Pass ${QPS_PASSES} Checks ${then}.`);
  else if (s.tried) out.push(`Pass ${QPS_PASSES} Checks ${then}.`);
  return out.join(' ');
}

/* 📖 the card at the end of the plan: read-only (no button but its 🔊) */
function qpsCard(box, name) {
  const s = qpsStatus(name);
  if (!s) return;
  const card = document.createElement('div');
  card.className = 'dir-section qps-card';
  card.id = 'qps-card';
  const head = s.comp ? '📖 QPS: Words in context' : '📖 QPS: Phonics';
  const line = s.comp ? (s.level ? `Level ${s.level} of ${QPS_LEVELS}` : 'Not started')
    : [`${'★★★'.slice(0, s.stars)}${'☆☆☆'.slice(0, 3 - s.stars)}`,
       s.passes >= QPS_PASSES ? '✅ Ready for Mr. O' : `Pass ${s.passes} of ${QPS_PASSES}`,
       s.checks != null ? `${s.checks} ${s.checks === 1 ? 'Check' : 'Checks'}` : ''].filter(Boolean).join(' · ');
  card.innerHTML = `<div class="dir-row"><button class="speak-btn" onclick="speakDir(this)" aria-label="Read the QPS card aloud">🔊</button>` +
    `<h3>${head}</h3></div><p class="dir-text">${qpsWords(s)}</p><p class="qps-line">${line}</p>`;
  box.appendChild(card);
}
