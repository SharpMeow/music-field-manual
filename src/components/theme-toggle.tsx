import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore, type ReactNode } from "react";
import { applyTheme, getTheme, subscribeTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerSnapshot);

  return (
    <div
      className="theme-toggle relative grid h-11 w-24 shrink-0 grid-cols-2 rounded-full border border-border bg-elevated p-1"
      role="radiogroup"
      aria-label="Theme"
    >
      <span className="theme-thumb pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-surface shadow-panel" />
      <ModeButton
        mode="dark"
        label="Dark theme"
        pressed={theme === "dark"}
        onPick={() => applyTheme("dark")}
      >
        <Moon className="size-4" strokeWidth={1.75} />
      </ModeButton>
      <ModeButton
        mode="light"
        label="Light theme"
        pressed={theme === "light"}
        onPick={() => applyTheme("light")}
      >
        <Sun className="size-4" strokeWidth={1.75} />
      </ModeButton>
    </div>
  );
}

function ModeButton({
  mode,
  label,
  pressed,
  onPick,
  children,
}: {
  mode: Theme;
  label: string;
  pressed: boolean;
  onPick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-label={label}
      aria-checked={pressed}
      data-mode={mode}
      onClick={onPick}
      className={cn(
        "relative z-10 flex items-center justify-center rounded-full text-subtle transition-colors duration-200",
        "hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}
