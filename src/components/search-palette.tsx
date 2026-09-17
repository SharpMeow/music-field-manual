import { Command } from "cmdk";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { SEARCH_INDEX, type SearchHit } from "@/data/catalog";
import type { Part } from "@/data/types";
import { usePresence, useScrollLock } from "@/lib/presence";

export function SearchPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const { render, entered } = usePresence(open, 180);
  useScrollLock(open);
  const grouped = useMemo(() => {
    const map = new Map<string, SearchHit[]>();
    for (const h of SEARCH_INDEX) {
      const list = map.get(h.group) ?? [];
      list.push(h);
      map.set(h.group, list);
    }
    return map;
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "/" && !open) {
        const t = e.target as HTMLElement | null;
        if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
        e.preventDefault();
        onOpenChange(true);
      }
      if (e.key === "Escape") onOpenChange(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  function go(h: SearchHit) {
    onOpenChange(false);
    if (h.href === "/") {
      void navigate({ to: "/" });
      return;
    }
    if (h.href === "/news") {
      void navigate({ to: "/news" });
      return;
    }
    if (h.href === "/manual") {
      void navigate({ to: "/manual" });
      return;
    }
    const [part, slug] = h.href.slice(1).split("/") as [Part, string];
    void navigate({ to: "/$part/$slug", params: { part, slug } });
  }

  if (!render) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24">
      <button
        type="button"
        className="search-scrim absolute inset-0 bg-scrim"
        data-open={entered}
        aria-label="Close search"
        onClick={() => onOpenChange(false)}
      />
      <Command
        className="search-panel relative z-10 w-full max-w-lg overflow-hidden rounded-xl border border-border bg-surface shadow-panel"
        data-open={entered}
        label="Search Music Field Manual"
      >
        <Command.Input
          value={q}
          onValueChange={setQ}
          autoFocus
          placeholder="Search buttons, step modes, chords, firmware…"
          className="h-12 w-full border-b border-border bg-transparent px-4 text-sm text-fg outline-none placeholder:text-subtle"
        />
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-8 text-center text-sm text-muted">
            Nothing matches.
          </Command.Empty>
          {[...grouped.entries()].map(([group, items]) => (
            <Command.Group key={group} heading={group}>
              {items.map((h) => (
                <Command.Item
                  key={`${h.group}-${h.title}-${h.href}`}
                  value={`${h.title} ${h.blurb} ${h.group}`}
                  onSelect={() => go(h)}
                  className="flex min-h-11 cursor-pointer flex-col justify-center rounded-md px-3 py-2.5 data-[selected=true]:bg-elevated"
                >
                  <span className="text-sm text-fg">{h.title}</span>
                  <span className="line-clamp-1 text-xs text-muted">{h.blurb}</span>
                </Command.Item>
              ))}
            </Command.Group>
          ))}
        </Command.List>
        <p className="hidden border-t border-border px-4 py-2 font-mono text-xs text-subtle sm:block">
          ↑↓ move · enter open · esc close
        </p>
      </Command>
    </div>
  );
}
