import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export function SwingDemo() {
  const [swing, setSwing] = useState(55);
  const [strength, setStrength] = useState(80);
  const delay = ((swing - 50) / 50) * 40;

  return (
    <div className="rounded-xl border border-border bg-surface p-5 shadow-panel">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">Timing Correct</p>
      <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
        {swing}% swing · {strength}% strength
      </h3>
      <p className="mt-2 text-sm text-muted">
        50% is dead straight. 75% is the ceiling. 54–58% at under 100% strength is the genre.
      </p>
      <div className="mt-5 flex h-16 items-end gap-1">
        {Array.from({ length: 8 }, (_, i) => {
          const swung = i % 2 === 1;
          return (
            <div
              key={i}
              className="relative flex-1"
              style={{ transform: swung ? `translateX(${delay * 0.4}%)` : undefined }}
            >
              <div
                className={cn(
                  "swing-bar mx-auto w-2 rounded-sm",
                  i % 4 === 0 ? "h-16 bg-accent" : swung ? "h-10 bg-paper" : "h-12 bg-muted",
                )}
                style={{ opacity: 0.45 + (strength / 100) * 0.55 }}
              />
            </div>
          );
        })}
      </div>
      <label className="mt-4 block font-mono text-xs uppercase tracking-widest text-muted">
        Swing {swing}%
        <Slider
          min={50}
          max={75}
          value={swing}
          onValueChange={setSwing}
          aria-label="Swing amount"
        />
      </label>
      <label className="mt-1 block font-mono text-xs uppercase tracking-widest text-muted">
        Strength {strength}%
        <Slider
          min={50}
          max={100}
          value={strength}
          onValueChange={setStrength}
          aria-label="Swing strength"
        />
      </label>
    </div>
  );
}
