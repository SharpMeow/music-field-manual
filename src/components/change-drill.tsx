import { useEffect, useRef, useState } from "react";
import { ChordCard } from "@/components/chord-diagram";
import { Button } from "@/components/ui/button";
import { CHORDS, DRILL_PAIRS } from "@/data/chords";
import { useField, useHasHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";

const DURATION = 60;

export function ChangeDrill() {
  const [pairI, setPairI] = useState(0);
  const [running, setRunning] = useState(false);
  const [left, setLeft] = useState(DURATION);
  const [count, setCount] = useState(0);
  const [which, setWhich] = useState(0);
  const addDrill = useField((s) => s.addDrill);
  const log = useField((s) => s.drillLog);
  const hydrated = useHasHydrated();
  const tick = useRef<number | null>(null);
  const countRef = useRef(0);
  const pair = DRILL_PAIRS[pairI];
  const a = CHORDS.find((c) => c.id === pair[0])!;
  const b = CHORDS.find((c) => c.id === pair[1])!;
  const shown = which % 2 === 0 ? a : b;

  useEffect(() => {
    if (!running) return;
    tick.current = window.setInterval(() => {
      setLeft((t) => {
        if (t <= 1) {
          if (tick.current) window.clearInterval(tick.current);
          setRunning(false);
          if (countRef.current > 0) {
            addDrill({ pair: `${a.name} ↔ ${b.name}`, count: countRef.current, bpm: 0 });
          }
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (tick.current) window.clearInterval(tick.current);
    };
  }, [running, a.name, b.name, addDrill]);

  function start() {
    countRef.current = 0;
    setCount(0);
    setWhich(0);
    setLeft(DURATION);
    setRunning(true);
  }

  function hit() {
    if (!running) return;
    countRef.current += 1;
    setCount(countRef.current);
    setWhich((w) => w + 1);
  }

  const best =
    hydrated
      ? log
          .filter((e) => e.pair === `${a.name} ↔ ${b.name}`)
          .reduce((m, e) => Math.max(m, e.count), 0) || null
      : null;
  const visibleLog = hydrated ? log : [];

  return (
    <div className="rounded-xl border border-border bg-surface p-5 shadow-panel sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">One-minute changes</p>
          <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
            {a.name} ↔ {b.name}
          </h3>
        </div>
        <div className="text-right">
          <p className="font-mono text-4xl tabular-nums leading-none text-fg">{left}s</p>
          {best ? <p className="mt-1 font-mono text-xs text-muted">best {best}</p> : null}
        </div>
      </div>

      <div className="mt-3 h-1 overflow-hidden rounded-full bg-elevated">
        <div
          className="h-full origin-left bg-accent transition-transform duration-1000 ease-linear"
          style={{ transform: `scaleX(${left / DURATION})` }}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {DRILL_PAIRS.map((p, i) => (
          <button
            key={p.join()}
            type="button"
            disabled={running}
            onClick={() => {
              setPairI(i);
              countRef.current = 0;
              setCount(0);
              setWhich(0);
              setLeft(DURATION);
            }}
            className={cn(
              "h-11 rounded-full border px-3 font-mono text-xs",
              i === pairI
                ? "border-accent bg-accent/15 text-fg"
                : "border-border text-muted hover:text-fg",
            )}
          >
            {p[0]}/{p[1]}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <ChordCard chord={shown} active />
        <div className="flex flex-col justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Changes</p>
            <p className="font-display text-6xl font-semibold tabular-nums leading-none">{count}</p>
            <p className="mt-2 text-sm text-muted">
              Target 30. Stretch 60. Do not strum — just land the shape.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {running ? (
              <Button size="lg" onClick={hit} className="h-16 text-lg">
                Landed · next
              </Button>
            ) : (
              <Button size="lg" onClick={start} className="h-16 text-lg">
                Start 60 seconds
              </Button>
            )}
            {running ? (
              <Button
                variant="ghost"
                onClick={() => {
                  setRunning(false);
                  setLeft(DURATION);
                }}
              >
                Cancel
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      {visibleLog.length > 0 ? (
        <div className="mt-6 border-t border-border pt-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Log</p>
          <ul className="mt-2 flex flex-col gap-1.5">
            {visibleLog.slice(0, 8).map((e) => (
              <li key={e.at} className="flex justify-between font-mono text-sm text-muted">
                <span>
                  {e.pair} · {e.count}
                </span>
                <span className="text-subtle">
                  {new Date(e.at).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
