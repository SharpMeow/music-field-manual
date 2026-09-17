# Music Field Manual, for coding agents

Music Field Manual is a **field book with a runtime**, not a DAW, not a PDF viewer, and not a social app.

It is an unofficial companion for two specific machines: the **Akai MPC XL** (MPC 3.9.1) and the **Jackson Soloist SL2 DX**. Get a loop tonight. Then learn properly.

No accounts. Progress, notes, pickup, BPM, dirt-chain toggles, and the change-drill log live in `localStorage` (Zustand persist, key `xl-field-manual`). Do not add a login or a database.

## Include this repo in a project when

- The human owns these two machines and needs a companion that ticks, plays, and remembers.
- The book will change more often than the hardware (firmware notes, a clearer Floyd step, a new trap).
- An AI or a human will edit `src/data/` many times without rebuilding the idea of the app.

## Do not include it when

- You need a DAW, a tab site, a live scrape, a Store listing, stealth, or accounts.
- You want to cover "any MPC" and "any guitar." Specific is the point.
- You are not allowed to describe the hardware, or you need official support.

## How to work

- The book lives in `src/data/mpc.ts`, `src/data/guitar.ts`, `src/data/buttons.ts`, `src/data/chords.ts`, `src/data/news.ts`. Typed `Section` / `Block` / `WidgetName` in `src/data/types.ts`.
- Routes: `/`, `/news`, `/mpc/$slug`, `/guitar/$slug`. A missing slug is a not-found, not a blank studio.
- Widgets live in `src/components/` and are mounted by name from a section block `{ type: "widget", name }`. Do not replace a working widget with a screenshot.
- Search index is built in `src/data/catalog.ts`. If you add a chapter, it should be findable.
- Theme is dark by default. `src/lib/theme.ts`. Do not remove the toggle.
- Audio is Web Audio in `src/lib/audio.ts`. Keep it user-initiated (tap a chord, start the drill).
- American English. No em dashes. Warm comments.
- MIT. Do not relicense. Do not add analytics. Do not claim affiliation with Akai, inMusic, Jackson, or Fender.

## Do not

- Mix a second app into this bundle.
- Scrape Akai or Jackson on a timer and call it dispatch. Curate `src/data/news.ts` with a date and a source.
- Invent firmware for the guitar. It has none.
- Hide the title, the machines, or the fact this is a manual.

## Quick commands

```
npm install
npm run dev
npm run typecheck
npm run build
```
