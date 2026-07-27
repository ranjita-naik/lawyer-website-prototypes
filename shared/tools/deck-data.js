// Structured content for the PDF decks, drawn from each prototype's NOTES.md.
const DISCLAIMERS = {
  prototype:
    "This website is a design prototype prepared for review purposes only. The name, photograph, credentials, biography, matters, articles and contact details shown are fictional placeholders created solely to demonstrate the design and structure of the website. They do not describe a real person, and should not be relied upon for any purpose.",
  legal:
    "The information presented on this website is for general informational purposes only and does not constitute legal advice. Viewing this website or contacting the advocate does not, by itself, create an advocate-client relationship.",
};

const PAGES_COMMON = [
  { key: "index", label: "Home" },
  { key: "about", label: "About / Professional Profile" },
  { key: "practice-areas", label: "Practice Areas" },
  { key: "practice-area-detail", label: "Practice Area Detail" },
  { key: "experience", label: "Experience / Selected Matters" },
  { key: "insights", label: "Insights / Articles" },
  { key: "article-detail", label: "Article Detail" },
  { key: "contact", label: "Contact / Office Information" },
  { key: "disclaimer", label: "Disclaimer / Professional Notice" },
];

const PROTOTYPES = [
  {
    slug: "prototype-01-quiet-authority",
    number: "01",
    name: "Quiet Authority",
    accent: "#8C6A4A",
    accentDeep: "#7A5A3C",
    bg: "#F7F3EC",
    band: "#EFE8DC",
    ink: "#2B2825",
    muted: "#6B6259",
    dark: "#211F1C",
    coverFont: "Newsreader",
    coverFontKind: "serif",
    googleFontImport: "family=Newsreader:opsz,wght@6..72,300..500",
    concept:
      "A restrained, editorial advocate's website set out like a well-kept docket: ruled sections, a single portrait, and prose that is allowed to run long because nothing else on the page is competing for attention.",
    impression:
      "Wisdom, discretion and quiet confidence — the sense of a senior, independent practitioner who does not need to raise his voice to be taken seriously. Unhurried on purpose, not old-fashioned.",
    palette: [
      { name: "Ivory", hex: "#F7F3EC" },
      { name: "Parchment", hex: "#EFE8DC" },
      { name: "Stone", hex: "#DCD3C4" },
      { name: "Charcoal", hex: "#2B2825" },
      { name: "Bronze", hex: "#8C6A4A" },
    ],
    typography: [
      { role: "Display / Headings", name: "Newsreader", note: "light weights; italic reserved for one pull-statement" },
      { role: "Body", name: "Source Serif 4", note: "long-form reading at 1.0625rem / 1.85 line height" },
      { role: "UI / Labels", name: "Archivo", note: "uppercase, wide tracking — eyebrows, nav, buttons" },
    ],
    sitemap: [
      { page: "Home", desc: "Thesis statement, portrait, three quiet facts, profile-in-brief, five practice areas as a ruled schedule, method break, two matters, three insights, chambers band." },
      { page: "About / Professional Profile", desc: "Full biography, enrolment/education/forums record, and “Three working habits.”" },
      { page: "Practice Areas", desc: "Index of all five practice areas with descriptions and a note on scope." },
      { page: "Practice Area Detail", desc: "Constitutional and Administrative Matters in depth, with a “matters typically include” list." },
      { page: "Experience / Selected Matters", desc: "Professional timeline 2011–2023 and three illustrative matters, each captioned." },
      { page: "Insights / Articles", desc: "Three article entries — one full note plus two illustrative titles." },
      { page: "Article Detail", desc: "“When Should a Business Consider Arbitration Over Litigation?” in full, with a headnote." },
      { page: "Contact / Office Information", desc: "Office information beside a restrained enquiry form." },
      { page: "Disclaimer / Professional Notice", desc: "Both mandatory notices in full, plus an itemised placeholder-content table." },
    ],
    bestSuitedFor:
      "An advocate positioning himself as an established, independent generalist litigator — someone whose main asset is judgment built up over years, appearing personally before the High Court and in arbitration. Suits a practitioner comfortable with a slower, literary voice. Not the right fit for a practice wanting to foreground speed, technology, or a large advisory team.",
    keyDecisions: [
      "A single vertical “docket” rail runs down the far left edge on desktop on every page — restraint expressed as a structural constant, not a one-off flourish.",
      "Content is set as a ruled “schedule,” not as cards — practice areas, matters and articles read like a docket index rather than a product grid.",
      "Only one full-bleed dark section on the entire site: the footer. Every other section stays within the ivory/parchment range so the eye never has to adjust to a loud contrast jump.",
    ],
    shortStrengths: [
      "A single vertical “docket” rail runs down every page",
      "Practice areas and matters set as a ruled schedule, not cards",
      "Only one full-bleed dark section on the whole site — the footer",
    ],
    pages: PAGES_COMMON,
    mobilePages: ["index", "practice-area-detail", "contact"],
  },
  {
    slug: "prototype-02-contemporary-counsel",
    number: "02",
    name: "Contemporary Counsel",
    accent: "#2F6B5B",
    accentDeep: "#27594C",
    bg: "#FAFAF8",
    band: "#F1F1EC",
    ink: "#23302F",
    muted: "#5F6E6C",
    dark: "#1B2624",
    coverFont: "Schibsted Grotesk",
    coverFontKind: "sans-serif",
    googleFontImport: "family=Schibsted+Grotesk:wght@500;600;700",
    concept:
      "A modern, business-literate advocate's site built on an editorial ledger grid: a hairline rule opens each section, a small monospace label acts as the “field name,” and content sits in a wide column as the “value.”",
    impression:
      "Precise, current, unfussy — the kind of independent counsel a founder or a CFO would be comfortable forwarding to their board. Contemporary enough to feel like a practice that understands how businesses run; restrained enough to read as serious.",
    palette: [
      { name: "Paper", hex: "#FAFAF8" },
      { name: "Surface", hex: "#F1F1EC" },
      { name: "Ink", hex: "#23302F" },
      { name: "Mineral green", hex: "#2F6B5B" },
      { name: "Deep", hex: "#1B2624" },
    ],
    typography: [
      { role: "Display / Headings", name: "Schibsted Grotesk", note: "500/600, tight tracking — refined, not oversized" },
      { role: "Body", name: "Inter", note: "17px, 1.75–1.85 line height, 38rem measure" },
      { role: "Utility / Metadata", name: "IBM Plex Mono", note: "uppercase, reserved strictly for metadata — a records voice" },
    ],
    sitemap: [
      { page: "Home", desc: "Hero, at-a-glance facts, four practice areas, a dark “How the practice works” band, insights preview, contact band." },
      { page: "About / Professional Profile", desc: "Biography, credentials, professional timeline." },
      { page: "Practice Areas", desc: "All four areas plus a hero index list and an “instructing the chambers” band." },
      { page: "Practice Area Detail", desc: "Corporate Advisory, built out as the template for this section." },
      { page: "Experience / Selected Matters", desc: "Three illustrative matters, timeline, forums." },
      { page: "Insights / Articles", desc: "Three article entries." },
      { page: "Article Detail", desc: "“Understanding Arbitration Clauses in Commercial Contracts” (~330 words)." },
      { page: "Contact / Office Information", desc: "Enquiry form and office details." },
      { page: "Disclaimer / Professional Notice", desc: "Prototype disclosure, legal notice, and a placeholder inventory." },
    ],
    bestSuitedFor:
      "An advocate whose clients are businesses, founders and institutions rather than individuals — someone who does advisory work alongside disputes and wants the site to read as commercially fluent. Less suited to a practice built on personal or family matters, where warmth should lead.",
    keyDecisions: [
      "The rule-and-tick is the single signature device — a hairline opening each section, its first 3.5rem in mineral green — rationed to mark sections only, never repeated on sub-items, so it stays a signature rather than becoming wallpaper.",
      "Label-left / content-right records replace card grids throughout, scaling cleanly from three columns to one without the repetitive-card look the design system warns against.",
      "Stock photography is pulled toward the cool mineral palette with a saturation filter, rather than sitting against the design as a warm, foreign object.",
    ],
    shortStrengths: [
      "A hairline rule-and-tick opens every section — one signature, used sparingly",
      "Label-left / content-right records replace card grids throughout",
      "Stock photography colour-graded toward the cool mineral palette",
    ],
    pages: PAGES_COMMON,
    mobilePages: ["index", "practice-area-detail", "contact"],
  },
  {
    slug: "prototype-03-human-centered-advocate",
    number: "03",
    name: "Human-Centered Advocate",
    accent: "#8C5432",
    accentDeep: "#6E4026",
    bg: "#F5EFE6",
    band: "#EFE4D5",
    ink: "#2E2721",
    muted: "#7A6E60",
    dark: "#2B2520",
    coverFont: "Newsreader",
    coverFontKind: "serif",
    googleFontImport: "family=Newsreader:ital,opsz,wght@0,6..72,300..400;1,6..72,300..400",
    concept:
      "A warm, plainly-spoken advocate's website that says every legal thing twice — once in the language of the courts and once in the language people actually use — so a person arriving with a family or property problem can recognise their own situation on the page.",
    impression:
      "Empathetic, attentive and accessible, without slipping into casual or sentimental. A visitor should feel this is a serious professional who will explain things properly, work with them directly, and say plainly when settlement is the better route.",
    palette: [
      { name: "Sand", hex: "#F5EFE6" },
      { name: "Paper", hex: "#FBF7F1" },
      { name: "Ink", hex: "#2E2721" },
      { name: "Clay (deep)", hex: "#8C5432" },
      { name: "Sage (deep)", hex: "#55654B" },
    ],
    typography: [
      { role: "Display / Headings", name: "Newsreader", note: "weights 300/400, roman and italic — the italic carries the plain-language lines" },
      { role: "Body / UI", name: "Karla", note: "400/500/600 at 17px / 1.7 for long-form comfort" },
      { role: "Utility", name: "Karla 600 (uppercase)", note: "0.7rem, 0.19em tracking — eyebrows and field labels only" },
    ],
    sitemap: [
      { page: "Home", desc: "Portrait hero, fact rail, four practice areas with plain-language restatements, an arch image break, a three-step “what to expect” sequence, insight teasers, contact band." },
      { page: "About / Professional Profile", desc: "165-word biography, credentials/enrolment table, and “Four things worth knowing before you write in.”" },
      { page: "Practice Areas", desc: "Four areas, each set out twice — formal description plus a plain-language line." },
      { page: "Practice Area Detail", desc: "Family and Succession Matters in depth, with related matters and reading in a side rail." },
      { page: "Experience / Selected Matters", desc: "Timeline 2011–2023, three illustrative matters, and a note on why settlement is raised early." },
      { page: "Insights / Articles", desc: "Three article entries — one full note plus two illustrative titles." },
      { page: "Article Detail", desc: "“A Practical Note on Mediation as a First Step,” closing with the standard legal disclaimer." },
      { page: "Contact / Office Information", desc: "Reassuring enquiry form, office information, and a three-step “after you write in” explainer." },
      { page: "Disclaimer / Professional Notice", desc: "Both mandatory notices in full, plus an itemised list of exactly what is placeholder." },
    ],
    bestSuitedFor:
      "An advocate whose work brings him into contact with individuals and families rather than only institutions — succession, partition of family property, tenancy, and civil disputes where the parties still have to deal with one another afterward. The wrong choice for a practice positioning itself primarily for corporate clients or panel work.",
    keyDecisions: [
      "The plain-language line is the site's signature: every formal heading — each practice area, matter and article — is followed by the same idea restated in ordinary words, in muted sage italic. It is the one device a visitor will remember, and it does real work for someone who doesn't know the legal name for their problem.",
      "The arch, borrowed from the corridor photograph, softens the portrait and section-break image without a single rounded card, cute illustration or soft-focus stock photo — warmth from architecture rather than sentiment.",
      "Process is treated as content, not fine print: “what happens after you contact the office” gets a full section on Home and Contact, which is also what keeps the warmth compliant — the copy reassures by being candid rather than by promising anything.",
    ],
    shortStrengths: [
      "Every formal heading is paired with a plain-language restatement",
      "Portrait and section-break image are arch-cropped, echoing the architecture",
      "“What happens after you contact the office” is a full section, not fine print",
    ],
    pages: PAGES_COMMON,
    mobilePages: ["index", "practice-area-detail", "contact"],
  },
];

module.exports = { PROTOTYPES, DISCLAIMERS };
