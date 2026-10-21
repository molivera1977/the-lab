/* ═══════════════════════════════════════════════════════
   THE LAB · visuals.js
   The pictures that go with a question or its explanation. Each one is drawn
   from the numbers in the data file, so a picture can never disagree with the answer.
   - line   : a number line from 0 to 20. With `from` it marks where to start; with
              `jumps` it draws one hop per number counted (count on, count back, count up).
   - frames : ten frames — dots for a number, the empty boxes, and "make 10" (dots moved over).
   - teen   : a ten stick and ones cubes (more = cubes added, away = cubes taken away).
   - bond   : a fact family: the whole on top, the two parts under it.
   A question carries `pic` (under the question) and `explain` (in the feedback).
   Under a question nothing gives the answer away: no hops, no answer number.
═══════════════════════════════════════════════════════ */
(function (root) {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const say = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

  /* ── NUMBER LINE ─────────────────────────────────────
     cfg = { lo, hi, from, jumps, dir }  dir 1 = count on / up, −1 = count back */
  function lineSVG(cfg) {
    const lo = cfg.lo, hi = cfg.hi, W = 700, pad = 26, by = cfg.step || 1;
    const step = (W - pad * 2) / (hi - lo);
    const x = n => pad + (n - lo) * step;
    const y = 112;
    const hops = cfg.jumps || 0, dir = cfg.dir || 1;
    const end = cfg.from != null ? cfg.from + dir * hops * by : null;
    let s = `<line x1="${pad - 8}" y1="${y}" x2="${W - pad + 8}" y2="${y}" class="lv-axis"/>`;
    for (let n = lo; n <= hi; n += by) {
      const cls = n === cfg.from ? 'lv-num lv-start' : hops && n === end ? 'lv-num lv-end' : 'lv-num';
      s += `<line x1="${x(n)}" y1="${y - 9}" x2="${x(n)}" y2="${y + 9}" class="lv-tick"/>`;
      s += `<text x="${x(n)}" y="${y + 34}" class="${cls}">${n}</text>`;
    }
    if (cfg.from != null) {
      s += `<circle cx="${x(cfg.from)}" cy="${y}" r="9" class="lv-dot-start"/>`;
      s += `<text x="${x(cfg.from)}" y="${y + 58}" class="lv-tag">start</text>`;
    }
    for (let i = 0; i < hops; i++) {
      const a = cfg.from + dir * i * by, b = a + dir * by;
      const mid = (x(a) + x(b)) / 2;
      s += `<path d="M ${x(a)} ${y - 6} Q ${mid} ${y - 58} ${x(b)} ${y - 6}" class="lv-hop"/>`;
      s += `<text x="${mid}" y="${y - 44}" class="lv-hop-n">${i + 1}</text>`;
    }
    if (hops) s += `<circle cx="${x(end)}" cy="${y}" r="9" class="lv-dot-end"/>`;
    const said = cfg.from == null ? `A number line from ${lo} to ${hi}.`
      : !hops ? `A number line from ${lo} to ${hi}. Start at ${cfg.from}.`
      : by > 1 ? `A number line counting by ${by}s. ${say(hops, 'hop')} of ${by} from ${cfg.from}: you land on ${end}.`
      : `A number line. Start at ${cfg.from}. ${say(hops, 'hop')} ${dir > 0 ? 'up' : 'back'}, one for each number: you land on ${end}.`;
    // no hops: no room needed above the line; no start mark: none below it either
    const top = hops ? 0 : 82, bottom = cfg.from != null ? 180 : 156;
    return `<div class="lv lv-line-wrap"><svg viewBox="0 ${top} ${W} ${bottom - top}" class="lv-line" role="img" aria-label="${esc(said)}">${s}</svg></div>`;
  }

  /* ── TEN FRAMES ──────────────────────────────────────
     cfg = { a, b, fill, make10 }
       a      dots in the first frame
       fill   (with no b) the empty boxes filled in green — the ten partner
       b      dots in a second frame
       make10 (with b) move dots from the second frame until the first is full */
  function frameHTML(dots) {
    // dots: array of 10 class names ('' = empty box)
    return `<div class="lv-frame" aria-hidden="true">${dots.map(c => `<span class="lv-box">${c ? `<i class="lv-d ${c}"></i>` : ''}</span>`).join('')}</div>`;
  }
  function framesHTML(cfg) {
    const a = cfg.a;
    if (cfg.b == null) {
      const fill = cfg.fill || 0;
      const dots = Array.from({ length: 10 }, (_, i) => (i < a ? 'lv-red' : i < a + fill ? 'lv-green' : ''));
      const said = fill ? `A ten frame. ${say(a, 'dot')}, and ${fill} more make 10.` : `A ten frame with ${say(a, 'dot')}. ${10 - a} boxes are empty.`;
      return `<div class="lv lv-frames" role="img" aria-label="${esc(said)}">${frameHTML(dots)}` +
        (fill ? `<div class="lv-cap" aria-hidden="true">${a} + ${fill} = 10</div>` : '') + `</div>`;
    }
    const b = cfg.b;
    if (!cfg.make10) {
      const f1 = Array.from({ length: 10 }, (_, i) => (i < a ? 'lv-red' : ''));
      const f2 = Array.from({ length: 10 }, (_, i) => (i < b ? 'lv-blue' : ''));
      return `<div class="lv lv-frames" role="img" aria-label="${esc(`Two ten frames: ${say(a, 'dot')} and ${say(b, 'dot')}.`)}">${frameHTML(f1)}${frameHTML(f2)}</div>`;
    }
    const k = 10 - a, left = b - k;
    const f1 = Array.from({ length: 10 }, (_, i) => (i < a ? 'lv-red' : 'lv-blue lv-moved'));
    const f2 = Array.from({ length: 10 }, (_, i) => (i < left ? 'lv-blue' : ''));
    const said = `Make 10. ${k} of the ${b} dots move to fill the first frame. Now it is 10 and ${left}: ${10 + left}.`;
    return `<div class="lv lv-frames" role="img" aria-label="${esc(said)}">${frameHTML(f1)}${frameHTML(f2)}` +
      `<div class="lv-cap" aria-hidden="true">10 + ${left} = ${10 + left}</div></div>`;
  }

  /* ── TEEN NUMBERS: a ten stick and ones ──────────────
     cfg = { tens, ones, more, away, awayTen, show } */
  function teenHTML(cfg) {
    const stick = `<span class="lv-ten${cfg.awayTen ? ' lv-gone' : ''}" aria-hidden="true">${'<i></i>'.repeat(10)}</span>`;
    const ones = Array.from({ length: cfg.ones }, (_, i) => `<i class="lv-one${cfg.away && i >= cfg.ones - cfg.away ? ' lv-gone' : ''}"></i>`).join('');
    const more = cfg.more ? `<span class="lv-plus" aria-hidden="true">+</span>${'<i class="lv-one lv-more"></i>'.repeat(cfg.more)}` : '';
    let said = `1 ten and ${say(cfg.ones, 'one')}`;
    if (cfg.more) said += `, and ${cfg.more} more ones`;
    if (cfg.away) said += `, ${cfg.away} ones taken away`;
    if (cfg.awayTen) said += `, the ten taken away`;
    if (cfg.show != null) said += `. That makes ${cfg.show}.`;
    return `<div class="lv lv-teen" role="img" aria-label="${esc(said)}"><div class="lv-teen-row" aria-hidden="true">${stick}<span class="lv-ones">${ones}${more}</span></div>` +
      (cfg.show != null ? `<div class="lv-cap" aria-hidden="true">${cfg.show}</div>` : '') + `</div>`;
  }

  /* ── FACT FAMILY: the whole on top, the parts under it ──
     cfg = { a, b, c, ask }  ask = 'a' | 'b' | 'c' shows "?" in that place */
  function bondHTML(cfg) {
    const v = k => (cfg.ask === k ? '?' : cfg[k]);
    const said = `A fact family: ${cfg.a}, ${cfg.b} and ${cfg.c}. ${cfg.a} and ${cfg.b} make ${cfg.c}.` + (cfg.ask ? ' One number is missing.' : '');
    return `<div class="lv lv-bond" role="img" aria-label="${esc(said)}"><svg viewBox="0 0 300 190" aria-hidden="true">` +
      `<line x1="150" y1="52" x2="78" y2="140" class="lv-bond-l"/><line x1="150" y1="52" x2="222" y2="140" class="lv-bond-l"/>` +
      `<circle cx="150" cy="44" r="36" class="lv-bond-c lv-whole"/><text x="150" y="56" class="lv-bond-t">${v('c')}</text>` +
      `<circle cx="78" cy="146" r="34" class="lv-bond-c${cfg.ask === 'a' ? ' lv-ask' : ''}"/><text x="78" y="158" class="lv-bond-t">${v('a')}</text>` +
      `<circle cx="222" cy="146" r="34" class="lv-bond-c${cfg.ask === 'b' ? ' lv-ask' : ''}"/><text x="222" y="158" class="lv-bond-t">${v('b')}</text>` +
      `</svg></div>`;
  }

  /* ── EQUAL GROUPS: g circles, n dots in each ── cfg = { g, n, show } */
  function groupsHTML(cfg) {
    const circle = `<span class="lv-group" aria-hidden="true">${'<i class="lv-d lv-red"></i>'.repeat(cfg.n)}</span>`;
    const said = `${say(cfg.g, 'group')} with ${say(cfg.n, 'dot')} in each${cfg.show != null ? `: ${cfg.show} in all` : ''}.`;
    return `<div class="lv lv-groups" role="img" aria-label="${esc(said)}"><div class="lv-groups-row">${circle.repeat(cfg.g)}</div>` +
      (cfg.show != null ? `<div class="lv-cap" aria-hidden="true">${Array(cfg.g).fill(cfg.n).join(' + ')} = ${cfg.show}</div>` : '') + `</div>`;
  }
  /* ── ARRAY: rows of dots ── cfg = { rows, cols, show } */
  function arrayHTML(cfg) {
    const row = `<div class="lv-arow">${'<i class="lv-d lv-blue"></i>'.repeat(cfg.cols)}</div>`;
    const said = `An array: ${say(cfg.rows, 'row')} of ${say(cfg.cols, 'dot')}${cfg.show != null ? `: ${cfg.show} dots` : ''}.`;
    return `<div class="lv lv-array" role="img" aria-label="${esc(said)}"><div class="lv-array-box" aria-hidden="true">${row.repeat(cfg.rows)}</div>` +
      (cfg.show != null ? `<div class="lv-cap" aria-hidden="true">${cfg.rows} × ${cfg.cols} = ${cfg.show}</div>` : '') + `</div>`;
  }
  /* ── TIMES AS MANY: one bar of b, and t bars of b ── cfg = { t, b, show } */
  function barsHTML(cfg) {
    const cell = `<span class="lv-bar-cell">${cfg.b}</span>`;
    const said = `A bar of ${cfg.b}, and ${cfg.t} bars of ${cfg.b}${cfg.show != null ? `: ${cfg.show}` : ''}.`;
    return `<div class="lv lv-bars" role="img" aria-label="${esc(said)}"><div class="lv-bars-row" aria-hidden="true"><span class="lv-bar-name">1 time</span>${cell}</div>` +
      `<div class="lv-bars-row" aria-hidden="true"><span class="lv-bar-name">${cfg.t} times</span>${cell.repeat(cfg.t)}${cfg.show != null ? `<span class="lv-bar-total">= ${cfg.show}</span>` : '<span class="lv-bar-total">= ?</span>'}</div></div>`;
  }

  /* ── PLACE CHART ── cfg = { n, mark } (mark = a place: 0 ones, 1 tens …) or { parts: [300, 40, 7] } (expanded form cards) */
  const PLACE_NAMES = ['Ones', 'Tens', 'Hundreds', 'Thousands', 'Ten Thousands', 'Hundred Thousands'];
  function placesHTML(cfg) {
    if (cfg.parts) {
      const said = `Expanded form parts: ${cfg.parts.join(', ')}.`;
      return `<div class="lv lv-parts" role="img" aria-label="${esc(said)}">${cfg.parts.map(p => `<span class="lv-part" aria-hidden="true">${Number(p).toLocaleString('en-US')}</span>`).join('<span class="lv-plus" aria-hidden="true">+</span>')}</div>`;
    }
    const d = String(cfg.n).split('').reverse();
    const cols = d.map((ch, i) => i).reverse();
    const head = cols.map(i => `<th class="${i === cfg.mark ? 'lv-mark' : ''}">${PLACE_NAMES[i]}</th>`).join('');
    const rowOf = digs => cols.map(i => `<td class="${i === cfg.mark ? 'lv-mark' : ''}">${digs[i] == null ? '' : digs[i]}</td>`).join('');
    const row = rowOf(d) + (cfg.n2 != null ? `</tr><tr>${rowOf(String(cfg.n2).split('').reverse())}` : '');
    const val = cfg.mark != null && cfg.n2 == null ? `${d[cfg.mark]} ${PLACE_NAMES[cfg.mark].toLowerCase()} = ${(Number(d[cfg.mark]) * 10 ** cfg.mark).toLocaleString('en-US')}` : '';
    const said = (cfg.n2 != null ? `A place chart for ${Number(cfg.n).toLocaleString('en-US')} and ${Number(cfg.n2).toLocaleString('en-US')}.` : `A place chart for ${Number(cfg.n).toLocaleString('en-US')}.`) + (val ? ` ${val}.` : '');
    return `<div class="lv lv-places" role="img" aria-label="${esc(said)}"><table class="lv-place-table" aria-hidden="true"><tr>${head}</tr><tr>${row}</tr></table>` +
      (val ? `<div class="lv-cap" aria-hidden="true">${val}</div>` : '') + `</div>`;
  }
  /* ── TIMES 10 / 100: the digits move left, zeros hold the empty places ── cfg = { n, k, show } */
  function shiftHTML(cfg) {
    const z = cfg.k === 10 ? 1 : 2;
    const top = String(cfg.n), width = top.length + z;
    const cells = (str, zeros) => { const a = str.padStart(width, ' ').split(''); return a.map((ch, i) => `<td class="${zeros && i >= width - z ? 'lv-zero' : ''}">${ch === ' ' ? '' : ch}</td>`).join(''); };
    const said = cfg.show != null ? `${cfg.n} times ${cfg.k}: the digits move ${z === 1 ? 'one place' : 'two places'} left and ${z === 1 ? 'a 0 fills' : 'two 0s fill'} the empty place${z === 1 ? '' : 's'}. ${cfg.show}.` : `${cfg.n} times ${cfg.k}.`;
    return `<div class="lv lv-shift" role="img" aria-label="${esc(said)}"><table class="lv-place-table" aria-hidden="true"><tr>${cells(top, false)}<td class="lv-shift-lab">${cfg.n}</td></tr>` +
      (cfg.show != null ? `<tr>${cells(top + '0'.repeat(z), true)}<td class="lv-shift-lab">× ${cfg.k} = ${Number(cfg.show).toLocaleString('en-US')}</td></tr>` : '') + `</table></div>`;
  }

  /* ── ROUNDING LINE: from the benchmark below to the one above ──
     cfg = { n, unit, bench, half, arrow, hideN }  bench = name the two benchmarks; half = mark halfway;
     arrow = the benchmark it rounds to; hideN = do not mark n (a halfway question) */
  function rlineSVG(cfg) {
    const unit = cfg.unit, low = Math.floor(cfg.n / unit) * unit, high = low + unit, half = low + unit / 2;
    const W = 700, pad = 60, y = 100, x = v => pad + (v - low) / unit * (W - pad * 2);
    const f = v => Number(v).toLocaleString('en-US');
    let s = `<line x1="${pad - 20}" y1="${y}" x2="${W - pad + 20}" y2="${y}" class="lv-axis"/>`;
    for (let i = 0; i <= 10; i++) {
      const v = low + i * unit / 10, big = i === 0 || i === 10, mid = i === 5;
      s += `<line x1="${x(v)}" y1="${y - (big ? 14 : mid ? 11 : 7)}" x2="${x(v)}" y2="${y + (big ? 14 : mid ? 11 : 7)}" class="lv-tick"/>`;
    }
    // hideEnds: a "which two benchmarks?" question — the ends are its answer, so they show "?" until after the answer
    s += `<text x="${x(low)}" y="${y + 40}" class="lv-num${cfg.bench ? ' lv-bench' : ''}">${cfg.hideEnds ? '?' : f(low)}</text>`;
    s += `<text x="${x(high)}" y="${y + 40}" class="lv-num${cfg.bench ? ' lv-bench' : ''}">${cfg.hideEnds ? '?' : f(high)}</text>`;
    if (cfg.half) s += `<text x="${x(half)}" y="${y + 40}" class="lv-num lv-half">${f(half)}</text><text x="${x(half)}" y="${y + 62}" class="lv-tag lv-half">halfway</text>`;
    if (!cfg.hideN) {
      s += `<circle cx="${x(cfg.n)}" cy="${y}" r="9" class="lv-dot-start"/><text x="${x(cfg.n)}" y="${y - 22}" class="lv-num lv-start">${f(cfg.n)}</text>`;
    }
    if (cfg.arrow != null) {
      const a = x(cfg.n), b = x(cfg.arrow);
      s += `<path d="M ${a} ${y - 36} Q ${(a + b) / 2} ${y - 70} ${b} ${y - 18}" class="lv-hop lv-round-arrow"/><circle cx="${b}" cy="${y}" r="9" class="lv-dot-end"/>`;
    }
    const said = (cfg.hideEnds ? 'A number line' : `A number line from ${f(low)} to ${f(high)}`) + (cfg.hideN ? '' : `, with ${f(cfg.n)} marked`) + (cfg.half ? `. Halfway is ${f(half)}` : '') +
      (cfg.arrow != null ? `. ${f(cfg.n)} rounds to ${f(cfg.arrow)}` : '') + '.';
    return `<div class="lv lv-line-wrap"><svg viewBox="0 0 ${W} 170" class="lv-line" role="img" aria-label="${esc(said)}">${s}</svg></div>`;
  }

  function one(pic) {
    if (!pic) return '';
    if (pic.line) return lineSVG(pic.line);
    if (pic.frames) return framesHTML(pic.frames);
    if (pic.teen) return teenHTML(pic.teen);
    if (pic.bond) return bondHTML(pic.bond);
    if (pic.groups) return groupsHTML(pic.groups);
    if (pic.array) return arrayHTML(pic.array);
    if (pic.bars) return barsHTML(pic.bars);
    if (pic.places) return placesHTML(pic.places);
    if (pic.shift) return shiftHTML(pic.shift);
    if (pic.rline) return rlineSVG(pic.rline);
    return '';
  }
  /* Picture under the question — set up, never solved */
  function picHTML(pic) { return one(pic); }
  /* Picture in the feedback (and under a worked example) */
  function explainHTML(ex) {
    const out = one(ex);
    return out ? `<div class="lv-explain">${out}</div>` : '';
  }

  const api = { lineSVG, framesHTML, teenHTML, bondHTML, groupsHTML, arrayHTML, barsHTML, placesHTML, shiftHTML, rlineSVG, picHTML, explainHTML };
  root.LabV = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
