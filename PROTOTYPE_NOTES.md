# Prototype Notes

Internal notes accompanying the three website prototypes prepared for the prospective client (a
practicing Indian lawyer, positioning not yet decided). Read alongside `CLIENT_CONTENT_QUESTIONNAIRE.md`.

## Summary of the three concepts

| | Prototype 1 — Quiet Authority | Prototype 2 — Contemporary Counsel | Prototype 3 — Human-Centered Advocate |
|---|---|---|---|
| Positioning | Senior, independent generalist litigator | Advisor to businesses, founders, institutions | Advocate for individuals, families, mediation |
| Voice | Editorial, literary, unhurried | Precise, commercially plain-spoken | Warm, plainly-spoken, candid about process |
| Signature device | Ruled "docket" schedule + vertical rail | Rule-and-tick ledger grid, mono metadata | Formal heading paired with a plain-language line |
| Palette | Ivory / stone / charcoal / bronze | Off-white / mineral green / deep charcoal-green | Sand / clay / sage, warm neutrals |
| Typography | Newsreader + Source Serif 4 + Archivo | Schibsted Grotesk + Inter + IBM Plex Mono | Newsreader + Karla |

Full detail (palette hex values, typography rationale, sitemap, key decisions, image usage) is in
each prototype's own `NOTES.md` and in the corresponding PDF deck.

## Sitemap assumptions

All three prototypes use the same 9-page structure requested in the brief: Home, About/Professional
Profile, Practice Areas (index), Practice Area Detail (one built-out example), Experience/Selected
Matters, Insights/Articles (index), Article Detail (one full example), Contact/Office Information,
Disclaimer/Professional Notice. Only one practice-area detail page and one full article were built
per prototype, chosen as the strongest demonstration of that prototype's voice — the other practice
areas/articles exist as index entries only, clearly marked as illustrative titles. If a direction is
chosen, the remaining detail/article pages would be built out from the same template before launch.

## Fictional content assumptions

A single fictional identity — **Advocate Arjun Mehta**, Mumbai, in practice since 2011 — is used
identically across all three prototypes (name, enrolment number, education, timeline, office
address, contact details), defined once in `shared/content.md`. Only the prose voice and which
subset of 8 pool practice areas / 6 pool article titles / 5 pool illustrative matters is
foregrounded varies by prototype, so that comparing the three is a comparison of design, not
content. Every illustrative matter carries a mandatory verbatim caption; every prototype's
disclaimer page states in full that the identity, photograph, credentials and matters are
invented. None of the fictional numbers resolve to real services (phone number is a non-dialable
placeholder, email uses the reserved `.example` domain).

## Unresolved client questions

See `CLIENT_CONTENT_QUESTIONNAIRE.md` for the full list. The most consequential open questions:
- Which positioning (senior generalist / business-advisory / individuals & families) is closest to
  how he actually wants to be found — or whether it's a mix.
- Whether he wants one dominant practice-area emphasis or a broader listing.
- Real photography vs. continuing with stock imagery for longer than the prototype stage.
- His own preferred tone (formal vs. warm) independent of which visual direction he prefers —
  the brief explicitly allows mixing, e.g. "the structure of 2 but the warmth of 3."
- Any Bar Council of India advertising/solicitation rules specific to his practice area or state
  that should further constrain the final copy (we've written conservatively, but this needs his
  or a compliance reviewer's confirmation, not ours).

## Assets used and sources

All temporary imagery is sourced from Unsplash under the Unsplash License (free for commercial use)
and documented in full in `shared/ASSETS.md`, including photographer credit for every file. In
summary: one real photographer's photoshoot of a single model is reused across all three
prototypes as the "Arjun Mehta" placeholder portrait (four crops: seated, standing-formal,
seated-alt, standing-casual), so the same face appears consistently; plus architecture, texture and
interior shots split by prototype mood. No gavels, scales-of-justice, staged handshakes, or
AI-generated portraits were used anywhere. Every `<img>` tag carries an inline HTML comment marking
it as a placeholder, and every prototype's disclaimer page lists the imagery as licensed stock.

## Sources of inspiration

Research prior to building covered: contemporary Indian advocate/law-firm websites, international
boutique law-firm sites, editorial professional-profile sites, and general premium
professional-services design (restrained typography, generous whitespace, label-left/content-right
records instead of card grids, arch/architectural motifs as a substitute for literal cultural
iconography). No specific site's layout, copy, or visual system was reproduced; each prototype's
signature device (docket rail, rule-and-tick ledger, plain-language pairing) was designed
specifically for this brief.

## Accessibility notes

All nine pages of all three prototypes include: a skip-to-content link, semantic
header/nav/main/footer landmarks, visible focus states, labelled form fields (with a hint for
optional fields), alt text on every image, and `prefers-reduced-motion` handling for all scroll/
reveal animation. Contrast was checked against each prototype's own ground colors (documented with
ratios in Prototype 2 and 3's `NOTES.md`; Prototype 1 uses a lower-contrast warm-ivory system
throughout and should get an explicit contrast pass alongside any real content, particularly the
smallest caption text). All three were reviewed at 375 / 768 / 1440px with no horizontal overflow.

## Items requiring professional or legal review

- **All wording is placeholder and none of it has been reviewed by the client or by a compliance
  professional.** The two disclaimers used throughout are drafted conservatively (informational
  framing, no outcome or solicitation language, no comparisons to other advocates/firms) but should
  be checked against Bar Council of India rules and any state bar association-specific guidance
  before real content is published.
- The enquiry form on every prototype is inert (submits nothing) and says so; a real form will need
  a data-handling/privacy statement appropriate to how enquiries are actually processed.
- The "illustrative matter" captions are load-bearing from a professional-conduct standpoint — if
  real matters are used later, each needs to be re-confirmed as sufficiently anonymized and
  non-identifying, ideally by the advocate himself.
- Enrolment number, bar association membership, and court/forum lists are entirely invented and
  must be replaced with verified real details before any version of this site is used publicly.

## Cross-prototype design observation

Two of three prototypes (1 and 3) independently arrived at a "label on the left, content on the
right, separated by a hairline rule" layout for listing practice areas, since the design system
discourages card grids. This is judged to be a legitimate convergence rather than template reuse —
each site's version differs materially in typography, color, the docket rail (1) vs. the
plain-language pairing (3), and neither shares layout with Prototype 2's card-based grid — but it's
worth being aware of if a fourth direction is ever requested, so it doesn't become a fourth ruled
list by default.

## Screenshot review

Each prototype went through at least two full screenshot-and-fix passes at 1440 / 768 / 375px
across all nine pages before being marked presentation-ready (see each prototype's build history;
Prototype 1's final pass and `NOTES.md` were completed directly rather than through an agent, after
two agent-run passes had already landed the design). All three were then cross-checked together for
accidental sameness in hero layout, navigation, cards, color, imagery and CTAs.
