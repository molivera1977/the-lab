/* ═══════════════════════════════════════════════════════
   THE LAB · data/rc1.js — Reading for Meaning, RC1 "Find the Proof" (skill: Evidence selection)
   The ONE sentence that PROVES an idea, and why a sentence can be TRUE but not PROOF.
   Shape: tools/CONTENT-SPEC-READING.md · checked by: node tools/check-reading.js RC1
   The right choice is written FIRST; the site shuffles.
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RC1 = {
  teach: {
    story: {
      title: `The Boat on Grandpa's Table`,
      paragraphs: [
        `On Saturday, Gil and his grandpa built a little wooden boat. They spread all the parts on the kitchen table. Grandpa showed Gil how to glue the sides together.`,
        `Next, it was time to paint the boat. Grandpa opened a can of red paint. Gil painted the tiny windows with a thin brush, one slow line at a time. The paint had a strong, sharp smell.`,
        `The paint needed a whole day to dry. Gil wanted to sail the boat right away, but he did not touch it. He sat by the table and read his book instead. Once, his finger got close to the boat, and he pulled it back.`,
        `On Sunday, the paint was dry at last. Gil and Grandpa carried the boat to the pond in the park. Gil set the boat on the water gently so it would not tip over. The little red boat bobbed along, and Gil cheered.`
      ]
    },
    flow: [
      { kind: 'watch', id: 'W1', title: 'What is proof?',
        lines: [
          `A passage is a story you read on a test. The story on this page is a passage.`,
          `A paragraph is one part of a passage. Each paragraph has a number, like 1, 2, 3 and 4.`,
          `An idea is a thing we think is true. Here is an idea: Gil is careful.`,
          `Proof is what shows that an idea is true.`,
          `Say you think your little brother ate the cookies. The crumbs on his shirt are proof.`,
          `On a test, the proof is a sentence from the passage.`,
          `Some questions say detail. Here, a detail is a sentence from the passage.`,
          `When a sentence supports an idea, it proves the idea. Supports means proves.`,
          `BEST means the most. The BEST sentence proves the idea the most.`,
          `Watch out. A sentence can be true, but not be proof.`,
          `Your brother had milk at lunch. That is true. But it does not prove he ate the cookies.`
        ] },
      { kind: 'watch', id: 'W2', title: 'Watch me find the proof',
        lines: [
          `Here is a question. Which sentence from the passage BEST supports the idea that Gil is careful?`,
          `Step 1. I say the idea in my own words. Gil takes his time so he does not make a mess.`,
          `Step 2. I find the paragraph that talks about it. Paragraph 2 tells how Gil paints the boat.`,
          `Step 3. I read each sentence in paragraph 2. I ask, does this sentence SHOW that Gil is careful?`,
          `Gil painted the tiny windows with a thin brush, one slow line at a time. Yes! A thin brush and slow lines show that Gil is careful.`,
          `So that sentence BEST supports the idea. It is my proof.`,
          `Watch out. I check one more sentence. Grandpa opened a can of red paint.`,
          `That sentence is true. It is in the passage. But it does not show that Gil is careful. It is about Grandpa and the paint.`,
          `So that sentence is true, but it is not proof.`
        ],
        lit: [
          `Gil painted the tiny windows with a thin brush, one slow line at a time.`,
          `Grandpa opened a can of red paint.`
        ] },
      { kind: 'step', id: 'S1', type: 'mc', skill: 'Evidence selection',
        q: `Here is a new question. Which sentence from the passage BEST supports the idea that Gil is patient? What idea does the question ask us to prove?`,
        choices: [`Gil is patient.`, `Gil is careful.`, `Grandpa is patient.`, `The boat is red.`],
        kinds: [null, 'wrongtime', 'wrongwho', 'wrongwho'],
        notes: [null,
          `That was the idea in the last question. This question says patient.`,
          `The question asks about Gil, not Grandpa.`,
          `The question does not ask about the boat. It asks about Gil.`],
        why: `The question says Gil is patient. Patient means you can wait and not get upset. That is the idea to prove.` },
      { kind: 'step', id: 'S2', type: 'mc', skill: 'Evidence selection',
        q: `Patient means you can wait and not get upset. Which paragraph tells about Gil waiting?`,
        choices: [`Paragraph 3`, `Paragraph 1`, `Paragraph 2`, `Paragraph 4`],
        kinds: [null, 'wrongtime', 'wrongtime', 'wrongtime'],
        notes: [null,
          `Paragraph 1 tells how Gil and Grandpa build the boat.`,
          `Paragraph 2 tells how Gil paints the boat.`,
          `Paragraph 4 tells how they sail the boat on the pond. The wait is over by then.`],
        why: `Paragraph 3 says the paint needs a whole day to dry. It tells what Gil does while he waits.` },
      { kind: 'step', id: 'S3', type: 'mc', skill: 'Evidence selection', evidence: true,
        q: `Which sentence from the passage BEST supports the idea that Gil is patient?`,
        choices: [
          `Gil wanted to sail the boat right away, but he did not touch it.`,
          `The paint needed a whole day to dry.`,
          `Grandpa showed Gil how to glue the sides together.`,
          `Gil and Grandpa carried the boat to the pond in the park.`],
        kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
        notes: [null,
          `Paragraph 3 says the paint needed a day to dry. That tells why Gil has to wait. It does not show how Gil waits.`,
          `Paragraph 1 is about Grandpa and the glue. It does not show Gil waiting.`,
          `Paragraph 4 is about the pond. The wait is over by then.`],
        why: `Paragraph 3 says Gil wanted to sail the boat, but he did not touch it. He waited. That shows Gil is patient.` },
      { kind: 'watch', id: 'W3', title: 'The three steps',
        lines: [
          `You can find the proof in three steps.`,
          `Step 1. Say the idea in your own words.`,
          `Step 2. Find where the passage talks about the idea. Look for the paragraph.`,
          `Step 3. Read each sentence. Pick the sentence that SHOWS the idea.`,
          `Remember, a sentence can be true, but not be proof.`,
          `The BEST sentence shows the idea the most.`,
          `Now you try.`
        ] }
    ]
  },

  versions: [
    /* ════════ VERSION 1 ════════ */
    {
      pre: {
        story: {
          title: `Fudge Comes Home`,
          paragraphs: [
            `Hattie got a hamster from the pet shop on Friday. His name was Fudge, and his fur was the color of chocolate. Hattie grinned at Fudge the whole way home.`,
            `At home, Hattie set the cage on her desk by the window. Then she jumped up and down and clapped her hands. Dad chuckled and set the little box on the carpet.`,
            `Hattie lifted Fudge out of the box. She held him low, close to the carpet, so he could not fall far. Then she checked that the cage door was shut tight.`,
            `Fudge sniffed every corner of his new cage. He took a long drink from his water bottle. Soon he curled up in the wood shavings and shut his eyes. Hattie turned off her music. She tiptoed out of the room and closed the door without a sound.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Hattie is excited?`,
            choices: [
              `Then she jumped up and down and clapped her hands.`,
              `His name was Fudge, and his fur was the color of chocolate.`,
              `Dad chuckled and set the little box on the carpet.`,
              `At home, Hattie set the cage on her desk by the window.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 1 tells what Fudge looks like. It does not show how Hattie feels.`,
              `Paragraph 2 says Dad chuckled. That is about Dad, not Hattie.`,
              `Paragraph 2 tells where Hattie put the cage. It does not show how she feels.`],
            why: `Paragraph 2 says Hattie jumped up and down and clapped. Kids do that when they are excited.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Hattie is careful with Fudge. Which sentence from the passage BEST supports this idea?`,
            choices: [
              `She held him low, close to the carpet, so he could not fall far.`,
              `Hattie lifted Fudge out of the box.`,
              `Hattie got a hamster from the pet shop on Friday.`,
              `He took a long drink from his water bottle.`],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              `Paragraph 3 says Hattie lifted Fudge out. It does not show how she held him.`,
              `Paragraph 1 tells where Hattie got Fudge. It does not show that she is careful.`,
              `Paragraph 4 says Fudge took a drink. That is about Fudge, not Hattie.`],
            why: `Paragraph 3 says Hattie held Fudge low so he could not fall far. She keeps him safe. That shows she is careful.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
            q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows that Hattie wants Fudge to rest?`,
            choices: [
              `She tiptoed out of the room and closed the door without a sound.`,
              `Fudge sniffed every corner of his new cage.`,
              `Soon he curled up in the wood shavings and shut his eyes.`,
              `He took a long drink from his water bottle.`],
            kinds: [null, 'wrongwho', 'wrongwho', 'wrongwho'],
            notes: [null,
              `Paragraph 4 says Fudge sniffed his cage. That is about Fudge, not Hattie.`,
              `Paragraph 4 says Fudge went to sleep. That tells what Fudge did. It does not show what Hattie wants.`,
              `Paragraph 4 says Fudge took a drink. That is about Fudge, not Hattie.`],
            why: `Paragraph 4 says Hattie tiptoed out and did not make a sound. She is quiet so Fudge can sleep.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Taco Night at Ezra's House`,
            paragraphs: [
              `In Ezra's family, someone new makes dinner every Friday. This week, it was Ezra's turn for the first time. He wanted to make tacos, just like Mom did.`,
              `Ezra read the recipe card again and again. His hands shook a little as he took out the big pan. "What if I burn it all?" he asked his big sister, Bea.`,
              `Bea stood by the stove to watch. Ezra put the meat in the pan and turned on the heat. He turned the pan handle in so no one would bump it. The meat sizzled and popped in the hot pan.`,
              `Then Ezra set out bowls of cheese, lettuce, and tomatoes. He cut the tomatoes slowly and kept his fingers away from the knife. Bea folded the napkins in half.`,
              `At dinner, everyone made their own tacos. Dad ate every bite of his first two tacos. Then Dad asked for a third taco. Ezra sat up tall and could not stop smiling. "I want to cook again next week!" said Ezra.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Ezra feels nervous?`,
              choices: [
                `His hands shook a little as he took out the big pan.`,
                `In Ezra's family, someone new makes dinner every Friday.`,
                `Bea folded the napkins in half.`,
                `He wanted to make tacos, just like Mom did.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 1 tells who makes dinner on Friday. It does not show how Ezra feels.`,
                `Paragraph 4 is about Bea and the napkins, not Ezra.`,
                `Paragraph 1 tells what Ezra wants to make. It does not show that he is nervous.`],
              why: `Paragraph 2 says Ezra's hands shook. Hands can shake when you are nervous.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which detail from the passage BEST shows that Dad likes the tacos?`,
              choices: [
                `Then Dad asked for a third taco.`,
                `At dinner, everyone made their own tacos.`,
                `Then Ezra set out bowls of cheese, lettuce, and tomatoes.`,
                `Bea stood by the stove to watch.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
              notes: [null,
                `Paragraph 5 says everyone made tacos. It does not show that Dad likes them.`,
                `Paragraph 4 tells what Ezra put on the table. It does not show what Dad thinks.`,
                `Paragraph 3 is about Bea, not Dad.`],
              why: `Paragraph 5 says Dad asked for a third taco. You ask for more when you like the food.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
              q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows that Ezra is careful?`,
              choices: [
                `He turned the pan handle in so no one would bump it.`,
                `Bea stood by the stove to watch.`,
                `Ezra put the meat in the pan and turned on the heat.`,
                `The meat sizzled and popped in the hot pan.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 3 says Bea stood by the stove. That is about Bea, not Ezra.`,
                `Paragraph 3 says Ezra put the meat in the pan. It does not show that he is careful.`,
                `Paragraph 3 tells how the meat sounds. It does not show what Ezra does.`],
              why: `Paragraph 3 says Ezra turned the pan handle in so no one would bump it. He keeps people safe. That shows he is careful.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Ezra feels proud. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Ezra sat up tall and could not stop smiling.`,
                `This week, it was Ezra's turn for the first time.`,
                `Dad ate every bite of his first two tacos.`,
                `He cut the tomatoes slowly and kept his fingers away from the knife.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 1 says it was Ezra's first turn. It does not show how he feels at the end.`,
                `Paragraph 5 says Dad ate his tacos. That is about Dad, not Ezra.`,
                `Paragraph 4 shows that Ezra is careful with the knife. It does not show that he is proud.`],
              why: `Paragraph 5 says Ezra sat up tall and could not stop smiling. People sit up tall when they are proud.` }
          ]
        },
        {
          story: {
            title: `Muffins for 4B`,
            paragraphs: [
              `A new family moved into the apartment across the hall from Fern. All afternoon, Fern heard boxes thump and scrape on the floor. A moving truck with a broken mirror was parked outside the building.`,
              `Fern wanted to say hello, but her cheeks got hot. She peeked out her door and then shut it fast. Mom said, "Let's bake them some muffins."`,
              `Fern and Mom baked a pan of corn muffins. Fern put six warm muffins on a yellow plate. Then she walked across the hall to apartment 4B. Her heart was thumping, but she knocked on the door three times.`,
              `A boy named Cal opened the door. He had paint on his shirt and a heavy box in his arms. Fern held out the plate and said hello first. Cal grinned so wide that his eyes crinkled.`,
              `Fern showed Cal the best spot to sit on the front steps. She told him which neighbor had a friendly old cat. The next morning, Cal was waiting for Fern on the steps.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Fern feels shy at first. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `She peeked out her door and then shut it fast.`,
                `All afternoon, Fern heard boxes thump and scrape on the floor.`,
                `Fern put six warm muffins on a yellow plate.`,
                `He had paint on his shirt and a heavy box in his arms.`],
              kinds: [null, 'notproof', 'notproof', 'wrongwho'],
              notes: [null,
                `Paragraph 1 tells what Fern heard. It does not show how she feels.`,
                `Paragraph 3 tells how many muffins Fern put on the plate. It does not show that she is shy.`,
                `Paragraph 4 is about Cal, not Fern.`],
              why: `Paragraph 2 says Fern peeked out and then shut the door fast. She wants to say hello, but she hides. That shows she is shy.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Fern is brave?`,
              choices: [
                `Her heart was thumping, but she knocked on the door three times.`,
                `Fern and Mom baked a pan of corn muffins.`,
                `A moving truck with a broken mirror was parked outside the building.`,
                `A boy named Cal opened the door.`],
              kinds: [null, 'notproof', 'notproof', 'wrongwho'],
              notes: [null,
                `Paragraph 3 says Fern and Mom baked muffins. It does not show that Fern is brave.`,
                `Paragraph 1 is about a truck, not Fern.`,
                `Paragraph 4 is about Cal, not Fern.`],
              why: `Paragraph 3 says Fern's heart was thumping, but she knocked. She was scared, and she did it anyway. That shows she is brave.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
              q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows that Cal is happy to meet Fern?`,
              choices: [
                `Cal grinned so wide that his eyes crinkled.`,
                `A boy named Cal opened the door.`,
                `He had paint on his shirt and a heavy box in his arms.`,
                `Fern held out the plate and said hello first.`],
              kinds: [null, 'notproof', 'notproof', 'wrongwho'],
              notes: [null,
                `Paragraph 4 says Cal opened the door. It does not show how he feels.`,
                `Paragraph 4 tells what Cal had with him. It does not show how he feels.`,
                `Paragraph 4 says Fern said hello. That is about Fern, not Cal.`],
              why: `Paragraph 4 says Cal grinned so wide that his eyes crinkled. A big grin shows he is happy.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which detail from the passage BEST shows that Fern is kind to Cal?`,
              choices: [
                `Fern showed Cal the best spot to sit on the front steps.`,
                `A moving truck with a broken mirror was parked outside the building.`,
                `Cal grinned so wide that his eyes crinkled.`,
                `All afternoon, Fern heard boxes thump and scrape on the floor.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 1 is about a truck, not Fern.`,
                `Paragraph 4 is about how Cal feels, not what Fern does.`,
                `Paragraph 1 tells what Fern heard. It does not show that she is kind.`],
              why: `Paragraph 5 says Fern showed Cal the best spot on the steps. She helps the new boy feel at home. That shows she is kind.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 2 ════════ */
    {
      pre: {
        story: {
          title: `Bo and the Shopping List`,
          paragraphs: [
            `On Saturday, Bo went to the grocery store with his mom. Mom gave Bo the shopping list. "You are in charge of the list today," she said.`,
            `Bo read each item out loud. He crossed off every item as soon as it went in the cart. He even opened the egg box to make sure no eggs were cracked.`,
            `In the bread aisle, Mom reached for a loaf. The aisle smelled warm and sweet. Bo pointed to the same bread on a lower shelf for one dollar less. Mom smiled and put the cheaper loaf in the cart. A song played over the store speakers.`,
            `At the checkout, Mom told the cashier about the cheaper bread. Bo stood up straight and grinned. That night, he told Dad the whole bread story two times.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Bo is careful?`,
            choices: [
              `He even opened the egg box to make sure no eggs were cracked.`,
              `On Saturday, Bo went to the grocery store with his mom.`,
              `Mom gave Bo the shopping list.`,
              `A song played over the store speakers.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 1 tells where Bo went. It does not show that he is careful.`,
              `Paragraph 1 says Mom gave Bo the list. That is about Mom, not Bo.`,
              `Paragraph 3 tells about a song in the store. It is not about Bo.`],
            why: `Paragraph 2 says Bo opened the egg box to check for cracked eggs. He checks so nothing goes wrong. That shows he is careful.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Bo feels proud. Which sentence from the passage BEST supports this idea?`,
            choices: [
              `Bo stood up straight and grinned.`,
              `At the checkout, Mom told the cashier about the cheaper bread.`,
              `In the bread aisle, Mom reached for a loaf.`,
              `Bo read each item out loud.`],
            kinds: [null, 'wrongwho', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 4 says Mom told the cashier. That is about Mom, not how Bo feels.`,
              `Paragraph 3 says Mom reached for bread. That is about Mom, not Bo.`,
              `Paragraph 2 says Bo read the list out loud. It does not show how he feels.`],
            why: `Paragraph 4 says Bo stood up straight and grinned. People stand tall when they are proud.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
            q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows that Bo helps Mom save money?`,
            choices: [
              `Bo pointed to the same bread on a lower shelf for one dollar less.`,
              `In the bread aisle, Mom reached for a loaf.`,
              `The aisle smelled warm and sweet.`,
              `A song played over the store speakers.`],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              `Paragraph 3 says Mom reached for bread. That is about Mom, not Bo.`,
              `Paragraph 3 tells how the aisle smelled. It does not show Bo saving money.`,
              `Paragraph 3 tells about a song. It does not show Bo saving money.`],
            why: `Paragraph 3 says Bo found the same bread for one dollar less. That saves Mom a dollar.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Celia's Cousin Sleeps Over`,
            paragraphs: [
              `Celia's little cousin Ada came to sleep over on Friday night. Ada was six, and she had never slept away from home. She held her pillow tight against her chest.`,
              `At dinner, Ada pushed her rice around her plate. She did not eat a single bite. She kept looking out the window at the dark street.`,
              `After dinner, Celia gave Ada her own fuzzy blanket. Then Celia let Ada pick the game. They played the game three times in a row.`,
              `At bedtime, Ada started to cry. "I miss my mom," she said softly. Celia turned on her star night-light. Little stars spun across the ceiling. Ada stopped crying and pointed at the stars.`,
              `In the morning, Ada ate two whole pancakes. "Can I sleep over again next week?" asked Ada. Celia smiled and nodded.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Ada feels sad at dinner?`,
              choices: [
                `She did not eat a single bite.`,
                `In the morning, Ada ate two whole pancakes.`,
                `They played the game three times in a row.`,
                `Celia's little cousin Ada came to sleep over on Friday night.`],
              kinds: [null, 'wrongtime', 'wrongtime', 'notproof'],
              notes: [null,
                `Paragraph 5 is about the next morning, not dinner.`,
                `Paragraph 3 is about the game after dinner, not dinner.`,
                `Paragraph 1 tells when Ada came to stay. It does not show how she feels.`],
              why: `Paragraph 2 says Ada did not eat a single bite. Kids who feel sad often do not want to eat.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which detail from the passage BEST shows that Celia is kind to Ada?`,
              choices: [
                `Then Celia let Ada pick the game.`,
                `She held her pillow tight against her chest.`,
                `In the morning, Ada ate two whole pancakes.`,
                `Little stars spun across the ceiling.`],
              kinds: [null, 'wrongwho', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 1 says Ada held her pillow. That is about Ada, not Celia.`,
                `Paragraph 5 says Ada ate pancakes. That is about Ada, not Celia.`,
                `Paragraph 4 tells what the stars did. It does not show what Celia did.`],
              why: `Paragraph 3 says Celia let Ada pick the game. Celia lets her little cousin choose what to play. That shows she is kind.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
              q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows that Ada starts to feel better?`,
              choices: [
                `Ada stopped crying and pointed at the stars.`,
                `At bedtime, Ada started to cry.`,
                `Celia turned on her star night-light.`,
                `Little stars spun across the ceiling.`],
              kinds: [null, 'opposite', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 4 says Ada started to cry. That shows she is sad, not better.`,
                `Paragraph 4 says Celia turned on a light. That is about Celia, not how Ada feels.`,
                `Paragraph 4 tells about the stars on the ceiling. It does not show how Ada feels.`],
              why: `Paragraph 4 says Ada stopped crying and pointed at the stars. That shows she feels better.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Ada had a good time. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `"Can I sleep over again next week?" asked Ada.`,
                `Celia smiled and nodded.`,
                `At dinner, Ada pushed her rice around her plate.`,
                `Ada was six, and she had never slept away from home.`],
              kinds: [null, 'wrongwho', 'wrongtime', 'notproof'],
              notes: [null,
                `Paragraph 5 says Celia nodded. That is about Celia, not Ada.`,
                `Paragraph 2 is about dinner, when Ada was still sad.`,
                `Paragraph 1 tells how old Ada is. It does not show how her visit went.`],
              why: `Paragraph 5 says Ada asked to sleep over again. You only want to come back when you had a good time.` }
          ]
        },
        {
          story: {
            title: `Down to the Basement`,
            paragraphs: [
              `Every Tuesday, Gabe takes the recycling down to the basement of his building. It is his weekly chore. Dad takes out the trash, and Gabe takes the cans and bottles.`,
              `The basement stairs are steep and narrow. At the bottom, one light bulb buzzes and blinks. Old pipes bang and hiss along the low ceiling.`,
              `This Tuesday, Gabe stood at the top of the stairs for a long time. His legs shook, and his mouth felt dry. He took a deep breath and walked down anyway. He hummed a song all the way to the bottom.`,
              `Gabe dropped the cans and bottles into the blue bins. He put the paper in the green bin, just like Dad showed him. Then a pipe banged loudly right over his head. Gabe raced up the stairs two at a time.`,
              `Back in the apartment, Dad gave Gabe a high five. "That basement is spooky, but you did it," said Dad. Gabe laughed, and his legs stopped shaking.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Gabe feels scared of the basement. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `His legs shook, and his mouth felt dry.`,
                `It is his weekly chore.`,
                `The basement stairs are steep and narrow.`,
                `Gabe dropped the cans and bottles into the blue bins.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 1 says the recycling is Gabe's chore. It does not show how he feels.`,
                `Paragraph 2 tells what the stairs look like. It does not show how Gabe feels.`,
                `Paragraph 4 tells what Gabe did with the cans. It does not show how he feels.`],
              why: `Paragraph 3 says Gabe's legs shook and his mouth felt dry. A body can do that when you are scared.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Gabe is brave?`,
              choices: [
                `He took a deep breath and walked down anyway.`,
                `At the bottom, one light bulb buzzes and blinks.`,
                `Dad takes out the trash, and Gabe takes the cans and bottles.`,
                `Gabe raced up the stairs two at a time.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 2 tells about the light bulb. It is not about Gabe.`,
                `Paragraph 1 tells who takes out what. It does not show that Gabe is brave.`,
                `Paragraph 4 says Gabe ran up the stairs fast. Running away does not show he is brave.`],
              why: `Paragraph 3 says Gabe took a deep breath and walked down anyway. He was scared, but he still went. That shows he is brave.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
              q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows why Gabe runs up the stairs?`,
              choices: [
                `Then a pipe banged loudly right over his head.`,
                `Gabe dropped the cans and bottles into the blue bins.`,
                `He put the paper in the green bin, just like Dad showed him.`,
                `Gabe raced up the stairs two at a time.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 4 says Gabe dropped the cans in the bins. That does not tell why he ran.`,
                `Paragraph 4 tells where the paper goes. That does not tell why Gabe ran.`,
                `Paragraph 4 says Gabe ran up the stairs. That tells what he did, not why he did it.`],
              why: `Paragraph 4 says a pipe banged loudly over Gabe's head. The loud bang scared him, so he ran.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which detail from the passage BEST shows that Gabe feels better at the end?`,
              choices: [
                `Gabe laughed, and his legs stopped shaking.`,
                `Old pipes bang and hiss along the low ceiling.`,
                `Back in the apartment, Dad gave Gabe a high five.`,
                `This Tuesday, Gabe stood at the top of the stairs for a long time.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 2 tells about the pipes. It does not show how Gabe feels.`,
                `Paragraph 5 says Dad gave a high five. That is about Dad, not how Gabe feels.`,
                `Paragraph 3 is about the start, before Gabe went down.`],
              why: `Paragraph 5 says Gabe laughed and his legs stopped shaking. He is not scared now. He feels better.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 3 ════════ */
    {
      pre: {
        story: {
          title: `Stitches for Bun`,
          paragraphs: [
            `Lulu is four, and her stuffed rabbit is named Bun. Lulu takes Bun everywhere she goes. On Saturday, Bun's ear got caught in the car door and ripped.`,
            `Lulu cried and cried and held Bun tight against her chest. She would not let go of Bun, not even to eat lunch.`,
            `Her big brother, Wyatt, got Mom's sewing box from the closet. Mom helped him thread the needle. Wyatt pushed the needle in and out slowly so he would not poke his fingers.`,
            `Wyatt sewed for a long time. His stitches were tiny and close together. At last, Bun's ear was back on.`,
            `Lulu looked at Bun's ear and touched it with one finger. Then she gave Wyatt a great big hug. Mom smiled from the doorway. That night, Lulu tucked Bun into bed next to her pillow.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Wyatt is careful?`,
            choices: [
              `Wyatt pushed the needle in and out slowly so he would not poke his fingers.`,
              `Her big brother, Wyatt, got Mom's sewing box from the closet.`,
              `Mom helped him thread the needle.`,
              `That night, Lulu tucked Bun into bed next to her pillow.`],
            kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
            notes: [null,
              `Paragraph 3 says Wyatt got the sewing box. It does not show how he sews.`,
              `Paragraph 3 says Mom helped with the needle. That is about Mom, not Wyatt.`,
              `Paragraph 5 says Lulu tucked Bun into bed. That is about Lulu, not Wyatt.`],
            why: `Paragraph 3 says Wyatt pushed the needle in and out slowly so he would not poke his fingers. He takes his time and stays safe. That shows he is careful.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Lulu is sad at first. Which sentence from the passage BEST supports this idea?`,
            choices: [
              `Lulu cried and cried and held Bun tight against her chest.`,
              `On Saturday, Bun's ear got caught in the car door and ripped.`,
              `Lulu takes Bun everywhere she goes.`,
              `Lulu looked at Bun's ear and touched it with one finger.`],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              `Paragraph 1 tells what happened to Bun's ear. It does not show how Lulu feels.`,
              `Paragraph 1 says Lulu takes Bun everywhere. It does not show that she is sad.`,
              `Paragraph 5 is about the end, after Bun's ear is fixed.`],
            why: `Paragraph 2 says Lulu cried and cried and held Bun tight. That shows she is sad.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 5,
            q: `Read paragraph 5. Which sentence from paragraph 5 BEST shows that Lulu wants to thank Wyatt?`,
            choices: [
              `Then she gave Wyatt a great big hug.`,
              `Lulu looked at Bun's ear and touched it with one finger.`,
              `Mom smiled from the doorway.`,
              `That night, Lulu tucked Bun into bed next to her pillow.`],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 5 says Lulu touched Bun's ear. It does not show what she does for Wyatt.`,
              `Paragraph 5 says Mom smiled. That is about Mom, not Lulu.`,
              `Paragraph 5 says Lulu tucked Bun into bed. It does not show what she does for Wyatt.`],
            why: `Paragraph 5 says Lulu gave Wyatt a great big hug. Wyatt fixed Bun, and a hug is one way to say thank you.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Saturday Braids`,
            paragraphs: [
              `Each Saturday, Grandma braids Zuri's hair. Zuri sits on a pillow on the floor. Grandma sits on the couch behind her. The braids take a long time, almost two whole hours.`,
              `This Saturday, Zuri's friends were out on the sidewalk, jumping rope. Zuri could hear them laugh through the window. She wanted to run out and play, but she stayed on her pillow and held still.`,
              `Grandma came to a big knot. The comb pulled, and Zuri shut her eyes tight. Grandma rubbed Zuri's head and combed more gently.`,
              `While she braided, Grandma told stories about when she was a girl on a farm. Once, a goat ate her straw hat right off her head! Zuri laughed so hard that her shoulders shook. "Tell it again!" begged Zuri.`,
              `At last, Grandma tied the last braid with a yellow bead. Zuri stood up and stretched her stiff legs. She looked in the mirror and grinned at her new braids. Grandma put the comb and beads back in her basket. Then Zuri ran outside to show her friends.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Zuri is patient?`,
              choices: [
                `She wanted to run out and play, but she stayed on her pillow and held still.`,
                `The braids take a long time, almost two whole hours.`,
                `Zuri could hear them laugh through the window.`,
                `This Saturday, Zuri's friends were out on the sidewalk, jumping rope.`],
              kinds: [null, 'notproof', 'notproof', 'wrongwho'],
              notes: [null,
                `Paragraph 1 says the braids take a long time. That tells why Zuri has to wait. It does not show how she waits.`,
                `Paragraph 2 tells what Zuri could hear. It does not show what Zuri does.`,
                `Paragraph 2 says Zuri's friends were jumping rope. That is about her friends, not Zuri.`],
              why: `Paragraph 2 says Zuri wanted to play, but she stayed on her pillow and held still. She waited and did not get upset. That shows Zuri is patient.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which detail from the passage BEST shows that Zuri thinks the story is funny?`,
              choices: [
                `Zuri laughed so hard that her shoulders shook.`,
                `Once, a goat ate her straw hat right off her head!`,
                `Zuri could hear them laugh through the window.`,
                `While she braided, Grandma told stories about when she was a girl on a farm.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
              notes: [null,
                `Paragraph 4 tells what happened in Grandma's story. It does not show what Zuri thinks of the story.`,
                `Paragraph 2 is about Zuri's friends laughing outside. It is not about Grandma's story.`,
                `Paragraph 4 says Grandma told stories. That is about Grandma, not Zuri.`],
              why: `Paragraph 4 says Zuri laughed so hard that her shoulders shook. People laugh like that when a story is funny.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true, para: 5,
              q: `Read paragraph 5. Which sentence from paragraph 5 BEST shows that Zuri likes her new braids?`,
              choices: [
                `She looked in the mirror and grinned at her new braids.`,
                `At last, Grandma tied the last braid with a yellow bead.`,
                `Zuri stood up and stretched her stiff legs.`,
                `Grandma put the comb and beads back in her basket.`],
              kinds: [null, 'wrongwho', 'notproof', 'wrongwho'],
              notes: [null,
                `Paragraph 5 says Grandma tied the last braid. That is about Grandma, not Zuri.`,
                `Paragraph 5 says Zuri stretched her legs. It does not show how she feels about her braids.`,
                `Paragraph 5 says Grandma put the comb away. That is about Grandma, not Zuri.`],
              why: `Paragraph 5 says Zuri looked in the mirror and grinned at her new braids. A big grin shows she likes her braids.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that the comb hurts Zuri. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `The comb pulled, and Zuri shut her eyes tight.`,
                `Zuri sits on a pillow on the floor.`,
                `Grandma sits on the couch behind her.`,
                `At last, Grandma tied the last braid with a yellow bead.`],
              kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
              notes: [null,
                `Paragraph 1 tells where Zuri sits. It does not show how she feels.`,
                `Paragraph 1 tells where Grandma sits. That is about Grandma, not Zuri.`,
                `Paragraph 5 is about the end, when the braids are done.`],
              why: `Paragraph 3 says the comb pulled, and Zuri shut her eyes tight. People shut their eyes tight when something hurts.` }
          ]
        },
        {
          story: {
            title: `The Hungry Toy Bin`,
            paragraphs: [
              `Abby and her little brother, Hal, share a bedroom. On Saturday morning, Mom said the bedroom had to be tidy before lunch. Toys, books, and dirty socks covered every inch of the floor.`,
              `Abby picked up the blocks and put them back in their bin. Hal dumped the bin right back out. Abby put the blocks away again, and Hal emptied the bin again.`,
              `Abby flopped down on her bed and groaned loudly. She squeezed her pillow hard and kicked her feet. Then she sat up suddenly and grinned.`,
              `Abby held up the bin and made it talk in a silly, deep voice. "Feed me blocks!" said the bin. Hal giggled and tossed a block into the bin. Soon every block was off the floor.`,
              `The bedroom was tidy before lunch. Mom peeked in, and her mouth fell open. She rubbed her eyes and looked again. Abby and Hal gave each other a happy high five.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Abby feels upset with Hal. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `She squeezed her pillow hard and kicked her feet.`,
                `Abby picked up the blocks and put them back in their bin.`,
                `On Saturday morning, Mom said the bedroom had to be tidy before lunch.`,
                `Toys, books, and dirty socks covered every inch of the floor.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 2 says Abby put the blocks away. It does not show how she feels.`,
                `Paragraph 1 tells what Mom said. That is about Mom, not how Abby feels.`,
                `Paragraph 1 tells how messy the floor was. It does not show how Abby feels.`],
              why: `Paragraph 3 says Abby squeezed her pillow hard and kicked her feet. That shows she is upset.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Abby thinks of a smart plan?`,
              choices: [
                `Abby held up the bin and made it talk in a silly, deep voice.`,
                `Abby and Hal gave each other a happy high five.`,
                `Hal dumped the bin right back out.`,
                `Toys, books, and dirty socks covered every inch of the floor.`],
              kinds: [null, 'wrongtime', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 5 is about the end, after the bedroom was tidy.`,
                `Paragraph 2 is about Hal, not Abby.`,
                `Paragraph 1 tells how messy the floor was. It does not show a plan.`],
              why: `Paragraph 4 says Abby made the bin talk in a silly voice. That turned cleaning into a game for Hal. It was a smart plan.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true, para: 4,
              q: `Read paragraph 4. Which sentence from paragraph 4 BEST shows that Hal thinks the game is fun?`,
              choices: [
                `Hal giggled and tossed a block into the bin.`,
                `Abby held up the bin and made it talk in a silly, deep voice.`,
                `"Feed me blocks!" said the bin.`,
                `Soon every block was off the floor.`],
              kinds: [null, 'wrongwho', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 4 says Abby made the bin talk. That is about Abby, not Hal.`,
                `Paragraph 4 tells what the bin said. It does not show how Hal feels.`,
                `Paragraph 4 says the blocks were off the floor. It does not show how Hal feels.`],
              why: `Paragraph 4 says Hal giggled. Kids giggle when a thing is fun.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which detail from the passage BEST shows that Mom is surprised?`,
              choices: [
                `Mom peeked in, and her mouth fell open.`,
                `Abby and Hal gave each other a happy high five.`,
                `Abby flopped down on her bed and groaned loudly.`,
                `Abby picked up the blocks and put them back in their bin.`],
              kinds: [null, 'wrongwho', 'wrongwho', 'wrongwho'],
              notes: [null,
                `Paragraph 5 says Abby and Hal gave a high five. That is about the kids, not Mom.`,
                `Paragraph 3 says Abby groaned. That is about Abby, not Mom.`,
                `Paragraph 2 says Abby put the blocks away. That is about Abby, not Mom.`],
              why: `Paragraph 5 says Mom's mouth fell open. That happens when people are surprised.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 4 ════════ */
    {
      pre: {
        story: {
          title: `Rory Learns to Whistle`,
          paragraphs: [
            `Rory's uncle Abe can whistle any song he hears. Uncle Abe whistles when he cooks and when he walks. Rory wanted to whistle too. But when Rory tried, only air came out of his mouth.`,
            `Rory practiced on the walk to school. He tried while he dried the dishes. Rory even tried in the bath until the water got cold.`,
            `On Thursday, Uncle Abe came for dinner. Uncle Abe showed Rory how to make his lips into a tiny round O. Rory tried ten more times. At last, a high, clear whistle came out.`,
            `Rory's eyes got big. Rory jumped up and whistled again, even louder. Then he ran to the kitchen to whistle for Mom. Uncle Abe clapped and cheered.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `Which sentence from the passage BEST supports the idea that Rory does not give up?`,
            choices: [
              `Rory even tried in the bath until the water got cold.`,
              `Uncle Abe whistles when he cooks and when he walks.`,
              `Uncle Abe showed Rory how to make his lips into a tiny round O.`,
              `Rory's eyes got big.`],
            kinds: [null, 'wrongwho', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 1 tells when Uncle Abe whistles. That is about Uncle Abe, not Rory.`,
              `Paragraph 3 says Uncle Abe showed Rory what to do. That is about Uncle Abe, not Rory.`,
              `Paragraph 4 says Rory's eyes got big. It does not show Rory trying again and again.`],
            why: `Paragraph 2 says Rory even tried in the bath until the water got cold. He kept trying again and again. That shows Rory does not give up.` },
          { id: 'P2', type: 'mc', skill: 'Evidence selection', evidence: true,
            q: `The passage shows that Rory is excited at the end. Which sentence from the passage BEST supports this idea?`,
            choices: [
              `Rory jumped up and whistled again, even louder.`,
              `Rory practiced on the walk to school.`,
              `Uncle Abe showed Rory how to make his lips into a tiny round O.`,
              `Uncle Abe clapped and cheered.`],
            kinds: [null, 'wrongtime', 'wrongwho', 'wrongwho'],
            notes: [null,
              `Paragraph 2 is about the days before Rory could whistle.`,
              `Paragraph 3 says Uncle Abe showed Rory what to do. It does not show how Rory feels.`,
              `Paragraph 4 says Uncle Abe clapped. That is about Uncle Abe, not Rory.`],
            why: `Paragraph 4 says Rory jumped up and whistled again, even louder. That shows he is excited.` },
          { id: 'P3', type: 'mc', skill: 'Evidence selection', evidence: true, para: 1,
            q: `Read paragraph 1. Which sentence from paragraph 1 BEST shows that Rory has a hard time at first?`,
            choices: [
              `But when Rory tried, only air came out of his mouth.`,
              `Rory's uncle Abe can whistle any song he hears.`,
              `Uncle Abe whistles when he cooks and when he walks.`,
              `Rory wanted to whistle too.`],
            kinds: [null, 'wrongwho', 'wrongwho', 'notproof'],
            notes: [null,
              `Paragraph 1 says Uncle Abe can whistle any song. That is about Uncle Abe, not Rory.`,
              `Paragraph 1 tells when Uncle Abe whistles. That is about Uncle Abe, not Rory.`,
              `Paragraph 1 says Rory wanted to whistle. It does not show that Rory has a hard time.`],
            why: `Paragraph 1 says only air came out when Rory tried. He could not make a whistle yet. That shows Rory has a hard time at first.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Purple Frames with Stars`,
            paragraphs: [
              `Noor sat in the back row of her classroom. Each morning, Ms. Kaye wrote ten math problems on the board. Noor copied them into her notebook.`,
              `One week, Noor got almost every problem wrong. She knew how to add and take away. But she kept copying the numbers wrong.`,
              `Ms. Kaye asked Noor to read the board out loud. Noor squinted hard, but the numbers looked fuzzy. Ms. Kaye wrote a note for Noor's mom. Noor folded the note and put it in her pocket.`,
              `On Saturday, Noor got her very first glasses. The purple frames had tiny silver stars on the sides. From the shop, she could see every leaf on a tree across the street.`,
              `That night, Noor wiped each lens with a soft cloth before she put the glasses in their case. Then she read her book until bedtime.`,
              `On Monday, Noor copied all ten problems the right way. Ms. Kaye put a gold star at the top of her paper. Noor held up her paper so her friend Bree could see it.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Noor is careful with her glasses?`,
              choices: [
                `That night, Noor wiped each lens with a soft cloth before she put the glasses in their case.`,
                `The purple frames had tiny silver stars on the sides.`,
                `Then she read her book until bedtime.`,
                `Ms. Kaye put a gold star at the top of her paper.`],
              kinds: [null, 'notproof', 'notproof', 'wrongwho'],
              notes: [null,
                `Paragraph 4 tells what the glasses look like. It does not show how Noor treats them.`,
                `Paragraph 5 says Noor read her book. It does not show that she takes care of her glasses.`,
                `Paragraph 6 is about Ms. Kaye and the gold star, not the glasses.`],
              why: `Paragraph 5 says Noor wiped each lens with a soft cloth. Then she put the glasses in their case. She keeps them clean and safe. That shows she is careful.` },
            { id: 'Q02', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which detail from the passage BEST shows that the glasses help Noor see?`,
              choices: [
                `From the shop, she could see every leaf on a tree across the street.`,
                `On Saturday, Noor got her very first glasses.`,
                `Each morning, Ms. Kaye wrote ten math problems on the board.`,
                `She knew how to add and take away.`],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 4 says Noor got glasses. It does not show what she can see with them.`,
                `Paragraph 1 is about Ms. Kaye and the board, not the glasses.`,
                `Paragraph 2 tells what Noor knows about math. It does not show how well she can see.`],
              why: `Paragraph 4 says Noor could see every leaf on a tree across the street. A leaf that far away is very small. With her glasses on, she can see small things far away. That shows the glasses help her see.` },
            { id: 'Q03', type: 'mc', skill: 'Evidence selection', evidence: true, para: 3,
              q: `Read paragraph 3. Which sentence from paragraph 3 BEST shows why Noor copied the numbers wrong?`,
              choices: [
                `Noor squinted hard, but the numbers looked fuzzy.`,
                `Ms. Kaye asked Noor to read the board out loud.`,
                `Ms. Kaye wrote a note for Noor's mom.`,
                `Noor folded the note and put it in her pocket.`],
              kinds: [null, 'wrongwho', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 3 tells what Ms. Kaye asked. That is about Ms. Kaye. It does not tell why Noor made mistakes.`,
                `Paragraph 3 says Ms. Kaye wrote a note. That is about Ms. Kaye. It does not tell why Noor copied wrong.`,
                `Paragraph 3 says Noor put the note in her pocket. That tells what she did, not why she copied wrong.`],
              why: `Paragraph 3 says the numbers looked fuzzy to Noor. She could not see them well. That is why she copied them wrong.` },
            { id: 'Q04', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Noor feels proud at the end. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Noor held up her paper so her friend Bree could see it.`,
                `On Monday, Noor copied all ten problems the right way.`,
                `One week, Noor got almost every problem wrong.`,
                `Noor sat in the back row of her classroom.`],
              kinds: [null, 'notproof', 'wrongtime', 'wrongtime'],
              notes: [null,
                `Paragraph 6 tells what Noor did on Monday. It does not show how she feels.`,
                `Paragraph 2 is about the week before Noor got her glasses, not the end.`,
                `Paragraph 1 tells where Noor sat at the start. It does not show how she feels at the end.`],
              why: `Paragraph 6 says Noor held up her paper so Bree could see it. When you are proud of your work, you want to show it. That shows Noor feels proud.` }
          ]
        },
        {
          story: {
            title: `A Bed for Old Duke`,
            paragraphs: [
              `Duke is Felix's dog, and he is fourteen years old. Duke's face is gray, and he walks very slowly now. Duke always used to sleep on the rug in Felix's bedroom upstairs.`,
              `One evening, Duke stood at the bottom of the stairs and whined. The hallway light was still on. The stairs were too steep for Duke's stiff old legs. The clock in the hallway said nine o'clock.`,
              `Felix hurried down and sat on the bottom step next to Duke. He hugged Duke's neck and did not say a single word. Felix's eyes filled with tears.`,
              `The next day, Felix carried Duke's bed downstairs. He put the bed beside the warm heater in the living room. Then Felix dragged his own sleeping bag down next to it.`,
              `That evening, Duke turned around three times and lay down. Felix slept on the carpet beside him. Duke's tail thumped softly on his bed.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `The passage shows that Felix feels sad. Which sentence from the passage BEST supports this idea?`,
              choices: [
                `Felix's eyes filled with tears.`,
                `Duke's face is gray, and he walks very slowly now.`,
                `Duke is Felix's dog, and he is fourteen years old.`,
                `He put the bed beside the warm heater in the living room.`],
              kinds: [null, 'wrongwho', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 1 tells what Duke looks like. That is about Duke, not Felix.`,
                `Paragraph 1 tells how old Duke is. It does not show how Felix feels.`,
                `Paragraph 4 tells where Felix put the bed. It does not show that he is sad.`],
              why: `Paragraph 3 says Felix's eyes filled with tears. That shows he is sad.` },
            { id: 'Q06', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which sentence from the passage BEST supports the idea that Felix is kind to Duke?`,
              choices: [
                `The next day, Felix carried Duke's bed downstairs.`,
                `Duke always used to sleep on the rug in Felix's bedroom upstairs.`,
                `Duke's face is gray, and he walks very slowly now.`,
                `That evening, Duke turned around three times and lay down.`],
              kinds: [null, 'wrongwho', 'wrongwho', 'wrongwho'],
              notes: [null,
                `Paragraph 1 tells where Duke used to sleep. It does not show what Felix does for him.`,
                `Paragraph 1 tells what Duke looks like. That is about Duke, not Felix.`,
                `Paragraph 5 is about Duke, not Felix.`],
              why: `Paragraph 4 says Felix carried Duke's bed downstairs. Felix did a big job to help his old dog. That shows Felix is kind.` },
            { id: 'Q07', type: 'mc', skill: 'Evidence selection', evidence: true, para: 2,
              q: `Read paragraph 2. Which sentence from paragraph 2 BEST shows why Duke whines?`,
              choices: [
                `The stairs were too steep for Duke's stiff old legs.`,
                `One evening, Duke stood at the bottom of the stairs and whined.`,
                `The hallway light was still on.`,
                `The clock in the hallway said nine o'clock.`],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                `Paragraph 2 says Duke whined. That tells what he did, not why.`,
                `Paragraph 2 tells about the hall light. It does not tell why Duke whined.`,
                `Paragraph 2 tells the time. It does not tell why Duke whined.`],
              why: `Paragraph 2 says the stairs were too steep for Duke's old legs. Duke could not climb up, so he whined.` },
            { id: 'Q08', type: 'mc', skill: 'Evidence selection', evidence: true,
              q: `Which detail from the passage BEST shows that Duke is happy?`,
              choices: [
                `Duke's tail thumped softly on his bed.`,
                `Felix slept on the carpet beside him.`,
                `He put the bed beside the warm heater in the living room.`,
                `The clock in the hallway said nine o'clock.`],
              kinds: [null, 'wrongwho', 'wrongwho', 'notproof'],
              notes: [null,
                `Paragraph 5 tells where Felix slept. That is about Felix, not Duke.`,
                `Paragraph 4 tells where Felix put the bed. That is about Felix, not how Duke feels.`,
                `Paragraph 2 tells the time. It does not show how Duke feels.`],
              why: `Paragraph 5 says Duke's tail thumped. A dog wags its tail when it is happy.` }
          ]
        }
      ]
    }
  ]
};
