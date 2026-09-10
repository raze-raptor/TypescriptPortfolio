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
