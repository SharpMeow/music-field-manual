import { DoneMark } from "@/components/done-mark";
import { Prose } from "@/components/prose";
import { Progress } from "@/components/ui/progress";
import { checkId, useField, useHasHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";
import type { Step } from "@/data/types";

export function StepList({ id, items }: { id: string; items: Step[] }) {
  const checks = useField((s) => s.checks);
  const toggle = useField((s) => s.toggleCheck);
  const hydrated = useHasHydrated();
  const done = hydrated ? items.filter((_, i) => checks[checkId(id, i)]).length : 0;
  const pct = items.length ? Math.round((done / items.length) * 100) : 0;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {done}/{items.length} complete
        </p>
        <Progress value={pct} className="max-w-40" />
      </div>
      <ol className="flex flex-col gap-3">
        {items.map((step, i) => {
          const key = checkId(id, i);
          const on = hydrated && !!checks[key];
          return (
            <li key={step.n}>
              <button
                type="button"
                onClick={() => toggle(key)}
                aria-pressed={on}
                className={cn(
                  "flex w-full gap-4 rounded-xl border bg-surface p-4 text-left shadow-panel transition-colors duration-150 sm:p-5",
                  on ? "border-ok/40" : "border-border hover:border-muted",
                )}
              >
                <DoneMark on={on} label={step.n} />
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block font-display text-xl font-semibold tracking-tight",
                      on ? "text-muted line-through decoration-from-font" : "text-fg",
                    )}
                  >
                    {step.title}
                  </span>
                  {step.body ? (
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                      <Prose text={step.body} />
                    </span>
                  ) : null}
                  {step.note ? (
                    <span className="mt-3 block border-l-2 border-accent/70 pl-3 text-sm leading-relaxed text-paper">
                      <Prose text={step.note} />
                    </span>
                  ) : null}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
