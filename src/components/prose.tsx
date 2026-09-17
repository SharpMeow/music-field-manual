import { cn } from "@/lib/utils";

export function KeyCap({ children, className }: { children: string; className?: string }) {
  return (
    <kbd
      className={cn(
        "mx-0.5 inline-flex h-6 translate-y-px items-center rounded-sm border border-border bg-elevated px-1.5 align-baseline font-mono text-xs font-medium text-fg",
        className,
      )}
    >
      {children}
    </kbd>
  );
}

export function Prose({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <KeyCap key={i}>{part.slice(1, -1)}</KeyCap>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}
