export type ButtonRow = {
  name: string;
  press: string;
  shift: string;
};

export const BUTTONS: ButtonRow[] = [
  { name: "Menu", press: "Mode grid", shift: "Preferences" },
  {
    name: "Main",
    press: "Main Mode",
    shift: "Track View",
  },
  {
    name: "Sounds",
    press: "Browse plugin presets, favorites, setlists",
    shift: "Favorites (manual is inconsistent; there is also a Favorites button)",
  },
  { name: "Save", press: "Save window", shift: "Save As" },
  { name: "Browse", press: "Browser", shift: "Pad Assign (Sample Assign page)" },
  {
    name: "Stem",
    press: "Stems Pro separation on the selected sample",
    shift: "Flatten Pad (bake layers, inserts and warp to one sample)",
  },
  { name: "Chop", press: "Chop mode on the selected sample", shift: "Convert or Assign Slices" },
  { name: "Sample Edit", press: "Trim and chop", shift: "Sampler (record)" },
  { name: "Grid Edit", press: "Piano-roll grid", shift: "List Edit" },
  { name: "Track Mute", press: "Mute tracks from pads", shift: "MIDI Control mode" },
  { name: "Pad Mute", press: "Mute pads", shift: "XYFX" },
  { name: "Arrange", press: "Linear arranger", shift: "Sequence Edit window" },
  { name: "Matrix", press: "Clip Matrix", shift: "Launch Configuration" },
  { name: "Mixer", press: "Channel Mixer", shift: "Pad Mixer" },
  { name: "Track Edit", press: "Sound design for the current track", shift: "Track Settings" },
  { name: "Next Seq", press: "Queue the next sequence", shift: "Song Mode" },
  { name: "Full Level", press: "Every hit at 127", shift: "Set Level (a fixed custom velocity)" },
  {
    name: "16 Levels",
    press: "One pad across 16 with one parameter varying",
    shift: "To Keygroup: the selected drum sample becomes a playable keygroup track",
  },
  { name: "Notes", press: "Pad Perform on and off", shift: "Pad CTRL (pad aftertouch on and off)" },
  {
    name: "Erase",
    press: "Hold + pad during playback erases live; stopped, opens Erase window",
    shift: "Clear Track",
  },
  { name: "Note Repeat", press: "Hold for rolls", shift: "Latch" },
  { name: "Copy", press: "Copy pad to pads", shift: "Delete pad assignment" },
  {
    name: "Q-Links",
    press: "Q-Link Edit; hold for the mode picker",
    shift: "Learn: MIDI-learn the last touched control",
  },
  { name: "Touch FX", press: "Touch FX on the strip (XL only)", shift: "Config" },
  { name: "Touch Strip", press: "Cycle strip modes; hold to pick on screen", shift: "Config" },
  { name: "Pad Bank A–D", press: "Banks A–D; double-press for E–H", shift: "Banks E–H" },
  { name: "Set", press: "Hold + step button 1–16 picks the step row's mode", shift: "Follow" },
  { name: "Audition", press: "Preview a step", shift: "Lock" },
  { name: "Prev / Next", press: "Step page", shift: "Nudge" },
  {
    name: "Tap Tempo",
    press: "Tap a tempo",
    shift: "Global tempo (red) vs sequence tempo (white)",
  },
  { name: "Loop On", press: "Loop the sequence or region", shift: "Punch In" },
  { name: "Arrange / Clip", press: "Cycles the recording destination", shift: "—" },
  { name: "Read/Write", press: "Automation R (green) or W (red)", shift: "Clear automation" },
  { name: "Metronome", press: "Click on and off", shift: "Config: count-in, sound, volume, output" },
  { name: "TC On/Off", press: "Quantize on and off", shift: "Timing Correct window" },
  { name: "Quantize", press: "Quantize the track now", shift: "All tracks" },
  {
    name: "Rec",
    press: "Record",
    shift: "Recall: insert the notes you played while not recording",
  },
  { name: "Over Dub", press: "Layer without erasing", shift: "—" },
  {
    name: "Stop",
    press: "Stop; double-press silences ringing audio",
    shift: "Return to start (or loop start)",
  },
  {
    name: "Play / Play Start",
    press: "Play from here / from the top",
    shift: "Play Start: toggle metronome",
  },
  {
    name: "< > / << >>",
    press: "Step / bar",
    shift: "Hold Locate + these: previous/next event, or start/end",
  },
  {
    name: "Locate",
    press: "Locate window: position, loop range, six named markers",
    shift: "—",
  },
  { name: "Undo", press: "Undo (while recording: wipe this pass)", shift: "Redo" },
  {
    name: "USB Select",
    press: "Cycle USB audio input",
    shift: "Cycle backwards; hold to choose on screen",
  },
];

export const STEP_MODES = [
  { n: 1, name: "Drum Seq" },
  { n: 2, name: "Note Seq" },
  { n: 3, name: "Step Edit" },
  { n: 4, name: "Note Length" },
  { n: 5, name: "Last Step" },
  { n: 6, name: "Automation" },
  { n: 7, name: "Clip Launch" },
  { n: 8, name: "Row Launch" },
  { n: 9, name: "Track Select" },
  { n: 10, name: "Track Arm" },
  { n: 11, name: "Track Mute" },
  { n: 12, name: "Pad Mute" },
  { n: 13, name: "Next Seq" },
  { n: 14, name: "Q-Link Pad Grid" },
  { n: 15, name: "Visuals" },
  { n: 16, name: "Edit Actions" },
];
