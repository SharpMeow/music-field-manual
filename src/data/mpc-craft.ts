import type { Section } from "./types";

export const MPC_CRAFT: Section[] = [
  {
    slug: "years",
    part: "mpc",
    title: "Three years on this XL",
    kicker: "36 months",
    blurb: "The first night is a loop. This is the rest of the work. One block a month is enough if you actually do it. Checks persist in this browser.",
    blocks: [
      {
        type: "lead",
        text: "YEAR 1 · fluency on this deck. YEAR 2 · craft, a kit, a live set. YEAR 3 · a sound people could name as yours.",
      },
      {
        type: "p",
        text: "Skip ahead if a month is already true. Do not skip year 1 because you have watched tutorials. The checks are how you know. The guitar's twelve weeks still run in parallel; month 10 of year 1 is when they are supposed to meet.",
      },
      { type: "widget", name: "years" },
      {
        type: "callout",
        kind: "tip",
        title: "A month is four sessions, not a calendar",
        text: "If you only have Sundays, month 1 still counts when four loops exist. The date in the filename is for you, not for the book.",
      },
    ],
  },
  {
    slug: "drums",
    part: "mpc",
    title: "Drum language",
    kicker: "Years of right hands",
    blurb: "A drum track is not 'add a kit.' It is kick function, snare placement, hat grammar, and the space you leave. The XL's step row is how this becomes physical.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Kick as function", v: "Downbeat, pickup, or both. If the 808 is the weight, the kick is the click: short, mid, not two subs stacked. If there is no 808, the kick can be long. Pick one." },
          { k: "Snare / clap", v: "On 3 for backbeat. Ghosts under 50 velocity on the sixteenths around it. A clap layered 10–20 ms later is width, not a second snare. Mute group the two if they choke." },
          { k: "Hats", v: "Straight 1/16 at 50% swing is a machine. 54–58% swing, probability 70–90 on the off-beats, a ratchet on one step, open hat on the 'and' of 4. Closed and open share a mute group or they will ring over each other." },
          { k: "Break vs linear", v: "A break is a chopped drum break on pads, played. Linear is programmed one drum at a time so nothing overlaps. Boom-bap can be either. If the chop already has drums, do not program a second snare on top of it unless you mean the flam." },
          { k: "Ghost notes", v: "The difference between a loop and a player. Velocity 20–45, not a second sample. 16 Levels Velocity on one snare pad is the teacher." },
          { k: "Fills", v: "Last two beats of 8 or 16. Toms or a chop run. Do not fill every 4 bars; it stops being a fill." },
          { k: "The map", v: "Same pads for a year. Kick 1, snare 5, closed hat 9, open 13 is a default you can live with. Muscle memory is a mix decision." },
        ],
      },
      {
        type: "callout",
        kind: "trap",
        title: "Two kicks, one note",
        text: "A long 808 and a long acoustic kick on the same downbeat is mud, not punch. Shorten one, high-pass one, or sidechain. The Bass chapter is this argument again with numbers.",
      },
    ],
  },
  {
    slug: "bass",
    part: "mpc",
    title: "808s, subs, and the note that eats the kick",
    kicker: "Low end",
    blurb: "Since 3.9 you do not need an 808 sample. You need a pitch envelope, a key, and a decision about who owns 40–80 Hz.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Warm Sine 808", v: "Keygroup. Pitch envelope: start +12 to +24 st, decay 80–200 ms. Amp AHDS, long decay, no sustain if you want it to duck. Root Note matches the key of the song. Semi for the riff." },
          { k: "Slides", v: "Overlap notes on a mono pad (Pad Polyphony Mono). The pitch envelope does not do a 303 slide; overlapping notes do." },
          { k: "One owner of the sub", v: "Either the kick's tail or the 808, not both. High-pass the kick at 60–80 Hz if the 808 is the weight. Or shorten the 808 decay so it is a note, not a bed." },
          { k: "Sidechain target", v: "Follower on the kick pad, Flip, learn 808 level or a low-pass on the keys. Not both kick and 808 ducking the same chords into a hole." },
          { k: "Bassline plugin", v: "303-class. Sequence from Note Seq, Last Step 16, filter on a Q-Link. Resample through Tape if it still sounds like a plugin." },
          { k: "Sampled bass", v: "One note, Root Note set, [Shift]+[16 Levels] to Keygroup. Loop the body in Trim if it is a long take. Velocity layers only if you will play them." },
        ],
      },
      {
        type: "callout",
        kind: "tip",
        title: "Tune before you layer",
        text: "An 808 in the wrong key under a chop is not 'lo-fi.' It is out of tune. Match Semi to the chop's root, then decide whether a fifth is a choice.",
      },
    ],
  },
  {
    slug: "harmony",
    part: "mpc",
    title: "Chords on pads, and when to sample them",
    kicker: "Notes button",
    blurb: "Pad Perform is how this deck becomes a harmonic instrument. Sampling a Rhodes stab is how it becomes a record. You want both, in that order.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Scale first", v: "[Notes] → Type Notes or Chords, pick a scale, stay there for a tape. A minor and D minor will cover a year of lo-fi if you let them." },
          { k: "Chord types", v: "1-3-5, 1-4-5, 1-2-5, 1-3-5-7, 1-3-5-7b. Sevenths are the dusty ones. Ninths you add by playing two pads or by a custom chord." },
          { k: "Progressions", v: "Type Progressions, or Grid View → Convert to Progression from a MIDI take you already like. Sixteen pads become a song form, not a piano exam." },
          { k: "When to sample", v: "Once the voicing is right, Looper Resample L+R through Vintage Filter and Tape, two bars, chop. The plugin dies; the record starts." },
          { k: "When not to", v: "If you still need inversions every chorus, keep the plugin or a keygroup. Flatten later, not now." },
          { k: "Jackson as harmony", v: "Position 5, volume 7, into Inst 1. Audio track, then chops. A Superstrat into an XL is a different instrument than Fabric; let it be." },
        ],
      },
    ],
  },
  {
    slug: "kit",
    part: "mpc",
    title: "A kit that lasts a year",
    kicker: ".xpm",
    blurb: "Factory kits are demos. A kit you named, muted, and velocity-layered is an instrument. Save it. Load it into every project until it bores you, then duplicate and edit.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Mute groups", v: "Closed hat chokes open hat. Pedal chokes both. Snare and rim can share or not; clap usually does not choke snare." },
          { k: "Layers", v: "Velocity 1–90 a soft snare, 91–127 a rim or a harder snare. Cycle or Random on hats so 1/16s do not machine-gun. Noise oscillator under a recorded hat at −12 dB is air." },
          { k: "Simultaneous Play", v: "Kick fires a click pad. Use sparingly; it is how kits get loud and stupid." },
          { k: "Drum FX per pad", v: "Bit Crush on a snare, not on the kick. Low Pass on a hat instead of a track filter that also dulls the snare." },
          { k: "Pad Mixer", v: "Hats a little wider, kick and 808 center, snare a few degrees off if you must. Sends: snare to tape delay, not the kick." },
          { k: "Save", v: "Track Edit → the kit menu → save .xpm to your Kits folder. Version it when you change mute groups. Old projects keep their copy." },
        ],
      },
    ],
  },
  {
    slug: "library",
    part: "mpc",
    title: "A library, not a desktop",
    kicker: "Browser",
    blurb: "The XL will happily drown in untitled takes. A folder tree and a naming rule are the only scalable features in the box.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Tree", v: "Projects/, Kits/, Chops/Key-BPM/, One-shots/, Bass/, Vocals/, Jackson/, Packs/. Content drive in Activations is not a library. It is a store." },
          { k: "Names", v: "Am73-vinyl-stab.wav, not Sample 017. Key and BPM in the name so the browser search works when you have forgotten the night." },
          { k: "Favorites / setlists", v: "Sounds button. A setlist per tape. Packs stay in Expansions; your work stays in Places." },
          { k: "Splice", v: "Preferences → Splice. Sorted by BPM and key once synced. Their license is in their app, not in this book. Do not put a Splice one-shot on a record you will sell without reading it." },
          { k: "Vinyl and records", v: "Phono in. You own the recording you make; you do not own the composition. For a beat tape among friends, people have been doing this since the 80s. For a store, you need a clearance path or original playing." },
          { k: "Packs worth grabbing", v: "Lo-Fi Breeze, LoFi Boom Vol 1, Classic Drum Machines, F9 Orion, Analog Dreams (activation). Steal pads into your kit; do not ship a beat that is 90% one expansion demo." },
        ],
      },
      {
        type: "callout",
        kind: "trap",
        title: "MP3 folders",
        text: "Load converts to uncompressed. A 'library' of MP3s can fill 16 GB RAM on import. Convert, trim, and store WAV on disk; load what the song needs.",
      },
    ],
  },
  {
    slug: "mix",
    part: "mpc",
    title: "Mixing on the XL",
    kicker: "The only studio some nights",
    blurb: "Four inserts, four sends, Visual EQ4, a limiter last. You can mix a tape in here. You cannot mix sixteen competing ideas in here. Finish, then mix.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Order", v: "Arrangement first. Then levels. Then EQ. Then compression. Then dirt that is not already printed. Then limiter. People reverse this and call it a chain." },
          { k: "EQ", v: "AIR Visual EQ4 on buses, not on every pad. High-pass everything that is not the kick or 808. If Vinyl Emulation is on the chop, do not also dull it with a second filter unless you mean it." },
          { k: "Compression", v: "Opto on drums bus, gentle. Color Compressor (3.8) when you want the compressor to be a sound. Kick and snare often need none if velocity is right." },
          { k: "Sends", v: "Tape delay on snare and chops, short. Reverb Pro on a return, not on the 808. Pre-fader send only when you want the ghost of a muted track." },
          { k: "Stereo", v: "Kick, 808, lead vocal-equivalent chop: center. Hats and textures wider. A chorus plugin on a bass is how the sub disappears in a phone speaker." },
          { k: "Reference", v: "A record you love, same headphones, same XL volume. If yours is quieter and thinner, that is data. Do not match loudness by slamming the limiter until year 2." },
          { k: "Limiter", v: "Output insert, last. Gain into it until the tape is competitive, not until it breathes on every kick. If the 808 pumps the whole mix, the follower belongs on the 808, not the limiter." },
        ],
      },
    ],
  },
  {
    slug: "form",
    part: "mpc",
    title: "Form: after the 8-bar comfort",
    kicker: "Arrange / Song / Clips",
    blurb: "A loop is a cell. A song withholds, returns, and ends. The XL has three form tools. Pick one per piece so you are not maintaining three arrangements.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "The 8-bar test", v: "If you can listen three times without wanting a change, it is a loop, not a song. Change can be a mute, a fill, a new chop, a filter, not always a new section." },
          { k: "A / B / break", v: "A is the loop. B withholds drums or changes the chop order. Break is 2–4 bars that would be embarrassing as the main idea. Then A with one extra element." },
          { k: "Arrange Mode", v: "Linear, punch, locate markers named Intro / A / B / Break / End. 3.9 cut/copy/paste on the loop brace. This is albums and cues." },
          { k: "Song Mode", v: "Sequences as sections, repeat counts. Live-friendly. Convert > Seq when it is time to mixdown as one timeline." },
          { k: "Clip Matrix", v: "Performance form. Follow Actions are the arrangement if you are standing up. Not the right tool for a film cue." },
          { k: "Endings", v: "A tape stop (Touch FX), a crash of chops, or silence after the 808 dies. Stopping is a mix decision. Fade-outs on the limiter sound like you left." },
        ],
      },
    ],
  },
  {
    slug: "boom",
    part: "mpc",
    title: "Boom-bap on this deck",
    kicker: "Genre",
    blurb: "Not a history lesson. A stack that works on an XL in 3.9.1: source, chops Note On, drums that leave space, 808 or kick as one sub, swing on the hats.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Source", v: "One long sample. Vinyl if you have it. A workstation pack if you do not — then resample it until it is not a pack." },
          { k: "Chops", v: "Threshold, Convert using slices, original order off. Play a melody. If you need the original order, that is a loop, not boom-bap." },
          { k: "Drums", v: "Acoustic or Classic Drum Machines, not a trap kit. Ghosts. Swing 55–58. Do not bury the chop's own snare with a second one." },
          { k: "Bass", v: "Warm Sine or a round sample, in key, often a fifth under the chop. Sparse. Boom-bap bass is notes, not a bed." },
          { k: "Dirt", v: "Vinyl Emulation on the chop only. Drums can stay cleaner so the kick punches through the dust." },
          { k: "BPM", v: "80–96 is the house. 70s if you are brave. 110 is a different genre; do not pretend." },
        ],
      },
    ],
  },
  {
    slug: "fourfour",
    part: "mpc",
    title: "4/4: house, techno, and the grid",
    kicker: "Genre",
    blurb: "Swing off. Kick on every downbeat unless you are writing a break. Clip Matrix earns its Pro Pack here.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Kick", v: "Four on the floor. Consistent velocity. A little Drive as Drum FX, not Vinyl on the kick." },
          { k: "Hats / perc", v: "Off-beats. Probability for human, not swing (or 51–52% at most). A shaker loop resampled and chopped is fine." },
          { k: "Bass", v: "Off-beat or on-beat, not both until the drop. Sidechain from the kick, Decay of the follower = the pump you want." },
          { k: "Clips", v: "8-bar clips, Follow Actions, Row Launch. One column per idea. Mute is a performance; do not bake every filter move." },
          { k: "Touch FX", v: "Beat repeat and tape stop on a return. Practice the off as much as the on." },
          { k: "BPM", v: "120–128 house, 130–138 techno, 140+ if you mean it. The XL will do all of them; your kick sample might not." },
        ],
      },
    ],
  },
  {
    slug: "rnb",
    part: "mpc",
    title: "R&B and slow jams",
    kicker: "Genre",
    blurb: "Chords first. 16th hats. 808 that sings. Under 80 BPM is a test of space, not of swing.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Harmony", v: "7ths and 9ths, Pad Perform, one key for the tape. Inversions on a keygroup, not a new plugin every chorus." },
          { k: "Time", v: "Snare or clap on 3. Hats 1/16 with a few 1/32 at the ends of bars. Swing 54–56, not 60." },
          { k: "808", v: "Melodic. Slides. Often the hook. Kick is a click." },
          { k: "Texture", v: "Mellotron or Solina, slow attack, resampled. Jackson on position 5, neck pickup warmth, volume 7." },
          { k: "Vocal chops", v: "Your voice, or a friend, into combo 1 with phantom off. Not a pack vocal everyone has." },
        ],
      },
    ],
  },
  {
    slug: "score",
    part: "mpc",
    title: "Cues, ambient, and no drums",
    kicker: "Genre",
    blurb: "The XL is a sampler. It does not owe you a beat. Arrange Mode and slow modulation are a scoring rig if you let them be.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "No kick", v: "Allowed. A chop, a keygroup, a long reverb return, an LFO on cutoff." },
          { k: "Locate as cues", v: "Named markers. Play Start from a marker in a session. This is closer to a cue box than a groovebox." },
          { k: "CV", v: "A slow envelope to a module. Record the module back in. The XL is the clock and the memory." },
          { k: "Length", v: "Two minutes of one idea, not eight bars looped sixteen times. Arrangement is the composition.", },
        ],
      },
    ],
  },
  {
    slug: "automate",
    part: "mpc",
    title: "Automation as a take",
    kicker: "Read / Write",
    blurb: "If it is not written, you will not have it live. If it stays on W, you will destroy the take you liked.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "W then R", v: "Red to perform, green to keep. [Shift]+[Read/Write] clears. Do not mix on W." },
          { k: "What to write", v: "Filter on chops, send to delay on a break, Touch FX wet on a return, 808 level, a Q-Link macro. Not pad volume on every hit — that is velocity." },
          { k: "Strip and XY", v: "They only record on W. A take with the strip is a performance. Do it in Arrange with punch if you need a second try." },
          { k: "Step Automation", v: "For grid-like filter moves. Different from a strip take. Pick one per section." },
        ],
      },
    ],
  },
  {
    slug: "cpu",
    part: "mpc",
    title: "Voices, RAM, and what to freeze",
    kicker: "8 cores, still finite",
    blurb: "256 voices, 16 GB, 32 plugins. The XL is generous until a project is a year old. Hygiene is part of the music.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Flatten Pad", v: "[Shift]+[Stem]. Warp + osc + inserts → one sample. Tail 1–2 s. Mute the unflattened copy in a holding sequence if you are not brave." },
          { k: "Auto Sampler", v: "Plugins become keygroups. Fabric and Analog Dreams are the usual suspects." },
          { k: "Audio tracks", v: "Un-arm what you are not recording. Armed audio eats RAM even when silent." },
          { k: "Purge", v: "Menu → Project → Purge unused, before the low-memory banner. After the banner, undo may already be gone." },
          { k: "Disk streaming", v: "Off until you need it. SATA SSD, Temporary File Location pointed at it, restart. Not a substitute for flattening." },
          { k: "Voices", v: "Long hat decays and huge pads steal 256 faster than drums. Mono on 808. Mute groups on hats." },
        ],
      },
    ],
  },
  {
    slug: "hybrid",
    part: "mpc",
    title: "Laptop, or not",
    kicker: "Controller Mode / USB-C",
    blurb: "The XL is a standalone. It is also a 24-channel interface and a control surface. Pick a lane for a project. Mixing lanes is how files die.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Stay standalone", v: "Default. Project on the SSD. Mixdown WAV. You owe the laptop nothing." },
          { k: "USB-C interface", v: "XL sequences, DAW records 24 channels. Matching firmware and desktop 3.x, XL driver. I/O on tracks set to USB pairs." },
          { k: "Controller Mode", v: "Closes the standalone project. Save first. 'Looking for computer' is the mode, not a brick. Good for people who already live in a DAW and want these pads." },
          { k: "Ableton import", v: "Pro Pack. Live Set out, or Live project into Clip Matrix. Tempos and warps will still surprise you; listen." },
          { k: "The rule", v: "One brain per song. If the XL is the brain, the DAW is a tape machine. If the DAW is the brain, the XL is a controller. Two brains is how automation disagrees." },
        ],
      },
    ],
  },
  {
    slug: "finish",
    part: "mpc",
    title: "Leaving the house",
    kicker: "Mixdown",
    blurb: "A finished XL piece is a file with a name, a length, tails, and a decision. Export is not the same as done.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Where you export from", v: "Main Mode = current sequence. Song Mode = the song. This still catches people in year 3." },
          { k: "Format", v: "WAV, 24-bit, 44.1 kHz. MP3 only as a listen copy. Audio Tail at least 2 s." },
          { k: "Stems", v: "Separate Tracks; Drum Pads as Stems if a producer asked. I/O = Track. A readme with BPM, key, your name." },
          { k: "Loudness", v: "Competitive without a brickwall on every transient. If you need a number, aim for a listen-copy that is not painful next to a record you like, then stop." },
          { k: "3.9.1 mixdown bug", v: "Rare blank WAV. Listen before you delete the project. Known issue, still current as of the dispatch date." },
          { k: "Name", v: "A title you would say out loud. A date. A folder that is not Downloads." },
        ],
      },
    ],
  },
  {
    slug: "listen",
    part: "mpc",
    title: "What to train the ears on",
    kicker: "Not a playlist",
    blurb: "The XL will play anything. Your ears need assignments. Reference on the same headphones you mix with.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Kick vs 808", v: "Pick a boom-bap record and a modern 808 record. Pause on the downbeat. Who owns the sub? Steal that decision, not the drum sound." },
          { k: "Chop melody", v: "A tape where the sample is the song. Mute yours and see if a song remains." },
          { k: "Hats", v: "Straight vs swung. Probability vs velocity. Once you hear it, Strength 100 is obvious." },
          { k: "Width", v: "A mix that is still loud in one ear. Then yours. If the 808 vanished, it was chorused or mid-side'd into nothing." },
          { k: "Silence", v: "The bar before a chorus. If you never leave a hole, the XL is filling time, not arranging." },
        ],
      },
    ],
  },
  {
    slug: "session",
    part: "mpc",
    title: "Someone else at the deck",
    kicker: "Two chairs",
    blurb: "A session on an XL is a project with a spare pair of headphones, named tracks, and a person who is not watching you menu-dive.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Before they sit", v: "Kit loaded, a key chosen, metronome in their cans, Input armed, Rear/Front correct. The first five minutes are not firmware." },
          { k: "Track names", v: "Their vocal is Vocal, not Audio 07. You will send stems at 2 a.m." },
          { k: "Print vs insert", v: "Do not Sampler-print an effect on a take you might reuse clean. Inserts on the track, not in the Sampler, until they say they love it." },
          { k: "Save", v: "Project As after every keeper take. Their name in the filename. Auto-save is not a personality." },
          { k: "Teach one thing", v: "If they will touch pads, give them Pad Perform in one scale, or one drum row. Not the whole book." },
        ],
      },
      { type: "widget", name: "notes" },
    ],
  },
];
