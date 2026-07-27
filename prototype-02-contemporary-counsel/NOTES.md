# Prototype 02 — Contemporary Counsel

## Concept

A modern, business-literate advocate's site built on an **editorial ledger grid**. The whole
layout is organised as labelled records: a hairline rule opens each section, a small monospace
label sits in the left column as the "field name", and the content sits in the wide right column
as the "value". Nothing is decorated; the structure itself does the explaining.

The positioning is founder- and business-facing. Copy is precise and commercially plain-spoken
("the provision negotiated last is often the first one to matter"), never promotional, and never
comparative. No superlatives, no outcome claims, no gavels or scales.

## Intended impression

Precise. Current. Unfussy. The kind of independent counsel a founder or a CFO would be
comfortable forwarding to their board — contemporary enough to feel like a practice that
understands how businesses actually run, restrained enough to read as serious.

## Palette

| Token | Hex | Use |
|---|---|---|
| `paper` | `#FAFAF8` | Page background — off-white, very slightly warm |
| `surface` | `#F1F1EC` | Alternating section bands, sidebar panel, form ground |
| `ink` | `#23302F` | Primary text — charcoal with a green undertone |
| `muted` | `#5F6E6C` | Secondary text and all monospace labels (5.19:1 on paper) |
| `line` | `#E3E3DC` | Hairline rules and input borders |
| `accent` | `#2F6B5B` | Mineral green — links, primary button, rule ticks (6.02:1 on paper) |
| `accentdk` | `#27594C` | Primary button hover |
| `accentsoft` | `#E8F0EC` | Nav enquiry button hover ground |
| `accentlt` | `#7FB3A0` | Accent on dark ground (6.57:1 on `deep`) |
| `deep` | `#1B2624` | Dark band on the home page, and the sitewide footer |

Deliberately **not** the default legal palette (no navy-and-gold) and **not** the
cream/serif/terracotta look. Mineral green reads professional without reading corporate-blue, and
it is used sparingly enough to stay an accent.

## Typography

- **Display — Schibsted Grotesk** (500/600, tracking −0.02 to −0.035em). A Nordic editorial
  grotesque: confident and current without the techy quirk of Space Grotesk or the SaaS default
  feel of Manrope. Headings are refined rather than oversized — the h1 tops out at 3.625rem.
- **Body — Inter** (400/500) at 17px with 1.75–1.85 line height, capped at a 38rem measure so
  long passages stay comfortable.
- **Utility — IBM Plex Mono** (400) at 11px, uppercase, 0.14em tracking. Used *only* for
  metadata: section eyebrows, timeline years, enrolment number, photo captions, prototype notes.
  It functions as a records/reference voice, which suits a practice built on documents.

## Sitemap

```
index.html                  Home — hero, at-a-glance, four practice areas, approach (dark band),
                            insights preview, contact band
about.html                  Professional profile — biography, credentials, timeline
practice-areas.html         All four areas + hero index list + instructing-the-chambers band
practice-area-detail.html   Corporate Advisory (the built-out template)
experience.html             Three illustrative matters, timeline, forums
insights.html               Three article entries
article-detail.html         "Understanding Arbitration Clauses in Commercial Contracts" (~330 words)
contact.html                Enquiry form + office details
disclaimer.html             Prototype disclosure + legal information notice + placeholder inventory
```

Every page carries the same sticky header and dark footer; the footer links to `disclaimer.html`
sitewide. Detail pages light up their parent nav item (`practice-area-detail` → Practice,
`article-detail` → Insights).

## Best suited for

An advocate whose clients are **businesses, founders and institutions** rather than individuals —
someone who does advisory work alongside disputes and wants the site to read as commercially
fluent. It suits a practitioner comfortable with a modern, slightly editorial presentation, and
who wants credibility to come from clarity and structure rather than from traditional legal
iconography.

Less suited to a practice built on personal or family matters, where warmth should lead.

## Key design decisions

1. **The rule-and-tick as the single signature.** Every section opens with a full-width hairline
   whose first 3.5rem is mineral green. It is the one memorable device on the page, so it is
   rationed: the tick marks a *section*, never a repeated sub-item. An earlier pass put it on
   every timeline row and every card, which turned a signature into wallpaper — the review loop
   split it into `.sec` (with tick) and `.rule` (plain hairline) and the page went quiet.

2. **Label-left / content-right instead of card grids.** Content is set as records in a 12-column
   grid — mono label in columns 1–3, prose in 4–12 — rather than in boxed cards. It gives the
   generous whitespace the design system asks for, scales cleanly from three columns to one, and
   avoids the repetitive-card look. Three-across sub-grids were removed from the approach band
   and the practice detail page after screenshots showed 200px columns of thin, tall text.

3. **Photography pulled toward the palette.** The stock imagery is warm and the palette is cool
   mineral, so images carry a CSS filter (`saturate(0.72)` for portraits, `saturate(0.45)` for
   the golden interior) rather than sitting against the design as foreign objects.

Motion is a page-load stagger on hero elements plus an IntersectionObserver fade-up on sections,
both fully disabled under `prefers-reduced-motion`. Links use a left-to-right underline draw.
Focus is a single 2px mineral-green ring, switching to `accentlt` on dark grounds.

## Shared images used

| File | Where |
|---|---|
| `portrait-standing-desk.jpg` | `index.html` hero (right column); `about.html` hero |
| `office-window-light.jpg` | `index.html` dark "How the practice works" band |
| `building-modern-concrete.jpg` | `practice-areas.html` closing band; `contact.html` sidebar |
| `portrait-seated-alt.jpg` | `practice-area-detail.html` sidebar |

Not used from the shared set: `portrait-seated.jpg`, `portrait-standing-casual.jpg`,
`arch-corridor-warm.jpg`, `arch-corridor-white.jpg`, and all three textures (reserved for
prototypes 1 and 3).

Every `<img>` is preceded by an HTML comment marking it a placeholder, and every image has a
discreet monospace caption noting it is illustrative. To swap in real photography, replace the
file at the same path or update the `src`.

## Prototype-status notes

- All identity, credentials, matters, articles and contact details are the fictional placeholders
  from `shared/content.md`. The disclaimer page inventories exactly what is invented.
- Each illustrative matter carries the mandatory verbatim caption.
- The enquiry form is inert: submit is intercepted in JS and shows a static notice. Nothing is
  transmitted or stored.
- Two of the three insight titles are index entries only; the page says so in plain text.
- One practice-area detail page is built out to demonstrate the template; the page says so.
- Pages carry `noindex, nofollow` while this is a review prototype.

## Running it

Plain static HTML with Tailwind via CDN — no build step. Images are referenced at
`../shared/images/`, so serve from the **repository root**, not from this folder:

```
python3 -m http.server 8002        # run from lawyer-website-prototypes/
# then open http://localhost:8002/prototype-02-contemporary-counsel/index.html
```
