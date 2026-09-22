import { DoneMark } from "@/components/done-mark";
import { Progress } from "@/components/ui/progress";
import { SONGS, WEEKS } from "@/data/chords";
import { MPC_YEARS } from "@/data/mpc-years";
import { useField, useHasHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";

function CheckPlan({
  items,
}: {
  items: { id: string; label: string; title: string; body: string }[];
}) {
  const weekDone = useField((s) => s.weekDone);
  const toggle = useField((s) => s.toggleWeek);
  const hydrated = useHasHydrated();
  const done = hydrated ? items.filter((w) => weekDone[w.id]).length : 0;
  const pct = Math.round((done / items.length) * 100);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {done}/{items.length} blocks checked
        </p>
        <Progress value={pct} aria-label="Blocks checked" className="max-w-40" />
      </div>
      <ol className="flex flex-col gap-3">
        {items.map((w, i) => {
          const on = hydrated && !!weekDone[w.id];
          return (
            <li key={w.id}>
              <button
                type="button"
                onClick={() => toggle(w.id)}
                aria-pressed={on}
                className={cn(
                  "flex w-full gap-4 rounded-xl border bg-surface p-4 text-left shadow-panel transition-colors duration-150 sm:p-5",
                  on ? "border-ok/40" : "border-border hover:border-muted",
                )}
              >
                <DoneMark on={on} label={String(i + 1).padStart(2, "0")} />
                <span className="min-w-0 flex-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {w.label}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block font-display text-xl font-semibold tracking-tight",
                      on ? "text-muted line-through decoration-from-font" : "text-fg",
                    )}
                  >
                    {w.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{w.body}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function PracticePlan() {
  return <CheckPlan items={WEEKS} />;
}

export function MpcYears() {
  return <CheckPlan items={MPC_YEARS} />;
}

export function SongList() {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <ul className="divide-y divide-border">
        {SONGS.map((s) => (
          <li
            key={s.name}
            className="grid gap-1 px-4 py-3 sm:grid-cols-[1fr_1fr_auto] sm:items-baseline"
          >
            <div>
              <p className="font-medium text-fg">{s.name}</p>
              <p className="text-sm text-muted">{s.artist}</p>
            </div>
            <p className="text-sm text-muted">{s.teach}</p>
            <p className="font-mono text-xs text-subtle">{s.where}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}