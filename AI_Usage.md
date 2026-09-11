# AI Usage Log

This file tracks moments where AI assistance (Claude) contributed to a **major** step in building this project — not a log of every prompt. Small lookups, one-off syntax questions, etc. are not recorded here.

---

## 2026-09-09 — Initial project plan (TypeScript rebuild)

**Prompt:** "Lets go, first time doing typescript (kinda) Where do I start?" (with a handoff doc describing the rebuild goals, stack, and design decisions already in place).

**What it helped with:** Got a concrete, ordered starting plan for the rebuild given a fresh Vite + React + TypeScript scaffold:
1. Orient in the scaffold (`main.tsx`, `App.tsx`).
2. Gut the default Vite counter demo out of `App.tsx`/`App.css`.
3. Install Tailwind 4 + DaisyUI.
4. Configure a custom DaisyUI dark theme (base-100/200/300 + blue primary) matching prior design decisions.
5. Build the hero section shell (two-column layout, terminal-style prompt line, name, subtitle, scroll cue, placeholder particle slot).

No application code was written by the AI — guidance/plan only, per working agreement (AI explains and points to locations; I write the implementation myself).

---

## 2026-09-09 — Roadmap for the full project

**Prompt:** "Actually, create me a plan to follow throughout my whole portfolio project."

**What it helped with:** Produced `ROADMAP.md`, a phased checklist covering the entire build (tooling → design system → hero → particle visual → remaining sections → responsiveness/polish → deployment), committed to the repo so progress is trackable phase by phase instead of re-deriving a plan each session.

---

## 2026-09-09 — Global layout shell decision

**Prompt:** Asked what "decide global layout shell (max-width container vs full-bleed sections)" meant and which to use.

**What it helped with:** Walked through the tradeoff (single centered column vs. full-bleed sections with an inner max-width wrapper) with a visual ASCII comparison, and identified that full-bleed sections with alternating `base-100`/`base-200` backgrounds was the only option that actually makes use of the layered DaisyUI surface tokens already planned in the design. Decision recorded in `ROADMAP.md`.

---

## 2026-09-09 — End-of-session roadmap verification

**Prompt:** "Confirm all checked off boxes have ACTUALLY been done."

**What it helped with:** Audited every checked box in `ROADMAP.md` against the real files (`vite.config.ts`, `index.css`, `App.tsx`) rather than taking the checklist at face value. Found two boxes that were checked but didn't match what they claimed: the "custom DaisyUI theme" box only enabled DaisyUI's stock `dark` theme (no custom near-black base or blue primary), and the "pick fonts" box only added a sans font (Roboto) with no mono face for the terminal line. Flagged both instead of confirming blindly, and drafted (but did not run) a commit message reflecting the actual state.

---

## 2026-09-10 — Boundary correction: CSS snippets overstepped the "guide, don't code" agreement

**What happened:** When asked how to add a blinking cursor and a pulsing background effect, the AI handed over complete, paste-ready CSS (`@keyframes` blocks and full rules) rather than explaining the technique and pointing to references. This oversteps the working agreement — the only standing exception is DaisyUI markup/class snippets (inert class names), not authored CSS logic like animations. The user caught this and corrected it.

**Correction going forward:** For CSS effects (animations, transitions, etc.) as with TSX logic, the AI will explain the concept/technique and point to relevant docs or a short illustrative fragment (not a complete, drop-in block), and let the user write the actual rule. See the corrected explanation of the typewriter effect given immediately after this correction as the reference example of the right level of guidance.

---

## 2026-09-11 — Terminal prompt alignment bug, diagnosed and fixed

**Prompt:** "How do I fix this? The whoami isnt centered with the data prefix" (with a screenshot).

**What it helped with:** Diagnosed why the `:~$` prefix and the `whoami` text weren't visually aligned (baseline alignment between DaisyUI's `mockup-code` prefix pseudo-element and a larger custom `text-lg` code element), verifying the cause and the fix by testing both the current markup and a candidate fix in a headless browser (Chromium + Firefox) before recommending it. Fix identified: add `flex items-center` to the `<pre>`. Guidance only — the class was typed in by the user.

---

## 2026-09-11 — Section-seam blend effect: attempted, then scrapped

**What happened:** Explored smoothing the hard visual seam between the hero and about section backgrounds using a blurred, gradient `::after` pseudo-element on `#hero` (a "scrim"/gradient-mask-fade technique). Iterated across several correctness passes as the user built it by hand (missing `position: relative`, `background-color` used instead of `background-image`, percentage vs. fixed sizing, missing `filter: blur()` and `z-index`). The user decided it wasn't worth pursuing further and asked for it to be removed; the AI deleted the `#hero::after` rule and reverted the now-unneeded `position: relative` on `#hero` directly, since it was cleanup of an abandoned attempt rather than new implementation.

---

## 2026-09-11 — 3D dotted globe: sourced, installed, and wired into the About section

**Prompt:** "How do I get a 3d dotted earth in this?" → "Isnt there a Globe.tsx I can rip from somewhere?"

**What it helped with:** Recommended `cobe` (a lightweight canvas globe library) and pointed to Magic UI's prebuilt `Globe` component (built on cobe) as a legitimate, ready-made source rather than hand-rolling the WebGL/canvas logic from scratch. The `shadcn` CLI install initially produced a broken, non-functional stub file; re-running `shadcn init` properly surfaced a missing import-alias configuration, which the AI fixed directly by adding a `@/*` path alias to `tsconfig.json`, `tsconfig.app.json`, and `vite.config.ts` (build-tooling boilerplate, not app design, so handled directly rather than described). Once the real component installed correctly at `src/components/ui/globe.tsx`, guided placement into `#about-right-content`, including the `relative`/`min-h-96` fix needed for the component's `absolute inset-0` internal layout to actually render — these final wiring edits were applied directly since they matched exactly what had already been specified in words.
