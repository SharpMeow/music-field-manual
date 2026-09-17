import type { Section } from "./types";

export const MPC_SECTIONS: Section[] = [
  {
    slug: "setup",
    part: "mpc",
    title: "Day one, before you touch a pad",
    kicker: "30 minutes",
    blurb: "The XL ships needing a firmware update and about 30 GB of content sits behind registration. Do this once.",
    blocks: [
      {
        type: "steps",
        id: "setup",
        items: [
          {
            n: "01",
            title: "Unbox properly",
            body: "Peel the film off the 10.1″ screen. The power supply is two pieces; check the box again before deciding something is missing.",
          },
          {
            n: "02",
            title: "Get on Wi-Fi",
            body: "[Shift] + [Menu] opens Preferences (the button is printed Menu / Prefs) → [Wi-Fi] → On, pick your network.",
            note: "Akai's FAQ admits a bug where the Wi-Fi password is rejected on first setup. If that happens, update from a USB stick or the desktop installer instead of fighting it.",
          },
          {
            n: "03",
            title: "Update the firmware (3.9.1 is current)",
            body: "[Preferences] → [Info] → [Update] → [Online Update]. Later sections assume 3.8 or newer for the new effects and 3.9 for oscillators.",
          },
          {
            n: "04",
            title: "Register the unit",
            body: "Serial is on the barcode on the bottom. It starts with \"(21)\" and you do not type the \"(21)\" part.",
          },
          {
            n: "05",
            title: "Log into your inMusic profile on the MPC itself",
            body: "[Preferences] → [Activations]. This unlocks the MPC Pro Pack license (included with the XL, $199 list for older MPCs) and activates Native Instruments Analog Dreams.",
            note: "Pro Pack is Clip Matrix launching, Ableton Live project import, envelope-follower Q-Links (your sidechain), the Super warp algorithm, and four AIR plugins. If features look missing after activating, Akai's fix is deactivate, restart, reactivate.",
          },
          {
            n: "06",
            title: "Pick a content drive, then pull the packs and the 3.8 effects",
            body: "Same Activations page, [Change] picks the download drive; internal is fine. Grab Lo-Fi Breeze (Jamie Wilder), LoFi Boom Vol 1 (Marco Polo), Classic Drum Machines, and F9 Orion for dusty 90s workstation keys. Also download the 3.8 effects (Vinyl Emulation, Tape Emulation, Vintage, Color Compressor, Trigger FX); they are not on the machine until you do.",
          },
          {
            n: "07",
            title: "Connect Splice, if you have it",
            body: "[Preferences] → [Splice] → Get Login Code, approve in a browser, choose a drive, Sync Files. Sorted by BPM, key, instrument and pack once it lands.",
          },
        ],
      },
    ],
  },
  {
    slug: "model",
    part: "mpc",
    title: "How the machine actually thinks",
    kicker: "Read this once",
    blurb: "In MPC 2 a track held notes and pointed at a separate program. MPC 3 fused them. A track now is its sound.",
    blocks: [
      {
        type: "lead",
        text: "PROJECT › everything, one file + a data folder. SEQUENCE › a loop with its own BPM, bars and time signature. TRACK › notes AND the sound, up to 128.",
      },
      {
        type: "p",
        text: "Six track types, chosen at [+ New Track] in Main Mode. Tap the type icon beside the track number to change it later.",
      },
      {
        type: "kvs",
        items: [
          { k: "Drum", v: "Samples (or, since 3.9, synth oscillators) on pads. 128 pads in 8 banks, 8 layers per pad. Your kit and your chops." },
          { k: "Keygroup", v: "Samples mapped across a key range so they play chromatically. Up to 128 keygroups. A sampled Rhodes, a vocal you play as notes, an 808 from one sample." },
          { k: "Plugin", v: "One instrument plugin: Fabric, Hype, Mellotron, Solina, Stage EP, TubeSynth, OPx-4, Odyssey, Bassline, Analog Dreams. 32 at once on the XL." },
          { k: "Audio", v: "Recorded audio from an input, or resampled internally. 16 stereo audio tracks." },
          { k: "MIDI", v: "Notes out the 5-pin MIDI ports to external gear." },
          { k: "CV", v: "Control voltage to modular. Melodic, or Drum CV where any pad fires any CV port." },
        ],
      },
      {
        type: "callout",
        kind: "trap",
        title: "Vocabulary that changed",
        text: "\"Program Edit\" is now Track Edit. \"Sample Record\" is now Sampler. Clip programs are gone as a type; clips live in Clip Matrix. \"Drum Program\" survives only as a savable kit file, so old kits still load. When a video says \"assign this track to that program,\" it is pre-2025.",
      },
    ],
  },
  {
    slug: "loop",
    part: "mpc",
    title: "Your first lo-fi loop",
    kicker: "One sitting",
    blurb: "Find four bars of something, chop it, play the chops in a new order, put drums under it, dirty the whole thing. Standalone, no computer.",
    blocks: [
      {
        type: "steps",
        id: "loop",
        items: [
          {
            n: "01",
            title: "Start a project and set the tempo low",
            body: "New Project. Sequence BPM between 72 and 88, 4 bars.",
            note: "Every sequence carries its own tempo. To lock everything to one number, tap the on-screen [SEQ/GBL] until it reads GBL, or use [Shift] + [Tap Tempo] (the button lights red for global).",
          },
          {
            n: "02",
            title: "Get a source sound in",
            body: "From the packs: [Browse], then the [Expansions] button beside Places and Content. Turn the browser's [Warp] toggle on so anything with an embedded tempo auditions at your project tempo. From a record or a phone: turntable into the rear RCA inputs with the Phono/Line switch on Phono; phone or laptop over USB-C. Then [Shift] + [Sample Edit] opens the Sampler. From the Jackson: guitar into front [Inst 1]. Flip the Rear/Front switch under the Gain 1 knob to Front.",
            note: "That Rear/Front switch is the most-missed control on the machine. Plugged into the front and hearing nothing? That switch.",
          },
          {
            n: "03",
            title: "Set record level with the hardware knobs",
            body: "Gain is on [Gain 1], [Gain 2] and [3/4 Rec Gain], not the screen. Watch the input meters and keep peaks out of the red. Turn [Dir/Main] toward Direct for zero-latency monitoring while recording, back to Main for playback. In Sampler set [Threshold] low (Akai's tutorial uses -45 dB) and tap [Arm]. It waits for signal and starts itself.",
            note: "Insert effects loaded in Sampler are printed permanently into the recording. Leave them empty until you mean it.",
          },
          {
            n: "04",
            title: "Chop it",
            body: "Press [Chop] (dedicated button) or open Sample Edit and tap the Trim/Chop toggle bottom-left. Four modes: [BPM] — bars, beats, Time Div 1/16. Even slices. Start here. [Threshold] — slices at transients; raise [Min Time] if one drum gets two slices. [Regions] — N equal slices, no analysis. [Manual] — tap [Slice+] during playback, or hit an unlit pad, to drop a marker.",
            note: "No \"Transient\" chop mode exists in MPC 3 despite older tutorials. Threshold is the transient mode. Since 3.7, if a sample already has slices the Chop button opens Manual so you do not destroy them.",
          },
          {
            n: "05",
            title: "Turn the chops into a playable kit",
            body: "[Shift] + [Chop] (printed Chop / Convert) opens Convert or Assign Slices. Choose [New drum track using slices]. Chops land on pads 1–16 of a new drum track named after the sample plus \"ch\". Tick [Create Events] and set [Bars] to have the original order laid into the sequence.",
            note: "\"Using slices\" points every pad at the one original sample instead of writing 16 files. Lighter on RAM, and you can still nudge slice boundaries.",
          },
          {
            n: "06",
            title: "Play the chops in a new order",
            body: "Arm the sequence (on-screen [Rec Arm] in Main Mode, or the hardware [Rec Arm] in the channel strip), press [Rec], then [Play], and hit pads. After one pass the machine flips into Overdub by itself so you layer instead of erase.",
            note: "Hate the pass? [Undo] while still recording wipes that pass only. Hold [Erase] and press a pad during playback to erase that pad's notes live.",
          },
          {
            n: "07",
            title: "Add drums on a second track",
            body: "[+ New Track] → Drum, load a kit. Pick a pad map and never change it, so your hands learn one layout (Akai's default kit puts a hi-hat on pad 9). Hold [Note Repeat] and press a pad for rolls; rate at the bottom of the screen. [Shift] + [Note Repeat] latches.",
          },
          {
            n: "08",
            title: "Swing it, do not straighten it",
            body: "[Shift] + [TC On/Off] opens Timing Correct. Time Division 1/16, Swing 54–58%. 50% is dead straight; 75% is the maximum. Pull [Strength] under 100% so quantize drags your timing toward the grid instead of nailing it there.",
            note: "This is the genre in one setting. Perfectly quantized lo-fi sounds like a stock loop; 55% swing at 80% strength sounds like a person.",
          },
          {
            n: "09",
            title: "Add keys or bass",
            body: "[+ New Track] → Plugin. Stage EP or Fabric Electric Piano for Rhodes, Mellotron for tape strings, Bassline for low end. Or since 3.9 a Keygroup track with a Warm Sine oscillator is an instant 808 sub. Press [Notes] to turn the pads into a scale or chord layout (Pad Perform). Set Type to Chords, a minor scale, and [1-3-5-7] for diatonic sevenths on 16 pads.",
            note: "Pad Perform does nothing on drum tracks, by design.",
          },
          {
            n: "10",
            title: "Fix a tempo mismatch on purpose",
            body: "Track Edit → Samples: [Warp] on plus [BPM Sync] on locks the sample to project tempo without changing pitch. Want the slowed-tape sound? Leave Warp off and drop [Semi]. Length and pitch move together like a record slowing down. Often the better creative answer.",
            note: "[Super] is the new high-quality algorithm, [Pro Ten] the workhorse, [Repitch] is varispeed. Warping is the biggest CPU cost on the machine, so bake finished pads with [Shift] + [Stem] (Flatten Pad).",
          },
          {
            n: "11",
            title: "Dirty it up",
            body: "Build the chain in Lo-fi dirt. Short version: Vinyl Emulation or AIR Flavor on the sample track, a low-pass rolling off the top, gentle compression on the output.",
          },
          {
            n: "12",
            title: "Save, properly, right now",
            body: "[Save] → [Project As]. Name it something you will recognize.",
            note: "Plain [Project] overwrites your last save with no prompt (the manual says so). Auto-save is a preference you turn on yourself, and nothing in the manual suggests a save happens at shutdown.",
          },
        ],
      },
      { type: "widget", name: "swing" },
    ],
  },
  {
    slug: "buttons",
    part: "mpc",
    title: "Every button, and what Shift does to it",
    kicker: "Search this",
    blurb: "Gray text on a button is its Shift function. Double-press either Shift and every button with a secondary function flashes for a few seconds. Verified identical between the 3.7 and 3.9 manuals.",
    blocks: [{ type: "widget", name: "buttons" }],
  },
  {
    slug: "hardware",
    part: "mpc",
    title: "The XL hardware nobody explains",
    kicker: "Panel",
    blurb: "Two of these are XL-exclusive (the channel strip and the Touch FX button). The expressive pads, step buttons and touch strip are shared with the MPC Live III, but no earlier MPC has them.",
    blocks: [
      { type: "widget", name: "hardware" },
      {
        type: "callout",
        kind: "trap",
        title: "Why your knob moves did not record",
        text: "Touch strip moves and pad X/Y gestures write into the sequence only when automation is set to W. [Read/Write] turns red. Perform, then set it back to R or you will keep overwriting the moves you liked.",
      },
    ],
  },
  {
    slug: "pads",
    part: "mpc",
    title: "Pad sound design in Track Edit",
    kicker: "Drum tracks",
    blurb: "Press Track Edit on a drum track, then hit a pad to select it. Tabs run along the bottom; tapping some tabs again cycles their pages.",
    blocks: [
      {
        type: "p",
        text: "The location icon top-left sets whether edits hit the current pad, several, or all.",
      },
      {
        type: "kvs",
        items: [
          { k: "Global", v: "Sample Play: One Shot (whole sample), Note On (only while held — this is what makes a chop stop when you let go), Note Off. Pad Polyphony: Mono kills the previous hit when you retrigger; this is the \"voice overlap\" control, there is no separate choke field. Mute Group 1–32 for open and closed hats. Simultaneous Play fires up to four other pads. Layer Play: Cycle, Velocity, Random, or Crossfade by finger position." },
          { k: "Samples, page 1", v: "Start and End markers (Q-Links in Screen mode grab these), Reverse, Loop, Slice (All / Pad / a slice number), Slice Motion (Increment or Random), Pad Loop (needs Sample Play Note On and Slice = Pad), Warp, BPM Sync, Semi, Fine, Algorithm. Partial Preset saves the whole pad's synth state." },
          { k: "Samples, page 2–4", v: "Tune/Mix per layer (Semi, Fine, Level, Pan, MPCe quadrant). Velocity per layer (Vel Start / Vel End: put a harder snare on 100–127 only). Random: per-layer pitch, level, pan and start-offset randomization; on hats this is cheap humanizing." },
          { k: "Envelopes", v: "Amp page: Pad Level, Pan, amp envelope, velocity to amp. Drum pads use AD or AHDS (AD has Decay From Start / Decay From End; the latter holds full level, then decays). Note On pads use ADSR. Filter page: Type, Cutoff, Reso, filter envelope and depth. Pitch page: pitch envelope for the \"thump\" on kicks." },
          { k: "Filter types", v: "Low-pass, high-pass, band-pass, band-stop and boost in 1, 2, 6 and 8-pole flavors; Model 1–3 analog-style (Model 3 is the aggressive one); Vocal formant filters; and MPC3000 LPF, the 12 dB/octave filter from the 1994 machine. That last one on a chop is a very short route to the right sound." },
          { k: "Effects, page 2", v: "Drum FX: up to eight simplified per-pad effects with no insert slot used: Ring Mod, Bit Crush, Decimator, Tube Drive, Soft and Hard Clipper, Low Pass, High Pass, Rectifier, Bass Enhancer, Wave Folder, Gain. Page 1 has the four inserts, sends, and an Akai folder icon that loads factory FX racks including a LoFi rack." },
          { k: "Mods, LFO, Mod Matrix", v: "Velocity to sample start, cutoff, pitch, pan. Two LFOs to pitch, filter, amp, pan (a slow sine on pitch at tiny depth is tape wobble). A 32-slot mod matrix; since 3.7 Slice is a target, so velocity can pick the chop." },
          { k: "Flatten Pad", v: "[Shift] + [Stem]. Renders all layers at full velocity through the pad's inserts and warp onto layer 1 as a plain sample. Set an Audio Tail of a couple of seconds. This is how you stop paying CPU for a sound that is finished." },
        ],
      },
      {
        type: "h",
        text: "One sample into a playable instrument",
      },
      {
        type: "p",
        text: "Select the pad holding a single note (a Rhodes stab, a bass note, a vocal \"oh\") and press [Shift] + [16 Levels]. A new keygroup track appears and the pads switch to Pad Perform. In Track Edit for that keygroup, set the Root Note to the pitch you sampled and it plays in tune across the keys. The Sampler's Keep window and Sample Edit Trim both have a Root Note field too.",
      },
    ],
  },
  {
    slug: "feel",
    part: "mpc",
    title: "Making it feel like a person played it",
    kicker: "Technique",
    blurb: "Perfectly quantized lo-fi sounds like a stock loop. These are the humanizing controls, in order of usefulness.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Swing 54–58%", v: "Timing Correct. 50% straight, 75% ceiling. Apply to 1/16s on hats and chops; consider leaving the kick straight for contrast." },
          { k: "Strength below 100%", v: "Partial quantize. Notes get pulled toward the grid without landing on it. The single most useful humanizing control on the machine." },
          { k: "Shift Timing", v: "Also in Timing Correct, in ticks. Push a whole track a few ticks late and it sits behind the beat. Snares and keys." },
          { k: "Humanize", v: "Edit menu in Arrange, Grid or Clip editing. Randomizes timing (Amount in pulses, plus Eagerness), note length and velocity. Blunter than Strength; use lightly." },
          { k: "16 Levels", v: "Spreads one pad across all 16 with one parameter varying: Velocity, Tune, Filter, Layer, Slice, Articulation, Attack, Decay, Probability or Ratchet. Tune across 16 pads turns one chop into a melody; Slice across 16 pads is a chop keyboard." },
          { k: "Note Repeat and Arp", v: "Hold [Note Repeat], pick a rate at the bottom. On a plugin or keygroup track the same window has Action: Arp, Note Repeat, Rhythm, or Pattern (hold one note, get a transposed phrase)." },
          { k: "Pad Perform", v: "[Notes]. Type Chromatic, Notes, Chords, Chromatic Chords, Progressions, Custom. Chords in a scale: 1-3-5, 1-4-5, 1-2-5, 1-3-5-7, 1-3-5-7b. Grid View can Convert to Progression from a MIDI track you already played." },
          { k: "Retro Rec", v: "Pull-down menu at the top of the screen, or [Shift] + [Rec] (Recall). Captures MIDI you played while not recording. For when you accidentally play the best version of the part." },
        ],
      },
      { type: "widget", name: "swing" },
    ],
  },
  {
    slug: "dirt",
    part: "mpc",
    title: "The lo-fi dirt chain",
    kicker: "Effects",
    blurb: "Four insert slots at every level: pad, keygroup, track, submix, output. Plus four sends into four returns. Dirt at the track level, glue at the output.",
    blocks: [{ type: "widget", name: "dirt" }],
  },
  {
    slug: "sidechain",
    part: "mpc",
    title: "Sidechain pump with an envelope follower",
    kicker: "Pro Pack",
    blurb: "Two ways. The quick one is the Mother Ducker pair. The flexible one is the Pro Pack envelope follower, which can push any parameter, not just volume.",
    blocks: [
      {
        type: "steps",
        id: "sidechain",
        items: [
          {
            n: "01",
            title: "Open Q-Link Edit and pick a follower",
            body: "Press [Q-Links], tap the [Envelope Follower / LFO] tab. [Control] picks one of 16 followers. Tap [On].",
          },
          {
            n: "02",
            title: "Point it at the kick",
            body: "[Envelope Source] = the drum track, or better, the specific kick Pad on it. Tap point [Pre-Inserts] or [Post-Fader].",
          },
          {
            n: "03",
            title: "Shape the envelope",
            body: "Short [Attack], [Decay] roughly the length of the pump you want. [Gate] and [Hyst] stop it triggering on hats bleeding through.",
          },
          {
            n: "04",
            title: "Learn the target",
            body: "Tap the yellow [Learn], go to the chord track's volume in the Channel Mixer (or a filter cutoff on its insert), move it, come back, tap Learn again.",
          },
          {
            n: "05",
            title: "Flip it",
            body: "In the inspector on the right, tap [Flip] so a loud kick pushes the volume down. Set the two Parameter Range knobs so the duck is musical rather than a mute.",
            note: "Source can also be an internal LFO (free-running or reset on play) for a tempo-free pump with no kick at all.",
          },
        ],
      },
    ],
  },
  {
    slug: "looper",
    part: "mpc",
    title: "Looper, resampling, and stems",
    kicker: "Menu page 2",
    blurb: "Resample the machine into itself until the plugins stop sounding like plugins.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Looper", v: "Record and overdub audio in real time, then export the loop as a sample. Set [Input] (a physical input, USB, or Resample L+R to record what the machine itself is playing), [Bars], [Sync] to the transport, [Record To] Overdub. Arm with Rec, play; each pass adds a layer. [Export to Track], or [Shift] + [Export to Pad] which opens the Keep window with a pad assignment." },
          { k: "Lo-fi resample trick", v: "Input = Resample L+R. Play your plugin chords through Vinyl Emulation and a low-pass, capture two bars in the Looper, export to a pad, then chop it like a record. The keys stop sounding like a plugin." },
          { k: "Stems Pro", v: "XL-exclusive (needs the 8-core CPU). Select a sample, press [Stem]. Toggle Vocals / Bass / Drums / Other, pick a destination track. Assign to Pad on puts the four stems on the first four layers of that pad; off drops them into the sample pool. Uncheck Use trimmed sample to keep your slices." },
          { k: "Sampler methods", v: "Besides plain record: Pad Tap (press a pad, it records straight to it; press another to move on) and Pad Hold (hold = record, release = stop). Drum tracks only. Fastest way to load a drum kit from a record." },
          { k: "Auto Sampler", v: "Keyboard icon beside Record in the Sampler. Captures a plugin or external synth preset note by note into a keygroup, with velocity layers and loop points. Turn a heavy plugin into a light keygroup and free the CPU." },
        ],
      },
    ],
  },
  {
    slug: "song",
    part: "mpc",
    title: "From a loop to an actual song",
    kicker: "Arrange + export",
    blurb: "Three ways to arrange, and they coexist. Pick one while learning.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Arrange Mode", v: "Start here. A real linear timeline. Record a performance into it, punch in and out, six named locate markers, loop a region. Since 3.9: cut, copy, paste, duplicate with the loop brace, Insert Blank Bars, Insert Clip Row." },
          { k: "Song Mode", v: "[Shift] + [Next Seq]. A playlist of up to 999 steps, each a sequence plus a repeat count. Stop playback before entering it. Convert > Seq flattens the song into one sequence." },
          { k: "Clip Matrix", v: "[Matrix]. Part of Pro Pack. An 8×8 launch grid, one column per track, one clip per track at a time. Rows carry Follow Actions so a clip decides what plays next. For performing the arrangement rather than drawing it." },
        ],
      },
      { type: "h", text: "Exporting: Save → Audio Mixdown" },
      {
        type: "kvs",
        items: [
          { k: "What gets exported", v: "From Main Mode, the current sequence only. From Song Mode, the whole song. Catches everyone once." },
          { k: "Audio Tail", v: "At least 2 seconds or reverb and delay tails get cut off the end." },
          { k: "Stems", v: "Render Source → Separate Tracks. Every pad must have its output routed to Track (the default, Pad Mixer → I/O) or it is missing from the stems. With a drum track selected, Drum Pads as Stems renders one file per pad. Since 3.8, Drum Track as MPC Sample file too." },
          { k: "Format", v: "WAV, AIFF, MP3, FLAC or OGG. 24-bit, 44.1 kHz is the sane default and what Akai recommends." },
          { k: "To a DAW", v: "Ableton Live Set writes a real .ALS. Or set tracks to USB Out pairs in Channel Mixer → I/O and record 24 channels live over USB-C (needs the XL driver from inMusic Software Center)." },
        ],
      },
    ],
  },
  {
    slug: "updates",
    part: "mpc",
    title: "New since the box shipped",
    kicker: "Firmware 3.9.1",
    blurb: "3.9.1 is still the current Gen 2 build as of mid-September 2026. Later sections of this manual assume 3.8 effects and 3.9 oscillators.",
    blocks: [
      {
        type: "lead",
        text: "CURRENT · 3.9.1 · Get it from inMusic Software Center (Gen 2) or Preferences → Info → Update → Online Update. Wi-Fi OTA is still not a 3.x thing.",
      },
      {
        type: "callout",
        kind: "tip",
        title: "Recovery boot if an update bricks the splash",
        text: "Power off. Hold [BANK C] + [FULL LEVEL] + [ERASE] while powering on, keep holding until it boots. That is the XL / Live III combo, not the old X combo.",
      },
      { type: "widget", name: "news" },
      { type: "h", text: "What 3.9 actually added for the XL" },
      {
        type: "kvs",
        items: [
          { k: "3.9 · Oscillators on pads and keygroups", v: "Track Edit → the Samples tab is now Samples/Oscs. Per layer, flip Sample / OSC and pick Warm Sine, Digital Sine, Saw/Square, Pulse, Noise, FM2, RM3, Algorithmic, Single-Cycle or Wavetable. Every type has Decay and Start Phase. A Warm Sine on a keygroup with a short pitch envelope is an 808 without sampling one. Some sets need \"Get Oscillator Content\" in Activations." },
          { k: "3.9 · Time signature per sequence and clip", v: "A field in Main Mode's Sequence section. Also Arrange cut/copy/paste/duplicate with the loop brace, and Insert Clip Row." },
          { k: "3.9 · XL pad lighting", v: "Step-sequencer pads are brighter and the colors actually read in a lit room. Muted, soloed and selected tracks are now visually distinct. This one is XL-specific." },
          { k: "3.9 · Default Chop button", v: "Preferences now lets you pick what the dedicated CHOP button does on an unsliced sample, so you are not re-choosing Threshold every take." },
          { k: "3.9 · Q-Link step sequencer", v: "Hold [Q-Link] and pick Step Sequencer. Twist a knob to drop steps at that velocity. Lives on the XL and Live III because the knobs sit on the step row." },
          { k: "3.8 · Five effects", v: "Vinyl Emulation, Tape Emulation, Vintage, Color Compressor, Trigger FX (a performance stutter/filter/delay). Download via Activations. The 3.9 manual's effects appendix does not describe them yet; the release notes do." },
          { k: "3.9.1 · Known issues", v: "Rare blank WAV from Audio Mixdown (check the file before you delete the project). Cancelling a save can fail and flash the pads. Held notes stop when you change sequence during playback. Undo/redo of Clear Sequence in Next Seq Step Sequencer can crash. Expert Sleepers ES-9 still distorts as an interface." },
          { k: "Projects will not go backwards", v: "Standalone projects from 3.4 through 3.9.1 will not open in MPC 2.15 desktop. Keep a copy if you still bounce through the old computer app." },
        ],
      },
    ],
  },
  {
    slug: "traps",
    part: "mpc",
    title: "Traps",
    kicker: "Save yourself the hour",
    blurb: "The things that waste a session if you learn them the hard way.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Project overwrites silently", v: "[Project] overwrites your last save with no confirmation. [Project As] makes a version. Auto-save is off unless you turn it on in Preferences → Project Load/Save." },
          { k: "A project is two things", v: "Name.xpj plus a hidden Name_[ProjectData] folder. They travel together or the project opens with missing samples. Akai's advice for external drives: a root Projects folder with nothing else in it, and keep 1–3 GB free on the internal drive." },
          { k: "Undo lives in RAM", v: "When the low-memory warning appears, undo may already be gone. Menu → Project → Purge → Unused Samples before it gets there. Plugins like Studio Strings and Fabric load whole libraries into RAM; bounce plugin tracks to audio when they are done." },
          { k: "Loading is not assigning", v: "The browser's Load to Pool puts a sample in the pool, not on a pad. With a drum pad selected, plain Load goes straight to that pad. Or [Shift] + [Browse] for Sample Assign: press a pad until it lights green, then double-tap the sample or drag it. Shift-drag targets a specific layer." },
          { k: "Samples get converted on load", v: "Everything becomes full-quality uncompressed audio inside the project, so a folder of MP3s can blow the RAM. Load fewer files. Browser Options has Clear unused samples on load for swapping kits cleanly." },
          { k: "Sampler and Looper effects are permanent", v: "Inserts on those two print into the recording. No undo later." },
          { k: "USB-C is for the computer", v: "MIDI controllers and class-compliant interfaces go in the USB-A ports. External interfaces are capped at 44.1 kHz." },
          { k: "Controller Mode closes your project", v: "Save first. \"Looking for computer\" on the screen just means it is in Controller Mode, not that it is broken." },
          { k: "Importing old MPC 2 projects", v: "Save a copy first. Where several MPC 2 tracks shared one program, one becomes the real track and the rest become MIDI tracks pointed at it." },
          { k: "Pad Loop needs two settings", v: "Sample Play = Note On and Slice = Pad. One without the other does nothing." },
          { k: "Disk streaming is off", v: "Preferences → Audio/Export, needs a restart. Akai recommends an SSD in the internal SATA bay and pointing the Temporary File Location at it. Only worth it once projects get huge." },
        ],
      },
      { type: "widget", name: "notes" },
    ],
  },
  {
    slug: "repair",
    part: "mpc",
    title: "When it breaks",
    kicker: "Akai support answers",
    blurb: "Work through these in order. Most \"dead pad\" reports are MIDI input or mute, not hardware.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Pads make no sound, kit loaded", v: "Preferences → MIDI/Sync → make sure Track is enabled for the input port MPC Pads. Then check Pad Mute / Track Mute (orange pads) and that the track is not audio-muted in the mixer." },
          { k: "Cannot hear the input", v: "Sampler Monitor to In. Then the Rear/Front switch for that Gain knob, the Phono/Line switch for 3/4, the gain knob itself, and [Dir/Main] toward Direct. Audio tracks have Monitor In / Auto / Merge in the I/O tab." },
          { k: "Latency", v: "Akai's answer is direct monitoring: Monitor In on the Sampler or Looper, or the Dir/Main knob, both taken before the machine's processing. An external USB interface must be 44.1 kHz at a 128-sample buffer." },
          { k: "Low memory or project will not load", v: "Un-arm audio tracks, Purge unused samples, then save, then New Project or power-cycle. A project too big for RAM loads with samples shown as a waveform and a red minus; free memory and use Load To Memory from the Project window." },
          { k: "Computer does not see it", v: "Firmware and desktop MPC 3 must be on matching point versions, with the XL driver installed from inMusic Software Center. Direct USB-C, different cable. macOS 13, 15 or 26; Windows 10 or 11." },
          { k: "Drives", v: "exFAT, FAT32, NTFS and EXT4 read and write; HFS+ read-only. [Shift] + Format Drive in the Browser formats to exFAT and wipes everything on it." },
        ],
      },
    ],
  },
];
