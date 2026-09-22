import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { BUTTONS, STEP_MODES } from "@/data/buttons";
import { KeyCap } from "@/components/prose";
import { useWidgetHeading } from "@/lib/heading-level";

export function ButtonRef() {
  const Heading = useWidgetHeading();
  const [q, setQ] = useState("");
  const rows = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return BUTTONS;
    return BUTTONS.filter(
      (b) =>
        b.name.toLowerCase().includes(n) ||
        b.press.toLowerCase().includes(n) ||
        b.shift.toLowerCase().includes(n),
    );
  }, [q]);

  return (
    <div className="flex flex-col gap-6">
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filter buttons — chop, flatten, recall…"
        aria-label="Filter buttons"
      />
      <div className="overflow-hidden rounded-xl border border-border">
        <div className="hidden grid-cols-[minmax(7rem,10rem)_1fr_1fr] gap-0 bg-elevated px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-muted sm:grid">
          <span>Button</span>
          <span>Press</span>
          <span>
            <KeyCap>Shift</KeyCap> + press
          </span>
        </div>
        <ul className="divide-y divide-border">
          {rows.map((b) => (
            <li
              key={b.name}
              className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(7rem,10rem)_1fr_1fr] sm:gap-4"
            >
              <p className="font-medium text-fg">{b.name}</p>
              <p className="text-sm text-muted">
                <span className="mr-2 font-mono text-xs uppercase tracking-wider text-subtle sm:hidden">
                  Press
                </span>
                {b.press}
              </p>
              <p className="text-sm text-muted">
                <span className="mr-2 font-mono text-xs uppercase tracking-wider text-subtle sm:hidden">
                  Shift
                </span>
                {b.shift}
              </p>
            </li>
          ))}
        </ul>
        {rows.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-muted">No buttons match.</p>
        ) : null}
      </div>
      <div>
        <Heading className="font-display text-xl font-semibold tracking-tight">
          Hold Set + a step button
        </Heading>
        <p className="mt-1 text-sm text-muted">
          Step Edit gives per-step velocity, ratchet, probability and nudge. Probability on hats is
          how they stop repeating identically.
        </p>
        <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {STEP_MODES.map((m) => (
            <li
              key={m.n}
              className="flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-3 py-2"
            >
              <span className="font-mono text-xs text-accent-ink">{m.n}</span>
              <span className="text-sm">{m.name}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
