# AI Usage Log

This file records where AI assistance (Claude) contributed to a **major** step in building this project. It is not a log of every prompt: small lookups, one-off syntax questions and minor tweaks are not recorded.

## How to read this

Every entry below is tagged with who did the work:

- **[SOLO]** — written by me with no AI involvement beyond reading docs.
- **[GUIDED]** — AI explained the concept or pointed me at the next step; **I wrote the code myself**.
- **[AI-BUILT]** — AI wrote the code, usually because it was boilerplate, config, or fiddly coordinate work (SVG), and I asked it to.
- **[AI-FIX]** — AI diagnosed and fixed a specific bug.

Working agreement: AI explains and reviews; I write the front-end structure and logic. AI writes the mechanical parts (config, boilerplate, converting mockup HTML into JSX, hand-placed SVG) when I ask.

## At a glance

| Area | Who did it |
| --- | --- |
| Hero layout (two-column flex, centring, name, description, buttons) | **I wrote it** [GUIDED] |
| Cycling "Aiming at" text (stacking, `@keyframes`, staggered delays, fill-mode) | **I wrote it** [GUIDED]; AI fixed one alignment bug |
| Tech ticker (item list, duplicated track, `gap`, spacing) | **I wrote it** [GUIDED] |
| Spinning globe and orbiting language chips | AI built it [AI-BUILT] |
| Citadel header (label, title, flex row) | **I wrote it** [GUIDED] |
| Citadel diagram (animated request flow) | AI built it, twice [AI-BUILT] |
| Citadel description row and badges | **I wrote the row** [GUIDED]; AI built the `Badge` component [AI-BUILT] |
| Section 02 (NHS placement): layout and text column | **I wrote it** [SOLO/GUIDED]; AI built the mock web part [AI-BUILT] |
| Section 03 ("This site"): content and layer stack | **I wrote it** [SOLO]; AI supplied the ghost number and GitHub button markup |
| Tailwind / DaisyUI config, DaisyUI accent colour | AI [AI-BUILT / AI-FIX] |
| Indeed banner export (not part of the site) | AI built it [AI-BUILT] |

---

## 2026-10-16 — Fresh rebuild: orienting in the Vite + React + TypeScript scaffold [GUIDED, then AI-BUILT cleanup]

**Prompt:** "Explain the filesystem to me in a typescript project, where do I start, how are things MEANT to look" → "first time (ish) using a framework how do i know what to delete and where to start"

**What it helped with:** Walked through the entry-point chain (`index.html` → `main.tsx` → `App.tsx`) and the convention for where code should live as the project grows. Identified everything in the default `App.tsx`/`App.css` as Vite/React template demo content (counter button, React/Vite logos, docs/Discord links, `.ticks` decoration) versus my own assets. AI made these specific deletions directly at my request at the time (`react.svg`, `vite.svg`, `icons.svg`, and the matching JSX/CSS), before the working agreement below was stated.

---

## 2026-10-16 — Tailwind/DaisyUI installed but not wired up [AI-FIX]

**What it helped with:** Diagnosed why Tailwind classes typed into `App.tsx` weren't rendering: `tailwindcss`, `@tailwindcss/vite` and `daisyui` were in `package.json`, but `vite.config.ts` never loaded the Tailwind plugin and `index.css` had no `@import "tailwindcss";`. AI made that fix directly (config), before the working agreement below.

---

## 2026-10-16 — Working agreement: AI must not edit code unless asked

I set a standing project-wide rule: Claude does not edit code unless I explicitly say so. AI gives guidance and review; I write the implementation. The two earlier AI edits (scaffold cleanup, Tailwind wiring) predate the rule and are logged above for transparency. Every later AI edit in this file happened because I asked for it ("just do it", "build it for me").

---

## 2026-10-16 — Hero section: two-column layout [GUIDED — I wrote the code]

AI explained, and **I wrote all the JSX/CSS changes**: `flex`, `flex-wrap`, `flex-1` and `items-center`; why centring has to sit on the element that actually has height (`#hero`, not `#hero-content`); why `w-full` was needed before `max-w` + `mx-auto` could centre the row; why an inline SVG rendered above its text (Tailwind's preflight sets `svg { display: block }`, fixed with a flex parent); and how to load a Google Font. I also wrote the location line, name, description and both buttons myself. The only AI-supplied markup in the hero was the raw SVG icon paths, converted to JSX because I can't derive path data.

---

## 2026-10-16 — Cycling "Aiming at" text [GUIDED — I wrote it; AI-FIX for one bug]

**I wrote** the stacked words (`position: absolute` inside a `relative` wrapper), the `@keyframes roleCycle` rule (fade in, hold, fade out, stay invisible), the `.role-word` class, the `:nth-child()` `animation-delay` stagger, and the `animation-fill-mode: backwards` fix for words overlapping on page load. AI taught the concepts step by step (keyframes, percentages as a share of total duration, why one recipe plus staggered delays gives a cycle, why `backwards` hides words during their delay) and reviewed each attempt.

**AI-FIX:** when the "AIMING AT [word]" line was still misaligned I asked AI to fix it directly. It wrapped "AIMING AT" in its own `<span>` and gave the word stack an explicit `h-[1.4em]`, because a parent containing only `position: absolute` children collapses to zero height. **Worth understanding:** why absolutely-positioned children contribute no height to their parent.

---

## 2026-10-16 — Tech ticker [GUIDED — I wrote it]

I wrote the ticker CSS (`.ticker-track`, `width: max-content`, `translateX(-50%)` keyframes), the full technology list, and the duplicated second copy that makes the loop seamless. AI explained why the duplication is needed (the `-50%` slide must land on something identical to the start) and pointed out the missing `gap`.

---

## 2026-10-16 — Spinning wireframe globe and orbiting language chips [AI-BUILT]

I was taught raw SVG basics (`viewBox`, `<circle>`, `<ellipse>`, `fill`/`stroke`), considered a Lottie animation (declined: new dependency and an external file), and then asked AI to build the globe directly because hand-placing the coordinates wasn't worth it. AI wrote the globe in `#right-hero`: a wireframe sphere, six "meridian" ellipses staggered with negative `animation-delay`s to fake 3D rotation, and five swaying dots, with CSS under `/* globe */` in `index.css`. As a continuation, AI added three orbiting chips (TS, C#, PY as text monograms, no new dependency) that counter-rotate so their labels stay upright, CSS under `/* orbiting language chips */`. **Worth understanding:** `rx` and `cx` can be CSS-animated directly; CSS custom properties (`--a`, `--b`) set per element and consumed in one shared `@keyframes`; the counter-rotation trick for the chips.

---

## 2026-10-16 — Config: DaisyUI accent colour [AI-BUILT, config]

I chose the site's purple as the one accent colour. DaisyUI's `btn-accent` rendered teal because DaisyUI's own `accent` token is unrelated to my `--accent` variable despite the shared name. AI added `--color-accent` and `--color-accent-content` to `:root` in `index.css`. **Known issue:** this override evidently does not win against DaisyUI's theme, so some DaisyUI accent components still render teal. Not yet fixed.

---

## 2026-10-16 — Citadel diagram [AI-BUILT, twice]

For "01 Citadel" I agreed the animated request-flow diagram was too fiddly to hand-place and asked AI to build it. First version: ported from the mockup, with a travelling dot, flowing dashed lines and pulsing service boxes (`/* diagram */` in `index.css`).

I then asked for it to be much smoother and interactive with no new dependencies. AI rebuilt it with rounded nodes, curved Bézier branches, native SVG `<animateMotion>` so one packet travels Internet → Authentik and then six packets split to the services, glow rings on arrival, and CSS-only hover (a hovered service lifts and lights its route while the others dim, using `:has()`). The services and hops are now two arrays rendered with `.map()`. **Worth understanding:** `.map()` with `key`, and `:has()`.

---

## 2026-10-17 — Citadel header, description row and badges [GUIDED row; AI-BUILT Badge]

**I wrote** the header (label, title, flex row), the ghost "01" placement, and the three-column description row and its copy, guided on `flex-[grow_shrink_basis]` columns and `flex-wrap` stacking. DaisyUI `badge-outline` rendered nearly invisible (its colour comes from `--badge-color`, which a plain `badge` never sets), and `badge-accent` rendered teal. I asked AI to build the badges directly: a `Badge` component in `App.tsx` (`icon`, `className`, `children` props) with the pill styling and purple icon, used for the "Built with Claude…" badge and the Self-hosting / SSO / Linux tags. AI also corrected `font-[family:var(--header)]` to `font-[family-name:var(--header)]`. **Worth understanding:** a React component with typed props and `children`.

---

## 2026-10-17 — Section 02, NHS placement [mostly SOLO/GUIDED; AI-BUILT mock web part]

**I wrote** the section's structure: the two-column flex row, the right-hand text column (label, title, description, "Internal work" note) and the badge row. AI added the ghost "02" (reusing `.ghost`), supplied the badge row snippet using my `Badge` component, and diagnosed why my title looked unstyled (Tailwind's preflight resets `h1`–`h6` to plain text).

**AI-BUILT:** at my request, the left-hand "mock SPFx web part": a tilted fake browser window with a title bar and pulsing skeleton bars, so the work can be shown without exposing anything internal to the NHS. CSS under `/* mock web part */`. **Worth understanding:** negative `animation-delay` to stagger the bars; `aria-hidden` on decoration.

---

## 2026-10-17 — Section 03, "This site" [SOLO content; AI supplied ghost number and button]

**I wrote** the centred column, label, title, paragraph and layer stack. AI added the ghost "03" and the centred container (reusing `.ghost`), and converted the mockup's raw HTML GitHub button to JSX in the site's DaisyUI style (`btn btn-dash`, the shared icon utilities, and a `group`/`group-hover:` arrow). AI briefly generated the whole element structure for the section; I asked for that to be undone and none of it remains. **Worth understanding:** Tailwind's `group`/`group-hover:`, and `class` → `className` when moving HTML into JSX.

---

## 2026-10-17 — Skills section: row label icons

AI was unavoidable here. The four row icons (Languages, Frameworks, Tools, Learning now) come from the design document as raw SVG path data, which I can't write or derive by hand, so AI added them next to each label. The rest of the Skills section is my own work.

---

## 2026-10-16 — Indeed banner export (`banner/`, gitignored, not part of the site) [AI-BUILT]

I wanted the hero as a static banner for my Indeed profile and asked for a file to screenshot plus ideally a `.psd`. AI explained a real `.psd` can't be generated by writing code and built `banner/indeed-banner.html` instead: static, 1584×396px (a guessed ratio, not a verified Indeed spec). It was revised several times at my request: orbiting chips as fixed circles, all four role words listed with connector lines, a `>_` colour bug (the text wasn't wrapped in a `<span>`, so the accent rule didn't apply), a layout gap (`space-between` → `center` with a fixed gap), and "Aiming at" placed beside the word list instead of above it. It's a disposable asset outside `src/`.
