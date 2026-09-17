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
    tip: "Skip the two thick strings. A tidy little triangle. Everyone's D buzzes in week one — that's the fingertip, not the guitar.",
    frets: [null, null, 0, 2, 3, 2],
    fingers: [0, 0, 0, 1, 3, 2],
  },
  {
    id: "A",
    name: "A",
    tab: "x-0-2-2-2-0",
    group: "weeks12",
    tip: "Justin's 2-1-3 grip keeps finger 1 near where D needs it. That's the walk we want.",
    frets: [null, 0, 2, 2, 2, 0],
    fingers: [0, 0, 2, 1, 3, 0],
  },
  {
    id: "E",
    name: "E",
    tab: "0-2-2-1-0-0",
    group: "weeks12",
    tip: "All six strings. The fullest open chord. If the low E is choking, your thumb crept over the top.",
    frets: [0, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0],
  },
  {
    id: "Am",
    name: "Am",
    tab: "x-0-2-2-1-0",
    group: "weeks34",
    tip: "The E shape, stepped down one string. Skip the low E. This is the first 'I get it' moment.",
    frets: [null, 0, 2, 2, 1, 0],
    fingers: [0, 0, 2, 3, 1, 0],
  },
  {
    id: "Em",
    name: "Em",
    tab: "0-2-2-0-0-0",
    group: "weeks34",
    tip: "E with finger 1 lifted. Two fingers, six strings. You've already done the hard part.",
    frets: [0, 2, 2, 0, 0, 0],
    fingers: [0, 2, 3, 0, 0, 0],
  },
  {
    id: "Dm",
    name: "Dm",
    tab: "x-x-0-2-3-1",
    group: "weeks58",
    tip: "Finger 4 on the B (use 3 if 4 won't reach yet — it will). Don't skip this one.",
    frets: [null, null, 0, 2, 3, 1],
    fingers: [0, 0, 0, 2, 4, 1],
  },
  {
    id: "C",
    name: "C",
    tab: "x-3-2-0-1-0",
    group: "weeks58",
    tip: "Lean finger 3 a little to mute the low E. C is the one people want to skip. Don't. We'll sit with it.",
    frets: [null, 3, 2, 0, 1, 0],
    fingers: [0, 3, 2, 0, 1, 0],
  },
  {
    id: "G",
    name: "G",
    tab: "3-2-0-0-0-3",
    group: "weeks58",
    tip: "Hack while learning: fingers 2 and 3 only, 2 laid flat to mute the A. Full G comes when the hand is ready.",
    frets: [3, 2, 0, 0, 0, 3],
    fingers: [2, 1, 0, 0, 0, 3],
  },
  {
    id: "F",
    name: "F",
    tab: "1-3-3-2-1-1",
    group: "month3",
    tip: "Barre finger 1 across fret 1. Month three, not week one. I will take it off the table until then.",
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
  },
  {
    id: "E5",
    name: "E5",
    tab: "0-2-2-x-x-x",
    group: "power",
    tip: "Power chord. Strings 6, 5, 4 only. Mute the rest with the underside of finger 1.",
    frets: [0, 2, 2, null, null, null],
    fingers: [0, 1, 3, 0, 0, 0],
  },
  {
    id: "A5",
    name: "A5",
    tab: "x-0-2-2-x-x",
    group: "power",
    tip: "Power chord. Strings 5, 4, 3 only. Same shape as E5, one string over.",
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
    body: "This is the start, and it is enough. One-minute changes on D↔A, D↔E, A↔E. Four downstrums per bar at 60. Song: Lay Down Sally or Stir It Up. Ugly is fine. Showing up is the lesson.",
  },
  {
    id: "w34",
    label: "Weeks 3–4",
    title: "Am, Em, first riff",
    body: "E↔Am is the same grip walked over a string — the first 'I get it.' Smoke on the Water on two strings, slow, as the first riff. Songs: Sing, Moves Like Jagger. Fingertips should be complaining less. If they're not, you're pressing too hard.",
  },
  {
    id: "w56",
    label: "Weeks 5–6",
    title: "Dm, Old Faithful, metronome",
    body: "Dm uses finger 4, or 3 if 4 won't reach yet — it will. Old Faithful at 60, then 70. Changes above 20 a minute on the first pairs. The click is not the enemy. It's the friend who won't lie to you.",
  },
  {
    id: "w78",
    label: "Weeks 7–8",
    title: "C",
    body: "C is the one people want to skip. Sit with it. Finger 3 leans a little to mute the low E. Songs: Eleanor Rigby (Em, C), Get Lucky. When C lands clean three times in a row, say it out loud. You've earned it.",
  },
  {
    id: "w910",
    label: "Weeks 9–10",
    title: "G and faster changes",
    body: "Start with the two-finger G hack (2 on fret 3 of the low E, laid flat to mute the A; 3 on fret 3 of the high E). Full G when the hand asks. Push changes toward 30. Don't chase 60 yet.",
  },
  {
    id: "w1112",
    label: "Weeks 11–12",
    title: "Songs, power chords, the box",
    body: "Five songs you can get through, even if one of them is still a bit of a car crash. First power chords with palm muting. A minor pentatonic box 1 over your own MPC loop. Then, and only then, we start talking about F.",
  },
];
