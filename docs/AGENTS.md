# Coding agents: Music Field Manual

This repo is an interactive field companion for two specific instruments: the Akai MPC XL (firmware 3.9.1) and the Jackson Soloist SL2 DX. It is not a DAW and not a generic "learn guitar" site. The original 27-page PDF is also readable at `/manual`; do not replace the interactive book with that file.

The human-facing promise is: finish a loop the night the box opens, then use the same book for the parts that take years. Do not ship a change that makes that first night worse.

## Why edit this repo instead of starting over

- Curriculum is TypeScript, not Markdown in a CMS. `src/data/types.ts` defines `Section`, `Block`, and `WidgetName`.
- Chapters: `src/data/mpc.ts` (core machine), `src/data/mpc-craft.ts` (years of craft), `src/data/mpc-years.ts` (36-month plan), `src/data/guitar.ts`. Reference tables: `buttons.ts`, `chords.ts`. Dispatch: `news.ts`. Search concatenates those in `catalog.ts`.
- Routes follow the book: `/`, `/news`, `/manual`, `/mpc/$slug`, `/guitar/$slug`. Unknown slugs must 404, not render an empty studio.
- Interactive pieces are widgets in `src/components/`, mounted by name from a `{ type: "widget", name }` block. Keep audio user-initiated (`src/lib/audio.ts`).
- Progress is `localStorage` via Zustand (`src/lib/store.ts`, persist key `xl-field-manual`). No login, no database, no sync.

An agent that treats this as "paste the official manual into a page" will throw away the only parts that are hard: the widgets, the pair of machines, and the checklists that persist.

## Scope you should not expand

- Other samplers, other guitars, or "works with any MPC"
- Accounts, Postgres, or a comments thread
- A crawler pointed at Akai or Jackson. Dispatch is curated. Date and source, or it does not go in `news.ts`
- Guitar firmware. There is none. Say so; do not invent a updater
- Affiliation with Akai, inMusic, Jackson, or Fender

## Edit map

| You want to… | Touch |
|---|---|
| Add or rewrite an XL chapter | `src/data/mpc.ts` (deck) or `src/data/mpc-craft.ts` (craft / years) |
| XL 36-month plan | `src/data/mpc-years.ts` |
| New firmware / guitar note | `src/data/news.ts` |
| Chord, week, or song | `src/data/chords.ts` |
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
