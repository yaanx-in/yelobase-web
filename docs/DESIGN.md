# DESIGN.md — Yelobase Design System

> **Source of truth:** [Yelobase Branding — Figma](https://www.figma.com/design/MLH7OYnfa3evoG0AmtHeFg/Yelobase-Branding?node-id=1-2)
>
> **Status: 🟢 SYNCED (from SVG export) — with caveats, see below.**
> Extracted by Claude from `Desktop.svg` (the full 1440×6674 desktop artboard exported from Figma) on 2026-06-10. Colors, gradients, corner radii, layout grid, section structure, and component inventory are read directly from the vector data + a rasterized render of the file. **Two things could not be read from this export and need confirmation (marked ⚠️ CONFIRM):** exact **font families** (all text was exported as outlines, so no font metadata exists) and exact **shadow values** (effects are baked as blurs). Everything else is real.

Last synced: 2026-06-10
Synced by: Claude (from Desktop.svg)
Source artboard: 1440 × 6674 px (desktop, single scrolling page)

---

## 1. Brand Overview

- **Brand name:** Yelobase
- **What it is:** Technology partner / Official Zoho Authorized Partner — builds, automates, and manages business systems (CRM, Books, Inventory, AI agents).
- **Wordmark / logo:** "Yelobase" wordmark preceded by an **X-shaped mark** built from two overlapping ribbons — **coral (`#FF7070`)** over **purple (`#8A6BFF`)**. The hero renders this mark as a 3D isometric object. Footer uses a horizontal lockup: `Yelobase | Zoho Authorized Partner`. ⚠️ CONFIRM clear-space and min-size rules (not derivable from export).
- **Brand voice in UI copy:** Direct, confident, plain-spoken ("Properly Built and Owned.", "Leave the headache to us.", "We're not your vendor. We're your technology partner").

## 2. Color Tokens

Read directly from the SVG fills/gradients. Semantic names below; raw hex are exact.

| Token | Hex | Usage |
|---|---|---|
| `--color-background` | `#FFFFFF` | Default page background |
| `--color-background-warm` | `#FFF8F8` | Warm off-white page sections |
| `--color-surface` | `#F9F9F9` | Light cards / chips |
| `--color-surface-dark` | `#121115` | Dark sections, dark cards, final CTA |
| `--color-surface-dark-2` | `#201D23` | Secondary dark surface / dark card borders |
| `--color-surface-dark-3` | `#262626` | Dark band variant |
| `--color-text-primary` | `#121115` | Headings, body on light |
| `--color-text-secondary` | `#3A3A3A` | Body / supporting text |
| `--color-text-muted` | `#8A8A8A` | Captions, meta (⚠️ low contrast — see §2a) |
| `--color-text-on-dark` | `#F9F9F9` | Text on dark surfaces |
| `--color-border` | `#D5D7DA` | Light dividers/outlines |
| `--color-border-subtle` | `#F4F4F4` | Hairline dividers |
| `--color-brand-coral` | `#FF7070` | Primary brand accent, primary buttons |
| `--color-brand-coral-strong` | `#EF5A5A` | Coral hover/pressed |
| `--color-brand-purple` | `#8A6BFF` | Secondary brand accent |
| `--color-brand-purple-strong` | `#6F4BEF` | Purple emphasis |
| `--color-brand-teal` | `#21B293` | Eyebrow labels, success/positive |
| `--color-brand-teal-bright` | `#3ED1B2` | Bright teal accent |

**Pastel tint surfaces** (used for floating badges / soft cards):

| Token | Hex | Seen on |
|---|---|---|
| `--color-tint-pink` | `#FAEBEB` | "Why Yelobase" section bg |
| `--color-tint-pink-soft` | `#FFCECE` | Coral badge tint |
| `--color-tint-cream` | `#FFEABF` | "100+ Projects Delivered" badge |
| `--color-tint-lavender` | `#EFE9FF` | "Official Zoho Partner" badge / cards |
| `--color-tint-lavender-2` | `#E2D8FF` / `#CFC3FF` | Lavender card variants |
| `--color-tint-mint` | `#CCF4EC` | Teal/mint badge tint |

**Brand gradient:** `--gradient-brand: linear-gradient(135deg, #8A6BFF 0%, #FF7070 100%)` (purple → coral). A dark gradient `#262626 → #121115` is used on dark cards.

> **Not design tokens — excluded:** `#5E59EA`/`#5333C7` are the purple **designer annotation stickies** in the file ("Bg color change based on card scroll", "FLIP CARD ON HOVER", "FOCUS ON HOVER") — these are interaction notes, not site colors. The many one-off hexes (`#0081FB`, `#25D366`, `#E42527`, `#D97757`, `#226DB4`, etc.) are **third-party integration/partner logos** (Meta, WhatsApp, YouTube, Anthropic, Zoho, Odoo…), not the Yelobase palette.

### 2a. Contrast flags (WCAG AA)

- ⚠️ **`#8A8A8A` muted text on white ≈ 3.5:1** — FAILS AA for normal body text (needs 4.5:1). Use only for ≥18.66px bold / ≥24px text, or darken to ~`#767676`.
- ⚠️ **White text on `#FF7070` coral ≈ 2.1:1** — FAILS AA. Primary coral buttons need either dark (`#121115`) text or a darker coral fill for AA. Confirm intended treatment.
- ⚠️ **Teal `#21B293` eyebrows on white ≈ 2.6:1** — FAILS AA for normal text. OK only as large/bold; otherwise darken (`#14857A`-ish).
- ✅ `#121115` and `#3A3A3A` on white pass comfortably. ✅ `#F9F9F9` on `#121115` passes.

## 3. Typography

⚠️ **CONFIRM families** — text was outlined in the export, so exact font names are inferred from letterforms, not read from metadata. Two type roles are visible:

| Role | Family (inferred) | Weight | Notes |
|---|---|---|---|
| Display — Hero & final CTA | **Monospace** (looks like *Space Mono* / *JetBrains Mono*) | 400 + 700 | "Your Business Systems." (regular) over "Properly Built and Owned." (bold). The "system/code" signature. |
| Section headings (H2) | **Bold grotesque sans** (looks like *Inter* / *Geist*) | 700 | "We're not your vendor…", "Who we work with", "Results our clients talk about" |
| Eyebrow / label | same sans | 600–700 | UPPERCASE, wide letter-spacing (~0.08em), colored (teal `#21B293` or coral `#FF7070`) |
| Body | sans (Inter-like) | 400 | "We are a technology partner for growing businesses…" |
| Small / caption | sans | 400 | meta, badges, footer |

Approx. sizes (measured from the 1440px render, desktop): Hero display ~56–64px; H2 ~44–52px; eyebrow ~13px; body ~16–18px; small ~13–14px. Fluid `clamp()` ranges to be set when families are confirmed. Load via `next/font`. **Need from you: the two real font names** (mono display + sans), or confirm the inferred picks.

## 4. Spacing, Radius, Elevation, Grid

- **Grid / container:** content max-width **1200px**, centered on the 1440 artboard with **120px** side margins (desktop). Container token `--container-max: 1200px`. Responsive gutter: 16px (mobile) → 24px (tablet) → up to 120px (wide desktop, capped by max-width).
- **Spacing scale (8-based, inferred):** 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 120. Section vertical padding ≈ 80–120px desktop.
- **Border radius (from `rx` values):** `--radius-xs: 2px`, `--radius-sm: 8px`, `--radius-md: 24px` (cards), `--radius-pill / --radius-full: 9999px` (pills, buttons, avatar chips ~rx 21/42).
- **Elevation:** ⚠️ CONFIRM exact values — effects are baked as 26 Gaussian blurs in the export (no `feDropShadow`). Soft, low-opacity black shadows on light cards. Proposed: `--shadow-sm: 0 1px 2px rgba(18,17,21,.06)`, `--shadow-md: 0 8px 24px rgba(18,17,21,.08)`, `--shadow-lg: 0 24px 48px rgba(18,17,21,.10)`.

## 5. Components Inventory

| Component | Variants | States | Notes |
|---|---|---|---|
| Button | primary (coral pill, `Book Free Audit →`), dark (`Book Free Audit` in nav, near-black pill), text/link (`See our work`, `Learn More`, `View All…`) | default, hover, focus, disabled | Pill radius. Arrow icon on primary. |
| Eyebrow label | teal / coral | — | uppercase, letter-spaced |
| Badge / chip | pastel-tint pills (lavender, cream, coral, mint) | — | "Official Zoho Partner", "100+ Projects Delivered", "India, US, UK, UAE, Australia" |
| Integration logo card | white rounded square | hover | Zoho, Meta, Odoo, WhatsApp logos |
| Service card | light card w/ icon + title + sublabel | **flip on hover, each a different color** (annotated) | "Zoho Implementation / Foundation", "End-to-End Automation / Efficiency", "Managed Services Retainer / Partnership" |
| Trait card | small bordered card, colored left rule | — | "Scaling Team", "Beyond Spreadsheets", "Run, Not Support", "Partner, Not Headache" |
| Stat card | big number + label; one dark variant | — | 80% / 6 weeks / 100%; 50+/100+/5.0/15+ |
| Comparison table | 3-col (Software vendor · Implementation Agency · **Yelobase Partner** highlighted coral) | — | rows: Sells licenses / Builds and leaves / Advises on features … vs Architects / Stays / Optimizes |
| Testimonial card | avatar + name + company + 5-star (purple stars) | — | Sam O'Neile (Tuta Global, Australia), Mr Edgar (StatWorks, Mexico), Lena (Lena Wigs, USA) |
| Reality/Take cards | overlapping white + dark cards | **scroll-driven bg color red↔green** (annotated: problem→solution) | |
| Footer | multi-column links + contact + partner lockup | — | |

## 6. Page Structure (build order)

Top → bottom of the desktop artboard. **This is the Phase-3 build order.** Mobile/tablet layouts are not in this export (desktop only) — responsive behavior follows the build-prompt rules (mobile-first, collapse grids).

| # | Section | Contents |
|---|---|---|
| 1 | **Header / Nav** | Logo (X mark + "Yelobase") · links: Services, About, Case Studies, Industries, Blog, Contact Us · dark "Book Free Audit" button. (Mobile: hamburger.) |
| 2 | **Hero** | "Your Business Systems." / "Properly Built and Owned." · subcopy · CTAs: "See our work" (link) + "Book Free Audit →" (coral) · 3D isometric X graphic with floating badges (Official Zoho Partner, 100+ Projects Delivered, region pill) + integration logos (Zoho, Meta, Odoo, WhatsApp). |
| 3 | **Trusted by companies** | Logo strip (client logos). |
| 4 | **Reality Check / Our Take** | Overlapping cards: "REALITY CHECK — Sounds like your Monday?" (pain points) over dark "OUR TAKE — This isn't a tool issue, it's a system issue." Scroll-driven bg transition red→green (problem→solution). |
| 5 | **What We Do** | "We build and manage your business operating system." 3–4 service cards (flip-on-hover, each different color). |
| 6 | **Why Yelobase** | Eyebrow "WHY YELOBASE?" · "We're not your vendor. We're your technology partner" · 3-column comparison table (Software vendor / Implementation Agency / Yelobase Partner) · "Leave the headache to us." |
| 7 | **Zoho Partnership** | "We are an Official Zoho Partner. That's not a badge, it's a foundation." bullet list + isometric graphic. |
| 8 | **Proof / Results** | "Results our clients talk about." stat cards: 80% (manual work reduction), 6 weeks (chaos→clarity), 100% (adoption in 3 weeks). |
| 9 | **Who we work with** | Eyebrow "IDEAL CLIENT" · description · trait cards (Scaling Team, Beyond Spreadsheets, Run Not Support, Partner Not Headache) · dashboard/illustration cards (focus-on-hover). |
| 10 | **Customer stories** | "Explore customer stories" · stats row (50+ Happy Clients, 100+ Projects, 5.0 Rating, 15+ Countries) · testimonial cards · "View All Success Stories". |
| 11 | **Final CTA** | Dark band, monospace "Ready to build a system that actually scales?" + subcopy + "Book Free Audit →". |
| 12 | **Footer** | Columns — Services (Zoho Automation, AI Agents, Data Migration, Pricing) · Company (About Us, Wall of Love, Contact, Privacy Policy, Terms of Service) · Contact (hello@yelobase.com, +91 9551714690, USA/UK/UAE/India) · lockup "Yelobase | Zoho Authorized Partner" + tagline. |

## 7. Imagery & Iconography

- **Logo mark:** coral-over-purple overlapping X ribbons; 3D isometric treatment in hero & Zoho-partnership sections.
- **Icons:** thin-stroke line icons (stacked layers, automation, handshake, mail, phone, map-pin). Rounded corners. ⚠️ CONFIRM icon library (looks generic line set — Lucide/Feather-style would match).
- **Photography:** circular avatar headshots in testimonials. Product UI screenshots (dashboards) inside device/card frames.
- **Third-party logos:** Zoho, Meta, Odoo, WhatsApp, etc. (full-color brand marks).
- **Export rules:** SVG for icons/logo, optimized WebP/AVIF for photos, all via `next/image`.

## 8. Motion

> Already scaffolded (see `globals.css` motion tokens + `<Reveal/>`/`<Stagger/>`). Values from the build prompt; the Figma export carries no prototype data but includes **annotations** describing intended interactions:
- **Hero:** orchestrated staggered entrance (~60ms stagger).
- **Section reveals:** subtle fade-up (40px, trigger once) on scroll.
- **Reality/Take section:** background color transitions **red ↔ green** tied to scroll (problem → solution). *(annotated)*
- **Service cards:** **flip on hover**, each card a different color. *(annotated)*
- **"Who we work with" cards:** **focus/zoom on hover**. *(annotated)*
- Micro-interactions 150–250ms; transform/opacity only; `prefers-reduced-motion` disables all.
- **Tokens:** `--ease-out: cubic-bezier(0.16,1,0.3,1)`, `--duration-micro: 200ms`, `--duration-reveal: 400ms`.

## 9. Token → Code Mapping

All tokens above are mirrored into `src/app/globals.css` under `@theme` (Tailwind v4). Components consume only these variables. Pipeline: Figma → this file → `globals.css` → components.

### Open items before pixel-faithful build
1. ⚠️ **Font families** — confirm the monospace display font and the sans font (or accept inferred *Space Mono* + *Inter*).
2. ⚠️ **Coral button contrast** — confirm text color treatment (fails AA as white-on-coral).
3. ⚠️ **Shadow values** — confirm or accept the proposed elevation scale.
4. ⚠️ **Icon library** — confirm (Lucide proposed).
5. Mobile/tablet frames not in this export — responsive layout follows the build-prompt rules.
