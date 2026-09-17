import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function iconSwap(on: boolean) {
  return on ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]";
}

export function padBankNumber(index: number) {
  return (3 - Math.floor(index / 4)) * 4 + (index % 4) + 1;
}
