/* ═══════════════════════════════════════════════════════
   THE LAB · data/rp5.js — Reading for Meaning, ONE PARAGRAPH, lesson RP5: Words That Mean More: One Paragraph
   The short practice right before RC5. Idioms and similes (skill 'Figurative language'). An idiom is a saying
   whose words do not mean what they say; a simile compares two things with like or as. The trap is the
   WORD-FOR-WORD choice (kind literal). Every story is ONE paragraph.
   Every scored item carries quote (the EXACT sentence of the paragraph) + phrase (the idiom or simile inside it),
   and the stem: Read this sentence from the paragraph. “<quote>” What does the phrase “<phrase>” suggest about <who>?
   The right choice comes FIRST; the site shuffles. Every wrong choice has a kind AND its own note.
   A new teaching paragraph in every version (same screens: W1, W2, S1 mc, S2 mc, W3).
     W2 works one idiom of the teaching paragraph; S1 finds a SECOND idiom in it; S2 asks what its simile means.
   pre:  P1 mc idiom · P2 mc simile (one paragraph with one idiom + one simile)
   turn: A–D = four one-paragraph stories, each with one idiom + one simile: [mc idiom, mc simile] = Q01–Q08.
   No idiom or simile is used twice in this lesson, and none is used in RC5 (data/rc5.js).
   Premise lane: the outdoors, weather and animals (each premise grepped against the premise index and every Lab lesson).
   Shape: tools/CONTENT-SPEC-READING.md (ONE PARAGRAPH, RP5). Check: node tools/check-reading.js RP5
═══════════════════════════════════════════════════════ */
window.LAB_RC = window.LAB_RC || {};
window.LAB_RC.RP5 = {
  versions: [
    /* ════════ VERSION 1 ════════ */
    {
      teach: {
        story: {
          title: `Snails on the Front Walk`,
          paragraphs: [
            `It rained hard all night on Birch Street. Nell was an early bird. She was up before the sun, and before anyone else in her family. From the window, she noticed lots of snails on the front walk. Soon Dad would walk out to the car in his heavy work boots. Nell hurried outside and picked up the snails one by one. Her fingers were as light as a feather on each little shell. She set every snail down on the soft, wet grass. That morning, Nell saved the snails in the nick of time.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Words that mean more',
            lines: [
              `Some phrases mean more than their words say. A phrase is a small group of words.`,
              `An idiom is a saying. Its words do not mean what they say.`,
              `Here is an idiom. Look outside! It is raining cats and dogs.`,
              `Cats and dogs do not fall from the sky! Raining cats and dogs means it is raining very hard.`,
              `A simile compares two things. It uses the word like or the word as.`,
              `Here is a simile. My hands were as cold as ice.`,
              `Ask, what is ice like? Ice is very cold. My hands were like that too. So my hands were very cold.`,
              `A question may ask, what does the phrase suggest? Suggest means to show without saying it.`,
              `To find out, ask one thing. Does the phrase really mean its words?`,
              `If it does not, use the clues around it. The clues tell what it means.`,
              `Watch out for the word-for-word answer. It is a trap.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the meaning',
            lines: [
              `Let's find what an idiom means. Here is a sentence from the paragraph.`,
              `Nell was an early bird.`,
              `Step 1. Find the phrase. An early bird.`,
              `Step 2. Ask, does it really mean the words? Is Nell a bird with wings? No. Nell is a girl.`,
              `So the word-for-word meaning is a trap. The phrase means something else.`,
              `Step 3. Use the clues around it. The paragraph says Nell was up before the sun.`,
              `She was up before anyone else in her family.`,
              `Step 4. Pick what the phrase suggests. An early bird means Nell gets up very early.`
            ],
            lit: [
              `Nell was an early bird.`,
              `She was up before the sun, and before anyone else in her family.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `Read this sentence from the paragraph. “That morning, Nell saved the snails in the nick of time.” Which phrase in this sentence is an idiom?`,
            choices: [`in the nick of time`, `That morning`, `Nell saved`, `the snails`],
            kinds: [null, 'literal', 'literal', 'literal'],
            notes: [null,
              `That morning tells when. Those words mean just what they say.`,
              `Nell really did save the snails. Those words mean just what they say.`,
              `The snails are real snails. Those words mean just what they say.`],
            why: `The nick of time is not a time on a clock! So the words do not mean what they say. That makes it an idiom. It means just before it was too late, before Dad came out in his boots.` },
          { kind: 'step', id: 'S2', type: 'mc',
            quote: `Her fingers were as light as a feather on each little shell.`, phrase: `as light as a feather`,
            q: `Read this sentence from the paragraph. “Her fingers were as light as a feather on each little shell.” What does the phrase “as light as a feather” suggest about Nell?`,
            choices: [`Nell touched the snails very gently.`, `Nell had feathers on her fingers.`, `Nell pressed hard on each shell.`, `Dad touched the snails very gently.`],
            kinds: [null, 'literal', 'opposite', 'wrongwho'],
            notes: [null,
              `Nell is a girl, not a bird. She has no feathers. That takes the words word for word.`,
              `Nell wanted to keep the snails safe. She did not press hard.`,
              `The question asks about Nell, not Dad. Dad was still inside.`],
            why: `A feather is very light. It hardly presses on anything. The paragraph says Nell picked up the snails one by one. She set them down on the soft grass. So Nell touched the snails very gently.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for words that mean more.`,
              `Step 1. Find the phrase in the sentence.`,
              `Step 2. Ask, does it really mean the words?`,
              `Step 3. Use the clues around it. Read the sentences before it and after it.`,
              `For a simile, ask, what is that thing like? The thing in the sentence is like that too.`,
              `A feather is very light. Nell's fingers were light and soft too.`,
              `Step 4. Pick what the phrase suggests.`,
              `Watch out for the word-for-word answer. It is a trap.`,
              `In Your turn, each paragraph has one idiom and one simile. You will get a question about each one.`,
              `Now you try.`
            ],
            lit: [
              `Her fingers were as light as a feather on each little shell.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Mrs. Hale's Two Llamas`,
          paragraphs: [
            `Pearl's neighbor, Mrs. Hale, keeps two llamas in a pen behind her house. One day, Mrs. Hale asked Pearl to pet the brown llama, Coco. Pearl reached out her hand. Then Coco blinked her big eyes, and Pearl chickened out. She pulled her hand back and hid behind Mrs. Hale. Mrs. Hale said that Coco was kind and calm. So Pearl tried again, very slowly. Coco's wool was as soft as a cloud. Pearl sank her fingers into it and smiled.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Figurative language',
            quote: `Then Coco blinked her big eyes, and Pearl chickened out.`, phrase: `chickened out`,
            q: `Read this sentence from the paragraph. “Then Coco blinked her big eyes, and Pearl chickened out.” What does the phrase “chickened out” suggest about Pearl?`,
            choices: [`Pearl got too scared to pet Coco.`, `Pearl turned into a little chicken.`, `Pearl petted Coco right away.`, `Coco got too scared to stand still.`],
            kinds: [null, 'literal', 'opposite', 'wrongwho'],
            notes: [null,
              `Pearl is a girl, not a chicken. That takes the words word for word.`,
              `The paragraph says Pearl pulled her hand back. She did not pet Coco right away.`,
              `The question asks about Pearl, not Coco. Mrs. Hale said Coco was calm.`],
            why: `The paragraph says Pearl pulled her hand back. She hid behind Mrs. Hale. So chickened out means Pearl got too scared to pet Coco.` },
          { id: 'P2', type: 'mc', skill: 'Figurative language',
            quote: `Coco's wool was as soft as a cloud.`, phrase: `as soft as a cloud`,
            q: `Read this sentence from the paragraph. “Coco's wool was as soft as a cloud.” What does the phrase “as soft as a cloud” suggest about Coco's wool?`,
            choices: [`Coco's wool felt very soft.`, `Coco's wool was made of clouds.`, `Coco's wool felt rough and scratchy.`, `Coco's wool was wet from the rain.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Wool grows on the llama. It does not come from the sky. That takes the words word for word.`,
              `The paragraph says Pearl sank her fingers into the wool and smiled. The wool was not rough.`,
              `The paragraph gives no clue about rain.`],
            why: `A cloud looks fluffy and soft. The paragraph says Pearl sank her fingers into Coco's wool and smiled. So the wool felt very soft.` }
        ]
      },
      turn: [
        {
          story: {
            title: `The Skunk by the Back Steps`,
            paragraphs: [
              `One warm evening, Hal and Mom opened the back door to go for a walk. A striped skunk was sitting right beside the steps! Hal and Mom stood as still as stone. They did not take one step or make a single sound. A frightened skunk can spray, and the terrible smell lasts for days. At last, the skunk waddled away under the fence. Mom looked carefully all around the yard. She said the coast was clear. Then Hal and Mom went happily on their walk.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Figurative language',
              quote: `She said the coast was clear.`, phrase: `the coast was clear`,
              q: `Read this sentence from the paragraph. “She said the coast was clear.” What does the phrase “the coast was clear” suggest about the yard?`,
              choices: [`The skunk was gone from the yard.`, `The yard was right by the sea.`, `The skunk was still by the steps.`, `The yard was full of mud and puddles.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `A coast is the land by the sea. The paragraph is about a yard and a skunk, not the sea. That takes the words word for word.`,
                `The paragraph says the skunk waddled away under the fence. It was not still by the steps.`,
                `The paragraph gives no clue about mud or puddles.`],
              why: `The paragraph says the skunk waddled away under the fence. Then Mom looked all around the yard. So the coast was clear means the skunk was gone, and it was safe to go out.` },
            { id: 'Q02', type: 'mc', skill: 'Figurative language',
              quote: `Hal and Mom stood as still as stone.`, phrase: `as still as stone`,
              q: `Read this sentence from the paragraph. “Hal and Mom stood as still as stone.” What does the phrase “as still as stone” suggest about Hal and Mom?`,
              choices: [`Hal and Mom did not move at all.`, `Hal and Mom turned into stone.`, `Hal and Mom ran fast into the yard.`, `The skunk did not move at all.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Hal and Mom are people, not rocks. That takes the words word for word.`,
                `The paragraph says Hal and Mom did not take one step. They did not run.`,
                `The question asks about Hal and Mom, not the skunk.`],
              why: `A stone cannot move. The paragraph says Hal and Mom did not take one step or make a sound. They did not want the skunk to spray. So Hal and Mom did not move at all.` }
          ]
        },
        {
          story: {
            title: `Moose Feels Better`,
            paragraphs: [
              `Lyle's old dog, Moose, was under the weather. He did not eat his breakfast or his dinner. He did not even bark at the mail truck. He just lay on his blanket with his nose on his paws. Lyle and Mom took Moose to see the vet. The vet gave Moose some pills to take with his food. Two days later, Moose ran around the yard like a race car. He chased his ball and barked at every bird.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Figurative language',
              quote: `Lyle's old dog, Moose, was under the weather.`, phrase: `under the weather`,
              q: `Read this sentence from the paragraph. “Lyle's old dog, Moose, was under the weather.” What does the phrase “under the weather” suggest about Moose?`,
              choices: [`Moose was sick and felt weak.`, `Moose was out in the rain.`, `Moose felt strong and ready to play.`, `Lyle was sick in bed.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `The paragraph says Moose lay on his blanket, not out in the rain. That takes the words word for word.`,
                `The paragraph says Moose did not eat or bark. He was not ready to play.`,
                `The question asks about Moose, not Lyle.`],
              why: `The paragraph says Moose did not eat his breakfast or his dinner. He did not bark, and he went to the vet. So under the weather means Moose was sick.` },
            { id: 'Q04', type: 'mc', skill: 'Figurative language',
              quote: `Two days later, Moose ran around the yard like a race car.`, phrase: `like a race car`,
              q: `Read this sentence from the paragraph. “Two days later, Moose ran around the yard like a race car.” What does the phrase “like a race car” suggest about Moose?`,
              choices: [`Moose ran fast and felt well again.`, `Moose turned into a race car.`, `Moose was still too sick to get up.`, `Moose wanted to go back to the vet.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Moose is a dog, not a car. That takes the words word for word.`,
                `The paragraph says Moose chased his ball and barked. He was not too sick to get up.`,
                `The paragraph gives no clue that Moose wanted to go back to the vet.`],
              why: `A race car zooms around a track very fast. The paragraph says Moose ran around the yard. He chased his ball and barked at every bird. So Moose ran fast and felt well again.` }
          ]
        },
        {
          story: {
            title: `A Bucket of Blueberries`,
            paragraphs: [
              `Rue and Grandma went to pick blueberries at a berry patch. At the next bush, a girl named Kit was picking too. Rue and Kit hit it off right away. They picked side by side and told jokes all morning. Rue ate the berries like a hungry bear. She popped handful after handful into her mouth. By noon, her bucket was still almost empty! Before they left, Kit asked Rue to come back next week.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Figurative language',
              quote: `Rue and Kit hit it off right away.`, phrase: `hit it off`,
              q: `Read this sentence from the paragraph. “Rue and Kit hit it off right away.” What does the phrase “hit it off” suggest about Rue and Kit?`,
              choices: [`Rue and Kit became friends fast.`, `Rue and Kit hit the berries off a bush.`, `Rue and Kit did not like each other.`, `Rue and Grandma had a big fight.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Nobody hit anything in the paragraph. That takes the words word for word.`,
                `The paragraph says the girls told jokes all morning. Kit asked Rue to come back. They liked each other.`,
                `The paragraph gives no clue about a fight.`],
              why: `The paragraph says Rue and Kit picked side by side. They told jokes all morning, and Kit asked Rue to come back next week. So hit it off means they became friends fast.` },
            { id: 'Q06', type: 'mc', skill: 'Figurative language',
              quote: `Rue ate the berries like a hungry bear.`, phrase: `like a hungry bear`,
              q: `Read this sentence from the paragraph. “Rue ate the berries like a hungry bear.” What does the phrase “like a hungry bear” suggest about Rue?`,
              choices: [`Rue ate lots of berries very fast.`, `Rue was a big, furry bear.`, `Rue ate just one or two berries.`, `Kit ate lots of berries very fast.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Rue is a girl, not a bear. That takes the words word for word.`,
                `The paragraph says Rue popped handful after handful into her mouth. She ate lots.`,
                `The question asks about Rue, not Kit.`],
              why: `A hungry bear gobbles up lots of berries. The paragraph says Rue popped handful after handful into her mouth. Her bucket was still almost empty. So Rue ate lots of berries very fast.` }
          ]
        },
        {
          story: {
            title: `Sheets on the Line`,
            paragraphs: [
              `Effie and Mom hung wet sheets on the clothesline in the backyard. Soon the wind began to blow harder and harder. The sheets flapped like giant flags. Then dark clouds rolled in, and Effie felt a raindrop on her nose. Mom told Effie to step on it. Effie ran to the line and pulled the sheets down fast. They carried the last sheet inside just as the rain poured down. Mom and Effie laughed and shook the water out of their hair.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Figurative language',
              quote: `Mom told Effie to step on it.`, phrase: `step on it`,
              q: `Read this sentence from the paragraph. “Mom told Effie to step on it.” What does the phrase “step on it” suggest about Effie?`,
              choices: [`Effie had to go very fast.`, `Effie had to step on a sheet.`, `Effie had lots of time.`, `Effie had to find her boots.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Mom did not want Effie to stand on a sheet. That takes the words word for word.`,
                `The paragraph says dark clouds rolled in. Effie did not have lots of time.`,
                `The paragraph gives no clue about boots.`],
              why: `The paragraph says dark clouds rolled in, and Effie felt a raindrop. Then she ran to the line. So step on it means Effie had to go very fast.` },
            { id: 'Q08', type: 'mc', skill: 'Figurative language',
              quote: `The sheets flapped like giant flags.`, phrase: `like giant flags`,
              q: `Read this sentence from the paragraph. “The sheets flapped like giant flags.” What does the phrase “like giant flags” suggest about the sheets?`,
              choices: [`The wind blew the sheets hard.`, `The sheets were real flags on poles.`, `The sheets hung still and did not move.`, `The sheets were brand new.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `The sheets were bed sheets on a clothesline, not flags. That takes the words word for word.`,
                `The paragraph says the wind began to blow harder and harder. The sheets did not hang still.`,
                `The paragraph gives no clue that the sheets were new.`],
              why: `A flag flaps and snaps in a strong wind. The paragraph says the wind began to blow harder and harder. So the wind blew the sheets hard.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 2 ════════ */
    {
      teach: {
        story: {
          title: `Pepper the Pony`,
          paragraphs: [
            `Lark waited in line for her very first pony ride. She had butterflies in her stomach. Her hands shook, and she held Dad's arm tight. Two boys in line began to push and yell. The pony man told the boys not to horse around near the ponies. Then it was Lark's turn to ride Pepper. Pepper was as gentle as a lamb. She stood still while Lark climbed on, and she walked slow and steady.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Words that mean more',
            lines: [
              `Some phrases mean more than their words say. A phrase is a small group of words.`,
              `An idiom is a saying. Its words do not mean what they say.`,
              `Here is an idiom. Look outside! It is raining cats and dogs.`,
              `Cats and dogs do not fall from the sky! Raining cats and dogs means it is raining very hard.`,
              `A simile compares two things. It uses the word like or the word as.`,
              `Here is a simile. My hands were as cold as ice.`,
              `Ask, what is ice like? Ice is very cold. My hands were like that too. So my hands were very cold.`,
              `A question may ask, what does the phrase suggest? Suggest means to show without saying it.`,
              `To find out, ask one thing. Does the phrase really mean its words?`,
              `If it does not, use the clues around it. The clues tell what it means.`,
              `Watch out for the word-for-word answer. It is a trap.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the meaning',
            lines: [
              `Let's find what an idiom means. Here is a sentence from the paragraph.`,
              `She had butterflies in her stomach.`,
              `Step 1. Find the phrase. Butterflies in her stomach.`,
              `Step 2. Ask, does it really mean the words? Did Lark eat a butterfly? No!`,
              `So the word-for-word meaning is a trap. The phrase means something else.`,
              `Step 3. Use the clues around it. It was Lark's very first pony ride.`,
              `Her hands shook, and she held Dad's arm tight.`,
              `Step 4. Pick what the phrase suggests. Butterflies in her stomach means Lark felt nervous.`
            ],
            lit: [
              `She had butterflies in her stomach.`,
              `Her hands shook, and she held Dad's arm tight.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `Read this sentence from the paragraph. “The pony man told the boys not to horse around near the ponies.” Which phrase in this sentence is an idiom?`,
            choices: [`horse around`, `The pony man`, `the boys`, `near the ponies`],
            kinds: [null, 'literal', 'literal', 'literal'],
            notes: [null,
              `The pony man is a real man. Those words mean just what they say.`,
              `The boys are real boys in the line. Those words mean just what they say.`,
              `Near the ponies tells where. Those words mean just what they say.`],
            why: `The boys are not horses! So horse around does not mean what the words say. That makes it an idiom. It means to play in a wild way.` },
          { kind: 'step', id: 'S2', type: 'mc',
            quote: `Pepper was as gentle as a lamb.`, phrase: `as gentle as a lamb`,
            q: `Read this sentence from the paragraph. “Pepper was as gentle as a lamb.” What does the phrase “as gentle as a lamb” suggest about Pepper?`,
            choices: [`Pepper was calm and kind.`, `Pepper was a little white lamb.`, `Pepper kicked and ran around.`, `The two boys were calm and kind.`],
            kinds: [null, 'literal', 'opposite', 'wrongwho'],
            notes: [null,
              `Pepper is a pony, not a lamb. That takes the words word for word.`,
              `The paragraph says Pepper stood still while Lark climbed on. She did not kick.`,
              `The question asks about Pepper, not the boys. The boys pushed and yelled.`],
            why: `A lamb is soft and calm. The paragraph says Pepper stood still while Lark climbed on. She walked slow and steady. So Pepper was calm and kind.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for words that mean more.`,
              `Step 1. Find the phrase in the sentence.`,
              `Step 2. Ask, does it really mean the words?`,
              `Step 3. Use the clues around it. Read the sentences before it and after it.`,
              `For a simile, ask, what is that thing like? The thing in the sentence is like that too.`,
              `A lamb is soft and calm. Pepper was calm too.`,
              `Step 4. Pick what the phrase suggests.`,
              `Watch out for the word-for-word answer. It is a trap.`,
              `In Your turn, each paragraph has one idiom and one simile. You will get a question about each one.`,
              `Now you try.`
            ],
            lit: [
              `Pepper was as gentle as a lamb.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `A Peacock in Rose Park`,
          paragraphs: [
            `Bree and Grandma took a walk in Rose Park on a sunny afternoon. A big blue bird strutted right up the path. It was a peacock! Bree could not believe her eyes. She had only seen a peacock in a book. The peacock opened its tail like a giant paper fan. The tail was very wide, with shiny green and blue spots. Bree and Grandma stood and watched for a long time.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Figurative language',
            quote: `Bree could not believe her eyes.`, phrase: `could not believe her eyes`,
            q: `Read this sentence from the paragraph. “Bree could not believe her eyes.” What does the phrase “could not believe her eyes” suggest about Bree?`,
            choices: [`Bree was surprised to see a peacock.`, `Bree's eyes were not working at all.`, `Bree had seen lots of peacocks before.`, `Bree was scared of the big bird.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Bree's eyes worked fine. She watched for a long time. That takes the words word for word.`,
              `The paragraph says Bree had only seen a peacock in a book. That is the opposite.`,
              `The paragraph gives no clue that Bree was scared.`],
            why: `The paragraph says a big blue bird strutted right up the path. Bree had only seen a peacock in a book. So could not believe her eyes means Bree was surprised to see a peacock.` },
          { id: 'P2', type: 'mc', skill: 'Figurative language',
            quote: `The peacock opened its tail like a giant paper fan.`, phrase: `like a giant paper fan`,
            q: `Read this sentence from the paragraph. “The peacock opened its tail like a giant paper fan.” What does the phrase “like a giant paper fan” suggest about the tail?`,
            choices: [`The tail spread out very wide.`, `The peacock held a big paper fan.`, `The tail stayed small and closed.`, `The tail made a cool wind for Bree.`],
            kinds: [null, 'literal', 'opposite', 'literal'],
            notes: [null,
              `The peacock is a bird. It did not hold a paper fan. That takes the words word for word.`,
              `The paragraph says the tail was wide. It did not stay closed.`,
              `A real fan makes wind. The phrase is about the shape of the tail. That takes the word fan word for word.`],
            why: `A big paper fan opens up wide, like half of a circle. The paragraph says the tail was wide, with green and blue spots. So the tail spread out very wide.` }
        ]
      },
      turn: [
        {
          story: {
            title: `The Raccoon and the Banana Peel`,
            paragraphs: [
              `Ned heard a loud crash in the backyard one night. He and Dad grabbed a flashlight and hurried outside. The garbage can was tipped over on its side. Trash was spread on the grass like confetti. A raccoon sat in the middle, holding a banana peel in its paws. Dad pointed the light right at its furry face. The raccoon was caught red-handed! The raccoon dropped the peel and scrambled up a tree.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Figurative language',
              quote: `The raccoon was caught red-handed!`, phrase: `caught red-handed`,
              q: `Read this sentence from the paragraph. “The raccoon was caught red-handed!” What does the phrase “caught red-handed” suggest about the raccoon?`,
              choices: [`The raccoon was caught right in the middle of making the mess.`, `The raccoon had red paint all over its paws.`, `The raccoon got away before Ned and Dad could see what it did.`, `The raccoon was hurt and needed help from Ned and Dad.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `The raccoon's paws were not red. That takes the words word for word.`,
                `The paragraph says Dad pointed the light right at the raccoon's face. They saw it.`,
                `The paragraph gives no clue that the raccoon was hurt. It ran up a tree.`],
              why: `The paragraph says the garbage can was tipped over. The raccoon sat in the middle of the trash, holding a banana peel. So caught red-handed means the raccoon was caught right in the middle of making the mess.` },
            { id: 'Q02', type: 'mc', skill: 'Figurative language',
              quote: `Trash was spread on the grass like confetti.`, phrase: `like confetti`,
              q: `Read this sentence from the paragraph. “Trash was spread on the grass like confetti.” What does the phrase “like confetti” suggest about the trash?`,
              choices: [`Bits of trash were all over the yard.`, `The trash was made of party confetti.`, `The trash stayed inside the can.`, `The trash smelled like old fish.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Confetti is tiny paper for a party. There was no party in the yard. That takes the words word for word.`,
                `The paragraph says the garbage can was tipped over. The trash did not stay inside.`,
                `The paragraph gives no clue about a smell.`],
              why: `People toss confetti, and it lands all over. The paragraph says the garbage can was tipped over. Trash was spread on the grass. So bits of trash were all over the yard.` }
          ]
        },
        {
          story: {
            title: `Orange Mushrooms on a Log`,
            paragraphs: [
              `After the rain, Otis and Grandma Jo took a walk in the woods. The woods were as quiet as a library. The only sound was the drip of water from the trees. Soon they found orange mushrooms on an old log. Otis reached for one while Grandma walked ahead. She did not turn around, but she told him not to touch it. Grandma had eyes in the back of her head! She said some mushrooms can make you sick.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Figurative language',
              quote: `Grandma had eyes in the back of her head!`, phrase: `eyes in the back of her head`,
              q: `Read this sentence from the paragraph. “Grandma had eyes in the back of her head!” What does the phrase “eyes in the back of her head” suggest about Grandma?`,
              choices: [`Grandma knew what Otis did without looking.`, `Grandma had two more eyes on her head.`, `Grandma did not know what Otis was doing.`, `Otis knew what Grandma did without looking.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Grandma has just two eyes, like everyone. That takes the words word for word.`,
                `The paragraph says Grandma told Otis not to touch the mushroom. She knew what he was doing.`,
                `The question asks about Grandma, not Otis.`],
              why: `The paragraph says Grandma walked ahead. She did not turn around, but she told Otis not to touch the mushroom. So Grandma knew what Otis did without looking.` },
            { id: 'Q04', type: 'mc', skill: 'Figurative language',
              quote: `The woods were as quiet as a library.`, phrase: `as quiet as a library`,
              q: `Read this sentence from the paragraph. “The woods were as quiet as a library.” What does the phrase “as quiet as a library” suggest about the woods?`,
              choices: [`The woods were very quiet and still.`, `The woods had books on the trees.`, `The woods were loud and full of noise.`, `The woods were dark and scary.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `There were no books in the woods. That takes the words word for word.`,
                `The paragraph says the only sound was the drip of water. The woods were not loud.`,
                `The paragraph gives no clue that the woods were scary.`],
              why: `A library is a quiet place. People talk softly there. The paragraph says the only sound was the drip of water from the trees. So the woods were very quiet.` }
          ]
        },
        {
          story: {
            title: `One Hundred Steps to the Top`,
            paragraphs: [
              `Cam and Uncle Pete hiked up a mountain trail to an old lookout tower. The tower had one hundred metal steps. Cam climbed every single step without a rest. At the top, his legs felt like jelly. He had to sit down on the wooden floor to rest. Then Cam stood up and looked out. From the top, Cam had a bird's-eye view. He could see the river, the little town, and the tops of the trees far below.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Figurative language',
              quote: `From the top, Cam had a bird's-eye view.`, phrase: `a bird's-eye view`,
              q: `Read this sentence from the paragraph. “From the top, Cam had a bird's-eye view.” What does the phrase “a bird's-eye view” suggest about Cam?`,
              choices: [`Cam could see far from up high.`, `Cam had eyes just like a bird.`, `Cam could not see past the trees.`, `Cam wanted to go right back down.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Cam is a boy with a boy's eyes. That takes the words word for word.`,
                `The paragraph says Cam could see the river and the town far below. He could see past the trees.`,
                `The paragraph gives no clue that Cam wanted to go down.`],
              why: `A bird flies high and looks down. The paragraph says Cam was at the top of the tower. He could see the river, the town, and the treetops far below. So Cam could see far from up high.` },
            { id: 'Q06', type: 'mc', skill: 'Figurative language',
              quote: `At the top, his legs felt like jelly.`, phrase: `like jelly`,
              q: `Read this sentence from the paragraph. “At the top, his legs felt like jelly.” What does the phrase “like jelly” suggest about Cam?`,
              choices: [`Cam's legs felt tired and weak.`, `Cam's legs turned into grape jelly.`, `Cam's legs felt strong.`, `Uncle Pete's legs felt tired and weak.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Cam's legs were still legs. That takes the words word for word.`,
                `The paragraph says Cam had to sit down to rest. His legs did not feel strong.`,
                `The question asks about Cam, not Uncle Pete.`],
              why: `Jelly is soft and wobbly. The paragraph says Cam climbed one hundred steps without a rest. Then he had to sit down. So Cam's legs felt tired and weak.` }
          ]
        },
        {
          story: {
            title: `Leaf Boats on Clover Creek`,
            paragraphs: [
              `On a hot afternoon, Zane and his cousin Finn walked down to Clover Creek. The water was as clear as glass. They could see every pebble and tiny fish on the bottom. The boys hopped from rock to rock. They splashed each other and raced leaf boats down the creek. When Mom called them home, they begged to stay a little longer. The boys had a ball at the creek. They wanted to come back the very next day.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Figurative language',
              quote: `The boys had a ball at the creek.`, phrase: `had a ball`,
              q: `Read this sentence from the paragraph. “The boys had a ball at the creek.” What does the phrase “had a ball” suggest about the boys?`,
              choices: [`The boys had a great time at the creek.`, `The boys played with a ball in the water.`, `The boys were bored at the creek.`, `The boys were scared of the fish.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `The paragraph does not tell about a ball. That takes the words word for word.`,
                `The paragraph says the boys begged to stay longer. They were not bored.`,
                `The paragraph gives no clue that the boys were scared.`],
              why: `The paragraph says the boys splashed and raced leaf boats. They begged to stay longer, and they wanted to come back. So had a ball means the boys had a great time.` },
            { id: 'Q08', type: 'mc', skill: 'Figurative language',
              quote: `The water was as clear as glass.`, phrase: `as clear as glass`,
              q: `Read this sentence from the paragraph. “The water was as clear as glass.” What does the phrase “as clear as glass” suggest about the water?`,
              choices: [`The water was very clear and clean.`, `The creek was made of glass.`, `The water was dark and muddy.`, `The water was too deep for the boys.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `The creek had water in it, not glass. That takes the words word for word.`,
                `The paragraph says the boys could see every pebble on the bottom. The water was not muddy.`,
                `The paragraph gives no clue that the water was deep.`],
              why: `You can see right through clear glass. The paragraph says the boys could see every pebble and tiny fish on the bottom. So the water was very clear and clean.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 3 ════════ */
    {
      teach: {
        story: {
          title: `Two Rainbows at Once`,
          paragraphs: [
            `Pam and Dad sat by the big window after the rain. Then the sun came out, and a rainbow lit up the sky. A second rainbow showed up right above it! The colors were as bright as crayons. Dad said a double rainbow comes once in a blue moon. He had seen only one in his whole life. For ten whole minutes, Pam and Dad were glued to the big window. They did not look away until the colors faded.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Words that mean more',
            lines: [
              `Some phrases mean more than their words say. A phrase is a small group of words.`,
              `An idiom is a saying. Its words do not mean what they say.`,
              `Here is an idiom. Look outside! It is raining cats and dogs.`,
              `Cats and dogs do not fall from the sky! Raining cats and dogs means it is raining very hard.`,
              `A simile compares two things. It uses the word like or the word as.`,
              `Here is a simile. My hands were as cold as ice.`,
              `Ask, what is ice like? Ice is very cold. My hands were like that too. So my hands were very cold.`,
              `A question may ask, what does the phrase suggest? Suggest means to show without saying it.`,
              `To find out, ask one thing. Does the phrase really mean its words?`,
              `If it does not, use the clues around it. The clues tell what it means.`,
              `Watch out for the word-for-word answer. It is a trap.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the meaning',
            lines: [
              `Let's find what an idiom means. Here is a sentence from the paragraph.`,
              `Dad said a double rainbow comes once in a blue moon.`,
              `Step 1. Find the phrase. Once in a blue moon.`,
              `Step 2. Ask, does it really mean the words? Is the moon blue? No. And it is daytime.`,
              `So the word-for-word meaning is a trap. The phrase means something else.`,
              `Step 3. Use the clues around it. Dad had seen only one double rainbow in his whole life.`,
              `Pam and Dad watched it for ten whole minutes.`,
              `Step 4. Pick what the phrase suggests. Once in a blue moon means almost never.`
            ],
            lit: [
              `Dad said a double rainbow comes once in a blue moon.`,
              `He had seen only one in his whole life.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `Read this sentence from the paragraph. “For ten whole minutes, Pam and Dad were glued to the big window.” Which phrase in this sentence is an idiom?`,
            choices: [`were glued to`, `For ten whole minutes`, `Pam and Dad`, `the big window`],
            kinds: [null, 'literal', 'literal', 'literal'],
            notes: [null,
              `For ten whole minutes tells how long. Those words mean just what they say.`,
              `Pam and Dad are real people. Those words mean just what they say.`,
              `The big window is a real window. Those words mean just what they say.`],
            why: `Nobody put glue on the window! So were glued to does not mean what the words say. That makes it an idiom. It means Pam and Dad could not stop looking.` },
          { kind: 'step', id: 'S2', type: 'mc',
            quote: `The colors were as bright as crayons.`, phrase: `as bright as crayons`,
            q: `Read this sentence from the paragraph. “The colors were as bright as crayons.” What does the phrase “as bright as crayons” suggest about the rainbows?`,
            choices: [`The rainbows had strong, bright colors.`, `Someone drew the rainbows with crayons.`, `The rainbows were pale and hard to see.`, `The rainbows were very small.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `The rainbows were up in the sky. No one drew them. That takes the words word for word.`,
              `Pam and Dad watched the colors for ten minutes. The rainbows were not hard to see.`,
              `The paragraph gives no clue about the size of the rainbows.`],
            why: `New crayons make strong, bright colors. The paragraph says a rainbow lit up the sky. So the rainbows had strong, bright colors.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for words that mean more.`,
              `Step 1. Find the phrase in the sentence.`,
              `Step 2. Ask, does it really mean the words?`,
              `Step 3. Use the clues around it. Read the sentences before it and after it.`,
              `For a simile, ask, what is that thing like? The thing in the sentence is like that too.`,
              `New crayons have bright colors. The rainbows were bright too.`,
              `Step 4. Pick what the phrase suggests.`,
              `Watch out for the word-for-word answer. It is a trap.`,
              `In Your turn, each paragraph has one idiom and one simile. You will get a question about each one.`,
              `Now you try.`
            ],
            lit: [
              `The colors were as bright as crayons.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Grandpa's Sunflowers`,
          paragraphs: [
            `Each year, Ike helps Grandpa plant the yard behind his house. Grandpa has a green thumb. All of his plants grow big and strong. His tomatoes are fat and red, and his beans climb high up their poles. This year, Grandpa and Ike grew sunflowers by the back fence. By fall, the sunflowers were as tall as a tree. Ike had to tip his head way back to see the yellow tops.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Figurative language',
            quote: `Grandpa has a green thumb.`, phrase: `a green thumb`,
            q: `Read this sentence from the paragraph. “Grandpa has a green thumb.” What does the phrase “a green thumb” suggest about Grandpa?`,
            choices: [`Grandpa is good at growing plants.`, `Grandpa's thumb is the color green.`, `Grandpa's plants always dry up.`, `Grandpa likes to paint his fence.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Grandpa's thumb is not green. That takes the words word for word.`,
              `The paragraph says all of Grandpa's plants grow big and strong. They do not dry up.`,
              `The paragraph gives no clue about paint.`],
            why: `The paragraph says all of Grandpa's plants grow big and strong. His tomatoes are fat, and his beans climb high. So a green thumb means Grandpa is good at growing plants.` },
          { id: 'P2', type: 'mc', skill: 'Figurative language',
            quote: `By fall, the sunflowers were as tall as a tree.`, phrase: `as tall as a tree`,
            q: `Read this sentence from the paragraph. “By fall, the sunflowers were as tall as a tree.” What does the phrase “as tall as a tree” suggest about the sunflowers?`,
            choices: [`The sunflowers grew very, very tall.`, `The sunflowers turned into trees.`, `The sunflowers stayed short and small.`, `The sunflowers needed lots of water.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Sunflowers are flowers. They did not turn into trees. That takes the words word for word.`,
              `The paragraph says Ike had to tip his head way back to see the tops. They were not short.`,
              `The paragraph gives no clue about water.`],
            why: `A tree is very tall. The paragraph says Ike had to tip his head way back to see the yellow tops. So the sunflowers grew very, very tall.` }
        ]
      },
      turn: [
        {
          story: {
            title: `The Chipmunk's Snack`,
            paragraphs: [
              `Rex and Dad stopped for lunch at a table by the trail. Rex set a cracker and some peanuts on his napkin. A little chipmunk ran up the table leg. In the blink of an eye, the chipmunk grabbed the cracker. Rex did not even have time to move his hand. Then the chipmunk stuffed two peanuts into its mouth too. The chipmunk's cheeks puffed out like balloons. The chipmunk ran off to its hole with its snack.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Figurative language',
              quote: `In the blink of an eye, the chipmunk grabbed the cracker.`, phrase: `In the blink of an eye`,
              q: `Read this sentence from the paragraph. “In the blink of an eye, the chipmunk grabbed the cracker.” What does the phrase “In the blink of an eye” suggest about the chipmunk?`,
              choices: [`The chipmunk moved very fast.`, `The chipmunk blinked one eye at Rex.`, `The chipmunk took a long, slow time.`, `Rex moved very fast.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `The paragraph does not say the chipmunk blinked. That takes the words word for word.`,
                `The paragraph says the chipmunk grabbed the cracker and ran off. It was not slow.`,
                `The question asks about the chipmunk, not Rex.`],
              why: `A blink takes less than one second. The paragraph says the chipmunk grabbed the cracker. Rex did not even have time to move his hand. So the chipmunk moved very fast.` },
            { id: 'Q02', type: 'mc', skill: 'Figurative language',
              quote: `The chipmunk's cheeks puffed out like balloons.`, phrase: `like balloons`,
              q: `Read this sentence from the paragraph. “The chipmunk's cheeks puffed out like balloons.” What does the phrase “like balloons” suggest about the chipmunk?`,
              choices: [`The chipmunk's cheeks were very full.`, `The chipmunk held two red balloons.`, `The chipmunk's cheeks were thin and empty.`, `The chipmunk was sick and needed help.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `There were no balloons at the table. That takes the words word for word.`,
                `The paragraph says the chipmunk stuffed two peanuts into its mouth. Its cheeks were not empty.`,
                `The paragraph gives no clue that the chipmunk was sick.`],
              why: `A balloon puffs out when it is full of air. The paragraph says the chipmunk stuffed two peanuts into its mouth. So the chipmunk's cheeks were very full.` }
          ]
        },
        {
          story: {
            title: `Baby Goats at Uncle Ray's`,
            paragraphs: [
              `Tia spent Saturday afternoon at Uncle Ray's goat farm. Three baby goats galloped over to the gate to meet her. One baby goat followed Tia like a shadow. Everywhere Tia walked, the baby goat walked right behind her. Then a big goat began to nibble on Tia's shirt. Tia kept her cool. She did not scream or run away. She just stood still and gently pulled her shirt free. Uncle Ray smiled and gave her a high five.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Figurative language',
              quote: `Tia kept her cool.`, phrase: `kept her cool`,
              q: `Read this sentence from the paragraph. “Tia kept her cool.” What does the phrase “kept her cool” suggest about Tia?`,
              choices: [`Tia stayed calm and quiet.`, `Tia kept herself cold with ice.`, `Tia screamed and ran away.`, `The big goat stayed calm.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Tia did not use ice to stay cold. That takes the words word for word.`,
                `The paragraph says Tia did not scream or run away. That is the opposite.`,
                `The question asks about Tia, not the goat. The big goat was chewing.`],
              why: `The paragraph says Tia did not scream or run away. She stood still and gently pulled her shirt free. So kept her cool means Tia stayed calm and quiet.` },
            { id: 'Q04', type: 'mc', skill: 'Figurative language',
              quote: `One baby goat followed Tia like a shadow.`, phrase: `like a shadow`,
              q: `Read this sentence from the paragraph. “One baby goat followed Tia like a shadow.” What does the phrase “like a shadow” suggest about the baby goat?`,
              choices: [`The baby goat stayed right next to Tia.`, `The baby goat was a dark shadow.`, `The baby goat ran far away from Tia.`, `Uncle Ray stayed right behind Tia.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `The goat was a real goat, not a shadow. That takes the words word for word.`,
                `The paragraph says the baby goat walked right behind Tia. It did not run away.`,
                `The question asks about the baby goat, not Uncle Ray.`],
              why: `Your shadow stays with you everywhere you go. The paragraph says everywhere Tia walked, the baby goat walked right behind her. So the baby goat stayed right next to Tia.` }
          ]
        },
        {
          story: {
            title: `Peaches on Aunt Fran's Tree`,
            paragraphs: [
              `Aunt Fran's peach tree was heavy with ripe, yellow peaches. Dot said she would pick every peach by herself. But the tree had hundreds of peaches! By lunchtime, Dot had filled only one basket. Her arms ached, and her face was hot and sweaty. Dot had bitten off more than she could chew. So her cousins came outside to help her. Later, Dot bit into a peach and licked the juice off her fingers. The peach was as sweet as honey.`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Figurative language',
              quote: `Dot had bitten off more than she could chew.`, phrase: `bitten off more than she could chew`,
              q: `Read this sentence from the paragraph. “Dot had bitten off more than she could chew.” What does the phrase “bitten off more than she could chew” suggest about Dot?`,
              choices: [`Dot took on a job too big for her.`, `Dot took a bite too big to chew.`, `Dot picked all the peaches with no help.`, `Dot wanted to sell the peaches.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `The phrase is not about a real bite of food. Dot said she would pick every peach. That takes the words word for word.`,
                `The paragraph says her cousins came out to help her. She did not do it all alone.`,
                `The paragraph gives no clue about selling peaches.`],
              why: `The paragraph says Dot wanted to pick every peach by herself. But the tree had hundreds, and she filled only one basket. Her arms ached. So Dot took on a job too big for her.` },
            { id: 'Q06', type: 'mc', skill: 'Figurative language',
              quote: `The peach was as sweet as honey.`, phrase: `as sweet as honey`,
              q: `Read this sentence from the paragraph. “The peach was as sweet as honey.” What does the phrase “as sweet as honey” suggest about the peach?`,
              choices: [`The peach tasted very sweet.`, `The peach was full of honey.`, `The peach tasted sour.`, `The peach had a bug inside it.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `A peach has juice, not honey. That takes the words word for word.`,
                `Honey is sweet. Sweet is the opposite of sour.`,
                `The paragraph gives no clue about a bug.`],
              why: `Honey is very sweet. The paragraph says Dot bit into a peach and licked the juice off her fingers. So the peach tasted very sweet.` }
          ]
        },
        {
          story: {
            title: `Grasshoppers in the Tall Grass`,
            paragraphs: [
              `Mo wanted to catch a grasshopper in her net. She swung the net again and again. But the grasshoppers jumped away before the net came down. They popped up like tiny springs. After an hour, Mo dropped her net and sat down in the grass. Mo threw in the towel. Then a grasshopper landed right on her shoe! Mo looked at it closely, and then she let it hop away.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Figurative language',
              quote: `Mo threw in the towel.`, phrase: `threw in the towel`,
              q: `Read this sentence from the paragraph. “Mo threw in the towel.” What does the phrase “threw in the towel” suggest about Mo?`,
              choices: [`Mo gave up trying to catch one.`, `Mo threw a towel into the grass.`, `Mo kept trying for one more hour.`, `Mo was tired of the hot sun.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Mo had a net, not a towel. That takes the words word for word.`,
                `The paragraph says Mo dropped her net and sat down. She did not keep trying.`,
                `The paragraph gives no clue about the sun.`],
              why: `The paragraph says Mo dropped her net after an hour. She sat down in the grass. So threw in the towel means Mo gave up trying to catch one.` },
            { id: 'Q08', type: 'mc', skill: 'Figurative language',
              quote: `They popped up like tiny springs.`, phrase: `like tiny springs`,
              q: `Read this sentence from the paragraph. “They popped up like tiny springs.” What does the phrase “like tiny springs” suggest about the grasshoppers?`,
              choices: [`The grasshoppers jumped high and fast.`, `The grasshoppers were made of metal.`, `The grasshoppers sat still in the grass.`, `Mo jumped high and fast.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Grasshoppers are bugs, not metal springs. That takes the words word for word.`,
                `The paragraph says the grasshoppers jumped away before the net came down. They did not sit still.`,
                `The question asks about the grasshoppers, not Mo.`],
              why: `A spring pops up fast when you press it. The paragraph says the grasshoppers jumped away before the net came down. So the grasshoppers jumped high and fast.` }
          ]
        }
      ]
    },

    /* ════════ VERSION 4 ════════ */
    {
      teach: {
        story: {
          title: `A Bath for Rolo`,
          paragraphs: [
            `Rolo the dog rolled in a big, muddy puddle. Then he raced inside and jumped on Mom's clean white couch. Mom put her foot down. She said Rolo needed a bath right away, and no treats that day. Gil filled a big tub with water, and Mom scrubbed Rolo with soap. Then Rolo shook his wet fur and sprayed Mom. Out in the yard, Gil and Mom laughed their heads off together. After the bath, Rolo was as clean as a whistle.`
          ]
        },
        flow: [
          { kind: 'watch', id: 'W1', title: 'Words that mean more',
            lines: [
              `Some phrases mean more than their words say. A phrase is a small group of words.`,
              `An idiom is a saying. Its words do not mean what they say.`,
              `Here is an idiom. Look outside! It is raining cats and dogs.`,
              `Cats and dogs do not fall from the sky! Raining cats and dogs means it is raining very hard.`,
              `A simile compares two things. It uses the word like or the word as.`,
              `Here is a simile. My hands were as cold as ice.`,
              `Ask, what is ice like? Ice is very cold. My hands were like that too. So my hands were very cold.`,
              `A question may ask, what does the phrase suggest? Suggest means to show without saying it.`,
              `To find out, ask one thing. Does the phrase really mean its words?`,
              `If it does not, use the clues around it. The clues tell what it means.`,
              `Watch out for the word-for-word answer. It is a trap.`
            ] },
          { kind: 'watch', id: 'W2', title: 'Watch me find the meaning',
            lines: [
              `Let's find what an idiom means. Here is a sentence from the paragraph.`,
              `Mom put her foot down.`,
              `Step 1. Find the phrase. Put her foot down.`,
              `Step 2. Ask, does it really mean the words? Did Mom just set her foot on the floor? No. The words mean more.`,
              `So the word-for-word meaning is a trap. The phrase means something else.`,
              `Step 3. Use the clues around it. Rolo jumped on Mom's clean couch with mud on his fur.`,
              `Then Mom said Rolo needed a bath right away. She said no treats that day.`,
              `Step 4. Pick what the phrase suggests. Put her foot down means Mom made a firm rule, and she would not change it.`
            ],
            lit: [
              `Mom put her foot down.`,
              `Then he raced inside and jumped on Mom's clean white couch.`,
              `She said Rolo needed a bath right away, and no treats that day.`
            ] },
          { kind: 'step', id: 'S1', type: 'mc',
            q: `Read this sentence from the paragraph. “Out in the yard, Gil and Mom laughed their heads off together.” Which phrase in this sentence is an idiom?`,
            choices: [`laughed their heads off`, `Out in the yard`, `Gil and Mom`, `together`],
            kinds: [null, 'literal', 'literal', 'literal'],
            notes: [null,
              `Out in the yard tells where. Those words mean just what they say.`,
              `Gil and Mom are real people. Those words mean just what they say.`,
              `Together means Gil and Mom laughed at the same time. That word means just what it says.`],
            why: `Nobody's head fell off! So laughed their heads off does not mean what the words say. That makes it an idiom. It means Gil and Mom laughed very hard.` },
          { kind: 'step', id: 'S2', type: 'mc',
            quote: `After the bath, Rolo was as clean as a whistle.`, phrase: `as clean as a whistle`,
            q: `Read this sentence from the paragraph. “After the bath, Rolo was as clean as a whistle.” What does the phrase “as clean as a whistle” suggest about Rolo?`,
            choices: [`Rolo was very clean.`, `Rolo turned into a shiny whistle.`, `Rolo was still covered in mud.`, `Mom was very clean and dry.`],
            kinds: [null, 'literal', 'opposite', 'wrongwho'],
            notes: [null,
              `Rolo is a dog, not a whistle. That takes the words word for word.`,
              `Mom scrubbed Rolo with soap. He was not still muddy.`,
              `The question asks about Rolo, not Mom. Rolo sprayed Mom with water.`],
            why: `A new whistle is shiny and clean. The paragraph says Mom scrubbed Rolo with soap. So after the bath, Rolo was very clean.` },
          { kind: 'watch', id: 'W3', title: 'The steps',
            lines: [
              `Here are the steps for words that mean more.`,
              `Step 1. Find the phrase in the sentence.`,
              `Step 2. Ask, does it really mean the words?`,
              `Step 3. Use the clues around it. Read the sentences before it and after it.`,
              `For a simile, ask, what is that thing like? The thing in the sentence is like that too.`,
              `A new whistle is shiny and clean. Rolo was clean too.`,
              `Step 4. Pick what the phrase suggests.`,
              `Watch out for the word-for-word answer. It is a trap.`,
              `In Your turn, each paragraph has one idiom and one simile. You will get a question about each one.`,
              `Now you try.`
            ],
            lit: [
              `After the bath, Rolo was as clean as a whistle.`
            ] }
        ]
      },
      pre: {
        story: {
          title: `Jasper in the Field`,
          paragraphs: [
            `Hank tried to catch Grandpa's donkey, Jasper, with a rope. Jasper ran in circles around the field and kicked up his back legs. He trotted away every time Hank got near. Jasper sent Hank on a wild goose chase all morning. At last, Jasper stopped by the gate. Jasper let out a hee-haw as loud as a car horn. Hank jumped and covered his ears. Grandpa laughed and said Jasper just wanted his breakfast.`
          ]
        },
        items: [
          { id: 'P1', type: 'mc', skill: 'Figurative language',
            quote: `Jasper sent Hank on a wild goose chase all morning.`, phrase: `a wild goose chase`,
            q: `Read this sentence from the paragraph. “Jasper sent Hank on a wild goose chase all morning.” What does the phrase “a wild goose chase” suggest about Jasper?`,
            choices: [`Jasper kept getting away from Hank.`, `Jasper ran after a big wild goose.`, `Jasper let Hank catch him right away.`, `Jasper was lonely and wanted a friend.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `There is no goose in the paragraph. That takes the words word for word.`,
              `The paragraph says Jasper trotted away every time Hank got near. Hank did not catch him.`,
              `The paragraph gives no clue that Jasper was lonely.`],
            why: `A wild goose is very hard to catch. The paragraph says Jasper trotted away every time Hank got near. He ran in circles around the field. So Jasper kept getting away from Hank.` },
          { id: 'P2', type: 'mc', skill: 'Figurative language',
            quote: `Jasper let out a hee-haw as loud as a car horn.`, phrase: `as loud as a car horn`,
            q: `Read this sentence from the paragraph. “Jasper let out a hee-haw as loud as a car horn.” What does the phrase “as loud as a car horn” suggest about Jasper?`,
            choices: [`Jasper's hee-haw was very loud.`, `Jasper honked a horn.`, `Jasper's hee-haw was soft and quiet.`, `Jasper's hee-haw was a happy song.`],
            kinds: [null, 'literal', 'opposite', 'noclue'],
            notes: [null,
              `Jasper is a donkey. He did not honk a car horn. That takes the words word for word.`,
              `The paragraph says Hank jumped and covered his ears. The hee-haw was not soft.`,
              `The paragraph gives no clue about a song.`],
            why: `A car horn is very loud. The paragraph says Hank jumped and covered his ears. So Jasper's hee-haw was very loud.` }
        ]
      },
      turn: [
        {
          story: {
            title: `Mosquitoes at the Cookout`,
            paragraphs: [
              `At Aunt May's cookout, the mosquitoes came out at sunset. They buzzed around Cal's ears and bit his arms and legs. The buzzing drove Cal up the wall. He swatted and slapped and could not sit still to eat. Soon Cal's legs looked like they had red polka dots. Aunt May gave him a can of bug spray. After that, the mosquitoes left Cal alone.`
            ]
          },
          items: [
            { id: 'Q01', type: 'mc', skill: 'Figurative language',
              quote: `The buzzing drove Cal up the wall.`, phrase: `drove Cal up the wall`,
              q: `Read this sentence from the paragraph. “The buzzing drove Cal up the wall.” What does the phrase “drove Cal up the wall” suggest about Cal?`,
              choices: [`The buzzing made Cal very upset.`, `Cal climbed up the wall of the house.`, `Cal liked the buzzing sound a lot.`, `The buzzing made Aunt May upset.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Cal did not climb a wall. That takes the words word for word.`,
                `The paragraph says Cal swatted and slapped. He did not like the buzzing.`,
                `The question asks about Cal, not Aunt May.`],
              why: `The paragraph says the mosquitoes buzzed around Cal's ears. He swatted and slapped, and he could not sit still to eat. So the buzzing made Cal very upset.` },
            { id: 'Q02', type: 'mc', skill: 'Figurative language',
              quote: `Soon Cal's legs looked like they had red polka dots.`, phrase: `like they had red polka dots`,
              q: `Read this sentence from the paragraph. “Soon Cal's legs looked like they had red polka dots.” What does the phrase “like they had red polka dots” suggest about Cal?`,
              choices: [`Cal's legs were covered with bites.`, `Cal wore pants with red polka dots.`, `Cal had just one small bite.`, `Cal's legs were red from the sun.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `The paragraph does not tell about Cal's pants. The red dots were bites. That takes the words word for word.`,
                `The paragraph says the mosquitoes bit Cal's arms and legs. He had more than one bite.`,
                `The paragraph gives no clue about the sun.`],
              why: `Polka dots are lots of little round spots. The paragraph says the mosquitoes bit Cal's arms and legs. So Cal's legs were covered with bites.` }
          ]
        },
        {
          story: {
            title: `A Crack of Thunder`,
            paragraphs: [
              `Wren and Nana watched the storm from the living room window. The rain came down like a waterfall. Water ran off the roof and filled the street. Wren counted the seconds after each flash of lightning. Then a giant crack of thunder shook the whole house. Wren jumped out of her skin! She dropped her cup of milk and grabbed Nana's arm. Nana hugged her and said the storm would pass soon.`
            ]
          },
          items: [
            { id: 'Q03', type: 'mc', skill: 'Figurative language',
              quote: `Wren jumped out of her skin!`, phrase: `jumped out of her skin`,
              q: `Read this sentence from the paragraph. “Wren jumped out of her skin!” What does the phrase “jumped out of her skin” suggest about Wren?`,
              choices: [`The thunder gave Wren a big scare.`, `Wren hopped right out of her skin.`, `Wren stayed calm when the thunder came.`, `Nana got a big scare from the thunder.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `No one can jump out of her own skin! That takes the words word for word.`,
                `The paragraph says Wren dropped her cup and grabbed Nana's arm. She did not stay calm.`,
                `The question asks about Wren, not Nana. Nana hugged her.`],
              why: `The paragraph says a giant crack of thunder shook the house. Wren dropped her cup of milk and grabbed Nana's arm. So the thunder gave Wren a big scare.` },
            { id: 'Q04', type: 'mc', skill: 'Figurative language',
              quote: `The rain came down like a waterfall.`, phrase: `like a waterfall`,
              q: `Read this sentence from the paragraph. “The rain came down like a waterfall.” What does the phrase “like a waterfall” suggest about the rain?`,
              choices: [`The rain came down very hard.`, `The rain fell from a real waterfall.`, `Just a few drops of rain fell.`, `The rain was very cold.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `There was no waterfall by Wren's house. That takes the words word for word.`,
                `The paragraph says water ran off the roof and filled the street. It was not just a few drops.`,
                `The paragraph gives no clue that the rain was cold.`],
              why: `A waterfall drops lots of water all at once. The paragraph says water ran off the roof and filled the street. So the rain came down very hard.` }
          ]
        },
        {
          story: {
            title: `The Sea Lion Show`,
            paragraphs: [
              `Sid and Mom sat right up front for the sea lion show. The show would not begin for ten more minutes. Sid had ants in his pants. He wiggled, he stood up, and he sat back down again. At last, a sea lion named Sunny flopped onto a big gray rock. Sunny slid down the slippery rock like a kid on a slide. She splashed into the water, and a cold wave landed on Sid and Mom!`
            ]
          },
          items: [
            { id: 'Q05', type: 'mc', skill: 'Figurative language',
              quote: `Sid had ants in his pants.`, phrase: `ants in his pants`,
              q: `Read this sentence from the paragraph. “Sid had ants in his pants.” What does the phrase “ants in his pants” suggest about Sid?`,
              choices: [`Sid could not sit still.`, `Real ants crawled into Sid's pants.`, `Sid sat very still and calm.`, `Mom could not sit still.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `There were no ants on Sid. That takes the words word for word.`,
                `The paragraph says Sid wiggled, stood up, and sat back down. He was not still.`,
                `The question asks about Sid, not Mom.`],
              why: `The paragraph says the show would not begin for ten more minutes. Sid wiggled, he stood up, and he sat back down. So ants in his pants means Sid could not sit still.` },
            { id: 'Q06', type: 'mc', skill: 'Figurative language',
              quote: `Sunny slid down the slippery rock like a kid on a slide.`, phrase: `like a kid on a slide`,
              q: `Read this sentence from the paragraph. “Sunny slid down the slippery rock like a kid on a slide.” What does the phrase “like a kid on a slide” suggest about Sunny?`,
              choices: [`Sunny slid down fast and had fun.`, `Sunny went down a slide at the park.`, `Sunny climbed up the rock very slowly.`, `Sid slid down the slippery rock.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `Sunny is a sea lion at the show, not at a park. That takes the words word for word.`,
                `The paragraph says Sunny slid down and splashed into the water. She did not climb up.`,
                `The question asks about Sunny, not Sid. Sid sat with Mom up front.`],
              why: `A kid on a slide zooms down fast and has fun. The paragraph says Sunny slid down the wet rock and splashed into the water. So Sunny slid down fast and had fun.` }
          ]
        },
        {
          story: {
            title: `Quill the Hedgehog`,
            paragraphs: [
              `Abe got a hedgehog named Quill for his birthday. At first, Quill rolled into a tight ball every time Abe came near. Quill's back was as prickly as a cactus. Abe wore thick gloves to hold him. Every evening, Abe sat beside the cage and talked softly. He gave Quill tiny bits of food from his hand. After two weeks, Quill warmed up to Abe. Now Quill walks right onto Abe's open hand.`
            ]
          },
          items: [
            { id: 'Q07', type: 'mc', skill: 'Figurative language',
              quote: `After two weeks, Quill warmed up to Abe.`, phrase: `warmed up to`,
              q: `Read this sentence from the paragraph. “After two weeks, Quill warmed up to Abe.” What does the phrase “warmed up to” suggest about Quill?`,
              choices: [`Quill began to trust Abe.`, `Quill got warm by sitting near Abe.`, `Quill got more scared of Abe.`, `Abe began to trust Quill.`],
              kinds: [null, 'literal', 'opposite', 'wrongwho'],
              notes: [null,
                `The phrase is not about getting warm. That takes the words word for word.`,
                `The paragraph says Quill now walks onto Abe's open hand. He is not more scared.`,
                `The question asks about Quill, not Abe.`],
              why: `The paragraph says Quill used to roll into a ball when Abe came near. Now Quill walks right onto Abe's open hand. So warmed up to means Quill began to trust Abe.` },
            { id: 'Q08', type: 'mc', skill: 'Figurative language',
              quote: `Quill's back was as prickly as a cactus.`, phrase: `as prickly as a cactus`,
              q: `Read this sentence from the paragraph. “Quill's back was as prickly as a cactus.” What does the phrase “as prickly as a cactus” suggest about Quill's back?`,
              choices: [`Quill's back was sharp and spiky.`, `Quill had a cactus on his back.`, `Quill's back was soft and smooth.`, `Quill's back was very cold.`],
              kinds: [null, 'literal', 'opposite', 'noclue'],
              notes: [null,
                `Quill is a hedgehog. There was no cactus on him. That takes the words word for word.`,
                `The paragraph says Abe wore thick gloves to hold Quill. His back was not soft.`,
                `The paragraph gives no clue that Quill's back was cold.`],
              why: `A cactus has sharp spines. The paragraph says Abe wore thick gloves to hold Quill. So Quill's back was sharp and spiky.` }
          ]
        }
      ]
    }
  ]
};
