# Contributing

Fork, branch, pull request against `main`. Every pull request is reviewed by
the owner before it merges.

Read [`README.md`](README.md) and [`docs/AGENTS.md`](docs/AGENTS.md) before
you start.

## What belongs here

Keep chapters in `src/data/` and interactive controls in `src/components/`.
Do not add accounts, a database, a news crawler, or a third instrument. This
companion is the MPC XL and the Jackson Soloist SL2 DX.

## Facts need sources

Any change to a spec, figure, date, firmware note or pedal record needs a
link to the maker's own page or manual in the pull request. For pedal
current draw, follow the `mA` rule in `docs/AGENTS.md`: `null` means nobody
published a figure, and a guess is worse than a gap.

## Before you open the pull request

```
npm run typecheck
npm run build
npm run dev            # then, in another terminal:
npm run check:routes
```

All of these should pass. CI runs the same checks on every pull request.

## License

By contributing you agree that your contribution is licensed under
PolyForm Small Business 1.0.0. See `LICENSE`. Trademarks stay with their
owners.
