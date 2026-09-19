import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { PEDALS, SUPPLY, chainOf, drawOf, type Pedal } from "@/data/pedals";
import { useField, useHasHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";

const DEFAULT_ON: Record<string, boolean> = Object.fromEntries(
  PEDALS.map((p) => [p.id, p.defaultOn]),
);

function Chip({
  label,
  tone,
}: {
  label: string;
  tone: "end" | "muted";
}) {
  return (
    <span
      className={cn(
        "flex h-11 items-center rounded-full border px-3 font-mono text-xs",
        tone === "end" ? "border-border bg-elevated text-muted" : "border-dashed border-border text-subtle",
      )}
    >
      {label}
    </span>
  );
}

function Detail({ pedal }: { pedal: Pedal }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 shadow-panel sm:p-6">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{pedal.kind}</p>
      <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
        {pedal.brand} {pedal.name}
      </h3>
      <p className="mt-1 font-mono text-xs text-subtle">
        {pedal.bought} · {pedal.from}
        {pedal.paid ? ` · ${pedal.paid}` : ""}
        {pedal.condition === "used" ? " · used" : ""}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{pedal.blurb}</p>

      <dl className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border">
        {pedal.controls.map((c) => (
          <div key={c.k} className="grid gap-1 px-4 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="font-medium text-fg">{c.k}</dt>
            <dd className="text-sm leading-relaxed text-muted">{c.v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-bg p-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">With the Jackson</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{pedal.withJackson}</p>
        </div>
        <div className="rounded-xl border border-border bg-bg p-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Into the XL</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{pedal.intoXL}</p>
        </div>
      </div>

      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">Start here</p>
      <ul className="mt-2 flex flex-col gap-2">
        {pedal.settings.map((s) => (
          <li key={s.name} className="rounded-xl border border-border bg-bg px-4 py-3">
            <p className="text-sm font-medium text-fg">{s.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ul>

      <dl className="mt-4 grid gap-x-4 gap-y-2 font-mono text-xs sm:grid-cols-2">
        <div className="flex gap-2">
          <dt className="text-subtle">Power</dt>
          <dd className="text-muted">{pedal.power}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-subtle">Bypass</dt>
          <dd className="text-muted">{pedal.bypass}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-subtle">I/O</dt>
          <dd className="text-muted">{pedal.io}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-subtle">Enclosure</dt>
          <dd className="text-muted">{pedal.size}</dd>
        </div>
      </dl>

      {pedal.manual ? (
        <a
          href={pedal.manual.href}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-elevated px-4 text-sm text-fg transition-colors duration-150 hover:text-accent"
        >
          <ExternalLink className="size-4" aria-hidden />
          {pedal.manual.title}
        </a>
      ) : (
        <p className="mt-4 rounded-md border border-dashed border-border px-4 py-3 font-mono text-xs text-subtle">
          No manual published for this one. What is written above came off the pedal and the
          builder&rsquo;s own product page.
        </p>
      )}
      {pedal.manual?.note ? (
        <p className="mt-2 font-mono text-xs text-subtle">{pedal.manual.note}</p>
      ) : null}
    </div>
  );
}

export function PedalBoard() {
  const stored = useField((s) => s.pedalOn);
  const togglePedal = useField((s) => s.togglePedal);
  const hydrated = useHasHydrated();
  const [sel, setSel] = useState(PEDALS[0]?.id ?? "");

  const on = hydrated && Object.keys(stored).length > 0 ? stored : DEFAULT_ON;
  const chain = chainOf(on);
  const draw = drawOf(chain);
  const known = chain.filter((p) => p.mA !== null);
  const unknown = chain.length - known.length;
  const current = PEDALS.find((p) => p.id === sel) ?? PEDALS[0];

  const pct = Math.min(100, Math.round((draw / SUPPLY.mA) * 100));
  const over = draw > SUPPLY.mA;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted">
        Flip a pedal in or out of tonight&rsquo;s chain. Order is fixed to the order that works on
        this board &mdash; dirt early, pitch before time, the looper last so it captures whatever
        came before it. Tap a name to read it.
      </p>

      <div className="flex min-h-11 flex-wrap items-center gap-2">
        <Chip label="Jackson" tone="end" />
        {chain.length === 0 ? (
          <>
            <span className="text-subtle">&rarr;</span>
            <Chip label="straight in — nothing switched on" tone="muted" />
          </>
        ) : (
          chain.map((p) => (
            <span key={p.id} className="flex items-center gap-2">
              <span className="text-subtle">&rarr;</span>
              <button
                type="button"
                onClick={() => setSel(p.id)}
                className={cn(
                  "h-11 rounded-full border px-3 font-mono text-xs",
                  sel === p.id
                    ? "border-accent bg-accent text-accent-fg"
                    : "border-accent/40 bg-accent/10 text-fg",
                )}
              >
                {p.name}
              </button>
            </span>
          ))
        )}
        <span className="text-subtle">&rarr;</span>
        <Chip label="Amp / XL Inst 1" tone="end" />
      </div>

      <div className="rounded-xl border border-border bg-surface p-4 shadow-panel">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Supply budget</p>
          <p className="font-mono text-xs text-subtle">
            {draw} mA of {SUPPLY.mA} mA · {pct}% · {chain.length} on
            {unknown > 0 ? ` · ${unknown} unpublished` : ""}
          </p>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-elevated">
          <div
            className={cn(
              "h-full rounded-full transition-[width] duration-200",
              over ? "bg-accent" : pct >= 85 ? "bg-accent/70" : "bg-ok",
            )}
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {over
            ? `Past what ${SUPPLY.name} is rated for. Something will whine or drop out, and it is usually whichever digital box is furthest down the chain. Move a pedal to the wall before you decide it is broken.`
            : pct >= 85
              ? `That is ${pct}% of ${SUPPLY.name}, which is closer to the ceiling than you want a battery to run. Fine on a desk; leave yourself room before a gig.`
              : `${SUPPLY.name} covers this comfortably.`}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          These are the builders&rsquo; minimum supply ratings, not measured draws, because a
          minimum rating is what almost every builder publishes and it is the honest number to
          size a supply against.{" "}
          {unknown > 0
            ? `${unknown} of the pedals switched on published nothing at all, so the bar is reading low by however much they want. `
            : ""}
          The kit&rsquo;s eight outputs are one daisy chain sharing a ground, not eight isolated
          rails, and four of these pedals are digital. If you hear hum before you hear a problem,
          that is where it is coming from.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {PEDALS.map((p) => {
          const lit = !!on[p.id];
          const focused = sel === p.id;
          return (
            <div
              key={p.id}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-4 transition-colors duration-150",
                lit ? "border-accent/40 bg-surface" : "border-border bg-bg",
                focused && "ring-1 ring-accent/60",
              )}
            >
              <button type="button" onClick={() => setSel(p.id)} className="min-w-0 flex-1 text-left">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{p.slot}</p>
                <p className="mt-1 font-display text-xl font-semibold tracking-tight">{p.name}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {p.brand} · {p.kind}
                </p>
              </button>
              <button
                type="button"
                role="switch"
                aria-checked={lit}
                aria-label={`${lit ? "Remove" : "Add"} ${p.brand} ${p.name}`}
                onClick={() => togglePedal(p.id)}
                className={cn(
                  "relative h-8 w-14 shrink-0 rounded-full border transition-colors duration-150",
                  lit ? "border-accent bg-accent" : "border-border bg-elevated",
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 size-7 rounded-full bg-surface shadow-panel transition-transform duration-150",
                    lit ? "translate-x-6" : "translate-x-0.5",
                  )}
                />
              </button>
            </div>
          );
        })}
      </div>

      {current ? <Detail pedal={current} /> : null}
    </div>
  );
}
