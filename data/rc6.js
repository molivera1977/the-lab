/* ═══════════════════════════════════════════════════════
   THE LAB · data/rc6.js — Reading for Meaning, RC6 "What Is It Mostly About?" (skills: Main idea, Summary)
   The main idea of a paragraph (what the WHOLE paragraph is about), the KEY event a summary leaves out,
   and the sentence that BEST summarizes the passage.
   Level 1, Part 2: every version has its OWN teaching story (a new worked example every try).
   Shape: tools/CONTENT-SPEC-READING.md ("LEVEL 1, PART 2") · checked by: node tools/check-reading.js RC6
   The right choice is written FIRST; the site shuffles.
   Each version, in order:
     teach: W1 "Mostly about" · W2 worked main idea · S1 small detail · S2 main idea (para) · S3 best summary · W3 "The steps"
     pre:   P1 main idea (para) · P2 missing key event (excerpt) · P3 best summary
     turn:  A: Q01 main idea (para) · Q02 main idea (para) · Q03 missing key event (excerpt) · Q04 best summary
            B: Q05–Q08, the same
   Kinds: main idea → onedetail (most), wrongtime (another paragraph), toofar;
          missing event → insummary (required), onedetail, noclue;
          best summary → onedetail (one part), noclue (a wrong event), wrongtime (out of order).
   A main-idea item's wrong choices never name the event the later missing-event item asks about.
   The best-summary stem adds "Look for the big parts, in order." — the spec's three stems alone read at FK 4.3
   together (the questions' limit is 4.0).
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RC6 = {
  versions: [
    /* ════════ VERSION 1 ════════ */
    {
      teach: {
        story: {
          title: `Mr. Patches on the Top Step`,
          paragraphs: [
            `In October, Vic and Grandma wanted to make a scarecrow for the front steps. First, they looked for things to use. Vic found an old flannel shirt and a pair of jeans. Grandma found a straw hat with a bent brim.`,
            `Next, they made the body. Vic stuffed the shirt with crumpled newspaper. Grandma tied the ends of the sleeves with string so the paper would not fall out. Then they stuffed the jeans until the legs were fat and round.`,
            `The scarecrow still needed a head. Grandma filled a brown paper bag with more newspaper. Vic drew two big eyes and a crooked smile with a black marker. Then they set the straw hat on top.`,
            `At last, they sat the scarecrow on the top step. Vic named him Mr. Patches. A neighbor walking by laughed and waved at him. Every morning after that, Vic said hello to Mr. Patches on his way to school.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Mostly about',
            lines: [
              `A passage is a story you read on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
              `Some questions ask what a paragraph is mostly about.`,
              `Mostly about means what the WHOLE paragraph tells about. That is the main idea.`,
              `A detail is one small part. It tells just one thing.`,
              `Think about your lunch today. The main idea is, I had a good lunch. A detail is, my apple was sweet and crunchy.`,
              `A summary tells the most important parts of a passage. It tells them in order, in a few sentences.`,
              `A summary leaves out the small details.`,
              `A key event is a big part of the story. If you leave it out, the story does not make sense.`,
              `Some questions ask which key event is MISSING. Missing means left out.`,
              `Summarizes means tells a summary. The BEST summary tells all the key events, in order.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the main idea',
            lines: [
              `Here is a question. Read paragraph 2. What is paragraph 2 mostly about?`,
              `Step 1. I read the WHOLE paragraph, not just one sentence.`,
              `Step 2. I ask, what do all the sentences tell about?`,
              `Vic stuffs the shirt. Grandma ties the sleeves. They stuff the jeans.`,
              `All of them tell how Vic and Grandma make the body of the scarecrow.`,
              `The first sentence says it too. Next, they made the body.`,
              `So paragraph 2 is mostly about making the body. That is the main idea.`,
              `Watch out. Grandma tied the ends of the sleeves with string so the paper would not fall out.`,
              `That sentence is true. But it tells just one small part. It is a detail, not the main idea.`
            ],
            lit: [
              `Next, they made the body.`,
              `Grandma tied the ends of the sleeves with string so the paper would not fall out.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `A summary leaves out small details. Which sentence from the passage is just one small detail?`,
            choices: [
              `A neighbor walking by laughed and waved at him.`,
              `First, they looked for things to use.`,
              `Next, they made the body.`,
              `At last, they sat the scarecrow on the top step.`],
            kinds: [null, 'toofar', 'toofar', 'toofar'],
            notes: [null,
              `Paragraph 1 says they looked for things to use. That is a big part of the story, not a small detail.`,
              `Paragraph 2 says they made the body. That is a big part of the story, not a small detail.`,
              `Paragraph 4 says they set the scarecrow on the step. That is a big part of the story, not a small detail.`],
            why: `Paragraph 4 says a neighbor laughed and waved. The story still makes sense without it. So it is just one small detail.` },
          { kind: 'step', id: 'S2', type: 'mc', para: 3,
            q: `Read paragraph 3. What is paragraph 3 mostly about?`,
            choices: [
              `Vic and Grandma make a head for the scarecrow.`,
              `Vic draws a crooked smile with a black marker.`,
              `Grandma fills a paper bag with more newspaper.`,
              `Vic and Grandma stuff the shirt and the jeans.`],
            kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
            notes: [null,
              `Paragraph 3 says Vic draws a smile. That is one small detail. The whole paragraph is about more.`,
              `Paragraph 3 says Grandma fills a bag. That is one small detail, not the main idea.`,
              `That is in paragraph 2, not paragraph 3.`],
            why: `Paragraph 3 starts, the scarecrow still needed a head. The bag, the face and the hat all make the head. So paragraph 3 is mostly about making the head.` },
          { kind: 'step', id: 'S3', type: 'mc',
            q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
            choices: [
              `Vic and Grandma found old clothes, stuffed them, made a head, and set the scarecrow on the steps.`,
              `Vic stuffed the old flannel shirt with crumpled newspaper, and then they stuffed the jeans.`,
              `Vic and Grandma found old clothes, made a scarecrow, and took it to a contest at school.`,
              `Vic and Grandma set a scarecrow on the steps, and then they found old clothes and stuffed them full.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is only paragraph 2. A summary tells about the whole passage.`,
              `The passage never says they took the scarecrow to a contest.`,
              `The events are out of order. They found the clothes first. They set the scarecrow out last.`],
            why: `The big parts are these. They find the clothes. They make the body and the head. Then they set the scarecrow out. That sentence tells all of them, in order.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for a main idea question.`,
              `Step 1. Read the WHOLE paragraph.`,
              `Step 2. Ask, what do all the sentences tell about? That is the main idea.`,
              `Step 3. Watch out for a choice about one small thing. That is just a detail.`,
              `Here are the steps for a summary question.`,
              `Step 1. Find the key events. They are the big parts.`,
              `Step 2. Check that all the key events are there, in order.`,
              `Step 3. Watch out for a choice that tells just one small part.`,
              `If a question asks what is MISSING, read the summary first.`,
              `Then find the big part of the passage that the summary does not tell.`,
              `Watch out. Some choices tell an event the summary already tells. That event is not missing.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Sap Buckets in March`,
          paragraphs: [
            `In March, Gail went to visit Aunt Pam. Aunt Pam had a big maple tree in her yard. She told Gail that they could make maple syrup from the tree.`,
            `First, Aunt Pam drilled a small hole in the trunk. Gail tapped a metal spout into the hole with a hammer. Then they hung a bucket on the spout. Clear sap began to drip into the bucket, one drop at a time.`,
            `Each day after that, Gail checked the bucket. The sap looked like water, but it tasted a little sweet. By Friday, the bucket was almost full.`,
            `Then Aunt Pam boiled the sap in a big pot for hours. Slowly, the sap turned thick and brown. On Sunday morning, Gail poured the new syrup on her pancakes.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Main idea', para: 2,
            q: `Read paragraph 2. What is paragraph 2 mostly about?`,
            choices: [
              `Gail and Aunt Pam set up a bucket to catch the sap.`,
              `Aunt Pam drills a small hole in the trunk of the tree.`,
              `Gail taps the metal spout into the hole with a hammer.`,
              `Gail checks the bucket each day to see how full it is.`],
            kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
            notes: [null,
              `Paragraph 2 says Aunt Pam drills a hole. That is one small step. The whole paragraph is about more.`,
              `Paragraph 2 says Gail taps in the spout. That is one small detail, not the main idea.`,
              `That is in paragraph 3, not paragraph 2.`],
            why: `Each sentence in paragraph 2 tells how they set up the bucket. The hole, the spout and the bucket all help catch the sap. That is the main idea.` },
          { id: 'P2', type: 'mc', skill: 'Summary',
            excerptLabel: `📝 A summary of “Sap Buckets in March”`,
            excerpt: [
              `Gail went to see Aunt Pam and her big maple tree.`,
              `They put a spout in the tree and hung up a bucket.`,
              `Each day, sap dripped into the bucket.`,
              `On Sunday, Gail put the new syrup on her pancakes.`],
            q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
            choices: [
              `Aunt Pam boiled the sap until it turned into syrup.`,
              `Gail and Aunt Pam hung a bucket on the tree.`,
              `The sap looked like water, but it tasted a little sweet.`,
              `Gail and Aunt Pam sold the syrup at a store.`],
            kinds: [null, 'insummary', 'onedetail', 'noclue'],
            notes: [null,
              `The summary already tells that they hung a bucket. Look for the big part it leaves out.`,
              `Paragraph 3 says the sap tasted sweet. That is a small detail, not a key event.`,
              `The passage never says they sold the syrup.`],
            why: `Paragraph 4 says Aunt Pam boiled the sap for hours. That is how the sap turned into syrup. The summary skips it, so the summary does not make sense.` },
          { id: 'P3', type: 'mc', skill: 'Summary',
            q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
            choices: [
              `Gail and Aunt Pam caught sap from a maple tree in a bucket and boiled it into syrup.`,
              `Gail checked the bucket each day, and by Friday the bucket was almost full of sap.`,
              `Gail and Aunt Pam caught sap from a maple tree in a bucket, but the bucket fell and spilled.`,
              `Gail and Aunt Pam boiled sap into syrup, and then they hung a bucket on a maple tree.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is only paragraph 3. A summary tells about the whole passage.`,
              `The passage never says the bucket spilled. They made syrup.`,
              `The events are out of order. They hung the bucket first. They boiled the sap last.`],
            why: `The passage tells the big parts in order. They hung a bucket, they caught the sap, and they boiled it into syrup. That sentence tells all of them.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Lost in the Tall Corn`,
            paragraphs: [
              `On a cool fall Saturday, Dad drove Sid and his little sister, Tam, out of the city. They were going to a corn maze for the first time. The corn was even taller than Dad.`,
              `At first, the maze was a lot of fun. The narrow dirt paths twisted and curved between the tall rows. Sid and Tam raced ahead and giggled at every corner. Dad kept calling for them to wait.`,
              `Then the path suddenly stopped at a dead end. They turned around, but every row of corn looked exactly the same. Tam's lip started to shake, and she grabbed Dad's hand. They were lost.`,
              `Then Sid noticed a tall wooden bridge in the middle of the maze. He climbed to the very top and looked down. From up high, he could see the whole path to the exit. He said the turns out loud so he would remember them.`,
              `Sid hurried down and led everyone along the path. Left, right, left again, and there was the exit! Dad bought them each a cup of warm popcorn. Tam said she wanted to come back next year.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Main idea', para: 2,
              q: `Read paragraph 2. What is paragraph 2 mostly about?`,
              choices: [
                `At first, the maze is a lot of fun for Sid and Tam.`,
                `The narrow dirt paths twist and curve between the rows.`,
                `Dad keeps calling for Sid and Tam to wait.`,
                `Dad drives Sid and Tam out of the city to the maze.`],
              kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
              notes: [null,
                `Paragraph 2 says the paths twist. That is one small detail about the maze.`,
                `Paragraph 2 says Dad keeps calling for them to wait. That is one small detail, not the main idea.`,
                `That is in paragraph 1, not paragraph 2.`],
              why: `Paragraph 2 starts, at first the maze was a lot of fun. The kids race and giggle. So paragraph 2 is mostly about the fun at the start.` },
            { id: 'Q02', type: 'mc', skill: 'Main idea', para: 3,
              q: `Read paragraph 3. What is paragraph 3 mostly about?`,
              choices: [
                `Sid, Tam, and Dad get lost in the corn maze.`,
                `Tam's lip shakes, and she grabs Dad's hand.`,
                `Tam is so scared that she never wants to see a maze again.`,
                `Sid and Tam race ahead and giggle at every corner.`],
              kinds: [null, 'onedetail', 'toofar', 'wrongtime'],
              notes: [null,
                `Paragraph 3 says Tam's lip shakes. That is one small detail. The whole paragraph is about more.`,
                `Too far. Tam is scared for a bit. But at the end, she wants to come back.`,
                `That is in paragraph 2. In paragraph 2, the maze is still fun.`],
              why: `Paragraph 3 tells about a dead end and rows that all look the same. It ends, they were lost. So paragraph 3 is mostly about getting lost.` },
            { id: 'Q03', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “Lost in the Tall Corn”`,
              excerpt: [
                `Dad took Sid and his little sister, Tam, to a corn maze.`,
                `At first, the maze was a lot of fun.`,
                `Then they came to a dead end and got lost.`,
                `At last, Sid led them all out of the maze.`],
              q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
              choices: [
                `Sid climbed a tall bridge and saw the path out.`,
                `Sid, Tam, and Dad came to a dead end and got lost.`,
                `Dad bought them each a cup of warm popcorn.`,
                `A worker came and showed them the way out.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already tells that they got lost. Look for the big part it leaves out.`,
                `Paragraph 5 says Dad bought popcorn. That is a small detail, not a key event.`,
                `The passage never says a worker helped them.`],
              why: `Paragraph 4 tells how Sid climbed the bridge and saw the way out. Without it, we do not know how Sid led them out. That key event is missing.` },
            { id: 'Q04', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
              choices: [
                `Sid, Tam, and Dad got lost in a corn maze, but Sid climbed a bridge, saw the way, and led them out.`,
                `The narrow dirt paths in the corn maze twisted and curved between the tall rows of corn.`,
                `Sid, Tam, and Dad got lost in a corn maze, so Dad called for help, and they waited a long time.`,
                `Sid led everyone out of a corn maze, and then he climbed up a bridge, and then they all got lost in it.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is only one part of paragraph 2. A summary tells about the whole passage.`,
                `The passage never says Dad called for help. Sid found the way.`,
                `The events are out of order. They got lost first. Sid led them out last.`],
              why: `The big parts are these. They get lost. Sid climbs the bridge. Then he leads them out. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `The Hill Behind the Library`,
            paragraphs: [
              `It was the Fourth of July. Juno and her family were going to watch the fireworks by the river. Mom packed a big blanket and a bag of sandwiches. Juno's big brother, Knox, carried a jug of water.`,
              `When they got to the river, the grass was full of people. Every good spot was taken. Juno stood on her toes, but all she could see were heads and hats.`,
              `Then Knox had an idea. He knew a little hill behind the library. They walked two more blocks to get there. From the top of the hill, they could see the whole river.`,
              `They spread out the blanket and ate their sandwiches as the sky got dark. Juno swatted a bug on her arm. She asked when the show would start about ten times.`,
              `At last, a loud boom shook the air. Gold and green sparks filled the sky over the water. Juno covered her ears, but she did not look away once. When the last spark faded, everyone on the hill clapped and cheered.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Main idea', para: 2,
              q: `Read paragraph 2. What is paragraph 2 mostly about?`,
              choices: [
                `The river is too crowded to find a good spot.`,
                `Juno stands up on her toes to see.`,
                `All Juno can see are heads and hats.`,
                `The family eats sandwiches as the sky gets dark.`],
              kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
              notes: [null,
                `Paragraph 2 says Juno stands on her toes. That is one small detail. The whole paragraph is about more.`,
                `Paragraph 2 says Juno sees heads and hats. That is one small detail, not the main idea.`,
                `That is in paragraph 4, not paragraph 2.`],
              why: `Paragraph 2 tells about the crowd by the river. Every good spot is taken, and Juno cannot see. So paragraph 2 is mostly about the crowded river.` },
            { id: 'Q06', type: 'mc', skill: 'Main idea', para: 5,
              q: `Read paragraph 5. What is paragraph 5 mostly about?`,
              choices: [
                `The family watches the fireworks light up the sky.`,
                `Juno covers her ears when she hears the boom.`,
                `Juno is so scared that she wants to go home.`,
                `Mom packs a big blanket and a bag of sandwiches.`],
              kinds: [null, 'onedetail', 'toofar', 'wrongtime'],
              notes: [null,
                `Paragraph 5 says Juno covers her ears. That is one small detail. The whole paragraph is about more.`,
                `Too far. Juno covers her ears, but she does not look away. The passage never says she wants to go home.`,
                `That is in paragraph 1, not paragraph 5.`],
              why: `Paragraph 5 tells about the boom, the gold and green sparks, and the cheers. So paragraph 5 is mostly about watching the fireworks.` },
            { id: 'Q07', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “The Hill Behind the Library”`,
              excerpt: [
                `Juno and her family went to see the fireworks.`,
                `By the river, all the good spots were taken.`,
                `They ate on their blanket as the sky got dark.`,
                `Then the show lit up the sky.`],
              q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
              choices: [
                `Knox took them up a hill with a good view.`,
                `All the good spots by the river were taken.`,
                `Juno swatted a bug on her arm.`,
                `The family went home and watched the show on TV.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already tells that the spots were taken. Look for the big part it leaves out.`,
                `Paragraph 4 says Juno swatted a bug. That is a small detail, not a key event.`,
                `The passage never says they went home to watch.`],
              why: `Paragraph 3 tells how Knox took them to the hill behind the library. That is how the family got a good spot. That key event is missing.` },
            { id: 'Q08', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
              choices: [
                `Juno's family could not find a spot by the river, so Knox led them to a hill to watch the fireworks.`,
                `Mom packed a big blanket and a bag of sandwiches, and Knox carried a jug of water.`,
                `Juno's family could not find a spot by the river, so they watched the show from a boat.`,
                `Juno's family watched the fireworks from a hill, and then they looked for a spot by the river.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is only paragraph 1. A summary tells about the whole passage.`,
                `The passage never says they watched from a boat. They watched from the hill.`,
                `The events are out of order. They looked by the river first. They watched from the hill last.`],
              why: `The big parts are these. The spots by the river are taken. Knox finds a hill. Then they watch the fireworks. That sentence tells all of them, in order.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 2 ════════ */
    {
      teach: {
        story: {
          title: `Balloons Before Breakfast`,
          paragraphs: [
            `Lia and Dad woke up at five o'clock on Saturday morning. They drove to a big, wide field for the hot air balloon festival. The sky was still pink and gray.`,
            `On the field, workers got the balloons ready to fly. At first, each balloon lay flat on the grass. Big fans blew air into the balloons. Then a loud burner shot a flame inside, and the balloons puffed up tall.`,
            `One by one, the balloons rose into the sky. Lia counted twelve of them. One balloon looked like a giant orange fish.`,
            `Later, a blue balloon came down in the field near them. The pilot waved Lia over and let her peek inside the basket. Lia talked about that basket all the way home.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Mostly about',
            lines: [
              `A passage is a story you read on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
              `Some questions ask what a paragraph is mostly about.`,
              `Mostly about means what the WHOLE paragraph tells about. That is the main idea.`,
              `A detail is one small part. It tells just one thing.`,
              `Think about your weekend. The main idea is, I had a fun weekend. A detail is, I went down the big slide at the park.`,
              `A summary tells the most important parts of a passage. It tells them in order, in a few sentences.`,
              `A summary leaves out the small details.`,
              `A key event is a big part of the story. If you leave it out, the story does not make sense.`,
              `Some questions ask which key event is MISSING. Missing means left out.`,
              `Summarizes means tells a summary. The BEST summary tells all the key events, in order.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the main idea',
            lines: [
              `Here is a question. Read paragraph 2. What is paragraph 2 mostly about?`,
              `Step 1. I read the WHOLE paragraph, not just one sentence.`,
              `Step 2. I ask, what do all the sentences tell about?`,
              `The balloons lie flat. Fans blow air in. A burner shoots a flame, and the balloons puff up.`,
              `All of them tell how the workers get the balloons ready to fly.`,
              `The first sentence says it too. On the field, workers got the balloons ready to fly.`,
              `So paragraph 2 is mostly about getting the balloons ready. That is the main idea.`,
              `Watch out. Big fans blew air into the balloons.`,
              `That sentence is true. But it tells just one small part. It is a detail, not the main idea.`
            ],
            lit: [
              `On the field, workers got the balloons ready to fly.`,
              `Big fans blew air into the balloons.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `A summary leaves out small details. Which sentence from the passage is just one small detail?`,
            choices: [
              `One balloon looked like a giant orange fish.`,
              `They drove to a big, wide field for the hot air balloon festival.`,
              `On the field, workers got the balloons ready to fly.`,
              `One by one, the balloons rose into the sky.`],
            kinds: [null, 'toofar', 'toofar', 'toofar'],
            notes: [null,
              `Paragraph 1 says Lia and Dad drove to the festival. That is a big part of the story, not a small detail.`,
              `Paragraph 2 says the workers got the balloons ready. That is a big part of the story, not a small detail.`,
              `Paragraph 3 says the balloons rose into the sky. That is a big part of the story, not a small detail.`],
            why: `Paragraph 3 says one balloon looked like a fish. The story still makes sense without it. So it is just one small detail.` },
          { kind: 'step', id: 'S2', type: 'mc', para: 4,
            q: `Read paragraph 4. What is paragraph 4 mostly about?`,
            choices: [
              `Lia gets to look inside a balloon basket.`,
              `A blue balloon comes down in the field.`,
              `Lia talks about the basket on the way home.`,
              `Lia and Dad drive to a big field at sunrise.`],
            kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
            notes: [null,
              `Paragraph 4 says a blue balloon comes down. That is one small detail. The whole paragraph is about more.`,
              `Paragraph 4 says Lia talks about the basket. That is one small detail, not the main idea.`,
              `That is in paragraph 1, not paragraph 4.`],
            why: `In paragraph 4, a balloon comes down, the pilot waves Lia over, and she peeks in the basket. So paragraph 4 is mostly about Lia seeing the basket.` },
          { kind: 'step', id: 'S3', type: 'mc',
            q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
            choices: [
              `Lia and Dad went to a festival, saw the balloons fill up and rise, and Lia peeked in a basket.`,
              `Lia counted twelve balloons, and one of the balloons looked like a giant orange fish.`,
              `Lia and Dad went to a balloon festival, and then Lia got to ride in a balloon high up over the field.`,
              `Lia looked inside a basket, and then she and Dad watched the balloons fill up and rise.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is only paragraph 3. A summary tells about the whole passage.`,
              `The passage never says Lia rode in a balloon. She only peeked inside the basket.`,
              `The events are out of order. The balloons went up first. Lia saw the basket last.`],
            why: `The big parts are these. Lia and Dad go to the festival. The balloons fill up and rise. Then Lia sees the basket. That sentence tells all of them, in order.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for a main idea question.`,
              `Step 1. Read the WHOLE paragraph.`,
              `Step 2. Ask, what do all the sentences tell about? That is the main idea.`,
              `Step 3. Watch out for a choice about one small thing. That is just a detail.`,
              `Here are the steps for a summary question.`,
              `Step 1. Find the key events. They are the big parts.`,
              `Step 2. Check that all the key events are there, in order.`,
              `Step 3. Watch out for a choice that tells just one small part.`,
              `If a question asks what is MISSING, read the summary first.`,
              `Then find the big part of the passage that the summary does not tell.`,
              `Watch out. Some choices tell an event the summary already tells. That event is not missing.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Ice Lanterns on the Front Walk`,
          paragraphs: [
            `On a cold winter day, Ari and Grandpa wanted to make ice lanterns. They filled four buckets with water. Then Grandpa pushed a small cup into the middle of each one.`,
            `They set the buckets outside on the back steps. All night long, the air was freezing cold. By morning, the water had turned to hard ice.`,
            `Grandpa poured warm water over each bucket. Then he tipped it over, and the ice slid out with a pop. Each block of ice had a hole in the middle where the cup had been.`,
            `That night, Ari set a small candle in each hole. Grandpa lit the candles, and Ari lined the lanterns up along the front walk. The ice glowed gold in the dark. Neighbors stopped to look.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Main idea', para: 3,
            q: `Read paragraph 3. What is paragraph 3 mostly about?`,
            choices: [
              `Grandpa takes the ice out of the buckets.`,
              `Grandpa pours warm water over each bucket.`,
              `Each block of ice has a hole in the middle.`,
              `Grandpa lights the candles, and the ice glows.`],
            kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
            notes: [null,
              `Paragraph 3 says Grandpa pours warm water. That is one small step. The whole paragraph is about more.`,
              `Paragraph 3 says each block has a hole. That is one small detail, not the main idea.`,
              `That is in paragraph 4, not paragraph 3.`],
            why: `In paragraph 3, Grandpa pours warm water on each bucket. He tips it, and the ice slides out. So paragraph 3 is mostly about getting the ice out.` },
          { id: 'P2', type: 'mc', skill: 'Summary',
            excerptLabel: `📝 A summary of “Ice Lanterns on the Front Walk”`,
            excerpt: [
              `Ari and Grandpa filled four buckets with water.`,
              `In the morning, Grandpa took the ice out of the buckets.`,
              `That night, they put a candle in each lantern.`,
              `Ari lined the lanterns up by the front walk.`],
            q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
            choices: [
              `They set the buckets outside, and the water froze all night.`,
              `Ari and Grandpa filled four buckets with water.`,
              `Neighbors stopped to look at the lanterns.`,
              `Ari and Grandpa got the ice from a store.`],
            kinds: [null, 'insummary', 'onedetail', 'noclue'],
            notes: [null,
              `The summary already tells that they filled the buckets. Look for the big part it leaves out.`,
              `Paragraph 4 says neighbors stopped to look. That is a small detail, not a key event.`,
              `The passage never says they got ice from a store. They made it.`],
            why: `Paragraph 2 says the buckets sat outside all night, and the water froze. Without that, there is no ice. That key event is missing.` },
          { id: 'P3', type: 'mc', skill: 'Summary',
            q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
            choices: [
              `Ari and Grandpa froze water in buckets, took out the ice, and lit candles in the ice lanterns.`,
              `Ari and Grandpa filled four buckets and pushed a small cup into each one.`,
              `Ari and Grandpa froze water in buckets, but the ice cracked, so they used old glass jars instead.`,
              `Ari and Grandpa lit candles in ice lanterns, and then they froze the water in buckets.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is only paragraph 1. A summary tells about the whole passage.`,
              `The passage never says the ice cracked. The ice slid out of the buckets.`,
              `The events are out of order. The water froze first. They lit the candles last.`],
            why: `The big parts are these. They froze the water. They took out the ice. They lit the candles. That sentence tells all of them, in order.` }
        ]
      },
      turn: [
        {
          story: {
            title: `A Tire Swing for the Old Oak`,
            paragraphs: [
              `Jace had a big oak tree in his backyard, but nothing to play on. One afternoon, he noticed an old tire sitting by the curb next door. The neighbor said Jace could keep it. Jace rolled the tire home and asked Mom if they could make a swing.`,
              `First, Jace and Mom cleaned the tire. It was filled with mud and soggy leaves. Jace scrubbed it with soapy water and a brush until it was shiny. Mom drilled three little holes in the bottom so rainwater could drain out.`,
              `Next, they hung the tire from the tree. Mom climbed a ladder and tied a heavy rope around a thick branch. Jace held the ladder steady. Then Mom tied the other end of the rope tightly to the tire.`,
              `Before anybody sat on it, Mom tested the swing. She hung a heavy bag of sand from the tire. The branch never bent, and the knots held tight. Mom nodded and said the swing was safe.`,
              `At last, Jace climbed into the tire. Mom gave him a gentle push, and he swung up into the air. Jace laughed so hard that his baseball cap tumbled off. Soon, two neighbor kids were waiting in line for a turn.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Main idea', para: 2,
              q: `Read paragraph 2. What is paragraph 2 mostly about?`,
              choices: [
                `Jace and Mom clean the old tire and get it ready.`,
                `The tire is filled with mud and soggy leaves.`,
                `Mom drills three little holes so the rain can drain out.`,
                `Jace swings up into the air and laughs.`],
              kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
              notes: [null,
                `Paragraph 2 says the tire is filled with mud. That is one small detail. The whole paragraph is about more.`,
                `Paragraph 2 says Mom drills holes. That is one small detail, not the main idea.`,
                `That is in paragraph 5, not paragraph 2.`],
              why: `Paragraph 2 starts, first, Jace and Mom cleaned the tire. The mud, the soap and the holes are all part of getting the tire ready. That is the main idea.` },
            { id: 'Q02', type: 'mc', skill: 'Main idea', para: 4,
              q: `Read paragraph 4. What is paragraph 4 mostly about?`,
              choices: [
                `Mom tests the swing to make sure it is safe.`,
                `Mom hangs a heavy bag of sand from the tire.`,
                `The branch never bends, and the knots hold tight.`,
                `Jace finds an old tire by the curb next door.`],
              kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
              notes: [null,
                `Paragraph 4 says Mom hangs a bag of sand. That is one small step. The whole paragraph is about more.`,
                `Paragraph 4 says the branch never bends. That is one small detail, not the main idea.`,
                `That is in paragraph 1, not paragraph 4.`],
              why: `Paragraph 4 starts, Mom tested the swing. It ends, the swing was safe. So paragraph 4 is mostly about testing the swing.` },
            { id: 'Q03', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “A Tire Swing for the Old Oak”`,
              excerpt: [
                `Jace found an old tire and wanted to make a swing.`,
                `He and Mom cleaned the tire with soap and a brush.`,
                `Mom tested the swing with a heavy bag of sand.`,
                `Then Jace swung up into the air, and two kids waited for a turn.`],
              q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
              choices: [
                `Mom tied the tire to a thick branch with a rope.`,
                `Jace and Mom cleaned the tire with soap and a brush.`,
                `Jace laughed so hard that his cap tumbled off.`,
                `Jace and Mom bought a new tire at a store.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already tells that they cleaned the tire. Look for the big part it leaves out.`,
                `Paragraph 5 says Jace's cap tumbled off. That is a small detail, not a key event.`,
                `The passage never says they bought a tire. A neighbor gave it to Jace.`],
              why: `Paragraph 3 tells how Mom tied the rope to the branch and to the tire. Without it, the tire is not a swing. That key event is missing.` },
            { id: 'Q04', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
              choices: [
                `Jace and Mom cleaned an old tire, hung it from the oak tree, tested it, and then Jace swung.`,
                `Jace held the ladder steady while Mom climbed up and tied the rope to a thick branch.`,
                `Jace and Mom cleaned an old tire, hung it from the oak tree, and painted it bright red.`,
                `Jace swung on the old tire, and then he and Mom cleaned it, hung it from the tree, and tested it.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is only paragraph 3. A summary tells about the whole passage.`,
                `The passage never says they painted the tire.`,
                `The events are out of order. They cleaned the tire first. Jace swung last.`],
              why: `The big parts are these. They clean the tire. They hang it and test it. Then Jace swings. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `The Lamp at Stone Point`,
            paragraphs: [
              `In the fall, Grandma took Ira on a bus ride to Stone Point. Ira wanted to see the old lighthouse there. It stood tall and white on the rocks by the sea.`,
              `Inside the lighthouse, a metal stairway went round and round. Ira and Grandma started to climb. Grandma counted the steps out loud, and Ira counted with her. There were ninety steps in all.`,
              `At the top, a strong wind blew Ira's hair back. He could see boats, rocks, and the gray sea for miles. A seal popped its head out of the water far below.`,
              `Then a guide showed them the giant lamp. She said its light helps ships stay away from the rocks at night. The glass around the lamp was as tall as a door.`,
              `On the bus ride home, Ira drew the lighthouse in his notebook. He drew a bright beam shining out over the dark water. Then he fell asleep on Grandma's shoulder.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Main idea', para: 2,
              q: `Read paragraph 2. What is paragraph 2 mostly about?`,
              choices: [
                `Ira and Grandma climb the stairs to the top.`,
                `Grandma counts the steps out loud.`,
                `The metal stairway goes round and round.`,
                `Ira draws the lighthouse on the bus ride home.`],
              kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
              notes: [null,
                `Paragraph 2 says Grandma counts the steps. That is one small detail. The whole paragraph is about more.`,
                `Paragraph 2 says the stairs go round and round. That is one small detail, not the main idea.`,
                `That is in paragraph 5, not paragraph 2.`],
              why: `Each sentence in paragraph 2 is about the stairs. Ira and Grandma climb up and count the steps. So paragraph 2 is mostly about the climb to the top.` },
            { id: 'Q06', type: 'mc', skill: 'Main idea', para: 3,
              q: `Read paragraph 3. What is paragraph 3 mostly about?`,
              choices: [
                `Ira looks far out over the sea from the top.`,
                `A strong wind blows Ira's hair back.`,
                `A seal pops its head out of the water.`,
                `Grandma takes Ira on a bus to Stone Point.`],
              kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
              notes: [null,
                `Paragraph 3 says the wind blows Ira's hair. That is one small detail. The whole paragraph is about more.`,
                `Paragraph 3 says a seal pops up. That is one small thing Ira sees. It is just one detail.`,
                `That is in paragraph 1, not paragraph 3.`],
              why: `In paragraph 3, Ira is at the top. He sees boats, rocks, the sea, and a seal. So paragraph 3 is mostly about what Ira sees from the top.` },
            { id: 'Q07', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “The Lamp at Stone Point”`,
              excerpt: [
                `Grandma took Ira on a bus to see the lighthouse at Stone Point.`,
                `They climbed ninety steps to the top.`,
                `From the top, Ira could see the sea for miles.`,
                `On the way home, Ira drew the lighthouse and its bright beam.`],
              q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
              choices: [
                `A guide showed them the giant lamp.`,
                `Ira and Grandma climbed ninety steps to the top.`,
                `Ira fell asleep on Grandma's shoulder.`,
                `Ira and Grandma rode a boat around the rocks.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already tells that they climbed the steps. Look for the big part it leaves out.`,
                `Paragraph 5 says Ira fell asleep. That is a small detail, not a key event.`,
                `The passage never says they rode a boat. They rode a bus.`],
              why: `Paragraph 4 tells how a guide showed them the giant lamp. The lamp makes the bright beam Ira draws on the way home. That key event is missing.` },
            { id: 'Q08', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
              choices: [
                `Ira and Grandma rode a bus to a lighthouse, climbed up, and learned how its lamp helps ships.`,
                `Grandma counted the ninety steps out loud, and Ira counted the steps along with her.`,
                `Ira and Grandma climbed a lighthouse, looked out at the sea, and then swam with a seal by the rocks.`,
                `Ira and Grandma learned how the lamp helps ships, and then they climbed up to the top.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is only paragraph 2. A summary tells about the whole passage.`,
                `The passage never says they swam. Ira saw a seal from the top.`,
                `The events are out of order. They climbed first. The guide showed them the lamp after that.`],
              why: `The big parts are these. Ira and Grandma go to the lighthouse. They climb to the top. Then they learn how the lamp helps ships. That sentence tells all of them, in order.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 3 ════════ */
    {
      teach: {
        story: {
          title: `A Yellow Sun Full of Candy`,
          paragraphs: [
            `Ria's little brother, Cy, was turning five. Ria and Mom wanted to make a piñata for his party. It would look like a bright yellow sun. First, Mom blew up a round balloon. Ria tore newspaper into long strips.`,
            `Next, they covered the balloon with paper. Mom mixed white glue and water in a bowl. Ria dipped each strip in the glue and smoothed it onto the balloon. Soon her fingers were white and sticky. They added three layers of paper.`,
            `Two days later, the paper was dry and hard. Then Ria made the paper ball look like the sun. She painted it bright yellow. She got a drop of paint on her nose. Last, she glued orange paper points around the ball.`,
            `On the day of the party, Mom filled the sun with candy and hung it from a branch. The children took turns hitting the sun with a stick. When Cy took his turn, the sun broke open. Candy rained onto the grass, and Cy cheered.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Mostly about',
            lines: [
              `A passage is a story you read on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
              `Some questions ask what a paragraph is mostly about.`,
              `Mostly about means what the WHOLE paragraph tells about. That is the main idea.`,
              `A detail is one small part. It tells just one thing.`,
              `Think about recess. The main idea is, I had fun at recess. A detail is, I won a game of tag.`,
              `A summary tells the most important parts of a passage. It tells them in order, in a few sentences.`,
              `A summary leaves out the small details.`,
              `A key event is a big part of the story. If you leave it out, the story does not make sense.`,
              `Some questions ask which key event is MISSING. Missing means left out.`,
              `Summarizes means tells a summary. The BEST summary tells all the key events, in order.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the main idea',
            lines: [
              `Here is a question. Read paragraph 2. What is paragraph 2 mostly about?`,
              `Step 1. I read the WHOLE paragraph, not just one sentence.`,
              `Step 2. I ask, what do all the sentences tell about?`,
              `Mom mixes the glue. Ria dips the strips and puts them on the balloon. They add three layers.`,
              `All of them tell how Ria and Mom cover the balloon with paper.`,
              `The first sentence says it too. Next, they covered the balloon with paper.`,
              `So paragraph 2 is mostly about covering the balloon. That is the main idea.`,
              `Watch out. Soon her fingers were white and sticky.`,
              `That sentence is true. But it tells just one small part. It is a detail, not the main idea.`
            ],
            lit: [
              `Next, they covered the balloon with paper.`,
              `Soon her fingers were white and sticky.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `A summary leaves out small details. Which sentence from the passage is just one small detail?`,
            choices: [
              `She got a drop of paint on her nose.`,
              `Ria and Mom wanted to make a piñata for his party.`,
              `Next, they covered the balloon with paper.`,
              `When Cy took his turn, the sun broke open.`],
            kinds: [null, 'toofar', 'toofar', 'toofar'],
            notes: [null,
              `Paragraph 1 says Ria and Mom wanted to make a piñata. That is a big part of the story, not a small detail.`,
              `Paragraph 2 says they covered the balloon with paper. That is a big part of the story, not a small detail.`,
              `Paragraph 4 says the sun broke open. That is a big part of the story, not a small detail.`],
            why: `Paragraph 3 says Ria got paint on her nose. The story still makes sense without it. So it is just one small detail.` },
          { kind: 'step', id: 'S2', type: 'mc', para: 3,
            q: `Read paragraph 3. What is paragraph 3 mostly about?`,
            choices: [
              `Ria decorates the ball to look like the sun.`,
              `Ria glues orange paper points around the ball.`,
              `The paper is dry and hard after two days.`,
              `Mom fills the sun with candy and hangs it up.`],
            kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
            notes: [null,
              `Paragraph 3 says Ria glues on orange points. That is one small detail. The whole paragraph is about more.`,
              `Paragraph 3 says the paper is dry. That is one small detail, not the main idea.`,
              `That is in paragraph 4, not paragraph 3.`],
            why: `Paragraph 3 tells how Ria paints the ball yellow and glues on orange points. All of it decorates the piñata, so it looks like the sun. That is the main idea.` },
          { kind: 'step', id: 'S3', type: 'mc',
            q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
            choices: [
              `Ria and Mom covered a balloon with paper, Ria painted it like the sun, and Cy broke it open at his party.`,
              `Ria dipped each strip of newspaper in the glue and smoothed it onto the round balloon.`,
              `Ria and Mom covered a balloon with paper, Ria painted it like the sun, but then it got wet in the rain.`,
              `Cy broke open a sun piñata at his party, and then Ria and Mom covered a balloon with paper, and Ria painted it.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is only one part of paragraph 2. A summary tells about the whole passage.`,
              `The passage never says the piñata got wet. Cy broke it open at his party.`,
              `The events are out of order. They covered the balloon first. Cy broke the sun open last.`],
            why: `The big parts are these. Ria and Mom cover the balloon. Ria makes it look like the sun. Then Cy breaks it open. That sentence tells all of them, in order.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for a main idea question.`,
              `Step 1. Read the WHOLE paragraph.`,
              `Step 2. Ask, what do all the sentences tell about? That is the main idea.`,
              `Step 3. Watch out for a choice about one small thing. That is just a detail.`,
              `Here are the steps for a summary question.`,
              `Step 1. Find the key events. They are the big parts.`,
              `Step 2. Check that all the key events are there, in order.`,
              `Step 3. Watch out for a choice that tells just one small part.`,
              `If a question asks what is MISSING, read the summary first.`,
              `Then find the big part the summary does not tell. Say a summary skips the painting. Then we do not know how the ball became a sun.`,
              `Watch out. Some choices tell an event the summary already tells. That event is not missing.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `The Rock Tumbler in the Garage`,
          paragraphs: [
            `Fen and Grandpa collected rocks on a hike in the hills. The rocks were dull, gray, and rough. Grandpa promised that they could make the rocks shiny.`,
            `At home, Grandpa got out his rock tumbler. It was a small barrel that turned around and around. Fen put the rocks inside with water and gritty sand. Then Grandpa closed the lid and turned on the motor.`,
            `The tumbler turned day and night for two weeks. It rumbled like a little truck in the garage. Each day, Fen put his ear next to it and listened.`,
            `At last, Grandpa opened the lid, and Fen washed the rocks in the sink. Now the rocks were smooth and shiny, like colored glass. Fen gave the very best one to Mom.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Main idea', para: 3,
            q: `Read paragraph 3. What is paragraph 3 mostly about?`,
            choices: [
              `Fen waits while the tumbler runs.`,
              `The tumbler rumbles like a little truck.`,
              `Fen puts his ear next to the tumbler.`,
              `Fen washes the rocks in the sink.`],
            kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
            notes: [null,
              `Paragraph 3 says the tumbler rumbles. That is one small detail. The whole paragraph is about more.`,
              `Paragraph 3 says Fen listens to the tumbler. That is one small detail, not the main idea.`,
              `That is in paragraph 4, not paragraph 3.`],
            why: `Paragraph 3 says the tumbler turned for two weeks. Each day, Fen listens to it. So paragraph 3 is mostly about the long wait while the tumbler runs.` },
          { id: 'P2', type: 'mc', skill: 'Summary',
            excerptLabel: `📝 A summary of “The Rock Tumbler in the Garage”`,
            excerpt: [
              `Fen and Grandpa picked up rough rocks on a hike.`,
              `For two weeks, the tumbler turned day and night.`,
              `Then Grandpa opened the lid of the tumbler.`,
              `The rocks inside were smooth and shiny.`],
            q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
            choices: [
              `Fen put the rocks in the tumbler with water and sand.`,
              `The tumbler turned day and night for two whole weeks.`,
              `Fen gave the very best rock to Mom.`,
              `Grandpa took the rocks to a shop to make them shiny.`],
            kinds: [null, 'insummary', 'onedetail', 'noclue'],
            notes: [null,
              `The summary already tells that the tumbler turned for two weeks. Look for the big part it leaves out.`,
              `Paragraph 4 says Fen gave a rock to Mom. That is a small detail, not a key event.`,
              `The passage never says Grandpa took the rocks to a shop.`],
            why: `Paragraph 2 tells how Fen put the rocks in the tumbler. The summary says the rocks were inside the tumbler. Without the missing event, we do not know how they got there. That key event is missing.` },
          { id: 'P3', type: 'mc', skill: 'Summary',
            q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
            choices: [
              `Fen and Grandpa found rough rocks, ran them in the tumbler for two weeks, and the rocks came out shiny.`,
              `The tumbler rumbled like a little truck, and Fen put his ear next to it each day.`,
              `Fen and Grandpa found rough rocks, ran them in the tumbler for two weeks, but the rocks broke into dust.`,
              `Fen and Grandpa ran rocks in the tumbler for two weeks, and then they went on a hike and found the rough rocks.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is only one part of paragraph 3. A summary tells about the whole passage.`,
              `The passage never says the rocks broke. They came out smooth and shiny.`,
              `The events are out of order. They found the rocks first. The rocks came out shiny last.`],
            why: `The big parts are these. They find rough rocks. The tumbler turns them for two weeks. Then the rocks come out shiny. That sentence tells all of them, in order.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Lights Out Under the Hill`,
            paragraphs: [
              `On a hot summer day, Tova and Dad went on a tour of a big cave. A guide named Sal gave each person a hard hat with a light on the front. Tova's hat was so big that it slid down over her eyes.`,
              `Then the group walked down a long set of stone steps. With every step, the air got cooler and wetter. Water dripped from the ceiling and plopped on Tova's hat. Soon Tova was glad that she had worn a jacket.`,
              `At the bottom, they came to a huge room. Pointy rocks hung from the ceiling like icicles. Sal said each rock took hundreds of years to grow. Tova counted forty of them before she lost track.`,
              `Next, Sal asked everyone to turn off their lights. The cave went black. Tova held her hand in front of her face, but she could not see it at all. It was the darkest dark she had ever seen. Then Sal clicked her light back on, and everyone laughed.`,
              `At last, the group climbed back up the steps. Outside, the hot sun felt like a warm blanket. On the drive home, Tova told Dad that she wanted to be a cave guide someday.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Main idea', para: 2,
              q: `Read paragraph 2. What is paragraph 2 mostly about?`,
              choices: [
                `The cave gets cold and wet on the way down.`,
                `Water drips from the ceiling onto Tova's hat.`,
                `Tova is glad that she wore a jacket.`,
                `Sal gives each person a hard hat with a light.`],
              kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
              notes: [null,
                `Paragraph 2 says water drips on Tova's hat. That is one small detail. The whole paragraph is about more.`,
                `Paragraph 2 says Tova is glad she wore a jacket. That is one small detail, not the main idea.`,
                `That is in paragraph 1, not paragraph 2.`],
              why: `Paragraph 2 tells how the group walks down the steps. The air gets cooler and wetter. Water drips, and Tova needs her jacket. So paragraph 2 is mostly about the cave getting cold and wet.` },
            { id: 'Q02', type: 'mc', skill: 'Main idea', para: 3,
              q: `Read paragraph 3. What is paragraph 3 mostly about?`,
              choices: [
                `The group sees a big room of pointy rocks.`,
                `Tova counts forty rocks before she loses track.`,
                `Sal says the rocks are the oldest in the world.`,
                `Tova tells Dad she wants to be a cave guide.`],
              kinds: [null, 'onedetail', 'toofar', 'wrongtime'],
              notes: [null,
                `Paragraph 3 says Tova counts forty rocks. That is one small detail. The whole paragraph is about more.`,
                `Too far. Sal says each rock took hundreds of years to grow. She never says they are the oldest in the world.`,
                `That is in paragraph 5, not paragraph 3.`],
              why: `Paragraph 3 starts, they came to a huge room. The rest tells about the pointy rocks in it. So paragraph 3 is mostly about the big room of rocks.` },
            { id: 'Q03', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “Lights Out Under the Hill”`,
              excerpt: [
                `Tova and Dad went on a cave tour with hard hats and lights.`,
                `They walked down to a huge room full of pointy rocks.`,
                `When Sal turned her light back on, everyone laughed.`,
                `Then they climbed back out into the hot sun.`],
              q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
              choices: [
                `Everyone turned off their lights, and the cave went black.`,
                `Tova and Dad walked down the steps to a huge room full of pointy rocks.`,
                `Tova's hard hat was so big that it slid down over her eyes.`,
                `Tova got lost in the cave, and Dad had to look for her.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already tells about the huge room. Look for the big part it leaves out.`,
                `Paragraph 1 says Tova's hat slid down. That is a small detail, not a key event.`,
                `The passage never says Tova got lost.`],
              why: `Paragraph 4 tells how everyone turned off their lights, and the cave went black. The summary says Sal turned her light back on. But it never says the lights went off. That key event is missing.` },
            { id: 'Q04', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
              choices: [
                `Tova and Dad went on a cave tour, walked down to a huge room, turned off their lights, and climbed back out.`,
                `Water dripped from the cave ceiling and plopped on top of Tova's big hard hat on the steps.`,
                `Tova and Dad went on a cave tour, walked down to a huge room, and then swam in a cold lake under the hill.`,
                `Tova and Dad climbed back out of a cave, and then they walked down to a huge room and turned off their lights.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is only one part of paragraph 2. A summary tells about the whole passage.`,
                `The passage never says they swam. They walked and looked.`,
                `The events are out of order. They walked down first. They climbed out last.`],
              why: `The big parts are these. They walk down to the huge room. They turn off their lights. Then they climb back out. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `A Blue Bowl from Front Street`,
            paragraphs: [
              `On Saturday, Kemi and her uncle went to a glass shop on Front Street. In the back, a man named Nils made bowls out of hot glass. Nils let Kemi pick the color for a new bowl. She picked blue, her favorite color.`,
              `First, Nils opened the door of a giant oven. The oven was so hot that Kemi could feel it on her cheeks. Nils dipped a long metal pipe inside. When he pulled it out, a glowing orange ball of glass was stuck on the end.`,
              `Next, Nils rolled the hot glass in tiny bits of blue. Then he blew into the other end of the pipe, like he was blowing up a balloon. Slowly, the ball of glass puffed up into a bubble. Kemi held her breath.`,
              `Then Nils spun the pipe and pressed the glass with a wet wooden paddle. Steam hissed and puffed up. The glass opened up, wide and round, into a bowl. Nils tapped the pipe, and the bowl came off.`,
              `The bowl had to cool slowly in a warm box all night. The next day, Kemi and her uncle came back to get it. Kemi carried the blue bowl home on her lap the whole way.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Main idea', para: 2,
              q: `Read paragraph 2. What is paragraph 2 mostly about?`,
              choices: [
                `Nils gets the hot glass out of the oven.`,
                `Kemi can feel the heat on her cheeks.`,
                `The glass on the pipe glows orange.`,
                `Kemi picks blue for the color of her bowl.`],
              kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
              notes: [null,
                `Paragraph 2 says Kemi feels the heat on her cheeks. That is one small detail. The whole paragraph is about more.`,
                `Paragraph 2 says the glass glows orange. That is one small detail, not the main idea.`,
                `That is in paragraph 1, not paragraph 2.`],
              why: `Paragraph 2 tells about the giant oven and the long pipe. Nils pulls out a glowing ball of glass. So paragraph 2 is mostly about getting the hot glass.` },
            { id: 'Q06', type: 'mc', skill: 'Main idea', para: 4,
              q: `Read paragraph 4. What is paragraph 4 mostly about?`,
              choices: [
                `Nils shapes the glass into a bowl.`,
                `Steam hisses up from the paddle.`,
                `Nils taps the pipe, and the bowl comes off.`,
                `Kemi carries the blue bowl home on her lap.`],
              kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
              notes: [null,
                `Paragraph 4 says steam hisses up. That is one small detail. The whole paragraph is about more.`,
                `Paragraph 4 says the bowl comes off the pipe. That is one small step, not the main idea.`,
                `That is in paragraph 5, not paragraph 4.`],
              why: `In paragraph 4, Nils spins the pipe and presses the glass with a paddle. The glass opens up into a bowl. So paragraph 4 is mostly about shaping the bowl.` },
            { id: 'Q07', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “A Blue Bowl from Front Street”`,
              excerpt: [
                `Kemi and her uncle went to a glass shop to watch Nils work.`,
                `Nils took a ball of hot glass out of a giant oven.`,
                `Then he pressed the bubble into a wide, round bowl.`,
                `The next day, Kemi took her new blue bowl home.`],
              q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
              choices: [
                `Nils blew into the pipe, and the glass puffed up into a bubble.`,
                `Nils took a ball of hot glass out of a giant oven with a long pipe.`,
                `Kemi held her breath while she watched.`,
                `Nils dropped the hot glass on the floor.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already tells that Nils took glass out of the oven. Look for the big part it leaves out.`,
                `Paragraph 3 says Kemi held her breath. That is a small detail, not a key event.`,
                `The passage never says Nils dropped the glass.`],
              why: `Paragraph 3 tells how Nils blew into the pipe, and the glass puffed up into a bubble. The summary talks about the bubble, but it never tells where the bubble came from. That key event is missing.` },
            { id: 'Q08', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
              choices: [
                `At a glass shop, Nils took hot glass from the oven, blew a bubble, and shaped a blue bowl for Kemi to take home.`,
                `The oven was so hot that Kemi could feel the heat of it on her cheeks when Nils opened the door.`,
                `At a glass shop, Nils took hot glass from the oven, blew a bubble, and made a little glass fish for Kemi.`,
                `At a glass shop, Nils shaped a blue bowl for Kemi, and then he blew a bubble and took the hot glass from the oven.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is only one part of paragraph 2. A summary tells about the whole passage.`,
                `The passage never says Nils made a fish. He made a bowl.`,
                `The events are out of order. Nils took the glass from the oven first. He shaped the bowl last.`],
              why: `The big parts are these. Nils gets hot glass from the oven. He blows a bubble. He shapes a bowl, and Kemi takes it home. That sentence tells all of them, in order.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 4 ════════ */
    {
      teach: {
        story: {
          title: `A Handprint in the Stepping Stone`,
          paragraphs: [
            `On Saturday, Odie and Dad went to a class at the community center. They were going to make stepping stones. Odie put on Dad's old shirt so she would not get messy. The teacher gave them a round plastic pan.`,
            `First, they filled the pan with cement. Dad poured gray powder and water into a bucket. Odie stirred it with a big stick until it was thick like oatmeal. The wet cement smelled like a sidewalk after rain. Then they poured the cement into the pan, and Dad smoothed the top.`,
            `Next, Odie made the stone her own. She pressed her hand into the wet cement and left a handprint. She pushed shiny blue and green glass all around it. Then she wrote her name with a stick.`,
            `The stones had to dry for three days. Then Odie and Dad came back to get theirs. At home, they set the stone in the dirt by the back door. Now Odie steps on her own handprint every day.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Mostly about',
            lines: [
              `A passage is a story you read on a test. A paragraph is one part of the passage. Each paragraph has a number.`,
              `Some questions ask what a paragraph is mostly about.`,
              `Mostly about means what the WHOLE paragraph tells about. That is the main idea.`,
              `A detail is one small part. It tells just one thing.`,
              `Think about a trip to the park. The main idea is, we had fun at the park. A detail is, I went down the big slide five times.`,
              `A summary tells the most important parts of a passage. It tells them in order, in a few sentences.`,
              `A summary leaves out the small details.`,
              `A key event is a big part of the story. If you leave it out, the story does not make sense.`,
              `Some questions ask which key event is MISSING. Missing means left out.`,
              `Summarizes means tells a summary. The BEST summary tells all the key events, in order.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the main idea',
            lines: [
              `Here is a question. Read paragraph 2. What is paragraph 2 mostly about?`,
              `Step 1. I read the WHOLE paragraph, not just one sentence.`,
              `Step 2. I ask, what do all the sentences tell about?`,
              `Dad pours in the powder and water. Odie stirs. They pour the cement into the pan.`,
              `All of them tell how Odie and Dad fill the pan with cement.`,
              `The first sentence says it too. First, they filled the pan with cement.`,
              `So paragraph 2 is mostly about filling the pan with cement. That is the main idea.`,
              `Watch out. The wet cement smelled like a sidewalk after rain.`,
              `That sentence is true. But it tells just one small part. It is a detail, not the main idea.`
            ],
            lit: [
              `First, they filled the pan with cement.`,
              `The wet cement smelled like a sidewalk after rain.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `A summary leaves out small details. Which sentence from the passage is just one small detail?`,
            choices: [
              `Odie put on Dad's old shirt so she would not get messy.`,
              `On Saturday, Odie and Dad went to a class at the community center.`,
              `Next, Odie made the stone her own.`,
              `At home, they set the stone in the dirt by the back door.`],
            kinds: [null, 'toofar', 'toofar', 'toofar'],
            notes: [null,
              `Paragraph 1 says Odie and Dad went to a class. That is a big part of the story, not a small detail.`,
              `Paragraph 3 says Odie made the stone her own. That is a big part of the story, not a small detail.`,
              `Paragraph 4 says they set the stone by the back door. That is a big part of the story, not a small detail.`],
            why: `Paragraph 1 says Odie put on an old shirt. The story still makes sense without it. So it is just one small detail.` },
          { kind: 'step', id: 'S2', type: 'mc', para: 3,
            q: `Read paragraph 3. What is paragraph 3 mostly about?`,
            choices: [
              `Odie decorates the stone to make it her own.`,
              `Odie writes her name in the cement with a stick.`,
              `Odie pushes blue and green glass into the cement.`,
              `Dad smooths the top of the cement in the pan.`],
            kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
            notes: [null,
              `Paragraph 3 says Odie writes her name. That is one small detail. The whole paragraph is about more.`,
              `Paragraph 3 says Odie pushes in the glass. That is one small detail, not the main idea.`,
              `That is in paragraph 2, not paragraph 3.`],
            why: `Paragraph 3 tells about the handprint, the glass and Odie's name. All of them decorate the stone and make it hers. That is the main idea.` },
          { kind: 'step', id: 'S3', type: 'mc',
            q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
            choices: [
              `Odie and Dad mixed cement at a class, Odie pressed her hand into it, and at home they set the stone by the door.`,
              `Odie stirred the cement with a big stick until it was as thick as oatmeal.`,
              `Odie and Dad mixed cement at a class, Odie pressed her hand into it, and then they gave the stone to the teacher.`,
              `At home, Odie and Dad set a stone by the door, and then they mixed cement at a class, and Odie pressed her hand into it.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is only one part of paragraph 2. A summary tells about the whole passage.`,
              `The passage never says they gave the stone to the teacher. They took it home.`,
              `The events are out of order. They mixed the cement first. They set the stone out last.`],
            why: `The big parts are these. Odie and Dad fill the pan with cement. Odie makes her handprint. Then they set the stone by the door. That sentence tells all of them, in order.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for a main idea question.`,
              `Step 1. Read the WHOLE paragraph.`,
              `Step 2. Ask, what do all the sentences tell about? That is the main idea.`,
              `Step 3. Watch out for a choice about one small thing. That is just a detail.`,
              `Here are the steps for a summary question.`,
              `Step 1. Find the key events. They are the big parts.`,
              `Step 2. Check that all the key events are there, in order.`,
              `Step 3. Watch out for a choice that tells just one small part.`,
              `If a question asks what is MISSING, read the summary first.`,
              `Then find the big part the summary does not tell. Say a summary skips the handprint. Then we do not know how her handprint got on the stone.`,
              `Watch out. Some choices tell an event the summary already tells. That event is not missing.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Grandma's Blue Necklace`,
          paragraphs: [
            `At dinner, Grandma's blue necklace broke. The string snapped, and beads bounced all over the floor. Grandma looked sad, because the necklace was a gift from Grandpa.`,
            `Rhea crawled under the table to find the beads. She found them by the chairs and under the rug. One bead had rolled into Grandma's slipper. Rhea put all forty beads in a cup.`,
            `After dinner, Grandma got out a new string. Rhea held the cup, and Grandma put the beads on the string one by one. Then Grandma tied a tight knot.`,
            `Grandma put on her necklace and smiled. She said it looked as good as new. After that, she winked at Rhea every time she wore it.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Main idea', para: 2,
            q: `Read paragraph 2. What is paragraph 2 mostly about?`,
            choices: [
              `Rhea hunts for the beads that fell.`,
              `One bead rolls into Grandma's slipper.`,
              `Rhea puts the beads in a cup.`,
              `Grandma puts on the necklace and smiles.`],
            kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
            notes: [null,
              `Paragraph 2 says one bead rolls into a slipper. That is one small detail. The whole paragraph is about more.`,
              `Paragraph 2 says Rhea puts the beads in a cup. That is one small step, not the main idea.`,
              `That is in paragraph 4, not paragraph 2.`],
            why: `Paragraph 2 starts, Rhea crawled under the table to find the beads. She finds them by the chairs, under the rug, and in a slipper. So paragraph 2 is mostly about hunting for the beads.` },
          { id: 'P2', type: 'mc', skill: 'Summary',
            excerptLabel: `📝 A summary of “Grandma's Blue Necklace”`,
            excerpt: [
              `Grandma's blue necklace broke at dinner.`,
              `The beads bounced all over the floor.`,
              `Rhea crawled around and found all of the beads.`,
              `Grandma put on her necklace, and it looked as good as new.`],
            q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
            choices: [
              `Grandma put the beads on a new string and tied a knot.`,
              `Rhea crawled around and found the beads that fell on the floor.`,
              `Grandma winked at Rhea when she wore the necklace.`,
              `Rhea and Grandma bought a new necklace at a store.`],
            kinds: [null, 'insummary', 'onedetail', 'noclue'],
            notes: [null,
              `The summary already tells that Rhea found the beads. Look for the big part it leaves out.`,
              `Paragraph 4 says Grandma winked at Rhea. That is a small detail, not a key event.`,
              `The passage never says they bought a necklace. They fixed the old one.`],
            why: `Paragraph 3 tells how Grandma put the beads on a new string. The summary says the necklace looked as good as new. Without the missing event, that does not make sense. That key event is missing.` },
          { id: 'P3', type: 'mc', skill: 'Summary',
            q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
            choices: [
              `Grandma's necklace broke, Rhea found the beads, and Grandma put them on a new string.`,
              `Rhea crawled under the table and looked for beads by the chairs and under the rug.`,
              `Grandma's necklace broke, Rhea found the beads, and they made a little bracelet instead.`,
              `Grandma put the beads on a new string, and then her necklace broke and Rhea found the beads.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is only paragraph 2. A summary tells about the whole passage.`,
              `The passage never says they made a bracelet. Grandma fixed the necklace.`,
              `The events are out of order. The necklace broke first. Grandma put the beads on the string last.`],
            why: `The big parts are these. The necklace breaks. Rhea finds the beads. Then Grandma puts them on a new string. That sentence tells all of them, in order.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Shearing Day at the Sheep Farm`,
            paragraphs: [
              `Every spring, Coby's aunt had a shearing day for her sheep. Shearing means cutting off the wool. This year, Coby got to help. The sheep had thick, fluffy coats, gray with dirt and little bits of hay.`,
              `First, a man named Del sat a sheep down on its bottom and held it still between his knees. Then he ran his electric clippers over its body. The wool came off in one big, soft piece, like a rug. The sheep looked skinny without its coat.`,
              `Coby's job was to pick up each coat of wool. He spread it out on a big table and pulled out the bits of hay. Then he rolled the wool up and stuffed it into a bag. By lunch, Coby's arms were tired and itchy.`,
              `In the afternoon, Coby and his aunt washed some of the wool in tubs of warm, soapy water. The water turned brown right away. They rinsed the wool three times until it was white. Then they hung it on a fence to dry.`,
              `The next morning, Coby's aunt showed him her spinning wheel. She pulled the clean wool and spun it into soft white yarn. Coby took a ball of the yarn home in his pocket.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Main idea', para: 3,
              q: `Read paragraph 3. What is paragraph 3 mostly about?`,
              choices: [
                `Coby's job is to pack the wool into bags.`,
                `Coby spreads the wool out on a big table.`,
                `By lunch, Coby's arms are tired and itchy.`,
                `Coby's aunt shows him her spinning wheel.`],
              kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
              notes: [null,
                `Paragraph 3 says Coby spreads out the wool. That is one small step. The whole paragraph is about more.`,
                `Paragraph 3 says Coby's arms are tired. That is one small detail, not the main idea.`,
                `That is in paragraph 5, not paragraph 3.`],
              why: `Paragraph 3 starts, Coby's job was to pick up each coat of wool. He pulls out the hay, rolls up the wool, and bags it. So paragraph 3 is mostly about packing the wool.` },
            { id: 'Q02', type: 'mc', skill: 'Main idea', para: 4,
              q: `Read paragraph 4. What is paragraph 4 mostly about?`,
              choices: [
                `Coby and his aunt get the dirty wool clean.`,
                `The water in the tubs turns brown right away.`,
                `The wool is the dirtiest thing Coby has ever seen.`,
                `The sheep have thick, fluffy coats of wool.`],
              kinds: [null, 'onedetail', 'toofar', 'wrongtime'],
              notes: [null,
                `Paragraph 4 says the water turns brown. That is one small detail. The whole paragraph is about more.`,
                `Too far. The water turns brown, so the wool is dirty. But the passage never says it is the dirtiest thing Coby has seen.`,
                `That is in paragraph 1, not paragraph 4.`],
              why: `Paragraph 4 tells about the tubs of soapy water and the three rinses. At the end, the wool is white. So paragraph 4 is mostly about washing the wool.` },
            { id: 'Q03', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “Shearing Day at the Sheep Farm”`,
              excerpt: [
                `Coby went to help at his aunt's sheep farm.`,
                `He picked the hay out of each big piece of wool.`,
                `Then he and his aunt washed the wool in soapy water.`,
                `At last, his aunt spun the clean wool into soft yarn.`],
              q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
              choices: [
                `Del cut the thick wool off each sheep with clippers.`,
                `Coby and his aunt washed the dirty wool in tubs of warm water.`,
                `Coby took a ball of yarn home in his pocket.`,
                `A sheep ran away, and Coby chased it.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already tells that they washed the wool. Look for the big part it leaves out.`,
                `Paragraph 5 says Coby took yarn home. That is a small detail, not a key event.`,
                `The passage never says a sheep ran away.`],
              why: `Paragraph 2 tells how Del cut the wool off the sheep. The summary tells about big pieces of wool. Without the missing event, we do not know where the wool came from. That key event is missing.` },
            { id: 'Q04', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
              choices: [
                `Del cut the wool off the sheep, Coby helped clean and wash it, and his aunt spun it into yarn.`,
                `The sheep had thick, fluffy coats that were gray with dirt and little bits of hay.`,
                `Del cut the wool off the sheep, Coby helped clean and wash it, and then they sold all the wool at a fair.`,
                `Coby's aunt spun the wool into yarn, and then Del cut the wool off the sheep, and Coby helped clean and wash it.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is only one part of paragraph 1. A summary tells about the whole passage.`,
                `The passage never says they sold the wool. His aunt spun it into yarn.`,
                `The events are out of order. Del cut the wool first. His aunt spun the yarn last.`],
              why: `The big parts are these. Del cuts off the wool. Coby helps clean it and wash it. Then his aunt spins it into yarn. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `Duck Number 48`,
            paragraphs: [
              `Every May, Pru's town held a rubber duck race on the river. For one dollar, you could get a yellow duck with a number on it. The money helped the town library. Pru picked duck number 48.`,
              `At noon, a crowd lined up along the river. A dump truck backed onto the bridge. Then the truck tipped five hundred ducks into the water. Pru climbed onto a bench to watch them splash down.`,
              `The ducks bobbed down the river in a big yellow crowd. Most of them floated along in the middle. But duck 48 drifted over to the side and got stuck in some branches. Pru groaned and covered her eyes.`,
              `Then a boat went by and made a little wave. The wave rocked the branches, and duck 48 popped free. It spun back into the middle and floated faster and faster.`,
              `At the finish line, two workers held a long net across the river. Duck 48 bumped into the net third. Pru won a free book from the library! She picked a book about ducks.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Main idea', para: 2,
              q: `Read paragraph 2. What is paragraph 2 mostly about?`,
              choices: [
                `The ducks go into the river, and the race begins.`,
                `A dump truck backs onto the bridge over the river.`,
                `Pru climbs onto a bench to watch the ducks.`,
                `Pru picks duck number 48 for one dollar.`],
              kinds: [null, 'onedetail', 'onedetail', 'wrongtime'],
              notes: [null,
                `Paragraph 2 says a dump truck backs onto the bridge. That is one small detail. The whole paragraph is about more.`,
                `Paragraph 2 says Pru climbs onto a bench. That is one small detail, not the main idea.`,
                `That is in paragraph 1, not paragraph 2.`],
              why: `In paragraph 2, the crowd lines up, and the truck tips the ducks into the water. So paragraph 2 is mostly about the start of the race.` },
            { id: 'Q06', type: 'mc', skill: 'Main idea', para: 5,
              q: `Read paragraph 5. What is paragraph 5 mostly about?`,
              choices: [
                `Pru wins a prize at the finish line.`,
                `Two workers hold a long net across the river.`,
                `Pru is the happiest kid in the whole town.`,
                `The money from the ducks helps the library.`],
              kinds: [null, 'onedetail', 'toofar', 'wrongtime'],
              notes: [null,
                `Paragraph 5 says two workers hold a net. That is one small detail. The whole paragraph is about more.`,
                `Too far. Pru wins a book, so she is happy. But the passage never says she is the happiest kid in town.`,
                `That is in paragraph 1, not paragraph 5.`],
              why: `Paragraph 5 tells about the finish line. Duck 48 bumps the net third, and Pru wins a book. So paragraph 5 is mostly about the prize Pru wins.` },
            { id: 'Q07', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “Duck Number 48”`,
              excerpt: [
                `Pru got duck number 48 for the town duck race.`,
                `A truck tipped five hundred ducks into the river.`,
                `Duck 48 got stuck in some branches by the side.`,
                `In the end, duck 48 came in third, and Pru won a book.`],
              q: `Read this summary of the passage. Which KEY event is MISSING from the summary?`,
              choices: [
                `A wave rocked the branches, and duck 48 popped free.`,
                `Duck 48 drifted to the side and got stuck in some branches.`,
                `Pru groaned and covered her eyes.`,
                `Pru waded into the river to save her duck.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already tells that duck 48 got stuck. Look for the big part it leaves out.`,
                `Paragraph 3 says Pru groaned. That is a small detail, not a key event.`,
                `The passage never says Pru went into the river.`],
              why: `Paragraph 4 tells how a wave rocked the branches and set duck 48 free. The summary says the duck got stuck, and then it came in third. Without the missing event, that does not make sense. That key event is missing.` },
            { id: 'Q08', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the passage? Look for the big parts, in order.`,
              choices: [
                `At the town duck race, Pru's duck got stuck in some branches, popped free, and came in third, so Pru won a book.`,
                `A dump truck backed onto the bridge, and Pru climbed onto a bench to watch the ducks splash down.`,
                `At the town duck race, Pru's duck got stuck in some branches, and a worker in a boat had to pick it up.`,
                `At the town duck race, Pru's duck came in third and Pru won a book, and then the duck got stuck in some branches and popped free.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That choice tells only two small details from paragraph 2. A summary tells about the whole passage.`,
                `The passage never says a worker picked up the duck. A wave set it free.`,
                `The events are out of order. The duck got stuck first. It came in third last.`],
              why: `The big parts are these. Pru's duck gets stuck. A wave sets it free. Then it comes in third, and Pru wins a book. That sentence tells all of them, in order.` }
          ]
        }
      ]
    }
  ]
};
