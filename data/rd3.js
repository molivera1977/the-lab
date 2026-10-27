/* ═══════════════════════════════════════════════════════
   THE LAB · data/rd3.js — Reading for Meaning, Level 3, lesson RD3: Click the Sentences: Level 3
   Skill: Evidence selection (hot text, like the test's "Click on the TWO sentences").
   Level 3 (Marcos 10/22: "growth opportunities to kids at all levels"): grade 4–5 stories, a NEW teaching
   story and worked example in EVERY version (one method, new stories), 6-sentence click lists, 6+ sentence
   click paragraphs, and a CLOSE wrong sentence in every pick-2 item (about the idea, but not proof) with a note.
   Teaches: how to click (tap = yellow, tap again = take it back, then That's My Answer!), that TWO means BOTH
   sentences must prove the idea (one right + one wrong = no point), and to watch for the close sentence.
   Shape: tools/CONTENT-SPEC-READING.md (LEVEL 2, RD3 plan). Checked by tools/check-reading.js RD3.
   Every version: teach { story, flow: W1, W2, S1 (pick 1, para), S2 (pick 2, list of 6), W3 },
                  pre  { P1 pick 1 para · P2 pick 2 list (6) · P3 pick 2 para (6+) },
                  turn A { Q01 pick 1 para · Q02 pick 2 list (6) · Q03 pick 2 para (6+) · Q04 pick 2 list (6) },
                  turn B { Q05–Q08, the same four slots }. The two lists on one story never share a sentence.
   The right sentences are listed in `answers`; every other clickable sentence has a kind + a note.
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RD3 = {
  versions: [
    /* ───────── Version 1 ───────── */
    {
      teach: {
        story: {
          title: "The Night of the First Frost",
          paragraphs: [
            "On Thursday, the weather report said the first frost of the fall would come that night. Clara and her dad lived on the third floor of a brick building. Six pepper plants grew in pots on their tiny balcony. Each plant still had green peppers hanging from it.",
            "Clara knew that frost could turn pepper leaves black in a single night. All through dinner, she kept jumping up to check the thermometer outside the kitchen window. Dad made rice and beans with extra cheese on top. The red line in the glass tube dropped a little lower every hour.",
            "After dinner, Dad found two old bedsheets in the hall closet. Clara carried the sheets out to the balcony while Dad held the door open. She wanted to save every last pepper on the plants. Clara spread a sheet over the pots and tucked the edges under each one so the wind could not lift it. Then she checked every pot a second time to make sure no leaves were poking out. A strong wind rattled the railing, and down on the street a car horn honked.",
            "In the morning, the grass in the courtyard below was white and stiff. Ice covered the windshield of every car parked on the street. Clara ran out to the balcony in her slippers and lifted the sheets. Every pepper plant was still green. Dad gave her a high five, and they picked three peppers for lunch."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'How to click',
            lines: [
              "Today you will click on sentences in a passage. The passage is what you read.",
              "A paragraph is one part of the passage. Each paragraph has a number.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences, or Choose TWO, means pick two.",
              "With TWO, BOTH sentences must prove the idea. One right and one wrong gets no point, just like the test.",
              "BEST supports means the sentence proves the idea the most.",
              "Here is the tricky part. A sentence can be ABOUT the idea and still not SHOW it.",
              "Say the idea is that Lin is hungry. Lin's lunch was late. That is WHY she might be hungry. But it does not SHOW that she is hungry.",
              "Lin's tummy growled all through math. That SHOWS she is hungry. That is proof.",
              "A sentence that is about the idea but does not prove it is a close sentence. Watch out for it!"
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the TWO',
            lines: [
              "Let's do one together. Here is the question.",
              "The passage shows that Clara is CAREFUL with the plants. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              "Step 1. Say the idea. Clara is careful. She makes sure each part of the job is done right.",
              "Step 2. Find the paragraph. Paragraph 3 tells how Clara covers the plants.",
              "Step 3. Test each sentence. Ask, does this SHOW that Clara is careful?",
              "Dad found two old sheets. That is about Dad, not Clara. Clara carried the sheets out. That is true, but carrying is not care.",
              "She wanted to save every last pepper. This one is close! It is about the plants. But wanting is not doing. It does not SHOW that she is careful.",
              "Clara tucked the sheet under each pot, so the wind could not lift the sheet. Yes! That is careful.",
              "Then she checked every pot a second time. Yes! Checking twice is careful too.",
              "The wind rattled the railing. That is about the wind, not Clara.",
              "The TWO careful sentences are our answer. The close one lights up too, so you can see it.",
              "We click the two that SHOW the idea. Then we tap That's My Answer!"
            ],
            lit: [
              "Clara spread a sheet over the pots and tucked the edges under each one so the wind could not lift it.",
              "Then she checked every pot a second time to make sure no leaves were poking out.",
              "She wanted to save every last pepper on the plants."
            ] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Clara is WORRIED about the plants.",
            answers: ["All through dinner, she kept jumping up to check the thermometer outside the kitchen window."],
            kinds: {
              "Clara knew that frost could turn pepper leaves black in a single night.": 'notproof',
              "Dad made rice and beans with extra cheese on top.": 'wrongwho',
              "The red line in the glass tube dropped a little lower every hour.": 'notproof'
            },
            notes: {
              "Clara knew that frost could turn pepper leaves black in a single night.": "This one is close. Paragraph 2 tells what frost can do. That is WHY Clara might worry. But knowing is not worrying. It does not SHOW how she feels.",
              "Dad made rice and beans with extra cheese on top.": "In paragraph 2, this sentence is about Dad, not Clara.",
              "The red line in the glass tube dropped a little lower every hour.": "Paragraph 2 says the red line went down. That is about the night. It does not show how Clara feels."
            },
            why: "Paragraph 2 says Clara kept jumping up at dinner to look at the thermometer. She could not sit still. That shows she is worried about the plants." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that the night was very COLD. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "On Thursday, the weather report said the first frost of the fall would come that night.",
              "Six pepper plants grew in pots on their tiny balcony.",
              "Dad made rice and beans with extra cheese on top.",
              "In the morning, the grass in the courtyard below was white and stiff.",
              "Ice covered the windshield of every car parked on the street.",
              "Every pepper plant was still green."
            ],
            answers: ["In the morning, the grass in the courtyard below was white and stiff.", "Ice covered the windshield of every car parked on the street."],
            kinds: {
              "On Thursday, the weather report said the first frost of the fall would come that night.": 'notproof',
              "Six pepper plants grew in pots on their tiny balcony.": 'notproof',
              "Dad made rice and beans with extra cheese on top.": 'notproof',
              "Every pepper plant was still green.": 'notproof'
            },
            notes: {
              "On Thursday, the weather report said the first frost of the fall would come that night.": "This one is close. Paragraph 1 says frost WOULD come. That is a guess made before the night. It does not show what really happened.",
              "Six pepper plants grew in pots on their tiny balcony.": "Paragraph 1 tells about the plants. It does not show that the night was cold.",
              "Dad made rice and beans with extra cheese on top.": "Paragraph 2 tells what Dad made for dinner. It does not show that the night was cold.",
              "Every pepper plant was still green.": "Paragraph 4 tells about the plants. It does not show that the night was cold."
            },
            why: "Paragraph 4 says the grass was white and stiff in the morning. It also says ice was on the cars. Frost and ice come on a very cold night. Both sentences show the night was cold." },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Find the part of the passage that talks about the idea.",
              "Step 3. Test each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out for the close sentence. It is about the idea, but it does not prove it.",
              "Step 4. Click the sentence that shows the idea. If the question says TWO, click two.",
              "Check BOTH. If one does not SHOW the idea, change it.",
              "To change a pick, tap it again. Then tap the right one.",
              "When you are sure, tap That's My Answer!",
              "Now you try."
            ] }
        ]
      },
      pre: {
        story: {
          title: "Half Speed to Spruce Island",
          paragraphs: [
            "On the first Saturday in October, Tobin and his mom walked to the harbor to catch the early ferry. Tobin's grandmother lived on Spruce Island, and they visited her twice a month. Mom said the fog had rolled in off the cold water during the night. From the dock, Tobin could not see the end of the pier, and the whole island had disappeared. A seagull landed on a wooden post and screeched at them.",
            "The ferry slid away from the dock with its yellow lights blinking. Tobin sat beside a window, but he saw nothing outside except gray. Each time the ferry's horn blasted, Tobin grabbed the edge of the bench with both hands.",
            "Captain Barlow had steered the ferry across the harbor for almost thirty years. On this trip, the captain slowed the ferry to half its usual speed. Every minute, he blew the horn, so other boats would know where the ferry was. A deckhand walked through the cabin and handed out cups of hot tea. Near the back, a little boy in a striped hat raced up and down the aisle. The engines hummed under the floor.",
            "Halfway across, Tobin asked Mom three times whether the captain could really see where he was going. Mom pointed to a screen by the cabin door that showed every nearby boat as a tiny green dot.",
            "At last, the dark shape of the island dock rose out of the gray. Grandma Wynn stood at the end of the pier, waving both arms over her head. Tobin ran down the ramp and hugged her so hard that her hat fell off."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
            q: "Read paragraph 1. Click on the sentence in paragraph 1 that BEST shows that the fog is very THICK.",
            answers: ["From the dock, Tobin could not see the end of the pier, and the whole island had disappeared."],
            kinds: {
              "On the first Saturday in October, Tobin and his mom walked to the harbor to catch the early ferry.": 'notproof',
              "Tobin's grandmother lived on Spruce Island, and they visited her twice a month.": 'notproof',
              "Mom said the fog had rolled in off the cold water during the night.": 'notproof',
              "A seagull landed on a wooden post and screeched at them.": 'notproof'
            },
            notes: {
              "On the first Saturday in October, Tobin and his mom walked to the harbor to catch the early ferry.": "Paragraph 1 tells where Tobin and his mom were going. It does not show how thick the fog is.",
              "Tobin's grandmother lived on Spruce Island, and they visited her twice a month.": "In paragraph 1, this sentence tells about Tobin's grandma. It does not tell about the fog.",
              "Mom said the fog had rolled in off the cold water during the night.": "This one is close. Paragraph 1 says when the fog came in. But it does not show how THICK the fog is.",
              "A seagull landed on a wooden post and screeched at them.": "In paragraph 1, this sentence is about a seagull. It does not show how thick the fog is."
            },
            why: "Paragraph 1 says Tobin could not see the end of the pier. He could not see the island at all. Only thick fog can hide things like that. So that sentence shows the fog is very thick." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that Tobin is NERVOUS on the ferry. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "On the first Saturday in October, Tobin and his mom walked to the harbor to catch the early ferry.",
              "Tobin sat beside a window, but he saw nothing outside except gray.",
              "Each time the ferry's horn blasted, Tobin grabbed the edge of the bench with both hands.",
              "A deckhand walked through the cabin and handed out cups of hot tea.",
              "Halfway across, Tobin asked Mom three times whether the captain could really see where he was going.",
              "Tobin ran down the ramp and hugged her so hard that her hat fell off."
            ],
            answers: ["Each time the ferry's horn blasted, Tobin grabbed the edge of the bench with both hands.", "Halfway across, Tobin asked Mom three times whether the captain could really see where he was going."],
            kinds: {
              "On the first Saturday in October, Tobin and his mom walked to the harbor to catch the early ferry.": 'notproof',
              "Tobin sat beside a window, but he saw nothing outside except gray.": 'notproof',
              "A deckhand walked through the cabin and handed out cups of hot tea.": 'wrongwho',
              "Tobin ran down the ramp and hugged her so hard that her hat fell off.": 'wrongtime'
            },
            notes: {
              "On the first Saturday in October, Tobin and his mom walked to the harbor to catch the early ferry.": "Paragraph 1 tells where Tobin was going. It does not show how he feels.",
              "Tobin sat beside a window, but he saw nothing outside except gray.": "This one is close. Paragraph 2 says Tobin could see only gray. That is WHY he might be nervous. But it does not SHOW how he feels.",
              "A deckhand walked through the cabin and handed out cups of hot tea.": "In paragraph 3, this sentence is about a deckhand, not Tobin.",
              "Tobin ran down the ramp and hugged her so hard that her hat fell off.": "Paragraph 5 is after the ferry lands. Tobin is glad to see his grandma. It does not show him nervous on the ferry."
            },
            why: "Paragraph 2 says Tobin held on to the bench each time the horn blew. Paragraph 4 says he asked Mom three times if the captain could see. Both show that Tobin is nervous." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
            q: "Read paragraph 3. The passage shows that Captain Barlow is CAREFUL in the fog. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
            answers: ["On this trip, the captain slowed the ferry to half its usual speed.", "Every minute, he blew the horn, so other boats would know where the ferry was."],
            kinds: {
              "Captain Barlow had steered the ferry across the harbor for almost thirty years.": 'notproof',
              "A deckhand walked through the cabin and handed out cups of hot tea.": 'wrongwho',
              "Near the back, a little boy in a striped hat raced up and down the aisle.": 'wrongwho',
              "The engines hummed under the floor.": 'notproof'
            },
            notes: {
              "Captain Barlow had steered the ferry across the harbor for almost thirty years.": "This one is close. Paragraph 3 says the captain has done this job a long time. But that tells about his past. It does not SHOW what he does in the fog.",
              "A deckhand walked through the cabin and handed out cups of hot tea.": "In paragraph 3, this sentence is about a deckhand, not the captain.",
              "Near the back, a little boy in a striped hat raced up and down the aisle.": "In paragraph 3, this sentence is about a little boy, not the captain.",
              "The engines hummed under the floor.": "In paragraph 3, this sentence tells about the engines. It does not show what the captain did."
            },
            why: "Paragraph 3 says the captain made the ferry go much slower. He also blew the horn every minute, so other boats could tell where the ferry was. Both show that he is careful in the fog." }
        ]
      },
      turn: [
        {
          story: {
            title: "The Heron Under the Stone Bridge",
            paragraphs: [
              "Every Saturday in the fall, Jonah and Grandpa walked along the river path that winds through the middle of the city. Tall buildings stood on one side of the water, and yellow trees lined the other side. Grandpa always carried a pair of old binoculars around his neck. Jonah carried a thermos of hot cider for the two of them to share.",
              "This week, Grandpa had a surprise for Jonah. A neighbor had seen a great blue heron fishing under the old stone bridge. Jonah had never seen a real heron up close. He started walking so fast that Grandpa had to call for him to slow down. The stone bridge was still a mile away.",
              "When they reached the bridge, the heron was nowhere in sight. Grandpa said herons often hide in the tall reeds and come out when the water is calm. Jonah sat down on a stone bench to wait. A chilly wind blew off the river, and two ducks paddled past. Jonah waited for almost an hour without once asking to go home. Even when his toes grew numb, he stayed on the bench and kept watching the reeds.",
              "At last, something gray moved in the reeds. A tall bird stepped out on long, thin legs, as slowly as someone walking on ice. Its feathers were the soft blue-gray of a cloudy sky. The heron stood perfectly still on one leg in the shallow water. Then its neck shot down like an arrow, and it came up with a silver fish. Before long, the heron had caught three more fish without missing once. Jonah asked Grandpa how a bird could balance on one leg for so long.",
              "On the walk home, Jonah could not stop talking about the heron. Grandpa did not know how herons balance like that, so Jonah decided to look it up at the library. A cold drizzle began to fall just as they reached their street. That night, Jonah wrote three heron facts on a card and taped it above his bed."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Jonah is EXCITED to see the heron.",
              answers: ["He started walking so fast that Grandpa had to call for him to slow down."],
              kinds: {
                "This week, Grandpa had a surprise for Jonah.": 'wrongwho',
                "A neighbor had seen a great blue heron fishing under the old stone bridge.": 'wrongwho',
                "Jonah had never seen a real heron up close.": 'notproof',
                "The stone bridge was still a mile away.": 'notproof'
              },
              notes: {
                "This week, Grandpa had a surprise for Jonah.": "In paragraph 2, this sentence is about Grandpa. It does not show how Jonah feels.",
                "A neighbor had seen a great blue heron fishing under the old stone bridge.": "In paragraph 2, this sentence is about the neighbor, not Jonah.",
                "Jonah had never seen a real heron up close.": "This one is close. Paragraph 2 says a heron is new for Jonah. That is WHY he might be excited. But it does not SHOW how he feels.",
                "The stone bridge was still a mile away.": "In paragraph 2, this sentence tells how far away the bridge was. It does not show how Jonah feels."
              },
              why: "Paragraph 2 says Jonah walked so fast that Grandpa told him to slow down. He could not wait to get there. That shows Jonah is excited." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the heron is GOOD AT CATCHING FISH. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Every Saturday in the fall, Jonah and Grandpa walked along the river path that winds through the middle of the city.",
                "A neighbor had seen a great blue heron fishing under the old stone bridge.",
                "Grandpa said herons often hide in the tall reeds and come out when the water is calm.",
                "Then its neck shot down like an arrow, and it came up with a silver fish.",
                "Before long, the heron had caught three more fish without missing once.",
                "That night, Jonah wrote three heron facts on a card and taped it above his bed."
              ],
              answers: ["Then its neck shot down like an arrow, and it came up with a silver fish.", "Before long, the heron had caught three more fish without missing once."],
              kinds: {
                "Every Saturday in the fall, Jonah and Grandpa walked along the river path that winds through the middle of the city.": 'notproof',
                "A neighbor had seen a great blue heron fishing under the old stone bridge.": 'notproof',
                "Grandpa said herons often hide in the tall reeds and come out when the water is calm.": 'notproof',
                "That night, Jonah wrote three heron facts on a card and taped it above his bed.": 'wrongwho'
              },
              notes: {
                "Every Saturday in the fall, Jonah and Grandpa walked along the river path that winds through the middle of the city.": "Paragraph 1 tells where Jonah and Grandpa walk. It does not tell about the heron.",
                "A neighbor had seen a great blue heron fishing under the old stone bridge.": "This one is close. Paragraph 2 says a neighbor saw the heron fishing. But fishing is not the same as catching. It does not show the heron is good at it.",
                "Grandpa said herons often hide in the tall reeds and come out when the water is calm.": "Paragraph 3 tells where herons hide. It does not show the heron catching fish.",
                "That night, Jonah wrote three heron facts on a card and taped it above his bed.": "In paragraph 5, this sentence is about Jonah, not the heron."
              },
              why: "Paragraph 4 says the heron's neck shot down fast, and it came up with a fish. It also says the heron got three more fish and did not miss. Both show that the heron is good at catching fish." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
              q: "Read paragraph 3. The passage shows that Jonah is PATIENT. He can wait a long time without getting upset. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              answers: ["Jonah waited for almost an hour without once asking to go home.", "Even when his toes grew numb, he stayed on the bench and kept watching the reeds."],
              kinds: {
                "When they reached the bridge, the heron was nowhere in sight.": 'notproof',
                "Grandpa said herons often hide in the tall reeds and come out when the water is calm.": 'wrongwho',
                "Jonah sat down on a stone bench to wait.": 'notproof',
                "A chilly wind blew off the river, and two ducks paddled past.": 'notproof'
              },
              notes: {
                "When they reached the bridge, the heron was nowhere in sight.": "Paragraph 3 says the heron was not there. That is the problem. It does not show what Jonah did.",
                "Grandpa said herons often hide in the tall reeds and come out when the water is calm.": "In paragraph 3, this sentence is about Grandpa, not Jonah.",
                "Jonah sat down on a stone bench to wait.": "This one is close. Paragraph 3 says Jonah sat down to wait. But anyone can sit down. It does not show how long or how calmly he waited.",
                "A chilly wind blew off the river, and two ducks paddled past.": "In paragraph 3, this sentence tells about the wind and the ducks. It does not show that Jonah is patient."
              },
              why: "Paragraph 3 says Jonah waited almost an hour and did not ask to go home. It also says he stayed on the bench even when his toes went numb. Both show that Jonah is patient." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Jonah wants to LEARN more about herons. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Tall buildings stood on one side of the water, and yellow trees lined the other side.",
                "Grandpa always carried a pair of old binoculars around his neck.",
                "Jonah had never seen a real heron up close.",
                "A chilly wind blew off the river, and two ducks paddled past.",
                "Jonah asked Grandpa how a bird could balance on one leg for so long.",
                "Grandpa did not know how herons balance like that, so Jonah decided to look it up at the library."
              ],
              answers: ["Jonah asked Grandpa how a bird could balance on one leg for so long.", "Grandpa did not know how herons balance like that, so Jonah decided to look it up at the library."],
              kinds: {
                "Tall buildings stood on one side of the water, and yellow trees lined the other side.": 'notproof',
                "Grandpa always carried a pair of old binoculars around his neck.": 'wrongwho',
                "Jonah had never seen a real heron up close.": 'notproof',
                "A chilly wind blew off the river, and two ducks paddled past.": 'notproof'
              },
              notes: {
                "Tall buildings stood on one side of the water, and yellow trees lined the other side.": "Paragraph 1 tells what the river path looks like. It does not show Jonah wanting to learn.",
                "Grandpa always carried a pair of old binoculars around his neck.": "In paragraph 1, this sentence is about Grandpa, not Jonah.",
                "Jonah had never seen a real heron up close.": "This one is close. Paragraph 2 says Jonah had never seen a real heron. That is about herons. But it does not show him trying to find out more.",
                "A chilly wind blew off the river, and two ducks paddled past.": "Paragraph 3 tells about the wind and the ducks. It does not show Jonah wanting to learn."
              },
              why: "Paragraph 4 says Jonah asked how a heron can stand on one leg. Paragraph 5 says he plans to look up the answer. Both show that he wants to learn more about herons." }
          ]
        },
        {
          story: {
            title: "Hail on Pike Street",
            paragraphs: [
              "It was a warm, sticky afternoon in late September. Dario and his best friend, Arlo, were walking home from school along Pike Street. Arlo was telling a long story about a frog in their science class. Halfway home, the sunny sky suddenly turned a strange greenish gray. A cool wind swept down the block and rattled the shop signs.",
              "Something white bounced off the sidewalk and rolled into the gutter. Within seconds, hundreds of tiny pieces of ice were pinging off the parked cars. Arlo had never seen hail before. Arlo laughed out loud and held out both hands to catch the bouncing ice. Dario looked up at the dark sky and frowned.",
              "Soon the hail grew bigger and began to sting their arms. Right away, Dario grabbed Arlo's sleeve and pulled him under the green awning of Rossi's Bakery. When ice bounced in at the edge, Dario moved them both back against the wall. A woman with a stroller hurried in beside them. Inside the bakery window, trays of rolls cooled on a rack. The hail drummed so hard on the awning that they had to shout to hear each other.",
              "Some of the hailstones were the size of gumballs. They bounced high off the sidewalk and piled up along the curb. Bits of torn green leaves from the maple trees lay scattered on top of the white piles. Across the street, the hail left small dents in the hood of a shiny red car. Somewhere down the block, a car alarm started to wail and honk. Mr. Rossi stepped out of the bakery and handed each boy a warm cinnamon roll.",
              "Ten minutes later, the hail stopped, and the sun came out again. Steam rose off the wet sidewalk as the boys walked the last two blocks home. Their soaking wet sneakers squished with every single step. Arlo scooped up one perfect hailstone and tucked it into his pocket to show his mom. At his front steps, Arlo reached into his pocket, but all he found was a cold, wet spot. Dario laughed so hard that he had to sit down on the steps."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Arlo thinks the hail is FUN.",
              answers: ["Arlo laughed out loud and held out both hands to catch the bouncing ice."],
              kinds: {
                "Something white bounced off the sidewalk and rolled into the gutter.": 'notproof',
                "Within seconds, hundreds of tiny pieces of ice were pinging off the parked cars.": 'notproof',
                "Arlo had never seen hail before.": 'notproof',
                "Dario looked up at the dark sky and frowned.": 'wrongwho'
              },
              notes: {
                "Something white bounced off the sidewalk and rolled into the gutter.": "In paragraph 2, this sentence tells about the first piece of hail. It does not show how Arlo feels.",
                "Within seconds, hundreds of tiny pieces of ice were pinging off the parked cars.": "In paragraph 2, this sentence tells about the hail. It does not show how Arlo feels.",
                "Arlo had never seen hail before.": "This one is close. Paragraph 2 says hail is new for Arlo. That is WHY the hail might be fun. But it does not SHOW how he feels.",
                "Dario looked up at the dark sky and frowned.": "In paragraph 2, this sentence is about Dario, not Arlo."
              },
              why: "Paragraph 2 says Arlo laughed and held out his hands to catch the ice. He is playing in the hail. That shows Arlo thinks the hail is fun." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that some of the hail was very BIG. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "A cool wind swept down the block and rattled the shop signs.",
                "Something white bounced off the sidewalk and rolled into the gutter.",
                "Within seconds, hundreds of tiny pieces of ice were pinging off the parked cars.",
                "Some of the hailstones were the size of gumballs.",
                "Across the street, the hail left small dents in the hood of a shiny red car.",
                "Mr. Rossi stepped out of the bakery and handed each boy a warm cinnamon roll."
              ],
              answers: ["Some of the hailstones were the size of gumballs.", "Across the street, the hail left small dents in the hood of a shiny red car."],
              kinds: {
                "A cool wind swept down the block and rattled the shop signs.": 'notproof',
                "Something white bounced off the sidewalk and rolled into the gutter.": 'notproof',
                "Within seconds, hundreds of tiny pieces of ice were pinging off the parked cars.": 'wrongtime',
                "Mr. Rossi stepped out of the bakery and handed each boy a warm cinnamon roll.": 'wrongwho'
              },
              notes: {
                "A cool wind swept down the block and rattled the shop signs.": "Paragraph 1 tells about the wind. It does not show the size of the hail.",
                "Something white bounced off the sidewalk and rolled into the gutter.": "This one is close. Paragraph 2 is about the hail. But it does not tell how big the hail was.",
                "Within seconds, hundreds of tiny pieces of ice were pinging off the parked cars.": "Paragraph 2 says the first pieces were tiny. That is before the hail got big.",
                "Mr. Rossi stepped out of the bakery and handed each boy a warm cinnamon roll.": "In paragraph 4, this sentence is about Mr. Rossi, not the hail."
              },
              why: "Paragraph 4 says some hailstones were the size of gumballs. It also says the hail made dents in a car. Only big hail can do that. Both show that some of the hail was big." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
              q: "Read paragraph 3. The passage shows that Dario is QUICK TO ACT. He does something right away when there is trouble. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              answers: ["Right away, Dario grabbed Arlo's sleeve and pulled him under the green awning of Rossi's Bakery.", "When ice bounced in at the edge, Dario moved them both back against the wall."],
              kinds: {
                "Soon the hail grew bigger and began to sting their arms.": 'notproof',
                "A woman with a stroller hurried in beside them.": 'wrongwho',
                "Inside the bakery window, trays of rolls cooled on a rack.": 'notproof',
                "The hail drummed so hard on the awning that they had to shout to hear each other.": 'notproof'
              },
              notes: {
                "Soon the hail grew bigger and began to sting their arms.": "This one is close. Paragraph 3 says the hail began to hurt. That is the trouble. But it does not SHOW what Dario did about it.",
                "A woman with a stroller hurried in beside them.": "In paragraph 3, this sentence is about a woman, not Dario.",
                "Inside the bakery window, trays of rolls cooled on a rack.": "In paragraph 3, this sentence tells about the rolls in the window. It does not show what Dario did.",
                "The hail drummed so hard on the awning that they had to shout to hear each other.": "In paragraph 3, this sentence tells how loud the hail was. It does not show what Dario did."
              },
              why: "Paragraph 3 says Dario pulled Arlo under the awning right away. It also says he moved them back when ice bounced in. Both show that Dario is quick to act." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the weather CHANGED very quickly. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "It was a warm, sticky afternoon in late September.",
                "Halfway home, the sunny sky suddenly turned a strange greenish gray.",
                "Arlo had never seen hail before.",
                "A woman with a stroller hurried in beside them.",
                "Ten minutes later, the hail stopped, and the sun came out again.",
                "Arlo scooped up one perfect hailstone and tucked it into his pocket to show his mom."
              ],
              answers: ["Halfway home, the sunny sky suddenly turned a strange greenish gray.", "Ten minutes later, the hail stopped, and the sun came out again."],
              kinds: {
                "It was a warm, sticky afternoon in late September.": 'notproof',
                "Arlo had never seen hail before.": 'notproof',
                "A woman with a stroller hurried in beside them.": 'wrongwho',
                "Arlo scooped up one perfect hailstone and tucked it into his pocket to show his mom.": 'wrongwho'
              },
              notes: {
                "It was a warm, sticky afternoon in late September.": "This one is close. Paragraph 1 tells what the weather was like at first. But it does not show the weather changing.",
                "Arlo had never seen hail before.": "Paragraph 2 says hail is new for Arlo. It does not show the weather changing.",
                "A woman with a stroller hurried in beside them.": "In paragraph 3, this sentence is about a woman. It does not show the weather changing.",
                "Arlo scooped up one perfect hailstone and tucked it into his pocket to show his mom.": "In paragraph 5, this sentence is about Arlo. It does not show the weather changing."
              },
              why: "Paragraph 1 says the sunny sky suddenly turned gray. Paragraph 5 says the hail stopped ten minutes later, and the sun came back. Both show that the weather changed quickly." }
          ]
        }
      ]
    },

    /* ───────── Version 2 ───────── */
    {
      teach: {
        story: {
          title: "Nadia Reads the Weather",
          paragraphs: [
            "This week, Nadia was the weather reporter for her school. Each morning, she told the whole school about the weather over the speakers. A rain gauge and a thermometer stood in the garden behind the gym.",
            "On Monday, Nadia had to give her very first report. She had never talked on the school speakers before. In the front office, her hands shook so much that her paper rattled. The microphone sat on the desk next to a cup of pencils. The principal, Mr. Hale, smiled and pressed the red button.",
            "Every morning, Nadia got to school ten minutes early to read the rain gauge and the thermometer. Then she emptied the rain gauge, so it would be ready for the next day. Nadia liked the job more than she thought she would. The grass behind the gym was still wet with dew. A few sparrows hopped along the fence. Mr. Diaz, the custodian, waved to her from the gym door.",
            "On Tuesday night, a storm swept over the city. On Wednesday morning, the rain gauge was full to the very top. Big puddles covered the blacktop, and water rushed down the street. That morning, Nadia told everyone to wear their rain boots.",
            "By Friday, Nadia read her report without looking at her notes even once. Mr. Hale said she sounded just like the people on the TV news. Nadia asked her teacher if she could keep the job for one more week."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'How to click',
            lines: [
              "Today you will click on sentences in a passage. The passage is what you read.",
              "A paragraph is one part of the passage. Each paragraph has a number.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences, or Choose TWO, means pick two.",
              "With TWO, BOTH sentences must prove the idea. One right and one wrong gets no point, just like the test.",
              "BEST supports means the sentence proves the idea the most.",
              "Here is the tricky part. A sentence can be ABOUT the idea and still not SHOW it.",
              "Say the idea is that Lin is hungry. Lin's lunch was late. That is WHY she might be hungry. But it does not SHOW that she is hungry.",
              "Lin's tummy growled all through math. That SHOWS she is hungry. That is proof.",
              "A sentence that is about the idea but does not prove it is a close sentence. Watch out for it!"
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the TWO',
            lines: [
              "Let's do one together. Here is the question.",
              "The passage shows that Nadia is RESPONSIBLE. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              "Step 1. Say the idea. Nadia is responsible. She does her whole job, the right way, without being told.",
              "Step 2. Find the paragraph. Paragraph 3 tells how Nadia does her job each morning.",
              "Step 3. Test each sentence. Ask, does this SHOW that Nadia is responsible?",
              "Nadia got to school early to read the rain gauge. Yes! She comes early to do her job.",
              "Then she emptied the rain gauge, so it was ready for the next day. Yes! She does the whole job.",
              "Nadia liked the job more than she thought. This one is close! It is about her job. But liking a job is not doing it well. It does not SHOW that she is responsible.",
              "The wet grass and the sparrows are about the garden, not Nadia.",
              "Mr. Diaz waved to her. That is about Mr. Diaz, not Nadia.",
              "The TWO responsible sentences are our answer. The close one lights up too, so you can see it.",
              "We click the two that SHOW the idea. Then we tap That's My Answer!"
            ],
            lit: [
              "Every morning, Nadia got to school ten minutes early to read the rain gauge and the thermometer.",
              "Then she emptied the rain gauge, so it would be ready for the next day.",
              "Nadia liked the job more than she thought she would."
            ] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Nadia is NERVOUS.",
            answers: ["In the front office, her hands shook so much that her paper rattled."],
            kinds: {
              "On Monday, Nadia had to give her very first report.": 'notproof',
              "She had never talked on the school speakers before.": 'notproof',
              "The microphone sat on the desk next to a cup of pencils.": 'notproof',
              "The principal, Mr. Hale, smiled and pressed the red button.": 'wrongwho'
            },
            notes: {
              "On Monday, Nadia had to give her very first report.": "Paragraph 2 tells when Nadia gave her first report. It does not show how she feels.",
              "She had never talked on the school speakers before.": "This one is close. Paragraph 2 says the job is new for Nadia. That is WHY she might be nervous. But it does not SHOW how she feels.",
              "The microphone sat on the desk next to a cup of pencils.": "In paragraph 2, this sentence tells about the microphone. It does not show how Nadia feels.",
              "The principal, Mr. Hale, smiled and pressed the red button.": "In paragraph 2, this sentence is about Mr. Hale, not Nadia."
            },
            why: "Paragraph 2 says Nadia's hands shook so much that her paper rattled. Shaking hands are a sign of nerves. So that sentence shows Nadia is nervous." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that it rained a LOT on Tuesday night. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "A rain gauge and a thermometer stood in the garden behind the gym.",
              "The microphone sat on the desk next to a cup of pencils.",
              "Nadia liked the job more than she thought she would.",
              "On Tuesday night, a storm swept over the city.",
              "On Wednesday morning, the rain gauge was full to the very top.",
              "Big puddles covered the blacktop, and water rushed down the street."
            ],
            answers: ["On Wednesday morning, the rain gauge was full to the very top.", "Big puddles covered the blacktop, and water rushed down the street."],
            kinds: {
              "A rain gauge and a thermometer stood in the garden behind the gym.": 'notproof',
              "The microphone sat on the desk next to a cup of pencils.": 'notproof',
              "Nadia liked the job more than she thought she would.": 'notproof',
              "On Tuesday night, a storm swept over the city.": 'notproof'
            },
            notes: {
              "A rain gauge and a thermometer stood in the garden behind the gym.": "Paragraph 1 tells where the rain gauge was. It does not show how much rain fell.",
              "The microphone sat on the desk next to a cup of pencils.": "Paragraph 2 tells about the microphone. It does not show how much rain fell.",
              "Nadia liked the job more than she thought she would.": "Paragraph 3 tells how Nadia feels about her job. It does not show how much rain fell.",
              "On Tuesday night, a storm swept over the city.": "This one is close. Paragraph 4 says a storm came. But it does not show how MUCH rain fell."
            },
            why: "Paragraph 4 says the rain gauge was full to the top. It also says big puddles covered the blacktop. It takes a lot of rain to do that. Both show that it rained a lot." },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Find the part of the passage that talks about the idea.",
              "Step 3. Test each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out for the close sentence. It is about the idea, but it does not prove it.",
              "Step 4. Click the sentence that shows the idea. If the question says TWO, click two.",
              "Check BOTH. If one does not SHOW the idea, change it.",
              "To change a pick, tap it again. Then tap the right one.",
              "When you are sure, tap That's My Answer!",
              "Now you try."
            ] }
        ]
      },
      pre: {
        story: {
          title: "The Morning the Ginkgo Let Go",
          paragraphs: [
            "A tall ginkgo tree grew in front of Calla's building on Corbin Street. Its leaves were shaped like tiny fans, and each fall they turned as yellow as butter. Mr. Ambrose, who lived downstairs, had swept under that tree for years. In October, he told Calla that the ginkgo dropped every leaf on the same day.",
            "Calla looked up at the branches, which were still thick with gold leaves. The maple across the street had dropped its leaves a few at a time. Calla crossed her arms and told Mr. Ambrose that no tree in the world could do that. Mr. Ambrose only smiled and leaned on his broom.",
            "Every morning on her way to school, Calla checked the ginkgo for any change. For eleven days, the tree stayed full and gold. Then one November night, the air turned colder than it had been all year.",
            "The next morning, Calla heard a soft rustling before she opened her curtains. Leaves were pouring off the ginkgo so fast that she could not count them. Calla pressed her nose to the glass and stared with her mouth wide open. Her little brother, Ivo, ran to the window and yelled for Mom to come and look. Mom carried a plate of buttered toast to the table. Calla forgot all about her toast, because she could not take her eyes off the tree. By lunchtime, not a single leaf was left on the branches.",
            "Calla ran downstairs in her pajamas and told Mr. Ambrose that he had been right. Mr. Ambrose laughed and handed her a broom. Together, they swept the leaves into a golden pile as tall as a mailbox."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Calla does NOT BELIEVE Mr. Ambrose.",
            answers: ["Calla crossed her arms and told Mr. Ambrose that no tree in the world could do that."],
            kinds: {
              "Calla looked up at the branches, which were still thick with gold leaves.": 'notproof',
              "The maple across the street had dropped its leaves a few at a time.": 'notproof',
              "Mr. Ambrose only smiled and leaned on his broom.": 'wrongwho'
            },
            notes: {
              "Calla looked up at the branches, which were still thick with gold leaves.": "In paragraph 2, this sentence tells what Calla saw on the tree. It does not show what she thinks of Mr. Ambrose.",
              "The maple across the street had dropped its leaves a few at a time.": "This one is close. Paragraph 2 tells how the maple lost its leaves. That is WHY Calla might not believe him. But it does not SHOW what she thinks.",
              "Mr. Ambrose only smiled and leaned on his broom.": "In paragraph 2, this sentence is about Mr. Ambrose, not Calla."
            },
            why: "Paragraph 2 says Calla crossed her arms. She told Mr. Ambrose that no tree could do that. That shows she does not believe him." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that the ginkgo's leaves fell very QUICKLY. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "In October, he told Calla that the ginkgo dropped every leaf on the same day.",
              "Calla looked up at the branches, which were still thick with gold leaves.",
              "Then one November night, the air turned colder than it had been all year.",
              "Leaves were pouring off the ginkgo so fast that she could not count them.",
              "By lunchtime, not a single leaf was left on the branches.",
              "Mr. Ambrose laughed and handed her a broom."
            ],
            answers: ["Leaves were pouring off the ginkgo so fast that she could not count them.", "By lunchtime, not a single leaf was left on the branches."],
            kinds: {
              "In October, he told Calla that the ginkgo dropped every leaf on the same day.": 'notproof',
              "Calla looked up at the branches, which were still thick with gold leaves.": 'wrongtime',
              "Then one November night, the air turned colder than it had been all year.": 'notproof',
              "Mr. Ambrose laughed and handed her a broom.": 'wrongwho'
            },
            notes: {
              "In October, he told Calla that the ginkgo dropped every leaf on the same day.": "This one is close. Paragraph 1 tells what Mr. Ambrose SAID would happen. It does not show what really happened.",
              "Calla looked up at the branches, which were still thick with gold leaves.": "Paragraph 2 says the tree was still full of leaves. That was before the leaves fell.",
              "Then one November night, the air turned colder than it had been all year.": "Paragraph 3 tells about the cold night. That is WHY the leaves fell. But it does not show how fast they fell.",
              "Mr. Ambrose laughed and handed her a broom.": "In paragraph 5, this sentence is about Mr. Ambrose and a broom. It does not show how fast the leaves fell."
            },
            why: "Paragraph 4 says the leaves came down too fast to count. It also says the tree was bare by lunch. Both show that the leaves fell very quickly." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
            q: "Read paragraph 4. The passage shows that Calla is AMAZED. That means she is very surprised. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
            answers: ["Calla pressed her nose to the glass and stared with her mouth wide open.", "Calla forgot all about her toast, because she could not take her eyes off the tree."],
            kinds: {
              "The next morning, Calla heard a soft rustling before she opened her curtains.": 'notproof',
              "Leaves were pouring off the ginkgo so fast that she could not count them.": 'notproof',
              "Her little brother, Ivo, ran to the window and yelled for Mom to come and look.": 'wrongwho',
              "Mom carried a plate of buttered toast to the table.": 'wrongwho',
              "By lunchtime, not a single leaf was left on the branches.": 'notproof'
            },
            notes: {
              "The next morning, Calla heard a soft rustling before she opened her curtains.": "In paragraph 4, this sentence tells what Calla heard. It does not show how she feels.",
              "Leaves were pouring off the ginkgo so fast that she could not count them.": "This one is close. Paragraph 4 tells what Calla saw. That is WHY she is amazed. But it does not SHOW how she feels.",
              "Her little brother, Ivo, ran to the window and yelled for Mom to come and look.": "This one is close too. Paragraph 4 shows someone excited. But this sentence is about Ivo, not Calla.",
              "Mom carried a plate of buttered toast to the table.": "In paragraph 4, this sentence is about Mom and the toast, not Calla.",
              "By lunchtime, not a single leaf was left on the branches.": "In paragraph 4, this sentence tells about the tree at lunch. It does not show how Calla feels."
            },
            why: "Paragraph 4 says Calla pressed her nose to the glass with her mouth open. She also forgot her toast, because she could not stop looking. Both show that Calla is amazed." }
        ]
      },
      turn: [
        {
          story: {
            title: "Tiny Tags on Orange Wings",
            paragraphs: [
              "On a warm Saturday in September, Calvin and his aunt rode their bikes to the nature center at the edge of the city. A sign by the door said that helpers were needed to tag monarch butterflies. Every fall, monarchs fly south from here all the way to Mexico. A tag helps scientists learn where each butterfly goes.",
              "A worker named Ms. Ruiz handed Calvin a long net and led them to a field of purple flowers. Orange wings fluttered everywhere. Calvin swung the net at the closest monarch, but it floated away. He missed the next one too, and the one after that. Calvin's shoulders slumped, and he let the net drop to the ground. Ms. Ruiz said that almost everyone misses at first.",
              "Then Ms. Ruiz showed him a trick. Instead of chasing a monarch, he should wait until it landed on a flower to drink. Calvin crouched by a tall flower and waited without moving a muscle. When a monarch landed, he swept the net from behind, and this time the butterfly was inside.",
              "Ms. Ruiz showed Calvin how to hold the monarch by its folded wings. Calvin knew that the tiny scales on a monarch's wings could rub off. He held the butterfly as lightly as he could, with just two fingers. Ms. Ruiz peeled a round sticker the size of a small button off a sheet. The sticker had a code of three letters and three numbers. Calvin pressed the sticker onto the wing with one fingertip, so softly that the wing hardly moved. A dragonfly zipped over the flowers.",
              "Then Calvin opened his fingers. The monarch sat on his hand for a moment before it fluttered up over the trees. Calvin watched until the orange speck disappeared. He wrote the tag code in his notebook.",
              "Before they left, Calvin asked Ms. Ruiz if he could come back next Saturday to help again. He also asked his aunt to grow milkweed on their balcony for next year's monarchs. At home, he checked the tag website every night to see if anyone had found his monarch."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Calvin feels DISAPPOINTED. That means he feels let down.",
              answers: ["Calvin's shoulders slumped, and he let the net drop to the ground."],
              kinds: {
                "A worker named Ms. Ruiz handed Calvin a long net and led them to a field of purple flowers.": 'wrongwho',
                "Orange wings fluttered everywhere.": 'notproof',
                "Calvin swung the net at the closest monarch, but it floated away.": 'notproof',
                "He missed the next one too, and the one after that.": 'notproof',
                "Ms. Ruiz said that almost everyone misses at first.": 'wrongwho'
              },
              notes: {
                "A worker named Ms. Ruiz handed Calvin a long net and led them to a field of purple flowers.": "In paragraph 2, this sentence is about Ms. Ruiz, not Calvin.",
                "Orange wings fluttered everywhere.": "In paragraph 2, this sentence tells about the butterflies. It does not show how Calvin feels.",
                "Calvin swung the net at the closest monarch, but it floated away.": "Paragraph 2 says Calvin swung the net. That tells what he did. It does not show how he feels.",
                "He missed the next one too, and the one after that.": "This one is close. Paragraph 2 says Calvin kept missing. That is WHY he feels let down. But it does not SHOW how he feels.",
                "Ms. Ruiz said that almost everyone misses at first.": "In paragraph 2, this sentence is about Ms. Ruiz, not Calvin."
              },
              why: "Paragraph 2 says Calvin's shoulders slumped. He let the net drop. That is how you look when you feel let down. So Calvin is disappointed." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Calvin still CARES about his monarch after he sets the butterfly free. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "A tag helps scientists learn where each butterfly goes.",
                "Orange wings fluttered everywhere.",
                "Calvin crouched by a tall flower and waited without moving a muscle.",
                "The monarch sat on his hand for a moment before it fluttered up over the trees.",
                "Calvin watched until the orange speck disappeared.",
                "At home, he checked the tag website every night to see if anyone had found his monarch."
              ],
              answers: ["Calvin watched until the orange speck disappeared.", "At home, he checked the tag website every night to see if anyone had found his monarch."],
              kinds: {
                "A tag helps scientists learn where each butterfly goes.": 'notproof',
                "Orange wings fluttered everywhere.": 'wrongtime',
                "Calvin crouched by a tall flower and waited without moving a muscle.": 'wrongtime',
                "The monarch sat on his hand for a moment before it fluttered up over the trees.": 'notproof'
              },
              notes: {
                "A tag helps scientists learn where each butterfly goes.": "Paragraph 1 tells what a tag is for. It does not show how Calvin feels.",
                "Orange wings fluttered everywhere.": "Paragraph 2 tells about the field of butterflies. That is before Calvin catches his monarch.",
                "Calvin crouched by a tall flower and waited without moving a muscle.": "Paragraph 3 tells how Calvin caught a monarch. That is before he lets the monarch go.",
                "The monarch sat on his hand for a moment before it fluttered up over the trees.": "This one is close. Paragraph 5 is about the monarch when Calvin lets it go. But this sentence tells what the monarch did, not Calvin."
              },
              why: "Paragraph 5 says Calvin watched until the monarch was gone. Paragraph 6 says he checked every night to see if the monarch was found. Both show that he cares about his monarch." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that Calvin is GENTLE with the monarch. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["He held the butterfly as lightly as he could, with just two fingers.", "Calvin pressed the sticker onto the wing with one fingertip, so softly that the wing hardly moved."],
              kinds: {
                "Ms. Ruiz showed Calvin how to hold the monarch by its folded wings.": 'wrongwho',
                "Calvin knew that the tiny scales on a monarch's wings could rub off.": 'notproof',
                "Ms. Ruiz peeled a round sticker the size of a small button off a sheet.": 'wrongwho',
                "The sticker had a code of three letters and three numbers.": 'notproof',
                "A dragonfly zipped over the flowers.": 'notproof'
              },
              notes: {
                "Ms. Ruiz showed Calvin how to hold the monarch by its folded wings.": "In paragraph 4, this sentence is about Ms. Ruiz, not Calvin.",
                "Calvin knew that the tiny scales on a monarch's wings could rub off.": "This one is close. Paragraph 4 says Calvin knew the wings could get hurt. But knowing is not doing. It does not SHOW how he holds the monarch.",
                "Ms. Ruiz peeled a round sticker the size of a small button off a sheet.": "In paragraph 4, this sentence is about Ms. Ruiz, not Calvin.",
                "The sticker had a code of three letters and three numbers.": "In paragraph 4, this sentence tells about the sticker. It does not show that Calvin is gentle.",
                "A dragonfly zipped over the flowers.": "In paragraph 4, this sentence is about a dragonfly, not Calvin."
              },
              why: "Paragraph 4 says Calvin held the monarch very lightly. He also put the sticker on so softly that the wing barely moved. Both show that he is gentle." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Calvin wants to keep HELPING monarchs. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "A sign by the door said that helpers were needed to tag monarch butterflies.",
                "Ms. Ruiz said that almost everyone misses at first.",
                "When a monarch landed, he swept the net from behind, and this time the butterfly was inside.",
                "The sticker had a code of three letters and three numbers.",
                "Before they left, Calvin asked Ms. Ruiz if he could come back next Saturday to help again.",
                "He also asked his aunt to grow milkweed on their balcony for next year's monarchs."
              ],
              answers: ["Before they left, Calvin asked Ms. Ruiz if he could come back next Saturday to help again.", "He also asked his aunt to grow milkweed on their balcony for next year's monarchs."],
              kinds: {
                "A sign by the door said that helpers were needed to tag monarch butterflies.": 'notproof',
                "Ms. Ruiz said that almost everyone misses at first.": 'wrongwho',
                "When a monarch landed, he swept the net from behind, and this time the butterfly was inside.": 'notproof',
                "The sticker had a code of three letters and three numbers.": 'notproof'
              },
              notes: {
                "A sign by the door said that helpers were needed to tag monarch butterflies.": "This one is close. Paragraph 1 says the center needed helpers. But that is what the sign says. It does not show what Calvin wants.",
                "Ms. Ruiz said that almost everyone misses at first.": "In paragraph 2, this sentence is about Ms. Ruiz, not Calvin.",
                "When a monarch landed, he swept the net from behind, and this time the butterfly was inside.": "Paragraph 3 tells how Calvin caught a monarch. It does not show what he wants to do next.",
                "The sticker had a code of three letters and three numbers.": "Paragraph 4 tells about the sticker. It does not show what Calvin wants to do next."
              },
              why: "Paragraph 6 says Calvin asked to come back and help next Saturday. He also asked his aunt to grow milkweed for the monarchs. Both show that he wants to keep helping." }
          ]
        },
        {
          story: {
            title: "Silver Tape for the Walk Home",
            paragraphs: [
              "All fall, Adrian had soccer practice at Garvey Park on Tuesdays and Thursdays. Practice ended at five o'clock, and then he walked the six blocks home by himself. In September, the sun was still high and warm when he left the field. Then, on the first Sunday in November, the clocks were turned back one hour.",
              "On Tuesday, Mom got home from work at four and started dinner. She knew that the sun would set before Adrian's practice was over. At five o'clock, Mom stood at the front window with her phone in her hand and did not move until Adrian turned the corner. Adrian's baby brother banged a spoon on his high chair. A pot of soup bubbled on the stove.",
              "The streetlights flickered on just as the coach blew the last whistle. Every car that passed Adrian had its headlights on. At the corner of Kent Street, a driver turned without slowing down, and Adrian had to jump back onto the curb. Halfway down the next block, Adrian tripped on a broken piece of sidewalk that he never saw. When he walked in the door, Mom hugged him tight and let out a long, slow breath.",
              "At school the next day, Adrian asked his science teacher, Mr. Stokes, why it got dark so much earlier now. Mr. Stokes said that turning back the clocks moves an hour of daylight from the evening to the morning. Mr. Stokes also said that the days would keep getting shorter until the first day of winter. Adrian frowned. That meant even darker walks home.",
              "Adrian wanted to keep walking home after practice, so he thought about the problem all through dinner. Outside, a cold wind rattled the windows and blew dry leaves down the street. After dinner, he stuck strips of shiny tape that glows in car lights on his backpack and sneakers. Then he called Santi, a teammate who lived on his block, and asked if they could walk home together after practice. Mom washed the dishes and hummed along with the radio. Adrian's baby brother fell asleep on the couch.",
              "On Thursday, Adrian and Santi walked home side by side. When a car turned onto their street, the tape on Adrian's sneakers flashed bright silver in its headlights. The driver slowed down and waved for the boys to cross. This time, Mom smiled and waved from the window. Every evening that week, Adrian wrote down the minute the sun set to see how much earlier it came each day."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Mom is WORRIED about Adrian.",
              answers: ["At five o'clock, Mom stood at the front window with her phone in her hand and did not move until Adrian turned the corner."],
              kinds: {
                "On Tuesday, Mom got home from work at four and started dinner.": 'notproof',
                "She knew that the sun would set before Adrian's practice was over.": 'notproof',
                "Adrian's baby brother banged a spoon on his high chair.": 'wrongwho',
                "A pot of soup bubbled on the stove.": 'notproof'
              },
              notes: {
                "On Tuesday, Mom got home from work at four and started dinner.": "Paragraph 2 tells when Mom got home. It does not show how she feels.",
                "She knew that the sun would set before Adrian's practice was over.": "This one is close. Paragraph 2 says Mom knew it would be dark. That is WHY she might worry. But knowing is not worrying. It does not SHOW how she feels.",
                "Adrian's baby brother banged a spoon on his high chair.": "In paragraph 2, this sentence is about the baby, not Mom.",
                "A pot of soup bubbled on the stove.": "In paragraph 2, this sentence tells about the soup. It does not show how Mom feels."
              },
              why: "Paragraph 2 says Mom stood at the window with her phone in her hand. She did not move until she saw Adrian. That shows Mom is worried about him." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Adrian's walk home on Tuesday was DANGEROUS. That means he could have gotten hurt. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Practice ended at five o'clock, and then he walked the six blocks home by himself.",
                "The streetlights flickered on just as the coach blew the last whistle.",
                "At the corner of Kent Street, a driver turned without slowing down, and Adrian had to jump back onto the curb.",
                "Halfway down the next block, Adrian tripped on a broken piece of sidewalk that he never saw.",
                "Mr. Stokes said that turning back the clocks moves an hour of daylight from the evening to the morning.",
                "The driver slowed down and waved for the boys to cross."
              ],
              answers: ["At the corner of Kent Street, a driver turned without slowing down, and Adrian had to jump back onto the curb.", "Halfway down the next block, Adrian tripped on a broken piece of sidewalk that he never saw."],
              kinds: {
                "Practice ended at five o'clock, and then he walked the six blocks home by himself.": 'notproof',
                "The streetlights flickered on just as the coach blew the last whistle.": 'notproof',
                "Mr. Stokes said that turning back the clocks moves an hour of daylight from the evening to the morning.": 'wrongwho',
                "The driver slowed down and waved for the boys to cross.": 'wrongtime'
              },
              notes: {
                "Practice ended at five o'clock, and then he walked the six blocks home by himself.": "Paragraph 1 tells when Adrian walks home. It does not show that he could get hurt.",
                "The streetlights flickered on just as the coach blew the last whistle.": "This one is close. Paragraph 3 says it was getting dark. That is WHY the walk was not safe. But it does not SHOW Adrian almost getting hurt.",
                "Mr. Stokes said that turning back the clocks moves an hour of daylight from the evening to the morning.": "Paragraph 4 tells what Mr. Stokes said about the clocks. It does not show what happened on the walk.",
                "The driver slowed down and waved for the boys to cross.": "Paragraph 6 is about a later walk. This time, the driver slowed down. It does not show the walk on Tuesday."
              },
              why: "Paragraph 3 says a driver did not slow down. Adrian had to jump back. It also says he tripped on a broken sidewalk he could not see. Both show that the walk was dangerous." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 5,
              q: "Read paragraph 5. The passage shows that Adrian is a good PROBLEM SOLVER. He finds a way to fix a problem. Click on the TWO sentences in paragraph 5 that BEST support this idea.",
              answers: ["After dinner, he stuck strips of shiny tape that glows in car lights on his backpack and sneakers.", "Then he called Santi, a teammate who lived on his block, and asked if they could walk home together after practice."],
              kinds: {
                "Adrian wanted to keep walking home after practice, so he thought about the problem all through dinner.": 'notproof',
                "Outside, a cold wind rattled the windows and blew dry leaves down the street.": 'notproof',
                "Mom washed the dishes and hummed along with the radio.": 'wrongwho',
                "Adrian's baby brother fell asleep on the couch.": 'wrongwho'
              },
              notes: {
                "Adrian wanted to keep walking home after practice, so he thought about the problem all through dinner.": "This one is close. Paragraph 5 says Adrian thought about the problem. But thinking is not fixing. It does not SHOW how he solves the problem.",
                "Outside, a cold wind rattled the windows and blew dry leaves down the street.": "In paragraph 5, this sentence tells about the wind. It does not show Adrian fixing the problem.",
                "Mom washed the dishes and hummed along with the radio.": "In paragraph 5, this sentence is about Mom, not Adrian.",
                "Adrian's baby brother fell asleep on the couch.": "In paragraph 5, this sentence is about the baby, not Adrian."
              },
              why: "Paragraph 5 says Adrian put shiny tape on his bag and shoes. Now drivers could see him. He also asked Santi to walk home with him. Both show that he can solve a problem." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Adrian is CURIOUS. He wants to find out more about why it gets dark so early. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "In September, the sun was still high and warm when he left the field.",
                "Every car that passed Adrian had its headlights on.",
                "At school the next day, Adrian asked his science teacher, Mr. Stokes, why it got dark so much earlier now.",
                "Mr. Stokes also said that the days would keep getting shorter until the first day of winter.",
                "Mom washed the dishes and hummed along with the radio.",
                "Every evening that week, Adrian wrote down the minute the sun set to see how much earlier it came each day."
              ],
              answers: ["At school the next day, Adrian asked his science teacher, Mr. Stokes, why it got dark so much earlier now.", "Every evening that week, Adrian wrote down the minute the sun set to see how much earlier it came each day."],
              kinds: {
                "In September, the sun was still high and warm when he left the field.": 'notproof',
                "Every car that passed Adrian had its headlights on.": 'notproof',
                "Mr. Stokes also said that the days would keep getting shorter until the first day of winter.": 'wrongwho',
                "Mom washed the dishes and hummed along with the radio.": 'wrongwho'
              },
              notes: {
                "In September, the sun was still high and warm when he left the field.": "Paragraph 1 tells about the sun in September. It does not show Adrian trying to find out more.",
                "Every car that passed Adrian had its headlights on.": "Paragraph 3 tells about the cars. It does not show that Adrian is curious.",
                "Mr. Stokes also said that the days would keep getting shorter until the first day of winter.": "This one is close. Paragraph 4 tells a fact about the days. But Mr. Stokes says it. It does not SHOW Adrian trying to find out more.",
                "Mom washed the dishes and hummed along with the radio.": "In paragraph 5, this sentence is about Mom, not Adrian."
              },
              why: "Paragraph 4 says Adrian asked his teacher why it got dark so early. Paragraph 6 says he wrote down the time the sun set each night. He wanted to see the change. Both show that he is curious." }
          ]
        }
      ]
    },

    /* ───────── Version 3 ───────── */
    {
      teach: {
        story: {
          title: "The Morning Crew on Grove Street",
          paragraphs: [
            "Each Saturday, the basement of the rec center on Grove Street turned into a food pantry. Families came in from the cold to pick up food for the week. This fall, Naomi was old enough to join her mom on the morning crew.",
            "At eight o'clock, the long basement room was quiet. Naomi and Mom unpacked boxes of canned beans, rice, and peanut butter. They lined up the cans on the metal shelves with each label facing out.",
            "When the doors opened at nine, a line of people stretched up the stairs and out onto the street. For three hours, the crew filled grocery bags as fast as they could.",
            "Naomi's job was to hand each family its bags at the end of the line. A woman came through with a baby on one hip and a toddler holding her hand. Naomi carried the woman's two heavy bags all the way up the stairs to the street. Then an older man with a cane joined the end of the long line. Naomi pulled a folding chair over so that he could sit down while he waited. Mom held the door open for a man pushing a shopping cart. A pipe in the corner clanked and hissed.",
            "By noon, the shelves were almost bare, and the last family had gone home. Naomi sank onto a folding chair and let her arms hang down at her sides. Mom yawned and rubbed her lower back with both hands. The crew had packed more than eighty bags that morning. Mr. Webb, who ran the pantry, thanked the crew and handed out oranges from a wooden crate."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'How to click',
            lines: [
              "Today you will click on sentences in a passage. The passage is what you read.",
              "A paragraph is one part of the passage. Each paragraph has a number.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences, or Choose TWO, means pick two.",
              "With TWO, BOTH sentences must prove the idea. One right and one wrong gets no point, just like the test.",
              "BEST supports means the sentence proves the idea the most.",
              "Here is the tricky part. A sentence can be ABOUT the idea and still not SHOW it.",
              "Say the idea is that Lin is hungry. Lin's lunch was late. That is WHY she might be hungry. But it does not SHOW that she is hungry.",
              "Lin's tummy growled all through math. That SHOWS she is hungry. That is proof.",
              "A sentence that is about the idea but does not prove it is a close sentence. Watch out for it!"
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the TWO',
            lines: [
              "Let's do one together. Here is the question.",
              "The passage shows that Naomi is THOUGHTFUL. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              "Step 1. Say the idea. Naomi is thoughtful. She thinks about what other people need, and then she helps.",
              "Step 2. Find the paragraph. Paragraph 4 tells about Naomi's job at the end of the line.",
              "Step 3. Test each sentence. Ask, does this SHOW that Naomi is thoughtful?",
              "Naomi's job was to hand out the bags. That is just her job. The woman with the baby is not Naomi.",
              "Naomi carried the woman's heavy bags up the stairs. Yes! She saw that the woman's hands were full.",
              "Naomi pulled a chair over for the man with a cane. Yes! She thought about what he needed.",
              "Mom held the door open for a man. This one is close! It is a thoughtful thing to do. But it is about Mom, not Naomi.",
              "The man joining the line and the pipe in the corner do not tell about Naomi.",
              "The TWO thoughtful sentences are our answer. The close one lights up too, so you can see it.",
              "We click the two that SHOW the idea. Then we tap That's My Answer!"
            ],
            lit: [
              "Naomi carried the woman's two heavy bags all the way up the stairs to the street.",
              "Naomi pulled a folding chair over so that he could sit down while he waited.",
              "Mom held the door open for a man pushing a shopping cart."
            ] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 5,
            q: "Read paragraph 5. Click on the sentence in paragraph 5 that BEST shows that Naomi is TIRED.",
            answers: ["Naomi sank onto a folding chair and let her arms hang down at her sides."],
            kinds: {
              "By noon, the shelves were almost bare, and the last family had gone home.": 'notproof',
              "Mom yawned and rubbed her lower back with both hands.": 'wrongwho',
              "The crew had packed more than eighty bags that morning.": 'notproof',
              "Mr. Webb, who ran the pantry, thanked the crew and handed out oranges from a wooden crate.": 'wrongwho'
            },
            notes: {
              "By noon, the shelves were almost bare, and the last family had gone home.": "Paragraph 5 tells about the pantry at noon. It does not show how Naomi feels.",
              "Mom yawned and rubbed her lower back with both hands.": "This one is close. Paragraph 5 shows that someone is tired. But this sentence is about Mom, not Naomi.",
              "The crew had packed more than eighty bags that morning.": "Paragraph 5 says the crew packed a lot of bags. That is WHY Naomi might be tired. But it does not SHOW how she feels.",
              "Mr. Webb, who ran the pantry, thanked the crew and handed out oranges from a wooden crate.": "In paragraph 5, this sentence is about Mr. Webb, not Naomi."
            },
            why: "Paragraph 5 says Naomi sank onto a chair. Her arms hung down at her sides. That shows Naomi is tired." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that the pantry was very BUSY. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "Families came in from the cold to pick up food for the week.",
              "At eight o'clock, the long basement room was quiet.",
              "When the doors opened at nine, a line of people stretched up the stairs and out onto the street.",
              "For three hours, the crew filled grocery bags as fast as they could.",
              "A pipe in the corner clanked and hissed.",
              "Mr. Webb, who ran the pantry, thanked the crew and handed out oranges from a wooden crate."
            ],
            answers: ["When the doors opened at nine, a line of people stretched up the stairs and out onto the street.", "For three hours, the crew filled grocery bags as fast as they could."],
            kinds: {
              "Families came in from the cold to pick up food for the week.": 'notproof',
              "At eight o'clock, the long basement room was quiet.": 'wrongtime',
              "A pipe in the corner clanked and hissed.": 'notproof',
              "Mr. Webb, who ran the pantry, thanked the crew and handed out oranges from a wooden crate.": 'wrongtime'
            },
            notes: {
              "Families came in from the cold to pick up food for the week.": "Paragraph 1 tells what the pantry is for. It does not show how busy it was.",
              "At eight o'clock, the long basement room was quiet.": "This one is close. Paragraph 2 is about the pantry. But it tells about the time BEFORE the doors opened. Then the room was quiet.",
              "A pipe in the corner clanked and hissed.": "Paragraph 4 tells about a noisy pipe. It does not show how busy the pantry was.",
              "Mr. Webb, who ran the pantry, thanked the crew and handed out oranges from a wooden crate.": "Paragraph 5 tells what Mr. Webb did after the pantry closed. It does not show how busy it was."
            },
            why: "Paragraph 3 says a line of people went up the stairs and out to the street. It also says the crew packed bags as fast as they could. Both show that the pantry was busy." },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Find the part of the passage that talks about the idea.",
              "Step 3. Test each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out for the close sentence. It is about the idea, but it does not prove it.",
              "Step 4. Click the sentence that shows the idea. If the question says TWO, click two.",
              "Check BOTH. If one does not SHOW the idea, change it.",
              "To change a pick, tap it again. Then tap the right one.",
              "When you are sure, tap That's My Answer!",
              "Now you try."
            ] }
        ]
      },
      pre: {
        story: {
          title: "A Birthday Box for Tito",
          paragraphs: [
            "On Saturday morning, Carmen walked to the post office with her grandmother. Grandma Amparo had moved here from Peru in the spring, and she was still learning English. She held a box wrapped in brown paper for Carmen's cousin Tito, who was turning nine back in Peru. Tito loved soccer. Inside the box were a new soccer ball, a bag of candy, and a card that Carmen had made.",
            "The line stretched from the counter all the way to the door. The line barely moved. Grandma had heard that mailing a box to another country took a lot of forms. While they waited, she kept twisting the strap of her purse around her fingers. A man behind them talked loudly on his phone.",
            "Carmen had spoken Spanish with Grandma since she was a baby. At the counter, a clerk named Mr. Danso asked what was inside the box. Grandma held the box tight against her coat. Carmen asked Grandma the question in Spanish, and then she told Mr. Danso the answer in English. Next, Mr. Danso slid a long form across the counter. Carmen wrote her cousin's address on the form for Grandma in big, neat letters. Behind them, a baby started to cry. Mr. Danso set the box on a silver scale.",
            "Mr. Danso stamped the box and said it would reach Peru in about ten days. Grandma let out a long breath, and her shoulders finally relaxed. She squeezed Carmen's hand and thanked Mr. Danso in slow, careful English. On the walk home, Grandma hummed an old song and smiled at everyone they passed."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Grandma is NERVOUS.",
            answers: ["While they waited, she kept twisting the strap of her purse around her fingers."],
            kinds: {
              "The line stretched from the counter all the way to the door.": 'notproof',
              "The line barely moved.": 'notproof',
              "Grandma had heard that mailing a box to another country took a lot of forms.": 'notproof',
              "A man behind them talked loudly on his phone.": 'wrongwho'
            },
            notes: {
              "The line stretched from the counter all the way to the door.": "In paragraph 2, this sentence tells how long the line was. It does not show how Grandma feels.",
              "The line barely moved.": "In paragraph 2, this sentence tells about the slow line. It does not show how Grandma feels.",
              "Grandma had heard that mailing a box to another country took a lot of forms.": "This one is close. Paragraph 2 says Grandma heard there were lots of forms. That is WHY she might be nervous. But it does not SHOW how she feels.",
              "A man behind them talked loudly on his phone.": "In paragraph 2, this sentence is about a man on his phone, not Grandma."
            },
            why: "Paragraph 2 says Grandma kept twisting her purse strap around her fingers. People do that when they are nervous. So that sentence shows Grandma is nervous." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that Grandma feels RELIEVED after the box is mailed. That means she stops worrying. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "Grandma Amparo had moved here from Peru in the spring, and she was still learning English.",
              "While they waited, she kept twisting the strap of her purse around her fingers.",
              "Behind them, a baby started to cry.",
              "Mr. Danso stamped the box and said it would reach Peru in about ten days.",
              "Grandma let out a long breath, and her shoulders finally relaxed.",
              "On the walk home, Grandma hummed an old song and smiled at everyone they passed."
            ],
            answers: ["Grandma let out a long breath, and her shoulders finally relaxed.", "On the walk home, Grandma hummed an old song and smiled at everyone they passed."],
            kinds: {
              "Grandma Amparo had moved here from Peru in the spring, and she was still learning English.": 'notproof',
              "While they waited, she kept twisting the strap of her purse around her fingers.": 'wrongtime',
              "Behind them, a baby started to cry.": 'wrongwho',
              "Mr. Danso stamped the box and said it would reach Peru in about ten days.": 'notproof'
            },
            notes: {
              "Grandma Amparo had moved here from Peru in the spring, and she was still learning English.": "Paragraph 1 tells that Grandma is new here. It does not show how she feels after the box is mailed.",
              "While they waited, she kept twisting the strap of her purse around her fingers.": "Paragraph 2 shows Grandma before the box is mailed. Then she is nervous, not relieved.",
              "Behind them, a baby started to cry.": "In paragraph 3, this sentence is about a baby, not Grandma.",
              "Mr. Danso stamped the box and said it would reach Peru in about ten days.": "This one is close. Paragraph 4 tells WHY Grandma can stop worrying. But it is about Mr. Danso. It does not SHOW how Grandma feels."
            },
            why: "Paragraph 4 says Grandma let out a long breath. Her shoulders went loose. She also hummed and smiled on the way home. Both show that she feels relieved." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
            q: "Read paragraph 3. The passage shows that Carmen HELPS her grandmother. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
            answers: ["Carmen asked Grandma the question in Spanish, and then she told Mr. Danso the answer in English.", "Carmen wrote her cousin's address on the form for Grandma in big, neat letters."],
            kinds: {
              "Carmen had spoken Spanish with Grandma since she was a baby.": 'notproof',
              "At the counter, a clerk named Mr. Danso asked what was inside the box.": 'wrongwho',
              "Grandma held the box tight against her coat.": 'wrongwho',
              "Next, Mr. Danso slid a long form across the counter.": 'wrongwho',
              "Behind them, a baby started to cry.": 'wrongwho',
              "Mr. Danso set the box on a silver scale.": 'wrongwho'
            },
            notes: {
              "Carmen had spoken Spanish with Grandma since she was a baby.": "This one is close. Paragraph 3 tells why Carmen CAN help. She knows Spanish. But it does not SHOW her helping.",
              "At the counter, a clerk named Mr. Danso asked what was inside the box.": "In paragraph 3, this sentence is about Mr. Danso's question, not Carmen.",
              "Grandma held the box tight against her coat.": "In paragraph 3, this sentence is about Grandma, not Carmen.",
              "Next, Mr. Danso slid a long form across the counter.": "In paragraph 3, this sentence is about Mr. Danso and the form, not Carmen.",
              "Behind them, a baby started to cry.": "In paragraph 3, this sentence is about a baby, not Carmen.",
              "Mr. Danso set the box on a silver scale.": "In paragraph 3, this sentence is about Mr. Danso and the box, not Carmen."
            },
            why: "Paragraph 3 says Carmen asked Grandma the question in Spanish. Then she told Mr. Danso the answer. She also wrote the address on the form for Grandma. Both show that Carmen helps Grandma." }
        ]
      },
      turn: [
        {
          story: {
            title: "The Last Box from 1B",
            paragraphs: [
              "On a chilly Saturday in October, a big orange moving truck backed up to the curb in front of Iris's building. Mr. Bianchi, who lived on the first floor, was moving across the city to be near his daughter. He had lived in apartment 1B for forty years, since long before Iris was born. Iris and her dad had promised to help him pack the last of his things.",
              "When Iris knocked, Mr. Bianchi opened the door in his old green sweater. Cardboard boxes stood in stacks all over the living room. Mr. Bianchi stood by the front window for a long time, and his eyes were wet. A pigeon landed on the windowsill and pecked at the glass. Dad asked where to find the tape and the markers.",
              "Mr. Bianchi asked Iris to pack up the kitchen. Iris wrote the word KITCHEN in big letters on the side of every box she filled. She put all the forks, spoons, and knives in one bag, so Mr. Bianchi could find them on his first night. Mr. Bianchi's old radio played jazz on the counter while Iris worked. Out at the truck, Dad lined up the boxes by room, with the bedroom boxes in the back. The old refrigerator hummed and rattled in the corner. By lunch, every cupboard in the kitchen was empty.",
              "After lunch, they started on the living room. Mr. Bianchi kept his old records in wooden crates that he had painted bright blue. He pulled out one record after another and told Iris the name of the singer on each cover. Dad bent his knees, grabbed a crate of records, and could barely lift it off the floor. In the end, each crate took two people to carry out to the truck.",
              "At four o'clock, the movers shut the back of the truck. Mr. Bianchi's daughter, who had driven in to help, hugged Dad and thanked him for all his help. Then Mr. Bianchi shook Iris's hand and thanked her three times in a row. He handed Iris his old radio, so she would have music while she did her homework. Iris stood on the front steps and waved until the orange truck turned the corner."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Mr. Bianchi is SAD to leave his home.",
              answers: ["Mr. Bianchi stood by the front window for a long time, and his eyes were wet."],
              kinds: {
                "When Iris knocked, Mr. Bianchi opened the door in his old green sweater.": 'notproof',
                "Cardboard boxes stood in stacks all over the living room.": 'notproof',
                "A pigeon landed on the windowsill and pecked at the glass.": 'notproof',
                "Dad asked where to find the tape and the markers.": 'wrongwho'
              },
              notes: {
                "When Iris knocked, Mr. Bianchi opened the door in his old green sweater.": "In paragraph 2, this sentence tells what Mr. Bianchi wore. It does not show how he feels.",
                "Cardboard boxes stood in stacks all over the living room.": "This one is close. Paragraph 2 shows that Mr. Bianchi is about to move. But the boxes do not SHOW how he feels about it.",
                "A pigeon landed on the windowsill and pecked at the glass.": "In paragraph 2, this sentence is about a pigeon, not Mr. Bianchi.",
                "Dad asked where to find the tape and the markers.": "In paragraph 2, this sentence is about Dad, not Mr. Bianchi."
              },
              why: "Paragraph 2 says Mr. Bianchi stood at the window a long time. His eyes were wet. That shows he is sad to leave his home." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the crates of records are very HEAVY. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "On a chilly Saturday in October, a big orange moving truck backed up to the curb in front of Iris's building.",
                "Cardboard boxes stood in stacks all over the living room.",
                "Mr. Bianchi's old radio played jazz on the counter while Iris worked.",
                "Mr. Bianchi kept his old records in wooden crates that he had painted bright blue.",
                "Dad bent his knees, grabbed a crate of records, and could barely lift it off the floor.",
                "In the end, each crate took two people to carry out to the truck."
              ],
              answers: ["Dad bent his knees, grabbed a crate of records, and could barely lift it off the floor.", "In the end, each crate took two people to carry out to the truck."],
              kinds: {
                "On a chilly Saturday in October, a big orange moving truck backed up to the curb in front of Iris's building.": 'notproof',
                "Cardboard boxes stood in stacks all over the living room.": 'notproof',
                "Mr. Bianchi's old radio played jazz on the counter while Iris worked.": 'notproof',
                "Mr. Bianchi kept his old records in wooden crates that he had painted bright blue.": 'notproof'
              },
              notes: {
                "On a chilly Saturday in October, a big orange moving truck backed up to the curb in front of Iris's building.": "Paragraph 1 tells about the moving truck. It does not show how heavy the records are.",
                "Cardboard boxes stood in stacks all over the living room.": "Paragraph 2 tells about the cardboard boxes. It does not tell about the record crates.",
                "Mr. Bianchi's old radio played jazz on the counter while Iris worked.": "Paragraph 3 tells about the radio in the kitchen. It does not tell about the record crates.",
                "Mr. Bianchi kept his old records in wooden crates that he had painted bright blue.": "This one is close. Paragraph 4 is about the record crates. But it tells what color they were. It does not SHOW how heavy they were."
              },
              why: "Paragraph 4 says Dad could barely lift one crate. It also says each crate took two people to carry. Both show that the crates are heavy." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
              q: "Read paragraph 3. The passage shows that Iris is ORGANIZED. She keeps things in order, so they are easy to find. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              answers: ["Iris wrote the word KITCHEN in big letters on the side of every box she filled.", "She put all the forks, spoons, and knives in one bag, so Mr. Bianchi could find them on his first night."],
              kinds: {
                "Mr. Bianchi asked Iris to pack up the kitchen.": 'notproof',
                "Mr. Bianchi's old radio played jazz on the counter while Iris worked.": 'notproof',
                "Out at the truck, Dad lined up the boxes by room, with the bedroom boxes in the back.": 'wrongwho',
                "The old refrigerator hummed and rattled in the corner.": 'notproof',
                "By lunch, every cupboard in the kitchen was empty.": 'notproof'
              },
              notes: {
                "Mr. Bianchi asked Iris to pack up the kitchen.": "In paragraph 3, this sentence tells what job Iris got. It does not show HOW she did the job.",
                "Mr. Bianchi's old radio played jazz on the counter while Iris worked.": "In paragraph 3, this sentence is about the radio, not Iris. It does not show her putting things in order.",
                "Out at the truck, Dad lined up the boxes by room, with the bedroom boxes in the back.": "This one is close. Paragraph 3 shows someone putting things in order. But this sentence is about Dad, not Iris.",
                "The old refrigerator hummed and rattled in the corner.": "In paragraph 3, this sentence is about the refrigerator, not Iris.",
                "By lunch, every cupboard in the kitchen was empty.": "Paragraph 3 says the cupboards were empty by lunch. That shows the job got done. It does not show that Iris kept things in order."
              },
              why: "Paragraph 3 says Iris wrote the word KITCHEN on every box. She also kept the forks, spoons, and knives together in one bag. Both show that Iris is organized." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Mr. Bianchi is THANKFUL for Iris's help. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Iris and her dad had promised to help him pack the last of his things.",
                "Mr. Bianchi asked Iris to pack up the kitchen.",
                "He pulled out one record after another and told Iris the name of the singer on each cover.",
                "Mr. Bianchi's daughter, who had driven in to help, hugged Dad and thanked him for all his help.",
                "Then Mr. Bianchi shook Iris's hand and thanked her three times in a row.",
                "He handed Iris his old radio, so she would have music while she did her homework."
              ],
              answers: ["Then Mr. Bianchi shook Iris's hand and thanked her three times in a row.", "He handed Iris his old radio, so she would have music while she did her homework."],
              kinds: {
                "Iris and her dad had promised to help him pack the last of his things.": 'notproof',
                "Mr. Bianchi asked Iris to pack up the kitchen.": 'notproof',
                "He pulled out one record after another and told Iris the name of the singer on each cover.": 'notproof',
                "Mr. Bianchi's daughter, who had driven in to help, hugged Dad and thanked him for all his help.": 'wrongwho'
              },
              notes: {
                "Iris and her dad had promised to help him pack the last of his things.": "Paragraph 1 says Iris promised to help. It does not show how Mr. Bianchi feels about her help.",
                "Mr. Bianchi asked Iris to pack up the kitchen.": "Paragraph 3 tells what job Mr. Bianchi gave Iris. It does not show that he is thankful.",
                "He pulled out one record after another and told Iris the name of the singer on each cover.": "Paragraph 4 shows Mr. Bianchi talking about his records. It does not show that he is thankful.",
                "Mr. Bianchi's daughter, who had driven in to help, hugged Dad and thanked him for all his help.": "This one is close. Paragraph 5 shows someone saying thank you. But it is the daughter thanking Dad, not Mr. Bianchi thanking Iris."
              },
              why: "Paragraph 5 says Mr. Bianchi thanked Iris three times. He also gave her his old radio. Both show that he is thankful for her help." }
          ]
        },
        {
          story: {
            title: "The Honey Table in Fulton Square",
            paragraphs: [
              "All summer and fall, Elio's aunt Lupe sold honey at the farmers market in Fulton Square. She kept six beehives on the flat roof of her building. On the last market day of the year, Elio got to help at her stall for the very first time.",
              "At seven o'clock, Elio helped his aunt set up the folding table and the striped tent. Then he began to stack the honey jars into a tall tower at the front of the table. His elbow bumped the bottom row, and four jars rolled onto the ground. Elio's cheeks turned hot and red, and he stared down at his shoes. Aunt Lupe picked up the jars and said that not one of them had cracked.",
              "By ten o'clock, the square was crowded with shoppers in hats and scarves. A woman in a red coat bought a jar of honey and hurried off toward the bakery tent. When Elio looked at the money she had given him, he found two bills stuck together instead of one. He grabbed the extra bill, ran through the crowd, and gave it back to her. Later, a boy picked up a candle and asked if it was just as good as the others. Elio turned the candle over, showed the boy a crack on the bottom, and handed him a better one. Aunt Lupe always warned shoppers that her dark honey was not as sweet as the light kind.",
              "Later that morning, Aunt Lupe poured free tastes of honey onto small wooden spoons. One man tasted the dark honey and bought four jars on the spot. Aunt Lupe handed Elio the cash box and walked to the van for another crate of jars. A man played a fiddle by the fountain, and a dog howled along. By noon, all of the dark honey had been sold.",
              "At lunchtime, Aunt Lupe let Elio run the stall by himself while she ate a sandwich on a bench nearby. Elio sold six jars and two candles before she came back. When the market closed, Aunt Lupe gave Elio a small jar of honey with his name written on the lid."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Elio feels EMBARRASSED. That means he feels silly and wishes no one had seen.",
              answers: ["Elio's cheeks turned hot and red, and he stared down at his shoes."],
              kinds: {
                "At seven o'clock, Elio helped his aunt set up the folding table and the striped tent.": 'notproof',
                "Then he began to stack the honey jars into a tall tower at the front of the table.": 'notproof',
                "His elbow bumped the bottom row, and four jars rolled onto the ground.": 'notproof',
                "Aunt Lupe picked up the jars and said that not one of them had cracked.": 'wrongwho'
              },
              notes: {
                "At seven o'clock, Elio helped his aunt set up the folding table and the striped tent.": "Paragraph 2 tells how the day started. It does not show how Elio feels.",
                "Then he began to stack the honey jars into a tall tower at the front of the table.": "In paragraph 2, this sentence tells what Elio was doing. It does not show how he feels.",
                "His elbow bumped the bottom row, and four jars rolled onto the ground.": "This one is close. Paragraph 2 tells what went wrong. That is the reason Elio feels silly. But it does not SHOW his feelings.",
                "Aunt Lupe picked up the jars and said that not one of them had cracked.": "In paragraph 2, this sentence is about Aunt Lupe, not Elio."
              },
              why: "Paragraph 2 says Elio's cheeks turned red. He looked down at his shoes. That shows Elio feels embarrassed." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that shoppers LIKE Aunt Lupe's honey. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "All summer and fall, Elio's aunt Lupe sold honey at the farmers market in Fulton Square.",
                "Then he began to stack the honey jars into a tall tower at the front of the table.",
                "By ten o'clock, the square was crowded with shoppers in hats and scarves.",
                "Later that morning, Aunt Lupe poured free tastes of honey onto small wooden spoons.",
                "One man tasted the dark honey and bought four jars on the spot.",
                "By noon, all of the dark honey had been sold."
              ],
              answers: ["One man tasted the dark honey and bought four jars on the spot.", "By noon, all of the dark honey had been sold."],
              kinds: {
                "All summer and fall, Elio's aunt Lupe sold honey at the farmers market in Fulton Square.": 'notproof',
                "Then he began to stack the honey jars into a tall tower at the front of the table.": 'notproof',
                "By ten o'clock, the square was crowded with shoppers in hats and scarves.": 'notproof',
                "Later that morning, Aunt Lupe poured free tastes of honey onto small wooden spoons.": 'wrongwho'
              },
              notes: {
                "All summer and fall, Elio's aunt Lupe sold honey at the farmers market in Fulton Square.": "Paragraph 1 tells when and where Aunt Lupe sells honey. It does not show what shoppers think of it.",
                "Then he began to stack the honey jars into a tall tower at the front of the table.": "Paragraph 2 tells how Elio set out the jars. It does not show what shoppers think of the honey.",
                "By ten o'clock, the square was crowded with shoppers in hats and scarves.": "Paragraph 3 says the market was crowded. But a crowd at the market does not show that shoppers like the honey.",
                "Later that morning, Aunt Lupe poured free tastes of honey onto small wooden spoons.": "This one is close. Paragraph 4 is about tasting the honey. But Aunt Lupe is the one pouring it. It does not show what shoppers think."
              },
              why: "Paragraph 4 says one man tasted the honey and bought four jars. It also says all the dark honey was gone by noon. Both show that shoppers like the honey." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
              q: "Read paragraph 3. The passage shows that Elio is HONEST. He tells the truth and does not keep what is not his. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              answers: ["He grabbed the extra bill, ran through the crowd, and gave it back to her.", "Elio turned the candle over, showed the boy a crack on the bottom, and handed him a better one."],
              kinds: {
                "By ten o'clock, the square was crowded with shoppers in hats and scarves.": 'notproof',
                "A woman in a red coat bought a jar of honey and hurried off toward the bakery tent.": 'wrongwho',
                "When Elio looked at the money she had given him, he found two bills stuck together instead of one.": 'notproof',
                "Later, a boy picked up a candle and asked if it was just as good as the others.": 'wrongwho',
                "Aunt Lupe always warned shoppers that her dark honey was not as sweet as the light kind.": 'wrongwho'
              },
              notes: {
                "By ten o'clock, the square was crowded with shoppers in hats and scarves.": "In paragraph 3, this sentence tells about the crowd. It does not show what Elio did.",
                "A woman in a red coat bought a jar of honey and hurried off toward the bakery tent.": "In paragraph 3, this sentence is about a woman, not Elio.",
                "When Elio looked at the money she had given him, he found two bills stuck together instead of one.": "Paragraph 3 tells the problem Elio found. It does not show what he did about it.",
                "Later, a boy picked up a candle and asked if it was just as good as the others.": "In paragraph 3, this sentence is about a boy's question, not Elio.",
                "Aunt Lupe always warned shoppers that her dark honey was not as sweet as the light kind.": "This one is close. Paragraph 3 shows someone telling the truth. But this sentence is about Aunt Lupe, not Elio."
              },
              why: "Paragraph 3 says Elio ran after the woman to give back her extra money. He also showed a boy the crack in a candle. Both show that Elio is honest." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Aunt Lupe TRUSTS Elio. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "She kept six beehives on the flat roof of her building.",
                "Aunt Lupe picked up the jars and said that not one of them had cracked.",
                "A woman in a red coat bought a jar of honey and hurried off toward the bakery tent.",
                "Aunt Lupe handed Elio the cash box and walked to the van for another crate of jars.",
                "At lunchtime, Aunt Lupe let Elio run the stall by himself while she ate a sandwich on a bench nearby.",
                "When the market closed, Aunt Lupe gave Elio a small jar of honey with his name written on the lid."
              ],
              answers: ["Aunt Lupe handed Elio the cash box and walked to the van for another crate of jars.", "At lunchtime, Aunt Lupe let Elio run the stall by himself while she ate a sandwich on a bench nearby."],
              kinds: {
                "She kept six beehives on the flat roof of her building.": 'notproof',
                "Aunt Lupe picked up the jars and said that not one of them had cracked.": 'notproof',
                "A woman in a red coat bought a jar of honey and hurried off toward the bakery tent.": 'wrongwho',
                "When the market closed, Aunt Lupe gave Elio a small jar of honey with his name written on the lid.": 'notproof'
              },
              notes: {
                "She kept six beehives on the flat roof of her building.": "Paragraph 1 tells where Aunt Lupe keeps her bees. It does not show how she feels about Elio.",
                "Aunt Lupe picked up the jars and said that not one of them had cracked.": "Paragraph 2 shows Aunt Lupe staying calm after the jars fell. It does not show her trusting Elio with a job.",
                "A woman in a red coat bought a jar of honey and hurried off toward the bakery tent.": "In paragraph 3, this sentence is about a woman, not Aunt Lupe or Elio.",
                "When the market closed, Aunt Lupe gave Elio a small jar of honey with his name written on the lid.": "This one is close. Paragraph 5 shows Aunt Lupe being kind to Elio. But a gift is a thank-you. It does not show that she trusts him with a job."
              },
              why: "Paragraph 4 says Aunt Lupe left Elio with the cash box. Paragraph 5 says she let him run the stall alone. Both show that she trusts Elio." }
          ]
        }
      ]
    },

    /* ───────── Version 4 ───────── */
    {
      teach: {
        story: {
          title: "The Drip in Apartment 5C",
          paragraphs: [
            "Vera's uncle Nate could fix a squeaky door, a stuck lock, or a broken toaster. On Saturday, Mrs. Petrov on the fifth floor called him about her kitchen sink. Vera grabbed her jacket and carried his red toolbox up the stairs.",
            "Mrs. Petrov led them into a small, sunny kitchen. Her faucet had dripped for a whole week. She had stuffed a dish towel into the sink, so she would not have to hear the drip all night. A gray cat sat on top of the fridge and watched them. Uncle Nate set the toolbox on the counter and rolled up his sleeves.",
            "Uncle Nate turned off the water under the sink and took the faucet handle apart. Vera watched each turn of his wrench and did not look away once. Inside the faucet was a tiny rubber ring called a washer. Uncle Nate held the washer up to the light and squinted at it. Vera spotted a thin crack in the washer before her uncle said a word. A pot of rice steamed on the stove behind them.",
            "Uncle Nate let Vera press a new washer into place and screw the handle back on. Then Vera turned the water on and held her breath. Not one drop fell from the faucet.",
            "Uncle Nate patted Vera on the back and said she had sharp eyes. Vera turned the handle on and off three times to show Mrs. Petrov that the faucet worked. Mrs. Petrov gave them a bag of lemon cookies to take home.",
            "That night at dinner, Vera told her whole family how she had spotted the cracked washer."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'How to click',
            lines: [
              "Today you will click on sentences in a passage. The passage is what you read.",
              "A paragraph is one part of the passage. Each paragraph has a number.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences, or Choose TWO, means pick two.",
              "With TWO, BOTH sentences must prove the idea. One right and one wrong gets no point, just like the test.",
              "BEST supports means the sentence proves the idea the most.",
              "Here is the tricky part. A sentence can be ABOUT the idea and still not SHOW it.",
              "Say the idea is that Lin is hungry. Lin's lunch was late. That is WHY she might be hungry. But it does not SHOW that she is hungry.",
              "Lin's tummy growled all through math. That SHOWS she is hungry. That is proof.",
              "A sentence that is about the idea but does not prove it is a close sentence. Watch out for it!"
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the TWO',
            lines: [
              "Let's do one together. Here is the question.",
              "The passage shows that Vera PAYS CLOSE ATTENTION. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              "Step 1. Say the idea. Vera pays close attention. She watches so closely that she sees small things.",
              "Step 2. Find the paragraph. Paragraph 3 tells how Uncle Nate takes the faucet apart.",
              "Step 3. Test each sentence. Ask, does this SHOW that Vera pays close attention?",
              "Uncle Nate turned off the water. That is about Uncle Nate, not Vera.",
              "Vera watched each turn of the wrench. Yes! She did not look away once.",
              "Uncle Nate held the washer up to the light and squinted. This one is close! He is looking closely. But it is about Uncle Nate, not Vera.",
              "Vera spotted the crack before her uncle said a word. Yes! She saw a tiny thing first.",
              "The rubber ring and the pot of rice do not tell about Vera at all.",
              "The TWO sentences that show Vera paying attention are our answer. The close one lights up too, so you can see it.",
              "We click the two that SHOW the idea. Then we tap That's My Answer!"
            ],
            lit: [
              "Vera watched each turn of his wrench and did not look away once.",
              "Vera spotted a thin crack in the washer before her uncle said a word.",
              "Uncle Nate held the washer up to the light and squinted at it."
            ] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that the drip BOTHERS Mrs. Petrov.",
            answers: ["She had stuffed a dish towel into the sink, so she would not have to hear the drip all night."],
            kinds: {
              "Mrs. Petrov led them into a small, sunny kitchen.": 'notproof',
              "Her faucet had dripped for a whole week.": 'notproof',
              "A gray cat sat on top of the fridge and watched them.": 'wrongwho',
              "Uncle Nate set the toolbox on the counter and rolled up his sleeves.": 'wrongwho'
            },
            notes: {
              "Mrs. Petrov led them into a small, sunny kitchen.": "Paragraph 2 tells about the kitchen. It does not show how Mrs. Petrov feels about the drip.",
              "Her faucet had dripped for a whole week.": "This one is close. Paragraph 2 tells how long the faucet dripped. That is WHY the drip might bother Mrs. Petrov. But it does not SHOW how she feels.",
              "A gray cat sat on top of the fridge and watched them.": "In paragraph 2, this sentence is about a cat, not Mrs. Petrov.",
              "Uncle Nate set the toolbox on the counter and rolled up his sleeves.": "In paragraph 2, this sentence is about Uncle Nate, not Mrs. Petrov."
            },
            why: "Paragraph 2 says Mrs. Petrov stuffed a towel in the sink. She did not want to hear the drip at night. That shows the drip bothers her." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that Vera is PROUD of the job she did. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "Vera's uncle Nate could fix a squeaky door, a stuck lock, or a broken toaster.",
              "A gray cat sat on top of the fridge and watched them.",
              "Not one drop fell from the faucet.",
              "Uncle Nate patted Vera on the back and said she had sharp eyes.",
              "Vera turned the handle on and off three times to show Mrs. Petrov that the faucet worked.",
              "That night at dinner, Vera told her whole family how she had spotted the cracked washer."
            ],
            answers: ["Vera turned the handle on and off three times to show Mrs. Petrov that the faucet worked.", "That night at dinner, Vera told her whole family how she had spotted the cracked washer."],
            kinds: {
              "Vera's uncle Nate could fix a squeaky door, a stuck lock, or a broken toaster.": 'wrongwho',
              "A gray cat sat on top of the fridge and watched them.": 'notproof',
              "Not one drop fell from the faucet.": 'notproof',
              "Uncle Nate patted Vera on the back and said she had sharp eyes.": 'wrongwho'
            },
            notes: {
              "Vera's uncle Nate could fix a squeaky door, a stuck lock, or a broken toaster.": "Paragraph 1 tells about Uncle Nate. It does not show how Vera feels.",
              "A gray cat sat on top of the fridge and watched them.": "Paragraph 2 tells about a cat. It does not show how Vera feels.",
              "Not one drop fell from the faucet.": "Paragraph 4 says the faucet stopped dripping. That is WHY Vera might be proud. But it does not SHOW how she feels.",
              "Uncle Nate patted Vera on the back and said she had sharp eyes.": "This one is close. Paragraph 5 shows that someone is proud of Vera. But this sentence is about Uncle Nate. The question asks how Vera feels."
            },
            why: "Paragraph 5 says Vera showed Mrs. Petrov the faucet three times. Paragraph 6 says she told her whole family about the washer. Both show that Vera is proud." },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Find the part of the passage that talks about the idea.",
              "Step 3. Test each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out for the close sentence. It is about the idea, but it does not prove it.",
              "Step 4. Click the sentence that shows the idea. If the question says TWO, click two.",
              "Check BOTH. If one does not SHOW the idea, change it.",
              "To change a pick, tap it again. Then tap the right one.",
              "When you are sure, tap That's My Answer!",
              "Now you try."
            ] }
        ]
      },
      pre: {
        story: {
          title: "Two Hundred Yellow Flyers",
          paragraphs: [
            "The Linden Street Rec Center was holding a pancake breakfast on Sunday to raise money for new swings. Ms. Chen, who ran the center, needed helpers to hand out flyers. Daphne and her friend Toby picked up a stack of two hundred bright yellow flyers on Friday after school.",
            "The first building on their list had six floors and no elevator. Toby dragged his feet up the stairs and groaned at every landing. Daphne carried the flyers in a canvas bag over her shoulder. A man on the third floor was carrying a bike down the stairs. Somewhere above them, a radio played loud music.",
            "On each floor, Daphne took out one flyer for every door. An older woman in a bathrobe opened the door of apartment 4A. Daphne smiled, said good afternoon, and held out a flyer with both hands. The woman frowned and said that she did not eat pancakes. Daphne thanked her anyway and wished her a nice weekend. Toby slid a flyer under the next door without knocking at all. The hallway smelled like onions and fresh bread.",
            "They handed out the last flyer on Saturday, just as the streetlights came on. Toby said that the job had been more fun than he expected.",
            "On Sunday morning, the line for pancakes stretched all the way around the block. By nine o'clock, the cooks had run out of batter twice. Ms. Chen saved the first two pancakes for Daphne and Toby."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Toby does NOT LIKE climbing all those stairs.",
            answers: ["Toby dragged his feet up the stairs and groaned at every landing."],
            kinds: {
              "The first building on their list had six floors and no elevator.": 'notproof',
              "Daphne carried the flyers in a canvas bag over her shoulder.": 'wrongwho',
              "A man on the third floor was carrying a bike down the stairs.": 'wrongwho',
              "Somewhere above them, a radio played loud music.": 'notproof'
            },
            notes: {
              "The first building on their list had six floors and no elevator.": "This one is close. Paragraph 2 tells about all the stairs. That is WHY Toby might not like them. But it does not SHOW how he feels.",
              "Daphne carried the flyers in a canvas bag over her shoulder.": "In paragraph 2, this sentence is about Daphne, not Toby.",
              "A man on the third floor was carrying a bike down the stairs.": "In paragraph 2, this sentence is about a man with a bike, not Toby.",
              "Somewhere above them, a radio played loud music.": "In paragraph 2, this sentence tells about a radio. It does not show how Toby feels."
            },
            why: "Paragraph 2 says Toby dragged his feet. He groaned at every landing. That shows he does not like climbing the stairs." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that LOTS of people came to the pancake breakfast. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "The Linden Street Rec Center was holding a pancake breakfast on Sunday to raise money for new swings.",
              "A man on the third floor was carrying a bike down the stairs.",
              "The woman frowned and said that she did not eat pancakes.",
              "They handed out the last flyer on Saturday, just as the streetlights came on.",
              "On Sunday morning, the line for pancakes stretched all the way around the block.",
              "By nine o'clock, the cooks had run out of batter twice."
            ],
            answers: ["On Sunday morning, the line for pancakes stretched all the way around the block.", "By nine o'clock, the cooks had run out of batter twice."],
            kinds: {
              "The Linden Street Rec Center was holding a pancake breakfast on Sunday to raise money for new swings.": 'notproof',
              "A man on the third floor was carrying a bike down the stairs.": 'notproof',
              "The woman frowned and said that she did not eat pancakes.": 'wrongtime',
              "They handed out the last flyer on Saturday, just as the streetlights came on.": 'wrongtime'
            },
            notes: {
              "The Linden Street Rec Center was holding a pancake breakfast on Sunday to raise money for new swings.": "Paragraph 1 tells why the breakfast was held. It does not show how many people came.",
              "A man on the third floor was carrying a bike down the stairs.": "Paragraph 2 is about a man with a bike. It does not tell about the breakfast.",
              "The woman frowned and said that she did not eat pancakes.": "Paragraph 3 says one woman did not want pancakes. That was before the breakfast. It does not show how many people came.",
              "They handed out the last flyer on Saturday, just as the streetlights came on.": "This one is close. Paragraph 4 is about getting people to come. But it tells about Saturday, the day BEFORE the breakfast."
            },
            why: "Paragraph 5 says the line went all the way around the block. It also says the cooks ran out of batter two times. Both show that lots of people came." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
            q: "Read paragraph 3. The passage shows that Daphne is POLITE. She has good manners. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
            answers: ["Daphne smiled, said good afternoon, and held out a flyer with both hands.", "Daphne thanked her anyway and wished her a nice weekend."],
            kinds: {
              "On each floor, Daphne took out one flyer for every door.": 'notproof',
              "An older woman in a bathrobe opened the door of apartment 4A.": 'wrongwho',
              "The woman frowned and said that she did not eat pancakes.": 'wrongwho',
              "Toby slid a flyer under the next door without knocking at all.": 'wrongwho',
              "The hallway smelled like onions and fresh bread.": 'notproof'
            },
            notes: {
              "On each floor, Daphne took out one flyer for every door.": "In paragraph 3, this sentence tells how Daphne got the flyers ready. It does not show her manners.",
              "An older woman in a bathrobe opened the door of apartment 4A.": "In paragraph 3, this sentence is about the woman, not Daphne.",
              "The woman frowned and said that she did not eat pancakes.": "In paragraph 3, this sentence is about what the woman said, not Daphne.",
              "Toby slid a flyer under the next door without knocking at all.": "This one is close. Paragraph 3 is about how the kids act at each door. But this sentence is about Toby, not Daphne.",
              "The hallway smelled like onions and fresh bread.": "In paragraph 3, this sentence tells how the hallway smelled. It does not show Daphne's manners."
            },
            why: "Paragraph 3 says Daphne smiled and said good afternoon. She also thanked the woman, even after the woman said no. Both show that Daphne is polite." }
        ]
      },
      turn: [
        {
          story: {
            title: "Ball Kid on Court Three",
            paragraphs: [
              "Every August, the city held a junior tennis tournament at Lowell Park. Young players from all over the state came to play on its six green courts. Each match needed two ball kids to chase loose balls and hand towels to the players. This year, Kwame was finally old enough to be a ball kid.",
              "At training, Coach Ferraro taught the ball kids the rules. They had to crouch by the net, roll each ball along the ground, and stand perfectly still during a point. Kwame practiced in his driveway every evening with a bucket of old balls.",
              "On the first day of the tournament, Kwame pulled on his blue ball-kid shirt. Today would be the first real match that Kwame had ever worked. Kwame reached the park gate forty minutes early and bounced on his toes the whole time he waited. His dad bought a newspaper from a stand and sat down on a bench.",
              "The match on Court Three began at nine o'clock sharp. Kwame remembered that Coach Ferraro wanted every loose ball off the court within three seconds. On the very first point, a ball smacked into the net and rolled toward the middle. Kwame dashed out, scooped it up before it stopped rolling, and was back in his crouch in a flash. Later, a ball bounced high off the back fence, and Kwame snatched it out of the air with one hand. Grady, the other ball kid, dropped a ball and had to chase it across the court. The umpire called out the score from her tall chair.",
              "By noon, the green court was so hot that Kwame could feel the heat through his sneakers. Between games, one player poured a whole bottle of water over her own head. Each time a player raised a hand, Kwame jogged over with a towel. The umpire opened a big white umbrella over her chair.",
              "When the match ended, the winner jogged over and thanked Kwame for being so fast. The other player gave Kwame her striped wristband to thank him for the towels. Coach Ferraro told all the ball kids that they had done a fine job. On the drive home, Kwame wore the wristband and told his dad about every single point."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 3,
              q: "Read paragraph 3. Click on the sentence in paragraph 3 that BEST shows that Kwame is EXCITED about his first match.",
              answers: ["Kwame reached the park gate forty minutes early and bounced on his toes the whole time he waited."],
              kinds: {
                "On the first day of the tournament, Kwame pulled on his blue ball-kid shirt.": 'notproof',
                "Today would be the first real match that Kwame had ever worked.": 'notproof',
                "His dad bought a newspaper from a stand and sat down on a bench.": 'wrongwho'
              },
              notes: {
                "On the first day of the tournament, Kwame pulled on his blue ball-kid shirt.": "In paragraph 3, this sentence tells what Kwame wore. It does not show how he feels.",
                "Today would be the first real match that Kwame had ever worked.": "This one is close. Paragraph 3 says this is Kwame's first real match. That is WHY he might be excited. But it does not SHOW how he feels.",
                "His dad bought a newspaper from a stand and sat down on a bench.": "In paragraph 3, this sentence is about Kwame's dad, not Kwame."
              },
              why: "Paragraph 3 says Kwame got to the gate forty minutes early. He bounced on his toes while he waited. That shows he is excited." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the day of the match was very HOT. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Every August, the city held a junior tennis tournament at Lowell Park.",
                "Kwame practiced in his driveway every evening with a bucket of old balls.",
                "The umpire called out the score from her tall chair.",
                "By noon, the green court was so hot that Kwame could feel the heat through his sneakers.",
                "Between games, one player poured a whole bottle of water over her own head.",
                "On the drive home, Kwame wore the wristband and told his dad about every single point."
              ],
              answers: ["By noon, the green court was so hot that Kwame could feel the heat through his sneakers.", "Between games, one player poured a whole bottle of water over her own head."],
              kinds: {
                "Every August, the city held a junior tennis tournament at Lowell Park.": 'notproof',
                "Kwame practiced in his driveway every evening with a bucket of old balls.": 'wrongtime',
                "The umpire called out the score from her tall chair.": 'wrongwho',
                "On the drive home, Kwame wore the wristband and told his dad about every single point.": 'wrongtime'
              },
              notes: {
                "Every August, the city held a junior tennis tournament at Lowell Park.": "This one is close. Paragraph 1 says the tournament is in August. Summer days CAN be hot. But this sentence does not SHOW that this day was hot.",
                "Kwame practiced in his driveway every evening with a bucket of old balls.": "Paragraph 2 tells how Kwame practiced at home. It does not show the weather on the day of the match.",
                "The umpire called out the score from her tall chair.": "In paragraph 4, this sentence is about the umpire and the score. It does not show the heat.",
                "On the drive home, Kwame wore the wristband and told his dad about every single point.": "Paragraph 6 tells about the drive home. It does not show that the day was hot."
              },
              why: "Paragraph 5 says the court was so hot that Kwame felt it through his shoes. It also says a player poured water on her head. Both show that the day was very hot." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that Kwame is QUICK. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["Kwame dashed out, scooped it up before it stopped rolling, and was back in his crouch in a flash.", "Later, a ball bounced high off the back fence, and Kwame snatched it out of the air with one hand."],
              kinds: {
                "The match on Court Three began at nine o'clock sharp.": 'notproof',
                "Kwame remembered that Coach Ferraro wanted every loose ball off the court within three seconds.": 'notproof',
                "On the very first point, a ball smacked into the net and rolled toward the middle.": 'notproof',
                "Grady, the other ball kid, dropped a ball and had to chase it across the court.": 'wrongwho',
                "The umpire called out the score from her tall chair.": 'wrongwho'
              },
              notes: {
                "The match on Court Three began at nine o'clock sharp.": "In paragraph 4, this sentence tells when the match began. It does not show what Kwame did.",
                "Kwame remembered that Coach Ferraro wanted every loose ball off the court within three seconds.": "This one is close. Paragraph 4 says Kwame remembered a rule about speed. But remembering a rule is not doing it. It does not SHOW him being quick.",
                "On the very first point, a ball smacked into the net and rolled toward the middle.": "In paragraph 4, this sentence is about the ball, not Kwame.",
                "Grady, the other ball kid, dropped a ball and had to chase it across the court.": "In paragraph 4, this sentence is about Grady, not Kwame. Grady was slow, not quick.",
                "The umpire called out the score from her tall chair.": "In paragraph 4, this sentence is about the umpire, not Kwame."
              },
              why: "Paragraph 4 says Kwame grabbed a ball before it even stopped rolling. He also caught a ball in the air with one hand. Both show that Kwame is quick." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the players are THANKFUL for Kwame's help. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Each match needed two ball kids to chase loose balls and hand towels to the players.",
                "Grady, the other ball kid, dropped a ball and had to chase it across the court.",
                "Each time a player raised a hand, Kwame jogged over with a towel.",
                "When the match ended, the winner jogged over and thanked Kwame for being so fast.",
                "The other player gave Kwame her striped wristband to thank him for the towels.",
                "Coach Ferraro told all the ball kids that they had done a fine job."
              ],
              answers: ["When the match ended, the winner jogged over and thanked Kwame for being so fast.", "The other player gave Kwame her striped wristband to thank him for the towels."],
              kinds: {
                "Each match needed two ball kids to chase loose balls and hand towels to the players.": 'notproof',
                "Grady, the other ball kid, dropped a ball and had to chase it across the court.": 'wrongwho',
                "Each time a player raised a hand, Kwame jogged over with a towel.": 'notproof',
                "Coach Ferraro told all the ball kids that they had done a fine job.": 'wrongwho'
              },
              notes: {
                "Each match needed two ball kids to chase loose balls and hand towels to the players.": "Paragraph 1 tells what ball kids do. It does not show how the players feel about Kwame.",
                "Grady, the other ball kid, dropped a ball and had to chase it across the court.": "In paragraph 4, this sentence is about Grady, not the players.",
                "Each time a player raised a hand, Kwame jogged over with a towel.": "This one is close. Paragraph 5 shows Kwame helping the players. But it tells what Kwame did. It does not SHOW how the players feel.",
                "Coach Ferraro told all the ball kids that they had done a fine job.": "This one is close too. Paragraph 6 shows someone praising the ball kids. But it is the coach, not a player."
              },
              why: "Paragraph 6 says the winner thanked Kwame. It also says the other player gave him her wristband to thank him. Both show that the players are thankful." }
          ]
        },
        {
          story: {
            title: "The Shoe Shop on Bay Street",
            paragraphs: [
              "Alma's family owned a shoe repair shop on Bay Street. The shop sat between a pizza place and a bank. There was only enough room inside for one customer at a time. The whole shop smelled like leather and shoe polish. Grandpa Luis had fixed shoes in the shop for more than thirty years.",
              "One cold Saturday in December, Alma's mom had to work at her other job. That morning, Grandpa Luis rubbed his stiff fingers and winced each time he gripped the hammer. A bell over the door jingled as the first customer came in. Grandpa Luis asked Alma to help him at the counter all day. Outside, frost sparkled on the sidewalk.",
              "First, Grandpa Luis showed Alma how to polish a boot. He rubbed the polish in small circles and buffed the leather with a soft rag. Alma watched closely as the leather began to shine. Right after that, Alma polished the other boot by herself, and it shone just as brightly as his. Next, he showed her how to write a ticket with the customer's name and phone number. Alma filled out the next five tickets without asking him a single question. A big truck rumbled past the front window.",
              "All day, people brought in winter boots with worn heels and broken zippers. When three people came in at once, two of them had to wait outside on the sidewalk. Alma hung each pair of boots on a hook along the back wall. One woman needed her boots fixed before a trip on Monday. Grandpa Luis stayed late to sew a new zipper into them, even though his fingers ached.",
              "Whenever someone picked up a pair of boots, Grandpa Luis pointed to Alma and told them that she had polished the boots. A man in a plaid scarf said his boots looked brand new. At closing time, Grandpa Luis pinned Alma's first ticket on the wall, right beside the first dollar the shop had ever earned. Then Alma swept the floor while Grandpa Luis counted the money."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Grandpa Luis's hands HURT.",
              answers: ["That morning, Grandpa Luis rubbed his stiff fingers and winced each time he gripped the hammer."],
              kinds: {
                "One cold Saturday in December, Alma's mom had to work at her other job.": 'wrongwho',
                "A bell over the door jingled as the first customer came in.": 'notproof',
                "Grandpa Luis asked Alma to help him at the counter all day.": 'notproof',
                "Outside, frost sparkled on the sidewalk.": 'notproof'
              },
              notes: {
                "One cold Saturday in December, Alma's mom had to work at her other job.": "In paragraph 2, this sentence is about Alma's mom, not Grandpa Luis.",
                "A bell over the door jingled as the first customer came in.": "In paragraph 2, this sentence is about the bell and a customer. It does not tell about Grandpa's hands.",
                "Grandpa Luis asked Alma to help him at the counter all day.": "This one is close. Paragraph 2 says Grandpa Luis asked for help. But a person can need help for many reasons. It does not SHOW that his hands hurt.",
                "Outside, frost sparkled on the sidewalk.": "In paragraph 2, this sentence is about the sidewalk, not Grandpa Luis."
              },
              why: "Paragraph 2 says Grandpa Luis rubbed his stiff fingers. He winced each time he held the hammer. That shows his hands hurt." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the shoe shop is very SMALL. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "The shop sat between a pizza place and a bank.",
                "There was only enough room inside for one customer at a time.",
                "Outside, frost sparkled on the sidewalk.",
                "A big truck rumbled past the front window.",
                "When three people came in at once, two of them had to wait outside on the sidewalk.",
                "Then Alma swept the floor while Grandpa Luis counted the money."
              ],
              answers: ["There was only enough room inside for one customer at a time.", "When three people came in at once, two of them had to wait outside on the sidewalk."],
              kinds: {
                "The shop sat between a pizza place and a bank.": 'notproof',
                "Outside, frost sparkled on the sidewalk.": 'notproof',
                "A big truck rumbled past the front window.": 'notproof',
                "Then Alma swept the floor while Grandpa Luis counted the money.": 'notproof'
              },
              notes: {
                "The shop sat between a pizza place and a bank.": "This one is close. Paragraph 1 is about the shop. But it tells WHERE the shop is, not how big it is.",
                "Outside, frost sparkled on the sidewalk.": "Paragraph 2 tells about the sidewalk. It does not show the size of the shop.",
                "A big truck rumbled past the front window.": "Paragraph 3 is about a truck. It does not show the size of the shop.",
                "Then Alma swept the floor while Grandpa Luis counted the money.": "Paragraph 5 tells what Alma and Grandpa Luis did at closing time. It does not show the size of the shop."
              },
              why: "Paragraph 1 says only one customer fit inside at a time. Paragraph 4 says two people had to wait outside. Both show that the shop is small." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
              q: "Read paragraph 3. The passage shows that Alma LEARNS QUICKLY. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              answers: ["Right after that, Alma polished the other boot by herself, and it shone just as brightly as his.", "Alma filled out the next five tickets without asking him a single question."],
              kinds: {
                "First, Grandpa Luis showed Alma how to polish a boot.": 'wrongwho',
                "He rubbed the polish in small circles and buffed the leather with a soft rag.": 'wrongwho',
                "Alma watched closely as the leather began to shine.": 'notproof',
                "Next, he showed her how to write a ticket with the customer's name and phone number.": 'wrongwho',
                "A big truck rumbled past the front window.": 'notproof'
              },
              notes: {
                "First, Grandpa Luis showed Alma how to polish a boot.": "In paragraph 3, this sentence is about Grandpa Luis teaching. It does not show how fast Alma learns.",
                "He rubbed the polish in small circles and buffed the leather with a soft rag.": "In paragraph 3, this sentence is about Grandpa Luis, not Alma.",
                "Alma watched closely as the leather began to shine.": "This one is close. Paragraph 3 says Alma watched. But watching is not the same as learning. It does not SHOW what she could do.",
                "Next, he showed her how to write a ticket with the customer's name and phone number.": "In paragraph 3, this sentence is about Grandpa Luis teaching, not Alma doing.",
                "A big truck rumbled past the front window.": "In paragraph 3, this sentence is about a truck, not Alma."
              },
              why: "Paragraph 3 says Alma polished a boot by herself right away. Then she wrote five tickets with no questions. Both show that Alma learns quickly." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Grandpa Luis is PROUD of Alma. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Grandpa Luis had fixed shoes in the shop for more than thirty years.",
                "Grandpa Luis asked Alma to help him at the counter all day.",
                "Next, he showed her how to write a ticket with the customer's name and phone number.",
                "Whenever someone picked up a pair of boots, Grandpa Luis pointed to Alma and told them that she had polished the boots.",
                "A man in a plaid scarf said his boots looked brand new.",
                "At closing time, Grandpa Luis pinned Alma's first ticket on the wall, right beside the first dollar the shop had ever earned."
              ],
              answers: ["Whenever someone picked up a pair of boots, Grandpa Luis pointed to Alma and told them that she had polished the boots.", "At closing time, Grandpa Luis pinned Alma's first ticket on the wall, right beside the first dollar the shop had ever earned."],
              kinds: {
                "Grandpa Luis had fixed shoes in the shop for more than thirty years.": 'notproof',
                "Grandpa Luis asked Alma to help him at the counter all day.": 'wrongtime',
                "Next, he showed her how to write a ticket with the customer's name and phone number.": 'notproof',
                "A man in a plaid scarf said his boots looked brand new.": 'wrongwho'
              },
              notes: {
                "Grandpa Luis had fixed shoes in the shop for more than thirty years.": "Paragraph 1 tells how long Grandpa Luis has fixed shoes. It does not show how he feels about Alma.",
                "Grandpa Luis asked Alma to help him at the counter all day.": "Paragraph 2 says Grandpa Luis asked for help. That was before Alma did any work. It does not show that he is proud of her.",
                "Next, he showed her how to write a ticket with the customer's name and phone number.": "Paragraph 3 shows Grandpa Luis teaching Alma. Teaching her does not show that he is proud of her.",
                "A man in a plaid scarf said his boots looked brand new.": "This one is close. Paragraph 5 shows someone who likes Alma's work. But it is a customer, not Grandpa Luis."
              },
              why: "Paragraph 5 says Grandpa Luis told people that Alma did the polishing. He also pinned her first ticket next to the shop's first dollar. Both show that he is proud of her." }
          ]
        }
      ]
    }
  ]
};
