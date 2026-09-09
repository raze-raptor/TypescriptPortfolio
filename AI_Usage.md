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
