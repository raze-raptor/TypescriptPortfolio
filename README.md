# Matthew Matiyenga — Portfolio

Personal portfolio site, rebuilt from scratch in TypeScript. It brings together my projects and a rough roadmap of where I'm at with education and employment — a living site rather than a static one-pager.

Live domain: [matiyenga.online](https://matiyenga.online) · Old plain-HTML version: [raze-raptor/portfolioSite](https://github.com/raze-raptor/portfolioSite)

## Stack

- **React + TypeScript**, scaffolded and bundled with **Vite**
- **Tailwind CSS 4** + **DaisyUI** for styling/components
- [cobe](https://github.com/shuding/cobe) (via Magic UI's `Globe` component) for the rotating dotted-globe visual

## Why this exists / how it's built

I'm keeping AI involvement deliberately minimal. With so much of the digital world leaning on it now, I want this repo to show what I can actually build myself — informed by what I've picked up on the Applications Development Team at Barnsley Hospital NHS Foundation Trust, and my T Level 3 course at Barnsley College.

In practice: AI assistance on this project is used for explaining concepts, pointing at documentation, and diagnosing bugs — not for writing the application code itself. The exceptions and the handful of times that line was crossed (and corrected) are logged transparently in [AI_Usage.md](AI_Usage.md), which only records major milestones, not routine Q&A.

## Project docs

- [ROADMAP.md](ROADMAP.md) — phased build checklist, current status
- [AI_Usage.md](AI_Usage.md) — log of major AI-assisted milestones
- [goodbye.md](goodbye.md) — end-of-session notes for picking work back up

## Running locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
```

## Feedback / contributions

Still in progress, and open to feedback, support, or contributions if anyone's interested feel free to open an issue or PR.
