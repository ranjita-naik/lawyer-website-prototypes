# Prototype 01 — Quiet Authority

## Design concept

A restrained, editorial advocate's website set out like a well-kept docket: ruled sections,
a single portrait, and prose that is allowed to run long because nothing else on the page is
competing for attention.

## Intended impression

Wisdom, discretion and quiet confidence — the sense of a senior, independent practitioner who
does not need to raise his voice to be taken seriously. A visitor should feel the site is
unhurried on purpose, not old-fashioned: the whitespace and the ruled dividers are doing the work
that a busier site would try to do with icons, cards and colour.

## Palette

| Token | Hex | Use |
|---|---|---|
| `ivory` | `#F7F3EC` | Page background |
| `parchment` | `#EFE8DC` | Alternating section bands (facts rail, biography, method break, chambers) |
| `stone` | `#DCD3C4` | Hairline rules, borders |
| `stone-deep` | `#CFC4B2` | Secondary rules within `dl`/`address` blocks |
| `charcoal` | `#2B2825` | Headings, body emphasis |
| `ink` | `#211F1C` | Footer background |
| `bronze` | `#8C6A4A` | Accent — corner mark on the hero portrait, link underlines on hover |
| `bronze-deep` | `#7A5A3C` | Reserved deeper accent |
| `bronze-light` | `#C6A17A` | Footer eyebrow ("Advocate · Bombay High Court") on dark ground |
| `muted` | `#6B6259` | Eyebrows, captions, placeholder notes |

Bronze is used sparingly — a corner mark on the hero image, hover states on rules and links,
and one line of footer type. Nothing else in the palette carries any saturation.

## Typography

- **Display / headings — Newsreader** (Google Fonts), light weights, italic used once for the
  "On method" pull-statement. Set large but never bold, so headings read as considered rather
  than declarative.
- **Body — Source Serif 4** (Google Fonts), for all long-form prose (biography, method note,
  article body). Chosen for comfortable extended reading at the 1.0625rem / 1.85 line-height used
  throughout.
- **UI — Archivo** (Google Fonts), uppercase with wide tracking, for eyebrows, nav labels, buttons
  and field labels — the one sans-serif in the system, used only for small utility text so it
  never competes with the serif voice.

## Sitemap

| Page | Description |
|---|---|
| `index.html` | Home — thesis statement and portrait, three quiet facts, profile-in-brief, five practice areas set as a ruled "schedule," a method break beside the corridor image, two selected matters, three insight entries, chambers/contact band. |
| `about.html` | Professional Profile — full biography, enrolment/education/forums record, and "Three working habits" (attentive, direct, matter-specific). |
| `practice-areas.html` | Index of all five practice areas with descriptions and a "note on scope." |
| `practice-area-detail.html` | Constitutional and Administrative Matters in depth — long-form explanation, portrait, "matters typically include" list, forum. |
| `experience.html` | Professional timeline 2011–2023 and the three illustrative matters, each with the mandatory caption, plus the enrolment/bar/forum record repeated for reference. |
| `insights.html` | Three article entries — one full note plus two illustrative titles with teasers. |
| `article-detail.html` | "When Should a Business Consider Arbitration Over Litigation?" — full informational article with a headnote and "also in this series" rail, closing with the standard legal disclaimer. |
| `contact.html` | Office information (address, telephone, email, hours, each captioned as placeholder) beside a restrained enquiry form. |
| `disclaimer.html` | Both mandatory notices in full, plus an itemised "where placeholder content appears" table. |

Navigation is the same five items (Profile, Practice, Experience, Insights, Contact) on all nine
pages, with the firm name doubling as the Home link; the disclaimer is footer-linked from every
page.

## Best suited for

This direction suits an advocate positioning himself as an established, independent generalist
litigator — someone whose main asset is judgment built up over years, appearing personally before
the High Court and in arbitration, rather than a large-team practice. It works well for a
practitioner comfortable with long-form writing and a slower, more literary voice. It would be the
wrong choice for a practice wanting to foreground speed, technology, or a large advisory team, or
one whose primary audience skims rather than reads.

## Key design decisions

**1. A single vertical "docket" rail, not a conventional sidebar.** A thin vertical line and a
rotated label ("Practice Overview," "Professional Profile," etc.) run down the far left edge on
desktop, present on every page. It borrows the feel of a filed record without becoming a literal
skeuomorphic device — restraint expressed as a structural constant rather than a one-off flourish.

**2. Content is set as a "schedule," not as cards.** Practice areas, matters and articles are
laid out as ruled rows (title left, description right, hairline rule between), echoing a docket or
index page rather than a grid of boxes. This keeps five practice areas and three articles from
ever feeling like a product grid, which would have undercut the "quiet authority" positioning.

**3. Only one full-bleed dark section — the footer.** Every other section stays within the
ivory/parchment range so the eye never has to adjust to a loud contrast jump; the footer's dark
ground is reserved entirely for the closing chambers/disclaimer block, which gives the page a
single, deliberate close rather than a mid-page interruption.

## Shared images used

| File | Where | Notes |
|---|---|---|
| `portrait-seated.jpg` | Home hero; About page profile | Primary portrait, captioned "Photograph used for illustrative purposes in this prototype" in both places. |
| `arch-corridor-white.jpg` | Home "on method" section break; Practice Area detail page | Minimal pale corridor, used to signal restraint rather than warmth. |
| `texture-paper-parchment.jpg` | Disclaimer page hero band only | Applied at ~12% opacity behind the page title — never behind body text. |

Every `<img>` carries an HTML comment marking it as a temporary placeholder, and the disclaimer
page lists the Unsplash photographer/licence in full. No gavels, scales, handshakes or courtroom
cliché imagery anywhere.

## Technical notes

- Static HTML, Tailwind via CDN with an inline `tailwind.config` per page for the palette and
  fonts; shared `assets/site.css` for the docket rail, "schedule" rows and reveal treatment;
  shared `assets/site.js` for the mobile nav toggle and IntersectionObserver scroll-reveal.
- Images resolve via `../shared/images/…`, so the prototype must be served from the project root
  (`python3 -m http.server` at `lawyer-website-prototypes/`), not from inside this folder.
- Accessibility: skip link on every page, semantic landmarks, visible focus states, labelled form
  fields, alt text on every image, body/caption contrast checked against the ivory and parchment
  grounds.
- Motion: opacity plus a small rise on scroll reveal, colour transitions on links and nav items.
  Disabled under `prefers-reduced-motion`. No `transition-all`, no default Tailwind blue or indigo.
- Reviewed at 1440 / 768 / 375px across all nine pages; no overflow, no broken layouts, nav and
  footer markup consistent across all pages.
