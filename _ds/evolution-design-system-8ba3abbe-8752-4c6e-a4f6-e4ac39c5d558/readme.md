# Evolution Design System

> **Be Your Best Version**

## Brand Overview

**Evolution** is a luxury aesthetic medicine clinic (consultorio de medicina estética de lujo). The brand is positioned as an exclusive, premium destination for clients seeking to enhance their natural beauty with medical precision and artistry.

- **Tagline:** Be Your Best Version
- **Category:** Luxury aesthetic medicine / beauty & wellness
- **Language:** Spanish (primary), English (secondary)
- **Market:** Latin America / Mexico

## Sources

The following materials were used to build this design system:

- `uploads/ChatGPT Image 31 ago 2026, 03_34_04 p.m..png` — Logo, dark background version
- `uploads/ChatGPT Image 31 ago 2026, 03_34_15 p.m..png` — Logo, light background version
- `uploads/Evolution-Manual-de-Marca.pdf` — Manual de Marca (brand manual; PDF text is glyph-encoded and could not be extracted — visual analysis only)
- No Figma file or codebase was provided

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Sophisticated, not clinical.** Medical expertise expressed through elegant language, never cold or sterile.
- **Empowering, not prescriptive.** "Tu mejor versión" / "Your best version" — the client leads their own transformation.
- **Understated confidence.** Never boastful; let results speak. Avoid superlatives ("the best," "#1").
- **Warm precision.** Direct, clear, never verbose. Quality over quantity in copy.

### Language Rules
- **Casing:** Title Case for headings and CTAs. Sentence case for body copy.
- **Punctuation:** Minimal. No exclamation marks in most contexts (luxury brands whisper, not shout). Use en-dashes (–) not hyphens in running text.
- **Emoji:** Never used. The brand is too refined.
- **Person:** Second person ("tu," "tus," "your"). Never first-person institutional ("nosotros ofrecemos…").
- **Numbers:** Write out 1–9 in body copy; use numerals for 10+, measurements, and prices.

### Tone Examples
- ✓ "Un tratamiento diseñado para ti. Resultados que hablan por sí solos."
- ✓ "Medicina estética de precisión. En manos expertas."
- ✗ "¡Somos los mejores! ¡Llámanos hoy! 🌟"
- ✓ "Agenda tu consulta. Sin compromiso."
- ✓ "Cada rostro tiene su historia. Nosotros la realzamos."

### CTA Language
- Primary: "Agendar Consulta" / "Book a Consultation"
- Secondary: "Conoce los tratamientos" / "Discover Treatments"
- Contact: "Escríbenos" / "Contáctanos"

---

## VISUAL FOUNDATIONS

### Color System
Two primary modes: **Dark** (hero sections, premium moments) and **Light** (content sections, clinical clarity).

**Primary palette:**
- **Champagne Gold** `#C4A35A` — the brand accent; used for decorative elements, CTAs, lines, the logo mark. Warm, refined, not brassy.
- **Near-Black** `#111111` — premium dark surface. Deep but not pure black.
- **Off-White / Cream** `#FAF9F6` — light surface. Warm, not cold white.

See `tokens/colors.css` for the full scale.

### Typography
- **Primary font:** Montserrat (Google Fonts) — all UI text, headings, body copy, labels
  - Weights used: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Display font:** Cormorant Garamond (Google Fonts) — tagline, pull quotes, decorative text
  - Used in: italic light, for the "Be Your Best Version" register
  - **⚠️ Substitution note:** The tagline in the brand manual appears to use an elegant spaced-italic serif. Cormorant Garamond is the closest match on Google Fonts. Please provide the original font file if a specific typeface was specified in the brand manual.
- **Letter spacing:** Extremely wide spacing is a core brand signature. Headings often use 0.2–0.35em tracking.

### Backgrounds
- **Dark sections:** `#111111` (near-black) with gold accents
- **Light sections:** `#FAF9F6` (cream) for content, `#FFFFFF` for cards
- **No gradients** — solid color blocks only
- **No background images** in interface elements; photography used sparingly in full-bleed hero/section contexts

### Animations & Motion
- **Easing:** `ease` or `cubic-bezier(0.25, 0.1, 0.25, 1)` — smooth, never bouncy
- **Duration:** Fast interactions 150ms, standard transitions 300ms, page reveals 500ms
- **Hover states:** Subtle opacity shift (0.8) or slight color shift toward gold; no scale transforms
- **No parallax or attention-grabbing motion** — restraint is luxury

### Borders & Lines
- **1px solid lines** in gold (`--color-border-gold`) are the primary decorative element
- The brand's horizontal divider: `— ✦ —` (thin lines flanking a 4-pointed star)
- Card borders: `1px solid var(--color-gray-200)` on light backgrounds
- **No box-shadows on cards** in the dark version; subtle shadow only on light backgrounds

### Cards
- Light mode: `background: #FFFFFF`, `border: 1px solid #E0E0DC`, `border-radius: 0` (sharp, precise)
- Dark mode: `background: #1A1A1A`, `border: 1px solid #3D3D3D`
- **No rounded corners** — the brand uses 0px radius except on pill badges (999px)
- Padding: 32–48px

### Hover States
- Buttons: background color shifts to `--color-gold-600`; or on outlined, fills gold bg
- Links: opacity 0.7
- Cards: subtle `box-shadow` appears (light mode) or border brightens (dark mode)

### Corner Radii
- Default: `0` (all rectangular)
- Pill/badge only: `9999px`

### Shadows
- Only on light backgrounds: `0 4px 32px rgba(0,0,0,0.08)` for cards
- Gold glow: `0 4px 24px rgba(196, 163, 90, 0.25)` — used sparingly on gold elements

### Imagery
- **Warm, soft tones** — no cool/desaturated photography
- **Clean, neutral backgrounds** in product/service shots
- Close-up skin/face photography, professional aesthetic
- **No stock clichés** — no generic "beauty model" clichés

---

## ICONOGRAPHY

- **No icon font** defined in provided materials
- **No icon library** specified
- The brand uses **minimal iconography** — the brand mark (face silhouette) and the 4-pointed star/sparkle are the primary decorative motifs
- **Decorative motifs:** 4-pointed star (✦), thin horizontal lines, the feminine face line-art
- **No emoji** ever used as iconography
- If icons are needed (e.g., service categories), use a minimal line-icon set like Lucide or Feather at 1px stroke weight — never filled icons

### Logo Variants (in `assets/`)
- `logo-dark.png` — Primary logo, dark (black) background. Use on dark sections.
- `logo-light.png` — Primary logo, light background. Use on white/cream sections.
- `logo-icon.png` — Brand mark only (feminine face silhouette in gold). Use as favicon, avatar, embossed mark.

---

## INTENTIONAL ADDITIONS

The following components were added that are not sourced from a Figma file or codebase (none provided):

- `Divider` — The brand's signature horizontal ornamental divider (line ✦ line). Added as a reusable primitive because it appears in the logo and is a core brand motif.

The following standard components from the recommended set are **not yet built**:
- IconButton, Select, Checkbox, Radio, Switch, Tag, Tabs, Dialog, Toast, Tooltip

These can be added in a follow-up if needed.

---

## FILE INDEX

```
Evolution Design System
├── readme.md                         This file
├── SKILL.md                          Claude Code skill definition
├── styles.css                        Root CSS entry point (imports only)
├── thumbnail.html                    Homepage tile
│
├── tokens/
│   ├── fonts.css                     @font-face + Google Fonts import
│   ├── colors.css                    Color custom properties
│   ├── typography.css                Type scale + font tokens
│   ├── spacing.css                   Spacing scale
│   └── effects.css                   Shadows, radii, transitions
│
├── assets/
│   ├── logo-dark.png                 Logo on black background
│   ├── logo-light.png                Logo on white background
│   └── logo-icon.png                 Brand mark (face silhouette only)
│
├── guidelines/
│   ├── colors-primary.card.html      Gold palette specimens
│   ├── colors-neutral.card.html      Black/gray/white specimens
│   ├── colors-semantic.card.html     Semantic token specimens
│   ├── type-display.card.html        Cormorant display styles
│   ├── type-body.card.html           Montserrat body styles
│   ├── type-weights.card.html        Weight specimens
│   ├── letter-spacing.card.html      Tracking scale
│   ├── spacing.card.html             Spacing scale
│   ├── brand-logo.card.html          Logo specimens
│   ├── brand-icon.card.html          Brand mark specimens
│   ├── brand-divider.card.html       Decorative divider motif
│   ├── effects-shadow.card.html      Shadow specimens
│   └── effects-radius.card.html      Radius + border specimens
│
├── components/
│   └── core/
│       ├── Button.jsx / .d.ts / .prompt.md
│       ├── Input.jsx / .d.ts / .prompt.md
│       ├── Card.jsx / .d.ts / .prompt.md
│       ├── Badge.jsx / .d.ts / .prompt.md
│       ├── Divider.jsx / .d.ts / .prompt.md
│       └── components.card.html      Component specimens
│
└── ui_kits/
    └── landing/
        ├── index.html               Landing page (interactive)
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── About.jsx
        ├── Testimonials.jsx
        └── Footer.jsx
```
