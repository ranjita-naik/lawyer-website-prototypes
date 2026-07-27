// Generates the four presentation-deck HTML files into pdf/, ready for print-pdf.js.
const fs = require("fs");
const path = require("path");
const { PROTOTYPES, DISCLAIMERS } = require("./deck-data");

const ROOT = path.resolve(__dirname, "..", "..");
const PDF_DIR = path.join(ROOT, "pdf");

const W = 1680;
const H = 1050;

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const BASE_CSS = `
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { background:#fff; }
  body { font-family:'Inter', -apple-system, sans-serif; }
  .slide {
    width:${W}px; height:${H}px; position:relative; overflow:hidden;
    page-break-after:always; break-after:page;
    display:flex; flex-direction:column;
  }
  .slide:last-child { page-break-after:auto; break-after:auto; }
  .pad { padding:88px 96px; flex:1; display:flex; flex-direction:column; min-height:0; }
  .eyebrow { font-size:12.5px; letter-spacing:0.16em; text-transform:uppercase; font-weight:600; }
  .footer-bar { position:absolute; left:0; right:0; bottom:0; height:56px; display:flex; align-items:center; justify-content:space-between; padding:0 96px; font-size:11.5px; letter-spacing:0.08em; text-transform:uppercase; }
  .swatch-row { display:flex; gap:28px; flex-wrap:wrap; }
  .swatch { width:170px; }
  .swatch .chip { width:170px; height:110px; border-radius:6px; border:1px solid rgba(0,0,0,0.08); }
  .swatch .label { margin-top:10px; font-size:14px; font-weight:600; }
  .swatch .hex { font-size:12.5px; opacity:0.65; font-family:'IBM Plex Mono', monospace; margin-top:2px; }
  .type-row { display:flex; flex-direction:column; gap:26px; }
  .type-item { display:flex; align-items:baseline; gap:36px; border-top:1px solid rgba(0,0,0,0.08); padding-top:22px; }
  .type-item .role { width:230px; font-size:12.5px; letter-spacing:0.1em; text-transform:uppercase; opacity:0.6; flex-shrink:0; }
  .type-item .name { font-size:30px; flex-shrink:0; }
  .type-item .note { font-size:14.5px; opacity:0.7; max-width:520px; }
  table.sitemap { width:100%; border-collapse:collapse; }
  table.sitemap td { vertical-align:top; padding:15px 0; border-top:1px solid rgba(0,0,0,0.1); font-size:14.5px; }
  table.sitemap td.pnum { width:36px; font-family:'IBM Plex Mono',monospace; opacity:0.5; font-size:13px; }
  table.sitemap td.pname { width:280px; font-weight:600; padding-right:24px; }
  table.sitemap td.pdesc { opacity:0.82; line-height:1.5; }
  .page-shots { display:flex; gap:36px; align-items:flex-start; flex:1; min-height:0; }
  .fold-frame { border:1px solid rgba(0,0,0,0.12); border-radius:4px; overflow:hidden; box-shadow:0 18px 40px -20px rgba(0,0,0,0.25); }
  .fold-frame img { display:block; width:100%; }
  .thumb-frame { width:230px; height:100%; border:1px solid rgba(0,0,0,0.12); border-radius:4px; overflow:hidden; flex-shrink:0; box-shadow:0 18px 40px -20px rgba(0,0,0,0.2); }
  .thumb-frame img { width:100%; object-fit:cover; object-position:top; display:block; }
  .shot-label { font-size:12px; letter-spacing:0.1em; text-transform:uppercase; opacity:0.55; margin-bottom:10px; }
  .mobile-row { display:flex; gap:40px; justify-content:flex-start; flex:1; align-items:flex-start; }
  .mobile-item { width:280px; }
  .mobile-frame { width:280px; height:730px; border:1px solid rgba(0,0,0,0.14); border-radius:14px; overflow:hidden; box-shadow:0 18px 40px -20px rgba(0,0,0,0.25); }
  .mobile-frame img { width:100%; display:block; }
  .decisions { display:flex; flex-direction:column; gap:18px; }
  .decision { display:flex; gap:18px; align-items:flex-start; }
  .decision .num { font-family:'IBM Plex Mono',monospace; font-size:13px; opacity:0.55; padding-top:3px; }
  .decision .text { font-size:15.5px; line-height:1.55; opacity:0.88; max-width:1100px; }
  .disclaimer-box { border-radius:8px; padding:34px 38px; font-size:14.5px; line-height:1.65; }
  .cover-tag { display:inline-block; font-family:'IBM Plex Mono',monospace; font-size:13px; letter-spacing:0.08em; padding:7px 14px; border-radius:20px; margin-bottom:28px; }
`;

function slideOpen(bg) {
  return `<section class="slide" style="background:${bg}">`;
}

function footerBar(color, mutedColor, num, total, protoLabel) {
  return `<div class="footer-bar" style="color:${mutedColor}; border-top:1px solid rgba(0,0,0,0.08);">
    <span>${esc(protoLabel)}</span>
    <span>${num} / ${total}</span>
  </div>`;
}

function coverSlide(p) {
  return `${slideOpen(p.bg)}
    <div class="pad" style="justify-content:center;">
      <span class="cover-tag" style="background:${p.band}; color:${p.accentDeep};">PROTOTYPE ${p.number} OF 3</span>
      <div class="eyebrow" style="color:${p.muted};">Website Design Presentation</div>
      <h1 style="font-size:80px; line-height:1.08; margin-top:18px; color:${p.ink}; font-weight:${p.coverFontKind === "serif" ? 500 : 700}; max-width:1200px; font-family:'${p.coverFont}', ${p.coverFontKind};">${esc(p.name)}</h1>
      <p style="font-size:19px; line-height:1.6; margin-top:34px; max-width:980px; color:${p.ink}; opacity:0.85;">${esc(p.concept)}</p>
      <div style="margin-top:40px; max-width:900px; border-left:3px solid ${p.accent}; padding-left:22px;">
        <div class="eyebrow" style="color:${p.accentDeep};">Intended impression</div>
        <p style="font-size:15.5px; line-height:1.6; margin-top:8px; color:${p.ink}; opacity:0.82;">${esc(p.impression)}</p>
      </div>
    </div>
  </section>`;
}

function paletteTypeSlide(p) {
  const swatches = p.palette
    .map(
      (s) => `<div class="swatch">
        <div class="chip" style="background:${s.hex};"></div>
        <div class="label" style="color:${p.ink};">${esc(s.name)}</div>
        <div class="hex">${s.hex}</div>
      </div>`
    )
    .join("");
  const types = p.typography
    .map(
      (t) => `<div class="type-item">
        <div class="role" style="color:${p.muted};">${esc(t.role)}</div>
        <div class="name" style="color:${p.ink};">${esc(t.name)}</div>
        <div class="note" style="color:${p.ink};">${esc(t.note)}</div>
      </div>`
    )
    .join("");
  return `${slideOpen("#ffffff")}
    <div class="pad" style="justify-content:center;">
      <div class="eyebrow" style="color:${p.accentDeep};">Palette</div>
      <div class="swatch-row" style="margin-top:20px;">${swatches}</div>
      <div class="eyebrow" style="color:${p.accentDeep}; margin-top:64px;">Typography</div>
      <div class="type-row" style="margin-top:10px;">${types}</div>
    </div>
  </section>`;
}

function sitemapSlide(p) {
  const rows = p.sitemap
    .map(
      (s, i) => `<tr>
        <td class="pnum">0${i + 1}</td>
        <td class="pname" style="color:${p.ink};">${esc(s.page)}</td>
        <td class="pdesc" style="color:${p.ink};">${esc(s.desc)}</td>
      </tr>`
    )
    .join("");
  return `${slideOpen("#ffffff")}
    <div class="pad" style="justify-content:center;">
      <div class="eyebrow" style="color:${p.accentDeep};">Proposed sitemap — 9 pages</div>
      <table class="sitemap" style="margin-top:20px;">${rows}</table>
    </div>
  </section>`;
}

function pageSlide(p, page, index) {
  const dir = `assets/${p.slug}`;
  return `${slideOpen("#ffffff")}
    <div class="pad">
      <div class="eyebrow" style="color:${p.accentDeep};">Page ${index + 1} of 9</div>
      <h2 style="font-size:32px; margin-top:8px; color:${p.ink};">${esc(page.label)}</h2>
      <div class="page-shots" style="margin-top:26px;">
        <div>
          <div class="shot-label" style="color:${p.muted};">Desktop — 1440px (top of page)</div>
          <div class="fold-frame" style="width:1000px;"><img src="${dir}/${page.key}-fold.png" alt=""></div>
        </div>
        <div>
          <div class="shot-label" style="color:${p.muted};">Full page</div>
          <div class="thumb-frame" style="height:694px;"><img src="${dir}/${page.key}-thumb.png" alt=""></div>
        </div>
      </div>
    </div>
  </section>`;
}

function mobileSlide(p) {
  const dir = `assets/${p.slug}`;
  const labelFor = { index: "Home", "practice-area-detail": "Practice Area Detail", contact: "Contact" };
  const items = p.mobilePages
    .map(
      (key) => `<div class="mobile-item">
        <div class="shot-label" style="color:${p.muted};">${esc(labelFor[key] || key)} — 375px</div>
        <div class="mobile-frame"><img src="${dir}/${key}-m.png" alt=""></div>
      </div>`
    )
    .join("");
  return `${slideOpen("#ffffff")}
    <div class="pad">
      <div class="eyebrow" style="color:${p.accentDeep};">Selected mobile views</div>
      <div class="mobile-row" style="margin-top:26px;">${items}</div>
    </div>
  </section>`;
}

function notesSlide(p) {
  const decisions = p.keyDecisions
    .map(
      (d, i) => `<div class="decision">
        <div class="num">0${i + 1}</div>
        <div class="text" style="color:${p.ink};">${esc(d)}</div>
      </div>`
    )
    .join("");
  return `${slideOpen(p.bg)}
    <div class="pad" style="justify-content:center;">
      <div class="eyebrow" style="color:${p.accentDeep};">Best suited for</div>
      <p style="font-size:18px; line-height:1.6; margin-top:14px; max-width:1250px; color:${p.ink};">${esc(p.bestSuitedFor)}</p>
      <div class="eyebrow" style="color:${p.accentDeep}; margin-top:56px;">Key design decisions</div>
      <div class="decisions" style="margin-top:20px;">${decisions}</div>
    </div>
  </section>`;
}

function disclaimerSlide(p) {
  return `${slideOpen(p.dark)}
    <div class="pad" style="justify-content:center;">
      <div class="eyebrow" style="color:${p.accent};">Placeholder-content disclaimer</div>
      <div class="disclaimer-box" style="background:rgba(255,255,255,0.06); color:#F2EFE9; margin-top:16px;">${esc(DISCLAIMERS.prototype)}</div>
      <div class="eyebrow" style="color:${p.accent}; margin-top:30px;">Legal information notice</div>
      <div class="disclaimer-box" style="background:rgba(255,255,255,0.06); color:#F2EFE9; margin-top:16px;">${esc(DISCLAIMERS.legal)}</div>
    </div>
  </section>`;
}

function buildDeck(p) {
  const slides = [
    coverSlide(p),
    paletteTypeSlide(p),
    sitemapSlide(p),
    ...p.pages.map((pg, i) => pageSlide(p, pg, i)),
    mobileSlide(p),
    notesSlide(p),
    disclaimerSlide(p),
  ];
  const total = slides.length;
  // inject footer bars (skip cover slide, index 0)
  const withFooters = slides
    .map((html, i) => {
      if (i === 0) return html;
      const bar = footerBar(p.accent, p.muted, i + 1, total, `${p.name} — Prototype ${p.number}`);
      return html.replace("</section>", `${bar}</section>`);
    })
    .join("\n");

  return `<!doctype html><html><head><meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&${p.googleFontImport}&display=swap" rel="stylesheet">
  <style>${BASE_CSS}</style></head><body>${withFooters}</body></html>`;
}

// ---- Comparison deck ----
function comparisonCover() {
  return `${slideOpen("#111315")}
    <div class="pad" style="justify-content:center; color:#F2EFE9;">
      <div class="eyebrow" style="color:#B9AE9A;">Design Direction Comparison</div>
      <h1 style="font-size:64px; margin-top:16px; font-weight:700;">Three Prototypes, Side by Side</h1>
      <p style="font-size:17px; margin-top:22px; max-width:1100px; opacity:0.82; line-height:1.6;">
        Advocate Arjun Mehta — a fictional placeholder identity used consistently across all three
        directions, so this comparison is about design, not content. All three are static prototypes
        prepared for review; nothing on them is real.
      </p>
    </div>
  </section>`;
}

function comparisonHomepages() {
  const items = PROTOTYPES.map(
    (p) => `<div style="flex:1;">
      <div class="shot-label" style="color:#B9AE9A;">${esc(p.number)} — ${esc(p.name)}</div>
      <div class="fold-frame" style="width:100%;"><img src="assets/${p.slug}/index-fold.png" alt="" style="width:100%;"></div>
    </div>`
  ).join("");
  return `${slideOpen("#111315")}
    <div class="pad">
      <div class="eyebrow" style="color:#B9AE9A;">Home page — top of page, all three directions</div>
      <div style="display:flex; gap:28px; margin-top:22px;">${items}</div>
    </div>
  </section>`;
}

function comparisonProfile(p) {
  return `${slideOpen("#ffffff")}
    <div class="pad">
      <div style="display:flex; gap:14px; align-items:center;">
        <span style="width:14px; height:14px; border-radius:3px; background:${p.accent}; display:inline-block;"></span>
        <div class="eyebrow" style="color:${p.accentDeep};">${esc(p.number)} — ${esc(p.name)}</div>
      </div>
      <h2 style="font-size:30px; margin-top:14px; color:${p.ink}; max-width:1100px;">${esc(p.impression)}</h2>
      <div style="display:flex; gap:60px; margin-top:36px;">
        <div style="flex:1;">
          <div class="eyebrow" style="color:${p.muted};">Key strengths</div>
          <ul style="margin-top:12px; padding-left:20px; font-size:14.5px; line-height:1.7; color:${p.ink};">
            ${p.shortStrengths.map((d) => `<li style="margin-bottom:8px;">${esc(d)}</li>`).join("")}
          </ul>
        </div>
        <div style="flex:1;">
          <div class="eyebrow" style="color:${p.muted};">Best suited for</div>
          <p style="margin-top:12px; font-size:14.5px; line-height:1.7; color:${p.ink};">${esc(p.bestSuitedFor)}</p>
        </div>
      </div>
    </div>
  </section>`;
}

function comparisonTable() {
  const rows = [
    ["Palette", ...PROTOTYPES.map((p) => p.palette.map((s) => s.name).join(", "))],
    ["Typography voice", ...PROTOTYPES.map((p) => p.typography.map((t) => t.name).join(" + "))],
    ["Navigation feel", "Minimal text nav, no button", "Nav + filled enquiry button", "Nav + pill-shaped buttons"],
    ["Signature device", "Ruled docket schedule", "Rule-and-tick ledger grid", "Formal / plain-language pairing"],
    ["Best for", "Senior generalist litigator", "Business & founder-facing advisory", "Individuals, families, mediation"],
  ];
  const body = rows
    .map(
      (r) => `<tr>
        <td style="font-weight:600; width:220px; color:#23302F;">${esc(r[0])}</td>
        <td style="color:#2B2825;">${esc(r[1])}</td>
        <td style="color:#23302F;">${esc(r[2])}</td>
        <td style="color:#2E2721;">${esc(r[3])}</td>
      </tr>`
    )
    .join("");
  return `${slideOpen("#ffffff")}
    <div class="pad">
      <div class="eyebrow" style="color:#555;">At a glance</div>
      <table class="sitemap" style="margin-top:20px;">
        <tr>
          <td></td>
          <td style="font-weight:700; color:#8C6A4A;">01 — Quiet Authority</td>
          <td style="font-weight:700; color:#2F6B5B;">02 — Contemporary Counsel</td>
          <td style="font-weight:700; color:#8C5432;">03 — Human-Centered Advocate</td>
        </tr>
        ${body}
      </table>
    </div>
  </section>`;
}

function comparisonSelection() {
  return `${slideOpen("#F7F3EC")}
    <div class="pad" style="justify-content:center;">
      <div class="eyebrow" style="color:#7A5A3C;">Making a selection</div>
      <h2 style="font-size:34px; margin-top:14px; color:#2B2825; max-width:1100px;">Any of these responses is useful to us:</h2>
      <ul style="margin-top:26px; padding-left:24px; font-size:17px; line-height:2; color:#2B2825; max-width:1100px;">
        <li>&ldquo;I prefer Prototype 1.&rdquo;</li>
        <li>&ldquo;I prefer the structure of 2, but the warmth of 3.&rdquo;</li>
        <li>&ldquo;I like the typography from 1 and the navigation from 2.&rdquo;</li>
        <li>&ldquo;None of these — here is what I'd want instead.&rdquo;</li>
      </ul>
      <p style="margin-top:36px; font-size:14.5px; color:#6B6259; max-width:1000px;">
        Once a direction (or combination) is chosen, we move to replacing every placeholder with your
        real details — see the accompanying Client Content Questionnaire.
      </p>
    </div>
  </section>`;
}

function buildComparisonDeck() {
  const slides = [
    comparisonCover(),
    comparisonHomepages(),
    ...PROTOTYPES.map(comparisonProfile),
    comparisonTable(),
    comparisonSelection(),
  ];
  return `<!doctype html><html><head><meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>${BASE_CSS}</style></head><body>${slides.join("\n")}</body></html>`;
}

// ---- write files ----
for (const p of PROTOTYPES) {
  const html = buildDeck(p);
  const outPath = path.join(PDF_DIR, `_deck-${p.slug}.html`);
  fs.writeFileSync(outPath, html);
  console.log("Wrote", outPath);
}
const compHtml = buildComparisonDeck();
fs.writeFileSync(path.join(PDF_DIR, "_deck-comparison.html"), compHtml);
console.log("Wrote", path.join(PDF_DIR, "_deck-comparison.html"));
