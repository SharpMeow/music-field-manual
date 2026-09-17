export type Part = "mpc" | "guitar";

export type Step = {
  n: string;
  title: string;
  body: string;
  note?: string;
};

export type Kv = { k: string; v: string };

export type WidgetName =
  | "buttons"
  | "hardware"
  | "dirt"
  | "chords"
  | "drill"
  | "metronome"
  | "scale"
  | "weeks"
  | "notes"
  | "pickup"
  | "swing"
  | "strum"
  | "songs"
  | "news"
  | "years";

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "lead"; text: string }
  | { type: "steps"; id: string; items: Step[] }
  | { type: "table"; columns: string[]; rows: string[][] }
  | { type: "callout"; kind: "warn" | "tip" | "trap"; title?: string; text: string }
  | { type: "kvs"; items: Kv[] }
  | { type: "widget"; name: WidgetName }
  | { type: "checklist"; id: string; items: string[] };

export type Section = {
  slug: string;
  part: Part;
  title: string;
  kicker: string;
  blurb: string;
  blocks: Block[];
};
