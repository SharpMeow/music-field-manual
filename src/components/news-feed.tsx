import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { formatNewsDate, KIND_LABEL, NEWS_CHECKED, newsFor, type NewsItem } from "@/data/news";
import type { Part } from "@/data/types";
import { cn } from "@/lib/utils";
import { HeadingLevelProvider, useWidgetHeading } from "@/lib/heading-level";

function kindVariant(kind: NewsItem["kind"]): "accent" | "ok" | "default" | "solid" {
  if (kind === "firmware" || kind === "owner") return "accent";
  if (kind === "watch") return "ok";
  if (kind === "review") return "solid";
  return "default";
}

function Item({ item, compact }: { item: NewsItem; compact?: boolean }) {
  const Heading = useWidgetHeading();
  return (
    <article className="border-t border-border py-4 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-center gap-2">
        <time className="font-mono text-xs tabular-nums text-subtle" dateTime={item.date}>
          {formatNewsDate(item.date)}
        </time>
        <Badge variant={kindVariant(item.kind)}>{KIND_LABEL[item.kind]}</Badge>
      </div>
      <Heading className="mt-2 font-display text-xl font-semibold tracking-tight text-fg">{item.title}</Heading>
      {compact ? (
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">{item.body}</p>
      ) : (
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
      )}
      {item.source && !compact ? (
        <p className="mt-2 font-mono text-xs text-subtle">{item.source}</p>
      ) : null}
    </article>
  );
}

export function NewsFeed({
  part = "all",
  limit,
  compact = false,
}: {
  part?: Part | "all";
  limit?: number;
  compact?: boolean;
}) {
  const items = useMemo(() => {
    const list = newsFor(part);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [part, limit]);

  if (items.length === 0) {
    return <p className="text-sm text-muted">Nothing filed.</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} compact={compact} />
      ))}
    </div>
  );
}

const FILTERS = [
  ["all", "All"],
  ["mpc", "MPC XL"],
  ["guitar", "Jackson"],
] as const;

export function NewsDesk() {
  const [filter, setFilter] = useState<Part | "all">("all");
  const items = newsFor(filter);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-widest text-accent-ink">Dispatch</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
        Latest for both machines
      </h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
        Checked {formatNewsDate(NEWS_CHECKED)} against Akai's Gen 2 firmware page, the 3.9.1
        release notes, Jackson / Fender's newsroom, and the Guitar World SL2 DX review. The XL
        still wants 3.9.1. The Jackson has not changed.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <StatusCard
          kicker="MPC XL"
          title="Firmware 3.9.1"
          body="Current. Pull it from inMusic Software Center or Preferences → Info → Online Update. Wi-Fi OTA is still not a 3.x thing."
          part="mpc"
          slug="updates"
        />
        <StatusCard
          kicker="Jackson SL2 DX"
          title="Spec unchanged"
          body="March 2025 Corona build. No recall, no silent pickup swap. SL2MG in a listing is the EMG sibling, not yours."
          part="guitar"
          slug="news"
        />
      </div>

      <div
        className="mt-10 inline-flex flex-wrap gap-1 rounded-full border border-border bg-elevated p-1"
        role="tablist"
        aria-label="Filter dispatch"
      >
        {FILTERS.map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={filter === id}
            onClick={() => setFilter(id)}
            className={cn(
              "h-9 rounded-full px-4 text-sm",
              filter === id ? "bg-surface text-fg shadow-panel" : "text-muted hover:text-fg",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-border bg-surface px-5 py-2 shadow-panel sm:px-6">
        <HeadingLevelProvider value={2}>
          <NewsFeed part={filter} />
        </HeadingLevelProvider>
      </div>
      <p className="sr-only">{items.length} items</p>
    </div>
  );
}

function StatusCard({
  kicker,
  title,
  body,
  part,
  slug,
}: {
  kicker: string;
  title: string;
  body: string;
  part: Part;
  slug: string;
}) {
  return (
    <Link
      to="/$part/$slug"
      params={{ part, slug }}
      className="rounded-xl border border-border bg-surface p-5 shadow-panel transition-colors duration-150 hover:border-muted"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-accent-ink">{kicker}</p>
      <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-fg">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </Link>
  );
}

export function HomeNews() {
  const mpc = newsFor("mpc").slice(0, 2);
  const guitar = newsFor("guitar").slice(0, 2);

  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent-ink">Dispatch</p>
          <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight">
            Latest for both machines
          </h2>
          <p className="mt-1 text-sm text-muted">Checked {formatNewsDate(NEWS_CHECKED)}</p>
        </div>
        <Link
          to="/news"
          className="inline-flex h-11 items-center gap-1 text-sm text-fg hover:text-accent-ink"
        >
          Full desk
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Column kicker="MPC XL" part="mpc" slug="updates" items={mpc} />
        <Column kicker="Jackson SL2 DX" part="guitar" slug="news" items={guitar} />
      </div>
    </section>
  );
}

function Column({
  kicker,
  part,
  slug,
  items,
}: {
  kicker: string;
  part: Part;
  slug: string;
  items: NewsItem[];
}) {
  return (
    <section className="rounded-xl border border-border bg-surface p-5 shadow-panel sm:p-6">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-ink">{kicker}</p>
        <Link
          to="/$part/$slug"
          params={{ part, slug }}
          className="font-mono text-xs text-subtle hover:text-fg"
        >
          All {part === "mpc" ? "firmware" : "guitar"} notes
        </Link>
      </div>
      <div className="mt-3">
        {items.map((item) => (
          <Item key={item.id} item={item} compact />
        ))}
      </div>
    </section>
  );
}
