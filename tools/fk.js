/* Reading level of some text: node tools/fk.js "text"  (or pipe text in).
   Same formula as tools/check-levels.js. Paragraphs = lines. */
const fs = require('fs');
function syl(w) { w = w.toLowerCase().replace(/[^a-z]/g, ''); if (!w) return 0; if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, ''); const m = w.match(/[aeiouy]{1,2}/g); return m ? m.length : 1; }
const text = process.argv[2] != null ? process.argv.slice(2).join('\n') : fs.readFileSync(0, 'utf8');
const lines = text.split(/\n+/).filter(l => /[A-Za-z]/.test(l));
let s = 0, w = 0, y = 0;
lines.forEach(t => { t = t.replace(/\b(Mr|Mrs|Ms|Dr|St)\./g, '$1'); s += Math.max(1, t.split(/[.!?…]+/).filter(x => /[A-Za-z]/.test(x)).length);
  const words = t.split(/\s+/).filter(x => /[A-Za-z0-9]/.test(x)); w += words.length; words.forEach(x => y += syl(x)); });
console.log(`FK ${(0.39 * (w / s) + 11.8 * (y / w) - 15.59).toFixed(2)} · ${w} words · ${s} sentences`);
