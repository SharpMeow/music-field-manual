import { useState } from "react";
import { useField, useHasHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";

const FX = [
  {
    id: "vinyl",
    slot: "3.8, download first",
    name: "Vinyl Emulation",
    body: "Akai's own words: noise, dust, wobble, age. Added in 3.8 alongside Tape Emulation (wow, noise, pitch) and Vintage (classic hardware-sampler warmth and saturation). All three must be downloaded through Preferences → Activations before they show up. Start here now that they exist.",
    place: "Sample track",
  },
  {
    id: "flavor",
    slot: "The classic",
    name: "AIR Flavor",
    body: "EQ simulations of radios, phones and tape, with Vinyl Distortion and Vinyl Noise as separate 0–100% controls. Noise gives the clicks and pops. Belongs on the sample track.",
    place: "Sample track",
  },
  {
    id: "lofi",
    slot: "Destruction",
    name: "AIR Lo-Fi",
    body: "Bit depth to 1 bit, sample rate to 500 Hz, clip, rectify, noise modulation. The Anti-Alias section is off by default, which is why it sounds so harsh out of the box; turn it on for the musical version.",
    place: "Spare insert",
  },
  {
    id: "decim",
    slot: "Cheaper crunch",
    name: "Decimator vs Resampler",
    body: "Same idea, one difference: Decimator does no anti-alias filtering, Resampler does. Decimator for digital grit, Resampler when the sample-rate drop should hide behind the sound. Both also exist as per-pad Drum FX.",
    place: "Pad or track",
  },
  {
    id: "delay",
    slot: "Space",
    name: "Delay Tape Sync",
    body: "Tape loop and multi-head echo emulation, tempo-locked. A quarter-note tape delay at low feedback under keys is most of the genre's ambience. AIR Reverb Pro (Pro Pack) for the room.",
    place: "Keys / send",
  },
  {
    id: "filter",
    slot: "Top-end control",
    name: "AIR Vintage Filter",
    body: "Roll the highs off the sample track until it sounds like it came through a wall. AIR Kill EQ for live band-kills on the touch strip.",
    place: "Sample track",
  },
  {
    id: "clip",
    slot: "Grit",
    name: "AIR Diode Clip",
    body: "Akai's description: \"subtle grit to drum breaks.\" AIR Tube Drive if you want it warmer and louder. Color Compressor (3.8) for saturated compression in one box.",
    place: "Drums",
  },
  {
    id: "out",
    slot: "Glue",
    name: "Output inserts",
    body: "Compressor (Opto is gentlest), then AIR Limiter on the output, not the track. Output inserts are the documented place for mastering-style processing. AIR Visual EQ4 to see what you are doing.",
    place: "Output",
  },
] as const;

export function DirtChain() {
  const dirtOn = useField((s) => s.dirtOn);
  const toggleDirt = useField((s) => s.toggleDirt);
  const hydrated = useHasHydrated();
  const [sel, setSel] = useState("vinyl");
  const current = FX.find((f) => f.id === sel)!;
  const on = hydrated ? dirtOn : { vinyl: true, filter: true, out: true };
  const active = FX.filter((f) => on[f.id]);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted">
        Flip a slot into tonight’s chain. Tap a name to read it. Dirt at the track, glue at the
        output. Four insert slots at every level, plus four sends.
      </p>
      <div className="flex min-h-11 flex-wrap items-center gap-2">
        {active.length === 0 ? (
          <span className="text-sm text-subtle">Empty chain — flip a switch to add a slot.</span>
        ) : (
          active.map((f, i) => (
            <span key={f.id} className="flex items-center gap-2">
              {i > 0 ? <span className="text-subtle">→</span> : null}
              <button
                type="button"
                onClick={() => setSel(f.id)}
                className={cn(
                  "h-11 rounded-full border px-3 font-mono text-xs",
                  sel === f.id
                    ? "border-accent bg-accent text-accent-fg"
                    : "border-accent/40 bg-accent/10 text-fg",
                )}
              >
                {f.name}
              </button>
            </span>
          ))
        )}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {FX.map((f) => {
          const lit = !!on[f.id];
          const focused = sel === f.id;
          return (
            <div
              key={f.id}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-4 transition-colors duration-150",
                lit ? "border-accent/40 bg-surface" : "border-border bg-bg",
                focused && "ring-1 ring-accent/60",
              )}
            >
              <button
                type="button"
                onClick={() => setSel(f.id)}
                className="min-w-0 flex-1 text-left"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{f.slot}</p>
                <p className="mt-1 font-display text-xl font-semibold tracking-tight">{f.name}</p>
                <p className="mt-1 font-mono text-xs text-muted">{f.place}</p>
              </button>
              <button
                type="button"
                role="switch"
                aria-checked={lit}
                aria-label={`${lit ? "Remove" : "Add"} ${f.name}`}
                onClick={() => toggleDirt(f.id)}
                className={cn(
                  "relative h-8 w-14 shrink-0 rounded-full border transition-colors duration-150",
                  lit ? "border-accent bg-accent" : "border-border bg-elevated",
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 size-7 rounded-full bg-surface shadow-panel transition-transform duration-150",
                    lit ? "translate-x-6" : "translate-x-0.5",
                  )}
                />
              </button>
            </div>
          );
        })}
      </div>
      <div className="rounded-xl border border-border bg-surface p-5 shadow-panel">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">{current.slot}</p>
        <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">{current.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{current.body}</p>
      </div>
    </div>
  );
}
