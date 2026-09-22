import { useState, type CSSProperties } from "react";
import { cn, padBankNumber } from "@/lib/utils";

const ZONES = [
  {
    id: "qlink",
    label: "16 Q-Link knobs",
    short: "Q-Links",
    title: "Seventeen OLEDs",
    body: "Sixteen knobs, each with a display showing what it controls; touching one enlarges the value. On the Live III these are four banks of four; on the XL all sixteen are physical, so \"cycle Q-Link banks\" in tutorials does not apply to you. Hold Q-Links for the mode picker: Screen, Project, Track, Pad Scene, Pad Parameter, Track FX Rack, Volume, Pan, Sends, Step Sequencer.",
  },
  {
    id: "pads",
    label: "16 pads",
    short: "Pads",
    title: "3D sensing",
    body: "Each pad reads velocity, pressure and finger position and is split into four quadrants. Per layer, Track Edit → Samples → Tune/Mix has an MPCe toggle so a corner fires a different layer. The pad's second Effects page assigns four articulations (flams, rolls, buzzes) to the corners. Q-Link Edit → MPCe Pads maps X, Y and pressure to any parameter, drum tracks only.",
  },
  {
    id: "steps",
    label: "16 step buttons",
    short: "Steps",
    title: "Bottom row",
    body: "Hold Set + a step button to pick the row's mode: Drum Seq, Note Seq, Step Edit, Note Length, Last Step, Automation, Clip Launch, Row Launch, Track Select, Track Arm, Track Mute, Pad Mute, Next Seq, Q-Link Pad Grid, Visuals, Edit Actions.",
  },
  {
    id: "strip",
    label: "Touch strip + Touch FX",
    short: "Strip",
    title: "Left edge",
    body: "Touch Strip cycles modes: Q-Link 1–16, Pad Level, Track Level, Notes, Note Strum, Pitch Bend, Mod Wheel, Sustain, Expression, Crossfader. Touch FX (own button on the XL) drops a 20-preset performance effect on a track, return, submix or output: manual and beat-synced filters, beat repeat, tape stop, delays, phaser, comb filter, washout, granulator, flanger.",
  },
  {
    id: "channel",
    label: "Channel Control",
    short: "Channel",
    title: "Right side, XL only",
    body: "Akai markets it as XL Channel Command; the manual calls it Channel Control. A hardware channel strip with its own OLED and meter. Press Tracks, Outputs, Returns or Submixes to pick a class, step with TRK− / TRK+, then arm, mute, solo, open inserts (Track FX) or set level with the knob, without opening the mixer.",
  },
  {
    id: "io",
    label: "Front vs rear",
    short: "I/O",
    title: "Inputs",
    body: "Two rear combo XLR/TRS with preamps and a single +48V for both. Two front instrument jacks. Each Gain knob has a Rear/Front switch beneath it choosing which of those it feeds. Inputs 3/4 are rear TRS or RCA with a Phono/Line switch. Stereo/Mono puts a single mic or guitar in both ears. That Rear/Front switch is the most-missed control on the machine.",
  },
] as const;

export function HardwareMap() {
  const [id, setId] = useState<(typeof ZONES)[number]["id"]>("pads");
  const zone = ZONES.find((z) => z.id === id)!;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-xl border border-border bg-surface p-4 shadow-panel sm:p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Deck · tap a zone</p>
        <div className="mt-3 flex h-10 items-center rounded-md border border-border bg-elevated px-3">
          <span className="font-mono text-xs text-subtle">10.1″ · MPC 3</span>
        </div>
        <div className="mt-2 grid grid-cols-[auto_1fr_auto] gap-2">
          <button
            type="button"
            onClick={() => setId("strip")}
            aria-pressed={id === "strip"}
            className={cn(
              "row-span-3 flex min-h-44 w-9 flex-col items-center justify-center rounded-md border font-mono text-xs uppercase tracking-widest",
              id === "strip" ? "border-accent bg-accent/15 text-fg" : "border-border text-muted",
            )}
            style={{ writingMode: "vertical-rl" }}
          >
            Strip
          </button>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setId("qlink")}
              aria-pressed={id === "qlink"}
              aria-label="Q-Link knobs"
              className={cn(
                "grid grid-cols-8 gap-1 rounded-md border p-2 transition-colors duration-200",
                id === "qlink" ? "border-accent bg-accent/10" : "border-border",
              )}
            >
              {Array.from({ length: 16 }, (_, i) => (
                <span
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-full border border-border bg-elevated"
                >
                  <span className="size-1.5 rounded-full bg-muted" />
                </span>
              ))}
            </button>
            <button
              type="button"
              onClick={() => setId("pads")}
              aria-pressed={id === "pads"}
              aria-label="Pads"
              className={cn(
                "grid grid-cols-4 gap-1.5 rounded-md border p-2 transition-colors duration-200",
                id === "pads" ? "border-accent bg-accent/10" : "border-border",
              )}
            >
              {Array.from({ length: 16 }, (_, i) => {
                const n = padBankNumber(i);
                return (
                  <span
                    key={i}
                    className={cn(
                      "pad-key flex aspect-square items-center justify-center font-mono text-xs",
                      n === 1 ? "pad-armed text-accent-fg" : "text-subtle",
                    )}
                  >
                    {n}
                  </span>
                );
              })}
            </button>
            <button
              type="button"
              onClick={() => setId("steps")}
              aria-pressed={id === "steps"}
              aria-label="Step buttons"
              className={cn(
                "grid grid-cols-8 gap-1 rounded-md border p-2 transition-colors duration-200",
                id === "steps" ? "step-seq border-accent bg-accent/10" : "border-border",
              )}
            >
              {Array.from({ length: 16 }, (_, i) => (
                <span
                  key={i}
                  className="step-key flex h-7 items-center justify-center rounded-sm border border-border font-mono text-xs"
                  style={{ "--i": i } as CSSProperties}
                >
                  {i + 1}
                </span>
              ))}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setId("channel")}
            aria-pressed={id === "channel"}
            className={cn(
              "row-span-3 flex w-16 flex-col items-center gap-2 rounded-md border p-2",
              id === "channel" ? "border-accent bg-accent/15" : "border-border",
            )}
          >
            <span className="h-7 w-full rounded-sm bg-elevated" />
            <span className="flex h-10 w-2 flex-col justify-end overflow-hidden rounded-sm bg-border">
              <span className="h-1/2 w-full bg-ok" />
            </span>
            <span className="size-8 rounded-full border border-border bg-elevated" />
            <span className="mt-auto font-mono text-xs uppercase tracking-widest text-muted">
              Ch
            </span>
          </button>
        </div>
        <button
          type="button"
          onClick={() => setId("io")}
          aria-pressed={id === "io"}
          className={cn(
            "mt-2 min-h-11 w-full rounded-md border px-3 py-2 text-left font-mono text-xs uppercase tracking-widest",
            id === "io" ? "border-accent bg-accent/15 text-fg" : "border-border text-muted",
          )}
        >
          Front Inst 1 / 2 · Rear XLR · RCA 3/4 · Rear/Front switches
        </button>
        <div className="mt-3 flex flex-wrap gap-1">
          {ZONES.map((z) => (
            <button
              key={z.id}
              type="button"
              onClick={() => setId(z.id)}
              aria-pressed={id === z.id}
              className={cn(
                "h-9 rounded-full px-3 font-mono text-xs",
                id === z.id ? "bg-elevated text-fg" : "text-muted hover:text-fg",
              )}
            >
              {z.short}
            </button>
          ))}
        </div>
      </div>
      <aside
        className="rounded-xl border border-border bg-surface p-5 shadow-panel"
        aria-live="polite"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-accent-ink">{zone.label}</p>
        <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">{zone.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{zone.body}</p>
      </aside>
    </div>
  );
}
