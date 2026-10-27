/* ═══════════════════════════════════════════════════════
   THE LAB · data/rp6.js — Reading for Meaning, RP6 "Mostly About: One Paragraph" (skills: Main idea, Summary)
   The short practice lesson right before RC6 "What Is It Mostly About?" (Marcos 10/26: "a shorter exercise with
   just a paragraph to read from"). Every story is ONE paragraph: a tiny story with 4–5 key events in order.
   Shape: tools/CONTENT-SPEC-READING.md ("ONE PARAGRAPH") · checked by: node tools/check-reading.js RP6
   The right choice is written FIRST; the site shuffles.
   Each version, in order:
     teach: W1 "Mostly about" · W2 worked main idea (lit: one detail) · S1 small detail · S2 best summary · W3 "The steps"
     pre:   P1 main idea · P2 best summary
     turn:  A: Q01 main idea · Q02 best summary      B: Q03 main idea · Q04 missing key event (excerpt)
            C: Q05 main idea · Q06 best summary      D: Q07 main idea · Q08 missing key event (excerpt)
   Kinds: main idea → onedetail (most), toofar, noclue (not in the paragraph);
          best summary → onedetail (one part), noclue (a wrong event), wrongtime (out of order);
          missing event → insummary (required), onedetail, noclue.
   A main-idea why names the topic only, never the events in order (the Lab shows it before the next question).
   A main-idea item's choices, why and notes never name the event the later missing-event item asks about,
   and a story's title never hints at it (the title is read with the summary box).
   The stems add short plain sentences, so the questions read at FK ≤ 3.5 together (the spec's bare stems read
   at 6.6).
   Theme lane: food, errands, trips and celebrations.
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RP6 = {
  versions: [
    /* ════════ VERSION 1 ════════ */
    {
      teach: {
        story: {
          title: `Tamales on Abuela's Counter`,
          paragraphs: [
            `Paz helped Abuela make tamales for a big party. First, they soaked dry corn husks in warm water. Abuela hummed an old song as she worked. Then Paz spread soft corn dough on each husk. She put a scoop of chicken in red sauce on the dough. A drop of red sauce fell on her new socks. Next, they folded each husk into a neat bundle. They set the tamales in a tall pot to steam. At the party, the family ate every last one.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Mostly about',
            lines: [
              `A paragraph is one part of a story. Today, each story is just one paragraph.`,
              `Some questions ask what the paragraph is mostly about.`,
              `Mostly about means what the WHOLE paragraph tells about. That is the main idea.`,
              `A detail is one small part. It tells just one thing.`,
              `Think about a trip to the store. The main idea is, we went to buy food for dinner. A detail is, the cart had a squeaky wheel.`,
              `A summary tells the most important parts. It tells them in order, in a few sentences.`,
              `A summary leaves out the small details.`,
              `A key event is a big part of the story. If you leave it out, the story does not make sense.`,
              `Some questions ask which key event is MISSING. Missing means left out.`,
              `Summarizes means tells a summary. The BEST summary tells all the key events, in order.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the main idea',
            lines: [
              `Here is a question. What is the paragraph mostly about?`,
              `Step 1. I will read the WHOLE paragraph, not just one sentence.`,
              `Step 2. I ask, what do all the sentences tell about?`,
              `They soak the husks. Paz spreads the dough and adds the chicken. They fold the husks and steam them.`,
              `At the end, the family eats them at the party.`,
              `All of those sentences tell how Paz and Abuela make tamales.`,
              `So the paragraph is mostly about making tamales for the party. That is the main idea.`,
              `Watch out. Abuela hummed an old song as she worked.`,
              `That sentence is true. But it tells just one small part. It is a detail, not the main idea.`
            ],
            lit: [
              `Abuela hummed an old song as she worked.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `A summary leaves out small details. Which sentence from the paragraph is just one small detail?`,
            choices: [
              `A drop of red sauce fell on her new socks.`,
              `First, they soaked dry corn husks in warm water.`,
              `Next, they folded each husk into a neat bundle.`,
              `They set the tamales in a tall pot to steam.`],
            kinds: [null, 'toofar', 'toofar', 'toofar'],
            notes: [null,
              `They soak the husks. That is a big step, not a small detail.`,
              `They fold each husk. That is a big step, not a small detail.`,
              `They steam the tamales. That is a big step, not a small detail.`],
            why: `A drop of sauce fell on Paz's socks. The story still makes sense without it. So it is just one small detail.` },
          { kind: 'step', id: 'S2', type: 'mc',
            q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
            choices: [
              `Paz and Abuela filled corn husks, steamed the tamales, and the family ate them at the party.`,
              `Paz spread soft corn dough on each husk and put chicken on top.`,
              `Paz and Abuela filled corn husks, but the tamales burned in the pot.`,
              `The family ate the tamales at the party, and then Paz and Abuela filled the husks.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is just one part. A summary tells all the big parts, in order.`,
              `Did the tamales burn? No. The family ate every last one.`,
              `The events are out of order. They made the tamales first. The family ate them last.`],
            why: `The big parts are these. Paz and Abuela fill the husks. They steam the tamales. Then the family eats them. That sentence tells all of them, in order.` },
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
              `Then find the big part of the story that the summary does not tell.`,
              `Watch out. Some choices tell an event the summary already tells. That event is not missing.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `A Seagull Wants a Fry`,
          paragraphs: [
            `On a windy Sunday, Lev and Dad walked to the end of the long pier. Dad bought a paper cone of hot, salty fries to share. They sat on a bench and watched the fishing boats. Suddenly, a big gray seagull swooped down from the sky. The bird grabbed a fry right out of Lev's hand! Then it flew to a post and gulped the fry down. Lev and Dad laughed so hard that Dad started to snort. They finished the rest of the fries inside the car.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Main idea',
            q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
            choices: [
              `Lev and Dad share fries, and a seagull grabs one.`,
              `Lev and Dad sit on a bench and watch the fishing boats.`,
              `Dad laughs so hard at the seagull that he snorts.`,
              `Lev and Dad catch a big fish at the end of the pier.`],
            kinds: [null, 'onedetail', 'onedetail', 'noclue'],
            notes: [null,
              `Yes, they watch the boats. But that is just one small part, not the main idea.`,
              `Yes, Dad snorts. But that is just one small part, not the main idea.`,
              `Did Lev and Dad catch a fish? No. The paragraph does not say that.`],
            why: `Every sentence is about Lev and Dad's fries and the hungry seagull. That is the main idea.` },
          { id: 'P2', type: 'mc', skill: 'Summary',
            q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
            choices: [
              `Lev and Dad got fries on the pier, a seagull grabbed one, and they ate the rest in the car.`,
              `Lev and Dad sat on a bench at the end of the long pier and watched the fishing boats.`,
              `Lev and Dad got fries on the pier, a seagull grabbed one, and Dad chased the bird down the pier.`,
              `Lev and Dad ate fries in the car, and then a seagull grabbed one on the pier.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is just one part. A summary tells all the big parts, in order.`,
              `Did Dad chase the bird? No. Lev and Dad just laughed.`,
              `The events are out of order. The seagull grabbed a fry on the pier first. They ate in the car last.`],
            why: `The big parts are these. Lev and Dad get fries. A seagull grabs one. Then they eat the rest in the car. That sentence tells all of them, in order.` }
        ]
      },
      turn: [
        {
          story: {
            title: `First Flight to Grandpa's`,
            paragraphs: [
              `Hana had never been on a plane. In the morning, she and Mom rolled their bags into the airport. A man checked their tickets and took the big bag. Then they walked down a long hall and onto the plane. Hana buckled her seat belt and held on tight. The plane roared down the runway and rose into the sky. Hana pressed her nose to the window and saw tiny cars. Three hours later, Grandpa met them with a big hug.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Hana takes her first plane trip to visit Grandpa.`,
                `Hana presses her nose to the window and sees tiny cars.`,
                `Hana buckles her seat belt and holds on tight.`,
                `Hana and Mom fly to see Grandpa every summer.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `Yes, Hana sees tiny cars. But that is just one small part, not the main idea.`,
                `Yes, Hana buckles her belt. But that is just one small part, not the main idea.`,
                `Too far. This is Hana's first time on a plane.`],
              why: `Every sentence is about Hana's first plane trip to see Grandpa. That is the main idea.` },
            { id: 'Q02', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
              choices: [
                `Hana and Mom went to the airport, flew on a plane, and met Grandpa.`,
                `A man at the airport checked their tickets and took the big bag.`,
                `Hana and Mom went to the airport, but they missed the plane and rode a bus to Grandpa's.`,
                `Hana and Mom met Grandpa, and then they flew on a plane to see him.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is just one part. A summary tells all the big parts, in order.`,
                `Did they miss the plane? No. The plane took them up into the sky.`,
                `The events are out of order. They flew on the plane first. They met Grandpa last.`],
              why: `The big parts are these. Hana and Mom go to the airport. They fly on the plane. Then they meet Grandpa. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `The Biggest Watermelon on the Table`,
            paragraphs: [
              `On a hot day, Arlo and Grandpa walked to the fruit stand. They picked the biggest watermelon on the table. Grandpa grunted as he set it in Arlo's red wagon. At home, the melon was too big for the fridge! Arlo thought of a plan. He filled the bathtub with cold water and ice. The melon floated in the tub all day. That night, the family ate cold, sweet slices on the porch.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Arlo's family gets a watermelon too big for the fridge, but they still eat it cold.`,
                `Grandpa sets the watermelon in Arlo's red wagon.`,
                `Arlo and Grandpa walk to the fruit stand on a hot day.`,
                `The family has a big watermelon party for the whole street.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `Yes, the melon goes in the wagon. But that is just one small part, not the main idea.`,
                `That is how the paragraph starts. It is just one part, not the main idea.`,
                `Too far. The family eats slices on the porch. But the paragraph does not say the whole street comes.`],
              why: `Every sentence is about the big watermelon and the family that wants to eat it cold. That is the main idea.` },
            { id: 'Q04', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “The Biggest Watermelon on the Table”`,
              excerpt: [
                `Arlo and Grandpa got a big melon at the fruit stand.`,
                `At home, it was too big for the fridge.`,
                `That night, they all ate the cold melon on the porch.`],
              q: `Read this summary of the paragraph. Which KEY event is MISSING from the summary? Find the big part it does not tell.`,
              choices: [
                `Arlo put the watermelon in a tub of cold water and ice.`,
                `The watermelon was too big for the fridge.`,
                `Grandpa grunted as he set the melon in the wagon.`,
                `Grandpa cut the watermelon into small pieces so it would fit.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already says the melon was too big. Look for the big part it does not tell.`,
                `Grandpa grunted. That is a small detail, not a key event.`,
                `Did Grandpa cut the melon? No. The paragraph does not say that.`],
              why: `Arlo filled the tub with cold water and ice. That is how the melon got cold. Without it, the summary does not make sense.` }
          ]
        },
        {
          story: {
            title: `Little Lamps for Diwali`,
            paragraphs: [
              `On the first night of Diwali, Jai helped get the house ready. First, he and Mom swept the front step clean. Then they made a rangoli, a design of bright powder, on the step. Jai poured a ring of orange around a pink powder flower. Next, Dad gave him small clay lamps for each window. When the sky got dark, they lit all the lamps. Jai's baby brother clapped at the tiny flames. Then they took plates of sweets to the neighbors.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Jai and his family get ready for Diwali and celebrate.`,
                `Jai's baby brother claps at the tiny flames.`,
                `Jai pours a ring of orange around a pink powder flower.`,
                `Jai's family invites all the neighbors over for a party.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `Yes, the baby claps. But that is just one small part, not the main idea.`,
                `Yes, Jai pours the orange. But that is just one small part, not the main idea.`,
                `Too far. The family takes sweets to the neighbors. But the paragraph does not say they have a party.`],
              why: `Every sentence is about how Jai's family gets ready for Diwali and celebrates. That is the main idea.` },
            { id: 'Q06', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
              choices: [
                `Jai's family swept the step, made a rangoli, lit lamps, and shared sweets.`,
                `Dad gave Jai small clay lamps to set in each window of the house.`,
                `Jai's family swept the step, made a rangoli, and watched a big parade downtown.`,
                `Jai's family lit the lamps and shared sweets, and then they swept the step.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is just one part. A summary tells all the big parts, in order.`,
                `Did they watch a parade? No. The paragraph does not say that.`,
                `The events are out of order. They swept the step first. They shared sweets last.`],
              why: `The big parts are these. The family sweeps the step and makes a rangoli. They light the lamps. Then they share sweets. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `A Windy Day for Nonna's Cake`,
            paragraphs: [
              `It was windy at the park for Nonna's birthday party. Her cake had pink frosting roses on top. Mom lit the candles, but a gust of wind blew them out. Mom lit them again, and the wind blew them out again! Then Dom had an idea. He and his cousins stood around the cake in a tight circle. Their backs blocked the wind, and the candles stayed lit. Nonna made a wish and blew them out in one big puff.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Nonna's candles keep blowing out, but at last she makes her wish.`,
                `Mom lights the candles on Nonna's cake.`,
                `Nonna blows out the candles in one big puff.`,
                `The wind blows Nonna's whole cake off the table.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `That is just one step. It is not the main idea.`,
                `That is how the paragraph ends. It is just one part, not the main idea.`,
                `Too far. The wind blows out the candles. But the paragraph does not say the cake falls.`],
              why: `Every sentence is about Nonna's birthday candles on a windy day. That is the main idea.` },
            { id: 'Q08', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “A Windy Day for Nonna's Cake”`,
              excerpt: [
                `Nonna had her birthday party at the park.`,
                `The wind kept blowing out her candles.`,
                `At last, Nonna made a wish and blew them out.`],
              q: `Read this summary of the paragraph. Which KEY event is MISSING from the summary? Find the big part it does not tell.`,
              choices: [
                `Dom and his cousins stood in a circle to block the wind.`,
                `The wind kept blowing out the candles.`,
                `Nonna's cake had pink frosting roses on top.`,
                `Mom carried the cake into the car to light the candles.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already says the wind blew out the candles. Look for the big part it does not tell.`,
                `The cake had pink roses. That is a small detail, not a key event.`,
                `Did Mom take the cake into the car? No. The paragraph does not say that.`],
              why: `Dom and his cousins stood around the cake in a circle. That is how the candles stayed lit. Without it, the summary does not make sense.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 2 ════════ */
    {
      teach: {
        story: {
          title: `Seven Bagels in a Paper Bag`,
          paragraphs: [
            `On Sunday morning, Zeke walked to the bagel shop by himself for the first time. Mom gave him ten dollars and told him what to get. At the shop, a long line stretched all the way to the door. The shop smelled like warm bread and onions. When it was his turn, Zeke asked for six plain bagels and one with seeds. The man handed him a warm paper bag and three coins. Zeke tucked the coins deep in his pocket. Then he carried the bag home, and the family ate breakfast together.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Mostly about',
            lines: [
              `A paragraph is one part of a story. Today, each story is just one paragraph.`,
              `Some questions ask what the paragraph is mostly about.`,
              `Mostly about means what the WHOLE paragraph tells about. That is the main idea.`,
              `A detail is one small part. It tells just one thing.`,
              `Think about a birthday party. The main idea is, everyone had fun at the party. A detail is, the cake had blue frosting.`,
              `A summary tells the most important parts. It tells them in order, in a few sentences.`,
              `A summary leaves out the small details.`,
              `A key event is a big part of the story. If you leave it out, the story does not make sense.`,
              `Some questions ask which key event is MISSING. Missing means left out.`,
              `Summarizes means tells a summary. The BEST summary tells all the key events, in order.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the main idea',
            lines: [
              `Here is a question. What is the paragraph mostly about?`,
              `Step 1. I will read the WHOLE paragraph, not just one sentence.`,
              `Step 2. I ask, what do all the sentences tell about?`,
              `Zeke walks to the shop. He waits in line. He asks for the bagels and gets his coins back.`,
              `Then he carries the bag home for breakfast.`,
              `All of those sentences tell about Zeke's trip to get bagels by himself.`,
              `So the paragraph is mostly about Zeke buying bagels on his own. That is the main idea.`,
              `Watch out. The shop smelled like warm bread and onions.`,
              `That sentence is true. But it tells just one small part. It is a detail, not the main idea.`
            ],
            lit: [
              `The shop smelled like warm bread and onions.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `A summary leaves out small details. Which sentence from the paragraph is just one small detail?`,
            choices: [
              `Zeke tucked the coins deep in his pocket.`,
              `On Sunday morning, Zeke walked to the bagel shop by himself for the first time.`,
              `When it was his turn, Zeke asked for six plain bagels and one with seeds.`,
              `Then he carried the bag home, and the family ate breakfast together.`],
            kinds: [null, 'toofar', 'toofar', 'toofar'],
            notes: [null,
              `Zeke walks to the shop by himself. That is a big part, not a small detail.`,
              `Zeke asks for the bagels. That is a big part, not a small detail.`,
              `Zeke takes the bagels home. That is a big part, not a small detail.`],
            why: `Zeke put the coins in his pocket. The story still makes sense without it. So it is just one small detail.` },
          { kind: 'step', id: 'S2', type: 'mc',
            q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
            choices: [
              `Zeke walked to the bagel shop alone, bought the bagels, and carried them home for breakfast.`,
              `Zeke waited in a long line that went all the way to the door.`,
              `Zeke walked to the bagel shop alone, but it had no bagels left, so he went home.`,
              `Zeke carried the bagels home for breakfast, and then he walked to the shop to buy them.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is just one part. A summary tells all the big parts, in order.`,
              `Did the shop run out of bagels? No. Zeke got seven bagels.`,
              `The events are out of order. Zeke bought the bagels first. The family ate them last.`],
            why: `The big parts are these. Zeke walks to the shop alone. He buys the bagels. Then he takes them home for breakfast. That sentence tells all of them, in order.` },
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
              `Then find the big part of the story that the summary does not tell.`,
              `Watch out. Some choices tell an event the summary already tells. That event is not missing.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Lettuce for the Lion`,
          paragraphs: [
            `On Lunar New Year, Wen and Dad went downtown to see the lion dance. Loud drums and shiny cymbals filled the busy street. Then a red and gold lion came dancing down the middle of the block. Two people inside the costume made it jump and shake its head. The lion stopped at each shop and ate a head of lettuce by the door. Then it tossed the leaves to the crowd for good luck. Wen caught a leaf and held it up high. All the way home, Wen pretended that she was the lion.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Main idea',
            q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
            choices: [
              `Wen and Dad watch a lion dance for Lunar New Year.`,
              `Two people inside the costume make the lion jump.`,
              `Loud drums and shiny cymbals fill the busy street.`,
              `Wen gets to dance inside the lion costume.`],
            kinds: [null, 'onedetail', 'onedetail', 'toofar'],
            notes: [null,
              `Yes, two people are inside the lion. But that is just one small part, not the main idea.`,
              `Yes, the drums are loud. But that is just one small part, not the main idea.`,
              `Too far. Wen pretends to be the lion. But she does not dance inside the costume.`],
            why: `Every sentence is about the lion dance on Lunar New Year. That is the main idea.` },
          { id: 'P2', type: 'mc', skill: 'Summary',
            q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
            choices: [
              `Wen and Dad watched the lion dance, the lion tossed lettuce, and Wen caught a leaf.`,
              `Two people inside the red and gold costume made the lion jump and shake its head.`,
              `Wen and Dad watched the lion dance, but rain made the lion go home early.`,
              `Wen caught a leaf of lettuce, and then she and Dad went downtown to see the lion dance.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is just one part. A summary tells all the big parts, in order.`,
              `Did rain stop the lion? No. The paragraph does not say that.`,
              `The events are out of order. They went downtown first. Wen caught a leaf later.`],
            why: `The big parts are these. Wen and Dad watch the lion dance. The lion tosses lettuce. Then Wen catches a leaf. That sentence tells all of them, in order.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Lights Off for Gran`,
            paragraphs: [
              `Gran was turning seventy, and Bram's family planned a surprise party. All week, Bram kept the secret. On the big day, his cousins hung blue streamers in the living room. When Gran's car pulled up, they all hid behind the couch. Bram turned off the lights and held his breath. Gran walked in, and they all jumped up and yelled surprise. Gran laughed so hard that she had to sit down.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Bram's family throws a big surprise party for Gran.`,
                `Bram's cousins hang blue streamers in the living room.`,
                `Bram turns off the lights and holds his breath.`,
                `Bram's family takes Gran out to eat for her birthday.`],
              kinds: [null, 'onedetail', 'onedetail', 'noclue'],
              notes: [null,
                `Yes, the cousins hang streamers. But that is just one small part, not the main idea.`,
                `Yes, Bram turns off the lights. But that is just one small part, not the main idea.`,
                `Did they take Gran out to eat? No. The paragraph does not say that.`],
              why: `Every sentence is about the surprise party for Gran. That is the main idea.` },
            { id: 'Q02', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
              choices: [
                `Bram's family planned a party, hid when Gran came, and yelled surprise.`,
                `All week long, Bram kept the party a secret from Gran.`,
                `Bram's family planned a party, but Gran found out about the surprise before the party.`,
                `Bram's family yelled surprise, and then they all hid behind the couch.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is just one part. A summary tells all the big parts, in order.`,
                `Did Gran find out? No. Bram kept the secret.`,
                `The events are out of order. They hid first. They yelled surprise last.`],
              why: `The big parts are these. The family plans a party. They hide when Gran comes. Then they yell surprise. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `Round and Round in a Green Canoe`,
            paragraphs: [
              `Quincy and Uncle Ted rented a green canoe at the lake. At first, they did not paddle at the same time. The canoe spun around in a slow circle. Quincy got dizzy and started to giggle. Then Uncle Ted said they should count and paddle as a team. On each count, they dipped their paddles at the same time. Now the canoe went straight across the lake to a small island. They ate lunch on a flat, warm rock.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Quincy and Uncle Ted's canoe spins at first, but at last they get across the lake.`,
                `Quincy and Uncle Ted rent a green canoe.`,
                `Quincy and Uncle Ted eat lunch on a flat, warm rock.`,
                `Quincy and Uncle Ted race other canoes on the lake.`],
              kinds: [null, 'onedetail', 'onedetail', 'noclue'],
              notes: [null,
                `That is how the paragraph starts. It is just one part, not the main idea.`,
                `That is how the paragraph ends. It is just one part, not the main idea.`,
                `Did they race other canoes? No. The paragraph does not say that.`],
              why: `Every sentence is about Quincy and Uncle Ted's canoe trip. That is the main idea.` },
            { id: 'Q04', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “Round and Round in a Green Canoe”`,
              excerpt: [
                `Quincy and Uncle Ted took a canoe out on the lake.`,
                `At first, the canoe just spun in a circle.`,
                `At last, they got to a small island and ate lunch.`],
              q: `Read this summary of the paragraph. Which KEY event is MISSING from the summary? Find the big part it does not tell.`,
              choices: [
                `Quincy and Uncle Ted counted and paddled at the same time.`,
                `The canoe spun around in a slow circle.`,
                `Quincy got dizzy and started to giggle.`,
                `A man in a motorboat pulled the canoe to the island.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already says the canoe spun around. Look for the big part it does not tell.`,
                `Quincy got dizzy. That is a small detail, not a key event.`,
                `Did a motorboat pull them? No. The paragraph does not say that.`],
              why: `They counted and paddled as a team. That is how the canoe went straight. Without it, we do not know how they got to the island.` }
          ]
        },
        {
          story: {
            title: `Grandpa's Friday Chili`,
            paragraphs: [
              `On Friday, Grandpa made his chili, and Felix got to help. First, Felix chopped two onions on the cutting board. The onions made him cry. Grandpa gave him a tissue. Next, they cooked the meat and added beans. Felix stirred the pot as Grandpa shook in the spice. The kitchen smelled so good that the dog sat by the stove. At dinner, the whole family came back for more.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Felix helps Grandpa cook a big pot of chili for dinner.`,
                `Felix cries when he chops the onions.`,
                `The dog sits by the stove because it smells so good.`,
                `Felix makes the whole pot of chili by himself.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `Yes, Felix cries from the onions. But that is just one small part, not the main idea.`,
                `Yes, the dog sits by the stove. But that is just one small part, not the main idea.`,
                `Too far. Felix helps, but Grandpa cooks with him.`],
              why: `Every sentence is about Felix helping Grandpa make chili. That is the main idea.` },
            { id: 'Q06', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
              choices: [
                `Felix chopped onions, helped Grandpa cook the chili, and everyone came back for more.`,
                `Felix stirred the big pot as Grandpa shook in the spice.`,
                `Felix chopped onions and helped Grandpa cook the chili, but it was too spicy for anyone to eat.`,
                `Everyone came back for more, and then Felix chopped the onions for the chili.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is just one part. A summary tells all the big parts, in order.`,
                `Was the chili too spicy? No. They all came back for more.`,
                `The events are out of order. Felix chopped the onions first. They ate dinner last.`],
              why: `The big parts are these. Felix chops the onions. He and Grandpa cook the chili. Then they all eat and want more. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `A Lot Packed with Cars`,
            paragraphs: [
              `Ty and Dad drove to the giant mall to buy Ty new sneakers. When they came outside, the parking lot was packed with cars. Dad could not remember where he had parked. They walked past car after car, but the cars all looked alike. Ty's tired feet started to hurt. Then Ty had a clever idea. He asked Dad to press the button on the car key. Far away, their little car beeped and flashed its lights! They followed the beeping sound and drove home with the new sneakers.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Ty and Dad lose their car at the mall, but they find it.`,
                `Ty and Dad buy new sneakers at the mall.`,
                `All the cars in the big lot look alike.`,
                `Dad forgets where he parks the car every time he drives somewhere.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `That is how the paragraph starts. It is just one part, not the main idea.`,
                `Yes, the cars look alike. But that is just one small part, not the main idea.`,
                `Too far. Dad forgets one time, at the mall. The paragraph does not say he always forgets.`],
              why: `Every sentence is about Ty and Dad's lost car. That is the main idea.` },
            { id: 'Q08', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “A Lot Packed with Cars”`,
              excerpt: [
                `Ty and Dad went to the mall to buy Ty new sneakers.`,
                `When they came out, they could not find their car.`,
                `At last, they found the car and drove home.`],
              q: `Read this summary of the paragraph. Which KEY event is MISSING from the summary? Find the big part it does not tell.`,
              choices: [
                `Dad pressed the key, and the car beeped and flashed its lights.`,
                `They could not find their car in the parking lot.`,
                `Ty's tired feet started to hurt.`,
                `A guard in a little cart drove them all around the lot to look.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already says they could not find the car. Look for the big part it does not tell.`,
                `Ty's feet hurt. That is a small detail, not a key event.`,
                `Did a guard drive them around? No. The paragraph does not say that.`],
              why: `Dad pressed the button on the key, and the car beeped. That is how they found it. Without it, the summary does not make sense.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 3 ════════ */
    {
      teach: {
        story: {
          title: `Waffles on a Birthday Tray`,
          paragraphs: [
            `On Mom's birthday, Mabel and Dad got up early to make her breakfast. Mabel mixed eggs, milk, and flour into a thick batter. A puff of flour landed on her nose. Dad poured the batter into the hot waffle iron. The first waffle came out black and smoky, so they tried again. The next waffles were golden and crisp. Mabel's cat watched from the top of the fridge. Then they took the waffles to Mom on a tray and sang to her. Mom grinned and ate every bite.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Mostly about',
            lines: [
              `A paragraph is one part of a story. Today, each story is just one paragraph.`,
              `Some questions ask what the paragraph is mostly about.`,
              `Mostly about means what the WHOLE paragraph tells about. That is the main idea.`,
              `A detail is one small part. It tells just one thing.`,
              `Think about a day at the park. The main idea is, we had fun at the park. A detail is, a squirrel ran up a tree.`,
              `A summary tells the most important parts. It tells them in order, in a few sentences.`,
              `A summary leaves out the small details.`,
              `A key event is a big part of the story. If you leave it out, the story does not make sense.`,
              `Some questions ask which key event is MISSING. Missing means left out.`,
              `Summarizes means tells a summary. The BEST summary tells all the key events, in order.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the main idea',
            lines: [
              `Here is a question. What is the paragraph mostly about?`,
              `Step 1. I will read the WHOLE paragraph, not just one sentence.`,
              `Step 2. I ask, what do all the sentences tell about?`,
              `Mabel mixes the batter. Dad makes the waffles. When one burns, they try again.`,
              `Then they take the tray to Mom and sing.`,
              `All of those sentences tell how Mabel and Dad make a birthday breakfast.`,
              `So the paragraph is mostly about a birthday breakfast for Mom. That is the main idea.`,
              `Watch out. Mabel's cat watched from the top of the fridge.`,
              `That sentence is true. But it tells just one small part. It is a detail, not the main idea.`
            ],
            lit: [
              `Mabel's cat watched from the top of the fridge.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `A summary leaves out small details. Which sentence from the paragraph is just one small detail?`,
            choices: [
              `A puff of flour landed on her nose.`,
              `On Mom's birthday, Mabel and Dad got up early to make her breakfast.`,
              `Dad poured the batter into the hot waffle iron.`,
              `Then they took the waffles to Mom on a tray and sang to her.`],
            kinds: [null, 'toofar', 'toofar', 'toofar'],
            notes: [null,
              `Mabel and Dad get up to make breakfast. That is a big part, not a small detail.`,
              `Dad makes the waffles. That is a big part, not a small detail.`,
              `They take the waffles to Mom. That is a big part, not a small detail.`],
            why: `Flour landed on Mabel's nose. The story still makes sense without it. So it is just one small detail.` },
          { kind: 'step', id: 'S2', type: 'mc',
            q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
            choices: [
              `Mabel and Dad made waffles, tried again when one burned, and took them to Mom on a tray.`,
              `Mabel mixed eggs, milk, and flour into a thick batter.`,
              `Mabel and Dad made waffles, but every one burned, so they all went out to eat.`,
              `Mabel and Dad took the waffles to Mom, and then they mixed the batter and made them.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is just one part. A summary tells all the big parts, in order.`,
              `Did every waffle burn? No. The next waffles were golden.`,
              `The events are out of order. They made the waffles first. They took them to Mom last.`],
            why: `The big parts are these. Mabel and Dad make waffles. One burns, so they try again. Then they take the waffles to Mom. That sentence tells all of them, in order.` },
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
              `Then find the big part of the story that the summary does not tell.`,
              `Watch out. Some choices tell an event the summary already tells. That event is not missing.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Up the Mountain in a Little Car`,
          paragraphs: [
            `On a family trip, Skye rode a gondola up a tall mountain. A gondola is a little car that hangs from a thick wire. At first, Skye shut her eyes and held Dad's arm tight. Then Dad pointed to a deer in a field far below. Skye peeked, and then she could not stop looking. At the top, she could see a blue lake and three tiny towns. On the ride down, Skye asked to sit by the window.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Main idea',
            q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
            choices: [
              `Skye is scared on the gondola at first, but then she loves the ride.`,
              `A gondola is a little car that hangs from a wire.`,
              `Skye sees a blue lake and three tiny towns from the top of the mountain.`,
              `Skye and Dad climb all the way up the mountain on foot.`],
            kinds: [null, 'onedetail', 'onedetail', 'noclue'],
            notes: [null,
              `Yes, the paragraph tells what a gondola is. But that is just one small part, not the main idea.`,
              `Yes, Skye sees a lake and towns. But that is just one small part, not the main idea.`,
              `Did they climb on foot? No. They rode the gondola.`],
            why: `Every sentence is about Skye's gondola ride and how she feels. That is the main idea.` },
          { id: 'P2', type: 'mc', skill: 'Summary',
            q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
            choices: [
              `Skye was scared on the gondola, but Dad showed her a deer, and she loved the view.`,
              `At the start of the ride, Skye shut her eyes tight and held on to Dad's arm.`,
              `Skye was scared on the gondola, so she and Dad got off and walked back down.`,
              `Skye loved the view from the top of the mountain, and then she shut her eyes and held Dad's arm.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is just one part. A summary tells all the big parts, in order.`,
              `Did they get off and walk? No. They rode up and down.`,
              `The events are out of order. Skye was scared first. She loved the view last.`],
            why: `The big parts are these. Skye is scared. Dad shows her a deer. Then she loves the view. That sentence tells all of them, in order.` }
        ]
      },
      turn: [
        {
          story: {
            title: `One Pan of Rice and Beans`,
            paragraphs: [
              `Sage's building was having a potluck dinner downstairs. Each family had to bring one dish to share. Sage and her mom made a big pan of rice and beans. Sage was worried that no one would want to try it. At the dinner, the long tables were full of food. Mr. Gold tried Sage's rice first and went back for more. By the end of the night, her pan was scraped clean.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Sage brings a dish to the potluck, and people love it.`,
                `The long tables at the dinner are full of food.`,
                `Sage worries that no one at the dinner will want to try her rice.`,
                `Mr. Gold asks Sage to cook his dinner from now on.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `Yes, the tables are full of food. But that is just one small part, not the main idea.`,
                `Yes, Sage worries. But that is just one part, not the main idea.`,
                `Too far. Mr. Gold likes the rice. But the paragraph does not say he asks Sage to cook for him.`],
              why: `Every sentence is about Sage's rice and beans at the potluck. That is the main idea.` },
            { id: 'Q02', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
              choices: [
                `Sage made rice and beans for the potluck, and even though she worried, people ate it all.`,
                `Each family in Sage's building had to bring one dish to the potluck dinner.`,
                `Sage made rice and beans for the potluck, but she tripped and dropped the whole pan on the way.`,
                `People ate all of Sage's rice and beans, and then she and Mom made it for the potluck.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is just one part. A summary tells all the big parts, in order.`,
                `Did Sage drop the pan? No. Her pan was scraped clean.`,
                `The events are out of order. Sage and Mom made the dish first. People ate it last.`],
              why: `The big parts are these. Sage and Mom make rice and beans. Sage worries. Then people eat every bite. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `Sticks That Would Not Stand`,
            paragraphs: [
              `It was so hot that the sidewalk burned Della's bare feet. So Della decided to make orange ice pops. She poured orange juice into six small paper cups. She put a wooden stick in each cup, but the sticks fell over. Then Della had an idea. She put foil over each cup and poked a stick through the middle. Now the sticks stood up straight. She set the cups in the freezer all afternoon. After supper, she shared the cold ice pops with her friends.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Della makes orange ice pops to cool off on a hot day.`,
                `Della pours orange juice into six small paper cups.`,
                `Della shares the ice pops with her friends after supper.`,
                `Della teaches her friends how to make ice pops.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `That is just one step at the start. It is not the main idea.`,
                `That is how the paragraph ends. It is just one part, not the main idea.`,
                `Too far. Della shares the ice pops. But the paragraph does not say she teaches her friends.`],
              why: `Every sentence is about Della making ice pops on a hot day. That is the main idea.` },
            { id: 'Q04', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “Sticks That Would Not Stand”`,
              excerpt: [
                `On a hot day, Della put juice in cups to make ice pops, but the sticks fell over.`,
                `She put the cups in the freezer all afternoon.`,
                `Then Della shared the pops with her friends.`],
              q: `Read this summary of the paragraph. Which KEY event is MISSING from the summary? Find the big part it does not tell.`,
              choices: [
                `Della put foil over the cups and poked the sticks through.`,
                `The wooden sticks fell over in the juice.`,
                `The hot sidewalk burned Della's bare feet.`,
                `Mom went to the store and bought a big box of ice pops.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already says the sticks fell over. Look for the big part it does not tell.`,
                `The sidewalk was hot. That is a small detail, not a key event.`,
                `Did Mom buy ice pops? No. Della made them.`],
              why: `Della put foil on the cups and poked the sticks through. That is how the sticks stood up. Without it, the summary does not make sense.` }
          ]
        },
        {
          story: {
            title: `Too Many Toy Cars`,
            paragraphs: [
              `Cole was going to visit his cousins for a whole week. The night before, he packed his own suitcase. He stuffed in shirts, pants, six comic books, and his whole box of toy cars. Then the suitcase would not zip shut! Cole sat on the lid and bounced, but the zipper would not move. Dad helped him take out the box of cars and most of the comics. At last, the zipper slid all the way around. Cole put one small red car in his pocket for the trip.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Cole packs too much for his trip, but at last his suitcase zips shut.`,
                `Cole sits on the lid of the suitcase and bounces.`,
                `Cole puts one small red car in his pocket.`,
                `Cole wants to bring every toy he owns to his cousins.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `Yes, Cole sits on the lid. But that is just one small part, not the main idea.`,
                `Yes, Cole keeps one car. But that is just one small part, not the main idea.`,
                `Too far. Cole packs his cars and comics, not every toy he owns.`],
              why: `Every sentence is about Cole's suitcase being too full. That is the main idea.` },
            { id: 'Q06', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
              choices: [
                `Cole packed too much, the suitcase would not zip shut, and Dad helped him take things out.`,
                `Cole stuffed in shirts, pants, six comic books, and his whole box of toy cars.`,
                `Cole packed too much, so Dad went to the store and bought him a bigger suitcase for the trip.`,
                `Dad helped Cole take things out, and then Cole packed his suitcase much too full.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is just one part. A summary tells all the big parts, in order.`,
                `Did Dad buy a new suitcase? No. They took things out.`,
                `The events are out of order. Cole packed too much first. Dad helped him last.`],
              why: `The big parts are these. Cole packs too much. The suitcase will not zip shut. Then Dad helps him take things out. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `A Rainy Night for S'mores`,
            paragraphs: [
              `On Friday night, Reese and Dad planned to make s'mores in the yard. They piled sticks in the fire pit and got out the marshmallows. Then dark clouds rolled in, and rain poured down. Reese and Dad ran inside, wet and sad. Rain dripped from Dad's glasses. Dad thought of a new plan. They put crackers, chocolate, and marshmallows on a pan in the hot oven. Soon the marshmallows puffed up big and gold. Reese and Dad ate warm s'mores at the kitchen table.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Rain stops the fire pit plan, but Reese and Dad still make s'mores.`,
                `Reese and Dad pile sticks in the fire pit.`,
                `Reese and Dad run inside, wet and sad.`,
                `The storm knocks down the fence in the yard.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `That is just one step at the start. It is not the main idea.`,
                `Yes, they run inside. But that is just one part, not the main idea.`,
                `Too far. It rains hard. But the paragraph does not say the fence falls.`],
              why: `Every sentence is about Reese and Dad's plan for s'mores on a rainy night. That is the main idea.` },
            { id: 'Q08', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “A Rainy Night for S'mores”`,
              excerpt: [
                `Reese and Dad got ready to make s'mores in the fire pit.`,
                `Then rain poured down, and they ran inside.`,
                `At last, they ate warm s'mores at the kitchen table.`],
              q: `Read this summary of the paragraph. Which KEY event is MISSING from the summary? Find the big part it does not tell.`,
              choices: [
                `Reese and Dad made the s'mores in the oven.`,
                `Rain poured down, and Reese and Dad ran inside.`,
                `Rain dripped from Dad's glasses.`,
                `A neighbor lent them a tent to cover the fire pit.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already says the rain came and they ran inside. Look for the big part it does not tell.`,
                `Dad's glasses got wet. That is a small detail, not a key event.`,
                `Did a neighbor lend them a tent? No. The paragraph does not say that.`],
              why: `Dad had a new plan. They made the s'mores in the oven. Without it, the summary does not make sense.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 4 ════════ */
    {
      teach: {
        story: {
          title: `Green Dress on Eid Morning`,
          paragraphs: [
            `On the morning of Eid, Noor woke up before the sun. She put on her new green dress and shiny shoes. Then her family drove to the park for the Eid prayer. Hundreds of people stood in long lines on the grass. After the prayer, they drove to Grandma's house for a big breakfast. Grandma served sweet dates, a soft brown fruit, and warm rice pudding. Noor's uncles gave each child a few coins. That night, Noor fell asleep on the couch with a full belly.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Mostly about',
            lines: [
              `A paragraph is one part of a story. Today, each story is just one paragraph.`,
              `Some questions ask what the paragraph is mostly about.`,
              `Mostly about means what the WHOLE paragraph tells about. That is the main idea.`,
              `A detail is one small part. It tells just one thing.`,
              `Think about a rainy day at home. The main idea is, we played games inside all day. A detail is, my sock had a hole in it.`,
              `A summary tells the most important parts. It tells them in order, in a few sentences.`,
              `A summary leaves out the small details.`,
              `A key event is a big part of the story. If you leave it out, the story does not make sense.`,
              `Some questions ask which key event is MISSING. Missing means left out.`,
              `Summarizes means tells a summary. The BEST summary tells all the key events, in order.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the main idea',
            lines: [
              `Here is a question. What is the paragraph mostly about?`,
              `Step 1. I will read the WHOLE paragraph, not just one sentence.`,
              `Step 2. I ask, what do all the sentences tell about?`,
              `Noor dresses up. Her family goes to the prayer. They eat at Grandma's house.`,
              `At night, Noor falls asleep on the couch.`,
              `All of those sentences tell how Noor spends Eid with her family.`,
              `So the paragraph is mostly about Noor's Eid day. That is the main idea.`,
              `Watch out. Hundreds of people stood in long lines on the grass.`,
              `That sentence is true. But it tells just one small part. It is a detail, not the main idea.`
            ],
            lit: [
              `Hundreds of people stood in long lines on the grass.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `A summary leaves out small details. Which sentence from the paragraph is just one small detail?`,
            choices: [
              `Grandma served sweet dates, a soft brown fruit, and warm rice pudding.`,
              `She put on her new green dress and shiny shoes.`,
              `Then her family drove to the park for the Eid prayer.`,
              `After the prayer, they drove to Grandma's house for a big breakfast.`],
            kinds: [null, 'toofar', 'toofar', 'toofar'],
            notes: [null,
              `Noor dresses up for Eid. That is a big part, not a small detail.`,
              `The family goes to the prayer. That is a big part, not a small detail.`,
              `They go to Grandma's house. That is a big part, not a small detail.`],
            why: `The paragraph tells what food Grandma made. The story still makes sense without it. So it is just one small detail.` },
          { kind: 'step', id: 'S2', type: 'mc',
            q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
            choices: [
              `Noor dressed up for Eid, went to the prayer, ate at Grandma's, and fell asleep that night.`,
              `Noor's uncles gave each child a few coins.`,
              `Noor dressed up for Eid, but it rained, so the family stayed home all day.`,
              `Noor ate breakfast at Grandma's house, and then she dressed up and went to the prayer.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is just one part. A summary tells all the big parts, in order.`,
              `Did it rain? No. The family went to the prayer in the park.`,
              `The events are out of order. Noor went to the prayer first. She ate at Grandma's later.`],
            why: `The big parts are these. Noor dresses up. Her family goes to the prayer. They eat at Grandma's. Then Noor falls asleep. That sentence tells all of them, in order.` },
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
              `Then find the big part of the story that the summary does not tell.`,
              `Watch out. Some choices tell an event the summary already tells. That event is not missing.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `The Roar Past the Last Bend`,
          paragraphs: [
            `Jack and his family hiked a long trail to see Rainbow Falls. After an hour, Jack's legs were tired, and he wanted to turn back. Then he heard a loud roar through the trees. Jack ran ahead around the last bend. A huge waterfall poured down over the rocks into a deep pool. Cold mist sprayed his hot face, and he laughed. They sat on a log and ate apples by the falls.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Main idea',
            q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
            choices: [
              `Jack's family hikes a long trail to see a big waterfall.`,
              `Cold mist from the falls sprays on Jack's hot face.`,
              `Jack's family sits on a log and eats apples by the falls.`,
              `Jack decides that he wants to hike to every waterfall in the world.`],
            kinds: [null, 'onedetail', 'onedetail', 'toofar'],
            notes: [null,
              `Yes, mist sprays Jack's face. But that is just one small part, not the main idea.`,
              `That is how the paragraph ends. It is just one part, not the main idea.`,
              `Too far. Jack likes this waterfall. But the paragraph does not say he wants to see every one.`],
            why: `Every sentence is about the family's hike to see the waterfall. That is the main idea.` },
          { id: 'P2', type: 'mc', skill: 'Summary',
            q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
            choices: [
              `Jack got tired on a long hike, but then he heard a roar and found a big waterfall.`,
              `A huge waterfall poured down over the rocks into a deep pool.`,
              `Jack got tired on a long hike, so his family turned back and went home.`,
              `Jack found a big waterfall, and then he got tired on the hike and wanted to turn back.`],
            kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
            notes: [null,
              `That is just one part. A summary tells all the big parts, in order.`,
              `Did the family turn back? No. They kept going.`,
              `The events are out of order. Jack got tired first. He found the waterfall last.`],
            why: `The big parts are these. Jack gets tired on the hike. He hears a roar. Then he finds the waterfall. That sentence tells all of them, in order.` }
        ]
      },
      turn: [
        {
          story: {
            title: `A Night on the Ninth Floor`,
            paragraphs: [
              `Lenny's family took a trip to the city. They stayed in a hotel for the first time. At the front desk, a woman gave Dad two key cards. Lenny pushed the button for the ninth floor. The room had two big beds and a view of the city. Lenny and his sister jumped on the beds until Mom said stop. Then they all swam in the warm pool. That night, Lenny fell asleep to the city lights.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Lenny's family stays in a hotel for the first time.`,
                `Lenny pushes the button for the ninth floor.`,
                `Lenny and his sister jump on the big beds.`,
                `Lenny wants to move into the hotel.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `Yes, Lenny pushes a button. But that is just one small part, not the main idea.`,
                `Yes, Lenny and his sister jump. But that is just one small part, not the main idea.`,
                `Too far. Lenny has fun. But the paragraph does not say he wants to stay there for good.`],
              why: `Every sentence is about Lenny's first night in a hotel. That is the main idea.` },
            { id: 'Q02', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
              choices: [
                `Lenny's family got their keys, went up to the room, swam in the pool, and slept.`,
                `At the front desk, a woman gave Dad two key cards for the room.`,
                `Lenny's family got their keys, but the room was too small, so they went home.`,
                `Lenny's family swam in the pool, and then they went to the front desk to get their keys.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is just one part. A summary tells all the big parts, in order.`,
                `Was the room too small? No. They stayed the night.`,
                `The events are out of order. They got the keys first. They swam later.`],
              why: `The big parts are these. The family gets the keys. They go up to the room. They swim. Then they sleep. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `Counting Lights from the Ferris Wheel`,
            paragraphs: [
              `At the carnival, Uma and her big brother rode the Ferris wheel. Before the ride, he bought her a bag of pink cotton candy. Their seat rose slowly into the night sky. Then, at the very top, the wheel stopped all of a sudden! Uma grabbed the bar as the seat rocked back and forth. Her brother pointed to the lights of their street far below. Uma counted the lights and forgot to be scared. Soon the wheel moved again and carried them down. Uma ran right back to the line to ride again.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Uma's brother helps her get through a scary Ferris wheel ride.`,
                `The seat rises slowly into the night sky.`,
                `Uma runs right back to the line to ride again.`,
                `Uma and her brother win a big prize at the carnival.`],
              kinds: [null, 'onedetail', 'onedetail', 'noclue'],
              notes: [null,
                `Yes, the seat rises. But that is just one small part, not the main idea.`,
                `That is how the paragraph ends. It is just one part, not the main idea.`,
                `Did they win a prize? No. The paragraph does not say that.`],
              why: `Every sentence is about Uma's Ferris wheel ride and how her brother helps her. That is the main idea.` },
            { id: 'Q04', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “Counting Lights from the Ferris Wheel”`,
              excerpt: [
                `Uma and her big brother rode the Ferris wheel.`,
                `He showed her the lights of their street, and Uma forgot to be scared.`,
                `Then the wheel took them down, and Uma got back in line.`],
              q: `Read this summary of the paragraph. Which KEY event is MISSING from the summary? Find the big part it does not tell.`,
              choices: [
                `The wheel stopped when their seat was at the very top.`,
                `Uma's brother pointed to the lights far below.`,
                `Uma's brother bought her pink cotton candy.`,
                `A worker climbed all the way up the wheel to help Uma get down.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already says her brother showed her the lights. Look for the big part it does not tell.`,
                `Her brother bought cotton candy. That is a small detail, not a key event.`,
                `Did a worker climb up? No. The paragraph does not say that.`],
              why: `The wheel stopped at the very top. That is why Uma was scared. Without it, the summary does not make sense.` }
          ]
        },
        {
          story: {
            title: `Butter from a Jar of Cream`,
            paragraphs: [
              `Cyrus and Mom made butter from a jar of cream. First, Mom poured thick cream into a jar and closed the lid tight. Then Cyrus shook the jar up and down, up and down. After a while, his arms felt as floppy as noodles. Mom took a turn, and then Cyrus shook it again. Suddenly, a yellow lump bumped against the glass. It was butter! They spread the fresh butter on warm toast and ate it all.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Cyrus and Mom make their own butter from cream.`,
                `Cyrus's arms feel as floppy as noodles.`,
                `Mom closes the lid of the jar tight.`,
                `Cyrus and Mom sell their butter at a big store.`],
              kinds: [null, 'onedetail', 'onedetail', 'noclue'],
              notes: [null,
                `Yes, Cyrus's arms get tired. But that is just one small part, not the main idea.`,
                `Yes, Mom closes the lid. But that is just one small part, not the main idea.`,
                `Did they sell the butter? No. They ate it.`],
              why: `Every sentence is about Cyrus and Mom making butter. That is the main idea.` },
            { id: 'Q06', type: 'mc', skill: 'Summary',
              q: `Which sentence BEST summarizes the paragraph? Look for all the big parts, in the right order.`,
              choices: [
                `Mom poured cream in a jar, they took turns shaking it, and it turned into butter for toast.`,
                `Cyrus shook the jar so long that his arms felt as floppy as noodles.`,
                `Mom poured cream in a jar, they took turns shaking it, and then the jar slipped and broke on the floor.`,
                `Cyrus and Mom ate butter on warm toast, and then they shook the jar of cream.`],
              kinds: [null, 'onedetail', 'noclue', 'wrongtime'],
              notes: [null,
                `That is just one part. A summary tells all the big parts, in order.`,
                `Did the jar break? No. The cream turned into butter.`,
                `The events are out of order. They shook the jar first. They ate the toast last.`],
              why: `The big parts are these. Mom pours the cream. They take turns shaking the jar. Then it turns into butter. That sentence tells all of them, in order.` }
          ]
        },
        {
          story: {
            title: `A Banner for the Big Day`,
            paragraphs: [
              `Mae's big sister was done with high school, so Mae made her a party banner. She painted big purple letters on a long strip of paper. But the letters were too big. The paper ran out before the last word! Mae threw down her brush and almost cried. Then Dad taped a new sheet of paper to the end. Mae painted the last word, and the banner was done. At the party, her sister saw the banner and gave Mae a long hug.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Main idea',
              q: `What is the paragraph mostly about? Think of the whole thing. Do not pick just one small part.`,
              choices: [
                `Mae makes a big banner for her sister's party.`,
                `Mae paints purple letters on a long strip of paper.`,
                `Mae's sister gives her a long hug.`,
                `Mae wants to paint signs for every party in town.`],
              kinds: [null, 'onedetail', 'onedetail', 'toofar'],
              notes: [null,
                `Yes, Mae uses purple paint. But that is just one small part, not the main idea.`,
                `That is how the paragraph ends. It is just one part, not the main idea.`,
                `Too far. Mae makes one banner for her sister, not signs for every party.`],
              why: `Every sentence is about Mae's banner for her sister. That is the main idea.` },
            { id: 'Q08', type: 'mc', skill: 'Summary',
              excerptLabel: `📝 A summary of “A Banner for the Big Day”`,
              excerpt: [
                `Mae painted a big banner for her sister's party.`,
                `The letters were too big, and the paper ran out.`,
                `At last, Mae painted the last word, and her sister hugged her.`],
              q: `Read this summary of the paragraph. Which KEY event is MISSING from the summary? Find the big part it does not tell.`,
              choices: [
                `Dad taped a new sheet of paper to the end.`,
                `The paper ran out before the last word.`,
                `Mae threw down her brush and almost cried.`,
                `Mae started over and painted much smaller letters.`],
              kinds: [null, 'insummary', 'onedetail', 'noclue'],
              notes: [null,
                `The summary already says the paper ran out. Look for the big part it does not tell.`,
                `Mae threw down her brush. That is a small detail, not a key event.`,
                `Did Mae start over? No. She finished on more paper.`],
              why: `Dad taped more paper to the end. That is how Mae had room for the last word. Without it, the summary does not make sense.` }
          ]
        }
      ]
    }
  ]
};
