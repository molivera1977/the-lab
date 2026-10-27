/* ═══════════════════════════════════════════════════════
   THE LAB · data/rp3.js — Reading for Meaning, lesson RP3: Click the Sentences: One Paragraph
   Skill: Evidence selection (hot text, like the test's "Click on the TWO sentences"), on ONE paragraph at a time.
   Marcos 10/26: "a shorter exercise with just a paragraph to read from" — the practice right before RC3.
   Teaches: how to click (tap = yellow, tap again = take it back, then That's My Answer!), and that TWO means
   BOTH sentences must prove the idea (one right + one wrong = no point). Watch for the true-but-not-proof
   sentence and the sentence about the wrong person (the two most-missed kinds on 10/26).
   Every version has its OWN teaching paragraph (a new worked example each try), taught the same way:
     teach { W1 how to click · W2 worked pick-2 · S1 pick 1 · S2 pick 2 · W3 the steps }
     pre   { P1 pick 1 · P2 pick 2 }
     turn  4 one-paragraph stories × [pick 1, pick 2] = Q01–Q08, 8 points (every click area is the whole paragraph)
   The two questions on one paragraph ask about DIFFERENT ideas. Lane: the neighborhood and the city in fall and winter.
   Shape: tools/CONTENT-SPEC-READING.md (ONE PARAGRAPH, RP3 plan). Checked by: node tools/check-reading.js RP3
   The right sentences are listed in `answers`; every other clickable sentence has a kind + a note.
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RP3 = {
  versions: [
    /* ───────── Version 1 ───────── */
    {
      teach: {
        story: {
          title: "The Hydrant on Pell Street",
          paragraphs: [
            "After the big snowstorm, Remy looked out at Pell Street. Only the red cap of the fire hydrant poked out of the snow. Remy knew a fire truck might need that hydrant. He grabbed Dad's snow shovel and went out to the corner. The snow came up past his knees. Remy dug a wide circle all the way around the hydrant. Then he dug a path from the hydrant to the street. When a fire truck rolled by, the driver honked and gave him a thumbs-up. Remy stood tall next to the clean hydrant and grinned."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: "How to click",
            lines: [
              "Today you will click on sentences. The story is just one paragraph.",
              "A paragraph is a group of sentences about one thing.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences means pick two.",
              "With TWO, both sentences must prove the idea. One right and one wrong gets no point.",
              "Here is an example. The idea is that Sam is hungry.",
              "Sam's tummy growls. Sam eats two bowls of rice. Both show that Sam is hungry. Click both, and you get the point.",
              "Now say you click \"Sam's tummy growls\" and \"Sam has a red hat.\" A red hat does not show that Sam is hungry. So you get no point.",
              "BEST shows means the sentence proves the idea the most."
            ] },
          { kind: 'watch', id: 'W2', title: "Watch me find the TWO",
            lines: [
              "Let's do one together. Here is the question.",
              "Click on the TWO sentences from the paragraph that BEST show that Remy WORKS HARD.",
              "Step 1. Say the idea. Remy works hard. He keeps going on a big job.",
              "Step 2. Read each sentence. Ask, does this SHOW that Remy works hard?",
              "Remy knew a fire truck might need that hydrant. That tells WHY he works. It does not show the work.",
              "He grabbed Dad's snow shovel. That is getting ready. The work has not started yet.",
              "Remy dug a wide circle all the way around the hydrant. Yes! That is hard work.",
              "Then he dug a path from the hydrant to the street. Yes! That is more hard work.",
              "The driver honked and gave him a thumbs-up. That is about the driver, not Remy.",
              "So we click the TWO sentences that light up. Both prove the idea. Then we tap That's My Answer!"
            ],
            lit: ["Remy dug a wide circle all the way around the hydrant.", "Then he dug a path from the hydrant to the street."] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
            q: "Proud means you feel good about what you did. Click on the sentence from the paragraph that BEST shows that Remy is PROUD.",
            answers: ["Remy stood tall next to the clean hydrant and grinned."],
            kinds: {
              "After the big snowstorm, Remy looked out at Pell Street.": 'notproof',
              "Only the red cap of the fire hydrant poked out of the snow.": 'notproof',
              "Remy knew a fire truck might need that hydrant.": 'notproof',
              "He grabbed Dad's snow shovel and went out to the corner.": 'notproof',
              "The snow came up past his knees.": 'notproof',
              "Remy dug a wide circle all the way around the hydrant.": 'notproof',
              "Then he dug a path from the hydrant to the street.": 'notproof',
              "When a fire truck rolled by, the driver honked and gave him a thumbs-up.": 'wrongwho'
            },
            notes: {
              "After the big snowstorm, Remy looked out at Pell Street.": "This sentence tells when Remy looked out. It does not show how he feels.",
              "Only the red cap of the fire hydrant poked out of the snow.": "This sentence is about the hydrant. It does not show how Remy feels.",
              "Remy knew a fire truck might need that hydrant.": "This sentence tells what Remy knew. It does not show that he is proud.",
              "He grabbed Dad's snow shovel and went out to the corner.": "This sentence tells how Remy got ready. It does not show how he feels.",
              "The snow came up past his knees.": "This sentence is about the snow. It does not show how Remy feels.",
              "Remy dug a wide circle all the way around the hydrant.": "This sentence tells what Remy did. It does not show how he feels about it.",
              "Then he dug a path from the hydrant to the street.": "This sentence tells about the path Remy made. It does not show how he feels.",
              "When a fire truck rolled by, the driver honked and gave him a thumbs-up.": "This one is tricky. The driver likes what Remy did. But the sentence is about the driver, not how Remy feels."
            },
            why: "The paragraph says Remy stood tall next to the clean hydrant and grinned. People stand tall and grin when they feel good about their work. That shows Remy is proud." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
            q: "Deep snow is very high on the ground. Click on the TWO sentences from the paragraph that BEST show that the snow is DEEP. Both must prove it.",
            answers: ["Only the red cap of the fire hydrant poked out of the snow.", "The snow came up past his knees."],
            kinds: {
              "After the big snowstorm, Remy looked out at Pell Street.": 'notproof',
              "Remy knew a fire truck might need that hydrant.": 'notproof',
              "He grabbed Dad's snow shovel and went out to the corner.": 'notproof',
              "Remy dug a wide circle all the way around the hydrant.": 'notproof',
              "Then he dug a path from the hydrant to the street.": 'notproof',
              "When a fire truck rolled by, the driver honked and gave him a thumbs-up.": 'notproof',
              "Remy stood tall next to the clean hydrant and grinned.": 'notproof'
            },
            notes: {
              "After the big snowstorm, Remy looked out at Pell Street.": "This one is tricky. A big snowstorm can bring lots of snow. But this sentence does not show how deep the snow is.",
              "Remy knew a fire truck might need that hydrant.": "This sentence tells what Remy knew. It does not show how deep the snow is.",
              "He grabbed Dad's snow shovel and went out to the corner.": "This sentence tells how Remy got ready. It does not show how deep the snow is.",
              "Remy dug a wide circle all the way around the hydrant.": "This sentence tells about the circle Remy dug. It does not show how deep the snow is.",
              "Then he dug a path from the hydrant to the street.": "This sentence tells about the path. It does not show how deep the snow is.",
              "When a fire truck rolled by, the driver honked and gave him a thumbs-up.": "This sentence is about the fire truck driver. It does not show how deep the snow is.",
              "Remy stood tall next to the clean hydrant and grinned.": "This sentence tells how Remy feels. It is not about the snow."
            },
            why: "The paragraph says only the red cap of the hydrant poked out of the snow. It also says the snow came up past Remy's knees. Both show that the snow is deep." },
          { kind: 'watch', id: 'W3', title: "The steps",
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Read each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out! A sentence can be true and still not show the idea.",
              "Watch out for the wrong person, too. Check who the question is about.",
              "Step 3. Click the sentence that shows the idea. If the question says TWO, click two.",
              "Check both. If one does not prove the idea, change it.",
              "To change a pick, tap it again. Then tap the right one.",
              "When you are sure, tap That's My Answer!",
              "Now you try."
            ] }
        ]
      },
      pre: {
        story: {
          title: "Oranges on the Sidewalk",
          paragraphs: [
            "Tali and Grandma walked home from the market with two bags of food. Grandma blew on her hands to warm them. Then the bottom of one bag ripped open. Ten oranges bounced out and rolled down the sidewalk. Tali dashed after them and caught all ten. A man sitting on his steps held out his hat for them. For the rest of the walk, Tali carried the big bag for Grandma. Grandma smiled and kissed the top of Tali's head."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
            q: "Thankful means glad. Someone did a nice thing for you. Click on the sentence from the paragraph that BEST shows that Grandma is THANKFUL.",
            answers: ["Grandma smiled and kissed the top of Tali's head."],
            kinds: {
              "Tali and Grandma walked home from the market with two bags of food.": 'notproof',
              "Grandma blew on her hands to warm them.": 'notproof',
              "Then the bottom of one bag ripped open.": 'notproof',
              "Ten oranges bounced out and rolled down the sidewalk.": 'notproof',
              "Tali dashed after them and caught all ten.": 'wrongwho',
              "A man sitting on his steps held out his hat for them.": 'wrongwho',
              "For the rest of the walk, Tali carried the big bag for Grandma.": 'wrongwho'
            },
            notes: {
              "Tali and Grandma walked home from the market with two bags of food.": "This sentence tells where Tali and Grandma were going. It does not show how Grandma feels.",
              "Grandma blew on her hands to warm them.": "This sentence is about Grandma. But it shows that she is cold, not thankful.",
              "Then the bottom of one bag ripped open.": "This sentence is about the bag. It does not show how Grandma feels.",
              "Ten oranges bounced out and rolled down the sidewalk.": "This sentence is about the oranges. It does not show how Grandma feels.",
              "Tali dashed after them and caught all ten.": "This sentence is about Tali, not Grandma.",
              "A man sitting on his steps held out his hat for them.": "This sentence is about a man on his steps, not Grandma.",
              "For the rest of the walk, Tali carried the big bag for Grandma.": "This sentence tells what Tali did. It does not show how Grandma feels."
            },
            why: "The paragraph says Grandma smiled and kissed the top of Tali's head. That shows Grandma is glad. She is thankful for what Tali did." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
            q: "A helpful person does things for others. Click on the TWO sentences from the paragraph that BEST show that Tali is HELPFUL. Both must prove it.",
            answers: ["Tali dashed after them and caught all ten.", "For the rest of the walk, Tali carried the big bag for Grandma."],
            kinds: {
              "Tali and Grandma walked home from the market with two bags of food.": 'notproof',
              "Grandma blew on her hands to warm them.": 'wrongwho',
              "Then the bottom of one bag ripped open.": 'notproof',
              "Ten oranges bounced out and rolled down the sidewalk.": 'notproof',
              "A man sitting on his steps held out his hat for them.": 'wrongwho',
              "Grandma smiled and kissed the top of Tali's head.": 'wrongwho'
            },
            notes: {
              "Tali and Grandma walked home from the market with two bags of food.": "This sentence tells where they were going. It does not show Tali helping.",
              "Grandma blew on her hands to warm them.": "This sentence is about Grandma, not Tali.",
              "Then the bottom of one bag ripped open.": "This sentence tells about the bag that ripped. It does not show Tali helping.",
              "Ten oranges bounced out and rolled down the sidewalk.": "This sentence tells where the oranges went. It does not show Tali helping.",
              "A man sitting on his steps held out his hat for them.": "This one is tricky. The man helps too. But the question is about Tali, not the man.",
              "Grandma smiled and kissed the top of Tali's head.": "This sentence is about Grandma, not Tali."
            },
            why: "The paragraph says Tali ran and caught all ten oranges. It also says she carried the big bag. Both show that Tali helps. She is helpful." }
        ]
      },
      turn: [
        {
          story: {
            title: "A Video Call for Mrs. Okafor",
            paragraphs: [
              "Mrs. Okafor got a new tablet from her grandson in Texas. She knocked on Joss's door with the tablet in her hands. She could not get the video call to work. Joss showed her which green button to press. Mrs. Okafor pressed the wrong one, so Joss showed her again. He went over each step slowly, three times, until she got it. Then her grandson's face popped up on the screen. Mrs. Okafor clapped her hands and laughed out loud."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Look at the end. How does Mrs. Okafor feel? Click on the sentence from the paragraph that BEST shows that Mrs. Okafor is HAPPY.",
              answers: ["Mrs. Okafor clapped her hands and laughed out loud."],
              kinds: {
                "Mrs. Okafor got a new tablet from her grandson in Texas.": 'notproof',
                "She knocked on Joss's door with the tablet in her hands.": 'notproof',
                "She could not get the video call to work.": 'notproof',
                "Joss showed her which green button to press.": 'wrongwho',
                "Mrs. Okafor pressed the wrong one, so Joss showed her again.": 'notproof',
                "He went over each step slowly, three times, until she got it.": 'wrongwho',
                "Then her grandson's face popped up on the screen.": 'notproof'
              },
              notes: {
                "Mrs. Okafor got a new tablet from her grandson in Texas.": "This sentence tells where the tablet came from. It does not show how Mrs. Okafor feels.",
                "She knocked on Joss's door with the tablet in her hands.": "This sentence tells that Mrs. Okafor came to Joss's door. It does not show that she is happy.",
                "She could not get the video call to work.": "This sentence tells about her problem. It does not show that she is happy.",
                "Joss showed her which green button to press.": "This sentence is about Joss, not Mrs. Okafor.",
                "Mrs. Okafor pressed the wrong one, so Joss showed her again.": "This sentence tells that she pressed the wrong button. It does not show that she is happy.",
                "He went over each step slowly, three times, until she got it.": "This sentence is about Joss, not Mrs. Okafor.",
                "Then her grandson's face popped up on the screen.": "This one is tricky. Seeing her grandson is WHY she is happy. But this sentence does not show how she feels."
              },
              why: "The paragraph says Mrs. Okafor clapped and laughed out loud. People clap and laugh when they are happy. That shows she is happy." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Patient means you can wait and stay calm. Click on the TWO sentences from the paragraph that BEST show that Joss is PATIENT. Both must prove it.",
              answers: ["Mrs. Okafor pressed the wrong one, so Joss showed her again.", "He went over each step slowly, three times, until she got it."],
              kinds: {
                "Mrs. Okafor got a new tablet from her grandson in Texas.": 'wrongwho',
                "She knocked on Joss's door with the tablet in her hands.": 'wrongwho',
                "She could not get the video call to work.": 'wrongwho',
                "Joss showed her which green button to press.": 'notproof',
                "Then her grandson's face popped up on the screen.": 'notproof',
                "Mrs. Okafor clapped her hands and laughed out loud.": 'wrongwho'
              },
              notes: {
                "Mrs. Okafor got a new tablet from her grandson in Texas.": "This sentence is about Mrs. Okafor and her tablet, not Joss.",
                "She knocked on Joss's door with the tablet in her hands.": "This sentence is about Mrs. Okafor, not Joss.",
                "She could not get the video call to work.": "This sentence is about Mrs. Okafor's problem, not Joss.",
                "Joss showed her which green button to press.": "This one is tricky. Joss helps her the first time. But showing her once does not show that he can wait and stay calm.",
                "Then her grandson's face popped up on the screen.": "This sentence is about the screen. It does not show that Joss is patient.",
                "Mrs. Okafor clapped her hands and laughed out loud.": "This sentence is about Mrs. Okafor, not Joss."
              },
              why: "The paragraph says Joss showed Mrs. Okafor again. She had pressed the wrong button. It also says he went over each step slowly. Both show that Joss is patient." }
          ]
        },
        {
          story: {
            title: "Pizza Boxes for Uncle Sal",
            paragraphs: [
              "On Friday nights, Femi helped Uncle Sal at his pizza shop. A long line of hungry people stretched out the door. Uncle Sal tossed the dough high in the air. Femi had to fold flat cardboard into boxes. He pressed each corner down until it was sharp and straight. Then he stacked the boxes in piles of ten with the edges lined up. A little girl in line pressed her nose to the glass. At the end of the night, Uncle Sal gave Femi a hot slice."
            ]
          },
          items: [
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "A busy shop has a big crowd. Click on the sentence from the paragraph that BEST shows that the pizza shop is BUSY.",
              answers: ["A long line of hungry people stretched out the door."],
              kinds: {
                "On Friday nights, Femi helped Uncle Sal at his pizza shop.": 'notproof',
                "Uncle Sal tossed the dough high in the air.": 'notproof',
                "Femi had to fold flat cardboard into boxes.": 'notproof',
                "He pressed each corner down until it was sharp and straight.": 'notproof',
                "Then he stacked the boxes in piles of ten with the edges lined up.": 'notproof',
                "A little girl in line pressed her nose to the glass.": 'notproof',
                "At the end of the night, Uncle Sal gave Femi a hot slice.": 'notproof'
              },
              notes: {
                "On Friday nights, Femi helped Uncle Sal at his pizza shop.": "This one is tricky. It tells WHEN Femi helps. But it does not show how many people came.",
                "Uncle Sal tossed the dough high in the air.": "This sentence tells what Uncle Sal did. It does not show that the shop is busy.",
                "Femi had to fold flat cardboard into boxes.": "This sentence tells Femi's job. It does not show that the shop is busy.",
                "He pressed each corner down until it was sharp and straight.": "This sentence tells how Femi folds the boxes. It does not show that the shop is busy.",
                "Then he stacked the boxes in piles of ten with the edges lined up.": "This sentence tells what Femi did with the boxes. It does not show how many people came.",
                "A little girl in line pressed her nose to the glass.": "This sentence is about one little girl. It does not show how many people came.",
                "At the end of the night, Uncle Sal gave Femi a hot slice.": "This sentence tells what happened at the end of the night. It does not show that the shop is busy."
              },
              why: "The paragraph says a long line of hungry people stretched out the door. Lots of people came to the shop. That shows the shop is busy." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Neat means you keep things in order. Click on the TWO sentences from the paragraph that BEST show that Femi is NEAT. Both must prove it.",
              answers: ["He pressed each corner down until it was sharp and straight.", "Then he stacked the boxes in piles of ten with the edges lined up."],
              kinds: {
                "On Friday nights, Femi helped Uncle Sal at his pizza shop.": 'notproof',
                "A long line of hungry people stretched out the door.": 'wrongwho',
                "Uncle Sal tossed the dough high in the air.": 'wrongwho',
                "Femi had to fold flat cardboard into boxes.": 'notproof',
                "A little girl in line pressed her nose to the glass.": 'wrongwho',
                "At the end of the night, Uncle Sal gave Femi a hot slice.": 'wrongwho'
              },
              notes: {
                "On Friday nights, Femi helped Uncle Sal at his pizza shop.": "This sentence tells when Femi helps. It does not show that he is neat.",
                "A long line of hungry people stretched out the door.": "This sentence is about the people in line, not Femi.",
                "Uncle Sal tossed the dough high in the air.": "This sentence is about Uncle Sal, not Femi.",
                "Femi had to fold flat cardboard into boxes.": "This one is tricky. It tells Femi's job. But it does not show HOW he does the job.",
                "A little girl in line pressed her nose to the glass.": "This sentence is about a little girl, not Femi.",
                "At the end of the night, Uncle Sal gave Femi a hot slice.": "This sentence is about Uncle Sal, not Femi."
              },
              why: "The paragraph says Femi pressed each corner until it was sharp. It also says he stacked the boxes with the edges lined up. Both show that Femi is neat." }
          ]
        },
        {
          story: {
            title: "Tied Together with a Scarf",
            paragraphs: [
              "The fall fair on Birch Street had a three-legged race. Zion tied his ankle to his little brother Pip's ankle with a scarf. Pip chewed on his mitten and stared down the long racecourse. A whistle blew, and twenty kids started hopping and stumbling. Zion took tiny steps so Pip could keep up with him. Halfway down the street, Pip tripped and tumbled onto the pavement. Zion helped him up and brushed the dirt off his knees. Two tall girls crossed the finish line first. Zion and Pip came in last, but they giggled the whole way."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "The race is about to start. Click on the sentence from the paragraph that BEST shows that Pip is NERVOUS.",
              answers: ["Pip chewed on his mitten and stared down the long racecourse."],
              kinds: {
                "The fall fair on Birch Street had a three-legged race.": 'notproof',
                "Zion tied his ankle to his little brother Pip's ankle with a scarf.": 'wrongwho',
                "A whistle blew, and twenty kids started hopping and stumbling.": 'notproof',
                "Zion took tiny steps so Pip could keep up with him.": 'wrongwho',
                "Halfway down the street, Pip tripped and tumbled onto the pavement.": 'notproof',
                "Zion helped him up and brushed the dirt off his knees.": 'wrongwho',
                "Two tall girls crossed the finish line first.": 'wrongwho',
                "Zion and Pip came in last, but they giggled the whole way.": 'opposite'
              },
              notes: {
                "The fall fair on Birch Street had a three-legged race.": "This sentence tells about the race. It does not show how Pip feels.",
                "Zion tied his ankle to his little brother Pip's ankle with a scarf.": "This sentence tells what Zion did. It does not show how Pip feels.",
                "A whistle blew, and twenty kids started hopping and stumbling.": "This sentence tells how the race began. It does not show how Pip feels.",
                "Zion took tiny steps so Pip could keep up with him.": "This sentence is about Zion, not how Pip feels.",
                "Halfway down the street, Pip tripped and tumbled onto the pavement.": "This sentence tells that Pip fell. It does not show that he is nervous.",
                "Zion helped him up and brushed the dirt off his knees.": "This sentence is about Zion, not how Pip feels.",
                "Two tall girls crossed the finish line first.": "This sentence is about two girls, not Pip.",
                "Zion and Pip came in last, but they giggled the whole way.": "This sentence shows the boys having fun at the end. That is not nervous."
              },
              why: "The paragraph says Pip chewed on his mitten and stared down the long racecourse. Kids chew on things when they are nervous. That shows Pip is nervous." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Kind means you are nice to others. Click on the TWO sentences from the paragraph that BEST show that Zion is KIND to Pip. Both must prove it.",
              answers: ["Zion took tiny steps so Pip could keep up with him.", "Zion helped him up and brushed the dirt off his knees."],
              kinds: {
                "The fall fair on Birch Street had a three-legged race.": 'notproof',
                "Zion tied his ankle to his little brother Pip's ankle with a scarf.": 'notproof',
                "Pip chewed on his mitten and stared down the long racecourse.": 'wrongwho',
                "A whistle blew, and twenty kids started hopping and stumbling.": 'notproof',
                "Halfway down the street, Pip tripped and tumbled onto the pavement.": 'wrongwho',
                "Two tall girls crossed the finish line first.": 'wrongwho',
                "Zion and Pip came in last, but they giggled the whole way.": 'notproof'
              },
              notes: {
                "The fall fair on Birch Street had a three-legged race.": "This sentence tells about the race. It does not show that Zion is kind.",
                "Zion tied his ankle to his little brother Pip's ankle with a scarf.": "This one is tricky. Zion ties their legs together. But that is how the race works. It does not show that he is kind.",
                "Pip chewed on his mitten and stared down the long racecourse.": "This sentence is about Pip, not Zion.",
                "A whistle blew, and twenty kids started hopping and stumbling.": "This sentence tells how the race began. It does not show that Zion is kind.",
                "Halfway down the street, Pip tripped and tumbled onto the pavement.": "This sentence is about Pip, not Zion.",
                "Two tall girls crossed the finish line first.": "This sentence is about two girls, not Zion.",
                "Zion and Pip came in last, but they giggled the whole way.": "This one is tricky. It shows that the boys had fun. But it does not show Zion being kind."
              },
              why: "The paragraph says Zion took tiny steps so Pip could keep up. It also says Zion helped Pip up and brushed off his knees. Both show that Zion is kind to Pip." }
          ]
        },
        {
          story: {
            title: "Snowflakes in the Lobby",
            paragraphs: [
              "The lobby of Esi's building had bare gray walls. On a snowy day, Esi cut out forty paper snowflakes. Her big brother sat on the couch with a bowl of popcorn. He put down the bowl and folded the white paper for her. The next morning, Esi taped the snowflakes on the walls. Later, Mrs. Lee from upstairs stopped and smiled at each one. Mr. Dunn, a neighbor from the third floor, came down to get his mail. He took a picture of the wall with his phone. Esi peeked down from the stairs to watch."
            ]
          },
          items: [
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Helpful means you help. You do things for others. Click on the sentence from the paragraph that BEST shows that Esi's brother is HELPFUL.",
              answers: ["He put down the bowl and folded the white paper for her."],
              kinds: {
                "The lobby of Esi's building had bare gray walls.": 'notproof',
                "On a snowy day, Esi cut out forty paper snowflakes.": 'wrongwho',
                "Her big brother sat on the couch with a bowl of popcorn.": 'notproof',
                "The next morning, Esi taped the snowflakes on the walls.": 'wrongwho',
                "Later, Mrs. Lee from upstairs stopped and smiled at each one.": 'wrongwho',
                "Mr. Dunn, a neighbor from the third floor, came down to get his mail.": 'wrongwho',
                "He took a picture of the wall with his phone.": 'wrongwho',
                "Esi peeked down from the stairs to watch.": 'wrongwho'
              },
              notes: {
                "The lobby of Esi's building had bare gray walls.": "This sentence is about the lobby. It does not tell about Esi's brother.",
                "On a snowy day, Esi cut out forty paper snowflakes.": "This sentence is about Esi, not her brother.",
                "Her big brother sat on the couch with a bowl of popcorn.": "This one is tricky. It is about her brother. But eating popcorn does not help anyone.",
                "The next morning, Esi taped the snowflakes on the walls.": "This sentence tells what Esi did, not her brother.",
                "Later, Mrs. Lee from upstairs stopped and smiled at each one.": "This sentence is about Mrs. Lee, not Esi's brother.",
                "Mr. Dunn, a neighbor from the third floor, came down to get his mail.": "This sentence is about Mr. Dunn, not Esi's brother.",
                "He took a picture of the wall with his phone.": "This sentence is about Mr. Dunn, not Esi's brother.",
                "Esi peeked down from the stairs to watch.": "This sentence is about Esi, not her brother."
              },
              why: "The paragraph says Esi's brother put down his popcorn and folded the white paper for her. He stopped what he was doing to help Esi. That shows he is helpful." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Neighbors are the other people in Esi's building. Click on the TWO sentences from the paragraph that BEST show that the neighbors LIKE the snowflakes. Both must prove it.",
              answers: ["Later, Mrs. Lee from upstairs stopped and smiled at each one.", "He took a picture of the wall with his phone."],
              kinds: {
                "The lobby of Esi's building had bare gray walls.": 'notproof',
                "On a snowy day, Esi cut out forty paper snowflakes.": 'wrongwho',
                "Her big brother sat on the couch with a bowl of popcorn.": 'wrongwho',
                "He put down the bowl and folded the white paper for her.": 'wrongwho',
                "The next morning, Esi taped the snowflakes on the walls.": 'wrongwho',
                "Mr. Dunn, a neighbor from the third floor, came down to get his mail.": 'notproof',
                "Esi peeked down from the stairs to watch.": 'wrongwho'
              },
              notes: {
                "The lobby of Esi's building had bare gray walls.": "This sentence tells how the lobby looked before. It does not show how the neighbors feel.",
                "On a snowy day, Esi cut out forty paper snowflakes.": "This sentence is about Esi, not the neighbors.",
                "Her big brother sat on the couch with a bowl of popcorn.": "This sentence is about Esi's brother, not the neighbors.",
                "He put down the bowl and folded the white paper for her.": "This sentence is about Esi's brother, not the neighbors.",
                "The next morning, Esi taped the snowflakes on the walls.": "This sentence tells what Esi did. It does not show how the neighbors feel.",
                "Mr. Dunn, a neighbor from the third floor, came down to get his mail.": "This one is tricky. Mr. Dunn is a neighbor. But getting his mail does not show how he feels about the snowflakes.",
                "Esi peeked down from the stairs to watch.": "This one is tricky. Esi watches the neighbors. But the sentence is about Esi. It does not show how the neighbors feel."
              },
              why: "The paragraph says Mrs. Lee stopped and smiled at each snowflake. It also says Mr. Dunn took a picture of the wall. People smile at things they like, and they take pictures of them. Both show that the neighbors like the snowflakes." }
          ]
        }
      ]
    },
    /* ───────── Version 2 ───────── */
    {
      teach: {
        story: {
          title: "The Trumpet in the Yard",
          paragraphs: [
            "In the fall, Elan began to play the trumpet in the yard behind his building. At first, his notes squeaked and squawked like a goose. A dog down the block howled each time he played. By winter, Elan could play a whole song. One night, Mrs. Varga opened her window above the yard. She leaned out and listened to the whole song. Then she clapped and asked him to play one more. A man taking out the trash stopped and clapped too. Elan grinned and held his trumpet high in the air."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: "How to click",
            lines: [
              "Today you will click on sentences. The story is just one paragraph.",
              "A paragraph is a group of sentences about one thing.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences means pick two.",
              "With TWO, both sentences must prove the idea. One right and one wrong gets no point.",
              "Here is an example. The idea is that Sam is hungry.",
              "Sam's tummy growls. Sam eats two bowls of rice. Both show that Sam is hungry. Click both, and you get the point.",
              "Now say you click \"Sam's tummy growls\" and \"Sam has a red hat.\" A red hat does not show that Sam is hungry. So you get no point.",
              "BEST shows means the sentence proves the idea the most."
            ] },
          { kind: 'watch', id: 'W2', title: "Watch me find the TWO",
            lines: [
              "Let's do one together. Here is the question.",
              "Click on the TWO sentences from the paragraph that BEST show that Elan's trumpet sounds BAD at first.",
              "Step 1. Say the idea. At first, Elan's trumpet does not sound good.",
              "Step 2. Read each sentence. Ask, does this SHOW that the trumpet sounds bad?",
              "Elan began to play the trumpet in the yard. That tells where he played. It does not show how it sounded.",
              "At first, his notes squeaked and squawked like a goose. Yes! A goose sound is not a nice song.",
              "A dog down the block howled each time he played. Yes! The dog did not like the sound.",
              "By winter, Elan could play a whole song. This one is tricky. It is about his playing. But it is from later, when he got better.",
              "So we click the TWO sentences that light up. Both prove the idea. Then we tap That's My Answer!"
            ],
            lit: ["At first, his notes squeaked and squawked like a goose.", "A dog down the block howled each time he played."] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
            q: "Proud means you feel good about what you did. Click on the sentence from the paragraph that BEST shows that Elan is PROUD at the end.",
            answers: ["Elan grinned and held his trumpet high in the air."],
            kinds: {
              "In the fall, Elan began to play the trumpet in the yard behind his building.": 'notproof',
              "At first, his notes squeaked and squawked like a goose.": 'notproof',
              "A dog down the block howled each time he played.": 'wrongwho',
              "By winter, Elan could play a whole song.": 'notproof',
              "One night, Mrs. Varga opened her window above the yard.": 'wrongwho',
              "She leaned out and listened to the whole song.": 'wrongwho',
              "Then she clapped and asked him to play one more.": 'wrongwho',
              "A man taking out the trash stopped and clapped too.": 'wrongwho'
            },
            notes: {
              "In the fall, Elan began to play the trumpet in the yard behind his building.": "This sentence tells when Elan began to play. It does not show how he feels.",
              "At first, his notes squeaked and squawked like a goose.": "This sentence tells how his notes sounded. It does not show that he is proud.",
              "A dog down the block howled each time he played.": "This sentence is about a dog, not how Elan feels.",
              "By winter, Elan could play a whole song.": "This one is tricky. Elan learns a whole song. But this sentence does not show how he feels.",
              "One night, Mrs. Varga opened her window above the yard.": "This sentence is about Mrs. Varga, not Elan.",
              "She leaned out and listened to the whole song.": "This sentence is about Mrs. Varga, not Elan.",
              "Then she clapped and asked him to play one more.": "This sentence is about Mrs. Varga, not Elan.",
              "A man taking out the trash stopped and clapped too.": "This sentence is about a man in the yard, not Elan."
            },
            why: "The paragraph says Elan grinned and held his trumpet high in the air. People do that when they feel good about what they did. That shows Elan is proud." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
            q: "Think about what Mrs. Varga does. Click on the TWO sentences from the paragraph that BEST show that Mrs. Varga LIKES Elan's music. Both must prove it.",
            answers: ["She leaned out and listened to the whole song.", "Then she clapped and asked him to play one more."],
            kinds: {
              "In the fall, Elan began to play the trumpet in the yard behind his building.": 'wrongwho',
              "At first, his notes squeaked and squawked like a goose.": 'notproof',
              "A dog down the block howled each time he played.": 'wrongwho',
              "By winter, Elan could play a whole song.": 'wrongwho',
              "One night, Mrs. Varga opened her window above the yard.": 'notproof',
              "A man taking out the trash stopped and clapped too.": 'wrongwho',
              "Elan grinned and held his trumpet high in the air.": 'wrongwho'
            },
            notes: {
              "In the fall, Elan began to play the trumpet in the yard behind his building.": "This sentence is about Elan, not Mrs. Varga.",
              "At first, his notes squeaked and squawked like a goose.": "This sentence tells how Elan's notes sounded at first. It does not show how Mrs. Varga feels.",
              "A dog down the block howled each time he played.": "This sentence is about a dog, not Mrs. Varga.",
              "By winter, Elan could play a whole song.": "This sentence is about Elan, not Mrs. Varga.",
              "One night, Mrs. Varga opened her window above the yard.": "This one is tricky. Mrs. Varga opens her window. But people open windows for lots of reasons. It does not show that she likes the music.",
              "A man taking out the trash stopped and clapped too.": "This one is tricky. The man likes the music too. But the question is about Mrs. Varga, not the man.",
              "Elan grinned and held his trumpet high in the air.": "This sentence is about Elan, not Mrs. Varga."
            },
            why: "The paragraph says Mrs. Varga leaned out and listened to the whole song. It also says she clapped and asked for one more. Both show that Mrs. Varga likes Elan's music." },
          { kind: 'watch', id: 'W3', title: "The steps",
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Read each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out! A sentence can be true and still not show the idea.",
              "Watch out for the wrong person, too. Check who the question is about.",
              "Step 3. Click the sentence that shows the idea. If the question says TWO, click two.",
              "Check both. If one does not prove the idea, change it.",
              "To change a pick, tap it again. Then tap the right one.",
              "When you are sure, tap That's My Answer!",
              "Now you try."
            ] }
        ]
      },
      pre: {
        story: {
          title: "The First Haircut at Rudy's",
          paragraphs: [
            "On cold weekends, Mila helped at Grandpa Rudy's barber shop. She swept the hair off the floor with a big broom. One morning, a little boy came in for his very first haircut. When the clippers buzzed, he hid his face in his dad's coat. Mila gave him a red comb to hold. Then she made silly faces in the big mirror until he giggled. Grandpa Rudy cut the boy's hair in a few quick snips. The boy's dad paid and said thank you."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
            q: "Think about how the boy feels. Click on the sentence from the paragraph that BEST shows that the little boy is SCARED.",
            answers: ["When the clippers buzzed, he hid his face in his dad's coat."],
            kinds: {
              "On cold weekends, Mila helped at Grandpa Rudy's barber shop.": 'wrongwho',
              "She swept the hair off the floor with a big broom.": 'wrongwho',
              "One morning, a little boy came in for his very first haircut.": 'notproof',
              "Mila gave him a red comb to hold.": 'wrongwho',
              "Then she made silly faces in the big mirror until he giggled.": 'opposite',
              "Grandpa Rudy cut the boy's hair in a few quick snips.": 'wrongwho',
              "The boy's dad paid and said thank you.": 'wrongwho'
            },
            notes: {
              "On cold weekends, Mila helped at Grandpa Rudy's barber shop.": "This sentence is about Mila, not the little boy.",
              "She swept the hair off the floor with a big broom.": "This sentence is about Mila, not the little boy.",
              "One morning, a little boy came in for his very first haircut.": "This one is tricky. A first haircut is WHY the boy might be scared. But this sentence does not show how he feels.",
              "Mila gave him a red comb to hold.": "This sentence tells what Mila did, not how the boy feels.",
              "Then she made silly faces in the big mirror until he giggled.": "This sentence ends with the boy giggling. That does not show that he is scared.",
              "Grandpa Rudy cut the boy's hair in a few quick snips.": "This sentence is about Grandpa Rudy, not how the boy feels.",
              "The boy's dad paid and said thank you.": "This sentence is about the boy's dad, not the boy."
            },
            why: "The paragraph says the boy hid his face in his dad's coat when the clippers buzzed. Kids hide their faces when they are scared. That shows the boy is scared." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
            q: "Kind means you are nice to others. Click on the TWO sentences from the paragraph that BEST show that Mila is KIND to the boy. Both must prove it.",
            answers: ["Mila gave him a red comb to hold.", "Then she made silly faces in the big mirror until he giggled."],
            kinds: {
              "On cold weekends, Mila helped at Grandpa Rudy's barber shop.": 'notproof',
              "She swept the hair off the floor with a big broom.": 'notproof',
              "One morning, a little boy came in for his very first haircut.": 'wrongwho',
              "When the clippers buzzed, he hid his face in his dad's coat.": 'wrongwho',
              "Grandpa Rudy cut the boy's hair in a few quick snips.": 'wrongwho',
              "The boy's dad paid and said thank you.": 'wrongwho'
            },
            notes: {
              "On cold weekends, Mila helped at Grandpa Rudy's barber shop.": "This sentence tells where Mila helps. It does not show what she does for the boy.",
              "She swept the hair off the floor with a big broom.": "This one is tricky. Mila helps Grandpa Rudy. But sweeping is not something she does for the boy.",
              "One morning, a little boy came in for his very first haircut.": "This sentence is about the little boy, not Mila.",
              "When the clippers buzzed, he hid his face in his dad's coat.": "This sentence is about the little boy, not Mila.",
              "Grandpa Rudy cut the boy's hair in a few quick snips.": "This sentence is about Grandpa Rudy, not Mila.",
              "The boy's dad paid and said thank you.": "This sentence is about the boy's dad, not Mila."
            },
            why: "The paragraph says Mila gave the boy a red comb to hold. It also says she made silly faces until he giggled. Both show that Mila is kind to the boy." }
        ]
      },
      turn: [
        {
          story: {
            title: "Wet Leaves on the Drain",
            paragraphs: [
              "All night, cold rain poured down on Fig Street. In the morning, there was a puddle at the corner by Nori's building. The water came all the way up over the curb. Kids on their way to school had to walk around the whole block. Nori and her dad saw a thick mat of wet leaves stuck on top of the drain. Dad got a rake, and Nori got a big paper bag. The water swirled down the drain with a loud gurgle. Mr. Pope from the fruit stand clapped for them."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Water needs a way to run off the street. Click on the sentence from the paragraph that BEST shows WHY the water could not go down the drain.",
              answers: ["Nori and her dad saw a thick mat of wet leaves stuck on top of the drain."],
              kinds: {
                "All night, cold rain poured down on Fig Street.": 'notproof',
                "In the morning, there was a puddle at the corner by Nori's building.": 'notproof',
                "The water came all the way up over the curb.": 'notproof',
                "Kids on their way to school had to walk around the whole block.": 'notproof',
                "Dad got a rake, and Nori got a big paper bag.": 'notproof',
                "The water swirled down the drain with a loud gurgle.": 'notproof',
                "Mr. Pope from the fruit stand clapped for them.": 'notproof'
              },
              notes: {
                "All night, cold rain poured down on Fig Street.": "This one is tricky. The rain tells where the water came from. It does not show why the water could not go down.",
                "In the morning, there was a puddle at the corner by Nori's building.": "This sentence tells where the puddle was. It does not show why the water stayed.",
                "The water came all the way up over the curb.": "This sentence is about the water by the curb. It does not show why the water could not go down.",
                "Kids on their way to school had to walk around the whole block.": "This sentence is about kids on the way to school. It does not show why the water stayed.",
                "Dad got a rake, and Nori got a big paper bag.": "This sentence tells what Nori and Dad got. It does not show why the water could not go down.",
                "The water swirled down the drain with a loud gurgle.": "This one is tricky. It is about the drain. But it tells what happened after the fix, not what was wrong.",
                "Mr. Pope from the fruit stand clapped for them.": "This sentence is about Mr. Pope, not the drain."
              },
              why: "The paragraph says a thick mat of wet leaves was stuck on top of the drain. The leaves blocked the water. That shows why the water could not go down." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Think about the size of the puddle. Click on the TWO sentences from the paragraph that BEST show that the puddle is BIG. Both must prove it.",
              answers: ["The water came all the way up over the curb.", "Kids on their way to school had to walk around the whole block."],
              kinds: {
                "All night, cold rain poured down on Fig Street.": 'notproof',
                "In the morning, there was a puddle at the corner by Nori's building.": 'notproof',
                "Nori and her dad saw a thick mat of wet leaves stuck on top of the drain.": 'notproof',
                "Dad got a rake, and Nori got a big paper bag.": 'notproof',
                "The water swirled down the drain with a loud gurgle.": 'notproof',
                "Mr. Pope from the fruit stand clapped for them.": 'notproof'
              },
              notes: {
                "All night, cold rain poured down on Fig Street.": "This sentence tells about the rain. It does not show how big the puddle is.",
                "In the morning, there was a puddle at the corner by Nori's building.": "This one is tricky. It tells that there was a puddle. But it does not show how big the puddle was.",
                "Nori and her dad saw a thick mat of wet leaves stuck on top of the drain.": "This sentence is about the leaves on the drain. It does not show how big the puddle is.",
                "Dad got a rake, and Nori got a big paper bag.": "This sentence tells what Nori and Dad got. It does not show how big the puddle is.",
                "The water swirled down the drain with a loud gurgle.": "This sentence tells about the water going down. It does not show how big the puddle is.",
                "Mr. Pope from the fruit stand clapped for them.": "This sentence is about Mr. Pope. It does not show how big the puddle is."
              },
              why: "The paragraph says the water came all the way up over the curb. It also says kids had to walk around the whole block. Both show that the puddle is big." }
          ]
        },
        {
          story: {
            title: "Wheels Spinning on Clay Street",
            paragraphs: [
              "Ms. Hale's old car was stuck in a snowbank on Clay Street. The back tires spun and whined, but the car did not move. Cal heard the loud whirring from his bedroom window. Ms. Hale turned off the car and got out to look. Cal ran out and scooped the snow away from the back tire. Then he slid a flat cardboard box under the tire. When Ms. Hale tried again, Cal's mother pushed, and the car rolled free. That night, Ms. Hale brought Cal a plate of warm cookies."
            ]
          },
          items: [
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Thankful means glad that someone helped. Click on the sentence from the paragraph that BEST shows that Ms. Hale is THANKFUL.",
              answers: ["That night, Ms. Hale brought Cal a plate of warm cookies."],
              kinds: {
                "Ms. Hale's old car was stuck in a snowbank on Clay Street.": 'notproof',
                "The back tires spun and whined, but the car did not move.": 'notproof',
                "Cal heard the loud whirring from his bedroom window.": 'wrongwho',
                "Ms. Hale turned off the car and got out to look.": 'notproof',
                "Cal ran out and scooped the snow away from the back tire.": 'wrongwho',
                "Then he slid a flat cardboard box under the tire.": 'wrongwho',
                "When Ms. Hale tried again, Cal's mother pushed, and the car rolled free.": 'notproof'
              },
              notes: {
                "Ms. Hale's old car was stuck in a snowbank on Clay Street.": "This sentence tells about Ms. Hale's problem. It does not show that she is thankful.",
                "The back tires spun and whined, but the car did not move.": "This sentence tells about the spinning tires. It does not show how Ms. Hale feels.",
                "Cal heard the loud whirring from his bedroom window.": "This sentence is about Cal, not Ms. Hale.",
                "Ms. Hale turned off the car and got out to look.": "This sentence tells what Ms. Hale did. It does not show that she is thankful.",
                "Cal ran out and scooped the snow away from the back tire.": "This sentence tells what Cal did. It is not about how Ms. Hale feels.",
                "Then he slid a flat cardboard box under the tire.": "This sentence is about Cal, not Ms. Hale.",
                "When Ms. Hale tried again, Cal's mother pushed, and the car rolled free.": "This one is tricky. The car got out, so Ms. Hale had a reason to be glad. But this sentence does not show how she feels."
              },
              why: "The paragraph says Ms. Hale brought Cal a plate of warm cookies that night. She did a nice thing back for him. That shows Ms. Hale is thankful." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Helpful means you do things for others. Click on the TWO sentences from the paragraph that BEST show that Cal is HELPFUL. Both must prove it.",
              answers: ["Cal ran out and scooped the snow away from the back tire.", "Then he slid a flat cardboard box under the tire."],
              kinds: {
                "Ms. Hale's old car was stuck in a snowbank on Clay Street.": 'wrongwho',
                "The back tires spun and whined, but the car did not move.": 'notproof',
                "Cal heard the loud whirring from his bedroom window.": 'notproof',
                "Ms. Hale turned off the car and got out to look.": 'wrongwho',
                "When Ms. Hale tried again, Cal's mother pushed, and the car rolled free.": 'wrongwho',
                "That night, Ms. Hale brought Cal a plate of warm cookies.": 'wrongwho'
              },
              notes: {
                "Ms. Hale's old car was stuck in a snowbank on Clay Street.": "This sentence is about Ms. Hale's car, not Cal.",
                "The back tires spun and whined, but the car did not move.": "This sentence tells about the spinning tires. It does not show what Cal did.",
                "Cal heard the loud whirring from his bedroom window.": "This one is tricky. Cal hears the problem. But hearing is not helping.",
                "Ms. Hale turned off the car and got out to look.": "This sentence is about Ms. Hale, not Cal.",
                "When Ms. Hale tried again, Cal's mother pushed, and the car rolled free.": "This one is tricky. Cal's mother helps too. But the question is about Cal, not his mother.",
                "That night, Ms. Hale brought Cal a plate of warm cookies.": "This sentence is about Ms. Hale, not Cal."
              },
              why: "The paragraph says Cal scooped the snow away from the back tire. It also says he slid a flat box under the tire. Both show that Cal is helpful." }
          ]
        },
        {
          story: {
            title: "Reading to Waffles",
            paragraphs: [
              "Each week, a big dog named Waffles came to the Hollis Branch Library. Kids could sit on a rug and read a book to him. Zeb picked a book about a hungry bear. His hands shook as he turned to the first page. Waffles lay still and rested his chin on Zeb's shoe. A baby cried at the desk, but Waffles did not even lift his head. Zeb kept reading to the very last page. When he was done, he got a dog sticker for his shirt."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Zeb is about to read out loud. Click on the sentence from the paragraph that BEST shows that Zeb is NERVOUS.",
              answers: ["His hands shook as he turned to the first page."],
              kinds: {
                "Each week, a big dog named Waffles came to the Hollis Branch Library.": 'wrongwho',
                "Kids could sit on a rug and read a book to him.": 'notproof',
                "Zeb picked a book about a hungry bear.": 'notproof',
                "Waffles lay still and rested his chin on Zeb's shoe.": 'wrongwho',
                "A baby cried at the desk, but Waffles did not even lift his head.": 'wrongwho',
                "Zeb kept reading to the very last page.": 'notproof',
                "When he was done, he got a dog sticker for his shirt.": 'notproof'
              },
              notes: {
                "Each week, a big dog named Waffles came to the Hollis Branch Library.": "This sentence is about Waffles and the library. It does not show how Zeb feels.",
                "Kids could sit on a rug and read a book to him.": "This sentence tells what kids could do. It does not show how Zeb feels.",
                "Zeb picked a book about a hungry bear.": "This sentence tells which book Zeb picked. It does not show how he feels.",
                "Waffles lay still and rested his chin on Zeb's shoe.": "This sentence is about Waffles, not Zeb.",
                "A baby cried at the desk, but Waffles did not even lift his head.": "This sentence is about Waffles and a baby, not Zeb.",
                "Zeb kept reading to the very last page.": "This sentence tells that Zeb kept reading. It does not show that he is nervous.",
                "When he was done, he got a dog sticker for his shirt.": "This sentence tells what Zeb got at the end. It does not show that he is nervous."
              },
              why: "The paragraph says Zeb's hands shook as he turned to the first page. Hands can shake when you are nervous. That shows Zeb is nervous." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Calm means not upset or worried. Click on the TWO sentences from the paragraph that BEST show that Waffles is CALM. Both must prove it.",
              answers: ["Waffles lay still and rested his chin on Zeb's shoe.", "A baby cried at the desk, but Waffles did not even lift his head."],
              kinds: {
                "Each week, a big dog named Waffles came to the Hollis Branch Library.": 'notproof',
                "Kids could sit on a rug and read a book to him.": 'notproof',
                "Zeb picked a book about a hungry bear.": 'wrongwho',
                "His hands shook as he turned to the first page.": 'wrongwho',
                "Zeb kept reading to the very last page.": 'wrongwho',
                "When he was done, he got a dog sticker for his shirt.": 'wrongwho'
              },
              notes: {
                "Each week, a big dog named Waffles came to the Hollis Branch Library.": "This one is tricky. It is about Waffles. But it only tells where he came. It does not show that he is calm.",
                "Kids could sit on a rug and read a book to him.": "This sentence tells what kids could do. It does not show that Waffles is calm.",
                "Zeb picked a book about a hungry bear.": "This sentence is about Zeb, not Waffles.",
                "His hands shook as he turned to the first page.": "This sentence is about Zeb, not Waffles.",
                "Zeb kept reading to the very last page.": "This sentence is about Zeb, not Waffles.",
                "When he was done, he got a dog sticker for his shirt.": "This sentence is about Zeb, not Waffles."
              },
              why: "The paragraph says Waffles lay still with his chin on Zeb's shoe. It also says Waffles did not lift his head when a baby cried. Both show that Waffles is calm." }
          ]
        },
        {
          story: {
            title: "A Forest in a Shoebox",
            paragraphs: [
              "Dina made a tiny forest in a shoebox for school. She put paper trees, moss, and a clay fox inside. On Monday, she rode the city bus to school with the box. All the seats were full, and people stood in the aisle. Dina held the box flat on her lap with both arms. When the bus bumped, she lifted the box so it would not shake. The bus driver called out each stop in a loud voice. At school, Dina's teacher held the box up for the class to see."
            ]
          },
          items: [
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Crowded means there is hardly any room left. Click on the sentence from the paragraph that BEST shows that the bus is CROWDED.",
              answers: ["All the seats were full, and people stood in the aisle."],
              kinds: {
                "Dina made a tiny forest in a shoebox for school.": 'notproof',
                "She put paper trees, moss, and a clay fox inside.": 'notproof',
                "On Monday, she rode the city bus to school with the box.": 'notproof',
                "Dina held the box flat on her lap with both arms.": 'notproof',
                "When the bus bumped, she lifted the box so it would not shake.": 'notproof',
                "The bus driver called out each stop in a loud voice.": 'notproof',
                "At school, Dina's teacher held the box up for the class to see.": 'notproof'
              },
              notes: {
                "Dina made a tiny forest in a shoebox for school.": "This sentence tells what Dina made. It does not show that the bus is crowded.",
                "She put paper trees, moss, and a clay fox inside.": "This sentence tells what is in the box. It is not about the bus.",
                "On Monday, she rode the city bus to school with the box.": "This one is tricky. It tells that Dina rode the bus. But it does not show how many people were on it.",
                "Dina held the box flat on her lap with both arms.": "This sentence tells how Dina held the box. It does not show that the bus is crowded.",
                "When the bus bumped, she lifted the box so it would not shake.": "This sentence tells what Dina did when the bus bumped. It does not show that the bus is crowded.",
                "The bus driver called out each stop in a loud voice.": "This sentence is about the bus driver. It does not show that the bus is crowded.",
                "At school, Dina's teacher held the box up for the class to see.": "This sentence is about Dina's teacher at school. It is not about the bus."
              },
              why: "The paragraph says all the seats were full and people stood in the aisle. Lots of people were on the bus. That shows the bus is crowded." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Careful means you take care so nothing goes wrong. Click on the TWO sentences from the paragraph that BEST show that Dina is CAREFUL with the box. Both must prove it.",
              answers: ["Dina held the box flat on her lap with both arms.", "When the bus bumped, she lifted the box so it would not shake."],
              kinds: {
                "Dina made a tiny forest in a shoebox for school.": 'notproof',
                "She put paper trees, moss, and a clay fox inside.": 'notproof',
                "On Monday, she rode the city bus to school with the box.": 'notproof',
                "All the seats were full, and people stood in the aisle.": 'notproof',
                "The bus driver called out each stop in a loud voice.": 'wrongwho',
                "At school, Dina's teacher held the box up for the class to see.": 'wrongwho'
              },
              notes: {
                "Dina made a tiny forest in a shoebox for school.": "This sentence tells what Dina made. It does not show how she takes care of the box.",
                "She put paper trees, moss, and a clay fox inside.": "This sentence tells what is inside the box. It does not show that Dina is careful.",
                "On Monday, she rode the city bus to school with the box.": "This sentence tells how Dina got to school. It does not show that she is careful.",
                "All the seats were full, and people stood in the aisle.": "This sentence is about the full bus. It does not show what Dina does.",
                "The bus driver called out each stop in a loud voice.": "This sentence is about the bus driver, not Dina.",
                "At school, Dina's teacher held the box up for the class to see.": "This one is tricky. The teacher holds the box up. But the sentence is about the teacher, not Dina."
              },
              why: "The paragraph says Dina held the box flat on her lap with both arms. It also says she lifted the box so it would not shake. Both show that Dina is careful with the box." }
          ]
        }
      ]
    },
    /* ───────── Version 3 ───────── */
    {
      teach: {
        story: {
          title: "The Light Over the Front Door",
          paragraphs: [
            "One night in January, the light over the front door of Lila's building went out. Mrs. Bell almost tripped on the front steps. Lila could not even see her own boots. Mr. Amos from the first floor set up a tall ladder. Lila held the ladder steady with both hands. She passed up the new bulb slowly, so it would not slip and break. Lila stamped her feet to warm up her toes. Mr. Amos put in the bulb and climbed down slowly. Soon the steps glowed bright and yellow again."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: "How to click",
            lines: [
              "Today you will click on sentences. The story is just one paragraph.",
              "A paragraph is a group of sentences about one thing.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences means pick two.",
              "With TWO, both sentences must prove the idea. One right and one wrong gets no point.",
              "Here is an example. The idea is that Sam is hungry.",
              "Sam's tummy growls. Sam eats two bowls of rice. Both show that Sam is hungry. Click both, and you get the point.",
              "Now say you click \"Sam's tummy growls\" and \"Sam has a red hat.\" A red hat does not show that Sam is hungry. So you get no point.",
              "BEST shows means the sentence proves the idea the most."
            ] },
          { kind: 'watch', id: 'W2', title: "Watch me find the TWO",
            lines: [
              "Let's do one together. Here is the question.",
              "Click on the TWO sentences from the paragraph that BEST show that the front steps are DARK.",
              "Step 1. Say the idea. The steps are dark. It is hard to see there.",
              "Step 2. Read each sentence. Ask, does this SHOW that the steps are dark?",
              "The light over the front door went out. This one is tricky. It tells WHY the steps are dark. It does not show how dark they are.",
              "Mrs. Bell almost tripped on the front steps. Yes! People trip when they cannot see.",
              "Lila could not even see her own boots. Yes! That is very dark.",
              "Mr. Amos set up a tall ladder. That is about the ladder, not the dark.",
              "So we click the TWO sentences that light up. Both prove the idea. Then we tap That's My Answer!"
            ],
            lit: ["Mrs. Bell almost tripped on the front steps.", "Lila could not even see her own boots."] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
            q: "Think about the weather. Click on the sentence from the paragraph that BEST shows that the night is COLD.",
            answers: ["Lila stamped her feet to warm up her toes."],
            kinds: {
              "One night in January, the light over the front door of Lila's building went out.": 'notproof',
              "Mrs. Bell almost tripped on the front steps.": 'notproof',
              "Lila could not even see her own boots.": 'notproof',
              "Mr. Amos from the first floor set up a tall ladder.": 'notproof',
              "Lila held the ladder steady with both hands.": 'notproof',
              "She passed up the new bulb slowly, so it would not slip and break.": 'notproof',
              "Mr. Amos put in the bulb and climbed down slowly.": 'notproof',
              "Soon the steps glowed bright and yellow again.": 'notproof'
            },
            notes: {
              "One night in January, the light over the front door of Lila's building went out.": "This one is tricky. January can be cold. But this sentence does not show that this night is cold.",
              "Mrs. Bell almost tripped on the front steps.": "This sentence is about Mrs. Bell on the steps. It does not show that the night is cold.",
              "Lila could not even see her own boots.": "This sentence tells what Lila could not see. It does not show that the night is cold.",
              "Mr. Amos from the first floor set up a tall ladder.": "This sentence tells about the ladder. It does not show that the night is cold.",
              "Lila held the ladder steady with both hands.": "This sentence tells how Lila held the ladder. It does not show that the night is cold.",
              "She passed up the new bulb slowly, so it would not slip and break.": "This sentence tells how Lila passed up the bulb. It does not show that the night is cold.",
              "Mr. Amos put in the bulb and climbed down slowly.": "This sentence is about Mr. Amos on the ladder. It does not show that the night is cold.",
              "Soon the steps glowed bright and yellow again.": "This sentence tells about the light. It does not show that the night is cold."
            },
            why: "The paragraph says Lila stamped her feet to warm up her toes. You warm up your toes when it is cold. That shows the night is cold." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
            q: "Careful means you take care so nothing goes wrong. Click on the TWO sentences from the paragraph that BEST show that Lila is CAREFUL. Both must prove it.",
            answers: ["Lila held the ladder steady with both hands.", "She passed up the new bulb slowly, so it would not slip and break."],
            kinds: {
              "One night in January, the light over the front door of Lila's building went out.": 'notproof',
              "Mrs. Bell almost tripped on the front steps.": 'wrongwho',
              "Lila could not even see her own boots.": 'notproof',
              "Mr. Amos from the first floor set up a tall ladder.": 'wrongwho',
              "Lila stamped her feet to warm up her toes.": 'notproof',
              "Mr. Amos put in the bulb and climbed down slowly.": 'wrongwho',
              "Soon the steps glowed bright and yellow again.": 'notproof'
            },
            notes: {
              "One night in January, the light over the front door of Lila's building went out.": "This sentence tells about the light going out. It does not show that Lila is careful.",
              "Mrs. Bell almost tripped on the front steps.": "This sentence is about Mrs. Bell, not Lila.",
              "Lila could not even see her own boots.": "This sentence is about Lila. But it shows how dark it was, not that she is careful.",
              "Mr. Amos from the first floor set up a tall ladder.": "This sentence is about Mr. Amos and the ladder, not Lila.",
              "Lila stamped her feet to warm up her toes.": "This sentence is about Lila. But it shows that she is cold, not careful.",
              "Mr. Amos put in the bulb and climbed down slowly.": "This one is tricky. Mr. Amos climbs down slowly, and that is careful. But the question is about Lila, not Mr. Amos.",
              "Soon the steps glowed bright and yellow again.": "This sentence tells about the light. It does not show that Lila is careful."
            },
            why: "The paragraph says Lila held the ladder steady with both hands. It also says she passed up the new bulb slowly, so it would not slip and break. Both show that Lila is careful." },
          { kind: 'watch', id: 'W3', title: "The steps",
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Read each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out! A sentence can be true and still not show the idea.",
              "Watch out for the wrong person, too. Check who the question is about.",
              "Step 3. Click the sentence that shows the idea. If the question says TWO, click two.",
              "Check both. If one does not prove the idea, change it.",
              "To change a pick, tap it again. Then tap the right one.",
              "When you are sure, tap That's My Answer!",
              "Now you try."
            ] }
        ]
      },
      pre: {
        story: {
          title: "Hand Warmers on the Platform",
          paragraphs: [
            "Rhea and her mother waited for the train on the windy platform. Rhea had two hand warmers in her coat pockets. An old man near them was shivering in a thin jacket. Rhea held out one of her hand warmers to the man. The man smiled at Rhea and put his hand on his heart. He told Rhea that she had warmed up his whole morning. Her mother squeezed Rhea's hand and smiled. Then the train pulled in, and they all hurried on board."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
            q: "Kind means you are nice to others. Click on the sentence from the paragraph that BEST shows that Rhea is KIND.",
            answers: ["Rhea held out one of her hand warmers to the man."],
            kinds: {
              "Rhea and her mother waited for the train on the windy platform.": 'notproof',
              "Rhea had two hand warmers in her coat pockets.": 'notproof',
              "An old man near them was shivering in a thin jacket.": 'wrongwho',
              "The man smiled at Rhea and put his hand on his heart.": 'wrongwho',
              "He told Rhea that she had warmed up his whole morning.": 'wrongwho',
              "Her mother squeezed Rhea's hand and smiled.": 'wrongwho',
              "Then the train pulled in, and they all hurried on board.": 'notproof'
            },
            notes: {
              "Rhea and her mother waited for the train on the windy platform.": "This sentence tells where Rhea and her mother waited. It does not show that Rhea is kind.",
              "Rhea had two hand warmers in her coat pockets.": "This one is tricky. Rhea has two hand warmers. But having them is not sharing them.",
              "An old man near them was shivering in a thin jacket.": "This sentence is about the old man, not Rhea.",
              "The man smiled at Rhea and put his hand on his heart.": "This sentence is about the old man, not Rhea.",
              "He told Rhea that she had warmed up his whole morning.": "This sentence tells what the old man said. It is about him, not what Rhea did.",
              "Her mother squeezed Rhea's hand and smiled.": "This sentence is about Rhea's mother, not Rhea.",
              "Then the train pulled in, and they all hurried on board.": "This sentence tells about the train. It does not show that Rhea is kind."
            },
            why: "The paragraph says Rhea held out one of her hand warmers to the man. She shared with someone who was cold. That shows Rhea is kind." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
            q: "Thankful means glad that someone helped. Click on the TWO sentences from the paragraph that BEST show that the old man is THANKFUL. Both must prove it.",
            answers: ["The man smiled at Rhea and put his hand on his heart.", "He told Rhea that she had warmed up his whole morning."],
            kinds: {
              "Rhea and her mother waited for the train on the windy platform.": 'wrongwho',
              "Rhea had two hand warmers in her coat pockets.": 'wrongwho',
              "An old man near them was shivering in a thin jacket.": 'notproof',
              "Rhea held out one of her hand warmers to the man.": 'wrongwho',
              "Her mother squeezed Rhea's hand and smiled.": 'wrongwho',
              "Then the train pulled in, and they all hurried on board.": 'notproof'
            },
            notes: {
              "Rhea and her mother waited for the train on the windy platform.": "This sentence is about Rhea and her mother, not the old man.",
              "Rhea had two hand warmers in her coat pockets.": "This sentence is about Rhea, not the old man.",
              "An old man near them was shivering in a thin jacket.": "This one is tricky. It is about the old man. But it shows that he is cold, not thankful.",
              "Rhea held out one of her hand warmers to the man.": "This sentence is about Rhea, not the old man.",
              "Her mother squeezed Rhea's hand and smiled.": "This one is tricky. Rhea's mother smiles. But the sentence is about her, not the old man.",
              "Then the train pulled in, and they all hurried on board.": "This sentence tells about the train. It does not show how the old man feels."
            },
            why: "The paragraph says the man smiled at Rhea and put his hand on his heart. It also says he told Rhea she warmed up his whole morning. Both show that the old man is thankful." }
        ]
      },
      turn: [
        {
          story: {
            title: "Tulips Before the Snow",
            paragraphs: [
              "In the fall, Mrs. Diaz from the second floor bought tulip bulbs. She asked Mo to help plant them in the big pot by the front door. The bulbs looked like small brown onions. Mo asked why anyone would plant flowers right before winter. Mrs. Diaz said the bulbs would sleep under the cold dirt. Mo held each bulb like a tiny bird's egg. Then he patted the dirt down softly on top. In April, red tulips popped up by the front door."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Curious means you want to know more. Click on the sentence from the paragraph that BEST shows that Mo is CURIOUS.",
              answers: ["Mo asked why anyone would plant flowers right before winter."],
              kinds: {
                "In the fall, Mrs. Diaz from the second floor bought tulip bulbs.": 'wrongwho',
                "She asked Mo to help plant them in the big pot by the front door.": 'wrongwho',
                "The bulbs looked like small brown onions.": 'notproof',
                "Mrs. Diaz said the bulbs would sleep under the cold dirt.": 'wrongwho',
                "Mo held each bulb like a tiny bird's egg.": 'notproof',
                "Then he patted the dirt down softly on top.": 'notproof',
                "In April, red tulips popped up by the front door.": 'notproof'
              },
              notes: {
                "In the fall, Mrs. Diaz from the second floor bought tulip bulbs.": "This sentence is about Mrs. Diaz, not Mo.",
                "She asked Mo to help plant them in the big pot by the front door.": "This sentence tells what Mrs. Diaz asked Mo to do. It does not show that Mo is curious.",
                "The bulbs looked like small brown onions.": "This sentence tells what the bulbs looked like. It does not show that Mo is curious.",
                "Mrs. Diaz said the bulbs would sleep under the cold dirt.": "This one is tricky. Mrs. Diaz answers Mo. But the sentence is about her, not Mo.",
                "Mo held each bulb like a tiny bird's egg.": "This sentence tells how Mo held the bulbs. It does not show that he wants to know more.",
                "Then he patted the dirt down softly on top.": "This sentence tells how Mo covered the bulbs. It does not show that he is curious.",
                "In April, red tulips popped up by the front door.": "This sentence tells what grew in April. It does not show that Mo is curious."
              },
              why: "The paragraph says Mo asked why anyone would plant flowers right before winter. He wanted to know more. That shows Mo is curious." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Gentle means you handle things with care so they do not get hurt. Click on the TWO sentences from the paragraph that BEST show that Mo is GENTLE with the bulbs. Both must prove it.",
              answers: ["Mo held each bulb like a tiny bird's egg.", "Then he patted the dirt down softly on top."],
              kinds: {
                "In the fall, Mrs. Diaz from the second floor bought tulip bulbs.": 'wrongwho',
                "She asked Mo to help plant them in the big pot by the front door.": 'notproof',
                "The bulbs looked like small brown onions.": 'notproof',
                "Mo asked why anyone would plant flowers right before winter.": 'notproof',
                "Mrs. Diaz said the bulbs would sleep under the cold dirt.": 'wrongwho',
                "In April, red tulips popped up by the front door.": 'notproof'
              },
              notes: {
                "In the fall, Mrs. Diaz from the second floor bought tulip bulbs.": "This sentence is about Mrs. Diaz, not Mo.",
                "She asked Mo to help plant them in the big pot by the front door.": "This one is tricky. Mo is asked to help plant. But it does not show HOW he plants.",
                "The bulbs looked like small brown onions.": "This sentence tells what the bulbs looked like. It does not show that Mo is gentle.",
                "Mo asked why anyone would plant flowers right before winter.": "This sentence tells what Mo asked. It does not show how he holds the bulbs.",
                "Mrs. Diaz said the bulbs would sleep under the cold dirt.": "This sentence is about Mrs. Diaz, not Mo.",
                "In April, red tulips popped up by the front door.": "This one is tricky. The tulips grew. But this sentence does not show how Mo planted them."
              },
              why: "The paragraph says Mo held each bulb like a tiny bird's egg. It also says he patted the dirt down softly. Both show that Mo is gentle with the bulbs." }
          ]
        },
        {
          story: {
            title: "The Woman with the Big Suitcase",
            paragraphs: [
              "A woman with a big suitcase got on the bus where Pia sat with her mom. She needed both hands to lift the suitcase up the steps. She sat down and turned her map one way, then the other. Then she asked Pia how to get to the train station. Pia found the station on the map and showed her the right stop. The bus bumped and rattled down Grant Street. When the bus got near the station, Pia pressed the stop button for her. The woman waved to Pia from the sidewalk."
            ]
          },
          items: [
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Heavy means it weighs a lot. Click on the sentence from the paragraph that BEST shows that the suitcase is HEAVY.",
              answers: ["She needed both hands to lift the suitcase up the steps."],
              kinds: {
                "A woman with a big suitcase got on the bus where Pia sat with her mom.": 'notproof',
                "She sat down and turned her map one way, then the other.": 'notproof',
                "Then she asked Pia how to get to the train station.": 'notproof',
                "Pia found the station on the map and showed her the right stop.": 'notproof',
                "The bus bumped and rattled down Grant Street.": 'notproof',
                "When the bus got near the station, Pia pressed the stop button for her.": 'notproof',
                "The woman waved to Pia from the sidewalk.": 'notproof'
              },
              notes: {
                "A woman with a big suitcase got on the bus where Pia sat with her mom.": "This one is tricky. The suitcase is big. But big does not always mean heavy.",
                "She sat down and turned her map one way, then the other.": "This sentence is about the woman's map. It does not show that the suitcase is heavy.",
                "Then she asked Pia how to get to the train station.": "This sentence tells what the woman asked. It is not about the suitcase.",
                "Pia found the station on the map and showed her the right stop.": "This sentence is about Pia and the map. It is not about the suitcase.",
                "The bus bumped and rattled down Grant Street.": "This sentence tells how the bus moved. It does not show that the suitcase is heavy.",
                "When the bus got near the station, Pia pressed the stop button for her.": "This sentence is about Pia and the stop button. It is not about the suitcase.",
                "The woman waved to Pia from the sidewalk.": "This sentence tells what the woman did at the end. It is not about the suitcase."
              },
              why: "The paragraph says the woman needed both hands to lift the suitcase up the steps. A light bag takes only one hand. That shows the suitcase is heavy." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Helpful means you do things for others. Click on the TWO sentences from the paragraph that BEST show that Pia is HELPFUL. Both must prove it.",
              answers: ["Pia found the station on the map and showed her the right stop.", "When the bus got near the station, Pia pressed the stop button for her."],
              kinds: {
                "A woman with a big suitcase got on the bus where Pia sat with her mom.": 'notproof',
                "She needed both hands to lift the suitcase up the steps.": 'wrongwho',
                "She sat down and turned her map one way, then the other.": 'wrongwho',
                "Then she asked Pia how to get to the train station.": 'wrongwho',
                "The bus bumped and rattled down Grant Street.": 'notproof',
                "The woman waved to Pia from the sidewalk.": 'wrongwho'
              },
              notes: {
                "A woman with a big suitcase got on the bus where Pia sat with her mom.": "This sentence tells who got on the bus. It does not show that Pia is helpful.",
                "She needed both hands to lift the suitcase up the steps.": "This sentence is about the woman, not Pia.",
                "She sat down and turned her map one way, then the other.": "This sentence is about the woman and her map, not Pia.",
                "Then she asked Pia how to get to the train station.": "This one is tricky. The woman asks Pia for help. But the sentence tells what the woman did, not what Pia did.",
                "The bus bumped and rattled down Grant Street.": "This sentence tells how the bus moved. It does not show that Pia is helpful.",
                "The woman waved to Pia from the sidewalk.": "This sentence is about the woman, not Pia."
              },
              why: "The paragraph says Pia found the station on the map and showed the woman the right stop. It also says Pia pressed the stop button for her. Both show that Pia is helpful." }
          ]
        },
        {
          story: {
            title: "The Cake Walk at the Fall Fair",
            paragraphs: [
              "The fall fair had a cake walk on the blacktop. Twelve numbers were painted in a big ring. When the music played, the people walked around the ring. Gia hopped and spun on each number she landed on. When the music stopped, Gia was on number seven. A man called out number seven, so Gia won a cake! Gia picked the lemon cake because Grandma loved lemon. She carried it to Grandma and gave her the first slice."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Excited means so happy you can't keep still. Click on the sentence from the paragraph that BEST shows that Gia is EXCITED.",
              answers: ["Gia hopped and spun on each number she landed on."],
              kinds: {
                "The fall fair had a cake walk on the blacktop.": 'notproof',
                "Twelve numbers were painted in a big ring.": 'notproof',
                "When the music played, the people walked around the ring.": 'notproof',
                "When the music stopped, Gia was on number seven.": 'notproof',
                "A man called out number seven, so Gia won a cake!": 'notproof',
                "Gia picked the lemon cake because Grandma loved lemon.": 'notproof',
                "She carried it to Grandma and gave her the first slice.": 'notproof'
              },
              notes: {
                "The fall fair had a cake walk on the blacktop.": "This sentence tells about the cake walk. It does not show how Gia feels.",
                "Twelve numbers were painted in a big ring.": "This sentence tells about the numbers. It does not show how Gia feels.",
                "When the music played, the people walked around the ring.": "This sentence tells what everyone did. It does not show how Gia feels.",
                "When the music stopped, Gia was on number seven.": "This one is tricky. Gia lands on number seven here. But the sentence does not show how she feels.",
                "A man called out number seven, so Gia won a cake!": "This one is tricky. Gia wins a cake here. But the sentence does not show how Gia acts or feels.",
                "Gia picked the lemon cake because Grandma loved lemon.": "This sentence tells which cake Gia picked. It does not show that she is excited.",
                "She carried it to Grandma and gave her the first slice.": "This sentence tells what Gia did with the cake. It does not show that she is excited."
              },
              why: "The paragraph says Gia hopped and spun on each number. Kids hop and spin when they are excited. That shows Gia is excited." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Thoughtful means you think about what others like. Click on the TWO sentences from the paragraph that BEST show that Gia is THOUGHTFUL. Both must prove it.",
              answers: ["Gia picked the lemon cake because Grandma loved lemon.", "She carried it to Grandma and gave her the first slice."],
              kinds: {
                "The fall fair had a cake walk on the blacktop.": 'notproof',
                "Twelve numbers were painted in a big ring.": 'notproof',
                "When the music played, the people walked around the ring.": 'notproof',
                "Gia hopped and spun on each number she landed on.": 'notproof',
                "When the music stopped, Gia was on number seven.": 'notproof',
                "A man called out number seven, so Gia won a cake!": 'notproof'
              },
              notes: {
                "The fall fair had a cake walk on the blacktop.": "This sentence tells about the cake walk. It does not show that Gia thinks of others.",
                "Twelve numbers were painted in a big ring.": "This sentence tells about the numbers. It does not show that Gia is thoughtful.",
                "When the music played, the people walked around the ring.": "This sentence tells what everyone did. It does not show that Gia thinks of others.",
                "Gia hopped and spun on each number she landed on.": "This sentence tells how Gia moved. It shows how she feels, not that she thinks of others.",
                "When the music stopped, Gia was on number seven.": "This sentence tells where Gia was when the music stopped. It does not show that she is thoughtful.",
                "A man called out number seven, so Gia won a cake!": "This sentence tells that Gia won a cake. It does not show that she thinks of others."
              },
              why: "The paragraph says Gia picked the lemon cake because Grandma loved lemon. It also says Gia gave Grandma the first slice. Both show that Gia thinks about what Grandma likes. She is thoughtful." }
          ]
        },
        {
          story: {
            title: "The Pothole on Ash Street",
            paragraphs: [
              "All fall, a pothole sat in the middle of Ash Street. A whole car tire could fit inside it. Each time Kenzo's dad drove over it, his coffee spilled. One cold Monday, Ms. Okoro from the city came to fix the hole. She shoveled hot black tar into it for hours. She did not even stop to eat her lunch. Kenzo brought her a cup of hot cocoa. At last, a big roller pressed the tar flat and smooth. Kenzo's mom and dad cheered from the front steps."
            ]
          },
          items: [
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "The street is smooth again. Click on the sentence from the paragraph that BEST shows that Kenzo's family is HAPPY.",
              answers: ["Kenzo's mom and dad cheered from the front steps."],
              kinds: {
                "All fall, a pothole sat in the middle of Ash Street.": 'notproof',
                "A whole car tire could fit inside it.": 'notproof',
                "Each time Kenzo's dad drove over it, his coffee spilled.": 'notproof',
                "One cold Monday, Ms. Okoro from the city came to fix the hole.": 'wrongwho',
                "She shoveled hot black tar into it for hours.": 'wrongwho',
                "She did not even stop to eat her lunch.": 'wrongwho',
                "Kenzo brought her a cup of hot cocoa.": 'notproof',
                "At last, a big roller pressed the tar flat and smooth.": 'notproof'
              },
              notes: {
                "All fall, a pothole sat in the middle of Ash Street.": "This sentence tells about the pothole. It does not show how the family feels.",
                "A whole car tire could fit inside it.": "This sentence tells how big the hole was. It does not show that the family is happy.",
                "Each time Kenzo's dad drove over it, his coffee spilled.": "This one is tricky. It is about Kenzo's dad. But spilling coffee does not show that he is happy.",
                "One cold Monday, Ms. Okoro from the city came to fix the hole.": "This sentence is about Ms. Okoro, not Kenzo's family.",
                "She shoveled hot black tar into it for hours.": "This sentence is about Ms. Okoro, not Kenzo's family.",
                "She did not even stop to eat her lunch.": "This sentence is about Ms. Okoro, not Kenzo's family.",
                "Kenzo brought her a cup of hot cocoa.": "This sentence tells what Kenzo brought. It does not show how his family feels.",
                "At last, a big roller pressed the tar flat and smooth.": "This one is tricky. The street is fixed, so the family has a reason to be glad. But this sentence does not show how they feel."
              },
              why: "The paragraph says Kenzo's mom and dad cheered from the front steps. People cheer when they are happy. That shows the family is happy." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Working hard means you keep going on a big job. Click on the TWO sentences from the paragraph that BEST show that Ms. Okoro WORKS HARD. Both must prove it.",
              answers: ["She shoveled hot black tar into it for hours.", "She did not even stop to eat her lunch."],
              kinds: {
                "All fall, a pothole sat in the middle of Ash Street.": 'notproof',
                "A whole car tire could fit inside it.": 'notproof',
                "Each time Kenzo's dad drove over it, his coffee spilled.": 'wrongwho',
                "One cold Monday, Ms. Okoro from the city came to fix the hole.": 'notproof',
                "Kenzo brought her a cup of hot cocoa.": 'wrongwho',
                "At last, a big roller pressed the tar flat and smooth.": 'notproof',
                "Kenzo's mom and dad cheered from the front steps.": 'wrongwho'
              },
              notes: {
                "All fall, a pothole sat in the middle of Ash Street.": "This sentence tells about the pothole. It does not show anyone working.",
                "A whole car tire could fit inside it.": "This sentence tells how big the hole was. It does not show Ms. Okoro working.",
                "Each time Kenzo's dad drove over it, his coffee spilled.": "This sentence is about Kenzo's dad, not Ms. Okoro.",
                "One cold Monday, Ms. Okoro from the city came to fix the hole.": "This one is tricky. It tells why Ms. Okoro came. But it does not show how hard she worked.",
                "Kenzo brought her a cup of hot cocoa.": "This one is tricky. Kenzo brings cocoa. But the question is about Ms. Okoro, not Kenzo.",
                "At last, a big roller pressed the tar flat and smooth.": "This sentence tells about the roller. It does not show how hard Ms. Okoro worked.",
                "Kenzo's mom and dad cheered from the front steps.": "This sentence is about Kenzo's mom and dad, not Ms. Okoro."
              },
              why: "The paragraph says Ms. Okoro shoveled hot tar into the hole for hours. It also says she did not even stop to eat her lunch. Both show that Ms. Okoro works hard." }
          ]
        }
      ]
    },
    /* ───────── Version 4 ───────── */
    {
      teach: {
        story: {
          title: "Caroling on the Fifth Floor",
          paragraphs: [
            "One snowy night, Noa's family went caroling in their building. They sang songs at each door on the fifth floor. Noa hid behind her big sister and held the song sheet over her face. When they sang, her voice was as soft as a whisper. Old Mr. Haddad opened his door and clapped along with the song. Then he gave each singer a warm cookie. At the last door, Noa stepped out in front of her sister. She sang the whole song loud and clear. Her big sister grinned and squeezed her hand."
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: "How to click",
            lines: [
              "Today you will click on sentences. The story is just one paragraph.",
              "A paragraph is a group of sentences about one thing.",
              "To click, tap a sentence. It turns yellow. That means you picked it.",
              "Did you change your mind? Tap the sentence again. The yellow goes away.",
              "When you are sure, tap That's My Answer!",
              "Click on the sentence means pick one. Click on the TWO sentences means pick two.",
              "With TWO, both sentences must prove the idea. One right and one wrong gets no point.",
              "Here is an example. The idea is that Sam is hungry.",
              "Sam's tummy growls. Sam eats two bowls of rice. Both show that Sam is hungry. Click both, and you get the point.",
              "Now say you click \"Sam's tummy growls\" and \"Sam has a red hat.\" A red hat does not show that Sam is hungry. So you get no point.",
              "BEST shows means the sentence proves the idea the most."
            ] },
          { kind: 'watch', id: 'W2', title: "Watch me find the TWO",
            lines: [
              "Let's do one together. Here is the question.",
              "Click on the TWO sentences from the paragraph that BEST show that Noa is SHY at first.",
              "Step 1. Say the idea. Noa is shy. She does not want people to see her or hear her.",
              "Step 2. Read each sentence. Ask, does this SHOW that Noa is shy?",
              "Noa's family went caroling in their building. That tells what the family did. It does not show how Noa feels.",
              "Noa hid behind her big sister and held the song sheet over her face. Yes! She hides so people will not see her.",
              "When they sang, her voice was as soft as a whisper. Yes! A shy voice is soft and small.",
              "Old Mr. Haddad opened his door and clapped along. That is about Mr. Haddad, not Noa.",
              "So we click the TWO sentences that light up. Both prove the idea. Then we tap That's My Answer!"
            ],
            lit: ["Noa hid behind her big sister and held the song sheet over her face.", "When they sang, her voice was as soft as a whisper."] },
          { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
            q: "Generous people share what they have. Click on the sentence from the paragraph that BEST shows that Mr. Haddad is GENEROUS.",
            answers: ["Then he gave each singer a warm cookie."],
            kinds: {
              "One snowy night, Noa's family went caroling in their building.": 'wrongwho',
              "They sang songs at each door on the fifth floor.": 'wrongwho',
              "Noa hid behind her big sister and held the song sheet over her face.": 'wrongwho',
              "When they sang, her voice was as soft as a whisper.": 'wrongwho',
              "Old Mr. Haddad opened his door and clapped along with the song.": 'notproof',
              "At the last door, Noa stepped out in front of her sister.": 'wrongwho',
              "She sang the whole song loud and clear.": 'wrongwho',
              "Her big sister grinned and squeezed her hand.": 'wrongwho'
            },
            notes: {
              "One snowy night, Noa's family went caroling in their building.": "This sentence is about Noa's family, not Mr. Haddad.",
              "They sang songs at each door on the fifth floor.": "This sentence tells what the family did. It is not about Mr. Haddad.",
              "Noa hid behind her big sister and held the song sheet over her face.": "This sentence is about Noa, not Mr. Haddad.",
              "When they sang, her voice was as soft as a whisper.": "This sentence is about Noa's voice, not Mr. Haddad.",
              "Old Mr. Haddad opened his door and clapped along with the song.": "This one is tricky. It is about Mr. Haddad, and he likes the song. But clapping is not giving.",
              "At the last door, Noa stepped out in front of her sister.": "This sentence is about Noa, not Mr. Haddad.",
              "She sang the whole song loud and clear.": "This sentence is about Noa, not Mr. Haddad.",
              "Her big sister grinned and squeezed her hand.": "This sentence is about Noa's sister, not Mr. Haddad."
            },
            why: "The paragraph says Mr. Haddad gave each singer a warm cookie. He gave something to everyone. That shows he is generous." },
          { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
            q: "Brave means you do something even when you are scared. Click on the TWO sentences from the paragraph that BEST show that Noa is BRAVE at the end. Both must prove it.",
            answers: ["At the last door, Noa stepped out in front of her sister.", "She sang the whole song loud and clear."],
            kinds: {
              "One snowy night, Noa's family went caroling in their building.": 'notproof',
              "They sang songs at each door on the fifth floor.": 'notproof',
              "Noa hid behind her big sister and held the song sheet over her face.": 'opposite',
              "When they sang, her voice was as soft as a whisper.": 'opposite',
              "Old Mr. Haddad opened his door and clapped along with the song.": 'wrongwho',
              "Then he gave each singer a warm cookie.": 'wrongwho',
              "Her big sister grinned and squeezed her hand.": 'wrongwho'
            },
            notes: {
              "One snowy night, Noa's family went caroling in their building.": "This sentence tells what the family did. It does not show that Noa is brave.",
              "They sang songs at each door on the fifth floor.": "This sentence tells where they sang. It does not show that Noa is brave.",
              "Noa hid behind her big sister and held the song sheet over her face.": "This sentence is from the start. Noa hides here. That is the opposite of brave.",
              "When they sang, her voice was as soft as a whisper.": "This sentence is from the start. Noa sings very softly here. It does not show that she is brave.",
              "Old Mr. Haddad opened his door and clapped along with the song.": "This sentence is about Mr. Haddad, not Noa.",
              "Then he gave each singer a warm cookie.": "This sentence is about Mr. Haddad, not Noa.",
              "Her big sister grinned and squeezed her hand.": "This one is tricky. Her sister is proud of her. But the sentence is about her sister, not Noa."
            },
            why: "The paragraph says Noa stepped out in front of her sister at the last door. It also says she sang the whole song loud and clear. Both show that Noa is brave at the end." },
          { kind: 'watch', id: 'W3', title: "The steps",
            lines: [
              "Here are the steps for a click question.",
              "Step 1. Say the idea in your own words.",
              "Step 2. Read each sentence. Ask, does this sentence SHOW the idea?",
              "Watch out! A sentence can be true and still not show the idea.",
              "Watch out for the wrong person, too. Check who the question is about.",
              "Step 3. Click the sentence that shows the idea. If the question says TWO, click two.",
              "Check both. If one does not prove the idea, change it.",
              "To change a pick, tap it again. Then tap the right one.",
              "When you are sure, tap That's My Answer!",
              "Now you try."
            ] }
        ]
      },
      pre: {
        story: {
          title: "I Spy at the Bus Stop",
          paragraphs: [
            "The number 12 bus was very late, and the wind was icy. Little Benji kicked the metal bench and groaned. Odette started a game of I Spy to cheer him up. Benji guessed the red stop sign on the first try. Then Odette let him pick the next thing to spy. Odette looked down the street for the bus again and again. Benji giggled so hard that he forgot about the chilly wind. At last, the bus rolled up to the curb."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
            q: "Grumpy means in a bad mood. Click on the sentence from the paragraph that BEST shows that Benji is GRUMPY.",
            answers: ["Little Benji kicked the metal bench and groaned."],
            kinds: {
              "The number 12 bus was very late, and the wind was icy.": 'notproof',
              "Odette started a game of I Spy to cheer him up.": 'wrongwho',
              "Benji guessed the red stop sign on the first try.": 'notproof',
              "Then Odette let him pick the next thing to spy.": 'wrongwho',
              "Odette looked down the street for the bus again and again.": 'wrongwho',
              "Benji giggled so hard that he forgot about the chilly wind.": 'opposite',
              "At last, the bus rolled up to the curb.": 'notproof'
            },
            notes: {
              "The number 12 bus was very late, and the wind was icy.": "This one is tricky. A late bus is WHY Benji might be grumpy. But this sentence does not show how he acts.",
              "Odette started a game of I Spy to cheer him up.": "This sentence tells what Odette did. It does not show how Benji acts.",
              "Benji guessed the red stop sign on the first try.": "This sentence tells what Benji guessed. It does not show that he is grumpy.",
              "Then Odette let him pick the next thing to spy.": "This sentence is about Odette, not Benji.",
              "Odette looked down the street for the bus again and again.": "This sentence is about Odette, not Benji.",
              "Benji giggled so hard that he forgot about the chilly wind.": "This sentence shows Benji giggling. That is the opposite of grumpy.",
              "At last, the bus rolled up to the curb.": "This sentence tells about the bus. It does not show how Benji feels."
            },
            why: "The paragraph says Benji kicked the metal bench and groaned. Kids kick and groan when they are in a bad mood. That shows Benji is grumpy." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
            q: "Kind means you are nice to others. Click on the TWO sentences from the paragraph that BEST show that Odette is KIND to Benji. Both must prove it.",
            answers: ["Odette started a game of I Spy to cheer him up.", "Then Odette let him pick the next thing to spy."],
            kinds: {
              "The number 12 bus was very late, and the wind was icy.": 'notproof',
              "Little Benji kicked the metal bench and groaned.": 'wrongwho',
              "Benji guessed the red stop sign on the first try.": 'wrongwho',
              "Odette looked down the street for the bus again and again.": 'notproof',
              "Benji giggled so hard that he forgot about the chilly wind.": 'wrongwho',
              "At last, the bus rolled up to the curb.": 'notproof'
            },
            notes: {
              "The number 12 bus was very late, and the wind was icy.": "This sentence tells about the late bus. It does not show that Odette is kind.",
              "Little Benji kicked the metal bench and groaned.": "This sentence is about Benji, not Odette.",
              "Benji guessed the red stop sign on the first try.": "This sentence is about Benji, not Odette.",
              "Odette looked down the street for the bus again and again.": "This one is tricky. It is about Odette. But looking for the bus does not show that she is kind.",
              "Benji giggled so hard that he forgot about the chilly wind.": "This one is tricky. Benji is happy now. But the sentence is about Benji, not what Odette did.",
              "At last, the bus rolled up to the curb.": "This sentence tells about the bus. It does not show that Odette is kind."
            },
            why: "The paragraph says Odette started a game of I Spy to cheer Benji up. It also says she let him pick the next thing to spy. Both show that Odette is kind to Benji." }
        ]
      },
      turn: [
        {
          story: {
            title: "Ice on Every Window",
            paragraphs: [
              "It was still dark when Dad woke Tao on Monday. A thick coat of ice covered every window of the car. Dad gulped his coffee while he tied his boots. He kept looking at the clock on the stove. Tao pulled on his coat over his pajamas. He grabbed the small scraper and cleaned the back window. Dad scraped the front window with the big scraper. At last, the car pulled out onto the icy street."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Helpful means you do things for others. Click on the sentence from the paragraph that BEST shows that Tao is HELPFUL.",
              answers: ["He grabbed the small scraper and cleaned the back window."],
              kinds: {
                "It was still dark when Dad woke Tao on Monday.": 'notproof',
                "A thick coat of ice covered every window of the car.": 'notproof',
                "Dad gulped his coffee while he tied his boots.": 'wrongwho',
                "He kept looking at the clock on the stove.": 'wrongwho',
                "Tao pulled on his coat over his pajamas.": 'notproof',
                "Dad scraped the front window with the big scraper.": 'wrongwho',
                "At last, the car pulled out onto the icy street.": 'notproof'
              },
              notes: {
                "It was still dark when Dad woke Tao on Monday.": "This sentence tells when Dad woke Tao. It does not show that Tao is helpful.",
                "A thick coat of ice covered every window of the car.": "This sentence tells about the ice on the car. It does not show what Tao did.",
                "Dad gulped his coffee while he tied his boots.": "This sentence is about Dad, not Tao.",
                "He kept looking at the clock on the stove.": "This sentence is about Dad, not Tao.",
                "Tao pulled on his coat over his pajamas.": "This one is tricky. Tao gets ready to go out. But putting on a coat does not help anyone yet.",
                "Dad scraped the front window with the big scraper.": "This one is tricky. Dad scrapes a window too. But the question is about Tao, not Dad.",
                "At last, the car pulled out onto the icy street.": "This sentence tells about the car at the end. It does not show what Tao did."
              },
              why: "The paragraph says Tao grabbed the small scraper and cleaned the back window. He did a job to help Dad. That shows Tao is helpful." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "In a hurry means you need to be fast. Click on the TWO sentences from the paragraph that BEST show that Dad is in a HURRY. Both must prove it.",
              answers: ["Dad gulped his coffee while he tied his boots.", "He kept looking at the clock on the stove."],
              kinds: {
                "It was still dark when Dad woke Tao on Monday.": 'notproof',
                "A thick coat of ice covered every window of the car.": 'notproof',
                "Tao pulled on his coat over his pajamas.": 'wrongwho',
                "He grabbed the small scraper and cleaned the back window.": 'wrongwho',
                "Dad scraped the front window with the big scraper.": 'notproof',
                "At last, the car pulled out onto the icy street.": 'notproof'
              },
              notes: {
                "It was still dark when Dad woke Tao on Monday.": "This one is tricky. It is early in the morning. But this sentence does not show that Dad is in a hurry.",
                "A thick coat of ice covered every window of the car.": "This sentence tells about the ice on the car. It does not show that Dad is in a hurry.",
                "Tao pulled on his coat over his pajamas.": "This one is tricky. Tao pulls his coat over his pajamas. But the question is about Dad, not Tao.",
                "He grabbed the small scraper and cleaned the back window.": "This sentence is about Tao, not Dad.",
                "Dad scraped the front window with the big scraper.": "This sentence tells what Dad scraped. It does not show that he is in a hurry.",
                "At last, the car pulled out onto the icy street.": "This sentence tells about the car at the end. It does not show that Dad is in a hurry."
              },
              why: "The paragraph says Dad gulped his coffee while he tied his boots. It also says he kept looking at the clock. Both show that Dad is in a hurry." }
          ]
        },
        {
          story: {
            title: "Sweet Potato Pie for Aunt Rita",
            paragraphs: [
              "On Thanksgiving, Grandma baked a sweet potato pie. Lucy got the job of carrying it to Aunt Rita's place. Lucy held the pie flat with both hands and took tiny steps on the ice. Grandma took a bag of warm rolls. At the door, Uncle Ray took all their coats. Aunt Rita set the pie on the table. After the meal, Uncle Ray ate three big slices of the pie. Then he asked Grandma to bake him one more next week."
            ]
          },
          items: [
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Careful means you take care so nothing goes wrong. Click on the sentence from the paragraph that BEST shows that Lucy is CAREFUL.",
              answers: ["Lucy held the pie flat with both hands and took tiny steps on the ice."],
              kinds: {
                "On Thanksgiving, Grandma baked a sweet potato pie.": 'wrongwho',
                "Lucy got the job of carrying it to Aunt Rita's place.": 'notproof',
                "Grandma took a bag of warm rolls.": 'wrongwho',
                "At the door, Uncle Ray took all their coats.": 'wrongwho',
                "Aunt Rita set the pie on the table.": 'wrongwho',
                "After the meal, Uncle Ray ate three big slices of the pie.": 'wrongwho',
                "Then he asked Grandma to bake him one more next week.": 'wrongwho'
              },
              notes: {
                "On Thanksgiving, Grandma baked a sweet potato pie.": "This sentence is about Grandma, not Lucy.",
                "Lucy got the job of carrying it to Aunt Rita's place.": "This one is tricky. It tells Lucy's job. But it does not show HOW she carries the pie.",
                "Grandma took a bag of warm rolls.": "This sentence is about Grandma, not Lucy.",
                "At the door, Uncle Ray took all their coats.": "This sentence is about Uncle Ray, not Lucy.",
                "Aunt Rita set the pie on the table.": "This sentence is about Aunt Rita, not Lucy.",
                "After the meal, Uncle Ray ate three big slices of the pie.": "This sentence is about Uncle Ray, not Lucy.",
                "Then he asked Grandma to bake him one more next week.": "This sentence is about Uncle Ray, not Lucy."
              },
              why: "The paragraph says Lucy held the pie flat with both hands. She took tiny steps on the ice, too. That shows Lucy is careful." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Uncle Ray tastes the pie. Click on the TWO sentences from the paragraph that BEST show that Uncle Ray LOVES the pie. Both must prove it.",
              answers: ["After the meal, Uncle Ray ate three big slices of the pie.", "Then he asked Grandma to bake him one more next week."],
              kinds: {
                "On Thanksgiving, Grandma baked a sweet potato pie.": 'wrongwho',
                "Lucy got the job of carrying it to Aunt Rita's place.": 'wrongwho',
                "Lucy held the pie flat with both hands and took tiny steps on the ice.": 'wrongwho',
                "Grandma took a bag of warm rolls.": 'wrongwho',
                "At the door, Uncle Ray took all their coats.": 'notproof',
                "Aunt Rita set the pie on the table.": 'wrongwho'
              },
              notes: {
                "On Thanksgiving, Grandma baked a sweet potato pie.": "This one is tricky. It tells who made the pie. But it is about Grandma, not Uncle Ray.",
                "Lucy got the job of carrying it to Aunt Rita's place.": "This sentence is about Lucy, not Uncle Ray.",
                "Lucy held the pie flat with both hands and took tiny steps on the ice.": "This sentence is about Lucy, not Uncle Ray.",
                "Grandma took a bag of warm rolls.": "This sentence is about Grandma, not Uncle Ray.",
                "At the door, Uncle Ray took all their coats.": "This one is tricky. It is about Uncle Ray. But taking coats does not show how he feels about the pie.",
                "Aunt Rita set the pie on the table.": "This one is tricky. Aunt Rita puts the pie on the table. But the sentence is about her, not Uncle Ray."
              },
              why: "The paragraph says Uncle Ray ate three big slices of the pie. It also says he asked Grandma to bake him one more. Both show that Uncle Ray loves the pie." }
          ]
        },
        {
          story: {
            title: "Slow Stretches in Bay Park",
            paragraphs: [
              "Every Sunday, Grandpa Lim did slow stretches in Bay Park with his friends. On a frosty morning, Ike went along for the first time. The friends raised their arms as slowly as falling leaves. Ike tugged at his hat and scratched his nose. Then he hopped from one foot to the other. Grandpa showed him how to breathe in slowly through his nose. Soon Ike stood as still as a tree. On the way home, Ike asked if he could come again next Sunday."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Ike tries something new. Click on the sentence from the paragraph that BEST shows that Ike LIKES the stretches.",
              answers: ["On the way home, Ike asked if he could come again next Sunday."],
              kinds: {
                "Every Sunday, Grandpa Lim did slow stretches in Bay Park with his friends.": 'wrongwho',
                "On a frosty morning, Ike went along for the first time.": 'notproof',
                "The friends raised their arms as slowly as falling leaves.": 'wrongwho',
                "Ike tugged at his hat and scratched his nose.": 'notproof',
                "Then he hopped from one foot to the other.": 'notproof',
                "Grandpa showed him how to breathe in slowly through his nose.": 'wrongwho',
                "Soon Ike stood as still as a tree.": 'notproof'
              },
              notes: {
                "Every Sunday, Grandpa Lim did slow stretches in Bay Park with his friends.": "This sentence is about Grandpa Lim and his friends, not Ike.",
                "On a frosty morning, Ike went along for the first time.": "This sentence tells when Ike went. It does not show how he feels about the stretches.",
                "The friends raised their arms as slowly as falling leaves.": "This sentence is about Grandpa's friends, not Ike.",
                "Ike tugged at his hat and scratched his nose.": "This sentence tells what Ike did at first. It does not show that he likes the stretches.",
                "Then he hopped from one foot to the other.": "This sentence tells how Ike moved around. It does not show that he likes the stretches.",
                "Grandpa showed him how to breathe in slowly through his nose.": "This sentence is about Grandpa, not Ike.",
                "Soon Ike stood as still as a tree.": "This one is tricky. Ike learns to stand still. But it does not show that he wants to do it again."
              },
              why: "The paragraph says Ike asked if he could come again next Sunday. You want to come back to things you like. That shows Ike likes the stretches." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Wiggly means you cannot keep still. Click on the TWO sentences from the paragraph that BEST show that Ike is WIGGLY at first. Both must prove it.",
              answers: ["Ike tugged at his hat and scratched his nose.", "Then he hopped from one foot to the other."],
              kinds: {
                "Every Sunday, Grandpa Lim did slow stretches in Bay Park with his friends.": 'wrongwho',
                "On a frosty morning, Ike went along for the first time.": 'notproof',
                "The friends raised their arms as slowly as falling leaves.": 'wrongwho',
                "Grandpa showed him how to breathe in slowly through his nose.": 'wrongwho',
                "Soon Ike stood as still as a tree.": 'opposite',
                "On the way home, Ike asked if he could come again next Sunday.": 'notproof'
              },
              notes: {
                "Every Sunday, Grandpa Lim did slow stretches in Bay Park with his friends.": "This sentence is about Grandpa Lim and his friends, not Ike.",
                "On a frosty morning, Ike went along for the first time.": "This sentence tells when Ike first went. It does not show that he is wiggly.",
                "The friends raised their arms as slowly as falling leaves.": "This sentence is about Grandpa's friends. They move slowly. It is not about Ike.",
                "Grandpa showed him how to breathe in slowly through his nose.": "This sentence is about Grandpa, not Ike.",
                "Soon Ike stood as still as a tree.": "This sentence shows Ike standing still. That is the opposite of wiggly.",
                "On the way home, Ike asked if he could come again next Sunday.": "This sentence tells what Ike asked at the end. It does not show that he is wiggly."
              },
              why: "The paragraph says Ike tugged at his hat and scratched his nose. It also says he hopped from one foot to the other. Both show that Ike is wiggly at first." }
          ]
        },
        {
          story: {
            title: "A Leaf Pile by the Fence",
            paragraphs: [
              "Cora and her cousins raked the leaves in the little park on Cork Street. They pushed the leaves into one pile by the fence. The pile was taller than Cora's little cousin, Ned. Cora ran and jumped right into the middle. Ned stood at the edge and shook his head. He hugged his rake and took a step back. Cora held out her hand and counted to three with him. Ned jumped in, and leaves flew up all around them."
            ]
          },
          items: [
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
              q: "Think about the size of the pile. Click on the sentence from the paragraph that BEST shows that the leaf pile is BIG.",
              answers: ["The pile was taller than Cora's little cousin, Ned."],
              kinds: {
                "Cora and her cousins raked the leaves in the little park on Cork Street.": 'notproof',
                "They pushed the leaves into one pile by the fence.": 'notproof',
                "Cora ran and jumped right into the middle.": 'notproof',
                "Ned stood at the edge and shook his head.": 'notproof',
                "He hugged his rake and took a step back.": 'notproof',
                "Cora held out her hand and counted to three with him.": 'notproof',
                "Ned jumped in, and leaves flew up all around them.": 'notproof'
              },
              notes: {
                "Cora and her cousins raked the leaves in the little park on Cork Street.": "This sentence tells who raked the leaves. It does not show how big the pile is.",
                "They pushed the leaves into one pile by the fence.": "This one is tricky. It tells that they made one pile. But it does not show how big the pile is.",
                "Cora ran and jumped right into the middle.": "This sentence tells what Cora did. It does not show how big the pile is.",
                "Ned stood at the edge and shook his head.": "This sentence is about Ned at the edge. It does not show how big the pile is.",
                "He hugged his rake and took a step back.": "This sentence tells what Ned did with his rake. It does not show how big the pile is.",
                "Cora held out her hand and counted to three with him.": "This sentence tells what Cora did for Ned. It does not show how big the pile is.",
                "Ned jumped in, and leaves flew up all around them.": "This sentence tells about the jump. It does not show how big the pile is."
              },
              why: "The paragraph says the pile was taller than Ned. Ned is little, but the pile was even taller. That shows the leaf pile is big." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2, para: 1,
              q: "Scared means afraid. Click on the TWO sentences from the paragraph that BEST show that Ned is SCARED to jump at first. Both must prove it.",
              answers: ["Ned stood at the edge and shook his head.", "He hugged his rake and took a step back."],
              kinds: {
                "Cora and her cousins raked the leaves in the little park on Cork Street.": 'notproof',
                "They pushed the leaves into one pile by the fence.": 'notproof',
                "The pile was taller than Cora's little cousin, Ned.": 'notproof',
                "Cora ran and jumped right into the middle.": 'wrongwho',
                "Cora held out her hand and counted to three with him.": 'wrongwho',
                "Ned jumped in, and leaves flew up all around them.": 'opposite'
              },
              notes: {
                "Cora and her cousins raked the leaves in the little park on Cork Street.": "This sentence tells who raked the leaves. It does not show how Ned feels.",
                "They pushed the leaves into one pile by the fence.": "This sentence tells where the pile was. It does not show how Ned feels.",
                "The pile was taller than Cora's little cousin, Ned.": "This one is tricky. A tall pile is WHY Ned might be scared. But this sentence does not show how he feels.",
                "Cora ran and jumped right into the middle.": "This sentence is about Cora, not Ned.",
                "Cora held out her hand and counted to three with him.": "This sentence is about Cora, not Ned.",
                "Ned jumped in, and leaves flew up all around them.": "This sentence shows Ned jumping in at the end. That is the opposite of scared."
              },
              why: "The paragraph says Ned stood at the edge and shook his head. It also says he hugged his rake and took a step back. Both show that Ned is scared to jump at first." }
          ]
        }
      ]
    }
  ]
};
