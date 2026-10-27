/* ═══════════════════════════════════════════════════════
   THE LAB · data/rm3.js — Reading for Meaning, Level 2, lesson RM3: Click the Sentences: Level 2
   Skill: Evidence selection (hot text, like the test's "Click on the TWO sentences").
   The MIDDLE level (Marcos 10/26: "having more of a transition from level 1 to 2 is needed"): the same lesson,
   flow, stems and close-choice rules as RD3 (now Level 3), on MEDIUM stories (teach 140–230 words, FK 2.6–3.6;
   Show what you know 140–230, FK 2.8–3.8; Your turn 220–320, FK 2.8–3.8; sentences of about 10–13 words).
   Teaches: how to click (tap = yellow, tap again = take it back, then That's My Answer!), that TWO means BOTH
   sentences must prove the idea (one right + one wrong = no point), and to watch for the TRICKY sentence (about the
   idea, but not proof) and the wrong person.
   Lane: visits and field trips (an old house, a tortilla factory, a radio station, a recycling center, a pottery
   studio, a clock tower, a small airport, a bird rescue center, a farm stand, an orchestra practice, a telescope night,
   a print shop, a bakery, a plant house, a fossil walk at a quarry, a ballpark tour). Premises checked against the premise
   index, every rc/rd/rp story and the other RM drafts (10/26: a glass shop, a guide-dog puppy, a horse stable, an apple
   orchard and a TV station were dropped as repeats). kinds: a wrong sentence about someone other than the person asked
   about is wrongwho (10/26 label rule); questions about a thing (a machine, a room, a bell) keep notproof.
   Read-aloud safe: none of the heteronyms from the 10/26 review list (the only "Read" is the stem "Read paragraph N.").
   Shape: tools/CONTENT-SPEC-READING.md (THE MIDDLE LEVEL + the RD3 plan). Checked by tools/check-reading.js RM3.
   Every version: teach { story, flow: W1, W2, S1 (pick 1, para), S2 (pick 2, list of 6), W3 },
                  pre  { P1 pick 1 para · P2 pick 2 list (6) · P3 pick 2 para (6+) },
                  turn A { Q01 pick 1 para · Q02 pick 2 list (6) · Q03 pick 2 para (6+) · Q04 pick 2 list (6) },
                  turn B { Q05–Q08, the same four slots }. The two lists on one story never share a sentence.
   The right sentences are listed in `answers`; every other clickable sentence has a kind + a note.
   No giveaways: the idea word of a question is never in its answer sentences, and the person asked about is also
   in sentences that are NOT proof.
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RM3 = {
  versions: [
    /* ───────── Version 1 ───────── */
    {
      teach: {
        story: {
          title: "A Dusty Rug at the Winslow House",
          paragraphs: [
            "On Tuesday, Room 4 took a bus to the Winslow House. The house was over one hundred fifty years old. A guide named Mrs. Abbott met the class on the front porch. She wore a long gray dress and a white cotton cap.",
            "Mrs. Abbott led the class into the old kitchen. A black iron stove stood against one wall. Mrs. Abbott said that it once took six men to carry the stove into the house. Pia looked all around the kitchen for a sink, but there was not one.",
            "Next, the class went outside. A dusty rug hung over a rope between two trees. Mrs. Abbott showed the children how to whack the rug with a long wooden beater. Pia took the first turn. After a while, her shoulders burned, but she kept whacking the rug. When Gus offered to take over, Pia shook her head and swung even harder. Mrs. Abbott said that long ago, children beat the dust out of rugs every spring.",
            "At last, no more dust puffed out of the rug. Mrs. Abbott gave each child a small tin cup to take home. Pia did not want to leave, so she took one last slow look at every room.",
            "On the bus ride home, Pia's arms still felt as floppy as noodles. She asked her teacher if the class could come back next year."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'How to click',
            lines: [
              "Today you will click on sentences in a passage. The passage is the story on your screen.",
              "A paragraph is one part of the passage. Each paragraph has a number.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences, or Choose TWO, means pick two.",
              "With TWO, BOTH sentences must prove the idea. One right and one wrong gets no point, just like the test.",
              "BEST supports means the sentence proves the idea the most.",
              "In Level 2, some sentences are tricky. A sentence can be ABOUT the idea and still not SHOW it.",
              "Say the idea is that Lin is hungry. Lin's lunch was late. That is WHY she might be hungry. But it does not SHOW that she is hungry.",
              "Lin's tummy growled all through math. That SHOWS she is hungry. That is proof.",
              "A sentence that is about the idea but does not prove it is a tricky sentence. Watch out for it!"
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the TWO',
            lines: [
              "Let's do one together. Here is the question.",
              "The passage shows that Pia does NOT GIVE UP. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              "Step 1. Say the idea. Pia does not give up. She keeps going, even when the job gets hard.",
              "Step 2. Find the paragraph. Paragraph 3 tells how Pia cleans an old rug.",
              "Step 3. Test each sentence. Ask, does this SHOW that Pia does not give up?",
              "The class goes to the yard. A rug hangs on a rope. Mrs. Abbott shows them what to do. Those are not about Pia.",
              "Pia took the first turn. This one is tricky! It is about Pia and the job. But taking a turn is just the start. It does not SHOW that she keeps going.",
              "Her shoulders burned, but she kept whacking the rug. Yes! Her shoulders hurt, and she did not stop.",
              "Gus asked to take over, but Pia shook her head and swung even harder. Yes! She would not quit.",
              "Mrs. Abbott said that children beat rugs long ago. That is about long ago, not Pia.",
              "The TWO sentences that show the idea are our answer. The tricky one lights up too, so you can see it.",
              "We click the two that SHOW the idea. Then we tap That's My Answer!"
            ],
            lit: [
              "After a while, her shoulders burned, but she kept whacking the rug.",
              "When Gus offered to take over, Pia shook her head and swung even harder.",
              "Pia took the first turn."
            ] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that the stove is very HEAVY.",
            answers: ["Mrs. Abbott said that it once took six men to carry the stove into the house."],
            kinds: {
              "Mrs. Abbott led the class into the old kitchen.": 'notproof',
              "A black iron stove stood against one wall.": 'notproof',
              "Pia looked all around the kitchen for a sink, but there was not one.": 'notproof'
            },
            notes: {
              "Mrs. Abbott led the class into the old kitchen.": "In paragraph 2, this sentence tells where the class went. It does not show how heavy the stove is.",
              "A black iron stove stood against one wall.": "This one is tricky. Paragraph 2 says the stove is made of iron. But it does not SHOW how heavy the stove is.",
              "Pia looked all around the kitchen for a sink, but there was not one.": "In paragraph 2, this sentence is about Pia and a sink. It is not about the stove."
            },
            why: "Paragraph 2 says it took six men to carry the stove into the house. That shows the stove is very heavy." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that Pia LIKED the old house. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "She wore a long gray dress and a white cotton cap.",
              "At last, no more dust puffed out of the rug.",
              "Mrs. Abbott gave each child a small tin cup to take home.",
              "Pia did not want to leave, so she took one last slow look at every room.",
              "On the bus ride home, Pia's arms still felt as floppy as noodles.",
              "She asked her teacher if the class could come back next year."
            ],
            answers: ["Pia did not want to leave, so she took one last slow look at every room.", "She asked her teacher if the class could come back next year."],
            kinds: {
              "She wore a long gray dress and a white cotton cap.": 'wrongwho',
              "At last, no more dust puffed out of the rug.": 'notproof',
              "Mrs. Abbott gave each child a small tin cup to take home.": 'notproof',
              "On the bus ride home, Pia's arms still felt as floppy as noodles.": 'notproof'
            },
            notes: {
              "She wore a long gray dress and a white cotton cap.": "Paragraph 1 tells what Mrs. Abbott wore. It does not show how Pia feels.",
              "At last, no more dust puffed out of the rug.": "Paragraph 4 says the rug was clean at last. It does not show how Pia feels about the house.",
              "Mrs. Abbott gave each child a small tin cup to take home.": "This one is tricky. Paragraph 4 tells about a gift for each child. But Mrs. Abbott gave it. It does not SHOW how Pia feels.",
              "On the bus ride home, Pia's arms still felt as floppy as noodles.": "Paragraph 5 says Pia's arms were tired. It does not show how she feels about the house."
            },
            why: "Paragraph 4 says Pia did not want to leave, so she took one last look at every room. Paragraph 5 says she asked to come back next year. Both show that Pia liked the old house." },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Find the part of the passage that talks about the idea.",
              "Step 3. Test each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out for the tricky sentence. It is about the idea, but it does not prove it.",
              "Watch out for the wrong person, too. Check who the question is about.",
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
          title: "Hairnets at the Tortilla Factory",
          paragraphs: [
            "On Friday, Finn's class took a bus to a tortilla factory. In the front hall, a worker named Ms. Cruz gave each kid a paper hairnet to keep hair out of the food.",
            "Finn pulled on his hairnet and lined up with his friends. Ms. Cruz told the class to stay behind the yellow line on the floor. Finn had eaten tortillas all his life, but he had never seen them made. He bounced up and down on his toes while she pushed open the big doors.",
            "Inside, a long silver machine hummed and clanked. A worker dropped balls of dough into the top of the machine. In one second, a press smashed each ball into a thin circle. The circles rode through an oven on a moving belt. Ms. Cruz said the machine made about one thousand tortillas an hour. A man in a blue apron stacked the tortillas in piles of ten.",
            "At the end of the tour, Ms. Cruz gave each kid a fresh tortilla. Steam curled up from Finn's tortilla when he folded it in half. He tossed it from hand to hand and blew on it."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Finn is EXCITED about the tour.",
            answers: ["He bounced up and down on his toes while she pushed open the big doors."],
            kinds: {
              "Finn pulled on his hairnet and lined up with his friends.": 'notproof',
              "Ms. Cruz told the class to stay behind the yellow line on the floor.": 'wrongwho',
              "Finn had eaten tortillas all his life, but he had never seen them made.": 'notproof'
            },
            notes: {
              "Finn pulled on his hairnet and lined up with his friends.": "In paragraph 2, this sentence tells how Finn got ready. It does not show how he feels.",
              "Ms. Cruz told the class to stay behind the yellow line on the floor.": "In paragraph 2, this sentence is about Ms. Cruz and a rule. It does not show how Finn feels.",
              "Finn had eaten tortillas all his life, but he had never seen them made.": "This one is tricky. Paragraph 2 says Finn had never seen tortillas made. That is WHY he might be excited. But it does not SHOW how he feels."
            },
            why: "Paragraph 2 says Finn bounced up and down on his toes. That is what kids do when they can hardly wait. So that sentence shows Finn is excited." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that Finn's tortilla is very HOT. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "On Friday, Finn's class took a bus to a tortilla factory.",
              "Ms. Cruz told the class to stay behind the yellow line on the floor.",
              "The circles rode through an oven on a moving belt.",
              "At the end of the tour, Ms. Cruz gave each kid a fresh tortilla.",
              "Steam curled up from Finn's tortilla when he folded it in half.",
              "He tossed it from hand to hand and blew on it."
            ],
            answers: ["Steam curled up from Finn's tortilla when he folded it in half.", "He tossed it from hand to hand and blew on it."],
            kinds: {
              "On Friday, Finn's class took a bus to a tortilla factory.": 'notproof',
              "Ms. Cruz told the class to stay behind the yellow line on the floor.": 'notproof',
              "The circles rode through an oven on a moving belt.": 'notproof',
              "At the end of the tour, Ms. Cruz gave each kid a fresh tortilla.": 'notproof'
            },
            notes: {
              "On Friday, Finn's class took a bus to a tortilla factory.": "Paragraph 1 tells where the class went. It does not show how hot the tortilla is.",
              "Ms. Cruz told the class to stay behind the yellow line on the floor.": "Paragraph 2 tells a rule about the yellow line. It does not show how hot the tortilla is.",
              "The circles rode through an oven on a moving belt.": "This one is tricky. Paragraph 3 says the tortillas went through an oven. That is WHY they are hot. But it does not SHOW how hot Finn's tortilla is.",
              "At the end of the tour, Ms. Cruz gave each kid a fresh tortilla.": "Paragraph 4 says Ms. Cruz gave each kid a fresh tortilla. Fresh means just made. It does not SHOW how hot Finn's tortilla is."
            },
            why: "Paragraph 4 says steam came up from Finn's tortilla. It also says he tossed it from hand to hand and blew on it. Both show that the tortilla is very hot." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
            q: "Read paragraph 3. The passage shows that the machine works very FAST. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
            answers: ["In one second, a press smashed each ball into a thin circle.", "Ms. Cruz said the machine made about one thousand tortillas an hour."],
            kinds: {
              "Inside, a long silver machine hummed and clanked.": 'notproof',
              "A worker dropped balls of dough into the top of the machine.": 'notproof',
              "The circles rode through an oven on a moving belt.": 'notproof',
              "A man in a blue apron stacked the tortillas in piles of ten.": 'notproof'
            },
            notes: {
              "Inside, a long silver machine hummed and clanked.": "This one is tricky. Paragraph 3 says the machine hummed and clanked. That tells how the machine sounds. It does not show how fast it works.",
              "A worker dropped balls of dough into the top of the machine.": "In paragraph 3, this sentence is about a worker and the dough. It does not show how fast the machine works.",
              "The circles rode through an oven on a moving belt.": "In paragraph 3, this sentence tells where the circles went. It does not show how fast the machine works.",
              "A man in a blue apron stacked the tortillas in piles of ten.": "In paragraph 3, this sentence is about a man stacking tortillas. It does not show how fast the machine works."
            },
            why: "Paragraph 3 says the press made each ball flat in one second. It also says the machine made about one thousand tortillas in one hour. Both show that the machine works very fast." }
        ]
      },
      turn: [
        {
          story: {
            title: "The Red Light Over the Studio Door",
            paragraphs: [
              "On Monday, Hollis and his class took a trip to a radio station. The station was on the ninth floor of a tall glass building. A host named Ms. Kwan met the class at the front desk. Her morning show played music and told funny stories.",
              "Ms. Kwan led the class down a long hall covered with music posters. Hollis held the heavy door for the kids at the back of the line. A few kids stopped to stare at a poster of a famous drummer. Hollis asked Ms. Kwan how the music got from the station to his mom's car. Ms. Kwan pointed up and said that a tall tower on the roof sent it out.",
              "The studio was a small room with a big window in one wall. Over the door hung a sign that said ON AIR. Ms. Kwan said that each little noise in the room could go out over the radio. When the sign glowed red, not one kid made a sound.",
              "Ms. Kwan sat down at a desk full of buttons and knobs. She put on big headphones and leaned toward the microphone. In the middle of a song, the music stopped. A worker behind the glass waved his arms and pointed at a screen. Ms. Kwan smiled and talked to her listeners in a smooth, easy voice. Without one frown, she slid a button up and started a new song. A funny song came on next, and the kids covered their mouths to keep from laughing.",
              "Before the class left, Ms. Kwan let Hollis say the name of the station on the air. Hollis stood up tall and grinned so wide that his cheeks hurt. On the bus, he told all his friends that his voice had gone out to the whole city."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Curious means you want to find out about things. Click on the sentence in paragraph 2 that BEST shows that Hollis is CURIOUS.",
              answers: ["Hollis asked Ms. Kwan how the music got from the station to his mom's car."],
              kinds: {
                "Ms. Kwan led the class down a long hall covered with music posters.": 'wrongwho',
                "Hollis held the heavy door for the kids at the back of the line.": 'notproof',
                "A few kids stopped to stare at a poster of a famous drummer.": 'wrongwho',
                "Ms. Kwan pointed up and said that a tall tower on the roof sent it out.": 'wrongwho'
              },
              notes: {
                "Ms. Kwan led the class down a long hall covered with music posters.": "In paragraph 2, this sentence tells where Ms. Kwan took the class. It does not show that Hollis is curious.",
                "Hollis held the heavy door for the kids at the back of the line.": "In paragraph 2, this sentence tells that Hollis held the door. It does not show that he is curious.",
                "A few kids stopped to stare at a poster of a famous drummer.": "This one is tricky. Paragraph 2 shows some kids looking at a poster. But this sentence is about other kids, not Hollis.",
                "Ms. Kwan pointed up and said that a tall tower on the roof sent it out.": "In paragraph 2, this sentence is about what Ms. Kwan said, not Hollis."
              },
              why: "Paragraph 2 says Hollis asked Ms. Kwan how the music got to his mom's car. He wanted to find out how radio works. That shows Hollis is curious." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the class is very QUIET in the studio. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "The station was on the ninth floor of a tall glass building.",
                "Hollis held the heavy door for the kids at the back of the line.",
                "The studio was a small room with a big window in one wall.",
                "Ms. Kwan said that each little noise in the room could go out over the radio.",
                "When the sign glowed red, not one kid made a sound.",
                "A funny song came on next, and the kids covered their mouths to keep from laughing."
              ],
              answers: ["When the sign glowed red, not one kid made a sound.", "A funny song came on next, and the kids covered their mouths to keep from laughing."],
              kinds: {
                "The station was on the ninth floor of a tall glass building.": 'notproof',
                "Hollis held the heavy door for the kids at the back of the line.": 'notproof',
                "The studio was a small room with a big window in one wall.": 'notproof',
                "Ms. Kwan said that each little noise in the room could go out over the radio.": 'notproof'
              },
              notes: {
                "The station was on the ninth floor of a tall glass building.": "Paragraph 1 tells where the station is. It does not show the class being quiet.",
                "Hollis held the heavy door for the kids at the back of the line.": "Paragraph 2 tells that Hollis held the door. It does not show the class being quiet.",
                "The studio was a small room with a big window in one wall.": "Paragraph 3 tells what the studio looks like. It does not show the class being quiet.",
                "Ms. Kwan said that each little noise in the room could go out over the radio.": "This one is tricky. Paragraph 3 says any noise could go out over the radio. That is WHY the class must be quiet. But it does not SHOW the class being quiet."
              },
              why: "Paragraph 3 says that not one kid made a sound when the sign was red. Paragraph 4 says the kids covered their mouths so they would not laugh. Both show that the class is quiet." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that Ms. Kwan stays CALM when something goes wrong. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["Ms. Kwan smiled and talked to her listeners in a smooth, easy voice.", "Without one frown, she slid a button up and started a new song."],
              kinds: {
                "Ms. Kwan sat down at a desk full of buttons and knobs.": 'notproof',
                "She put on big headphones and leaned toward the microphone.": 'notproof',
                "In the middle of a song, the music stopped.": 'notproof',
                "A worker behind the glass waved his arms and pointed at a screen.": 'wrongwho',
                "A funny song came on next, and the kids covered their mouths to keep from laughing.": 'wrongwho'
              },
              notes: {
                "Ms. Kwan sat down at a desk full of buttons and knobs.": "In paragraph 4, this sentence tells where Ms. Kwan sat. It does not show what she did when something went wrong.",
                "She put on big headphones and leaned toward the microphone.": "In paragraph 4, this sentence tells how Ms. Kwan got ready. It does not show that she stays calm.",
                "In the middle of a song, the music stopped.": "This one is tricky. Paragraph 4 says the music stopped. That is what went wrong. But it does not SHOW what Ms. Kwan did about it.",
                "A worker behind the glass waved his arms and pointed at a screen.": "In paragraph 4, this sentence is about a worker, not Ms. Kwan. He is the one waving his arms.",
                "A funny song came on next, and the kids covered their mouths to keep from laughing.": "In paragraph 4, this sentence is about the kids, not Ms. Kwan."
              },
              why: "Paragraph 4 says Ms. Kwan smiled and talked in a smooth voice. It also says she started a new song without a frown. Both show that she stays calm." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Hollis feels PROUD after he speaks on the air. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "On Monday, Hollis and his class took a trip to a radio station.",
                "Over the door hung a sign that said ON AIR.",
                "She put on big headphones and leaned toward the microphone.",
                "Before the class left, Ms. Kwan let Hollis say the name of the station on the air.",
                "Hollis stood up tall and grinned so wide that his cheeks hurt.",
                "On the bus, he told all his friends that his voice had gone out to the whole city."
              ],
              answers: ["Hollis stood up tall and grinned so wide that his cheeks hurt.", "On the bus, he told all his friends that his voice had gone out to the whole city."],
              kinds: {
                "On Monday, Hollis and his class took a trip to a radio station.": 'notproof',
                "Over the door hung a sign that said ON AIR.": 'notproof',
                "She put on big headphones and leaned toward the microphone.": 'wrongwho',
                "Before the class left, Ms. Kwan let Hollis say the name of the station on the air.": 'notproof'
              },
              notes: {
                "On Monday, Hollis and his class took a trip to a radio station.": "Paragraph 1 tells where Hollis and his class went. It does not show how Hollis feels.",
                "Over the door hung a sign that said ON AIR.": "Paragraph 3 tells about the sign over the door. It does not show how Hollis feels.",
                "She put on big headphones and leaned toward the microphone.": "Paragraph 4 is about Ms. Kwan getting ready. It does not show how Hollis feels.",
                "Before the class left, Ms. Kwan let Hollis say the name of the station on the air.": "This one is tricky. Paragraph 5 says Ms. Kwan let Hollis speak on the air. That is WHY he is proud. But it does not SHOW how he feels."
              },
              why: "Paragraph 5 says Hollis stood up tall and grinned so wide that his cheeks hurt. It also says he told all his friends that his voice went out to the city. Both show that Hollis feels proud." }
          ]
        },
        {
          story: {
            title: "A Giant Magnet on Dock Street",
            paragraphs: [
              "Every week, Delia's family filled a blue bin with cans, bottles, and paper. On Thursday, her class rode a bus to see where all of it went. The recycling center was a huge building on Dock Street. A guide named Mr. Fenn met them at the front gate.",
              "First, Mr. Fenn led the class to a big window. Delia stood on her tiptoes to see over the ledge. Below the window, trucks dumped their loads onto the floor. The pile of bottles and boxes was taller than a house. Delia's mouth dropped open, and she pressed both hands against the glass.",
              "Next, the class climbed the stairs to a walkway above the sorting room. At the top, a worker named Ms. Pratt handed out plastic goggles and soft earplugs. Mr. Fenn checked that every student had the goggles on tight. Then he counted the class two times before he opened the door. Mr. Fenn said that the machines below sorted forty trucks of cans and bottles a day. A forklift beeped as it rolled across the floor.",
              "From the walkway, the sorting room looked as big as a gym. Cans and bottles bounced along on moving belts. A giant magnet swung over one belt and yanked the steel cans into the air. Workers in orange vests pulled out plastic bags by hand. Even with earplugs in, Delia could feel the noise in her chest. Mr. Fenn had to shout so the class could hear him.",
              "At the end of the tour, Mr. Fenn held up a greasy pizza box. He said that food left on boxes and jars can ruin a whole truckload of recycling. Delia thought about the pizza box in her blue bin at home. That night, she pulled the pizza box out of the bin and put it in the trash. Then she rinsed out an empty peanut butter jar before she put it in the bin."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Delia is AMAZED by the pile. That means she is very surprised.",
              answers: ["Delia's mouth dropped open, and she pressed both hands against the glass."],
              kinds: {
                "First, Mr. Fenn led the class to a big window.": 'wrongwho',
                "Delia stood on her tiptoes to see over the ledge.": 'notproof',
                "Below the window, trucks dumped their loads onto the floor.": 'notproof',
                "The pile of bottles and boxes was taller than a house.": 'notproof'
              },
              notes: {
                "First, Mr. Fenn led the class to a big window.": "In paragraph 2, this sentence tells where Mr. Fenn took the class. It does not show how Delia feels.",
                "Delia stood on her tiptoes to see over the ledge.": "In paragraph 2, this sentence tells how Delia got a look over the ledge. It does not show how she feels.",
                "Below the window, trucks dumped their loads onto the floor.": "In paragraph 2, this sentence is about the trucks. It does not show how Delia feels.",
                "The pile of bottles and boxes was taller than a house.": "This one is tricky. Paragraph 2 says the pile was taller than a house. That is WHY Delia is amazed. But it does not SHOW how she feels."
              },
              why: "Paragraph 2 says Delia's mouth dropped open. She pressed her hands on the glass. That shows Delia is amazed." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the sorting room is very LOUD. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Every week, Delia's family filled a blue bin with cans, bottles, and paper.",
                "First, Mr. Fenn led the class to a big window.",
                "Mr. Fenn said that the machines below sorted forty trucks of cans and bottles a day.",
                "A giant magnet swung over one belt and yanked the steel cans into the air.",
                "Even with earplugs in, Delia could feel the noise in her chest.",
                "Mr. Fenn had to shout so the class could hear him."
              ],
              answers: ["Even with earplugs in, Delia could feel the noise in her chest.", "Mr. Fenn had to shout so the class could hear him."],
              kinds: {
                "Every week, Delia's family filled a blue bin with cans, bottles, and paper.": 'notproof',
                "First, Mr. Fenn led the class to a big window.": 'notproof',
                "Mr. Fenn said that the machines below sorted forty trucks of cans and bottles a day.": 'notproof',
                "A giant magnet swung over one belt and yanked the steel cans into the air.": 'notproof'
              },
              notes: {
                "Every week, Delia's family filled a blue bin with cans, bottles, and paper.": "Paragraph 1 tells about the blue bin at home. It does not show how loud the sorting room is.",
                "First, Mr. Fenn led the class to a big window.": "Paragraph 2 tells where Mr. Fenn took the class first. It does not show how loud the sorting room is.",
                "Mr. Fenn said that the machines below sorted forty trucks of cans and bottles a day.": "This one is tricky. Paragraph 3 is about the machines in the sorting room. But it tells how much they sort. It does not SHOW how loud the room is.",
                "A giant magnet swung over one belt and yanked the steel cans into the air.": "Paragraph 4 tells what the magnet did. It does not show how loud the room is."
              },
              why: "Paragraph 4 says Delia could feel the noise in her chest, even with earplugs. It also says Mr. Fenn had to shout. Both show that the room is very loud." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
              q: "Read paragraph 3. The passage shows that Mr. Fenn is CAREFUL. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              answers: ["Mr. Fenn checked that every student had the goggles on tight.", "Then he counted the class two times before he opened the door."],
              kinds: {
                "Next, the class climbed the stairs to a walkway above the sorting room.": 'wrongwho',
                "At the top, a worker named Ms. Pratt handed out plastic goggles and soft earplugs.": 'wrongwho',
                "Mr. Fenn said that the machines below sorted forty trucks of cans and bottles a day.": 'notproof',
                "A forklift beeped as it rolled across the floor.": 'notproof'
              },
              notes: {
                "Next, the class climbed the stairs to a walkway above the sorting room.": "In paragraph 3, this sentence tells where the class went. It does not show what Mr. Fenn did.",
                "At the top, a worker named Ms. Pratt handed out plastic goggles and soft earplugs.": "This one is tricky. Paragraph 3 shows someone handing out goggles. But this sentence is about Ms. Pratt, not Mr. Fenn.",
                "Mr. Fenn said that the machines below sorted forty trucks of cans and bottles a day.": "In paragraph 3, Mr. Fenn tells how much the machines sort. That is a fact about the machines. It does not SHOW him being careful.",
                "A forklift beeped as it rolled across the floor.": "In paragraph 3, this sentence is about a forklift, not Mr. Fenn."
              },
              why: "Paragraph 3 says Mr. Fenn made sure each student's goggles were on tight. It also says he counted the class two times. Both show that Mr. Fenn is careful." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Delia USES what she learned on the tour. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "On Thursday, her class rode a bus to see where all of it went.",
                "Delia stood on her tiptoes to see over the ledge.",
                "Workers in orange vests pulled out plastic bags by hand.",
                "Delia thought about the pizza box in her blue bin at home.",
                "That night, she pulled the pizza box out of the bin and put it in the trash.",
                "Then she rinsed out an empty peanut butter jar before she put it in the bin."
              ],
              answers: ["That night, she pulled the pizza box out of the bin and put it in the trash.", "Then she rinsed out an empty peanut butter jar before she put it in the bin."],
              kinds: {
                "On Thursday, her class rode a bus to see where all of it went.": 'notproof',
                "Delia stood on her tiptoes to see over the ledge.": 'notproof',
                "Workers in orange vests pulled out plastic bags by hand.": 'wrongwho',
                "Delia thought about the pizza box in her blue bin at home.": 'notproof'
              },
              notes: {
                "On Thursday, her class rode a bus to see where all of it went.": "Paragraph 1 tells why the class went on the tour. It does not show Delia using what she learned.",
                "Delia stood on her tiptoes to see over the ledge.": "Paragraph 2 tells how Delia looked over the ledge. It does not show her using what she learned.",
                "Workers in orange vests pulled out plastic bags by hand.": "Paragraph 4 is about the workers, not Delia.",
                "Delia thought about the pizza box in her blue bin at home.": "This one is tricky. Paragraph 5 says Delia thought about the pizza box. But thinking is not doing. It does not SHOW her using what she learned."
              },
              why: "In paragraph 5, Mr. Fenn says food on boxes and jars can ruin recycling. Then Delia takes the greasy pizza box out of her bin. She also rinses a jar before it goes in. Both show that Delia uses what she learned." }
          ]
        }
      ]
    },

    /* ───────── Version 2 ───────── */
    {
      teach: {
        story: {
          title: "Clay Bowls at the Pottery Studio",
          paragraphs: [
            "In October, Room 12 took a bus to a pottery studio on Birch Road. A potter named Ms. Ito welcomed the class at the studio door. Shelves of bowls, cups, and plates lined every wall. Ms. Ito said each child could make two bowls on the spinning wheels.",
            "Ms. Ito showed the class how to shape a bowl on a wheel. Wet hands keep the clay from cracking. Esme sat down at a wheel near the window. She dipped her hands in water each time before she touched the clay. She held her elbows tight against her knees, so her hands stayed steady. A boy at the next wheel sang along with the radio.",
            "When the wheel slowed down, Esme lifted her hands from the clay. One side of her bowl sagged and folded over. Esme's shoulders drooped, and she gave a long sigh. Ms. Ito said that almost every beginner's first bowl falls over.",
            "By noon, the long drying shelf was covered from end to end with bowls. Ms. Ito counted thirty-eight bowls on the shelf. Esme's second bowl was a little lopsided, but it stood up on its own. Next week, Ms. Ito would bake all the bowls in a very hot oven called a kiln."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'How to click',
            lines: [
              "Today you will click on sentences in a passage. The passage is the story on your screen.",
              "A paragraph is one part of the passage. Each paragraph has a number.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences, or Choose TWO, means pick two.",
              "With TWO, BOTH sentences must prove the idea. One right and one wrong gets no point, just like the test.",
              "BEST supports means the sentence proves the idea the most.",
              "In Level 2, some sentences are tricky. A sentence can be ABOUT the idea and still not SHOW it.",
              "Say the idea is that Lin is hungry. Lin's lunch was late. That is WHY she might be hungry. But it does not SHOW that she is hungry.",
              "Lin's tummy growled all through math. That SHOWS she is hungry. That is proof.",
              "A sentence that is about the idea but does not prove it is a tricky sentence. Watch out for it!"
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the TWO',
            lines: [
              "Let's do one together. Here is the question.",
              "The passage shows that Esme is CAREFUL with the clay. Click on the TWO sentences in paragraph 2 that BEST support this idea.",
              "Step 1. Say the idea. Esme is careful. She takes her time and tries hard not to make a mistake.",
              "Step 2. Find the paragraph. Paragraph 2 tells how Esme shapes her bowl.",
              "Step 3. Test each sentence. Ask, does this SHOW that Esme is careful?",
              "Ms. Ito showed the class how to shape a bowl. That is about Ms. Ito, not Esme.",
              "Wet hands keep the clay from cracking. This one is tricky! It tells the careful way to work. But it does not SHOW what Esme did.",
              "Esme sat down at a wheel. That is about Esme. But sitting down is not being careful.",
              "She dipped her hands in water each time. Yes! She kept the clay from cracking.",
              "She held her elbows tight against her knees. Yes! She kept her hands steady.",
              "A boy sang along with the radio. That is about a boy, not Esme. The TWO careful sentences are our answer. The tricky one lights up too.",
              "We click the two that SHOW the idea. Then we tap That's My Answer!"
            ],
            lit: [
              "She dipped her hands in water each time before she touched the clay.",
              "She held her elbows tight against her knees, so her hands stayed steady.",
              "Wet hands keep the clay from cracking."
            ] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 3,
            q: "Read paragraph 3. Click on the sentence in paragraph 3 that BEST shows that Esme feels DISAPPOINTED. That means she feels let down.",
            answers: ["Esme's shoulders drooped, and she gave a long sigh."],
            kinds: {
              "When the wheel slowed down, Esme lifted her hands from the clay.": 'notproof',
              "One side of her bowl sagged and folded over.": 'notproof',
              "Ms. Ito said that almost every beginner's first bowl falls over.": 'wrongwho'
            },
            notes: {
              "When the wheel slowed down, Esme lifted her hands from the clay.": "In paragraph 3, this sentence tells what Esme did with her hands. It does not show how she feels.",
              "One side of her bowl sagged and folded over.": "This one is tricky. Paragraph 3 says one side of the bowl sagged. That is WHY Esme feels let down. But it does not SHOW how she feels.",
              "Ms. Ito said that almost every beginner's first bowl falls over.": "In paragraph 3, this sentence is about what Ms. Ito said, not how Esme feels."
            },
            why: "Paragraph 3 says Esme's shoulders drooped. She gave a long sigh. That is how you look when you feel let down. So Esme is disappointed." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that the class made a LOT of bowls. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "A potter named Ms. Ito welcomed the class at the studio door.",
              "Shelves of bowls, cups, and plates lined every wall.",
              "Ms. Ito said each child could make two bowls on the spinning wheels.",
              "When the wheel slowed down, Esme lifted her hands from the clay.",
              "By noon, the long drying shelf was covered from end to end with bowls.",
              "Ms. Ito counted thirty-eight bowls on the shelf."
            ],
            answers: ["By noon, the long drying shelf was covered from end to end with bowls.", "Ms. Ito counted thirty-eight bowls on the shelf."],
            kinds: {
              "A potter named Ms. Ito welcomed the class at the studio door.": 'notproof',
              "Shelves of bowls, cups, and plates lined every wall.": 'notproof',
              "Ms. Ito said each child could make two bowls on the spinning wheels.": 'notproof',
              "When the wheel slowed down, Esme lifted her hands from the clay.": 'notproof'
            },
            notes: {
              "A potter named Ms. Ito welcomed the class at the studio door.": "Paragraph 1 tells who met the class. It does not show how many bowls the class made.",
              "Shelves of bowls, cups, and plates lined every wall.": "Paragraph 1 tells about the bowls that were already on the studio shelves. The class did not make those.",
              "Ms. Ito said each child could make two bowls on the spinning wheels.": "This one is tricky. Paragraph 1 tells how many bowls each child CAN make. But it does not SHOW how many the class made.",
              "When the wheel slowed down, Esme lifted her hands from the clay.": "Paragraph 3 is about one bowl. It does not show how many bowls the class made."
            },
            why: "Paragraph 4 says the long shelf was covered from end to end with bowls. It also says Ms. Ito counted thirty-eight bowls. Both show that the class made a lot of bowls." },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Find the part of the passage that talks about the idea.",
              "Step 3. Test each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out for the tricky sentence. It is about the idea, but it does not prove it.",
              "Watch out for the wrong person, too. Check who the question is about.",
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
          title: "Ninety-Two Steps to the Clock",
          paragraphs: [
            "On Saturday mornings, the old clock tower at city hall was open for tours. Ruben and his grandpa signed up for the ten o'clock tour. A guide named Ms. Varga unlocked a small wooden door at the bottom of the tower.",
            "Inside, a narrow staircase curled up the walls of the tower. Grandpa held the rail tight with both hands. Ruben carried Grandpa's heavy coat, so both of Grandpa's hands would be free. Every ten steps, Ruben stopped and waited for Grandpa to catch up. Ms. Varga said there were ninety-two steps in all. A pigeon flapped past a tiny window. Ruben counted each step out loud.",
            "At the top, Ruben and Grandpa stepped into a room full of turning gears. Some gears were bigger than a bike wheel. Ruben asked Ms. Varga how the gears knew what time it was. Ms. Varga said the gears had turned each day for one hundred years.",
            "Just before noon, Ms. Varga pointed to a huge bronze bell above their heads. When the bell rang twelve times, Ruben felt each boom in his chest. Grandpa covered his ears with both hands and laughed."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 3,
            q: "Read paragraph 3. Curious means you want to find out about things. Click on the sentence in paragraph 3 that BEST shows that Ruben is CURIOUS about the gears.",
            answers: ["Ruben asked Ms. Varga how the gears knew what time it was."],
            kinds: {
              "At the top, Ruben and Grandpa stepped into a room full of turning gears.": 'notproof',
              "Some gears were bigger than a bike wheel.": 'notproof',
              "Ms. Varga said the gears had turned each day for one hundred years.": 'wrongwho'
            },
            notes: {
              "At the top, Ruben and Grandpa stepped into a room full of turning gears.": "In paragraph 3, this sentence tells where Ruben went. It does not show that he is curious.",
              "Some gears were bigger than a bike wheel.": "This one is tricky. Paragraph 3 says the gears were very big. That is WHY Ruben might be curious. But it does not SHOW what he did.",
              "Ms. Varga said the gears had turned each day for one hundred years.": "In paragraph 3, this sentence is about what Ms. Varga said, not Ruben."
            },
            why: "Paragraph 3 says Ruben asked Ms. Varga how the gears knew the time. He wanted to find out how they work. That shows Ruben is curious." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that the bell is very LOUD. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "On Saturday mornings, the old clock tower at city hall was open for tours.",
              "Ms. Varga said there were ninety-two steps in all.",
              "Some gears were bigger than a bike wheel.",
              "Just before noon, Ms. Varga pointed to a huge bronze bell above their heads.",
              "When the bell rang twelve times, Ruben felt each boom in his chest.",
              "Grandpa covered his ears with both hands and laughed."
            ],
            answers: ["When the bell rang twelve times, Ruben felt each boom in his chest.", "Grandpa covered his ears with both hands and laughed."],
            kinds: {
              "On Saturday mornings, the old clock tower at city hall was open for tours.": 'notproof',
              "Ms. Varga said there were ninety-two steps in all.": 'notproof',
              "Some gears were bigger than a bike wheel.": 'notproof',
              "Just before noon, Ms. Varga pointed to a huge bronze bell above their heads.": 'notproof'
            },
            notes: {
              "On Saturday mornings, the old clock tower at city hall was open for tours.": "Paragraph 1 tells when the tower is open. It does not show how loud the bell is.",
              "Ms. Varga said there were ninety-two steps in all.": "Paragraph 2 tells how many steps there are. It does not show how loud the bell is.",
              "Some gears were bigger than a bike wheel.": "Paragraph 3 is about the gears, not the bell.",
              "Just before noon, Ms. Varga pointed to a huge bronze bell above their heads.": "This one is tricky. Paragraph 4 says the bell was huge. But big is not the same as loud. It does not SHOW how loud the bell is."
            },
            why: "Paragraph 4 says Ruben felt each boom of the bell in his chest. It also says Grandpa covered his ears. Both show that the bell is very loud." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 2,
            q: "Read paragraph 2. The passage shows that Ruben TAKES CARE of his grandpa. Click on the TWO sentences in paragraph 2 that BEST support this idea.",
            answers: ["Ruben carried Grandpa's heavy coat, so both of Grandpa's hands would be free.", "Every ten steps, Ruben stopped and waited for Grandpa to catch up."],
            kinds: {
              "Inside, a narrow staircase curled up the walls of the tower.": 'notproof',
              "Grandpa held the rail tight with both hands.": 'wrongwho',
              "Ms. Varga said there were ninety-two steps in all.": 'wrongwho',
              "A pigeon flapped past a tiny window.": 'notproof',
              "Ruben counted each step out loud.": 'notproof'
            },
            notes: {
              "Inside, a narrow staircase curled up the walls of the tower.": "In paragraph 2, this sentence tells about the stairs. It does not show what Ruben did.",
              "Grandpa held the rail tight with both hands.": "In paragraph 2, this sentence is about Grandpa, not Ruben.",
              "Ms. Varga said there were ninety-two steps in all.": "In paragraph 2, this sentence is about what Ms. Varga said, not Ruben.",
              "A pigeon flapped past a tiny window.": "In paragraph 2, this sentence is about a pigeon, not Ruben.",
              "Ruben counted each step out loud.": "This one is tricky. Paragraph 2 shows Ruben on the stairs. But counting steps does not SHOW him taking care of Grandpa."
            },
            why: "Paragraph 2 says Ruben carried Grandpa's coat for him. It also says Ruben stopped to wait for Grandpa on the stairs. Both show that Ruben takes care of his grandpa." }
        ]
      },
      turn: [
        {
          story: {
            title: "Four Seats in the White Plane",
            paragraphs: [
              "On Saturday, Alma's scout troop visited a small airport outside the city. A pilot named Ms. Kent met them by a big metal building called a hangar. Inside the hangar sat a white plane with a red stripe.",
              "Ms. Kent said each scout could take a turn in the pilot's seat. Alma had flown on a big jet once, but she had never seen a cockpit. When it was her turn, she climbed into the seat and buckled the belt. Alma let out a happy squeal and clapped her hands. The other scouts lined up behind the wing.",
              "The cockpit was full of buttons, dials, and screens. Ms. Kent had taught flying lessons for twelve years. Alma asked what almost every button did. Ms. Kent answered each question, even the ones she had heard two times that day. When Alma reached for the wrong knob, Ms. Kent smiled and gently pointed to the right one. A fuel truck rumbled past the open hangar door.",
              "Next, the scouts walked all the way around the plane. Ms. Kent said the plane could fly all the way to the ocean. The whole plane was shorter than a school bus. Only four people could squeeze inside at one time.",
              "At the end of the visit, Ms. Kent said that she first dreamed of flying when she was eight. On the ride home, Alma asked her mom how old a person had to be to take flying lessons. That night, she started a jar to save money for her first lesson."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Alma is EXCITED about her turn.",
              answers: ["Alma let out a happy squeal and clapped her hands."],
              kinds: {
                "Ms. Kent said each scout could take a turn in the pilot's seat.": 'wrongwho',
                "Alma had flown on a big jet once, but she had never seen a cockpit.": 'notproof',
                "When it was her turn, she climbed into the seat and buckled the belt.": 'notproof',
                "The other scouts lined up behind the wing.": 'wrongwho'
              },
              notes: {
                "Ms. Kent said each scout could take a turn in the pilot's seat.": "In paragraph 2, this sentence tells what Ms. Kent said. It does not show how Alma feels.",
                "Alma had flown on a big jet once, but she had never seen a cockpit.": "This one is tricky. Paragraph 2 says Alma had never seen a cockpit. That is WHY she might be excited. But it does not SHOW how she feels.",
                "When it was her turn, she climbed into the seat and buckled the belt.": "In paragraph 2, this sentence tells what Alma did first. Climbing in and buckling up does not show how she feels.",
                "The other scouts lined up behind the wing.": "In paragraph 2, this sentence is about the other scouts, not Alma."
              },
              why: "Paragraph 2 says Alma let out a happy squeal. She clapped her hands. That shows she is excited." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the plane is very SMALL. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "A pilot named Ms. Kent met them by a big metal building called a hangar.",
                "The other scouts lined up behind the wing.",
                "A fuel truck rumbled past the open hangar door.",
                "Ms. Kent said the plane could fly all the way to the ocean.",
                "The whole plane was shorter than a school bus.",
                "Only four people could squeeze inside at one time."
              ],
              answers: ["The whole plane was shorter than a school bus.", "Only four people could squeeze inside at one time."],
              kinds: {
                "A pilot named Ms. Kent met them by a big metal building called a hangar.": 'notproof',
                "The other scouts lined up behind the wing.": 'notproof',
                "A fuel truck rumbled past the open hangar door.": 'notproof',
                "Ms. Kent said the plane could fly all the way to the ocean.": 'notproof'
              },
              notes: {
                "A pilot named Ms. Kent met them by a big metal building called a hangar.": "Paragraph 1 tells about the hangar, not the plane. It does not show how small the plane is.",
                "The other scouts lined up behind the wing.": "Paragraph 2 tells where the scouts stood. It does not show how small the plane is.",
                "A fuel truck rumbled past the open hangar door.": "Paragraph 3 is about a fuel truck, not the plane.",
                "Ms. Kent said the plane could fly all the way to the ocean.": "This one is tricky. Paragraph 4 is about the plane. But it tells how far the plane can fly. It does not SHOW how small it is."
              },
              why: "Paragraph 4 says the whole plane was shorter than a school bus. It also says only four people could fit inside. Both show that the plane is small." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
              q: "Read paragraph 3. The passage shows that Ms. Kent is PATIENT. That means she stays calm and does not get upset. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              answers: ["Ms. Kent answered each question, even the ones she had heard two times that day.", "When Alma reached for the wrong knob, Ms. Kent smiled and gently pointed to the right one."],
              kinds: {
                "The cockpit was full of buttons, dials, and screens.": 'notproof',
                "Ms. Kent had taught flying lessons for twelve years.": 'notproof',
                "Alma asked what almost every button did.": 'wrongwho',
                "A fuel truck rumbled past the open hangar door.": 'notproof'
              },
              notes: {
                "The cockpit was full of buttons, dials, and screens.": "In paragraph 3, this sentence tells what the cockpit looks like. It does not show what Ms. Kent did.",
                "Ms. Kent had taught flying lessons for twelve years.": "This one is tricky. Paragraph 3 says Ms. Kent has taught for a long time. But it does not SHOW how she acts with Alma.",
                "Alma asked what almost every button did.": "In paragraph 3, this sentence is about Alma and her questions, not Ms. Kent.",
                "A fuel truck rumbled past the open hangar door.": "In paragraph 3, this sentence is about a fuel truck, not Ms. Kent."
              },
              why: "Paragraph 3 says Ms. Kent answered each question, even the same ones again. She also smiled when Alma reached for the wrong knob. Both show that she is patient." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Alma wants to be a PILOT someday. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Inside the hangar sat a white plane with a red stripe.",
                "Alma had flown on a big jet once, but she had never seen a cockpit.",
                "Next, the scouts walked all the way around the plane.",
                "At the end of the visit, Ms. Kent said that she first dreamed of flying when she was eight.",
                "On the ride home, Alma asked her mom how old a person had to be to take flying lessons.",
                "That night, she started a jar to save money for her first lesson."
              ],
              answers: ["On the ride home, Alma asked her mom how old a person had to be to take flying lessons.", "That night, she started a jar to save money for her first lesson."],
              kinds: {
                "Inside the hangar sat a white plane with a red stripe.": 'notproof',
                "Alma had flown on a big jet once, but she had never seen a cockpit.": 'notproof',
                "Next, the scouts walked all the way around the plane.": 'notproof',
                "At the end of the visit, Ms. Kent said that she first dreamed of flying when she was eight.": 'wrongwho'
              },
              notes: {
                "Inside the hangar sat a white plane with a red stripe.": "Paragraph 1 tells what the plane looks like. It does not show what Alma wants.",
                "Alma had flown on a big jet once, but she had never seen a cockpit.": "Paragraph 2 tells about a trip Alma took before. It does not show what she wants to do someday.",
                "Next, the scouts walked all the way around the plane.": "Paragraph 4 tells what all the scouts did. It does not show what Alma wants.",
                "At the end of the visit, Ms. Kent said that she first dreamed of flying when she was eight.": "This one is tricky. Paragraph 5 shows someone who dreamed of flying. But this sentence is about Ms. Kent, not Alma."
              },
              why: "Paragraph 5 says Alma asked how old you must be to take flying lessons. She also started a jar to save for a lesson. Both show that she wants to be a pilot." }
          ]
        },
        {
          story: {
            title: "The Falcon on the Leather Glove",
            paragraphs: [
              "On a cold day in November, Jess's class went to a bird rescue center in the hills outside the city. The center took care of hawks, owls, and falcons that had been hurt. A worker named Ms. Hart met the class outside a long wooden barn. She wore a thick leather glove on her left hand.",
              "Ms. Hart opened a cage and held out her glove. A small gray falcon hopped onto the glove. She stroked the falcon's chest softly with one finger. The falcon's sharp yellow feet gripped the leather. Jess leaned forward to get a better look.",
              "Before they went into the barn, Ms. Hart gave the class two rules. No one could shout, and no one could tap on the cages. Jess walked past each cage on her tiptoes. A boy behind her dropped his water bottle with a loud clunk. A big brown owl blinked at Jess with its round orange eyes. When she wanted to ask about the owl, she whispered in Ms. Hart's ear.",
              "Next, Ms. Hart took the falcon out to a big grassy field. She tossed a scrap of meat high into the air. The falcon shot off her glove and snatched the meat before it could fall. Then it zoomed around the field, and Jess could barely keep her eyes on it.",
              "At the end of the visit, Ms. Hart said the center needed old towels to keep the birds warm. That weekend, Jess and her mom knocked on each door in their building and asked for old towels. She also gave the center two dollars from her piggy bank."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Ms. Hart is GENTLE with the falcon.",
              answers: ["She stroked the falcon's chest softly with one finger."],
              kinds: {
                "Ms. Hart opened a cage and held out her glove.": 'notproof',
                "A small gray falcon hopped onto the glove.": 'notproof',
                "The falcon's sharp yellow feet gripped the leather.": 'notproof',
                "Jess leaned forward to get a better look.": 'wrongwho'
              },
              notes: {
                "Ms. Hart opened a cage and held out her glove.": "This one is tricky. Paragraph 2 shows Ms. Hart with the falcon. But opening a cage does not SHOW that she is gentle.",
                "A small gray falcon hopped onto the glove.": "In paragraph 2, this sentence tells what the falcon did. It does not show what Ms. Hart did.",
                "The falcon's sharp yellow feet gripped the leather.": "In paragraph 2, this sentence is about the falcon's feet. It does not show that Ms. Hart is gentle.",
                "Jess leaned forward to get a better look.": "In paragraph 2, this sentence is about Jess, not Ms. Hart."
              },
              why: "Paragraph 2 says Ms. Hart stroked the falcon softly with just one finger. That shows Ms. Hart is gentle with the falcon." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the falcon is very FAST. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "The center took care of hawks, owls, and falcons that had been hurt.",
                "A small gray falcon hopped onto the glove.",
                "No one could shout, and no one could tap on the cages.",
                "She tossed a scrap of meat high into the air.",
                "The falcon shot off her glove and snatched the meat before it could fall.",
                "Then it zoomed around the field, and Jess could barely keep her eyes on it."
              ],
              answers: ["The falcon shot off her glove and snatched the meat before it could fall.", "Then it zoomed around the field, and Jess could barely keep her eyes on it."],
              kinds: {
                "The center took care of hawks, owls, and falcons that had been hurt.": 'notproof',
                "A small gray falcon hopped onto the glove.": 'notproof',
                "No one could shout, and no one could tap on the cages.": 'notproof',
                "She tossed a scrap of meat high into the air.": 'notproof'
              },
              notes: {
                "The center took care of hawks, owls, and falcons that had been hurt.": "Paragraph 1 tells what the center does. It does not show how fast the falcon is.",
                "A small gray falcon hopped onto the glove.": "Paragraph 2 says the falcon hopped onto the glove. It does not show how fast the falcon is.",
                "No one could shout, and no one could tap on the cages.": "Paragraph 3 tells the rules in the barn. It does not show how fast the falcon is.",
                "She tossed a scrap of meat high into the air.": "This one is tricky. Paragraph 4 is about the falcon in the field. But this sentence tells what Ms. Hart did. It does not SHOW how fast the falcon is."
              },
              why: "Paragraph 4 says the falcon got the meat before it could fall. It also says the falcon zoomed so that Jess could barely see it. Both show that it is very fast." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
              q: "Read paragraph 3. The passage shows that Jess is QUIET in the barn. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              answers: ["Jess walked past each cage on her tiptoes.", "When she wanted to ask about the owl, she whispered in Ms. Hart's ear."],
              kinds: {
                "Before they went into the barn, Ms. Hart gave the class two rules.": 'wrongwho',
                "No one could shout, and no one could tap on the cages.": 'notproof',
                "A boy behind her dropped his water bottle with a loud clunk.": 'wrongwho',
                "A big brown owl blinked at Jess with its round orange eyes.": 'notproof'
              },
              notes: {
                "Before they went into the barn, Ms. Hart gave the class two rules.": "In paragraph 3, this sentence is about Ms. Hart and the rules. It does not show what Jess did.",
                "No one could shout, and no one could tap on the cages.": "This one is tricky. Paragraph 3 tells the rule about shouting. But a rule does not SHOW what Jess did.",
                "A boy behind her dropped his water bottle with a loud clunk.": "In paragraph 3, this sentence is about a boy, not Jess. He made a loud noise.",
                "A big brown owl blinked at Jess with its round orange eyes.": "In paragraph 3, this sentence is about the owl. It does not show what Jess did."
              },
              why: "Paragraph 3 says Jess walked past the cages on her tiptoes. It also says she whispered when she had a question. Both show that Jess is quiet in the barn." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Jess wants to HELP the birds. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "On a cold day in November, Jess's class went to a bird rescue center in the hills outside the city.",
                "Jess leaned forward to get a better look.",
                "A big brown owl blinked at Jess with its round orange eyes.",
                "At the end of the visit, Ms. Hart said the center needed old towels to keep the birds warm.",
                "That weekend, Jess and her mom knocked on each door in their building and asked for old towels.",
                "She also gave the center two dollars from her piggy bank."
              ],
              answers: ["That weekend, Jess and her mom knocked on each door in their building and asked for old towels.", "She also gave the center two dollars from her piggy bank."],
              kinds: {
                "On a cold day in November, Jess's class went to a bird rescue center in the hills outside the city.": 'notproof',
                "Jess leaned forward to get a better look.": 'notproof',
                "A big brown owl blinked at Jess with its round orange eyes.": 'notproof',
                "At the end of the visit, Ms. Hart said the center needed old towels to keep the birds warm.": 'notproof'
              },
              notes: {
                "On a cold day in November, Jess's class went to a bird rescue center in the hills outside the city.": "Paragraph 1 tells where Jess's class went. It does not show Jess doing something for the birds.",
                "Jess leaned forward to get a better look.": "Paragraph 2 shows Jess looking at the falcon. It does not show her doing something for the birds.",
                "A big brown owl blinked at Jess with its round orange eyes.": "Paragraph 3 is about the owl. It does not show Jess doing something for the birds.",
                "At the end of the visit, Ms. Hart said the center needed old towels to keep the birds warm.": "This one is tricky. Paragraph 5 tells what the center needs. But Ms. Hart says it. It does not SHOW what Jess did."
              },
              why: "Paragraph 5 says Jess and her mom went door to door to get old towels. It also says she gave two dollars to the center. Both show that Jess wants to help the birds." }
          ]
        }
      ]
    },

    /* ───────── Version 3 ───────── */
    {
      teach: {
        story: {
          title: "The Coin Box at the Farm Stand",
          paragraphs: [
            "On Sunday, Pilar and her dad drove home from a visit with Aunt Lou in the country. Along the road, they saw a little wooden farm stand. Baskets of squash, corn, and green beans sat on a long table.",
            "Dad parked the car on the grass, far from the road. Pilar looked all around, but there was no farmer in sight. She scratched her head and asked Dad who would take their money. Dad pointed to a sign that said, PLEASE PAY IN THE BOX.",
            "Pilar picked out four ears of corn and a big yellow squash. A card on the table said the corn cost fifty cents an ear. Pilar added up the prices on her fingers. Then she put every coin into the metal box, even her last shiny quarter. Back at the car, Dad found a small extra squash at the bottom of the bag. Pilar walked back to the table with Dad and put one more dollar into the box.",
            "When Pilar got back in the car, Dad gave her a big high five. That night at dinner, Dad told Grandma the whole story about the extra squash. Pilar ate two ears of corn with butter and salt."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'How to click',
            lines: [
              "Today you will click on sentences in a passage. The passage is the story on your screen.",
              "A paragraph is one part of the passage. Each paragraph has a number.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences, or Choose TWO, means pick two.",
              "With TWO, BOTH sentences must prove the idea. One right and one wrong gets no point, just like the test.",
              "BEST supports means the sentence proves the idea the most.",
              "In Level 2, some sentences are tricky. A sentence can be ABOUT the idea and still not SHOW it.",
              "Say the idea is that Lin is hungry. Lin's lunch was late. That is WHY she might be hungry. But it does not SHOW that she is hungry.",
              "Lin's tummy growled all through math. That SHOWS she is hungry. That is proof.",
              "A sentence that is about the idea but does not prove it is a tricky sentence. Watch out for it!"
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the TWO',
            lines: [
              "Let's do one together. Here is the question.",
              "The passage shows that Pilar is HONEST. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              "Step 1. Say the idea. Pilar is honest. She does the right thing, even when no one is watching.",
              "Step 2. Find the paragraph. Paragraph 3 tells how Pilar pays at the farm stand.",
              "Step 3. Test each sentence. Ask, does this SHOW that Pilar is honest?",
              "Pilar picked out corn and a squash. The card tells the price. Those do not show that she is honest.",
              "Pilar added up the prices on her fingers. This one is tricky! It is about paying. But adding is not paying. It does not SHOW that she is honest.",
              "She put every coin in the box, even her last quarter. Yes! She paid it all.",
              "Dad found an extra squash in the bag. That is about Dad.",
              "Pilar walked back with Dad and put one more dollar in the box. Yes! She paid for the extra squash.",
              "The TWO honest sentences are our answer. The tricky one lights up too, so you can see it.",
              "We click the two that SHOW the idea. Then we tap That's My Answer!"
            ],
            lit: [
              "Then she put every coin into the metal box, even her last shiny quarter.",
              "Pilar walked back to the table with Dad and put one more dollar into the box.",
              "Pilar added up the prices on her fingers."
            ] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Pilar is CONFUSED. That means she does not understand something.",
            answers: ["She scratched her head and asked Dad who would take their money."],
            kinds: {
              "Dad parked the car on the grass, far from the road.": 'wrongwho',
              "Pilar looked all around, but there was no farmer in sight.": 'notproof',
              "Dad pointed to a sign that said, PLEASE PAY IN THE BOX.": 'wrongwho'
            },
            notes: {
              "Dad parked the car on the grass, far from the road.": "In paragraph 2, this sentence is about Dad and the car, not Pilar.",
              "Pilar looked all around, but there was no farmer in sight.": "This one is tricky. Paragraph 2 says no farmer was there. That is WHY Pilar is confused. But it does not SHOW how she feels.",
              "Dad pointed to a sign that said, PLEASE PAY IN THE BOX.": "In paragraph 2, this sentence is about Dad and the sign, not Pilar."
            },
            why: "Paragraph 2 says Pilar scratched her head. She asked Dad who would take the money. That shows Pilar is confused." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that Dad is PROUD of Pilar. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "Along the road, they saw a little wooden farm stand.",
              "Dad parked the car on the grass, far from the road.",
              "Back at the car, Dad found a small extra squash at the bottom of the bag.",
              "Pilar walked back to the table with Dad and put one more dollar into the box.",
              "When Pilar got back in the car, Dad gave her a big high five.",
              "That night at dinner, Dad told Grandma the whole story about the extra squash."
            ],
            answers: ["When Pilar got back in the car, Dad gave her a big high five.", "That night at dinner, Dad told Grandma the whole story about the extra squash."],
            kinds: {
              "Along the road, they saw a little wooden farm stand.": 'notproof',
              "Dad parked the car on the grass, far from the road.": 'notproof',
              "Back at the car, Dad found a small extra squash at the bottom of the bag.": 'notproof',
              "Pilar walked back to the table with Dad and put one more dollar into the box.": 'notproof'
            },
            notes: {
              "Along the road, they saw a little wooden farm stand.": "Paragraph 1 tells what they saw. It does not show how Dad feels.",
              "Dad parked the car on the grass, far from the road.": "Paragraph 2 tells where Dad parked. It does not show how Dad feels.",
              "Back at the car, Dad found a small extra squash at the bottom of the bag.": "Paragraph 3 tells what Dad found. It does not show how he feels about Pilar.",
              "Pilar walked back to the table with Dad and put one more dollar into the box.": "This one is tricky. Paragraph 3 tells what Pilar did. That is WHY Dad is proud. But it does not SHOW how Dad feels."
            },
            why: "Paragraph 4 says Dad gave Pilar a big high five. It also says he told Grandma the whole story. Both show that Dad is proud of Pilar." },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Find the part of the passage that talks about the idea.",
              "Step 3. Test each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out for the tricky sentence. It is about the idea, but it does not prove it.",
              "Watch out for the wrong person, too. Check who the question is about.",
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
          title: "Squeaks and Toots at Lindell Hall",
          paragraphs: [
            "On Thursday, Mira's class rode a bus to Lindell Hall to watch the city orchestra practice. The hall had soft red seats and a golden ceiling. The class sat in the seats nearest the stage.",
            "Mira had never heard an orchestra before. For a long time, the players only tuned their instruments. Mira slumped down in her seat and counted the lights on the ceiling. Her friend Lark yawned and rested her head on Mira's shoulder.",
            "At last, the conductor, Mr. Adler, raised a thin white stick, and the music began. Mr. Adler listened with his head tipped to one side. Soon he tapped his stand and asked the violins to play the same three notes again. Then he stopped them two more times until the notes sounded just the way he wanted. The drummer wiped his forehead with a towel. A woman near the back of the stage turned the pages of her music.",
            "After the practice, a tuba player named Mr. Brooks waved the class up to the stage. He let each kid put a hand on his giant horn while he played one low note. Mira giggled because the buzz tickled her fingers. On the bus, she hummed the music all the way back to school."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Mira is BORED at first.",
            answers: ["Mira slumped down in her seat and counted the lights on the ceiling."],
            kinds: {
              "Mira had never heard an orchestra before.": 'notproof',
              "For a long time, the players only tuned their instruments.": 'notproof',
              "Her friend Lark yawned and rested her head on Mira's shoulder.": 'wrongwho'
            },
            notes: {
              "Mira had never heard an orchestra before.": "In paragraph 2, this sentence tells that the orchestra is new for Mira. It does not show how she feels.",
              "For a long time, the players only tuned their instruments.": "This one is tricky. Paragraph 2 says the players only tuned for a long time. That is WHY Mira is bored. But it does not SHOW how she feels.",
              "Her friend Lark yawned and rested her head on Mira's shoulder.": "This one is tricky too. Paragraph 2 shows someone who is bored. But this sentence is about Lark, not Mira."
            },
            why: "Paragraph 2 says Mira slumped down in her seat and counted the lights on the ceiling. That shows Mira is bored." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that Mira has FUN at the end of the visit. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "The hall had soft red seats and a golden ceiling.",
              "Mira slumped down in her seat and counted the lights on the ceiling.",
              "At last, the conductor, Mr. Adler, raised a thin white stick, and the music began.",
              "He let each kid put a hand on his giant horn while he played one low note.",
              "Mira giggled because the buzz tickled her fingers.",
              "On the bus, she hummed the music all the way back to school."
            ],
            answers: ["Mira giggled because the buzz tickled her fingers.", "On the bus, she hummed the music all the way back to school."],
            kinds: {
              "The hall had soft red seats and a golden ceiling.": 'notproof',
              "Mira slumped down in her seat and counted the lights on the ceiling.": 'wrongtime',
              "At last, the conductor, Mr. Adler, raised a thin white stick, and the music began.": 'wrongwho',
              "He let each kid put a hand on his giant horn while he played one low note.": 'notproof'
            },
            notes: {
              "The hall had soft red seats and a golden ceiling.": "Paragraph 1 tells what the hall looks like. It does not show how Mira feels.",
              "Mira slumped down in her seat and counted the lights on the ceiling.": "Paragraph 2 is about the start of the visit. Then Mira was bored. It does not show the end of the visit.",
              "At last, the conductor, Mr. Adler, raised a thin white stick, and the music began.": "Paragraph 3 tells how the music began. It does not show how Mira feels.",
              "He let each kid put a hand on his giant horn while he played one low note.": "This one is tricky. Paragraph 4 tells what Mr. Brooks did. That is WHY Mira has fun. But it does not SHOW how she feels."
            },
            why: "Paragraph 4 says Mira giggled when the buzz tickled her fingers. It also says she hummed the music all the way back to school. Both show that Mira has fun at the end." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
            q: "Read paragraph 3. The passage shows that Mr. Adler is PICKY. That means he is hard to please. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
            answers: ["Soon he tapped his stand and asked the violins to play the same three notes again.", "Then he stopped them two more times until the notes sounded just the way he wanted."],
            kinds: {
              "At last, the conductor, Mr. Adler, raised a thin white stick, and the music began.": 'notproof',
              "Mr. Adler listened with his head tipped to one side.": 'notproof',
              "The drummer wiped his forehead with a towel.": 'wrongwho',
              "A woman near the back of the stage turned the pages of her music.": 'wrongwho'
            },
            notes: {
              "At last, the conductor, Mr. Adler, raised a thin white stick, and the music began.": "In paragraph 3, this sentence tells how the music began. It does not show that Mr. Adler is hard to please.",
              "Mr. Adler listened with his head tipped to one side.": "This one is tricky. Paragraph 3 shows Mr. Adler listening hard. But listening is not the same as being hard to please. It does not SHOW that he is picky.",
              "The drummer wiped his forehead with a towel.": "In paragraph 3, this sentence is about the drummer, not Mr. Adler.",
              "A woman near the back of the stage turned the pages of her music.": "In paragraph 3, this sentence is about a woman on the stage, not Mr. Adler."
            },
            why: "Paragraph 3 says Mr. Adler made the violins play the same three notes again. Then he stopped them two more times. Both show that he is picky." }
        ]
      },
      turn: [
        {
          story: {
            title: "Saturn Through the Big Telescope",
            paragraphs: [
              "Once a month, the college on the hill let people look through its giant telescope. On a clear night in October, Max and his big sister, Fern, climbed the stairs to the round dome. A sign by the door said that Saturn would be easy to see that night.",
              "The line for the telescope curled around the whole room. Max counted twenty-two people ahead of them. He kept hopping from one foot to the other and asking Fern how much longer it would be. Fern sat on the floor and played a game on her phone. A man near the front took a very long turn.",
              "At last, it was Max's turn. The telescope was as long as a canoe and pointed at a slit in the roof. Dr. Shaw, the scientist in charge, said that even a small bump could knock Saturn out of view. Max climbed onto a little step stool. He held his hands tight behind his back. Then he leaned in slowly until his eye was just above the eyepiece. Fern snapped a picture of him with her phone.",
              "There was Saturn, small and pale yellow, with a thin ring all around it. Max gasped so loudly that the people in line laughed. He stared for so long that Dr. Shaw had to tap him on the shoulder. Dr. Shaw told him that Saturn has more than one hundred moons.",
              "On the drive home with Mom, Max asked Fern one question after another about the planets. Fern did not know most of the answers. The next day, Max took out three books about space from the school library."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Max is IMPATIENT. That means he does not like to wait.",
              answers: ["He kept hopping from one foot to the other and asking Fern how much longer it would be."],
              kinds: {
                "The line for the telescope curled around the whole room.": 'notproof',
                "Max counted twenty-two people ahead of them.": 'notproof',
                "Fern sat on the floor and played a game on her phone.": 'wrongwho',
                "A man near the front took a very long turn.": 'wrongwho'
              },
              notes: {
                "The line for the telescope curled around the whole room.": "In paragraph 2, this sentence tells how long the line was. It does not show how Max feels.",
                "Max counted twenty-two people ahead of them.": "This one is tricky. Paragraph 2 says many people were ahead of Max. That is WHY he might not like the wait. But it does not SHOW how he feels.",
                "Fern sat on the floor and played a game on her phone.": "In paragraph 2, this sentence is about Fern, not Max.",
                "A man near the front took a very long turn.": "In paragraph 2, this sentence is about a man in the line, not Max."
              },
              why: "Paragraph 2 says Max kept hopping from foot to foot. He kept asking Fern how much longer. That shows Max is impatient." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Max is AMAZED when he sees Saturn. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "A sign by the door said that Saturn would be easy to see that night.",
                "Max counted twenty-two people ahead of them.",
                "Max climbed onto a little step stool.",
                "There was Saturn, small and pale yellow, with a thin ring all around it.",
                "Max gasped so loudly that the people in line laughed.",
                "He stared for so long that Dr. Shaw had to tap him on the shoulder."
              ],
              answers: ["Max gasped so loudly that the people in line laughed.", "He stared for so long that Dr. Shaw had to tap him on the shoulder."],
              kinds: {
                "A sign by the door said that Saturn would be easy to see that night.": 'notproof',
                "Max counted twenty-two people ahead of them.": 'notproof',
                "Max climbed onto a little step stool.": 'notproof',
                "There was Saturn, small and pale yellow, with a thin ring all around it.": 'notproof'
              },
              notes: {
                "A sign by the door said that Saturn would be easy to see that night.": "Paragraph 1 tells what the sign said. It does not show how Max feels.",
                "Max counted twenty-two people ahead of them.": "Paragraph 2 is about the line. It does not show how Max feels when he sees Saturn.",
                "Max climbed onto a little step stool.": "Paragraph 3 tells how Max got up to the telescope. It does not show how he feels.",
                "There was Saturn, small and pale yellow, with a thin ring all around it.": "This one is tricky. Paragraph 4 tells what Max saw. That is WHY he is amazed. But it does not SHOW how he feels."
              },
              why: "Paragraph 4 says Max gasped so loudly that people laughed. It also says he stared so long that Dr. Shaw had to tap him. Both show that Max is amazed." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
              q: "Read paragraph 3. The passage shows that Max is CAREFUL with the telescope. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              answers: ["He held his hands tight behind his back.", "Then he leaned in slowly until his eye was just above the eyepiece."],
              kinds: {
                "At last, it was Max's turn.": 'notproof',
                "The telescope was as long as a canoe and pointed at a slit in the roof.": 'notproof',
                "Dr. Shaw, the scientist in charge, said that even a small bump could knock Saturn out of view.": 'notproof',
                "Max climbed onto a little step stool.": 'notproof',
                "Fern snapped a picture of him with her phone.": 'wrongwho'
              },
              notes: {
                "At last, it was Max's turn.": "In paragraph 3, this sentence tells that it was Max's turn. It does not show what he did.",
                "The telescope was as long as a canoe and pointed at a slit in the roof.": "In paragraph 3, this sentence tells what the telescope looks like. It does not show what Max did.",
                "Dr. Shaw, the scientist in charge, said that even a small bump could knock Saturn out of view.": "This one is tricky. Paragraph 3 tells why Max must be careful. But Dr. Shaw says it. It does not SHOW what Max did.",
                "Max climbed onto a little step stool.": "In paragraph 3, Max climbs onto a stool. That is how he gets up high. It does not show that he is careful.",
                "Fern snapped a picture of him with her phone.": "In paragraph 3, this sentence is about Fern, not Max."
              },
              why: "Paragraph 3 says Max held his hands behind his back. It also says he leaned in slowly. That way, he would not bump the telescope. Both show that Max is careful." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Max wants to LEARN more about the night sky. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "On a clear night in October, Max and his big sister, Fern, climbed the stairs to the round dome.",
                "A man near the front took a very long turn.",
                "Dr. Shaw told him that Saturn has more than one hundred moons.",
                "On the drive home with Mom, Max asked Fern one question after another about the planets.",
                "Fern did not know most of the answers.",
                "The next day, Max took out three books about space from the school library."
              ],
              answers: ["On the drive home with Mom, Max asked Fern one question after another about the planets.", "The next day, Max took out three books about space from the school library."],
              kinds: {
                "On a clear night in October, Max and his big sister, Fern, climbed the stairs to the round dome.": 'notproof',
                "A man near the front took a very long turn.": 'wrongwho',
                "Dr. Shaw told him that Saturn has more than one hundred moons.": 'notproof',
                "Fern did not know most of the answers.": 'wrongwho'
              },
              notes: {
                "On a clear night in October, Max and his big sister, Fern, climbed the stairs to the round dome.": "Paragraph 1 tells where Max and Fern went. It does not show Max trying to learn more.",
                "A man near the front took a very long turn.": "Paragraph 2 is about a man in the line, not Max.",
                "Dr. Shaw told him that Saturn has more than one hundred moons.": "This one is tricky. Paragraph 4 tells a fact about Saturn. But Dr. Shaw says it. It does not SHOW Max trying to learn more.",
                "Fern did not know most of the answers.": "Paragraph 5 is about Fern, not Max."
              },
              why: "Paragraph 5 says Max asked Fern one question after another. It also says he took out three books about space the next day. Both show that Max wants to learn more." }
          ]
        },
        {
          story: {
            title: "Tiny Letters at the Print Shop",
            paragraphs: [
              "On Wednesday, Rhea's class walked to an old print shop on Mill Street. The shop still made cards and posters on a press that was over one hundred years old. A printer named Mr. Tanaka met the class at the door. His apron was covered with black and blue spots of ink.",
              "Mr. Tanaka pulled open a wide, flat drawer full of metal letters. The letter on each piece of metal was no bigger than a grain of rice. Mr. Tanaka said the shop had more than ten thousand letters. Every kid got to set their own name for a card. The letters had to face backward, so the words would print the right way. Rhea had to use tweezers to pick up each letter.",
              "Next, Mr. Tanaka rolled shiny black ink across a metal plate. Rhea leaned in to watch the roller go back and forth. When she stood up, a big black smudge sat on the tip of her nose. A boy at her table pointed and giggled. Rhea's cheeks turned pink, and she covered her nose with her sleeve.",
              "Mr. Tanaka handed her a wet rag. Rhea wiped her nose, but some ink was still on it. Then she pressed her nose onto a scrap of paper and made a tiny round nose print. She held up the scrap and told the class that now she could sign her name with her nose. Mr. Tanaka laughed and pinned the nose print on his wall. The whole table clapped.",
              "At last, Mr. Tanaka helped Rhea pull the long handle of the press. Out came a card with RHEA in neat black letters. Mr. Tanaka said it was the neatest card of the whole day. That night, Rhea set the card on the kitchen table where her whole family would see it. The next day, she showed it to every kid at her lunch table."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 3,
              q: "Read paragraph 3. Click on the sentence in paragraph 3 that BEST shows that Rhea is EMBARRASSED. That means she feels silly in front of other people.",
              answers: ["Rhea's cheeks turned pink, and she covered her nose with her sleeve."],
              kinds: {
                "Next, Mr. Tanaka rolled shiny black ink across a metal plate.": 'wrongwho',
                "Rhea leaned in to watch the roller go back and forth.": 'notproof',
                "When she stood up, a big black smudge sat on the tip of her nose.": 'notproof',
                "A boy at her table pointed and giggled.": 'wrongwho'
              },
              notes: {
                "Next, Mr. Tanaka rolled shiny black ink across a metal plate.": "In paragraph 3, this sentence is about Mr. Tanaka and the ink, not Rhea.",
                "Rhea leaned in to watch the roller go back and forth.": "In paragraph 3, this sentence tells what Rhea watched. It does not show how she feels.",
                "When she stood up, a big black smudge sat on the tip of her nose.": "This one is tricky. Paragraph 3 says Rhea had ink on her nose. That is WHY she feels silly. But it does not SHOW how she feels.",
                "A boy at her table pointed and giggled.": "In paragraph 3, this sentence is about a boy at her table, not Rhea."
              },
              why: "Paragraph 3 says Rhea's cheeks turned pink. She covered her nose with her sleeve. That shows Rhea is embarrassed." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the metal letters are very SMALL. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "The shop still made cards and posters on a press that was over one hundred years old.",
                "The letter on each piece of metal was no bigger than a grain of rice.",
                "Mr. Tanaka said the shop had more than ten thousand letters.",
                "Rhea had to use tweezers to pick up each letter.",
                "Next, Mr. Tanaka rolled shiny black ink across a metal plate.",
                "Out came a card with RHEA in neat black letters."
              ],
              answers: ["The letter on each piece of metal was no bigger than a grain of rice.", "Rhea had to use tweezers to pick up each letter."],
              kinds: {
                "The shop still made cards and posters on a press that was over one hundred years old.": 'notproof',
                "Mr. Tanaka said the shop had more than ten thousand letters.": 'notproof',
                "Next, Mr. Tanaka rolled shiny black ink across a metal plate.": 'notproof',
                "Out came a card with RHEA in neat black letters.": 'notproof'
              },
              notes: {
                "The shop still made cards and posters on a press that was over one hundred years old.": "Paragraph 1 tells how old the press is. It does not show how small the letters are.",
                "Mr. Tanaka said the shop had more than ten thousand letters.": "This one is tricky. Paragraph 2 is about the metal letters. But it tells how MANY letters there are, not how small they are.",
                "Next, Mr. Tanaka rolled shiny black ink across a metal plate.": "Paragraph 3 tells about the ink. It does not show how small the letters are.",
                "Out came a card with RHEA in neat black letters.": "Paragraph 5 tells about the letters on the card. It does not show how small the metal letters are."
              },
              why: "Paragraph 2 says the letter on each piece of metal was no bigger than a grain of rice. It also says Rhea needed tweezers to pick them up. Both show that the letters are very small." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that Rhea is a GOOD SPORT. Here, that means she can laugh along even when a joke is on her. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["Then she pressed her nose onto a scrap of paper and made a tiny round nose print.", "She held up the scrap and told the class that now she could sign her name with her nose."],
              kinds: {
                "Mr. Tanaka handed her a wet rag.": 'wrongwho',
                "Rhea wiped her nose, but some ink was still on it.": 'notproof',
                "Mr. Tanaka laughed and pinned the nose print on his wall.": 'wrongwho',
                "The whole table clapped.": 'wrongwho'
              },
              notes: {
                "Mr. Tanaka handed her a wet rag.": "In paragraph 4, this sentence is about Mr. Tanaka, not Rhea.",
                "Rhea wiped her nose, but some ink was still on it.": "This one is tricky. Paragraph 4 shows Rhea cleaning her nose. But wiping is not having fun. It does not SHOW that she is a good sport.",
                "Mr. Tanaka laughed and pinned the nose print on his wall.": "This one is tricky too. Paragraph 4 shows someone having fun. But this sentence is about Mr. Tanaka, not Rhea.",
                "The whole table clapped.": "In paragraph 4, this sentence is about the kids at the table, not Rhea."
              },
              why: "Paragraph 4 says Rhea made a nose print with her inky nose. It also says she held it up and said she could sign her name with her nose. Both show that Rhea is a good sport." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Rhea is PROUD of her card. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "On Wednesday, Rhea's class walked to an old print shop on Mill Street.",
                "Every kid got to set their own name for a card.",
                "The whole table clapped.",
                "Mr. Tanaka said it was the neatest card of the whole day.",
                "That night, Rhea set the card on the kitchen table where her whole family would see it.",
                "The next day, she showed it to every kid at her lunch table."
              ],
              answers: ["That night, Rhea set the card on the kitchen table where her whole family would see it.", "The next day, she showed it to every kid at her lunch table."],
              kinds: {
                "On Wednesday, Rhea's class walked to an old print shop on Mill Street.": 'notproof',
                "Every kid got to set their own name for a card.": 'notproof',
                "The whole table clapped.": 'wrongwho',
                "Mr. Tanaka said it was the neatest card of the whole day.": 'notproof'
              },
              notes: {
                "On Wednesday, Rhea's class walked to an old print shop on Mill Street.": "Paragraph 1 tells where Rhea's class went. It does not show how she feels about her card.",
                "Every kid got to set their own name for a card.": "Paragraph 2 tells what every kid got to do. It does not show how Rhea feels about her card.",
                "The whole table clapped.": "Paragraph 4 is about the kids at the table, not Rhea.",
                "Mr. Tanaka said it was the neatest card of the whole day.": "This one is tricky. Paragraph 5 tells what Mr. Tanaka said about the card. That is WHY Rhea is proud. But it does not SHOW how Rhea feels."
              },
              why: "Paragraph 5 says Rhea put the card where her whole family would see it. It also says she showed it to every kid at her lunch table. Both show that Rhea is proud of her card." }
          ]
        }
      ]
    },

    /* ───────── Version 4 ───────── */
    {
      teach: {
        story: {
          title: "Warm Rolls at Rise and Shine Bakery",
          paragraphs: [
            "On Thursday morning, Room 7 visited the Rise and Shine Bakery on Market Street. The baker, Mr. Pak, had been at work since three o'clock that morning. Tall racks of fresh loaves filled the room behind the counter.",
            "Mr. Pak wore a white apron dusted with flour. He had owned the bakery for twenty years. He shook hands with every child and asked each name. A delivery truck beeped outside the back door.",
            "Next, Mr. Pak gave each child a lump of soft dough. Lola rolled her dough into a smooth ball. Mr. Pak said the rolls had to rise for half an hour before they could bake. Some kids poked their dough again and again to see if it had grown. Lola folded her hands and sat calmly on her stool. When her roll still looked flat, she just smiled and left it alone.",
            "At last, the rolls came out of the oven, puffy and golden. Lola gobbled hers up in four big bites. All the other kids asked Mr. Pak for a second roll. Mr. Pak gave each child a paper bag with a loaf to take home."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'How to click',
            lines: [
              "Today you will click on sentences in a passage. The passage is the story on your screen.",
              "A paragraph is one part of the passage. Each paragraph has a number.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences, or Choose TWO, means pick two.",
              "With TWO, BOTH sentences must prove the idea. One right and one wrong gets no point, just like the test.",
              "BEST supports means the sentence proves the idea the most.",
              "In Level 2, some sentences are tricky. A sentence can be ABOUT the idea and still not SHOW it.",
              "Say the idea is that Lin is hungry. Lin's lunch was late. That is WHY she might be hungry. But it does not SHOW that she is hungry.",
              "Lin's tummy growled all through math. That SHOWS she is hungry. That is proof.",
              "A sentence that is about the idea but does not prove it is a tricky sentence. Watch out for it!"
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the TWO',
            lines: [
              "Let's do one together. Here is the question.",
              "The passage shows that Lola is PATIENT. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              "Step 1. Say the idea. Lola is patient. She can wait a long time without fussing.",
              "Step 2. Find the paragraph. Paragraph 3 tells how the class waits for the rolls.",
              "Step 3. Test each sentence. Ask, does this SHOW that Lola is patient?",
              "Mr. Pak gave out dough, and Lola rolled a ball. Those do not show any waiting.",
              "Mr. Pak said the rolls had to rise for half an hour. This one is tricky! It is about waiting. But it tells what Mr. Pak said. It does not SHOW what Lola did.",
              "Some kids poked their dough again and again. That is about other kids, and they were not patient.",
              "Lola folded her hands and sat calmly. Yes! She did not fuss.",
              "Her roll still looked flat, but she just smiled and left it alone. Yes! That is patient.",
              "The TWO patient sentences are our answer. The tricky one lights up too, so you can see it.",
              "We click the two that SHOW the idea. Then we tap That's My Answer!"
            ],
            lit: [
              "Lola folded her hands and sat calmly on her stool.",
              "When her roll still looked flat, she just smiled and left it alone.",
              "Mr. Pak said the rolls had to rise for half an hour before they could bake."
            ] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Mr. Pak is FRIENDLY.",
            answers: ["He shook hands with every child and asked each name."],
            kinds: {
              "Mr. Pak wore a white apron dusted with flour.": 'notproof',
              "He had owned the bakery for twenty years.": 'notproof',
              "A delivery truck beeped outside the back door.": 'notproof'
            },
            notes: {
              "Mr. Pak wore a white apron dusted with flour.": "In paragraph 2, this sentence tells what Mr. Pak wore. It does not show how he treats people.",
              "He had owned the bakery for twenty years.": "This one is tricky. Paragraph 2 tells about Mr. Pak. But owning a bakery a long time does not SHOW that he is friendly.",
              "A delivery truck beeped outside the back door.": "In paragraph 2, this sentence is about a truck, not Mr. Pak."
            },
            why: "Paragraph 2 says Mr. Pak shook hands with every child and asked each name. That shows Mr. Pak is friendly." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that the rolls TASTED GOOD. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "Tall racks of fresh loaves filled the room behind the counter.",
              "Mr. Pak wore a white apron dusted with flour.",
              "Lola rolled her dough into a smooth ball.",
              "At last, the rolls came out of the oven, puffy and golden.",
              "Lola gobbled hers up in four big bites.",
              "All the other kids asked Mr. Pak for a second roll."
            ],
            answers: ["Lola gobbled hers up in four big bites.", "All the other kids asked Mr. Pak for a second roll."],
            kinds: {
              "Tall racks of fresh loaves filled the room behind the counter.": 'notproof',
              "Mr. Pak wore a white apron dusted with flour.": 'notproof',
              "Lola rolled her dough into a smooth ball.": 'notproof',
              "At last, the rolls came out of the oven, puffy and golden.": 'notproof'
            },
            notes: {
              "Tall racks of fresh loaves filled the room behind the counter.": "Paragraph 1 tells about the loaves in the bakery. It does not show how the rolls tasted.",
              "Mr. Pak wore a white apron dusted with flour.": "Paragraph 2 tells what Mr. Pak wore. It does not show how the rolls tasted.",
              "Lola rolled her dough into a smooth ball.": "Paragraph 3 tells how Lola made her roll. It does not show how the roll tasted.",
              "At last, the rolls came out of the oven, puffy and golden.": "This one is tricky. Paragraph 4 tells how the rolls looked. But looking good is not tasting good. It does not SHOW how they tasted."
            },
            why: "Paragraph 4 says Lola gobbled her roll in four big bites. It also says all the other kids asked for a second roll. Both show that the rolls tasted good." },
          { kind: 'watch', id: 'W3', title: 'The steps, Level 2',
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Find the part of the passage that talks about the idea.",
              "Step 3. Test each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out for the tricky sentence. It is about the idea, but it does not prove it.",
              "Watch out for the wrong person, too. Check who the question is about.",
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
          title: "The Titan Flower Opens",
          paragraphs: [
            "The titan flower at the city plant house bloomed only once every seven years. Arturo and his grandmother took a bus across town to see it.",
            "The flower was in the jungle room at the back. A sign said the jungle plants came from far away. As soon as they stepped inside, Arturo's glasses fogged up. Tall palm trees reached up to the glass roof. Grandma held Arturo's hand in the long line.",
            "Halfway down the line, Arturo noticed a strange smell. A sign said the bad smell calls flies to the flower. Arturo pinched his nose shut with two fingers. A little girl ahead of them buried her face in her mom's coat. Grandma just laughed and said it smelled like Grandpa's gym bag. Arturo's eyes watered, and he coughed into his elbow.",
            "At last, they reached the flower. The flower stood taller than a grown man. Its one dark red petal was as wide as a beach umbrella. Arturo took six pictures with Grandma's phone."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that the jungle room is STEAMY. That means the air is warm and wet.",
            answers: ["As soon as they stepped inside, Arturo's glasses fogged up."],
            kinds: {
              "The flower was in the jungle room at the back.": 'notproof',
              "A sign said the jungle plants came from far away.": 'notproof',
              "Tall palm trees reached up to the glass roof.": 'notproof',
              "Grandma held Arturo's hand in the long line.": 'notproof'
            },
            notes: {
              "The flower was in the jungle room at the back.": "In paragraph 2, this sentence tells where the flower was. It does not show what the air is like.",
              "A sign said the jungle plants came from far away.": "This one is tricky. Paragraph 2 is about the jungle room. But it tells where the plants came from. It does not SHOW what the air is like.",
              "Tall palm trees reached up to the glass roof.": "In paragraph 2, this sentence tells about the trees. It does not show what the air is like.",
              "Grandma held Arturo's hand in the long line.": "In paragraph 2, this sentence is about Grandma and the line. It does not show what the air is like."
            },
            why: "Paragraph 2 says Arturo's glasses fogged up as soon as he stepped inside. Glasses fog up in warm, wet air. That shows the room is steamy." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that the titan flower is very BIG. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "The titan flower at the city plant house bloomed only once every seven years.",
              "Arturo and his grandmother took a bus across town to see it.",
              "Tall palm trees reached up to the glass roof.",
              "A sign said the bad smell calls flies to the flower.",
              "The flower stood taller than a grown man.",
              "Its one dark red petal was as wide as a beach umbrella."
            ],
            answers: ["The flower stood taller than a grown man.", "Its one dark red petal was as wide as a beach umbrella."],
            kinds: {
              "The titan flower at the city plant house bloomed only once every seven years.": 'notproof',
              "Arturo and his grandmother took a bus across town to see it.": 'notproof',
              "Tall palm trees reached up to the glass roof.": 'notproof',
              "A sign said the bad smell calls flies to the flower.": 'notproof'
            },
            notes: {
              "The titan flower at the city plant house bloomed only once every seven years.": "This one is tricky. Paragraph 1 is about the titan flower. But it tells how often the flower opens, not how big it is.",
              "Arturo and his grandmother took a bus across town to see it.": "Paragraph 1 tells how Arturo got there. It does not show how big the flower is.",
              "Tall palm trees reached up to the glass roof.": "Paragraph 2 says the palm trees are tall. But they are trees, not the titan flower.",
              "A sign said the bad smell calls flies to the flower.": "Paragraph 3 tells about the smell. It does not show how big the flower is."
            },
            why: "Paragraph 4 says the flower stood taller than a grown man. It also says its petal was as wide as a beach umbrella. Both show that the flower is very big." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
            q: "Read paragraph 3. The passage shows that Arturo does NOT LIKE the smell. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
            answers: ["Arturo pinched his nose shut with two fingers.", "Arturo's eyes watered, and he coughed into his elbow."],
            kinds: {
              "Halfway down the line, Arturo noticed a strange smell.": 'notproof',
              "A sign said the bad smell calls flies to the flower.": 'notproof',
              "A little girl ahead of them buried her face in her mom's coat.": 'wrongwho',
              "Grandma just laughed and said it smelled like Grandpa's gym bag.": 'wrongwho'
            },
            notes: {
              "Halfway down the line, Arturo noticed a strange smell.": "This one is tricky. Paragraph 3 says Arturo noticed the smell. But noticing is not the same as not liking. It does not SHOW how he feels about it.",
              "A sign said the bad smell calls flies to the flower.": "In paragraph 3, this sentence tells what the sign said. It does not show how Arturo feels.",
              "A little girl ahead of them buried her face in her mom's coat.": "This one is tricky too. Paragraph 3 shows someone who does not like the smell. But this sentence is about a little girl, not Arturo.",
              "Grandma just laughed and said it smelled like Grandpa's gym bag.": "In paragraph 3, this sentence is about Grandma, not Arturo. She laughed at the smell."
            },
            why: "Paragraph 3 says Arturo pinched his nose shut. It also says his eyes watered and he coughed. Both show that Arturo does not like the smell." }
        ]
      },
      turn: [
        {
          story: {
            title: "A Shell in the Gray Rock",
            paragraphs: [
              "On a dry Saturday in September, Bram and his dad joined a fossil walk at the old quarry in Ledge Park. A quarry is a place where people once dug out stone. Visitors there may keep one small find. A fossil is the shape of a plant or animal from long ago, saved in rock. A park ranger named Ranger Pell led the group up a gentle hill of crumbly gray rock. She handed each person a soft paintbrush.",
              "Bram searched for almost an hour, but every rock he turned over was plain. Other people kept calling out when they found shells. Bram kicked a pebble and gave a long, loud sigh. Dad handed him a granola bar. A hawk circled high over the trees.",
              "Ranger Pell walked over and crouched down beside Bram. She had hunted for fossils since she was a little girl. Right away, she noticed a tiny crack on the side of a flat rock. With one tap of her small hammer, she split the rock exactly along the crack.",
              "Inside the rock was a shell print as small as a button. Ranger Pell said Bram could keep it. She warned that old fossils can crack if they are dropped. Bram brushed off the gray dust with tiny, slow strokes. Then he wrapped the rock in his scarf before he slid it into his backpack. Dad took a picture of the fossil with his phone. A light breeze blew dust across the trail.",
              "On Monday, Bram brought the fossil to school. Ms. Ferro said it was the oldest thing anyone had ever brought to class. Bram held it up high and told the whole class the story of the shell. He also set it on his desk where everyone could see it all day."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Bram feels DISAPPOINTED. That means he feels let down.",
              answers: ["Bram kicked a pebble and gave a long, loud sigh."],
              kinds: {
                "Bram searched for almost an hour, but every rock he turned over was plain.": 'notproof',
                "Other people kept calling out when they found shells.": 'wrongwho',
                "Dad handed him a granola bar.": 'wrongwho',
                "A hawk circled high over the trees.": 'notproof'
              },
              notes: {
                "Bram searched for almost an hour, but every rock he turned over was plain.": "This one is tricky. Paragraph 2 says Bram found nothing for an hour. That is WHY he feels let down. But it does not SHOW how he feels.",
                "Other people kept calling out when they found shells.": "In paragraph 2, this sentence is about other people, not Bram.",
                "Dad handed him a granola bar.": "In paragraph 2, this sentence is about Dad, not Bram.",
                "A hawk circled high over the trees.": "In paragraph 2, this sentence is about a hawk, not Bram."
              },
              why: "Paragraph 2 says Bram kicked a pebble and gave a long, loud sigh. That is how you act when you feel let down. So Bram is disappointed." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Ranger Pell is SKILLED at finding fossils. That means she is very good at it. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "A park ranger named Ranger Pell led the group up a gentle hill of crumbly gray rock.",
                "Other people kept calling out when they found shells.",
                "Ranger Pell walked over and crouched down beside Bram.",
                "She had hunted for fossils since she was a little girl.",
                "Right away, she noticed a tiny crack on the side of a flat rock.",
                "With one tap of her small hammer, she split the rock exactly along the crack."
              ],
              answers: ["Right away, she noticed a tiny crack on the side of a flat rock.", "With one tap of her small hammer, she split the rock exactly along the crack."],
              kinds: {
                "A park ranger named Ranger Pell led the group up a gentle hill of crumbly gray rock.": 'notproof',
                "Other people kept calling out when they found shells.": 'wrongwho',
                "Ranger Pell walked over and crouched down beside Bram.": 'notproof',
                "She had hunted for fossils since she was a little girl.": 'notproof'
              },
              notes: {
                "A park ranger named Ranger Pell led the group up a gentle hill of crumbly gray rock.": "Paragraph 1 tells where Ranger Pell took the group. It does not show how good she is at finding fossils.",
                "Other people kept calling out when they found shells.": "This one is tricky. Paragraph 2 shows people finding shells. But it is about other people, not Ranger Pell.",
                "Ranger Pell walked over and crouched down beside Bram.": "Paragraph 3 says Ranger Pell came over to Bram. It does not show how good she is at finding fossils.",
                "She had hunted for fossils since she was a little girl.": "This one is tricky too. Paragraph 3 says Ranger Pell has looked for fossils a long time. That is WHY she might be good at it. But it does not SHOW her skill."
              },
              why: "Paragraph 3 says Ranger Pell noticed a tiny crack right away. It also says she split the rock exactly along the crack with one tap. Both show that she is skilled at finding fossils." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that Bram is CAREFUL with his fossil. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["Bram brushed off the gray dust with tiny, slow strokes.", "Then he wrapped the rock in his scarf before he slid it into his backpack."],
              kinds: {
                "Inside the rock was a shell print as small as a button.": 'notproof',
                "Ranger Pell said Bram could keep it.": 'wrongwho',
                "She warned that old fossils can crack if they are dropped.": 'notproof',
                "Dad took a picture of the fossil with his phone.": 'wrongwho',
                "A light breeze blew dust across the trail.": 'notproof'
              },
              notes: {
                "Inside the rock was a shell print as small as a button.": "In paragraph 4, this sentence tells what was inside the rock. It does not show what Bram did.",
                "Ranger Pell said Bram could keep it.": "In paragraph 4, this sentence is about what Ranger Pell said. It does not show what Bram did.",
                "She warned that old fossils can crack if they are dropped.": "This one is tricky. Paragraph 4 tells why Bram must be careful. But Ranger Pell says it. It does not SHOW what Bram did.",
                "Dad took a picture of the fossil with his phone.": "In paragraph 4, this sentence is about Dad, not Bram.",
                "A light breeze blew dust across the trail.": "In paragraph 4, this sentence is about the breeze, not Bram."
              },
              why: "Paragraph 4 says Bram brushed the dust off with tiny, slow strokes. It also says he wrapped the rock in his scarf. Both show that Bram is careful with his fossil." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Bram is PROUD of his fossil. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "On a dry Saturday in September, Bram and his dad joined a fossil walk at the old quarry in Ledge Park.",
                "Bram searched for almost an hour, but every rock he turned over was plain.",
                "Dad took a picture of the fossil with his phone.",
                "Ms. Ferro said it was the oldest thing anyone had ever brought to class.",
                "Bram held it up high and told the whole class the story of the shell.",
                "He also set it on his desk where everyone could see it all day."
              ],
              answers: ["Bram held it up high and told the whole class the story of the shell.", "He also set it on his desk where everyone could see it all day."],
              kinds: {
                "On a dry Saturday in September, Bram and his dad joined a fossil walk at the old quarry in Ledge Park.": 'notproof',
                "Bram searched for almost an hour, but every rock he turned over was plain.": 'notproof',
                "Dad took a picture of the fossil with his phone.": 'wrongwho',
                "Ms. Ferro said it was the oldest thing anyone had ever brought to class.": 'notproof'
              },
              notes: {
                "On a dry Saturday in September, Bram and his dad joined a fossil walk at the old quarry in Ledge Park.": "Paragraph 1 tells where Bram went. It does not show how he feels about his fossil.",
                "Bram searched for almost an hour, but every rock he turned over was plain.": "Paragraph 2 is about the start of the walk. Bram had no fossil yet.",
                "Dad took a picture of the fossil with his phone.": "Paragraph 4 is about Dad, not Bram.",
                "Ms. Ferro said it was the oldest thing anyone had ever brought to class.": "This one is tricky. Paragraph 5 tells what Ms. Ferro said. That is WHY Bram is proud. But it does not SHOW how Bram feels."
              },
              why: "Paragraph 5 says Bram held the fossil up high and told the whole class its story. It also says he set it on his desk for everyone to see. Both show that Bram is proud." }
          ]
        },
        {
          story: {
            title: "Home Plate at Kingsley Park",
            paragraphs: [
              "Wyatt's baseball team won a tour of Kingsley Park, where the city's big team played its games. On a Monday in August, no game was planned. A tour guide named Ms. Laine met the team at the main gate. Coach Ames counted the players as they walked through.",
              "Out on the field, a groundskeeper named Mr. Abara was riding a big mower. The mower left light and dark stripes in the grass. The freshly cut grass smelled sweet. Ms. Laine said that Mr. Abara had worked at the park for twenty years. He hopped off the mower and snipped one tall blade of grass with a tiny pair of scissors. A seagull landed near first base.",
              "Next, Ms. Laine let the team sit in the dugout. Pip, the youngest player on the team, could not see over the railing. Wyatt slid down the bench to make room for Pip at the front. Coach Ames told the players to look out for each other. When Ms. Laine asked who wanted to stand at home plate first, Wyatt raised his hand. Then he put his hand down and let Pip go first. Pip raced out and stood on the plate with a huge grin.",
              "Then the whole team climbed into the stands with Coach Ames. Every one of the thousands of seats in the stadium was empty. Wyatt could hear each of his own footsteps on the concrete steps. Halfway up the stands, Wyatt could hear Coach Ames whisper to Ms. Laine a few steps below.",
              "Before they left, Coach Ames thanked Ms. Laine for the tour. Wyatt shook Ms. Laine's hand and said the tour was the best day of his whole summer. That night, he made a card for Mr. Abara with a drawing of the striped grass."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Mr. Abara CARES a lot about the field.",
              answers: ["He hopped off the mower and snipped one tall blade of grass with a tiny pair of scissors."],
              kinds: {
                "Out on the field, a groundskeeper named Mr. Abara was riding a big mower.": 'notproof',
                "The mower left light and dark stripes in the grass.": 'notproof',
                "The freshly cut grass smelled sweet.": 'notproof',
                "Ms. Laine said that Mr. Abara had worked at the park for twenty years.": 'notproof',
                "A seagull landed near first base.": 'notproof'
              },
              notes: {
                "Out on the field, a groundskeeper named Mr. Abara was riding a big mower.": "In paragraph 2, this sentence tells what Mr. Abara was doing. Mowing is his job. It does not show how much he cares.",
                "The mower left light and dark stripes in the grass.": "In paragraph 2, this sentence tells what the mower did to the grass. It does not SHOW Mr. Abara doing anything extra.",
                "The freshly cut grass smelled sweet.": "In paragraph 2, this sentence tells how the grass smelled. It does not show what Mr. Abara did.",
                "Ms. Laine said that Mr. Abara had worked at the park for twenty years.": "This one is tricky. Paragraph 2 says Mr. Abara has worked there a long time. But it does not SHOW how much he cares.",
                "A seagull landed near first base.": "In paragraph 2, this sentence is about a seagull, not Mr. Abara."
              },
              why: "Paragraph 2 says Mr. Abara got off his mower to snip just one tall blade of grass. Even one blade of grass matters to him. That shows he cares a lot about the field." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the stadium is very QUIET. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "On a Monday in August, no game was planned.",
                "The freshly cut grass smelled sweet.",
                "A seagull landed near first base.",
                "Next, Ms. Laine let the team sit in the dugout.",
                "Wyatt could hear each of his own footsteps on the concrete steps.",
                "Halfway up the stands, Wyatt could hear Coach Ames whisper to Ms. Laine a few steps below."
              ],
              answers: ["Wyatt could hear each of his own footsteps on the concrete steps.", "Halfway up the stands, Wyatt could hear Coach Ames whisper to Ms. Laine a few steps below."],
              kinds: {
                "On a Monday in August, no game was planned.": 'notproof',
                "The freshly cut grass smelled sweet.": 'notproof',
                "A seagull landed near first base.": 'notproof',
                "Next, Ms. Laine let the team sit in the dugout.": 'notproof'
              },
              notes: {
                "On a Monday in August, no game was planned.": "This one is tricky. Paragraph 1 says there was no game that day. That is WHY the stadium is quiet. But it does not SHOW the quiet.",
                "The freshly cut grass smelled sweet.": "Paragraph 2 tells how the grass smelled. It does not show how quiet the stadium is.",
                "A seagull landed near first base.": "Paragraph 2 is about a seagull on the field. It does not show how quiet the stadium is.",
                "Next, Ms. Laine let the team sit in the dugout.": "Paragraph 3 tells where the team sat. It does not show how quiet the stadium is."
              },
              why: "Paragraph 4 says Wyatt could hear each of his own footsteps. It also says he could hear Coach Ames whisper a few steps away. You hear small sounds like that only when it is very quiet. Both show that the stadium is quiet." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
              q: "Read paragraph 3. The passage shows that Wyatt is KIND to Pip. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              answers: ["Wyatt slid down the bench to make room for Pip at the front.", "Then he put his hand down and let Pip go first."],
              kinds: {
                "Next, Ms. Laine let the team sit in the dugout.": 'wrongwho',
                "Pip, the youngest player on the team, could not see over the railing.": 'wrongwho',
                "Coach Ames told the players to look out for each other.": 'notproof',
                "When Ms. Laine asked who wanted to stand at home plate first, Wyatt raised his hand.": 'notproof',
                "Pip raced out and stood on the plate with a huge grin.": 'wrongwho'
              },
              notes: {
                "Next, Ms. Laine let the team sit in the dugout.": "In paragraph 3, this sentence tells where the team sat. It does not show what Wyatt did.",
                "Pip, the youngest player on the team, could not see over the railing.": "In paragraph 3, this sentence is about Pip's problem. It does not show what Wyatt did.",
                "Coach Ames told the players to look out for each other.": "This one is tricky. Coach Ames tells the team to look out for each other. But that is what the coach said. It does not SHOW what Wyatt did.",
                "When Ms. Laine asked who wanted to stand at home plate first, Wyatt raised his hand.": "In paragraph 3, Wyatt raises his hand to go first. That does not show him being kind to Pip.",
                "Pip raced out and stood on the plate with a huge grin.": "In paragraph 3, this sentence is about Pip, not Wyatt."
              },
              why: "Paragraph 3 says Wyatt slid down the bench so Pip could see. It also says Wyatt put his hand down and let Pip go first. Both show that Wyatt is kind to Pip." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Wyatt is GRATEFUL to the people at the park. That means he is glad for what they did for him. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Wyatt's baseball team won a tour of Kingsley Park, where the city's big team played its games.",
                "Coach Ames counted the players as they walked through.",
                "When Ms. Laine asked who wanted to stand at home plate first, Wyatt raised his hand.",
                "Before they left, Coach Ames thanked Ms. Laine for the tour.",
                "Wyatt shook Ms. Laine's hand and said the tour was the best day of his whole summer.",
                "That night, he made a card for Mr. Abara with a drawing of the striped grass."
              ],
              answers: ["Wyatt shook Ms. Laine's hand and said the tour was the best day of his whole summer.", "That night, he made a card for Mr. Abara with a drawing of the striped grass."],
              kinds: {
                "Wyatt's baseball team won a tour of Kingsley Park, where the city's big team played its games.": 'notproof',
                "Coach Ames counted the players as they walked through.": 'wrongwho',
                "When Ms. Laine asked who wanted to stand at home plate first, Wyatt raised his hand.": 'notproof',
                "Before they left, Coach Ames thanked Ms. Laine for the tour.": 'wrongwho'
              },
              notes: {
                "Wyatt's baseball team won a tour of Kingsley Park, where the city's big team played its games.": "Paragraph 1 tells how the team got the tour. It does not show how Wyatt feels about the people at the park.",
                "Coach Ames counted the players as they walked through.": "Paragraph 1 is about Coach Ames, not Wyatt.",
                "When Ms. Laine asked who wanted to stand at home plate first, Wyatt raised his hand.": "Paragraph 3 shows Wyatt wanting a turn. It does not show how he feels about the people at the park.",
                "Before they left, Coach Ames thanked Ms. Laine for the tour.": "This one is tricky. Paragraph 5 shows someone saying thank you. But this sentence is about Coach Ames, not Wyatt."
              },
              why: "Paragraph 5 says Wyatt shook Ms. Laine's hand and told her it was the best day of his summer. It also says he made a card for Mr. Abara. Both show that Wyatt is grateful." }
          ]
        }
      ]
    }
  ]
};
