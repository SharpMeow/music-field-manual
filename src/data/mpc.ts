import type { Section } from "./types";
import { MPC_CRAFT } from "./mpc-craft";
import { MPC_TECH } from "./mpc-tech";

const TAIL = new Set(["updates", "traps", "repair"]);

const MPC_CORE: Section[] = [
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
        type: "h",
        text: "What a project actually is on disk",
      },
      {
        type: "kvs",
        items: [
          { k: ".xpj", v: "The project file. Tiny. It is a pointer, not the audio." },
          { k: "Name_[ProjectData]/", v: "The hidden folder next to the .xpj. Samples, recorded audio, plugin states. They travel as a pair or the project opens hollow." },
          { k: ".xpm", v: "A saved drum or keygroup kit. Load it onto a new track of the matching type. Older MPC 2 programs still load; clip programs do not." },
          { k: ".wav / .aiff / .flac / .ogg / .mp3", v: "Importable. Everything is converted to uncompressed audio in the project, so a folder of MP3s can eat the 16 GB of RAM. Load what you will play tonight." },
          { k: ".mid", v: "MIDI files drop onto a track as events. Tempo map is not guaranteed; set BPM first." },
          { k: ".als", v: "Ableton Live Set, Pro Pack. Write from Save → Ableton Live Set, or import a Live project into Clip Matrix." },
        ],
      },
      {
        type: "p",
        text: "The XL has 16 GB of RAM, 256 voices, 32 plugin instruments, 16 stereo audio tracks. Plugins such as Studio Strings and Fabric load whole libraries; bounce them to audio when the part is done. Menu → Project → Purge → Unused Samples before the low-memory banner, not after.",
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
    blurb: "Gray text on a button is its Shift function. Double-press either Shift and every button with a secondary function flashes for a few seconds. Double-tap a button for the same Shift function. The next chapter is the rest of the speed.",
    blocks: [{ type: "widget", name: "buttons" }],
  },
  {
    slug: "tricks",
    part: "mpc",
    title: "Shortcuts, tricks, things the manual buries",
    kicker: "Hands faster than menus",
    blurb: "What YouTube actually earns its keep on: double-taps, Shift+hold, the Q-Link modes people think are broken, and the three ways Flatten is hiding. Checked against 3.9.1 on this XL.",
    blocks: [
      {
        type: "lead",
        text: "DOUBLE-TAP a mode button = its Shift function. DOUBLE-PRESS Shift = every secondary label flashes. Shift + jog or Q-Link = fine resolution. The XL has Shift on both sides so this is one-handed.",
      },
      {
        type: "h",
        text: "Shift and double-tap",
      },
      {
        type: "kvs",
        items: [
          { k: "Double-tap = Shift", v: "Main, Browse, Mixer, Grid, Chop, 16 Levels, Full Level, Touch Strip, Touch FX — tap twice fast instead of holding Shift. Track Edit pages too: Shift+the same tab jumps back instead of cycling the whole row." },
          { k: "Two Shifts", v: "Left and right of the pads. One-handed Shift+Play, Shift+Rec (Retro Rec), Shift+Erase (Clear Track) is the point of the XL layout, not a decoration." },
          { k: "Shift + jog / Q-Link", v: "Fine. Tempo by 0.1, start point by samples, cutoff without leaping. If a Q-Link 'does nothing,' Screen mode has an arrow — you are not on the page that parameter lives on. Scroll until the arrow dies." },
          { k: "Shift + cursor in Grid", v: "Up/down zoom vertically, left/right zoom time. Faster than pinch if you are already on the hardware." },
          { k: "Hold Main", v: "Flick through tracks without leaving Main. Hold Track Mute, mute, release — you never left the screen you were on." },
        ],
      },
      {
        type: "h",
        text: "Q-Links people think are broken",
      },
      {
        type: "kvs",
        items: [
          { k: "Hold Q-Links → Volume / Pan / Sends", v: "Sixteen channel faders, or pans, or sends, on the knobs. Mixing without the mixer. The XL has all 16 physical; you are not banking like a Live III." },
          { k: "Hold Q-Links → Step Sequencer", v: "Knobs sit on the step row. Twist = enter that step at that velocity. Drum Seq + this knob is the 1988 workflow with OLEDs." },
          { k: "Macros", v: "Q-Link Edit, Learn, then + to stack a second parameter on the same knob. Flip inverts one so cutoff up / resonance down is one twist. Momentary = spring back when you let go. Latch = it stays. Write automation on W, then R." },
          { k: "Popup on/off", v: "In Q-Link Edit, the white-on-black toggle stops the giant value popup so you can see the pads while you twist. Performers turn it off; editors leave it on." },
          { k: "Q-Link Pad Grid", v: "Hold Set → step 14. Sixteen step buttons become Learn-able triggers for any parameter (filter, Flex Beat, a send). Neon Vines' Flex Beat on the pad grid is this mode. Swipe-assign is faster than one-by-one." },
        ],
      },
      {
        type: "h",
        text: "Strip, Touch FX, 16 Levels, Full Level",
      },
      {
        type: "kvs",
        items: [
          { k: "Tap Touch Strip to cycle", v: "You do not have to hold it. Repeated taps walk Q-Link, Pad Level, Track Level, Notes, Strum, Pitch, Mod, Sustain, Expression, Crossfader. Shift+Touch Strip is Config. Touch FX does not cycle this way — hold Touch FX to pick a preset, double-tap for its parameters." },
          { k: "16 Levels: press the pad first", v: "Pad, then 16 Levels, or it grabs whatever was last selected. Types: Velocity, Tune, Filter, Layer, Slice, Articulation, Attack, Decay, Probability, Ratchet. Record it (Rec/Overdub) and the sixteen values print as events. Probability and Ratchet across 16 pads is a generator, not a toy." },
          { k: "Full Level vs Set Level", v: "Full Level = 127. Shift+Full Level (or double-tap) is Set Level: a fixed velocity you choose, or Learn from one pad hit. MIDI keyboards do not see Full Level. Pads do." },
          { k: "Partial Preset (3.7+)", v: "Track Edit → Samples → Partial Preset. Save the whole pad synth state. The MPCe one people hunt for is Partial Preset → MPCe → 4 Quadrant Xfade, instead of wiring Layer Play + matrix by hand every kit." },
        ],
      },
      {
        type: "h",
        text: "Sampling, flatten, and the browser",
      },
      {
        type: "kvs",
        items: [
          { k: "Flatten is in three places", v: "[Shift]+[Stem]. Track Edit pencil → Flatten Pad. People still say 'they removed it in 3.' They moved it. Tail 1–2 s. It prints pad inserts and warp, not the bus." },
          { k: "Shift-drag in Browse", v: "Onto a pad = that pad. Shift-drag = a specific layer. Shift+Browse = Sample Assign (press pad green, double-tap sample)." },
          { k: "Browser Warp toggle", v: "Auditions at project tempo when the file has embedded BPM. Turn it off to hear the record as a record." },
          { k: "Shift + folder icon", v: "Makes a browser shortcut. Build a TEMPLATE folder this way. Save As Template still exists (Save → Save as template); User Template at boot. Multiple templates = a folder, not the one-slot factory." },
          { k: "Shortcuts bar", v: "Drag Main, Browse, Grid onto the shortcuts strip. Your real home screen." },
          { k: "Show All Files", v: "Then you can see Name_[ProjectData]. Shift+Delete those only after the .xpj is backed up. This is how people reclaim a full SSD. It is also how people delete the audio and keep the hollow project." },
        ],
      },
      {
        type: "h",
        text: "Sequence, arrange, live",
      },
      {
        type: "kvs",
        items: [
          { k: "Retro Rec", v: "[Shift]+[Rec], or the top pull-down Recall. Captures MIDI you played while not recording. There is a sample-side Keep/Recall in Sampler; do not confuse them." },
          { k: "Odd lengths", v: "Sequence bars can be 3 or 5. Last Step 12, 15, 7 on the step row. 'Even bar' is a habit, not a rule." },
          { k: "Locators", v: "Six named. Playhead field → Locator tab, or Shift+Set. In Arrange, Shift shows them. Loop On between two locators is a section loop without touching the brace." },
          { k: "3.9 loop brace", v: "Cut / copy / paste / duplicate use the brace as the selection. Double-tap the brace for the full edit menu. Paste merge time inserts without overwriting. Insert Clip Row punches a matrix row onto the timeline." },
          { k: "Song → Seq", v: "Song Mode, Convert > Seq. Then you can edit fills that Song Mode will not let you touch." },
          { k: "Arrange → clip", v: "Loop the region, Matrix, hold Arrange, Copy, hold destination row, Paste, Trim Clip. A linear take becomes a launchable clip." },
          { k: "Pad Color", v: "Menu → Pad Color. Kick red, snare blue, hats yellow. Live, in the dark, this is not cosmetic." },
          { k: "Stop twice", v: "Silences ringing tails. One Stop is transport. Two is panic." },
        ],
      },
      {
        type: "h",
        text: "Quiet ones",
      },
      {
        type: "kvs",
        items: [
          { k: "Layer a kit onto another track", v: "I/O on a drum track can Send to another drum track so one performance fires two kits. External version: Send to a MIDI track pointed at a 5-pin synth." },
          { k: "Human snare", v: "Two snare samples as layers, Random or Velocity, tiny pitch/start randomization on Samples page 4, then Flatten if CPU complains. Old trick. Still the one." },
          { k: "Pad Perform + Arp", v: "Chords on pads, Arp in the Note Repeat window (plugin/keygroup). Record it, then edit the grid — the arp is now events you can delete one of." },
          { k: "TC per pad", v: "Timing Correct → Hitting Pad Selects All Events → press the hat → swing 58. Kick stays 50. This is the classic, not swing on the sequence." },
          { k: "Controller Mode as a disk", v: "USB-C, Controller Mode, the computer sees the XL's drives. File copy without a stick. Save the standalone project first; this mode closes it." },
          { k: "Empty vs Recents vs Auto-Load", v: "Preferences → Project Load/Save. Empty Project + Recents in the dialog is the studio default. Auto-Load last project is the desk default. Off before a gig." },
        ],
      },
      {
        type: "callout",
        kind: "tip",
        title: "Where this list was stolen from",
        text: "The 23-workflow video (macros, Flip, strip tap, Partial Preset, locators), Live III / XL walkthroughs (double-tap = Shift, Q-Link Step Seq, Flex Beat on Pad Grid), 16 Levels deep dives (press the pad first, print Rec), and the flatten-is-not-gone tutorials. If a YouTube still says Program Edit, it is pre-2025. Track Edit.",
      },
    ],
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
        type: "h",
        text: "The back of the box, named",
      },
      {
        type: "table",
        columns: ["Jack", "What it is"],
        rows: [
          ["XLR/TRS 1–2", "Mic/line combo, shared +48 V. Rear/Front switch under Gain 1 / 2 picks this vs the front Inst jacks."],
          ["Inst 1 / Inst 2", "Front TS, guitar and bass level. Same Rear/Front switch. Jackson goes here."],
          ["TRS 3–4 or RCA", "Line pair, or phono when the Phono/Line switch is on Phono. Turntable here, not in a combo jack."],
          ["Outs 1–8", "Four stereo pairs. Default is 1/2 = Main. Route stems or a DJ mixer from Pad Mixer → I/O."],
          ["Phones 1/4\" + 1/8\"", "Two headphone jacks, same mix. Cue is not a separate bus unless you route it."],
          ["MIDI IN ×2, OUT ×4", "5-pin. Four discrete outs, not thru. Clock, MTC, and notes are per-port in MIDI/Sync."],
          ["CV/Gate ×8 TRS", "16 CV channels. Advanced CV is Pro Pack. Drum CV lets any pad fire any port."],
          ["USB-C", "24-channel audio + 32-channel MIDI to a computer. Needs the XL driver from inMusic Software Center."],
          ["USB-A ×3", "Controllers, class-compliant interfaces (44.1 kHz), drives. One is on the front."],
          ["SD + SATA bay", "exFAT is the format you want. Internal is 256 GB NVMe; the SATA bay is how you stop filling it."],
          ["Footswitch ×2", "TS. Assign in Preferences → Hardware: play/stop, rec, tap, pad events, next sequence."],
        ],
      },
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
    slug: "mixer",
    part: "mpc",
    title: "Mixer, routing, and the channel strip",
    kicker: "Signal path",
    blurb: "Two mixers, four insert slots at every level, four sends, eight analog outs, 24 USB channels. The XL Channel Command strip is how you stop opening the mixer for every mute.",
    blocks: [
      {
        type: "lead",
        text: "PAD → pad inserts + Drum FX → PAD MIXER (level, pan, send, output) → TRACK → track inserts + sends → optional SUBMIX → RETURN (send FX live here) → OUTPUT (master inserts) → analog 1–8 and/or USB.",
      },
      {
        type: "kvs",
        items: [
          { k: "Pad Mixer", v: "[Shift] + [Mixer]. One strip per pad on the current drum track. This is where a hat goes to a different output than the kick, or a chop goes to Send 1 for tape delay. I/O per pad must be Track if you want that pad in a stem mixdown." },
          { k: "Channel Mixer", v: "[Mixer]. One strip per track, plus Returns, Submixes, Outputs. Inserts, sends, EQ, pan, automation. This is the mix." },
          { k: "Inserts", v: "Four slots on a pad, a keygroup, a track, a submix, a return, an output. Order is top to bottom. Drum FX (the simplified per-pad set) do not consume an insert slot." },
          { k: "Sends 1–4", v: "Pre or post fader per strip. The return track is where the delay or reverb actually lives, so you can Touch-FX the return without touching the dry drums." },
          { k: "Submixes", v: "Group drums, or group all the dusty stuff, and put one compressor on the bus. Route tracks to a submix in Channel Mixer → I/O, then the submix to Main." },
          { k: "Outputs 1–8", v: "Main is 1/2. Cue a DJ set on 3/4. Send a kick to a hardware compressor on 5 and back in on input 3. USB outs are a separate pair of destinations in the same I/O menu." },
        ],
      },
      {
        type: "h",
        text: "Channel Command, the XL-only strip",
      },
      {
        type: "p",
        text: "Right side of the deck: its own OLED and meter. Press Tracks, Outputs, Returns or Submixes, step with TRK− / TRK+, then arm, mute, solo, open inserts (Track FX), or set level with the knob. Rec Arm on this strip is the same arm as Main Mode. You can mix a 16-track project without leaving the pads.",
      },
      {
        type: "callout",
        kind: "trap",
        title: "A pad that will not show up in stems",
        text: "Pad Mixer → I/O is not Track. Drum Pads as Stems and Separate Tracks both skip anything routed around the track. Set it back to Track, bounce, then recut the live outputs if you still want a hardware send.",
      },
    ],
  },
  {
    slug: "sample-edit",
    part: "mpc",
    title: "Sample Edit past Chop",
    kicker: "The other half of Sampler",
    blurb: "Chop is how you get a kit. Trim, process, and keep are how you stop the kit from sounding like a folder of files.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Trim", v: "Start, end, loop start, loop end. Q-Links in Screen mode grab the four markers. Snap to zero crossing from the process menu or you will click on every pad." },
          { k: "Cue / Preview", v: "The audition button in Sample Edit plays from the playhead, not the pad, so you can hear a slice without triggering the track." },
          { k: "Gain / Normalize / Silence", v: "Process menu. Normalize to −1 dB, not 0, if the pad also has Drum FX drive. Silence a breath in a vocal instead of chopping it out and losing the timing." },
          { k: "Fade In / Fade Out", v: "Short fades (3–8 ms) on chops that were sliced on a transient. The click you hear on pad 7 is almost always this, not the speaker." },
          { k: "Reverse", v: "Writes a reversed copy or flips the region. Reverse a snare tail, layer it under the dry snare at low level: the pre-echo of boom-bap." },
          { k: "Pitch Shift / Time Stretch", v: "Offline, unlike Warp. Use this when you want a new sample, not a live algorithm sitting on the pad. Time stretch without warp is how you get the smeared 90s workstation vocal." },
          { k: "Extract / Discard", v: "Extract writes the region to a new sample and leaves the original. Discard throws away everything outside the region. Extract when you still need the long take." },
          { k: "Root Note", v: "Trim and the Sampler Keep window both have it. Set this before [Shift] + [16 Levels] to Keygroup or the instrument will play a third off." },
          { k: "Keep window", v: "After Sampler stops: assign to a pad, a new drum track, a new keygroup, or just the pool. Name it now. Untitled 017 is how projects die." },
        ],
      },
      {
        type: "callout",
        kind: "tip",
        title: "Two copies, one job",
        text: "Duplicate the sample in the Project panel before a destructive process. Warp, flatten, and extract are cheap. Undo is RAM, and the low-memory banner deletes it.",
      },
    ],
  },
  {
    slug: "oscs",
    part: "mpc",
    title: "Oscillators on pads (3.9)",
    kicker: "No sample required",
    blurb: "Since 3.9 a drum or keygroup layer can be an oscillator instead of a sample. An 808, a hat, a bass, without hunting a wav.",
    blocks: [
      {
        type: "p",
        text: "Track Edit → Samples/Oscs. Per layer, flip Sample / OSC. Some banks need Get Oscillator Content in Activations before the list fills. Every type has Decay and Start Phase; phase is how you stop two stacked sines from cancelling.",
      },
      {
        type: "kvs",
        items: [
          { k: "Warm Sine", v: "The 808. Keygroup track, short pitch envelope (Pitch page, fast decay from +12 or +24 semitones), amp AHDS with a long decay. Tune with Semi. This is a sub, not a sample of a sub." },
          { k: "Digital Sine", v: "Cleaner, thinner. Layer under a kick sample at −12 dB to add weight without the click of a sine click." },
          { k: "Saw / Square / Pulse", v: "Basses and keys. Pulse has width; LFO the width slowly for movement. Filter with MPC3000 LPF so it does not sit on top of the chops." },
          { k: "Noise", v: "Hats and snare air. Short amp decay, high-pass, a little Bit Crush as Drum FX. Cycle or Random layer play across two noise flavors and it stops sounding static." },
          { k: "FM2 / RM3", v: "Bells, clangs, weird percussion. Keep modulation depth low until you mean it. A tiny FM2 under a snare is the metal." },
          { k: "Algorithmic / Wavetable / Single-Cycle", v: "Moving timbres. Wavetable position is a mod-matrix target; velocity or an LFO through it is a free wavetable synth on a pad." },
        ],
      },
      {
        type: "callout",
        kind: "tip",
        title: "Flatten when it is finished",
        text: "Oscillators plus warp plus inserts is CPU. [Shift] + [Stem] (Flatten Pad) with a 1–2 s audio tail bakes the layer to a sample. Keep the unflattened track muted in a holding sequence if you still want to tweak tomorrow.",
      },
    ],
  },
  {
    slug: "step",
    part: "mpc",
    title: "The 16-step row",
    kicker: "Hold Set",
    blurb: "The bottom row is not just a drum machine. Sixteen modes. On the XL the Q-Links sit on that row, so step velocity is a knob, not a guess.",
    blocks: [
      {
        type: "p",
        text: "Hold [Set] and press a step button to pick the row's job. The sixteen modes are listed in Every button. These are the ones that earn a night.",
      },
      {
        type: "kvs",
        items: [
          { k: "Drum Seq", v: "Classic 16-step drum grid for the current pad. Length is Last Step. Tap a step to enter a hit at the current velocity; Q-Link Step Sequencer (hold Q-Links → Step Sequencer) writes velocity by twist." },
          { k: "Note Seq", v: "Melodic steps for plugin and keygroup tracks. Combine with Pad Perform so each step is a diatonic chord, not a guess at MIDI note numbers." },
          { k: "Step Edit", v: "The selected step's note, velocity, length, probability, ratchet. Probability under 100% is how hi-hats stop being a grid. Ratchet 2–8 is a roll on one step." },
          { k: "Note Length", v: "Trim all steps' lengths from the row. Useful on bass so notes do not overlap into slur when you did not mean legato." },
          { k: "Last Step", v: "Odd lengths. 15 for a skip, 12 for a 3/4 feel inside 4/4, 7 for a break that never lands where the kick expects." },
          { k: "Automation", v: "Steps become automation points for the last-touched parameter. Filter opens on step 9, closes on 13." },
          { k: "Clip Launch / Row Launch", v: "Pro Pack. The step buttons launch clips or a whole row (a scene). Follow Actions live in Clip Edit, not here." },
          { k: "Track Select / Arm / Mute", v: "Performance. Sixteen tracks under the fingers without looking at Main." },
          { k: "Next Seq", v: "Queue the next sequence from the row. The queued sequence waits for the bar line unless you set it otherwise in Next Seq." },
        ],
      },
      {
        type: "callout",
        kind: "tip",
        title: "Q-Link step sequencer is why the XL layout exists",
        text: "3.9 added it; the Live III has it too, but the knobs on this deck sit on the step buttons. Hold Q-Links, pick Step Sequencer, twist. Velocity becomes a physical gesture. Drum Seq + that knob is the whole classic MPC drum workflow, minus the 1988 LCD.",
      },
    ],
  },
  {
    slug: "qlinks",
    part: "mpc",
    title: "Q-Links, strip, Touch FX, XY",
    kicker: "Hands",
    blurb: "Sixteen OLEDs, a strip, a Touch FX button the X never had, and pad XY that still only works on drum tracks. This is the performance surface.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Q-Link modes", v: "Hold [Q-Links]: Screen (follows the focused parameter), Project, Track, Pad Scene, Pad Parameter, Track FX Rack, Volume, Pan, Sends, Step Sequencer. Screen is the editing mode. Pad Parameter is the playing mode." },
          { k: "Learn", v: "[Shift] + [Q-Links] MIDI-learns the last touched control. Or tap Learn in Q-Link Edit and wiggle. A knob can drive several parameters (a macro); stack them in the inspector." },
          { k: "Envelope follower / LFO", v: "Pro Pack. Sixteen followers, sixteen LFOs. Sidechain chapter is the kick→volume version. The same follower can open a filter, start a slice, or push a send." },
          { k: "Touch strip modes", v: "Q-Link 1–16, Pad Level, Track Level, Notes, Note Strum, Pitch Bend, Mod Wheel, Sustain, Expression, Crossfader. Notes + a plugin = a ribbon. Crossfader is how two kits share a track without a mixer move." },
          { k: "Touch FX", v: "XL-only button. 20 presets on a track, return, submix or output: filters, beat repeat, tape stop, delays, phaser, comb, washout, granulator, flanger. Shift opens Config: target and wet/dry. This is a performance insert, not a mix decision — park it off until the drop." },
          { k: "XYFX", v: "[Shift] + [Pad Mute]. An XY pad of effects on the screen. Different from pad XY." },
          { k: "Pad XY / pressure", v: "Drum tracks only (Sound on Sound called this out and it is still true). Q-Link Edit → MPCe Pads maps X, Y, pressure. Track Edit → Samples → Tune/Mix → MPCe assigns a layer to a quadrant. Effects page 2 puts flams, rolls, buzzes on corners." },
        ],
      },
      {
        type: "callout",
        kind: "trap",
        title: "XY on a plugin track",
        text: "It will not do the pad-position trick. Use the touch strip (Mod Wheel / Expression) or a Q-Link macro. MPCe is a drum-track feature, not a machine-wide one.",
      },
    ],
  },
  {
    slug: "plugins",
    part: "mpc",
    title: "The instruments in the box",
    kicker: "Plugin tracks",
    blurb: "32 plugin instruments at once on the XL. Most nights you need four. These are the ones that earn a track, and the ones that eat RAM.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Fabric / Fabric Electric Piano", v: "Pro Pack includes Fabric Select. Rhodes, Wurli, Clav. The EP is the dusty chord track. High polyphony; bounce when the part is done." },
          { k: "Hype", v: "AIR's do-it-all: analog, wavetable, FM, plus a mixer of layers. Fast basses and leads. Easy to over-stack; one layer is usually the patch." },
          { k: "TubeSynth", v: "Analog-style. Good bass, good a lead that is not a square from 3.9's own oscillator." },
          { k: "OPx-4", v: "Four-operator FM. Electric pianos and bells that are not Fabric. Algorithm first, ratios second." },
          { k: "Bassline", v: "303-class. Sequence it from pads in a scale, or from Note Seq with Last Step 16 and a lot of slide via overlap." },
          { k: "Odyssey", v: "ARP Odyssey model. Two oscillators, a filter that screams. Keep cutoff automation on W for one pass, then R." },
          { k: "Mellotron / Solina", v: "Tape strings and ensemble. These are the 70s under a chop. Slow attack, or they honk." },
          { k: "Stage EP", v: "The lighter Rhodes. Prefer this over Fabric when CPU is already busy." },
          { k: "Analog Dreams", v: "NI. Activation is on the XL with the inMusic login. Heavy. Auto Sampler it into a keygroup if you only need one preset." },
          { k: "AIR effects that are not dirt", v: "Reverb Pro, Visual EQ4, Utility (Pro Pack). Delay Tape Sync, Vintage Filter, Diode Clip, Kill EQ, Flavor, Lo-Fi ship with the machine once content is downloaded." },
        ],
      },
      {
        type: "callout",
        kind: "tip",
        title: "Auto Sampler is how plugins stop costing voices",
        text: "Sampler → keyboard icon. Note range, velocity layers, loop. A sampled Fabric patch on a keygroup is a few megabytes and zero plugin hold. Do this before the project is a song, while you still remember which preset it was.",
      },
    ],
  },
  {
    slug: "midi",
    part: "mpc",
    title: "MIDI, CV, and the rest of the room",
    kicker: "Ports",
    blurb: "Two MIDI ins, four MIDI outs, 16 CV channels, USB-C to a computer, USB-A for a controller. The XL is meant to sit in the middle, not at the edge.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "MIDI track", v: "Notes out a 5-pin port. Channel, port, and program change live in Track Settings ([Shift] + [Track Edit]). Local is off for that track so the pads do not also fire an internal plugin." },
          { k: "Clock", v: "Preferences → MIDI/Sync. Send clock on the outs that have hardware sequencers. Receive if a drum machine is boss. Delay compensation per port is in here when a 909 sits late." },
          { k: "MTC / MMC", v: "When a DAW or a tape-style box must stay in bars with the XL. USB-C MIDI carries this too." },
          { k: "USB-C to computer", v: "24-in/24-out audio, 32 MIDI. Matching firmware and desktop MPC 3 point versions, XL driver installed. Controller Mode closes the standalone project: save first." },
          { k: "USB-A controller", v: "Class-compliant keys, pads, a fighter stick, a 16-knob box. MIDI Control mode is [Shift] + [Track Mute]. Map once, save the project." },
          { k: "CV tracks", v: "Melodic CV is note + gate + optional velocity on chosen ports. Drum CV: any pad to any of the 16. 1 V/oct is the default; check the module. Pro Pack Advanced CV adds LFOs and envelopes onto the jacks." },
          { k: "CV Playgroup", v: "Akai's name for treating the 16 CV outs as a playground: looping modulation, not just notes. Same Q-Link LFO that ducks the keys can run a filter on a Eurorack voice." },
          { k: "Footswitches", v: "Two TS on the front. Play/stop is the obvious assign. Next Sequence is the useful one live." },
        ],
      },
      {
        type: "callout",
        kind: "trap",
        title: "Interface sample rate",
        text: "An external USB audio interface on the A ports is capped at 44.1 kHz. If it shows up silent, that is why. The XL itself is 44.1 internally; fighting it from a 48 kHz interface is a wasted night.",
      },
    ],
  },
  {
    slug: "perform",
    part: "mpc",
    title: "Playing it live",
    kicker: "One sequence, then the room",
    blurb: "Mute, next sequence, clips, Touch FX, the strip. A set is a project with its mutes thought through, not a folder of songs.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Pad Mute / Track Mute", v: "Orange pads. Track Mute is the band; Pad Mute is the kit. Double-press Shift to see every secondary flash if you get lost." },
          { k: "Next Seq", v: "Queue from the mode, or from step-row Next Seq. It waits for the loop end unless you trigger immediately. Name sequences Intro / A / B / Break / End so the row is readable." },
          { k: "Song Mode", v: "A playlist when you do not want to think. Stop playback before entering. Convert > Seq if you need one timeline to mixdown." },
          { k: "Clip Matrix", v: "Pro Pack. 8×8, one clip per track at a time. Follow Actions on a clip (play next, random, return) are how a row becomes a band. Row Launch from the step buttons is the scene launch." },
          { k: "Touch FX + strip", v: "Tape stop on the break, filter on the strip during the eight-bar wait. Config the target to a return if you want drums dry." },
          { k: "Full Level / 16 Levels", v: "Full Level for a chorus that has to hit. 16 Levels Tune for a bass run on one sample when you do not have a keygroup ready." },
          { k: "XYFX", v: "A second performance FX lane if Touch FX is already doing tape stop." },
        ],
      },
      {
        type: "callout",
        kind: "tip",
        title: "Save a performing copy",
        text: "[Project As] a -LIVE version with plugins flattened, unused samples purged, Touch FX assigned, sequences named, and automation on R. The studio project can stay heavy. The live project should boot from a black screen to the first pad without a spinner.",
      },
    ],
  },
  {
    slug: "recipes",
    part: "mpc",
    title: "Three recipes that are not the first loop",
    kicker: "After tonight",
    blurb: "The 12-step loop taught the machine. These three are how people actually use an XL for more than a week.",
    blocks: [
      {
        type: "h",
        text: "Boom-bap from one record",
      },
      {
        type: "steps",
        id: "recipe-boom",
        items: [
          { n: "01", title: "Phono in, 83 BPM, 4 bars", body: "Phono/Line on Phono. Sampler, threshold −45 dB, no inserts. Capture more than you think; you will extract." },
          { n: "02", title: "Chop on Threshold, Min Time up", body: "If the kick is splitting, Min Time is the fix, not a different mode." },
          { n: "03", title: "Convert using slices, Create Events off", body: "You do not want the original order. Play a new one. Note On so chops die when you lift." },
          { n: "04", title: "Second drum track, acoustic kit, swing 56 / strength 80", body: "Kick stays straighter than the hats. Shift Timing a few ticks late on the snare." },
          { n: "05", title: "808 from Warm Sine, not a wav", body: "Keygroup, pitch envelope, AHDS. Sidechain the chops from the 808 or the kick, not both." },
          { n: "06", title: "Vinyl Emulation on the chop track, MPC3000 LPF if it is still bright", body: "Output: Opto then Limiter. Mixdown from Song Mode if you built an arrangement." },
        ],
      },
      {
        type: "h",
        text: "Dusty keys, no vinyl",
      },
      {
        type: "steps",
        id: "recipe-keys",
        items: [
          { n: "01", title: "Plugin track, Stage EP or Fabric, Pad Perform chords 1-3-5-7 in A minor", body: "Notes button. Play pad 1-6 as a progression, Retro Rec if the good pass was not armed." },
          { n: "02", title: "Resample L+R through Vintage Filter and Tape Emulation in the Looper", body: "Two bars. Export to pad. The plugin is now a record." },
          { n: "03", title: "Chop the resample, new drum track", body: "You are back in the first-loop recipe, except the source is yours." },
          { n: "04", title: "Mute the plugin track, or Auto Sampler it and delete the plugin", body: "CPU and RAM go back to the drums." },
        ],
      },
      {
        type: "h",
        text: "Live loop, Jackson in front",
      },
      {
        type: "steps",
        id: "recipe-live",
        items: [
          { n: "01", title: "Inst 1, Rear/Front on Front, Dir/Main toward Direct", body: "Watch Gain 1. Sampler Monitor In. The click in the cans is Preferences → Metronome → output Headphones, not Main, if you are going to record the room." },
          { n: "02", title: "Audio track, 8 bars, count-in 1 bar", body: "Punch later in Arrange. Do not Sampler-print an effect on a guitar you have not decided on." },
          { n: "03", title: "Drum track from a kit, Note Repeat hats, sidechain the guitar from the kick", body: "Envelope follower, Flip, learn guitar volume." },
          { n: "04", title: "Looper on Resample for a second guitar layer, export to pad", body: "Now you can chop your own riff under the live one." },
        ],
      },
    ],
  },
  {
    slug: "prefs",
    part: "mpc",
    title: "Preferences that change the machine",
    kicker: "Set once",
    blurb: "A dozen boxes in Preferences decide whether the XL feels like a sampler or like a fight. None of them are on by accident.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Project Load/Save → Auto-Save", v: "Off from the factory. Turn it on. Interval 5–10 min. Still use Project As before a risky flatten." },
          { k: "Project Load/Save → Auto-Load", v: "Last project on boot. Fine at the desk. Off if you gig and you do not want last night's half-bounce on the floor." },
          { k: "Sequencer → Count-in", v: "1 bar. Metronome → Sound and Output: headphones when a mic is open." },
          { k: "Sequencer → Default Chop", v: "3.9. Threshold or BPM, your call, but set it so the dedicated CHOP button stops asking." },
          { k: "Hardware → Pad Sensitivity / Threshold", v: "If ghost hats appear, threshold up. If you cannot play quietly, sensitivity up. They are not the same control." },
          { k: "Hardware → Aftertouch", v: "On for pressure-to-filter. Off if it keeps blooming when you rest a palm." },
          { k: "Hardware → Footswitch", v: "Assign both. Play/Stop and Rec, or Play/Stop and Next Seq." },
          { k: "Audio/Export → Disk Streaming", v: "Off until projects are huge. Needs a restart. Point Temporary File Location at the SATA SSD if you turn it on." },
          { k: "MIDI/Sync → Track on MPC Pads", v: "If pads go silent with a kit loaded, this got unchecked. First repair step." },
          { k: "Activations", v: "Pro Pack, Analog Dreams, 3.8 effects, oscillator content, expansion packs. If a feature is 'missing,' it is usually here, not a firmware fail." },
        ],
      },
      { type: "widget", name: "notes" },
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
          { k: "Phantom power is one switch", v: "+48 V is shared across combo 1 and 2. A ribbon or a dynamic on 1 still sees phantom if you armed it for a condenser on 2. Check before you plug the ribbon." },
          { k: "Four MIDI outs are four outs", v: "There is no merge. A synth on Out 3 does not hear clock you only enabled on Out 1. MIDI/Sync per port." },
          { k: "Controller Mode is a different machine", v: "It closes the standalone project. The screen saying Looking for computer is not a brick." },
          { k: "3.9 oscillators need content", v: "Empty OSC list: Activations → Get Oscillator Content. Not a firmware reinstall." },
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

export const MPC_SECTIONS: Section[] = [
  ...MPC_CORE.filter((s) => !TAIL.has(s.slug)),
  ...MPC_CRAFT,
  ...MPC_TECH,
  ...MPC_CORE.filter((s) => TAIL.has(s.slug)),
];
