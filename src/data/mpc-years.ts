export type YearBlock = {
  id: string;
  label: string;
  title: string;
  body: string;
};

/** 36 months on this XL. Check them off. They persist with the guitar weeks. */
export const MPC_YEARS: YearBlock[] = [
  {
    id: "xl-y1-01",
    label: "Year 1 · Month 1",
    title: "The box, then a loop every night",
    body: "Firmware 3.9.1, Activations, Lo-Fi Breeze in. Finish Day one and the 12-step loop. Then: one new 8-bar loop per night, saved as Project As, named YYYY-MM-DD. Do not open last night's file. Hands before taste.",
  },
  {
    id: "xl-y1-02",
    label: "Year 1 · Month 2",
    title: "Chop until Convert is a reflex",
    body: "Threshold, BPM, Regions, Manual: one source each week. Convert using slices, Note On, Create Events off. A pad map you will not change (hat on 9, kick on 1, snare on 5). Play the chops in a new order before you add drums.",
  },
  {
    id: "xl-y1-03",
    label: "Year 1 · Month 3",
    title: "Swing, Strength, Shift Timing",
    body: "Every loop: Timing Correct 1/16, swing 54–58, strength 70–85. Kick straighter than hats. Snare a few ticks late. Humanize last, and lightly. If it sounds like a pack, strength is still 100.",
  },
  {
    id: "xl-y1-04",
    label: "Year 1 · Month 4",
    title: "Drum language on the step row",
    body: "Drum Seq + Q-Link velocity every session. Ghost snares under 50. Hats with probability under 100 and a ratchet on the off-beat. Last Step 12 and 15 so the grid breaks. Read the Drums chapter until you can hear a linear beat vs a breakbeat without looking.",
  },
  {
    id: "xl-y1-05",
    label: "Year 1 · Month 5",
    title: "808 from Warm Sine, not a wav",
    body: "Keygroup, pitch envelope, AHDS. Tune to the chop. Sidechain the keys from this 808, not from the kick as well. Flatten the pad when it is done. One sub, one key, the whole month.",
  },
  {
    id: "xl-y1-06",
    label: "Year 1 · Month 6",
    title: "Dirt is a chain, resampling is a habit",
    body: "Vinyl or Tape on the chop track, filter, output glue. Once a week: Looper Input = Resample L+R, two bars of plugins through dirt, export to a pad, chop that. Delete the plugin track.",
  },
  {
    id: "xl-y1-07",
    label: "Year 1 · Month 7",
    title: "Mixer until Channel Command is enough",
    body: "Pad Mixer I/O = Track on every pad you care about. One submix for drums, one for dusty stuff. Mix a tune without opening the screen mixer: Channel Command only. Then open it and see what you missed.",
  },
  {
    id: "xl-y1-08",
    label: "Year 1 · Month 8",
    title: "Leave the 8-bar loop",
    body: "Arrange Mode: intro, A, B, break, end. Six locate markers named. Or Song Mode with five sequences. Mixdown from Song Mode once so you never confuse it with Main again. Audio Tail 2 seconds, every time.",
  },
  {
    id: "xl-y1-09",
    label: "Year 1 · Month 9",
    title: "Pad Perform is your piano",
    body: "Notes, Type Chords, a minor scale, 1-3-5-7. Progressions on 16 pads. Retro Rec when the good pass was not armed. One month of songs in one key so your hands stop hunting.",
  },
  {
    id: "xl-y1-10",
    label: "Year 1 · Month 10",
    title: "Jackson into Inst 1",
    body: "Front, Rear/Front on Front, Dir/Main Direct, count-in, audio track. Then Looper resample of that riff, chopped under the live take. Sidechain the guitar from the kick. The guitar chapter's change drill still happens; this month it also gets recorded.",
  },
  {
    id: "xl-y1-11",
    label: "Year 1 · Month 11",
    title: "Finish four, purge, bounce",
    body: "Four complete beats, not forty sketches. Mixdown WAV 24-bit 44.1. Listen on phones, car, the XL headphones. Purge unused. Flatten plugins. Project As a -MASTER folder. If you cannot play all four in a row, they are not finished.",
  },
  {
    id: "xl-y1-12",
    label: "Year 1 · Month 12",
    title: "A four-song tape",
    body: "Same kit, same dirt chain, same key. Order them. 12–16 minutes. Export the tape as one Song Mode mixdown and as separate stems. Tell one person. That is year one.",
  },
  {
    id: "xl-y2-01",
    label: "Year 2 · Month 1",
    title: "A kit with your name on it",
    body: "Mute groups, round-robin layers, velocity snares, noise hats from oscillators. Save as .xpm. Do not load a factory kit for a month except to steal one pad into yours.",
  },
  {
    id: "xl-y2-02",
    label: "Year 2 · Month 2",
    title: "Library, not a pile",
    body: "One folder tree: Kits, Chops, One-shots, Basses, Vocals, Jackson. Names with key and BPM. Browser favorites. Splice if you have it, tagged. Nothing untitled in the project pool.",
  },
  {
    id: "xl-y2-03",
    label: "Year 2 · Month 3",
    title: "Boom-bap as a record, not a recipe",
    body: "Vinyl or a long sample, chops as the harmonic bed, drums that do not fight the source, 808 in the pocket. Three joints, same chain. If they all sound like month 1, the chops are still in original order.",
  },
  {
    id: "xl-y2-04",
    label: "Year 2 · Month 4",
    title: "Clip Matrix for 4/4",
    body: "House or techno. Swing off. Eight-bar clips, Follow Actions, Row Launch from the step buttons. Sidechain from the kick with an envelope follower. A 20-minute set that is not a playlist of sequences.",
  },
  {
    id: "xl-y2-05",
    label: "Year 2 · Month 5",
    title: "R&B: chords first, drums second",
    body: "7ths and 9ths in Pad Perform. 16th hats, 808 slides via overlapping notes, snare on 3 or a ghost on 2-and. Stage EP resampled through Tape. Slow is harder; stay under 80 BPM.",
  },
  {
    id: "xl-y2-06",
    label: "Year 2 · Month 6",
    title: "Mix on this box like it is the only one",
    body: "Visual EQ4, one compressor per bus, Limiter last. Reference a record you love on the same phones. Highs that survive Vinyl Emulation. Kick and 808 that do not cancel: short vs long, or sidechain, not both stacked at 40 Hz.",
  },
  {
    id: "xl-y2-07",
    label: "Year 2 · Month 7",
    title: "Something in the room answers",
    body: "MIDI out to one synth, or CV to one module. Clock from the XL. Record it back in as audio. The point is the XL as the center, not a controller for a laptop.",
  },
  {
    id: "xl-y2-08",
    label: "Year 2 · Month 8",
    title: "Twenty minutes standing up",
    body: "-LIVE project: flattened, named sequences, Touch FX on a return, Next Seq on a footswitch, automation on R. Play it twice. Fix what you reached for and missed. Then play it for someone.",
  },
  {
    id: "xl-y2-09",
    label: "Year 2 · Month 9",
    title: "Auto Sampler and flatten as hygiene",
    body: "Every plugin part becomes a keygroup or an audio track before the project is a song. CPU is not a vibe. Disk streaming still off unless the project is actually huge.",
  },
  {
    id: "xl-y2-10",
    label: "Year 2 · Month 10",
    title: "Stems someone else can use",
    body: "Separate Tracks, Drum Pads as Stems when it matters, tails on, I/O = Track. A folder with BPM, key, and your name. Send it. If they ask where the snare is, the pad was routed around the track.",
  },
  {
    id: "xl-y2-11",
    label: "Year 2 · Month 11",
    title: "Hybrid without getting lost",
    body: "Controller Mode is a different machine: save first. Or USB-C 24-channel into a DAW with the XL still sequencing. One week of each. Decide which one you actually like. Do not keep both as a personality.",
  },
  {
    id: "xl-y2-12",
    label: "Year 2 · Month 12",
    title: "Eight songs, shorter, louder, yours",
    body: "Same kit family. Thirty minutes. Mix louder than year 1 without the limiter doing the song. A title. That is year two.",
  },
  {
    id: "xl-y3-01",
    label: "Year 3 · Month 1",
    title: "One chain, one kit, one key for a month",
    body: "Identity is subtraction. If a pad is not in the kit, it is not in the record. If an effect is not in the chain, it is not in the record. People should recognize a bar as you.",
  },
  {
    id: "xl-y3-02",
    label: "Year 3 · Month 2",
    title: "Cues, not loops: scoring",
    body: "No drums, or drums that are furniture. CV or a slow LFO on a filter. Arrange as cues with locate markers. A two-minute piece that would sit under a scene without asking for attention.",
  },
  {
    id: "xl-y3-03",
    label: "Year 3 · Month 3",
    title: "Modulation as composition",
    body: "Followers, LFOs, pad XY, strip, macros. Automation on W for one pass, then R. A track whose motion you could not have programmed in the grid. Then flatten what should freeze.",
  },
  {
    id: "xl-y3-04",
    label: "Year 3 · Month 4",
    title: "A system you could gig tomorrow",
    body: "Boot to pad 1, first note in under a minute. Dead pads labeled. A spare USB with the -LIVE project. Touch FX rehearsed. If the screen dies, the step row and Channel Command still run the set.",
  },
  {
    id: "xl-y3-05",
    label: "Year 3 · Month 5",
    title: "Mix someone else's XL session",
    body: "Import their stems or their project. Do not rewrite their drums. Make it louder, clearer, shorter. The mixer chapter was for you; this month is for them.",
  },
  {
    id: "xl-y3-06",
    label: "Year 3 · Month 6",
    title: "Sampling as writing, not decorating",
    body: "The chop is the song. Drums support it. If you muted the chops and a beat remains, you wrote a beat and pasted a sample on it. Reverse it: mute the drums and a song remains.",
  },
  {
    id: "xl-y3-07",
    label: "Year 3 · Month 7",
    title: "Finish like it is leaving the house",
    body: "Mixdown, tails, a second pass on phones, a title, a date, a folder that is not Desktop. If you put it on the internet, the Splice vs vinyl distinction in Library is not theoretical.",
  },
  {
    id: "xl-y3-08",
    label: "Year 3 · Month 8",
    title: "Teach the machine to one person",
    body: "Sit them at this XL. Day one and the 12-step loop only. Watch where they stall. Change one sentence in your own notes. If you cannot teach month 1, you do not own it.",
  },
  {
    id: "xl-y3-09",
    label: "Year 3 · Month 9",
    title: "XL and Jackson, one set",
    body: "Live loop recipe, then a set: two beat-tape songs, two with guitar, one cue. Footswitch next sequence. Tune the Floyd first. Record the room.",
  },
  {
    id: "xl-y3-10",
    label: "Year 3 · Month 10",
    title: "Archive like you will live",
    body: "Projects folder on the SATA SSD, 1–3 GB free on internal, no untitled samples, kits as .xpm, a text file of BPM/key per tape. A dead drive should hurt your feelings, not erase the year.",
  },
  {
    id: "xl-y3-11",
    label: "Year 3 · Month 11",
    title: "Firmware as a habit, not an event",
    body: "Read dispatch. If 3.9.1 is still current, you are done. If it is not, USB stick or Software Center, recovery combo memorized, projects copied first. Never update the night of a set.",
  },
  {
    id: "xl-y3-12",
    label: "Year 3 · Month 12",
    title: "The record you would play someone",
    body: "Not a tutorial. Not a pack demo. Thirty to forty minutes that sounds like you, on this XL, with this kit, maybe this guitar. Then start year four without a book, or add a chapter you wished this one had.",
  },
];
