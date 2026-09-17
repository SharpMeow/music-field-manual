import { useHasHydrated, useField } from "@/lib/store";
import { cn } from "@/lib/utils";

const POS = [
  {
    n: 1 as const,
    where: "Toward bridge",
    on: "Bridge JB humbucker",
    use: "High gain, palm-muted power chords, everything the guitar was built for",
  },
  {
    n: 2 as const,
    where: "",
    on: "Bridge outer coil + neck inner coil",
    use: "Clean, funky, Strat-like sparkle; lower output, keep the amp clean",
  },
  {
    n: 3 as const,
    where: "",
    on: "Both humbuckers",
    use: "Thick balanced cleans, classic-rock crunch",
  },
  {
    n: 4 as const,
    where: "",
    on: "Bridge inner coil + neck outer coil",
    use: "Same as 2, slightly different flavor",
  },
  {
    n: 5 as const,
    where: "Toward neck",
    on: "Neck '59 humbucker",
    use: "Warm cleans, chill chords, lead lines. Roll the tone knob to 6–7 for warmer still. Live here for lo-fi into the MPC.",
  },
];

export function PickupSwitch() {
  const stored = useField((s) => s.pickup);
  const setPickup = useField((s) => s.setPickup);
  const hydrated = useHasHydrated();
  const n = hydrated ? stored : 5;
  const pos = POS.find((p) => p.n === n)!;

  return (
    <div className="grid gap-6 rounded-xl border border-border bg-surface p-5 shadow-panel sm:grid-cols-[9rem_1fr] sm:p-6">
      <div className="flex flex-col items-center">
        <p className="font-mono text-xs uppercase tracking-widest text-subtle">Neck</p>
        <div className="relative mt-2 h-[17.5rem] w-24">
          <div className="absolute top-3 bottom-3 left-[2.65rem] w-1.5 rounded-full bg-elevated" />
          {([5, 4, 3, 2, 1] as const).map((num, i) => (
            <button
              key={num}
              type="button"
              onClick={() => setPickup(num)}
              aria-pressed={n === num}
              aria-label={`Position ${num}${POS[num - 1].where ? `, ${POS[num - 1].where}` : ""}`}
              className="absolute left-0 flex h-14 w-full items-center gap-2"
              style={{ top: `${i * 3.5}rem` }}
            >
              <span
                className={cn(
                  "w-5 text-right font-mono text-xs tabular-nums",
                  n === num ? "text-fg" : "text-muted",
                )}
              >
                {num}
              </span>
            </button>
          ))}
          <span
            className="blade-knob pointer-events-none absolute left-8 h-12 w-7 rounded-sm bg-accent shadow-panel"
            style={{ transform: `translateY(${(5 - n) * 3.5 + 0.25}rem)` }}
            aria-hidden
          />
        </div>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-subtle">Bridge</p>
      </div>

      <div className="flex flex-col justify-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">5-way blade</p>
        <p className="mt-1 font-display text-3xl font-semibold tracking-tight">Position {pos.n}</p>
        {pos.where ? <p className="mt-0.5 text-sm text-muted">{pos.where}</p> : null}
        <p className="mt-4 text-sm font-medium text-fg">{pos.on}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{pos.use}</p>
      </div>
    </div>
  );
}
