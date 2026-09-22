import { Link } from "@tanstack/react-router";
import { ArrowRight, AudioLines, BookOpen, Guitar } from "lucide-react";
import type { ReactNode } from "react";
import { PadMark } from "@/components/pad-mark";
import { HomeNews } from "@/components/news-feed";
import { Plate } from "@/components/plate";
import { Progress } from "@/components/ui/progress";
import { WEEKS } from "@/data/chords";
import { GUITAR_SECTIONS } from "@/data/guitar";
import { SOURCE_PDF } from "@/data/manual";
import { MPC_SECTIONS } from "@/data/mpc";
import { MPC_YEARS } from "@/data/mpc-years";
import { stepCount } from "@/data/catalog";
import type { Part } from "@/data/types";
import { checkId, useField, useHasHydrated } from "@/lib/store";
import { cn, padBankNumber } from "@/lib/utils";

function usePct(ids: string[]) {
  const checks = useField((s) => s.checks);
  const weekDone = useField((s) => s.weekDone);
  const hydrated = useHasHydrated();
  if (!hydrated) return { n: 0, t: ids.length, pct: 0 };
  const n = ids.filter((id) => checks[id] || weekDone[id]).length;
  return { n, t: ids.length, pct: ids.length ? Math.round((n / ids.length) * 100) : 0 };
}

function CoverPads() {
  return (
    <div className="hidden w-52 shrink-0 lg:block" aria-hidden>
      <div className="rounded-xl border border-border bg-surface p-3 shadow-panel">
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 16 }, (_, i) => {
            const n = padBankNumber(i);
            return (
              <span
                key={i}
                className={cn("cover-pad pad-key aspect-square", n === 1 && "pad-armed")}
                style={{ animationDelay: `${i * 45}ms` }}
              />
            );
          })}
        </div>
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
        Pad 1 · armed
      </p>
    </div>
  );
}

export function Home() {
  const last = useField((s) => s.last);
  const hydrated = useHasHydrated();
  const setup = usePct(Array.from({ length: stepCount("mpc", "setup", "setup") }, (_, i) => checkId("setup", i)));
  const loop = usePct(Array.from({ length: stepCount("mpc", "loop", "loop") }, (_, i) => checkId("loop", i)));
  const xlYears = usePct(MPC_YEARS.map((w) => w.id));
  const weeks = usePct(WEEKS.map((w) => w.id));
  const resume = hydrated ? last : null;

  return (
    <div className="mx-auto max-w-4xl">
      <Plate
        src="/plates/studio.jpg"
        alt="Late-night studio: a sampler with one pad armed and a satin-black superstrat on a stand"
        caption="Fig. 01 · Both machines, late session"
        wide
        priority
      />

      <div className="mt-10 flex items-end justify-between gap-10">
        <div className="stagger-in min-w-0">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
            <PadMark className="size-4" />
            Akai MPC XL · MPC 3.9.1 · Jackson Soloist SL2 DX
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-fg sm:text-7xl">
            Get a loop out of
            <br />
            the box tonight.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Then we learn the machines properly, the way a good teacher would: one sitting at a
            time, no heroics. The XL side is written against Akai's 3.7 and 3.9 manuals, because
            most videos older than 2025 are talking about a workflow that isn't on this desk. The
            guitar side is the same idea for this Jackson — twenty honest minutes, calluses, and
            a Floyd that will behave if you treat it kindly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/$part/$slug"
              params={{ part: "mpc", slug: "loop" }}
              className="inline-flex h-12 items-center gap-2 rounded-md bg-accent-fill pl-5 pr-4 text-sm font-medium text-accent-fg transition-transform duration-150 active:scale-[0.96]"
            >
              First lo-fi loop
              <ArrowRight className="size-4" />
            </Link>
            {resume ? (
              <Link
                to="/$part/$slug"
                params={{ part: resume.part, slug: resume.slug }}
                className="inline-flex h-12 max-w-full items-center rounded-md border border-border bg-surface px-5 text-sm text-fg shadow-panel transition-colors duration-150 hover:bg-elevated"
              >
                <span className="truncate">Continue · {resume.title}</span>
              </Link>
            ) : (
              <Link
                to="/$part/$slug"
                params={{ part: "mpc", slug: "setup" }}
                className="inline-flex h-12 items-center rounded-md border border-border bg-surface px-5 text-sm text-fg shadow-panel transition-colors duration-150 hover:bg-elevated"
              >
                Day one setup
              </Link>
            )}
          </div>
        </div>
        <CoverPads />
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Day one" value={setup} part="mpc" slug="setup" />
        <Stat label="First loop" value={loop} part="mpc" slug="loop" />
        <Stat label="Three years" value={xlYears} part="mpc" slug="years" />
        <Stat label="Twelve weeks" value={weeks} part="guitar" slug="weeks" />
      </div>

      <HomeNews />

      <Link
        to="/manual"
        className="mt-10 flex items-center gap-4 rounded-xl border border-border bg-surface p-4 shadow-panel transition-colors duration-150 hover:border-muted sm:p-5"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-elevated text-accent-ink">
          <BookOpen className="size-5" strokeWidth={1.75} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-mono text-xs uppercase tracking-widest text-subtle">
            {SOURCE_PDF.subtitle}
          </span>
          <span className="mt-1 block font-display text-2xl font-semibold tracking-tight text-fg">
            Read the original PDF
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-muted">{SOURCE_PDF.blurb}</span>
        </span>
        <ArrowRight className="hidden size-4 shrink-0 text-muted sm:block" />
      </Link>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <PartCard
          kicker="Part 1"
          title="MPC XL"
          body="Tonight: setup and a loop. Shortcuts and buried tricks next to the button list. Then years of craft, then the technical layer: 960 PPQ, the DSP graph, warp, matrix, CV."
          href={{ part: "mpc", slug: "setup" }}
          icon={<AudioLines className="size-4" strokeWidth={1.75} />}
          plate={
            <Plate
              src="/plates/pads.jpg"
              alt="Close-up of rubber sampler pads with the bottom-left pad armed in red"
              caption="Fig. 02 · Pad 1 armed"
              flush
            />
          }
          items={MPC_SECTIONS.slice(0, 6).map((s) => ({
            title: s.title,
            slug: s.slug,
            part: s.part,
          }))}
          more={MPC_SECTIONS.length - 6}
        />
        <PartCard
          kicker="Part 2"
          title="Jackson Soloist SL2 DX"
          body="Floyd first, so it doesn't fight you. Then eight chords, the one-minute change drill, Old Faithful, twenty minutes a day for twelve weeks. I'll take ugly and daily over perfect and Saturday."
          href={{ part: "guitar", slug: "spec" }}
          icon={<Guitar className="size-4" strokeWidth={1.75} />}
          plate={
            <Plate
              src="/plates/floyd.jpg"
              alt="Macro of a Floyd Rose double-locking tremolo on a satin black superstrat"
              caption="Fig. 03 · Floyd, locked"
              flush
            />
          }
          items={GUITAR_SECTIONS.slice(0, 6).map((s) => ({
            title: s.title,
            slug: s.slug,
            part: s.part,
          }))}
          more={GUITAR_SECTIONS.length - 6}
        />
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  part,
  slug,
}: {
  label: string;
  value: { n: number; t: number; pct: number };
  part: Part;
  slug: string;
}) {
  return (
    <Link
      to="/$part/$slug"
      params={{ part, slug }}
      className="rounded-xl border border-border bg-surface p-4 shadow-panel transition-[border-color] duration-150 hover:border-muted"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
      <p className="mt-2 font-display text-3xl font-semibold tabular-nums">
        {value.n}
        <span className="text-lg text-muted">/{value.t}</span>
      </p>
      <Progress value={value.pct} aria-label={`${label} progress`} className="mt-3" />
    </Link>
  );
}

function PartCard({
  kicker,
  title,
  body,
  href,
  icon,
  plate,
  items,
  more,
}: {
  kicker: string;
  title: string;
  body: string;
  href: { part: Part; slug: string };
  icon: ReactNode;
  plate: ReactNode;
  items: Array<{ title: string; slug: string; part: Part }>;
  more: number;
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-surface shadow-panel">
      {plate}
      <div className="p-5 sm:p-6">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-ink">
          {icon}
          {kicker}
        </p>
        <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight">
          <Link to="/$part/$slug" params={href} className="hover:text-accent-ink">
            {title}
          </Link>
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
        <ol className="mt-5 flex flex-col">
          {items.map((item, i) => (
            <li key={item.slug}>
              <Link
                to="/$part/$slug"
                params={{ part: item.part, slug: item.slug }}
                className="flex min-h-11 items-center gap-3 border-t border-border py-2.5 text-sm transition-colors duration-150 hover:text-accent-ink"
              >
                <span className="w-5 font-mono text-xs text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.title}
              </Link>
            </li>
          ))}
        </ol>
        {more > 0 ? (
          <Link
            to="/$part/$slug"
            params={href}
            className="mt-2 inline-block font-mono text-xs text-subtle hover:text-fg"
          >
            +{more} more in the contents
          </Link>
        ) : null}
      </div>
    </section>
  );
}
