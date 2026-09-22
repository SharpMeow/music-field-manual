import { useState } from "react";
import { tone } from "@/lib/audio";
import { cn } from "@/lib/utils";

const STRINGS = ["e", "B", "G", "D", "A", "E"] as const;
const FRETS = [4, 5, 6, 7, 8, 9];

type Note = { string: (typeof STRINGS)[number]; fret: number; finger: number; root?: boolean; hz: number };

// A minor pentatonic box 1, concert pitch
const NOTES: Note[] = [
  { string: "E", fret: 5, finger: 1, root: true, hz: 110.0 },
  { string: "E", fret: 8, finger: 4, hz: 130.81 },
  { string: "A", fret: 5, finger: 1, hz: 146.83 },
  { string: "A", fret: 7, finger: 3, hz: 164.81 },
  { string: "D", fret: 5, finger: 1, hz: 196.0 },
  { string: "D", fret: 7, finger: 3, root: true, hz: 220.0 },
  { string: "G", fret: 5, finger: 1, hz: 261.63 },
  { string: "G", fret: 7, finger: 3, hz: 293.66 },
  { string: "B", fret: 5, finger: 1, hz: 329.63 },
  { string: "B", fret: 8, finger: 4, hz: 392.0 },
  { string: "e", fret: 5, finger: 1, root: true, hz: 440.0 },
  { string: "e", fret: 8, finger: 4, hz: 523.25 },
];

export function Pentatonic() {
  const [last, setLast] = useState<string | null>(null);

  return (
    <div className="rounded-xl border border-border bg-surface p-4 shadow-panel sm:p-5">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Box 1 · A minor pentatonic
        </p>
        <p className="font-mono text-xs text-subtle">Tap a note</p>
      </div>
      <div className="mt-4 overflow-x-auto">
        <div className="min-w-[20rem]">
          {STRINGS.map((s) => (
            <div key={s} className="grid grid-cols-[1.5rem_repeat(6,1fr)] items-center gap-1 py-1">
              <span className="font-mono text-xs text-muted">{s}</span>
              {FRETS.map((f) => {
                const note = NOTES.find((n) => n.string === s && n.fret === f);
                const key = `${s}${f}`;
                if (!note) {
                  return (
                    <span
                      key={f}
                      aria-hidden="true"
                      className="flex h-12 items-center justify-center rounded-sm border border-transparent"
                    >
                      <span className="h-px w-full bg-border" />
                    </span>
                  );
                }
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => {
                      tone(note.hz);
                      setLast(key);
                    }}
                    className={cn(
                      "relative flex h-12 items-center justify-center rounded-sm border",
                      note.root
                        ? "border-accent bg-accent-fill text-accent-fg"
                        : "border-border bg-elevated text-fg hover:border-muted",
                      last === key && "note-hit ring-1 ring-fg/50",
                    )}
                    aria-label={`${s} string fret ${f}, finger ${note.finger}${note.root ? ", root" : ""}`}
                  >
                    <span className="font-display text-lg font-semibold">{note.finger}</span>
                  </button>
                );
              })}
            </div>
          ))}
          <div className="grid grid-cols-[1.5rem_repeat(6,1fr)] gap-1 pt-1">
            <span />
            {FRETS.map((f) => (
              <span key={f} className="text-center font-mono text-xs text-subtle">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted">
        Red = root (A). Numbers = finger. Slide the whole shape to fret 3 for G minor; fret 7 for B
        minor.
      </p>
    </div>
  );
}
