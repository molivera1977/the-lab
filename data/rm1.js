/* ═══════════════════════════════════════════════════════
   THE LAB · data/rm1.js — Reading for Meaning, Level 2: RM1 "Find the Proof: Level 2" (skill: Evidence selection)
   The new middle level (10/26), between Level 1 (RC1) and Level 3 (RD1). The same lesson as RD1, on MEDIUM stories
   (FK 2.8–3.8, 140–280 words). This is where the trap is first taught: a sentence can be in the right paragraph and
   about the right idea, and STILL not prove it. Proof SHOWS the idea.
   Theme lane: animals, nature and weather.
   Every version has its OWN teaching story (a new worked example each try), taught the same way:
     teach.flow = W1 (the words) · W2 (worked example) · S1 (the idea) · S2 (the paragraph) · S3 (the proof) · W3 (the steps)
     pre  = P1–P3 mc evidence (P3 is the "Read paragraph N" item)
     turn = A: Q01–Q04 · B: Q05–Q08, all mc evidence (Q02 and Q06 are the "Read paragraph N" items)
   wrongwho = a REAL trap only (the same idea, shown by another person); a filler sentence about someone else is notproof.
   Shape: tools/CONTENT-SPEC-READING.md (THE MIDDLE LEVEL) · checked by: node tools/check-reading.js RM1
   The right choice is written FIRST; the site shuffles.
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RM1 = {
  versions: [
    /* ════════ VERSION 1 ════════ */
    {
      teach: {
        story: {
          title: `The Web on the Porch Rail`,
          paragraphs: [
            `On a foggy Saturday morning, Perla stepped out onto the front porch. A big spider web stretched from the porch rail to the mailbox. Tiny drops of water clung to every thread. The web sparkled like a necklace in the gray light.`,
            `Then her little brother, Rafa, burst out the door in his pajamas. He grabbed a stick from the flower pot and raised it high over the web. "Spiders are creepy!" yelled Rafa. Perla's mouth fell open. She jumped in front of the web and spread her arms wide.`,
            `Rafa lowered the stick, but he still frowned at the web. Perla told him that the spider had worked for hours to build its home. She pointed to the small brown spider in the middle of the web. Rafa counted the rings of thread out loud. There were eleven of them.`,
            `Just then, a tiny bug buzzed into the web and got stuck. The spider zipped across the threads in a flash. Rafa tiptoed right up to the porch rail to get a better look.`,
            `That afternoon, Perla tied a yellow ribbon to the porch rail. The ribbon told the mail carrier to step around the web. The next morning, Rafa was the first one out the door.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof, Level 2',
            lines: [
              `You know these test words. Let's say them again.`,
              `A passage is a story on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
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
              `Here is a question. Which sentence from the passage BEST supports the idea that Perla protects the web?`,
              `Step 1. I say the idea. Perla keeps the web safe, so it does not get hurt.`,
              `Step 2. I find the paragraph. Paragraph 2 tells what happens when Rafa grabs a stick.`,
              `Step 3. I test each sentence in paragraph 2. I ask, does this sentence SHOW that Perla protects the web?`,
              `She jumped in front of the web and spread her arms wide.`,
              `Yes! Perla puts herself between the stick and the web. That SHOWS she protects it. That sentence is my proof.`,
              `Step 4. I check the trap sentence. Perla's mouth fell open.`,
              `That sentence is in the right paragraph. It is about Perla at the same moment, too.`,
              `But a mouth that falls open shows surprise. It does not keep the web safe.`,
              `So the trap sentence is not the BEST proof.`
            ],
            lit: [
              `She jumped in front of the web and spread her arms wide.`,
              `Perla's mouth fell open.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence from the passage BEST supports the idea that Rafa is not scared of the spider anymore? What idea does the question ask us to prove?`,
            choices: [`Rafa is not scared of the spider anymore.`, `Perla protects the web.`, `Perla is not scared of the spider.`, `Rafa is still scared of the spider.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'opposite'],
            notes: [null,
              `That was the idea in the last question. This question is about Rafa and the spider.`,
              `The question asks about Rafa, not Perla.`,
              `The question asks us to prove that Rafa is not scared anymore. Still scared is the opposite.`],
            why: `The question says Rafa is not scared of the spider anymore. He felt one way at first. Now he feels a new way. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection',
            q: `At first, Rafa thinks spiders are creepy. Which paragraph tells what Rafa does when the spider catches a bug?`,
            choices: [`Paragraph 4`, `Paragraph 1`, `Paragraph 2`, `Paragraph 3`],
            kinds: [null, 'wrongtime', 'wrongtime', 'wrongtime'],
            notes: [null,
              `Paragraph 1 tells about the web in the fog. Rafa is not there yet.`,
              `Paragraph 2 tells how Rafa runs out and grabs a stick.`,
              `Paragraph 3 tells how Perla shows Rafa the spider. The bug has not come yet.`],
            why: `Paragraph 4 tells about the bug in the web. It tells what Rafa does when the spider moves.` },
          { kind: 'step', id: 'S3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Rafa is not scared of the spider anymore?`,
            choices: [
              `Rafa tiptoed right up to the porch rail to get a better look.`,
              `The spider zipped across the threads in a flash.`,
              `She pointed to the small brown spider in the middle of the web.`,
              `Rafa lowered the stick, but he still frowned at the web.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              `Paragraph 4 tells what the spider does. It does not show how Rafa feels.`,
              `Paragraph 3 shows that Perla is not scared of the spider. But the question asks about Rafa.`,
              `Paragraph 3 is from before the bug. Rafa still frowns at the web there.`],
            why: `At first, Rafa called spiders creepy. Paragraph 4 says he tiptoed right up to the rail to get a better look. You do not walk up to a thing that scares you.` },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              `You can find the BEST proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Find the part of the passage about the idea. Look for the paragraph.`,
              `Step 3. Test EVERY sentence there. Ask, does this sentence SHOW the idea?`,
              `Remember the trap. A sentence about the idea is not always proof.`,
              `Pick the sentence that SHOWS the idea with an action, a word or a detail.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `A Spotted Turtle on the Bike Path`,
          paragraphs: [
            `On a warm Sunday in May, Darius and his grandpa rode their bikes around Hadley Pond. Halfway around, Grandpa squeezed his brakes and pointed. A spotted turtle sat in the middle of the bike path. Its dark shell had yellow spots, like a cookie with sprinkles.`,
            `Darius rolled his bike off the path and knelt in the grass at its edge. The turtle pulled its head and legs inside its shell. Darius sat very still in the grass and did not move for a long time. Grandpa leaned on his handlebars and waited quietly. At last, a little head with orange eyes peeked out.`,
            `Grandpa said that spotted turtles cross paths in the spring to reach the water. A turtle should always be moved the way it is already going. The turtle's nose pointed toward the pond.`,
            `Darius lifted the turtle by the sides of its shell and held it low to the ground. A jogger slowed down and stepped around them so she would not bump them. Darius carried the turtle across the grass to the edge of the pond.`,
            `The turtle crawled into the tall reeds and was gone. Darius stood at the edge of the grass and waved goodbye. Grandpa took a picture of the empty reeds and chuckled. Darius could not stop grinning, and he hummed the whole way home.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Darius is patient with the turtle?`,
            choices: [
              `Darius sat very still in the grass and did not move for a long time.`,
              `Darius rolled his bike off the path and knelt in the grass at its edge.`,
              `Grandpa leaned on his handlebars and waited quietly.`,
              `A spotted turtle sat in the middle of the bike path.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 2 says Darius moved his bike off the path. That is the start. It does not show him waiting.`,
              `Paragraph 2 shows that Grandpa waits, too. But the question asks about Darius.`,
              `Paragraph 1 says the turtle sat on the path. That is about the turtle, not Darius.`],
            why: `Paragraph 2 says the turtle hid in its shell. Then Darius sat still for a long time. He waited and did not rush the turtle. That shows he is patient.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which detail from the passage BEST shows that Darius is careful with the turtle?`,
            choices: [
              `Darius lifted the turtle by the sides of its shell and held it low to the ground.`,
              `Darius carried the turtle across the grass to the edge of the pond.`,
              `A jogger slowed down and stepped around them so she would not bump them.`,
              `Grandpa said that spotted turtles cross paths in the spring to reach the water.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 4 tells where Darius takes the turtle. It does not show how he holds the turtle.`,
              `Paragraph 4 shows that the jogger is careful. But the question asks about Darius.`,
              `Paragraph 3 tells what Grandpa says about turtles. It does not show what Darius does.`],
            why: `Paragraph 4 says Darius held the turtle by the sides of its shell. He held it low to the ground, too. That is a safe way to hold it. That shows he is careful.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 5,
            q: `Read paragraph 5. Which sentence from paragraph 5 BEST shows how Darius feels after he helps the turtle?`,
            choices: [
              `Darius could not stop grinning, and he hummed the whole way home.`,
              `Darius stood at the edge of the grass and waved goodbye.`,
              `Grandpa took a picture of the empty reeds and chuckled.`,
              `The turtle crawled into the tall reeds and was gone.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 5 says Darius waved goodbye. That is what he does. It does not show how he feels.`,
              `Paragraph 5 shows that Grandpa is happy, too. But the question asks about Darius.`,
              `Paragraph 5 tells where the turtle goes. It does not show how Darius feels.`],
            why: `Paragraph 5 says Darius could not stop grinning. He hummed all the way home. People do that when they feel happy.` }
        ]
      },
      turn: [
        {
          story: {
            title: `A Bottle for the New Calf`,
            paragraphs: [
              `Every April, Greer spent a week at Aunt Rhoda's dairy farm. This year, a brand-new calf named Pudding stood in the small pen beside the barn. Pudding was only two days old, and her legs still wobbled when she walked. Aunt Rhoda said that feeding Pudding would be Greer's job.`,
              `Aunt Rhoda filled a big bottle with warm milk and handed it to Greer. The bottle was as long as Greer's arm, and it was heavy. Greer swallowed hard, and her hands shook as she climbed into the pen. Her cousin Ward leaned on the gate and rolled his eyes. Ward had fed calves every spring since he was six.`,
              `Pudding sniffed the bottle and then butted it hard with her head. The bottle flew out of Greer's hands and landed in the straw. Ward laughed so hard that he had to hold his stomach. Greer brushed the straw off the bottle and tried again.`,
              `Aunt Rhoda explained that calves bump their mothers to make the milk come faster. So the bump did not mean that Pudding was being mean. Greer held the bottle with both hands and planted her feet in the straw. This time, when Pudding bumped, Greer did not let go.`,
              `Pudding drank and drank until the bottle was empty. Milk foam covered her pink nose. Ward stopped laughing and gave Greer a thumbs-up. The next morning, Greer fed Pudding with no help while Aunt Rhoda watched.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST shows how Greer feels about feeding the calf at first?`,
              choices: [
                `Greer swallowed hard, and her hands shook as she climbed into the pen.`,
                `The bottle was as long as Greer's arm, and it was heavy.`,
                `Her cousin Ward leaned on the gate and rolled his eyes.`,
                `Aunt Rhoda said that feeding Pudding would be Greer's job.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 2 tells how big the bottle is. It does not show how Greer feels.`,
                `Paragraph 2 tells what Ward does. It does not show how Greer feels.`,
                `Paragraph 1 tells whose job it is. It does not show how Greer feels.`],
              why: `Paragraph 2 says Greer swallowed hard, and her hands shook. People do that when they feel nervous.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
              q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows that Greer does not give up?`,
              choices: [
                `Greer brushed the straw off the bottle and tried again.`,
                `The bottle flew out of Greer's hands and landed in the straw.`,
                `Pudding sniffed the bottle and then butted it hard with her head.`,
                `Ward laughed so hard that he had to hold his stomach.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 3 says the bottle flew out of Greer's hands. That is the problem. It does not show what she does next.`,
                `Paragraph 3 tells what Pudding does. It does not show what Greer does.`,
                `Paragraph 3 tells what Ward does. It does not show what Greer does.`],
              why: `Paragraph 3 says Pudding knocked the bottle away. Greer brushed off the straw and tried again. She did not quit. That shows she does not give up.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Pudding bumps the bottle hard with her head. Which detail from the passage BEST shows why?`,
              choices: [
                `Aunt Rhoda explained that calves bump their mothers to make the milk come faster.`,
                `So the bump did not mean that Pudding was being mean.`,
                `Pudding was only two days old, and her legs still wobbled when she walked.`,
                `Pudding sniffed the bottle and then butted it hard with her head.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 4 tells what the bump does NOT mean. It does not tell why Pudding bumps.`,
                `Paragraph 1 tells how young Pudding is. It does not show why she bumps.`,
                `Paragraph 3 tells THAT Pudding bumps the bottle. It does not tell why.`],
              why: `Paragraph 4 says calves bump their mothers to make the milk come faster. Pudding bumps the bottle for the same reason. She wants the milk to come.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Ward changes his mind about Greer. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Ward stopped laughing and gave Greer a thumbs-up.`,
                `Pudding drank and drank until the bottle was empty.`,
                `The next morning, Greer fed Pudding with no help while Aunt Rhoda watched.`,
                `Ward had fed calves every spring since he was six.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 5 tells what Pudding does. It does not show what Ward thinks.`,
                `Paragraph 5 shows a change in Greer. Now she feeds Pudding with no help. But the question asks about Ward.`,
                `Paragraph 2 tells about Ward in other years. It does not show him change his mind.`],
              why: `In paragraph 3, Ward laughed at Greer. Paragraph 5 says he stopped laughing and gave her a thumbs-up. Now he thinks she did a good job.` }
          ]
        },
        {
          story: {
            title: `Prints in the New Snow`,
            paragraphs: [
              `On the first snowy morning of winter, Clare looked out the kitchen window. Fresh snow covered the backyard, and nothing had touched it yet. Then Clare spotted a line of small tracks running from the fence to the hedge. Her little brother, Zeno, pressed his nose to the glass and asked what made them.`,
              `Clare grabbed her book about animal tracks and flipped through the pages. Each track in the snow had two long marks in front and two small dots behind. Clare found a picture that looked just the same. The tracks were made by a rabbit!`,
              `After breakfast, Clare and Zeno bundled up and went outside with Dad. Before Clare could stop him, Zeno jumped onto the first track with both boots. He stomped from print to print, giggling. Clare groaned and covered her face with her mittens. Then she showed Zeno the picture in the book and told him that the tracks could show them where the rabbit went.`,
              `Zeno nodded and walked beside the tracks after that, not on top of them. The tracks curved past the swing set and went under the hedge. Dad whispered that rabbits dash away at the smallest sound. So Clare and Zeno froze like statues and peeked under the hedge.`,
              `A brown rabbit sat under the branches with its ears straight up. Its nose twitched as it nibbled a twig. After a while, it hopped away along the fence. Back inside, Clare drew the tracks in her notebook. Zeno drew a rabbit with giant ears beside them.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Clare wants to find out what made the tracks?`,
              choices: [
                `Clare grabbed her book about animal tracks and flipped through the pages.`,
                `Each track in the snow had two long marks in front and two small dots behind.`,
                `Her little brother, Zeno, pressed his nose to the glass and asked what made them.`,
                `Then Clare spotted a line of small tracks running from the fence to the hedge.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 2 tells what the tracks look like. It does not show what Clare does to find out.`,
                `Paragraph 1 shows that Zeno wants to know, too. But the question asks about Clare.`,
                `Paragraph 1 says Clare saw the tracks. Seeing them is not the same as trying to find out.`],
              why: `Paragraph 2 says Clare grabbed her book about animal tracks. She looked through the pages for a match. She is trying to find out what made the tracks.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
              q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows how Clare feels when Zeno stomps on the tracks?`,
              choices: [
                `Clare groaned and covered her face with her mittens.`,
                `Before Clare could stop him, Zeno jumped onto the first track with both boots.`,
                `He stomped from print to print, giggling.`,
                `After breakfast, Clare and Zeno bundled up and went outside with Dad.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 3 tells what Zeno does to the tracks. It does not show how Clare feels.`,
                `Paragraph 3 shows how Zeno feels. The question asks how Clare feels.`,
                `Paragraph 3 tells how the kids went outside. That is before Zeno stomps.`],
              why: `Paragraph 3 says Clare groaned and covered her face. People do that when they are upset about something.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Clare and Zeno freeze like statues by the hedge. Which detail from the passage BEST shows why?`,
              choices: [
                `Dad whispered that rabbits dash away at the smallest sound.`,
                `The tracks curved past the swing set and went under the hedge.`,
                `A brown rabbit sat under the branches with its ears straight up.`,
                `Fresh snow covered the backyard, and nothing had touched it yet.`],
              kinds: [null, 'notproof', 'wrongtime', 'notproof'],
              notes: [null,
                `Paragraph 4 tells where the tracks go. It does not show why the kids stay still.`,
                `Paragraph 5 tells what the kids see. That comes after they freeze.`,
                `Paragraph 1 tells about the new snow. It does not show why the kids stay still.`],
              why: `Paragraph 4 says Dad whispered that rabbits run at any sound. So the kids stay still and quiet. They do not want to scare the rabbit away.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Zeno learns to take care of the tracks. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Zeno nodded and walked beside the tracks after that, not on top of them.`,
                `The tracks curved past the swing set and went under the hedge.`,
                `He stomped from print to print, giggling.`,
                `Zeno drew a rabbit with giant ears beside them.`],
              kinds: [null, 'notproof', 'wrongtime', 'notproof'],
              notes: [null,
                `Paragraph 4 tells where the tracks go. It does not show what Zeno does.`,
                `Paragraph 3 is from before Zeno learns. There, he stomps on the tracks.`,
                `Paragraph 5 tells what Zeno draws. It does not show how he treats the tracks.`],
              why: `In paragraph 3, Zeno stomped on the tracks. Then Clare showed him the book. Paragraph 4 says he walked beside the tracks, not on them. He learned to take care of them.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 2 ════════ */
    {
      teach: {
        story: {
          title: `The Mouse in the Garage`,
          paragraphs: [
            `One Saturday, Saul found a hole chewed in a bag of grass seed in the garage. Tiny seeds were scattered all over the floor. Dad said that a mouse must be hiding somewhere in there.`,
            `Dad did not want to hurt the mouse. He set out a safe trap, a little plastic box with a door that snaps shut. Saul put a dab of peanut butter inside for bait. Then they turned off the light and went back in the house.`,
            `The next morning, Saul ran to the garage in his socks before breakfast. His big sister, Neva, raced right behind him in her robe. The little door of the box was shut. Inside, a gray mouse with round ears sat very still.`,
            `Neva begged to keep the mouse as a pet. Dad shook his head and said that a wild mouse belongs outside.`,
            `Saul and Dad carried the box to the field at the end of the block. Saul held the box level and walked slowly so the mouse would not slide around. At the edge of the field, he set the box down in the tall grass and opened the door. The mouse darted out and disappeared into the weeds.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof, Level 2',
            lines: [
              `You know these test words. Let's say them again.`,
              `A passage is a story on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
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
              `Here is a question. Which sentence from the passage BEST supports the idea that Saul is gentle with the mouse?`,
              `Step 1. I say the idea. Saul moves the mouse softly, so it does not get hurt.`,
              `Step 2. I find the paragraph. Paragraph 5 tells how Saul takes the mouse to the field.`,
              `Step 3. I test each sentence in paragraph 5. I ask, does this sentence SHOW that Saul is gentle?`,
              `Saul held the box level and walked slowly so the mouse would not slide around.`,
              `Yes! Saul keeps the box flat and walks slowly. That SHOWS he is gentle. That sentence is my proof.`,
              `Step 4. I check the trap sentence. Saul and Dad carried the box to the field at the end of the block.`,
              `That sentence is in the right paragraph. It is about Saul and the mouse box, too.`,
              `But it only tells where they go. It does not show HOW Saul carries the box.`,
              `So the trap sentence is not the BEST proof.`
            ],
            lit: [
              `Saul held the box level and walked slowly so the mouse would not slide around.`,
              `Saul and Dad carried the box to the field at the end of the block.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence from the passage BEST supports the idea that Saul is eager to see if the trap worked? What idea does the question ask us to prove?`,
            choices: [`Saul is eager to see if the trap worked.`, `Saul is gentle with the mouse.`, `Neva is eager to see if the trap worked.`, `Saul does not care about the trap.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'opposite'],
            notes: [null,
              `That was the idea in the last question. This question says eager.`,
              `The question asks about Saul, not Neva.`,
              `The question asks us to prove that Saul is eager. Not caring is the opposite.`],
            why: `The question says Saul is eager to see if the trap worked. Eager means you really want to know or do something soon. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection',
            q: `Eager means you really want something to happen soon. Which paragraph tells what Saul does the next morning?`,
            choices: [`Paragraph 3`, `Paragraph 1`, `Paragraph 2`, `Paragraph 4`],
            kinds: [null, 'wrongtime', 'wrongtime', 'wrongtime'],
            notes: [null,
              `Paragraph 1 tells how Saul finds the chewed bag.`,
              `Paragraph 2 tells how Saul and Dad set the trap.`,
              `Paragraph 4 tells what Neva wants to do with the mouse.`],
            why: `Paragraph 3 starts with the next morning. It tells what Saul does before breakfast.` },
          { kind: 'step', id: 'S3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Saul is eager to see if the trap worked?`,
            choices: [
              `The next morning, Saul ran to the garage in his socks before breakfast.`,
              `The little door of the box was shut.`,
              `His big sister, Neva, raced right behind him in her robe.`,
              `Saul put a dab of peanut butter inside for bait.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              `Paragraph 3 says the door was shut. That tells what Saul found. It does not show how he feels.`,
              `Paragraph 3 shows that Neva is eager, too. But the question asks about Saul.`,
              `Paragraph 2 is from the day before. It tells how Saul set the trap.`],
            why: `Paragraph 3 says Saul ran to the garage in his socks. He did not even wait for breakfast. That shows he is eager.` },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              `You can find the BEST proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Find the part of the passage about the idea. Look for the paragraph.`,
              `Step 3. Test EVERY sentence there. Ask, does this sentence SHOW the idea?`,
              `Remember the trap. A sentence about the idea is not always proof.`,
              `Pick the sentence that SHOWS the idea with an action, a word or a detail.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `The Goose on the Pond Path`,
          paragraphs: [
            `It was a breezy afternoon in May. Kenzie, her little sister Sally, and Mom walked to Fairbrook Park. The path went all the way around a wide, quiet pond. Sally skipped ahead, singing a song about frogs.`,
            `Halfway around, a big gray goose stood in the middle of the path. Five fuzzy yellow goslings, or baby geese, huddled behind her in the grass. Sally squealed and ran toward the babies with her arms out. The goose stretched out her long neck and hissed like a leaky tire.`,
            `Kenzie grabbed the back of Sally's jacket and pulled her back. Then Kenzie took a slow breath and stepped backward, one small step at a time. Mom stood still and spoke in a soft, low voice. The goose flapped her wings once, but she did not chase them.`,
            `Sally looked back at the goose, and her lip began to wobble. Kenzie knelt down so their eyes were at the same height. She explained that the mother goose was only keeping her babies safe. Sally nodded slowly and wiped her nose on her sleeve.`,
            `The girls held hands and walked the long way around, past the playground. From a bench, they watched the goslings waddle into the water behind their mother. Mom put an arm around Kenzie and smiled.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST shows how Sally feels when she sees the goslings?`,
            choices: [
              `Sally squealed and ran toward the babies with her arms out.`,
              `Five fuzzy yellow goslings, or baby geese, huddled behind her in the grass.`,
              `Sally skipped ahead, singing a song about frogs.`,
              `Sally looked back at the goose, and her lip began to wobble.`],
            kinds: [null, 'notproof', 'wrongtime', 'wrongtime'],
            notes: [null,
              `Paragraph 2 tells what the goslings look like. It does not show how Sally feels.`,
              `Paragraph 1 is from before Sally sees the goslings.`,
              `Paragraph 4 is from later, after the goose hisses. It shows how Sally feels then.`],
            why: `Paragraph 2 says Sally squealed and ran to the babies with her arms out. She is excited to see them.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Kenzie stays calm near the goose. Which sentence from the passage BEST supports this idea?`,
            choices: [
              `Then Kenzie took a slow breath and stepped backward, one small step at a time.`,
              `Kenzie grabbed the back of Sally's jacket and pulled her back.`,
              `Mom stood still and spoke in a soft, low voice.`,
              `The goose stretched out her long neck and hissed like a leaky tire.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 3 says Kenzie pulled Sally back. That shows she acts fast. It does not show that she is calm.`,
              `Paragraph 3 shows that Mom stays calm, too. But the question asks about Kenzie.`,
              `Paragraph 2 tells what the goose does. It does not show how Kenzie acts.`],
            why: `Paragraph 3 says Kenzie took a slow breath. Then she stepped back one small step at a time. Slow breaths and slow steps show that she stays calm.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
            q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows that Kenzie knows why the goose hissed?`,
            choices: [
              `She explained that the mother goose was only keeping her babies safe.`,
              `Kenzie knelt down so their eyes were at the same height.`,
              `Sally looked back at the goose, and her lip began to wobble.`,
              `Sally nodded slowly and wiped her nose on her sleeve.`],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              `Paragraph 4 says Kenzie knelt down. That tells what she does. It does not show what she knows about the goose.`,
              `Paragraph 4 shows how Sally feels. It does not show what Kenzie knows.`,
              `Paragraph 4 tells what Sally does. It does not show what Kenzie knows.`],
            why: `Paragraph 4 says Kenzie told Sally that the goose was keeping her babies safe. That is the reason the goose hissed. So Kenzie knows why.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Low Tide at Kelp Cove`,
            paragraphs: [
              `Aunt Lorna woke Emma and her cousin Rob early on Saturday. The tide was out, so the tide pools at Kelp Cove would be full of sea animals. A tide pool is a little pool of seawater left in the rocks when the ocean pulls back.`,
              `At the edge of the rocks, Aunt Lorna gave them two rules. Touch an animal with just one finger, and put every rock back the way you found it. The rocks were slick with green seaweed. Aunt Lorna stepped from rock to rock slowly, testing each one with her foot.`,
              `Emma knelt beside the first pool and looked into the water. She lifted a flat rock, and a tiny green crab ran out from under it. When the crab hid again, Emma set the rock down exactly the way she found it.`,
              `In the next pool, Emma spotted a bright purple sea star stuck to the side of a rock. Her eyes went wide, and she waved both arms for Rob to come see. Rob grabbed one of the sea star's arms and started to pull. He wanted to take it home in his bucket.`,
              `Emma put her hand on Rob's arm. She told him that a sea star dries out fast in the air and needs the water to stay alive. Rob let go and pressed the sea star softly back against the rock.`,
              `Soon the waves began to splash higher on the rocks. Aunt Lorna looked at the waves and called everyone back to the sand. On the walk back to the car, Rob swung his empty bucket and hummed.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Emma is careful in the tide pools?`,
              choices: [
                `When the crab hid again, Emma set the rock down exactly the way she found it.`,
                `Emma knelt beside the first pool and looked into the water.`,
                `Aunt Lorna stepped from rock to rock slowly, testing each one with her foot.`,
                `Touch an animal with just one finger, and put every rock back the way you found it.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 3 says Emma looked into the pool. That tells where she looks. It does not show that she is careful.`,
                `Paragraph 2 shows that Aunt Lorna is careful. But the question asks about Emma.`,
                `Paragraph 2 tells the rule. It does not show what Emma does.`],
              why: `Paragraph 3 says Emma put the rock back exactly the way she found it. She followed the rule with care. That shows she is careful.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
              q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows how Emma feels when she finds the sea star?`,
              choices: [
                `Her eyes went wide, and she waved both arms for Rob to come see.`,
                `In the next pool, Emma spotted a bright purple sea star stuck to the side of a rock.`,
                `He wanted to take it home in his bucket.`,
                `Rob grabbed one of the sea star's arms and started to pull.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 4 tells what Emma sees. It does not show how she feels.`,
                `Paragraph 4 shows that Rob likes the sea star, too. But the question asks about Emma.`,
                `Paragraph 4 tells what Rob does. It does not show how Emma feels.`],
              why: `Paragraph 4 says Emma's eyes went wide. She waved both arms so Rob would come see. She is excited.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Rob lets go of the sea star. Which detail from the passage BEST shows why?`,
              choices: [
                `She told him that a sea star dries out fast in the air and needs the water to stay alive.`,
                `Rob let go and pressed the sea star softly back against the rock.`,
                `Soon the waves began to splash higher on the rocks.`,
                `The tide was out, so the tide pools at Kelp Cove would be full of sea animals.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 5 tells THAT Rob lets go. It does not tell why.`,
                `Paragraph 6 is about the waves at the end. It does not show why Rob lets go.`,
                `Paragraph 1 tells why the tide pools are full. It does not show why Rob lets go.`],
              why: `Paragraph 5 says Emma told Rob that a sea star dries out fast in the air. It needs the water. So Rob lets go to keep the sea star safe.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Aunt Lorna keeps Emma and Rob safe. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Aunt Lorna looked at the waves and called everyone back to the sand.`,
                `Soon the waves began to splash higher on the rocks.`,
                `At the edge of the rocks, Aunt Lorna gave them two rules.`,
                `On the walk back to the car, Rob swung his empty bucket and hummed.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 6 tells what the waves do. It does not show what Aunt Lorna does.`,
                `Paragraph 2 says Aunt Lorna gave two rules. The rules keep the sea animals safe. They are not about keeping Emma and Rob safe.`,
                `Paragraph 6 tells what Rob does on the way to the car. It does not show what Aunt Lorna does.`],
              why: `Paragraph 6 says the waves splashed higher. Aunt Lorna looked at the waves and called everyone back to the sand. Big waves on slick rocks are not safe. She keeps the kids safe.` }
          ]
        },
        {
          story: {
            title: `A Puppy in a Blue Vest`,
            paragraphs: [
              `Last spring, Pascal's family got a yellow puppy named Waldo. One day, Waldo would be a guide dog for a person who cannot see. Until then, he would stay with Pascal for one year and learn good manners. Waldo had huge paws and a tail that never stopped wagging.`,
              `Waldo wore a blue vest that said Puppy in Training. The house had rules for Waldo. No one could feed him from the table. No one could let him jump on people. Mom wrote the rules on a card and taped it to the fridge.`,
              `At dinner, Waldo sat by Pascal's chair and stared at his chicken. Pascal really wanted to slip him a bite. Instead, he kept his hands on the table and looked away. Across the table, Dad did not look at Waldo either. Soon Waldo gave up and lay down on the rug.`,
              `Teaching Waldo to sit at the door of the big store took Pascal a long time. Waldo sniffed the carts, the floor and every shoe that walked past. Pascal said the word sit twenty times in the same calm voice. He never once yanked the leash. A man with a full cart waited behind them and smiled. At last, Waldo sat down and stayed.`,
              `One year later, a trainer from the guide dog school came to take Waldo away. Pascal knelt and hugged Waldo for a long, long time. He pressed his face into Waldo's soft fur. Mom sniffled and wiped her eyes.`,
              `The trainer said that Waldo had the best manners of any puppy in her group. Pascal stood up straight, and a smile spread across his face.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Pascal follows the rules for Waldo?`,
              choices: [
                `Instead, he kept his hands on the table and looked away.`,
                `Pascal really wanted to slip him a bite.`,
                `Across the table, Dad did not look at Waldo either.`,
                `At dinner, Waldo sat by Pascal's chair and stared at his chicken.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 3 tells what Pascal wants to do. Wanting to slip a bite is not following the rule.`,
                `Paragraph 3 shows that Dad follows the rule, too. But the question asks about Pascal.`,
                `Paragraph 3 tells what Waldo does at dinner. It does not show what Pascal does.`],
              why: `Paragraph 3 says Pascal wanted to give Waldo a bite. Instead, he kept his hands on the table and looked away. He did not feed Waldo from the table. That shows he follows the rules.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
              q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows that Pascal is patient with Waldo?`,
              choices: [
                `Pascal said the word sit twenty times in the same calm voice.`,
                `Teaching Waldo to sit at the door of the big store took Pascal a long time.`,
                `Waldo sniffed the carts, the floor and every shoe that walked past.`,
                `A man with a full cart waited behind them and smiled.`],
              kinds: [null, 'notproof', 'notproof', 'wrongwho'],
              notes: [null,
                `Paragraph 4 says the job took a long time. That is about the job. It does not show HOW Pascal acts.`,
                `Paragraph 4 tells what Waldo does. It does not show how Pascal acts.`,
                `Paragraph 4 shows that the man is patient, too. But the question asks about Pascal.`],
              why: `Paragraph 4 says Pascal said sit twenty times. He used the same calm voice each time. He kept trying. That shows he is patient.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Pascal works hard to teach Waldo good manners. Which detail from the passage BEST shows why?`,
              choices: [
                `One day, Waldo would be a guide dog for a person who cannot see.`,
                `Until then, he would stay with Pascal for one year and learn good manners.`,
                `Mom wrote the rules on a card and taped it to the fridge.`,
                `Waldo had huge paws and a tail that never stopped wagging.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 1 tells how long Waldo will stay. It says good manners, but it does not show why they matter.`,
                `Paragraph 2 tells what Mom does with the rules. It does not show why Pascal works so hard.`,
                `Paragraph 1 tells what Waldo looks like. It does not show why Pascal works so hard.`],
              why: `Paragraph 1 says Waldo will be a guide dog one day. He will help a person who cannot see. So Waldo needs good manners. That is why Pascal works so hard.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that it is hard for Pascal to say goodbye to Waldo. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Pascal knelt and hugged Waldo for a long, long time.`,
                `One year later, a trainer from the guide dog school came to take Waldo away.`,
                `Mom sniffled and wiped her eyes.`,
                `Pascal stood up straight, and a smile spread across his face.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 5 tells when the trainer comes. It does not show how Pascal feels.`,
                `Paragraph 5 shows that Mom is sad, too. But the question asks about Pascal.`,
                `Paragraph 6 is after the goodbye. It shows Pascal smiling.`],
              why: `Paragraph 5 says Pascal hugged Waldo for a long, long time. He does not want to let Waldo go. Saying goodbye is hard for him.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 3 ════════ */
    {
      teach: {
        story: {
          title: `Brushing Nutmeg`,
          paragraphs: [
            `On Saturday morning, Sloane helped out at Red Gate Stable for the first time. Mr. Osman, who ran the stable, took her to meet a tall, gentle brown horse named Nutmeg. Nutmeg was so big that Sloane had to tip her head back to see her ears.`,
            `Sloane's knees felt as wobbly as jelly. She stood still and held out her flat hand for Nutmeg to sniff. The horse's warm breath tickled her fingers. Nutmeg snorted softly and lowered her big head.`,
            `Mr. Osman handed Sloane a soft brush. He told her to brush the way the hair grows and to never stand behind a horse. Sloane walked all the way around the front of Nutmeg to reach her other side. Mr. Osman checked the gate latch twice before he stepped back to watch.`,
            `Sloane brushed in long, slow strokes from Nutmeg's neck to her tail. When she was finished, Nutmeg's coat shone like a brand-new penny. Nutmeg turned her head and nuzzled Sloane's shoulder. Sloane giggled and hugged Nutmeg's warm neck.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof, Level 2',
            lines: [
              `You know these test words. Let's say them again.`,
              `A passage is a story on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
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
              `Here is a question. Which sentence from the passage BEST supports the idea that Sloane is nervous when she meets Nutmeg?`,
              `Step 1. I say the idea. Sloane feels a little scared of the big horse.`,
              `Step 2. I find the paragraph. Paragraph 2 tells what happens when Sloane meets Nutmeg.`,
              `Step 3. I test each sentence in paragraph 2. I ask, does this sentence SHOW that Sloane is nervous?`,
              `Sloane's knees felt as wobbly as jelly.`,
              `Yes! Wobbly knees are a clue. Knees shake when you feel nervous. That sentence is my proof.`,
              `Step 4. I check the trap sentence. The horse's warm breath tickled her fingers.`,
              `That sentence is in the right paragraph. It is about Sloane and Nutmeg at the same moment, too.`,
              `But it tells how the breath feels on her fingers. It does not show how Sloane feels inside.`,
              `So the trap sentence is not the BEST proof.`
            ],
            lit: [
              `Sloane's knees felt as wobbly as jelly.`,
              `The horse's warm breath tickled her fingers.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence from the passage BEST supports the idea that Sloane is careful near the horse? What idea does the question ask us to prove?`,
            choices: [`Sloane is careful near the horse.`, `Sloane is nervous.`, `Mr. Osman is careful.`, `Sloane is careless near the horse.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'opposite'],
            notes: [null,
              `That was the idea in the last question. This question says careful.`,
              `The question asks about Sloane, not Mr. Osman.`,
              `The question asks us to prove that Sloane is careful. Careless is the opposite.`],
            why: `The question says Sloane is careful near the horse. Careful means you take care, so nothing goes wrong. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection',
            q: `Careful means you take care, so nothing goes wrong. Which paragraph tells about the rule for staying safe around a horse?`,
            choices: [`Paragraph 3`, `Paragraph 1`, `Paragraph 2`, `Paragraph 4`],
            kinds: [null, 'wrongtime', 'wrongtime', 'wrongtime'],
            notes: [null,
              `Paragraph 1 tells how Sloane meets Nutmeg.`,
              `Paragraph 2 tells how Nutmeg sniffs Sloane's hand.`,
              `Paragraph 4 tells how Nutmeg looks after the brushing.`],
            why: `Paragraph 3 tells the rule. Never stand behind a horse. It also tells what Sloane does after she hears the rule.` },
          { kind: 'step', id: 'S3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Sloane is careful near the horse?`,
            choices: [
              `Sloane walked all the way around the front of Nutmeg to reach her other side.`,
              `He told her to brush the way the hair grows and to never stand behind a horse.`,
              `Mr. Osman checked the gate latch twice before he stepped back to watch.`,
              `Sloane giggled and hugged Nutmeg's warm neck.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              `Paragraph 3 tells the rule that Mr. Osman gives. It does not show what Sloane does.`,
              `Paragraph 3 shows that Mr. Osman is careful. But the question asks about Sloane.`,
              `Paragraph 4 is from the end. It shows that Sloane is happy, not careful.`],
            why: `Paragraph 3 gives the rule. Do not stand behind a horse. So Sloane walked all the way around the front of Nutmeg. She did not take the short way. That shows she is careful.` },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              `You can find the BEST proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Find the part of the passage about the idea. Look for the paragraph.`,
              `Step 3. Test EVERY sentence there. Ask, does this sentence SHOW the idea?`,
              `Remember the trap. A sentence about the idea is not always proof.`,
              `Pick the sentence that SHOWS the idea with an action, a word or a detail.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Judging Day in the Rabbit Barn`,
          paragraphs: [
            `Every August, the county fair had a rabbit show in the big red barn. This year, Molly brought her rabbit, Sprout, for the very first time. Sprout was small and brown, with one floppy ear. Molly had brushed Sprout's fur every day for a month.`,
            `Molly waited in line with Sprout in her arms. Her stomach did flips, and she kept checking the number pinned to her shirt. Next to her stood a girl named Hanna with a giant white rabbit. Hanna's rabbit had won first place last year.`,
            `The judge lifted Sprout onto the table and looked at his teeth and ears. Sprout kicked his back legs and tried to hop away. Molly kept one hand on his back and talked to him in a soft, low voice. Soon Sprout stopped kicking and sat still.`,
            `At the end, the judge gave Hanna's rabbit the blue ribbon for first place. Sprout won the red ribbon for second place. Molly walked right over to Hanna and shook her hand. Hanna's little brother clapped and cheered for both rabbits.`,
            `Molly hung the red ribbon on the cage door where everyone could see it. Hanna held her blue ribbon up high so her family could take a picture. Then Molly sat down on a hay bale to rest. Sprout nibbled a carrot in the corner of his cage.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST shows how Molly feels while she waits in line?`,
            choices: [
              `Her stomach did flips, and she kept checking the number pinned to her shirt.`,
              `Molly waited in line with Sprout in her arms.`,
              `Next to her stood a girl named Hanna with a giant white rabbit.`,
              `Molly had brushed Sprout's fur every day for a month.`],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              `Paragraph 2 tells where Molly is and what she holds. It does not show how she feels.`,
              `Paragraph 2 tells who is next to Molly. It does not show how Molly feels.`,
              `Paragraph 1 tells how Molly got Sprout ready. It does not show how she feels in line.`],
            why: `Paragraph 2 says Molly's stomach did flips. She kept checking her number again and again. She feels nervous.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Molly is a good sport. A good sport is kind to others, win or lose. Which sentence from the passage BEST supports this idea?`,
            choices: [
              `Molly walked right over to Hanna and shook her hand.`,
              `Sprout won the red ribbon for second place.`,
              `Hanna's little brother clapped and cheered for both rabbits.`,
              `Molly kept one hand on his back and talked to him in a soft, low voice.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 4 tells what Sprout won. It does not show how Molly acts.`,
              `Paragraph 4 shows that Hanna's brother is a good sport, too. But the question asks about Molly.`,
              `Paragraph 3 shows how Molly keeps Sprout calm. It does not show how she treats Hanna.`],
            why: `Paragraph 4 says Hanna's rabbit won first place, not Sprout. Molly walked right over and shook Hanna's hand. She was kind to the winner. That shows she is a good sport.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 5,
            q: `Read paragraph 5. Which sentence from paragraph 5 BEST shows how Molly feels about winning second place?`,
            choices: [
              `Molly hung the red ribbon on the cage door where everyone could see it.`,
              `Hanna held her blue ribbon up high so her family could take a picture.`,
              `Then Molly sat down on a hay bale to rest.`,
              `Sprout nibbled a carrot in the corner of his cage.`],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              `Paragraph 5 shows that Hanna is proud of her ribbon. But the question asks about Molly.`,
              `Paragraph 5 says Molly sat down to rest. It does not show how she feels about her ribbon.`,
              `Paragraph 5 tells what Sprout does. It does not show how Molly feels.`],
            why: `Paragraph 5 says Molly hung the red ribbon where everyone could see it. She wants people to see it. She is proud of second place.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Ten Things on the Fern Trail`,
            paragraphs: [
              `On a cool Saturday, the Nature Club hiked the Fern Trail at Tall Pines Park. Ms. Magda gave each pair of kids a card with ten things to find. There was one rule. The kids could take a picture of each thing, but they had to leave it where it was.`,
              `Fiona's partner was Vaughn, the fastest runner in the club. Vaughn dashed up the trail without even looking at the card. He called back that the woods were nothing but trees and dirt. Fiona tucked the card into her pocket. Then she walked slowly and studied the ground on both sides of the path.`,
              `Under a fern, Fiona spotted a tiny acorn cap no bigger than her fingernail. She knelt down and found a gray feather in the moss beside it. Vaughn jogged back and stared. He had run right past the acorn cap and the feather.`,
              `Fiona took a picture of the feather and left it right where it was. Vaughn reached down to grab the soft gray feather for his baseball hat. Fiona tapped the rule on the card with her finger. Vaughn sighed, but he left the feather in the moss.`,
              `After that, Vaughn walked beside Fiona instead of racing ahead. He found a leaf with three holes and a pinecone as big as his fist. At the top of the hill, both partners stood still and listened to a woodpecker tapping on a tree.`,
              `By the end of the trail, Fiona and Vaughn had found nine of the ten things. Vaughn grinned and said that the trail had been full of treasures after all. Fiona showed Ms. Magda their pictures, one by one.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Fiona takes her time on the trail?`,
              choices: [
                `Then she walked slowly and studied the ground on both sides of the path.`,
                `Fiona tucked the card into her pocket.`,
                `Vaughn dashed up the trail without even looking at the card.`,
                `Ms. Magda gave each pair of kids a card with ten things to find.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 2 tells where Fiona puts the card. It does not show how she moves on the trail.`,
                `Paragraph 2 tells what Vaughn does. He does not take his time.`,
                `Paragraph 1 tells what Ms. Magda hands out. It does not show what Fiona does.`],
              why: `Paragraph 2 says Fiona walked slowly. She studied the ground on both sides of the path. She did not rush. That shows she takes her time.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
              q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows that Fiona follows the rule?`,
              choices: [
                `Fiona took a picture of the feather and left it right where it was.`,
                `Fiona tapped the rule on the card with her finger.`,
                `Vaughn sighed, but he left the feather in the moss.`,
                `Vaughn reached down to grab the soft gray feather for his baseball hat.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 4 says Fiona points to the rule for Vaughn. That reminds Vaughn. It does not show what Fiona does with the feather.`,
                `Paragraph 4 shows that Vaughn follows the rule, too. But the question asks about Fiona.`,
                `Paragraph 4 tells what Vaughn wants to do. That would break the rule.`],
              why: `The rule says to take a picture and leave each thing where it is. Paragraph 4 says Fiona took a picture of the feather. Then she left the feather where it was. That shows she follows the rule.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Vaughn stops racing ahead and walks beside Fiona. Which detail from the passage BEST shows why?`,
              choices: [
                `He had run right past the acorn cap and the feather.`,
                `Vaughn jogged back and stared.`,
                `After that, Vaughn walked beside Fiona instead of racing ahead.`,
                `Fiona's partner was Vaughn, the fastest runner in the club.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 3 says Vaughn came back and looked. That is what he does. It does not show why he slows down.`,
                `Paragraph 5 tells THAT Vaughn walks with Fiona. It does not tell why.`,
                `Paragraph 2 says Vaughn is fast. That tells why he could race ahead, not why he slows down.`],
              why: `Paragraph 3 says Vaughn had run right past the acorn cap and the feather. He missed them because he went so fast. So now he slows down.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Vaughn changes his mind about the woods. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Vaughn grinned and said that the trail had been full of treasures after all.`,
                `By the end of the trail, Fiona and Vaughn had found nine of the ten things.`,
                `He called back that the woods were nothing but trees and dirt.`,
                `Fiona showed Ms. Magda their pictures, one by one.`],
              kinds: [null, 'notproof', 'wrongtime', 'notproof'],
              notes: [null,
                `Paragraph 6 tells how many things they found. It does not show what Vaughn thinks.`,
                `Paragraph 2 is from the start. It shows what Vaughn thought before.`,
                `Paragraph 6 tells what Fiona does. It does not show what Vaughn thinks.`],
              why: `In paragraph 2, Vaughn said the woods were just trees and dirt. Paragraph 6 says he grinned and called the trail full of treasures. He changed his mind.` }
          ]
        },
        {
          story: {
            title: `Mud Day for the Pigs`,
            paragraphs: [
              `In July, a heat wave hit the city. On the hottest day, Tavi and her friend Ola helped out at Hill Street Farm, a tiny farm tucked between two tall buildings. The sun beat down on the barn roof. Even the chickens hid in the shade.`,
              `Ms. Mercy, the farmer, pointed at the pig pen. Three pink pigs lay flat in the dust, panting. Pigs cannot sweat, so on hot days they roll in mud to cool off. But the pen was as dry as a cracker.`,
              `Ms. Mercy handed Tavi the hose and Ola a shovel. Tavi sprayed water on a dry corner of the pen until the dirt turned dark and soft. Ola wrinkled her nose and held the shovel far away from her body. Ms. Mercy carried two heavy buckets of water all the way across the hot yard to the pigs.`,
              `Tavi pulled on a pair of rubber boots and stepped right into the mud. Sweat dripped down her face, but she kept stomping until the whole corner was squishy. The mud was as thick as pudding. Then Tavi climbed out of the pen.`,
              `The biggest pig, Petunia, trotted over and flopped into the puddle with a loud splat. Mud flew over the fence, and a big glob landed on Ola's shirt. Ola stared at the glob. Then she laughed and squished the mud between her fingers.`,
              `Soon all three pigs were rolling and grunting happily. Tavi and Ola both had mud on their clothes. Ms. Mercy took a picture of the muddy crew and promised to hang it in the barn.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Tavi works hard?`,
              choices: [
                `Sweat dripped down her face, but she kept stomping until the whole corner was squishy.`,
                `Tavi pulled on a pair of rubber boots and stepped right into the mud.`,
                `Ms. Mercy carried two heavy buckets of water all the way across the hot yard to the pigs.`,
                `The mud was as thick as pudding.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 4 says Tavi stepped into the mud. That shows she does not mind mud. It does not show how hard she works.`,
                `Paragraph 3 shows that Ms. Mercy works hard, too. But the question asks about Tavi.`,
                `Paragraph 4 tells how thick the mud is. It does not show what Tavi does.`],
              why: `Paragraph 4 says sweat dripped down Tavi's face. But she kept stomping until the whole corner was squishy. That shows she works hard.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
              q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows how Ola feels about the mud at first?`,
              choices: [
                `Ola wrinkled her nose and held the shovel far away from her body.`,
                `Ms. Mercy handed Tavi the hose and Ola a shovel.`,
                `Tavi sprayed water on a dry corner of the pen until the dirt turned dark and soft.`,
                `Ms. Mercy carried two heavy buckets of water all the way across the hot yard to the pigs.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 3 tells what Ms. Mercy hands out. It does not show how Ola feels.`,
                `Paragraph 3 tells what Tavi does with the hose. It does not show how Ola feels.`,
                `Paragraph 3 tells what Ms. Mercy carries. It does not show how Ola feels.`],
              why: `Paragraph 3 says Ola wrinkled her nose. She held the shovel far from her body. She does not like the mud.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Ms. Mercy has the girls make a mud puddle in the pig pen. Which detail from the passage BEST shows why?`,
              choices: [
                `Pigs cannot sweat, so on hot days they roll in mud to cool off.`,
                `Ms. Mercy, the farmer, pointed at the pig pen.`,
                `Mud flew over the fence, and a big glob landed on Ola's shirt.`,
                `Ms. Mercy took a picture of the muddy crew and promised to hang it in the barn.`],
              kinds: [null, 'notproof', 'wrongtime', 'wrongtime'],
              notes: [null,
                `Paragraph 2 tells where Ms. Mercy points. It does not show why she wants mud.`,
                `Paragraph 5 is from after the mud is made. It does not show why the girls make it.`,
                `Paragraph 6 is from the end. It does not show why Ms. Mercy wants mud.`],
              why: `Paragraph 2 says pigs cannot sweat. On hot days, they roll in mud to cool off. It is a very hot day, so the pigs need mud.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Ola changes how she feels about the mud. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Then she laughed and squished the mud between her fingers.`,
                `Ola stared at the glob.`,
                `Tavi pulled on a pair of rubber boots and stepped right into the mud.`,
                `Mud flew over the fence, and a big glob landed on Ola's shirt.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 5 says Ola looked at the mud on her shirt. It does not show how she feels about it yet.`,
                `Paragraph 4 shows that Tavi does not mind the mud. But the question asks about Ola.`,
                `Paragraph 5 tells where the mud lands. It does not show how Ola feels.`],
              why: `At first, Ola wrinkled her nose at the mud. Paragraph 5 says she laughed and squished it between her fingers. Now she likes it.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 4 ════════ */
    {
      teach: {
        story: {
          title: `Crayfish Under the Flat Rocks`,
          paragraphs: [
            `On a sunny June morning, Agnes went to Stony Run with her summer day camp. Stony Run is a shallow stream, and the water only came up to her ankles. Mr. Thorn, the camp leader, wanted to help the kids find crayfish. A crayfish looks like a tiny lobster with two big claws.`,
            `Mr. Thorn showed them how to look for one. Lift a flat rock slowly, so the mud does not cloud the water. Then hold your net behind the rock, because a crayfish zips backward when it is scared.`,
            `The other kids splashed around and flipped rocks as fast as they could. Soon the water was brown with mud. Agnes walked to a quiet spot near the edge of the stream. She lifted one flat rock and held her net behind it for a long, long time.`,
            `At last, a crayfish shot backward right into her net! Agnes gasped and grinned at Mr. Thorn. He scooped the crayfish into his cupped hands and lowered it into a bucket of stream water. The kids crowded around to see its tiny claws.`,
            `When the kids had a good look, Agnes carried the bucket back to her rock. She tipped the bucket a little at a time, until the crayfish slid out into the stream. It scooted under the rock and was gone.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Proof, Level 2',
            lines: [
              `You know these test words. Let's say them again.`,
              `A passage is a story on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
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
              `Here is a question. Which sentence from the passage BEST supports the idea that Agnes is patient?`,
              `Step 1. I say the idea. Agnes can wait a long time and stay calm.`,
              `Step 2. I find the paragraph. Paragraph 3 tells how Agnes looks for a crayfish.`,
              `Step 3. I test each sentence in paragraph 3. I ask, does this sentence SHOW that Agnes is patient?`,
              `She lifted one flat rock and held her net behind it for a long, long time.`,
              `Yes! Agnes holds still and waits for a long time. That SHOWS she is patient. That sentence is my proof.`,
              `Step 4. I check the trap sentence. Agnes walked to a quiet spot near the edge of the stream.`,
              `That sentence is in the right paragraph. It is about Agnes at the same moment, too.`,
              `But it only tells where she goes. It does not show her waiting.`,
              `So the trap sentence is not the BEST proof.`
            ],
            lit: [
              `She lifted one flat rock and held her net behind it for a long, long time.`,
              `Agnes walked to a quiet spot near the edge of the stream.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
            q: `Here is a new question. Which sentence from the passage BEST supports the idea that Agnes is gentle with the crayfish? What idea does the question ask us to prove?`,
            choices: [`Agnes is gentle with the crayfish.`, `Agnes is patient.`, `Mr. Thorn is gentle with the crayfish.`, `Agnes is rough with the crayfish.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'opposite'],
            notes: [null,
              `That was the idea in the last question. This question says gentle.`,
              `The question asks about Agnes, not Mr. Thorn.`,
              `The question asks us to prove that Agnes is gentle. Rough is the opposite.`],
            why: `The question says Agnes is gentle with the crayfish. Gentle means you move something softly, so it does not get hurt. That is the idea to prove.` },
          { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection',
            q: `Gentle means you move something softly, so it does not get hurt. Which paragraph tells how Agnes puts the crayfish back?`,
            choices: [`Paragraph 5`, `Paragraph 2`, `Paragraph 3`, `Paragraph 4`],
            kinds: [null, 'wrongtime', 'wrongtime', 'wrongtime'],
            notes: [null,
              `Paragraph 2 tells how Mr. Thorn shows the kids what to do.`,
              `Paragraph 3 tells how Agnes waits with her net.`,
              `Paragraph 4 tells how the crayfish gets into the net.`],
            why: `Paragraph 5 tells how Agnes takes the crayfish back to the stream.` },
          { kind: 'step', id: 'S3', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Agnes is gentle with the crayfish?`,
            choices: [
              `She tipped the bucket a little at a time, until the crayfish slid out into the stream.`,
              `When the kids had a good look, Agnes carried the bucket back to her rock.`,
              `He scooped the crayfish into his cupped hands and lowered it into a bucket of stream water.`,
              `Agnes gasped and grinned at Mr. Thorn.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              `Paragraph 5 tells where Agnes takes the bucket. It does not show how she lets the crayfish go.`,
              `Paragraph 4 shows that Mr. Thorn is gentle. But the question asks about Agnes.`,
              `Paragraph 4 shows how Agnes feels when she catches the crayfish. It does not show her being gentle.`],
            why: `Paragraph 5 says Agnes tipped the bucket a little at a time, until the crayfish slid out. A slow tip is a soft way to let it go. That shows she is gentle.` },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              `You can find the BEST proof in three steps.`,
              `Step 1. Say the idea in your own words.`,
              `Step 2. Find the part of the passage about the idea. Look for the paragraph.`,
              `Step 3. Test EVERY sentence there. Ask, does this sentence SHOW the idea?`,
              `Remember the trap. A sentence about the idea is not always proof.`,
              `Pick the sentence that SHOWS the idea with an action, a word or a detail.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `A Corn Snake Named Ribbon`,
          paragraphs: [
            `On a rainy Saturday, Noel and his big sister, Vivian, visited the nature center in Ridge Park. In the animal room, a woman named Ms. Keiko lifted an orange snake out of a glass tank. The snake was named Ribbon, and she was as long as a jump rope.`,
            `Noel slid behind his sister and peeked out around her elbow. Ms. Keiko said that Ribbon was a corn snake. Corn snakes are gentle, and they are not dangerous. Vivian reached out first and stroked Ribbon's back with two fingers.`,
            `Ribbon flicked out her red tongue. Noel jumped and grabbed Vivian's sleeve. Then he took a deep breath and stepped out from behind her. Very slowly, he reached out one finger and touched the middle of Ribbon's back.`,
            `Ribbon's scales felt smooth and dry, like the inside of a shell. They were not slimy at all. Ms. Keiko explained that a snake flicks its tongue to smell the air.`,
            `Before they left, Noel watched Ms. Keiko put Ribbon back in her tank. Vivian said that she was hungry and wanted to go home. At the front desk, Noel spent his own money on a book about snakes. Outside, the rain had stopped, and puddles shone on the path.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST shows how Noel feels when he first sees Ribbon?`,
            choices: [
              `Noel slid behind his sister and peeked out around her elbow.`,
              `Ms. Keiko said that Ribbon was a corn snake.`,
              `On a rainy Saturday, Noel and his big sister, Vivian, visited the nature center in Ridge Park.`,
              `Ribbon flicked out her red tongue.`],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              `Paragraph 2 tells what kind of snake Ribbon is. It does not show how Noel feels.`,
              `Paragraph 1 tells where Noel and Vivian go. It does not show how Noel feels.`,
              `Paragraph 3 tells what Ribbon does. It does not show how Noel feels.`],
            why: `Paragraph 2 says Noel hid behind his sister and only peeked out. People hide like that when they feel scared.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Noel is brave. Which sentence from the passage BEST supports this idea?`,
            choices: [
              `Very slowly, he reached out one finger and touched the middle of Ribbon's back.`,
              `Noel jumped and grabbed Vivian's sleeve.`,
              `Vivian reached out first and stroked Ribbon's back with two fingers.`,
              `Ribbon's scales felt smooth and dry, like the inside of a shell.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 3 says Noel jumped and grabbed his sister. That shows he is scared. It does not show him being brave yet.`,
              `Paragraph 2 shows that Vivian is brave. But the question asks about Noel.`,
              `Paragraph 4 tells how the scales feel. It does not show what Noel does.`],
            why: `Paragraph 3 says Noel was scared, but he reached out anyway. He touched Ribbon's back with one finger. Brave means you do a thing even when you feel scared.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 5,
            q: `Read paragraph 5. Which sentence from paragraph 5 BEST shows how Noel feels about snakes now?`,
            choices: [
              `At the front desk, Noel spent his own money on a book about snakes.`,
              `Before they left, Noel watched Ms. Keiko put Ribbon back in her tank.`,
              `Vivian said that she was hungry and wanted to go home.`,
              `Outside, the rain had stopped, and puddles shone on the path.`],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              `Paragraph 5 says Noel watched Ribbon go back in her tank. That tells what he sees. It does not show how he feels.`,
              `Paragraph 5 tells what Vivian wants. That is about Vivian, not Noel.`,
              `Paragraph 5 tells about the weather. It does not show how Noel feels.`],
            why: `At first, Noel hid from Ribbon. Paragraph 5 says he spent his own money on a book about snakes. Now he likes snakes.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Water for the Little Linden`,
            paragraphs: [
              `Last spring, the city planted a skinny linden tree in the yard behind Simone's building. Its leaves were shaped like little green hearts. Simone and Grandpa Ezio liked to sit on the bench beside it after dinner.`,
              `Then August came, and it did not rain for three whole weeks. The grass in the yard turned brown and crunchy. One evening, the linden's leaves hung down like wet socks. Simone touched a crispy leaf and frowned. Grandpa let out a long, slow sigh.`,
              `Simone filled her small yellow bucket at the kitchen sink. Grandpa filled a big plastic jug. Together, they carried the water down the long stairs and poured it around the tree's roots. The dry dirt drank it up in seconds.`,
              `The next evening, Simone's arms ached before they even reached the stairs. The bucket bumped against her legs and splashed her socks. She switched hands and kept climbing down, one step at a time. Grandpa's knees creaked on every step, but he kept carrying his jug.`,
              `Mr. Stroud from the first floor watched them from his window. At first, he just shook his head. After a week, Mr. Stroud came out with his own watering can. Soon, three more neighbors were carrying buckets of water.`,
              `At last, a soft, steady rain began to fall. Simone ran into the yard and spun in circles with her face to the sky. The next morning, the linden's leaves stood up straight again.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST shows how Simone feels when she sees the linden's leaves in August?`,
              choices: [
                `Simone touched a crispy leaf and frowned.`,
                `One evening, the linden's leaves hung down like wet socks.`,
                `Grandpa let out a long, slow sigh.`,
                `Simone and Grandpa Ezio liked to sit on the bench beside it after dinner.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 2 tells how the leaves look. It does not show how Simone feels.`,
                `Paragraph 2 shows how Grandpa feels. But the question asks about Simone.`,
                `Paragraph 1 is from the spring, before the leaves dried out.`],
              why: `Paragraph 2 says Simone touched a dry leaf and frowned. People frown when they are worried or upset.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
              q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows that Simone does not give up?`,
              choices: [
                `She switched hands and kept climbing down, one step at a time.`,
                `The next evening, Simone's arms ached before they even reached the stairs.`,
                `The bucket bumped against her legs and splashed her socks.`,
                `Grandpa's knees creaked on every step, but he kept carrying his jug.`],
              kinds: [null, 'notproof', 'notproof', 'wrongwho'],
              notes: [null,
                `Paragraph 4 says Simone's arms hurt. That shows the job is hard. It does not show what she does when her arms hurt.`,
                `Paragraph 4 tells what the bucket does. It does not show what Simone does.`,
                `Paragraph 4 shows that Grandpa keeps going, too. But the question asks about Simone.`],
              why: `Paragraph 4 says Simone's arms ached. But she switched hands and kept going down the stairs. She did not quit. That shows she does not give up.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The linden's leaves hang down like wet socks. Which detail from the passage BEST shows why?`,
              choices: [
                `Then August came, and it did not rain for three whole weeks.`,
                `The grass in the yard turned brown and crunchy.`,
                `Its leaves were shaped like little green hearts.`,
                `Simone filled her small yellow bucket at the kitchen sink.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 2 tells what happened to the grass. It does not show why the leaves hang down.`,
                `Paragraph 1 tells the shape of the leaves. It does not show why they hang down.`,
                `Paragraph 3 tells what Simone does next. It does not show why the leaves hang down.`],
              why: `Paragraph 2 says it did not rain for three weeks. A tree needs water. With no rain, the leaves hang down.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Mr. Stroud changes his mind about helping with the tree. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `After a week, Mr. Stroud came out with his own watering can.`,
                `Mr. Stroud from the first floor watched them from his window.`,
                `Soon, three more neighbors were carrying buckets of water.`,
                `At first, he just shook his head.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 5 says Mr. Stroud watched from his window. Watching is not the same as changing his mind.`,
                `Paragraph 5 tells about the other neighbors. They help, too. But the question asks about Mr. Stroud.`,
                `Paragraph 5 tells how Mr. Stroud acted at first, before he changed his mind.`],
              why: `Paragraph 5 says Mr. Stroud shook his head at first. After a week, he came out with a watering can to help. He changed his mind.` }
          ]
        },
        {
          story: {
            title: `A Chrysalis on the Dill`,
            paragraphs: [
              `In July, Dan found a fat caterpillar on the dill plant in a pot on Grandma's back steps. It had green, black and gold stripes, and it was munching on a leaf. Grandma said that it would turn into a butterfly one day.`,
              `Each morning, Dan held a ruler next to it and wrote down how long it was. In one week, it grew from one inch to two inches. His cousin Holly yawned and said that bugs were boring.`,
              `One morning, the caterpillar was gone. In its place hung a brown case, stuck to the stem with a thin thread of silk. Grandma said that the case was called a chrysalis. The butterfly was growing inside it.`,
              `For ten days, nothing seemed to change. Holly wanted to poke the case to see if the bug was still in there. Dan pulled the pot out of her reach. He checked on the case each day, but he never once touched it.`,
              `The next morning, the case split open. A butterfly crawled out with wet, crumpled wings. It hung on the stem without moving for a whole hour. Grandma made a cup of tea and sat down to watch.`,
              `At last, the butterfly opened its black and gold wings. Holly gasped and began to search the dill for more caterpillars. Dan held out his finger, and the butterfly climbed on. Then it fluttered up over the fence and away.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Dan is curious about the caterpillar?`,
              choices: [
                `Each morning, Dan held a ruler next to it and wrote down how long it was.`,
                `In one week, it grew from one inch to two inches.`,
                `Holly wanted to poke the case to see if the bug was still in there.`,
                `In July, Dan found a fat caterpillar on the dill plant in a pot on Grandma's back steps.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 2 tells how much the caterpillar grew. It does not show what Dan does to learn.`,
                `Paragraph 4 shows that Holly is curious, too. But the question asks about Dan.`,
                `Paragraph 1 says Dan found the caterpillar. Finding it does not show that he wants to learn about it.`],
              why: `Curious means you want to learn about something. Paragraph 2 says Dan measured the caterpillar every morning. He wrote down how long it was. That shows he is curious.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
              q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows that Dan is patient?`,
              choices: [
                `He checked on the case each day, but he never once touched it.`,
                `For ten days, nothing seemed to change.`,
                `Dan pulled the pot out of her reach.`,
                `Holly wanted to poke the case to see if the bug was still in there.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 4 says nothing changed for ten days. That is about the long wait. It does not show HOW Dan waits.`,
                `Paragraph 4 says Dan moved the pot away from Holly. That keeps the case safe. It does not show him waiting.`,
                `Paragraph 4 tells what Holly wants to do. She does not want to wait.`],
              why: `Paragraph 4 says nothing changed for ten days. Dan checked the case each day, but he never touched it. He waited. That shows he is patient.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The butterfly does not fly away at first. Which detail from the passage BEST shows why?`,
              choices: [
                `A butterfly crawled out with wet, crumpled wings.`,
                `The next morning, the case split open.`,
                `It hung on the stem without moving for a whole hour.`,
                `The butterfly was growing inside it.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 5 tells when the case opens. It does not show why the butterfly waits.`,
                `Paragraph 5 tells THAT the butterfly does not move. It does not tell why.`,
                `Paragraph 3 tells where the butterfly grew. It does not show why it waits.`],
              why: `Paragraph 5 says the wings were wet and crumpled. Wet, crumpled wings are not ready to fly. So the butterfly waits.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Holly changes how she feels about bugs. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Holly gasped and began to search the dill for more caterpillars.`,
                `At last, the butterfly opened its black and gold wings.`,
                `Dan held out his finger, and the butterfly climbed on.`,
                `His cousin Holly yawned and said that bugs were boring.`],
              kinds: [null, 'notproof', 'notproof', 'wrongtime'],
              notes: [null,
                `Paragraph 6 tells what the butterfly does. It does not show how Holly feels.`,
                `Paragraph 6 tells what Dan does. It does not show how Holly feels.`,
                `Paragraph 2 is from the start. It shows how Holly felt before.`],
              why: `In paragraph 2, Holly said bugs were boring. Paragraph 6 says she gasped and began to look for more caterpillars. Now she likes them.` }
          ]
        }
      ]
    }
  ]
};
