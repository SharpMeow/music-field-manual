import { ButtonRef } from "@/components/button-ref";
import { ChangeDrill } from "@/components/change-drill";
import { ChordLibrary } from "@/components/chord-diagram";
import { DirtChain } from "@/components/dirt-chain";
import { GearWorth } from "@/components/gear-worth";
import { HardwareMap } from "@/components/hardware-map";
import { Metronome, StrumPattern } from "@/components/metronome";
import { NotesPad } from "@/components/notes-pad";
import { PedalBoard } from "@/components/pedal-board";
import { Pentatonic } from "@/components/pentatonic";
import { PickupSwitch } from "@/components/pickup-switch";
import { PracticePlan, SongList, MpcYears } from "@/components/practice-plan";
import { NewsFeed } from "@/components/news-feed";
import { SwingDemo } from "@/components/swing";
import type { Part, WidgetName } from "@/data/types";

export function Widget({ name, part }: { name: WidgetName; part: Part }) {
  switch (name) {
    case "buttons":
      return <ButtonRef />;
    case "hardware":
      return <HardwareMap />;
    case "dirt":
      return <DirtChain />;
    case "chords":
      return <ChordLibrary />;
    case "drill":
      return <ChangeDrill />;
    case "metronome":
      return <Metronome />;
    case "scale":
      return <Pentatonic />;
    case "weeks":
      return <PracticePlan />;
    case "notes":
      return <NotesPad part={part} />;
    case "pickup":
      return <PickupSwitch />;
    case "swing":
      return <SwingDemo />;
    case "strum":
      return <StrumPattern />;
    case "songs":
      return <SongList />;
    case "news":
      return (
        <div className="rounded-xl border border-border bg-surface px-5 py-2 shadow-panel sm:px-6">
          <NewsFeed part={part} />
        </div>
      );
    case "years":
      return <MpcYears />;
    case "board":
      return <PedalBoard />;
    case "worth":
      return <GearWorth />;
    default: {
      const _never: never = name;
      return _never;
    }
  }
}
