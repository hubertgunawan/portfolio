---
version: alpha
name: haheng.au — Dark Engineer
description: A simple, professional dark theme for Hubert Gunawan's Software & AI Engineer portfolio. Neutral graphite base, one calm blue accent, monospace for technical labels, and generous whitespace so content leads.
colors:
  primary: "#5B9DFF"
  on-primary: "#0A0C10"
  primary-hover: "#7DB2FF"
  primary-muted: "#16243A"
  secondary: "#9BA3AE"
  tertiary: "#3FB950"
  neutral: "#0B0D10"
  background: "#0B0D10"
  surface: "#111419"
  surface-raised: "#171B21"
  border: "#232830"
  border-strong: "#323844"
  on-surface: "#E6E8EB"
  on-surface-muted: "#9BA3AE"
  on-surface-subtle: "#6B7380"
  success: "#3FB950"
  warning: "#D29922"
  error: "#F85149"
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.02em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-secondary-hover:
    backgroundColor: "{colors.surface-raised}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-hover:
    backgroundColor: "{colors.surface-raised}"
  tag:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  badge-open-to-work:
    backgroundColor: "{colors.primary-muted}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
  terminal:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 20px
  nav:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-sm}"
    height: 64px
---

# DESIGN.md — haheng.au

## Overview

The portfolio of **Hubert Gunawan, Software Engineer & AI Engineer**. The audience is technical recruiters and hiring managers who need to understand who Hubert is, what he builds, and how to reach him within 30 seconds, then dig into case studies for depth.

The personality is **calm, precise, and engineer-focused**: think a well-designed developer tool (Linear, Vercel docs, GitHub dark) rather than a flashy agency site. The design should feel quiet and confident. Content leads; decoration is minimal. Dark mode is the default and primary theme.

Guiding principles:
- **Simple:** one accent color, two typefaces, a small set of components, lots of whitespace.
- **Professional:** consistent alignment, restrained motion, no gradients or glows that compete with content.
- **Scannable:** strong heading hierarchy, short line lengths, monospace labels for tech tags and metadata.
- **Credible:** architecture diagrams over screenshots; terminal/API-style details hint at backend + AI work.

## Colors

The palette is a near-black graphite base with layered surfaces and a single calm blue accent.

- **Background (#0B0D10):** Page background. Near-black with a slight cool tint, never pure #000.
- **Surface (#111419):** Cards, terminal block, inputs, nav on scroll.
- **Surface Raised (#171B21):** Hover states, tags, nested panels.
- **Border (#232830):** Default 1px dividers and card outlines. **Border Strong (#323844)** for inputs and hover outlines.
- **On Surface (#E6E8EB):** Primary text and headings. Off-white to reduce glare.
- **On Surface Muted (#9BA3AE):** Body copy secondary info, nav links, dates, captions.
- **On Surface Subtle (#6B7380):** Placeholders and non-essential metadata only (do not use for body text).
- **Primary (#5B9DFF):** The only accent. Used for primary CTAs, links, active nav, focus rings, and key highlights. Use sparingly — at most one strong accent element per viewport.
- **Primary Muted (#16243A):** Tinted backgrounds for the "Open to work" badge and active filter chips.
- **Success (#3FB950):** Reserved for status semantics like `200 OK`, the green dot in the "Open to work" badge, and form success states.
- **Error (#F85149) / Warning (#D29922):** Form validation and error states only.

All text/background pairs must meet WCAG 2.2 AA (≥ 4.5:1 for body text). Primary on Background and On Surface Muted on Surface both pass.

## Typography

- **Inter** for all headings and body text. Headings use tight negative letter-spacing and semibold/bold weights; body uses regular weight with relaxed 1.65 line-height.
- **JetBrains Mono** for technical accents: tech tags, dates, section eyebrows (e.g., `// experience`), the hero terminal block, code snippets, and metric values.
- Keep body line length to 60–75 characters (max-width ~680px for prose).
- Section headings are preceded by a small monospace eyebrow label in muted or primary color, e.g. `01 · Projects`.
- Use sentence case for headings and buttons. Avoid all-caps except for tiny monospace eyebrows.

## Layout

- **Container:** max-width 1120px, centered, 24px side padding on mobile, 32px on desktop.
- **Grid:** 12-column on desktop, single column on mobile. Featured projects in a 3-column grid on desktop, 1 column on mobile.
- **Spacing:** 8px base scale. Sections are separated by 96px vertically on desktop (64px on mobile). Within cards use 24px padding.
- **Responsive:** fully fluid from 360px to 1920px. Navigation collapses into a simple menu button under 768px.
- **Hero:** left-aligned text column (name, headline, pitch, CTAs, badge) with the terminal block on the right on desktop; stacked on mobile.
- **Timeline:** a thin vertical 1px border line on the left with small circular markers; role, company, and dates in monospace.

## Elevation & Depth

Depth comes from **tonal layering and borders, not shadows**. Background → Surface → Surface Raised each step slightly lighter. Cards use a 1px Border outline; on hover the border shifts to Border Strong and the background to Surface Raised. Avoid drop shadows, glows, and glassmorphism. The sticky nav may use the Background color at ~80% opacity with a subtle backdrop blur and a bottom border.

## Shapes

Moderate, consistent rounding: **8px** for buttons and inputs, **12px** for cards and the terminal block, **4px** for tags, and fully rounded pills only for the status badge and filter chips. Icons are outline-style (e.g., Lucide) at 1.5px stroke, 16–20px.

## Components

- **Navigation:** Logo/name `hubert.gunawan` in monospace on the left; links Home · Projects · About · Resume · Blog ↗ in muted text; active link in On Surface with a small primary underline; **Contact** as a primary button on the right.
- **Buttons:** Primary = solid blue with dark text. Secondary = transparent with 1px Border Strong outline and light text. Ghost/icon buttons for GitHub and copy-to-clipboard. Height 40px, 150ms color transition.
- **Open to work badge:** pill with Primary Muted background, a small green dot, and monospace text "Open to Software Engineer & AI Engineer roles · Surabaya, Indonesia".
- **Terminal block (signature element):** Surface card with three small muted dots in the header, JetBrains Mono content such as `$ curl haheng.au/api/hubert` then `200 OK` (in Success green) followed by a short JSON response with `role`, `stack`, and `status` keys. Keys in primary, strings in On Surface. Optional agent-style log line like `[agent] published post → blog.haheng.au`.
- **Project card:** Surface background, 1px border, 12px radius. Monospace category eyebrow (e.g., `AI AGENTS`), title in H3, one-line summary in muted text, a row of tech tags, and a "Read case study →" link in primary. Whole card is clickable; hover raises tone and shifts the arrow slightly.
- **Tags / chips:** small monospace labels on Surface Raised. Filter chips on /projects become Primary Muted with primary text when active.
- **Skills:** five grouped cards (Languages & Frameworks, Databases, Cloud & DevOps, AI & Machine Learning, Practices), each with a muted outline icon, a title, and tags.
- **Experience timeline:** entries with role (H3), company, monospace date range, and an expandable list of bullets ("Show details" toggle).
- **Case study page:** narrow prose column with a sticky table of contents on desktop; sections Problem → My Role → Architecture → Key Decisions → Tech Stack → Outcome → Lessons. Architecture diagrams sit in Surface cards with a caption.
- **Contact:** email shown in monospace with a copy button; a simple form (name, email, message) using Surface inputs with Border Strong outline, primary focus ring, and inline success/error messages.
- **Footer:** single row with muted links (Email, GitHub, LinkedIn, Blog), © year, and "Built with Next.js on AWS" linking to the portfolio case study.
- **Focus states:** 2px Primary outline with 2px offset on every interactive element.

## Do's and Don'ts

**Do**
- Keep the page mostly neutral; let the single blue accent mark what matters.
- Use monospace only for technical labels, dates, tags, and code.
- Use generous whitespace and clear section rhythm.
- Prefer diagrams and text over screenshots.
- Keep motion subtle (fade/translate ≤ 8px, 150–250ms) and respect `prefers-reduced-motion`.

**Don't**
- Don't introduce extra accent colors, gradients, neon glows, or heavy shadows.
- Don't use pure black (#000) backgrounds or pure white (#FFF) text.
- Don't use stock photos, emoji-heavy copy, or decorative illustrations.
- Don't display the phone number anywhere on the site.
- Don't center-align long paragraphs.
