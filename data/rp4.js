/* ═══════════════════════════════════════════════════════
   THE LAB · data/rp4.js — Reading for Meaning, ONE PARAGRAPH, lesson RP4: Choose Two: One Paragraph
   The short practice right before RC4 (Marcos 10/26: "a shorter exercise with just a paragraph to read from").
   Every story is ONE paragraph. Same skill and test words as RC4: Choose TWO about IDEAS, all or nothing.
   Every item is type 'ms', pick 2, 5 choices: the TWO right choices first, then 3 wrong ones (the site
   shuffles). Every wrong choice has a kind AND its own note; each question has a partly-right wrong
   choice (toofar), and each paragraph has at least one plain overreach (no best / never / always).
   A new teaching paragraph in every version (same screens: W1, W2, S1 mc, S2 ms, W3; steps carry no skill).
   pre:  P1 Character inference · P2 Drawing conclusions · P3 Character feelings
   turn: A = Q01 Character inference · Q02 Character feelings
         B = Q03 Drawing conclusions · Q04 Character inference
         C = Q05 Character feelings · Q06 Drawing conclusions
         D = Q07 Theme · Q08 Character inference (D is a story with a clear lesson; v3 D is the lesson's one fable)
   Premise lane: sports, games and clubs. Every premise was grepped against the premise index and data/*.js first.
   Shape: tools/CONTENT-SPEC-READING.md (ONE PARAGRAPH, RP4). Check: node tools/check-reading.js RP4
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RP4 = {
  versions: [
    /* ───────── version 1 ───────── */
    {
      teach: {
        story: {
          title: 'Evie and the Purple Hoop',
          paragraphs: [
            'Evie got a purple hula hoop for her birthday. Each time she spun it, the hoop slid down to the floor. Her big brother, Glen, laughed and said hula hoops were for babies. Each day after school, Evie went out back to try again. On the fifth day, the hoop spun ten times before it fell. Evie counted each spin out loud and jumped up and down. Then Glen came out and asked for a turn. Evie gave him the hoop and showed him how to move his hips.'
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Choose TWO',
            lines: [
              'In this lesson, each story is just one paragraph. A paragraph is a group of sentences about one thing.',
              'Some test questions end with the words, Choose TWO answers.',
              'That means two of the answers are right. You must find both.',
              'It is all or nothing. One right and one wrong gets no point, like the test.',
              'Here is an example. Your friend comes in with a red nose and snow on his hat.',
              'What can you conclude? To conclude means to figure out from the clues.',
              'Choose TWO. It is cold outside. It is snowing. He just ate lunch.',
              'It is cold outside. His red nose shows that. It is snowing. The snow on his hat shows that.',
              'He just ate lunch. No clue shows that. So we do not pick it.',
              'To choose, tap an answer. Its box turns yellow and gets a check mark.',
              'Did you change your mind? Tap the answer again. The check goes away.',
              'When you have two, tap That’s My Answer!'
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me choose TWO',
            lines: [
              'Let’s do one together. The question is, Which TWO sentences BEST describe Evie?',
              'Describe means tell what Evie is like. BEST means the paragraph proves it the most.',
              'First, find one answer the paragraph proves. Evie keeps practicing until she gets better.',
              'The paragraph says Evie went out to try again each day after school. On the fifth day, the hoop spun ten times. That is proof.',
              'Next, find the second answer. Evie is kind to Glen, even after he laughed at her.',
              'The paragraph says Evie gave Glen the hoop. She showed him how to move his hips. That is proof too.',
              'Then test the other choices. Evie is the best hula hooper in her school. That one sounds right.',
              'Evie does get better. But no clue tells about her school. That choice goes too far.',
              'Evie gives up after the hoop falls. The paragraph shows the opposite. She tries again every day.',
              'Last, check both answers. Each one has proof. So we pick those two.'
            ],
            lit: ['Each day after school, Evie went out back to try again.', 'Evie gave him the hoop and showed him how to move his hips.'] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: 'Which ONE of these is true about Glen?',
            choices: ['Glen made fun of the hula hoop at first.',
              'Glen got a hula hoop for his birthday.',
              'Glen cheered for Evie from the very start.',
              'Glen wanted to play ball with his friends.'],
            kinds: [null, 'wrongwho', 'opposite', 'noclue'],
            notes: [null,
              'The paragraph says Evie got the hula hoop, not Glen.',
              'The paragraph shows Glen laugh at the hula hoop. That is the opposite.',
              'The paragraph gives no clue about a ball or his friends.'],
            why: 'The paragraph shows Glen laugh. He says hula hoops are for babies. So Glen made fun of the hula hoop at first.' },
          { kind: 'step', id: 'S2', type: 'ms', pick: 2,
            q: 'What can the reader conclude about Glen? Choose TWO answers.',
            choices: ['Glen made fun of the hula hoop at first.',
              'Glen changed his mind about the hula hoop.',
              'Glen wants to join a hula hoop team.',
              'Glen counted each spin out loud.',
              'Glen cheered for Evie from the very start.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Glen ask for one turn. That does not prove he wants to join a team. That goes too far.',
              'The paragraph says Evie counted the spins, not Glen.',
              'The paragraph shows Glen laugh at the hula hoop. That is the opposite.'],
            why: 'The paragraph shows Glen laugh and say hula hoops are for babies. He made fun of the hoop at first. At the end, Glen comes out and asks for a turn. He changed his mind about the hula hoop. Both answers have proof.' },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              'Here are the steps for Choose TWO.',
              'Step 1. Read the question. Who is it about? What does it ask?',
              'Step 2. Find one answer the paragraph proves. Find its proof.',
              'Step 3. Test every other choice. Look back at the paragraph for each one.',
              'Step 4. Check both answers. Each one needs proof. One wrong means no point.',
              'Watch out for a choice that sounds right but goes too far. It says more than the clues show.',
              'Watch out for a choice about the wrong person. Check who did it.',
              'Some questions ask how someone feels at the end. Look at the last sentences of the paragraph.',
              'Some questions ask for lessons. A lesson is an idea about life that the story teaches.',
              'Here is a lesson from our paragraph. If you keep practicing, you get better. Evie got a purple hoop is not a lesson. It is just one detail.',
              'Some answers use feeling words. Proud means you feel good about something you did. Relieved means you stop being worried.',
              'Now you try.'
            ] }
        ]
      },
      pre: {
        story: {
          title: 'Ping-Pong at the Rec Center',
          paragraphs: [
            'Each Saturday, Carl played ping-pong with Grandpa at the rec center. Grandpa had played for fifty years, and he won every game. Today, Carl hit the ball too hard, and it flew off again and again. Carl groaned and dropped his paddle. Grandpa did not laugh. He stood behind Carl and showed him how to tap the ball softly. Carl tapped and tapped for an hour as his friends played tag. In the last game, he won the last three points. Carl grinned and asked if they could come back tomorrow.'
          ]
        },
        items: [
          { id: 'P1', type: 'ms', skill: 'Character inference', pick: 2,
            q: 'Which TWO sentences BEST describe Carl? Choose TWO answers.',
            choices: ['Carl is willing to practice to get better.',
              'Carl listens when Grandpa shows him a new way.',
              'Carl wants to join a ping-pong team.',
              'Carl has played ping-pong for fifty years.',
              'Carl leaves the table to play tag.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Carl practice for one hour. That does not prove he wants to join a team. That goes too far.',
              'The paragraph says Grandpa played for fifty years, not Carl.',
              'The paragraph says Carl kept tapping while his friends played tag. That is the opposite.'],
            why: 'The paragraph shows Carl tap and tap for an hour as his friends play tag. He is willing to practice. Grandpa shows Carl how to tap the ball softly, and Carl does it. He listens to Grandpa.' },
          { id: 'P2', type: 'ms', skill: 'Drawing conclusions', pick: 2,
            q: 'What can the reader conclude about Grandpa? Choose TWO answers.',
            choices: ['Grandpa is very good at ping-pong.',
              'Grandpa wants to help Carl do better.',
              'Grandpa used to teach ping-pong to kids.',
              'Grandpa groans and drops his paddle.',
              'Grandpa laughs each time Carl misses.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Grandpa help Carl one time. That does not prove he used to teach kids. That goes too far.',
              'The paragraph says Carl groaned and dropped his paddle, not Grandpa.',
              'The paragraph says Grandpa did not laugh. That is the opposite.'],
            why: 'The paragraph says Grandpa played for fifty years and won every game. He is very good at ping-pong. The paragraph also shows Grandpa stand behind Carl and show him how to tap softly. He wants to help Carl do better.' },
          { id: 'P3', type: 'ms', skill: 'Character feelings', pick: 2,
            q: 'Which TWO sentences BEST tell how Carl feels at the end of the paragraph? Choose TWO answers.',
            choices: ['Carl feels proud of the points he won.',
              'Carl feels eager to come back and play.',
              'Carl feels sure he can beat Grandpa.',
              'Carl feels upset that the ball keeps flying off.',
              'Carl feels like he never wants to play again.'],
            kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
            notes: [null, null,
              'The paragraph shows Carl win the last three points. That does not prove he can beat Grandpa now. That goes too far.',
              'Carl groans near the start of the paragraph. The question asks about the end.',
              'The paragraph shows Carl ask to come back tomorrow. That is the opposite.'],
            why: 'At the end, Carl wins the last three points, and he grins. He feels proud of the points he won. Then Carl asks to come back tomorrow. He feels eager to play again.' }
        ]
      },
      turn: [
        { story: {
            title: 'Lena Lets Go of the Rail',
            paragraphs: [
              'At the trampoline park, Lena climbed up to the jump platform. She looked down at the big trampoline and gripped the rail with both hands. Her little cousin, Teddy, bounced past below, flapping his arms like a bird. Lena waited until the trampoline was clear and took a deep breath. Then she let go of the rail and jumped. She flew up high and landed with a soft bounce. Lena laughed so hard that her sides hurt. She raced back up the steps and yelled for Mom to watch.'
            ]
          },
          items: [
            { id: 'Q01', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Lena? Choose TWO answers.',
              choices: ['Lena is brave enough to try a scary jump.',
                'Lena is careful before she jumps.',
                'Lena wants to work at the trampoline park someday.',
                'Lena flaps her arms like a bird.',
                'Lena jumps without looking first.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Lena jump one time. That does not prove she wants to work there. That goes too far.',
                'The paragraph says Teddy flapped his arms like a bird, not Lena.',
                'The paragraph shows Lena wait until the trampoline is clear. That is the opposite.'],
              why: 'The paragraph shows Lena grip the rail with both hands. The jump scares her, but she lets go and jumps. She is brave. The paragraph also shows Lena wait until the trampoline is clear. She is careful.' },
            { id: 'Q02', type: 'ms', skill: 'Character feelings', pick: 2,
              q: 'Which TWO sentences BEST tell how Lena feels at the end of the paragraph? Choose TWO answers.',
              choices: ['Lena feels excited and wants to jump again.',
                'Lena feels proud and wants Mom to see.',
                'Lena feels sure she can do a flip now.',
                'Lena feels scared to let go of the rail.',
                'Lena feels sorry that she jumped at all.'],
              kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
              notes: [null, null,
                'The paragraph shows Lena do one jump. Nothing shows she thinks she can do a flip. That goes too far.',
                'Lena grips the rail at the start of the paragraph. The question asks about the end.',
                'The paragraph shows Lena laugh and race back up the steps. That is the opposite.'],
              why: 'At the end, Lena laughs so hard that her sides hurt. She races back up the steps. She feels excited and wants to jump again. Then Lena yells for Mom to watch. She feels proud and wants Mom to see.' }
          ] },
        { story: {
            title: 'Pink Drops on the Wall',
            paragraphs: [
              'On Tuesday, the cooking club made strawberry smoothies. Joel dumped the fruit and milk into the blender and pressed the button fast. Pink drops sprayed all over the wall and his shirt. His partner, Zia, wiped off her glasses and giggled. Joel grabbed a sponge and scrubbed the wall until it was clean. Then he looked at every step on the recipe card. This time, he snapped the lid on and held it down tight. The smoothie spun thick and smooth, and Joel poured the first cup for Zia.'
            ]
          },
          items: [
            { id: 'Q03', type: 'ms', skill: 'Drawing conclusions', pick: 2,
              q: 'What can the reader conclude about Joel’s first try? Choose TWO answers.',
              choices: ['Joel forgot to put the lid on the blender.',
                'Joel rushed and did not read the steps.',
                'Joel’s smoothie sprayed all over the whole room.',
                'Zia pressed the button too fast.',
                'Joel looked at the recipe card before he started.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph says pink drops hit the wall and Joel’s shirt. It does not say the whole room. That goes too far.',
                'The paragraph says Joel pressed the button, not Zia.',
                'The paragraph shows Joel look at the card after the mess. That is the opposite.'],
              why: 'The paragraph shows pink drops spray all over. The next time, Joel snaps the lid on. So he forgot the lid at first. The paragraph also shows Joel dump in the fruit and press the button fast. He looks at the steps only after the mess. He rushed.' },
            { id: 'Q04', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Joel? Choose TWO answers.',
              choices: ['Joel takes care of his own mistakes.',
                'Joel is kind to his partner.',
                'Joel wants to be a cook when he grows up.',
                'Joel giggles at the mess.',
                'Joel leaves the mess for Zia to clean.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Joel make one smoothie. That does not prove he wants to be a cook. That goes too far.',
                'The paragraph says Zia giggled, not Joel.',
                'The paragraph shows Joel scrub the wall until it is clean. That is the opposite.'],
              why: 'The paragraph shows Joel scrub the wall until it is clean. Then he looks at the steps and tries again. He takes care of his own mistakes. At the end, Joel pours the first cup for Zia. He is kind to his partner.' }
          ] },
        { story: {
            title: 'Marbles on the Rug',
            paragraphs: [
              'Milo and his little sister, Coco, played marbles in a ring on the rug. Milo knew just how to flick his thumb. Soon he had won all of Coco’s marbles. Coco’s chin shook, and she hugged her empty bag. Milo looked at the big heap in front of him. Then he poured each marble back into her bag. Coco threw her arms around his neck and held on tight. Milo showed her how to tuck her thumb. On her next turn, Coco knocked a marble out of the ring and squealed.'
            ]
          },
          items: [
            { id: 'Q05', type: 'ms', skill: 'Character feelings', pick: 2,
              q: 'Which TWO sentences BEST tell how Coco feels at the end of the paragraph? Choose TWO answers.',
              choices: ['Coco feels thankful for what Milo did.',
                'Coco feels excited about her good shot.',
                'Coco feels sure she can beat Milo now.',
                'Coco feels sad about losing her marbles.',
                'Coco feels mad that Milo kept her marbles.'],
              kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
              notes: [null, null,
                'The paragraph shows Coco hit one marble. That does not prove she can beat Milo. That goes too far.',
                'Coco’s chin shakes in the middle of the paragraph. The question asks about the end.',
                'The paragraph shows Milo give every marble back, and Coco hugs him. That is the opposite.'],
              why: 'The paragraph shows Milo give back every marble. Coco throws her arms around his neck and holds on tight. She feels thankful. At the end, Coco knocks a marble out of the ring and squeals. She feels excited about her good shot.' },
            { id: 'Q06', type: 'ms', skill: 'Drawing conclusions', pick: 2,
              q: 'What can the reader conclude about Milo? Choose TWO answers.',
              choices: ['Milo is better at marbles than Coco.',
                'Milo does not want Coco to feel sad.',
                'Milo wants to play in a marbles contest.',
                'Milo squeals when his marble hits.',
                'Milo keeps all of the marbles he won.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Milo play one game at home. That does not prove he wants to be in a contest. That goes too far.',
                'The paragraph says Coco squealed, not Milo.',
                'The paragraph shows Milo pour every marble back into the bag. That is the opposite.'],
              why: 'The paragraph shows Milo flick his thumb and win all of Coco’s marbles. He is better at marbles than Coco. Coco’s chin shakes. Then Milo gives back every marble and shows her how to shoot. He does not want Coco to feel sad.' }
          ] },
        { story: {
            title: 'One Spin Only',
            paragraphs: [
              'At game club, Ravi played a race game with three friends. The rule was one spin each turn. But when Ravi did not like his number, he spun again. He moved his piece to the finish first and cheered loudly. Nobody else cheered with him. One by one, his friends left to play a different game. Ravi sat alone and stared at the empty board. The next week, Ravi took each spin only one time. He came in last, but his friends laughed with him the whole time.'
            ]
          },
          items: [
            { id: 'Q07', type: 'ms', skill: 'Theme', pick: 2,
              q: 'Which TWO sentences BEST state lessons of the paragraph? Choose TWO answers.',
              choices: ['Cheating can push your friends away.',
                'Fun with friends matters more than winning.',
                'Winning a game always makes your friends leave.',
                'Do whatever it takes to win the game.',
                'Ravi moves his piece to the finish first.'],
              kinds: [null, null, 'toofar', 'opposite', 'onedetail'],
              notes: [null, null,
                'The paragraph shows friends leave after Ravi wins by cheating. It does not say winning always makes friends leave. That goes too far.',
                'The paragraph shows Ravi win by spinning again, and then he sits alone. That is the opposite.',
                'This is just one detail from the paragraph. It is not a lesson about life.'],
              why: 'The paragraph shows Ravi break the rule and spin again to win. Then his friends leave, and he sits alone. Cheating can push your friends away. At the end, Ravi comes in last, but his friends laugh with him. Fun with friends matters more than winning.' },
            { id: 'Q08', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Ravi? Choose TWO answers.',
              choices: ['Ravi cares a lot about winning at first.',
                'Ravi can learn from a mistake.',
                'Ravi wants to make up his own board game.',
                'Ravi leaves to play a different game.',
                'Ravi keeps spinning again the next week.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Ravi play at game club. That does not prove he wants to make his own game. That goes too far.',
                'The paragraph says Ravi’s friends left, not Ravi.',
                'The paragraph says Ravi took each spin only one time the next week. That is the opposite.'],
              why: 'The paragraph shows Ravi spin again each time he does not like his number. He cares a lot about winning at first. The next week, Ravi takes each spin only one time. He can learn from a mistake.' }
          ] }
      ]
    },

    /* ───────── version 2 ───────── */
    {
      teach: {
        story: {
          title: 'Tissues in Her Tap Shoes',
          paragraphs: [
            'Lola was new in tap dance class, so she stood in the back. Her tap shoes were too big, and they clicked at all the wrong times. A girl named Olive saw Lola stuffing tissues into the toes. At the break, Olive brought over her old pair of tap shoes. “These were mine last year,” Olive said with a smile. Lola slipped them on, and they fit just right. By the end of class, Lola tapped every step on the beat. She waved to Olive and asked to stand next to her next week.'
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Choose TWO',
            lines: [
              'In this lesson, each story is just one paragraph. A paragraph is a group of sentences about one thing.',
              'Some test questions end with the words, Choose TWO answers.',
              'That means two of the answers are right. You must find both.',
              'It is all or nothing. One right and one wrong gets no point, like the test.',
              'Here is an example. Your friend comes in with a red nose and snow on his hat.',
              'What can you conclude? To conclude means to figure out from the clues.',
              'Choose TWO. It is cold outside. It is snowing. He just ate lunch.',
              'It is cold outside. His red nose shows that. It is snowing. The snow on his hat shows that.',
              'He just ate lunch. No clue shows that. So we do not pick it.',
              'To choose, tap an answer. Its box turns yellow and gets a check mark.',
              'Did you change your mind? Tap the answer again. The check goes away.',
              'When you have two, tap That’s My Answer!'
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me choose TWO',
            lines: [
              'Let’s do one together. The question is, Which TWO sentences BEST describe Olive?',
              'Describe means tell what Olive is like. BEST means the paragraph proves it the most.',
              'First, find one answer the paragraph proves. Olive notices when someone needs help.',
              'The paragraph says Olive saw Lola stuffing tissues into her shoes. Olive saw the problem. That is proof.',
              'Next, find the second answer. Olive is willing to share her own things.',
              'The paragraph says Olive brought over her old pair of tap shoes for Lola. That is proof too.',
              'Then test the other choices. Olive is the best dancer in the class. That one sounds right.',
              'Olive does help Lola. But no clue tells how well Olive dances. That choice goes too far.',
              'Olive laughs at Lola’s loud shoes. The paragraph shows the opposite. Olive smiles and helps her.',
              'Last, check both answers. Each one has proof. So we pick those two.'
            ],
            lit: ['A girl named Olive saw Lola stuffing tissues into the toes.', 'At the break, Olive brought over her old pair of tap shoes.'] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: 'Which ONE of these is true about Lola?',
            choices: ['Lola had a hard time at the start of class.',
              'Lola gave away her old tap shoes.',
              'Lola’s first tap shoes fit just right.',
              'Lola wanted to take a ballet class instead.'],
            kinds: [null, 'wrongwho', 'opposite', 'noclue'],
            notes: [null,
              'The paragraph says Olive gave away her old shoes, not Lola.',
              'The paragraph says Lola’s first shoes were too big. That is the opposite.',
              'The paragraph gives no clue about a ballet class.'],
            why: 'The paragraph says Lola’s shoes were too big. They clicked at all the wrong times. So Lola had a hard time at the start of class.' },
          { kind: 'step', id: 'S2', type: 'ms', pick: 2,
            q: 'What can the reader conclude about Lola? Choose TWO answers.',
            choices: ['Lola had a hard time at the start of class.',
              'Lola wants to be friends with Olive.',
              'Lola will dance in a big show next week.',
              'Lola gave away her old tap shoes.',
              'Lola tapped off the beat at the end of class.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Lola dance well in one class. Nothing tells about a big show. That goes too far.',
              'The paragraph says Olive gave away her old shoes, not Lola.',
              'The paragraph says Lola tapped every step on the beat by the end of class. That is the opposite.'],
            why: 'The paragraph shows Lola’s big shoes click at the wrong times. She had a hard time at the start. At the end, Lola waves to Olive and asks to stand next to her. She wants to be friends with Olive. Both answers have proof.' },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              'Here are the steps for Choose TWO.',
              'Step 1. Read the question. Who is it about? What does it ask?',
              'Step 2. Find one answer the paragraph proves. Find its proof.',
              'Step 3. Test every other choice. Look back at the paragraph for each one.',
              'Step 4. Check both answers. Each one needs proof. One wrong means no point.',
              'Watch out for a choice that sounds right but goes too far. It says more than the clues show.',
              'Watch out for a choice about the wrong person. Check who did it.',
              'Some questions ask how someone feels at the end. Look at the last sentences of the paragraph.',
              'Some questions ask for lessons. A lesson is an idea about life that the story teaches.',
              'Here is a lesson from our paragraph. Help someone who is new. Lola stood in the back is not a lesson. It is just one detail.',
              'Some answers use feeling words. Proud means you feel good about something you did. Relieved means you stop being worried.',
              'Now you try.'
            ] }
        ]
      },
      pre: {
        story: {
          title: 'The Puck by the Net',
          paragraphs: [
            'In gym class, Trey played floor hockey on the red team. Each time he got the puck, he tried to race down the floor alone. Three kids from the blue team crowded around him and stole it, and Trey stomped his foot. His teammate Yumi stood all alone by the net and called, “Pass it to me!” The next time Trey got the puck, he looked up and slid it to her. Yumi smacked the puck into the net, and the red team scored. Trey cheered so loud that the coach covered her ears. He stood up tall when Yumi said, “Great pass!”'
          ]
        },
        items: [
          { id: 'P1', type: 'ms', skill: 'Character inference', pick: 2,
            q: 'Which TWO sentences BEST describe Trey? Choose TWO answers.',
            choices: ['Trey tries to score all by himself at first.',
              'Trey is willing to change how he plays.',
              'Trey wants to play hockey on a real team.',
              'Trey stands all alone by the net.',
              'Trey keeps the puck the whole game.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Trey play in one gym class. That does not prove he wants to be on a real team. That goes too far.',
              'The paragraph says Yumi stood by the net, not Trey.',
              'The paragraph shows Trey slide the puck to Yumi. That is the opposite.'],
            why: 'The paragraph shows Trey race down the floor alone each time he gets the puck. He tries to score by himself at first. Then Trey looks up and slides the puck to Yumi. He is willing to change how he plays.' },
          { id: 'P2', type: 'ms', skill: 'Drawing conclusions', pick: 2,
            q: 'What can the reader conclude about Yumi? Choose TWO answers.',
            choices: ['Yumi was in a good spot to score.',
              'Yumi helped Trey see a better way to play.',
              'Yumi is the best player in the gym class.',
              'Yumi stomped her foot when the puck was stolen.',
              'Yumi missed the net when Trey passed.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Yumi score one time. That does not prove she is the best in the class. That goes too far.',
              'The paragraph says Trey stomped his foot, not Yumi.',
              'The paragraph says Yumi smacked the puck into the net. That is the opposite.'],
            why: 'The paragraph says Yumi stood all alone by the net. Then she scored. She was in a good spot. The paragraph also shows Yumi call for the puck. Then Trey looks up and passes. She helped Trey see a better way to play.' },
          { id: 'P3', type: 'ms', skill: 'Character feelings', pick: 2,
            q: 'Which TWO sentences BEST tell how Trey feels at the end of the paragraph? Choose TWO answers.',
            choices: ['Trey feels excited that his team scored.',
              'Trey feels proud of his pass to Yumi.',
              'Trey feels sure the red team will win every game.',
              'Trey feels upset when the blue team steals the puck.',
              'Trey feels sorry that he passed.'],
            kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
            notes: [null, null,
              'The paragraph shows the red team score one time. Nothing shows Trey thinks they will win every game. That goes too far.',
              'Trey stomps his foot near the start of the paragraph. The question asks about the end.',
              'The paragraph shows Trey stand up tall after the pass. That is the opposite.'],
            why: 'At the end, Trey cheers so loud that the coach covers her ears. He feels excited that his team scored. Then Yumi says, Great pass. Trey stands up tall. He feels proud of his pass.' }
        ]
      },
      turn: [
        { story: {
            title: 'The Frog That Flopped',
            paragraphs: [
              'At origami club, kids folded paper into frogs and birds. Emil folded a green frog. When he pressed its back, the frog flopped over, and Emil sighed. He opened the paper and looked at each fold. Then he folded it again, slow and neat, and pressed each line flat. This time, the frog hopped right off the desk, and Emil grinned. A first grader asked him how he did it. Emil showed her each fold, one at a time. When her frog hopped too, Emil clapped and gave her a high five.'
            ]
          },
          items: [
            { id: 'Q01', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Emil? Choose TWO answers.',
              choices: ['Emil is careful when he tries again.',
                'Emil is happy to teach someone else.',
                'Emil wants to start his own origami club.',
                'Emil asks how to make the frog hop.',
                'Emil gives up after his frog flops over.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Emil fold frogs at one club. That does not prove he wants to start his own club. That goes too far.',
                'The paragraph says the first grader asked how, not Emil.',
                'The paragraph shows Emil open the paper and try again. That is the opposite.'],
              why: 'The paragraph shows Emil look at each fold. He folds the frog again, slow and neat, and presses each line flat. He is careful. Then Emil shows the first grader each fold, one at a time. He is happy to teach someone else.' },
            { id: 'Q02', type: 'ms', skill: 'Character feelings', pick: 2,
              q: 'Which TWO sentences BEST tell how Emil feels at the end of the paragraph? Choose TWO answers.',
              choices: ['Emil feels proud of his new frog.',
                'Emil feels glad when the first grader’s frog hops.',
                'Emil feels like the best folder in the club.',
                'Emil feels let down when his frog flops.',
                'Emil feels bothered by the first grader’s questions.'],
              kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
              notes: [null, null,
                'The paragraph shows Emil fold one good frog. Nothing shows he thinks he is the best in the club. That goes too far.',
                'Emil sighs at the start of the paragraph, when the frog flops. The question asks about the end.',
                'The paragraph shows Emil help the first grader and give her a high five. That is the opposite.'],
              why: 'Near the end, Emil’s frog hops right off the desk, and he grins. He feels proud of his new frog. Then the first grader’s frog hops too. Emil claps and gives her a high five. He feels glad.' }
          ] },
        { story: {
            title: 'A Shoe in the Maple Tree',
            paragraphs: [
              'Polly and her dad played badminton in the back yard each evening. They hit a small feather ball, called a birdie, over the net. One night, Polly hit the birdie so hard that it got stuck in a maple tree. Dad threw his shoe at it, but the shoe got stuck too. Polly laughed so hard that she fell down in the grass. Then she ran to the shed and came back with a long broom. She stood on a step stool and poked the branch. Down fell the birdie and the shoe. Dad danced a silly dance and called her the hero of the back yard.'
            ]
          },
          items: [
            { id: 'Q03', type: 'ms', skill: 'Drawing conclusions', pick: 2,
              q: 'What can the reader conclude about Polly’s dad? Choose TWO answers.',
              choices: ['Dad likes to spend time with Polly.',
                'Dad can be silly and playful.',
                'Dad plays badminton on a team at work.',
                'Dad hit the birdie into the tree.',
                'Dad was upset that Polly used the broom.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Dad play in the back yard with Polly. That does not prove he is on a team. That goes too far.',
                'The paragraph says Polly hit the birdie into the tree, not Dad.',
                'The paragraph shows Dad dance a silly dance and call Polly a hero. That is the opposite.'],
              why: 'The paragraph says Polly and Dad play badminton each evening. Dad likes to spend time with Polly. The paragraph also shows Dad throw his shoe into the tree. At the end, he dances a silly dance and calls Polly a hero. Dad can be silly and playful.' },
            { id: 'Q04', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Polly? Choose TWO answers.',
              choices: ['Polly can laugh when things go wrong.',
                'Polly thinks of a smart way to fix a problem.',
                'Polly is the best badminton player on her street.',
                'Polly throws her shoe up into the tree.',
                'Polly gives up and leaves the birdie in the tree.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Polly hit the birdie hard one time. That does not prove she is the best on her street. That goes too far.',
                'The paragraph says Dad threw his shoe, not Polly.',
                'The paragraph shows Polly poke the branch until the birdie and the shoe fall. That is the opposite.'],
              why: 'The paragraph shows the birdie and the shoe get stuck. Polly laughs so hard that she falls down. She can laugh when things go wrong. Then Polly gets a long broom and pokes the branch. She thinks of a smart way to fix the problem.' }
          ] },
        { story: {
            title: 'Paco Runs the Music',
            paragraphs: [
              'At Aunt Rita’s party, the kids played musical chairs. Little Paco was only four, and he was the first one out. He sat on the rug, and his lip began to shake. His big cousin, Cora, left her own chair and sat by him. She whispered an idea in his ear. Soon Paco was in charge of the music. He pressed stop at the silliest times. Each time the kids rushed for a chair, Paco giggled and kicked his feet. When the game ended, he begged to play the music again.'
            ]
          },
          items: [
            { id: 'Q05', type: 'ms', skill: 'Character feelings', pick: 2,
              q: 'Which TWO sentences BEST tell how Paco feels at the end of the paragraph? Choose TWO answers.',
              choices: ['Paco feels happy being in charge of the music.',
                'Paco feels eager to do the music again.',
                'Paco feels like he won the whole game.',
                'Paco feels upset about being out first.',
                'Paco feels bored by his music job.'],
              kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
              notes: [null, null,
                'The paragraph shows Paco run the music, but he was the first one out. Nothing shows he thinks he won. That goes too far.',
                'Paco’s lip shakes near the start of the paragraph. The question asks about the end.',
                'The paragraph shows Paco giggle and kick his feet. That is the opposite.'],
              why: 'The paragraph shows Paco giggle and kick his feet each time he stops the music. He feels happy being in charge. At the end, Paco begs to play the music again. He feels eager to do it again.' },
            { id: 'Q06', type: 'ms', skill: 'Drawing conclusions', pick: 2,
              q: 'What can the reader conclude about Cora? Choose TWO answers.',
              choices: ['Cora left the game to help Paco.',
                'Cora thought of a fun job for Paco.',
                'Cora plans all of the games at parties.',
                'Cora was the first one out of the game.',
                'Cora laughed when Paco got out.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Cora help in one game. That does not prove she plans all the games. That goes too far.',
                'The paragraph says Paco was the first one out, not Cora.',
                'The paragraph shows Cora sit by Paco when he is sad. That is the opposite.'],
              why: 'The paragraph shows Cora leave her own chair and sit by Paco. She left the game to help him. Then Cora whispers an idea, and soon Paco is in charge of the music. She thought of a fun job for Paco.' }
          ] },
        { story: {
            title: 'Tobi and the Block Tower',
            paragraphs: [
              'Mara spent all morning on a tall tower of blocks. The top was higher than her chin. Her little brother, Tobi, ran by with his toy truck and bumped it. Each block crashed to the floor. Mara made a fist and opened her mouth to yell. Then she saw Tobi’s scared face and took a slow breath. “Let’s build a new one together,” she said. This time, Tobi handed her each block, and the new tower got even taller.'
            ]
          },
          items: [
            { id: 'Q07', type: 'ms', skill: 'Theme', pick: 2,
              q: 'Which TWO sentences BEST state lessons of the paragraph? Choose TWO answers.',
              choices: ['Stay calm when something goes wrong.',
                'Working together can make something better.',
                'Little kids should never play near blocks.',
                'Yelling is the best way to fix a mistake.',
                'Tobi runs by with his toy truck.'],
              kinds: [null, null, 'toofar', 'opposite', 'onedetail'],
              notes: [null, null,
                'The paragraph shows Tobi bump one tower by mistake. It does not say little kids should never play near blocks. That goes too far.',
                'The paragraph shows Mara take a slow breath, and things go well. That is the opposite.',
                'This is just one detail from the paragraph. It is not a lesson about life.'],
              why: 'The paragraph shows Mara want to yell. Then she takes a slow breath, and she does not yell. Stay calm when something goes wrong. At the end, Mara and Tobi build together, and the new tower is even taller. Working together can make something better.' },
            { id: 'Q08', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Mara? Choose TWO answers.',
              choices: ['Mara works hard on what she builds.',
                'Mara cares about how Tobi feels.',
                'Mara wants to build real houses someday.',
                'Mara bumps the tower with a toy truck.',
                'Mara yells at Tobi for the mess.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Mara build one block tower. That does not prove she wants to build houses. That goes too far.',
                'The paragraph says Tobi bumped the tower, not Mara.',
                'The paragraph shows Mara take a slow breath and not yell. That is the opposite.'],
              why: 'The paragraph shows Mara spend all morning on her tower. She works hard on what she builds. Then Mara sees Tobi’s scared face, and she does not yell. She cares about how Tobi feels.' }
          ] }
      ]
    },

    /* ───────── version 3 ───────── */
    {
      teach: {
        story: {
          title: 'Standing Like a Tree',
          paragraphs: [
            'Ronan went to a yoga class with his mom on Saturday. The teacher asked everyone to stand on one foot like a tree. Ronan stood still with his arms up high. Mom wobbled, tipped over, and bumped into the wall. A few people giggled, and Mom’s face turned red. Ronan moved his mat next to hers and held out his hand. Mom held on, and this time she stood on one foot for a long time. After class, she kissed the top of Ronan’s head.'
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Choose TWO',
            lines: [
              'In this lesson, each story is just one paragraph. A paragraph is a group of sentences about one thing.',
              'Some test questions end with the words, Choose TWO answers.',
              'That means two of the answers are right. You must find both.',
              'It is all or nothing. One right and one wrong gets no point, like the test.',
              'Here is an example. Your friend comes in with a red nose and snow on his hat.',
              'What can you conclude? To conclude means to figure out from the clues.',
              'Choose TWO. It is cold outside. It is snowing. He just ate lunch.',
              'It is cold outside. His red nose shows that. It is snowing. The snow on his hat shows that.',
              'He just ate lunch. No clue shows that. So we do not pick it.',
              'To choose, tap an answer. Its box turns yellow and gets a check mark.',
              'Did you change your mind? Tap the answer again. The check goes away.',
              'When you have two, tap That’s My Answer!'
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me choose TWO',
            lines: [
              'Let’s do one together. The question is, Which TWO sentences BEST describe Ronan?',
              'Describe means tell what Ronan is like. BEST means the paragraph proves it the most.',
              'First, find one answer the paragraph proves. Ronan is good at keeping his balance.',
              'The paragraph says Ronan stood still with his arms up high. He was on one foot. That is proof.',
              'Next, find the second answer. Ronan helps Mom when she has a hard time.',
              'The paragraph says Ronan moved his mat next to Mom’s and held out his hand. That is proof too.',
              'Then test the other choices. Ronan wants to teach yoga when he grows up. That one sounds right.',
              'Ronan is good at yoga. But no clue tells what he wants to do when he grows up. That choice goes too far.',
              'Ronan giggles when Mom tips over. Check who giggled. The paragraph says a few people giggled, not Ronan.',
              'Last, check both answers. Each one has proof. So we pick those two.'
            ],
            lit: ['Ronan stood still with his arms up high.', 'Ronan moved his mat next to hers and held out his hand.'] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: 'Which ONE of these is true about Mom?',
            choices: ['Mom felt embarrassed when she tipped over.',
              'Mom stood still with her arms up high.',
              'Mom stood on one foot easily the first time.',
              'Mom wanted to leave the class early.'],
            kinds: [null, 'wrongwho', 'opposite', 'noclue'],
            notes: [null,
              'The paragraph says Ronan stood still with his arms up, not Mom.',
              'The paragraph says Mom wobbled and tipped over. That is the opposite.',
              'The paragraph gives no clue that Mom wanted to leave.'],
            why: 'The paragraph shows Mom tip over and bump into the wall. People giggle, and her face turns red. Embarrassed means you feel silly in front of others. So Mom felt embarrassed when she tipped over.' },
          { kind: 'step', id: 'S2', type: 'ms', pick: 2,
            q: 'What can the reader conclude about Mom? Choose TWO answers.',
            choices: ['Mom felt embarrassed when she tipped over.',
              'Mom was thankful for Ronan’s help.',
              'Mom will be the best in the class next week.',
              'Mom moved her mat next to Ronan’s.',
              'Mom stood on one foot easily the first time.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Mom stand for a long time one time. Nothing proves she will be the best next week. That goes too far.',
              'The paragraph says Ronan moved his mat, not Mom.',
              'The paragraph says Mom wobbled and tipped over. That is the opposite.'],
            why: 'The paragraph shows Mom tip over, and her face turns red. She felt embarrassed. At the end, Mom kisses the top of Ronan’s head after he helps her. She was thankful for his help. Both answers have proof.' },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              'Here are the steps for Choose TWO.',
              'Step 1. Read the question. Who is it about? What does it ask?',
              'Step 2. Find one answer the paragraph proves. Find its proof.',
              'Step 3. Test every other choice. Look back at the paragraph for each one.',
              'Step 4. Check both answers. Each one needs proof. One wrong means no point.',
              'Watch out for a choice that sounds right but goes too far. It says more than the clues show.',
              'Watch out for a choice about the wrong person. Check who did it.',
              'Some questions ask how someone feels at the end. Look at the last sentences of the paragraph.',
              'Some questions ask for lessons. A lesson is an idea about life that the story teaches.',
              'Here is a lesson from our paragraph. Help someone who is having a hard time. Mom bumped into the wall is not a lesson. It is just one detail.',
              'Some answers use feeling words. Proud means you feel good about something you did. Relieved means you stop being worried.',
              'Now you try.'
            ] }
        ]
      },
      pre: {
        story: {
          title: 'Tetherball Against Boone',
          paragraphs: [
            'At recess, kids played tetherball with a ball tied to a pole. Boone, a big fifth grader, won each game. He hit so hard that the ball flew around the pole fast. Sela was short, but she got in line with shaking knees. She watched Boone and saw that he always hit to the right. On her turn, Sela jumped right and blocked his big hit. The ball swung back the other way, and Sela won the game. Boone stared at the pole with his mouth open. Sela let out a big breath and did a little dance.'
          ]
        },
        items: [
          { id: 'P1', type: 'ms', skill: 'Character inference', pick: 2,
            q: 'Which TWO sentences BEST describe Sela? Choose TWO answers.',
            choices: ['Sela is brave enough to play a bigger kid.',
              'Sela watches carefully to learn how Boone plays.',
              'Sela wants to join a tetherball team.',
              'Sela wins each game of tetherball at recess.',
              'Sela stays out of the tetherball line.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Sela play one game at recess. That does not prove she wants to join a team. That goes too far.',
              'The paragraph says Boone won each game, not Sela.',
              'The paragraph says Sela got in line, even with shaking knees. That is the opposite.'],
            why: 'The paragraph shows Sela’s knees shake, but she gets in line to play a bigger kid. She is brave. The paragraph also shows Sela watch Boone play. She sees that he always hits to the right. She watches carefully.' },
          { id: 'P2', type: 'ms', skill: 'Drawing conclusions', pick: 2,
            q: 'What can the reader conclude about Boone? Choose TWO answers.',
            choices: ['Boone is very good at tetherball.',
              'Boone did not expect Sela to win.',
              'Boone is angry at Sela.',
              'Boone lets out a big breath and dances.',
              'Boone hits the ball to the left each time.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Boone stare with his mouth open. That shows he is surprised. It does not prove he is angry. That goes too far.',
              'The paragraph says Sela danced, not Boone.',
              'The paragraph says Boone always hit to the right. That is the opposite.'],
            why: 'The paragraph says Boone won each game and hit the ball hard. He is very good at tetherball. At the end, Boone stares at the pole with his mouth open. He did not expect Sela to win.' },
          { id: 'P3', type: 'ms', skill: 'Character feelings', pick: 2,
            q: 'Which TWO sentences BEST tell how Sela feels at the end of the paragraph? Choose TWO answers.',
            choices: ['Sela feels relieved that her plan worked.',
              'Sela feels proud that she beat Boone.',
              'Sela feels sure she can beat any fifth grader.',
              'Sela feels nervous while she waits in line.',
              'Sela feels sad that she lost the game.'],
            kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
            notes: [null, null,
              'The paragraph shows Sela beat Boone one time. Nothing shows she thinks she can beat any fifth grader. That goes too far.',
              'Sela’s knees shake near the start of the paragraph. The question asks about the end.',
              'The paragraph says Sela won the game. That is the opposite.'],
            why: 'At the end, Sela lets out a big breath. She feels relieved that her plan worked. Then Sela does a little dance. She feels proud that she beat Boone.' }
        ]
      },
      turn: [
        { story: {
            title: 'Straight Legs on the Blue Mat',
            paragraphs: [
              'In gymnastics class, Freya did a perfect cartwheel on the blue mat. Coach Dee clapped, and every kid in line said, “Wow!” Emmy crossed her arms and stared at the floor. Her own cartwheels always ended with bent legs. When it was her turn, Emmy kicked hard, but she wobbled and fell. Freya ran over and showed her how to keep her legs straight. Emmy tried again and landed on both feet. She smiled at Freya and gave her a quick hug.'
            ]
          },
          items: [
            { id: 'Q01', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Freya? Choose TWO answers.',
              choices: ['Freya is very good at cartwheels.',
                'Freya is quick to help a classmate.',
                'Freya wants to be in a big contest someday.',
                'Freya crosses her arms and stares at the floor.',
                'Freya laughs when Emmy falls.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Freya do one perfect cartwheel. That does not prove she wants to be in a contest. That goes too far.',
                'The paragraph says Emmy crossed her arms, not Freya.',
                'The paragraph shows Freya run over to help when Emmy falls. That is the opposite.'],
              why: 'The paragraph shows Freya do a perfect cartwheel. The coach claps, and the kids say wow. She is very good at cartwheels. When Emmy falls, Freya runs over and shows her how to keep her legs straight. She is quick to help.' },
            { id: 'Q02', type: 'ms', skill: 'Character feelings', pick: 2,
              q: 'Which TWO sentences BEST tell how Emmy feels at the end of the paragraph? Choose TWO answers.',
              choices: ['Emmy feels proud that she landed on her feet.',
                'Emmy feels thankful for Freya’s help.',
                'Emmy feels sure she is better than Freya now.',
                'Emmy feels jealous when the kids say wow.',
                'Emmy feels sad that she fell again.'],
              kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
              notes: [null, null,
                'The paragraph shows Emmy land one cartwheel. Nothing shows she thinks she is better than Freya. That goes too far.',
                'Emmy crosses her arms near the start of the paragraph. Jealous means you want what someone else has. The question asks about the end.',
                'The paragraph shows Emmy try again and land on both feet. That is the opposite.'],
              why: 'At the end, Emmy lands on both feet and smiles. She feels proud. Then she gives Freya a quick hug. She feels thankful for Freya’s help.' }
          ] },
        { story: {
            title: 'Twenty More Serves',
            paragraphs: [
              'At volleyball practice, Kenzo could not get his serve over the net. Ball after ball smacked into the net and rolled back. A few kids on his team groaned, and Kenzo’s face turned red. Coach Ortiz did not groan. She asked Kenzo to stay late. She showed him how to toss the ball up high. As the rest packed up, Kenzo tossed each ball high and served twenty more. On the last one, the ball sailed over the net. Kenzo pumped his fist and ran to tell Coach Ortiz.'
            ]
          },
          items: [
            { id: 'Q03', type: 'ms', skill: 'Drawing conclusions', pick: 2,
              q: 'What can the reader conclude about Coach Ortiz? Choose TWO answers.',
              choices: ['Coach Ortiz is patient with Kenzo.',
                'Coach Ortiz knows how to fix a serve.',
                'Coach Ortiz thinks Kenzo is her best player.',
                'Coach Ortiz groans at Kenzo.',
                'Coach Ortiz sends Kenzo home with the others.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Coach Ortiz help Kenzo. Nothing proves she thinks he is her best player. That goes too far.',
                'The paragraph says a few kids groaned. Coach Ortiz did not.',
                'The paragraph shows Coach Ortiz ask Kenzo to stay late. That is the opposite.'],
              why: 'The paragraph says Coach Ortiz did not groan. She asks Kenzo to stay late. She is patient with him. She shows Kenzo how to toss the ball up high, and then his serve goes over. She knows how to fix a serve.' },
            { id: 'Q04', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Kenzo? Choose TWO answers.',
              choices: ['Kenzo keeps trying after many misses.',
                'Kenzo listens to his coach’s tip.',
                'Kenzo wants to play volleyball in high school.',
                'Kenzo shows a kid how to toss the ball.',
                'Kenzo packs up and goes home.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Kenzo at one practice. That does not prove what he wants to do in high school. That goes too far.',
                'The paragraph says Coach Ortiz showed Kenzo how to toss. Kenzo did not show anyone.',
                'The paragraph says Kenzo served twenty more as the rest packed up. That is the opposite.'],
              why: 'The paragraph shows Kenzo miss ball after ball. Then he serves twenty more as the rest pack up. He keeps trying. Coach Ortiz shows him how to toss the ball up high, and Kenzo tosses each ball high. He listens to her tip.' }
          ] },
        { story: {
            title: 'One Step Back at Day Camp',
            paragraphs: [
              'At day camp, Lani and Beto played the water balloon toss. After each catch, they both took one big step back. Beto caught it with soft hands, as if it were an egg. Soon they were the last team left, far apart on the grass. Lani threw the balloon high, and it burst on Beto’s head. Lani covered her mouth with both hands. Beto wiped his face and began to laugh. Lani dropped her hands and laughed with him until her belly hurt.'
            ]
          },
          items: [
            { id: 'Q05', type: 'ms', skill: 'Character feelings', pick: 2,
              q: 'Which TWO sentences BEST tell how Lani feels at the end of the paragraph? Choose TWO answers.',
              choices: ['Lani feels relieved that Beto is not upset.',
                'Lani feels happy as they laugh together.',
                'Lani feels sure they will win next summer.',
                'Lani feels worried when the balloon bursts.',
                'Lani feels upset that the game is over.'],
              kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
              notes: [null, null,
                'The paragraph shows Lani and Beto do well in one game. Nothing shows she thinks they will win next summer. That goes too far.',
                'Lani covers her mouth when the balloon bursts. Then Beto laughs. By the end, she is not worried.',
                'The paragraph shows Lani laugh until her belly hurts. That is the opposite.'],
              why: 'Lani covers her mouth when the balloon bursts. Then Beto laughs, and Lani drops her hands. She feels relieved that he is not upset. Lani laughs with Beto until her belly hurts. She feels happy as they laugh together.' },
            { id: 'Q06', type: 'ms', skill: 'Drawing conclusions', pick: 2,
              q: 'What can the reader conclude about Beto? Choose TWO answers.',
              choices: ['Beto is careful when he catches.',
                'Beto is good at the balloon toss.',
                'Beto is the best catcher at day camp.',
                'Beto threw the balloon too high.',
                'Beto yells at Lani for the bad throw.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Beto catch well in one game. That does not prove he is the best at camp. That goes too far.',
                'The paragraph says Lani threw the balloon high, not Beto.',
                'The paragraph shows Beto laugh after he gets wet. That is the opposite.'],
              why: 'The paragraph shows Beto catch with soft hands, as if the balloon were an egg. He is careful. Soon Lani and Beto are the last team left. Beto is good at the balloon toss.' }
          ] },
        { story: {
            title: 'Crab Dances Sideways',
            paragraphs: [
              'Long ago, the beach animals held a dance contest. Crab wanted to join, but he could only walk sideways. Seal and Gull laughed and said his feet went the wrong way. So Crab hid behind a rock and watched. Then the tide came in, and waves washed over the sand. The other dancers slipped, but Crab stepped out and danced sideways, quick and steady. All the animals stopped to watch. Soon they danced his way too. From then on, all the beach animals loved the crab step.'
            ]
          },
          items: [
            { id: 'Q07', type: 'ms', skill: 'Theme', pick: 2,
              q: 'Which TWO sentences BEST state lessons of the paragraph? Choose TWO answers.',
              choices: ['What makes you different can be a strength.',
                'Do not laugh at others for being different.',
                'Everyone should learn to walk sideways.',
                'Hide the things that make you different.',
                'The tide comes in over the sand.'],
              kinds: [null, null, 'toofar', 'opposite', 'onedetail'],
              notes: [null, null,
                'The paragraph shows the animals learn the crab step. It does not say everyone should walk sideways. That goes too far.',
                'The paragraph shows Crab come out from behind the rock, and things go well. That is the opposite.',
                'This is just one detail from the paragraph. It is not a lesson about life.'],
              why: 'The paragraph shows Crab dance sideways on the wet sand when the others slip. His sideways walk helps him. What makes you different can be a strength. Seal and Gull laugh at Crab at first. Then they copy his dance. Do not laugh at others for being different.' },
            { id: 'Q08', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Crab? Choose TWO answers.',
              choices: ['Crab wants to be part of the fun.',
                'Crab is brave enough to dance in front of others.',
                'Crab wants to be the king of the beach.',
                'Crab laughs at the way the others move.',
                'Crab stays behind the rock the whole time.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Crab dance one time. Nothing tells that he wants to be king. That goes too far.',
                'The paragraph says Seal and Gull laughed, not Crab.',
                'The paragraph shows Crab step out and dance. That is the opposite.'],
              why: 'The paragraph says Crab wanted to join, and he watched from behind a rock. He wants to be part of the fun. Then Crab steps out and dances while all the animals watch. He is brave.' }
          ] }
      ]
    },

    /* ───────── version 4 ───────── */
    {
      teach: {
        story: {
          title: 'Slow and Low at the Park',
          paragraphs: [
            'Neil and his little sister, Jane, played with a flying disc at the city park. Neil threw it hard and fast, the same way he played with his older friends. The disc zoomed past Jane and landed in the bushes three times. Jane’s shoulders drooped, and she sat down on the grass. Neil walked over and sat down beside her. Then he stood a few steps away and tossed the disc slow and low. Jane caught it with both hands and shouted, “I got it!” After every catch, Neil took one small step backward.'
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Choose TWO',
            lines: [
              'In this lesson, each story is just one paragraph. A paragraph is a group of sentences about one thing.',
              'Some test questions end with the words, Choose TWO answers.',
              'That means two of the answers are right. You must find both.',
              'It is all or nothing. One right and one wrong gets no point, like the test.',
              'Here is an example. Your friend comes in with a red nose and snow on his hat.',
              'What can you conclude? To conclude means to figure out from the clues.',
              'Choose TWO. It is cold outside. It is snowing. He just ate lunch.',
              'It is cold outside. His red nose shows that. It is snowing. The snow on his hat shows that.',
              'He just ate lunch. No clue shows that. So we do not pick it.',
              'To choose, tap an answer. Its box turns yellow and gets a check mark.',
              'Did you change your mind? Tap the answer again. The check goes away.',
              'When you have two, tap That’s My Answer!'
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me choose TWO',
            lines: [
              'Let’s do one together. The question is, Which TWO sentences BEST describe Neil?',
              'Describe means tell what Neil is like. BEST means the paragraph proves it the most.',
              'First, find one answer the paragraph proves. Neil notices when Jane feels bad.',
              'The paragraph says Jane sat down on the grass. Then Neil walked over and sat down beside her. That is proof.',
              'Next, find the second answer. Neil changes the way he throws to help Jane.',
              'The paragraph says Neil stood a few steps away and tossed the disc slow and low. That is proof too.',
              'Then test the other choices. Neil wants to be a coach someday. That one sounds right.',
              'Neil does help Jane. But no clue tells what he wants to be. That choice goes too far.',
              'Neil keeps throwing hard and fast. The paragraph shows the opposite. He tosses slow and low.',
              'Last, check both answers. Each one has proof. So we pick those two.'
            ],
            lit: ['Neil walked over and sat down beside her.', 'Then he stood a few steps away and tossed the disc slow and low.'] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: 'Which ONE of these is true about Jane?',
            choices: ['Jane felt let down when she kept missing.',
              'Jane threw the disc hard and fast.',
              'Jane caught every throw from the start.',
              'Jane wanted to go home for a snack.'],
            kinds: [null, 'wrongwho', 'opposite', 'noclue'],
            notes: [null,
              'The paragraph says Neil threw hard and fast, not Jane.',
              'The paragraph says the disc zoomed past Jane three times. That is the opposite.',
              'The paragraph gives no clue about a snack.'],
            why: 'The paragraph shows the disc zoom past Jane three times. Her shoulders droop, and she sits down. So Jane felt let down when she kept missing.' },
          { kind: 'step', id: 'S2', type: 'ms', pick: 2,
            q: 'What can the reader conclude about Jane? Choose TWO answers.',
            choices: ['Jane felt let down when she kept missing.',
              'Jane was excited when she finally caught it.',
              'Jane will catch better than Neil someday.',
              'Jane took a step back after each catch.',
              'Jane caught every throw from the start.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Jane catch a slow, low throw. Nothing proves she will catch better than Neil. That goes too far.',
              'The paragraph says Neil took a step back, not Jane.',
              'The paragraph says the disc zoomed past Jane three times. That is the opposite.'],
            why: 'The paragraph shows Jane’s shoulders droop after she misses. She felt let down. Then Jane catches the disc and shouts, I got it. She was excited. Both answers have proof.' },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              'Here are the steps for Choose TWO.',
              'Step 1. Read the question. Who is it about? What does it ask?',
              'Step 2. Find one answer the paragraph proves. Find its proof.',
              'Step 3. Test every other choice. Look back at the paragraph for each one.',
              'Step 4. Check both answers. Each one needs proof. One wrong means no point.',
              'Watch out for a choice that sounds right but goes too far. It says more than the clues show.',
              'Watch out for a choice about the wrong person. Check who did it.',
              'Some questions ask how someone feels at the end. Look at the last sentences of the paragraph.',
              'Some questions ask for lessons. A lesson is an idea about life that the story teaches.',
              'Here is a lesson from our paragraph. Change how you play so everyone can join in. The disc landed in the bushes is not a lesson. It is just one detail.',
              'Some answers use feeling words. Proud means you feel good about something you did. Relieved means you stop being worried.',
              'Now you try.'
            ] }
        ]
      },
      pre: {
        story: {
          title: 'Jacks in Grandma’s Closet',
          paragraphs: [
            'Zora found a bag of jacks, small metal stars, in Grandma Ina’s closet. Grandma laughed and said she played jacks at recess as a girl. She sat on the floor and bounced the red ball. Then she scooped up five jacks in one hand. When Zora tried, the jacks slid through her fingers, and she frowned. Zora asked Grandma to show her again, slow this time. The ice cream truck went by, but Zora did not look up. At last, Zora scooped up three jacks before the ball bounced twice. She threw her arms around Grandma and asked to play again the next day.'
          ]
        },
        items: [
          { id: 'P1', type: 'ms', skill: 'Character inference', pick: 2,
            q: 'Which TWO sentences BEST describe Zora? Choose TWO answers.',
            choices: ['Zora is willing to ask for help.',
              'Zora stays focused on learning the game.',
              'Zora wants to start a jacks club at school.',
              'Zora played jacks at recess as a girl.',
              'Zora runs out to the ice cream truck.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Zora play jacks one day at home. That does not prove she wants to start a club. That goes too far.',
              'The paragraph says Grandma Ina played at recess as a girl, not Zora.',
              'The paragraph says Zora did not look up when the ice cream truck went by. That is the opposite.'],
            why: 'The paragraph shows Zora ask Grandma to show her again, slower. She is willing to ask for help. The ice cream truck goes by, but Zora does not look up. She stays focused on learning the game.' },
          { id: 'P2', type: 'ms', skill: 'Drawing conclusions', pick: 2,
            q: 'What can the reader conclude about Grandma Ina? Choose TWO answers.',
            choices: ['Grandma Ina is still good at jacks.',
              'Grandma Ina has happy memories of jacks.',
              'Grandma Ina was the best jacks player in her school.',
              'Grandma Ina lets the jacks slide through her fingers.',
              'Grandma Ina is too busy to play.'],
            kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
            notes: [null, null,
              'The paragraph shows Grandma Ina play well. Nothing proves she was the best in her school. That goes too far.',
              'The paragraph says the jacks slid through Zora’s fingers, not Grandma’s.',
              'The paragraph shows Grandma Ina sit on the floor to play. That is the opposite.'],
            why: 'The paragraph shows Grandma Ina scoop up five jacks in one hand. She is still good at jacks. The paragraph also shows Grandma laugh about playing jacks at recess. She has happy memories of jacks.' },
          { id: 'P3', type: 'ms', skill: 'Character feelings', pick: 2,
            q: 'Which TWO sentences BEST tell how Zora feels at the end of the paragraph? Choose TWO answers.',
            choices: ['Zora feels thankful for Grandma’s help.',
              'Zora feels eager to play jacks again.',
              'Zora feels ready to beat Grandma Ina.',
              'Zora feels upset when the jacks slip away.',
              'Zora feels bored by the old game.'],
            kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
            notes: [null, null,
              'The paragraph shows Zora scoop up three jacks. Grandma scooped up five. Nothing proves Zora can beat her. That goes too far.',
              'Zora frowns in the middle of the paragraph. The question asks about the end.',
              'The paragraph shows Zora ask to play again the next day. That is the opposite.'],
            why: 'At the end, Zora throws her arms around Grandma. She feels thankful for Grandma’s help. Then Zora asks to play again the next day. She feels eager to play jacks again.' }
        ]
      },
      turn: [
        { story: {
            title: 'Inside, Outside',
            paragraphs: [
              'At the school picnic, Percy and Ayo ran the three-legged race. Their two inside legs were tied with a rope. When the whistle blew, Percy stepped with one leg and Ayo with the other. They tumbled into the grass, and the other teams raced past. Percy tugged at the knot to get free, but Ayo had an idea. “Let’s say inside, outside as we step,” Ayo said. They said the words and took slow steps at first. Soon they were running in step, and they passed two teams. They crossed the line in fourth place, laughing and still shouting, “Inside, outside!”'
            ]
          },
          items: [
            { id: 'Q01', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Ayo? Choose TWO answers.',
              choices: ['Ayo thinks of a way to fix the problem.',
                'Ayo does not give up when they fall.',
                'Ayo is the fastest runner in the school.',
                'Ayo tugs at the knot to get free.',
                'Ayo walks off and leaves Percy in the grass.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Ayo run in one race, and they come in fourth. Nothing proves Ayo is the fastest in the school. That goes too far.',
                'The paragraph says Percy tugged at the knot, not Ayo.',
                'The paragraph shows Ayo stay and share an idea with Percy. That is the opposite.'],
              why: 'The paragraph shows Ayo tell Percy to say inside, outside as they step. Then they run in step. That fixes the problem. The paragraph also shows Percy tug at the knot after they fall, but Ayo has an idea. Ayo does not give up.' },
            { id: 'Q02', type: 'ms', skill: 'Character feelings', pick: 2,
              q: 'Which TWO sentences BEST tell how Percy feels at the end of the paragraph? Choose TWO answers.',
              choices: ['Percy feels happy even though they did not win.',
                'Percy feels glad that Ayo’s idea worked.',
                'Percy feels sure they will come in first next year.',
                'Percy feels like quitting after they fall.',
                'Percy feels upset about fourth place.'],
              kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
              notes: [null, null,
                'The paragraph shows them pass two teams in one race. Nothing proves they will be first next year. That goes too far.',
                'Percy tugs at the knot in the middle of the paragraph. The question asks about the end.',
                'The paragraph shows Percy laugh as they cross the line. That is the opposite.'],
              why: 'At the end, Percy and Ayo come in fourth place, but they are laughing. Percy feels happy even though they did not win. They are still shouting the words from Ayo’s idea. Percy feels glad that the idea worked.' }
          ] },
        { story: {
            title: 'Layla Acts Out a Cat',
            paragraphs: [
              'On game night, Layla’s family played charades. Each player had to act out a word without talking. Layla’s card said cat, but she stood frozen by the couch. Her face got hot, and she hid the card behind her back. Grandpa leaned over and whispered, “Just have fun with it.” Layla got down on her hands and knees and licked her hand like a paw. Her cousin shouted, “Cat!” and everyone cheered. Layla grinned and waved, and then she asked for another card.'
            ]
          },
          items: [
            { id: 'Q03', type: 'ms', skill: 'Drawing conclusions', pick: 2,
              q: 'What can the reader conclude about Grandpa? Choose TWO answers.',
              choices: ['Grandpa noticed that Layla was stuck.',
                'Grandpa’s words helped Layla relax.',
                'Grandpa wants Layla to be an actor someday.',
                'Grandpa hid the card behind his back.',
                'Grandpa told Layla to hurry up.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Grandpa help Layla in one game. Nothing tells what he wants her to be. That goes too far.',
                'The paragraph says Layla hid the card, not Grandpa.',
                'The paragraph shows Grandpa whisper kind words to Layla. That is the opposite.'],
              why: 'The paragraph shows Layla stand frozen with a hot face. Grandpa leans over and whispers to her. He noticed she was stuck. Right after his words, Layla gets down and acts like a cat. His words helped her relax.' },
            { id: 'Q04', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Layla? Choose TWO answers.',
              choices: ['Layla is shy in front of others at first.',
                'Layla can be silly and have fun.',
                'Layla wants to be in a school play.',
                'Layla shouts out the word cat.',
                'Layla will not act out her card.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Layla act at home one time. That does not prove she wants to be in a play. That goes too far.',
                'The paragraph says her cousin shouted cat, not Layla.',
                'The paragraph shows Layla act like a cat. That is the opposite.'],
              why: 'The paragraph shows Layla stand frozen, and her face gets hot. She is shy at first. Then Layla gets on her hands and knees and licks her hand like a cat. She grins and waves, and then she asks for another card. She can be silly and have fun.' }
          ] },
        { story: {
            title: 'The Top with Chipped Paint',
            paragraphs: [
              'At the after-school club, the kids held a spinning top contest. Walt’s top was made of old wood, and its red paint was chipped. His uncle had carved it for him long ago. The other kids had shiny plastic tops that lit up. When Walt wrapped his string, a boy giggled at the chipped paint, and Walt’s cheeks burned. One by one, the shiny tops wobbled and fell. Walt’s old top hummed and spun long after the rest had stopped. Walt held the top up high, and then he ran to call his uncle.'
            ]
          },
          items: [
            { id: 'Q05', type: 'ms', skill: 'Character feelings', pick: 2,
              q: 'Which TWO sentences BEST tell how Walt feels at the end of the paragraph? Choose TWO answers.',
              choices: ['Walt feels proud of his old top.',
                'Walt feels excited to tell his uncle.',
                'Walt feels sure his top can beat any top in the world.',
                'Walt feels embarrassed when a boy giggles.',
                'Walt wishes he had a shiny new top.'],
              kinds: [null, null, 'toofar', 'wrongtime', 'opposite'],
              notes: [null, null,
                'The paragraph shows Walt’s top win one contest. Nothing shows he thinks it can beat any top in the world. That goes too far.',
                'Walt’s cheeks burn when the boy giggles. Embarrassed means you feel silly in front of others. That is in the middle of the paragraph. The question asks about the end.',
                'The paragraph shows Walt hold his top up high. That is the opposite.'],
              why: 'At the end, Walt holds his old top up high. He feels proud of it. Then he runs to call his uncle, who made the top. He feels excited to tell his uncle.' },
            { id: 'Q06', type: 'ms', skill: 'Drawing conclusions', pick: 2,
              q: 'What can the reader conclude about Walt’s top? Choose TWO answers.',
              choices: ['Walt’s top is special to him.',
                'Walt’s top spins better than the new ones.',
                'Walt’s top is worth a lot of money.',
                'Walt’s top lights up when it spins.',
                'Walt’s top falls over first.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows the top is old, and his uncle carved it. Nothing proves it is worth a lot of money. That goes too far.',
                'The paragraph says the other kids’ tops lit up, not Walt’s.',
                'The paragraph shows Walt’s top spin long after the rest stop. That is the opposite.'],
              why: 'The paragraph says Walt’s uncle carved the top for him. At the end, Walt holds it up high. The top is special to him. The paragraph also shows the shiny tops wobble and fall. Walt’s old top spins long after they stop. It spins better than the new ones.' }
          ] },
        { story: {
            title: 'The Scratch on the Blue Scooter',
            paragraphs: [
              'Joey borrowed his friend Hiro’s new blue scooter. On a ride around the block, Joey hit a crack and fell. He was fine, but the scooter had a long scratch. Joey thought about hiding the scratch with his hand. Instead, he walked to Hiro’s house and pointed right at it. “I am sorry, and I will help fix it,” Joey said. Hiro looked at the scratch, and then he smiled. “Thanks for telling me,” said Hiro. He let Joey ride the scooter again the next day.'
            ]
          },
          items: [
            { id: 'Q07', type: 'ms', skill: 'Theme', pick: 2,
              q: 'Which TWO sentences BEST state lessons of the paragraph? Choose TWO answers.',
              choices: ['Tell the truth when you make a mistake.',
                'Being honest helps friends trust you.',
                'Kids should not borrow things from friends.',
                'Hide your mistakes so no one gets mad.',
                'Joey hits a crack on his ride.'],
              kinds: [null, null, 'toofar', 'opposite', 'onedetail'],
              notes: [null, null,
                'The paragraph shows one scratch on one scooter. It does not say kids should not borrow. That goes too far.',
                'The paragraph shows Joey tell the truth, and things go well. That is the opposite.',
                'This is just one detail from the paragraph. It is not a lesson about life.'],
              why: 'The paragraph shows Joey think about hiding the scratch. Instead, he points right at it and says sorry. Tell the truth when you make a mistake. At the end, Hiro thanks Joey and lets him ride again. Being honest helps friends trust you.' },
            { id: 'Q08', type: 'ms', skill: 'Character inference', pick: 2,
              q: 'Which TWO sentences BEST describe Hiro? Choose TWO answers.',
              choices: ['Hiro is willing to share his things.',
                'Hiro is quick to forgive a friend.',
                'Hiro wants to fix scooters when he grows up.',
                'Hiro hits a crack and falls off.',
                'Hiro stays mad at Joey for days.'],
              kinds: [null, null, 'toofar', 'wrongwho', 'opposite'],
              notes: [null, null,
                'The paragraph shows Hiro look at one scratch. That does not prove he wants to fix scooters. That goes too far.',
                'The paragraph says Joey fell, not Hiro.',
                'The paragraph shows Hiro smile and let Joey ride the next day. That is the opposite.'],
              why: 'The paragraph shows Hiro lend Joey his new scooter. He lets Joey ride again the next day too. He is willing to share. Hiro looks at the scratch and smiles. He thanks Joey for telling him. He is quick to forgive.' }
          ] }
      ]
    }
  ]
};
