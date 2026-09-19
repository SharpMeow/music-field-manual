export type PedalSlot = "Dirt" | "Pitch" | "Modulation" | "Time" | "Loop" | "Utility";

export type Pedal = {
  id: string;
  brand: string;
  name: string;
  /** What it is, in the words you'd use out loud. */
  kind: string;
  slot: PedalSlot;
  /** Position in the chain, guitar first. Lower comes earlier. */
  order: number;
  bought: string;
  from: string;
  paid?: string;
  condition?: "new" | "used";
  /** Whether it starts switched on in the board widget. */
  defaultOn: boolean;
  blurb: string;
  controls: { k: string; v: string }[];
  power: string;
  /** Published current draw in mA. null when the builder never published one. */
  mA: number | null;
  bypass: string;
  io: string;
  size: string;
  withJackson: string;
  intoXL: string;
  settings: { name: string; body: string }[];
  manual?: { title: string; href: string; note?: string };
};

/** What a single mid-size isolated brick gives you. The board's budget is measured against it. */
export const SUPPLY = { name: "A 9V 500 mA isolated supply", mA: 500 } as const;

export const PEDALS: Pedal[] = [];

export function chainOf(on: Record<string, boolean>) {
  return PEDALS.filter((p) => on[p.id]).sort((a, b) => a.order - b.order);
}

export function drawOf(list: Pedal[]) {
  return list.reduce((sum, p) => sum + (p.mA ?? 0), 0);
}
