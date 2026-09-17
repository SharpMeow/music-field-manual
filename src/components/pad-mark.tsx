import { cn } from "@/lib/utils";

export function PadMark({ className }: { className?: string }) {
  return (
    <span className={cn("grid grid-cols-2 gap-px", className)} aria-hidden>
      <span className="aspect-square rounded-[1px] bg-fg" />
      <span className="aspect-square rounded-[1px] bg-fg" />
      <span className="aspect-square rounded-[1px] bg-accent" />
      <span className="aspect-square rounded-[1px] bg-fg" />
    </span>
  );
}
