import type { Section } from "./types";

export const MPC_TECH: Section[] = [
  {
    slug: "ticks",
    part: "mpc",
    title: "Ticks, swing math, and the window",
    kicker: "960 PPQ",
    blurb: "MPC 3 is 960 pulses per quarter note. Timing Correct is not a vibe knob. It is arithmetic on even sixteenths, a capture window, and a lerp toward the grid.",
    blocks: [
      {
        type: "lead",
        text: "1/4 = 960 ticks · 1/8 = 480 · 1/16 = 240 · 1/32 = 120 · 1/16T = 160 · 1/8T = 320. Shift Timing is this unit. The sequencer does not know 'a little late.' It knows an integer.",
      },
      {
        type: "h",
        text: "What swing actually delays",
      },
      {
        type: "p",
        text: "At time division 1/16, odd sixteenths (the downbeats of each pair: ticks 0, 480, 960…) stay put. Even sixteenths (the off-beats: 240, 720, …) are delayed. 50% swing = delay 0. 75% = delay of a full 32nd (120 ticks). The even 16th has been pushed halfway to the next odd one. That is the ceiling, and it is why 75% feels broken rather than 'more groovy.'",
      },
      {
        type: "table",
        columns: ["Swing", "Even-16th delay", "Closest musical meaning"],
        rows: [
          ["50%", "0 ticks", "Straight 16ths. House, trap, anything that must grid."],
          ["54–56%", "≈19–29 ticks", "A lean. Modern R&B, quiet boom-bap."],
          ["58–60%", "≈38–48 ticks", "Classic MPC hip-hop. The number people mean."],
          ["66%", "≈77 ticks", "Approaching a 16th-triplet shuffle. Gospel, some neo-soul."],
          ["75%", "120 ticks", "Even 16th sits on the next 32nd. Rarely musical."],
        ],
      },
      {
        type: "p",
        text: "Triplet time division is a different grid, not a substitute for 66% on 16ths. 1/16T is 160 ticks. If you want actual triplets, set the division to T. If you want shuffled 16ths, stay on 1/16 and move swing. Mixing both is how hats land in two meters at once.",
      },
      {
        type: "kvs",
        items: [
          { k: "Strength", v: "A lerp, not a gate. NewTick = Old + Strength × (Grid − Old). 100% teleports. 80% pulls 80% of the error. Notes already on the grid do not move. This is why Strength 80 + Swing 56 can still feel played: the error you left in is 20% of whatever you performed." },
          { k: "Window", v: "Only events within this distance of a grid point are eligible. Events outside are untouched. A tight window + high strength is 'fix the almosts, leave the flams.' A wide window + 100% strength is a quantize of everything, including the ghost you wanted late." },
          { k: "Shift Timing", v: "A constant tick offset after (or instead of) snap. Negative = earlier. A snare at +8 to +16 ticks is 'behind' at 80–90 BPM; at 140 BPM the same 16 ticks is a different fraction of the beat, so retune Shift when you change tempo." },
          { k: "TC on vs Quantize button", v: "TC On/Off is input quantize: new notes land already processed. Quantize / Shift+Quantize is destructive on what is already in the track. Apply swing on input for hats you are about to play; apply it after for a take you recorded raw." },
          { k: "Hitting Pad Selects All Events", v: "In the Timing Correct window, turn this on, press the hat pad, then apply. That is per-pad swing — hats at 58, kick at 50 — which is the actual classic trick, not 'swing the sequence.'" },
          { k: "Audio regions", v: "Timing Correct can snap audio-track regions to the same grid. Warp must be on or you are sliding a clip, not stretching it. Do not TC a vocal to 1/16 unless you want it to rap." },
        ],
      },
      { type: "widget", name: "swing" },
      {
        type: "callout",
        kind: "trap",
        title: "Swing is tempo-invariant in ticks, not in milliseconds",
        text: "58% at 70 BPM is a longer real-world delay than 58% at 110. The percentage is of the 16th, not of 20 ms. If you dump a 70 BPM swung pattern into a 110 sequence, the tick delays stay, the feel does not. Re-apply TC at the new tempo or Shift Timing by ear.",
      },
    ],
  },
  {
    slug: "engine",
    part: "mpc",
    title: "The audio engine, 44.1, and where latency lives",
    kicker: "Fixed clock",
    blurb: "The XL is a 44.1 kHz machine. Direct monitoring is before the DSP. Plugin latency is after it. Mixing those two up is how people 'fix' a machine that is not late.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Sample rate", v: "Internal 44.1 kHz. USB interfaces on the A ports are capped there. 48 kHz devices fail or resample badly. USB-C to a DAW is 24 channels at the XL's rate; set the DAW to 44.1 or you are the conversion." },
          { k: "Bit depth", v: "Mixdown at 24-bit is the documented default. Internally you are not 'in 32-bit float for the art'; you are in a standalone sampler. Leave headroom. The limiter is not a bit-depth strategy." },
          { k: "Dir/Main", v: "Direct is the analog copy of the input, before Sampler DSP, before plugins, before the mix bus. Main is the processed monitor. Recording with Main as the monitor means you are hearing plugin latency and calling it the machine. Direct + Sampler Monitor In is the zero-latency path Akai means." },
          { k: "Armed audio tracks", v: "An armed audio track is a live input buffer even when you are not recording. Un-arm to get RAM and to stop the input sitting on the mix. Monitor In / Auto / Merge on the I/O tab is a separate decision from arm." },
          { k: "Plugin delay", v: "Linear-phase EQ, Lookahead limiters, some AIR verbs, and Warp Super all add latency. There is no published per-plugin PDC table. If a plugin track sits late against a drum pad, it is often this, not your TC. Bounce or flatten rather than nudging every clip by guess." },
          { k: "Voices", v: "256. A voice is one sounding layer, not one pad. A pad with 4 layers and a long hat decay is 4 voices until release. Voice stealing will kill the oldest decaying hat, which is why mute groups are cheaper than more polyphony." },
          { k: "Headphones vs Main", v: "Metronome output can be phones-only. Do that when combo 1 is a mic. Cue is not a fully separate DJ cue bus unless you route a submix to 3/4 and listen there; the XL is not a DJ mixer with a cue crossfader unless you build one." },
        ],
      },
      {
        type: "callout",
        kind: "tip",
        title: "Measure it once",
        text: "Record a pad click to an audio track via Resample L+R and via a front input loopback if you have a cable. The sample offset between those two is your monitoring story. Do this once, write the number in Notes, stop arguing with the internet.",
      },
    ],
  },
  {
    slug: "matrix",
    part: "mpc",
    title: "Mod matrix, followers, LFOs, MPCe",
    kicker: "32 slots",
    blurb: "Since 3.7 Slice is a destination. Since Pro Pack, 16 envelope followers and 16 LFOs are sources. Pad XY still only exists on drum tracks. This is the modulation surface, named.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Matrix anatomy", v: "Source, destination, depth, optional curve. 32 slots per drum/keygroup track. A slot at depth 0 is not 'off' in CPU in any way you should care about; it is off in result. Sources include velocity, aftertouch/pressure, pad X, pad Y, LFO 1/2, random, the Q-Link followers, and the pad's own envelopes." },
          { k: "Slice as destination", v: "3.7. Velocity or an LFO can pick which slice of a pad plays. Depth scaled across the slice count. This is round-robin's intelligent cousin: harder hits play later slices of a break, or an LFO crawls a texture. Slice Motion Increment/Random on Samples page 1 is the dumb version; the matrix is the programmable one." },
          { k: "Followers", v: "Q-Link Edit → Envelope Follower / LFO. 16 followers. Envelope Source = a track or a pad. Tap Pre-Inserts if you want the dry kick; Post-Fader if you want the mixed one (muted kick = no pump). Attack/Decay in ms-class controls. Gate and Hyst reject hats bleeding into a kick send. Flip inverts so loud becomes down. Parameter Range is the min/max of the destination, not 'amount' in the synth sense." },
          { k: "LFOs here vs Track Edit LFOs", v: "Track Edit has two LFOs baked into the pad (pitch/filter/amp/pan). Q-Link LFOs are project-level modulators you can Learn onto anything, including a send or a plugin parameter. Free-running vs reset-on-play is the difference between 'the filter is always wandering' and 'the filter starts at the same phase every time you press Play.' Pick reset for records, free for installations." },
          { k: "MPCe", v: "X, Y, pressure. Drum tracks only. Q-Link Edit → MPCe Pads to map them. Samples → Tune/Mix → MPCe assigns a layer to a quadrant (four samples under one pad, corner selects). Effects page 2 articulations (flam, roll, buzz) are a separate quadrant map. You can use both; you will confuse yourself." },
          { k: "Aftertouch vs pressure", v: "Notes / Shift Notes is Pad CTRL, the pad aftertouch enable. Hardware → Aftertouch in Preferences is the curve. Pressure as a matrix source on a drum pad is continuous; aftertouch on a keygroup is MIDI aftertouch to a plugin. They are not the same bus." },
          { k: "Macros", v: "One Q-Link, several destinations, mixed depths (including negative). A 'dirt' macro that opens Vinyl noise, drops a LPF, and raises a send is one physical gesture. Learn, then stack in the inspector. Automation writes the macro, not the three destinations separately, if you touch the knob — know which one you will edit later." },
        ],
      },
      {
        type: "callout",
        kind: "trap",
        title: "Learn while a follower is on",
        text: "Learn grabs the last moved control. If the follower is already moving a fader, Learn can grab the follower's output as if you moved it. Turn the follower off, Learn the destination by hand, turn the follower back on, then Flip.",
      },
    ],
  },
  {
    slug: "warp",
    part: "mpc",
    title: "Warp algorithms and the cost of time",
    kicker: "Super / Pro Ten / Repitch",
    blurb: "Warp is the most expensive live process on the machine. The three algorithms are not grades of 'quality.' They are different physics. Flatten is how you stop paying.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Repitch", v: "Varispeed. Length and pitch are locked, like a record or an MPC60. Drop Semi, the chop gets longer and darker. This is often the right lo-fi answer and the cheapest CPU. Warp does not need to be on for a simple Semi on a pad; Warp+Repitch is for syncing a phrase to BPM while still behaving like tape." },
          { k: "Pro Ten", v: "The workhorse time-stretch. Pitch and length independent. BPM Sync on + Warp on locks a phrase to sequence tempo. Transients survive better than old z-plane-style stretch. Use on chops that must stay in key when the sequence moves." },
          { k: "Super", v: "Pro Pack. Higher quality, higher cost. Vocals, long tones, anything that got 'watery' on Pro Ten. Not for 16 hats. If you cannot hear Super vs Pro Ten on a drum, you are wasting an 8-core." },
          { k: "BPM Sync vs Warp", v: "Warp without BPM Sync is a static ratio. BPM Sync follows the sequence (and global tempo if GBL is lit). A chopped break with BPM Sync on will follow a live tap-tempo; that can be a feature or a drunken choir." },
          { k: "Transient / stretch artefacts", v: "Pre-echo and smearing on transients mean the algorithm is fighting a transient it should have been told about. Chop on the transient first, Warp the slice, not the two-bar loop with four kicks in it. Or don't Warp: Repitch the whole break and live with the key change." },
          { k: "Flatten Pad", v: "[Shift]+[Stem], Audio Tail 1–2 s, full velocity through pad inserts and the chosen warp. Layer 1 becomes a plain sample. CPU drops to 'one oneshot.' Keep an unflattened muted copy only if the project is still a laboratory." },
          { k: "Offline pitch/time in Sample Edit", v: "Process menu writes a new sample. No live CPU. Use when the ratio is a decision, not a performance. You cannot un-stretch a processed file; duplicate first." },
        ],
      },
    ],
  },
  {
    slug: "filters",
    part: "mpc",
    title: "Filter topologies on a pad",
    kicker: "Poles, models, 3000",
    blurb: "The pad filter is not 'a low-pass.' It is a list of slopes and analog models, plus the 1994 MPC3000 LPF. Cutoff is only half the sound. Resonance, poles, and which envelope hits it are the rest.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Slope / poles", v: "1-pole ≈ 6 dB/oct (gentle, almost a tone control). 2-pole ≈ 12 dB/oct. 6- and 8-pole are steep, for 'the high end fell off a cliff.' Steep + high resonance rings. A chop that must still sound like a record usually wants 2-pole, not 8." },
          { k: "LP / HP / BP / BS / boost", v: "Low-pass is the dusty default. High-pass on hats and on everything that is not the sub. Band-pass for telephones and 'this chop is only the mids.' Band-stop (notch) for a honk. Boost is not an EQ; it is a resonant emphasis, easy to clip later inserts." },
          { k: "Model 1–3", v: "Analog-style. Model 3 is the aggressive one (more saturation/resonance as documented). If the filter is the instrument, Model 3. If the filter is a lid on a vinyl chop, Model 1 or the 3000." },
          { k: "MPC3000 LPF", v: "12 dB/oct low-pass from the 1994 machine. The short route to 'this sounds like an MPC' on a chop. Put it on the chop pad, not the drum bus. Resonance low unless you want it to whistle." },
          { k: "Vocal formants", v: "A talking filter. Fun on an 808 decay or a long vocal slice. Depth from the filter envelope, not from a second LFO, until you know which one you are hearing." },
          { k: "Filter envelope vs amp envelope", v: "On kicks: a fast filter-envelope open is the punch; amp decay is the weight. On chops: filter envelope at low depth so the note doesn't wah unless velocity asks. Velocity → cutoff in the matrix is usually better than a static envelope for hats." },
          { k: "Where not to filter", v: "A track-level Vintage Filter on a drum group also dulls the kick click. Per-pad HP on hats, per-pad 3000 on chops, bus EQ for the rest. The mix chapter is the same advice with a different noun." },
        ],
      },
    ],
  },
  {
    slug: "key-deep",
    part: "mpc",
    title: "Keygroups: zones, loops, velocity, root",
    kicker: "128 keygroups",
    blurb: "A keygroup is not 'the sample on all the pads.' It is a zone map with a root, optional loop, velocity layers, and crossfades. Wrong root is a transposition error you will mix around for a month.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Root Note", v: "The MIDI note that plays the sample at original pitch. Set it in Trim, in the Sampler Keep window, and in Track Edit. [Shift]+[16 Levels] to Keygroup uses whatever root is on the pad. If you sampled a D and leave root on C, every Pad Perform scale is a tone off." },
          { k: "Key range / fade", v: "Each keygroup occupies a range. Adjacent groups can crossfade so a sampled scale does not brick-wall at the split. Overlap the ranges and use fade, or you will hear the sample jump at G#." },
          { k: "Velocity layers", v: "Vel Start / Vel End per layer, same as drums. A Rhodes with a hard layer above 100 is why Stage EP still earns a plugin until you Auto Sample it with two velocities." },
          { k: "Loop modes", v: "Off, Forward, Alternating, etc., in Trim. Loop start/end on zero crossings or the click is now a pitched tick. Crossfade the loop if the sample allows; a 10–40 ms xfade hides the join on pads and strings, and smears drums — do not loop a snare." },
          { k: "One-shot vs Note On", v: "Keygroups you play as notes want Note On (release stops the sample) plus an amp ADSR. One-shot is for hits that must finish. A held Mellotron chord on One-shot will pile voices until 256 and then steal." },
          { k: "Auto Sampler", v: "Note range, velocity layers, loop points, from a plugin or MIDI out. It writes a keygroup. Round-trip: you lose the plugin's remaining modulation, you gain RAM and voices. Do it when the preset is a decision." },
        ],
      },
    ],
  },
  {
    slug: "cv-deep",
    part: "mpc",
    title: "CV math: 16 outs, 1 V/oct, Playgroup",
    kicker: "Pro Pack Advanced CV",
    blurb: "Eight TRS jacks, 16 channels. Melodic CV is pitch + gate. Drum CV is any pad to any jack. Playgroup is LFOs and envelopes onto those jacks so the case is not just a keyboard.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "1 V/oct", v: "The default. 1 volt per octave, 0 V around a documented reference note (set and check with a tuner on the module, not by faith). A module in Hz/V (old Korg/Yamaha) will not track; that is a scaling problem, not a cable." },
          { k: "Gate polarity and length", v: "V-trig vs S-trig, 5 V vs 10 V class — match the module. Gate length from note length on a CV track. A 10 ms gate on a long envelope module is a click; a 100% gate on a percussion module never decays." },
          { k: "Drum CV", v: "Any pad → any of the 16. A hat pad can fire a decay on a filter, not just a drum voice. Velocity to a second channel is accent if you assign it." },
          { k: "Melodic CV track", v: "Note → pitch CV, gate on a paired channel, optional velocity. Local off if you do not also want an internal plugin. Track Settings is the port map." },
          { k: "Playgroup / Advanced CV", v: "Q-Link LFOs and followers can target CV outs. A kick follower ducking a VCA in the case is the same Learn/Flip story as sidechain, with volts. Reset-on-play for synced filter sweeps; free-running for drift." },
          { k: "TRS split", v: "Each 3.5 mm is stereo: two CVs. A passive split cable is two channels. Do not assume tip=pitch ring=gate unless you assigned it that way." },
          { k: "Clock as CV", v: "If you need analog clock, that is a CV LFO or a dedicated clock assignment, not MIDI clock on a 3.5 mm. MIDI clock stays on DIN/USB." },
        ],
      },
      {
        type: "callout",
        kind: "warn",
        title: "Do not put 10 V into something that wanted 5",
        text: "Check the module. The XL is a studio brain, not a suggestion. A wrong voltage is a hardware problem, not a 'calibration' in software.",
      },
    ],
  },
  {
    slug: "clips-deep",
    part: "mpc",
    title: "Clip Matrix internals",
    kicker: "Pro Pack",
    blurb: "8×8, one clip per track at a time, Follow Actions, Row Launch, snapshots. This is a performance graph, not a playlist. Song Mode is the playlist. Do not maintain both for one piece.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "One clip per track", v: "Launching a clip in a column stops the previous clip on that track. It does not stack. If you want two ideas at once, they are two tracks, not two clips in one column." },
          { k: "Follow Actions", v: "After N bars, do: play again, next, previous, random, stop, return. This is how a row becomes a section without standing there. Random on a drum fill column is a human; random on the harmonic column is a mistake unless the key is a drone." },
          { k: "Launch quantization", v: "Wait for 1 bar / 1 beat / etc. before the clip actually starts. 1 bar is safe. 1 beat is tighter and will crop a 2-bar chop if you were late. Off is how you desync the grid on purpose or by accident." },
          { k: "Row Launch", v: "Step-row mode. A scene. Snapshots (Pro Pack) store a row state you can recall. Name rows; 8 unlabeled scenes is a fight on stage." },
          { k: "Row Launch Tempo", v: "A row can carry a tempo. That is a DJ move. Combined with Warp BPM Sync, phrases follow; Repitch phrases change key. Know which pads are which before you give a row a new BPM." },
          { k: "Insert Clip Row (3.9)", v: "Arrange Mode can punch a clip row onto the timeline. The matrix and the arranger are not sealed worlds as of 3.9. Still pick a brain." },
          { k: "Ableton import", v: "Live project into the matrix. Warps and launch quantize will not translate 1:1. Listen, then rebuild Follow Actions. Export .ALS the other way if the DAW is the live rig." },
        ],
      },
    ],
  },
  {
    slug: "midi-deep",
    part: "mpc",
    title: "MIDI clock, MTC, ports, and 32 channels of USB",
    kicker: "Timing domains",
    blurb: "Two DIN ins, four DIN outs, USB-C MIDI, USB-A controllers. Clock is per port. The XL can be master or slave. Two masters is a flanger on your downbeats.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Clock master", v: "Preferences → MIDI/Sync. Send clock only on the DIN outs that have sequencers attached. A synth that does not sequence does not need clock, and some analog boxes lurch when they receive it." },
          { k: "Clock slave", v: "Receive from one source. Delay compensation per port is the trim when a 909 sits late. If both the XL and a DAW send clock, you will spend a night 'fixing swing.'" },
          { k: "MTC / MMC", v: "MTC is positional timecode (bars as time). MMC is transport (play/stop/locate). A DAW chasing MTC can sit on the XL's arrangement. USB-C MIDI carries this. It is not analog timecode; do not look for LTC on a TRS." },
          { k: "Program change / bank", v: "Track Settings on a MIDI track. Outboard presets. Bank select is MSB/LSB; the synth's manual, not Akai's, tells you which. Send on sequence start if the live set depends on it." },
          { k: "USB-C 32 MIDI", v: "To the computer, many virtual ports. Map in the DAW. Matching 3.x point versions. This is not 'MIDI DIN over a cable'; it is a computer interface." },
          { k: "USB-A class-compliant", v: "Keys, knobs, a fighter stick. MIDI Control mode = Shift+Track Mute. Saved in the project. A non-compliant interface on A is the 44.1 story again." },
          { k: "Soft thru / local", v: "Local off on a MIDI track that should not also fire an internal plugin. Thru is how a keyboard on IN 1 reaches OUT 3 without a XL track; know whether you wanted the XL to transpose it (a MIDI track) or not (thru)." },
        ],
      },
    ],
  },
  {
    slug: "dsp",
    part: "mpc",
    title: "DSP order, Drum FX, and what gets printed",
    kicker: "The graph",
    blurb: "A pad is a graph: sample/osc → filter/amp/pitch envelopes → Drum FX → pad inserts → Pad Mixer → track inserts → sends → submix → output. Flatten and Sampler/Looper inserts cut that graph at different places. Order is the sound.",
    blocks: [
      {
        type: "lead",
        text: "LAYER (osc or sample, Semi, Warp) → PAD synth (filter, amp, pitch, LFO, matrix) → Drum FX (8, no insert slot) → Pad inserts (4) → Pad Mixer (level, pan, send, I/O) → Track inserts (4) → Track sends → Submix inserts → Return inserts → Output inserts.",
      },
      {
        type: "kvs",
        items: [
          { k: "Drum FX vs inserts", v: "Drum FX are the cheap per-pad set (crush, drive, clip, fold, HP/LP). They do not use an insert slot. They also do not show up as neatly on a mix insert list. If you need to automate a crush, you may want AIR Lo-Fi as a pad insert instead." },
          { k: "Why the 3000 filter is not Vinyl Emulation", v: "Filter is in the pad synth, before Drum FX. Vinyl Emulation is an insert, after. A dull chop with vinyl noise is 3000 then Vinyl, not Vinyl then a bus EQ, unless you want the noise dulled too." },
          { k: "Sampler / Looper inserts", v: "Printed. Permanent. No 'wet/dry later.' Empty until you mean a committed sound. Track inserts on the result are still live." },
          { k: "Flatten Pad", v: "Prints layers + pad inserts + warp at full velocity. Drum FX and pad inserts are in the file. Track inserts are not. That is why flattening a pad does not freeze the bus compressor." },
          { k: "Sends are a parallel graph", v: "Post-fader send follows mute and level. Pre-fader send is a ghost. The return has its own inserts (the verb, the tape delay) and can be Touch-FX'd without touching dry drums." },
          { k: "Output inserts", v: "Mastering-style: EQ, glue, limiter. Not Vinyl. If the master is dirty, you will never get a clean stem." },
        ],
      },
    ],
  },
  {
    slug: "stemspro",
    part: "mpc",
    title: "Stems Pro, on the 8-core",
    kicker: "XL exclusive",
    blurb: "Select a sample, Stem, toggle Vocals / Bass / Drums / Other. This is a source-separation model, not a mixer. It guesses. Your ears still have to win.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Why XL", v: "The 8-core is the requirement. Live III class machines do not get this button. Shift+Stem is still Flatten Pad on every Gen 2; do not confuse the two." },
          { k: "Use trimmed sample", v: "On: operates on the region. Off: the whole file, so your slices survive. If you had already chopped, off is the one that does not destroy the map." },
          { k: "Assign to Pad", v: "On: four stems as four layers of one pad (velocity or MPCe to pick). Off: four files in the pool. Layers are a performance instrument; files are a mix." },
          { k: "Artefacts", v: "Cymbals in 'vocals,' bass bleed in 'drums,' phasey residues in 'other.' It is a model. Re-chop after. Do not Stem a file you already printed Vinyl onto unless you want the noise classified as 'other.'" },
          { k: "CPU / RAM", v: "Run it, then flatten or commit files, then purge the original if you are done. Leaving four long stems and the source in RAM is how a 16 GB machine feels small." },
        ],
      },
    ],
  },
  {
    slug: "grid",
    part: "mpc",
    title: "Grid, list, and the event",
    kicker: "What a note actually is",
    blurb: "A MIDI event on this sequencer is a time in ticks, a pad or note number, a velocity, a duration, and optional probability, ratchet, and automation. The grid is a view. List is the same data.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Anatomy", v: "Tick time, pitch/pad, velocity 1–127, duration in ticks, probability, ratchet count. Automation is a separate lane of (tick, value) for a parameter. Nudge in ticks from Prev/Next Shift, or from List." },
          { k: "Grid Edit", v: "Piano roll. Snap follows Time Division. Draw, paint, mute a note. Convert to Progression lives here. Good for harmony. Bad for seeing that a hat is 12 ticks late — List or the Timing Correct window." },
          { k: "List Edit", v: "Shift+Grid. One event per line. This is where you set a snare to tick 488 instead of 480 and mean it. Also where a stray CC is hiding when 'the filter keeps jumping.'" },
          { k: "Probability", v: "Per step or per event. 70% on an off-hat is a player. 70% on a downbeat kick is a broken record. The step-row Step Edit page is the tactile version." },
          { k: "Ratchet", v: "Repeats inside the step. 2–8. A 1/16 step with ratchet 4 is a 64th roll without Note Repeat. Duration of the mother note has to be long enough to hold them or they choke." },
          { k: "16 Levels as event generator", v: "Tune/Velocity/Filter/Slice/Ratchet/Probability across 16 pads. You are pre-baking a family of events. Recording that is sixteen different notes, not one note with metadata — unless you were in a mode that writes the parameter. Know which." },
          { k: "Erase vs Clear", v: "Hold Erase + pad during playback: live, that pad's events as they pass. Erase window when stopped. Shift+Erase is Clear Track. Undo while recording is this pass only. These are three different radii of destruction." },
        ],
      },
    ],
  },
];
