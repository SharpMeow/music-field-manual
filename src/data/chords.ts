export type ChordShape = {
  id: string;
  name: string;
  tab: string;
  group: "weeks12" | "weeks34" | "weeks58" | "month3" | "power";
  tip: string;
  // Low E → high e. null = mute, 0 = open
  frets: Array<number | null>;
  // Finger per string, 0 = open/mute
  fingers: number[];
};

export const CHORDS: ChordShape[] = [
  {
    id: "D",
    name: "D",
    tab: "x-x-0-2-3-2",
    group: "weeks12",
    tip: "Skip the two thick strings. A tidy triangle.",
    frets: [null, null, 0, 2, 3, 2],
    fingers: [0, 0, 0, 1, 3, 2],
  },
  {
    id: "A",
    name: "A",
    tab: "x-0-2-2-2-0",
    group: "weeks12",
    tip: "Justin's 2-1-3 grip keeps finger 1 near where D needs it.",
    frets: [null, 0, 2, 2, 2, 0],
    fingers: [0, 0, 2, 1, 3, 0],
  },
  {
    id: "E",
    name: "E",
    tab: "0-2-2-1-0-0",
    group: "weeks12",
    tip: "All six strings. The fullest sounding open chord.",
    frets: [0, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0],
  },
  {
    id: "Am",
    name: "Am",
    tab: "x-0-2-2-1-0",
    group: "weeks34",
    tip: "The E shape moved down one string. Skip the low E.",
    frets: [null, 0, 2, 2, 1, 0],
    fingers: [0, 0, 2, 3, 1, 0],
  },
  {
    id: "Em",
    name: "Em",
    tab: "0-2-2-0-0-0",
    group: "weeks34",
    tip: "E with finger 1 lifted. Two fingers, six strings.",
    frets: [0, 2, 2, 0, 0, 0],
    fingers: [0, 2, 3, 0, 0, 0],
  },
  {
    id: "Dm",
    name: "Dm",
    tab: "x-x-0-2-3-1",
    group: "weeks58",
    tip: "Finger 4 on the B string (use 3 if it will not reach yet).",
    frets: [null, null, 0, 2, 3, 1],
    fingers: [0, 0, 0, 2, 4, 1],
  },
  {
    id: "C",
    name: "C",
    tab: "x-3-2-0-1-0",
    group: "weeks58",
    tip: "Lean finger 3 slightly to mute the low E.",
    frets: [null, 3, 2, 0, 1, 0],
    fingers: [0, 3, 2, 0, 1, 0],
  },
  {
    id: "G",
    name: "G",
    tab: "3-2-0-0-0-3",
    group: "weeks58",
    tip: "Hack while learning: only fingers 2 and 3, finger 2 laid flat to mute the A.",
    frets: [3, 2, 0, 0, 0, 3],
    fingers: [2, 1, 0, 0, 0, 3],
  },
  {
    id: "F",
    name: "F",
    tab: "1-3-3-2-1-1",
    group: "month3",
    tip: "Barre finger 1 across fret 1. Month three, not week one.",
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
  },
  {
    id: "E5",
    name: "E5",
    tab: "0-2-2-x-x-x",
    group: "power",
    tip: "Power chord. Strum strings 6, 5, 4 only.",
    frets: [0, 2, 2, null, null, null],
    fingers: [0, 1, 3, 0, 0, 0],
  },
  {
    id: "A5",
    name: "A5",
    tab: "x-0-2-2-x-x",
    group: "power",
    tip: "Power chord. Strum strings 5, 4, 3 only.",
    frets: [null, 0, 2, 2, null, null],
    fingers: [0, 0, 1, 3, 0, 0],
  },
];

export const DRILL_PAIRS = [
  ["D", "A"],
  ["D", "E"],
  ["A", "E"],
  ["E", "Am"],
  ["Am", "Em"],
  ["Dm", "A"],
  ["C", "Am"],
  ["G", "C"],
  ["G", "Em"],
  ["C", "G"],
];

export const SONGS = [
  { name: "Lay Down Sally", artist: "Eric Clapton", teach: "A, D, E", where: "JustinGuitar Module 2" },
  { name: "Stir It Up", artist: "Bob Marley", teach: "A, D, E", where: "JustinGuitar Module 2" },
  { name: "Sing", artist: "Ed Sheeran", teach: "Am/Em groove", where: "JustinGuitar Module 3" },
  { name: "Moves Like Jagger", artist: "Maroon 5", teach: "Minor chords, one-chord groove", where: "JustinGuitar Module 3" },
  { name: "Eleanor Rigby", artist: "The Beatles", teach: "Em, C", where: "JustinGuitar Module 5" },
  { name: "Get Lucky", artist: "Daft Punk", teach: "Four-chord loop", where: "JustinGuitar Module 5" },
  { name: "Smoke on the Water", artist: "Deep Purple", teach: "Two-string riff, the classic first one", where: "JustinGuitar, Guitar World" },
  { name: "Seven Nation Army", artist: "The White Stripes", teach: "Single string, sliding up the neck", where: "JustinGuitar, Andy Guitar" },
  { name: "Iron Man", artist: "Black Sabbath", teach: "Root-6 power chords, slides, palm mute", where: "JustinGuitar Grade 2" },
  { name: "Enter Sandman", artist: "Metallica", teach: "Open E, palm muting, bridge pickup", where: "Andy Guitar" },
];

export const WEEKS = [
  {
    id: "w12",
    label: "Weeks 1–2",
    title: "D, A, E and down-strums",
    body: "One-minute changes on D↔A, D↔E, A↔E. Four downstrums per bar at 60 BPM. Song: Lay Down Sally or Stir It Up (A, D, E).",
  },
  {
    id: "w34",
    label: "Weeks 3–4",
    title: "Am, Em, first riff",
    body: "E↔Am is the same grip moved over. Smoke on the Water on two strings as the first riff. Songs: Sing, Moves Like Jagger.",
  },
  {
    id: "w56",
    label: "Weeks 5–6",
    title: "Dm, Old Faithful, metronome",
    body: "Dm uses finger 4 or 3 on the B string. Old Faithful at 60, then 70 BPM. Changes above 20 a minute on the first pairs.",
  },
  {
    id: "w78",
    label: "Weeks 7–8",
    title: "C",
    body: "Finger 3 leans slightly to mute the low E. Songs: Eleanor Rigby (Em, C), Get Lucky.",
  },
  {
    id: "w910",
    label: "Weeks 9–10",
    title: "G and faster changes",
    body: "Start with the two-finger G hack (finger 2 on fret 3 of the low E laid flat to mute the A, finger 3 on fret 3 of the high E). Push changes toward 30.",
  },
  {
    id: "w1112",
    label: "Weeks 11–12",
    title: "Consolidate, power chords, the box",
    body: "Five songs you can play through. First power chords with palm muting. A minor pentatonic box 1 over your own MPC loop. Then start on F.",
  },
];
