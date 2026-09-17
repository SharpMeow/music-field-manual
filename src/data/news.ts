import type { Part } from "./types";

export type NewsKind = "firmware" | "review" | "product" | "owner" | "watch" | "family";

export type NewsItem = {
  id: string;
  part: Part;
  date: string;
  kind: NewsKind;
  title: string;
  body: string;
  source?: string;
};

export const NEWS_CHECKED = "2026-09-16";

export const NEWS: NewsItem[] = [
  {
    id: "mpc-391-current",
    part: "mpc",
    date: "2026-08-18",
    kind: "firmware",
    title: "3.9.1 is still the current XL firmware",
    body: "Akai's Gen 2 firmware page (Live III, XL, Key 37 G2, One G2) still lists 3.9.1. Nothing newer has shipped. If Preferences → Info already says 3.9.1, you are current.",
    source: "Akai MPC Firmware Downloads",
  },
  {
    id: "mpc-391-notes",
    part: "mpc",
    date: "2026-07-24",
    kind: "watch",
    title: "3.9.1 is a stability patch, not a feature dump",
    body: "Release notes: internal maintenance only. Known issues that still bite: rare blank WAV from Audio Mixdown (listen before you delete the project), cancelling a Save can flash the pads, held notes die when you change sequence mid-play, and undo/redo of Clear Sequence in Next Seq Step Sequencer can crash. Expert Sleepers ES-9 still distorts as an interface.",
    source: "MPC 3.9.1 release notes",
  },
  {
    id: "mpc-wifi",
    part: "mpc",
    date: "2026-07-10",
    kind: "owner",
    title: "Do not wait for a Wi-Fi update",
    body: "Sweetwater's firmware guide, updated in July, still says Wi-Fi updates are not available for MPC 3.x. On the XL that means inMusic Software Center on a computer, or Preferences → Info → Update → Online Update on the unit itself. Gen 2 (the XL) does not use the old public firmware zip the X / Live / One pages still show.",
    source: "Sweetwater / Akai support",
  },
  {
    id: "mpc-sweetwater",
    part: "mpc",
    date: "2026-07-17",
    kind: "review",
    title: "Sweetwater's studio hands-on of the XL",
    body: "Jacob Fehlhaber sat with one in Sweetwater Studios. Useful confirmation, not new features: 16 GB RAM, 256-voice polyphony, 32 plugin instruments, 16 audio tracks, 24-channel USB-C, 16 CV outs. Street around $2,899; certified open-box was listed near $2,609.",
    source: "Sweetwater InSync",
  },
  {
    id: "mpc-39",
    part: "mpc",
    date: "2026-06-18",
    kind: "firmware",
    title: "3.9: oscillators, arrange edits, XL lighting and Chop",
    body: "Free OS. Drum and Keygroup layers can be oscillators instead of samples (Warm Sine, Digital Sine, Saw/Square, Pulse, Noise, FM2, RM3, Algorithmic, Single-Cycle, Wavetable). Arrange Mode gained cut/copy/paste/duplicate and Insert Clip Row on the loop brace. Time signature is now per sequence and per clip. XL-only: brighter step-sequencer pad lighting in daylight, and a user-default Chop mode for unsliced samples. New Q-Link mode drives the hardware step sequencer.",
    source: "Akai / Synthtopia / Dubspot",
  },
  {
    id: "mpc-sos",
    part: "mpc",
    date: "2026-04-01",
    kind: "review",
    title: "Sound on Sound reviews the XL",
    body: "Simon Sherbourne, April 2026 issue. The XL is the Live III treatment on the X chassis: bigger backlit step buttons, Q-Links lined up with the sequencer, Channel Command mixer strip. MPCe pads still only do XY on drum tracks. Worth reading once if you are choosing XL vs Live III.",
    source: "Sound on Sound, April 2026",
  },
  {
    id: "gtr-status",
    part: "guitar",
    date: "2026-09-16",
    kind: "owner",
    title: "No spec change, no recall, no firmware",
    body: "The American Series Soloist SL2 DX is still the March 2025 Corona guitar you bought: Seymour Duncan JB + '59, Floyd Rose 1500, 24 jumbo stainless, neck-through maple. Jackson has not issued a bulletin or a silent spec swap. Listings that say SL2MG are the EMG 81/85 sibling. Different guitar.",
    source: "Jackson / Fender newsroom",
  },
  {
    id: "gtr-season",
    part: "guitar",
    date: "2026-09-16",
    kind: "owner",
    title: "Fall humidity: check the neck and the Floyd before you fight the tuners",
    body: "Indoor air is about to get dry. A neck-through with a floating Floyd will go sharp or tilt the baseplate if relief flattens. Before you touch headstock tuners: unlock the nut, check the baseplate is parallel to the body, set relief with the heel wheel, then retune Floyd-style (one string at a time if anything moved). Fine tuners only after the nut is locked.",
    source: "This manual · Floyd chapter",
  },
  {
    id: "gtr-sleep-token",
    part: "guitar",
    date: "2026-08-26",
    kind: "family",
    title: "Jackson's Sleep Token signatures are not this guitar",
    body: "Fender announced the Jackson Pro Plus Series Signature Sleep Token IV Monarkh SC. Different series, different shape, Indonesia/Pro Plus build. American Series (Corona, your SL2 DX) was not part of the drop.",
    source: "Fender newsroom, 26 Aug 2026",
  },
  {
    id: "gtr-price",
    part: "guitar",
    date: "2026-08-31",
    kind: "product",
    title: "Street is still the $2,500s, some finishes backordered",
    body: "Musician's Friend had the HT in Satin Porsche Gray at $2,519.99. Chicago Music Exchange lists the trem SL2 DX around $2,629.99. Sweetwater's Lemon Ice was on backorder into September. None of that changes what you already own.",
    source: "Retail listings, Aug–Sep 2026",
  },
  {
    id: "gtr-jb50",
    part: "guitar",
    date: "2026-01-22",
    kind: "product",
    title: "The JB in the bridge turned 50",
    body: "Seymour Duncan's 2026-only 50th Anniversary set is a historically-correct JB paired with a Jazz, not with the '59 in your neck. Rough-cast magnets, butyrate bobbins, 2026 production only. Leave the stock pair in. The JB + '59 combo Jackson specced is the right one for this guitar.",
    source: "Seymour Duncan, NAMM 2026",
  },
  {
    id: "gtr-stealth",
    part: "guitar",
    date: "2026-02-19",
    kind: "family",
    title: "Pro Plus Pure Metal Stealth limiteds",
    body: "Jackson put all-black Soloist, Kelly and Rhoads limiteds in the Pro Plus line with Bare Knuckle pickups. Not American Series, not Corona, not your pickups. Ignore unless you are shopping a second guitar.",
    source: "Guitar Bomb",
  },
  {
    id: "gtr-rhoads",
    part: "guitar",
    date: "2025-09-17",
    kind: "family",
    title: "American Series Rhoads joined the Corona line",
    body: "RR24 and RR24 HT, same factory as the SL2 DX, same USA Seymour Duncan JB and '59. Reverse six-in-line headstock, alder body, 24 jumbo stainless. Confirms Jackson is keeping the American Series recipe (your recipe) as the US flagship, not replacing it.",
    source: "Fender newsroom / Guitar.com",
  },
  {
    id: "gtr-gw",
    part: "guitar",
    date: "2025-05-19",
    kind: "review",
    title: "Guitar World: the SL2 DX is a metal workhorse",
    body: "Phil Weller: “Most players buy a Soloist for stank face riffs and shredding ’til sundown. For that, the SL2DX is magnificent.” Built in Fender's Corona plant, fourth US Soloist generation. Launch was $2,399.99. That review is still the one that matters; nothing since has superseded it.",
    source: "Guitar World, 19 May 2025",
  },
];

export const KIND_LABEL: Record<NewsKind, string> = {
  firmware: "Firmware",
  review: "Review",
  product: "Product",
  owner: "For you",
  watch: "Watch",
  family: "Family",
};

export function newsFor(part: Part | "all") {
  const list = part === "all" ? NEWS : NEWS.filter((n) => n.part === part);
  return [...list].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function formatNewsDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${d} ${months[m - 1]} ${y}`;
}
