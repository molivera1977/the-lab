/* ═══════════════════════════════════════════════════════
   THE LAB · data/rc5.js — Reading for Meaning, Level 1 Part 2, lesson RC5: Words That Mean More
   Idioms and similes (skill 'Figurative language'). An idiom is a saying whose words do not mean what they
   say; a simile compares two things with like or as. The trap is the WORD-FOR-WORD choice (kind literal).
   Every scored item carries quote (the EXACT story sentence) + phrase (the idiom or simile inside it), and
   the stem: Read this sentence from the passage. “<quote>” What does the phrase “<phrase>” suggest about <who>?
   The right choice(s) come FIRST; the site shuffles. Every wrong choice has a kind AND its own note.
   A new teaching story in every version (same screens: W1, W2, S1 mc, S2 mc, S3 ms pick 2, W3).
     W2 works one idiom of the teaching story; S1 finds a SECOND idiom; S2 asks what it means; S3 a simile.
   pre:  P1 mc idiom · P2 ms pick 2 idiom · P3 mc simile
   turn: A = Q01 mc idiom · Q02 ms pick 2 idiom · Q03 mc simile · Q04 ms pick 3 simile (6 choices)
         B = Q05–Q08, the same four slots. Each Your-turn story holds 2 idioms + 2 similes, each asked once.
   Premise domain: school, clubs and the neighborhood (each premise grepped against the premise index).
   v3–4 premise domain: home, family and outdoors (grepped against the index, every Lab lesson and the sibling sites).
   Shape: tools/CONTENT-SPEC-READING.md (LEVEL 1, PART 2, RC5). Check: node tools/check-reading.js RC5
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RC5 = {
  versions: [
    /* ════════ VERSION 1 ════════ */
    {
      teach: {
        story: {
          title: `Buttons for the 100th Day`,
          paragraphs: [
            `Friday was the 100th day of school. Each student in Room 5 had to bring in 100 of something special. Jem picked buttons from Grandma's big glass jar.`,
            `On Thursday night, Jem sat on the living room rug to count. He made careful piles with ten buttons in each one. Jem was as busy as a bee. He worked for a whole hour and did not stop for a snack.`,
            `Then his cat, Socks, jumped onto the rug. The piles slid all over the floor. Now Jem was back to square one. He let out a groan and started to count from one again.`,
            `This time, Grandma held Socks on her lap. Jem put each pile of ten into a paper cup. At last, he poured exactly 100 buttons back into the jar.`,
            `At school, the jar of buttons was a hit with the whole class. Kids crowded around Jem's desk to look. Everyone wanted to hold the shiny gold button.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Words that mean more',
            lines: [
              `Some phrases mean more than their words say. A phrase is a small group of words.`,
              `An idiom is a saying. Its words do not mean what they say.`,
              `Here is an idiom. My sister has a big test, so she hits the books.`,
              `She does not hit a book with her hand! Hits the books means she studies hard.`,
              `A simile compares two things. It uses the word like or the word as.`,
              `Here is a simile. The baby was as quiet as a mouse.`,
              `Ask, what is a mouse like? A mouse makes almost no sound. The baby is like that too. So the baby was very quiet.`,
              `A test may ask, what does the phrase suggest? Suggest means to show without saying it.`,
              `To find out, ask one thing. Does the phrase really mean its words?`,
              `If it does not, use the clues around it. The clues tell what it means.`,
              `Watch out for the word-for-word answer. It is a trap.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the meaning',
            lines: [
              `Let's find what an idiom means. Here is a sentence from the passage.`,
              `Now Jem was back to square one.`,
              `Step 1. Find the phrase. Back to square one.`,
              `Step 2. Ask, does it really mean the words? Is Jem standing on a square with a 1 on it? No.`,
              `So the word-for-word meaning is a trap. The phrase means something else.`,
              `Step 3. Use the clues around it. Paragraph 3 says the piles slid all over the floor.`,
              `Then Jem started to count from one again.`,
              `Step 4. Pick what the phrase suggests. Back to square one means Jem had to start all over.`
            ],
            lit: [
              `Now Jem was back to square one.`,
              `The piles slid all over the floor.`,
              `He let out a groan and started to count from one again.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `Read this sentence from the passage. “At school, the jar of buttons was a hit with the whole class.” Which phrase in this sentence is an idiom?`,
            choices: [`a hit`, `At school`, `the jar of buttons`, `the whole class`],
            kinds: [null, 'literal', 'literal', 'literal'],
            notes: [null,
              `At school tells where. Those words mean just what they say.`,
              `The jar of buttons is a real jar. Those words mean just what they say.`,
              `The whole class means every kid in the class. Those words mean just what they say.`],
            why: `The buttons did not really hit anyone. So the words a hit do not mean what they say. That makes a hit an idiom.` },
          { kind: 'step', id: 'S2', type: 'mc',
            quote: `At school, the jar of buttons was a hit with the whole class.`, phrase: `a hit`,
            q: `Read this sentence from the passage. “At school, the jar of buttons was a hit with the whole class.” What does the phrase “a hit” suggest about the class?`,
            choices: [`The class really liked the buttons.`, `The buttons hit the kids in the class.`, `The class did not like the buttons.`, `The class wanted to count the buttons.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `No button hit anyone. That takes the words word for word.`,
              `Paragraph 5 says the kids crowded around to look. That is the opposite.`,
              `The passage gives no clue that the class wanted to count the buttons.`],
            why: `Paragraph 5 says the kids crowded around Jem's desk. Everyone wanted to hold the gold button. So a hit means the class really liked the buttons.` },
          { kind: 'step', id: 'S3', type: 'ms', pick: 2,
            quote: `Jem was as busy as a bee.`, phrase: `as busy as a bee`,
            q: `Read this sentence from the passage. “Jem was as busy as a bee.” What does the phrase “as busy as a bee” suggest about Jem? Choose TWO answers.`,
            choices: [`Jem worked very hard.`, `Jem kept going and did not stop.`, `Jem made honey like a bee.`, `Jem was lazy and sat still.`, `Jem was scared of bees.`],
            kinds: [null, null, 'literal', 'opposite', 'noclue'],
            notes: [null, null,
              `Jem is a boy, not a bee. He made piles of buttons, not honey. That takes the words word for word.`,
              `Paragraph 2 says Jem worked for a whole hour. He was not lazy.`,
              `The passage gives no clue that Jem was scared of bees.`],
            why: `A bee works all day. Paragraph 2 says Jem made piles of ten. He worked for a whole hour and did not stop for a snack. So Jem worked very hard, and he kept going.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for words that mean more.`,
              `Step 1. Find the phrase in the sentence.`,
              `Step 2. Ask, does it really mean the words?`,
              `Step 3. Use the clues around it. Read the sentences before it and after it.`,
              `For a simile, ask, what is that thing like? The person is like that too.`,
              `Step 4. Pick what the phrase suggests.`,
              `Watch out for the word-for-word answer. It is a trap.`,
              `Some questions say Choose TWO. Then two answers are right. Choose THREE means three answers are right.`,
              `It is all or nothing. Check every answer you pick.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Take a Book, Leave a Book`,
          paragraphs: [
            `Flo and her dad built a little wooden box on a post by their steps. It had a glass door and a sign that said Take a Book. Flo filled it with six of her old books.`,
            `Every morning, Flo watched the box like a hawk from her window. She checked it before school and after school. But for a whole week, nobody took a book.`,
            `Flo was down in the dumps. She sat on the front steps with her chin in her hands. She sighed and kicked a pebble.`,
            `On Saturday, a little boy and his grandma stopped at the box. The boy picked a picture book about trains and hugged it. He left a book about sharks in its spot.`,
            `Flo was over the moon. She ran inside to tell Dad, and she grinned all through lunch.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Figurative language',
            quote: `Flo was down in the dumps.`, phrase: `down in the dumps`,
            q: `Read this sentence from the passage. “Flo was down in the dumps.” What does the phrase “down in the dumps” suggest about Flo?`,
            choices: [`Flo felt sad that nobody took a book.`, `Flo was sitting in a big trash dump.`, `Flo felt happy about her new box.`, `Flo was tired from building the wooden box.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Paragraph 3 says Flo sat on her front steps, not in a trash dump. That takes the words word for word.`,
              `Paragraph 3 says Flo sighed and kicked a pebble. She was not happy.`,
              `The passage gives no clue that Flo was tired.`],
            why: `Paragraph 2 says nobody took a book for a whole week. Paragraph 3 says Flo sat with her chin in her hands, and she sighed. So down in the dumps means Flo felt sad.` },
          { id: 'P2', type: 'ms', skill: 'Figurative language', pick: 2,
            quote: `Flo was over the moon.`, phrase: `over the moon`,
            q: `Read this sentence from the passage. “Flo was over the moon.” What does the phrase “over the moon” suggest about Flo? Choose TWO answers.`,
            choices: [`Flo was very happy.`, `Flo was glad someone took a book.`, `Flo jumped up over the moon.`, `Flo was still sad about the box.`, `The boy's grandma was very happy.`],
            kinds: [null, null, 'literal', 'opposite', 'wrongwho'],
            notes: [null, null,
              `No one can jump over the moon. That takes the words word for word.`,
              `Paragraph 5 says Flo grinned all through lunch. She was not sad.`,
              `The question asks about Flo, not the boy's grandma.`],
            why: `Paragraph 2 says nobody took a book for a whole week. Paragraph 4 says a little boy picked a book about trains. Paragraph 5 says Flo ran to tell Dad, and she grinned all through lunch. So Flo was very happy. She was glad someone took a book.` },
          { id: 'P3', type: 'mc', skill: 'Figurative language',
            quote: `Every morning, Flo watched the box like a hawk from her window.`, phrase: `like a hawk`,
            q: `Read this sentence from the passage. “Every morning, Flo watched the box like a hawk from her window.” What does the phrase “like a hawk” suggest about Flo?`,
            choices: [`Flo watched the box very closely.`, `Flo had wings and sharp claws.`, `Flo did not look at the box at all.`, `Dad watched the box all day long.`],
            kinds: [null, 'literal', 'opposite', 'wrongwho'],
            notes: [null,
              `Flo is a girl, not a bird. That takes the words word for word.`,
              `Paragraph 2 says Flo checked the box before and after school. That is the opposite.`,
              `The question asks about Flo, not Dad.`],
            why: `A hawk watches the ground very closely. Paragraph 2 says Flo checked the box before school and after school. So like a hawk means Flo watched the box very closely.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Twelve Cups and a Stopwatch`,
            paragraphs: [
              `On Tuesdays, the Cup Stacking Club meets in the school gym after school. Each kid gets twelve plastic cups. You stack the cups into towers, then take them down as fast as you can.`,
              `Rosie joined the club in October. On the first day, Rosie was all thumbs. Her cups slipped out of her hands and rolled across the floor. Two of her towers fell over before she was done.`,
              `Then Ms. Dale showed the club how to do it. Ms. Dale's hands moved as fast as a hummingbird's wings. Her cups went up and came back down in just six seconds. The whole club clapped.`,
              `Rosie practiced every night at home. She stacked cups on the kitchen table after dinner. By the next Tuesday, Rosie got the hang of it. Her towers stood up straight, and she did not drop one cup.`,
              `At the end of the day, Ms. Dale timed each kid. Rosie finished in twelve seconds, her best time ever. Rosie bounced on her toes like popcorn in a hot pan. She hugged her friend Lev and asked Ms. Dale to time her again.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Figurative language',
              quote: `On the first day, Rosie was all thumbs.`, phrase: `all thumbs`,
              q: `Read this sentence from the passage. “On the first day, Rosie was all thumbs.” What does the phrase “all thumbs” suggest about Rosie?`,
              choices: [`Rosie had a hard time holding the cups.`, `Rosie had ten thumbs and no fingers.`, `Rosie's hands were quick and smooth.`, `Rosie's thumbs were sore from the cold gym.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Rosie has fingers like everyone else. That takes the words word for word.`,
                `Paragraph 2 says Rosie's cups slipped and rolled away. Her hands were not quick and smooth.`,
                `The passage gives no clue that the gym was cold or that Rosie's thumbs were sore.`],
              why: `Paragraph 2 says Rosie's cups slipped out of her hands. Two of her towers fell over. So all thumbs means Rosie had a hard time holding the cups.` },
            { id: 'Q02', type: 'ms', skill: 'Figurative language', pick: 2,
              quote: `By the next Tuesday, Rosie got the hang of it.`, phrase: `got the hang of it`,
              q: `Read this sentence from the passage. “By the next Tuesday, Rosie got the hang of it.” What does the phrase “got the hang of it” suggest about Rosie? Choose TWO answers.`,
              choices: [`Rosie learned how to stack the cups.`, `Rosie's practice at home helped her.`, `Rosie hung her cups up on a hook.`, `Rosie still dropped all of her cups.`, `Rosie got a new set of cups.`],
              kinds: [null, null, 'literal', 'opposite', 'noclue'],
              notes: [null, null,
                `Nothing in the passage hangs on a hook. That takes the words word for word.`,
                `Paragraph 4 says Rosie did not drop one cup. That is the opposite.`,
                `The passage gives no clue about new cups.`],
              why: `Paragraph 4 says Rosie practiced every night at home. Then her towers stood up straight, and she did not drop one cup. So Rosie learned how to stack the cups. Her practice helped her.` },
            { id: 'Q03', type: 'mc', skill: 'Figurative language',
              quote: `Ms. Dale's hands moved as fast as a hummingbird's wings.`, phrase: `as fast as a hummingbird's wings`,
              q: `Read this sentence from the passage. “Ms. Dale's hands moved as fast as a hummingbird's wings.” What does the phrase “as fast as a hummingbird's wings” suggest about Ms. Dale?`,
              choices: [`Ms. Dale could stack the cups very fast.`, `Ms. Dale had wings like a little bird.`, `Rosie stacked faster than Ms. Dale.`, `Ms. Dale stacked the cups very slowly.`],
              kinds: [null, 'literal', 'wrongwho', 'opposite'],
              notes: [null,
                `Ms. Dale has hands, not wings. That takes the words word for word.`,
                `Paragraph 5 says Rosie took twelve seconds. Paragraph 3 says Ms. Dale took just six. And the question asks about Ms. Dale.`,
                `Paragraph 3 says Ms. Dale's cups went up and down in six seconds. That is not slow.`],
              why: `A hummingbird's wings move so fast that you can hardly see them. Paragraph 3 says Ms. Dale's cups went up and down in just six seconds. So Ms. Dale could stack the cups very fast.` },
            { id: 'Q04', type: 'ms', skill: 'Figurative language', pick: 3,
              quote: `Rosie bounced on her toes like popcorn in a hot pan.`, phrase: `like popcorn in a hot pan`,
              q: `Read this sentence from the passage. “Rosie bounced on her toes like popcorn in a hot pan.” What does the phrase “like popcorn in a hot pan” suggest about Rosie? Choose THREE answers.`,
              choices: [`Rosie was very excited.`, `Rosie could not keep still.`, `Rosie was full of energy.`, `Rosie made popcorn in a hot pan.`, `Rosie felt calm and sleepy.`, `Lev was jumping up and down too.`],
              kinds: [null, null, null, 'literal', 'opposite', 'wrongwho'],
              notes: [null, null, null,
                `Paragraph 5 is at the club in the gym. Rosie did not make popcorn. That takes the words word for word.`,
                `Paragraph 5 says Rosie bounced and asked to go again. She was not calm or sleepy.`,
                `The question asks about Rosie, not Lev.`],
              why: `Popcorn hops and pops all over a hot pan. Popcorn cannot stay still. Paragraph 5 says Rosie bounced on her toes after her best time ever. So Rosie was very excited, she was full of energy, and she could not keep still.` }
          ]
        },
        {
          story: {
            title: `Crazy Hat Day in Room 4`,
            paragraphs: [
              `Friday was Crazy Hat Day at Oak Lane School. Tate went all out on his hat. He glued three paper towel rolls and twelve pom-poms onto an empty cereal box. Then he stuck a toy truck on the very top. He worked on it for two whole hours.`,
              `Tate walked into Room 4 like a king in a parade. He held his head up high. He turned in a slow circle so that everyone could see his hat.`,
              `Yuki sat alone at the back table. Her own hat was under her hood, and she was not sure it was silly enough. Yuki sat in her chair like a turtle in its shell. She kept her head down and her hood up. She did not say one word to anyone.`,
              `Then Tate's tall hat tipped over and landed on Yuki's table. The toy truck rolled right into her hands. Yuki giggled, and Tate laughed too. The silly hat broke the ice.`,
              `Yuki pulled down her hood. Under it was a hat with felt pizza slices on top. Tate and Yuki talked about hats all through lunch. At recess, they took turns on the tire swing.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Figurative language',
              quote: `Tate went all out on his hat.`, phrase: `went all out`,
              q: `Read this sentence from the passage. “Tate went all out on his hat.” What does the phrase “went all out” suggest about Tate?`,
              choices: [`Tate worked very hard on his hat.`, `Tate went all the way out the door.`, `Tate made his hat fast, without trying.`, `Tate bought his hat at a big store.`],
              kinds: [null, 'literal', 'opposite', 'opposite'],
              notes: [null,
                `The phrase is not about going out a door. That takes the words word for word.`,
                `Paragraph 1 says Tate worked on his hat for two whole hours. That is the opposite.`,
                `Paragraph 1 says Tate made his hat himself. He did not buy his hat at a store.`],
              why: `Paragraph 1 says Tate glued on rolls, pom-poms, and a toy truck. He worked for two whole hours. So went all out means Tate worked very hard on his hat.` },
            { id: 'Q06', type: 'ms', skill: 'Figurative language', pick: 2,
              quote: `The silly hat broke the ice.`, phrase: `broke the ice`,
              q: `Read this sentence from the passage. “The silly hat broke the ice.” What does the phrase “broke the ice” suggest about Tate and Yuki? Choose TWO answers.`,
              choices: [`Tate and Yuki began to talk to each other.`, `Yuki felt more relaxed around Tate.`, `The hat cracked a big block of ice.`, `Yuki got upset and moved away from Tate.`, `Tate's hat broke into two pieces.`],
              kinds: [null, null, 'literal', 'opposite', 'literal'],
              notes: [null, null,
                `There is no ice in Room 4. That takes the words word for word.`,
                `Paragraph 5 says Yuki talked with Tate all through lunch. That is the opposite.`,
                `Paragraph 4 says the hat tipped over. It does not say the hat broke. That takes the word broke word for word.`],
              why: `Paragraph 4 says Yuki giggled when the hat fell. Paragraph 5 says she pulled down her hood. Then Tate and Yuki talked all through lunch. So they began to talk, and Yuki felt more relaxed.` },
            { id: 'Q07', type: 'mc', skill: 'Figurative language',
              quote: `Tate walked into Room 4 like a king in a parade.`, phrase: `like a king in a parade`,
              q: `Read this sentence from the passage. “Tate walked into Room 4 like a king in a parade.” What does the phrase “like a king in a parade” suggest about Tate?`,
              choices: [`Tate felt proud and wanted to show his hat.`, `Tate was a real king in a long parade.`, `Tate was shy and tried to hide his hat.`, `Tate wanted to march in the school band.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Tate is a student in Room 4, not a king. That takes the words word for word.`,
                `Paragraph 2 says Tate turned so everyone could see his hat. That is the opposite of hiding.`,
                `The passage gives no clue about a school band.`],
              why: `A king in a parade wants everyone to see him. Paragraph 2 says Tate held his head up high. He turned in a slow circle so everyone could see his hat. So Tate felt proud and wanted to show his hat.` },
            { id: 'Q08', type: 'ms', skill: 'Figurative language', pick: 3,
              quote: `Yuki sat in her chair like a turtle in its shell.`, phrase: `like a turtle in its shell`,
              q: `Read this sentence from the passage. “Yuki sat in her chair like a turtle in its shell.” What does the phrase “like a turtle in its shell” suggest about Yuki? Choose THREE answers.`,
              choices: [`Yuki felt shy around the class.`, `Yuki was trying to hide.`, `Yuki stayed very quiet.`, `Yuki was a real turtle.`, `Yuki brought a pet turtle to school.`, `Yuki talked to everyone at her table.`],
              kinds: [null, null, null, 'literal', 'literal', 'opposite'],
              notes: [null, null, null,
                `Yuki is a girl, not a turtle. That takes the words word for word.`,
                `The passage does not tell about a pet turtle. That takes the word turtle word for word.`,
                `Paragraph 3 says Yuki did not say one word to anyone. That is the opposite.`],
              why: `A turtle hides inside its shell. Paragraph 3 says Yuki kept her head down and her hood up, so she was trying to hide. She did not say one word. So Yuki felt shy, she was hiding, and she stayed quiet.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 2 ════════ */
    {
      teach: {
        story: {
          title: `Mona Leads the Line`,
          paragraphs: [
            `In Room 7, Mr. Reed picks a new line leader every Monday. Mona had wanted the job all year. This week, he picked her at last.`,
            `Mona was walking on air all morning. She smiled at her desk and hummed while she did her math. At ten o'clock, she stood at the very front of the line by the door.`,
            `The class had to walk to the music room without a sound. But two boys in the back began to run and push. Mona turned around in the hall and told the boys to hold their horses. She waited for them to walk slowly again.`,
            `Then Mona led the class down the long hall. The class followed Mona like ducklings behind their mother. Nobody left the line, and nobody talked. At the door, Mr. Reed gave Mona a thumbs-up.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Words that mean more',
            lines: [
              `Some phrases mean more than their words say. A phrase is a small group of words.`,
              `An idiom is a saying. Its words do not mean what they say.`,
              `Here is an idiom. My sister has a big test, so she hits the books.`,
              `She does not hit a book with her hand! Hits the books means she studies hard.`,
              `A simile compares two things. It uses the word like or the word as.`,
              `Here is a simile. The baby was as quiet as a mouse.`,
              `Ask, what is a mouse like? A mouse makes almost no sound. The baby is like that too. So the baby was very quiet.`,
              `A test may ask, what does the phrase suggest? Suggest means to show without saying it.`,
              `To find out, ask one thing. Does the phrase really mean its words?`,
              `If it does not, use the clues around it. The clues tell what it means.`,
              `Watch out for the word-for-word answer. It is a trap.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the meaning',
            lines: [
              `Let's find what an idiom means. Here is a sentence from the passage.`,
              `Mona was walking on air all morning.`,
              `Step 1. Find the phrase. Walking on air.`,
              `Step 2. Ask, does it really mean the words? Can Mona walk on air? No. Her feet are on the floor.`,
              `So the word-for-word meaning is a trap. The phrase means something else.`,
              `Step 3. Use the clues around it. Paragraph 1 says Mona wanted the job all year. Now she has it.`,
              `Paragraph 2 says she smiled at her desk. She hummed while she did her math.`,
              `Step 4. Pick what the phrase suggests. Walking on air means Mona feels very happy.`
            ],
            lit: [
              `Mona was walking on air all morning.`,
              `Mona had wanted the job all year.`,
              `She smiled at her desk and hummed while she did her math.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `Read this sentence from the passage. “Mona turned around in the hall and told the boys to hold their horses.” Which phrase in this sentence is an idiom?`,
            choices: [`hold their horses`, `turned around`, `in the hall`, `told the boys`],
            kinds: [null, 'literal', 'literal', 'literal'],
            notes: [null,
              `Mona really did turn around. Those words mean just what they say.`,
              `In the hall tells where Mona was. Those words mean just what they say.`,
              `Mona really did tell the boys something. Those words mean just what they say.`],
            why: `There are no horses at school! So hold their horses does not mean what the words say. That makes it an idiom.` },
          { kind: 'step', id: 'S2', type: 'mc',
            quote: `Mona turned around in the hall and told the boys to hold their horses.`, phrase: `hold their horses`,
            q: `Read this sentence from the passage. “Mona turned around in the hall and told the boys to hold their horses.” What does the phrase “hold their horses” suggest about the boys?`,
            choices: [`The boys needed to slow down and wait.`, `The boys were riding horses in the hall.`, `The boys needed to walk faster.`, `The boys needed to sing louder.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `There are no horses in the hall. That takes the words word for word.`,
              `Paragraph 3 says the boys were running. They did not need to go faster.`,
              `The passage gives no clue about singing.`],
            why: `Paragraph 3 says the boys began to run and push. Mona waited for them to walk slowly again. So hold their horses means the boys needed to slow down and wait.` },
          { kind: 'step', id: 'S3', type: 'ms', pick: 2,
            quote: `The class followed Mona like ducklings behind their mother.`, phrase: `like ducklings behind their mother`,
            q: `Read this sentence from the passage. “The class followed Mona like ducklings behind their mother.” What does the phrase “like ducklings behind their mother” suggest about the class? Choose TWO answers.`,
            choices: [`The class stayed close behind Mona.`, `The class walked in one neat line.`, `The class went to see baby ducks.`, `The class ran all over the hall.`, `The class was going to a pond.`],
            kinds: [null, null, 'literal', 'opposite', 'opposite'],
            notes: [null, null,
              `There are no ducks at school. That takes the words word for word.`,
              `Paragraph 4 says nobody left the line. That is the opposite.`,
              `Paragraph 3 says the class was going to the music room, not a pond.`],
            why: `Baby ducks walk close behind their mother, in a line. Paragraph 4 says nobody left the line. So the class stayed close behind Mona, and they walked in one neat line.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for words that mean more.`,
              `Step 1. Find the phrase in the sentence.`,
              `Step 2. Ask, does it really mean the words?`,
              `Step 3. Use the clues around it. Read the sentences before it and after it.`,
              `For a simile, ask, what is that thing like? The person is like that too.`,
              `Step 4. Pick what the phrase suggests.`,
              `Watch out for the word-for-word answer. It is a trap.`,
              `Some questions say Choose TWO. Then two answers are right. Choose THREE means three answers are right.`,
              `It is all or nothing. Check every answer you pick.`,
              `Now you try.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `The Frog Behind the Curtain`,
          paragraphs: [
            `Every Saturday, the city library has a puppet show for little kids. Ms. Vida works the bear puppet. This week, she asked Zeb to work the frog puppet. The show would start at ten.`,
            `But Zeb's bus was late. When he got off, his big sister, Gia, told him to shake a leg. Zeb ran up the library steps two at a time.`,
            `Zeb slid behind the curtain just as the lights went down. His heart pounded like a drum. He had never been in a show before, and his hands felt wet.`,
            `Then Zeb made the frog sing a silly song about flies. The little kids laughed and clapped along. Zeb's frog puppet stole the show. After the show, three kids lined up to hug the frog.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Figurative language',
            quote: `When he got off, his big sister, Gia, told him to shake a leg.`, phrase: `shake a leg`,
            q: `Read this sentence from the passage. “When he got off, his big sister, Gia, told him to shake a leg.” What does the phrase “shake a leg” suggest about Zeb?`,
            choices: [`Zeb needed to hurry.`, `Zeb needed to shake his leg.`, `Zeb had lots of time.`, `Zeb's leg was sore.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Gia did not want Zeb to wiggle his leg. That takes the words word for word.`,
              `Paragraph 2 says Zeb's bus was late. He did not have lots of time.`,
              `The passage gives no clue that Zeb's leg was sore. He ran up the steps.`],
            why: `Paragraph 1 says the show would start at ten. Paragraph 2 says Zeb's bus was late. Then Zeb ran up the steps two at a time. So shake a leg means Zeb needed to hurry.` },
          { id: 'P2', type: 'ms', skill: 'Figurative language', pick: 2,
            quote: `Zeb's frog puppet stole the show.`, phrase: `stole the show`,
            q: `Read this sentence from the passage. “Zeb's frog puppet stole the show.” What does the phrase “stole the show” suggest about Zeb? Choose TWO answers.`,
            choices: [`Zeb did a great job with the frog.`, `The kids liked Zeb's frog the most.`, `Zeb took the puppet show home with him.`, `The kids did not like Zeb's frog.`, `The kids liked Ms. Vida's bear best.`],
            kinds: [null, null, 'literal', 'opposite', 'wrongwho'],
            notes: [null, null,
              `Zeb did not take anything home from the library. That takes the words word for word.`,
              `Paragraph 4 says the kids laughed and lined up to hug the frog. That is the opposite.`,
              `Paragraph 4 is about the frog. The kids lined up to hug the frog, not the bear.`],
            why: `Paragraph 4 says the kids laughed and clapped at the frog's song. Three kids lined up to hug the frog. So Zeb did a great job. The kids liked his frog the most.` },
          { id: 'P3', type: 'mc', skill: 'Figurative language',
            quote: `His heart pounded like a drum.`, phrase: `pounded like a drum`,
            q: `Read this sentence from the passage. “His heart pounded like a drum.” What does the phrase “pounded like a drum” suggest about Zeb?`,
            choices: [`Zeb felt very nervous.`, `Zeb had a drum in his chest.`, `Zeb felt calm and sleepy.`, `Zeb wanted to play the drums.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Zeb has a heart, not a drum. That takes the words word for word.`,
              `Paragraph 3 says Zeb's hands felt wet. He was not calm.`,
              `The passage gives no clue that Zeb wanted to play the drums.`],
            why: `A drum makes loud, hard beats. Paragraph 3 says Zeb had never been in a show before. His hands felt wet. So pounded like a drum shows that Zeb felt very nervous.` }
        ]
      },
      turn: [
        {
          story: {
            title: `The Juggler Upstairs`,
            paragraphs: [
              `Mr. Sol lived upstairs from Esme, and he could juggle almost anything. One rainy afternoon, he showed Esme three soft little balls filled with rice.`,
              `First, Mr. Sol tossed all three balls up into the air, one after the other. He did not drop a single one. For Mr. Sol, juggling was a piece of cake. He even juggled while he hopped on one foot.`,
              `Then it was Esme's turn. The balls bumped her nose and tumbled onto the rug. She tried again and again. After a while, Esme's arms felt as heavy as bags of sand. She sat down on the rug with a big sigh.`,
              `Mr. Sol sat down beside her. He told Esme to hang in there. He said that he dropped the balls a hundred times when he was a kid. Then he showed her how to begin with just one ball.`,
              `Esme practiced with one ball, then two, then three. By the end of November, she could keep all three balls going. Esme's face lit up like a string of holiday lights. She called her mother over to watch, and she did it again.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Figurative language',
              quote: `For Mr. Sol, juggling was a piece of cake.`, phrase: `a piece of cake`,
              q: `Read this sentence from the passage. “For Mr. Sol, juggling was a piece of cake.” What does the phrase “a piece of cake” suggest about Mr. Sol?`,
              choices: [`Juggling was very easy for Mr. Sol.`, `Mr. Sol juggled three pieces of cake.`, `Juggling was very hard for Mr. Sol.`, `Juggling was easy for Esme.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Paragraph 1 says the balls were filled with rice. There was no cake. That takes the words word for word.`,
                `Paragraph 2 says Mr. Sol did not drop a single ball. Juggling was not hard for him.`,
                `Paragraph 3 says the balls bumped Esme's nose. And the question asks about Mr. Sol.`],
              why: `Paragraph 2 says Mr. Sol did not drop a single ball. He even juggled while he hopped on one foot. So a piece of cake means juggling was very easy for him.` },
            { id: 'Q02', type: 'ms', skill: 'Figurative language', pick: 2,
              quote: `He told Esme to hang in there.`, phrase: `hang in there`,
              q: `Read this sentence from the passage. “He told Esme to hang in there.” What does the phrase “hang in there” suggest about Mr. Sol? Choose TWO answers.`,
              choices: [`Mr. Sol wants Esme to keep trying.`, `Mr. Sol thinks Esme can learn to juggle.`, `Mr. Sol wants Esme to hang from a tree.`, `Mr. Sol wants Esme to give up.`, `Mr. Sol is tired of juggling.`],
              kinds: [null, null, 'literal', 'opposite', 'noclue'],
              notes: [null, null,
                `Nobody hangs from anything in the apartment. That takes the words word for word.`,
                `Paragraph 4 says Mr. Sol showed Esme how to begin with one ball. He does not want her to give up.`,
                `The passage gives no clue that Mr. Sol is tired of juggling.`],
              why: `Paragraph 4 says Mr. Sol dropped the balls a hundred times as a kid. Then he showed Esme how to begin with one ball. So he wants Esme to keep trying. He thinks she can learn.` },
            { id: 'Q03', type: 'mc', skill: 'Figurative language',
              quote: `After a while, Esme's arms felt as heavy as bags of sand.`, phrase: `as heavy as bags of sand`,
              q: `Read this sentence from the passage. “After a while, Esme's arms felt as heavy as bags of sand.” What does the phrase “as heavy as bags of sand” suggest about Esme?`,
              choices: [`Esme's arms were very tired.`, `Esme was carrying bags of sand.`, `Esme's arms felt light and strong.`, `Mr. Sol's arms were very tired.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Esme was holding three soft balls, not bags of sand. That takes the words word for word.`,
                `Paragraph 3 says Esme sat down with a big sigh. Her arms did not feel strong.`,
                `The question asks about Esme's arms, not Mr. Sol's arms.`],
              why: `Bags of sand are hard to lift. Paragraph 3 says Esme tried again and again. Then she sat down on the rug with a big sigh. So her arms were very tired.` },
            { id: 'Q04', type: 'ms', skill: 'Figurative language', pick: 3,
              quote: `Esme's face lit up like a string of holiday lights.`, phrase: `like a string of holiday lights`,
              q: `Read this sentence from the passage. “Esme's face lit up like a string of holiday lights.” What does the phrase “like a string of holiday lights” suggest about Esme? Choose THREE answers.`,
              choices: [`Esme was very happy.`, `Esme had a big, bright smile.`, `Esme was very excited.`, `Esme put lights on her face.`, `Esme felt bored and wanted to go home.`, `Esme wanted to hang up lights at home.`],
              kinds: [null, null, null, 'literal', 'opposite', 'noclue'],
              notes: [null, null, null,
                `There were no real lights on Esme's face. That takes the words word for word.`,
                `Paragraph 5 says Esme called her mother over to watch, and she juggled the balls again. She was not bored.`,
                `The passage gives no clue about lights at home.`],
              why: `Holiday lights shine bright and cheerful. Paragraph 5 says Esme could keep all three balls going at last. Her face lit up, so she had a big, bright smile. She was very happy, and she was very excited.` }
          ]
        },
        {
          story: {
            title: `Family Bingo Night`,
            paragraphs: [
              `Once a year, Elm Grove School has Family Bingo Night in the lunchroom. Tomo went with his grandpa, Grandpa Moe. The top prize was a shiny red scooter. It sat on a table by the stage.`,
              `Tomo had his heart set on that scooter. He had wanted one since the summer. He picked a seat where he could see it the whole night.`,
              `Grandpa Moe was as sharp as a tack. He spotted every number on both of their cards before Tomo did. He never missed one, not even once.`,
              `In the last game, Tomo needed just one more number, B 9. He was on pins and needles. He held his marker up high and did not even blink. His foot tapped under the table.`,
              `Then the caller read out B 9. Tomo shot out of his seat like a rocket. He waved his card high in the air. Tomo won the scooter, and Grandpa Moe gave him a big hug.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Figurative language',
              quote: `Tomo had his heart set on that scooter.`, phrase: `had his heart set on`,
              q: `Read this sentence from the passage. “Tomo had his heart set on that scooter.” What does the phrase “had his heart set on” suggest about Tomo?`,
              choices: [`Tomo wanted the scooter very much.`, `Tomo set his heart on the scooter seat.`, `Tomo did not care about the scooter.`, `Grandpa Moe wanted the red scooter.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Nobody can set a heart on a seat. That takes the words word for word.`,
                `Paragraph 2 says Tomo had wanted a scooter since the summer. That is the opposite.`,
                `The question asks about Tomo, not Grandpa Moe.`],
              why: `Paragraph 2 says Tomo had wanted a scooter since the summer. He picked a seat where he could see it all night. So Tomo wanted the scooter very much.` },
            { id: 'Q06', type: 'ms', skill: 'Figurative language', pick: 2,
              quote: `He was on pins and needles.`, phrase: `on pins and needles`,
              q: `Read this sentence from the passage. “He was on pins and needles.” What does the phrase “on pins and needles” suggest about Tomo? Choose TWO answers.`,
              choices: [`Tomo was nervous as he waited.`, `Tomo could hardly wait for B 9.`, `Tomo sat on a pile of sharp pins.`, `Tomo felt calm and bored.`, `Grandpa Moe was nervous too.`],
              kinds: [null, null, 'literal', 'opposite', 'wrongwho'],
              notes: [null, null,
                `Tomo sat on a seat in the lunchroom, not on pins. That takes the words word for word.`,
                `Paragraph 4 says Tomo's foot tapped and he did not blink. He was not calm.`,
                `The question asks about Tomo, not Grandpa Moe.`],
              why: `Paragraph 4 says Tomo needed one more number to win, B 9. He held his marker up and did not blink. His foot tapped under the table. So Tomo was nervous, and he could hardly wait for B 9.` },
            { id: 'Q07', type: 'mc', skill: 'Figurative language',
              quote: `Grandpa Moe was as sharp as a tack.`, phrase: `as sharp as a tack`,
              q: `Read this sentence from the passage. “Grandpa Moe was as sharp as a tack.” What does the phrase “as sharp as a tack” suggest about Grandpa Moe?`,
              choices: [`Grandpa Moe was quick to spot the numbers.`, `Grandpa Moe had a sharp tack in his hand.`, `Grandpa Moe kept missing the numbers.`, `Tomo found all the numbers first.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Grandpa Moe held a bingo card, not a tack. That takes the words word for word.`,
                `Paragraph 3 says Grandpa Moe never missed one. That is the opposite.`,
                `Paragraph 3 says Grandpa Moe spotted the numbers before Tomo did. And the question asks about Grandpa Moe.`],
              why: `A sharp tack has a fine point. A sharp person notices things fast. Paragraph 3 says Grandpa Moe spotted every number before Tomo did. So he was quick to spot the numbers.` },
            { id: 'Q08', type: 'ms', skill: 'Figurative language', pick: 3,
              quote: `Tomo shot out of his seat like a rocket.`, phrase: `like a rocket`,
              q: `Read this sentence from the passage. “Tomo shot out of his seat like a rocket.” What does the phrase “like a rocket” suggest about Tomo? Choose THREE answers.`,
              choices: [`Tomo got up very fast.`, `Tomo was very excited.`, `Tomo jumped up all at once.`, `Tomo flew up into the sky.`, `Tomo had a toy rocket on his seat.`, `Tomo stood up slowly and calmly.`],
              kinds: [null, null, null, 'literal', 'literal', 'opposite'],
              notes: [null, null, null,
                `Tomo stayed in the lunchroom. He did not fly into the sky. That takes the words word for word.`,
                `The passage does not tell about a toy rocket. That takes the word rocket word for word.`,
                `Paragraph 5 says Tomo shot out of his seat. That is the opposite of slow.`],
              why: `A rocket blasts off fast, all at once. Paragraph 5 says the caller read out B 9. Then Tomo shot out of his seat like a rocket. So he got up very fast, all at once. He waved his card high, so he was very excited.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 3 ════════ */
    {
      teach: {
        story: {
          title: `Seven Skips on the Lake`,
          paragraphs: [
            `On a sunny Sunday, Danny and his big sister Joan walked down to the lake. Joan was going to teach Danny how to skip stones across the water. They filled their pockets with flat, smooth stones from the shore.`,
            `Joan said she once skipped a stone all the way across the lake. Then she winked and laughed. The lake was much too wide for that. Danny knew that Joan was pulling his leg.`,
            `Danny threw his first stone as hard as he could, but it went plop and sank. His next three stones sank to the bottom too. Danny kicked the sand and frowned. He was as grumpy as a wet cat.`,
            `On the shore, Joan grinned and said she had a trick up her sleeve. She bent down low and tossed a flat stone with a quick flick of her wrist. The stone skipped seven times before it finally sank.`,
            `Danny bent down low and tried the same trick, and this time his stone skipped three times!`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Words that mean more',
            lines: [
              `Some phrases mean more than their words say. A phrase is a small group of words.`,
              `An idiom is a saying. Its words do not mean what they say.`,
              `Here is an idiom. My sister has a big test, so she hits the books.`,
              `She does not hit a book with her hand! Hits the books means she studies hard.`,
              `A simile compares two things. It uses the word like or the word as.`,
              `Here is a simile. The baby was as quiet as a mouse.`,
              `Ask, what is a mouse like? A mouse makes almost no sound. The baby is like that too. So the baby was very quiet.`,
              `A test may ask, what does the phrase suggest? Suggest means to show without saying it.`,
              `To find out, ask one thing. Does the phrase really mean its words?`,
              `If it does not, use the clues around it. The clues tell what it means.`,
              `Watch out for the word-for-word answer. It is a trap.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the meaning',
            lines: [
              `Let's find what an idiom means. Here is a sentence from the passage.`,
              `Danny knew that Joan was pulling his leg.`,
              `Step 1. Find the phrase. Pulling his leg.`,
              `Step 2. Ask, does it really mean the words? Is Joan pulling on Danny's leg? No. She is just talking.`,
              `So the word-for-word meaning is a trap. The phrase means something else.`,
              `Step 3. Use the clues around it. Paragraph 2 says Joan winked and laughed.`,
              `The lake was much too wide to skip a stone across. So her story could not be true.`,
              `Step 4. Pick what the phrase suggests. Pulling his leg means Joan was joking.`
            ],
            lit: [
              `Danny knew that Joan was pulling his leg.`,
              `Then she winked and laughed.`,
              `The lake was much too wide for that.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `Read this sentence from the passage. “On the shore, Joan grinned and said she had a trick up her sleeve.” Which phrase in this sentence is an idiom?`,
            choices: [`a trick up her sleeve`, `On the shore`, `Joan grinned`, `and said`],
            kinds: [null, 'literal', 'literal', 'literal'],
            notes: [null,
              `On the shore tells where Joan was. Those words mean just what they say.`,
              `Joan really did grin. Those words mean just what they say.`,
              `Joan really did say something. Those words mean just what they say.`],
            why: `Joan did not hide a trick in her shirt! So a trick up her sleeve does not mean what the words say. That makes it an idiom.` },
          { kind: 'step', id: 'S2', type: 'mc',
            quote: `On the shore, Joan grinned and said she had a trick up her sleeve.`, phrase: `a trick up her sleeve`,
            q: `Read this sentence from the passage. “On the shore, Joan grinned and said she had a trick up her sleeve.” What does the phrase “a trick up her sleeve” suggest about Joan?`,
            choices: [`Joan knew a special way to throw.`, `Joan hid a stone in her shirt sleeve.`, `Joan did not know how to skip stones.`, `Joan wanted to go home for lunch.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Paragraph 4 does not say Joan hid a stone. That takes the words word for word.`,
              `Paragraph 4 says Joan made a stone skip seven times. That is the opposite.`,
              `The passage gives no clue about lunch.`],
            why: `Paragraph 4 says Joan bent down low. She threw the stone with a flick of her wrist, and it skipped seven times. So a trick up her sleeve means Joan knew a special way to throw.` },
          { kind: 'step', id: 'S3', type: 'ms', pick: 2,
            quote: `He was as grumpy as a wet cat.`, phrase: `as grumpy as a wet cat`,
            q: `Read this sentence from the passage. “He was as grumpy as a wet cat.” What does the phrase “as grumpy as a wet cat” suggest about Danny? Choose TWO answers.`,
            choices: [`Danny was upset that his stones sank.`, `Danny was in a very bad mood.`, `Danny was a wet cat from the lake.`, `Danny felt calm and cheerful.`, `Danny was cold and wanted a coat.`],
            kinds: [null, null, 'literal', 'opposite', 'noclue'],
            notes: [null, null,
              `Danny is a boy, not a cat. He did not fall in the lake. That takes the words word for word.`,
              `Paragraph 3 says Danny kicked the sand and frowned. He was not calm.`,
              `The passage gives no clue that Danny was cold.`],
            why: `A wet cat is cross and grumpy. Cats do not like to get wet. Paragraph 3 says Danny's stones sank. He kicked the sand and frowned. So Danny was upset, and he was in a very bad mood.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for words that mean more.`,
              `Step 1. Find the phrase in the sentence.`,
              `Step 2. Ask, does it really mean the words?`,
              `Step 3. Use the clues around it. Read the sentences before it and after it.`,
              `For a simile, ask, what is that thing like? The person is like that too.`,
              `A wet cat is cross and grumpy. Danny was like that too.`,
              `Step 4. Pick what the phrase suggests.`,
              `Watch out for the word-for-word answer. It is a trap.`,
              `Some questions say Choose TWO. Then two answers are right. Choose THREE means three answers are right.`,
              `It is all or nothing. Check every answer you pick.`,
              `Now you try.`
            ],
            lit: [
              `He was as grumpy as a wet cat.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `A Treehouse Before the Rain`,
          paragraphs: [
            `Roz and her dad were building a treehouse in the big maple tree out back. Dad measured and cut the boards, and Roz held them steady.`,
            `The last board was long and heavy. Dad asked Roz to lend a hand with the board. Roz held one end, and Dad held the other, and together they lifted it up the ladder.`,
            `When the sun went down, the roof was still not finished. Dad said it was time to call it a day. They put the tools away and went inside for dinner.`,
            `On Sunday, they finished the roof just as rain began to fall. Roz sat inside the treehouse with a thick blanket. The rain tapped on the roof, but not one drop got in. She was as snug as a bug in a rug.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Figurative language',
            quote: `Dad asked Roz to lend a hand with the board.`, phrase: `lend a hand`,
            q: `Read this sentence from the passage. “Dad asked Roz to lend a hand with the board.” What does the phrase “lend a hand” suggest about Dad?`,
            choices: [`Dad needed Roz to help him lift the board.`, `Dad wanted Roz to give him her hand to keep.`, `Dad wanted to lift the board by himself.`, `Dad wanted Roz to paint the board.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Roz cannot give away her hand! That takes the words word for word.`,
              `Paragraph 2 says Roz and Dad lifted the board together. That is the opposite.`,
              `The passage gives no clue about paint.`],
            why: `Paragraph 2 says the board was long and heavy. Roz held one end, and Dad held the other. So lend a hand means Dad needed Roz to help him lift the board.` },
          { id: 'P2', type: 'ms', skill: 'Figurative language', pick: 2,
            quote: `Dad said it was time to call it a day.`, phrase: `call it a day`,
            q: `Read this sentence from the passage. “Dad said it was time to call it a day.” What does the phrase “call it a day” suggest about Dad and Roz? Choose TWO answers.`,
            choices: [`Dad and Roz stopped working for the night.`, `Dad and Roz would finish the roof later.`, `Dad gave the day a brand-new name.`, `Dad and Roz kept working until morning.`, `Dad and Roz went to the store for nails.`],
            kinds: [null, null, 'literal', 'opposite', 'noclue'],
            notes: [null, null,
              `A day does not get a new name. That takes the words word for word.`,
              `Paragraph 3 says they put the tools away and went inside. That is the opposite.`,
              `The passage gives no clue about a store.`],
            why: `Paragraph 3 says the roof was still not finished. They put the tools away and went in for dinner. Paragraph 4 says they finished the roof on Sunday. So they stopped for the night, and they finished later.` },
          { id: 'P3', type: 'mc', skill: 'Figurative language',
            quote: `She was as snug as a bug in a rug.`, phrase: `as snug as a bug in a rug`,
            q: `Read this sentence from the passage. “She was as snug as a bug in a rug.” What does the phrase “as snug as a bug in a rug” suggest about Roz?`,
            choices: [`Roz felt warm and cozy.`, `Roz was a little bug inside a rug.`, `Roz felt cold and wet in the rain.`, `Roz was hungry for a snack.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Roz is a girl, not a bug. That takes the words word for word.`,
              `Paragraph 4 says not one drop of rain got in. Roz was not cold and wet.`,
              `The passage gives no clue that Roz was hungry.`],
            why: `A bug rolled up in a rug is warm and safe. Paragraph 4 says Roz had a thick blanket. The rain tapped on the roof, but not one drop got in. So Roz felt warm and cozy.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Two Dollars for a Blue Teapot`,
            paragraphs: [
              `On Sunday, Vin and Grandma went to the flea market by the river. At a flea market, people sell old things on long tables. Some tables had lamps and dishes. Other tables had toys, books, and boots.`,
              `Grandma's old teapot had cracked, so she needed a new one. At the first table, Vin found a shiny silver teapot. The tag on it said ninety dollars. Grandma gasped and set it down fast. She said that teapot cost an arm and a leg.`,
              `At the last table, a man was selling a box of old dishes. Under the dishes sat a round blue teapot with small white flowers. Its paint was faded, and its handle was worn smooth. The man said the teapot was as old as the hills.`,
              `Grandma said she had a teapot just like it when she was a girl. The man asked for only two dollars. So Grandma got the blue teapot for a song.`,
              `On the way to the car, Vin hugged the teapot like a teddy bear. He kept both arms around it and would not put it down.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Figurative language',
              quote: `She said that teapot cost an arm and a leg.`, phrase: `cost an arm and a leg`,
              q: `Read this sentence from the passage. “She said that teapot cost an arm and a leg.” What does the phrase “cost an arm and a leg” suggest about the silver teapot?`,
              choices: [`The silver teapot cost too much money.`, `Grandma had to pay with her arm and leg.`, `The silver teapot was very cheap.`, `The silver teapot was too small for Grandma.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `No one pays with an arm or a leg! That takes the words word for word.`,
                `Paragraph 2 says the tag said ninety dollars, and Grandma set it down fast. That is the opposite.`,
                `The passage gives no clue that the silver teapot was too small.`],
              why: `Paragraph 2 says the tag said ninety dollars. Grandma gasped and set the teapot down fast. So cost an arm and a leg means the silver teapot cost too much money.` },
            { id: 'Q02', type: 'ms', skill: 'Figurative language', pick: 2,
              quote: `So Grandma got the blue teapot for a song.`, phrase: `for a song`,
              q: `Read this sentence from the passage. “So Grandma got the blue teapot for a song.” What does the phrase “for a song” suggest about Grandma? Choose TWO answers.`,
              choices: [`Grandma paid very little for the teapot.`, `Grandma got a good deal on the teapot.`, `Grandma sang a song to pay the man.`, `Grandma paid lots of money for the teapot.`, `Grandma heard a song at the flea market.`],
              kinds: [null, null, 'literal', 'opposite', 'literal'],
              notes: [null, null,
                `Paragraph 4 says the man asked for two dollars. Grandma did not sing to pay him. That takes the words word for word.`,
                `Paragraph 4 says the man asked for only two dollars. That is the opposite.`,
                `The passage does not tell about music. That takes the word song word for word.`],
              why: `Paragraph 4 says the man asked for only two dollars. Paragraph 2 says the silver teapot was ninety dollars. So for a song means Grandma paid very little. She got a good deal.` },
            { id: 'Q03', type: 'mc', skill: 'Figurative language',
              quote: `The man said the teapot was as old as the hills.`, phrase: `as old as the hills`,
              q: `Read this sentence from the passage. “The man said the teapot was as old as the hills.” What does the phrase “as old as the hills” suggest about the blue teapot?`,
              choices: [`The blue teapot was very old.`, `The blue teapot was found up in the hills.`, `The blue teapot was brand new.`, `The man at the table was very old.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Paragraph 3 says the teapot sat under some old dishes, not in the hills. That takes the words word for word.`,
                `Paragraph 3 says the paint was faded and the handle was worn smooth. It was not new.`,
                `The question asks about the teapot, not the man.`],
              why: `Hills have been here for a very long time. Paragraph 3 says the paint was faded, and the handle was worn smooth. Paragraph 4 says Grandma had one like it when she was a girl. So the blue teapot was very old.` },
            { id: 'Q04', type: 'ms', skill: 'Figurative language', pick: 3,
              quote: `On the way to the car, Vin hugged the teapot like a teddy bear.`, phrase: `like a teddy bear`,
              q: `Read this sentence from the passage. “On the way to the car, Vin hugged the teapot like a teddy bear.” What does the phrase “like a teddy bear” suggest about Vin? Choose THREE answers.`,
              choices: [`Vin held the teapot close to him.`, `Vin did not want to let go of the teapot.`, `Vin liked the teapot very much.`, `Vin hugged a real teddy bear.`, `Vin found a teddy bear at the flea market.`, `Vin did not care about the teapot.`],
              kinds: [null, null, null, 'literal', 'literal', 'opposite'],
              notes: [null, null, null,
                `Paragraph 5 says Vin hugged the teapot, not a teddy bear. That takes the words word for word.`,
                `The passage never says Vin found a teddy bear. That takes the words teddy bear word for word.`,
                `Paragraph 5 says Vin kept both arms around the teapot. He cared about it.`],
              why: `A child hugs a teddy bear close and loves it. Paragraph 5 says Vin kept both arms around the teapot and would not put it down. So Vin held it close, he did not want to let go, and he liked it very much.` }
          ]
        },
        {
          story: {
            title: `Rings on a Little Pillow`,
            paragraphs: [
              `Aunt Della and Leon were getting married in Grandma's backyard. Rows of white chairs sat on the grass. Ty was the ring bearer, so his job was to carry the two gold rings on a little pillow.`,
              `Ty's cousin Poppy was the flower girl. She was supposed to drop rose petals one at a time. Instead, Poppy dumped the whole basket in one big pile, and a few people giggled. Poppy's cheeks turned as red as a tomato. She hid behind her mom.`,
              `Next, it was Ty's turn. Grandma had told him to wait for the slow song. Ty was all ears. When the first notes began, he stepped onto the grass path.`,
              `Ty walked down the path like a cat on a fence. He put one foot right in front of the other. He held the pillow out with both hands, and the rings did not slide off. At the front, he gave the rings to Leon.`,
              `Then Aunt Della and Leon tied the knot by Grandma's rose bushes. They made their promises and put on the gold rings, and everyone stood up and clapped.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Figurative language',
              quote: `Then Aunt Della and Leon tied the knot by Grandma's rose bushes.`, phrase: `tied the knot`,
              q: `Read this sentence from the passage. “Then Aunt Della and Leon tied the knot by Grandma's rose bushes.” What does the phrase “tied the knot” suggest about Aunt Della and Leon?`,
              choices: [`Aunt Della and Leon got married.`, `Aunt Della and Leon tied a rope to the bushes.`, `Aunt Della and Leon chose not to get married.`, `Aunt Della and Leon planted new rose bushes.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Paragraph 5 does not tell about a rope. That takes the words word for word.`,
                `Paragraph 5 says they made their promises and put on the rings. That is the opposite.`,
                `The passage gives no clue that they planted bushes.`],
              why: `Paragraph 1 says Aunt Della and Leon were getting married. Paragraph 5 says they made their promises and put on the rings. So tied the knot means they got married.` },
            { id: 'Q06', type: 'ms', skill: 'Figurative language', pick: 2,
              quote: `Ty was all ears.`, phrase: `all ears`,
              q: `Read this sentence from the passage. “Ty was all ears.” What does the phrase “all ears” suggest about Ty? Choose TWO answers.`,
              choices: [`Ty listened very carefully.`, `Ty was waiting to hear the slow song.`, `Ty was covered in big ears.`, `Ty was not paying attention.`, `Ty wanted to sing the slow song.`],
              kinds: [null, null, 'literal', 'opposite', 'noclue'],
              notes: [null, null,
                `Ty has two ears, like everyone. That takes the words word for word.`,
                `Paragraph 3 says Ty stepped onto the path when the first notes began. He was paying attention.`,
                `The passage gives no clue that Ty wanted to sing.`],
              why: `Paragraph 3 says Grandma told Ty to wait for the slow song. When the first notes began, he stepped onto the path. So Ty listened very carefully. He was waiting to hear the slow song.` },
            { id: 'Q07', type: 'mc', skill: 'Figurative language',
              quote: `Poppy's cheeks turned as red as a tomato.`, phrase: `as red as a tomato`,
              q: `Read this sentence from the passage. “Poppy's cheeks turned as red as a tomato.” What does the phrase “as red as a tomato” suggest about Poppy?`,
              choices: [`Poppy felt silly and embarrassed.`, `Poppy's face turned into a tomato.`, `Poppy felt proud of her pile.`, `Poppy felt sick from the sun.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Poppy is a girl. Her face did not turn into a tomato. That takes the words word for word.`,
                `Paragraph 2 says Poppy hid behind her mom. She was not proud.`,
                `The passage gives no clue that Poppy was sick.`],
              why: `A tomato is bright red. A face can turn red when a person feels embarrassed. Paragraph 2 says Poppy dumped all the petals in one pile. People giggled, and she hid behind her mom. So Poppy felt silly and embarrassed.` },
            { id: 'Q08', type: 'ms', skill: 'Figurative language', pick: 3,
              quote: `Ty walked down the path like a cat on a fence.`, phrase: `like a cat on a fence`,
              q: `Read this sentence from the passage. “Ty walked down the path like a cat on a fence.” What does the phrase “like a cat on a fence” suggest about Ty? Choose THREE answers.`,
              choices: [`Ty was very careful as he walked.`, `Ty took slow steps down the path.`, `Ty kept his balance the whole way.`, `Ty walked on top of a fence.`, `Ty brought his pet cat to the wedding.`, `Ty ran down the path very fast.`],
              kinds: [null, null, null, 'literal', 'literal', 'opposite'],
              notes: [null, null, null,
                `Paragraph 4 says Ty walked down the path, not on top of a fence. That takes the words word for word.`,
                `The passage does not tell about a pet cat. That takes the word cat word for word.`,
                `Paragraph 4 says Ty walked down the path. He did not run.`],
              why: `A cat on a fence walks on a very thin top. It takes slow steps, it is very careful, and it keeps its balance. Paragraph 4 says Ty put one foot right in front of the other. The rings did not slide off the pillow. So Ty was careful, he took slow steps, and he kept his balance.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 4 ════════ */
    {
      teach: {
        story: {
          title: `Pecans All Over the Grass`,
          paragraphs: [
            `A strong wind blew all night at Grandpa's house. In the morning, Jax looked out at the yard. Brown nuts called pecans covered the grass under the big pecan tree. Jax's eyes got as big as plates.`,
            `Grandpa has a sweet tooth. He keeps a jar of candy by his chair. He puts three spoons of sugar in his tea. Best of all, he loves to bake pecan pie.`,
            `Grandpa gave Jax a bucket. Jax grabbed the bucket and made a beeline for the biggest pile of pecans. He did not stop to look at anything else. He filled the bucket to the top in ten minutes.`,
            `That night, Grandpa baked a pecan pie. Jax ate one slice, and Grandpa ate three.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Words that mean more',
            lines: [
              `Some phrases mean more than their words say. A phrase is a small group of words.`,
              `An idiom is a saying. Its words do not mean what they say.`,
              `Here is an idiom. My sister has a big test, so she hits the books.`,
              `She does not hit a book with her hand! Hits the books means she studies hard.`,
              `A simile compares two things. It uses the word like or the word as.`,
              `Here is a simile. The baby was as quiet as a mouse.`,
              `Ask, what is a mouse like? A mouse makes almost no sound. The baby is like that too. So the baby was very quiet.`,
              `A test may ask, what does the phrase suggest? Suggest means to show without saying it.`,
              `To find out, ask one thing. Does the phrase really mean its words?`,
              `If it does not, use the clues around it. The clues tell what it means.`,
              `Watch out for the word-for-word answer. It is a trap.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the meaning',
            lines: [
              `Let's find what an idiom means. Here is a sentence from the passage.`,
              `Grandpa has a sweet tooth.`,
              `Step 1. Find the phrase. A sweet tooth.`,
              `Step 2. Ask, does it really mean the words? Does one of Grandpa's teeth taste like candy? No.`,
              `So the word-for-word meaning is a trap. The phrase means something else.`,
              `Step 3. Use the clues around it. Paragraph 2 says Grandpa keeps a jar of candy by his chair.`,
              `He puts three spoons of sugar in his tea. In paragraph 4, he eats three slices of pie.`,
              `Step 4. Pick what the phrase suggests. A sweet tooth means Grandpa loves sweet food.`
            ],
            lit: [
              `Grandpa has a sweet tooth.`,
              `He keeps a jar of candy by his chair.`,
              `He puts three spoons of sugar in his tea.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `Read this sentence from the passage. “Jax grabbed the bucket and made a beeline for the biggest pile of pecans.” Which phrase in this sentence is an idiom?`,
            choices: [`made a beeline for`, `grabbed the bucket`, `the biggest pile`, `of pecans`],
            kinds: [null, 'literal', 'literal', 'literal'],
            notes: [null,
              `Jax really did grab the bucket. Those words mean just what they say.`,
              `The biggest pile is a real pile of nuts. Those words mean just what they say.`,
              `Pecans are real nuts. Those words mean just what they say.`],
            why: `Jax did not make a line of bees! So made a beeline for does not mean what the words say. That makes it an idiom.` },
          { kind: 'step', id: 'S2', type: 'mc',
            quote: `Jax grabbed the bucket and made a beeline for the biggest pile of pecans.`, phrase: `made a beeline for`,
            q: `Read this sentence from the passage. “Jax grabbed the bucket and made a beeline for the biggest pile of pecans.” What does the phrase “made a beeline for” suggest about Jax?`,
            choices: [`Jax went straight to the pile.`, `Jax made a long line of bees.`, `Jax walked slowly all around the yard.`, `Jax wanted to climb the pecan tree.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `There are no real bees in the passage. That takes the words word for word.`,
              `Paragraph 3 says Jax did not stop to look at anything else. That is the opposite.`,
              `The passage gives no clue that Jax wanted to climb the tree.`],
            why: `A bee flies in a straight line to a flower. Paragraph 3 says Jax did not stop to look at anything else. So made a beeline for means Jax went straight to the pile.` },
          { kind: 'step', id: 'S3', type: 'ms', pick: 2,
            quote: `Jax's eyes got as big as plates.`, phrase: `as big as plates`,
            q: `Read this sentence from the passage. “Jax's eyes got as big as plates.” What does the phrase “as big as plates” suggest about Jax? Choose TWO answers.`,
            choices: [`Jax was very surprised by all the pecans.`, `Jax opened his eyes very wide.`, `Jax's eyes turned into dinner plates.`, `Jax felt bored and looked away.`, `Jax was hungry for breakfast.`],
            kinds: [null, null, 'literal', 'opposite', 'noclue'],
            notes: [null, null,
              `Eyes cannot turn into plates! That takes the words word for word.`,
              `Paragraph 1 says Jax looked out at all the pecans. He did not look away.`,
              `The passage gives no clue that Jax was hungry.`],
            why: `Plates are big and round. When people are surprised, their eyes open wide and round. Paragraph 1 says pecans covered the grass. So Jax was very surprised, and he opened his eyes very wide.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for words that mean more.`,
              `Step 1. Find the phrase in the sentence.`,
              `Step 2. Ask, does it really mean the words?`,
              `Step 3. Use the clues around it. Read the sentences before it and after it.`,
              `For a simile, ask, what is that thing like? The person is like that too.`,
              `Plates are big and round. Jax's eyes got big and round too.`,
              `Step 4. Pick what the phrase suggests.`,
              `Watch out for the word-for-word answer. It is a trap.`,
              `Some questions say Choose TWO. Then two answers are right. Choose THREE means three answers are right.`,
              `It is all or nothing. Check every answer you pick.`,
              `Now you try.`
            ],
            lit: [
              `Jax's eyes got as big as plates.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Fireflies in a Jar`,
          paragraphs: [
            `In July, Sage stayed with her cousin Kay and Aunt Gert. Kay was a night owl. At home, she read in bed until eleven o'clock.`,
            `After dinner, the girls ran out to the field with an empty jar. Soon, tiny lights began to glow in the tall grass. The fireflies blinked like tiny flashlights.`,
            `Sage and Kay caught six fireflies in the jar. They watched the jar glow on the porch steps. Then they opened the lid and let the fireflies go.`,
            `At ten o'clock, Aunt Gert said it was time to hit the hay. Sage yawned and went right to bed. But Kay read her book under the covers.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Figurative language',
            quote: `Kay was a night owl.`, phrase: `a night owl`,
            q: `Read this sentence from the passage. “Kay was a night owl.” What does the phrase “a night owl” suggest about Kay?`,
            choices: [`Kay liked to stay up late.`, `Kay was a bird with big eyes.`, `Kay went to bed very early.`, `Kay was scared of the dark.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Kay is a girl, not a bird. That takes the words word for word.`,
              `Paragraph 1 says Kay read until eleven o'clock. That is the opposite.`,
              `The passage gives no clue that Kay was scared of the dark.`],
            why: `An owl is awake at night. Paragraph 1 says Kay read in bed until eleven. Paragraph 4 says she read under the covers after bedtime. So a night owl means Kay liked to stay up late.` },
          { id: 'P2', type: 'ms', skill: 'Figurative language', pick: 2,
            quote: `At ten o'clock, Aunt Gert said it was time to hit the hay.`, phrase: `hit the hay`,
            q: `Read this sentence from the passage. “At ten o'clock, Aunt Gert said it was time to hit the hay.” What does the phrase “hit the hay” suggest about the girls? Choose TWO answers.`,
            choices: [`It was time for the girls to go to bed.`, `Aunt Gert wanted the girls to go to sleep.`, `The girls had to hit a big pile of hay.`, `The girls could stay up all night long.`, `The girls had to feed hay to the horses.`],
            kinds: [null, null, 'literal', 'opposite', 'literal'],
            notes: [null, null,
              `Nobody hits hay at bedtime! That takes the words word for word.`,
              `Paragraph 4 says Sage went right to bed. Aunt Gert did not say the girls could stay up.`,
              `The passage does not tell about horses. That takes the word hay word for word.`],
            why: `Paragraph 4 says it was ten o'clock. Sage yawned and went right to bed. So hit the hay means it was time for the girls to go to bed. Aunt Gert wanted them to go to sleep.` },
          { id: 'P3', type: 'mc', skill: 'Figurative language',
            quote: `The fireflies blinked like tiny flashlights.`, phrase: `like tiny flashlights`,
            q: `Read this sentence from the passage. “The fireflies blinked like tiny flashlights.” What does the phrase “like tiny flashlights” suggest about the fireflies?`,
            choices: [`The fireflies made little lights.`, `The fireflies carried little flashlights.`, `The fireflies made no light at all.`, `The fireflies made a loud buzzing sound.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Fireflies are bugs. They do not carry flashlights. That takes the words word for word.`,
              `Paragraph 2 says tiny lights began to glow in the grass. That is the opposite.`,
              `The passage gives no clue about a buzzing sound.`],
            why: `A flashlight makes a small, bright light. Paragraph 2 says tiny lights began to glow in the grass. Paragraph 3 says the jar glowed. So the fireflies made little lights.` }
        ]
      },
      turn: [
        {
          story: {
            title: `The Sprinkler Behind the Building`,
            paragraphs: [
              `It was the hottest day of the summer. Rafe's apartment felt like an oven. The fan only blew hot air around, and Rafe's shirt stuck to his back.`,
              `Mom had an idea. She hooked an old sprinkler to the hose in the little yard behind their building. Rafe ran through the cold water again and again. Then he sprayed Mom with the hose by mistake. Mom was a good sport. She laughed, kicked off her sandals, and ran through the sprinkler too.`,
              `Grandpa sat in the shade on a folding chair. Rafe begged him to come play in the water. But Grandpa was as stubborn as a mule. He crossed his arms and shook his head. He said no three times.`,
              `Later, Mom brought out a bowl of cold watermelon. Rafe was hot and thirsty, so he ate three big slices. The cold, sweet melon hit the spot. Even Grandpa ate two slices in his shady chair.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Figurative language',
              quote: `The cold, sweet melon hit the spot.`, phrase: `hit the spot`,
              q: `Read this sentence from the passage. “The cold, sweet melon hit the spot.” What does the phrase “hit the spot” suggest about Rafe?`,
              choices: [`The melon was just what Rafe needed.`, `Rafe hit a spot on the wall with the melon.`, `Rafe did not like the cold melon.`, `Rafe wanted hot soup instead.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Nobody threw the melon or hit anything. That takes the words word for word.`,
                `Paragraph 4 says Rafe ate three big slices. That is the opposite.`,
                `The passage gives no clue about soup.`],
              why: `Paragraph 1 says it was the hottest day of summer. Paragraph 4 says Rafe was hot and thirsty, and he ate three big slices. So hit the spot means the cold melon was just what Rafe needed.` },
            { id: 'Q02', type: 'ms', skill: 'Figurative language', pick: 2,
              quote: `Mom was a good sport.`, phrase: `a good sport`,
              q: `Read this sentence from the passage. “Mom was a good sport.” What does the phrase “a good sport” suggest about Mom? Choose TWO answers.`,
              choices: [`Mom did not get mad when she got wet.`, `Mom played along with Rafe's game.`, `Mom was great at playing baseball.`, `Mom got angry and went back inside.`, `Grandpa played along with Rafe's game.`],
              kinds: [null, null, 'literal', 'opposite', 'wrongwho'],
              notes: [null, null,
                `The passage does not tell about baseball. That takes the word sport word for word.`,
                `Paragraph 2 says Mom laughed and ran through the sprinkler too. That is the opposite.`,
                `The question asks about Mom, not Grandpa. Paragraph 2 is about Mom.`],
              why: `Paragraph 2 says Rafe sprayed Mom by mistake. Mom laughed, kicked off her sandals, and ran through the sprinkler too. So Mom did not get mad. She played along with Rafe.` },
            { id: 'Q03', type: 'mc', skill: 'Figurative language',
              quote: `Rafe's apartment felt like an oven.`, phrase: `like an oven`,
              q: `Read this sentence from the passage. “Rafe's apartment felt like an oven.” What does the phrase “like an oven” suggest about the apartment?`,
              choices: [`The apartment was very hot inside.`, `Rafe lived inside a giant kitchen oven.`, `The apartment felt cool and nice.`, `The apartment was very small and dark.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Rafe lives in an apartment, not an oven. That takes the words word for word.`,
                `Paragraph 1 says the fan blew hot air, and Rafe's shirt stuck to his back. That is the opposite.`,
                `The passage gives no clue about the size of the apartment.`],
              why: `An oven gets very hot inside. Paragraph 1 says it was the hottest day of summer. The fan only blew hot air around. So the apartment was very hot inside.` },
            { id: 'Q04', type: 'ms', skill: 'Figurative language', pick: 3,
              quote: `But Grandpa was as stubborn as a mule.`, phrase: `as stubborn as a mule`,
              q: `Read this sentence from the passage. “But Grandpa was as stubborn as a mule.” What does the phrase “as stubborn as a mule” suggest about Grandpa? Choose THREE answers.`,
              choices: [`Grandpa would not change his mind.`, `Grandpa stayed in his shady chair.`, `Grandpa kept saying no to Rafe.`, `Grandpa was a real mule with long ears.`, `Grandpa rode a mule to the yard.`, `Grandpa did not stay in his chair.`],
              kinds: [null, null, null, 'literal', 'literal', 'opposite'],
              notes: [null, null, null,
                `Grandpa is a man, not a mule. That takes the words word for word.`,
                `There is no real mule in the passage. That takes the word mule word for word.`,
                `Paragraph 4 says Grandpa ate his melon in his shady chair. He did not get up.`],
              why: `A stubborn mule will not move, even when you pull. It will not do what you ask. Paragraph 3 says Grandpa crossed his arms and shook his head. He said no three times. So Grandpa would not change his mind, he stayed in his chair, and he kept saying no.` }
          ]
        },
        {
          story: {
            title: `Rocks on the Paper Plates`,
            paragraphs: [
              `Every summer, Stu's whole family has a reunion in Uncle Mack's backyard. Aunts, uncles, and cousins come from three towns. This year, Uncle Mack cooked burgers on a big grill.`,
              `Uncle Mack had a laugh as loud as thunder. When Aunt Lyn told a joke, he laughed and laughed. The people next door looked over the fence to see what was going on.`,
              `Before lunch, a strong wind blew across the yard. It blew the paper plates off the table and onto the grass. Stu used his head. He set a small rock on top of each stack of plates. After that, not one plate blew away.`,
              `At last, Uncle Mack set the burgers on the table. The cousins went to the table like seagulls at the beach. In a few seconds, the first plate of burgers was gone.`,
              `Stu piled two burgers, some corn, and a big heap of chips on his plate. But Stu's eyes were bigger than his stomach. He ate one burger and could not eat any more. Uncle Mack wrapped up the rest for Stu to take home.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Figurative language',
              quote: `But Stu's eyes were bigger than his stomach.`, phrase: `eyes were bigger than his stomach`,
              q: `Read this sentence from the passage. “But Stu's eyes were bigger than his stomach.” What does the phrase “eyes were bigger than his stomach” suggest about Stu?`,
              choices: [`Stu took more food than he could eat.`, `Stu's eyes grew bigger than his belly.`, `Stu ate everything on his plate.`, `Stu wanted a hot dog instead.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Eyes cannot grow bigger than a belly! That takes the words word for word.`,
                `Paragraph 5 says Stu ate one burger and could not eat any more. That is the opposite.`,
                `The passage gives no clue about hot dogs.`],
              why: `Paragraph 5 says Stu piled two burgers, some corn, and chips on his plate. He ate one burger and could not eat any more. So Stu took more food than he could eat.` },
            { id: 'Q06', type: 'ms', skill: 'Figurative language', pick: 2,
              quote: `Stu used his head.`, phrase: `used his head`,
              q: `Read this sentence from the passage. “Stu used his head.” What does the phrase “used his head” suggest about Stu? Choose TWO answers.`,
              choices: [`Stu thought of a smart idea.`, `Stu found a way to keep the plates down.`, `Stu held the plates down with his head.`, `Stu did not know what to do about the plates.`, `Stu asked Uncle Mack for new plates.`],
              kinds: [null, null, 'literal', 'opposite', 'noclue'],
              notes: [null, null,
                `Paragraph 3 says Stu set a rock on each stack. He did not hold the plates with his head. That takes the words word for word.`,
                `Paragraph 3 says Stu put a rock on top of each stack of plates. He knew what to do.`,
                `The passage gives no clue that Stu asked for new plates.`],
              why: `Paragraph 3 says the wind blew the plates off the table. Stu set a small rock on top of each stack. After that, not one plate blew away. So Stu thought of a smart idea, and he found a way to keep the plates down.` },
            { id: 'Q07', type: 'mc', skill: 'Figurative language',
              quote: `Uncle Mack had a laugh as loud as thunder.`, phrase: `as loud as thunder`,
              q: `Read this sentence from the passage. “Uncle Mack had a laugh as loud as thunder.” What does the phrase “as loud as thunder” suggest about Uncle Mack?`,
              choices: [`Uncle Mack laughed very loudly.`, `Uncle Mack made real thunder.`, `Uncle Mack laughed very softly.`, `Uncle Mack's big grill was very loud.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Uncle Mack is a man, not a storm. That takes the words word for word.`,
                `Paragraph 2 says the people next door looked over the fence. His laugh was not soft.`,
                `The passage gives no clue about a loud grill. The phrase is about Uncle Mack's laugh.`],
              why: `Thunder is one of the loudest sounds there is. Paragraph 2 says the people next door looked over the fence to see what was going on. So Uncle Mack laughed very loudly.` },
            { id: 'Q08', type: 'ms', skill: 'Figurative language', pick: 3,
              quote: `The cousins went to the table like seagulls at the beach.`, phrase: `like seagulls at the beach`,
              q: `Read this sentence from the passage. “The cousins went to the table like seagulls at the beach.” What does the phrase “like seagulls at the beach” suggest about the cousins? Choose THREE answers.`,
              choices: [`The cousins moved in very fast.`, `The cousins crowded close together.`, `The cousins grabbed at the food.`, `The cousins turned into seagulls.`, `The family had lunch at the beach.`, `The cousins walked slowly to the table.`],
              kinds: [null, null, null, 'literal', 'literal', 'opposite'],
              notes: [null, null, null,
                `The cousins are children, not birds. That takes the words word for word.`,
                `Paragraph 1 says the reunion was in Uncle Mack's backyard. That takes the word beach word for word.`,
                `Paragraph 4 says the burgers were gone in a few seconds. That is the opposite of slow.`],
              why: `Seagulls at the beach rush in fast when they see food. They crowd close together and grab at it. Paragraph 4 says the first plate of burgers was gone in a few seconds. So the cousins moved in fast, they crowded together, and they grabbed at the food.` }
          ]
        }
      ]
    }
  ]
};
