/* THE LAB · Reading for Meaning · RP2 "Part A and Part B: One Paragraph"
   A short practice lesson right before RC2. Every story is ONE paragraph, so the thinking is the hard part:
   Part A is your answer (clue + what you know). Part B is the sentence that proves Part A (your R.A.D. Detail).
   Every version has its OWN teaching paragraph (a new worked example each try), taught the same way:
     teach.flow = W1 (the words) · W2 (worked Part A + Part B) · S1 (Part A alone) · S2 (Part A + Part B) · W3 (the steps)
     pre  = P1 ebsr Drawing conclusions · P2 ebsr Character inference ("Which word BEST describes")
     turn = A Q01 Character inference · B Q02 Drawing conclusions · C Q03 Character feelings · D Q04 Drawing conclusions (Why)
   Theme: school days and the classroom.
   Shape: tools/CONTENT-SPEC-READING.md (ONE PARAGRAPH) · checked by: node tools/check-reading.js RP2
   The right choice is written FIRST; the site shuffles. */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RP2 = {
  versions: [
    /* ───────── version 1 ───────── */
    {
      teach: {
        story: {
          title: 'The Biggest Bell in Music Class',
          paragraphs: [
            'In music class, Ms. Fenn gave each kid one hand bell. Each bell could ring just one note of the song. Percy got the biggest bell, the one with the lowest note. When the song began, Percy held his bell tight and stared at Ms. Fenn. Twice he rang his bell too late, and his cheeks turned red. Goldie stood next to Percy with a tiny, high bell. After that, Goldie tapped his arm softly right before each of his notes. At the end, the whole song rang out just right.'
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'One question, two parts',
            lines: [
              'Some test questions have two parts. The parts are called Part A and Part B.',
              'Part A asks a question about the paragraph. You pick your answer.',
              'Part B asks for proof. You pick the sentence from the paragraph that proves your Part A answer.',
              'Many Part A questions ask you to infer.',
              'To infer means to figure out something the paragraph does not say. You use clues to do it.',
              'Here is an example. Your friend walks in with a wet coat and a dripping umbrella.',
              'Nobody says that it is raining. But you can infer that it is raining. The wet coat and the umbrella are your clues.',
              'Some Part A questions ask for a conclusion. A conclusion is what the clues add up to.',
              'A wet coat plus a dripping umbrella add up to one conclusion. It is raining outside.',
              'A Part A question may ask, “What conclusion can be drawn?” Here, drawn does not mean a picture.',
              'It means: what can you figure out from the clues?',
              'BEST supports means the sentence proves your answer the most.'
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me do Part A and Part B',
            lines: [
              'Let’s do one together. Here is a Part A question.',
              'Part A — What can you infer about Percy when the song begins?',
              'Step 1 is to answer Part A. I look for clues about Percy.',
              'Clue: Percy holds his bell tight. Clue: he stares at Ms. Fenn.',
              'What I know: when I am worried that I will mess up, I hold on tight. I watch the teacher very closely.',
              'Clues plus what I know: Percy is worried about ringing his bell at the right time. That is my Part A answer.',
              'Step 2 is Part B. I go back to the paragraph. I find the sentence that shows my answer.',
              'When the song began, Percy held his bell tight and stared at Ms. Fenn. That sentence is my proof.',
              'Percy got the biggest bell, the one with the lowest note. That is true. But it does not show that Percy is worried.',
              'Part B is like the D in R.A.D. R.A.D. means Restate, Answer, Detail.',
              'Part A is your Answer. Part B is your Detail. It is the proof from the paragraph.'
            ],
            lit: ['When the song began, Percy held his bell tight and stared at Ms. Fenn.',
              'Percy got the biggest bell, the one with the lowest note.'] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: 'Part A — What can you infer about Goldie?',
            choices: ['Goldie helps a classmate who needs help.', 'Goldie wants to ring the big, low bell.', 'Goldie is upset when Percy rings late.', 'Goldie is worried about ringing too late.'],
            kinds: [null, 'noclue', 'noclue', 'wrongwho'],
            notes: [null,
              'The paragraph says Goldie has a tiny bell. No clue shows she wants the big bell.',
              'No clue shows Goldie is upset. She taps Percy’s arm softly to help.',
              'Percy is the one who rings too late. That is Percy, not Goldie.'],
            why: 'The paragraph tells what Goldie does after Percy rings late. She taps his arm to show him when to ring. So Goldie helps a classmate who needs help.' },
          { kind: 'step', id: 'S2', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'Part A — What can you infer about Goldie?',
              choices: ['Goldie helps a classmate who needs help.', 'Goldie wants to ring the big, low bell.', 'Goldie is upset when Percy rings late.', 'Goldie is worried about ringing too late.'],
              kinds: [null, 'noclue', 'noclue', 'wrongwho'],
              notes: [null,
                'The paragraph says Goldie has a tiny bell. No clue shows she wants the big bell.',
                'No clue shows Goldie is upset. She taps Percy’s arm softly to help.',
                'Percy is the one who rings too late. That is Percy, not Goldie.'],
              why: 'You did Part A in the last step. Goldie taps Percy’s arm to show him when to ring. So Goldie helps a classmate who needs help.' },
            b: { choices: ['After that, Goldie tapped his arm softly right before each of his notes.',
                'Goldie stood next to Percy with a tiny, high bell.',
                'Twice he rang his bell too late, and his cheeks turned red.',
                'In music class, Ms. Fenn gave each kid one hand bell.'],
              kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
              notes: [null,
                'The sentence tells where Goldie stood. It does not show her helping.',
                'The sentence is about Percy, not Goldie.',
                'The sentence is about Ms. Fenn, not Goldie.'],
              why: 'The paragraph says Goldie tapped Percy’s arm right before each of his notes. That told Percy when to ring. It proves Part A.' } },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              'Here are the steps for Part A and Part B.',
              'Step 1: Read Part A. Use the clues and what you know to answer it.',
              'Step 2: Go back to the paragraph. Find the part that talks about your answer.',
              'Step 3: For Part B, pick the sentence that SHOWS your Part A answer.',
              'Ask about each sentence: Does this prove my Part A answer? A true sentence is not always proof.',
              'Check who the sentence is about. A sentence about someone else does not prove an answer about the person in the question.',
              'Think of R.A.D. Restate, Answer, Detail.',
              'Part A is your Answer. Part B is your Detail.',
              'Answer Part A first. Then find the proof.',
              'Now you try.'
            ] }
        ]
      },
      pre: {
        story: {
          title: 'The Library Cart for Room 3',
          paragraphs: [
            'This week, Dora had the library job for Room 3. Each day, Mr. Banks, the librarian, gave her a cart of books. The books had to go back on the shelves in ABC order. Dora checked the letters on each book twice before she slid it in. Her friend Flynn rushed by and stuck a book on the wrong shelf. Dora pulled that book out and carried it to the right spot. On Friday, a big box of new books came to the library. Mr. Banks walked past three fifth graders and handed the box to Dora.'
          ]
        },
        items: [
          { id: 'P1', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'Part A — What conclusion can be drawn about Mr. Banks?',
              choices: ['Mr. Banks trusts Dora with the new books.', 'Mr. Banks thinks Dora is too little to help.', 'Mr. Banks is upset with Flynn for his mistake.', 'Mr. Banks wants Dora to run the whole library.'],
              kinds: [null, 'opposite', 'noclue', 'toofar'],
              notes: [null,
                'Mr. Banks gives Dora a big job. That is the opposite of too little.',
                'The paragraph tells about the mistake Flynn made. No clue shows that Mr. Banks saw it.',
                'Too far. Mr. Banks gives Dora one box of books. No clue shows he wants her to run the library.'],
              why: 'The new books came, and Mr. Banks had to pick a helper. He did not pick the big kids. He picked Dora. What I know: you give a big job to someone you trust. So Mr. Banks trusts Dora with the new books.' },
            b: { choices: ['Mr. Banks walked past three fifth graders and handed the box to Dora.',
                'On Friday, a big box of new books came to the library.',
                'Her friend Flynn rushed by and stuck a book on the wrong shelf.',
                'The books had to go back on the shelves in ABC order.'],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                'The sentence tells that new books came. It does not show what Mr. Banks thinks of Dora.',
                'The sentence is about Flynn, not Mr. Banks.',
                'The sentence tells the rule for the books. It does not show what Mr. Banks thinks.'],
              why: 'The paragraph says Mr. Banks walked past three fifth graders and handed the box to Dora. He picked Dora for the job. It proves Part A.' } },
          { id: 'P2', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'Part A — Which word BEST describes Dora?',
              choices: ['careful', 'careless', 'lazy', 'shy'],
              kinds: [null, 'wrongwho', 'opposite', 'noclue'],
              notes: [null,
                'Flynn is the one who put a book on the wrong shelf. That is Flynn, not Dora.',
                'The paragraph shows Dora do her job each day. That is the opposite of lazy.',
                'The paragraph shows Dora at work. No clue shows that she is shy.'],
              why: 'Careful means you take your time to get things right. The paragraph shows Dora check each book before she puts it away. So Dora is careful.' },
            b: { choices: ['Dora checked the letters on each book twice before she slid it in.',
                'This week, Dora had the library job for Room 3.',
                'Each day, Mr. Banks, the librarian, gave her a cart of books.',
                'Her friend Flynn rushed by and stuck a book on the wrong shelf.'],
              kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
              notes: [null,
                'The sentence tells what job Dora had. It does not show how she does the job.',
                'The sentence tells what Mr. Banks did. It is about Mr. Banks, not Dora.',
                'The sentence is about Flynn, not Dora.'],
              why: 'The paragraph says Dora checked the letters on each book twice. She checked her work to get it right. It proves Dora is careful.' } }
        ]
      },
      turn: [
        { story: {
            title: 'Red Hands on the Monkey Bars',
            paragraphs: [
              'Every day at recess, Nessa tried to swing across the monkey bars. On Monday, she slipped and fell off at the third bar. On Tuesday, she made it all the way to the fifth bar. Her hands got red and sore, but she climbed right back up. Her friend Ray sat on the swings and munched on his crackers. “You can do it, Nessa!” he called from the swings. On Friday, Nessa swung all the way to the very last bar. She dropped into the wood chips and threw both arms up high.'
            ]
          },
          items: [
            { id: 'Q01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
              a: { q: 'Part A — What can you infer about Nessa?',
                choices: ['Nessa keeps trying, even when it is hard.', 'Nessa is afraid to climb up high.', 'Nessa would rather sit on the swings.', 'Nessa will be the best climber in her school.'],
                kinds: [null, 'opposite', 'wrongwho', 'toofar'],
                notes: [null,
                  'The paragraph shows Nessa climb up again and again. That is the opposite of afraid.',
                  'Ray is the one who sat on the swings. That is Ray, not Nessa.',
                  'Too far. Nessa gets across the bars one time. No clue shows she is the best in her school.'],
                why: 'Nessa falls, and her hands get sore. But she goes back up to try again. What I know: kids who do not give up keep going when it is hard. So Nessa keeps trying, even when it is hard.' },
              b: { choices: ['Her hands got red and sore, but she climbed right back up.',
                  'On Monday, she slipped and fell off at the third bar.',
                  'Her friend Ray sat on the swings and munched on his crackers.',
                  'She dropped into the wood chips and threw both arms up high.'],
                kinds: [null, 'notproof', 'wrongwho', 'notproof'],
                notes: [null,
                  'The sentence tells that Nessa fell. It does not show her going back to try again.',
                  'The sentence is about Ray, not Nessa.',
                  'The sentence tells what Nessa did at the very end. It shows she is happy, not that she kept trying.'],
                why: 'The paragraph says Nessa’s hands got red and sore, but she climbed right back up. She did not stop when it hurt. It proves Part A.' } }
          ] },
        { story: {
            title: 'The Fish Cap in Room 8',
            paragraphs: [
              'On Friday, Room 8 was getting a mystery reader. No one in the class knew who it would be. Cora heard a soft, happy whistle out in the hall. Then a man walked in wearing a tan cap with a fish on it. Cora’s mouth fell open, and she bounced in her seat. Every night, Grandpa hung that same fish cap by her front door. Her friend Milo guessed that the man was a new gym teacher. The man sat in the big chair and winked right at Cora.'
            ]
          },
          items: [
            { id: 'Q02', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
              a: { q: 'Part A — What conclusion can be drawn about the man in the cap?',
                choices: ['The man in the cap is Cora’s own grandpa.', 'The man in the cap is the new gym teacher.', 'The man in the cap is someone Cora does not know.', 'The man in the cap will read to the class every week.'],
                kinds: [null, 'noclue', 'opposite', 'toofar'],
                notes: [null,
                  'Milo guessed a new gym teacher. But no clue in the paragraph shows that.',
                  'The paragraph shows how Cora acts when the man walks in. She knows him. That is the opposite.',
                  'Too far. The paragraph tells about one Friday. No clue shows that he will read to the class every week.'],
                why: 'The man wears a tan cap with a fish on it. Cora has seen that cap at home. It is Grandpa’s cap. So the man in the cap is Cora’s own grandpa.' },
              b: { choices: ['Every night, Grandpa hung that same fish cap by her front door.',
                  'No one in the class knew who it would be.',
                  'Cora heard a soft, happy whistle out in the hall.',
                  'Her friend Milo guessed that the man was a new gym teacher.'],
                kinds: [null, 'notproof', 'notproof', 'wrongwho'],
                notes: [null,
                  'The sentence tells that the reader was a secret. It does not show who he is.',
                  'The sentence tells what Cora heard. Lots of people whistle. It does not show who the man is.',
                  'The sentence tells what Milo guessed. It is about Milo, and his guess is wrong.'],
                why: 'The paragraph says Grandpa hung that same fish cap by Cora’s door every night. The man is wearing Grandpa’s cap. It proves Part A.' } }
          ] },
        { story: {
            title: 'An Apple in the Water Tub',
            paragraphs: [
              'At the science table, Mr. Bowen set out a big tub of water. Dewey was sure that his apple would sink to the bottom. He told his partner, Birdie, to get ready to watch it drop. Dewey let go, and the apple bobbed right back up. His eyes got wide, and his mouth fell open. “That apple should be at the bottom!” said Dewey. Birdie giggled and wrote FLOATS on their chart. Then Dewey picked up a rock to test next.'
            ]
          },
          items: [
            { id: 'Q03', type: 'ebsr', skill: ['Character feelings', 'Supporting detail'],
              a: { q: 'Part A — How does Dewey feel when the apple floats?',
                choices: ['surprised that it did not sink', 'proud that he guessed it right', 'bored at the science table', 'scared of the big tub of water'],
                kinds: [null, 'opposite', 'noclue', 'noclue'],
                notes: [null,
                  'Dewey was sure the apple would sink, but it did not. He guessed wrong, so he is not proud of his guess.',
                  'The paragraph shows Dewey get a rock to test next. No clue shows that he is bored.',
                  'The paragraph shows Dewey right next to the tub. No clue shows that he is scared of it.'],
                why: 'Dewey was sure the apple would sink. Then it popped right back up. What I know: when a thing I did not expect happens, I am surprised. So Dewey is surprised that it did not sink.' },
              b: { choices: ['His eyes got wide, and his mouth fell open.',
                  'Dewey was sure that his apple would sink to the bottom.',
                  'Birdie giggled and wrote FLOATS on their chart.',
                  'At the science table, Mr. Bowen set out a big tub of water.'],
                kinds: [null, 'notproof', 'wrongwho', 'notproof'],
                notes: [null,
                  'The sentence tells what Dewey thought before he let go. It does not show how he feels when the apple floats.',
                  'The sentence is about Birdie, not Dewey.',
                  'The sentence tells what Mr. Bowen set out. It does not show a feeling.'],
                why: 'The paragraph says Dewey’s eyes got wide, and his mouth fell open. People look like that when they are surprised. It proves Part A.' } }
          ] },
        { story: {
            title: 'Thunder Behind the Curtain',
            paragraphs: [
              'Room 5 was practicing its play about a ship at sea. Teddy did not have a part on the stage. He stood behind the curtain next to a big, thin sheet of metal. On stage, the captain yelled, “Here comes the storm!” Teddy grabbed the metal sheet with both hands and shook it hard. Teddy’s sheet made a loud BOOM, just like thunder. The sailors on the stage ducked and held on tight. Ms. Platt gave Teddy a big thumbs-up from her seat up front.'
            ]
          },
          items: [
            { id: 'Q04', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
              a: { q: 'Part A — Why does Teddy shake the metal sheet?',
                choices: ['He is making a thunder sound for the play.', 'He is mad that he does not have a part.', 'He is playing the captain of the ship.', 'He wants to play the drums when he grows up.'],
                kinds: [null, 'noclue', 'wrongwho', 'toofar'],
                notes: [null,
                  'The paragraph says Teddy has no part on the stage. No clue shows that he is mad about it.',
                  'The captain is on the stage. Teddy did not have a part on the stage.',
                  'Too far. Teddy makes one sound in one play. No clue shows what he wants to do when he grows up.'],
                why: 'The play has a storm in it. Teddy shakes the sheet right when the captain yells about the storm. What I know: a storm has thunder. So Teddy is making a thunder sound for the play.' },
              b: { choices: ['Teddy’s sheet made a loud BOOM, just like thunder.',
                  'He stood behind the curtain next to a big, thin sheet of metal.',
                  'Teddy did not have a part on the stage.',
                  'Ms. Platt gave Teddy a big thumbs-up from her seat up front.'],
                kinds: [null, 'notproof', 'notproof', 'wrongwho'],
                notes: [null,
                  'The sentence tells THAT Teddy had a metal sheet, not WHY he shook it.',
                  'The sentence tells that Teddy had no part. It does not show why he shook the sheet.',
                  'The sentence is about Ms. Platt, not Teddy.'],
                why: 'The paragraph says Teddy’s sheet made a loud BOOM, just like thunder. The sheet made the storm sound for the play. It proves Part A.' } }
          ] }
      ]
    },

    /* ───────── version 2 ───────── */
    {
      teach: {
        story: {
          title: 'A Paper Frog That Would Not Hop',
          paragraphs: [
            'In art, Mr. Gale showed the class how to fold a paper frog. Zack folded his paper fast and did not watch the steps. His frog came out flat and would not hop at all. Zack squished the frog into a ball and shoved it away. Jen sat next to Zack at the long table. She opened up her own frog and made it again, one fold at a time. Each time Jen made a fold, she waited for Zack to copy it. Soon Zack had a green frog that hopped across the table.'
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'One question, two parts',
            lines: [
              'Some test questions have two parts. The parts are called Part A and Part B.',
              'Part A asks a question about the paragraph. You pick your answer.',
              'Part B asks for proof. You pick the sentence from the paragraph that proves your Part A answer.',
              'Many Part A questions ask you to infer.',
              'To infer means to figure out something the paragraph does not say. You use clues to do it.',
              'Here is an example. Your friend yawns again and again in class. Her eyes keep closing.',
              'Nobody says that she is sleepy. But you can infer that she is sleepy. The yawns and the closing eyes are your clues.',
              'Some Part A questions ask for a conclusion. A conclusion is what the clues add up to.',
              'Yawns plus closing eyes add up to one conclusion. Your friend is very tired.',
              'A Part A question may ask, “What conclusion can be drawn?” Here, drawn does not mean a picture.',
              'It means: what can you figure out from the clues?',
              'BEST supports means the sentence proves your answer the most.'
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me do Part A and Part B',
            lines: [
              'Let’s do one together. Here is a Part A question.',
              'Part A — How does Zack feel when his frog will not hop?',
              'Step 1 is to answer Part A. I look for clues about Zack after his frog comes out flat.',
              'Clue: Zack squishes his frog into a ball. Clue: he shoves it away.',
              'What I know: when my work goes wrong, I want to push it away.',
              'Clues plus what I know: Zack is upset that his frog did not work. That is my Part A answer.',
              'Step 2 is Part B. I go back to the paragraph. I find the sentence that shows my answer.',
              'Zack squished the frog into a ball and shoved it away. That sentence is my proof.',
              'Zack folded his paper fast and did not watch the steps. That is true. But it does not show how Zack feels.',
              'Part B is like the D in R.A.D. R.A.D. means Restate, Answer, Detail.',
              'Part A is your Answer. Part B is your Detail. It is the proof from the paragraph.'
            ],
            lit: ['Zack squished the frog into a ball and shoved it away.',
              'Zack folded his paper fast and did not watch the steps.'] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: 'Part A — What can you infer about Jen?',
            choices: ['Jen is patient when she helps a friend.', 'Jen folds her frog faster than Zack.', 'Jen is angry that Zack shoved his frog.', 'Jen squishes her frog when it will not hop.'],
            kinds: [null, 'opposite', 'noclue', 'wrongwho'],
            notes: [null,
              'The paragraph shows Jen make her frog one fold at a time. That is the opposite of fast.',
              'The paragraph shows Jen help Zack. No clue shows that she is angry at him.',
              'Zack is the one who squishes his frog. That is Zack, not Jen.'],
            why: 'Jen makes her frog again, one fold at a time. She stops after each fold so Zack can keep up. What I know: a patient friend takes her time and waits. So Jen is patient when she helps a friend.' },
          { kind: 'step', id: 'S2', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'Part A — What can you infer about Jen?',
              choices: ['Jen is patient when she helps a friend.', 'Jen folds her frog faster than Zack.', 'Jen is angry that Zack shoved his frog.', 'Jen squishes her frog when it will not hop.'],
              kinds: [null, 'opposite', 'noclue', 'wrongwho'],
              notes: [null,
                'The paragraph shows Jen make her frog one fold at a time. That is the opposite of fast.',
                'The paragraph shows Jen help Zack. No clue shows that she is angry at him.',
                'Zack is the one who squishes his frog. That is Zack, not Jen.'],
              why: 'You did Part A in the last step. Jen takes her time and waits for Zack. So Jen is patient when she helps a friend.' },
            b: { choices: ['Each time Jen made a fold, she waited for Zack to copy it.',
                'Jen sat next to Zack at the long table.',
                'Zack squished the frog into a ball and shoved it away.',
                'In art, Mr. Gale showed the class how to fold a paper frog.'],
              kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
              notes: [null,
                'The sentence tells where Jen sat. It does not show her waiting for Zack.',
                'The sentence is about Zack, not Jen.',
                'The sentence is about Mr. Gale, not Jen.'],
              why: 'The paragraph says Jen waited for Zack to copy each fold. She took her time so he could keep up. It proves Part A.' } },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              'Here are the steps for Part A and Part B.',
              'Step 1: Read Part A. Use the clues and what you know to answer it.',
              'Step 2: Go back to the paragraph. Find the part that talks about your answer.',
              'Step 3: For Part B, pick the sentence that SHOWS your Part A answer.',
              'Ask about each sentence: Does this prove my Part A answer? A true sentence is not always proof.',
              'Check who the sentence is about. A sentence about someone else does not prove an answer about the person in the question.',
              'Think of R.A.D. Restate, Answer, Detail.',
              'Part A is your Answer. Part B is your Detail.',
              'Answer Part A first. Then find the proof.',
              'Now you try.'
            ] }
        ]
      },
      pre: {
        story: {
          title: 'Something Round in the Mystery Box',
          paragraphs: [
            'On Fridays, Room 6 played a game with a mystery box. Each kid put a hand in through a hole and did not look. Today, Kenna felt a thing that was round and bumpy. When she pulled her hand out, it smelled like orange juice. Her friend Gordy lifted the lid a little to sneak a peek. Kenna shut her eyes tight and turned her head away from the box. She wrote her guess on a slip of paper and folded it up. At the end, Ms. Garza lifted the lid for all the kids to see.'
          ]
        },
        items: [
          { id: 'P1', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'Part A — What conclusion can be drawn about the thing in the box?',
              choices: ['The thing in the box is an orange.', 'The thing in the box is a soft toy.', 'The box has nothing in it this time.', 'The thing in the box is a gift for Kenna to keep.'],
              kinds: [null, 'noclue', 'opposite', 'toofar'],
              notes: [null,
                'The paragraph says the thing is round and bumpy. No clue shows that it is a toy.',
                'The paragraph says Kenna felt a thing in the box. So the box is not empty.',
                'Too far. Kenna only feels it and guesses. No clue shows she gets to keep it.'],
              why: 'Kenna feels a thing that is round and bumpy. Then her hand smells like a fruit. What I know: an orange is round and bumpy, and it is a fruit. So the thing in the box is an orange.' },
            b: { choices: ['When she pulled her hand out, it smelled like orange juice.',
                'On Fridays, Room 6 played a game with a mystery box.',
                'At the end, Ms. Garza lifted the lid for all the kids to see.',
                'She wrote her guess on a slip of paper and folded it up.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                'The sentence tells about the game. It does not show what is in the box.',
                'The sentence tells that Ms. Garza lifted the lid. It does not tell what was inside.',
                'The sentence tells that Kenna wrote a guess. It does not show what the thing is.'],
              why: 'The paragraph says Kenna’s hand smelled like orange juice. The thing in the box must be an orange. It proves Part A.' } },
          { id: 'P2', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'Part A — Which word BEST describes Kenna?',
              choices: ['honest', 'sneaky', 'grumpy', 'lazy'],
              kinds: [null, 'wrongwho', 'noclue', 'noclue'],
              notes: [null,
                'Gordy is the one who peeks. That is Gordy, not Kenna.',
                'The paragraph shows Kenna playing a game. No clue shows that she is grumpy.',
                'The paragraph shows Kenna play the game and write a guess. No clue shows that she is lazy.'],
              why: 'Honest means you do not cheat. The paragraph shows Kenna make sure she cannot see in the box, even when her friend peeks. So Kenna is honest.' },
            b: { choices: ['Kenna shut her eyes tight and turned her head away from the box.',
                'Her friend Gordy lifted the lid a little to sneak a peek.',
                'Today, Kenna felt a thing that was round and bumpy.',
                'At the end, Ms. Garza lifted the lid for all the kids to see.'],
              kinds: [null, 'wrongwho', 'notproof', 'wrongwho'],
              notes: [null,
                'The sentence is about Gordy, not Kenna.',
                'The sentence tells what Kenna felt in the box. It does not show that she plays fair.',
                'The sentence is about Ms. Garza, not Kenna.'],
              why: 'The paragraph says Kenna shut her eyes and turned her head away when Gordy peeked. She did not cheat. It proves Kenna is honest.' } }
        ]
      },
      turn: [
        { story: {
            title: 'Half a Sandwich for Sonny',
            paragraphs: [
              'At lunch, Archie sat across from his friend Sonny. Sonny tripped on the way back from the milk cart. His tray flipped, and his whole lunch landed on the floor. Sonny stared at the mess, and his chin began to shake. Archie opened his lunch box and broke his sandwich in two. He slid the bigger half across the table to Sonny. A lunch helper came by with a mop and a pail. Sonny wiped his eyes and took a big bite.'
            ]
          },
          items: [
            { id: 'Q01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
              a: { q: 'Part A — What can you infer about Archie?',
                choices: ['Archie is willing to share with a friend.', 'Archie laughs when friends make mistakes.', 'Archie is sad that his lunch fell on the floor.', 'Archie will give away his lunch every day.'],
                kinds: [null, 'opposite', 'wrongwho', 'toofar'],
                notes: [null,
                  'The paragraph shows Archie help Sonny after the fall. That is the opposite of laughing at him.',
                  'Sonny is the one whose lunch fell, not Archie.',
                  'Too far. Archie shares on one day. No clue shows he gives away his lunch every day.'],
                why: 'Sonny’s lunch is on the floor, and he is sad. Archie gives Sonny some of his own food. What I know: a kid who gives away part of his lunch likes to share. So Archie is willing to share with a friend.' },
              b: { choices: ['He slid the bigger half across the table to Sonny.',
                  'Sonny tripped on the way back from the milk cart.',
                  'At lunch, Archie sat across from his friend Sonny.',
                  'A lunch helper came by with a mop and a pail.'],
                kinds: [null, 'wrongwho', 'notproof', 'wrongwho'],
                notes: [null,
                  'The sentence is about Sonny, not Archie.',
                  'The sentence tells where Archie sat. It does not show him sharing.',
                  'The sentence is about the lunch helper, not Archie.'],
                why: 'The paragraph says Archie slid the bigger half of his sandwich to Sonny. He gave his friend the bigger part. It proves Part A.' } }
          ] },
        { story: {
            title: 'A Letter in Purple Ink',
            paragraphs: [
              'Room 2 had pen pals at a school in another state. On Monday, Bonnie got her first letter from a girl named Hope. Hope wrote her letter in purple ink and drew lots of little hearts. She said that she has two brothers and a cat named Mops. She said that her mom pulls her to school on a sled most days. Bonnie’s friend Dee got a letter about a pet frog. Bonnie looked over her letter two times and then grabbed a pencil. She wanted to ask Hope all about that sled.'
            ]
          },
          items: [
            { id: 'Q02', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
              a: { q: 'Part A — What conclusion can be drawn about Hope?',
                choices: ['Hope’s home is in a place with lots of snow.', 'Hope’s home is in a hot, sunny place by the beach.', 'Hope has a pet frog at her house.', 'Hope is the best sled rider in her town.'],
                kinds: [null, 'opposite', 'wrongwho', 'toofar'],
                notes: [null,
                  'Hope rides a sled to school. A sled needs snow. That is the opposite of a hot beach.',
                  'Dee got the letter about a pet frog. That is Dee’s pen pal, not Hope.',
                  'Too far. Hope rides on a sled. No clue shows she is the best in her town.'],
                why: 'Hope rides a sled to get to school. What I know: a sled needs snow. So Hope’s home is in a place with lots of snow.' },
              b: { choices: ['She said that her mom pulls her to school on a sled most days.',
                  'Hope wrote her letter in purple ink and drew lots of little hearts.',
                  'She said that she has two brothers and a cat named Mops.',
                  'Bonnie’s friend Dee got a letter about a pet frog.'],
                kinds: [null, 'notproof', 'notproof', 'wrongwho'],
                notes: [null,
                  'The sentence tells how Hope wrote her letter. It does not show where her home is.',
                  'The sentence tells about the family Hope has. It does not show the weather where her home is.',
                  'The sentence is about the letter Dee got, not Hope.'],
                why: 'The paragraph says Hope’s mom pulls her to school on a sled most days. A sled needs snow. It proves Part A.' } }
          ] },
        { story: {
            title: 'Five Cards About Sharks',
            paragraphs: [
              'Today was Mina’s turn to share her report about sharks. She had five note cards, each one covered with big letters. When Ms. Grant called her name, Mina walked slowly to the front. Her hands shook so much that the note cards rattled. From her seat up front, her friend Joy gave her a big smile. Mina took a deep breath and began the first card. By the last card, her voice was steady and clear. The class clapped, and Mina skipped back to her seat.'
            ]
          },
          items: [
            { id: 'Q03', type: 'ebsr', skill: ['Character feelings', 'Supporting detail'],
              a: { q: 'Part A — How does Mina feel when she walks to the front of the room?',
                choices: ['nervous about giving her report', 'calm and sure of every single word', 'bored with her shark report', 'happy that her report is all done'],
                kinds: [null, 'opposite', 'noclue', 'wrongtime'],
                notes: [null,
                  'The paragraph shows Mina’s hands when she gets to the front. That is the opposite of calm.',
                  'Mina made five cards about sharks. No clue shows that she is bored.',
                  'Mina is happy at the end, when she skips back. That is a different part of the paragraph.'],
                why: 'Mina walks slowly to the front, and her hands shake. What I know: when I have to talk in front of the class, I feel shaky. So Mina is nervous about giving her report.' },
              b: { choices: ['Her hands shook so much that the note cards rattled.',
                  'She had five note cards, each one covered with big letters.',
                  'From her seat up front, her friend Joy gave her a big smile.',
                  'The class clapped, and Mina skipped back to her seat.'],
                kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
                notes: [null,
                  'The sentence tells about the cards Mina made. It does not show how she feels.',
                  'The sentence is about Joy, not Mina.',
                  'The sentence tells about the end of the report, not when Mina walks up.'],
                why: 'The paragraph says Mina’s hands shook so much that her cards rattled. Hands shake like that when you are nervous. It proves Part A.' } }
          ] },
        { story: {
            title: 'Lights Off in Room 7',
            paragraphs: [
              'Ms. Vale went down the hall to get the mail from the office. Right away, the kids in Room 7 got to work. Sully taped a long sign across the top of the board. The sign said Happy Birthday, Ms. Vale in big red letters. Then Sully ran to the door and switched off the lights. All the kids hid behind their desks and kept very still. Soon, footsteps came down the hall toward the door. Sully peeked over his desk and held in a giggle.'
            ]
          },
          items: [
            { id: 'Q04', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
              a: { q: 'Part A — Why does Sully turn off the lights?',
                choices: ['He is helping with a birthday surprise.', 'He wants the class to take a quiet nap.', 'Ms. Vale asked him to turn the lights off.', 'He wants to play a trick to make Ms. Vale mad.'],
                kinds: [null, 'noclue', 'noclue', 'opposite'],
                notes: [null,
                  'The paragraph shows the class hiding, not sleeping. No clue shows a nap.',
                  'Ms. Vale went down the hall. No clue shows that she asked for the lights off.',
                  'The class is doing a nice thing for Ms. Vale. That is the opposite of making her mad.'],
                why: 'Ms. Vale is out of the room. The class puts up a sign for her, turns off the lights, and hides. What I know: people hide in the dark to surprise someone. So Sully is helping with a birthday surprise.' },
              b: { choices: ['The sign said Happy Birthday, Ms. Vale in big red letters.',
                  'Then Sully ran to the door and switched off the lights.',
                  'Ms. Vale went down the hall to get the mail from the office.',
                  'Soon, footsteps came down the hall toward the door.'],
                kinds: [null, 'notproof', 'wrongwho', 'notproof'],
                notes: [null,
                  'The sentence tells THAT Sully turned off the lights, not WHY.',
                  'The sentence is about Ms. Vale, not Sully.',
                  'The sentence tells that someone is coming. It does not show why the lights are off.'],
                why: 'The paragraph says the sign said Happy Birthday, Ms. Vale. The class is getting ready for a birthday surprise. It proves Part A.' } }
          ] }
      ]
    },

    /* ───────── version 3 ───────── */
    {
      teach: {
        story: {
          title: 'Two Tickets on the Floor',
          paragraphs: [
            'In Room 4, kids got a ticket for each book they finished. On Friday, they could trade their tickets for a prize. Marty hopped from foot to foot at the front of the line. He wanted the bouncy ball that glows in the dark. Two tickets fell off Ms. Dorsey’s desk and landed by Sela’s shoe. No one else in the line saw them fall. Sela picked them up and put them back on Ms. Dorsey’s desk. Then Marty got his ball and ran to show his friends.'
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'One question, two parts',
            lines: [
              'Some test questions have two parts. The parts are called Part A and Part B.',
              'Part A asks a question about the paragraph. You pick your answer.',
              'Part B asks for proof. You pick the sentence from the paragraph that proves your Part A answer.',
              'Many Part A questions ask you to infer.',
              'To infer means to figure out something the paragraph does not say. You use clues to do it.',
              'Here is an example. You smell smoke. Dad is waving a towel at the oven.',
              'Nobody says that dinner burned. But you can infer it. The smoke and the towel are your clues.',
              'Some Part A questions ask for a conclusion. A conclusion is what the clues add up to.',
              'Smoke plus a waving towel add up to one conclusion. Something in the oven burned.',
              'A Part A question may ask, “What conclusion can be drawn?” Here, drawn does not mean a picture.',
              'It means: what can you figure out from the clues?',
              'BEST supports means the sentence proves your answer the most.'
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me do Part A and Part B',
            lines: [
              'Let’s do one together. Here is a Part A question.',
              'Part A — What can you infer about Marty while he waits in line?',
              'Step 1 is to answer Part A. I look for clues about Marty in the line.',
              'Clue: Marty hops from foot to foot. Clue: he is at the very front of the line.',
              'What I know: when I can’t wait for something fun, I can’t stand still.',
              'Clues plus what I know: Marty is excited to get his prize. That is my Part A answer.',
              'Step 2 is Part B. I go back to the paragraph. I find the sentence that shows my answer.',
              'Marty hopped from foot to foot at the front of the line. That sentence is my proof.',
              'In Room 4, kids got a ticket for each book they finished. That is true. But it does not show how Marty feels.',
              'Part B is like the D in R.A.D. R.A.D. means Restate, Answer, Detail.',
              'Part A is your Answer. Part B is your Detail. It is the proof from the paragraph.'
            ],
            lit: ['Marty hopped from foot to foot at the front of the line.',
              'In Room 4, kids got a ticket for each book they finished.'] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: 'Part A — What can you infer about Sela?',
            choices: ['Sela is honest, even when no one is looking.', 'Sela wants the glowing ball for herself.', 'Sela keeps things that are not hers.', 'Sela has finished more books than anyone.'],
            kinds: [null, 'wrongwho', 'opposite', 'toofar'],
            notes: [null,
              'Marty is the one who wants the ball. That is Marty, not Sela.',
              'The paragraph shows Sela give back tickets that are not hers. That is the opposite of keeping them.',
              'Too far. Sela is in a class that reads books. No clue shows she has finished more books than anyone.'],
            why: 'Two tickets land by Sela’s shoe, and no one else sees. She could keep them, but she gives them back. What I know: an honest kid does the right thing, even when no one is looking. So Sela is honest.' },
          { kind: 'step', id: 'S2', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'Part A — What can you infer about Sela?',
              choices: ['Sela is honest, even when no one is looking.', 'Sela wants the glowing ball for herself.', 'Sela keeps things that are not hers.', 'Sela has finished more books than anyone.'],
              kinds: [null, 'wrongwho', 'opposite', 'toofar'],
              notes: [null,
                'Marty is the one who wants the ball. That is Marty, not Sela.',
                'The paragraph shows Sela give back tickets that are not hers. That is the opposite of keeping them.',
                'Too far. Sela is in a class that reads books. No clue shows she has finished more books than anyone.'],
              why: 'You did Part A in the last step. Sela gives back the tickets that no one saw fall. So Sela is honest, even when no one is looking.' },
            b: { choices: ['Sela picked them up and put them back on Ms. Dorsey’s desk.',
                'Two tickets fell off Ms. Dorsey’s desk and landed by Sela’s shoe.',
                'Marty hopped from foot to foot at the front of the line.',
                'On Friday, they could trade their tickets for a prize.'],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                'The sentence tells where the tickets fell. It does not show what Sela did.',
                'The sentence is about Marty, not Sela.',
                'The sentence tells the class rule for tickets. It does not show what Sela is like.'],
              why: 'The paragraph says Sela picked up the tickets and put them back on the desk. She gave back what was not hers. It proves Part A.' } },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              'Here are the steps for Part A and Part B.',
              'Step 1: Read Part A. Use the clues and what you know to answer it.',
              'Step 2: Go back to the paragraph. Find the part that talks about your answer.',
              'Step 3: For Part B, pick the sentence that SHOWS your Part A answer.',
              'Ask about each sentence: Does this prove my Part A answer? A true sentence is not always proof.',
              'Check who the sentence is about. A sentence about someone else does not prove an answer about the person in the question.',
              'Think of R.A.D. Restate, Answer, Detail.',
              'Part A is your Answer. Part B is your Detail.',
              'Answer Part A first. Then find the proof.',
              'Now you try.'
            ] }
        ]
      },
      pre: {
        story: {
          title: 'Scooter Boards in the Gym',
          paragraphs: [
            'In gym, Coach Bly passed out flat scooter boards with wheels. Each team raced its boards to a cone and back. Romy pushed hard with her feet and zoomed past the cone. On the other team, Abner tipped over and slid into the wall. Romy stopped her board and helped Abner climb back on. Then she pushed off again and raced to the line. At the end, Romy’s team cheered, and Abner’s team let out a long groan. Coach Bly blew her whistle and said it was time to line up.'
          ]
        },
        items: [
          { id: 'P1', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'Part A — What conclusion can be drawn about the race?',
              choices: ['Romy’s team won the scooter race.', 'Abner’s team won the scooter race.', 'Romy’s team will win every race this year.', 'Coach Bly stopped the race early.'],
              kinds: [null, 'opposite', 'toofar', 'noclue'],
              notes: [null,
                'The paragraph tells how each team acts at the end. Abner’s team is not happy. That is the opposite of a win.',
                'Too far. The paragraph tells about one race. No clue shows Romy’s team will win every race.',
                'The paragraph tells about the end of the race. No clue shows that Coach Bly stopped it early.'],
              why: 'At the end, one team cheers and the other team groans. What I know: the team that wins cheers, and the team that loses groans. So Romy’s team won the scooter race.' },
            b: { choices: ['At the end, Romy’s team cheered, and Abner’s team let out a long groan.',
                'Each team raced its boards to a cone and back.',
                'In gym, Coach Bly passed out flat scooter boards with wheels.',
                'Coach Bly blew her whistle and said it was time to line up.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                'The sentence tells how the race works. It does not show who won.',
                'The sentence tells about the scooter boards. It does not show who won.',
                'The sentence is about Coach Bly at the end of gym. It does not show who won.'],
              why: 'The paragraph says Romy’s team cheered, and Abner’s team let out a long groan. Winners cheer, and the other team groans. It proves Part A.' } },
          { id: 'P2', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'Part A — Which word BEST describes Romy?',
              choices: ['kind', 'rude', 'clumsy', 'shy'],
              kinds: [null, 'opposite', 'wrongwho', 'noclue'],
              notes: [null,
                'The paragraph shows Romy help a kid on the other team. That is the opposite of rude.',
                'Abner is the one who tips over. That is Abner, not Romy.',
                'The paragraph shows Romy race hard in front of the class. No clue shows that she is shy.'],
              why: 'Kind means you help and care about others. The paragraph shows Romy stop in the middle of a race to help a kid from the other team. So Romy is kind.' },
            b: { choices: ['Romy stopped her board and helped Abner climb back on.',
                'Romy pushed hard with her feet and zoomed past the cone.',
                'On the other team, Abner tipped over and slid into the wall.',
                'Then she pushed off again and raced to the line.'],
              kinds: [null, 'notproof', 'wrongwho', 'notproof'],
              notes: [null,
                'The sentence shows that Romy is fast. It does not show that she is kind.',
                'The sentence is about Abner, not Romy.',
                'The sentence shows Romy racing again. It does not show her helping.'],
              why: 'The paragraph says Romy stopped her board and helped Abner climb back on. She helped a kid from the other team. It proves Romy is kind.' } }
        ]
      },
      turn: [
        { story: {
            title: 'Rings on a Tiny Shell',
            paragraphs: [
              'Ms. Lowe put a magnifying glass on the science table. Next to it sat a bowl of leaves, seashells, and feathers. Wiley looked at a feather and then at a shell. He held the glass over his own thumb to see the lines. “Why does this shell have rings on it?” asked Wiley. His friend Rollo yawned and wandered off to play with the blocks. Wiley stayed at the science table until it was time for lunch.'
            ]
          },
          items: [
            { id: 'Q01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
              a: { q: 'Part A — What can you infer about Wiley?',
                choices: ['Wiley is curious about the things he sees.', 'Wiley would rather go and play with the blocks.', 'Wiley is scared to touch the feathers and shells.', 'Wiley will be a famous scientist one day.'],
                kinds: [null, 'wrongwho', 'noclue', 'toofar'],
                notes: [null,
                  'Rollo is the one who went to play with the blocks. That is Rollo, not Wiley.',
                  'The paragraph shows Wiley look at a feather and a shell. No clue shows that he is scared.',
                  'Too far. Wiley looks at shells for one morning. No clue shows what he will be when he grows up.'],
                why: 'Wiley looks closely at each thing and asks a question about it. He stays at the table a long time. What I know: a curious kid wants to find out more. So Wiley is curious about the things he sees.' },
              b: { choices: ['“Why does this shell have rings on it?” asked Wiley.',
                  'His friend Rollo yawned and wandered off to play with the blocks.',
                  'Ms. Lowe put a magnifying glass on the science table.',
                  'Next to it sat a bowl of leaves, seashells, and feathers.'],
                kinds: [null, 'wrongwho', 'wrongwho', 'notproof'],
                notes: [null,
                  'The sentence is about Rollo, not Wiley.',
                  'The sentence tells what Ms. Lowe did. It is about Ms. Lowe, not Wiley.',
                  'The sentence tells what was on the table. It does not show what Wiley is like.'],
                why: 'The paragraph says Wiley asked why the shell has rings on it. He wants to find out more. It proves Part A.' } }
          ] },
        { story: {
            title: 'Eleven Names Ahead of Baxter',
            paragraphs: [
              'Baxter wanted the new book about sharks from the school library. The spot for the book on the shelf was empty again. Mrs. Burke showed him a list taped to the end of the shelf. Kids wrote their names on the list to get the book next. The list had eleven names on it, all the way down the page. Baxter’s friend Kirby picked a book about trucks instead. Baxter wrote his name at the very bottom of the list. Then he checked out a joke book to read while he waited.'
            ]
          },
          items: [
            { id: 'Q02', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
              a: { q: 'Part A — What conclusion can be drawn about the shark book?',
                choices: ['Lots of kids want to read the shark book.', 'Nobody wants to read the shark book.', 'The shark book is lost in the library.', 'Every kid in the school has finished the shark book.'],
                kinds: [null, 'opposite', 'noclue', 'toofar'],
                notes: [null,
                  'The paragraph shows kids waiting for the book. That is the opposite of nobody.',
                  'The book is not on the shelf. But no clue shows that it is lost. Kids are waiting for it.',
                  'Too far. Lots of kids want the book. No clue shows that every kid has finished it.'],
                why: 'The shark book is not on the shelf, and many kids have signed up to wait for it. What I know: kids wait for things that lots of people want. So lots of kids want to read the shark book.' },
              b: { choices: ['The list had eleven names on it, all the way down the page.',
                  'Baxter wanted the new book about sharks from the school library.',
                  'Baxter’s friend Kirby picked a book about trucks instead.',
                  'Then he checked out a joke book to read while he waited.'],
                kinds: [null, 'notproof', 'wrongwho', 'notproof'],
                notes: [null,
                  'The sentence shows that one kid, Baxter, wants the book. It does not show that lots of kids do.',
                  'The sentence is about Kirby and a truck book, not the shark book.',
                  'The sentence tells about a joke book for Baxter to enjoy while he waits. It does not show how many kids want the shark book.'],
                why: 'The paragraph says the list had eleven names on it. Eleven kids are waiting for the shark book. It proves Part A.' } }
          ] },
        { story: {
            title: 'A New Ball on a Rainy Day',
            paragraphs: [
              'Cruz brought his new red kickball to school on Tuesday. All morning, he could not wait to play with it at recess. Right before recess, rain began to pound on the windows. Mr. Shaw said that recess would be inside today. Cruz’s shoulders sank down, and he pushed the ball deep into his cubby. His friend Lars cheered and ran to get the board games. Cruz sat at his desk and stared out at the wet field. After lunch, the sun came out, and Cruz grabbed his ball again.'
            ]
          },
          items: [
            { id: 'Q03', type: 'ebsr', skill: ['Character feelings', 'Supporting detail'],
              a: { q: 'Part A — How does Cruz feel when Mr. Shaw says recess will be inside?',
                choices: ['disappointed that he cannot play outside', 'glad to play board games inside the room', 'excited to show off his new ball', 'angry at Lars for cheering'],
                kinds: [null, 'wrongwho', 'wrongtime', 'noclue'],
                notes: [null,
                  'Lars is the one who cheered and got the board games. That is Lars, not Cruz.',
                  'Cruz was excited in the morning, before the rain. That is a different part of the paragraph.',
                  'The paragraph says Lars cheered. No clue shows that Cruz is angry at him.'],
                why: 'Cruz brought a new ball to play with at recess. Then the rain means no recess outside. What I know: when a plan I want gets ruined, I feel let down. So Cruz is disappointed.' },
              b: { choices: ['Cruz’s shoulders sank down, and he pushed the ball deep into his cubby.',
                  'Cruz brought his new red kickball to school on Tuesday.',
                  'His friend Lars cheered and ran to get the board games.',
                  'After lunch, the sun came out, and Cruz grabbed his ball again.'],
                kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
                notes: [null,
                  'The sentence tells what Cruz brought to school. It does not show how he feels about the rain.',
                  'The sentence is about Lars, not Cruz.',
                  'The sentence tells about after lunch, when the sun came out. That is a different part of the paragraph.'],
                why: 'The paragraph says Cruz’s shoulders sank down, and he pushed his ball deep into his cubby. Kids do that when they feel let down. It proves Part A.' } }
          ] },
        { story: {
            title: 'The Mirror on the Art Table',
            paragraphs: [
              'In art, each kid got a big sheet of paper and a small mirror. Cass looked into her mirror and then drew on her paper. She looked again and drew a gap between two front teeth. Then she drew curly black hair and a tiny dot by one eye. Cass had a gap in her teeth and a tiny dot by her eye, too. Her friend Darnell drew a robot with ten arms. Ms. Vang walked around the room and smiled at each picture. At the end, Cass wrote her name at the bottom.'
            ]
          },
          items: [
            { id: 'Q04', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
              a: { q: 'Part A — Why does Cass keep looking in the mirror?',
                choices: ['She is drawing a picture of her own face.', 'She wants to fix her hair before she goes to lunch.', 'She is drawing a robot with ten arms.', 'She wants to be a famous artist one day.'],
                kinds: [null, 'noclue', 'wrongwho', 'toofar'],
                notes: [null,
                  'The paragraph shows Cass look and then draw. No clue shows that she is fixing her hair.',
                  'Darnell is the one who drew a robot. That is Darnell, not Cass.',
                  'Too far. The paragraph tells about one art class. No clue shows what Cass wants to be.'],
                why: 'Cass looks in the mirror, and then she draws. She draws a gap in the teeth and a dot by one eye. What I know: you look in a mirror to see your own face. So Cass is drawing a picture of her own face.' },
              b: { choices: ['Cass had a gap in her teeth and a tiny dot by her eye, too.',
                  'In art, each kid got a big sheet of paper and a small mirror.',
                  'Her friend Darnell drew a robot with ten arms.',
                  'Ms. Vang walked around the room and smiled at each picture.'],
                kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
                notes: [null,
                  'The sentence tells THAT Cass had a mirror, not WHY she looked in it.',
                  'The sentence is about Darnell, not Cass.',
                  'The sentence is about Ms. Vang, not Cass.'],
                why: 'The paragraph says Cass had a gap in her teeth and a dot by her eye, too. She drew those same things on her paper. It proves Part A.' } }
          ] }
      ]
    },

    /* ───────── version 4 ───────── */
    {
      teach: {
        story: {
          title: 'Twenty Swings Each',
          paragraphs: [
            'At recess, four kids ran to the two swings at the same time. Freddie and Vada got there first and grabbed the seats. Posy stood in the wood chips with her arms crossed and frowned. Vada swung up high and did not look at anyone. Freddie hopped off and said, “Let’s count to twenty, then switch.” Each kid got twenty swings and then gave the seat to the next kid. Soon all four kids were laughing and counting out loud together.'
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'One question, two parts',
            lines: [
              'Some test questions have two parts. The parts are called Part A and Part B.',
              'Part A asks a question about the paragraph. You pick your answer.',
              'Part B asks for proof. You pick the sentence from the paragraph that proves your Part A answer.',
              'Many Part A questions ask you to infer.',
              'To infer means to figure out something the paragraph does not say. You use clues to do it.',
              'Here is an example. Your friend runs to the window each time a car goes by.',
              'Nobody says that she is waiting for someone. But you can infer it. Running to the window is your clue.',
              'Some Part A questions ask for a conclusion. A conclusion is what the clues add up to.',
              'Each car makes her run to look. That adds up to one conclusion. She is waiting for someone to come.',
              'A Part A question may ask, “What conclusion can be drawn?” Here, drawn does not mean a picture.',
              'It means: what can you figure out from the clues?',
              'BEST supports means the sentence proves your answer the most.'
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me do Part A and Part B',
            lines: [
              'Let’s do one together. Here is a Part A question.',
              'Part A — What can you infer about Posy at the start of recess?',
              'Step 1 is to answer Part A. I look for clues about Posy.',
              'Clue: Posy stands with her arms crossed. Clue: she frowns.',
              'What I know: kids cross their arms and frown when they are upset.',
              'Clues plus what I know: Posy is upset that she did not get a swing. That is my Part A answer.',
              'Step 2 is Part B. I go back to the paragraph. I find the sentence that shows my answer.',
              'Posy stood in the wood chips with her arms crossed and frowned. That sentence is my proof.',
              'At recess, four kids ran to the two swings at the same time. That is true. But it does not show how Posy feels.',
              'Part B is like the D in R.A.D. R.A.D. means Restate, Answer, Detail.',
              'Part A is your Answer. Part B is your Detail. It is the proof from the paragraph.'
            ],
            lit: ['Posy stood in the wood chips with her arms crossed and frowned.',
              'At recess, four kids ran to the two swings at the same time.'] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: 'Part A — What can you infer about Freddie?',
            choices: ['Freddie wants every kid to get a turn.', 'Freddie wants a swing all to himself.', 'Freddie is upset that he has no swing.', 'Freddie is the fastest runner at recess.'],
            kinds: [null, 'opposite', 'wrongwho', 'toofar'],
            notes: [null,
              'The paragraph shows Freddie get off his swing to share it. That is the opposite of keeping it.',
              'Posy is the one who has no swing. That is Posy, not Freddie.',
              'Too far. Freddie gets to the swings first one time. No clue shows he is the fastest at recess.'],
            why: 'Freddie has a swing, but he gets off. He makes a plan so all four kids can swing. What I know: a fair kid makes sure everyone gets a turn. So Freddie wants every kid to get a turn.' },
          { kind: 'step', id: 'S2', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'Part A — What can you infer about Freddie?',
              choices: ['Freddie wants every kid to get a turn.', 'Freddie wants a swing all to himself.', 'Freddie is upset that he has no swing.', 'Freddie is the fastest runner at recess.'],
              kinds: [null, 'opposite', 'wrongwho', 'toofar'],
              notes: [null,
                'The paragraph shows Freddie get off his swing to share it. That is the opposite of keeping it.',
                'Posy is the one who has no swing. That is Posy, not Freddie.',
                'Too far. Freddie gets to the swings first one time. No clue shows he is the fastest at recess.'],
              why: 'You did Part A in the last step. Freddie makes a plan so all four kids can swing. So Freddie wants every kid to get a turn.' },
            b: { choices: ['Freddie hopped off and said, “Let’s count to twenty, then switch.”',
                'Freddie and Vada got there first and grabbed the seats.',
                'Vada swung up high and did not look at anyone.',
                'Posy stood in the wood chips with her arms crossed and frowned.'],
              kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
              notes: [null,
                'The sentence tells that Freddie got a swing first. It does not show him sharing.',
                'The sentence is about Vada, not Freddie.',
                'The sentence is about Posy, not Freddie.'],
              why: 'The paragraph says Freddie hopped off and made a plan to count to twenty, then switch. That way, every kid gets a turn. It proves Part A.' } },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              'Here are the steps for Part A and Part B.',
              'Step 1: Read Part A. Use the clues and what you know to answer it.',
              'Step 2: Go back to the paragraph. Find the part that talks about your answer.',
              'Step 3: For Part B, pick the sentence that SHOWS your Part A answer.',
              'Ask about each sentence: Does this prove my Part A answer? A true sentence is not always proof.',
              'Check who the sentence is about. A sentence about someone else does not prove an answer about the person in the question.',
              'Think of R.A.D. Restate, Answer, Detail.',
              'Part A is your Answer. Part B is your Detail.',
              'Answer Part A first. Then find the proof.',
              'Now you try.'
            ] }
        ]
      },
      pre: {
        story: {
          title: 'The Sky on the Gym Wall',
          paragraphs: [
            'Room 9 was painting a mural, a big picture, on the long wall by the gym. Ms. Kwan drew the shapes, and the kids filled them in with paint. Harvey’s job was to paint the blue sky across the top. He reached up high and painted with slow, even strokes. One day, a drip of his blue paint ran down onto Val’s green tree. Harvey said sorry and fixed the tree with a tiny brush. The mural took the class three whole weeks to finish. Kids from other classes stopped to stare at the wall and smile.'
          ]
        },
        items: [
          { id: 'P1', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'Part A — What conclusion can be drawn about the mural?',
              choices: ['Many kids at school like the mural.', 'Nobody looks at the mural.', 'Room 9 wants to paint another wall next.', 'The mural will win a prize from the city.'],
              kinds: [null, 'opposite', 'noclue', 'toofar'],
              notes: [null,
                'The paragraph tells what kids from other classes do at the wall. That is the opposite of nobody.',
                'The paragraph tells about one mural. No clue shows that Room 9 wants to paint another wall.',
                'Too far. Kids like the mural. No clue shows that it will win a prize.'],
              why: 'Kids from other classes come to look at the mural, and they smile. What I know: people smile at things they like. So many kids at school like the mural.' },
            b: { choices: ['Kids from other classes stopped to stare at the wall and smile.',
                'The mural took the class three whole weeks to finish.',
                'Room 9 was painting a mural, a big picture, on the long wall by the gym.',
                'Ms. Kwan drew the shapes, and the kids filled them in with paint.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null,
                'The sentence tells how long the mural took. It does not show what kids think of it.',
                'The sentence tells where the mural is. It does not show what kids think of it.',
                'The sentence tells who drew and who painted. It does not show what other kids think of the mural.'],
              why: 'The paragraph says kids from other classes stopped to stare at the wall and smile. They like what they see. It proves Part A.' } },
          { id: 'P2', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'Part A — Which word BEST describes Harvey?',
              choices: ['responsible', 'rude', 'lazy', 'bossy'],
              kinds: [null, 'opposite', 'opposite', 'noclue'],
              notes: [null,
                'The paragraph shows Harvey say sorry. That is the opposite of rude.',
                'The paragraph shows Harvey reach up high and paint the sky. That is the opposite of lazy.',
                'The paragraph shows Harvey doing his own job. No clue shows him telling others what to do.'],
              why: 'Responsible means you take care of your job and fix your own mistakes. The paragraph shows Harvey make a drip and then take care of it. So Harvey is responsible.' },
            b: { choices: ['Harvey said sorry and fixed the tree with a tiny brush.',
                'Harvey’s job was to paint the blue sky across the top.',
                'One day, a drip of his blue paint ran down onto Val’s green tree.',
                'Ms. Kwan drew the shapes, and the kids filled them in with paint.'],
              kinds: [null, 'notproof', 'notproof', 'wrongwho'],
              notes: [null,
                'The sentence tells what job Harvey had. It does not show how he takes care of it.',
                'The sentence tells about the drip. It does not show what Harvey did about it.',
                'The sentence is about Ms. Kwan and the class, not Harvey.'],
              why: 'The paragraph says Harvey said sorry and fixed the tree. He took care of his own mistake. It proves Harvey is responsible.' } }
        ]
      },
      turn: [
        { story: {
            title: 'One Roll on the Blue Mat',
            paragraphs: [
              'In gym, Coach Ochoa set a long blue mat on the floor. Each kid had to do a forward roll down the mat. Lionel had never done a roll before. His knees shook as he stood at the edge of the mat. Lionel tucked his chin, put his hands down, and rolled anyway. His friend Elmer did three fast rolls, one after another, and laughed out loud. When Lionel sat up, the whole class cheered for him.'
            ]
          },
          items: [
            { id: 'Q01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
              a: { q: 'Part A — What can you infer about Lionel?',
                choices: ['Lionel does hard things, even when he is scared.', 'Lionel thinks that forward rolls are very easy.', 'Lionel will not try the roll in front of the class.', 'Lionel will be on a gym team when he is older.'],
                kinds: [null, 'wrongwho', 'opposite', 'toofar'],
                notes: [null,
                  'Elmer is the one who does three rolls and laughs. That is Elmer, not Lionel.',
                  'The paragraph shows Lionel do the roll. That is the opposite of not trying.',
                  'Too far. Lionel does one roll in gym. No clue shows that he will be on a team.'],
                why: 'Lionel has never done a roll, and his knees shake. But he still does the roll. What I know: brave kids do hard things, even when they feel scared. So Lionel does hard things, even when he is scared.' },
              b: { choices: ['Lionel tucked his chin, put his hands down, and rolled anyway.',
                  'His knees shook as he stood at the edge of the mat.',
                  'His friend Elmer did three fast rolls, one after another, and laughed out loud.',
                  'Each kid had to do a forward roll down the mat.'],
                kinds: [null, 'notproof', 'wrongwho', 'notproof'],
                notes: [null,
                  'The sentence shows that Lionel is scared. It does not show what he does next.',
                  'The sentence is about Elmer, not Lionel.',
                  'The sentence tells what every kid had to do. It does not show what Lionel is like.'],
                why: 'The paragraph says Lionel tucked his chin, put his hands down, and rolled anyway. Anyway means he did it even though his knees shook. It proves Part A.' } }
          ] },
        { story: {
            title: 'A Weekend for Waffles',
            paragraphs: [
              'Each Friday, one kid in Room 10 took home Waffles, the class bear. Waffles came in a bag with a small book to write in. This week, it was Dulce’s turn to take Waffles home. On Monday, Dulce brought Waffles back to school. When she opened the bag, sand and a tiny seashell spilled onto her desk. Her friend Liz wanted to take Waffles home next. In the book, Dulce had drawn Waffles eating a big pancake at the kitchen table. Mr. Kane hung her page up on the wall.'
            ]
          },
          items: [
            { id: 'Q02', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
              a: { q: 'Part A — What conclusion can be drawn about the class bear?',
                choices: ['The class bear went to the beach with Dulce.', 'The class bear stayed in Dulce’s room all weekend.', 'The class bear went home with Liz this week.', 'The class bear will go to the beach every week.'],
                kinds: [null, 'opposite', 'wrongwho', 'toofar'],
                notes: [null,
                  'Waffles came back with things from outside. That is the opposite of staying in one room.',
                  'Liz wants to take Waffles home next. This week, Waffles went home with Dulce.',
                  'Too far. The paragraph tells about one weekend. No clue shows that Waffles will go every week.'],
                why: 'Waffles comes back with sand and a shell in his bag. What I know: you find sand and shells at the beach. So the class bear went to the beach with Dulce.' },
              b: { choices: ['When she opened the bag, sand and a tiny seashell spilled onto her desk.',
                  'Each Friday, one kid in Room 10 took home Waffles, the class bear.',
                  'Her friend Liz wanted to take Waffles home next.',
                  'In the book, Dulce had drawn Waffles eating a big pancake at the kitchen table.'],
                kinds: [null, 'notproof', 'wrongwho', 'notproof'],
                notes: [null,
                  'The sentence tells how the class bear goes home. It does not show where Waffles went.',
                  'The sentence is about Liz, not where Waffles went.',
                  'The sentence tells about a pancake picture. It does not show where Waffles went.'],
                why: 'The paragraph says sand and a tiny seashell spilled out of the bag. Sand and shells come from the beach. It proves Part A.' } }
          ] },
        { story: {
            title: 'A Growl at Story Time',
            paragraphs: [
              'Room 11 sat on the rug for story time in the library. Mrs. Hart was reading in a soft voice, and the room was very still. Fritz had not eaten much breakfast that morning. All at once, his stomach let out a long, loud growl. Fritz’s face turned bright red, and he hid it behind his hands. His friend Neddy giggled and poked him in the arm. Mrs. Hart just smiled at the class and kept right on reading the story. After story time, Fritz ate the snack in his backpack.'
            ]
          },
          items: [
            { id: 'Q03', type: 'ebsr', skill: ['Character feelings', 'Supporting detail'],
              a: { q: 'Part A — How does Fritz feel when his stomach growls?',
                choices: ['embarrassed by the loud noise', 'proud of the loud noise', 'angry at Mrs. Hart for reading', 'happy that his friend is giggling'],
                kinds: [null, 'opposite', 'noclue', 'wrongwho'],
                notes: [null,
                  'The paragraph shows how Fritz acts after the growl. He does not show off. That is the opposite of proud.',
                  'The paragraph says Mrs. Hart just smiled. No clue shows that Fritz is angry at her.',
                  'Neddy is the one who giggles. That is Neddy, not Fritz.'],
                why: 'The room is very quiet. Then Fritz’s stomach growls, and his face turns red. What I know: when everyone hears a noise I make, I want to hide. So Fritz is embarrassed by the loud noise.' },
              b: { choices: ['Fritz’s face turned bright red, and he hid it behind his hands.',
                  'Fritz had not eaten much breakfast that morning.',
                  'His friend Neddy giggled and poked him in the arm.',
                  'Mrs. Hart just smiled at the class and kept right on reading the story.'],
                kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
                notes: [null,
                  'The sentence tells WHY his stomach growled. It does not show how Fritz feels.',
                  'The sentence is about Neddy, not Fritz.',
                  'The sentence is about Mrs. Hart, not Fritz.'],
                why: 'The paragraph says Fritz’s face turned bright red, and he hid it behind his hands. Kids do that when they are embarrassed. It proves Part A.' } }
          ] },
        { story: {
            title: 'Two Hats in Beth’s Backpack',
            paragraphs: [
              'On Monday, the wind on the playground was icy cold. Beth had a warm hat, but her friend Lynn had none. Lynn’s ears turned bright red, and she held her hands over them. On Tuesday morning, Beth stuffed two hats into her backpack. One hat was blue, and the other one was purple and fuzzy. At recess, Beth pulled on the blue hat. Then she handed the purple hat to Lynn. Lynn pulled it down over her ears and grinned.'
            ]
          },
          items: [
            { id: 'Q04', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
              a: { q: 'Part A — Why does Beth bring two hats to school?',
                choices: ['She wants to give a hat to her friend Lynn.', 'She likes to wear two hats at the same time.', 'She lost her own hat at recess on Monday.', 'Her teacher asked the class to bring hats.'],
                kinds: [null, 'opposite', 'wrongwho', 'noclue'],
                notes: [null,
                  'The paragraph shows Beth put on just one hat. That is the opposite of two at once.',
                  'Beth had a warm hat on Monday. Lynn is the one who had no hat.',
                  'The paragraph does not tell about a teacher. No clue shows that a teacher asked for hats.'],
                why: 'On Monday, Lynn had no hat, and her ears got cold. The next day, Beth brings an extra hat. What I know: a good friend helps when you need something. So Beth wants to give a hat to Lynn.' },
              b: { choices: ['Then she handed the purple hat to Lynn.',
                  'On Tuesday morning, Beth stuffed two hats into her backpack.',
                  'One hat was blue, and the other one was purple and fuzzy.',
                  'At recess, Beth pulled on the blue hat.'],
                kinds: [null, 'notproof', 'notproof', 'notproof'],
                notes: [null,
                  'The sentence tells THAT Beth brought two hats, not WHY.',
                  'The sentence tells what the hats look like. It does not show who they are for.',
                  'The sentence tells which hat Beth wore. It does not show who the other hat was for.'],
                why: 'The paragraph says Beth handed the purple hat to Lynn. She brought the extra hat for her friend. It proves Part A.' } }
          ] }
      ]
    }
  ]
};
