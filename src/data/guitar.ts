import type { Section } from "./types";

export const GUITAR_SECTIONS: Section[] = [
  {
    slug: "spec",
    part: "guitar",
    title: "What you actually own",
    kicker: "Jackson American Series Soloist SL2 DX",
    blurb: "US-built (Corona, California) neck-through shred guitar. A well-made guitar with low action and light strings is easier to learn on than a cheap one, with one exception: the bridge floats, and the strings are clamped at both ends.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Neck and board", v: "3-piece maple, neck-through-body, graphite reinforced. 25.5″ scale, 24 jumbo stainless steel frets (they will not wear), ebony board with a 12″–16″ compound radius: rounder near the nut for chords, flatter up high for bends. Glow-in-the-dark side dots." },
          { k: "Pickups", v: "Seymour Duncan JB (TB-4) at the bridge, hot and bright, the classic rock/metal humbucker. Seymour Duncan '59 (SH-1N) at the neck, warm and vintage. One volume, one tone, 5-way blade." },
          { k: "Bridge", v: "Floyd Rose 1500 Series double-locking tremolo with a locking nut (confirmed: yours is the trem version, not the HT hardtail). The 1500 is the import 1000-series bridge with stainless screws and a push-in arm. Two things follow: daily tuning is fine tuners only, and string changes are one at a time." },
          { k: "Strings", v: "Ships with nickel-plated steel .009–.042. Stay on exactly that gauge for the first few months; changing gauge on a Floyd means rebalancing springs." },
          { k: "Strap buttons", v: "Dunlop dual-locking. A normal strap will not fit without the supplied adapters or Straplok ends. Worth sorting before you try to stand up with it." },
          { k: "Output", v: "Standard 1/4″ jack, passive electronics, no battery." },
        ],
      },
      { type: "h", text: "The 5-way switch, from Jackson's own wiring sheet" },
      { type: "widget", name: "pickup" },
      {
        type: "p",
        text: "All five positions are hum-cancelling. For lo-fi and R&B chords into the MPC you will live on 5, and rolling the volume knob back to 7 on a driven amp cleans it up before you learn to switch channels.",
      },
    ],
  },
  {
    slug: "news",
    part: "guitar",
    title: "What's new around this guitar",
    kicker: "Checked 16 Sep 2026",
    blurb: "Guitars do not get firmware. Nothing about the SL2 DX itself has changed since the March 2025 Corona launch. This is the owner-relevant stuff around it.",
    blocks: [
      {
        type: "lead",
        text: "CURRENT · American Series Soloist SL2 DX · Seymour Duncan JB + '59 · Floyd Rose 1500 · no recall, no silent spec swap.",
      },
      {
        type: "callout",
        kind: "tip",
        title: "Do not confuse SL2 DX with SL2MG",
        text: "SL2MG is the EMG 81/85 American Series sibling. Same shape, different pickups, often a 3-way switch. Listings, reviews and forum threads mix the two names constantly.",
      },
      { type: "widget", name: "news" },
      {
        type: "callout",
        kind: "warn",
        title: "Dry-season Floyd check",
        text: "If the guitar just came in from summer humidity into air-conditioning or early heat, check neck relief at the heel wheel and confirm the Floyd baseplate is still parallel to the body before you fight the fine tuners. Unlock the nut first. Full procedure is in Floyd Rose survival.",
      },
    ],
  },
  {
    slug: "floyd",
    part: "guitar",
    title: "Floyd Rose survival",
    kicker: "Read before tuning",
    blurb: "The bridge pivots on two posts. String tension pulls it toward the neck; springs in the back cavity pull it the other way. Changing any one string's tension changes every other string's pitch.",
    blocks: [
      {
        type: "p",
        text: "When balanced, the baseplate sits parallel to the body and the bar can dive or pull up. A broken string throws the whole thing sharp and tips the bridge into the body.",
      },
      {
        type: "steps",
        id: "floyd",
        items: [
          {
            n: "01",
            title: "Daily tuning: fine tuners only",
            body: "Once the three nut clamps are locked, never turn the headstock tuners; you will snap strings. Tune with the six fine tuners on the bridge. Clockwise sharpens, counterclockwise flattens. A clip-on tuner on the headstock works fine.",
            note: "If a fine tuner runs out of travel: unlock that string's nut clamp with the 3 mm hex, back the fine tuner to the middle of its range, tune at the headstock, re-lock, touch up with the fine tuner.",
          },
          {
            n: "02",
            title: "Full retune, Floyd Rose's own procedure",
            body: "Loosen the three nut clamps. Set all six fine tuners to mid-range. Tune from low E up. Re-check low E: if it went flat, tune the first five strings slightly sharp and the high E to pitch; if sharp, the reverse. Repeat until they stop moving. Check the baseplate is parallel to the body. Lock the nut. Final touch with fine tuners.",
            note: "If the plate tilts up, the springs are too loose: backplate off, spring-claw screws clockwise a quarter turn, retune, repeat. Tilted back, counterclockwise.",
          },
          {
            n: "03",
            title: "Changing strings without drama",
            body: "One string at a time, same gauge. Per string: loosen that nut clamp, loosen the saddle screw (3 mm hex), pull the old string, cut the ball end off the new one, seat the plain end in the saddle, snug the screw (do not overtighten), thread the locking tuner, tune, stretch the string along its length and retune until it holds, center the fine tuner, lock the nut, final tune.",
            note: "Tools: 3 mm hex, wire cutters, string winder, tuner. Pros block the bridge with a cloth-wrapped wood block and change all six at once; do that only after you have done it one at a time a few times.",
          },
          {
            n: "04",
            title: "Consider blocking the trem for now",
            body: "Free option: with the guitar in tune, wedge a small wood block or a stack of picks between the tremolo block and the cavity wall on the bridge side so the bridge cannot move, and tighten the springs slightly so it stays seated. Now it tunes like a hardtail, bends do not drag the other strings flat, a broken string does not detune the rest, and string changes are painless. Reversible in two minutes.",
            note: "A Tremol-No (about $60–80) does the same with thumbwheels and no wood. If you never use the bar, keep it blocked.",
          },
        ],
      },
    ],
  },
  {
    slug: "plug",
    part: "guitar",
    title: "Plugging in",
    kicker: "Amp or MPC",
    blurb: "Clean guitar through the built-in effects is acceptable. High-gain tones are not. For chill chords into a beat it is exactly right.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Into the MPC XL", v: "Cable into the front [Inst 1] jack, flip the Rear/Front switch under [Gain 1] to Front, [Stereo/Mono] to Mono. Main Mode → New Track → Audio. In the track's I/O tab: Audio In = Input 1, Monitor = Auto. Raise Gain 1 until it peaks without clipping. [Dir/Main] toward Direct while playing." },
          { k: "A real amp", v: "Boss Katana-50 Gen 3: a clean channel for chords, a \"Brown\" high-gain channel, a built-in tuner, a headphone jack for the apartment, app editing. About $300. Silent option: a Positive Grid Spark Neo Core headphone amp, about $100." },
          { k: "Picks and a tuner", v: "Medium picks around 0.73–0.88 mm to start; go thicker later for lead. A clip-on tuner (Snark, D'Addario) or the tuner in the Katana. Keep nails on the fretting hand short." },
        ],
      },
    ],
  },
  {
    slug: "hold",
    part: "guitar",
    title: "Holding it",
    kicker: "Week 1",
    blurb: "Posture first. A sharply bent fretting wrist is how people hurt themselves.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Sitting", v: "Guitar on the right leg, both feet flat, back straight, shoulders level. The waist of the Soloist body sits on your thigh. If your fretting wrist bends sharply, angle the neck up a little." },
          { k: "Standing", v: "Strap so the guitar sits where it does when seated. Too low looks cool and makes chords harder. Sort the Dunlop strap locks first." },
          { k: "Pick grip", v: "Pick between the pad of the thumb and the side of the index finger, index pointing toward the tip. Expose a few millimeters for single notes, more for strumming. Hold firmly, not tightly; the pick should be able to give a little when it hits a string." },
          { k: "Fretting hand", v: "Thumb on the middle of the back of the neck, roughly opposite your middle finger. Play on the fingertips, arched, so you do not touch the string below. Press right behind the fret wire, on the headstock side, not in the middle of the space. Wrist fairly straight, elbow relaxed away from your body." },
          { k: "Finger numbers", v: "1 index, 2 middle, 3 ring, 4 pinky. T for thumb. Every diagram uses these." },
          { k: "Tuning", v: "Standard: E A D G B E, thick to thin. Strings are numbered 1 = thin high E through 6 = thick low E. On this guitar, daily tuning is fine tuners only." },
        ],
      },
      {
        type: "h",
        text: "Reading chord boxes and tab",
      },
      {
        type: "kvs",
        items: [
          { k: "Chord box", v: "Six vertical lines, thick low E on the left. Horizontal lines are frets; the thick bar at the top is the nut. Dots show where fingers go, the number in the dot is the finger. O above a string means play it open, X means do not play it." },
          { k: "Tab", v: "Six lines again but flipped: the top line is the 1st (thin E) string. Numbers are fret numbers, 0 is open, stacked numbers are played together. Symbols: h hammer-on, p pull-off, b bend, / slide, ~ vibrato, PM palm mute, x muted." },
          { k: "Shorthand", v: "Six numbers, low E to high E, fret per string. D major is x-x-0-2-3-2: skip the two thickest strings, D open, then frets 2, 3, 2." },
        ],
      },
    ],
  },
  {
    slug: "chords",
    part: "guitar",
    title: "The eight chords that unlock hundreds of songs",
    kicker: "JustinGuitar Grade 1 order",
    blurb: "Learn them in this order, two at a time, and do not touch F until month three. Check each chord by picking the strings one at a time: every one should ring.",
    blocks: [
      {
        type: "p",
        text: "If one buzzes, the finger is too far from the fret; if one is dead, a neighboring finger is leaning on it. Tap a diagram to hear a rough strum — then check it on the guitar.",
      },
      { type: "widget", name: "chords" },
      {
        type: "p",
        text: "Anchor fingers save you: going D to A, finger 1 can stay near fret 2. Going E to Am, the whole shape moves down one string without changing. Going Am to Em, lift finger 1. Practice the transitions, not the chords.",
      },
    ],
  },
  {
    slug: "drill",
    part: "guitar",
    title: "One-minute changes",
    kicker: "The drill that makes chords usable",
    blurb: "Pick two chords. Switch back and forth for sixty seconds and count every change (D to A to D is two). Do not strum, just land the shape. Grade 1 target is 30 a minute on any pair; 60 is a stretch goal.",
    blocks: [
      {
        type: "p",
        text: "Write the number down every day; the number going up is the whole point. This page counts for you and keeps the log.",
      },
      { type: "widget", name: "drill" },
    ],
  },
  {
    slug: "strum",
    part: "guitar",
    title: "Strumming",
    kicker: "Rhythm first, chords second",
    blurb: "Weeks 1–3: four down-strums per bar, one per beat, with a metronome at 60–80 BPM. Strum from the wrist, not the elbow, and keep the hand moving even on beats you skip.",
    blocks: [
      {
        type: "p",
        text: "Then learn the one pattern that covers most pop and rock, which JustinGuitar calls \"Old Faithful.\" Grade 1 pass is this pattern clean at 80 BPM.",
      },
      { type: "widget", name: "strum" },
      { type: "widget", name: "metronome" },
    ],
  },
  {
    slug: "power",
    part: "guitar",
    title: "Power chords and palm muting",
    kicker: "This is a Jackson",
    blurb: "Two notes, no third, so they are neither major nor minor and sound huge with gain. Switch position 1, tone up, amp on the driven channel.",
    blocks: [
      {
        type: "p",
        text: "The shapes are movable: learn one, slide it, and you know all twelve.",
      },
      {
        type: "kvs",
        items: [
          { k: "Root on the 6th string", v: "Finger 1 on string 6 at fret n, finger 3 on string 5 at n+2, finger 4 on string 4 at n+2 (or finger 3 flattened across both). G5 is 3-5-5-x-x-x, A5 is 5-7-7-x-x-x. Strum only those three strings; let the underside of finger 1 rest on the thin strings to mute them." },
          { k: "Root on the 5th string", v: "Same shape one string down: x-n-(n+2)-(n+2)-x-x. C5 is x-3-5-5, D5 is x-5-7-7." },
          { k: "Open shapes", v: "E5 = 0-2-2-x-x-x, A5 = x-0-2-2-x-x." },
          { k: "Palm muting", v: "Rest the edge of the picking-hand palm on the strings right where they leave the bridge saddles. On a Floyd that is on the saddle blocks themselves; too far forward and it chokes the note dead. All downstrokes. Lift the palm off for the accented hits." },
          { k: "Riffs that teach it", v: "Iron Man (root-6 power chords with slides), Enter Sandman (open low E with palm mutes), You Really Got Me (fast power-chord shifts). Lessons for all three are on JustinGuitar and Andy Guitar." },
        ],
      },
    ],
  },
  {
    slug: "scale",
    part: "guitar",
    title: "Your first scale: A minor pentatonic, box 1",
    kicker: "Month 3",
    blurb: "A box is a fret window where every string has exactly two notes. This one lives at frets 5–8 with the root A on string 6 fret 5. Slide the whole shape to fret 3 and it is G minor pentatonic; fret 7, B minor.",
    blocks: [
      {
        type: "p",
        text: "Finger 1 takes fret 5, finger 3 fret 7, finger 4 fret 8. Practice: start and end on the low root, slow, with the metronome. Ascend, descend, then improvise over any A minor or C major backing track, or over your own lo-fi loop in A minor coming out of the MPC. This scale over a swung beat is where the two halves of this manual meet.",
      },
      { type: "widget", name: "scale" },
    ],
  },
  {
    slug: "weeks",
    part: "guitar",
    title: "Twelve weeks, twenty minutes a day",
    kicker: "Check them off",
    blurb: "Every session: 1 minute tuning, 2 minutes finger stretches and a 1-2-3-4 crawl on one string, 5 minutes on the chord of the week, 4 minutes of one-minute changes, 4 minutes strumming with the metronome, 4 minutes playing an actual song.",
    blocks: [
      {
        type: "p",
        text: "Short daily beats long weekly; calluses need repetition, not heroics.",
      },
      { type: "widget", name: "weeks" },
    ],
  },
  {
    slug: "songs",
    part: "guitar",
    title: "Songs, by what they teach",
    kicker: "Free video lessons exist for all of these",
    blurb: "Play actual songs as soon as the chords exist. That is the point of Grade 1.",
    blocks: [{ type: "widget", name: "songs" }],
  },
  {
    slug: "pain",
    part: "guitar",
    title: "Pain, calluses, and the mistakes everyone makes",
    kicker: "2 to 4 weeks",
    blurb: "Fingertips are sore for the first 2–4 weeks, then calluses form and it stops.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Fingertips", v: "Short sessions, daily. Do not press harder than needed: press lighter until the note buzzes, then add a hair. Sharp pain in a joint or wrist is not normal; stop and fix the posture." },
          { k: "Muted strings", v: "Almost always a finger that is flat instead of on its tip, or a thumb that has crept over the top of the neck. Thumb behind, fingers arched, nails short." },
          { k: "Buzzing", v: "Finger too far from the fret. Slide it up until it is just behind the wire." },
          { k: "Bent wrist", v: "Raise the neck, bring the elbow in, or raise the strap. A sharply bent fretting wrist is how people hurt themselves." },
          { k: "Practicing fast and sloppy", v: "Slow with a metronome beats fast without one every time. Speed is a side effect of clean." },
          { k: "Starting with solos", v: "Guitar World's number one beginner mistake. Chords and rhythm first; the pentatonic box in month three is early enough." },
          { k: "Old strings", v: "Dead strings sound dull and make everything harder. On a Floyd, change them one at a time and same gauge." },
        ],
      },
      { type: "widget", name: "notes" },
    ],
  },
];
