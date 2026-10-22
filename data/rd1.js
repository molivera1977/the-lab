/* ═══════════════════════════════════════════════════════
   THE LAB · data/rd1.js — Reading for Meaning, Level 2: RD1 "Find the Proof: Level 2" (skill: Evidence selection)
   Same as RC1, on grade 4–5 stories with CLOSE wrong choices. The new point: a sentence can be in the
   right paragraph and about the right idea, and STILL not prove it. Proof SHOWS the idea.
   Every version has its OWN teaching story (a new worked example each try), taught the same way:
     teach.flow = W1 (the words) · W2 (worked example) · S1 (the idea) · S2 (the paragraph) · S3 (the proof) · W3 (the steps)
     pre  = P1–P3 mc evidence (P3 is the "Read paragraph N" item)
     turn = A: Q01–Q04 · B: Q05–Q08, all mc evidence (Q02 and Q06 are the "Read paragraph N" items)
   Shape: tools/CONTENT-SPEC-READING.md (LEVEL 2) · checked by: node tools/check-reading.js RD1
   The right choice is written FIRST; the site shuffles.
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RD1 = {
  versions: [
    /* ════════ VERSION 1 ════════ */
    {
      teach: {
        story: {
          title: `Dryer Number Six`,
          paragraphs: [
            `Every Saturday in November, Lou and her grandma carried two big bags of laundry down the block to the Sudsy Spot. The laundromat was warm and noisy. Its front windows were foggy from the dryers. Grandma put their clothes in washer four and pressed start.`,
            `A few minutes later, an old neighbor named Mr. Bloom shuffled in with a basket of towels. He squinted at the coin slot on the washer. Then he patted all of his coat pockets. Lou noticed that he had only one quarter in his hand. She opened her little coin purse and quietly slid three of her own quarters into his palm.`,
            `Later, their clothes moved to dryer number six, which still had twenty minutes left on its timer. Lou wanted to hurry home to watch the parade on TV. Instead of complaining, she sat on the bench and sorted every sock into pairs, one by one. Grandma read a magazine beside her.`,
            `When the dryer finally buzzed, Lou folded the warm shirts into neat squares. Mr. Bloom waved from across the room and held up a clean, fluffy towel. "Thank you for the quarters, neighbor!" he called. Lou grinned and waved back.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof, Level 2',
            lines: [
              `You know these test words. Let's say them again.`,
              `A passage is the story you read on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
              `An idea is a thing we think is true about the story. Proof is what shows that the idea is true.`,
              `Supports means proves. The BEST sentence proves the idea the most.`,
              `Level 2 has a new trap. A sentence can be in the right paragraph. It can be about the idea. And it can STILL not be proof.`,
              `Here is an example. Your friend says the team is tired.`,
              `The game was long. That sentence is about the game. It does not show that the players are tired.`,
              `Every player sat down on the grass. That sentence SHOWS that they are tired.`,
              `Proof shows the idea with an action, a word or a detail.`,
              `So do not stop at a sentence that is just about the idea. Find the one that SHOWS it.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the BEST proof',
            lines: [
              `Here is a question. Which sentence from the passage BEST supports the idea that Lou is kind?`,
              `Step 1. I say the idea. Lou does something nice for someone else.`,
              `Step 2. I find the paragraph. Paragraph 2 tells about Mr. Bloom and his quarters.`,
              `Step 3. I test each sentence in paragraph 2. I ask, does this sentence SHOW that Lou is kind?`,
              `She opened her little coin purse and quietly slid three of her own quarters into his palm.`,
              `Yes! Lou gives her own money to help Mr. Bloom. That SHOWS she is kind. That sentence is my proof.`,
              `Step 4. I check the close sentence. Lou noticed that he had only one quarter in his hand.`,
              `That sentence is in the right paragraph. It is about Lou and the quarters, too.`,
              `But seeing a problem is not the same as helping. The sentence does not show Lou doing something kind.`,
              `So the close sentence is not the BEST proof.`
            ],
            lit: [
              `She opened her little coin purse and quietly slid three of her own quarters into his palm.`,
              `Lou noticed that he had only one quarter in his hand.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence from the passage BEST supports the idea that Lou is patient? What idea does the question ask us to prove?`,
            choices: [`Lou is patient.`, `Lou is kind.`, `Grandma is patient.`, `Lou is in a hurry.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'opposite'],
            notes: [null,
              `That was the idea in the last question. This question says patient.`,
              `The question asks about Lou, not Grandma.`,
              `The question asks us to prove that Lou is patient. In a hurry is the opposite.`],
            why: `The question says Lou is patient. Patient means you can wait and stay calm. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection',
            q: `Patient means you can wait and stay calm. Which paragraph tells about Lou waiting?`,
            choices: [`Paragraph 3`, `Paragraph 1`, `Paragraph 2`, `Paragraph 4`],
            kinds: [null, 'wrongtime', 'wrongtime', 'wrongtime'],
            notes: [null,
              `Paragraph 1 tells how Lou and Grandma start the wash.`,
              `Paragraph 2 tells how Lou helps Mr. Bloom.`,
              `Paragraph 4 tells what Lou does when the dryer is done. The wait is over by then.`],
            why: `Paragraph 3 says the dryer still has a long time left. It tells what Lou does while she waits.` },
          { kind: 'step', id: 'S3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Lou is patient?`,
            choices: [
              `Instead of complaining, she sat on the bench and sorted every sock into pairs, one by one.`,
              `Later, their clothes moved to dryer number six, which still had twenty minutes left on its timer.`,
              `Grandma read a magazine beside her.`,
              `When the dryer finally buzzed, Lou folded the warm shirts into neat squares.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              `Paragraph 3 says the dryer had a long time left. That is about the wait. It does not show how Lou waits.`,
              `Paragraph 3 says Grandma read. That is about Grandma, not Lou.`,
              `Paragraph 4 tells what Lou does after the dryer is done. The wait is over by then.`],
            why: `Paragraph 3 says Lou wanted to go home. But she did not complain. She sat and sorted the socks. That shows Lou is patient.` },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              `You can find the BEST proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Find the part of the passage about the idea. Look for the paragraph.`,
              `Step 3. Test EVERY sentence there. Ask, does this sentence SHOW the idea?`,
              `Remember, a sentence about the idea is not always proof.`,
              `Pick the sentence that SHOWS the idea with an action, a word or a detail.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `The Silver Bell at the Harvest Fair`,
          paragraphs: [
            `Every October, Pine Avenue closed to cars for the Harvest Fair, and the best part was the climbing wall. The wall stood as tall as a two-story house, with colorful plastic rocks and a silver bell at the very top. Bram had wanted to climb it for three whole years, and this October he was finally old enough.`,
            `The worker clipped the safety rope to Bram's harness and gave it a hard tug. Bram's knees began to wobble. A teenage girl on the neighboring wall scrambled past him like a squirrel. Down below, the sweet smell of kettle corn floated across the busy street. Bram's big sister, Gemma, cupped her hands around her mouth and shouted his name from the crowd.`,
            `Halfway up, Bram made the mistake of looking down. The people on the sidewalk below looked as tiny as ants. He pressed his cheek against the cold plastic and squeezed his eyes shut. Then he took three slow breaths, reached for the next red rock, and kept climbing.`,
            `At last, Bram reached the top and rang the silver bell. The worker lowered him slowly back down to the pavement. His legs still felt as wobbly as cooked noodles. Bram marched straight to the back of the line and asked if he could climb again.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Bram feels scared at first. Which sentence from the passage BEST supports this idea?`,
            choices: [
              `Bram's knees began to wobble.`,
              `The worker clipped the safety rope to Bram's harness and gave it a hard tug.`,
              `A teenage girl on the neighboring wall scrambled past him like a squirrel.`,
              `Bram had wanted to climb it for three whole years, and this October he was finally old enough.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 2 says the worker hooked up the rope. That is about the rope. It does not show how Bram feels.`,
              `Paragraph 2 is about a girl on the wall next to Bram. That is about the girl, not Bram.`,
              `Paragraph 1 says Bram wanted to climb for a long time. That shows he wants to climb. It does not show that he is scared.`],
            why: `Paragraph 2 says Bram's knees began to wobble. Knees shake when you are scared.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which detail from the passage BEST shows that Bram is brave?`,
            choices: [
              `Then he took three slow breaths, reached for the next red rock, and kept climbing.`,
              `He pressed his cheek against the cold plastic and squeezed his eyes shut.`,
              `The people on the sidewalk below looked as tiny as ants.`,
              `Bram's big sister, Gemma, cupped her hands around her mouth and shouted his name from the crowd.`],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              `Paragraph 3 says Bram shut his eyes tight. That shows he is scared. It does not show him being brave yet.`,
              `Paragraph 3 tells how small the people look. It does not show what Bram does.`,
              `Paragraph 2 tells what Gemma does. That is about Gemma, not Bram.`],
            why: `Paragraph 3 says Bram was scared, but he took slow breaths and kept climbing. Brave means you keep going even when you are scared.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
            q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows how Bram feels about climbing by the end?`,
            choices: [
              `Bram marched straight to the back of the line and asked if he could climb again.`,
              `At last, Bram reached the top and rang the silver bell.`,
              `The worker lowered him slowly back down to the pavement.`,
              `His legs still felt as wobbly as cooked noodles.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 4 says Bram rang the bell. That tells what he did. It does not show how he feels about climbing.`,
              `Paragraph 4 tells what the worker does. That is about the worker, not Bram.`,
              `Paragraph 4 says Bram's legs felt wobbly. That is how his legs feel. It does not show how he feels about climbing.`],
            why: `Paragraph 4 says Bram got back in line to climb again. He was scared at first. Now he likes climbing and wants more.` }
        ]
      },
      turn: [
        {
          story: {
            title: `The Turkey Balloon on Fairmont Avenue`,
            paragraphs: [
              `On Thanksgiving morning, Perla and her mom waited on Fairmont Avenue for the parade to begin. Every year, Mom helped carry a giant balloon shaped like a turkey. This year, Perla was finally old enough to hold a rope right beside her. The turkey was as long as a city bus, with an orange beak and puffy brown feathers. Perla's stomach flipped like a pancake, and her mittens felt damp and sweaty inside.`,
              `Before the parade, the balloon captain, Ms. Vaughn, called all the rope holders into a circle. She told them to hold their ropes with both hands and never to wrap a rope around a wrist. One long whistle meant walk. Two short whistles meant pull the balloon down low. Behind them, the high school band was already tapping its drums.`,
              `At first, the parade rolled slowly past the barbershop and the fire station. A little boy on his dad's shoulders pointed at the turkey and shrieked with joy. Perla held her rope with both hands and kept one eye on Ms. Vaughn's whistle the whole time. Mom walked right behind her, humming along with the band and waving at the neighbors.`,
              `Halfway down the avenue, a cold gust of wind shoved the turkey sideways into a lamppost. The crowd gasped. Ms. Vaughn blew two short whistles. Perla and the others pulled hand over hand until the turkey floated just above their heads.`,
              `After that, the wind calmed down, and the turkey bobbed along above the crowd like a big, friendly giant. Perla walked with her chin up and called out "Happy Thanksgiving!" to the kids along the curb.`,
              `At the park, the rope holders laid the turkey on a big tarp and squeezed out the air. Soon it was as flat as a blanket. Ms. Vaughn asked who wanted a rope again next year, and Perla's hand shot up first.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Perla feels nervous before the parade. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Perla's stomach flipped like a pancake, and her mittens felt damp and sweaty inside.`,
                `This year, Perla was finally old enough to hold a rope right beside her.`,
                `Every year, Mom helped carry a giant balloon shaped like a turkey.`,
                `She told them to hold their ropes with both hands and never to wrap a rope around a wrist.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 1 says Perla is old enough to hold a rope. That tells her job. It does not show how she feels.`,
                `Paragraph 1 tells what Mom does every year. That is about Mom, not Perla.`,
                `Paragraph 2 tells the rules for the ropes. It does not show how Perla feels.`],
              why: `Paragraph 1 says Perla's stomach flipped. Her mittens got damp and sweaty. Your body does that when you are nervous.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
              q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows that Perla is careful?`,
              choices: [
                `Perla held her rope with both hands and kept one eye on Ms. Vaughn's whistle the whole time.`,
                `At first, the parade rolled slowly past the barbershop and the fire station.`,
                `A little boy on his dad's shoulders pointed at the turkey and shrieked with joy.`,
                `Mom walked right behind her, humming along with the band and waving at the neighbors.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
              notes: [null,
                `Paragraph 3 tells where the parade goes. It does not show what Perla does.`,
                `Paragraph 3 tells about a little boy in the crowd. That is about the boy, not Perla.`,
                `Paragraph 3 tells what Mom does. That is about Mom, not Perla.`],
              why: `Paragraph 3 says Perla used both hands, just as the captain said. She watched for the whistle the whole time. That shows she is careful.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Ms. Vaughn blows two short whistles. Which detail from the passage BEST shows why?`,
              choices: [
                `Halfway down the avenue, a cold gust of wind shoved the turkey sideways into a lamppost.`,
                `Perla and the others pulled hand over hand until the turkey floated just above their heads.`,
                `Two short whistles meant pull the balloon down low.`,
                `At the park, the rope holders laid the turkey on a big tarp and squeezed out the air.`],
              kinds: [null, 'notproof', 'notproof', 'wrongtime'],
              notes: [null,
                `Paragraph 4 tells what the rope holders do after the whistles. It does not show why Ms. Vaughn blows them.`,
                `Paragraph 2 tells what two short whistles mean. It does not show why Ms. Vaughn blows them now.`,
                `Paragraph 6 is at the end of the parade. It does not show why Ms. Vaughn blows the whistles.`],
              why: `Paragraph 4 says the wind pushed the turkey into a lamppost. The balloon could get hurt. So Ms. Vaughn wants it pulled down low.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Perla grows more sure of herself as the parade goes on. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Perla walked with her chin up and called out "Happy Thanksgiving!" to the kids along the curb.`,
                `After that, the wind calmed down, and the turkey bobbed along above the crowd like a big, friendly giant.`,
                `Ms. Vaughn blew two short whistles.`,
                `Perla's stomach flipped like a pancake, and her mittens felt damp and sweaty inside.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 5 says the wind calmed down. That is about the wind. It does not show how Perla changed.`,
                `Paragraph 4 tells what Ms. Vaughn does. That is about Ms. Vaughn, not Perla.`,
                `Paragraph 1 is from before the parade. It shows how Perla felt at the start, not how she changed.`],
              why: `At the start, Perla's stomach flipped. Paragraph 5 says she walked with her chin up. She called out to the kids. Now she feels sure of herself.` }
          ]
        },
        {
          story: {
            title: `A Clipboard on Halsey Avenue`,
            paragraphs: [
              `Every December, the shops on Halsey Avenue dressed up their front windows for the holidays. Each year, one kid from the neighborhood got to help judge them. This year, the kid was Anselmo, who had won a drawing contest at the library. Anselmo's aunt owned the flower shop on the corner. She had entered the window contest for nine years and had never won.`,
              `On Saturday afternoon, the three judges started at the north end of the avenue. Anselmo looked at every window twice, once up close and once from across the street, and wrote three notes about each one. The other two judges were grown-ups who worked at the bank. Snow began to fall. The streetlights blinked on above them.`,
              `When the judges reached the flower shop, Aunt Soledad rushed out with three cups of hot cocoa. She handed Anselmo the biggest cup and gave him a long, slow wink. Her window held the same tower of red flowers that she made every year. Anselmo's cheeks grew hot, and he set the cocoa down on the step without taking a sip.`,
              `Two doors down, the window of Dunphy's Hardware made everyone stop. Mr. Dunphy had built a snowman out of white paint cans. It had a scarf of red rope and buttons made of shiny bolts. Every few seconds, one of its pipe arms waved at the people walking by. Little kids pressed their noses against the glass.`,
              `That evening, the judges met inside the warm bank to vote. Anselmo thought about his aunt's nine years of trying. Then he wrote Dunphy's Hardware at the top of his card. The other two judges picked the hardware store, too.`,
              `On Monday, a blue ribbon hung in the hardware store window. Anselmo walked to the flower shop with his hands in his pockets. He was sure his aunt would be upset. Instead, Aunt Soledad hugged him and told everyone in the shop that her nephew was the fairest judge on the whole avenue. Then she started to sketch next year's window on the back of a receipt.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Anselmo is a careful judge. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Anselmo looked at every window twice, once up close and once from across the street, and wrote three notes about each one.`,
                `On Saturday afternoon, the three judges started at the north end of the avenue.`,
                `The other two judges were grown-ups who worked at the bank.`,
                `This year, the kid was Anselmo, who had won a drawing contest at the library.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 2 tells where the judges start. It does not show how Anselmo judges.`,
                `Paragraph 2 tells about the other two judges. That is about them, not Anselmo.`,
                `Paragraph 1 tells why Anselmo was picked. It does not show how he does the job.`],
              why: `Paragraph 2 says Anselmo looked at each window two times, up close and from far away. He wrote notes on every one. That shows he is a careful judge.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
              q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows how Anselmo feels when his aunt winks at him?`,
              choices: [
                `Anselmo's cheeks grew hot, and he set the cocoa down on the step without taking a sip.`,
                `She handed Anselmo the biggest cup and gave him a long, slow wink.`,
                `Her window held the same tower of red flowers that she made every year.`,
                `When the judges reached the flower shop, Aunt Soledad rushed out with three cups of hot cocoa.`],
              kinds: [null, 'wrongwho', 'notproof', 'wrongwho'],
              notes: [null,
                `Paragraph 3 tells what Aunt Soledad does. That is about his aunt, not how Anselmo feels.`,
                `Paragraph 3 tells about the window. It does not show how Anselmo feels.`,
                `Paragraph 3 says Aunt Soledad brought cocoa. That is about his aunt, not Anselmo.`],
              why: `Paragraph 3 says Anselmo's cheeks got hot. He put the cocoa down and did not drink it. He feels uneasy. He does not want a gift to change his vote.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Anselmo is fair. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Then he wrote Dunphy's Hardware at the top of his card.`,
                `Anselmo thought about his aunt's nine years of trying.`,
                `The other two judges picked the hardware store, too.`,
                `Two doors down, the window of Dunphy's Hardware made everyone stop.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 5 says Anselmo thought about his aunt. That tells what is on his mind. It does not show what he picks.`,
                `Paragraph 5 tells what the other judges pick. That is about them, not Anselmo.`,
                `Paragraph 4 tells about the hardware window. It does not show what Anselmo does.`],
              why: `Paragraph 5 says Anselmo voted for the hardware store. He did not pick his aunt's shop just because she is family. He picked the best window. That is fair.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Anselmo's aunt is proud of him. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Instead, Aunt Soledad hugged him and told everyone in the shop that her nephew was the fairest judge on the whole avenue.`,
                `He was sure his aunt would be upset.`,
                `Then she started to sketch next year's window on the back of a receipt.`,
                `She had entered the window contest for nine years and had never won.`],
              kinds: [null, 'wrongwho', 'notproof', 'wrongtime'],
              notes: [null,
                `Paragraph 6 tells what Anselmo thinks will happen. That is about Anselmo, not how his aunt feels.`,
                `Paragraph 6 says his aunt starts to plan next year's window. It does not show how she feels about Anselmo.`,
                `Paragraph 1 tells about the contest in past years. It does not show how she feels about Anselmo now.`],
              why: `Paragraph 6 says Aunt Soledad hugged Anselmo. She told everyone he was the fairest judge. She is proud of him, even though she lost.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 2 ════════ */
    {
      teach: {
        story: {
          title: `Due Back on Monday`,
          paragraphs: [
            `In January, Otto's neighbor, Mrs. Lund, slipped on an icy step and hurt her ankle. The doctor told her to stay home with her foot up on a pillow for six weeks. Her stack of library books was due back on Monday, and she could not carry them two blocks through the snow.`,
            `Otto offered to take the books back for her. Mrs. Lund thanked him and handed him her library card. Otto slid the books into a plastic bag and tied the handles tight so the snow could not soak the pages. Then he headed out into the snow.`,
            `The library was only two blocks away, but the wind blew snow straight into his face. Otto pulled his hat down low and kept walking, one crunchy step at a time. A snowplow rumbled past and sprayed gray slush across the sidewalk.`,
            `Inside, the library was warm and quiet. Otto dropped the books into the return slot. Then he picked out three new mysteries for Mrs. Lund and checked them out on her card.`,
            `When Mrs. Lund opened the bag, she laughed out loud and hugged the books to her chest. "Now my six weeks will fly by," she said.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof, Level 2',
            lines: [
              `You know these test words. Let's say them again.`,
              `A passage is the story you read on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
              `An idea is a thing we think is true about the story. Proof is what shows that the idea is true.`,
              `Supports means proves. The BEST sentence proves the idea the most.`,
              `Level 2 has a new trap. A sentence can be in the right paragraph. It can be about the idea. And it can STILL not be proof.`,
              `Here is an example. Your friend says the team is tired.`,
              `The game was long. That sentence is about the game. It does not show that the players are tired.`,
              `Every player sat down on the grass. That sentence SHOWS that they are tired.`,
              `Proof shows the idea with an action, a word or a detail.`,
              `So do not stop at a sentence that is just about the idea. Find the one that SHOWS it.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the BEST proof',
            lines: [
              `Here is a question. Which sentence from the passage BEST supports the idea that Otto is careful?`,
              `Step 1. I say the idea. Otto takes care so nothing gets ruined.`,
              `Step 2. I find the paragraph. Paragraph 2 tells how Otto gets the books ready.`,
              `Step 3. I test each sentence in paragraph 2. I ask, does this sentence SHOW that Otto is careful?`,
              `Otto slid the books into a plastic bag and tied the handles tight so the snow could not soak the pages.`,
              `Yes! Otto keeps the books dry. That SHOWS he is careful. That sentence is my proof.`,
              `Step 4. I check the close sentence. Otto offered to take the books back for her.`,
              `That sentence is in the right paragraph. It is about Otto and the books, too.`,
              `But offering to help is not the same as taking care. The sentence shows that Otto is helpful. It does not show that he is careful.`,
              `So the close sentence is not the BEST proof.`
            ],
            lit: [
              `Otto slid the books into a plastic bag and tied the handles tight so the snow could not soak the pages.`,
              `Otto offered to take the books back for her.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence from the passage BEST supports the idea that Otto does not give up? What idea does the question ask us to prove?`,
            choices: [`Otto does not give up.`, `Otto is careful.`, `Mrs. Lund does not give up.`, `Otto wants to stay home.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'opposite'],
            notes: [null,
              `That was the idea in the last question. This question says Otto does not give up.`,
              `The question asks about Otto, not Mrs. Lund.`,
              `The question asks us to prove that Otto keeps going. Staying home is the opposite.`],
            why: `The question says Otto does not give up. That means he keeps going when a job is hard. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection',
            q: `Not giving up means you keep going when a job is hard. Which paragraph tells about a hard part of the job for Otto?`,
            choices: [`Paragraph 3`, `Paragraph 1`, `Paragraph 2`, `Paragraph 4`],
            kinds: [null, 'wrongtime', 'wrongtime', 'wrongtime'],
            notes: [null,
              `Paragraph 1 tells how Mrs. Lund hurt her ankle.`,
              `Paragraph 2 tells how Otto packs the books.`,
              `Paragraph 4 tells what Otto does in the warm library. Nothing is hard there.`],
            why: `Paragraph 3 tells about the walk in the snow. The wind is strong. It tells what Otto does on the walk.` },
          { kind: 'step', id: 'S3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Otto does not give up?`,
            choices: [
              `Otto pulled his hat down low and kept walking, one crunchy step at a time.`,
              `The library was only two blocks away, but the wind blew snow straight into his face.`,
              `A snowplow rumbled past and sprayed gray slush across the sidewalk.`,
              `Otto dropped the books into the return slot.`],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              `Paragraph 3 says the wind blew snow at Otto. That is about the hard walk. It does not show what Otto does.`,
              `Paragraph 3 tells about a snowplow. It does not show what Otto does.`,
              `Paragraph 4 is after the walk. The hard part is over by then.`],
            why: `Paragraph 3 says the wind blew snow in his face. Otto pulled his hat down and kept walking. He did not turn back. That shows Otto does not give up.` },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              `You can find the BEST proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Find the part of the passage about the idea. Look for the paragraph.`,
              `Step 3. Test EVERY sentence there. Ask, does this sentence SHOW the idea?`,
              `Remember, a sentence about the idea is not always proof.`,
              `Pick the sentence that SHOWS the idea with an action, a word or a detail.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `The Great Pumpkin Roll on Cedar Hill`,
          paragraphs: [
            `After Halloween, families carried their old pumpkins to Cedar Hill in Bell Park. It was time for the Great Pumpkin Roll. Whoever's pumpkin rolled the farthest would win a blue ribbon and a cup of hot cider. Faye's big brother, Benny, grabbed the biggest pumpkin on their front porch without even looking at it.`,
            `Five leftover pumpkins still sat in a row on the porch steps. Faye picked up each pumpkin and turned it slowly in her hands, checking for flat spots and soft spots. In the end, she chose a small pumpkin that was round and smooth all the way around. Benny laughed and said it looked like a baseball. Faye just smiled.`,
            `At the top of the hill, the judge blew a whistle, and the pumpkins took off. Benny's giant pumpkin bounced twice, hit a rock, and split open with a wet crunch. Faye's little pumpkin rolled straight and fast, all the way past the oak tree to the fence at the bottom. Faye threw both arms in the air and spun around in a circle.`,
            `Benny stared at the orange mess that used to be his pumpkin. The judge pinned the blue ribbon on Faye's jacket. Faye walked over and handed Benny half of her hot cider. Benny grinned and bumped her shoulder with his.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Faye takes her time. Which sentence from the passage BEST supports this idea?`,
            choices: [
              `Faye picked up each pumpkin and turned it slowly in her hands, checking for flat spots and soft spots.`,
              `Five leftover pumpkins still sat in a row on the porch steps.`,
              `Benny laughed and said it looked like a baseball.`,
              `Faye's big brother, Benny, grabbed the biggest pumpkin on their front porch without even looking at it.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
            notes: [null,
              `Paragraph 2 tells how many pumpkins were on the steps. It does not show how Faye picks one.`,
              `Paragraph 2 tells what Benny says. That is about Benny, not Faye.`,
              `Paragraph 1 tells how Benny picks his pumpkin. That is about Benny, not Faye.`],
            why: `Paragraph 2 says Faye turned each pumpkin slowly and looked for flat and soft spots. She checks them all before she picks. That shows she takes her time.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which detail from the passage BEST shows that Faye is kind to her brother?`,
            choices: [
              `Faye walked over and handed Benny half of her hot cider.`,
              `The judge pinned the blue ribbon on Faye's jacket.`,
              `Benny grinned and bumped her shoulder with his.`,
              `Whoever's pumpkin rolled the farthest would win a blue ribbon and a cup of hot cider.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 4 says the judge gave Faye the ribbon. That is about the prize. It does not show Faye being kind.`,
              `Paragraph 4 tells what Benny does. That is about Benny, not Faye.`,
              `Paragraph 1 tells the rules of the race. It does not show Faye being kind.`],
            why: `Paragraph 4 says Faye shared her prize cider with Benny. His pumpkin broke, and she wanted him to feel better. That shows she is kind.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
            q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows how Faye feels when her pumpkin rolls the farthest?`,
            choices: [
              `Faye threw both arms in the air and spun around in a circle.`,
              `Faye's little pumpkin rolled straight and fast, all the way past the oak tree to the fence at the bottom.`,
              `Benny's giant pumpkin bounced twice, hit a rock, and split open with a wet crunch.`,
              `At the top of the hill, the judge blew a whistle, and the pumpkins took off.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 3 tells how Faye's pumpkin rolled. That is about the pumpkin. It does not show how Faye feels.`,
              `Paragraph 3 tells what happened to Benny's pumpkin. That is about Benny, not Faye.`,
              `Paragraph 3 tells how the race starts. It does not show how Faye feels.`],
            why: `Paragraph 3 says Faye threw her arms up and spun in a circle. People do that when they are very happy and proud.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Bags on Every Landing`,
            paragraphs: [
              `On the coldest Saturday in December, the elevator in Kenji's apartment building broke down again. A paper sign on the elevator doors said that a repair worker could not come until next Tuesday. Kenji stomped his boot and groaned so loudly that the sound echoed up the stairwell. He lived on the fifth floor. His legs were already sore from basketball practice.`,
              `Kenji was halfway up the stairs when he heard a thump and a cry below him. He leaned over the railing and looked down. Ms. Reyes from apartment 5C stood at the bottom with her baby on one hip and six heavy grocery bags around her feet. A can of beans rolled slowly across the floor.`,
              `Kenji jogged back down the steps and scooped up the rolling can. Six bags would take him at least three trips up all those stairs. So he knocked on doors and lined up four kids from the building, one on each landing, to pass the bags upward from hand to hand. The baby giggled every time a bag swung past her.`,
              `In less than two minutes, every bag had reached the fifth floor. Ms. Reyes counted the bags twice to make sure none were missing. Then she hugged Kenji so hard that his hat slipped down over his eyes. The other kids cheered from the landings below.`,
              `On Monday, the elevator was still broken. This time, Kenji waited by the front door after school and carried bags up the stairs for anyone who needed help. He took a box of books up for Mr. Fox and a sack of oranges up for the twins on the third floor. He climbed the five floors two steps at a time, whistling the whole way.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Kenji is annoyed at first. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Kenji stomped his boot and groaned so loudly that the sound echoed up the stairwell.`,
                `A paper sign on the elevator doors said that a repair worker could not come until next Tuesday.`,
                `The other kids cheered from the landings below.`,
                `In less than two minutes, every bag had reached the fifth floor.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 1 says a sign tells when the repair worker can come. That is about the elevator. It does not show how Kenji feels.`,
                `Paragraph 4 is about the other kids, not Kenji.`,
                `Paragraph 4 is about the bags, later in the day. It does not show how Kenji feels when the elevator breaks.`],
              why: `Paragraph 1 says Kenji stomped his boot and groaned. People do that when they are annoyed.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
              q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows that Kenji thinks of a smart plan?`,
              choices: [
                `So he knocked on doors and lined up four kids from the building, one on each landing, to pass the bags upward from hand to hand.`,
                `Six bags would take him at least three trips up all those stairs.`,
                `Kenji jogged back down the steps and scooped up the rolling can.`,
                `The baby giggled every time a bag swung past her.`],
              kinds: [null, 'notproof', 'notproof', 'wrongwho'],
              notes: [null,
                `Paragraph 3 says the bags would take three trips. That is the problem. It does not show the plan.`,
                `Paragraph 3 says Kenji picked up the can. That is a kind thing to do, but it is not a plan.`,
                `Paragraph 3 says the baby giggled. That is about the baby, not Kenji.`],
              why: `Paragraph 3 says Kenji put a kid on each landing to pass the bags up. No one has to carry all the bags up five floors. That is a smart plan.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Kenji turns around and goes back down the stairs. Which detail from the passage BEST shows why?`,
              choices: [
                `Ms. Reyes from apartment 5C stood at the bottom with her baby on one hip and six heavy grocery bags around her feet.`,
                `He leaned over the railing and looked down.`,
                `His legs were already sore from basketball practice.`,
                `Then she hugged Kenji so hard that his hat slipped down over his eyes.`],
              kinds: [null, 'notproof', 'notproof', 'wrongtime'],
              notes: [null,
                `Paragraph 2 says Kenji looked over the railing. That tells what he did. It does not show why he goes back down.`,
                `Paragraph 1 says Kenji's legs were sore. Sore legs would make him want to stop climbing. They do not show why he goes back down.`,
                `Paragraph 4 is from after Kenji goes back down. It does not show why he turns around.`],
              why: `Paragraph 2 shows Ms. Reyes with a baby on her hip and six heavy bags. She cannot carry them all. Kenji goes down to help her.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Kenji feels better about the stairs at the end. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `He climbed the five floors two steps at a time, whistling the whole way.`,
                `On Monday, the elevator was still broken.`,
                `Ms. Reyes counted the bags twice to make sure none were missing.`,
                `Kenji was halfway up the stairs when he heard a thump and a cry below him.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 5 says the elevator was still broken. That is about the elevator. It does not show how Kenji feels.`,
                `Paragraph 4 tells what Ms. Reyes does. That is about Ms. Reyes, not Kenji.`,
                `Paragraph 2 is from the first day. It does not show how Kenji feels at the end.`],
              why: `Paragraph 5 says Kenji went up two steps at a time and whistled. At first he groaned at the stairs. Now he is happy to climb them.` }
          ]
        },
        {
          story: {
            title: `The Next-Stop Rule`,
            paragraphs: [
              `It was a snowy Saturday in January. Renata, her little brother Emilio, and their dad took the subway downtown. They were going to see the dinosaur bones at the museum. Before every trip, Dad reminded them of the family's subway rule. If they ever got split up, the kids would get off at the next stop and wait by the stairs. Emilio always rolled his eyes at that part, because he had heard the rule about a hundred times.`,
              `At Grand Street, the train was packed with people in puffy coats. Renata and Emilio squeezed through the doors. Then a man with a giant suitcase stepped in front of Dad. The doors slid shut with a thump, and Dad was still on the platform. Renata's heart pounded in her ears, and she pressed both hands flat against the cold glass.`,
              `As the train rumbled into the dark tunnel, Emilio's chin began to wobble. He grabbed the end of Renata's scarf and would not let go. Renata took a deep breath, knelt down, and told him in a slow, steady voice that Dad would be on the next train. The train rocked and squealed around a long curve.`,
              `At the next stop, Renata led Emilio off the train. They sat on the bench by the stairs. A worker in an orange vest asked if they were okay. Renata told her what had happened. The worker stayed with them and talked to Emilio about trains.`,
              `Four minutes later, the next train roared into the station, and Dad stepped out of the very first car. He hugged both kids so tight that Emilio squeaked, and he did not let go for a long time. Then he thanked the worker. He told Renata that she had done everything right. On the way to the museum, Emilio asked Dad to say the rule one more time.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Renata stays calm to help her little brother. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Renata took a deep breath, knelt down, and told him in a slow, steady voice that Dad would be on the next train.`,
                `As the train rumbled into the dark tunnel, Emilio's chin began to wobble.`,
                `The train rocked and squealed around a long curve.`,
                `Renata and Emilio squeezed through the doors.`],
              kinds: [null, 'wrongwho', 'notproof', 'wrongtime'],
              notes: [null,
                `Paragraph 3 tells how Emilio feels. That is about Emilio, not Renata.`,
                `Paragraph 3 tells about the train. It does not show what Renata does.`,
                `Paragraph 2 is from before the doors close. It does not show Renata helping her brother.`],
              why: `Paragraph 3 says Renata took a deep breath and knelt down. She talked to Emilio in a slow, steady voice. She stays calm so he can feel safe.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true, para: 2,
              q: `Read paragraph 2. Which sentence from paragraph 2 BEST shows how Renata feels when the doors close?`,
              choices: [
                `Renata's heart pounded in her ears, and she pressed both hands flat against the cold glass.`,
                `The doors slid shut with a thump, and Dad was still on the platform.`,
                `Then a man with a giant suitcase stepped in front of Dad.`,
                `At Grand Street, the train was packed with people in puffy coats.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 2 says the doors shut with Dad outside. That tells what happened. It does not show how Renata feels.`,
                `Paragraph 2 tells what a man does. That is about the man, not Renata.`,
                `Paragraph 2 tells how full the train is. It does not show how Renata feels.`],
              why: `Paragraph 2 says Renata's heart pounded. She pressed her hands on the glass. She is scared, because Dad is not on the train.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Renata gets off the train at the next stop. Which detail from the passage BEST shows why?`,
              choices: [
                `If they ever got split up, the kids would get off at the next stop and wait by the stairs.`,
                `Before every trip, Dad reminded them of the family's subway rule.`,
                `Emilio always rolled his eyes at that part, because he had heard the rule about a hundred times.`,
                `A worker in an orange vest asked if they were okay.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 1 says the family has a rule. But it does not tell what the rule says to do.`,
                `Paragraph 1 tells how Emilio feels about the rule. That is about Emilio, not Renata.`,
                `Paragraph 4 is after Renata gets off the train. It does not show why she gets off.`],
              why: `Paragraph 1 tells the family rule. If they get split up, the kids get off at the next stop. Renata follows the rule, so Dad will know where to find them.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST shows how Dad feels when he finds Renata and Emilio?`,
              choices: [
                `He hugged both kids so tight that Emilio squeaked, and he did not let go for a long time.`,
                `Four minutes later, the next train roared into the station, and Dad stepped out of the very first car.`,
                `On the way to the museum, Emilio asked Dad to say the rule one more time.`,
                `The worker stayed with them and talked to Emilio about trains.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
              notes: [null,
                `Paragraph 5 tells when Dad gets there. It does not show how he feels.`,
                `Paragraph 5 tells what Emilio asks. That is about Emilio, not Dad.`,
                `Paragraph 4 tells what the worker does. That is about the worker, not Dad.`],
              why: `Paragraph 5 says Dad hugged the kids very tight. He held on for a long time. He is so glad that they are safe.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 3 ════════ */
    {
      teach: {
        story: {
          title: `Capture the Flag on Juniper Court`,
          paragraphs: [
            `It was the last warm Saturday in October. The kids on Juniper Court played capture the flag in the field behind their houses. Each team hid a bandana on its own side of the field. The red team had a red one, and the blue team had a blue one. To win, you had to grab the other team's bandana. Then you had to run it back across the middle line without getting tagged.`,
            `Quentin was the smallest player on the blue team, and he could not outrun anybody. The red guards stood in the open grass and watched for runners. So Quentin took off his bright orange jacket and crawled through the tall weeds by the fence, where no guard ever looked. In a few minutes, he was right behind the red bandana.`,
            `Quentin grabbed the bandana and raced for the middle line. One step before he crossed it, a red player named Maribel brushed his sleeve with two fingers. Nobody else saw the tag, and his team was already cheering. Quentin stopped, handed back the bandana, and walked to the red team's jail by the oak tree.`,
            `Maribel stared at him with her mouth open. Then she grinned and shook his hand. On the next turn, Quentin crawled through the weeds again. This time, he made it all the way back, and the blue team won.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof, Level 2',
            lines: [
              `You know these test words. Let's say them again.`,
              `A passage is the story you read on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
              `An idea is a thing we think is true about the story. Proof is what shows that the idea is true.`,
              `Supports means proves. The BEST sentence proves the idea the most.`,
              `Level 2 has a new trap. A sentence can be in the right paragraph. It can be about the idea. And it can STILL not be proof.`,
              `Here is an example. Your friend says the team is tired.`,
              `The game was long. That sentence is about the game. It does not show that the players are tired.`,
              `Every player sat down on the grass. That sentence SHOWS that they are tired.`,
              `Proof shows the idea with an action, a word or a detail.`,
              `So do not stop at a sentence that is just about the idea. Find the one that SHOWS it.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the BEST proof',
            lines: [
              `Here is a question. Which sentence from the passage BEST supports the idea that Quentin is clever?`,
              `Step 1. I say the idea. Quentin thinks of a smart way to solve a problem.`,
              `Step 2. I find the paragraph. Paragraph 2 tells how Quentin gets close to the red bandana.`,
              `Step 3. I test each sentence in paragraph 2. I ask, does this sentence SHOW that Quentin is clever?`,
              `So Quentin took off his bright orange jacket and crawled through the tall weeds by the fence, where no guard ever looked.`,
              `Yes! Quentin hides his bright jacket and sneaks where the guards do not look. That SHOWS he is clever. That sentence is my proof.`,
              `Step 4. I check the close sentence. Quentin was the smallest player on the blue team, and he could not outrun anybody.`,
              `That sentence is in the right paragraph. It is about Quentin and his problem, too.`,
              `But that sentence only tells the problem. It does not show Quentin's smart plan.`,
              `So the close sentence is not the BEST proof.`
            ],
            lit: [
              `So Quentin took off his bright orange jacket and crawled through the tall weeds by the fence, where no guard ever looked.`,
              `Quentin was the smallest player on the blue team, and he could not outrun anybody.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence from the passage BEST supports the idea that Quentin is honest? What idea does the question ask us to prove?`,
            choices: [`Quentin is honest.`, `Quentin is clever.`, `Maribel is honest.`, `Quentin hides the truth.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'opposite'],
            notes: [null,
              `That was the idea in the last question. This question says honest.`,
              `The question asks about Quentin, not Maribel.`,
              `The question asks us to prove that Quentin is honest. Hiding the truth is the opposite.`],
            why: `The question says Quentin is honest. Honest means you tell the truth, even when no one would know. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection',
            q: `Honest means you tell the truth, even when no one would know. Which paragraph tells about Quentin getting tagged?`,
            choices: [`Paragraph 3`, `Paragraph 1`, `Paragraph 2`, `Paragraph 4`],
            kinds: [null, 'wrongtime', 'wrongtime', 'wrongtime'],
            notes: [null,
              `Paragraph 1 tells how the game works.`,
              `Paragraph 2 tells how Quentin sneaks up on the red bandana.`,
              `Paragraph 4 tells about the next turn. The tag is over by then.`],
            why: `Paragraph 3 tells about the tag. It tells what Quentin does after Maribel touches his sleeve.` },
          { kind: 'step', id: 'S3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Quentin is honest?`,
            choices: [
              `Quentin stopped, handed back the bandana, and walked to the red team's jail by the oak tree.`,
              `Nobody else saw the tag, and his team was already cheering.`,
              `One step before he crossed it, a red player named Maribel brushed his sleeve with two fingers.`,
              `On the next turn, Quentin crawled through the weeds again.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              `Paragraph 3 says nobody saw the tag. That is about the other kids. It does not show what Quentin does.`,
              `Paragraph 3 tells what Maribel does. That is about Maribel, not Quentin.`,
              `Paragraph 4 is about the next turn. It does not show Quentin telling the truth.`],
            why: `Paragraph 3 says no one saw the tag. Quentin could have kept running. But he gave back the bandana and went to jail. That shows Quentin is honest.` },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              `You can find the BEST proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Find the part of the passage about the idea. Look for the paragraph.`,
              `Step 3. Test EVERY sentence there. Ask, does this sentence SHOW the idea?`,
              `Remember, a sentence about the idea is not always proof.`,
              `Pick the sentence that SHOWS the idea with an action, a word or a detail.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Grandma's Hoop on Dover Street`,
          paragraphs: [
            `Every September, the Dover Street block party ended with a hula hoop contest in the middle of the street. The last kid with a spinning hoop won a little gold trophy. Last year, Zinnia's hoop had slid to her ankles after ten seconds, and some big kids had laughed. This year, Zinnia chewed on the end of her braid and could not stop tapping her foot.`,
            `Most of the kids grabbed bright, skinny hoops from the toy store. Zinnia carried out her grandma's old hoop instead. It was big and heavy, and it was wrapped in faded green tape. Grandma had told her that a big, heavy hoop spins more slowly, so it is easier to keep up. A boy in a baseball cap pointed at the old hoop and snickered.`,
            `When the judge blew her whistle, twelve hoops began to spin. One by one, the skinny hoops clattered to the street. Zinnia kept her eyes on a crack in the sidewalk and rocked her hips slowly, forward and back. After six minutes, only Zinnia and a tall fifth grader named Nadine were left.`,
            `Then Nadine's hoop wobbled, slid down to her knees, and rolled away across the street. The crowd cheered as the judge raised Zinnia's arm high in the air. Zinnia hugged the gold trophy to her chest and did a happy little dance on the curb. Grandma clapped from her lawn chair on the sidewalk.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Zinnia feels nervous before the contest. Which sentence from the passage BEST supports this idea?`,
            choices: [
              `This year, Zinnia chewed on the end of her braid and could not stop tapping her foot.`,
              `Last year, Zinnia's hoop had slid to her ankles after ten seconds, and some big kids had laughed.`,
              `The last kid with a spinning hoop won a little gold trophy.`,
              `A boy in a baseball cap pointed at the old hoop and snickered.`],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              `Paragraph 1 tells what happened last year. That gives Zinnia a reason to worry. But it does not show how she feels now.`,
              `Paragraph 1 tells about the prize. It does not show how Zinnia feels.`,
              `Paragraph 2 tells what a boy does. That is about the boy, not Zinnia.`],
            why: `Paragraph 1 says Zinnia chewed on her braid. She could not stop tapping her foot. People do that when they feel nervous.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Zinnia brings her grandma's old hoop. Which detail from the passage BEST shows why?`,
            choices: [
              `Grandma had told her that a big, heavy hoop spins more slowly, so it is easier to keep up.`,
              `Zinnia carried out her grandma's old hoop instead.`,
              `Most of the kids grabbed bright, skinny hoops from the toy store.`,
              `After six minutes, only Zinnia and a tall fifth grader named Nadine were left.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              `Paragraph 2 says Zinnia brought the old hoop. That tells what she did. It does not tell why.`,
              `Paragraph 2 tells what the other kids bring. That is about them, not Zinnia.`,
              `Paragraph 3 is later, in the middle of the contest. It does not show why Zinnia picked the old hoop.`],
            why: `Paragraph 2 says a big, heavy hoop spins slower. A slow hoop is easier to keep up. Zinnia wants to win, so she picks the big hoop.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
            q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows how Zinnia feels when she wins?`,
            choices: [
              `Zinnia hugged the gold trophy to her chest and did a happy little dance on the curb.`,
              `The crowd cheered as the judge raised Zinnia's arm high in the air.`,
              `Then Nadine's hoop wobbled, slid down to her knees, and rolled away across the street.`,
              `Grandma clapped from her lawn chair on the sidewalk.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
            notes: [null,
              `Paragraph 4 tells what the crowd and the judge do. It does not show how Zinnia feels.`,
              `Paragraph 4 tells what happens to Nadine's hoop. That is about Nadine, not Zinnia.`,
              `Paragraph 4 tells what Grandma does. That is about Grandma, not Zinnia.`],
            why: `Paragraph 4 says Zinnia hugged her trophy and did a little dance. People do that when they are proud and happy.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Mud in the Goal Box`,
            paragraphs: [
              `On a gray Tuesday in October, rain poured down on Riverside Field for the third day in a row. Pilar was sure that soccer practice would be canceled. Through the car window, she saw Coach Dunn dragging a mesh bag of balls across the soggy grass. Pilar groaned, slumped down in her seat, and pulled her hood over her eyes.`,
              `Pilar played goalie for the Hawks, and Coach Dunn started practice with a shooting drill. The first shot from her teammate Vince skidded across a puddle and spun past her. On the next shot, the wet ball squirted out of her gloves like a bar of soap. Mud splattered across her jersey and even into one ear.`,
              `Pilar stopped trying to catch the ball. Instead, she punched each shot away with both fists, just like the goalies she watched on TV. Vince's hardest shot of the day smacked off her fists and flew all the way to the sideline. Behind her, the net sagged under the weight of the rain.`,
              `Near the end of practice, Pilar slid across the goal box to block a low shot and landed face-first in a deep puddle. The whole team gasped and ran over to see if she was hurt. Pilar sat up, wiped a glob of mud off her nose, and laughed louder than anyone. Coach Dunn jogged over with the first-aid kit, just in case.`,
              `By the time practice ended, every player was brown with mud from head to toe. Pilar's socks squished inside her cleats with every step to the car. Her mom spread an old towel over the seat before she let Pilar climb in. On the ride home, Pilar grinned when her mom said it might rain again on Thursday.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Pilar is unhappy about practicing in the rain at the start. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Pilar groaned, slumped down in her seat, and pulled her hood over her eyes.`,
                `Through the car window, she saw Coach Dunn dragging a mesh bag of balls across the soggy grass.`,
                `On a gray Tuesday in October, rain poured down on Riverside Field for the third day in a row.`,
                `The first shot from her teammate Vince skidded across a puddle and spun past her.`],
              kinds: [null, 'notproof', 'notproof', 'wrongtime'],
              notes: [null,
                `Paragraph 1 tells what Pilar sees out the window. It does not show how she feels.`,
                `Paragraph 1 tells about the rain. It does not show how Pilar feels about the rain.`,
                `Paragraph 2 is from later, at practice. It tells about a shot from Vince. It does not show how Pilar feels at the start.`],
              why: `Paragraph 1 says Pilar groaned and slumped down. She hid her eyes under her hood. People do that when they do not want to go.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
              q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows how Pilar feels after she lands in the puddle?`,
              choices: [
                `Pilar sat up, wiped a glob of mud off her nose, and laughed louder than anyone.`,
                `Near the end of practice, Pilar slid across the goal box to block a low shot and landed face-first in a deep puddle.`,
                `The whole team gasped and ran over to see if she was hurt.`,
                `Coach Dunn jogged over with the first-aid kit, just in case.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
              notes: [null,
                `Paragraph 4 tells how Pilar fell. That is what happened. It does not show how she feels.`,
                `Paragraph 4 tells what the team does. That is about the team, not Pilar.`,
                `Paragraph 4 tells what Coach Dunn does. That is about Coach Dunn, not Pilar.`],
              why: `Paragraph 4 says Pilar laughed after her fall. She is not upset or hurt. She thinks the fall is funny.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Pilar starts to punch the ball away instead of catching it. Which detail from the passage BEST shows why?`,
              choices: [
                `On the next shot, the wet ball squirted out of her gloves like a bar of soap.`,
                `Mud splattered across her jersey and even into one ear.`,
                `Pilar played goalie for the Hawks, and Coach Dunn started practice with a shooting drill.`,
                `Vince's hardest shot of the day smacked off her fists and flew all the way to the sideline.`],
              kinds: [null, 'notproof', 'notproof', 'wrongtime'],
              notes: [null,
                `Paragraph 2 says Pilar got mud on her jersey. That is about the mud. It does not show why she stops catching.`,
                `Paragraph 2 says Pilar plays goalie. It does not show why she changes how she stops the ball.`,
                `Paragraph 3 is after Pilar starts to punch the ball. It does not show why she started.`],
              why: `Paragraph 2 says the wet ball slid right out of Pilar's gloves. She could not hold on to it. So she punches the ball away instead.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Pilar feels differently about the rain by the end. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `On the ride home, Pilar grinned when her mom said it might rain again on Thursday.`,
                `By the time practice ended, every player was brown with mud from head to toe.`,
                `Her mom spread an old towel over the seat before she let Pilar climb in.`,
                `Instead, she punched each shot away with both fists, just like the goalies she watched on TV.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 5 says all the players were muddy. That is about how they look. It does not show how Pilar feels about the rain.`,
                `Paragraph 5 tells what Pilar's mom does. That is about her mom, not Pilar.`,
                `Paragraph 3 tells about a change in how Pilar stops the ball. It does not show how she feels about the rain.`],
              why: `At the start, Pilar groaned about the rain. Paragraph 5 says she grinned when she heard it might rain again. Now she likes to play in the rain.` }
          ]
        },
        {
          story: {
            title: `The Gentle Side of Tanner's Hill`,
            paragraphs: [
              `The morning after the first big snowstorm of December, Zara pulled her little cousin Nell to Tanner's Hill on an old wooden sled. Nell was only six years old, and she had never been on a sled before. Older kids were already zooming down the steep side of the hill, shrieking and spinning in circles on plastic saucers.`,
              `Zara's own legs itched to race down the steep side with the big kids. Instead, she led Nell to the gentle slope on the far side of the hill. She walked down the slope first and kicked away two sharp sticks and a chunk of hidden ice. Then she tightened the strap on Nell's helmet and showed her how to drag her boots to slow down.`,
              `On their very first ride, the sled hit a bump and tipped over, and both girls tumbled into a snowbank. Nell sat up with snow stuck in her eyebrows. Her lip shook, and her eyes filled with tears. Zara scooped up a handful of snow, plopped it on her own head like a hat, and crossed her eyes.`,
              `Nell giggled so hard that she snorted. The cold wind turned both of their cheeks as pink as strawberries. By the tenth ride, Nell was sitting in front and steering all by herself. At the bottom of the hill, a man was selling hot cocoa from a little red cart.`,
              `Before they left, Nell stopped and pointed at the steep side, where the big kids were still racing. She handed Zara the sled rope and said she would wait by the fence and count to one hundred. Zara flew down the steep side three times, whooping the whole way. Then the cousins walked home together, dragging the empty sled behind them.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Zara keeps Nell safe?`,
              choices: [
                `She walked down the slope first and kicked away two sharp sticks and a chunk of hidden ice.`,
                `Zara's own legs itched to race down the steep side with the big kids.`,
                `The morning after the first big snowstorm of December, Zara pulled her little cousin Nell to Tanner's Hill on an old wooden sled.`,
                `The cold wind turned both of their cheeks as pink as strawberries.`],
              kinds: [null, 'notproof', 'notproof', 'wrongtime'],
              notes: [null,
                `Paragraph 2 says Zara wanted to race down the steep side. That shows what she wants. It does not show her keeping Nell safe.`,
                `Paragraph 1 tells how the girls got to the hill. It does not show Zara keeping Nell safe.`,
                `Paragraph 4 tells about their pink cheeks. That is about the cold, not about keeping Nell safe.`],
              why: `Paragraph 2 says Zara checked the slope first. She kicked away sticks and ice so Nell would not get hurt. That shows she keeps Nell safe.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
              q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows that Nell gets braver on the sled?`,
              choices: [
                `By the tenth ride, Nell was sitting in front and steering all by herself.`,
                `Nell giggled so hard that she snorted.`,
                `At the bottom of the hill, a man was selling hot cocoa from a little red cart.`,
                `The cold wind turned both of their cheeks as pink as strawberries.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 4 says Nell giggled. That shows she cheered up after the fall. It does not show her doing something brave on the sled.`,
                `Paragraph 4 tells about a man who sells cocoa. That is about the man, not Nell.`,
                `Paragraph 4 tells about their pink cheeks. That is about the cold. It does not show that Nell is braver.`],
              why: `Paragraph 4 says Nell sat in front and steered by herself. At first she cried when the sled tipped. Now she drives the sled. She got braver.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Nell stops crying and starts to laugh. Which detail from the passage BEST shows why?`,
              choices: [
                `Zara scooped up a handful of snow, plopped it on her own head like a hat, and crossed her eyes.`,
                `Nell sat up with snow stuck in her eyebrows.`,
                `On their very first ride, the sled hit a bump and tipped over, and both girls tumbled into a snowbank.`,
                `Nell was only six years old, and she had never been on a sled before.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 3 says Nell had snow in her eyebrows. That tells how she looks. It does not show why she stops crying.`,
                `Paragraph 3 says the sled tipped over. That is why Nell got upset. It does not show why she stops crying.`,
                `Paragraph 1 tells how old Nell is. It does not show why she stops crying.`],
              why: `Paragraph 3 says Zara put snow on her own head like a hat. She crossed her eyes, too. She acted silly on purpose, and that made Nell laugh.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Nell wants Zara to have fun too. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `She handed Zara the sled rope and said she would wait by the fence and count to one hundred.`,
                `Before they left, Nell stopped and pointed at the steep side, where the big kids were still racing.`,
                `Zara flew down the steep side three times, whooping the whole way.`,
                `Zara's own legs itched to race down the steep side with the big kids.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
              notes: [null,
                `Paragraph 5 says Nell pointed at the steep side. That tells where she points. It does not show what she wants for Zara.`,
                `Paragraph 5 tells what Zara does on the steep side. That is about Zara, not Nell.`,
                `Paragraph 2 tells what Zara wants. That is about Zara, not Nell.`],
              why: `Paragraph 5 says Nell gave Zara the sled rope. She said she would wait by the fence. Nell knew Zara wanted the big hill, so she gave her a turn.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 4 ════════ */
    {
      teach: {
        story: {
          title: `One Wiffle Ball Left`,
          paragraphs: [
            `Every afternoon in September, Delphine and her little brother, Nestor, played wiffle ball in their narrow backyard. A wiffle ball is a light plastic ball with holes in it. Most days, they played until the streetlights came on. The fence on the left side of the yard belonged to Mr. Lindgren. He never waved, and he kept his curtains closed all day long.`,
            `On Tuesday, Delphine swung hard and smacked the ball high over the fence. It was their very last ball. Nestor shook his head and backed away from the fence. Delphine's heart thumped, but she marched next door and knocked on Mr. Lindgren's front door three times.`,
            `Mr. Lindgren opened the door slowly and looked down at her. Delphine asked if she could please have her ball back. Then he grinned and handed her a whole bucket of faded wiffle balls that had landed in his yard over the years.`,
            `The next afternoon, Mr. Lindgren set a lawn chair next to the fence. He called out the score after every hit. When Nestor finally hit a ball over the fence, Mr. Lindgren tossed it right back.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof, Level 2',
            lines: [
              `You know these test words. Let's say them again.`,
              `A passage is the story you read on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
              `An idea is a thing we think is true about the story. Proof is what shows that the idea is true.`,
              `Supports means proves. The BEST sentence proves the idea the most.`,
              `Level 2 has a new trap. A sentence can be in the right paragraph. It can be about the idea. And it can STILL not be proof.`,
              `Here is an example. Your friend says the team is tired.`,
              `The game was long. That sentence is about the game. It does not show that the players are tired.`,
              `Every player sat down on the grass. That sentence SHOWS that they are tired.`,
              `Proof shows the idea with an action, a word or a detail.`,
              `So do not stop at a sentence that is just about the idea. Find the one that SHOWS it.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the BEST proof',
            lines: [
              `Here is a question. Which sentence from the passage BEST supports the idea that Delphine is brave?`,
              `Step 1. I say the idea. Delphine does something hard, even though she feels scared.`,
              `Step 2. I find the paragraph. Paragraph 2 tells about the ball that goes over the fence.`,
              `Step 3. I test each sentence in paragraph 2. I ask, does this sentence SHOW that Delphine is brave?`,
              `Delphine's heart thumped, but she marched next door and knocked on Mr. Lindgren's front door three times.`,
              `Yes! Delphine is scared, but she knocks anyway. That SHOWS she is brave. That sentence is my proof.`,
              `Step 4. I check the close sentence. On Tuesday, Delphine swung hard and smacked the ball high over the fence.`,
              `That sentence is in the right paragraph. It is about Delphine and the ball, too.`,
              `But hitting a ball hard is not the same as being brave. The sentence does not show Delphine facing something scary.`,
              `So the close sentence is not the BEST proof.`
            ],
            lit: [
              `Delphine's heart thumped, but she marched next door and knocked on Mr. Lindgren's front door three times.`,
              `On Tuesday, Delphine swung hard and smacked the ball high over the fence.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence from the passage BEST supports the idea that Mr. Lindgren is friendly? What idea does the question ask us to prove?`,
            choices: [`Mr. Lindgren is friendly.`, `Delphine is brave.`, `Nestor is friendly.`, `Mr. Lindgren is grumpy.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'opposite'],
            notes: [null,
              `That was the idea in the last question. This question says Mr. Lindgren is friendly.`,
              `The question asks about Mr. Lindgren, not Nestor.`,
              `The question asks us to prove that Mr. Lindgren is friendly. Grumpy is the opposite.`],
            why: `The question says Mr. Lindgren is friendly. Friendly means you are nice to people and glad to help. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection',
            q: `Friendly means you are nice to people and glad to help. Which paragraph tells about Mr. Lindgren opening his door?`,
            choices: [`Paragraph 3`, `Paragraph 1`, `Paragraph 2`, `Paragraph 4`],
            kinds: [null, 'wrongtime', 'wrongtime', 'wrongtime'],
            notes: [null,
              `Paragraph 1 tells about the yard and the fence.`,
              `Paragraph 2 tells how the ball goes over the fence.`,
              `Paragraph 4 tells about the next day.`],
            why: `Paragraph 3 tells what happens when Mr. Lindgren opens the door. It tells what he does for Delphine.` },
          { kind: 'step', id: 'S3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Mr. Lindgren is friendly?`,
            choices: [
              `Then he grinned and handed her a whole bucket of faded wiffle balls that had landed in his yard over the years.`,
              `Mr. Lindgren opened the door slowly and looked down at her.`,
              `Delphine asked if she could please have her ball back.`,
              `He never waved, and he kept his curtains closed all day long.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              `Paragraph 3 says Mr. Lindgren opened the door and looked at Delphine. That does not show if he is nice.`,
              `Paragraph 3 tells what Delphine asks. That is about Delphine, not Mr. Lindgren.`,
              `Paragraph 1 is from before Delphine knocks. It tells how Mr. Lindgren seemed then. It does not show him being friendly.`],
            why: `Paragraph 3 says Mr. Lindgren grinned. He gave Delphine a whole bucket of balls. That shows he is friendly.` },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              `You can find the BEST proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Find the part of the passage about the idea. Look for the paragraph.`,
              `Step 3. Test EVERY sentence there. Ask, does this sentence SHOW the idea?`,
              `Remember, a sentence about the idea is not always proof.`,
              `Pick the sentence that SHOWS the idea with an action, a word or a detail.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Yellow Belts on a Snowy Saturday`,
          paragraphs: [
            `On a snowy Saturday in December, Abdi and his best friend, Malik, tested for their yellow belts at the Bright Star Karate School. Abdi had taken karate lessons there since the summer. For a whole month, he had practiced his kicks every night in the living room, until his socks wore thin at the toes. Now his stomach fluttered as he lined up on the blue mat.`,
            `First, each student had to show a form, which is a set of moves done in order. Halfway through his form, Abdi turned left when he should have turned right. A few parents in the front row whispered to each other. Abdi took one slow breath, bowed to the judges, and asked if he could start over. This time, he finished every move without a single slip.`,
            `Next came the hardest part of the test, the board break. Malik went first, but his kick bounced right off the board. His face turned red, and he stared down at the mat. Next in line, Abdi held his own board tucked under one arm. He caught Malik's eye and gave him two big thumbs-up. On his second try, Malik snapped the board in half with a loud crack.`,
            `At the end of the test, their teacher, Ms. Okafor, tied a new yellow belt around each student's waist. Abdi and Malik bowed to each other and then slapped a high five. Outside, the two friends tried to knock the icicles off the fence with karate chops.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Abdi worked hard to get ready for his test. Which detail from the passage BEST supports this idea?`,
            choices: [
              `For a whole month, he had practiced his kicks every night in the living room, until his socks wore thin at the toes.`,
              `Now his stomach fluttered as he lined up on the blue mat.`,
              `On a snowy Saturday in December, Abdi and his best friend, Malik, tested for their yellow belts at the Bright Star Karate School.`,
              `First, each student had to show a form, which is a set of moves done in order.`],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              `Paragraph 1 says Abdi's stomach fluttered. That shows how he feels on test day. It does not show how he got ready.`,
              `Paragraph 1 tells when and where the test is. It does not show how Abdi got ready.`,
              `Paragraph 2 tells what a form is. It does not show how Abdi got ready.`],
            why: `Paragraph 1 says Abdi practiced his kicks every night for a month. He practiced so much that his socks wore thin. That shows he worked hard to get ready.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Abdi stays calm after he makes a mistake. Which sentence from the passage BEST supports this idea?`,
            choices: [
              `Abdi took one slow breath, bowed to the judges, and asked if he could start over.`,
              `Halfway through his form, Abdi turned left when he should have turned right.`,
              `A few parents in the front row whispered to each other.`,
              `At the end of the test, their teacher, Ms. Okafor, tied a new yellow belt around each student's waist.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              `Paragraph 2 tells what mistake Abdi made. It does not show how he acts after the mistake.`,
              `Paragraph 2 tells what some parents do. That is about the parents, not Abdi.`,
              `Paragraph 4 is from the end of the test. It does not show how Abdi acts after his mistake.`],
            why: `Paragraph 2 says Abdi took a slow breath after his mistake. Then he bowed and asked to start over. He did not get upset. That shows he stays calm.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
            q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows that Abdi is a good friend to Malik?`,
            choices: [
              `He caught Malik's eye and gave him two big thumbs-up.`,
              `Next in line, Abdi held his own board tucked under one arm.`,
              `His face turned red, and he stared down at the mat.`,
              `On his second try, Malik snapped the board in half with a loud crack.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
            notes: [null,
              `Paragraph 3 says Abdi held his board. That tells what he is holding. It does not show him being a good friend.`,
              `Paragraph 3 tells how Malik looks after his first kick. That is about Malik, not Abdi.`,
              `Paragraph 3 tells what Malik does on his second try. That is about Malik, not Abdi.`],
            why: `Paragraph 3 says Malik missed his first kick and felt bad. Abdi caught his eye and gave him a thumbs-up. He cheered Malik on. That is what a good friend does.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Low and Soft in the Gaga Pit`,
            paragraphs: [
              `At Camp Larkspur, the kids played gaga ball every afternoon after lunch. Gaga is a lot like dodgeball, but it is played inside a wooden pit with eight low walls. Players smack the ball with their hands. Anyone who gets hit below the knee is out. The last player left in the pit wins the round. Kids from every cabin crowded around the pit to watch.`,
              `For her first three days at camp, Winona was the first one out every single time. She jumped around in the middle of the pit and swung wildly at every ball. Each time, the ball zipped right between her feet. On Wednesday, she stomped out of the pit and kicked the dirt so hard that a cloud of dust rose around her sneakers. A counselor blew the whistle to start the next round.`,
              `On Thursday, Winona sat out on the bench by the pit. A twelve-year-old named Odessa won round after round. Odessa hardly ever jumped, and she never chased the ball across the pit. Winona kept her eyes on Odessa's feet the whole time, and she counted how many times Odessa stepped away from the wall. The answer was zero.`,
              `On Friday, Winona stepped back into the pit. She stayed close to the wall, kept her knees bent, and tapped every ball low and soft, just like Odessa. The ball whizzed past her ankles again and again, but it never touched her. One by one, the other players got out. Soon, only Winona and Odessa were left.`,
              `At last, Odessa tagged Winona's sneaker with a sneaky low shot. Winona had lasted almost ten whole minutes. She laughed, gave Odessa a high five, and jogged to the bench to wait for the next round. Across the lake, the dinner bell began to ring.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `At first, Winona gets out fast. Which sentence from the passage BEST shows that she is upset about it?`,
              choices: [
                `On Wednesday, she stomped out of the pit and kicked the dirt so hard that a cloud of dust rose around her sneakers.`,
                `For her first three days at camp, Winona was the first one out every single time.`,
                `A counselor blew the whistle to start the next round.`,
                `Across the lake, the dinner bell began to ring.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 2 says Winona got out first every day. That tells what happened. It does not show how she feels.`,
                `Paragraph 2 tells what a counselor does. That is about the counselor, not Winona.`,
                `Paragraph 5 is at the end of the passage. It tells about the dinner bell, not how Winona feels.`],
              why: `Paragraph 2 says Winona stomped out of the pit. She kicked the dirt hard. People do that when they are upset.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
              q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows that Winona watches with care?`,
              choices: [
                `Winona kept her eyes on Odessa's feet the whole time, and she counted how many times Odessa stepped away from the wall.`,
                `On Thursday, Winona sat out on the bench by the pit.`,
                `A twelve-year-old named Odessa won round after round.`,
                `Odessa hardly ever jumped, and she never chased the ball across the pit.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
              notes: [null,
                `Paragraph 3 tells where Winona sits. It does not show how she watches.`,
                `Paragraph 3 tells how Odessa does in the game. That is about Odessa, not Winona.`,
                `Paragraph 3 tells how Odessa moves. That is about Odessa, not what Winona does.`],
              why: `Paragraph 3 says Winona watched Odessa's feet the whole time. She even counted Odessa's steps. That shows she watches with care.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Winona lasts much longer in the pit on Friday. Which detail from the passage BEST shows why?`,
              choices: [
                `She stayed close to the wall, kept her knees bent, and tapped every ball low and soft, just like Odessa.`,
                `One by one, the other players got out.`,
                `On Friday, Winona stepped back into the pit.`,
                `She jumped around in the middle of the pit and swung wildly at every ball.`],
              kinds: [null, 'notproof', 'notproof', 'wrongtime'],
              notes: [null,
                `Paragraph 4 tells what happens to the other players. It does not show why Winona lasts longer.`,
                `Paragraph 4 says Winona went back into the pit. It does not show what she did to last longer.`,
                `Paragraph 2 tells how Winona played at the start of the week. That is why she got out so fast.`],
              why: `Paragraph 4 says Winona stayed by the wall and hit the ball low and soft. She played the way Odessa did. That smart plan helps her last longer.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Look at the end of the passage. Which sentence from the passage BEST shows that Winona is a good sport?`,
              choices: [
                `She laughed, gave Odessa a high five, and jogged to the bench to wait for the next round.`,
                `Winona had lasted almost ten whole minutes.`,
                `At last, Odessa tagged Winona's sneaker with a sneaky low shot.`,
                `On Wednesday, she stomped out of the pit and kicked the dirt so hard that a cloud of dust rose around her sneakers.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 5 tells how long Winona lasted. It does not show how she acts when she gets out.`,
                `Paragraph 5 tells what Odessa does. That is about Odessa, not Winona.`,
                `Paragraph 2 is from the start of the week. It shows Winona getting mad, not being a good sport.`],
              why: `At first, Winona kicked the dirt when she got out. Paragraph 5 says she laughed and gave Odessa a high five. Now she is a good sport.` }
          ]
        },
        {
          story: {
            title: `Nine Baskets at Hollow Creek`,
            paragraphs: [
              `On a windy Sunday in October, Marlon and his big brother, Gideon, played disc golf at Hollow Creek Park. In disc golf, players throw a plastic disc toward a metal basket with chains hanging inside it. Whoever reaches all nine baskets in the fewest throws wins. Gideon was fourteen, and he had beaten Marlon every single time they had played.`,
              `On the first hole, Gideon threw first, because he was the oldest. He hurled his disc as hard as he could, then spun around and bowed to the empty park. Marlon threw a short, low throw that slid to a stop halfway to the basket. Gideon snorted and called it a baby throw.`,
              `Marlon's ears burned, and he squeezed his disc until his fingers hurt. Last summer, their grandpa had taught him that a short, smooth throw goes exactly where you aim it. So Marlon kept throwing short and low on every hole, and each throw landed a little closer to the basket. Gideon's long throws flew far, but they often sailed into bushes or bounced off trees.`,
              `The last hole crossed Hollow Creek, where the water was brown and cold. Gideon threw hard, and a gust of wind pushed his disc into the middle of the creek with a splash. He had to roll up his jeans and wade in to get it back. By the time he climbed out, his sneakers squished with every step.`,
              `Marlon's first throw landed safely on the near bank of the creek. His second throw sailed across the narrow part of the water. His third throw clanged right into the chains. Marlon had won by one throw, for the very first time.`,
              `On the walk home, Gideon carried his wet sneakers in one hand. Halfway up the hill, he asked Marlon to show him how to throw the short, smooth throw. Marlon grinned and said they could start practicing tomorrow.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Gideon likes to show off. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `He hurled his disc as hard as he could, then spun around and bowed to the empty park.`,
                `On the first hole, Gideon threw first, because he was the oldest.`,
                `Gideon's long throws flew far, but they often sailed into bushes or bounced off trees.`,
                `Gideon was fourteen, and he had beaten Marlon every single time they had played.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 2 tells why Gideon throws first. It does not show him showing off.`,
                `Paragraph 3 tells where Gideon's throws land. It does not show him showing off.`,
                `Paragraph 1 says Gideon always wins. That shows he is good at the game. It does not show him showing off.`],
              why: `Paragraph 2 says Gideon bowed after his throw. Nobody was even watching. He wants to look great. That shows he likes to show off.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
              q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows how Marlon feels when Gideon laughs at his throw?`,
              choices: [
                `Marlon's ears burned, and he squeezed his disc until his fingers hurt.`,
                `Last summer, their grandpa had taught him that a short, smooth throw goes exactly where you aim it.`,
                `So Marlon kept throwing short and low on every hole, and each throw landed a little closer to the basket.`,
                `Gideon's long throws flew far, but they often sailed into bushes or bounced off trees.`],
              kinds: [null, 'notproof', 'notproof', 'wrongwho'],
              notes: [null,
                `Paragraph 3 tells what Grandpa taught Marlon. It does not show how Marlon feels.`,
                `Paragraph 3 tells how Marlon throws. It does not show how he feels.`,
                `Paragraph 3 tells about Gideon's throws. That is about Gideon, not Marlon.`],
              why: `Paragraph 3 says Marlon's ears burned. He squeezed his disc until his fingers hurt. He feels upset and embarrassed.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Marlon keeps throwing short, low throws, even after Gideon laughs. Which detail from the passage BEST shows why?`,
              choices: [
                `Last summer, their grandpa had taught him that a short, smooth throw goes exactly where you aim it.`,
                `So Marlon kept throwing short and low on every hole, and each throw landed a little closer to the basket.`,
                `In disc golf, players throw a plastic disc toward a metal basket with chains hanging inside it.`,
                `Marlon threw a short, low throw that slid to a stop halfway to the basket.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 3 tells what Marlon keeps doing. It does not tell why he does it.`,
                `Paragraph 1 tells how disc golf works. It does not show why Marlon throws short.`,
                `Paragraph 2 tells about Marlon's first throw. It does not show why he keeps throwing that way.`],
              why: `Paragraph 3 says Grandpa taught Marlon a trick. A short, smooth throw goes where you aim. Marlon trusts what Grandpa taught him, so he keeps throwing short.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Gideon changes his mind about the short throw. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Halfway up the hill, he asked Marlon to show him how to throw the short, smooth throw.`,
                `On the walk home, Gideon carried his wet sneakers in one hand.`,
                `Marlon grinned and said they could start practicing tomorrow.`,
                `Gideon snorted and called it a baby throw.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 6 says Gideon carried his wet sneakers. That is about his shoes. It does not show how he feels about the throws.`,
                `Paragraph 6 tells what Marlon says. That is about Marlon, not Gideon.`,
                `Paragraph 2 is from the start of the game. It shows how Gideon felt then, not how he changed.`],
              why: `At first, Gideon called the short throw a baby throw. Paragraph 6 says he asked Marlon to teach him that throw. Now he thinks the short throw is good.` }
          ]
        }
      ]
    }
  ]
};
