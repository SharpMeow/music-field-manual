import { BUTTONS, STEP_MODES } from "./buttons";
import { CHORDS, SONGS, WEEKS } from "./chords";
import { GUITAR_SECTIONS } from "./guitar";
import { SOURCE_PDF } from "./manual";
import { MPC_SECTIONS } from "./mpc";
import { MPC_YEARS } from "./mpc-years";
import { NEWS } from "./news";
import { PEDALS } from "./pedals";
import type { Part, Section } from "./types";

export const ALL_SECTIONS: Section[] = [...MPC_SECTIONS, ...GUITAR_SECTIONS];

export function sectionsFor(part: Part) {
  return ALL_SECTIONS.filter((s) => s.part === part);
}

export function getSection(part: Part, slug: string) {
  return ALL_SECTIONS.find((s) => s.part === part && s.slug === slug);
}

export function stepCount(part: Part, slug: string, id: string) {
  const section = getSection(part, slug);
  const block = section?.blocks.find((b) => b.type === "steps" && b.id === id);
  return block?.type === "steps" ? block.items.length : 0;
}

export function neighbors(part: Part, slug: string) {
  const list = sectionsFor(part);
  const i = list.findIndex((s) => s.slug === slug);
  return {
    prev: i > 0 ? list[i - 1] : undefined,
    next: i >= 0 && i < list.length - 1 ? list[i + 1] : undefined,
  };
}

export type SearchHit = {
  title: string;
  blurb: string;
  href: string;
  group: string;
};

export const SEARCH_INDEX: SearchHit[] = [
  {
    title: "Music Field Manual",
    blurb: "Cover · tonight's loop · both machines",
    href: "/",
    group: "Home",
  },
  {
    title: "Latest dispatch",
    blurb: "Firmware 3.9.1 · Jackson news · checked 16 Sep 2026",
    href: "/news",
    group: "Home",
  },
  {
    title: SOURCE_PDF.title,
    blurb: SOURCE_PDF.blurb,
    href: SOURCE_PDF.href,
    group: "Home",
  },
  ...ALL_SECTIONS.map((s) => ({
    title: s.title,
    blurb: s.blurb,
    href: `/${s.part}/${s.slug}`,
    group: s.part === "mpc" ? "MPC XL" : "Jackson",
  })),
  ...BUTTONS.map((b) => ({
    title: b.name,
    blurb: `${b.press} · Shift: ${b.shift}`,
    href: "/mpc/buttons",
    group: "Buttons",
  })),
  ...STEP_MODES.map((m) => ({
    title: `Set + ${m.n} · ${m.name}`,
    blurb: `Hold Set and press step ${m.n}`,
    href: "/mpc/buttons",
    group: "Step modes",
  })),
  ...CHORDS.map((c) => ({
    title: `${c.name} chord`,
    blurb: `${c.tab} · ${c.tip}`,
    href: "/guitar/chords",
    group: "Chords",
  })),
  ...WEEKS.map((w) => ({
    title: w.title,
    blurb: `${w.label} · ${w.body}`,
    href: "/guitar/weeks",
    group: "Practice",
  })),
  ...MPC_YEARS.map((w) => ({
    title: w.title,
    blurb: `${w.label} · ${w.body}`,
    href: "/mpc/years",
    group: "XL years",
  })),
  ...SONGS.map((song) => ({
    title: song.name,
    blurb: `${song.artist} · ${song.teach}`,
    href: "/guitar/songs",
    group: "Songs",
  })),
  ...PEDALS.map((p) => ({
    title: `${p.brand} ${p.name}`,
    blurb: `${p.kind} · ${p.slot} · bought ${p.bought}`,
    href: "/guitar/board",
    group: "Pedals",
  })),
  ...NEWS.map((n) => ({
    title: n.title,
    blurb: n.body,
    href: n.part === "mpc" ? "/mpc/updates" : "/guitar/news",
    group: "News",
  })),
];

