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
