# AGENTS.md

Instructions for AI coding agents (Claude Code, Cursor, Copilot, etc.) working in this repository. Claude Code users: `CLAUDE.md` contains the full, authoritative version — this file is the cross-tool summary.

## Setup

```bash
npm install
npm run dev
```

Node 20+. No environment variables required for local dev (see `.env.example` if added later).

## Project Shape

- Next.js App Router under `src/app/`
- Components: `src/components/{ui,sections,layout}/`
- Design tokens: CSS variables in `src/app/globals.css`
- Design spec: `docs/DESIGN.md` (extracted from Figma — single source of truth)

## Rules

1. Read `docs/DESIGN.md` before touching UI. Update it from Figma if values are missing; never guess brand values.
2. Use design-token CSS variables — never hardcoded hex/px values in components.
3. TypeScript strict, Server Components by default, `"use client"` only when required.
4. Mobile-first responsive (375 / 768 / 1280 / 1536).
5. Accessibility required: semantic HTML, focus states, `prefers-reduced-motion`, contrast.
6. Before finishing any task: `npm run lint && npm run build` must pass.
7. Conventional Commits. One logical change per commit.
8. Ask before adding dependencies or restructuring folders.

## Testing / Verification

There is no test suite yet. Verification = lint passes, build passes, manual check at the four breakpoints, zero console errors.
