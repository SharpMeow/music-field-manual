import { useField, useHasHydrated } from "@/lib/store";
import type { Part } from "@/data/types";

export function NotesPad({ part }: { part: Part }) {
  const value = useField((s) => s.notes[part]);
  const setNotes = useField((s) => s.setNotes);
  const hydrated = useHasHydrated();

  return (
    <div className="rounded-xl border border-border bg-surface p-4 shadow-panel sm:p-5">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        My notes · saved with your progress
      </p>
      <textarea
        value={hydrated ? value : ""}
        onChange={(e) => setNotes(part, e.target.value)}
        rows={8}
        placeholder="Serial, pad maps, take notes, what you tried…"
        className="mt-3 w-full resize-y rounded-lg border border-border bg-elevated p-3 text-sm leading-relaxed text-fg placeholder:text-subtle"
      />
    </div>
  );
}
