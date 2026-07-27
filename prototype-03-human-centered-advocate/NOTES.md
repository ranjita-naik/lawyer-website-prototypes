# Prototype 03 — Human-Centered Advocate

## Design concept

A warm, plainly-spoken advocate's website that says every legal thing twice — once in the
language of the courts and once in the language people actually use — so that a person arriving
with a family, property or succession problem can recognise their own situation on the page.

## Intended impression

Empathetic, attentive and accessible, without ever slipping into casual or sentimental. A visitor
should feel that this is a serious professional who will explain things to them properly, work
with them directly, and tell them plainly when settlement is the better route. Warmth here comes
from clarity and candour rather than from decoration.

## Palette

| Token | Hex | Use |
|---|---|---|
| `sand` | `#F5EFE6` | Page background — warm parchment |
| `paper` | `#FBF7F1` | Cards, alternating section bands, form fields |
| `ink` | `#2E2721` | Headings and emphasised text |
| `body` | `#574C42` | Body copy (7.6:1 on sand) |
| `muted` | `#7A6E60` | Captions, placeholder notes, eyebrows (4.6:1 on sand) |
| `clay` | `#B0704B` | Accent marks — nav underline, step numerals, timeline dots, list bullets |
| `claydeep` | `#8C5432` | Accent text, links, primary button fill (5.5:1 on sand) |
| `sage` | `#6E7F63` | Reserved secondary accent |
| `sagedeep` | `#55654B` | The plain-language italic lines (5.3:1 on sand) |
| `line` | `#E4DACB` | Hairline rules and borders |
| `bark` | `#2B2520` | Footer background |

Accents are deliberately rationed: clay appears only as small marks and one button per section;
sage appears only on the plain-language restatements. No gradients, no shadows beyond a single
very soft card lift.

## Typography

- **Display / headings — Newsreader** (Google Fonts), weights 300 and 400, roman and italic.
  A warm humanist serif with a genuine, speaking italic. Used at 300 for the largest headings so
  they read as considered rather than declamatory. Also carries the pull-statement, the year
  labels in the timeline, the matter quotations and the step numerals.
- **Body / UI — Karla** (Google Fonts), weights 400/500/600. A friendly grotesque with enough
  character to avoid the default-system look, set at 17px / 1.7 for long-form comfort.
- **Utility** — Karla 600 at 0.7rem with 0.19em tracking, uppercase, for eyebrows and field
  labels. No third family; the utility role is a treatment, not a typeface.
- Headings never exceed weight 400. Body measure is capped at 36rem (`.measure`) and article
  prose at 38rem.

## Sitemap

| Page | Description |
|---|---|
| `index.html` | Home — portrait hero, fact rail, "one advocate" introduction, the four practice areas with their plain-language lines, arch image break with a statement of approach, the three-step "what to expect" sequence, insight teasers, contact band. |
| `about.html` | Professional profile — 165-word biography, formal credentials and enrolment table, and a "How this office works" section of four things worth knowing before writing in. |
| `practice-areas.html` | Index of the four areas, each set out twice (formal description plus plain-language line) with a short list of the matters each covers. |
| `practice-area-detail.html` | Family and Succession Matters in depth — what these matters involve, the three routes available, matters commonly handled, with the related illustrative matter and related reading in the side rail. |
| `experience.html` | Professional timeline 2011–2023 and the three illustrative matters, each with the mandatory caption, followed by a short note on why settlement is raised early. |
| `insights.html` | Three article entries — one full note plus two illustrative titles with teasers, all marked as prototype content. |
| `article-detail.html` | "A Practical Note on Mediation as a First Step" — ~470 words of general informational prose with an "In short" side rail, closing with the standard legal disclaimer. |
| `contact.html` | Reassuring enquiry form (name, email, optional phone, nature of enquiry, message), full office information, a "before you write" card, and a three-step "after you write in" explainer. |
| `disclaimer.html` | Both mandatory disclaimers in full, plus an itemised list of exactly what on the site is placeholder content, and a no-solicitation note. |

Navigation is the same six items on all nine pages (Home, About, Practice Areas, Experience,
Insights, Contact); the disclaimer is footer-linked from every page.

## Best suited for

This direction suits an advocate whose work brings him into contact with individuals and families
rather than only institutions — succession and inheritance, partition of family property,
tenancy, and civil disputes where the parties will still have to deal with one another after the
matter ends. It is the right choice if the practice wants to be found by people who have never
instructed a lawyer before and are anxious about the process, and if the advocate is comfortable
being visibly the single point of contact. It would be the wrong choice for a practice
positioning itself primarily for corporate clients or panel work, where a cooler, more
institutional register carries more authority.

## Key design decisions

**1. The plain-language line is the site's signature.** Every formal legal heading — each
practice area, each illustrative matter, each article — is followed by the same idea restated in
ordinary words, set in Newsreader italic in muted sage. "Family and Succession Matters" becomes
"When a family has to settle what it has held together." This is the human-centering made
structural rather than decorative: it is the one device a visitor will remember, it costs no
extra visual weight, and it does real work for someone who does not know the legal name for their
problem.

**2. The arch, borrowed from the architecture, instead of a rectangle.** The portrait and the
section-break image are cropped to a soft top arch drawn from the sandstone corridor photograph.
It softens the two largest visual elements on the site without a single rounded card, cute
illustration or soft-focus stock photo — warmth from architecture rather than from sentiment.
Everything else stays disciplined: 4px radii, hairline rules, one very soft card shadow.

**3. Process is treated as content, not as fine print.** "What happens after you contact the
office" gets a full section on the home page and again on contact, and the About page carries
"Four things worth knowing before you write in," including "No promises about outcomes." For a
nervous first-time client the process is the most reassuring information on the site, and putting
it in the open is also what keeps the warmth compliant — the copy reassures by being candid
rather than by promising anything. Numbered markers are used only here, where the content is a
genuine sequence in time.

## Shared images used

| File | Where | Notes |
|---|---|---|
| `portrait-standing-casual.jpg` | Home hero (arch-cropped, right column); About page profile | The warmest of the shared portrait set. Carries a "Photograph used for illustrative purposes only" caption in both places. |
| `arch-corridor-warm.jpg` | Home section break beside the statement of approach; Experience page beside the note on settlement | Soft-arch crop; source of the site's arch motif. |
| `texture-linen.jpg` | Home "what to expect" band; Practice Areas closing band; Insights closing band; Contact "what happens next" band | Applied via `.tex-linen` at 17% opacity with `multiply` blending behind a solid sand ground — never at full strength behind body text. |
| `texture-paper-kraft.jpg` | Home fact rail; About credentials section; Experience timeline section | Same treatment via `.tex-kraft`, used to distinguish the two textured band types. |

Every `<img>` carries an HTML comment marking it as a temporary placeholder, and the disclaimer
page lists the Unsplash photographers. No gavels, scales, handshakes or family stock photography
anywhere.

## Technical notes

- Static HTML, Tailwind via CDN with an inline `tailwind.config` per page for the palette and
  fonts; shared `assets/site.css` for the arch, textures, prose rhythm and components; shared
  `assets/site.js` for the two behaviours (mobile nav toggle, IntersectionObserver reveal).
- Images resolve via `../shared/images/…`, so the prototype must be served from the project root
  (`python3 -m http.server` at `lawyer-website-prototypes/`), not from inside this folder.
- Accessibility: skip link on every page, semantic landmarks, `aria-current` on the active nav
  item, labelled form fields with hints, visible `:focus-visible` rings in claydeep, alt text on
  every image, and body/caption contrast at or above 4.5:1.
- Motion: opacity plus 10px rise on scroll reveal, and colour/border transitions on links and
  buttons. Both disabled under `prefers-reduced-motion`. No `transition-all`, no default Tailwind
  blue or indigo.
