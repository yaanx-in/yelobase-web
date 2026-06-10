# DESIGN.md — Yelobase Design System

> **Source of truth:** [Yelobase Branding — Figma](https://www.figma.com/design/MLH7OYnfa3evoG0AmtHeFg/Yelobase-Branding?node-id=1-2)
>
> **Status: 🟡 TEMPLATE — values below marked `TODO` must be extracted from the Figma file.**
> Agent instruction: connect to the Figma MCP server (or use exported specs provided by the maintainer), read the branding file, replace every `TODO`, then change status to 🟢 SYNCED with the sync date. After updating this file, mirror all tokens into `src/app/globals.css` as CSS variables.

Last synced: TODO
Synced by: TODO

---

## 1. Brand Overview

- **Brand name:** Yelobase
- **Wordmark / logo usage:** TODO (extract logo variants, clear space, min size from Figma)
- **Brand voice in UI copy:** TODO (tone notes if present in Figma)

## 2. Color Tokens

Extract every fill/style from the Figma color styles panel. Name tokens semantically, not by hue.

| Token | Hex | Figma style name | Usage |
|---|---|---|---|
| `--color-brand` | TODO | TODO | Primary brand color |
| `--color-brand-foreground` | TODO | TODO | Text/icon on brand color |
| `--color-background` | TODO | TODO | Page background |
| `--color-surface` | TODO | TODO | Cards, panels |
| `--color-text-primary` | TODO | TODO | Headings, body |
| `--color-text-secondary` | TODO | TODO | Muted text, captions |
| `--color-border` | TODO | TODO | Dividers, outlines |
| `--color-accent` | TODO | TODO | Highlights, links |
| `--color-success` / `--color-error` | TODO | TODO | Feedback states (if defined) |

Contrast requirement: all text/background pairs must meet WCAG AA (4.5:1 body, 3:1 large text). Flag any Figma pair that fails.

## 3. Typography

| Role | Family | Weight(s) | Size / Line-height | Letter-spacing | Figma style |
|---|---|---|---|---|---|
| Display / H1 | TODO | TODO | TODO | TODO | TODO |
| H2 | TODO | TODO | TODO | TODO | TODO |
| H3 | TODO | TODO | TODO | TODO | TODO |
| Body | TODO | TODO | TODO | TODO | TODO |
| Small / caption | TODO | TODO | TODO | TODO | TODO |
| Button / label | TODO | TODO | TODO | TODO | TODO |

Load all families via `next/font`. Note fallback stacks here: TODO

## 4. Spacing, Radius, Elevation

- **Spacing scale:** TODO (derive from Figma auto-layout values; map to Tailwind scale)
- **Border radius tokens:** TODO (`--radius-sm/md/lg/full`)
- **Shadows / elevation:** TODO (copy exact Figma effect values)
- **Grid / container:** TODO (max-width, column count, gutters per breakpoint)

## 5. Components Inventory

List every component frame found in Figma with its variants and states.

| Component | Variants | States | Notes / Figma node |
|---|---|---|---|
| Button | TODO (primary/secondary/ghost…) | default, hover, focus, disabled | TODO |
| TODO | | | |

## 6. Page Structure (node-id 1-2 and siblings)

Document each designed screen/frame top-to-bottom so sections can be built in order.

| # | Frame / Page | Sections (top → bottom) | Breakpoint variants in Figma |
|---|---|---|---|
| 1 | TODO | TODO | TODO |

## 7. Imagery & Iconography

- **Icon set / style:** TODO (stroke width, corner style, source library if any)
- **Illustration / photo treatment:** TODO
- **Export rules:** SVG for icons/logo, optimized WebP/AVIF for photos, all via `next/image`.

## 8. Motion

- **Principles:** TODO (extract any prototype/animation specs from Figma)
- Defaults until specified: 150–250ms ease-out for micro-interactions; entrance reveals ≤ 400ms; everything gated behind `prefers-reduced-motion`.

## 9. Token → Code Mapping

After filling this file, write all tokens to `src/app/globals.css`:

```css
:root {
  --color-brand: /* from §2 */;
  --color-background: /* from §2 */;
  /* ... */
  --radius-md: /* from §4 */;
}
```

Components consume only these variables (directly or through Tailwind theme mapping). Any visual change starts in Figma → this file → `globals.css` → components, in that order.
