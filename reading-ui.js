/* ═══════════════════════════════════════════════════════
   THE LAB · reading-ui.js — the screens of the Reading for Meaning strand (RC1 …)
   Marcos 10/20/2026: "build a comprehension strand" · "I would prefer the Lab stuff all be in the Lab."
   Loaded after script.js. script.js calls in at five places (readingRender, readingConfirm,
   readingAutoAnswer, readingExtras, speakEl); everything else here stays in this file, so the math
   lessons run exactly as before.

   THE PASSAGE: rides on the left beside every question (copied from the Read Literary review's story
     panel: numbered paragraphs, a 🔊 on the left of each). The first time a passage shows, the student
     must HEAR THE WHOLE PASSAGE before the questions open (Marcos 10/17: "force them to hear the read
     aloud"), one paragraph at a time, the words lighting up as they are read.
   THE QUESTIONS (types copied from the Read Literary review, the way the test shows them):
     mc    one answer · ebsr  Part A + Part B on one screen, a point each
     hot   click the sentence(s) · ms  Choose TWO   — all or nothing, like the test
   The question is heard before the choices unlock; after a miss, Next waits for the Listen (same as math).
   KINDS OF MISTAKES: every wrong choice carries a kind (true but not proof, the wrong part of the passage …).
   The same kind again in a lesson is logged as a 'repeat' (🔁 on the dashboard); the count rides in the
   lab-progress backup, and a student who keeps making one kind hears a "Before you start" warning first.
═══════════════════════════════════════════════════════ */

/* ── small helpers ── */
function escR(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
const sameText = (a, b) => String(a).replace(/\s+/g, ' ').trim() === String(b).replace(/\s+/g, ' ').trim();
const isReadingForm = form => !!(LESSONS[form] && LESSONS[form].reading);

/* Read one block aloud, word by word (a speaker on the left of the block). A second tap stops it.
   onHeard: called when it was read to its end (not stopped, not cut off by another speaker or by leaving). */
function speakEl(btn, el, rate, onHeard) {
  if (activeSpeakBtn === btn) { stopActiveSpeech(); return; }
  stopActiveSpeech();
  if (!el || !('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') return;
  if (!el.querySelector('.wrd')) el.innerHTML = wrapWords(el.innerHTML);
  const spans = Array.from(el.querySelectorAll('.wrd')).filter(s => /[A-Za-z0-9]/.test(s.textContent) && !s.closest('[data-noread]'));
  if (!spans.length) return;
  activeSpeakBtn = btn;
  btn.textContent = '⏹';
  const u = new SpeechSynthesisUtterance(spans.map(s => s.textContent).join(' '));
  english(u); u.rate = rate || READ_RATE;
  let began = false;
  u.onstart = () => { began = true; };
  u.onboundary = e => {
    if (e.name !== 'word') return;
    const lit = lightAt(spans, u.text, e.charIndex);   // the word the voice is on (script.js)
    if (lit) followLitWord(lit);   // the passage box follows (script.js)
  };
  u.onend = e => {
    // a stop (stopActiveSpeech lets go of the button first) or a voice error is not "to its end"
    const whole = activeSpeakBtn === btn && began && !(e && e.error);
    spans.forEach(s => s.classList.remove('hl'));
    if (activeSpeakBtn === btn) { btn.textContent = '🔊'; activeSpeakBtn = null; }
    if (whole && onHeard) onHeard();
  };
  addHighlightFallback(u, spans);
  window.speechSynthesis.speak(u);
}
function speakerBtn(title, onclick) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'choice-speak-btn';
  b.textContent = '🔊';
  b.title = title;
  b.setAttribute('data-noread', '');
  b.onclick = e => { e.stopPropagation(); onclick(b); };
  return b;
}

/* ── KINDS OF MISTAKES, per student (this device + the lab-progress backup) ── */
const KINDS_KEY = 'lab_kinds_v1';   // + ':' + name → { notproof: 3, … }
function readKinds(name) {
  try { return JSON.parse(localStorage.getItem(KINDS_KEY + ':' + name) || '{}') || {}; } catch (e) { return {}; }
}
function writeKinds(name, k) {
  try { localStorage.setItem(KINDS_KEY + ':' + name, JSON.stringify(k)); } catch (e) { /* storage full or blocked */ }
}
function kindsText(k) {
  return Object.entries(k || {}).filter(([kind, n]) => n > 0 && LabReading.KINDS[kind]).map(([kind, n]) => `${kind}:${n}`).join(',');
}
/* A backup from another device: keep the bigger count of each kind */
function mergeKinds(name, text) {
  if (!name || !text) return;
  const k = readKinds(name);
  String(text).split(',').forEach(p => {
    const m = /^([a-z]+):(\d+)$/.exec(p.trim());
    if (m && LabReading.KINDS[m[1]]) k[m[1]] = Math.max(k[m[1]] || 0, Number(m[2]));
  });
  writeKinds(name, k);
}
/* The kind this student has made most (on 3 or more questions), or null. The count is cut in half each time the
   warning is said (readingExtras), so a student who has stopped making that mistake stops hearing about it. */
const KIND_WARN_AT = 3;
function topKind(name) {
  let best = null;
  Object.entries(readKinds(name)).forEach(([kind, n]) => {
    if (n >= KIND_WARN_AT && LabReading.KIND_WATCH[kind] && (!best || n > best[1])) best = [kind, n];
  });
  return best ? best[0] : null;
}

/* ── THE PASSAGE PANEL ── */
let shownStoryKey = null;
/* PARAGRAPH BY PARAGRAPH (Marcos 10/26: "what if i hit each speaker button on the left instead of the big button …
   Why doesn't the go to the questions button show"): every paragraph heard to its end, with its own 🔊 or inside the
   big Listen, counts the same as the whole passage. Kept for the passage on screen only; each first showing starts over. */
const parasHeard = {};      // story key → Set of paragraph numbers heard to the end
let parasWatch = null;      // the passage being heard first: { key, onPara }
function paraHeard(key, n) {
  (parasHeard[key] = parasHeard[key] || new Set()).add(n);
  if (parasWatch && parasWatch.key === key) parasWatch.onPara();
}
function storyPanelHTML(story) {
  return `<div class="story-panel-header"><span class="sp-title">📖 <span class="sp-title-text">${escR(story.title)}</span></span></div>
    <div class="story-scroll">${(story.paragraphs || []).map((p, i) =>
      `<p class="story-para" data-para="${i + 1}">` +
        `<button type="button" class="speak-btn para-speak-btn" title="Read paragraph ${i + 1} aloud" data-noread>🔊</button>` +
        `<span class="para-num" aria-label="Paragraph ${i + 1}" data-noread>${i + 1}</span>` +
        `<span class="para-text">${LabReading.split(p).map(s => `<span class="st-sent">${escR(s)}</span>`).join(' ')}</span>` +
      `</p>`).join('')}</div>`;
}
function renderStoryPanel(key) {
  const panel = document.getElementById('quiz-story-panel');
  if (!panel) return null;
  const story = key ? (window.LAB_STORIES || {})[key] : null;
  if (!story) {
    panel.innerHTML = ''; shownStoryKey = null;
    document.body.classList.remove('story-active');
    return null;
  }
  if (shownStoryKey !== key) {
    panel.innerHTML = storyPanelHTML(story);
    shownStoryKey = key;
    panel.querySelectorAll('.para-speak-btn').forEach(b => {
      const n = Number(b.parentElement.dataset.para);
      b.onclick = () => speakEl(b, b.parentElement.querySelector('.para-text'), undefined, () => paraHeard(key, n));
    });
    const scroll = panel.querySelector('.story-scroll');
    if (scroll) scroll.scrollTop = 0;
  }
  document.body.classList.add('story-active');
  return story;
}
/* Light up sentences (a worked example) and mark the paragraph a question is about */
function markStory(lit, para) {
  const panel = document.getElementById('quiz-story-panel');
  if (!panel) return;
  panel.querySelectorAll('.st-sent.lit').forEach(el => el.classList.remove('lit'));
  panel.querySelectorAll('.story-para.para-focus').forEach(el => el.classList.remove('para-focus'));
  (lit || []).forEach(s => panel.querySelectorAll('.st-sent').forEach(el => { if (sameText(el.textContent, s)) el.classList.add('lit'); }));
  const target = para ? panel.querySelector(`.story-para[data-para="${para}"]`) : panel.querySelector('.st-sent.lit');
  if (para && target) target.classList.add('para-focus');
  const scroll = panel.querySelector('.story-scroll');
  if (target && scroll) {
    const host = target.closest('.story-para') || target;
    scroll.scrollTop = Math.max(0, host.offsetTop - scroll.offsetTop - 12);
  }
}

/* ── HEAR THE WHOLE PASSAGE: one paragraph at a time (a very long single reading gets cut off by some
   voices), the words lighting up. Heard = the last paragraph ended. Stopping early does not count; a second
   tap does not restart it; a device with no voice gets a wait long enough to read it, then "I read it".
   Same rules as _listenGate in script.js. */
function listenChunks(btn, note, chunks, pending, heard, labels, onChunk) {   // onChunk(para): a paragraph read to its end
  const words = chunks.reduce((n, c) => n + c.text.split(/\s+/).filter(Boolean).length, 0);
  const clearHl = () => chunks.forEach(c => c.spans.forEach(el => el.classList.remove('hl')));
  const idle = () => { btn.classList.remove('playing'); btn.textContent = pending() ? labels.listen : labels.again; };
  const noVoice = () => {
    clearHl();
    if (!pending()) { idle(); return; }
    btn.classList.remove('playing'); btn.disabled = true; btn.textContent = '⏳ Read it first…';
    note.textContent = 'No sound here. Read the passage. Then tap the button.';
    setTimeout(() => {
      if (!pending() || !btn.isConnected) return;
      btn.disabled = false; btn.textContent = '✅ I read it';
      btn.onclick = () => heard('read');
    }, Math.min(60000, Math.max(5000, words * 450)));
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
      if (!ok && pending()) note.textContent = 'It stopped early. Tap Listen. Hear the whole passage.';
    };
    job.abort = () => finish(false);
    btn.classList.add('playing'); btn.textContent = '🔊 Listening…';
    const say = k => {
      if (job.settled) return;
      if (k >= chunks.length) { finish(true); return; }
      const c = chunks[k];
      const u = new SpeechSynthesisUtterance(c.text);
      english(u); u.rate = READ_RATE;
      let done = false, errored = false, cutOff = false, began = false;
      const next = () => {
        if (done || job.settled) return;
        done = true;
        clearTimeout(job.watchdog);
        c.spans.forEach(el => el.classList.remove('hl'));
        if (errored) { settle(); noVoice(); return; }
        if (cutOff) { finish(false); return; }         // stopped by something outside the page: not heard
        if (c.para && onChunk) onChunk(c.para);
        setTimeout(() => say(k + 1), LINE_PAUSE_MS);   // QPS's pause between lines (script.js)
      };
      // every paragraph must start within LISTEN_START_WAIT, not just the first (a voice can stall mid-passage)
      clearTimeout(job.startTimer);
      job.startTimer = setTimeout(() => {
        if (began || done || job.settled) return;
        settle(); window.speechSynthesis.cancel(); noVoice();
      }, LISTEN_START_WAIT);
      u.onstart = () => {
        began = true;
        clearTimeout(job.startTimer);
        job.started = true;
        clearTimeout(job.watchdog);
        // some voices never report the end: generous on purpose (about 80 words a minute)
        job.watchdog = setTimeout(next, c.text.split(/\s+/).length * 750 + 6000);
      };
      u.onboundary = e => {
        if (e.name !== 'word') return;
        const lit = lightAt(c.spans, u.text, e.charIndex);   // the word the voice is on (script.js)
        if (lit) followLitWord(lit);   // the passage box follows
      };
      u.onend = next;
      addHighlightFallback(u, c.spans);
      const cleanUp = u.onerror;                 // the highlight fallback's clean-up (it ends in u.onend)
      u.onerror = e => {
        // our own stop has already settled the job (job.abort) before the cancel reports in. Anything else:
        // an interruption from outside the page = not heard; a real voice error = this device cannot read it.
        if (!job.settled) {
          if (e && (e.error === 'interrupted' || e.error === 'canceled')) cutOff = true;
          else errored = true;
        }
        cleanUp(e);
      };
      window.speechSynthesis.speak(u);
    };
    say(0);
  };
  btn.onclick = play;
  return play;
}

/* ══ script.js calls in here ══ */

/* renderQuestion: a reading item (it has a passage) is drawn here. true = handled. */
function readingRender(app, q, total) {
  if (!q || !q.story) { renderStoryPanel(null); return false; }
  const story = renderStoryPanel(q.story);
  if (!story) return false;                      // the lesson file did not load: fall back to the plain screen
  app.heardStories = app.heardStories || [];
  if (!reviewMode && !app.heardStories.includes(q.story)) { readingGate(app, q, story, total); return true; }
  if (q.kind === 'watch') {
    app._renderWatch(q, total);
    markStory(q.lit, null);
    return true;
  }
  readingItem(app, q, total);
  return true;
}

function resetQuizParts(app) {
  document.getElementById('q-visual').innerHTML = '';
  document.getElementById('q-listen').innerHTML = '';
  document.getElementById('q-words').innerHTML = '';
  const wrap = document.getElementById('answers');
  wrap.innerHTML = '';
  wrap.className = 'options-grid';
  ['confirm-btn', 'next-btn', 'next-timer-bar', 'reading-timer-bar'].forEach(id => document.getElementById(id).classList.add('hidden'));
  const fb = document.getElementById('feedback');
  fb.className = 'feedback-box';
  fb.style.display = 'none';
  fb.innerHTML = '';
  app.selectedAnswer = null; app.questionLocked = false; app.hintShown = false; app.wordOpen = null;
  app.ebsrSel = { A: null, B: null };
  app.multiSel = [];
}

/* The passage the first time it shows: hear all of it, then go on */
function readingGate(app, q, story, total) {
  resetQuizParts(app);
  document.getElementById('progress-text').textContent = `📖 Read the passage · ${app.currentIndex + 1} of ${total}`;
  document.getElementById('score-text').textContent = `${getFirstName(app.studentName)} · ${app.score}`;
  document.getElementById('progress-fill').style.width = `${(app.currentIndex / total) * 100}%`;
  document.getElementById('speak-q-btn').classList.add('hidden');
  document.getElementById('question-text').innerHTML = `<span class="watch-tag">📖 Read the passage</span> ${escR(story.title)}`;
  markStory([], null);
  const fb = document.getElementById('feedback');
  fb.className = 'feedback-box teach-box story-gate';
  fb.style.display = 'block';
  // the Listen button first (the next thing to press stays on screen at 1366 x 650), one short line under it
  fb.innerHTML = `<div class="gate-lines"><div class="watch-line">The passage is on the left. Hear all of the passage. The words light up as they are read. Then you can go on.</div></div>`;
  const lines = fb.querySelector('.gate-lines');
  lines.innerHTML = wrapWords(lines.innerHTML);
  lines.prepend(speakerBtn('Read the directions aloud', b => speakEl(b, lines.querySelector('.watch-line'))));
  // the passage, paragraph by paragraph (the title first)
  const panel = document.getElementById('quiz-story-panel');
  const hosts = [panel.querySelector('.sp-title-text'), ...panel.querySelectorAll('.para-text')].filter(Boolean);
  hosts.forEach(h => { if (!h.querySelector('.wrd')) h.innerHTML = wrapWords(h.innerHTML); });
  const chunks = hosts.map(h => {
    const spans = Array.from(h.querySelectorAll('.wrd')).filter(s => /[A-Za-z0-9]/.test(s.textContent));
    const para = h.closest('.story-para');
    return { spans, text: spans.map(s => s.textContent).join(' '), para: para ? Number(para.dataset.para) : 0 };
  }).filter(c => c.spans.length);
  const row = document.createElement('div');
  row.className = 'listen-row';
  row.innerHTML = `<button type="button" class="listen-btn" id="story-listen-btn">🔊 Listen to the passage</button>` +
    `<span class="listen-note" id="story-listen-note" aria-live="polite">Listen to the end. Then you can go on.</span>`;
  fb.prepend(row);
  const btn = row.querySelector('#story-listen-btn'), note = row.querySelector('#story-listen-note');
  const key = q.story;
  const goOn = () => {
    if (fb.querySelector('#story-go-btn')) return;
    const go = document.createElement('button');
    go.type = 'button';
    go.className = 'action-btn story-go-btn';
    go.id = 'story-go-btn';
    go.textContent = q.kind === 'watch' ? '➡️ Go on' : '➡️ Go to the questions';
    go.onclick = () => { stopActiveSpeech(); markParas(new Set()); parasWatch = null; app.renderQuestion(); };
    fb.appendChild(go);
    if (go.scrollIntoView) go.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
  const heard = how => {
    if (app.heardStories.includes(key) || !btn.isConnected) return;
    app.heardStories.push(key);
    logEvent('heard', { id: key, how });
    btn.disabled = false; btn.classList.remove('playing'); btn.classList.add('heard'); btn.textContent = '🔊 Listen again';
    btn.onclick = () => listenAgain();
    note.textContent = '✅ Done. You can go on.';
    app.saveProgress();
    goOn();
  };
  // paragraph by paragraph: a ✓ on each 🔊 heard to its end; all of them = heard (a big Listen still running ends as
  // its own listen, so a whole passage heard with it is logged as the voice)
  const paras = [...panel.querySelectorAll('.story-para')];
  const markParas = got => paras.forEach(p => {
    const b = p.querySelector('.para-speak-btn');
    if (b) b.classList.toggle('heard', got.has(Number(p.dataset.para)));
  });
  parasHeard[key] = new Set();
  const onPara = () => {
    const got = parasHeard[key];
    markParas(got);
    if (app.heardStories.includes(key) || !btn.isConnected) return;
    if (listenJob && !listenJob.settled && listenJob.btn === btn) return;
    if (got.size >= paras.length) { heard('paras'); return; }
    note.textContent = `You heard ${got.size} of ${paras.length} paragraphs. Hear them all. Then you can go on.`;
  };
  parasWatch = { key, onPara };
  markParas(parasHeard[key]);
  const listenAgain = listenChunks(btn, note, chunks, () => !app.heardStories.includes(key), heard, { listen: '🔊 Listen to the passage', again: '🔊 Listen again' },
    para => paraHeard(key, para));
  // 🧑‍🏫 ⏩ Skip the wait (Teacher screen, Try it as a student): heard, then on to the questions
  app._passageOpen = () => {
    if (app.heardStories.includes(key) || !btn.isConnected) return;
    heard('skip');
    const go = fb.querySelector('#story-go-btn');
    if (go) go.click();
  };
  app.saveProgress();
}

/* One reading question */
function readingItem(app, q, total) {
  resetQuizParts(app);
  document.getElementById('score-text').textContent = `${getFirstName(app.studentName)} · ${app.score}`;
  document.getElementById('progress-fill').style.width = `${(app.currentIndex / total) * 100}%`;
  app._renderStreak();
  const qt = document.getElementById('question-text');
  // RC6: a box of text to read above the question (a summary, like the test). It sits INSIDE the question text, so the
  // Listen gate reads it with the question and the choices stay locked until both are heard.
  const excerpt = Array.isArray(q.excerpt) && q.excerpt.length
    ? `<div class="rc-excerpt"><div class="rc-excerpt-label">${escR(q.excerptLabel || 'Read this')}</div>${q.excerpt.map(l => `<p>${escR(l)}</p>`).join('')}</div>` : '';
  qt.innerHTML = excerpt + (q.type === 'ebsr' ? 'This question has two parts. Answer Part A and Part B.' : escR(q.q));
  const wrap = document.getElementById('answers');
  if (q.type === 'ebsr') readingEbsr(app, q, wrap);
  else if (q.type === 'hot') readingHot(app, q, wrap);
  else if (q.type === 'ms') {
    wrap.className = 'options-grid multi-item';
    readingChoices(app, q, wrap, q.choices, null, q.pick);
    readingCount(wrap, q.pick);
  } else readingChoices(app, q, wrap, q.choices, null, 0);
  markStory([], q.para);
  if (app.currentIndex > 0 && app.currentIndex % 5 === 0) submitScorePartial();
  app.saveProgress();
  readingListen(app, q);
}

function readingChoices(app, q, wrap, choices, part, pick) {
  choices.forEach((text, i) => {
    const row = document.createElement('div');
    row.className = 'answer-row';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'answer-btn rc-choice' + (pick ? ' multi-choice' : '');
    btn.dataset.answer = text;
    if (part) btn.dataset.part = part;
    if (pick) { btn.dataset.multi = '1'; btn.setAttribute('role', 'checkbox'); btn.setAttribute('aria-checked', 'false'); }
    btn.innerHTML = `${pick ? '<span class="ms-box" aria-hidden="true"></span>' : ''}<strong data-noread>${'ABCDEF'[i]}.</strong>&nbsp;<span class="choice-text">${escR(text)}</span>`;
    btn.onclick = () => (pick ? readingToggle(app, text, btn, pick) : part ? readingPart(app, part, text, btn) : app._selectChoice(text, btn));
    row.appendChild(speakerBtn('Read this choice aloud', b => speakEl(b, btn.querySelector('.choice-text'))));
    row.appendChild(btn);
    wrap.appendChild(row);
  });
}
function readingCount(wrap, pick) {
  const c = document.createElement('div');
  c.className = 'multi-count';
  c.id = 'multi-count';
  c.textContent = `Chosen: 0 of ${pick}`;
  wrap.appendChild(c);
}
/* Part A + Part B on one screen, the way the test shows them */
function readingEbsr(app, q, wrap) {
  wrap.className = 'options-grid ebsr-item';
  [['A', q.partA], ['B', q.partB]].forEach(([part, data]) => {
    const block = document.createElement('div');
    block.className = 'ebsr-part';
    block.innerHTML = `<div class="ebsr-label part-${part}" data-noread>Part ${part}</div>`;
    const qRow = document.createElement('div');
    qRow.className = 'ebsr-q-row';
    const qText = document.createElement('div');
    qText.className = 'ebsr-q';
    qText.textContent = data.q;
    qRow.appendChild(speakerBtn(`Read Part ${part} aloud`, b => speakEl(b, qText)));
    qRow.appendChild(qText);
    block.appendChild(qRow);
    const choiceWrap = document.createElement('div');
    choiceWrap.className = 'ebsr-choices';
    readingChoices(app, q, choiceWrap, data.choices, part, 0);
    block.appendChild(choiceWrap);
    wrap.appendChild(block);
  });
}
/* Click the sentence(s): one paragraph shown as it reads, or a list of sentences */
function readingHot(app, q, wrap) {
  wrap.className = 'options-grid hottext-item ' + (q.layout === 'para' ? 'ht-layout-para' : 'ht-layout-list');
  const hint = document.createElement('div');
  hint.className = 'ht-hint';
  const hintText = document.createElement('span');
  hintText.textContent = q.pick === 1
    ? 'Tap a sentence to choose it. Tap it again to take it back. Choose 1.'
    : `Tap a sentence to choose it. Tap it again to take it back. Choose ${q.pick}. Both must be right.`;
  hint.appendChild(speakerBtn('Read the directions aloud', b => speakEl(b, hintText)));
  hint.appendChild(hintText);
  wrap.appendChild(hint);
  const makeSent = text => {
    const sp = document.createElement('span');
    sp.className = 'ht-sent';
    sp.dataset.answer = text;
    sp.dataset.multi = '1';
    sp.setAttribute('role', 'checkbox');
    sp.setAttribute('aria-checked', 'false');
    sp.tabIndex = 0;
    sp.innerHTML = `<span class="choice-text">${escR(text)}</span>`;
    return sp;
  };
  // one listener on the container: a speaker re-wraps the words, which would drop handlers on the sentences
  const delegate = host => {
    const hit = e => e.target.closest && e.target.closest('.ht-sent');
    host.addEventListener('click', e => { const s = hit(e); if (s) readingToggle(app, s.dataset.answer, s, q.pick); });
    host.addEventListener('keydown', e => {
      const s = hit(e);
      if (s && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); readingToggle(app, s.dataset.answer, s, q.pick); }
    });
  };
  if (q.layout === 'para') {
    const row = document.createElement('div');
    row.className = 'ht-para-row';
    const para = document.createElement('p');
    para.className = 'ht-para';
    q.choices.forEach((t, i) => { if (i) para.appendChild(document.createTextNode(' ')); para.appendChild(makeSent(t)); });
    delegate(para);
    row.appendChild(speakerBtn(`Read paragraph ${q.para} aloud`, b => speakEl(b, para)));
    row.appendChild(para);
    wrap.appendChild(row);
  } else {
    const list = document.createElement('div');
    list.className = 'ht-list';
    delegate(list);
    q.choices.forEach(t => {
      const row = document.createElement('div');
      row.className = 'answer-row';
      const sp = makeSent(t);
      sp.classList.add('ht-list-sent');
      row.appendChild(speakerBtn('Read this sentence aloud', b => speakEl(b, sp.querySelector('.choice-text'))));
      row.appendChild(sp);
      list.appendChild(row);
    });
    wrap.appendChild(list);
  }
  readingCount(wrap, q.pick);
}

function readingWarn(msg) {
  let w = document.getElementById('rc-warn');
  if (!w) {
    w = document.createElement('div');
    w.id = 'rc-warn';
    w.className = 'rc-warn';
    w.setAttribute('role', 'alert');
    document.getElementById('answers').appendChild(w);
  }
  w.textContent = msg;
  clearTimeout(readingWarn.t);
  readingWarn.t = setTimeout(() => { if (w.isConnected) w.remove(); }, 4000);
}
function readingToggle(app, text, el, pick) {
  if (app.questionLocked || el.classList.contains('locked-choice')) return;
  const sel = app.multiSel || (app.multiSel = []);
  const at = sel.indexOf(text);
  if (at >= 0) sel.splice(at, 1);
  else if (pick === 1) {
    // one to pick: a new tap moves the choice
    sel.splice(0, sel.length, text);
    document.querySelectorAll('#answers [data-multi]').forEach(x => { if (x !== el) { x.classList.remove('selected'); x.setAttribute('aria-checked', 'false'); } });
  } else if (sel.length >= pick) { readingWarn(`You can choose only ${pick}. Tap one you chose to take it back first.`); return; }
  else sel.push(text);
  const on = sel.includes(text);
  el.classList.toggle('selected', on);
  el.setAttribute('aria-checked', on ? 'true' : 'false');
  const c = document.getElementById('multi-count');
  if (c) { c.textContent = `Chosen: ${sel.length} of ${pick}`; c.classList.toggle('done', sel.length === pick); }
}
function readingPart(app, part, text, btn) {
  if (app.questionLocked) return;
  app.ebsrSel = app.ebsrSel || { A: null, B: null };
  app.ebsrSel[part] = text;
  document.querySelectorAll(`#answers .answer-btn[data-part="${part}"]`).forEach(b => b.classList.toggle('selected', b === btn));
}

/* Hear the question first: the choices stay locked until it has been heard to the end */
function readingListen(app, q) {
  const lock = on => document.querySelectorAll('#answers .answer-btn, #answers .ht-sent').forEach(b => {
    if (b.tagName === 'BUTTON') b.disabled = on;
    b.classList.toggle('locked-choice', on);
    if (b.classList.contains('ht-sent')) b.setAttribute('aria-disabled', on ? 'true' : 'false');
  });
  const qBtn = document.getElementById('speak-q-btn');
  const box = document.getElementById('q-listen');
  box.innerHTML = '';
  if (reviewMode) {
    lock(false);
    document.getElementById('confirm-btn').classList.remove('hidden');
    setTimeout(() => app._autoAnswer(), 300);
    return;
  }
  app.qHeard = false;
  lock(true);
  document.getElementById('confirm-btn').classList.add('hidden');
  qBtn.classList.add('hidden');
  const hosts = [document.getElementById('question-text'), ...document.querySelectorAll('#answers .ebsr-q')];
  hosts.forEach(h => { if (!h.querySelector('.wrd')) h.innerHTML = wrapWords(h.innerHTML); });
  const spans = hosts.flatMap(h => Array.from(h.querySelectorAll('.wrd'))).filter(el => /[A-Za-z0-9]/.test(el.textContent) && !el.closest('[data-noread]'));
  // RC6: the summary box's label has no end mark on screen, so the voice adds one (or the label runs into the summary)
  const labelWords = document.querySelectorAll('#question-text .rc-excerpt-label .wrd');
  const labelEnd = labelWords[labelWords.length - 1];
  const text = spans.map(s => s === labelEnd && !/[.!?]["”’]?$/.test(s.textContent) ? s.textContent + '.' : s.textContent).join(' ');
  const row = document.createElement('div');
  row.className = 'listen-row q-listen-row';
  row.innerHTML = `<button type="button" class="listen-btn" id="q-listen-btn">🔊 Listen to the question</button>` +
    `<span class="listen-note" id="q-listen-note" aria-live="polite">Listen to the end. Then you can answer.</span>`;
  box.appendChild(row);
  const btn = row.querySelector('#q-listen-btn'), note = row.querySelector('#q-listen-note');
  const heard = how => {
    if (app.qHeard || app.currentQ() !== q || !btn.isConnected) return;
    app.qHeard = true;
    if (how === 'read') logEvent('heard', { id: q.id, how });
    lock(false);
    row.remove();
    qBtn.classList.remove('hidden');
    document.getElementById('confirm-btn').classList.remove('hidden');
    const first = document.querySelector('#answers .answer-btn, #answers .ht-sent');
    if (first && first.scrollIntoView) first.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
  app._listenGate(btn, note, spans, text, () => !app.qHeard, heard, { listen: '🔊 Listen to the question', again: '🔊 Listen again' });
}

/* confirmAnswer: a reading item is scored here. true = handled. */
function readingConfirm(app, q) {
  if (!q || !q.story || q.kind === 'watch') return false;
  if (app.questionLocked) return true;
  const wrongs = [];      // { part, pick, slip, data }
  let correct = false, pts = 0, partsRight = 0, pickText = '';
  if (q.type === 'ebsr') {
    const sel = app.ebsrSel || {};
    if (!sel.A || !sel.B) { readingWarn('Answer Part A and Part B. Then tap That\'s My Answer.'); return true; }
    [['A', q.partA], ['B', q.partB]].forEach(([part, d]) => {
      if (sel[part] === d.answer) partsRight++;
      else wrongs.push({ part, pick: sel[part], slip: d.slips[sel[part]], data: d });
    });
    correct = partsRight === 2;
    pts = partsRight;
  } else if (q.type === 'hot' || q.type === 'ms') {
    const sel = app.multiSel || [];
    if (sel.length !== q.pick) { readingWarn(q.pick === 1 ? 'Choose a sentence first.' : `Choose ${q.pick}. You have ${sel.length}.`); return true; }
    const right = sel.filter(s => q.answers.includes(s)).length;
    correct = right === q.pick;
    pts = correct ? 1 : 0;
    partsRight = right;
    sel.filter(s => !q.answers.includes(s)).forEach(s => wrongs.push({ pick: s, slip: q.slips[s] }));
    pickText = sel.join(' | ');
  } else {
    if (!app.selectedAnswer) return true;
    correct = app.selectedAnswer === q.answer;
    pts = correct ? 1 : 0;
    if (!correct) wrongs.push({ pick: app.selectedAnswer, slip: q.slips[app.selectedAnswer] });
    pickText = app.selectedAnswer;
  }
  app.questionLocked = true;
  const isStep = q.kind === 'step', isPre = q.kind === 'pre';

  // the kind of each mistake. A REPEAT = a kind already made on an EARLIER question of this lesson (two wrong
  // sentences of one kind in the same question are one mistake, not a repeat); each kind counts once per question.
  app.kindsSeen = app.kindsSeen || {};
  if (!isStep) {
    const before = { ...app.kindsSeen };
    const tally = (reviewMode || SHARE_MODE) ? null : readKinds(app.studentName);
    const counted = new Set();
    wrongs.forEach(w => {
      const k = w.slip && LabReading.KINDS[w.slip.tag] ? w.slip.tag : null;
      if (!k) return;
      w.kind = k;
      if (before[k]) {
        w.repeat = true;
        if (!counted.has(k)) logEvent('repeat', { id: q.id + (w.part ? '.' + w.part : ''), f: LabReading.KIND_LABEL[k], pick: w.pick });
      }
      if (counted.has(k)) return;
      counted.add(k);
      app.kindsSeen[k] = (app.kindsSeen[k] || 0) + 1;
      if (tally) tally[k] = (tally[k] || 0) + 1;
    });
    if (tally && counted.size) writeKinds(app.studentName, tally);
  }

  const skillOf = idx => (Array.isArray(q.skill) ? q.skill[idx] : q.skill) || 'Reading';
  if (isStep) {
    logEvent('step', Object.assign({ id: q.id, ok: correct }, correct ? {} : { pick: wrongs.map(w => w.pick).join(' | ') }));
  } else if (isPre) {
    app.preTotal++;
    if (correct) app.preRight += 1;
    logEvent('pre', Object.assign({ id: q.id, ok: correct }, correct ? {} : { pick: wrongs.map(w => w.pick).join(' | ') }));
  } else {
    app.score += pts;
    if (correct) { app.streak++; app.lastMissed = false; } else { app.streak = 0; app.lastMissed = true; }
    if (q.type === 'ebsr') {
      wrongs.forEach(w => app.missedQuestions.push({ id: `${q.id}.${w.part}`, q: w.data.q, skill: skillOf(w.part === 'A' ? 0 : 1) + (w.kind ? ' · ' + LabReading.KIND_LABEL[w.kind] : ''),
        yourAnswer: w.pick, correct: w.data.answer, explanation: w.data.explanation || '', repeat: !!w.repeat }));
    } else if (!correct) {
      const w = wrongs[0] || {};
      app.missedQuestions.push({ id: q.id, q: q.q, skill: skillOf(0) + (w.kind ? ' · ' + LabReading.KIND_LABEL[w.kind] : ''),
        yourAnswer: pickText, correct: q.answer, explanation: q.explanation || '', repeat: wrongs.some(x => x.repeat) });
    }
  }

  // mark the choices: their pick right or wrong, and the right answer
  document.querySelectorAll('#answers .answer-btn, #answers .ht-sent').forEach(el => {
    if (el.tagName === 'BUTTON') el.disabled = true;
    el.classList.add('locked-choice');
    const t = el.dataset.answer;
    let right, picked;
    if (q.type === 'ebsr') { const d = el.dataset.part === 'A' ? q.partA : q.partB; right = t === d.answer; picked = (app.ebsrSel || {})[el.dataset.part] === t; }
    else if (q.type === 'hot' || q.type === 'ms') { right = q.answers.includes(t); picked = (app.multiSel || []).includes(t); }
    else { right = t === q.answer; picked = t === app.selectedAnswer; }
    if (picked) el.classList.add(right ? 'correct' : 'incorrect');
    else if (right) el.classList.add('correct');
  });

  // the feedback: what was right, the mistake named, the right answer, and why
  const note = w => (w.repeat ? 'This is the same kind of mistake as before. ' : '') + ((w.slip && w.slip.say) || '');
  const quote = t => `“${escR(t)}”`;
  let html;
  if (q.type === 'ebsr') {
    const part = (p, d) => {
      const w = wrongs.find(x => x.part === p);
      return `<div class="rc-fb-part"><strong>Part ${p}:</strong> ${w ? `❌ <span class="slip-note">${escR(note(w))}</span> The correct answer is: <strong>${escR(d.answer)}</strong>` : '✅ Correct!'} ${escR(d.explanation)}</div>`;
    };
    html = `${correct ? '✅ <strong>Both parts are right!</strong>' : partsRight ? `🟡 <strong>1 of 2 parts right.</strong> You earned 1 point.` : '❌ <strong>Not quite.</strong>'}` +
      part('A', q.partA) + part('B', q.partB);
  } else if (q.type === 'hot' || q.type === 'ms') {
    const many = q.pick > 1;
    html = correct ? `✅ <strong>Correct!</strong> ${escR(q.explanation)}`
      : `${many && partsRight ? `🟡 <strong>${partsRight} of ${q.pick} right.</strong> This question needs ${q.pick === 2 ? 'both' : `all ${q.pick}`} right for the point.` : '❌ <strong>Not quite.</strong>'}` +
        wrongs.map(w => `<div class="rc-fb-part">You picked ${quote(w.pick)}${/[.!?]$/.test(w.pick) ? '' : '.'} <span class="slip-note">${escR(note(w))}</span></div>`).join('') +
        // a click item's answers are sentences of the passage; a Choose item's answers are ideas or meanings
        `<div class="rc-fb-part">The correct ${q.type === 'ms' ? (many ? 'answers are' : 'answer is') : (many ? 'sentences are' : 'sentence is')}: ${q.answers.map(a => `<strong>${quote(a)}</strong>`).join(q.answers.length > 2 ? ', ' : ' and ')}</div>` +
        `<div class="rc-fb-part">${escR(q.explanation)}</div>`;
  } else {
    const w = wrongs[0];
    html = correct ? `✅ <strong>Correct!</strong> ${escR(q.explanation)}`
      : `❌ <strong>Not quite.</strong> <span class="slip-note">${escR(note(w))}</span> The correct answer is: <strong>${escR(q.answer)}</strong><div class="rc-fb-part">${escR(q.explanation)}</div>`;
  }
  const fb = document.getElementById('feedback');
  fb.className = 'feedback-box ' + (correct ? 'correct' : partsRight ? 'partial' : 'incorrect');
  fb.style.display = 'block';
  fb.innerHTML = wrapWords(html);
  const spans = Array.from(fb.querySelectorAll('.wrd')).filter(s => /[A-Za-z0-9]/.test(s.textContent));
  const spoken = spans.map(s => s.textContent).join(' ');
  const small = speakerBtn('Read this aloud', b => speakEl(b, fb));
  small.className = 'speak-btn';
  small.style.cssText = 'float:left;margin:0 10px 4px 0;';
  fb.prepend(small);
  // after a miss the student must HEAR the mistake and the right answer before Next shows (not on Show what you know)
  app.mustHear = !correct && !reviewMode && !isPre;
  if (app.mustHear) app._armListen(fb, small, spans, spoken, q.id);
  document.getElementById('confirm-btn').classList.add('hidden');
  document.getElementById('score-text').textContent = `${getFirstName(app.studentName)} · ${app.score}`;
  app._renderStreak();
  app.saveProgress();
  app.startNextTimer();
  return true;
}

/* Teacher review: answer a reading item by itself. true = handled. */
function readingAutoAnswer(app, q) {
  if (!q || !q.story || q.kind === 'watch') return false;
  if (q.type === 'ebsr') {
    [['A', q.partA], ['B', q.partB]].forEach(([part, d]) => {
      document.querySelectorAll(`#answers .answer-btn[data-part="${part}"]`).forEach(b => { if (b.dataset.answer === d.answer) readingPart(app, part, d.answer, b); });
    });
  } else if (q.type === 'hot' || q.type === 'ms') {
    document.querySelectorAll('#answers [data-multi]').forEach(el => { if (q.answers.includes(el.dataset.answer)) readingToggle(app, el.dataset.answer, el, q.pick); });
  } else {
    document.querySelectorAll('#answers .answer-btn').forEach(b => { if (b.dataset.answer === q.answer) app._selectChoice(q.answer, b); });
  }
  setTimeout(() => app.confirmAnswer(), 600);
  return true;
}

/* startSession: a student who keeps making one kind of mistake hears about it before the teaching starts */
function readingExtras(app, form, bank) {
  if (!isReadingForm(form) || reviewMode || SHARE_MODE) return null;
  const info = {};
  // ⭐ on the first try: one of their own practice misses, worked out, just before Your turn
  if (!(getFormAttempts(app.studentName)[form] || 0)) {
    const ex = practiceExample(form, app.studentName);
    if (ex) {
      const at = bank.findIndex(q => !q.kind);
      bank.splice(at < 0 ? bank.length : at, 0, ex);
      info.practice = ex.practice;
    }
  }
  const k = topKind(app.studentName);
  if (!k) return info;
  info.kw = k;
  const tally = readKinds(app.studentName);
  tally[k] = Math.floor(tally[k] / 2);      // said once: it comes back only if the mistake keeps happening
  writeKinds(app.studentName, tally);
  // right after "Now let's learn it" (or first, when Show what you know was skipped)
  const go = bank.findIndex(q => q.id === `${form}-GO`);
  const at = go >= 0 ? go + 1 : bank.findIndex(q => q.kind !== 'pre');
  const lines = LabReading.KIND_WATCH[k].split(/(?<=[.:?])\s+/).filter(Boolean);
  bank.splice(at < 0 ? 0 : at, 0, { id: `${form}-KW`, kind: 'watch', skill: 'Lab step', title: 'Before you start', text: lines.join('\n') });
  return info;
}

/* ══ ONE YOU MISSED BEFORE — from the class's SBAC Read Literary practice (Marcos 10/19: "tailored to each
   student's needs"). The lab-seed row carries the student's practice misses as "P <game>:<item> (<their pick>)",
   e.g. "P rliabw-review:W06 (Next, Leo filled each cup with dirt.)" (written by lab-docs/refresh-lab-seed.js).
   On a student's FIRST try at a reading lesson, one of their own misses of that lesson's kind is worked out as an
   example they must hear: the story, the paragraph, the question, what they picked, the right answer and why.
   The question comes from the practice site's own public data file (same site, read only). If that file cannot
   be read, the lesson simply goes on without the example. ══ */
const PRACTICE_KEY = 'lab_rpract_v1';   // + ':' + name → [{ game, id, pick }]
const PRACTICE_RE = /^P ([a-z0-9-]+):([A-Z]\d{2}(?:\.[AB])?) \((.*)\)$/;
// which practice questions each lesson works on (the Read Literary slots, data/skills.js there)
const PRACTICE_SLOTS = { RC1: ['08'], RC2: ['04', '09'], RC3: ['06', '15'], RC5: ['10', '14'], RC6: ['05', '07', '13'] };
// Levels 2 and 3 work on the same skills as Level 1 (RM4/RD4 Choose Two have none: the practice site's choose-two items are about word meaning)
Object.assign(PRACTICE_SLOTS, { RD1: PRACTICE_SLOTS.RC1, RD2: PRACTICE_SLOTS.RC2, RD3: PRACTICE_SLOTS.RC3,
  RM1: PRACTICE_SLOTS.RC1, RM2: PRACTICE_SLOTS.RC2, RM3: PRACTICE_SLOTS.RC3 });   // the new Level 2 (10/26) too
const PRACTICE_SITES = { rliab: { dir: '../sbac-read-literary-iab-review/data/', file: f => `form_${f}.js`, global: f => 'FORM_' + f.toUpperCase(), name: 'the SBAC reading practice' } };
function practiceOf(game) {
  const m = /^(rliab)([wabc])-review$/.exec(game || '');
  return m ? { ...PRACTICE_SITES[m[1]], form: m[2] } : null;
}
function notePractice(name, text) {
  if (!name) return;
  const list = [];
  String(text || '').split(' | ').forEach(entry => {
    const m = entry.trim().match(PRACTICE_RE);
    if (m && practiceOf(m[1])) list.push({ game: m[1], id: m[2], pick: m[3] });
  });
  try { localStorage.setItem(PRACTICE_KEY + ':' + name, JSON.stringify(list)); } catch (e) { /* storage full or blocked */ }
  preloadPractice(list);
}
function readPractice(name) {
  try { return JSON.parse(localStorage.getItem(PRACTICE_KEY + ':' + name) || '[]') || []; } catch (e) { return []; }
}
/* Load the practice files this student's misses come from (once each) */
const practiceLoading = {};
function preloadPractice(list) {
  (list || []).forEach(r => {
    const s = practiceOf(r.game);
    if (!s || window[s.global(s.form)] || practiceLoading[r.game]) return;
    practiceLoading[r.game] = true;
    const tag = document.createElement('script');
    tag.src = s.dir + s.file(s.form);
    tag.onerror = () => { practiceLoading[r.game] = 'failed'; };
    document.head.appendChild(tag);
  });
}
/* The worked example, or null */
function practiceExample(form, name) {
  const slots = PRACTICE_SLOTS[form];
  if (!slots) return null;
  for (const r of readPractice(name).slice().reverse()) {        // the newest miss first
    const s = practiceOf(r.game);
    const F = s && window[s.global(s.form)];
    if (!F || !slots.includes(r.id.slice(1, 3))) continue;
    const item = (F.items || []).find(it => it.id === r.id.split('.')[0]);
    const passage = item && (F.passages || [])[item.p];
    if (!item || !passage) continue;
    const part = r.id.split('.')[1];
    const data = item.type === 'ebsr' ? (part === 'A' ? item.partA : item.partB) : item;
    if (!data || !data.q) continue;
    const right = Array.isArray(data.answers) ? data.answers : [data.answer];
    if (!right[0]) continue;
    const lines = [`This one is yours. You missed this question on ${s.name}.`, `The story was "${passage.title}".`];
    // a question that showed text to read first (a summary, or paragraphs to reread): show that text too
    if (Array.isArray(item.excerpt) && item.excerpt.length) lines.push(`${String(item.excerptLabel || 'The text to read').replace(/^\W+\s*/, '')}: ${item.excerpt.join(' ')}`);
    const para = /paragraph (\d+)/i.exec(data.q || item.q || '');
    if (para && passage.paragraphs[para[1] - 1]) lines.push(`Paragraph ${para[1]} says: ${passage.paragraphs[para[1] - 1]}`);
    if (item.type === 'ebsr' && part === 'B') lines.push(`Part A asked: ${String(item.partA.q).replace(/^Part A — /, '')} The answer is: ${item.partA.answer}`);
    lines.push(`The question: ${String(data.q).replace(/^Part [AB] — /, '')}`);
    lines.push(`You picked: ${escR(String(r.pick).replace(/ \/ /g, ' and '))}`);   // the pick comes from the sheet: shown as text
    lines.push(right.length > 1 ? `The right answers: ${right.join(' and ')}` : `The right answer: ${right[0]}`);
    String(data.explanation || item.explanation || '').split(/(?<=[.!?])\s+/).filter(Boolean).forEach(x => lines.push(x));
    return { id: `${form}-YOU`, kind: 'watch', skill: 'Lab step', mine: true, title: 'One you missed before', text: lines.join('\n'), practice: `${r.game}:${r.id}` };
  }
  return null;
}

/* The end screen's tip: the kind of mistake made most in THIS try (2 or more), in the student's words */
const KIND_KID = {
  notproof: 'picking a sentence that is true but does not prove the idea', noclue: 'picking an answer the passage gives no clue for',
  toofar: 'picking an answer that goes too far', opposite: 'picking the opposite of what the passage shows',
  onedetail: 'picking one small detail instead of the main idea', wrongwho: 'picking something about the wrong person',
  wrongtime: 'picking a sentence from the wrong part of the passage', literal: 'taking a phrase word for word',
  insummary: 'picking an event the summary already tells'
};
function kindTip(seen) {
  const top = Object.entries(seen || {}).filter(([k, n]) => n >= 2 && KIND_KID[k]).sort((a, b) => b[1] - a[1])[0];
  return top ? `Watch out for ${KIND_KID[top[0]]}. You did that ${top[1]} times.` : '';
}
