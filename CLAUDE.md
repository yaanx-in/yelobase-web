# CLAUDE.md — Instructions for Claude Code

This file gives Claude Code persistent context for working in this repository.

## Project

Yelobase Web — Next.js (App Router) + TypeScript + Tailwind CSS marketing/product site. The single source of design truth is `docs/DESIGN.md`, extracted from the Figma file:
https://www.figma.com/design/MLH7OYnfa3evoG0AmtHeFg/Yelobase-Branding?node-id=1-2

## Workflow Rules (read before doing anything)

1. **Design first.** Before building or changing any UI, read `docs/DESIGN.md`. If it is incomplete or marked `TODO`, extract the missing values from Figma (via the Figma MCP server if connected) and update `docs/DESIGN.md` BEFORE writing component code.
2. **Tokens only.** Never hardcode colors, font sizes, radii, or shadows in components. All values come from CSS variables defined in `src/app/globals.css`, which mirror `docs/DESIGN.md`.
3. **Plan, then build.** For any multi-file task, present a short plan (files to create/change, components needed) before writing code.
4. **Small, reviewable commits.** One logical change per commit. Conventional Commits format: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
5. **Verify before done.** Run `npm run lint` and `npm run build` before declaring a task complete. Fix what breaks.

## Code Conventions

- TypeScript strict; no `any` unless justified with a comment.
- Server Components by default; add `"use client"` only when the component needs state, effects, or browser APIs.
- One component per file. Named exports for components, default export only for `page.tsx` / `layout.tsx`.
- File naming: `kebab-case.tsx` for files, `PascalCase` for component names.
- Component placement:
  - `src/components/ui/` — reusable primitives (Button, Badge, Card)
  - `src/components/sections/` — page-level sections (Hero, Pricing, FAQ)
  - `src/components/layout/` — Header, Footer, Container
- Props: define a `Props` interface above the component. Avoid prop drilling deeper than 2 levels — restructure instead.
- Images: always `next/image` with explicit `width`/`height` or `fill`. Assets live in `public/images/`.
- Fonts: load through `next/font`. No `<link>` font tags.
- Accessibility is non-negotiable: semantic HTML, alt text, visible focus states, keyboard navigation, color contrast per DESIGN.md tokens, `prefers-reduced-motion` respected on every animation.

## Styling Rules

- Tailwind utility classes in JSX; design tokens as CSS variables in `globals.css`.
- No inline `style={{}}` except for truly dynamic values.
- Responsive: mobile-first. Test at 375px, 768px, 1280px, 1536px.
- Animations: subtle and purposeful. Every animation must respect `prefers-reduced-motion`.

## What NOT to do

- Do not install new dependencies without stating why and getting confirmation.
- Do not restructure folders without discussion.
- Do not invent brand colors, copy, or logo treatments — if it is not in Figma / DESIGN.md, ask.
- Do not commit `.env` files or secrets.
- Do not use CSS-in-JS libraries; this project is Tailwind-only.

## Common Commands

```bash
npm run dev          # dev server
npm run build        # production build (must pass before PR)
npm run lint         # eslint
npm run format       # prettier
```

## Definition of Done (per task)

- [ ] Matches Figma spec in `docs/DESIGN.md`
- [ ] Responsive at all four breakpoints
- [ ] Lint + build pass
- [ ] No console errors/warnings
- [ ] Accessible (keyboard + screen reader basics)
