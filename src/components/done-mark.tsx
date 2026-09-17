import { Check } from "lucide-react";
import { cn, iconSwap } from "@/lib/utils";

export function DoneMark({ on, label }: { on: boolean; label: string }) {
  return (
    <span className="relative mt-0.5 flex size-11 shrink-0 items-center justify-center">
      <span
        className={cn(
          "icon-swap absolute inset-0 flex items-center justify-center rounded-md border border-ok bg-ok text-bg",
          iconSwap(on),
        )}
      >
        <Check className="size-5" strokeWidth={2.5} />
      </span>
      <span
        className={cn(
          "icon-swap flex size-11 items-center justify-center rounded-md border border-border bg-elevated font-mono text-xs text-muted",
          iconSwap(!on),
        )}
      >
        {label}
      </span>
    </span>
  );
}
