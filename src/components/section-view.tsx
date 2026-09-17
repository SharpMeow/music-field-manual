import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, ArrowRight, Ban, Lightbulb } from "lucide-react";
import { Prose } from "@/components/prose";
import { StepList } from "@/components/step-list";
import { Widget } from "@/components/widgets";
import { neighbors } from "@/data/catalog";
import type { Block, Section } from "@/data/types";
import { useField } from "@/lib/store";
import { cn } from "@/lib/utils";

const CALLOUT_ICON = {
  tip: Lightbulb,
  warn: AlertTriangle,
  trap: Ban,
} as const;

function BlockView({ block, part }: { block: Block; part: Section["part"] }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-base leading-relaxed text-muted">
          <Prose text={block.text} />
        </p>
      );
    case "lead":
      return (
        <p className="rounded-xl border border-border bg-elevated px-4 py-3 font-mono text-sm leading-relaxed text-paper">
          {block.text}
        </p>
      );
    case "h":
      return (
        <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">{block.text}</h2>
      );
    case "steps":
      return <StepList id={block.id} items={block.items} />;
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-elevated font-mono text-xs uppercase tracking-widest text-muted">
              <tr>
                {block.columns.map((c) => (
                  <th key={c} className="px-3 py-2.5 font-medium">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={cn("px-3 py-2.5", j === 0 ? "font-medium text-fg" : "text-muted")}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout": {
      const kind = block.kind;
      const Icon = CALLOUT_ICON[kind];
      return (
        <aside
          className={cn(
            "rounded-xl border px-4 py-4",
            kind === "tip" && "border-ok/40 bg-ok/10",
            kind === "warn" && "border-accent/40 bg-accent/10",
            kind === "trap" && "border-accent/50 bg-accent/15",
          )}
        >
          <p
            className={cn(
              "flex items-center gap-2 font-mono text-xs uppercase tracking-widest",
              kind === "tip" ? "text-ok" : "text-accent",
            )}
          >
            <Icon className="size-3.5" strokeWidth={2} aria-hidden />
            {block.title ?? (kind === "tip" ? "Tip" : kind === "trap" ? "Trap" : "Watch")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-paper">
            <Prose text={block.text} />
          </p>
        </aside>
      );
    }
    case "kvs":
      return (
        <dl className="divide-y divide-border overflow-hidden rounded-xl border border-border">
          {block.items.map((item) => (
            <div key={item.k} className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
              <dt className="font-medium text-fg">{item.k}</dt>
              <dd className="text-sm leading-relaxed text-muted">
                <Prose text={item.v} />
              </dd>
            </div>
          ))}
        </dl>
      );
    case "checklist":
      return (
        <StepList
          id={block.id}
          items={block.items.map((t, i) => ({
            n: String(i + 1).padStart(2, "0"),
            title: t,
            body: "",
          }))}
        />
      );
    case "widget":
      return <Widget name={block.name} part={part} />;
  }
}

export function SectionView({ section }: { section: Section }) {
  const setLast = useField((s) => s.setLast);
  const { prev, next } = neighbors(section.part, section.slug);
  const partLabel = section.part === "mpc" ? "MPC XL" : "Jackson";
  const partHome = section.part === "mpc" ? "setup" : "spec";

  useEffect(() => {
    setLast({ part: section.part, slug: section.slug, title: section.title });
  }, [section.part, section.slug, section.title, setLast]);

  return (
    <article className="mx-auto w-full max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        <Link
          to="/$part/$slug"
          params={{ part: section.part, slug: partHome }}
          className="hover:text-accent"
        >
          {partLabel}
        </Link>
        <span className="mx-2 text-subtle">/</span>
        <span className="text-accent">{section.kicker}</span>
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
        {section.title}
      </h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">{section.blurb}</p>
      <div className="mt-8 flex flex-col gap-6">
        {section.blocks.map((block, i) => (
          <BlockView key={i} block={block} part={section.part} />
        ))}
      </div>
      <nav className="mt-12 flex items-stretch justify-between gap-3 border-t border-border pt-6">
        {prev ? (
          <Link
            to="/$part/$slug"
            params={{ part: prev.part, slug: prev.slug }}
            className="min-h-16 min-w-0 flex-1 rounded-xl border border-border px-4 py-3 transition-colors duration-150 hover:bg-elevated"
          >
            <span className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted">
              <ArrowLeft className="size-3" /> Previous
            </span>
            <span className="mt-1 block truncate text-sm text-fg">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/$part/$slug"
            params={{ part: next.part, slug: next.slug }}
            className="min-h-16 min-w-0 flex-1 rounded-xl border border-border px-4 py-3 text-right transition-colors duration-150 hover:bg-elevated"
          >
            <span className="flex items-center justify-end gap-1 font-mono text-xs uppercase tracking-widest text-muted">
              Next <ArrowRight className="size-3" />
            </span>
            <span className="mt-1 block truncate text-sm text-fg">{next.title}</span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
