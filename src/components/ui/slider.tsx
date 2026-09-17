import type { CSSProperties, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "value"> & {
  value: number;
  onValueChange: (value: number) => void;
};

export function Slider({ min = 0, max = 100, value, onValueChange, className, ...props }: SliderProps) {
  const lo = Number(min);
  const hi = Number(max);
  const pct = hi === lo ? 0 : ((value - lo) / (hi - lo)) * 100;

  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onValueChange(Number(e.target.value))}
      className={cn("xl-slider", className)}
      style={{ "--slider-pct": `${pct}%` } as CSSProperties}
      {...props}
    />
  );
}
