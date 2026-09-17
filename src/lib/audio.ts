let ctx: AudioContext | null = null;

export function audio(): AudioContext {
  if (!ctx) ctx = new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function envGain(duration: number, peak = 0.18) {
  const ac = audio();
  const g = ac.createGain();
  const t = ac.currentTime;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  g.connect(ac.destination);
  return { g, t, ac };
}

export function click(accent = false) {
  const { g, t, ac } = envGain(accent ? 0.08 : 0.05, accent ? 0.22 : 0.1);
  const o = ac.createOscillator();
  o.type = "square";
  o.frequency.setValueAtTime(accent ? 1320 : 880, t);
  o.connect(g);
  o.start(t);
  o.stop(t + 0.08);
}

const OPEN: Record<number, number> = {
  6: 82.41,
  5: 110,
  4: 146.83,
  3: 196,
  2: 246.94,
  1: 329.63,
};

function fretHz(stringN: number, fret: number) {
  return OPEN[stringN] * 2 ** (fret / 12);
}

function pluck(hz: number, when: number, decay = 1.15) {
  const ac = audio();
  const o = ac.createOscillator();
  const g = ac.createGain();
  const f = ac.createBiquadFilter();
  o.type = "triangle";
  o.frequency.setValueAtTime(hz, when);
  f.type = "lowpass";
  f.frequency.setValueAtTime(1400, when);
  g.gain.setValueAtTime(0.0001, when);
  g.gain.exponentialRampToValueAtTime(0.12, when + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, when + decay);
  o.connect(f);
  f.connect(g);
  g.connect(ac.destination);
  o.start(when);
  o.stop(when + decay + 0.05);
}

export function strum(notes: Array<{ string: number; fret: number }>) {
  const ac = audio();
  const t = ac.currentTime;
  notes.forEach((n, i) => {
    pluck(fretHz(n.string, n.fret), t + i * 0.028, 1.4);
  });
}

export function tone(hz: number) {
  pluck(hz, audio().currentTime, 0.9);
}
