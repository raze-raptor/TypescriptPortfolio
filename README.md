# Matthew Matiyenga: Portfolio

My personal portfolio, live at [matiyenga.online](https://matiyenga.online). It's a single-page site built in TypeScript, and the first project I've taken all the way to completion.

It covers who I am (T Level Software Development student, placement developer at Barnsley Hospital NHS Foundation Trust), what I'm aiming at (backend, systems, security and frontend), my skills, and Citadel, the self-hosted homelab I run.

## Stack

- React 19 and TypeScript, bundled with Vite
- Tailwind CSS 4 and DaisyUI 5
- JetBrains Mono and Schibsted Grotesk via Google Fonts
- No animation library. The globe, the Citadel diagram and the rotating rings are inline SVG with CSS keyframes and native SVG `<animateMotion>`.

## What's on the page

- **Hero:** name, a cycling "Aiming at" line, a wireframe globe with orbiting TS, C# and PY chips, and a scrolling tech ticker.
- **01 Citadel:** an animated request-flow diagram (Internet, Cloudflare Tunnel, Nginx Proxy Manager, Authentik SSO, then the services). Hover or tap a service to light its route. There's a separate vertical layout for phones and tablets.
- **02 NHS placement:** a mock SPFx web part, so the work can be shown without exposing anything internal.
- **03 This site:** how the site itself is built.
- **Skills:** four rows (languages, frameworks, tools, learning now) with a reverse-direction ticker.
- **About:** a timeline and a rotating "BACKEND · SYSTEMS · SECURITY" ring.
- **Contact:** LinkedIn and GitHub links.

The page is dark only and responsive down to phone width. Animations have a `prefers-reduced-motion` override.

## Running locally

You need Node.js and npm.

```
npm install
npm run dev       # dev server with hot reload
npm run build     # type-check, then production build into dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Project layout

```
index.html        page shell and meta tags
src/main.tsx      React entry point
src/App.tsx       the whole page: data arrays, Badge component, every section
src/index.css     Tailwind import, theme variables and all animation CSS
src/App.css       one small hero style rule
src/assets/       images
public/           favicon
```

Everything lives in `App.tsx` for now. Splitting it into components is the obvious next step.

## How AI was used

This was built with Claude, and I've kept a record of it rather than hiding it.

- [`AI_Usage.md`](AI_Usage.md) logs each major step and tags it: **SOLO** (me), **GUIDED** (Claude explained, I wrote the code), **AI-BUILT** (Claude wrote it at my request) or **AI-FIX** (Claude diagnosed and fixed a bug).
- [`AI_BREAKDOWN.md`](AI_BREAKDOWN.md) estimates the split for `src/App.tsx`: about 359 of 609 lines are mine (59%) and 250 are Claude's (41%). Almost all of Claude's share is decorative SVG: the Citadel diagram, the globe, the About and Contact rings and the mock web part. The page structure, layout, copy and content are mine.
- Claude also wrote most of the animation CSS and the Tailwind and DaisyUI config, and ran the responsive pass.

The line counts are estimates. Nothing was committed during the build, so git history can't show who wrote what.

## Known issues

- Some DaisyUI components that use the `accent` colour still render teal instead of the site's purple. The override in `index.css` doesn't win against DaisyUI's theme yet.

## Links

- Live site: [matiyenga.online](https://matiyenga.online)
- LinkedIn: [Matthew Matiyenga](https://www.linkedin.com/in/matthew-matiyenga-3b5793355)
- Earlier plain-HTML version: [raze-raptor/portfolioSite](https://github.com/raze-raptor/portfolioSite)
