# Yelobase Web

Marketing / product website for **Yelobase**, built with Next.js (App Router), TypeScript, and Tailwind CSS. The visual identity is sourced from the Yelobase Branding file in Figma.

## Documentation Map

| File | Purpose |
|---|---|
| `README.md` | Project overview, setup, scripts (this file) |
| `CLAUDE.md` | Instructions for Claude Code: conventions, commands, guardrails |
| `AGENTS.md` | Cross-tool AI agent instructions (Claude Code, Cursor, etc.) |
| `docs/DESIGN.md` | Design system extracted from Figma: tokens, type, components |

## Tech Stack

- **Framework:** Next.js 15+ (App Router, React Server Components)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (design tokens via CSS variables)
- **Fonts:** `next/font` (self-hosted, no external font requests)
- **Animation:** Framer Motion (used sparingly — see DESIGN.md)
- **Linting:** ESLint + Prettier
- **Deployment target:** Vercel

## Folder Structure

```
yelobase-web/
├── README.md
├── CLAUDE.md
├── AGENTS.md
├── docs/
│   └── DESIGN.md
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/              # only if not using next/font/google
├── src/
│   ├── app/                # App Router: routes, layouts, metadata
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css     # design tokens live here as CSS variables
│   │   └── (routes)/
│   ├── components/
│   │   ├── ui/             # primitives: Button, Badge, Input, Card
│   │   ├── sections/       # page sections: Hero, Features, CTA, Footer
│   │   └── layout/         # Header, Footer, Container, Nav
│   ├── lib/                # utilities, constants, helpers
│   ├── hooks/              # custom React hooks
│   ├── styles/             # additional css (keep minimal)
│   └── types/              # shared TypeScript types
├── .env.example
├── next.config.ts
├── tailwind.config.ts      # only if customizing beyond CSS variables
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Design Source

Figma: [Yelobase Branding](https://www.figma.com/design/MLH7OYnfa3evoG0AmtHeFg/Yelobase-Branding?node-id=1-2)

All colors, typography, spacing, and component specs must come from `docs/DESIGN.md`, which is generated from the Figma file. Never hardcode hex values in components — use the token variables.
