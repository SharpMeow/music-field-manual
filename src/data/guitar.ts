import type { Section } from "./types";

export const GUITAR_SECTIONS: Section[] = [
  {
    slug: "spec",
    part: "guitar",
    title: "What you actually own",
    kicker: "Jackson American Series Soloist SL2 DX",
    blurb: "This is a proper guitar. Corona-built, neck-through, light strings, low action — easier to learn on than a cheap one, with one honest catch: the bridge floats, and the strings are clamped at both ends. We'll treat it kindly.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Neck and board", v: "3-piece maple, neck-through-body, graphite reinforced. 25.5″ scale, 24 jumbo stainless steel frets (they will not wear out on you), ebony board with a 12″–16″ compound radius: rounder near the nut for chords, flatter up high for bends. Glow-in-the-dark side dots for when the lamp is off and the MPC is on." },
          { k: "Pickups", v: "Seymour Duncan JB (TB-4) at the bridge — hot, bright, the classic rock/metal humbucker. Seymour Duncan '59 (SH-1N) at the neck — warm, vintage, the one you'll live on for chords into the sampler. One volume, one tone, 5-way blade." },
          { k: "Bridge", v: "Floyd Rose 1500 Series double-locking tremolo with a locking nut (yours is the trem version, not the HT hardtail). Daily tuning is fine tuners only. String changes are one at a time. I know that sounds fussy. The Floyd chapter is why, and it's not as scary as the internet makes it." },
          { k: "Strings", v: "Ships with nickel-plated steel .009–.042. Stay on that gauge for a few months. Changing gauge on a Floyd means rebalancing springs, and you do not need that fight while you're still making D ring." },
          { k: "Strap buttons", v: "Dunlop dual-locking. A normal strap will not click in without the adapters or Straplok ends. Sort this before you try to stand up with it. I've watched too many first nights end with the guitar hitting the floor." },
          { k: "Output", v: "Standard 1/4″ jack, passive electronics, no battery. Plug in and it makes a sound. That's the whole electronics lesson for week one." },
        ],
      },
      { type: "h", text: "The 5-way switch, from Jackson's own wiring sheet" },
      { type: "widget", name: "pickup" },
      {
        type: "p",
        text: "All five positions are hum-cancelling, which is a kindness in a room with a sampler. For lo-fi and R&B chords into the MPC you'll live on 5 — the neck. Roll the volume back to about 7 on a driven amp and it cleans up before you've learned to switch channels. That's a real trick, not a metaphor.",
      },
    ],
  },
  {
    slug: "news",
    part: "guitar",
    title: "What's new around this guitar",
    kicker: "Checked 16 Sep 2026",
    blurb: "Guitars do not get firmware, which is one of their charms. Nothing about the SL2 DX itself has changed since the March 2025 Corona launch. This is the owner stuff around it — so you don't get sent down a listing for the wrong guitar.",
    blocks: [
      {
        type: "lead",
        text: "CURRENT · American Series Soloist SL2 DX · Seymour Duncan JB + '59 · Floyd Rose 1500 · no recall, no silent spec swap.",
      },
      {
        type: "callout",
        kind: "tip",
        title: "SL2 DX is not SL2MG",
        text: "SL2MG is the EMG 81/85 sibling. Same silhouette, different pickups, often a 3-way. Listings and forum threads mix the names constantly. If the pickup story doesn't match the '59 and the JB, it isn't your guitar.",
      },
      { type: "widget", name: "news" },
      {
        type: "callout",
        kind: "warn",
        title: "Dry-season Floyd check",
        text: "Came in from summer humidity into air-conditioning? Before you fight the fine tuners, check neck relief at the heel wheel and glance at the Floyd — baseplate should sit parallel to the body. Unlock the nut first. Full walkthrough is in Floyd Rose survival. Don't skip it just because last month it was fine.",
      },
    ],
  },
  {
    slug: "floyd",
    part: "guitar",
    title: "Floyd Rose survival",
    kicker: "Read this before you twist a tuner",
    blurb: "Sit down. We're not fighting the Floyd tonight — we're learning the one rule it actually has. The bridge pivots. String tension pulls it toward the neck; springs in the back pull the other way. Change one string's tension and every other string's pitch moves. That's not a defect. That's the design.",
    blocks: [
      {
        type: "p",
        text: "When it's balanced, the baseplate sits parallel to the body and the bar can dive or pull up. A broken string throws the whole thing sharp and tips the bridge into the body. That's the moment people swear off Floyds. You won't, because you'll do this in order.",
      },
      {
        type: "steps",
        id: "floyd",
        items: [
          {
            n: "01",
            title: "Daily tuning: fine tuners only",
            body: "Once those three nut clamps are locked, leave the headstock tuners alone. Turning them with the nut locked is how strings snap, and it's always the one you just stretched. Tune with the six fine tuners on the bridge. Clockwise sharpens, counterclockwise flattens. A clip-on on the headstock is plenty.",
            note: "Fine tuner run out of travel? Unlock that one clamp with the 3 mm hex, wind the fine tuner back to the middle, tune at the headstock, re-lock, kiss it with the fine tuner. That's a two-minute job, not a setup.",
          },
          {
            n: "02",
            title: "Full retune, Floyd Rose's own procedure",
            body: "Loosen the three nut clamps. Set all six fine tuners to mid-range. Tune from low E up. Re-check low E: if it went flat, give the first five a hair sharp and the high E to pitch; if it went sharp, the reverse. Repeat until they stop chasing each other. Check the plate is parallel. Lock the nut. Fine tuners for the last inch.",
            note: "Plate tilting up? Springs too loose: backplate off, claw screws clockwise a quarter turn, retune, repeat. Tilted back, counterclockwise. Small turns. The guitar will tell you.",
          },
          {
            n: "03",
            title: "Changing strings without drama",
            body: "One string at a time, same gauge. Per string: loosen that nut clamp, loosen the saddle screw (3 mm hex), pull the old one, cut the ball end off the new one, seat the plain end in the saddle, snug the screw (firm, not gorilla), thread the locking tuner, tune, stretch along the length and retune until it holds, center the fine tuner, lock the nut, final tune. Then the next string. Put the kettle on. This is a session, not a race.",
            note: "Tools: 3 mm hex, cutters, winder, tuner. Pros block the bridge and change all six at once. Do that after you've done it one-at-a-time a few times and you trust your hands.",
          },
          {
            n: "04",
            title: "Blocking the trem is allowed",
            body: "You're allowed to make it a hardtail while you learn. In tune, wedge a small wood block or a stack of picks between the tremolo block and the cavity wall on the bridge side so it can't move, and snug the springs a little so it stays seated. Now it tunes like a normal guitar, bends don't drag the others flat, a broken string doesn't detune the rest, and string changes are boring in the best way. Two minutes to undo when you want the bar back.",
            note: "A Tremol-No (about $60–80) does the same with thumbwheels. If you never use the bar, leave it blocked. No one is grading you on dives.",
          },
        ],
      },
    ],
  },
  {
    slug: "plug",
    part: "guitar",
    title: "Plugging in",
    kicker: "Amp, board, or MPC",
    blurb: "Three places the Jackson can end up: the amp in the room, the sampler on the desk, or the board in between. Clean guitar through the XL's effects is perfectly respectable. High-gain tones through those same effects are not, which is what the Katana and the dirt pedals are for.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "The amp in the room", v: "Boss Katana Artist Gen 3, 100 W into a 12″ Waza speaker. Five amp characters, five effect sections, a 3-band EQ with Contour, Resonance and Presence. Power Control drops it to 50 W or 0.5 W. That last one is the apartment setting, and it is the reason a 100-watt amp is not a mistake in a flat. Clean for chords into the sampler, Brown when the Jackson asks for it." },
          { k: "Headphones, quietly", v: "The Positive Grid Spark NEO you bought alongside the guitar is the no-amp option: wireless, its own amp models, nobody downstairs needs to know. The Katana will also do it: the Line Out and the phones jack are cab-simulated, so headphones off the amp sound like an amp rather than like a buzzing transistor." },
          { k: "Bluetooth, since the adaptor is in there", v: "The BT-Dual sitting in the Katana gives you two separate things. Bluetooth audio streams a backing track into the amp from your phone. Bluetooth MIDI lets a phone or a computer drive the amp's own controls. Handy, and entirely separate from the pedals. The board never touches it." },
          { k: "Into the MPC XL", v: "Guitar alone: cable into the front Inst 1 jack, flip the Rear/Front switch under Gain 1 to Front. That switch is the one everyone misses. Stereo/Mono to Mono. New Track → Audio. I/O: Audio In = Input 1, Monitor = Auto. Raise Gain 1 until it peaks without clipping. Dir/Main toward Direct while you play, so you are not listening through the latency and blaming your hands." },
          { k: "Picks and a tuner", v: "Medium picks, 0.73–0.88 mm, to start. Thicker later for lead, once the wrist is loose. Clip-on tuner (Snark, D'Addario) or the one in the Katana. Fretting-hand nails short. That's not aesthetic. That's so the fingertip, not the nail, puts the string down." },
        ],
      },
      { type: "h", text: "Where the board goes" },
      {
        type: "p",
        text: "You have three routes and they are not interchangeable. Pick one per session rather than rewiring mid-song.",
      },
      {
        type: "table",
        columns: ["Route", "What it gets you", "What it costs"],
        rows: [
          [
            "Board → front of the amp",
            "The normal one. Dirt and pitch hit the preamp the way they were designed to, and the amp's own character is part of the sound.",
            "The amp's input is mono, so anything stereo at the end of your board folds down. Turn the Katana's own reverb and delay off or you are stacking two of everything.",
          ],
          [
            "Board → amp's series FX loop",
            "Time and texture land after the preamp distortion, so delays and reverbs stay clear instead of being chewed up by gain.",
            "That loop is mono and TS. Two of your pedals are stereo, and both of them collapse in it. Good for the dirt-free half of the board, not for the whole thing.",
          ],
          [
            "Board → XL line inputs",
            "The sampler hears the finished sound, in stereo, at the level it wants. This is the route for making records rather than making noise.",
            "No amp in the signal at all, so high-gain tones sound like a fizzing DI unless something in the chain is doing speaker duty.",
          ],
        ],
      },
      {
        type: "callout",
        kind: "trap",
        title: "A loud board is not an instrument-level signal",
        text: "Inst 1 expects a guitar. A compressor with the output up, or a distortion with Level past noon, is pushing something closer to line level at it, and Gain 1 runs out of room at the bottom of its travel. If the meters are hot with the gain all the way down, stop turning it and move to the rear TRS 3/4 line pair instead. Full walkthrough in The board into the XL.",
      },
      {
        type: "callout",
        kind: "tip",
        title: "The quiet way to record the amp",
        text: "The Katana's Line Out is cab-simulated and balanced. Into the XL's rear TRS 3–4 at line level, it gives you the amp's voice with the room and the neighbours left out. Power Control at 0.5 W first if you still want the power amp working for you.",
      },
    ],
  },
  {
    slug: "board",
    part: "guitar",
    title: "What's on the board",
    kicker: "Eight pedals",
    blurb: "Seven of these arrived within three weeks of the guitar, and every one of them before the amp did. That is not a criticism, it is a diagnosis: this is a board bought by somebody who knew what they wanted to sound like before their hands could do it yet. The hands catch up. Meanwhile, two of these will genuinely make you practise more, and the rest can wait without going stale.",
    blocks: [
      {
        type: "lead",
        text: "Guitar → compressor → pitch → dirt → modulation → glitch → multi-FX → reverb → looper → amp or XL. Tap a pedal to read it.",
      },
      { type: "widget", name: "board" },
      { type: "h", text: "The two to use this month" },
      {
        type: "p",
        text: "The Cali76, because the JB at the bridge is much hotter than the '59 at the neck, and a compressor makes that stop being a volume problem. It also flatters an uneven right hand, which in week six is most right hands, including yours and including mine. Leave it on and forget it exists.",
      },
      {
        type: "p",
        text: "The Xero, because a looper is a practice tool wearing a performance pedal's clothes. Record four bars of D to A at half speed, play over it at normal speed, and you will hear exactly what your timing is doing in a way the metronome cannot show you. That is the change drill with a backing track. The other six are for when the changes are automatic.",
      },
      { type: "h", text: "The buy log" },
      {
        type: "table",
        columns: ["Pedal", "What it is", "Bought", "Paid"],
        rows: [
          ["Origin Effects Cali76 Stacked", "Two-stage FET compressor", "28 Jul 2025, Amazon", "$419"],
          ["Cornerstone Nucleo", "Stereo ambient reverb, Paul Davids signature", "29 Jul 2025, direct", "$449"],
          ["Chase Bliss Lost + Found", "Stereo multi-effect, twelve algorithms", "1 Aug 2025, chasebliss.com", "$399"],
          ["Lichtlaerm Medusa", "HM-2 style distortion with a gate and a loop", "11 Aug 2025, Cult FX", "$219"],
          ["Lichtlaerm Nostalgia", "Lo-fi modulator", "11 Aug 2025, Cult FX", "$219"],
          ["DigiTech HammerOn", "Momentary pitch shifter, used", "15 Aug 2025, Reverb", "$233.99"],
          ["Walrus Audio Xero Polylooper", "Dual-channel stereo looper, used", "18 Aug 2025, Reverb", "$230"],
          ["OBNE Purr-ting", "Stereo glitch delay and reverb", "25 Jan 2026, B's Music Shop", "$329"],
        ],
      },
      {
        type: "p",
        text: "About $2,500 before tax and shipping. The Purr-ting was bought four days after Old Blood Noise announced the Parting, and the Nucleo went in the day after the Cali76, which together tell you something about how this board gets assembled.",
      },
      { type: "h", text: "What it is worth now" },
      {
        type: "p",
        text: "Worth knowing for two reasons. One is that a renters or valuables policy pays out on what a thing is worth today, not what the receipt says, and an unscheduled board is usually under-covered. The other is less comfortable: a board is easier to buy than to play, and knowing the resale number makes selling a pedal you never reach for feel like a decision rather than a defeat.",
      },
      { type: "widget", name: "worth" },
      {
        type: "callout",
        kind: "warn",
        title: "Where these numbers came from",
        text: "Control names, jacks and current figures here are taken from the builders' own published specs and manuals. Two are soft and are flagged as such on the pedal itself: Lichtlaerm have never published a current draw for the Medusa, so it is counted as unknown rather than guessed at, and the Lost + Found has two figures in circulation, 200 and 270 mA, so the budget uses the larger one. Manual links go to the builder. This book does not host anybody else's manual.",
      },
    ],
  },
  {
    slug: "chain",
    part: "guitar",
    title: "Order, power, and where stereo starts",
    kicker: "Living with eight pedals",
    blurb: "Three things decide whether a board is a pleasure or a fault-finding exercise: what order the pedals go in, whether the supply can actually carry them, and the exact point in the chain where one cable becomes two. Get those right once and you can stop thinking about them.",
    blocks: [
      { type: "h", text: "Why this order" },
      {
        type: "kvs",
        items: [
          { k: "1. Cali76", v: "Origin's own advice is compressor first, before any drive, and it is right for two reasons. A compressor sets the dynamic range everything downstream will work from, and it does that best on a raw pickup signal. It also hands the pitch shifter behind it exactly what a pitch detector wants: one note at a steady level." },
          { k: "2. HammerOn", v: "Pitch tracking wants a clean, monophonic, consistent signal, which is what it just got. Put it after the distortion instead and it will hear harmonics rather than a note, and it will tell you about it." },
          { k: "3. Medusa", v: "Dirt goes after dynamics and pitch, before everything that makes space. Its gate is keyed from its own input, which means it gates what you played, not what the delay behind it is still doing. That is the right way round." },
          { k: "4. Nostalgia", v: "Modulation after dirt. Chorus and warble on a distorted signal is a texture; distortion on a modulated signal is mud. This is also the last mono pedal in the chain." },
          { k: "5. Purr-ting", v: "Where stereo begins. It is also the first genuinely time-based pedal, and its Chance knob wants a settled signal to make decisions about." },
          { k: "6. Lost + Found", v: "Stereo in, stereo out, and Glue at the end of its internal chain acting as a master compressor for everything you have stacked up so far." },
          { k: "7. Nucleo", v: "Reverb after delay, which is the conventional order for the conventional reason: a delay feeding a reverb sounds like a room with echoes in it, and a reverb feeding a delay sounds like a mistake. Ninety-second decays also want to be near the end, where nothing downstream is going to distort them." },
          { k: "8. Xero", v: "Last, always. A looper captures whatever reaches it, so putting it at the end means you loop the finished sound rather than a dry signal you then have to dress up every time round." },
        ],
      },
      {
        type: "callout",
        kind: "tip",
        title: "The one rule worth memorising",
        text: "Dynamics, then pitch, then dirt, then modulation, then time, then the looper. Every board you will ever build is a variation on that sentence, and the variations are usually somebody solving a specific problem rather than disagreeing with it.",
      },
      { type: "h", text: "Where stereo starts" },
      {
        type: "p",
        text: "Four pedals are mono and four are stereo, and they are not interleaved, which is lucky. Mono runs from the guitar to the Nostalgia. From the Purr-ting onward you are in stereo, and the two amps' worth of signal has to end up somewhere: two amps, or the XL's rear line pair. Note that the stereo pedals do not agree about jacks. Some carry stereo on one TRS jack and some use two separate TS jacks, so half the hops below need a breakout rather than a patch cable.",
      },
      {
        type: "table",
        columns: ["Hop", "What the cable is"],
        rows: [
          ["Nostalgia out → Purr-ting in", "One ordinary TS patch cable. The Purr-ting takes mono on a TS jack quite happily and splits internally."],
          ["Purr-ting out → Lost + Found in", "The Purr-ting carries stereo on a single TRS jack; the Lost + Found wants two separate jacks. That is a TRS to dual-TS breakout, not a patch cable."],
          ["Lost + Found out → Nucleo in", "Two separate jacks into one TRS jack, so the same breakout cable again, pointing the other way. You own one of these; you need two."],
          ["Nucleo out → Xero in", "Two TS cables, left and right. Both use separate jacks per side, so this one is easy."],
          ["Xero out → destination", "Two TS cables to two amp inputs, or to the XL's rear TRS 3–4 line pair."],
        ],
      },
      {
        type: "callout",
        kind: "trap",
        title: "The Katana's loop is mono",
        text: "It is a single series TS send and return, so anything stereo you put in it folds down to one side and you lose the pan spread you just paid for. The stereo end of this board wants two amp inputs or the XL, not the amp's loop. The Purr-ting can be set to Mono routing if you genuinely want it in the loop.",
      },
      { type: "h", text: "Power, and the number that matters" },
      {
        type: "p",
        text: "The XPND kit is a 10,000 mAh cell feeding a Gateway that converts USB-C to one regulated 9 V rail, and then an eight-plug daisy chain. The total is rated at 1500 mA. Every pedal switched on at once asks for about 1618 mA, and that is before the Medusa, for which nobody has published a figure at all. The whole board does not fit. That is not a disaster, it is a fact to design around: the board you actually play at any one time is smaller than the board you own, and the widget above will tell you when tonight's selection has gone over.",
      },
      {
        type: "kvs",
        items: [
          { k: "The daisy chain is not isolated", v: "Eight plugs, one ground, one rail. Four of these pedals are digital. Shared grounds plus digital clocks is the standard recipe for hum and whine, and D'Addario sell a separate Noise Isolator precisely because of it. If a noise appears when one specific pedal is switched on, the pedal probably is not faulty." },
          { k: "Two readings of the spec", v: "D'Addario's support pages also mention 500 mA in connection with this kit. Most likely that is a per-pedal ceiling rather than a total, and every pedal here is under it, the Purr-ting's 350 mA being the largest. The 1500 mA total is the figure the manual is quoted as giving. Worth reading off your own unit before you trust either." },
          { k: "The Black Lion is upstream, not part of the budget", v: "The PG-P Plus is a mains conditioner: eight filtered, surge-protected AC outlets, a live voltage readout and a ground-OK light. It is where the XPND's wall supply plugs in and it is the reason the wall warts have somewhere sensible to live. It supplies no 9 V DC of its own, so it does not raise the milliamp ceiling." },
          { k: "The honest fix", v: "Run the two hungriest digital pedals off the mains rather than the battery, and keep the battery for the analogue half. The Purr-ting alone asks for 350 mA and the Xero for 300, so moving those two takes 650 mA off the chain and puts the rest comfortably inside it. Or accept that this is a two-supply board and stop trying to make one brick carry it." },
        ],
      },
      { type: "h", text: "Noise, and which pedal is lying to you" },
      {
        type: "kvs",
        items: [
          { k: "The Cali76 is buffered, and it is first", v: "That is a good thing here: a buffer at the front drives a long chain of cable without the top end dying. It also means the board is never fully true-bypassed, which matters only if you own a vintage fuzz. You do not." },
          { k: "The Medusa's gate is not a noise solution", v: "It is a performance tool. If you are using it to hide hum, find the hum instead: unplug the daisy chain and run that pedal off the wall for thirty seconds, and you will know within a minute." },
          { k: "Trails and tails", v: "The Lost + Found has a Trails dip switch and the Purr-ting can be buffered-with-trails or true bypass. Decide once. Tails cutting off mid-decay when you stomp is not a fault, it is a setting." },
          { k: "One change at a time", v: "Eight pedals is 255 combinations before you touch a knob. When something sounds wrong, bypass everything, then add pedals back one at a time. This is dull and it works, and it is faster than the clever approach every single time." },
        ],
      },
    ],
  },
  {
    slug: "hold",
    part: "guitar",
    title: "Holding it",
    kicker: "Week 1",
    blurb: "Posture first. I know it feels like stalling. A sharply bent fretting wrist is how people hurt themselves, and then they stop, and then they think they're bad at guitar. You're not. Sit up.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Sitting", v: "Guitar on the right leg, both feet flat, back straight, shoulders level. The waist of the Soloist sits on your thigh. If the fretting wrist is folding, angle the neck up a little. Like you're looking at someone across a table, not at your shoes." },
          { k: "Standing", v: "Strap so the guitar sits where it does when you're seated. Too low looks like a poster and makes C impossible. Sort the Dunlop locks first. I've already said that. I'm saying it again." },
          { k: "Pick grip", v: "Pick between the pad of the thumb and the side of the index, index pointing toward the tip. A few millimeters showing for single notes, more for strumming. Firm, not a death grip — the pick should be allowed to give a little when it hits. If your thumb goes white, that's too hard." },
          { k: "Fretting hand", v: "Thumb on the middle of the back of the neck, roughly opposite your middle finger. Play on the fingertips, arched, so you're not muting the string below. Press just behind the fret wire, headstock side, not in the middle of the space. Wrist fairly straight. Elbow a little away from your ribs. Relax. Then relax again." },
          { k: "Finger numbers", v: "1 index, 2 middle, 3 ring, 4 pinky. T for thumb. Every diagram in this book uses those. Say them out loud the first week if you need to. Nobody's listening." },
          { k: "Tuning", v: "Standard: E A D G B E, thick to thin. String 1 is the thin high E; 6 is the thick low E. Daily tuning on this guitar is fine tuners only. If it won't sit in tune, that's the Floyd chapter, not a new guitar." },
        ],
      },
      {
        type: "h",
        text: "Reading chord boxes and tab",
      },
      {
        type: "kvs",
        items: [
          { k: "Chord box", v: "Six vertical lines, thick low E on the left. Horizontal lines are frets; the thick bar at the top is the nut. Dots are fingers, the number in the dot is which finger. O above a string means play it open. X means don't play it. Don't 'kind of' hit the X strings. That's the buzz." },
          { k: "Tab", v: "Six lines again, but flipped: the top line is the thin E. Numbers are frets, 0 is open, stacked numbers are together. h hammer-on, p pull-off, b bend, / slide, ~ vibrato, PM palm mute, x muted. You'll only need a few of those this month." },
          { k: "Shorthand", v: "Six numbers, low E to high E. D major is x-x-0-2-3-2: skip the two thickest, D open, then 2, 3, 2. Once you can see that on the neck without looking at the page, the chord is yours." },
        ],
      },
    ],
  },
  {
    slug: "chords",
    part: "guitar",
    title: "The eight chords that unlock hundreds of songs",
    kicker: "JustinGuitar Grade 1 order",
    blurb: "Two at a time, in this order, and we are not touching F until month three. I mean it. F is a barre. Barres wait until the hand is ready. Check each chord by picking the strings one at a time — every one should ring. If it doesn't, we'll find out why.",
    blocks: [
      {
        type: "p",
        text: "If one buzzes, the finger is too far from the fret. If one is dead, a neighboring finger is leaning on it. That's the whole diagnosis. Tap a diagram to hear a rough strum, then check it on the guitar — the guitar is the teacher, the diagram is just the map.",
      },
      { type: "widget", name: "chords" },
      {
        type: "p",
        text: "Anchor fingers save you. D to A, finger 1 can stay near fret 2. E to Am, the whole shape steps down one string. Am to Em, lift finger 1. Practice the walk between them, not the postcard of the chord. The drill on the next page is how.",
      },
    ],
  },
  {
    slug: "drill",
    part: "guitar",
    title: "One-minute changes",
    kicker: "The drill that makes chords usable",
    blurb: "Pick two chords. Switch back and forth for sixty seconds and count every landing (D to A to D is two). Don't strum. Just put the shape down. Grade 1 target is 30 a minute on any pair. 60 is showing off, and showing off is allowed later.",
    blocks: [
      {
        type: "p",
        text: "Write the number down every day. The number going up is the whole point — not a pretty Instagram of a D. This page counts for you and keeps the log, because nobody remembers Tuesday's 18.",
      },
      { type: "widget", name: "drill" },
    ],
  },
  {
    slug: "strum",
    part: "guitar",
    title: "Strumming",
    kicker: "Rhythm first, chords second",
    blurb: "Weeks 1–3: four down-strums per bar, one per beat, metronome at 60–80. From the wrist, not the elbow, and keep the hand moving even on the beats you skip. It will feel stupid. Do it anyway. That's how the right hand learns time.",
    blocks: [
      {
        type: "p",
        text: "Then we learn the one pattern that covers most of pop and rock — JustinGuitar calls it Old Faithful. Grade 1 pass is that pattern clean at 80 BPM. Clean beats fast. Fast arrives as a side effect, like calluses.",
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
    blurb: "Two notes, no third, so they're neither major nor minor and they sound huge with gain. Position 1, tone up, amp on the driven channel. This is the part of the guitar you bought it for. We'll still do it slowly.",
    blocks: [
      {
        type: "p",
        text: "The shapes move. Learn one, slide it, and you know all twelve. That's the gift of power chords. Don't sprint to Iron Man until the muting is honest.",
      },
      {
        type: "kvs",
        items: [
          { k: "Root on the 6th string", v: "Finger 1 on string 6 at fret n, finger 3 on string 5 at n+2, finger 4 on string 4 at n+2 (or finger 3 flattened across both). G5 is 3-5-5-x-x-x, A5 is 5-7-7-x-x-x. Strum only those three. Let the underside of finger 1 rest on the thin strings to mute them. That mute is the sound as much as the notes." },
          { k: "Root on the 5th string", v: "Same shape, one string down: x-n-(n+2)-(n+2)-x-x. C5 is x-3-5-5, D5 is x-5-7-7." },
          { k: "Open shapes", v: "E5 = 0-2-2-x-x-x, A5 = x-0-2-2-x-x. These are your friends when you don't want to think." },
          { k: "Palm muting", v: "Rest the edge of the picking-hand palm on the strings right where they leave the bridge saddles. On a Floyd that's on the saddle blocks themselves. Too far forward and it chokes the note dead — slide back a millimeter. All downstrokes. Lift the palm for the accented hits. That's the riff." },
          { k: "Riffs that teach it", v: "Iron Man (root-6, slides), Enter Sandman (open low E, palm mutes), You Really Got Me (fast shifts, later). JustinGuitar and Andy Guitar have the lessons. Play them ugly and slow until they're not ugly." },
        ],
      },
    ],
  },
  {
    slug: "scale",
    part: "guitar",
    title: "Your first scale: A minor pentatonic, box 1",
    kicker: "Month 3",
    blurb: "A box is a little window of the neck where every string has exactly two notes. This one lives at frets 5–8, root A on the low E at fret 5. Slide the whole shape to 3 and it's G minor. To 7, B minor. One shape, twelve neighbourhoods.",
    blocks: [
      {
        type: "p",
        text: "Finger 1 takes fret 5, finger 3 fret 7, finger 4 fret 8. Start and end on the low root. Slow. Metronome. Up, down, then noodle over any A minor or C major backing — or over your own lo-fi loop in A minor coming out of the XL. That last one is where the two halves of this house meet. Take your time getting there. Month three is early enough for heroes.",
      },
      { type: "widget", name: "scale" },
    ],
  },
  {
    slug: "weeks",
    part: "guitar",
    title: "Twelve weeks, twenty minutes a day",
    kicker: "Check them off",
    blurb: "Every sitting: 1 minute tuning, 2 minutes of stretches and a 1-2-3-4 crawl on one string, 5 minutes on the chord of the week, 4 minutes of one-minute changes, 4 minutes strumming with the click, 4 minutes of an actual song. That's twenty. I will take twenty honest minutes over a heroic Saturday you don't repeat.",
    blocks: [
      {
        type: "p",
        text: "Short daily beats long weekly. Calluses are a repetition project, not a pain-tolerance contest. If the fingertips are angry, stop early and come back tomorrow. Tomorrow is the method.",
      },
      { type: "widget", name: "weeks" },
    ],
  },
  {
    slug: "songs",
    part: "guitar",
    title: "Songs, by what they teach",
    kicker: "Free video lessons exist for all of these",
    blurb: "Play actual songs as soon as the chords exist. That's the point of Grade 1 — not a perfect D in the abstract. A song you can get through, ugly, with friends in the room.",
    blocks: [{ type: "widget", name: "songs" }],
  },
  {
    slug: "pain",
    part: "guitar",
    title: "Sore fingertips, and the mistakes everyone makes",
    kicker: "2 to 4 weeks",
    blurb: "The tips will be sore for two to four weeks. Then calluses show up and it stops being a topic. That's not you being weak. That's skin doing its job. Stay with the twenty minutes.",
    blocks: [
      {
        type: "kvs",
        items: [
          { k: "Fingertips", v: "Short sessions, daily. Don't press harder than you need: press lighter until it buzzes, then add a hair. That's the pressure. Sharp pain in a joint or the wrist is not 'working through it.' Stop. Fix the posture. Come back." },
          { k: "Muted strings", v: "Almost always a finger lying flat instead of on its tip, or a thumb that's crept over the top of the neck. Thumb behind, fingers arched, nails short. Look at the hand, not the Instagram." },
          { k: "Buzzing", v: "Finger too far from the fret. Slide it up until it's just behind the wire. If that doesn't fix it, you're not pressing on the fingertip yet. That's week one. Forgive it." },
          { k: "Bent wrist", v: "Raise the neck, bring the elbow in, or raise the strap. A sharply bent fretting wrist is how people get hurt and quietly quit. I would rather you look a bit proper than look cool and inflamed." },
          { k: "Practicing fast and sloppy", v: "Slow with a metronome beats fast without one, every time, for the rest of your life. Speed is what clean turns into when you're not looking." },
          { k: "Starting with solos", v: "Guitar World's number-one beginner mistake, and I still see it every year. Chords and rhythm first. The pentatonic box in month three is early enough. The XL will wait. It has a loop." },
          { k: "Old strings", v: "Dead strings sound dull and make everything harder, so you think you got worse. You didn't. On a Floyd, change them one at a time, same gauge. Put the kettle on." },
        ],
      },
      { type: "widget", name: "notes" },
    ],
  },
];
