# Abhiram Singuru — Portfolio

Personal site of **Abhiram Singuru**, Big Data Engineer at Tata Consultancy Services. Single-page home (Hero, About, Stack, Credentials, Selected Work, Experience, Writing, Contact) with deep links into Archive and Uses.

Built on the same design system as [vaheedshaik.tech](https://vaheedshaik.tech/) — dark theme, violet/cyan accents, motion-driven sections.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack, View Transitions)
- **UI:** Tailwind CSS v4 (CSS-first `@theme`), Geist Sans + Geist Mono
- **Motion:** `motion` v12, Lenis smooth scroll, cmdk command palette (⌘K), Vaul mobile drawer

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All copy, links, and data live in `src/data/site.js` — edit that file to update anything on the site (experience, projects, skills, certifications, uses, archive).

- `public/images/profile.png` — profile photo (used as both avatar and hero portrait)
- `public/files/Abhiram_Singuru_CV.pdf` — downloadable résumé

### Known placeholders to fill in before going live

- `site.url` in `src/data/site.js` is a placeholder domain — update once deployed.
- No Education or Testimonials sections are included yet — add real content and wire up new sections when available (fabricated placeholder content was intentionally left out).

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Deploy

Any Node host works (Vercel, Render, Fly.io). For Vercel: push to a GitHub repo and import it at vercel.com — zero config needed.
