# Portfolio Redesign — Editorial Minimal with a Technical Edge

**Date:** 2026-07-11
**Owner:** Shaharyar Shamshi
**Site:** shaharyarshamshi.com (Vite + React + shadcn/ui + Tailwind, deployed to GitHub Pages)

## Goal

Complete visual + UX revamp of the personal portfolio. Same content and sections;
brand-new design system. Direction: **editorial minimalism with a technical edge**
(the Linear / Vercel / Stripe lane), tuned for a Co-Founder/CTO in renewable-energy
deep tech. Ship polished light **and** dark themes, default light.

## Design language

- Content-first editorial layout: generous whitespace, strong typographic hierarchy,
  a crisp grid, hairline borders instead of heavy glassmorphism/shadows.
- Restrained, purposeful motion — one consistent scroll-reveal (fade + rise) that
  respects `prefers-reduced-motion`. Remove float/glow-pulse/gradient-shift noise.
- Retire navy/teal/orange trio, glass panels, and giant blur blobs.

## Color system

Neutral-led with a single signature accent (solar amber — a restrained nod to the
renewable-energy mission). shadcn semantic tokens are kept so existing UI primitives
keep working; a new `--brand` token carries the amber so shadcn's `--accent`
(component hover states) stays neutral.

- **Light:** warm off-white canvas, near-black warm ink, near-black primary buttons,
  neutral borders, amber `--brand`.
- **Dark:** warm near-black canvas, off-white ink, near-white primary buttons,
  slightly brighter amber `--brand`.
- `--radius` reduced from `1rem` to `0.75rem`; oversized `2rem`/`3rem` radii dropped.

## Typography

- **Display / headings:** Space Grotesk (modern grotesk) — replaces Playfair serif.
- **Body:** Inter.
- **Mono:** JetBrains Mono — for metadata, dates, tags, and stat numerals (reinforces
  the engineer identity).
- Tighter tracking on headings; calmer, editorial type scale (dial back 7xl heroes).

## Structure (same content, same order)

Hero → About → Experience → Skills → Projects → GitHub → Open Source → Education → Contact.

- **Hero:** name, role, one-line value prop, primary CTA + socials, quiet dot-grid
  background (no gradient wall). Photo kept, calmer treatment.
- **Experience:** clean vertical timeline, mono dates, hairline connector.
- **Skills:** grouped chip lists, calm.
- **Projects / Open Source:** bordered cards, mono tags, clear links.
- **GitHub:** understated stat tiles with mono numerals.
- **Contact:** strong closing CTA, no full-bleed gradient.

## Shared units (isolation & clarity)

- `Reveal` — scroll-reveal wrapper (fade + rise, reduced-motion aware). Replaces
  scattered `animate-*` + `useScrollReveal` usage.
- `SectionHeader` — eyebrow + title + optional subtitle, one consistent rhythm.
- Section spacing standardized via a shared container/padding convention.

## Non-goals

- No content rewrites, no new sections, no section reordering.
- No routing/data-layer changes. `resume.ts` stays the single source of content.
- No backend, forms, or analytics work.

## Acceptance

- `npm run build` passes; no TypeScript/lint errors introduced.
- Light and dark both polished; default light; toggle works with no flash of wrong theme.
- Motion respects `prefers-reduced-motion`.
- Focus-visible states and semantic headings present; keyboard navigable.
- Content matches `src/data/resume.ts` exactly.
