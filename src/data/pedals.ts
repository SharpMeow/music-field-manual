export type PedalSlot = "Dynamics" | "Pitch" | "Dirt" | "Modulation" | "Time" | "Loop";

export type Pedal = {
  id: string;
  brand: string;
  name: string;
  /** What it is, in the words you'd use out loud. */
  kind: string;
  slot: PedalSlot;
  /** Position in the chain, guitar first. Lower comes earlier. */
  order: number;
  bought: string;
  from: string;
  paid?: string;
  condition?: "new" | "used";
  /** Whether it starts switched on in the board widget. */
  defaultOn: boolean;
  blurb: string;
  controls: { k: string; v: string }[];
  power: string;
  /**
   * Milliamps to budget for. Builders publish a minimum supply rating far more
   * often than a measured draw, so this is the number you size a brick against,
   * not a promise about what the pedal pulls. null where nobody published one.
   */
  mA: number | null;
  bypass: string;
  io: string;
  size: string;
  withJackson: string;
  intoXL: string;
  settings: { name: string; body: string }[];
  manual?: { title: string; href: string; note?: string };
};

/**
 * The board is budgeted against the rechargeable kit, because that is the one
 * with a hard ceiling in milliamps. The Black Lion PG-P Plus sits upstream of
 * it: eight filtered, surge-protected mains outlets that the XPND's wall
 * supply plugs into. It cleans and protects the AC feeding the board, and it
 * is the reason a wall wart has somewhere to live, but it puts out no 9 V DC
 * of its own, so it does not raise the milliamp ceiling below.
 */
export const SUPPLY = {
  name: "The XPND Pedal Power kit",
  mA: 1500,
  note: "D'Addario XPND Pedal Power Battery Kit, bought 2 Aug 2025: a 10,000 mAh cell feeding a Gateway that puts out one regulated 9 V rail, then an eight-plug daisy chain. The daisy chain is not isolated.",
} as const;

export const PEDALS: Pedal[] = [
  {
    id: "cali76",
    brand: "Origin Effects",
    name: "Cali76 Stacked",
    kind: "Two-stage FET compressor",
    slot: "Dynamics",
    order: 10,
    bought: "28 Jul 2025",
    from: "Amazon",
    paid: "$419",
    condition: "new",
    defaultOn: true,
    blurb:
      "Two 1176-style compressors in a row, with a knob in the middle deciding how hard the first one hits the second. That is the whole idea, and it is why this pedal can go from invisible to squashed-flat-and-still-clean. It is the first thing your signal meets, and the calmest thing you own.",
    controls: [
      { k: "In", v: "Gain into the Class-A input preamp, which is what drives the first compressor stage. More In means stage one works harder." },
      { k: "Att/Rel 1", v: "Attack and release for the first stage, on one knob. Slow attack lets the pick through, fast attack flattens it." },
      { k: "Thru", v: "The signature control. How much of stage one gets passed into stage two. Turn it down and you have a single compressor; turn it up and the two stack into that endless sustain." },
      { k: "Att/Rel 2", v: "Attack and release for the second stage, independent of the first." },
      { k: "Out", v: "Master output. Watch this one: it is easy to leave the board hotter than the amp wants." },
      { k: "Dry", v: "Blends clean signal back alongside the compressed path, which is real parallel compression. Reported unity around 2 o'clock, with boost above that." },
      { k: "Two gain-reduction LEDs", v: "One per stage, so you can see which stage is doing the work instead of guessing." },
    ],
    power:
      "9 V DC centre-negative, stepped up to 24 V internally. Origin publish a minimum supply rating of 200 mA. Feed it 9 V only: unlike the older Stacked Edition, this one is not an 18 V pedal.",
    mA: 200,
    bypass: "Buffered, with silent switching. Not true bypass, and that is a design choice rather than a corner cut.",
    io: "Mono in, mono out, both top-mounted. No expression, no MIDI, no USB.",
    size: "Origin's Compact stainless enclosure, roughly 64 x 124 x 58 mm.",
    withJackson:
      "The JB at the bridge is hot and the '59 at the neck is not, and a compressor is the cheapest way to stop that difference from being a volume problem. Set it with the 5-way in position 1, then flick to 5 and see whether you still like it. Palm mutes on the low E stop disappearing under the ring of the open strings.",
    intoXL:
      "This is the pedal that makes guitar sampling easy. A compressed signal sits in a narrow level window, so Gain 1 can be set once and left, and every take lands at roughly the same place in the meters. Watch the Out knob: with it past unity you are handing the XL a line-level signal on an instrument input.",
    settings: [
      { name: "Invisible glue", body: "In at 9 o'clock, Thru off, Att/Rel 1 slow, Out to match bypassed volume, Dry around 2 o'clock. You should barely hear it working. Leave it on." },
      { name: "Chords into the sampler", body: "In at noon, Thru at 10 o'clock, both Att/Rel slowish, Dry down. Even, steady, and boring in the way a good rhythm take is boring." },
      { name: "Everything sustains", body: "In and Thru both up, Dry off. This is the slide and single-note setting, and the one that starts sounding like a clean overdrive at the extremes." },
    ],
    manual: {
      title: "Origin Effects: Cali76 Stacked Compressor manual (PDF)",
      href: "https://origineffects.com/product/cali76-stacked-compressor/",
      note: "Origin publish the manual from the product page. The chain advice above is theirs: they recommend the compressor at the start of the chain, before any drive.",
    },
  },
  {
    id: "hammeron",
    brand: "DigiTech",
    name: "HammerOn",
    kind: "Momentary pitch shifter",
    slot: "Pitch",
    order: 20,
    bought: "15 Aug 2025",
    from: "Reverb, from City Music Annex",
    paid: "$233.99 plus tax and shipping, $268.92 all in",
    condition: "used",
    defaultOn: false,
    blurb:
      "Hold a footswitch and the note jumps to an interval; let go and it falls back. That is a hammer-on played with your foot. The trick is that your foot can do things your hand cannot: alternate between two pitches faster than a trill, or run a sequence while you hold one note.",
    controls: [
      { k: "Pitch 1 footswitch", v: "Momentary jump to the selected interval. Hold the switch and turn the Selector Knob to choose what that interval is." },
      { k: "Pitch 2 footswitch", v: "Second jump, and its behaviour depends on the Mode button: another plain hammer-on, the Impossible alternating jump, or a latching sequence." },
      { k: "Selector Knob", v: "Picks the interval for whichever footswitch you are holding, across a range of roughly two octaves down to two octaves up. Also sets Trill speed." },
      { k: "Mode", v: "Cycles what Pitch 2 does: Hammer On, Impossible, or Sequence." },
      { k: "Trill", v: "Turns one press into fast repeated shifts, quicker than a foot can stomp." },
      { k: "Dry+", v: "Blends the original note back in, which turns a pitch jump into a harmony instead of a replacement." },
      { k: "Pitch LEDs", v: "A row showing the selected interval, so you are not counting semitones in the dark." },
    ],
    power: "9 V DC centre-negative, no battery. Retailer spec tables quote roughly 258 mA, which is high for a pedal this size and worth respecting when you plan the board.",
    mA: 258,
    bypass: "True bypass. Pressing both footswitches together is reported to drop it into bypass, with either switch bringing it back.",
    io: "Mono in, mono out, 24-bit conversion at 44.1 kHz. Some listings claim MIDI and an expression jack; the detailed spec tables do not, and that could not be settled here.",
    size: "Roughly 130 x 91 x 47 mm, about 508 g.",
    withJackson:
      "Pitch tracking wants one clean note at a steady level, which is exactly what the Cali76 in front of it produces. Play it on the neck '59 with the tone rolled back: fewer harmonics for the detector to argue with. Chords will confuse it, and the Floyd makes that worse, because a bend or a dip moves the pitch the pedal is trying to lock onto. Bar down and pitch-shift at the same time and it will sound broken, because it is.",
    intoXL:
      "Sample the shifts rather than performing them. Record eight bars with one held note and your foot doing the work, then chop it: you end up with an interval kit on pads that you could not have played by hand. Because it is mono and early in the chain, it also samples cleanly with nothing else switched on.",
    settings: [
      { name: "Octave under a riff", body: "Pitch 1 set an octave down, Dry+ on. Hold it through the low E line and the riff doubles itself." },
      { name: "The impossible trill", body: "Mode to Impossible, Trill on, Selector for speed. One held note becomes a figure no hand plays. Good raw material for a chop." },
      { name: "Fifth on demand", body: "Pitch 1 at a fifth up, Dry+ on, everything else off. That is a harmony pedal you can leave your foot on for one bar." },
    ],
    manual: {
      title: "DigiTech: HammerOn owner's manual",
      href: "https://digitech.com/dp/hammeron/",
      note: "DigiTech host the manual from the product page. This is a current pedal, announced at NAMM 2025, not the vintage box the name suggests.",
    },
  },
  {
    id: "medusa",
    brand: "Lichtlaerm Audio",
    name: "Medusa",
    kind: "HM-2 style distortion",
    slot: "Dirt",
    order: 30,
    bought: "11 Aug 2025",
    from: "Cult FX, order #1179",
    paid: "$219",
    condition: "new",
    defaultOn: true,
    blurb:
      "The Swedish chainsaw, rebuilt by somebody who had opinions. It is an HM-2 with roughly three times the gain, but the part that matters is everything the original could not do: a low-cut so palm mutes stay tight, a sweepable mid, a gate that actually works, and a parallel loop.",
    controls: [
      { k: "Gain", v: "Saturation. There is a lot of it." },
      { k: "Level", v: "Output volume, and it interacts with Gain more than you expect." },
      { k: "Cut", v: "Low-cut, sweeping up to around 1.5 kHz. This is the control the original HM-2 never had, and it is why drop tunings and palm mutes stay defined instead of turning to mud." },
      { k: "Low / Grind / Presence", v: "Active EQ bands, plus or minus about 16 dB each. Grind is the twin-peak band around 1.0 and 1.3 kHz that makes the chainsaw a chainsaw." },
      { k: "Mid and Mid-Freq", v: "Parametric midrange: how much, and where, sweeping roughly 200 to 700 Hz." },
      { k: "Gate", v: "Threshold for the Key and Gate circuit. It is keyed from the input like a modern gate, and it sits after the FX loop, so anything you blend in gets gated too." },
      { k: "Blend", v: "Mixes the distortion against the parallel FX loop. Leave the loop empty and it becomes a clean blend for parallel saturation." },
      { k: "Mode switch", v: "Classic is the traditional voicing. Modern is louder, with more mids and more saturation." },
      { k: "Loop polarity switch", v: "Flips the phase of the loop, for when blending in parallel cancels instead of adding." },
    ],
    power: "9 V DC centre-negative, mains only, no battery. Lichtlaerm do not publish a current draw that could be confirmed here, so the board budget below does not count it. Assume it wants its share.",
    mA: null,
    bypass: "True bypass.",
    io: "Mono in and out, plus FX loop send and return. No expression, no MIDI, no USB.",
    size: "Compact enclosure. Lichtlaerm do not publish dimensions.",
    withJackson:
      "This pedal and the JB humbucker were made for each other and will happily make each other unlistenable. Start with Gain at 10 o'clock, not noon. The Cut knob is where the Jackson's low end gets rescued: at zero, palm mutes on the low E turn into a flapping mess, and a little Cut fixes it without thinning the chords. Position 1 for this, and roll the guitar's volume back to 7 to hear how much of the gain is actually in your hands.",
    intoXL:
      "Do not send this into Inst 1 with the Level up. It is one of the two pedals on this board most likely to overload an instrument input. Use the rear line pair, or pull Level down below noon and make up the difference in the XL. The gate matters here too: a gated signal samples beautifully, because there is no floor hiss to reveal itself the moment you loop two bars.",
    settings: [
      { name: "Actual HM-2", body: "Mode to Classic, all EQ at noon, Gain around 11 o'clock, Cut at zero. This is the reference point. Everything else is a departure from it." },
      { name: "Tight enough to sample", body: "Cut up to about 10 o'clock, Low back a little, Gate just past where the hiss stops. Chugs stay separate instead of smearing into one another." },
      { name: "Parallel grind", body: "Loop empty, Blend around 11 o'clock. Half the signal stays clean, so chords keep their shape while the dirt sits underneath them." },
    ],
    manual: {
      title: "Lichtlaerm Audio: Medusa",
      href: "https://lichtlaermaudio.com/shop/medusa",
      note: "Lichtlaerm publish a Medusa manual PDF from their own site. The product page is the stable way in.",
    },
  },
  {
    id: "nostalgia",
    brand: "Lichtlaerm Audio",
    name: "Nostalgia",
    kind: "Lo-fi modulator",
    slot: "Modulation",
    order: 40,
    bought: "11 Aug 2025",
    from: "Cult FX, order #1179",
    paid: "$219",
    condition: "new",
    defaultOn: true,
    blurb:
      "Chorus, vibrato, tape warble and vinyl flutter in one box, with a degradation knob that takes the shine off. This is the pedal that makes a guitar sound like it was already on a record before you sampled it, which is a shortcut worth knowing about.",
    controls: [
      { k: "RPM", v: "Modulation rate, by knob or by tapping it in. The sweep is enormous, reported from around 40 ms to 20 seconds, so it covers flutter at one end and a slow tide at the other." },
      { k: "Waveform", v: "Eight LFO shapes: ramp up, ramp down, square, triangle, sine, sweep, random jittery, random smooth." },
      { k: "Depth", v: "How far the LFO moves things." },
      { k: "Warp", v: "The underlying delay time. Short is flutter; long is warped slapback and proper pitch damage." },
      { k: "Mix", v: "Dry against wet. Low is chorus width. All the way wet is vibrato, because the dry signal is gone." },
      { k: "Fidelity", v: "Analogue degradation. Clean at one end, crumbled tape at the other. This is the knob you bought the pedal for." },
      { k: "Level", v: "Output, and it goes past unity, so a degraded signal can still be pushed into whatever comes next." },
      { k: "Tap footswitch", v: "Taps in the rate and overrides the knob." },
    ],
    power: "9 V DC centre-negative. Reported at around 60 mA, which makes it the cheapest thing on this board to run.",
    mA: 60,
    bypass: "Relay switching. Reported as true bypass, though not from the builder directly.",
    io: "Mono in, mono out. No expression, no MIDI, no USB found.",
    size: "Not published.",
    withJackson:
      "Neck pickup, tone at 6 or 7, Mix low and Fidelity about a third up. That is the chord sound that fits under a beat without asking for attention. It also hides a multitude of sins: a slightly uneven strum reads as tape wobble rather than as a mistake, which in week six is a kindness.",
    intoXL:
      "This is the one place where a pedal genuinely beats the XL at its own job. The XL has Vinyl Emulation, Tape Emulation and AIR Flavor, and they are good, but they run after the fact. Nostalgia degrades the signal while you are still playing it, so you react to the wobble instead of applying it later. Record the degraded take, then resist adding the XL's Vinyl on top. One layer of age reads as a choice. Two reads as a preset.",
    settings: [
      { name: "Just a bit of tape", body: "Fidelity a third up, Depth low, RPM slow, Mix around 9 o'clock. Nothing announces itself. The take just sounds older." },
      { name: "Warble under chords", body: "Waveform to random smooth, Depth up, Warp short, Mix at noon. Sounds like a cassette that has been in a car for a decade." },
      { name: "Broken machine", body: "Warp long, Depth high, Fidelity most of the way up, Mix wet. Not subtle, and excellent chop material." },
    ],
    manual: {
      title: "Lichtlaerm Audio: Nostalgia",
      href: "https://lichtlaermaudio.com/shop/nostalgia",
      note: "No downloadable Nostalgia manual could be found. Lichtlaerm's page points owners at a manual, which appears to ship in the box rather than online.",
    },
  },
  {
    id: "purrting",
    brand: "Old Blood Noise Endeavors",
    name: "Purr-ting",
    kind: "Stereo glitch delay and reverb",
    slot: "Time",
    order: 50,
    bought: "25 Jan 2026",
    from: "B's Music Shop",
    paid: "$329",
    condition: "new",
    defaultOn: false,
    blurb:
      "A Parting in a blue cat finish. OBNE built it with the harpist Emily Hopkins, and the point of it is that it does not repeat itself: a Chance knob decides how much of what you play is even allowed into the buffer, so the same settings give you a different answer every bar.",
    controls: [
      { k: "Rate / Depth / Shape", v: "The modulation section. Seven LFO shapes, including two random ones and an envelope." },
      { k: "Chance", v: "The heart of it. The probability that a piece of your signal gets into the delay and reverb buffer at all. Low is sparse and startling; high is a wash." },
      { k: "Smear", v: "Diffusion and feedback across the delay lines, which is how the delay turns into a reverb." },
      { k: "Glitch", v: "Clock subdivisions for octave jumps, either fixed or randomly chosen depending where the knob sits." },
      { k: "Time", v: "Delay and reverb timing, and the reverse length." },
      { k: "Dissolve", v: "Two jobs on one knob. Below noon it drops the sample rate for progressive degradation. Above noon it reverses and repeatedly halves." },
      { k: "Filter", v: "Cutoff after the Dissolve stage, switching between low-pass and high-pass behaviour on the one knob." },
      { k: "Mix", v: "Dry against wet, with analogue dry-through, so your clean signal never goes near a converter." },
      { k: "Three footswitches", v: "On/Off, which doubles as the modifier key for expression assignment and the routing menu; Aux, assignable to tap, half-speed or preset stepping; and Preset, for three onboard slots plus live." },
    ],
    power: "9 V DC centre-negative on a 2.1 mm barrel. OBNE ask for a supply capable of 350 mA, which is the largest single ask on this board.",
    mA: 350,
    bypass: "Your choice: buffered with trails, or true bypass. Set it in the routing menu. Either way the dry path stays analogue.",
    io: "TRS stereo in and out on single jacks, with Mono, Mono-in-stereo-out and Stereo routing modes. Expression in, mini-MIDI in and out on 1/8\" TRS carrying clock both ways, and USB-C for firmware.",
    size: "Roughly 108 x 127 x 51 mm.",
    withJackson:
      "Chance and a Floyd are a good combination for a reason that is not obvious: both reward playing one thing and letting it move. Hold a chord, use the bar gently, and let the pedal decide what survives. Keep Mix below noon at first, because the analogue dry-through means your actual playing stays intact underneath whatever it is doing.",
    intoXL:
      "This is where the board stops being mono, and where the XL stops being a recorder and starts being the clock. Send MIDI clock from one of the XL's four MIDI outs into the mini-MIDI in, and the glitch subdivisions lock to your sequence instead of fighting it. It passes clock out again, so the looper downstream gets it too. Record the stereo output to a stereo audio track, not a mono one: half the effect is in the spread.",
    settings: [
      { name: "Sparse and strange", body: "Chance low, Smear low, Mix around 10 o'clock, Time short. Occasional fragments come back wrong. Good under a beat." },
      { name: "Reverb that will not settle", body: "Chance high, Smear up, Dissolve just below noon, Filter rolling off the top. A wash with sand in it." },
      { name: "Reverse tails", body: "Dissolve past noon, Time longer, Mix at noon. Clock it from the XL and the reverses land on the bar instead of near it." },
    ],
    manual: {
      title: "Old Blood Noise Endeavors: Parting instruction manual (PDF)",
      href: "https://oldbloodnoise.com/parting",
      note: "The Purr-ting is B's Music Shop's exclusive colourway, with cat artwork by Avery Worrall. The circuit is a standard Parting, so the Parting manual is the manual.",
    },
  },
  {
    id: "lostfound",
    brand: "Chase Bliss",
    name: "Lost + Found",
    kind: "Stereo multi-effect",
    slot: "Time",
    order: 60,
    bought: "Ordered 1 Aug 2025, shipped 24 Sep",
    from: "chasebliss.com, order #54601",
    paid: "$399",
    condition: "new",
    defaultOn: true,
    blurb:
      "Chase Bliss described it as a little museum of the rare and strange: twelve effects that never became their own pedals, in six A/B pairs across two channels you can run side by side or one into the other. It is their first multi-effect and, oddly for the brand, the easiest one of theirs to operate.",
    controls: [
      { k: "Mix", v: "Dry against the effect, for both channels at once. When ramping is engaged this knob sets the ramp speed instead." },
      { k: "Time", v: "The timing of the effect. Everything is tempo-synced by default, so this steps through subdivisions rather than sweeping freely. The Unsync dip switch changes that." },
      { k: "Modify", v: "A two-way A/B control per channel: one way selects and adjusts the first effect of the pair, the other way the second. At noon that channel does nothing, which is how you use Glue on its own." },
      { k: "Blend (Glue)", v: "Balances the two channels. Hidden behind it is Glue, a master compressor and saturator at the very end of the chain, which is what stops two unrelated effects sounding like two unrelated effects." },
      { k: "Two mode toggles", v: "Pick which pair each channel runs: Slow-Verb / Useful Ambience, Orchestral Swell / Pitch Repeater, Pinging Phaser / Spectral Modulator, Tape Echo / Grain Tumbler, Impulse Synthesizer / Sympathetic Resonator, Ensemble Expander / Gen Lite." },
      { k: "Two footswitches", v: "Tap engages a channel; hold does something different per mode. Double-tap both for the tap tempo menu." },
      { k: "Preset switch", v: "Left and right hold a preset, middle is live. The Bank dip switch gives you a second pair." },
      { k: "Dip switches", v: "The usual Chase Bliss back panel. Named ones include MISO for mono in and stereo out, Unsync, Trails, Latch, Bank and per-channel swaps." },
    ],
    power:
      "9 V DC centre-negative, no battery. Published figures disagree: third-party databases list 200 mA and 270 mA, and Chase Bliss's own spec could not be checked here. The budget below uses 270, because under-provisioning a supply is the expensive mistake.",
    mA: 270,
    bypass: "Relay switched, with a Trails dip switch that lets tails decay after bypass instead of being cut off.",
    io: "True stereo: two inputs, two outputs, all 1/4\". A single 1/4\" TRS jack handles expression, CV, external footswitches or MIDI, auto-detected. 5-pin MIDI needs Chase Bliss's MIDIBox, which is not included. USB for firmware.",
    size: "The standard Chase Bliss two-switch footprint, roughly 68 x 124 mm.",
    withJackson:
      "Run the guitar in mono and flip the MISO dip switch: one cable in, stereo out, which is how a single Jackson ends up sounding like two of them. Slow-Verb under clean neck-pickup chords is the sound most people buy this pedal for. Gen Lite, the small Generation Loss, is the one that will eat an evening.",
    intoXL:
      "Everything here is tempo-synced by default, which means it wants a clock, and the XL has four MIDI outs to give it one. You will need the MIDIBox to get 5-pin DIN into its TRS jack; without it, tap tempo by foot still works. Because Glue sits last and compresses, it also does something useful on the way into the sampler: it delivers a signal that is already glued, so you can resample it straight to a pad without reaching for a compressor insert.",
    settings: [
      { name: "Ambience and nothing else", body: "One channel on Slow-Verb, the other Modify at noon so it stays out of the way, Mix around 10 o'clock. A room that was not there." },
      { name: "Tape echo into grain", body: "Channel one Tape Echo, channel two Grain Tumbler, series routing, Blend to taste. The echo feeds the grains, which is a very different thing from the two running side by side." },
      { name: "Glue only", body: "Both Modify knobs at noon, Blend up. No effect at all, just the compressor and saturator. Worth knowing about on a night when nothing else is working." },
    ],
    manual: {
      title: "Chase Bliss: manuals and field guides",
      href: "https://www.chasebliss.com/manuals",
      note: "The Lost + Found field guide lives on Chase Bliss's manuals page. Firmware 2.0 is the current version and 2025 units can be updated to it free through the browser-based Bliss Programmer.",
    },
  },
  {
    id: "xero",
    brand: "Walrus Audio",
    name: "Xero Polylooper",
    kind: "Dual-channel stereo looper",
    slot: "Loop",
    order: 70,
    bought: "18 Aug 2025",
    from: "Reverb, from Steven's Gear Bazaar",
    paid: "$230 plus tax and shipping, $281.15 all in",
    condition: "used",
    defaultOn: true,
    blurb:
      "Two independent loops, each with its own level, pan, speed and direction. The reason it is called Poly is the third mode: instead of forcing the second loop to match the first, it can quantise it to a polyrhythmic multiple, so a three-beat phrase runs against a four-beat one and takes twelve beats to come back around.",
    controls: [
      { k: "Vol 1 / Vol 2", v: "Sliders, one per channel. Silent at the bottom, a little above unity at the top." },
      { k: "Pan 1 / Pan 2", v: "Places each loop in the stereo field. This is most of why the pedal is stereo." },
      { k: "Speed 1 / Speed 2", v: "Half speed (an octave down), normal, or double (an octave up), per channel." },
      { k: "Fwd/Rev 1 / 2", v: "Playback direction, per channel." },
      { k: "Mode", v: "Sync locks everything to the first loop. Unsynced lets each channel run on its own time and drift. Poly quantises loop lengths to polyrhythmic multiples of the first." },
      { k: "Left footswitch", v: "Tap to record, overdub and play on the active channel. Hold to undo." },
      { k: "Right footswitch", v: "Tap to stop. Hold to trigger the speed and reverse effects on the active channel." },
      { k: "Both together", v: "Double-press to swap which channel the footswitches control. Double-hold for full stop, or to erase everything." },
    ],
    power: "9 V DC centre-negative. Walrus ask for a supply capable of at least 300 mA.",
    mA: 300,
    bypass: "True bypass.",
    io: "Stereo on four 1/4\" jacks: in left and right, out left and right. A fifth 1/4\" jack takes an external footswitch. MIDI in and thru on 1/8\" TRS Type A, carrying clock and CC, and passing clock downstream. USB-C for firmware.",
    size: "Roughly 4.6 x 3.9 x 2.3 inches including jacks.",
    withJackson:
      "Last in the chain, so it captures whatever the board and the guitar did rather than a dry signal you then have to dress up. This is also the most useful practice tool you own that is not the change drill: loop four bars of a chord change at half speed, then play over it at normal speed and hear what your timing actually does.",
    intoXL:
      "The interesting question is which machine is the clock, and the honest answer is: the XL, always. Send MIDI clock from an XL output to the Xero's mini-MIDI in and the loops line up with the sequence, which means a loop you captured on the pedal can be resampled into the XL and it will still be in time. Set the XL's Looper input to the line pair you plugged the Xero into, or capture it as an audio track and chop it. Two brains is how automation disagrees, and it is how loops drift too: let the XL count.",
    settings: [
      { name: "One loop, honestly", body: "Mode to Sync, channel 1 only, everything at normal speed and forward. Learn the footswitches before you learn the tricks." },
      { name: "Three against four", body: "Mode to Poly. Record four bars on channel 1, then a three-beat figure on channel 2. It takes twelve beats to repeat, and it will suggest a part you would not have written." },
      { name: "Octave-down bed", body: "Channel 2 at half speed and reversed, panned wide, Vol 2 low. A pad underneath the thing you are actually playing." },
    ],
    manual: {
      title: "Walrus Audio: manuals",
      href: "https://www.walrusaudio.com/pages/manuals",
      note: "Walrus keep the Xero manual on their manuals index. The pedal takes firmware updates over USB-C through walrusaudio.io in Chrome, and it has had several since launch, so check the version before you chase a bug.",
    },
  },
];

export function chainOf(on: Record<string, boolean>) {
  return PEDALS.filter((p) => on[p.id]).sort((a, b) => a.order - b.order);
}

export function drawOf(list: Pedal[]) {
  return list.reduce((sum, p) => sum + (p.mA ?? 0), 0);
}

/** Total if every pedal were on at once, ignoring the ones nobody published. */
export const FULL_BOARD_MA = drawOf(PEDALS);
