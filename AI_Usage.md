# AI Usage Log

This file tracks moments where AI assistance (Claude) contributed to a **major** step in building this project — not a log of every prompt. Small lookups, one-off syntax questions, etc. are not recorded here.

---

## 2026-10-16 — Fresh rebuild: orienting in the new Vite + React + TypeScript scaffold

**Prompt:** "Explain the filesystem to me in a typescript project, where do I start, how are things MEANT to look" → "first time (ish) using a framework how do i know what to delete and where to start"

**What it helped with:** Walked through the entry-point chain (`index.html` → `main.tsx` → `App.tsx`) and the convention for where code should live as the project grows. Identified everything in the default `App.tsx`/`App.css` as Vite/React template demo content (counter button, React/Vite logos, docs/Discord links, `.ticks` decoration) versus the user's own assets, and explained the tell (anything naming the tool itself, or demonstrating a framework feature rather than showing real content, is boilerplate). AI made these specific deletions directly at the user's request at the time — `react.svg`, `vite.svg`, `icons.svg`, and the corresponding JSX/CSS — since this was before the "don't edit code for me" agreement below was stated.

---

## 2026-10-16 — Tailwind/DaisyUI installed but not wired up

**What it helped with:** Diagnosed why Tailwind utility classes (e.g. `bg-[#121413] bg-[radial-gradient(...)]`) typed into `App.tsx` weren't rendering — `tailwindcss`/`@tailwindcss/vite`/`daisyui` were present in `package.json`, but `vite.config.ts` never loaded the Tailwind Vite plugin and `index.css` had no `@import "tailwindcss";`. AI made this specific fix directly at the time (adding the plugin + import), before the no-edit agreement below was stated.

---

## 2026-10-16 — Working agreement: AI must not edit code unless explicitly asked

**What happened:** User set a standing project-wide rule: Claude must not edit any code unless explicitly told to, going forward. This supersedes any earlier back-and-forth in this session where AI made direct edits (scaffold cleanup, Tailwind wiring) — those were done before the rule was stated and are logged above for transparency, but are not the pattern going forward. From this point on, AI gives guidance/explanation only; the user writes the implementation.
