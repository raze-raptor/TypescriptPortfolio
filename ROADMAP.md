# Portfolio Build Roadmap

Living checklist for the portfolio rebuild. Check items off as you go. Design decisions and rationale live in the AI conversation history / [AI_Usage.md](AI_Usage.md) for major milestones — this file is just the sequence.

## Phase 0 — Tooling foundation
- [x] Scaffold Vite + React + TypeScript project
- [x] ESLint configured
- [ ] Wire up `@tailwindcss/vite` plugin in `vite.config.ts`
- [ ] Add `@import "tailwindcss";` + `@plugin "daisyui";` to `src/index.css`
- [ ] Strip leftover default Vite template CSS (`:root` vars, `#root` sizing, `h1`/`h2`/`code` rules)
- [ ] Gut default counter demo out of `App.tsx`

## Phase 1 — Design system
- [ ] Define custom DaisyUI dark theme: `base-100` (~#0d0d0d–#121212), `base-200`/`base-300` one shade lighter, `primary` = blue accent
- [ ] Pick fonts: a mono face for the terminal-style line, a sans/display face for the name/headings
- [ ] Decide global layout shell (max-width container? full-bleed sections?)
- [ ] Set up a basic folder structure under `src/` (e.g. `components/`, `sections/`)

## Phase 2 — Hero section
- [ ] Two-column layout (text left, visual right), responsive fallback to stacked on mobile
- [ ] Terminal-style line: `matiyenga.online:~$ whoami` (green prompt styling)
- [ ] Name: "MATTHEW MATIYENGA" — large, bold, white
- [ ] Subtitle: "APPLICATIONS DEVELOPER" in blue accent
- [ ] Decide: short "what I do" line between subtitle and scroll cue, or skip it
- [ ] "SEE MORE" + chevron scroll cue, anchored to bottom of viewport
- [ ] Empty placeholder div for the particle visual (right column)

## Phase 3 — Hero particle visual
- [ ] Install tsParticles (+ React wrapper if using one)
- [ ] Configure a blob/circle mask preset, blue accent colour
- [ ] Confine particles to the shape (polygon mask or similar ready-made preset)
- [ ] Decide + implement mouse-reactivity (or skip if it hurts performance/clarity)

## Phase 4 — Remaining sections
- [ ] Decide full page structure (About, Projects, Contact — confirm scope/order)
- [ ] About section: content + layout
- [ ] Projects section: content source (hardcoded list vs. data file), card layout via DaisyUI
- [ ] Contact section: form or just links (email/LinkedIn/GitHub)?
- [ ] Nav/scroll: "SEE MORE" scrolls to next section; consider a persistent nav if page grows long

## Phase 5 — Responsiveness & polish
- [ ] Mobile layout pass on every section
- [ ] Accessibility pass (contrast on dark theme, focus states, alt text, semantic headings)
- [ ] Performance check (Lighthouse — especially particle animation cost on lower-end devices)
- [ ] Favicon + meta tags (title, description, Open Graph for link previews)

## Phase 6 — Deployment
- [ ] Choose host (Vercel/Netlify/GitHub Pages) — matches Vite output cleanly
- [ ] Point custom domain (matiyenga.online) at the new deploy
- [ ] Confirm build (`npm run build`) is clean, no TS errors
- [ ] Retire/redirect the old plain-HTML version once new site is live

## Ongoing throughout
- [ ] Keep [AI_Usage.md](AI_Usage.md) updated for major AI-assisted milestones only
- [ ] Keep README.md accurate as stack/structure settles
