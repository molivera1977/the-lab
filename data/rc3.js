/* ═══════════════════════════════════════════════════════
   THE LAB · data/rc3.js — Reading for Meaning, lesson RC3: Click the Sentences
   Skill: Evidence selection (hot text, like the test's "Click on the TWO sentences").
   Teaches: how to click (tap = yellow, tap again = take it back, then That's My Answer!),
   and that TWO means BOTH sentences must prove the idea (one right + one wrong = no point).
   Shape: tools/CONTENT-SPEC-READING.md (RC3 plan). Checked by tools/check-reading.js RC3.
   The right sentences are listed in `answers`; every other clickable sentence has a kind + a note.
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RC3 = {
  teach: {
    story: {
      title: "Milk from Mr. Vance's Store",
      paragraphs: [
        "Mom needed milk for dinner, so Yara walked to the corner store. Her little brother Zeke came along. Red and brown leaves danced down the sidewalk. Zeke blew on his hands to warm them.",
        "The store was on the other side of a busy street. At the corner, Yara held Zeke by the hand. She looked both ways two times before they crossed. A city bus rumbled past them with its lights on. Zeke waved at the people in the bus windows.",
        "Inside, Yara found the milk in the back. Zeke picked out a red apple.",
        "Yara put the milk and the apple on the counter. Mr. Vance took her money and gave her the change. Yara counted the money in her hand. She handed back the extra dollar that was not hers. Mr. Vance put the milk in a paper bag.",
        "On the walk home, the sun went down. Their breath made little white clouds in the air. Zeke carried the apple, and Yara carried the milk."
      ]
    },
    flow: [
      { kind: 'watch', id: 'W1', title: 'How to click',
        lines: [
          "Today you will click on sentences in a passage.",
          "To click, tap a sentence. It turns yellow. That means you picked it.",
          "Did you change your mind? Tap the sentence again. The yellow goes away.",
          "When you are sure, tap That's My Answer!",
          "Some questions say, Click on the sentence. Then you pick just one.",
          "Some questions say, Click on the TWO sentences. Then you pick two.",
          "Some tests say, Choose TWO. That means the same thing. Pick two.",
          "With TWO, both sentences must prove the idea. One right and one wrong gets no point.",
          "Here is an example. The idea is that Sam is kind.",
          "Sam shares his snack. Sam holds the door for a friend. Both show that Sam is kind. Click both, and you get the point.",
          "Now say you click \"Sam shares his snack\" and \"Sam eats lunch.\" Eating lunch does not show that Sam is kind. So you get no point.",
          "Remember, BEST supports means it proves the idea the most."
        ] },
      { kind: 'watch', id: 'W2', title: 'Watch me find the TWO',
        lines: [
          "Let's do one together. Here is the question.",
          "The passage shows that Yara is CAREFUL. Click on the TWO sentences in paragraph 2 that BEST support this idea.",
          "Step 1. Say the idea. Yara is careful. She makes sure that she and Zeke are safe.",
          "Step 2. Find the paragraph. Paragraph 2 tells how they cross a busy street.",
          "Step 3. Check each sentence. Ask, does this SHOW that Yara is careful?",
          "The store was on the other side of a busy street. That tells where the store is. It does not show that Yara is careful.",
          "Yara held Zeke by the hand at the corner. Yes! That keeps Zeke safe.",
          "She looked both ways two times. Yes! That is careful too.",
          "A city bus rumbled past them. That is true. But it does not show that Yara is careful.",
          "Zeke waved at the people on the bus. That is about Zeke, not Yara.",
          "So we click the TWO sentences that light up. Both prove the idea. Then we tap That's My Answer!"
        ],
        lit: ["At the corner, Yara held Zeke by the hand.", "She looked both ways two times before they crossed."] },
      { kind: 'step', id: 'S1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 4,
        q: "Read paragraph 4. An honest person does not keep what is not theirs. Click on the sentence in paragraph 4 that BEST shows that Yara is HONEST.",
        answers: ["She handed back the extra dollar that was not hers."],
        kinds: {
          "Yara put the milk and the apple on the counter.": 'notproof',
          "Mr. Vance took her money and gave her the change.": 'wrongwho',
          "Yara counted the money in her hand.": 'notproof',
          "Mr. Vance put the milk in a paper bag.": 'wrongwho'
        },
        notes: {
          "Yara put the milk and the apple on the counter.": "Paragraph 4 says Yara put the milk on the counter. That is true. But it does not show she is honest.",
          "Mr. Vance took her money and gave her the change.": "In paragraph 4, this sentence is about Mr. Vance, not Yara.",
          "Yara counted the money in her hand.": "Paragraph 4 says Yara counted the money. That is how she saw the extra dollar. But counting does not show she is honest.",
          "Mr. Vance put the milk in a paper bag.": "In paragraph 4, this sentence is about Mr. Vance, not Yara."
        },
        why: "Paragraph 4 says Yara handed back the extra dollar that was not hers. She did not keep it. That shows Yara is honest." },
      { kind: 'step', id: 'S2', type: 'hot', skill: 'Evidence selection', pick: 2,
        q: "The passage shows that the day is COLD. Click on the TWO sentences from the passage that BEST support this idea.",
        list: [
          "Mom needed milk for dinner, so Yara walked to the corner store.",
          "Zeke blew on his hands to warm them.",
          "Inside, Yara found the milk in the back.",
          "Yara counted the money in her hand.",
          "Their breath made little white clouds in the air.",
          "Zeke carried the apple, and Yara carried the milk."
        ],
        answers: ["Zeke blew on his hands to warm them.", "Their breath made little white clouds in the air."],
        kinds: {
          "Mom needed milk for dinner, so Yara walked to the corner store.": 'notproof',
          "Inside, Yara found the milk in the back.": 'notproof',
          "Yara counted the money in her hand.": 'notproof',
          "Zeke carried the apple, and Yara carried the milk.": 'notproof'
        },
        notes: {
          "Mom needed milk for dinner, so Yara walked to the corner store.": "Paragraph 1 tells why Yara went to the store. It does not show that the day is cold.",
          "Inside, Yara found the milk in the back.": "Paragraph 3 tells where the milk was. It does not show that the day is cold.",
          "Yara counted the money in her hand.": "In paragraph 4, this sentence is about the money. It does not show that the day is cold.",
          "Zeke carried the apple, and Yara carried the milk.": "Paragraph 5 tells who carried what. It does not show that the day is cold."
        },
        why: "Paragraph 1 says Zeke blew on his hands to warm them. Paragraph 5 says their breath made white clouds. You see your breath only when it is cold. Both sentences show the day is cold." },
      { kind: 'watch', id: 'W3', title: 'The steps',
        lines: [
          "Here are the steps for a click question.",
          "Step 1. Say the idea in your own words.",
          "Step 2. Find the part of the passage that talks about the idea.",
          "Step 3. Read each sentence. Ask, does this sentence SHOW the idea?",
          "Step 4. Click the sentence that shows it. If the question says TWO, click two.",
          "Check both. If one does not prove the idea, change it.",
          "To change a pick, tap it again. Then tap the right one.",
          "When you are sure, tap That's My Answer!",
          "Now you try."
        ] }
    ]
  },

  versions: [
    /* ───────── Version 1 ───────── */
    {
      pre: {
        story: {
          title: "Clean-Up Day at Willow Park",
          paragraphs: [
            "On Saturday, Quinn and Dad walked to Willow Park for clean-up day. Quinn ran ahead so she could get the first trash grabber. Mr. Sawyer handed out big green bags. Lots of neighbors had come to help.",
            "Quinn picked up cans and wrappers under every bench. She filled one bag and then started on a second one. Dad raked dry leaves off the path. A squirrel ran up a tree with an acorn. The sun peeked out from behind a cloud.",
            "At noon, Quinn carried her last bag to the gate. Quinn's arms ached from lifting so many heavy bags.",
            "Quinn sat down on a bench and closed her eyes. The park looked clean and bright again."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 1,
            q: "Read paragraph 1. Click on the sentence in paragraph 1 that BEST shows that Quinn is EXCITED about clean-up day.",
            answers: ["Quinn ran ahead so she could get the first trash grabber."],
            kinds: {
              "On Saturday, Quinn and Dad walked to Willow Park for clean-up day.": 'notproof',
              "Mr. Sawyer handed out big green bags.": 'wrongwho',
              "Lots of neighbors had come to help.": 'wrongwho'
            },
            notes: {
              "On Saturday, Quinn and Dad walked to Willow Park for clean-up day.": "Paragraph 1 tells when and where they went. It does not show how Quinn feels.",
              "Mr. Sawyer handed out big green bags.": "In paragraph 1, this sentence is about Mr. Sawyer, not Quinn.",
              "Lots of neighbors had come to help.": "In paragraph 1, this sentence is about the neighbors, not Quinn."
            },
            why: "Paragraph 1 says Quinn ran ahead to get the first trash grabber. She could not wait to start. That shows Quinn is excited." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that Quinn is TIRED at the end. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "Lots of neighbors had come to help.",
              "Dad raked dry leaves off the path.",
              "The sun peeked out from behind a cloud.",
              "Quinn's arms ached from lifting so many heavy bags.",
              "Quinn sat down on a bench and closed her eyes.",
              "The park looked clean and bright again."
            ],
            answers: ["Quinn's arms ached from lifting so many heavy bags.", "Quinn sat down on a bench and closed her eyes."],
            kinds: {
              "Lots of neighbors had come to help.": 'wrongwho',
              "Dad raked dry leaves off the path.": 'wrongwho',
              "The sun peeked out from behind a cloud.": 'notproof',
              "The park looked clean and bright again.": 'notproof'
            },
            notes: {
              "Lots of neighbors had come to help.": "In paragraph 1, this sentence is about the neighbors, not Quinn.",
              "Dad raked dry leaves off the path.": "In paragraph 2, this sentence is about Dad, not Quinn.",
              "The sun peeked out from behind a cloud.": "Paragraph 2 tells about the sun. It does not show that Quinn is tired.",
              "The park looked clean and bright again.": "Paragraph 4 tells how the park looked. It does not show how Quinn feels."
            },
            why: "Paragraph 3 says Quinn's arms ached from lifting heavy bags. Paragraph 4 says she sat on a bench and closed her eyes. Both show that Quinn is tired." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 2,
            q: "Read paragraph 2. The passage shows that Quinn works HARD. Click on the TWO sentences in paragraph 2 that BEST support this idea.",
            answers: ["Quinn picked up cans and wrappers under every bench.", "She filled one bag and then started on a second one."],
            kinds: {
              "Dad raked dry leaves off the path.": 'wrongwho',
              "A squirrel ran up a tree with an acorn.": 'notproof',
              "The sun peeked out from behind a cloud.": 'notproof'
            },
            notes: {
              "Dad raked dry leaves off the path.": "In paragraph 2, this sentence is about Dad, not Quinn.",
              "A squirrel ran up a tree with an acorn.": "In paragraph 2, this sentence is about a squirrel. It does not show that Quinn works hard.",
              "The sun peeked out from behind a cloud.": "In paragraph 2, this sentence tells about the sun. It does not show that Quinn works hard."
            },
            why: "Paragraph 2 says Quinn picked up trash under every bench. It also says she filled one bag and started a second one. Both show that Quinn works hard." }
        ]
      },
      turn: [
        {
          story: {
            title: "Bus 22 to the Big Tree",
            paragraphs: [
              "Ruth had never ridden a city bus before. On Friday night, Grandpa took her downtown to see the holiday tree. Ruth's heart beat fast as they waited at the bus stop.",
              "When the bus came, its doors folded open with a hiss. Ruth held Grandpa's coat sleeve very tight. Grandpa paid for both of them at the front. Then they found two empty seats near the back.",
              "Ruth pressed her nose against the frosty window. Ruth asked what was inside each tall building they passed.",
              "At the next stop, a woman climbed on with a baby and a heavy bag. Every seat on the bus was taken. Ruth stood up and gave the woman her seat. She held the heavy bag while the woman sat down. The bus rolled on past shiny store windows.",
              "Downtown, the tree glowed with a thousand colored lights. Ruth tipped her head way back to see the star on top. It took Ruth forty steps to walk all the way around the tree. Grandpa bought them hot cocoa from a little cart.",
              "On the ride home, Ruth asked the bus driver how he knew all the stops. This time, she did not need to hold Grandpa's sleeve."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Ruth is NERVOUS.",
              answers: ["Ruth held Grandpa's coat sleeve very tight."],
              kinds: {
                "When the bus came, its doors folded open with a hiss.": 'notproof',
                "Grandpa paid for both of them at the front.": 'wrongwho',
                "Then they found two empty seats near the back.": 'notproof'
              },
              notes: {
                "When the bus came, its doors folded open with a hiss.": "Paragraph 2 tells how the bus doors opened. It does not show how Ruth feels.",
                "Grandpa paid for both of them at the front.": "In paragraph 2, this sentence is about Grandpa, not Ruth.",
                "Then they found two empty seats near the back.": "Paragraph 2 tells where they sat. It does not show that Ruth is nervous."
              },
              why: "Paragraph 2 says Ruth held Grandpa's coat sleeve very tight. People hold on tight when they feel nervous. So that sentence shows Ruth is nervous." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Ruth is CURIOUS. She wants to know about things. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Ruth had never ridden a city bus before.",
                "Grandpa paid for both of them at the front.",
                "Ruth asked what was inside each tall building they passed.",
                "Downtown, the tree glowed with a thousand colored lights.",
                "Grandpa bought them hot cocoa from a little cart.",
                "On the ride home, Ruth asked the bus driver how he knew all the stops."
              ],
              answers: ["Ruth asked what was inside each tall building they passed.", "On the ride home, Ruth asked the bus driver how he knew all the stops."],
              kinds: {
                "Ruth had never ridden a city bus before.": 'notproof',
                "Grandpa paid for both of them at the front.": 'wrongwho',
                "Downtown, the tree glowed with a thousand colored lights.": 'notproof',
                "Grandpa bought them hot cocoa from a little cart.": 'wrongwho'
              },
              notes: {
                "Ruth had never ridden a city bus before.": "Paragraph 1 says this is Ruth's first bus ride. That is true. But it does not show that she asks about things.",
                "Grandpa paid for both of them at the front.": "In paragraph 2, this sentence is about Grandpa, not Ruth.",
                "Downtown, the tree glowed with a thousand colored lights.": "Paragraph 5 tells about the tree. It does not show that Ruth wants to know things.",
                "Grandpa bought them hot cocoa from a little cart.": "In paragraph 5, this sentence is about Grandpa, not Ruth."
              },
              why: "Paragraph 3 says Ruth asked what was inside each building. Paragraph 6 says she asked the driver how he knew the stops. Both show that Ruth wants to know about things." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that Ruth is KIND. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["Ruth stood up and gave the woman her seat.", "She held the heavy bag while the woman sat down."],
              kinds: {
                "At the next stop, a woman climbed on with a baby and a heavy bag.": 'wrongwho',
                "Every seat on the bus was taken.": 'notproof',
                "The bus rolled on past shiny store windows.": 'notproof'
              },
              notes: {
                "At the next stop, a woman climbed on with a baby and a heavy bag.": "In paragraph 4, this sentence is about the woman, not Ruth.",
                "Every seat on the bus was taken.": "Paragraph 4 says the bus was full. That tells about the bus, not about Ruth.",
                "The bus rolled on past shiny store windows.": "In paragraph 4, this sentence tells where the bus went. It does not show that Ruth is kind."
              },
              why: "Paragraph 4 says Ruth gave the woman her seat. It also says Ruth held the heavy bag for her. Both show that Ruth is kind." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the holiday tree is very BIG. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Ruth's heart beat fast as they waited at the bus stop.",
                "Then they found two empty seats near the back.",
                "Every seat on the bus was taken.",
                "Ruth tipped her head way back to see the star on top.",
                "It took Ruth forty steps to walk all the way around the tree.",
                "This time, she did not need to hold Grandpa's sleeve."
              ],
              answers: ["Ruth tipped her head way back to see the star on top.", "It took Ruth forty steps to walk all the way around the tree."],
              kinds: {
                "Ruth's heart beat fast as they waited at the bus stop.": 'notproof',
                "Then they found two empty seats near the back.": 'notproof',
                "Every seat on the bus was taken.": 'notproof',
                "This time, she did not need to hold Grandpa's sleeve.": 'notproof'
              },
              notes: {
                "Ruth's heart beat fast as they waited at the bus stop.": "Paragraph 1 tells how Ruth feels. It does not tell about the tree.",
                "Then they found two empty seats near the back.": "In paragraph 2, this sentence is about the bus seats, not the tree.",
                "Every seat on the bus was taken.": "In paragraph 4, this sentence is about the bus, not the tree.",
                "This time, she did not need to hold Grandpa's sleeve.": "Paragraph 6 tells how Ruth feels on the ride home. It does not tell about the tree."
              },
              why: "Paragraph 5 says Ruth tipped her head way back to see the top. It also says it took her forty steps to walk around the tree. Both show that the tree is very big." }
          ]
        },
        {
          story: {
            title: "Keeping Score at the Bowling Alley",
            paragraphs: [
              "On a cold Sunday afternoon, Aunt Sue took Seth bowling. Inside, the bowling alley was warm and bright. Long, shiny lanes stretched all the way to the pins.",
              "Seth picked out a green ball with three finger holes. Seth needed both hands just to lift the green ball. Aunt Sue tied the laces on her red and blue shoes. Loud music played from speakers on the ceiling.",
              "Seth rolled first, and the ball landed on the lane with a loud thump. The ball rolled slowly and knocked over six pins. A boy in the next lane was bowling all by himself. Seth waved and asked the boy to join their game.",
              "Then the computer screen above their lane stopped working. Seth got a pencil and a paper score card from the front desk. Seth added up all the scores in his head. Every number Seth wrote on the card was correct. Pins crashed and rattled in the other lanes.",
              "When the boy had to leave, Seth gave him a high five. Aunt Sue took a picture of Seth holding the score card. Aunt Sue told the man at the front desk that Seth kept score all by himself. Seth grinned all the way home."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that the green ball is HEAVY.",
              answers: ["Seth needed both hands just to lift the green ball."],
              kinds: {
                "Seth picked out a green ball with three finger holes.": 'notproof',
                "Aunt Sue tied the laces on her red and blue shoes.": 'notproof',
                "Loud music played from speakers on the ceiling.": 'notproof'
              },
              notes: {
                "Seth picked out a green ball with three finger holes.": "In paragraph 2, this sentence tells what the ball looks like. It does not show that the ball is heavy.",
                "Aunt Sue tied the laces on her red and blue shoes.": "In paragraph 2, this sentence is about Aunt Sue's shoes. It does not show that the ball is heavy.",
                "Loud music played from speakers on the ceiling.": "In paragraph 2, this sentence tells about the music. It does not show that the ball is heavy."
              },
              why: "Paragraph 2 says Seth needed both hands just to lift the green ball. A light ball takes only one hand. So the green ball is heavy." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Seth is FRIENDLY. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Inside, the bowling alley was warm and bright.",
                "Seth picked out a green ball with three finger holes.",
                "A boy in the next lane was bowling all by himself.",
                "Seth waved and asked the boy to join their game.",
                "Pins crashed and rattled in the other lanes.",
                "When the boy had to leave, Seth gave him a high five."
              ],
              answers: ["Seth waved and asked the boy to join their game.", "When the boy had to leave, Seth gave him a high five."],
              kinds: {
                "Inside, the bowling alley was warm and bright.": 'notproof',
                "Seth picked out a green ball with three finger holes.": 'notproof',
                "A boy in the next lane was bowling all by himself.": 'wrongwho',
                "Pins crashed and rattled in the other lanes.": 'notproof'
              },
              notes: {
                "Inside, the bowling alley was warm and bright.": "Paragraph 1 tells about the bowling alley. It does not show that Seth is friendly.",
                "Seth picked out a green ball with three finger holes.": "Paragraph 2 says Seth picked a ball. That is true. But it does not show that he is friendly.",
                "A boy in the next lane was bowling all by himself.": "In paragraph 3, this sentence is about the boy, not Seth.",
                "Pins crashed and rattled in the other lanes.": "In paragraph 4, this sentence tells about the pins. It does not show that Seth is friendly."
              },
              why: "Paragraph 3 says Seth asked the boy to join their game. Paragraph 5 says Seth gave the boy a high five when he had to leave. Both show that Seth is friendly." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that Seth is GOOD AT MATH. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["Seth added up all the scores in his head.", "Every number Seth wrote on the card was correct."],
              kinds: {
                "Then the computer screen above their lane stopped working.": 'notproof',
                "Seth got a pencil and a paper score card from the front desk.": 'notproof',
                "Pins crashed and rattled in the other lanes.": 'notproof'
              },
              notes: {
                "Then the computer screen above their lane stopped working.": "In paragraph 4, this sentence tells about the screen. It does not show what Seth can do.",
                "Seth got a pencil and a paper score card from the front desk.": "Paragraph 4 says Seth got a pencil and a card. That is true. But getting a pencil does not show he is good at math.",
                "Pins crashed and rattled in the other lanes.": "In paragraph 4, this sentence is about the other lanes. It does not show that Seth is good at math."
              },
              why: "Paragraph 4 says Seth added up all the scores in his head. It also says every number he wrote was correct. Both show that Seth is good at math." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Aunt Sue is PROUD of Seth. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "On a cold Sunday afternoon, Aunt Sue took Seth bowling.",
                "Aunt Sue tied the laces on her red and blue shoes.",
                "Then the computer screen above their lane stopped working.",
                "Aunt Sue took a picture of Seth holding the score card.",
                "Aunt Sue told the man at the front desk that Seth kept score all by himself.",
                "Seth grinned all the way home."
              ],
              answers: ["Aunt Sue took a picture of Seth holding the score card.", "Aunt Sue told the man at the front desk that Seth kept score all by himself."],
              kinds: {
                "On a cold Sunday afternoon, Aunt Sue took Seth bowling.": 'notproof',
                "Aunt Sue tied the laces on her red and blue shoes.": 'notproof',
                "Then the computer screen above their lane stopped working.": 'notproof',
                "Seth grinned all the way home.": 'wrongwho'
              },
              notes: {
                "On a cold Sunday afternoon, Aunt Sue took Seth bowling.": "Paragraph 1 tells when they went bowling. It does not show that Aunt Sue is proud.",
                "Aunt Sue tied the laces on her red and blue shoes.": "Paragraph 2 says Aunt Sue tied her shoes. That does not show she is proud of Seth.",
                "Then the computer screen above their lane stopped working.": "Paragraph 4 tells about the screen. It does not show how Aunt Sue feels.",
                "Seth grinned all the way home.": "Paragraph 5 says Seth grinned. That shows how Seth feels, not Aunt Sue."
              },
              why: "Paragraph 5 says Aunt Sue took a picture of Seth with the score card. It also says she told the man at the front desk that Seth kept score by himself. Both show that Aunt Sue is proud of Seth." }
          ]
        }
      ]
    },

    /* ───────── Version 2 ───────── */
    {
      pre: {
        story: {
          title: "The Best Hiding Spot",
          paragraphs: [
            "On a cold Sunday, Ollie's cousins came over to play hide-and-seek. His cousin Rae shut her eyes and counted to fifty.",
            "Ollie tiptoed down the hall in his socks. In the back room, the dryer buzzed. Dad had dumped a pile of warm towels into a big basket. Ollie climbed in and pulled a towel over his head.",
            "Rae looked under every bed in the house. Then she opened each kitchen cupboard, even the tiny ones. Her little brother, Kip, sat on the couch and ate crackers. Aunt Peg made popcorn on the stove. A truck honked out on the street.",
            "At last, Rae heard a soft snore from the back room. She lifted the top towel. Ollie was curled up in a ball with his eyes shut. Everyone laughed. Then it was Ollie's turn to count."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Ollie is trying to be QUIET.",
            answers: ["Ollie tiptoed down the hall in his socks."],
            kinds: {
              "In the back room, the dryer buzzed.": 'notproof',
              "Dad had dumped a pile of warm towels into a big basket.": 'wrongwho',
              "Ollie climbed in and pulled a towel over his head.": 'notproof'
            },
            notes: {
              "In the back room, the dryer buzzed.": "In paragraph 2, this sentence is about the dryer, not Ollie.",
              "Dad had dumped a pile of warm towels into a big basket.": "In paragraph 2, this sentence is about Dad, not Ollie.",
              "Ollie climbed in and pulled a towel over his head.": "Paragraph 2 says Ollie hid under a towel. That shows where he hid. It does not show that he is quiet."
            },
            why: "Paragraph 2 says Ollie tiptoed down the hall in his socks. Tiptoeing in socks makes almost no sound. So that sentence shows Ollie is trying to be quiet." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that Ollie FELL ASLEEP in his hiding spot. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "On a cold Sunday, Ollie's cousins came over to play hide-and-seek.",
              "In the back room, the dryer buzzed.",
              "Her little brother, Kip, sat on the couch and ate crackers.",
              "At last, Rae heard a soft snore from the back room.",
              "Ollie was curled up in a ball with his eyes shut.",
              "Then it was Ollie's turn to count."
            ],
            answers: ["At last, Rae heard a soft snore from the back room.", "Ollie was curled up in a ball with his eyes shut."],
            kinds: {
              "On a cold Sunday, Ollie's cousins came over to play hide-and-seek.": 'notproof',
              "In the back room, the dryer buzzed.": 'notproof',
              "Her little brother, Kip, sat on the couch and ate crackers.": 'wrongwho',
              "Then it was Ollie's turn to count.": 'notproof'
            },
            notes: {
              "On a cold Sunday, Ollie's cousins came over to play hide-and-seek.": "Paragraph 1 tells what game the cousins played. It does not show that Ollie fell asleep.",
              "In the back room, the dryer buzzed.": "Paragraph 2 tells about the dryer. It does not show that Ollie fell asleep.",
              "Her little brother, Kip, sat on the couch and ate crackers.": "In paragraph 3, this sentence is about Kip, not Ollie.",
              "Then it was Ollie's turn to count.": "Paragraph 4 tells what happens after Rae finds Ollie. It does not show that he fell asleep."
            },
            why: "Paragraph 4 says Rae heard a soft snore. It also says Ollie's eyes were shut. People snore and shut their eyes when they sleep. Both show that Ollie fell asleep." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
            q: "Read paragraph 3. The passage shows that Rae looks HARD for Ollie. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
            answers: ["Rae looked under every bed in the house.", "Then she opened each kitchen cupboard, even the tiny ones."],
            kinds: {
              "Her little brother, Kip, sat on the couch and ate crackers.": 'wrongwho',
              "Aunt Peg made popcorn on the stove.": 'wrongwho',
              "A truck honked out on the street.": 'notproof'
            },
            notes: {
              "Her little brother, Kip, sat on the couch and ate crackers.": "In paragraph 3, this sentence is about Kip, not Rae.",
              "Aunt Peg made popcorn on the stove.": "In paragraph 3, this sentence is about Aunt Peg, not Rae.",
              "A truck honked out on the street.": "In paragraph 3, this sentence tells about a truck. It does not show Rae looking for Ollie."
            },
            why: "Paragraph 3 says Rae looked under every bed. It also says she opened each kitchen cupboard, even the tiny ones. Both show that Rae looks hard for Ollie." }
        ]
      },
      turn: [
        {
          story: {
            title: "A Card with Her Name on It",
            paragraphs: [
              "Uma had wanted her own library card for a long time. On Tuesday after school, Mom took her to the big library on Rand Avenue.",
              "A tall man at the front desk said hello to Uma. Uma hid behind Mom and looked down at her shoes. Mom handed the man a form with their address on it. Uma stood on her tiptoes to see the computer.",
              "Soon the man gave Uma a blue card with her name on it. Uma said thank you in a tiny voice. Then she held the card up high for Mom to see. She showed the new card to a girl by the door too. A little boy at the next table read a comic book.",
              "Next, Mom and Uma walked to the animal books. Uma pulled every shark book off the low shelf. Uma already knew the names of ten kinds of sharks. Uma carried the books with both hands so she would not drop them.",
              "Uma checked out four books with her new card. At home, Uma wiped her hands before she turned each page. That night, Uma read until Mom turned off the light."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Uma is SHY.",
              answers: ["Uma hid behind Mom and looked down at her shoes."],
              kinds: {
                "A tall man at the front desk said hello to Uma.": 'wrongwho',
                "Mom handed the man a form with their address on it.": 'wrongwho',
                "Uma stood on her tiptoes to see the computer.": 'notproof'
              },
              notes: {
                "A tall man at the front desk said hello to Uma.": "In paragraph 2, this sentence is about the man at the desk, not Uma.",
                "Mom handed the man a form with their address on it.": "In paragraph 2, this sentence is about Mom, not Uma.",
                "Uma stood on her tiptoes to see the computer.": "Paragraph 2 says Uma stood on her tiptoes to see. That shows she wants to look. It does not show that she is shy."
              },
              why: "Paragraph 2 says Uma hid behind Mom and looked down at her shoes. A shy kid hides when a new person talks to her. So that sentence shows Uma is shy." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Uma LOVES sharks. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Uma had wanted her own library card for a long time.",
                "Mom handed the man a form with their address on it.",
                "Next, Mom and Uma walked to the animal books.",
                "Uma pulled every shark book off the low shelf.",
                "Uma already knew the names of ten kinds of sharks.",
                "Uma checked out four books with her new card."
              ],
              answers: ["Uma pulled every shark book off the low shelf.", "Uma already knew the names of ten kinds of sharks."],
              kinds: {
                "Uma had wanted her own library card for a long time.": 'notproof',
                "Mom handed the man a form with their address on it.": 'wrongwho',
                "Next, Mom and Uma walked to the animal books.": 'notproof',
                "Uma checked out four books with her new card.": 'notproof'
              },
              notes: {
                "Uma had wanted her own library card for a long time.": "Paragraph 1 is about the library card, not sharks.",
                "Mom handed the man a form with their address on it.": "In paragraph 2, this sentence is about Mom, not Uma.",
                "Next, Mom and Uma walked to the animal books.": "Paragraph 4 says they walked to the animal books. That sentence does not name sharks.",
                "Uma checked out four books with her new card.": "Paragraph 5 says Uma got four books. That sentence does not say they were about sharks."
              },
              why: "Paragraph 4 says Uma pulled every shark book off the shelf. It also says she knew the names of ten kinds of sharks. Both show that Uma loves sharks." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 3,
              q: "Read paragraph 3. The passage shows that Uma is PROUD of her new card. Click on the TWO sentences in paragraph 3 that BEST support this idea.",
              answers: ["Then she held the card up high for Mom to see.", "She showed the new card to a girl by the door too."],
              kinds: {
                "Soon the man gave Uma a blue card with her name on it.": 'notproof',
                "Uma said thank you in a tiny voice.": 'notproof',
                "A little boy at the next table read a comic book.": 'wrongwho'
              },
              notes: {
                "Soon the man gave Uma a blue card with her name on it.": "In paragraph 3, this sentence tells what the man did. It does not show how Uma feels.",
                "Uma said thank you in a tiny voice.": "Paragraph 3 says Uma said thank you in a tiny voice. That shows she is shy, not proud.",
                "A little boy at the next table read a comic book.": "In paragraph 3, this sentence is about a boy, not Uma."
              },
              why: "Paragraph 3 says Uma held the card up high for Mom to see. It also says she showed the card to a girl by the door. When you are proud, you want to show it. Both sentences show that." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Uma is CAREFUL with the books. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "On Tuesday after school, Mom took her to the big library on Rand Avenue.",
                "Uma hid behind Mom and looked down at her shoes.",
                "A little boy at the next table read a comic book.",
                "Uma carried the books with both hands so she would not drop them.",
                "At home, Uma wiped her hands before she turned each page.",
                "That night, Uma read until Mom turned off the light."
              ],
              answers: ["Uma carried the books with both hands so she would not drop them.", "At home, Uma wiped her hands before she turned each page."],
              kinds: {
                "On Tuesday after school, Mom took her to the big library on Rand Avenue.": 'notproof',
                "Uma hid behind Mom and looked down at her shoes.": 'notproof',
                "A little boy at the next table read a comic book.": 'wrongwho',
                "That night, Uma read until Mom turned off the light.": 'notproof'
              },
              notes: {
                "On Tuesday after school, Mom took her to the big library on Rand Avenue.": "Paragraph 1 tells when they went. It does not show that Uma is careful.",
                "Uma hid behind Mom and looked down at her shoes.": "Paragraph 2 shows that Uma is shy. It does not show that she is careful with books.",
                "A little boy at the next table read a comic book.": "In paragraph 3, this sentence is about a boy, not Uma.",
                "That night, Uma read until Mom turned off the light.": "Paragraph 5 says Uma read late. It does not show that she is careful."
              },
              why: "Paragraph 4 says Uma carried the books with both hands. Paragraph 5 says she wiped her hands before she turned each page. Both show that Uma is careful with the books." }
          ]
        },
        {
          story: {
            title: "The Rake Next Door",
            paragraphs: [
              "Each fall, Mr. Quade raked the leaves in his yard by himself. This year, his big maple tree dropped more leaves than ever. Victor lived in the house next door.",
              "On Saturday, Victor saw Mr. Quade on his porch. Mr. Quade walked slowly with one hand pressed on his back. Mr. Quade wore a green baseball cap. Leaves covered the yard like a brown blanket.",
              "Victor ran home, grabbed his own rake, and came right back.",
              "By lunch, there was one huge heap of leaves by the street. Then a gust of wind blew the heap all over the yard. Victor sighed and raked each leaf back again. Mr. Quade watched from a lawn chair on the porch. Victor's hands got sore, but he kept raking until the yard was clean.",
              "Mr. Quade held out a five dollar bill. Victor shook his head and said he just wanted to help. The next day, Mr. Quade left a plate of warm cookies on Victor's steps. Victor ate three cookies before dinner."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Mr. Quade's back HURTS.",
              answers: ["Mr. Quade walked slowly with one hand pressed on his back."],
              kinds: {
                "On Saturday, Victor saw Mr. Quade on his porch.": 'notproof',
                "Mr. Quade wore a green baseball cap.": 'notproof',
                "Leaves covered the yard like a brown blanket.": 'notproof'
              },
              notes: {
                "On Saturday, Victor saw Mr. Quade on his porch.": "In paragraph 2, this sentence tells what Victor saw. It does not show that Mr. Quade is hurt.",
                "Mr. Quade wore a green baseball cap.": "Paragraph 2 tells what Mr. Quade wore. It does not show that he is hurt.",
                "Leaves covered the yard like a brown blanket.": "In paragraph 2, this sentence tells about the leaves. It does not show that Mr. Quade is hurt."
              },
              why: "Paragraph 2 says Mr. Quade walked slowly with one hand pressed on his back. People walk like that when the back hurts." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Victor is KIND. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Each fall, Mr. Quade raked the leaves in his yard by himself.",
                "On Saturday, Victor saw Mr. Quade on his porch.",
                "Victor ran home, grabbed his own rake, and came right back.",
                "Then a gust of wind blew the heap all over the yard.",
                "Victor shook his head and said he just wanted to help."
              ],
              answers: ["Victor ran home, grabbed his own rake, and came right back.", "Victor shook his head and said he just wanted to help."],
              kinds: {
                "Each fall, Mr. Quade raked the leaves in his yard by himself.": 'wrongwho',
                "On Saturday, Victor saw Mr. Quade on his porch.": 'notproof',
                "Then a gust of wind blew the heap all over the yard.": 'notproof'
              },
              notes: {
                "Each fall, Mr. Quade raked the leaves in his yard by himself.": "In paragraph 1, this sentence is about Mr. Quade, not Victor.",
                "On Saturday, Victor saw Mr. Quade on his porch.": "Paragraph 2 says Victor saw Mr. Quade. Seeing someone does not show you are kind.",
                "Then a gust of wind blew the heap all over the yard.": "In paragraph 4, this sentence is about the wind, not Victor."
              },
              why: "Paragraph 3 says Victor ran home to get his rake and came right back. Paragraph 5 says he just wanted to help. Both show that Victor is kind." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that Victor does not GIVE UP. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["Victor sighed and raked each leaf back again.", "Victor's hands got sore, but he kept raking until the yard was clean."],
              kinds: {
                "By lunch, there was one huge heap of leaves by the street.": 'notproof',
                "Then a gust of wind blew the heap all over the yard.": 'notproof',
                "Mr. Quade watched from a lawn chair on the porch.": 'wrongwho'
              },
              notes: {
                "By lunch, there was one huge heap of leaves by the street.": "In paragraph 4, this sentence tells about the heap of leaves. It does not show Victor trying again.",
                "Then a gust of wind blew the heap all over the yard.": "In paragraph 4, this sentence tells about the wind. It is the problem, not what Victor did.",
                "Mr. Quade watched from a lawn chair on the porch.": "In paragraph 4, this sentence is about Mr. Quade, not Victor."
              },
              why: "Paragraph 4 says the wind blew the leaves, and Victor raked them back again. It also says his hands got sore, but he kept raking. Both show that Victor does not give up." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Mr. Quade is THANKFUL for Victor's help. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "This year, his big maple tree dropped more leaves than ever.",
                "Mr. Quade walked slowly with one hand pressed on his back.",
                "Mr. Quade watched from a lawn chair on the porch.",
                "Mr. Quade held out a five dollar bill.",
                "The next day, Mr. Quade left a plate of warm cookies on Victor's steps.",
                "Victor ate three cookies before dinner."
              ],
              answers: ["Mr. Quade held out a five dollar bill.", "The next day, Mr. Quade left a plate of warm cookies on Victor's steps."],
              kinds: {
                "This year, his big maple tree dropped more leaves than ever.": 'notproof',
                "Mr. Quade walked slowly with one hand pressed on his back.": 'notproof',
                "Mr. Quade watched from a lawn chair on the porch.": 'notproof',
                "Victor ate three cookies before dinner.": 'wrongwho'
              },
              notes: {
                "This year, his big maple tree dropped more leaves than ever.": "Paragraph 1 tells about the tree. It does not show how Mr. Quade feels.",
                "Mr. Quade walked slowly with one hand pressed on his back.": "Paragraph 2 shows that Mr. Quade's back hurts. It does not show that he is thankful.",
                "Mr. Quade watched from a lawn chair on the porch.": "Paragraph 4 says Mr. Quade watched. That does not show that he is thankful.",
                "Victor ate three cookies before dinner.": "In paragraph 5, this sentence is about Victor, not Mr. Quade."
              },
              why: "Paragraph 5 says Mr. Quade held out five dollars for Victor. It also says he left warm cookies on Victor's steps. Both are ways to say thank you." }
          ]
        }
      ]
    },

    /* ───────── Version 3 ───────── */
    {
      pre: {
        story: {
          title: "The Last Potato Dig",
          paragraphs: [
            "On a gray morning, Wren and Grandma walked to the community garden. The tomato plants in their bed were brown and dry. It was time to dig up the potatoes.",
            "Wren pushed her shovel into the soft dirt. Out came a potato as big as a softball. Wren gasped and dropped her shovel. Grandma brushed the dirt off with her glove.",
            "They dug until the bucket was full. By then, most of the other garden beds were empty.",
            "Mr. Yoder was pulling weeds in the bed next to theirs. Wren gave him the giant potato to take home. Then she put a bag of potatoes in the free food box by the gate. Grandma put the rest in the wagon. A cold wind blew dry leaves across the path."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Wren is SURPRISED.",
            answers: ["Wren gasped and dropped her shovel."],
            kinds: {
              "Wren pushed her shovel into the soft dirt.": 'notproof',
              "Out came a potato as big as a softball.": 'notproof',
              "Grandma brushed the dirt off with her glove.": 'wrongwho'
            },
            notes: {
              "Wren pushed her shovel into the soft dirt.": "In paragraph 2, this sentence tells what Wren did. It does not show how she feels.",
              "Out came a potato as big as a softball.": "Paragraph 2 says a big potato came out. That is WHY Wren is surprised. But this sentence is about the potato. It does not show what Wren did.",
              "Grandma brushed the dirt off with her glove.": "In paragraph 2, this sentence is about Grandma, not Wren."
            },
            why: "Paragraph 2 says Wren gasped and dropped her shovel. People gasp when they are surprised. So that sentence shows Wren is surprised." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that the garden is almost DONE for the year. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "On a gray morning, Wren and Grandma walked to the community garden.",
              "The tomato plants in their bed were brown and dry.",
              "Out came a potato as big as a softball.",
              "They dug until the bucket was full.",
              "By then, most of the other garden beds were empty.",
              "Grandma put the rest in the wagon."
            ],
            answers: ["The tomato plants in their bed were brown and dry.", "By then, most of the other garden beds were empty."],
            kinds: {
              "On a gray morning, Wren and Grandma walked to the community garden.": 'notproof',
              "Out came a potato as big as a softball.": 'notproof',
              "They dug until the bucket was full.": 'notproof',
              "Grandma put the rest in the wagon.": 'notproof'
            },
            notes: {
              "On a gray morning, Wren and Grandma walked to the community garden.": "Paragraph 1 tells when they went. It does not show that the garden is almost done.",
              "Out came a potato as big as a softball.": "Paragraph 2 tells about one big potato. It does not show that the garden is almost done.",
              "They dug until the bucket was full.": "Paragraph 3 tells how long they dug. It does not show that the garden is almost done.",
              "Grandma put the rest in the wagon.": "Paragraph 4 tells what Grandma did. It does not show that the garden is almost done."
            },
            why: "Paragraph 1 says the tomato plants were brown and dry. Paragraph 3 says most of the other beds were empty. Both show that the garden is almost done for the year." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
            q: "Read paragraph 4. The passage shows that Wren likes to SHARE. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
            answers: ["Wren gave him the giant potato to take home.", "Then she put a bag of potatoes in the free food box by the gate."],
            kinds: {
              "Mr. Yoder was pulling weeds in the bed next to theirs.": 'wrongwho',
              "Grandma put the rest in the wagon.": 'wrongwho',
              "A cold wind blew dry leaves across the path.": 'notproof'
            },
            notes: {
              "Mr. Yoder was pulling weeds in the bed next to theirs.": "In paragraph 4, this sentence is about Mr. Yoder, not Wren.",
              "Grandma put the rest in the wagon.": "In paragraph 4, this sentence is about Grandma, not Wren.",
              "A cold wind blew dry leaves across the path.": "In paragraph 4, this sentence tells about the wind. It does not show that Wren likes to share."
            },
            why: "Paragraph 4 says Wren gave Mr. Yoder the giant potato. It also says she put a bag of potatoes in the free food box. Both show that Wren likes to share." }
        ]
      },
      turn: [
        {
          story: {
            title: "Water Cups on Race Day",
            paragraphs: [
              "Every fall, a long race runs right down Hill Street. This year, Rocco and his mom handed out water to the runners. They set up a table on the corner with a tall stack of paper cups.",
              "By nine o'clock, people lined both sides of the street. A band on the corner banged on big drums. The crowd clapped and cheered, and Rocco had to cover his ears.",
              "Soon the runners came around the corner. Each runner had a big paper number pinned on the chest. Many runners grabbed two cups and drank them both in a row. A woman in a pink hat waved at the crowd.",
              "Rocco filled cup after cup until his sleeves were soaked. The cups had little red stripes on the sides. Mom stacked the empty boxes under the table. Rocco did not stop to rest, not even to eat his snack. A dog barked at a runner in a fuzzy costume.",
              "At noon, the last runner limped around the corner. Most of the crowd had gone home. Rocco cheered for her as loud as he could. He had saved the very last cup of water just for her."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 3,
              q: "Read paragraph 3. Click on the sentence in paragraph 3 that BEST shows that the runners are THIRSTY.",
              answers: ["Many runners grabbed two cups and drank them both in a row."],
              kinds: {
                "Soon the runners came around the corner.": 'notproof',
                "Each runner had a big paper number pinned on the chest.": 'notproof',
                "A woman in a pink hat waved at the crowd.": 'notproof'
              },
              notes: {
                "Soon the runners came around the corner.": "In paragraph 3, this sentence tells when the runners came. It does not show that they are thirsty.",
                "Each runner had a big paper number pinned on the chest.": "In paragraph 3, this sentence tells what the runners wore. It does not show that they are thirsty.",
                "A woman in a pink hat waved at the crowd.": "In paragraph 3, this sentence tells that a woman waved. It does not show that the runners are thirsty."
              },
              why: "Paragraph 3 says many runners grabbed two cups and drank them both. People drink a lot, and fast, when they are thirsty. So that sentence shows the runners are thirsty." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that the street is very LOUD on race day. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Every fall, a long race runs right down Hill Street.",
                "They set up a table on the corner with a tall stack of paper cups.",
                "A band on the corner banged on big drums.",
                "The crowd clapped and cheered, and Rocco had to cover his ears.",
                "Each runner had a big paper number pinned on the chest.",
                "The cups had little red stripes on the sides."
              ],
              answers: ["A band on the corner banged on big drums.", "The crowd clapped and cheered, and Rocco had to cover his ears."],
              kinds: {
                "Every fall, a long race runs right down Hill Street.": 'notproof',
                "They set up a table on the corner with a tall stack of paper cups.": 'notproof',
                "Each runner had a big paper number pinned on the chest.": 'notproof',
                "The cups had little red stripes on the sides.": 'notproof'
              },
              notes: {
                "Every fall, a long race runs right down Hill Street.": "Paragraph 1 tells where the race runs. It does not show that the street is loud.",
                "They set up a table on the corner with a tall stack of paper cups.": "Paragraph 1 tells about the table and the cups. It does not show that the street is loud.",
                "Each runner had a big paper number pinned on the chest.": "Paragraph 3 tells what the runners wore. It does not show that the street is loud.",
                "The cups had little red stripes on the sides.": "Paragraph 4 tells what the cups looked like. It does not show that the street is loud."
              },
              why: "Paragraph 2 says a band banged on big drums. It also says the crowd cheered, and Rocco had to cover his ears. Both show that the street is very loud." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that Rocco works HARD. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["Rocco filled cup after cup until his sleeves were soaked.", "Rocco did not stop to rest, not even to eat his snack."],
              kinds: {
                "The cups had little red stripes on the sides.": 'notproof',
                "Mom stacked the empty boxes under the table.": 'wrongwho',
                "A dog barked at a runner in a fuzzy costume.": 'notproof'
              },
              notes: {
                "The cups had little red stripes on the sides.": "In paragraph 4, this sentence tells what the cups looked like. It does not show Rocco working.",
                "Mom stacked the empty boxes under the table.": "In paragraph 4, this sentence is about Mom, not Rocco.",
                "A dog barked at a runner in a fuzzy costume.": "In paragraph 4, this sentence is about a dog. It does not show Rocco working."
              },
              why: "Paragraph 4 says Rocco filled cup after cup until his sleeves were soaked. It also says he did not stop to rest. Both show that Rocco works hard." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Rocco is KIND to the last runner. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "By nine o'clock, people lined both sides of the street.",
                "Soon the runners came around the corner.",
                "Mom stacked the empty boxes under the table.",
                "Most of the crowd had gone home.",
                "Rocco cheered for her as loud as he could.",
                "He had saved the very last cup of water just for her."
              ],
              answers: ["Rocco cheered for her as loud as he could.", "He had saved the very last cup of water just for her."],
              kinds: {
                "By nine o'clock, people lined both sides of the street.": 'notproof',
                "Soon the runners came around the corner.": 'notproof',
                "Mom stacked the empty boxes under the table.": 'wrongwho',
                "Most of the crowd had gone home.": 'notproof'
              },
              notes: {
                "By nine o'clock, people lined both sides of the street.": "Paragraph 2 tells about the crowd in the morning. It does not show Rocco being kind.",
                "Soon the runners came around the corner.": "Paragraph 3 tells when the first runners came. It is not about the last runner.",
                "Mom stacked the empty boxes under the table.": "In paragraph 4, this sentence is about Mom, not Rocco.",
                "Most of the crowd had gone home.": "Paragraph 5 says most people had gone home. It does not show what Rocco did."
              },
              why: "Paragraph 5 says Rocco cheered for the last runner as loud as he could. It also says he saved the last cup of water for her. Both show that Rocco is kind to her." }
          ]
        },
        {
          story: {
            title: "After School at the Corner Store",
            paragraphs: [
              "Zane's dad ran the corner store on Front Street. Each day after school, Zane helped him at the counter.",
              "By three o'clock, a long line stretched from the counter to the door. Dad wore a green apron with his name on it. The shelves held bread, soup, rice, and bags of chips. A cat named Pepper slept in the front window.",
              "Zane stood on a step stool next to Dad. Zane had the newspaper ready for Mrs. Rook before she asked for it.",
              "Then the phone rang in the back room. Dad let Zane run the cash register by himself. He also gave Zane the key to the money drawer. A small boy came in to buy a pack of gum. Pepper the cat stretched and yawned.",
              "When the store got quiet, Zane filled the soup shelf in five minutes. Zane swept the floor before Dad got off the phone. Then Mr. Tran came in for his coffee, like he did every day. Zane put two sugars in Mr. Tran's coffee without asking how he liked it."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that the store is BUSY.",
              answers: ["By three o'clock, a long line stretched from the counter to the door."],
              kinds: {
                "Dad wore a green apron with his name on it.": 'notproof',
                "The shelves held bread, soup, rice, and bags of chips.": 'notproof',
                "A cat named Pepper slept in the front window.": 'notproof'
              },
              notes: {
                "Dad wore a green apron with his name on it.": "In paragraph 2, this sentence tells what Dad wore. It does not show that the store is busy.",
                "The shelves held bread, soup, rice, and bags of chips.": "In paragraph 2, this sentence tells what was on the shelves. It does not show that the store is busy.",
                "A cat named Pepper slept in the front window.": "In paragraph 2, this sentence is about the cat. A sleeping cat does not show a busy store."
              },
              why: "Paragraph 2 says a long line stretched from the counter to the door. A long line means lots of people. So the store is busy." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Zane KNOWS the people who shop at the store. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Zane's dad ran the corner store on Front Street.",
                "Dad wore a green apron with his name on it.",
                "Zane stood on a step stool next to Dad.",
                "Zane had the newspaper ready for Mrs. Rook before she asked for it.",
                "A small boy came in to buy a pack of gum.",
                "Zane put two sugars in Mr. Tran's coffee without asking how he liked it."
              ],
              answers: ["Zane had the newspaper ready for Mrs. Rook before she asked for it.", "Zane put two sugars in Mr. Tran's coffee without asking how he liked it."],
              kinds: {
                "Zane's dad ran the corner store on Front Street.": 'notproof',
                "Dad wore a green apron with his name on it.": 'wrongwho',
                "Zane stood on a step stool next to Dad.": 'notproof',
                "A small boy came in to buy a pack of gum.": 'wrongwho'
              },
              notes: {
                "Zane's dad ran the corner store on Front Street.": "Paragraph 1 tells who ran the store. It does not show what Zane knows.",
                "Dad wore a green apron with his name on it.": "In paragraph 2, this sentence is about Dad, not Zane.",
                "Zane stood on a step stool next to Dad.": "Paragraph 3 tells where Zane stood. It does not show what Zane knows.",
                "A small boy came in to buy a pack of gum.": "In paragraph 4, this sentence is about a boy who came in, not Zane."
              },
              why: "Paragraph 3 says Zane had the newspaper ready for Mrs. Rook before she asked. Paragraph 5 says he put two sugars in Mr. Tran's coffee without asking. Both show that Zane knows what these people like." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that Dad TRUSTS Zane. Dad believes Zane will do the right thing. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["Dad let Zane run the cash register by himself.", "He also gave Zane the key to the money drawer."],
              kinds: {
                "Then the phone rang in the back room.": 'notproof',
                "A small boy came in to buy a pack of gum.": 'wrongwho',
                "Pepper the cat stretched and yawned.": 'notproof'
              },
              notes: {
                "Then the phone rang in the back room.": "In paragraph 4, this sentence tells about the phone. It does not show that Dad trusts Zane.",
                "A small boy came in to buy a pack of gum.": "In paragraph 4, this sentence is about a boy who came in. It does not show that Dad trusts Zane.",
                "Pepper the cat stretched and yawned.": "In paragraph 4, this sentence is about the cat. It does not show that Dad trusts Zane."
              },
              why: "Paragraph 4 says Dad let Zane run the cash register by himself. It also says Dad gave Zane the key to the money drawer. You do that only with someone you trust." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Zane works FAST. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Each day after school, Zane helped him at the counter.",
                "By three o'clock, a long line stretched from the counter to the door.",
                "Then the phone rang in the back room.",
                "When the store got quiet, Zane filled the soup shelf in five minutes.",
                "Zane swept the floor before Dad got off the phone.",
                "Then Mr. Tran came in for his coffee, like he did every day."
              ],
              answers: ["When the store got quiet, Zane filled the soup shelf in five minutes.", "Zane swept the floor before Dad got off the phone."],
              kinds: {
                "Each day after school, Zane helped him at the counter.": 'notproof',
                "By three o'clock, a long line stretched from the counter to the door.": 'notproof',
                "Then the phone rang in the back room.": 'notproof',
                "Then Mr. Tran came in for his coffee, like he did every day.": 'wrongwho'
              },
              notes: {
                "Each day after school, Zane helped him at the counter.": "Paragraph 1 says Zane helps. It does not show that he is fast.",
                "By three o'clock, a long line stretched from the counter to the door.": "Paragraph 2 shows that the store is busy. It does not show that Zane is fast.",
                "Then the phone rang in the back room.": "In paragraph 4, this sentence tells about the phone. It does not show that Zane is fast.",
                "Then Mr. Tran came in for his coffee, like he did every day.": "In paragraph 5, this sentence is about Mr. Tran, not Zane."
              },
              why: "Paragraph 5 says Zane filled the soup shelf in five minutes. It also says he swept the floor before Dad got off the phone. Both show that Zane works fast." }
          ]
        }
      ]
    },

    /* ───────── Version 4 ───────── */
    {
      pre: {
        story: {
          title: "Under the Purple Umbrella",
          paragraphs: [
            "On Monday morning, Talia waited at the bus stop with her purple umbrella. Rain drummed on top of it.",
            "Water rushed down the gutter like a little river. A truck went by and honked two times. Talia's mom waved from the window upstairs. Talia checked the time on her watch.",
            "A boy Talia had never seen stood next to her with no umbrella. The boy studied the bus map on the pole for a long time. Then the boy asked Talia which bus went to Ross School.",
            "Talia moved over and held her umbrella over his head. She told him her name and asked for his. His name was Remy, and he had just moved to the city. The bus splashed up to the curb, and the doors opened. Remy shook the rain off his coat."
          ]
        },
        items: [
          { id: 'P1', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
            q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that the rain is HEAVY.",
            answers: ["Water rushed down the gutter like a little river."],
            kinds: {
              "A truck went by and honked two times.": 'notproof',
              "Talia's mom waved from the window upstairs.": 'notproof',
              "Talia checked the time on her watch.": 'notproof'
            },
            notes: {
              "A truck went by and honked two times.": "In paragraph 2, this sentence tells about a truck. It does not show heavy rain.",
              "Talia's mom waved from the window upstairs.": "In paragraph 2, this sentence is about Talia's mom. It does not show heavy rain.",
              "Talia checked the time on her watch.": "In paragraph 2, this sentence tells what Talia did. It does not show heavy rain."
            },
            why: "Paragraph 2 says water rushed down the gutter like a little river. That much water means a lot of rain. So the rain is heavy." },
          { id: 'P2', type: 'hot', skill: 'Evidence selection', pick: 2,
            q: "The passage shows that the boy is NOT SURE which bus to take. Click on the TWO sentences from the passage that BEST support this idea.",
            list: [
              "On Monday morning, Talia waited at the bus stop with her purple umbrella.",
              "Talia's mom waved from the window upstairs.",
              "Talia checked the time on her watch.",
              "The boy studied the bus map on the pole for a long time.",
              "Then the boy asked Talia which bus went to Ross School.",
              "The bus splashed up to the curb, and the doors opened."
            ],
            answers: ["The boy studied the bus map on the pole for a long time.", "Then the boy asked Talia which bus went to Ross School."],
            kinds: {
              "On Monday morning, Talia waited at the bus stop with her purple umbrella.": 'wrongwho',
              "Talia's mom waved from the window upstairs.": 'wrongwho',
              "Talia checked the time on her watch.": 'wrongwho',
              "The bus splashed up to the curb, and the doors opened.": 'notproof'
            },
            notes: {
              "On Monday morning, Talia waited at the bus stop with her purple umbrella.": "In paragraph 1, this sentence is about Talia, not the boy.",
              "Talia's mom waved from the window upstairs.": "In paragraph 2, this sentence is about Talia's mom, not the boy.",
              "Talia checked the time on her watch.": "In paragraph 2, this sentence is about Talia, not the boy.",
              "The bus splashed up to the curb, and the doors opened.": "Paragraph 4 tells about the bus. It does not show that the boy is not sure."
            },
            why: "Paragraph 3 says the boy looked at the bus map for a long time. It also says he asked Talia which bus went to his school. Both show that the boy is not sure which bus to take." },
          { id: 'P3', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
            q: "Read paragraph 4. The passage shows that Talia is FRIENDLY. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
            answers: ["Talia moved over and held her umbrella over his head.", "She told him her name and asked for his."],
            kinds: {
              "His name was Remy, and he had just moved to the city.": 'wrongwho',
              "The bus splashed up to the curb, and the doors opened.": 'notproof',
              "Remy shook the rain off his coat.": 'wrongwho'
            },
            notes: {
              "His name was Remy, and he had just moved to the city.": "In paragraph 4, this sentence is about Remy, not Talia.",
              "The bus splashed up to the curb, and the doors opened.": "In paragraph 4, this sentence tells about the bus. It does not show that Talia is friendly.",
              "Remy shook the rain off his coat.": "In paragraph 4, this sentence is about Remy, not Talia."
            },
            why: "Paragraph 4 says Talia held her umbrella over the boy. It also says she told him her name and asked for his. Both show that Talia is friendly." }
        ]
      },
      turn: [
        {
          story: {
            title: "Grandpa's Hiccups",
            paragraphs: [
              "On Sunday, Elsie's whole family ate lunch at Grandpa's home. Halfway through his soup, Grandpa started to hiccup.",
              "Each hiccup made Grandpa's whole body bounce in his chair. Grandpa put down his spoon and wiped his mouth. Aunt Lina passed the bread around the table. Outside, snow fell on the fire escape.",
              "Elsie brought Grandpa a glass of water to sip slowly. Then she told him to hold his breath and count to ten. Grandpa held his breath until his cheeks puffed out like a balloon. But the hiccups did not stop.",
              "Grandpa tried to tell a story, but a hiccup cut every word in half. Little cousin Dot giggled so hard that she slid off her chair. Mom covered her mouth, but her shoulders shook as she laughed. Aunt Lina got up to make tea. The clock on the wall chimed one o'clock.",
              "Then Elsie had an idea. She hid behind the kitchen door and waited. When Grandpa walked by, she jumped out and yelled, \"BOO!\" Grandpa jumped so high that his slipper fell off.",
              "Grandpa waited and waited, but no more hiccups came. He laughed and gave Elsie a big hug. Then he gave her the biggest slice of apple pie."
            ]
          },
          items: [
            { id: 'Q01', type: 'hot', skill: 'Evidence selection', pick: 1, para: 2,
              q: "Read paragraph 2. Click on the sentence in paragraph 2 that BEST shows that Grandpa's hiccups are very BIG.",
              answers: ["Each hiccup made Grandpa's whole body bounce in his chair."],
              kinds: {
                "Grandpa put down his spoon and wiped his mouth.": 'notproof',
                "Aunt Lina passed the bread around the table.": 'wrongwho',
                "Outside, snow fell on the fire escape.": 'notproof'
              },
              notes: {
                "Grandpa put down his spoon and wiped his mouth.": "In paragraph 2, this sentence tells what Grandpa did with his spoon. It does not show how big the hiccups are.",
                "Aunt Lina passed the bread around the table.": "In paragraph 2, this sentence is about Aunt Lina, not the hiccups.",
                "Outside, snow fell on the fire escape.": "In paragraph 2, this sentence tells about the snow. It does not show how big the hiccups are."
              },
              why: "Paragraph 2 says each hiccup made Grandpa's whole body bounce. A small hiccup does not shake your whole body. So the hiccups are very big." },
            { id: 'Q02', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Elsie tries to HELP Grandpa. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "On Sunday, Elsie's whole family ate lunch at Grandpa's home.",
                "Aunt Lina passed the bread around the table.",
                "Elsie brought Grandpa a glass of water to sip slowly.",
                "Then she told him to hold his breath and count to ten.",
                "Grandpa held his breath until his cheeks puffed out like a balloon.",
                "The clock on the wall chimed one o'clock."
              ],
              answers: ["Elsie brought Grandpa a glass of water to sip slowly.", "Then she told him to hold his breath and count to ten."],
              kinds: {
                "On Sunday, Elsie's whole family ate lunch at Grandpa's home.": 'notproof',
                "Aunt Lina passed the bread around the table.": 'wrongwho',
                "Grandpa held his breath until his cheeks puffed out like a balloon.": 'wrongwho',
                "The clock on the wall chimed one o'clock.": 'notproof'
              },
              notes: {
                "On Sunday, Elsie's whole family ate lunch at Grandpa's home.": "Paragraph 1 tells where the family ate lunch. It does not show Elsie helping.",
                "Aunt Lina passed the bread around the table.": "In paragraph 2, this sentence is about Aunt Lina, not Elsie.",
                "Grandpa held his breath until his cheeks puffed out like a balloon.": "Paragraph 3 tells what Grandpa did. That is about Grandpa, not Elsie.",
                "The clock on the wall chimed one o'clock.": "Paragraph 4 tells about the clock. It does not show Elsie helping."
              },
              why: "Paragraph 3 says Elsie brought Grandpa a glass of water. It also says she told him to hold his breath and count. Both are ways to stop hiccups. Both show that Elsie tries to help Grandpa." },
            { id: 'Q03', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that the family thinks the hiccups are FUNNY. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["Little cousin Dot giggled so hard that she slid off her chair.", "Mom covered her mouth, but her shoulders shook as she laughed."],
              kinds: {
                "Grandpa tried to tell a story, but a hiccup cut every word in half.": 'notproof',
                "Aunt Lina got up to make tea.": 'notproof',
                "The clock on the wall chimed one o'clock.": 'notproof'
              },
              notes: {
                "Grandpa tried to tell a story, but a hiccup cut every word in half.": "In paragraph 4, this sentence tells what the hiccups did. It does not show how the family feels about them.",
                "Aunt Lina got up to make tea.": "In paragraph 4, this sentence tells what Aunt Lina did. It does not show that she thinks the hiccups are funny.",
                "The clock on the wall chimed one o'clock.": "In paragraph 4, this sentence is about the clock. It does not show how the family feels."
              },
              why: "Paragraph 4 says Dot giggled so hard that she slid off her chair. It also says Mom's shoulders shook as she laughed. Both show that the family thinks the hiccups are funny." },
            { id: 'Q04', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Grandpa is THANKFUL to Elsie. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Halfway through his soup, Grandpa started to hiccup.",
                "Grandpa put down his spoon and wiped his mouth.",
                "Aunt Lina got up to make tea.",
                "Grandpa jumped so high that his slipper fell off.",
                "He laughed and gave Elsie a big hug.",
                "Then he gave her the biggest slice of apple pie."
              ],
              answers: ["He laughed and gave Elsie a big hug.", "Then he gave her the biggest slice of apple pie."],
              kinds: {
                "Halfway through his soup, Grandpa started to hiccup.": 'notproof',
                "Grandpa put down his spoon and wiped his mouth.": 'notproof',
                "Aunt Lina got up to make tea.": 'wrongwho',
                "Grandpa jumped so high that his slipper fell off.": 'notproof'
              },
              notes: {
                "Halfway through his soup, Grandpa started to hiccup.": "Paragraph 1 tells when the hiccups started. It does not show that Grandpa is thankful.",
                "Grandpa put down his spoon and wiped his mouth.": "Paragraph 2 tells what Grandpa did at lunch. It does not show that he is thankful.",
                "Aunt Lina got up to make tea.": "In paragraph 4, this sentence is about Aunt Lina, not Grandpa.",
                "Grandpa jumped so high that his slipper fell off.": "Paragraph 5 shows that Elsie's BOO surprised Grandpa. It does not show that he is thankful."
              },
              why: "Paragraph 6 says Grandpa gave Elsie a big hug. It also says he gave her the biggest slice of pie. Those are ways to say thank you. Both show that Grandpa is thankful to Elsie." }
          ]
        },
        {
          story: {
            title: "The Coat Box in the Lobby",
            paragraphs: [
              "Rafael lived on the fourth floor of a tall brick building. One cold week, his school asked people to give warm coats to kids who needed them. Rafael wanted all his neighbors to help.",
              "Dad carried an empty box down to the lobby. Dad held the tape while Rafael hung up a sign that said Coats Here.",
              "Next, Rafael climbed the stairs to the sixth floor. Mr. Voss lived there, and he never smiled at anyone. Rafael took a deep breath and knocked on his door anyway. Inside, a dog started to bark.",
              "Mr. Voss opened the door and listened to Rafael. Then he went to his closet and came back with three thick coats. He also gave Rafael a pair of mittens and a wool hat. Rafael thanked him two times. The little dog sniffed at Rafael's sneakers.",
              "By Friday, the coats were piled so high that the box flaps would not close. Rafael had to find a second box. On Saturday, Dad drove both boxes to the school."
            ]
          },
          items: [
            { id: 'Q05', type: 'hot', skill: 'Evidence selection', pick: 1, para: 3,
              q: "Read paragraph 3. Click on the sentence in paragraph 3 that BEST shows that Rafael is BRAVE.",
              answers: ["Rafael took a deep breath and knocked on his door anyway."],
              kinds: {
                "Next, Rafael climbed the stairs to the sixth floor.": 'notproof',
                "Mr. Voss lived there, and he never smiled at anyone.": 'wrongwho',
                "Inside, a dog started to bark.": 'notproof'
              },
              notes: {
                "Next, Rafael climbed the stairs to the sixth floor.": "In paragraph 3, this sentence tells where Rafael went. It does not show that he is brave.",
                "Mr. Voss lived there, and he never smiled at anyone.": "In paragraph 3, this sentence is about Mr. Voss, not Rafael.",
                "Inside, a dog started to bark.": "In paragraph 3, this sentence is about a dog, not Rafael."
              },
              why: "Paragraph 3 says Rafael took a deep breath and knocked anyway. Mr. Voss never smiled, so that was hard to do. Rafael did it, so he is brave." },
            { id: 'Q06', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that Dad HELPS Rafael. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "Rafael lived on the fourth floor of a tall brick building.",
                "Rafael wanted all his neighbors to help.",
                "Dad carried an empty box down to the lobby.",
                "Dad held the tape while Rafael hung up a sign that said Coats Here.",
                "Next, Rafael climbed the stairs to the sixth floor."
              ],
              answers: ["Dad carried an empty box down to the lobby.", "Dad held the tape while Rafael hung up a sign that said Coats Here."],
              kinds: {
                "Rafael lived on the fourth floor of a tall brick building.": 'notproof',
                "Rafael wanted all his neighbors to help.": 'notproof',
                "Next, Rafael climbed the stairs to the sixth floor.": 'wrongwho'
              },
              notes: {
                "Rafael lived on the fourth floor of a tall brick building.": "Paragraph 1 tells where Rafael lived. It does not show Dad helping.",
                "Rafael wanted all his neighbors to help.": "In paragraph 1, this sentence tells what Rafael wanted. It does not show Dad helping.",
                "Next, Rafael climbed the stairs to the sixth floor.": "In paragraph 3, this sentence is about Rafael, not Dad."
              },
              why: "Paragraph 2 says Dad carried a box down to the lobby. It also says Dad held the tape for the sign. Both show that Dad helps Rafael." },
            { id: 'Q07', type: 'hot', skill: 'Evidence selection', pick: 2, para: 4,
              q: "Read paragraph 4. The passage shows that Mr. Voss is GENEROUS. He likes to give. Click on the TWO sentences in paragraph 4 that BEST support this idea.",
              answers: ["Then he went to his closet and came back with three thick coats.", "He also gave Rafael a pair of mittens and a wool hat."],
              kinds: {
                "Mr. Voss opened the door and listened to Rafael.": 'notproof',
                "Rafael thanked him two times.": 'wrongwho',
                "The little dog sniffed at Rafael's sneakers.": 'notproof'
              },
              notes: {
                "Mr. Voss opened the door and listened to Rafael.": "Paragraph 4 says Mr. Voss listened. That is true. But it does not show that he likes to give.",
                "Rafael thanked him two times.": "In paragraph 4, this sentence is about Rafael, not Mr. Voss.",
                "The little dog sniffed at Rafael's sneakers.": "In paragraph 4, this sentence is about the dog. It does not show that Mr. Voss likes to give."
              },
              why: "Paragraph 4 says Mr. Voss came back with three thick coats. It also says he gave mittens and a wool hat. Both show that Mr. Voss is generous." },
            { id: 'Q08', type: 'hot', skill: 'Evidence selection', pick: 2,
              q: "The passage shows that people gave LOTS of coats. Click on the TWO sentences from the passage that BEST support this idea.",
              list: [
                "One cold week, his school asked people to give warm coats to kids who needed them.",
                "Rafael took a deep breath and knocked on his door anyway.",
                "Rafael thanked him two times.",
                "The little dog sniffed at Rafael's sneakers.",
                "By Friday, the coats were piled so high that the box flaps would not close.",
                "Rafael had to find a second box."
              ],
              answers: ["By Friday, the coats were piled so high that the box flaps would not close.", "Rafael had to find a second box."],
              kinds: {
                "One cold week, his school asked people to give warm coats to kids who needed them.": 'notproof',
                "Rafael took a deep breath and knocked on his door anyway.": 'notproof',
                "Rafael thanked him two times.": 'notproof',
                "The little dog sniffed at Rafael's sneakers.": 'notproof'
              },
              notes: {
                "One cold week, his school asked people to give warm coats to kids who needed them.": "Paragraph 1 says the school asked for coats. It does not show how many coats came.",
                "Rafael took a deep breath and knocked on his door anyway.": "Paragraph 3 shows that Rafael is brave. It does not show how many coats came.",
                "Rafael thanked him two times.": "In paragraph 4, this sentence is about Rafael saying thank you. It does not show how many coats came.",
                "The little dog sniffed at Rafael's sneakers.": "In paragraph 4, this sentence is about the dog. It does not show how many coats came."
              },
              why: "Paragraph 5 says the coats were piled so high that the box would not close. It also says Rafael had to find a second box. Both show that people gave lots of coats." }
          ]
        }
      ]
    }
  ]
};
