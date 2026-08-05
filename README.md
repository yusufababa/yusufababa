# Yusuf Adam — Portfolio

Personal portfolio for Yusuf Adam, product designer & frontend developer.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- next/font — General Sans (local, via Fontshare), Manrope (Google), Geist Mono
- ESLint + Prettier

## Getting started

```bash
npm run dev
```

Before the site looks right, drop the General Sans `.woff2` files into
[`src/fonts/general-sans/`](src/fonts/general-sans/README.md).

## Structure

```
src/
  app/            routes (App Router)
  components/
    layout/       Nav, Footer
    ui/           Button, Container
    motion/       PageTransition, ScrollReveal, DraggableCard
  data/           placeholder content (projects, etc.)
  fonts/          next/font setup
  lib/            site config, utils
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run format` — Prettier write
