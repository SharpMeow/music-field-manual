import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Part } from "@/data/types";

export type DrillEntry = {
  at: string;
  pair: string;
  count: number;
  bpm: number;
};

type Last = { part: Part; slug: string; title: string };

type FieldState = {
  checks: Record<string, boolean>;
  last: Last | null;
  drillLog: DrillEntry[];
  weekDone: Record<string, boolean>;
  notes: { mpc: string; guitar: string };
  pickup: 1 | 2 | 3 | 4 | 5;
  bpm: number;
  dirtOn: Record<string, boolean>;
  toggleCheck: (id: string) => void;
  setLast: (last: Last) => void;
  addDrill: (entry: Omit<DrillEntry, "at">) => void;
  toggleWeek: (id: string) => void;
  setNotes: (which: "mpc" | "guitar", value: string) => void;
  setPickup: (n: 1 | 2 | 3 | 4 | 5) => void;
  setBpm: (n: number) => void;
  toggleDirt: (id: string) => void;
};

export const useField = create<FieldState>()(
  persist(
    (set) => ({
      checks: {},
      last: null,
      drillLog: [],
      weekDone: {},
      notes: { mpc: "", guitar: "" },
      pickup: 5,
      bpm: 70,
      dirtOn: { vinyl: true, filter: true, out: true },
      toggleCheck: (id) =>
        set((s) => ({ checks: { ...s.checks, [id]: !s.checks[id] } })),
      setLast: (last) => set({ last }),
      addDrill: (entry) =>
        set((s) => ({
          drillLog: [{ ...entry, at: new Date().toISOString() }, ...s.drillLog].slice(0, 60),
        })),
      toggleWeek: (id) =>
        set((s) => ({ weekDone: { ...s.weekDone, [id]: !s.weekDone[id] } })),
      setNotes: (which, value) =>
        set((s) => ({ notes: { ...s.notes, [which]: value } })),
      setPickup: (pickup) => set({ pickup }),
      setBpm: (bpm) => set({ bpm }),
      toggleDirt: (id) =>
        set((s) => ({ dirtOn: { ...s.dirtOn, [id]: !s.dirtOn[id] } })),
    }),
    { name: "xl-field-manual" },
  ),
);

export function checkId(list: string, index: number) {
  return `${list}:${index}`;
}

export function useHasHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const unsub = useField.persist.onFinishHydration(() => setHydrated(true));
    setHydrated(useField.persist.hasHydrated());
    return unsub;
  }, []);
  return hydrated;
}
