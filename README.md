# Music Field Manual

[![CI](https://github.com/SharpMeow/music-field-manual/actions/workflows/ci.yml/badge.svg)](https://github.com/SharpMeow/music-field-manual/actions/workflows/ci.yml)
[![License: PolyForm Small Business 1.0.0](https://img.shields.io/badge/license-PolyForm%20Small%20Business%201.0.0-blue)](LICENSE)

A sitting-on-the-desk companion for the **Akai MPC XL** (MPC 3.9.1) and the **Jackson Soloist SL2 DX**.

The XL ships with film on the screen and about 30 GB of content locked behind registration. The Jackson is a Corona Superstrat with a floating Floyd Rose: easy to play, easy to fight if you treat it like a hardtail. Between them sits a board of eight pedals. This is the night you unbox all of it, and the teacher in the room for the weeks after — twenty honest minutes, no heroics, a loop tonight, calluses in a month.

Get a loop out of the box tonight. Then we sit with the machines.

![Tonight: MPC pad 1 armed, then the Jackson](docs/tonight.png)

![How to live in the book](docs/legend.png)

No account. Checklists, notes, pickup position, and the change-drill log stay in this browser.

**[github.com/SharpMeow/music-field-manual](https://github.com/SharpMeow/music-field-manual)** · PolyForm Small Business 1.0.0 · unofficial, not affiliated with Akai, inMusic, Jackson, or Fender

If you are editing this with a coding agent, start with [`docs/AGENTS.md`](docs/AGENTS.md). The book is typed data. The moving parts are named widgets. That split is the whole reason an agent can touch this without flattening it into a blog.

## Contents

- [What you actually get](#what-you-actually-get)
- [Why this exists](#why-this-exists)
- [Who it is for](#who-it-is-for)
- [Who should skip it](#who-should-skip-it)
- [Why a coding agent should use this repo](#why-a-coding-agent-should-use-this-repo)
- [Run it](#run-it)
- [Run with Docker](#run-with-docker)
- [Commands](#commands)
- [Layout](#layout)
- [Contributing](#contributing)
- [License](#license)

---

## What you actually get

- **MPC XL:** day-one through a 36-month plan, a chapter of YouTube-earned shortcuts (double-tap = Shift, Q-Link macros, strip tap, Partial Preset, flatten's three hiding places), then the technical layer — 960 PPQ swing math, the audio engine, 32-slot matrix / followers / MPCe, warp algorithms, filter topologies, keygroup zones, CV volts, Clip Matrix internals, MIDI clock domains, the DSP graph, Stems Pro, grid vs list events. Firmware 3.9.1, traps.
- **Jackson SL2 DX:** what you own, Floyd survival without the scare stories, eight chords, a one-minute change drill that keeps the log, Old Faithful, twenty minutes a day for twelve weeks, songs by what they teach. Written like a teacher sitting next to you.
- **The board:** eight pedals as typed records, not a gear list. Controls, jacks, bypass and published current draw, next to what each one does on *this* guitar and into *this* sampler. An interactive chain with a live supply budget, chain order with the reasoning, the exact cable for every hop, and the point where the board stops being mono. Where a builder published nothing, it says so instead of guessing.
- **Dispatch:** curated firmware and guitar notes, dated, with sources. Filter by machine. The guitar has no firmware. That is written down on purpose.
- **Print edition:** the original 27-page PDF, readable in the app (and downloadable)
- **Studio chrome:** dark by default, light if you want it, search with `⌘K` or `/`

This is a field companion, not a DAW and not a course platform. Ableton will still be there in the morning.

---

## Why this exists

You already paid for two manuals. They are not written for the same evening.

The Akai PDF is complete. It is also a brick. It assumes you already know what a Program is, and it will not tick "update firmware" when you have done it. Justin Guitar and a Floyd diagram in a forum post are fine in isolation. They do not know that the guitar in the room is an SL2 DX with a 1500-series trem, or that the sampler on the desk is an XL on 3.9.1.

Music Field Manual is the pairing: one spine, two machines, interactive where a paragraph would lie.

| | Scope | Tonight | Next week |
|---|---|---|---|
| Official PDFs | every menu, both brands, neither evening | Ctrl+F | still Ctrl+F |
| YouTube / courses | whoever filmed that week | 40 minutes of preamble | a different video |
| Discord pins | a button, maybe the right OS | luck | the pin rots |
| **This** | XL + this Jackson | setup ticks, a loop, eight chords | Track Edit, Floyd, twelve weeks |

The difference is not "we have a website." The difference is that a chord diagram here makes sound, a setup step stays checked after you reload, and the hardware map is the XL in front of you rather than a generic MPC.

---

## Who it is for

- You unboxed an XL and the Wi-Fi password screen is already being weird
- You want a dusty loop before sleep, not a sampling lecture
- You own *this* Jackson, with *this* Floyd, and you would like to change a string without sinking the whole trem
- You come back tomorrow and want the ticks, the notes, and last night's pickup still there
- You are adding a firmware gotcha or a clearer Floyd step, and you would rather edit `src/data/` than rebuild a UI

## Who should skip it

- You wanted a DAW, a cloud locker, or a tab archive for every metal song
- You wanted coverage of "any MPC" and "any guitar." Specific is the point. A generic rewrite will be wrong about the Floyd and the XL's 10.1" workflow
- You need official support. If the unit is dead, Akai or Jackson's page wins
- You wanted a live scrape of marketing blogs. Dispatch is curated. A crawler will go stale and then it will be wrong

---

## Why a coding agent should use this repo

Most music companions on GitHub are either a static Markdown dump or a half-finished DAW. This one is neither, and that is the useful part for an agent.

**The curriculum is data.** Chapters are typed `Section` objects with `Block`s (`p`, `h`, `lead`, `steps`, `table`, `callout`, `kvs`, `widget`, `checklist`). Adding "a new trap about 3.9.1" is an edit to `src/data/mpc.ts`, `src/data/mpc-craft.ts`, or `src/data/news.ts`, not a new React page. Search is generated from the same arrays in `src/data/catalog.ts`, so a chapter you add should show up under `⌘K` without a second pass.

**The interactivity is named, not implied.** Widgets (`hardware`, `chords`, `drill`, `metronome`, `dirt`, `swing`, `pickup`, `scale`, `buttons`, `weeks`, `songs`, `notes`, `news`, `board`) are mounted from `{ type: "widget", name }` in the book. If a section needs a control, attach a widget. Do not replace a working map with "see the diagram above."

**State is local on purpose.** Zustand persist, key `xl-field-manual`. Checks, notes, BPM, pickup, dirt toggles, drill log. Visitors do not sign in. Do not add auth, a database, or "sync my progress" unless the human asked for accounts. They did not.

**The pair is the product.** `/mpc/:slug` and `/guitar/:slug` plus `/news`. Keep both machines. Do not open a third brand. Do not invent guitar firmware. Pedals are guitar gear and live under `/guitar`; they are not a third part.

**News is a file, not a job.** `src/data/news.ts` wants a date and a source. If you cannot cite it, it does not ship.

Work in this order: read [`docs/AGENTS.md`](docs/AGENTS.md), change data or a widget, leave the shell alone unless the shell is the bug. `npm run typecheck` and `npm run build` should still pass.

---

## Run it

Node 22.

```bash
git clone https://github.com/SharpMeow/music-field-manual.git
cd music-field-manual
npm install
npm run dev
```

Open the URL Vite prints (default port 8080).

## Run with Docker

No Node on the machine, or you only want to test the book:

```bash
git clone https://github.com/SharpMeow/music-field-manual.git
cd music-field-manual
docker compose up --build
```

Needs Docker with Compose 2.24 or newer. Open http://localhost:8080. This is the production build served by Node, not the dev server, so edits need another `docker compose up --build`.

There is no database to start and nothing to sign in to. Progress stays in your browser, same as everywhere else. To use another port, copy `.env.example` to `.env` and set `APP_PORT`. `docker compose down` stops it.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on port 8080 |
| `npm run typecheck` | TypeScript, no output files |
| `npm run build` | Production build (Vercel output in `.vercel/`) |
| `npm run preview` | Serve the production build on port 8081 |
| `npm run check:routes` | With the dev server running: opens every page at desktop and phone width and fails on a broken page, a script error, or sideways scrolling |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

CI runs typecheck, build and `check:routes` on every pull request, and builds and starts the Docker image. `check:routes` uses Playwright's Chromium; run `npx playwright install chromium` once, or point `CHROMIUM_PATH` at a Chromium you already have.

---

## Layout

```
src/data/          chapters (mpc.ts, mpc-craft.ts, mpc-tech.ts, mpc-years.ts, guitar.ts), buttons, chords, pedals, dispatch
src/components/    widgets and the studio shell
src/routes/        /   /news   /manual   /mpc/:slug   /guitar/:slug
src/lib/           local store, Web Audio, theme
public/manuals/    original 27-page PDF
docs/AGENTS.md     how to edit this without flattening it
scripts/           route check, build helpers
.github/           CI, issue and pull request templates
```

---

## Contributing

Corrections are welcome when they come with a source. Read [CONTRIBUTING.md](CONTRIBUTING.md) first. Every pull request is reviewed by the owner before it merges.

- Something broken or wrong in the book: [open an issue](https://github.com/SharpMeow/music-field-manual/issues/new/choose)
- A security problem: [report it privately](SECURITY.md)
- How we treat each other: [code of conduct](CODE_OF_CONDUCT.md)

---

## License

[PolyForm Small Business License 1.0.0](LICENSE).

Akai, MPC, Jackson, Floyd Rose, and Fender are trademarks of their owners. This is an unofficial companion.
