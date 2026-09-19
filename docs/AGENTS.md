# Coding agents: Music Field Manual

This repo is an interactive field companion for two specific instruments, the Akai MPC XL (firmware 3.9.1) and the Jackson Soloist SL2 DX, plus the board of eight pedals that sits between them. It is not a DAW and not a generic "learn guitar" site. The original 27-page PDF is also readable at `/manual`; do not replace the interactive book with that file.

The human-facing promise is: finish a loop the night the box opens, then use the same book for the parts that take years. Do not ship a change that makes that first night worse. The guitar side should sound like a teacher sitting next to you: warm, specific, no heroics. Twenty honest minutes. Do not turn the technical XL chapters into pep talk.

## Why edit this repo instead of starting over

- Curriculum is TypeScript, not Markdown in a CMS. `src/data/types.ts` defines `Section`, `Block`, and `WidgetName`.
- Chapters: `src/data/mpc.ts` (core machine), `src/data/mpc-craft.ts` (years of craft), `src/data/mpc-tech.ts` (engine, ticks, matrix, CV), `src/data/mpc-years.ts` (36-month plan), `src/data/guitar.ts`. Reference tables: `buttons.ts`, `chords.ts`. Dispatch: `news.ts`. Search concatenates those in `catalog.ts`.
- Routes follow the book: `/`, `/news`, `/manual`, `/mpc/$slug`, `/guitar/$slug`. Unknown slugs must 404, not render an empty studio.
- Interactive pieces are widgets in `src/components/`, mounted by name from a `{ type: "widget", name }` block. Keep audio user-initiated (`src/lib/audio.ts`).
- Progress is `localStorage` via Zustand (`src/lib/store.ts`, persist key `xl-field-manual`). No login, no database, no sync.

An agent that treats this as "paste the official manual into a page" will throw away the only parts that are hard: the widgets, the pair of machines, and the checklists that persist.

## The pedals

`src/data/pedals.ts` is a typed record per pedal, ordered by an explicit `order` field rather than by array position, and rendered by the `board` widget as a signal chain with a live supply budget.

Two rules that are easy to break by accident:

- **`mA` is nullable and that is load-bearing.** Builders publish a *minimum supply rating* far more often than a measured draw, and some publish nothing at all. A `null` means nobody published a figure. Do not fill one in with a plausible number for a pedal of that type: the widget totals these into a budget a reader will size a power supply against, and a guess there is worse than a gap. Where two published figures disagree, take the larger and say so in `power`.
- **Manuals are linked, not vendored.** `manual.href` points at the builder's own manual index or product page. Do not commit somebody else's PDF into an MIT repo, and do not link a URL you have not seen resolve.

Pedals belong to the guitar part. `/guitar/board` and `/guitar/chain` are the board's chapters and `/mpc/board` is how it meets the sampler. Do not promote pedals to a third `Part`.

## Scope you should not expand

- Other samplers, other guitars, or "works with any MPC"
- Accounts, Postgres, or a comments thread
- A crawler pointed at Akai or Jackson. Dispatch is curated. Date and source, or it does not go in `news.ts`
- Guitar firmware. There is none. Say so; do not invent a updater
- Affiliation with Akai, inMusic, Jackson, or Fender

## Edit map

| You want to… | Touch |
|---|---|
| Add or rewrite an XL chapter | `src/data/mpc.ts` (deck) or `src/data/mpc-craft.ts` (craft / years) or `src/data/mpc-tech.ts` (engine / ticks / CV) |
| XL 36-month plan | `src/data/mpc-years.ts` |
| New firmware / guitar note | `src/data/news.ts` |
| Chord, week, or song | `src/data/chords.ts` |
| A pedal, its specs or its manual link | `src/data/pedals.ts` |
| Button legend | `src/data/buttons.ts` |
| Make a new control | widget in `src/components/`, name in `WidgetName`, mount from a block |
| Theme | `src/lib/theme.ts`, `src/styles.css` |
| Persistence | `src/lib/store.ts` |
| The original PDF | `public/manuals/mpc-xl-field-manual.pdf`, reader in `src/components/pdf-reader.tsx` |

After an add, confirm the section appears in search (catalog is derived) and that `npm run typecheck` still passes.

## Commands

```
npm install
npm run dev
npm run typecheck
npm run build
```
