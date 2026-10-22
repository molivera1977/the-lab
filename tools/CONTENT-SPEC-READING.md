# The Lab, Reading for Meaning: content spec (for writing `data/rcN.js`)

## Who it is for
The Lab is Mr. O's back-to-basics site for the students in his Grade 4 class who are furthest behind. Most of them read well below grade level. Everything on screen is read aloud, and a student must hear each block to the end before going on.

On the Read Literary Texts interim test (10/20/2026), the class did well on one-answer questions (54%). The gaps were:
- Part A + Part B questions: 26%.
- "Click the TWO sentences": 26%.
- "Choose TWO": 22%.
- The written answer: 7%.

On the practice site, the most-missed skills were picking the sentence that PROVES an idea (46% missed), figurative language (40%), Part B support (39%), main idea (34%) and summary (31%).

This strand teaches those test formats and skills on **easy stories**, so that the format and the thinking are what is hard, not the words.

Mr. O's words that rule this work:
- "It's the process that I want them used to and the terminology." Use the test's own words and shapes: *passage*, *paragraph*, *BEST supports*, *Part A*, *Part B*, *Choose TWO*, *Click on the TWO sentences*.
- "We can never assume understanding." Teach every test word in a watch screen before any question uses it.
- "Nothing gets said once." Examples beat definitions.

## File format
One file per lesson: `data/rc1.js`, `data/rc2.js`, …

```js
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RC1 = {
  teach: {
    story: STORY,                 // the teaching story, the same in every version
    flow: [ WATCH | STEP, … ]     // in order: watch screens and small steps, all about the teaching story
  },
  versions: [                     // EXACTLY 4. A retry gets the next version, so each needs NEW stories.
    { pre:  { story: STORY, items: [ITEM, …] },              // 🎯 Show what you know
      turn: [ { story: STORY, items: [ITEM, …] },            // ✏️ Your turn, story A
              { story: STORY, items: [ITEM, …] } ] },        // ✏️ Your turn, story B
    { … }, { … }, { … }
  ]
};
```

**STORY** = `{ title: 'A Title', paragraphs: ['…', '…', …] }`
- Use 4 to 8 paragraphs. The site numbers them 1, 2, 3 … in the story panel.
- Titles must be unique across the whole Lab and must not match any title on Inference Practice, Read Literary or R.A.D. Practice. The checker fails a repeat.

**WATCH** = `{ kind: 'watch', id: 'W1', title: 'short title', lines: ['sentence', 'sentence', …], lit: ['EXACT sentence of the teaching story', …] }`
- `lines` are read aloud in one go, and the student must hear them to the end.
- Write one or two short sentences per line, 5 to 12 lines per watch.
- `lit` lights up those sentences in the story panel while the watch is on screen. It is optional, and each one must be an EXACT sentence.
- Teach a test word with an example the first time it appears, like this: "A paragraph is one part of a story. Each paragraph has a number."

**STEP** = `{ kind: 'step', id: 'S1', …an ITEM… }`
- A step is one small step of the thinking, on the teaching story. It is not scored.
- Use it to break the lesson's question into parts. Example: "What idea do we need to prove?", then "Which paragraph talks about that idea?", then the real question.
- Steps use the same item types as questions.

Ids:
- Show-what-you-know items: P1, P2, P3.
- Your-turn items: Q01, Q02, … across both stories.
- Teaching: W1, S1, W2, S2, …
- **Every version uses the same ids, types, skills and pick counts in the same order.** Only the stories and words change.

### ITEM types
The RIGHT choice comes FIRST, and the site shuffles the choices.

**mc** (one answer, 4 choices):
```js
{ id: 'Q01', type: 'mc', skill: 'Evidence selection',
  q: 'Which sentence from the passage BEST supports the idea that Rosa is patient?',
  choices: ['right', 'wrong', 'wrong', 'wrong'],
  kinds:   [null, 'notproof', 'wrongwho', 'notproof'],   // and/or notes: [null, 'own note', …]
  why: 'Paragraph 3 says … That shows …',
  evidence: true,   // set when every choice is a sentence from the passage; then each must be an EXACT sentence
  para: 3 }         // optional: the question is about paragraph 3 (the story panel marks it)
```

**ebsr** (Part A + Part B on one screen, exactly like the test; worth 2 points):
```js
{ id: 'Q01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
  a: { q: 'Part A — What can you infer about Omar?', choices: ['right', 'w', 'w', 'w'], kinds: [...], why: '…' },
  b: { choices: ['EXACT right sentence', 'EXACT sentence', 'EXACT sentence', 'EXACT sentence'], kinds: [null, 'notproof', …], why: '…' } }
```
- Part A's question starts with "Part A — ".
- Part B's question is always the test's own words, and the site adds them itself: "Part B — Which sentence from the passage BEST supports the answer in Part A?" Do not write `b.q`.
- All four Part B choices are EXACT sentences of the passage. The three wrong ones must NOT prove the Part A answer.

**hot** (click sentences, like the test's hot text):
```js
{ id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 2,
  q: 'The passage shows that Lena is BRAVE. Click on the TWO sentences from the passage that BEST support this idea.',
  list: ['EXACT sentence', 'EXACT sentence', …],   // OR  para: 4  (the sentences of paragraph 4 are clickable)
  answers: ['EXACT sentence', 'EXACT sentence'],
  kinds: { 'EXACT wrong sentence': 'notproof' },     // optional; a wrong sentence with no kind counts as notproof
  notes: { 'EXACT wrong sentence': 'Paragraph 2 says … That shows she is kind, not brave.' },   // optional
  why: '…' }
```
- `pick: 1` asks "Click on the sentence …". `pick: 2` asks "Click on the TWO sentences …".
- A `list` gives 5 or 6 exact sentences, in story order, from across the passage.
- A `para` paragraph must have at least 4 sentences for pick 1, and at least 5 for pick 2.
- Pick-2 is scored all or nothing, like the test.

**ms** (Choose TWO; later lessons): `{ id, type: 'ms', skill, pick: 2, q: '… Choose TWO answers.', choices: [right1, right2, w, w, w], kinds: [null, null, k, k, k], why }`

### Wrong choices must teach
Every wrong choice gets a `kinds` entry; the checker requires it, because the Lab counts kinds to notice when a student makes the same KIND of mistake again on a new story. A specific `notes` entry is extra but better: when present it is what the student hears, so name the paragraph in it.

| kind | what it means |
|---|---|
| `notproof` | the sentence is in the passage, but it does not prove the idea (the most important one for RC1 to RC3) |
| `noclue` | the passage gives no clue for this |
| `toofar` | too far; the clues do not prove this |
| `opposite` | the passage shows the opposite |
| `onedetail` | just one detail, not the main idea |
| `wrongwho` | about someone else in the passage |
| `wrongtime` | about a different part of the passage |
| `literal` | takes a phrase word for word |

- A note says only what THAT choice is about. It never gives away the answer to a later question on the same story. The checker fails a note or why line that quotes 7 or more words of a later question's answer sentence.
- Two questions on one story never share 2 or more wrong choices.
- Write wrong choices that a struggling reader could really pick. Make them the same length as the right one, about the same people, using words from the passage. The checker fails a version where the right answer is the longest choice in more than half the questions.
- A why line or note never names a choice by position ("the first choice", "choice B"), because choices shuffle.

## Reading level (the checker enforces this)
| Story | FK (Flesch-Kincaid) | Words |
|---|---|---|
| teaching story | 1.8 – 2.8 | 90 – 170 |
| Show what you know | 1.8 – 2.8 | 70 – 140 |
| Your turn (RC1, RC2) | 1.8 – 2.8 | 100 – 180 |
| Your turn (RC3: four click questions need more sentences) | 1.8 – 2.8 | 130 – 210 |

- FK = 0.39 × words/sentence + 11.8 × syllables/word − 15.59.
- Very short, simple sentences measure near 0. Aim for sentences of about 8 to 11 words, with some two-syllable words.
- Check one story with `node tools/fk.js "paragraph one" "paragraph two"`.
- Why lines, notes and watch lines read at FK 3.0 or less together per version.
- Questions use the test's stems, so they may run a little higher: FK 4.0 or less together.

## Writing rules
- **Original writing only.** Do not copy or retell published stories, Wonders texts, worksheets, or anything on Mr. O's other sites. In particular, do NOT reuse these premises, which other sites already use:
  - lemonade stands
  - snow forts or snow sculptures
  - free throws, last-second shots or last kicks
  - lost or missing dogs and cats
  - bean cups or seed planting in cups and egg cartons
  - bird feeders
  - worm bins
  - kites
  - face paint
  - spelling tests
  - class fish
  - blackouts
  - crossing guards
  - "The Big Snow Day"
  - folktales about soup, bowls, or a village spring
- **No student first names.** The checker reads the class roster and fails any of those first names. Also avoid these names, which are overused on the other sites: Kai, Dev, Jada, Nico, Tomas, June, Mateo, Leo, Maya, Theo, Rosa, Priya, Ana, Wes, Biscuit.
- **Stories:**
  - Kid-world realistic fiction: home, family, neighborhood, school, a city in fall or winter, sports, clubs, chores, helping someone.
  - One folktale or fable per lesson at most.
  - Every idea a question asks about must be SHOWN with two or more clues in the story, not stated. If the story says "Lena was brave," there is nothing to prove. Show her doing something brave instead.
- **Easy words.** Every word should be one a 2nd to 3rd grader can decode, or will hear read aloud. Repeat the noun instead of "it" or "they" when the reference is more than a sentence away.
- **Name the thing.** In questions, notes and why lines, write the noun, not "it": "the passage", "the sentence", "Rosa".
- **No blanks (____).**
- **Paragraph numbers.** Why lines and notes name the paragraph: "Paragraph 3 says …".
- **Dialogue in click areas.** Sentences split at `. ! ?` when the next word starts with a capital, a number or a quote mark. So `"Wait!" Sam said.` becomes TWO sentences. Inside any paragraph a question can click, write dialogue so that each sentence makes sense alone, e.g. `"Wait for me!" called Sam.`

## Lesson plans

### RC1: Find the Proof (skill: Evidence selection)
The lesson teaches one thing: the ONE sentence that PROVES an idea. It also teaches why a sentence can be TRUE (it is in the passage) but not PROOF (it does not show the idea).

**Words to teach in the first watch:** passage, paragraph, idea, proof, "supports" (= proves), BEST (= proves it the most). Use an everyday example of proof: "You say your little brother ate the cookies. Proof is the crumbs on his shirt."

**teach.flow:**
- W1 "What is proof?": the words above, with examples.
- W2 "Watch me find the proof": a worked example on the teaching story.
  1. Read the question and say the idea in our own words.
  2. Find the paragraph that talks about it.
  3. Read each sentence and ask, "Does this sentence SHOW the idea?"
  4. Name one sentence that is true but not proof, and say why.
  - Light up (`lit`) the proof sentence and the true-but-not-proof sentence.
- S1 mc: "What idea does the question ask us to prove?" (4 choices that are ideas.)
- S2 mc: "Which paragraph tells about [the idea]?" (choices "Paragraph 2", "Paragraph 3", …).
- S3 mc evidence: the real question on the teaching story.
- W3 "The three steps": 1. Say the idea. 2. Find where the passage talks about it. 3. Pick the sentence that SHOWS the idea. Then "Now you try."

**pre (Show what you know):** 3 mc evidence items on one story (P1 to P3).

**turn:**
- Story A: Q01 to Q04, all mc evidence.
- Story B: Q05 to Q08, all mc evidence.

Use these stems, filling in the names:
- "Which sentence from the passage BEST supports the idea that ___?"
- "Which detail from the passage BEST shows that ___?"
- "The passage shows that ___. Which sentence from the passage BEST supports this idea?"
- "Read paragraph N. Which sentence from paragraph N BEST shows that ___?" (with `para: N`)

Mix the ideas: what a character is like (kind, careful, brave, patient), how a character feels, and why something happens.

### RC2: Part A and Part B (skills: Part A per item, Part B = 'Supporting detail')
The lesson teaches that Part A is your answer and Part B is the sentence that proves Part A. Answer Part A first, then go back and find the proof. Part B is your R.A.D. Detail; the class knows R.A.D.: Restate, Answer, Detail.

**Words to teach:**
- "Part A" and "Part B" ("one question with two parts").
- "infer" (= figure out something the passage does not say, from clues), with an example.
- "conclusion" (= what the clues add up to).
- Remind them of "BEST supports" from RC1 in one line.

**teach.flow:**
- W1: two parts; infer, with an example.
- W2: a worked ebsr on the teaching story. Show Part A thinking (clue + what we know = the inference), then Part B (the sentence that is the clue). Light up the Part B sentence.
- S1 mc: Part A alone on the teaching story.
- S2 mc evidence: "Now prove it. Which sentence from the passage BEST supports [the Part A answer]?"
- S3 ebsr: a second full Part A + Part B on the teaching story, about a different idea.
- W3: "The steps": answer Part A; then find the sentence that proves your Part A answer; Part B is your Detail.

**pre:** P1 and P2, both ebsr, on one story (2 items, 4 points).

**turn:** each ebsr is worth 2 points, 8 points in all.
- Story A: Q01 ebsr ['Character inference', 'Supporting detail'] with Part A "Part A — What can you infer about ___?". Q02 ebsr ['Drawing conclusions', 'Supporting detail'] with Part A "Part A — What conclusion can be drawn about ___?"
- Story B: Q03 ebsr ['Character feelings', 'Supporting detail'] with Part A "Part A — How does ___ feel when ___?". Q04 ebsr ['Drawing conclusions', 'Supporting detail'] with Part A "Part A — Why does ___ ___?" (the reason is never stated).

### RC3: Click the Sentences (skill: Evidence selection)
The lesson teaches how to click a sentence: tap it, it turns yellow, tap again to take it back, then tap "That's My Answer!". It also teaches that "Click on the TWO sentences" means BOTH must prove the idea; one right and one wrong earns no point, like the test.

**Words to teach:** click, choose TWO. Remind them of "BEST supports" in one line.

**teach.flow:**
- W1: how clicking works, and what TWO means.
- W2: a worked example. Find the idea; look in the paragraph; check each sentence; the two that SHOW it. Light up the two right sentences.
- S1 hot pick 1, with `para`.
- S2 hot pick 2, with `list`.
- W3: the steps, plus "Check both. If one does not prove the idea, change it."

**pre:** P1 hot pick 1 with para, P2 hot pick 2 with list, P3 hot pick 2 with para.

**turn:** one story per lesson is not enough sentences, so make these stories 130 to 210 words.
- Story A: Q01 hot pick 1 with para ("Read paragraph N. Click on the sentence in paragraph N that BEST shows ___."). Q02 hot pick 2 with list. Q03 hot pick 2 with para. Q04 hot pick 2 with list.
- Story B: Q05 to Q08, the same four slots.
- The two list items on one story must use different sentences.

## Done means
`node tools/check-reading.js RC1` (or RC2, RC3) prints "✓ all checks passed". Then reread every story as a 9-year-old would:
- Is exactly one choice right?
- Could a careful reader defend a "wrong" choice? If so, fix it.
- Does every proof sentence truly SHOW the idea?
- Are the wrong sentences really in the passage but NOT proof?
- Are the four versions about different things from each other and from the other lessons?

---

# LEVEL 2: `data/rd1.js` – `rd4.js` (RD1 Find the Proof: Level 2 · RD2 Part A and Part B: Level 2 · RD3 Click the Sentences: Level 2 · RD4 Choose Two)

## Who Level 2 is for
Marcos 10/22: "I would like to offer growth opportunities to kids at all levels not just my low."
- Level 2 is for the middle and top readers of the class. They scored At/Near or Above on the Read Literary Texts IAB.
- They read at about grade level. On that IAB, these students got 73% of the one-answer questions right, but only 43% of the Part A + Part B, Choose TWO and click-the-sentences questions.
- So what is hard is the FORMAT, on a grade-level story, with wrong choices that are close to right. The words are not the hard part.
- Level 1 kids climb into Level 2 after they pass RC1–RC3, so Level 2 must also teach. Every test word is still taught in a watch screen.

Everything in the Level 1 spec above still holds, unless this section says otherwise. That covers the item types, the kinds, the writing rules, the banned premises, the banned names, the rules about dialogue in click areas, "name the thing" and the paragraph numbers.

## What is different in Level 2

### 1. A teaching story in EVERY version (a new worked example each try)
Marcos 10/21: a retry teaches with ONE method and NEW stories, never a second model.
- There is NO top-level `teach`.
- Each version carries its own `teach: { story, flow }`.
- All 4 flows have the SAME screens in the same order: the same ids, kinds, item types, pick counts and skills.
- Only the story, the worked example and the words change.
- W1 (the test words) and W3 (the steps) may say nearly the same thing in every version.
- W2 and the steps work on THAT version's teaching story.

```js
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RD1 = {
  versions: [   // EXACTLY 4
    { teach: { story: STORY, flow: [W1, W2, S1, S2, S3, W3] },
      pre:   { story: STORY, items: [...] },
      turn:  [ { story: STORY, items: [...] }, { story: STORY, items: [...] } ] },
    …
  ]
};
```

### 2. Grade 4–5 stories (the checker enforces this)
| Story | FK | Words | Paragraphs |
|---|---|---|---|
| Teaching story (one per version) | 3.5 – 4.5 | 180 – 280 | 4 – 10 |
| Show what you know | 4.0 – 5.0 | 180 – 280 | 4 – 10 |
| Your turn (RD1, RD2, RD4) | 4.0 – 5.0 | 280 – 400 | 4 – 10 |
| Your turn (RD3: click areas need sentences) | 4.0 – 5.0 | 320 – 450 | 4 – 10 |

- **Sentences:** to land at FK 4–5, write sentences of about 12 to 17 words with a normal mix of two- and three-syllable words. Mix in some short sentences for rhythm.
- **Words:** grade 4–5 words are fine, because every story is read aloud. Do not use words a 5th grader would not know.
- **Check one story:** `node tools/fk.js "paragraph one" "paragraph two" …`.
- **The teaching voice stays easy, the same as Level 1.**
  - The watch lines, the why lines, the notes, and the steps' why lines and notes must read at **FK 3.0 or less**, together per version.
  - Questions must read at **4.0 or less**.
  - So a why line PARAPHRASES the story in short sentences. It does not quote long story sentences. ("Paragraph 3 says that Ines checks the map twice before she turns.")

### 3. Close wrong choices: this is what makes Level 2 harder (the checker enforces the first two)
- **A "which sentence" question (`mc` with `evidence: true`) and every Part B:**
  - At least ONE wrong sentence comes from the SAME paragraph as the proof sentence.
  - That sentence is true and about the same moment, but it does not SHOW the idea (kind `notproof`).
  - Use the other wrong sentences for other traps: the right idea but the wrong person (`wrongwho`); a sentence from another part of the story (`wrongtime`).
- **Every Part A and every Choose TWO:** at least ONE wrong choice is PARTLY right.
  - `toofar`: the clues point that way, but the choice says more than they prove. ("Ines is the best map reader in her class.")
  - `onedetail`: it names one small detail, not the answer to the question.
  - A careful reader must check the passage to rule it out.
- **No silly wrong choices.** Every wrong choice is about the people and events in the story, uses the story's words, and is about as long as the right answer.
- **Still exactly one right answer** (two for Choose TWO). A wrong choice must be wrong for a reason you can say in one sentence and point to in the passage. The why or note says that reason.

### 4. Click questions (RD3)
- A pick-2 `list` has exactly **6** sentences, in story order, from across the passage.
- A pick-2 `para` paragraph has **6 or more** sentences.
- A pick-1 `para` paragraph has 4 or more.
- The two list questions on one story never share a sentence.

## Lesson plans

### RD1: Find the Proof: Level 2 (skill: Evidence selection)
- **Same as RC1, on longer stories with closer choices.**
- **The new teaching point:** a sentence can be in the right paragraph and about the right idea, and STILL not prove it. Proof SHOWS the idea with an action, a word or a detail.
- **teach.flow** (every version):
  - W1 "Proof, Level 2". Remind the class of: passage, paragraph, idea, proof, "supports" (= proves), BEST (= proves it the most). Then the new point, with an everyday example: "Your friend says the team is tired. 'The game was long' is about the game. 'Every player sat down on the grass' SHOWS they are tired."
  - W2 "Watch me find the BEST proof". A worked example on this version's teaching story:
    1. Say the idea.
    2. Find the paragraph.
    3. Test each sentence there.
    4. Name the CLOSE sentence (the same paragraph, about the idea, not proof) and why it is not proof.
    - `lit`: the proof sentence and the close sentence.
  - S1 mc: "What idea does the question ask us to prove?"
  - S2 mc: "Which paragraph tells about [the idea]?"
  - S3 mc evidence: the real question.
  - W3 "The steps, Level 2": 1. Say the idea. 2. Find the part of the passage about it. 3. Test EVERY sentence there. A sentence about the idea is not always proof. Pick the one that SHOWS it.
- **pre:** P1–P3, mc evidence, on one story. Include one "Read paragraph N" item (with `para: N`).
- **turn:**
  - Story A: Q01–Q04, mc evidence.
  - Story B: Q05–Q08, mc evidence.
  - Stems: the RC1 stems, plus the IAB's "Which detail from the passage BEST shows that ___?" and "Which sentence from the passage BEST shows how ___ feels about ___?"
  - Mix the ideas: what a character is like, how a character feels and why, why something happens, and how a character changes. Each story has at least one `para` item.

### RD2: Part A and Part B: Level 2 (skills: Part A per item, Part B = 'Supporting detail')
- **Same as RC2, with harder Part A questions.**
- **teach.flow** (every version):
  - W1 "One question, two parts". Part A, Part B, infer, conclusion; a one-line reminder of "BEST supports".
  - W2 "Watch me do Part A and Part B". A worked ebsr on the teaching story:
    - Part A: clue + what we know = the inference. Name the PARTLY-right choice (`toofar`) and why it goes too far.
    - Part B: the sentence that is the clue. Name the close sentence.
    - `lit`: the Part B sentence and the close sentence.
  - S1 mc: Part A alone.
  - S2 mc evidence: "Now prove it. Which sentence from the passage BEST supports [the Part A answer]?"
  - S3 ebsr: a second full Part A + Part B, about a different idea.
  - W3 "The steps".
- **pre:** P1 and P2, both ebsr (4 points): P1 ['Drawing conclusions', 'Supporting detail'] and P2 ['Character inference', 'Supporting detail'].
- **turn:** each ebsr is worth 2, so 8 points.
  - Story A:
    - Q01 ebsr ['Drawing conclusions', 'Supporting detail']: "Part A — What conclusion can the reader draw about ___?" (IAB item 4)
    - Q02 ebsr ['Character inference', 'Supporting detail']: "Part A — Which word BEST describes ___?" The Part A choices are four ONE-WORD traits, like the IAB's item 9: thoughtful, careless, proud, shy. One of them is partly right.
  - Story B:
    - Q03 ebsr ['Theme', 'Supporting detail']: "Part A — Which sentence BEST states a lesson of the story?" The four Part A choices are lessons:
      - one is right
      - one goes too far (`toofar`)
      - one is a lesson from a different story (`noclue`)
      - one is the opposite (`opposite`)
    - Q04 ebsr ['Drawing conclusions', 'Supporting detail']: "Part A — Why does ___ ___?" The reason is never stated; the reader infers it.

### RD3: Click the Sentences: Level 2 (skill: Evidence selection)
- **Same as RC3, with 6-sentence lists and longer paragraphs.**
- **teach.flow** (every version):
  - W1 "How to click". Tap a sentence and it turns yellow; tap it again to take it back. Choose TWO means BOTH must prove the idea, and one right plus one wrong earns no point, like the test.
  - W2 "Watch me find the TWO". Light up the two right sentences AND the close sentence.
  - S1 hot pick 1 with `para`.
  - S2 hot pick 2 with `list` (6).
  - W3 "The steps": check BOTH. If one does not SHOW the idea, change it.
- **pre:** P1 hot pick 1 with para, P2 hot pick 2 with list (6), P3 hot pick 2 with para (6+ sentences).
- **turn:** stories of 320–450 words.
  - Story A:
    - Q01 hot pick 1 with para: "Read paragraph N. Click on the sentence in paragraph N that BEST shows ___."
    - Q02 hot pick 2 with list (6).
    - Q03 hot pick 2 with para (6+ sentences).
    - Q04 hot pick 2 with list (6).
  - Story B: Q05–Q08, the same four slots.
- **Close sentences:** in every pick-2 item, at least one wrong clickable sentence is about the idea but does not prove it. Give it a `notes` entry that says why.

### RD4: Choose Two (Choose TWO about IDEAS: Marcos 10/22 picked ideas, not word meanings)
- **What it teaches:**
  - "Choose TWO" means two answers that are BOTH right. One right and one wrong earns no point, like the test.
  - Find one right answer first. Then test EVERY other choice against the passage. A choice can sound right and still go too far.
- **Item:** `{ id, type: 'ms', skill, pick: 2, q: '… Choose TWO answers.', choices: [right1, right2, w, w, w], kinds: [null, null, k, k, k], notes: [null, null, n, n, n], why }`
  - Exactly 5 choices: the TWO right ones first, then 3 wrong.
  - At least one wrong choice is `toofar` or `onedetail`.
  - The choices are idea statements, NOT story sentences, so do not set `evidence`.
  - The why names the paragraph for BOTH right answers.
- **teach.flow** (every version):
  - W1 "Choose TWO". What it means, all or nothing, and how to tap and untap.
  - W2 "Watch me choose TWO". A worked example: find the first right answer and its proof, then the second, then name the partly-right choice and why it goes too far.
  - S1 mc: "Which ONE of these is true about ___?" (the first right answer).
  - S2 mc: "One more answer is right. Which other one does the passage show?"
  - S3 ms: the full Choose TWO question.
  - W3 "The steps": 1. Read the question. 2. Find one answer the passage proves. 3. Test every other choice. 4. Pick the second one the passage proves. 5. Check both.
- **pre:** P1–P3, all ms, on one story, skills Character inference, Drawing conclusions, Theme.
- **turn:** 8 points.
  - Story A:
    - Q01 ms 'Character inference': "Which TWO sentences BEST describe ___? Choose TWO answers."
    - Q02 ms 'Drawing conclusions': "What can the reader conclude about ___? Choose TWO answers."
    - Q03 ms 'Character feelings': "Which TWO sentences BEST tell how ___ feels at the end of the passage? Choose TWO answers."
    - Q04 ms 'Theme': "Which TWO sentences BEST state lessons of the story? Choose TWO answers."
  - Story B: Q05–Q08, the same four slots.

## Stories already used (do not reuse these premises or titles)
- **Level 1 titles:**
  - **RC1:** The Boat on Grandpa's Table · Fudge Comes Home · Taco Night at Ezra's House · Muffins for 4B · Bo and the Shopping List · Celia's Cousin Sleeps Over · Down to the Basement · Stitches for Bun · Saturday Braids · The Hungry Toy Bin · Rory Learns to Whistle · Purple Frames with Stars · A Bed for Old Duke
  - **RC2:** Waves on a Blank Page · The Wrong Name on the Cake · Boots by the Big Red Truck · Salt on a String · Letters in the Wind · Whispers From the Side of the Stage · Ten Moves on Thursday · The Clay Turtle · Two Ropes in the Gym · The Silver Robot Box · The Pencil Captain · The Robot That Would Not Turn · An Apple in a Scarf
  - **RC3:** Milk from Mr. Vance's Store · Clean-Up Day at Willow Park · Bus 22 to the Big Tree · Keeping Score at the Bowling Alley · The Best Hiding Spot · A Card with Her Name on It · The Rake Next Door · The Last Potato Dig · Water Cups on Race Day · After School at the Corner Store · Under the Purple Umbrella · Grandpa's Hiccups · The Coat Box in the Lobby
- **Also banned:** the Level 1 banned premises, and the IAB's own passages (a rain barrel, a game-winning catch, a twig bundle).
- The checker also fails any title used on Inference Practice, Read Literary or R.A.D. Practice.

## Done means
- `node tools/check-reading.js RD1` (or RD2, RD3, RD4) prints "✓ all checks passed".
- Then reread every story as a careful 10-year-old would:
  - Is exactly one choice right (two for Choose TWO)?
  - Could a careful reader defend a "wrong" choice? If so, fix it.
  - Is the close sentence truly NOT proof?
  - Does every proof truly SHOW the idea?
  - Are the 4 versions about different things from each other and from every other Lab story?
