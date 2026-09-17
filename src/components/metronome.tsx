import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { click } from "@/lib/audio";
import { useField, useHasHydrated } from "@/lib/store";
import { cn, iconSwap } from "@/lib/utils";

const BEATS = [
  { beat: 1, label: "1", kind: "D" as const },
  { beat: 2, label: "2", kind: "D" as const },
  { beat: 2.5, label: "&", kind: "U" as const },
  { beat: 3, label: "3", kind: "miss" as const },
  { beat: 3.5, label: "&", kind: "U" as const },
  { beat: 4, label: "4", kind: "D" as const },
  { beat: 4.5, label: "&", kind: "U" as const },
];

export function StrumPattern() {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 shadow-panel">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Old Faithful · one bar of 4/4
      </p>
      <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-7">
        {BEATS.map((b) => (
          <div
            key={`${b.beat}${b.label}${b.kind}`}
            className={cn(
              "flex h-16 flex-col items-center justify-center rounded-md border",
              b.kind === "miss"
                ? "border-dashed border-border text-subtle"
                : "border-border bg-elevated",
            )}
          >
            <span className="font-mono text-xs text-muted">{b.label}</span>
            <span className="font-display text-lg font-semibold">
              {b.kind === "miss" ? "·" : b.kind}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        Down on 1. Down-up on 2. Miss the strings on 3 but keep the hand going down. Up on the
        and of 3. Down-up on 4. Count it out loud: one, two and, and, four and.
      </p>
    </div>
  );
}

export function Metronome() {
  const stored = useField((s) => s.bpm);
  const setBpm = useField((s) => s.setBpm);
  const hydrated = useHasHydrated();
  const bpm = hydrated ? stored : 70;
  const [on, setOn] = useState(false);
  const [beat, setBeat] = useState(0);
  const bpmRef = useRef(bpm);
  bpmRef.current = bpm;

  useEffect(() => {
    if (!on) return;
    let n = 0;
    setBeat(0);
    click(true);
    const id = window.setInterval(() => {
      n = (n + 1) % 4;
      setBeat(n);
      click(n === 0);
    }, 60000 / bpmRef.current);
    return () => window.clearInterval(id);
  }, [on, bpm]);

  return (
    <div className="rounded-xl border border-border bg-surface p-5 shadow-panel">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Metronome</p>
          <p className="mt-1 font-display text-5xl font-semibold leading-none tabular-nums">{bpm}</p>
          <p className="mt-1 text-sm text-muted">BPM · accent on 1</p>
        </div>
        <div className="flex items-end gap-1.5" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              data-on={on && beat === i ? "true" : "false"}
              className={cn(
                "beat-lamp w-2.5 rounded-sm",
                i === 0 ? "h-10" : "h-7",
                on && beat === i ? "bg-accent" : "bg-elevated",
              )}
            />
          ))}
        </div>
      </div>
      <Slider
        min={50}
        max={120}
        value={bpm}
        onValueChange={setBpm}
        aria-label="Tempo"
        className="mt-3"
      />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {[60, 70, 80].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setBpm(n)}
            aria-pressed={bpm === n}
            className={cn(
              "h-11 rounded-full border px-3 font-mono text-xs",
              bpm === n ? "border-accent text-fg" : "border-border text-muted hover:text-fg",
            )}
          >
            {n}
          </button>
        ))}
        <Button
          className="ml-auto min-w-24"
          variant={on ? "secondary" : "primary"}
          onClick={() => setOn((v) => !v)}
          aria-pressed={on}
        >
          <span className="relative inline-flex size-4">
            <Pause className={cn("icon-swap absolute inset-0 size-4", iconSwap(on))} />
            <Play className={cn("icon-swap size-4", on ? "" : "ml-px", iconSwap(!on))} />
          </span>
          {on ? "Stop" : "Start"}
        </Button>
      </div>
    </div>
  );
}
