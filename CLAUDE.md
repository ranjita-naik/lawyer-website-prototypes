# CLAUDE.md

## Purpose

These are the operating rules for every website project. Follow them unless the user explicitly overrides them.

---

# Workflow

## Before Writing Any Frontend Code

- Always invoke the `frontend-design` skill before writing frontend code.
- Review the entire project structure before making changes.
- Check for a `brand_assets/` folder and use its contents whenever available.
- If a reference image is provided, study it before writing code.

---

# Reference Matching

When a reference image exists:

- Match the layout exactly.
- Match spacing, typography, sizing, colors and hierarchy.
- Do not redesign or "improve" the reference.
- Replace copyrighted images with placeholders unless real assets are provided.
- Do not invent new sections or features.

If no reference exists:

- Create an original design following the design standards below.

---

# Screenshot Review Loop

For visual work:

1. Build the page.
2. Run locally.
3. Capture screenshots.
4. Compare against the reference or requested outcome.
5. Fix discrepancies.
6. Repeat until satisfied.

Skip screenshot comparison for heavily animated sections where screenshots are unreliable.

---

# Brand Assets

Always inspect the `brand_assets/` directory.

Prefer:

- logos
- typography
- colors
- illustrations
- photography

Never replace available assets with placeholders.

---

# Design Standards

Every website should have:

- strong visual hierarchy
- excellent typography
- generous whitespace
- consistent spacing
- premium interactions
- responsive layouts
- accessibility considerations
- polished hover and focus states

Avoid generic-looking layouts.

---

# Output Defaults

Unless requested otherwise:

- mobile-first
- responsive
- semantic HTML
- Tailwind via CDN
- placeholder images from placehold.co
- optimized for readability

---

# Hard Rules

Never:

- use default Tailwind blue/indigo as the primary brand color
- use `transition-all`
- add features not requested
- stop after a single review pass
- ignore available brand assets
- modify the reference design unless instructed