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

## 2026-10-16 — Config: DaisyUI accent theme color

**What happened:** User picked the site's purple (`--accent`) as the design's one accent color and switched the location icon to it, but `btn btn-accent` (DaisyUI) rendered a default teal, not the purple — a naming collision, not a bug: DaisyUI's `accent` is its own theme token, unrelated to the user's `--accent` CSS variable despite the shared name. This is config/setup territory (falls under "AI does the boring/mechanical parts" in the working agreement, not the no-edit rule), so AI fixed it directly: added `--color-accent: var(--accent);` and `--color-accent-content: #0B1112;` to `index.css`'s `:root` block, so DaisyUI's accent-colored components (now and in future, e.g. badges, borders) pull from the same variable instead of needing a one-off override per component.

---

## 2026-10-16 — One-off asset: Indeed banner export file

**What happened:** User liked the hero's look enough to want it as a static banner image for their Indeed profile, and asked for a file to screenshot plus ideally a `.psd` to keep editing. AI explained a real `.psd` can't be produced by writing code (proprietary binary format; anything claiming to be one would be fake/unopenable) and built a standalone `banner/indeed-banner.html` instead — reopenable in a browser, editable as plain text (e.g. the location line), screenshot it whenever it needs updating. Static, non-animated, fixed at 1584×396px (a guess at a common banner ratio, not a verified Indeed spec — flagged for the user to confirm before use). Lives outside `src/`, not part of the actual site build; a disposable export asset, not app logic.

---

## 2026-10-16 — Banner update: static globe chips + full role-word list

**What happened:** User wanted the banner closer to the real hero — the 3D globe's orbiting language chips back in (TS/C#/Python), and since a screenshot can't show a *cycling* animation, all four role words listed out at once instead of just one ("Backend"), stacked vertically with a short connecting line between each. AI added three `.chip` circles at fixed (non-animated) positions around the globe, and a `#role-stack` list (`BACKEND` / connector / `SYSTEMS` / connector / `SECURITY` / connector / `FRONTEND`) replacing the single "Aiming at Backend" line. Same file, same scope as the earlier banner entry — a disposable export asset outside `src/`.

---

## 2026-10-16 — Direct build: Citadel project diagram (user said it was "fiddly," asked AI to build it)

**What happened:** For the Projects section's "01 Citadel" block, user agreed the animated request-flow diagram (packet traveling Internet → Cloudflare Tunnel → Nginx Proxy Manager → Authentik SSO, then out to self-hosted services) was fiddlier than something worth hand-placing coordinate by coordinate, and asked AI to build it directly. AI ported the SVG from the design mockup into `App.tsx` (boxes, connecting lines, labels, and an animated accent-colored dot that travels the top path) and added three new animations to `index.css` under `/* diagram */`: `.diagram-pkt` (the traveling dot, animates the `cx` coordinate directly), `.diagram-flow` (dashed lines that appear to flow via animated `stroke-dashoffset`), `.diagram-pulse` (the bottom row of service boxes lighting up in sequence via staggered `animation-delay`, same stagger technique as the cycling role text and globe meridians). All with a `prefers-reduced-motion` override.

---

## 2026-10-16 — Citadel diagram redesign: smoother, interactive

**What happened:** User asked for the diagram to be "10x better": less blocky, smoother, interactive, no new dependencies. AI rebuilt it: rounded nodes with a mono sub-label each (e.g. "NO OPEN PORTS", "PASSWORDS"), curved Bézier branches fanning out from Authentik instead of right-angle lines, and a gradient on the top connector. The packet now runs a synced 4-second cycle using native SVG `<animateMotion>` (not CSS): one packet travels Internet → Authentik, then six packets split down each branch, and glow rings fire on Authentik and the services as the packets arrive. Interaction is CSS-only: hovering a service lifts it, lights its route, and dims the rest (`:has()` selector); hovering Authentik lights every route; each service has a native SVG `<title>` tooltip. The six services and four hops now come from two small arrays (`citadelServices`, `citadelHops`) at the top of `App.tsx`, rendered with `.map()`, instead of repeated markup. **Worth understanding:** `.map()` over an array to render repeated JSX (each item needs a unique `key`), and the `:has()` selector — "style X when something inside it is hovered" — which is what lets the dimming work with no React state.

---

## 2026-10-17 — Citadel description row + badges (guided, then direct build)

**What happened:** User wrote the three-column description row under the diagram with guidance (flex row, `flex-[grow_shrink_basis]` columns, `flex-wrap` stacking). DaisyUI `badge badge-outline` rendered nearly invisible: `badge-outline` takes its colour from `--badge-color`, which a plain `badge` never sets, so it fell back to the dim body text colour. `badge-accent` then rendered teal, because DaisyUI's accent token is not picking up the `--color-accent` override in `index.css` (not yet fixed; the "View Projects" button likely has the same problem). User asked for the badges to match the mockup's neutral dark pill and said the markup was getting messy, so AI built them directly: a `Badge` component in `App.tsx` (`icon`, `className`, `children` props) holding the pill styling and purple icon once, used for the "Built with Claude…" badge and the Self-hosting / SSO / Linux tags. Also corrected `font-[family:var(--header)]` to `font-[family-name:var(--header)]`. **Worth understanding:** a React component with typed props and `children`, and why DaisyUI colour classes depend on CSS variables the variant classes set.

---

## 2026-10-16 — Banner fix: ">_" color bug + layout gap

**What happened:** User reported the ">_" prefix wasn't purple and the layout "looked weird." Root cause of the color bug: the banner's `.mono span { color: var(--accent) }` rule only applies to text inside an actual `<span>`, but ">_" was plain text in the `<p>`, not wrapped in one — fixed by wrapping it. For the "weird" layout, re-read it as: `justify-content: space-between` on a 1584px-wide row with a narrow text block and a 300px globe left a large dead gap in the middle, and the role-word list had lost its "Aiming at" context label when it was converted from the live cycling version to a static stacked list. AI tightened the layout (`space-between` → `center` with a fixed `96px` gap) and added the missing "Aiming at" label above the stack.

---

## 2026-10-16 — Direct build: orbiting language chips (TS/C#/Python)

**What happened:** Continuation of the globe build, same session. User asked for orbiting chips showing the languages they know, in the same breath as feedback on the accent color (no separate "just do it" needed, picked up as a continuation of the already-authorized globe work). AI added three chips (TypeScript, C#, Python, as text monograms rather than fetching real brand icons/logos, avoiding a new dependency or asset) that orbit around the globe and counter-rotate so their labels stay upright while circling — ported from the design mockup's same CSS-only pattern, no JS. New CSS in `index.css` under `/* orbiting language chips */`. **Worth understanding:** the counter-rotation trick — the outer `.orbit` wrapper spins the whole ring, each `.orbit-slot` is offset 0°/120°/240° around that ring, and the chip's inner `<span>` runs its own animation rotating the *opposite* direction at the same speed, which cancels out the parent's spin so the text itself never looks upside-down.

---

## 2026-10-16 — Banner fix: "Aiming at" label sitting beside the word stack, not above it

**What happened:** User pointed out the banner's "Aiming at" label and word list were stacked vertically (label on its own line, words in a column below) instead of the label sitting beside the word column as a row. AI restructured `#role-stack` from `flex-direction: column` to `row`, grouping the four words + connectors into a new nested `.word-col` (its own column) so the label and that column sit side by side. Same disposable `banner/indeed-banner.html` asset as the earlier banner entries.
