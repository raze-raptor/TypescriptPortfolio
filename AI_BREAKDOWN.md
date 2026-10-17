# Authorship breakdown: `src/App.tsx` (CSS excluded)

Snapshot taken 2026-10-17. Line numbers drift as the file changes, so treat them as approximate. These are counts of lines in the current file, estimated from the build history. Nothing was committed during the build, so git cannot show authorship, and no tool measured this.

## Headline

| | Lines | Share |
| --- | --- | --- |
| Written by me | about 359 | about 59% |
| Written by AI | 250 | about 41% |
| **Total** | **609** | |

Nearly all of the AI share is decorative SVG illustration. Outside the pictures, AI wrote only a reusable component, a small data list and a few fixes. The structure of the page, the layout, the text and the content are mine.

## What AI wrote (250 lines)

Every one of these was requested by me, usually because the work was fiddly hand-placed SVG coordinates I couldn't reasonably draw.

| Piece | Lines | What it is |
| --- | --- | --- |
| Citadel diagram | 54 | Animated request-flow SVG with rounded nodes, curved branches, travelling packets and hover interaction (`.map()` over two arrays) |
| Contact "SAY HELLO" badge | 47 | Rotating text ring, orbiting nodes, glowing gradient disc and hover arrow |
| About ring | 37 | Rotating "BACKEND · SYSTEMS · SECURITY" text ring with orbiting nodes and a pulsing shield |
| Globe and orbit chips (hero) | 31 | Wireframe globe with rotating meridians and three orbiting language chips |
| Mock web part (section 02) | 23 | Tilted fake browser window with skeleton bars |
| About timeline entries | 17 | Entries rendered from the `timeline` array with `.map()` |
| `citadelHops` and `citadelServices` arrays | 16 | Data for the diagram |
| `Badge` component | 13 | Reusable pill with an optional icon |
| `timeline` array | 6 | Data for the About timeline |
| Scroll-down indicator | 6 | The hero's arrow and "SCROLL" label |
| **Total** | **250** | |

## What I wrote (about 359 lines)

I wrote the structure and content of every section:

- **Hero:** the two-column layout, centring, name, description, location line, buttons and the cycling "Aiming at" words.
- **Tech ticker:** the item list and its duplicated copy for the seamless loop.
- **Section 01 (Citadel):** the header, the ghost-number placement, the three-column description row, the copy and the badge rows.
- **Section 02 (NHS placement):** the two-column layout, the text column, the badge row and all the copy.
- **Section 03 (This site):** the centred column, label, title, paragraph and layer stack.
- **Skills:** the title, the four rows, the labels and their badges.
- **About:** the title, intro paragraph and section layout.
- **Contact:** the headline, text, LinkedIn and GitHub buttons and the footer.

## Small AI contributions inside my lines

These are in the 359 lines above but were supplied or fixed by AI. They are listed so the count above isn't misleading:

- Raw SVG icon path data (location, skills row icons, button arrows) copied from the design document and converted to JSX.
- The `.ghost` numbers' class use, and the Badge row snippets I placed.
- Converting the LinkedIn and GitHub buttons to real links, and a corrected arrow icon for each.
- Setting up the footer's year from `new Date().getFullYear()`.
- Wrapping `<main>` and `<footer>` in a fragment, and fixing the hero columns' `flex-[1_1_340px]` basis after responsive testing.
- Section skeletons (commented slots) that I then filled in.

## Caveats

- This file measures lines, not effort or understanding. A few generated SVG graphics produce a lot of lines, while a short layout decision can matter more.
- CSS is excluded on request. It is a different split: AI wrote most of the animation CSS.
- Config files, `index.html`, the banner export and the Vite template are not counted.
- More detail, with the reasons behind each AI-built piece, is in `AI_Usage.md`.
