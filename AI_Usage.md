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

---

## 2026-10-16 — Hero section: two-column layout restructure

**What it helped with:** Guided (no direct edits) restructuring the hero from a single centered column to a two-column flex layout matching a design mockup — explaining `flex`/`flex-wrap`/`flex-1`/`items-center` and why centering must sit on the element that actually has height (`#hero`, not `#hero-content`); why `w-full` was needed before `max-w` + `mx-auto` could center the row; why an inline SVG icon rendered above text instead of beside it (Tailwind preflight sets `svg { display: block }`, fixed by making the parent a flex row); and how to load/apply a Google Font via `index.css`. User wrote all the JSX/CSS changes themselves. Pointed at docs for the CSS keyframe/stagger-delay technique behind the cycling role text, left for the user to implement.

---

## 2026-10-16 — Direct edit: cycling-role-text layout bug (user said "just fix it")

**What happened:** User built the `@keyframes roleCycle` animation and `.role-word`/`nth-child` stagger themselves and it worked, but the "AIMING AT [cycling word]" line was still misaligned (wrapping below the heading text instead of sitting inline). User explicitly asked AI to fix it directly rather than keep debugging it step by step. AI edited `App.tsx`: wrapped "AIMING AT" in its own `<span>` (previously a bare text node mixed with a flex child, ambiguous for layout) and gave the absolutely-positioned word stack an explicit `h-[1.4em]` (it was collapsing to zero height since all its children were `position: absolute`, taken out of normal flow). **Worth understanding:** why an element containing only absolutely-positioned children has no height of its own, and why mixing raw text with flex children in JSX can behave unpredictably — give it its own element instead.

---

## 2026-10-16 — Direct build: spinning wireframe globe (user said "just build it")

**What happened:** User was taught raw SVG fundamentals (`viewBox`, coordinate system, `<circle>`/`<ellipse>`, `fill`/`stroke`) for the right-hero globe graphic, considered a Lottie animation as an alternative (declined — adds a dependency and requires sourcing an external animation file, neither of which fit a hand-built portfolio), then explicitly said to just build the SVG globe directly rather than hand-code coordinates themselves. AI wrote the globe markup into `App.tsx` (`#right-hero`): a wireframe sphere (one outer ring circle, one accent circle, static latitude ellipses, six rotating "meridian" ellipses staggered with negative `animation-delay`s to fake 3D rotation) plus five small swaying dots, ported from the design mockup's CSS-only approach (no new dependency, same `@keyframes`/`animation-delay` technique already used for the cycling role text). New CSS added to `index.css` under `/* globe */`: `.globe-ring`, `.globe-meridian`, `.globe-dot` classes and their keyframes, plus a `prefers-reduced-motion` override. **Worth understanding:** the `rx`/`cx` properties can be CSS-animated directly (not just `transform`) — that's what makes the meridian ellipses appear to rotate in 3D without any JS; and how CSS custom properties (`--a`, `--b`) are set per-element via inline `style` and consumed inside a shared `@keyframes` rule, letting one animation definition drive five dots with different start/end positions.

---

## 2026-10-16 — Direct build: orbiting language chips (TS/C#/Python)

**What happened:** Continuation of the globe build, same session. User asked for orbiting chips showing the languages they know, in the same breath as feedback on the accent color (no separate "just do it" needed, picked up as a continuation of the already-authorized globe work). AI added three chips (TypeScript, C#, Python, as text monograms rather than fetching real brand icons/logos, avoiding a new dependency or asset) that orbit around the globe and counter-rotate so their labels stay upright while circling — ported from the design mockup's same CSS-only pattern, no JS. New CSS in `index.css` under `/* orbiting language chips */`. **Worth understanding:** the counter-rotation trick — the outer `.orbit` wrapper spins the whole ring, each `.orbit-slot` is offset 0°/120°/240° around that ring, and the chip's inner `<span>` runs its own animation rotating the *opposite* direction at the same speed, which cancels out the parent's spin so the text itself never looks upside-down.
