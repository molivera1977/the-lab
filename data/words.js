/* ═══════════════════════════════════════════════════════
   THE LAB · WORD HELP (tap-a-word)
   When one of these words or signs is in a question, a button for it shows under the
   question (not on the facts check). Tapping it opens a card: what it means, an example,
   and a speaker. Nothing here names the answer to any question: the examples use facts
   no lesson asks (10 + 10, 20 − 10), and the site hides a card whose example ends in the
   question's own answer (wordsIn in script.js).
   find  = the words or signs in a question that bring up the card
═══════════════════════════════════════════════════════ */
window.WORDS = [
  { key: 'plus', word: '+ (plus)', find: ['+'],
    means: 'The plus sign means add. Put the two numbers together. The answer is bigger.',
    ex: '10 + 10 = 20. Ten and ten more make twenty.' },
  { key: 'minus', word: '− (minus)', find: ['−'],
    means: 'The minus sign means take away. The answer is smaller.',
    ex: '20 − 10 = 10. Twenty, take away ten, leaves ten.' },
  { key: 'make10', word: 'make 10', find: ['make 10'],
    means: 'Two numbers make 10 when they add up to 10. In a ten frame, every box has a dot.',
    ex: 'A ten frame has 10 boxes. Fill every box, and you made 10.' }
];
