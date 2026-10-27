/* ═══════════════════════════════════════════════════════
   THE LAB · data/rp1.js — Reading for Meaning, RP1 "Find the Proof: One Paragraph" (skill: Evidence selection)
   A short practice lesson right before RC1. Every story is ONE paragraph, so the thinking is what is hard:
   the ONE sentence that SHOWS an idea, why a sentence can be TRUE but not PROOF, and the WRONG PERSON trap
   (Marcos 10/26: "true but not proof" and "the wrong person" were the most-missed kinds).
   Every version has its OWN teaching paragraph (a new worked example each try), taught the same way:
     teach.flow = W1 (the words) · W2 (worked example) · S1 (the idea) · S2 (the proof) · W3 (the steps)
     pre  = P1–P3 mc evidence on one paragraph
     turn = four one-paragraph stories (A–D) × 2 mc evidence = Q01–Q08, 8 points
   Shape: tools/CONTENT-SPEC-READING.md (ONE PARAGRAPH) · checked by: node tools/check-reading.js RP1
   The right choice is written FIRST; the site shuffles.
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RP1 = {
  versions: [
    /* ════════ VERSION 1 ════════ */
    {
      teach: {
        story: {
          title: `Socks on the Clothesline`,
          paragraphs: [
            `Nell and Grandma carried a basket of wet clothes to the backyard. Grandma tied a long rope from the fence to the old tree. Nell put two clothespins on each sock so the wind could not blow it away. The sun was warm, and a soft wind blew. Grandma hummed a happy song while she hung up the shirts. Soon all the sheets were flapping on the line. Nell ran in and out between the sheets and laughed.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof in one paragraph',
            lines: [
              `Today, each story is just one paragraph. A paragraph is a short part of a story.`,
              `An idea is a thing we think is true. Here is an idea: Nell is careful.`,
              `Proof is what shows that an idea is true.`,
              `Say you think your little brother ate the cookies. The crumbs on his shirt are proof.`,
              `On a test, the proof is a sentence from the paragraph.`,
              `Some questions say detail. Here, a detail is a sentence from the paragraph.`,
              `When a sentence supports an idea, it proves the idea. Supports means proves.`,
              `BEST means the most. The BEST sentence proves the idea the most.`,
              `Watch out. A sentence can be true, but not be proof.`,
              `Your brother had milk at lunch. That is true, but it does not prove he ate the cookies.`,
              `Watch out for the wrong person, too. Crumbs on your sister's shirt are not proof about your brother.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the proof',
            lines: [
              `Here is a question. Which sentence from the paragraph BEST supports the idea that Nell is careful?`,
              `Step 1. I say the idea in my own words. Nell takes care so nothing goes wrong.`,
              `Step 2. I check each sentence. I ask, does this sentence SHOW that Nell is careful?`,
              `Nell put two clothespins on each sock so the wind could not blow it away.`,
              `Yes! Two clothespins keep each sock safe from the wind. That shows Nell is careful.`,
              `So that sentence BEST supports the idea. It is my proof.`,
              `Watch out. I check one more sentence. Nell and Grandma carried a basket of wet clothes to the backyard.`,
              `That sentence is true. It is about Nell, too. But it does not show that she is careful. It tells where she went.`,
              `So that sentence is true, but it is not proof.`
            ],
            lit: [
              `Nell put two clothespins on each sock so the wind could not blow it away.`,
              `Nell and Grandma carried a basket of wet clothes to the backyard.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence BEST shows that Nell is happy? What idea does the question ask us to prove?`,
            choices: [`Nell is happy.`, `Nell is careful.`, `Grandma is happy.`, `Nell is sad.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'opposite'],
            notes: [null,
              `That was the idea in the last question. This question says happy.`,
              `The question asks about Nell, not Grandma.`,
              `That is the opposite of what the question says. The question says happy.`],
            why: `The question says Nell is happy. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Read the paragraph. Which sentence BEST shows that Nell is happy?`,
            choices: [
              `Nell ran in and out between the sheets and laughed.`,
              `Grandma hummed a happy song while she hung up the shirts.`,
              `Soon all the sheets were flapping on the line.`,
              `The sun was warm, and a soft wind blew.`],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              `This sentence shows that Grandma is happy. The question asks about Nell.`,
              `This sentence tells about the sheets. It does not show how Nell feels.`,
              `This sentence tells about the sun and the wind. It does not show how Nell feels.`],
            why: `The paragraph says Nell ran in and out between the sheets and laughed. Kids run and laugh like that when they are happy.` },
          { kind: 'watch', id: 'W3', title: 'The three steps',
            lines: [
              `You can find the proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Read each sentence in the paragraph.`,
              `Step 3. Pick the sentence that SHOWS the idea.`,
              `Remember, a sentence can be true, but not be proof.`,
              `Check the name, too. The proof must be about the right person.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Suds for Moose`,
          paragraphs: [
            `On Sunday, Moose, the family dog, rolled in a muddy puddle. Ross and his big sister, Pearl, filled the bathtub with warm water. Moose hid under the bed and whined. Ross sat beside the bed for a long time and held out a treat. Then Moose crept out, and Ross lifted him into the bathtub. Pearl rubbed soap all over the dog's muddy back. Moose shook hard, and bubbles flew all over the walls. Pearl laughed so hard that she had to sit down on the floor. Ross wiped the bubbles off his nose and giggled.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Read the paragraph. Which sentence BEST shows that Moose does not want a bath?`,
            choices: [
              `Moose hid under the bed and whined.`,
              `On Sunday, Moose, the family dog, rolled in a muddy puddle.`,
              `Ross and his big sister, Pearl, filled the bathtub with warm water.`,
              `Pearl rubbed soap all over the dog's muddy back.`],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              `This sentence tells why Moose needs a bath. It does not show how Moose feels about it.`,
              `This sentence is about Ross and Pearl getting the tub ready. It does not show how Moose feels.`,
              `This sentence tells how Pearl washed the dog. It does not show how Moose feels.`],
            why: `The paragraph says Moose hid under the bed and whined. A dog hides and whines when he does not want to do something.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The paragraph shows that Ross is patient. Which sentence BEST supports this idea?`,
            choices: [
              `Ross sat beside the bed for a long time and held out a treat.`,
              `Then Moose crept out, and Ross lifted him into the bathtub.`,
              `On Sunday, Moose, the family dog, rolled in a muddy puddle.`,
              `Ross wiped the bubbles off his nose and giggled.`],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              `This sentence tells how Moose got in the tub. It does not show Ross waiting.`,
              `This sentence tells about the mud. It does not show what Ross is like.`,
              `This sentence tells what Ross did at the end. It does not show that he can wait.`],
            why: `Patient means you can wait a long time and not give up. The paragraph says Ross sat beside the bed for a long time with a treat. He waited for Moose. That shows Ross is patient.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the paragraph BEST shows that Pearl thinks Moose is funny?`,
            choices: [
              `Pearl laughed so hard that she had to sit down on the floor.`,
              `Ross wiped the bubbles off his nose and giggled.`,
              `Moose shook hard, and bubbles flew all over the walls.`,
              `Pearl rubbed soap all over the dog's muddy back.`],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              `This sentence is about Ross, not Pearl. Ross giggled, but the question asks about Pearl.`,
              `This sentence tells what Moose did. It does not show how Pearl feels.`,
              `This sentence tells how Pearl washed the dog. It does not show that she thinks he is funny.`],
            why: `The paragraph says Pearl laughed so hard that she had to sit down. People laugh like that when something is funny.` }
        ]
      },
      turn: [
        {
          story: {
            title: `A Couch Too Wide`,
            paragraphs: [
              `A new blue couch came to Jay's apartment on Friday. Dad and Uncle Ray carried it up the stairs to the third floor. At the top, the couch got stuck in the front doorway. Dad's arms were shaking, and sweat dripped down his forehead. Uncle Ray sat down on the top step to catch his breath. Jay studied the couch and the doorway for a long, long time. "Stand the couch up on its end and turn it!" called Jay. The heavy couch slid right through the door, and everyone cheered.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the paragraph BEST shows that Jay has a smart idea?`,
              choices: [
                `"Stand the couch up on its end and turn it!" called Jay.`,
                `Jay studied the couch and the doorway for a long, long time.`,
                `At the top, the couch got stuck in the front doorway.`,
                `Dad and Uncle Ray carried it up the stairs to the third floor.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `This sentence says Jay looked at the couch for a long time. It does not tell his idea.`,
                `This sentence tells the problem with the couch. It is not Jay's idea.`,
                `This sentence tells how Dad and Uncle Ray got the couch up the stairs. It does not show Jay's idea.`],
              why: `The paragraph says Jay called out a new way to move the couch. Stand it on its end and turn it. His plan works, so it is a smart idea.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Dad is tired. Which sentence BEST supports this idea?`,
              choices: [
                `Dad's arms were shaking, and sweat dripped down his forehead.`,
                `Uncle Ray sat down on the top step to catch his breath.`,
                `The heavy couch slid right through the door, and everyone cheered.`,
                `A new blue couch came to Jay's apartment on Friday.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Uncle Ray is tired. The question asks about Dad.`,
                `This sentence tells how the couch got in. It does not show how Dad feels.`,
                `This sentence tells when the couch came. It does not show how Dad feels.`],
              why: `The paragraph says Dad's arms were shaking and sweat dripped down his forehead. That happens when you work hard and get tired.` }
          ]
        },
        {
          story: {
            title: `Shoes Before the Bus`,
            paragraphs: [
              `Val and her little brother, Bix, take the bus at eight each morning. On Monday, Bix pushed his cereal away and frowned at the bowl. Dad grumbled when his toast came out black. The clock on the wall said it was almost eight. Val tied Bix's shoes while he ate a bite of toast. Mom packed two lunches and set them by the door. The two kids ran to the corner just as the bus pulled up. Bix took a seat by the window and waved to Mom.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which detail BEST shows that Bix is grumpy?`,
              choices: [
                `On Monday, Bix pushed his cereal away and frowned at the bowl.`,
                `Dad grumbled when his toast came out black.`,
                `The clock on the wall said it was almost eight.`,
                `Bix took a seat by the window and waved to Mom.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Dad is grumpy about his toast. The question asks about Bix.`,
                `This sentence tells the time. It does not show how Bix feels.`,
                `This sentence tells what Bix did on the bus. It does not show that he is grumpy.`],
              why: `The paragraph says Bix pushed his cereal away and frowned at the bowl. Kids do that when they are grumpy.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The paragraph shows that Val helps her brother. Which sentence BEST supports this idea?`,
              choices: [
                `Val tied Bix's shoes while he ate a bite of toast.`,
                `Mom packed two lunches and set them by the door.`,
                `Val and her little brother, Bix, take the bus at eight each morning.`,
                `The two kids ran to the corner just as the bus pulled up.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Mom helps. The question asks about Val.`,
                `This sentence tells when the kids take the bus. It does not show Val helping.`,
                `This sentence tells how the kids got to the bus. It does not show Val helping Bix.`],
              why: `The paragraph says Val tied Bix's shoes while he ate. She did a job for him so he could get ready. That shows she helps her brother.` }
          ]
        },
        {
          story: {
            title: `Under the Big Red Hen`,
            paragraphs: [
              `Aunt Lil keeps four hens in a little coop behind her house. Each morning, Dash helps her look for eggs in the straw. Today, a big red hen sat right on top of the eggs. The hen puffed up her feathers and clucked at Dash. Dash's heart pounded, but he reached under the hen anyway. Dash held the warm egg in both hands so it would not fall. Aunt Lil set each egg on a soft towel so it would not crack. Later, they ate the eggs for breakfast with toast.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which sentence BEST shows that Dash is brave?`,
              choices: [
                `Dash's heart pounded, but he reached under the hen anyway.`,
                `The hen puffed up her feathers and clucked at Dash.`,
                `Each morning, Dash helps her look for eggs in the straw.`,
                `Later, they ate the eggs for breakfast with toast.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `This sentence tells what the hen did. It does not show what Dash did.`,
                `This sentence tells Dash's job each morning. It does not show that he is brave.`,
                `This sentence tells what they ate. It does not show that Dash is brave.`],
              why: `The paragraph says Dash's heart pounded, but he reached under the hen anyway. He was scared, and he did it anyway. That shows Dash is brave.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Dash is careful with the egg. Which sentence BEST supports this idea?`,
              choices: [
                `Dash held the warm egg in both hands so it would not fall.`,
                `Aunt Lil set each egg on a soft towel so it would not crack.`,
                `Today, a big red hen sat right on top of the eggs.`,
                `Later, they ate the eggs for breakfast with toast.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Aunt Lil is careful. The question asks about Dash.`,
                `This sentence tells where the hen sat. It does not show what Dash is like.`,
                `This sentence tells what they ate later. It does not show how Dash holds the egg.`],
              why: `The paragraph says Dash held the egg in both hands so it would not fall. He keeps the egg safe. That shows Dash is careful.` }
          ]
        },
        {
          story: {
            title: `The Wobbly Kitchen Chair`,
            paragraphs: [
              `Grandpa's old kitchen chair wobbled each time someone sat on it. On Sunday, Ivo crawled under the chair to take a look. One leg was loose, and a tiny screw lay on the rug. Grandpa got his red toolbox down from the top shelf. Ivo held the leg still while Grandpa turned the screw tight. Then Ivo sat on the chair and gave a big bounce. The chair did not wobble one bit, and Ivo grinned. At dinner, Grandpa told everyone that Ivo found the loose leg.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which sentence BEST shows why the chair wobbled?`,
              choices: [
                `One leg was loose, and a tiny screw lay on the rug.`,
                `On Sunday, Ivo crawled under the chair to take a look.`,
                `Grandpa got his red toolbox down from the top shelf.`,
                `Then Ivo sat on the chair and gave a big bounce.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `This sentence says Ivo crawled under to look. It does not tell what was wrong.`,
                `This sentence tells where Grandpa got his toolbox. It does not tell what was wrong with the chair.`,
                `This sentence tells how Ivo tested the chair. It does not tell why it wobbled.`],
              why: `The paragraph says one leg was loose and a screw lay on the rug. A loose leg makes a chair wobble.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The paragraph shows that Grandpa is proud of Ivo. Which sentence BEST supports this idea?`,
              choices: [
                `At dinner, Grandpa told everyone that Ivo found the loose leg.`,
                `The chair did not wobble one bit, and Ivo grinned.`,
                `Ivo held the leg still while Grandpa turned the screw tight.`,
                `Grandpa's old kitchen chair wobbled each time someone sat on it.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Ivo is proud of the fix. The question asks how Grandpa feels.`,
                `This sentence tells how they fixed the leg. It does not show how Grandpa feels.`,
                `This sentence tells about the chair at the start. It does not show how Grandpa feels.`],
              why: `Proud means you feel good about what someone did. The paragraph says Grandpa told everyone that Ivo found the loose leg. You tell everyone when you are proud.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 2 ════════ */
    {
      teach: {
        story: {
          title: `A Green Wall for Cam`,
          paragraphs: [
            `Cam picked a bright green paint for his bedroom wall. On Saturday, Mom spread old sheets over the bed and the floor. Cam painted slowly by the window so no green got on the glass. Mom painted the high part of the wall from a ladder. By lunch, the whole wall was as green as a leaf. Cam stood back and grinned at the wall he painted. Mom took a picture of the wall to send to Grandma.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof in one paragraph',
            lines: [
              `Today, each story is just one paragraph. A paragraph is a short part of a story.`,
              `An idea is a thing we think is true. Here is an idea: Cam is careful.`,
              `Proof is what shows that an idea is true.`,
              `Say you think your little brother ate the cookies. The crumbs on his shirt are proof.`,
              `On a test, the proof is a sentence from the paragraph.`,
              `Some questions say detail. Here, a detail is a sentence from the paragraph.`,
              `When a sentence supports an idea, it proves the idea. Supports means proves.`,
              `BEST means the most. The BEST sentence proves the idea the most.`,
              `Watch out. A sentence can be true, but not be proof.`,
              `Your brother had milk at lunch. That is true, but it does not prove he ate the cookies.`,
              `Watch out for the wrong person, too. Crumbs on your sister's shirt are not proof about your brother.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the proof',
            lines: [
              `Here is a question. Which sentence from the paragraph BEST supports the idea that Cam is careful?`,
              `Step 1. I say the idea in my own words. Cam takes care so he does not make a mess.`,
              `Step 2. I check each sentence. I ask, does this sentence SHOW that Cam is careful?`,
              `Cam painted slowly by the window so no green got on the glass.`,
              `Yes! He goes slow so the glass stays clean. That shows Cam is careful.`,
              `So that sentence BEST supports the idea. It is my proof.`,
              `Watch out. I check one more sentence. Cam picked a bright green paint for his bedroom wall.`,
              `That sentence is true. It is about Cam, too. But it does not show that he is careful. It tells what color he picked.`,
              `So that sentence is true, but it is not proof.`
            ],
            lit: [
              `Cam painted slowly by the window so no green got on the glass.`,
              `Cam picked a bright green paint for his bedroom wall.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence BEST shows that Cam likes his new wall? What idea does the question ask us to prove?`,
            choices: [`Cam likes his new wall.`, `Cam is careful.`, `Mom likes the new wall.`, `Grandma likes green.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'wrongwho'],
            notes: [null,
              `That was the idea in the last question. This question asks if Cam likes the wall.`,
              `The question asks about Cam, not Mom.`,
              `The question asks about Cam, not Grandma.`],
            why: `The question says Cam likes his new wall. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Read the paragraph. Which sentence BEST shows that Cam likes his new wall?`,
            choices: [
              `Cam stood back and grinned at the wall he painted.`,
              `Mom took a picture of the wall to send to Grandma.`,
              `By lunch, the whole wall was as green as a leaf.`,
              `Mom painted the high part of the wall from a ladder.`],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              `This sentence shows that Mom likes the wall. She wants Grandma to see it. The question asks about Cam.`,
              `This sentence tells what color the wall is. It does not show how Cam feels.`,
              `This sentence tells what Mom painted. It does not show how Cam feels.`],
            why: `The paragraph says Cam stood back and grinned at the wall. A big grin shows he likes what he sees.` },
          { kind: 'watch', id: 'W3', title: 'The three steps',
            lines: [
              `You can find the proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Read each sentence in the paragraph.`,
              `Step 3. Pick the sentence that SHOWS the idea.`,
              `Remember, a sentence can be true, but not be proof.`,
              `Check the name, too. The proof must be about the right person.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Ten Plates on Sunday`,
          paragraphs: [
            `Each Sunday, Viv's big family eats at Grandma's house. This week, it was Viv's job to set the long table. Viv counted the plates two times to be sure there were ten. Grandma carried the hot pot of rice with two oven mitts. Viv let her little cousin Tad put a napkin by each plate. When they all sat down, Uncle Joe said the table looked great. Viv sat up tall with a big smile on her face. Tad grinned and pointed at each napkin he put down.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Read the paragraph. Which sentence BEST shows that Viv is careful?`,
            choices: [
              `Viv counted the plates two times to be sure there were ten.`,
              `Grandma carried the hot pot of rice with two oven mitts.`,
              `This week, it was Viv's job to set the long table.`,
              `Each Sunday, Viv's big family eats at Grandma's house.`],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              `This sentence shows that Grandma is careful with the hot pot. The question asks about Viv.`,
              `This sentence tells what Viv's job was. It does not show how she did it.`,
              `This sentence tells where the family eats. It does not show what Viv is like.`],
            why: `The paragraph says Viv counted the plates two times. She checks so nothing goes wrong. That shows Viv is careful.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The paragraph shows that Viv feels proud. Which sentence BEST supports this idea?`,
            choices: [
              `Viv sat up tall with a big smile on her face.`,
              `Tad grinned and pointed at each napkin he put down.`,
              `When they all sat down, Uncle Joe said the table looked great.`,
              `This week, it was Viv's job to set the long table.`],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              `This sentence shows that Tad feels proud of his napkins. The question asks about Viv.`,
              `This sentence tells what Uncle Joe said. It does not show how Viv feels.`,
              `This sentence tells what Viv's job was. It does not show how she feels.`],
            why: `Proud means you feel good about what you did. The paragraph says Viv sat up tall and smiled. People sit up tall when they are proud.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which detail from the paragraph BEST shows that Viv is kind to Tad?`,
            choices: [
              `Viv let her little cousin Tad put a napkin by each plate.`,
              `Tad grinned and pointed at each napkin he put down.`,
              `Each Sunday, Viv's big family eats at Grandma's house.`,
              `Viv counted the plates two times to be sure there were ten.`],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              `This sentence is about Tad. It shows how Tad feels, not what Viv did for him.`,
              `This sentence tells where the family eats. It does not show Viv being kind.`,
              `This sentence shows Viv counting plates. It does not show what she did for Tad.`],
            why: `The paragraph says Viv let her little cousin put out the napkins. She gave Tad a job so he could help too. That shows Viv is kind to Tad.` }
        ]
      },
      turn: [
        {
          story: {
            title: `The Same Duck Book`,
            paragraphs: [
              `Every night, Ian reads a bedtime story to his little sister, Dot. Dot always picks the same funny book about a duck. The duck book is so old that the cover is falling off. Tonight, Ian did not groan, and he started the duck book one more time. Ian made a silly quack for the duck on each page. Dot giggled and kicked her feet under the blanket. Out in the hall, Mom laughed at the silly quack too. By the last page, Dot was fast asleep.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which sentence BEST shows that Ian is patient?`,
              choices: [
                `Tonight, Ian did not groan, and he started the duck book one more time.`,
                `Dot always picks the same funny book about a duck.`,
                `Ian made a silly quack for the duck on each page.`,
                `By the last page, Dot was fast asleep.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `This sentence tells which book Dot picks. It does not show what Ian is like.`,
                `This sentence tells how Ian makes the story fun. It does not show that he stays calm about the same book.`,
                `This sentence tells how the night ends. It does not show what Ian is like.`],
              why: `Patient means you stay calm and do not get upset, even when you do the same thing again and again. The paragraph says Ian did not groan, and he started the same book one more time. That shows Ian is patient.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Dot thinks the quack is funny. Which sentence BEST supports this idea?`,
              choices: [
                `Dot giggled and kicked her feet under the blanket.`,
                `Out in the hall, Mom laughed at the silly quack too.`,
                `Every night, Ian reads a bedtime story to his little sister, Dot.`,
                `The duck book is so old that the cover is falling off.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Mom thinks the quack is funny. The question asks about Dot.`,
                `This sentence tells when Ian reads to Dot. It does not show how Dot feels.`,
                `This sentence tells about the old book. It does not show how Dot feels.`],
              why: `The paragraph says Dot giggled and kicked her feet. Kids giggle like that when something is funny.` }
          ]
        },
        {
          story: {
            title: `Three Steps for Tim`,
            paragraphs: [
              `Gia's baby brother, Tim, could stand, but he could not walk yet. On Sunday, Gia sat on the carpet and held out her arms to him. Tim let go of the table and wobbled on his chubby little legs. Then Tim took one step, then two, then three! Gia gasped and put both hands over her mouth. Tim plopped into her arms and laughed a big baby laugh. Gia called Dad, and Tim walked three steps again. Dad's eyes got wide, and he dropped his dish towel.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the paragraph BEST shows that Gia is surprised?`,
              choices: [
                `Gia gasped and put both hands over her mouth.`,
                `Dad's eyes got wide, and he dropped his dish towel.`,
                `On Sunday, Gia sat on the carpet and held out her arms to him.`,
                `Gia's baby brother, Tim, could stand, but he could not walk yet.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Dad is surprised. The question asks about Gia.`,
                `This sentence tells where Gia sat. It does not show how she feels.`,
                `This sentence tells what Tim could do before. It does not show how Gia feels.`],
              why: `The paragraph says Gia gasped and put her hands over her mouth. People do that when something surprises them.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The paragraph shows that Tim is happy. Which sentence BEST supports this idea?`,
              choices: [
                `Tim plopped into her arms and laughed a big baby laugh.`,
                `Tim let go of the table and wobbled on his chubby little legs.`,
                `Then Tim took one step, then two, then three!`,
                `Gia called Dad, and Tim walked three steps again.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `This sentence tells how Tim stood. It does not show how he feels.`,
                `This sentence tells what Tim did. It does not show how he feels.`,
                `This sentence tells that Gia called Dad and Tim walked again. It does not show how Tim feels.`],
              why: `The paragraph says Tim plopped into Gia's arms and laughed a big baby laugh. A big laugh shows he is happy.` }
          ]
        },
        {
          story: {
            title: `Top Bunk, Bottom Bunk`,
            paragraphs: [
              `The new bunk bed came in two big boxes on Friday. Dad put it together in the room that Ava shares with her brother, Rio. Ava grinned when she saw the tall bed standing up. Rio jumped up and down and begged for the top bunk. Ava looked up at the top bunk and then at her little brother. "You can have the top, and I will take the bottom," said Ava. Rio climbed up the ladder so fast that he bumped his head. That night, Rio leaned over the side and whispered, "Thank you, Ava."`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which sentence BEST shows that Ava is kind to Rio?`,
              choices: [
                `"You can have the top, and I will take the bottom," said Ava.`,
                `Ava looked up at the top bunk and then at her little brother.`,
                `Dad put it together in the room that Ava shares with her brother, Rio.`,
                `The new bunk bed came in two big boxes on Friday.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `This sentence says Ava looked at the bunk and at Rio. It does not show what she did for him.`,
                `This sentence tells how Dad put the bed together. It does not show Ava being kind.`,
                `This sentence tells when the bed came. It does not show Ava being kind.`],
              why: `The paragraph says Ava gave Rio the top bunk and took the bottom. She let her brother have what he wanted. That shows Ava is kind.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The paragraph shows that Rio is excited. Which sentence BEST supports this idea?`,
              choices: [
                `Rio jumped up and down and begged for the top bunk.`,
                `Ava grinned when she saw the tall bed standing up.`,
                `That night, Rio leaned over the side and whispered, "Thank you, Ava."`,
                `The new bunk bed came in two big boxes on Friday.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Ava is happy about the bed. The question asks about Rio.`,
                `This sentence shows Rio saying thank you. It does not show that he is excited.`,
                `This sentence tells when the bed came. It does not show how Rio feels.`],
              why: `The paragraph says Rio jumped up and down and begged for the top bunk. Kids jump up and down when they are excited.` }
          ]
        },
        {
          story: {
            title: `Clippers in the Kitchen`,
            paragraphs: [
              `On Saturday, Dad said he would cut Zed's hair in the kitchen. Zed sat on a tall stool with a towel around his neck. Zed gripped the stool with both hands and shut his eyes tight. Dad's hands shook a bit as he turned on the clippers. The clippers buzzed like a bee near Zed's ears. His little sister, Noa, sat on the counter and ate purple grapes. At last, Dad held up a mirror. Zed rubbed his short, spiky hair and grinned at the mirror.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which sentence BEST shows that Zed feels nervous?`,
              choices: [
                `Zed gripped the stool with both hands and shut his eyes tight.`,
                `Dad's hands shook a bit as he turned on the clippers.`,
                `Zed sat on a tall stool with a towel around his neck.`,
                `His little sister, Noa, sat on the counter and ate purple grapes.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Dad feels nervous. The question asks about Zed.`,
                `This sentence tells where Zed sat. It does not show how he feels.`,
                `This sentence tells what Noa did. It does not show how Zed feels.`],
              why: `The paragraph says Zed gripped the stool and shut his eyes tight. People do that when they feel nervous.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which detail from the paragraph BEST shows that Zed likes his new haircut?`,
              choices: [
                `Zed rubbed his short, spiky hair and grinned at the mirror.`,
                `At last, Dad held up a mirror.`,
                `The clippers buzzed like a bee near Zed's ears.`,
                `On Saturday, Dad said he would cut Zed's hair in the kitchen.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `This sentence tells that Dad held up a mirror. It does not show how Zed feels.`,
                `This sentence tells how the clippers sound. It does not show how Zed feels.`,
                `This sentence tells what Dad said at the start. It does not show how Zed feels.`],
              why: `The paragraph says Zed rubbed his short hair and grinned at the mirror. A grin shows he likes his new haircut.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 3 ════════ */
    {
      teach: {
        story: {
          title: `Peas for Baby Eve`,
          paragraphs: [
            `Tonight, Gem had to feed her baby sister, Eve. Mom set a bowl of mashed peas on the baby's high chair. Eve pressed her lips shut and turned her head away. Dad looked at the lumpy green mush and made a face. Gem tried again and again, one small bite at a time. Then she flew the spoon through the air like a little airplane. Eve opened her mouth wide and ate the whole bite. Soon there were peas on Eve's chin, her hands and even her hair.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof in one paragraph',
            lines: [
              `Today, each story is just one paragraph. A paragraph is a short part of a story.`,
              `An idea is a thing we think is true. Here is an idea: Gem is patient.`,
              `Proof is what shows that an idea is true.`,
              `Say you think your little brother ate the cookies. The crumbs on his shirt are proof.`,
              `On a test, the proof is a sentence from the paragraph.`,
              `Some questions say detail. Here, a detail is a sentence from the paragraph.`,
              `When a sentence supports an idea, it proves the idea. Supports means proves.`,
              `BEST means the most. The BEST sentence proves the idea the most.`,
              `Watch out. A sentence can be true, but not be proof.`,
              `Your brother had milk at lunch. That is true, but it does not prove he ate the cookies.`,
              `Watch out for the wrong person, too. Crumbs on your sister's shirt are not proof about your brother.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the proof',
            lines: [
              `Here is a question. Which sentence from the paragraph BEST supports the idea that Gem is patient?`,
              `Step 1. I say the idea in my own words. Gem keeps on trying, and she does not get upset.`,
              `Step 2. I check each sentence. I ask, does this sentence SHOW that Gem is patient?`,
              `Gem tried again and again, one small bite at a time.`,
              `Yes! She tries again and again, one small bite at a time. That shows Gem is patient.`,
              `So that sentence BEST supports the idea. It is my proof.`,
              `Watch out. I check one more sentence. Tonight, Gem had to feed her baby sister, Eve.`,
              `That sentence is true. It is about Gem, too. But it does not show that she is patient. It tells what her job was.`,
              `So that sentence is true, but it is not proof.`
            ],
            lit: [
              `Gem tried again and again, one small bite at a time.`,
              `Tonight, Gem had to feed her baby sister, Eve.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence BEST shows that Eve does not like the peas? What idea does the question ask us to prove?`,
            choices: [`Eve does not like the peas.`, `Gem is patient.`, `Dad does not like the peas.`, `Eve wants more peas.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'opposite'],
            notes: [null,
              `That was the idea in the last question. This question asks about Eve and the peas.`,
              `The question asks about Eve, not Dad.`,
              `That is the opposite of what the question asks.`],
            why: `The question says Eve does not like the peas. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Read the paragraph. Which sentence BEST shows that Eve does not like the peas?`,
            choices: [
              `Eve pressed her lips shut and turned her head away.`,
              `Dad looked at the lumpy green mush and made a face.`,
              `Mom set a bowl of mashed peas on the baby's high chair.`,
              `Eve opened her mouth wide and ate the whole bite.`],
            kinds: [null, 'wrongwho', 'notproof', 'opposite'],
            notes: [null,
              `This sentence shows that Dad does not like the peas. The question asks about Eve.`,
              `This sentence tells what Mom put on the high chair. It does not show how Eve feels.`,
              `This sentence shows Eve eating a bite. It does not show that she does not like the peas.`],
            why: `The paragraph says Eve pressed her lips shut and turned her head away. Babies do that when they do not want the food.` },
          { kind: 'watch', id: 'W3', title: 'The three steps',
            lines: [
              `You can find the proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Read each sentence in the paragraph.`,
              `Step 3. Pick the sentence that SHOWS the idea.`,
              `Remember, a sentence can be true, but not be proof.`,
              `Check the name, too. The proof must be about the right person.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Two Bags for Monday`,
          paragraphs: [
            `On Sunday night, Tom packs the school lunches for Monday. He makes one for himself and one for his big sister, Joy. Tom checks the list on the fridge two times so he will not forget anything. Joy has band practice, so she is not home to help. Tom tucks a funny drawing of a kitten into Joy's bag. Mom grins and slips an extra cookie into Tom's bag. Dad yawns and says it is almost time for bed. Tom rubs his eyes and lets out a long, slow yawn. Then Tom says good night and turns off the kitchen light.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Read the paragraph. Which sentence BEST shows that Tom is careful?`,
            choices: [
              `Tom checks the list on the fridge two times so he will not forget anything.`,
              `He makes one for himself and one for his big sister, Joy.`,
              `Joy has band practice, so she is not home to help.`,
              `Then Tom says good night and turns off the kitchen light.`],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              `This sentence tells who the lunches are for. It does not show how Tom packs them.`,
              `This sentence tells why Joy is not home. It does not show how Tom packs the lunches.`,
              `This sentence tells what Tom does at the end. It does not show that he is careful.`],
            why: `The paragraph says Tom checks the list two times so he will not forget anything. He checks so nothing goes wrong. That shows Tom is careful.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The paragraph shows that Tom is kind to Joy. Which sentence BEST supports this idea?`,
            choices: [
              `Tom tucks a funny drawing of a kitten into Joy's bag.`,
              `Mom grins and slips an extra cookie into Tom's bag.`,
              `Dad yawns and says it is almost time for bed.`,
              `Joy has band practice, so she is not home to help.`],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              `This sentence shows that Mom is kind to Tom. The question asks what Tom does for Joy.`,
              `This sentence is about Dad and bedtime. It does not show what Tom does for Joy.`,
              `This sentence is about Joy and band practice. It does not show what Tom does for her.`],
            why: `The paragraph says Tom puts a funny drawing in Joy's bag. He wants to make his sister smile. That shows Tom is kind to Joy.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which detail from the paragraph BEST shows that Tom is tired?`,
            choices: [
              `Tom rubs his eyes and lets out a long, slow yawn.`,
              `Dad yawns and says it is almost time for bed.`,
              `He makes one for himself and one for his big sister, Joy.`,
              `On Sunday night, Tom packs the school lunches for Monday.`],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              `This sentence shows that Dad is tired. The question asks about Tom.`,
              `This sentence tells who the lunches are for. It does not show how Tom feels.`,
              `This sentence tells when Tom packs the lunches. It does not show how he feels.`],
            why: `The paragraph says Tom rubs his eyes and lets out a long yawn. People rub their eyes and yawn when they are tired.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Milk on the Floor`,
            paragraphs: [
              `Avi's little brother, Roo, wanted to pour his own glass of milk. The big jug slipped, and white milk spread across the kitchen floor. Roo's lip shook, and his eyes got wet. Their old dog, Noodle, licked up a puddle by the table. Avi grabbed the mop and wiped up every last drop. Then Roo held the jug with both hands and poured a new glass. This time, he did not spill a single drop, and he grinned at Avi.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which sentence BEST shows that Roo feels upset?`,
              choices: [
                `Roo's lip shook, and his eyes got wet.`,
                `The big jug slipped, and white milk spread across the kitchen floor.`,
                `Their old dog, Noodle, licked up a puddle by the table.`,
                `This time, he did not spill a single drop, and he grinned at Avi.`],
              kinds: [null, 'notproof', 'notproof', 'opposite'],
              notes: [null,
                `This sentence tells what spilled. It tells why Roo might be upset, but it does not show how he feels.`,
                `This sentence tells what the dog, Noodle, did. It does not show how Roo feels.`,
                `This sentence shows Roo grinning at the end. That shows he feels better, not upset.`],
              why: `The paragraph says Roo's lip shook and his eyes got wet. Kids look like that when they are upset.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Avi is helpful. Which sentence BEST supports this idea?`,
              choices: [
                `Avi grabbed the mop and wiped up every last drop.`,
                `Their old dog, Noodle, licked up a puddle by the table.`,
                `Avi's little brother, Roo, wanted to pour his own glass of milk.`,
                `Then Roo held the jug with both hands and poured a new glass.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence is about the dog, not Avi. Noodle licked up some milk, but the question asks about Avi.`,
                `This sentence tells what Roo wanted to do. It does not show Avi helping.`,
                `This sentence tells what Roo did next. It does not show Avi helping.`],
              why: `The paragraph says Avi grabbed the mop and wiped up every drop. Avi cleaned up the mess. That shows Avi is helpful.` }
          ]
        },
        {
          story: {
            title: `Green Beans on the Back Steps`,
            paragraphs: [
              `Zia and Grandma sat on the back steps with a big bowl of green beans. Grandma showed Zia how to snap the end off each bean. Zia sighed and snapped the beans very, very slowly. A fat cat on the next step yawned and shut its eyes. Then Grandma told about the time she fell in a pond in her best dress. Zia laughed so hard that the bowl slid off her lap. Green beans rolled all over the steps and into the grass. Grandma and Zia picked them up, still giggling.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which sentence BEST shows that Zia is bored at first?`,
              choices: [
                `Zia sighed and snapped the beans very, very slowly.`,
                `A fat cat on the next step yawned and shut its eyes.`,
                `Grandma showed Zia how to snap the end off each bean.`,
                `Green beans rolled all over the steps and into the grass.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence is about the cat. The cat yawned, but the question asks about Zia.`,
                `This sentence tells what Grandma showed Zia. It does not show how Zia feels.`,
                `This sentence tells where the beans rolled. It does not show how Zia feels.`],
              why: `Bored means you do not find a thing fun. The paragraph says Zia sighed and snapped the beans very slowly. That shows Zia is bored at first.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the paragraph BEST shows why the beans spilled?`,
              choices: [
                `Zia laughed so hard that the bowl slid off her lap.`,
                `Green beans rolled all over the steps and into the grass.`,
                `Grandma and Zia picked them up, still giggling.`,
                `Zia and Grandma sat on the back steps with a big bowl of green beans.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `This sentence tells where the beans went after they spilled. It does not tell why they spilled.`,
                `This sentence tells what Grandma and Zia did after. It does not tell why the beans spilled.`,
                `This sentence tells where Zia and Grandma sat. It does not tell why the beans spilled.`],
              why: `The paragraph says Zia laughed so hard that the bowl slid off her lap. The bowl fell, so the beans spilled.` }
          ]
        },
        {
          story: {
            title: `A Pill Inside the Cheese`,
            paragraphs: [
              `Fig, the family cat, had to take a pill each night for a week. On the first night, Fig spit the pill out and hid under the bed. On the next night, Mom hid the pill in a spoon of tuna. Fig licked up the tuna and left the pill in the spoon. Len sat on the kitchen floor and thought for a long time. Then Len told Mom to hide the pill deep inside a little lump of yellow cheese. Fig gobbled up the cheese and licked her whiskers. Len gave Fig a gentle pat on the head.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which sentence BEST shows that Fig likes the cheese?`,
              choices: [
                `Fig gobbled up the cheese and licked her whiskers.`,
                `Fig licked up the tuna and left the pill in the spoon.`,
                `Fig, the family cat, had to take a pill each night for a week.`,
                `Len sat on the kitchen floor and thought for a long time.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `This sentence is about the tuna, not the cheese. Fig left the pill behind.`,
                `This sentence tells why Fig needs a pill. It does not show how she feels about the cheese.`,
                `This sentence tells that Len was thinking. It does not show how Fig feels about the cheese.`],
              why: `The paragraph says Fig gobbled up the cheese and licked her whiskers. A cat eats fast like that when she likes the food.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The paragraph shows that Len thinks of a smart plan. Which sentence BEST supports this idea?`,
              choices: [
                `Then Len told Mom to hide the pill deep inside a little lump of yellow cheese.`,
                `On the next night, Mom hid the pill in a spoon of tuna.`,
                `On the first night, Fig spit the pill out and hid under the bed.`,
                `Len gave Fig a gentle pat on the head.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence tells about Mom's plan, not Len's plan. Her plan did not work.`,
                `This sentence tells what Fig did the first night. It does not show Len's plan.`,
                `This sentence tells what Len did at the end. It does not show his plan.`],
              why: `The paragraph says Len told Mom to hide the pill deep inside the cheese. Fig ate the cheese, so she ate the pill too. That was a smart plan.` }
          ]
        },
        {
          story: {
            title: `Snowflakes on the Front Window`,
            paragraphs: [
              `On a snowy day, Bess and her sister, Liz, made snowflakes. Bess folded her paper and cut out each shape slowly. Liz cut too fast, and her snowflake ripped in half. Liz crumpled up her paper and stomped her foot. Bess folded a fresh sheet for Liz and gave it to her. Mom brought the girls two mugs of warm cocoa. This time, Liz cut very slowly, and her snowflake did not rip. The girls taped all their snowflakes to the front window.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which detail BEST shows that Liz gets mad?`,
              choices: [
                `Liz crumpled up her paper and stomped her foot.`,
                `Liz cut too fast, and her snowflake ripped in half.`,
                `Bess folded a fresh sheet for Liz and gave it to her.`,
                `The girls taped all their snowflakes to the front window.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `This sentence tells why Liz might get mad. It does not show what she does.`,
                `This sentence tells what Bess did for Liz. It does not show that Liz is mad.`,
                `This sentence tells what the girls did at the end. It does not show that Liz is mad.`],
              why: `The paragraph says Liz crumpled up her paper and stomped her foot. Kids do that when they get mad.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The paragraph shows that Liz is careful the next time. Which sentence BEST supports this idea?`,
              choices: [
                `This time, Liz cut very slowly, and her snowflake did not rip.`,
                `Bess folded her paper and cut out each shape slowly.`,
                `Liz cut too fast, and her snowflake ripped in half.`,
                `Mom brought the girls two mugs of warm cocoa.`],
              kinds: [null, 'wrongwho', 'opposite', 'notproof'],
              notes: [null,
                `This sentence shows that Bess is careful. The question asks about Liz.`,
                `This sentence shows Liz cutting too fast the first time. That is the opposite of careful.`,
                `This sentence tells about Mom and the cocoa. It does not show what Liz is like.`],
              why: `The paragraph says Liz cut very slowly the next time, and her snowflake did not rip. She takes her time. That shows Liz is careful.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 4 ════════ */
    {
      teach: {
        story: {
          title: `A Bed Ready for Grandpa`,
          paragraphs: [
            `Grandpa was coming to stay, so Dee and Dad got the extra bed ready. Dad pulled off the old sheets and threw them on the floor. Dee pulled each corner of the new sheet until it was tight and flat. She put a jar of fresh flowers by the bed. Dad tucked in the quilt, nice and neat, at the foot of the bed. Then Dee ran to the window ten times to look for Grandpa's car. At last, a small green car pulled up out front.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof in one paragraph',
            lines: [
              `Today, each story is just one paragraph. A paragraph is a short part of a story.`,
              `An idea is a thing we think is true. Here is an idea: Dee is excited.`,
              `Proof is what shows that an idea is true.`,
              `Say you think your little brother ate the cookies. The crumbs on his shirt are proof.`,
              `On a test, the proof is a sentence from the paragraph.`,
              `Some questions say detail. Here, a detail is a sentence from the paragraph.`,
              `When a sentence supports an idea, it proves the idea. Supports means proves.`,
              `BEST means the most. The BEST sentence proves the idea the most.`,
              `Watch out. A sentence can be true, but not be proof.`,
              `Your brother had milk at lunch. That is true, but it does not prove he ate the cookies.`,
              `Watch out for the wrong person, too. Crumbs on your sister's shirt are not proof about your brother.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the proof',
            lines: [
              `Here is a question. Which sentence from the paragraph BEST supports the idea that Dee is excited to see Grandpa?`,
              `Step 1. I say the idea in my own words. Dee can hardly wait for Grandpa to come.`,
              `Step 2. I check each sentence. I ask, does this sentence SHOW that Dee is excited?`,
              `Then Dee ran to the window ten times to look for Grandpa's car.`,
              `Yes! She runs to look again and again. That shows Dee is excited.`,
              `So that sentence BEST supports the idea. It is my proof.`,
              `Watch out. I check one more sentence. Grandpa was coming to stay, so Dee and Dad got the extra bed ready.`,
              `That sentence is true. It is about Dee, too. But it does not show how she feels. It tells what job they did.`,
              `So that sentence is true, but it is not proof.`
            ],
            lit: [
              `Then Dee ran to the window ten times to look for Grandpa's car.`,
              `Grandpa was coming to stay, so Dee and Dad got the extra bed ready.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence BEST shows that Dee is careful? What idea does the question ask us to prove?`,
            choices: [`Dee is careful.`, `Dee is excited.`, `Dad is careful.`, `Grandpa is careful.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'wrongwho'],
            notes: [null,
              `That was the idea in the last question. This question says careful.`,
              `The question asks about Dee, not Dad.`,
              `The question asks about Dee, not Grandpa.`],
            why: `The question says Dee is careful. Careful means you take your time so things come out right. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Read the paragraph. Which sentence BEST shows that Dee is careful?`,
            choices: [
              `Dee pulled each corner of the new sheet until it was tight and flat.`,
              `Dad tucked in the quilt, nice and neat, at the foot of the bed.`,
              `At last, a small green car pulled up out front.`,
              `Dad pulled off the old sheets and threw them on the floor.`],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              `This sentence shows that Dad is careful. The question asks about Dee.`,
              `This sentence tells about Grandpa's car. It does not show what Dee is like.`,
              `This sentence tells what Dad did with the old sheets. It does not show what Dee is like.`],
            why: `The paragraph says Dee pulled each corner until the sheet was tight and flat. She takes her time to do it right. That shows Dee is careful.` },
          { kind: 'watch', id: 'W3', title: 'The three steps',
            lines: [
              `You can find the proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Read each sentence in the paragraph.`,
              `Step 3. Pick the sentence that SHOWS the idea.`,
              `Remember, a sentence can be true, but not be proof.`,
              `Check the name, too. The proof must be about the right person.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Not for Sale`,
          paragraphs: [
            `On Saturday, Jill and Mom sold old things in the front yard. Mom set out a box of old toys with a soft brown bear on top. Jill's little brother, Ned, grabbed the bear and hugged it tight to his chest. Jill wrote NOT FOR SALE on a card and set it by the bear. A man gave Jill five dollars for a one-dollar book and walked away. Jill ran after the man and gave him back four dollars. Then a woman found a dime in a coat and gave it to Mom. By noon, all the toys were gone but one old bear.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Read the paragraph. Which sentence BEST shows that Ned does not want to sell the bear?`,
            choices: [
              `Jill's little brother, Ned, grabbed the bear and hugged it tight to his chest.`,
              `On Saturday, Jill and Mom sold old things in the front yard.`,
              `Mom set out a box of old toys with a soft brown bear on top.`,
              `Then a woman found a dime in a coat and gave it to Mom.`],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              `This sentence tells about the sale in the yard. It does not show how Ned feels.`,
              `This sentence tells what Mom set out. It does not show how Ned feels.`,
              `This sentence tells what a woman found. It does not show how Ned feels.`],
            why: `The paragraph says Ned grabbed the bear and hugged it tight. You hold on tight to a thing you do not want to give away.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Jill is honest. Which sentence from the paragraph BEST supports this idea?`,
            choices: [
              `Jill ran after the man and gave him back four dollars.`,
              `Then a woman found a dime in a coat and gave it to Mom.`,
              `A man gave Jill five dollars for a one-dollar book and walked away.`,
              `By noon, all the toys were gone but one old bear.`],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              `This sentence shows that a woman is honest. The question asks about Jill.`,
              `This sentence tells what the man gave Jill. It does not show what Jill did.`,
              `This sentence tells about the toys at noon. It does not show that Jill is honest.`],
            why: `Honest means you tell the truth and do not keep what is not yours. The paragraph says Jill ran after the man and gave back his money. That shows Jill is honest.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which detail from the paragraph BEST shows that Jill is kind to Ned?`,
            choices: [
              `Jill wrote NOT FOR SALE on a card and set it by the bear.`,
              `Jill's little brother, Ned, grabbed the bear and hugged it tight to his chest.`,
              `A man gave Jill five dollars for a one-dollar book and walked away.`,
              `On Saturday, Jill and Mom sold old things in the front yard.`],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              `This sentence is about Ned. It shows how Ned feels, not what Jill did for him.`,
              `This sentence is about the man and his money. It does not show what Jill did for Ned.`,
              `This sentence tells about the sale in the yard. It does not show Jill being kind.`],
            why: `The paragraph says Jill put a NOT FOR SALE card by the bear. Now no one can buy it. She kept the bear safe for her brother. That shows Jill is kind to Ned.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Lights on the Porch`,
            paragraphs: [
              `One cold night in December, Dad climbed a ladder to hang lights on the porch. Jo held the ladder with both hands so it would not wobble. Mom stood by the door and handed up the long string of lights. Dad hooked the lights along the roof, one hook at a time. At last, Dad climbed down, and Jo plugged in the cord. Red, green and yellow lights blinked all along the porch. Jo jumped up and down on the steps and cheered. Across the street, Mr. Ash waved and clapped from his window.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which sentence BEST shows that Jo is careful?`,
              choices: [
                `Jo held the ladder with both hands so it would not wobble.`,
                `Dad hooked the lights along the roof, one hook at a time.`,
                `Mom stood by the door and handed up the long string of lights.`,
                `Red, green and yellow lights blinked all along the porch.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Dad is careful. The question asks about Jo.`,
                `This sentence tells how Mom helped. It does not show what Jo is like.`,
                `This sentence tells what the lights did. It does not show what Jo is like.`],
              why: `The paragraph says Jo held the ladder with both hands so it would not wobble. She keeps Dad safe. That shows Jo is careful.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The paragraph shows that Mr. Ash likes the lights. Which sentence BEST supports this idea?`,
              choices: [
                `Across the street, Mr. Ash waved and clapped from his window.`,
                `Jo jumped up and down on the steps and cheered.`,
                `Red, green and yellow lights blinked all along the porch.`,
                `One cold night in December, Dad climbed a ladder to hang lights on the porch.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Jo likes the lights. The question asks about Mr. Ash.`,
                `This sentence tells what the lights did. It does not show how Mr. Ash feels.`,
                `This sentence tells when Dad hung the lights. It does not show how Mr. Ash feels.`],
              why: `The paragraph says Mr. Ash waved and clapped from across the street. People clap when they like something.` }
          ]
        },
        {
          story: {
            title: `Supper for Buddy`,
            paragraphs: [
              `On Mondays, it is Meg's job to feed the dog, Buddy. This Monday, Meg forgot and ran outside to play tag. By supper, Buddy whined and pushed his empty bowl with his nose. Meg's little brother, Jett, rubbed his tummy and asked for a snack. Mom pointed at the dog bowl and looked over at Meg. Meg's cheeks turned red, and she said, "I am so sorry, Buddy." She filled the bowl with food and gave Buddy a hug. Buddy wagged his tail and licked Meg's chin.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which detail BEST shows that Buddy is hungry?`,
              choices: [
                `By supper, Buddy whined and pushed his empty bowl with his nose.`,
                `Meg's little brother, Jett, rubbed his tummy and asked for a snack.`,
                `This Monday, Meg forgot and ran outside to play tag.`,
                `Buddy wagged his tail and licked Meg's chin.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Jett is hungry. The question asks about Buddy.`,
                `This sentence tells what Meg did. It does not show how Buddy feels.`,
                `This sentence shows Buddy at the end. It does not show that he is hungry.`],
              why: `The paragraph says Buddy whined and pushed his bowl with his nose. A dog does that when he wants food.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Meg feels bad that she forgot. Which sentence BEST supports this idea?`,
              choices: [
                `Meg's cheeks turned red, and she said, "I am so sorry, Buddy."`,
                `Mom pointed at the dog bowl and looked over at Meg.`,
                `On Mondays, it is Meg's job to feed the dog, Buddy.`,
                `Buddy wagged his tail and licked Meg's chin.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `This sentence is about Mom. It tells what Mom did, not how Meg feels.`,
                `This sentence tells what Meg's job is. It does not show how she feels.`,
                `This sentence tells what Buddy did. It does not show how Meg feels.`],
              why: `The paragraph says Meg's cheeks turned red and she said she was sorry. That shows she feels bad.` }
          ]
        },
        {
          story: {
            title: `The Beep in the Night`,
            paragraphs: [
              `One night, Clay heard a tiny beep somewhere in the house. The beep came back again and again, and it would not stop. Clay pulled his pillow over his head and groaned. His sister, Lu, put her hands on her ears and made a face. Clay went from room to room and stopped to listen at each door. At last, he found an old toy watch beeping in the toy box. Dad yawned as he took the battery out of the watch. Clay got back in bed and fell asleep right away.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which sentence BEST shows that Clay does not like the beep?`,
              choices: [
                `Clay pulled his pillow over his head and groaned.`,
                `His sister, Lu, put her hands on her ears and made a face.`,
                `The beep came back again and again, and it would not stop.`,
                `At last, he found an old toy watch beeping in the toy box.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Lu does not like the beep. The question asks about Clay.`,
                `This sentence tells how often the beep came. It does not show how Clay feels.`,
                `This sentence tells where the beep came from. It does not show how Clay feels.`],
              why: `The paragraph says Clay pulled his pillow over his head and groaned. You do that when a sound bugs you.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The paragraph shows that Clay is very tired. Which sentence BEST supports this idea?`,
              choices: [
                `Clay got back in bed and fell asleep right away.`,
                `Dad yawned as he took the battery out of the watch.`,
                `Clay went from room to room and stopped to listen at each door.`,
                `One night, Clay heard a tiny beep somewhere in the house.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Dad is tired. The question asks about Clay.`,
                `This sentence tells how Clay looked for the beep. It does not show that he is tired.`,
                `This sentence tells when the beep began. It does not show how Clay feels.`],
              why: `The paragraph says Clay fell asleep right away. You fall asleep fast when you are very tired.` }
          ]
        },
        {
          story: {
            title: `Grandpa's First Race`,
            paragraphs: [
              `On Sunday, Rose taught Grandpa how to play her car game. At first, Grandpa held his game pad upside down. His car crashed into the same wall five times. Grandpa wiped his glasses and said, "One more try!" Rose showed him the go button again and did not sigh once. In the next race, Grandpa's red car zoomed past the line first. Grandpa threw his arms up and cheered so loud that the cat ran off. Rose laughed and gave Grandpa a high five.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Read the paragraph. Which sentence BEST shows that Grandpa does not give up?`,
              choices: [
                `Grandpa wiped his glasses and said, "One more try!"`,
                `Rose showed him the go button again and did not sigh once.`,
                `At first, Grandpa held his game pad upside down.`,
                `On Sunday, Rose taught Grandpa how to play her car game.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence is about Rose. It shows that Rose keeps helping, but the question asks about Grandpa.`,
                `This sentence tells how Grandpa held the game pad. It does not show that he keeps trying.`,
                `This sentence tells what Rose taught Grandpa. It does not show that he keeps trying.`],
              why: `The paragraph says Grandpa wiped his glasses and said he would try one more time. He did not stop. That shows Grandpa does not give up.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Grandpa is happy when he wins. Which sentence BEST supports this idea?`,
              choices: [
                `Grandpa threw his arms up and cheered so loud that the cat ran off.`,
                `Rose laughed and gave Grandpa a high five.`,
                `In the next race, Grandpa's red car zoomed past the line first.`,
                `His car crashed into the same wall five times.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `This sentence shows that Rose is happy. The question asks about Grandpa.`,
                `This sentence tells that Grandpa won. It does not show how he feels.`,
                `This sentence tells about the crashes before he won. It does not show how he feels when he wins.`],
              why: `The paragraph says Grandpa threw his arms up and cheered very loud. People cheer like that when they are happy.` }
          ]
        }
      ]
    }
  ]
};
