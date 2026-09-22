import { useState } from "react";
import { CHORDS, type ChordShape } from "@/data/chords";
import { strum } from "@/lib/audio";
import { cn } from "@/lib/utils";
import { useWidgetHeading } from "@/lib/heading-level";

const STR_LABELS = ["E", "A", "D", "G", "B", "e"];

function barreOf(chord: ChordShape) {
  const ones = chord.frets
    .map((fret, i) => (chord.fingers[i] === 1 && fret && fret > 0 ? { i, fret } : null))
    .filter((n): n is { i: number; fret: number } => n !== null);
  if (ones.length < 2) return null;
  const fret = ones[0].fret;
  if (ones.some((o) => o.fret !== fret)) return null;
  const from = ones[0].i;
  const to = ones[ones.length - 1].i;
  if (to - from < 3) return null;
  return { fret, from, to };
}

function playChord(c: ChordShape) {
  const notes = c.frets
    .map((fret, i) => (fret === null ? null : { string: 6 - i, fret }))
    .filter((n): n is { string: number; fret: number } => n !== null);
  strum(notes);
}

export function ChordCard({
  chord,
  active,
  onSelect,
}: {
  chord: ChordShape;
  active?: boolean;
  onSelect?: () => void;
}) {
  const [ring, setRing] = useState(0);
  const barre = barreOf(chord);
  const nut = chord.frets.every((f) => f === null || f === 0 || (f ?? 0) <= 3);
  const start = nut
    ? 1
    : Math.max(1, Math.min(...chord.frets.filter((f): f is number => f !== null && f > 0)));
  const fretsShown = 4;
  const w = 148;
  const h = 188;
  const left = 28;
  const right = 14;
  const top = 28;
  const bottom = 18;
  const boardW = w - left - right;
  const boardH = h - top - bottom;

  return (
    <button
      type="button"
      onClick={() => {
        playChord(chord);
        setRing((n) => n + 1);
        onSelect?.();
      }}
      className={cn(
        "flex flex-col items-center rounded-xl border bg-surface p-4 text-left shadow-panel transition-colors duration-150",
        active ? "border-accent" : "border-border hover:border-muted",
      )}
    >
      <div className="flex w-full items-baseline justify-between">
        <span className="font-display text-2xl font-semibold tracking-tight">{chord.name}</span>
        <span className="font-mono text-xs text-muted">{chord.tab}</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 w-full max-w-44" aria-hidden>
        {STR_LABELS.map((lab, i) => {
          const x = left + (boardW * i) / 5;
          return (
            <text
              key={lab}
              x={x}
              y={14}
              textAnchor="middle"
              className="fill-muted"
              fontSize="10"
              fontFamily="IBM Plex Mono, monospace"
            >
              {lab}
            </text>
          );
        })}
        {chord.frets.map((f, i) => {
          const x = left + (boardW * i) / 5;
          const mark = f === null ? "×" : f === 0 ? "○" : "";
          return mark ? (
            <text
              key={`m${i}`}
              x={x}
              y={26}
              textAnchor="middle"
              className="fill-fg"
              fontSize="12"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              {mark}
            </text>
          ) : null;
        })}
        {nut ? (
          <rect x={left - 1} y={top} width={boardW + 2} height={4} className="fill-fg" />
        ) : (
          <text
            x={6}
            y={top + boardH / 8}
            className="fill-muted"
            fontSize="10"
            fontFamily="IBM Plex Mono, monospace"
          >
            {start}fr
          </text>
        )}
        {Array.from({ length: fretsShown + 1 }, (_, i) => {
          const y = top + (boardH * i) / fretsShown;
          return (
            <line
              key={`f${i}`}
              x1={left}
              x2={left + boardW}
              y1={y}
              y2={y}
              className="stroke-border"
              strokeWidth={i === 0 && nut ? 0 : 1}
            />
          );
        })}
        {Array.from({ length: 6 }, (_, i) => {
          const x = left + (boardW * i) / 5;
          return (
            <line
              key={`s${i}`}
              x1={x}
              x2={x}
              y1={top}
              y2={top + boardH}
              className="stroke-muted"
              strokeWidth={i === 0 ? 2.2 : 1}
            />
          );
        })}
        {barre
          ? (() => {
              const rel = nut ? barre.fret : barre.fret - start + 1;
              if (rel < 1 || rel > fretsShown) return null;
              const x1 = left + (boardW * barre.from) / 5;
              const x2 = left + (boardW * barre.to) / 5;
              const y = top + (boardH * (rel - 0.5)) / fretsShown;
              return (
                <g>
                  <rect
                    x={x1 - 9}
                    y={y - 9}
                    width={x2 - x1 + 18}
                    height={18}
                    rx={9}
                    className="fill-accent"
                  />
                  <text
                    x={(x1 + x2) / 2}
                    y={y + 3.5}
                    textAnchor="middle"
                    className="fill-accent-fg"
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="IBM Plex Sans, sans-serif"
                  >
                    1
                  </text>
                </g>
              );
            })()
          : null}
        {chord.frets.map((f, i) => {
          if (f === null || f === 0) return null;
          if (barre && chord.fingers[i] === 1) return null;
          const rel = nut ? f : f - start + 1;
          if (rel < 1 || rel > fretsShown) return null;
          const x = left + (boardW * i) / 5;
          const y = top + (boardH * (rel - 0.5)) / fretsShown;
          return (
            <g key={`d${i}`} className={ring ? "note-hit" : undefined} style={{ transformOrigin: `${x}px ${y}px` }}>
              <circle cx={x} cy={y} r={9} className="fill-accent" />
              <text
                x={x}
                y={y + 3.5}
                textAnchor="middle"
                className="fill-accent-fg"
                fontSize="10"
                fontWeight="600"
                fontFamily="IBM Plex Sans, sans-serif"
              >
                {chord.fingers[i] || ""}
              </text>
            </g>
          );
        })}
        {ring > 0 ? (
          <rect
            key={ring}
            x={left}
            y={top}
            width={boardW}
            height={16}
            rx={2}
            className="strum-sweep"
          />
        ) : null}
      </svg>
      <p className="mt-1 text-xs leading-relaxed text-muted">{chord.tip}</p>
    </button>
  );
}

const GROUPS: Array<{ id: ChordShape["group"] | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "weeks12", label: "Weeks 1–2" },
  { id: "weeks34", label: "Weeks 3–4" },
  { id: "weeks58", label: "Weeks 5–8" },
  { id: "weeks910", label: "Weeks 9–10" },
  { id: "month3", label: "Month 3" },
  { id: "power", label: "Power" },
];

export function ChordLibrary() {
  const Heading = useWidgetHeading();
  const [group, setGroup] = useState<ChordShape["group"] | "all">("all");
  const shown =
    group === "all" ? GROUPS.filter((g) => g.id !== "all") : GROUPS.filter((g) => g.id === group);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs text-subtle">Tap a shape to hear it</p>
        <div
          className="flex flex-wrap gap-1 rounded-full border border-border bg-elevated p-1"
          role="tablist"
          aria-label="Chord groups"
        >
          {GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              role="tab"
              aria-selected={group === g.id}
              onClick={() => setGroup(g.id)}
              className={cn(
                "h-9 rounded-full px-3 text-sm",
                group === g.id ? "bg-surface text-fg shadow-panel" : "text-muted hover:text-fg",
              )}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>
      {shown.map((g) => (
        <section key={g.id}>
          <Heading className="font-mono text-xs uppercase tracking-widest text-muted">{g.label}</Heading>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CHORDS.filter((c) => c.group === g.id).map((c) => (
              <ChordCard key={c.id} chord={c} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
