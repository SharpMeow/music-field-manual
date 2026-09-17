import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { PadMark } from "@/components/pad-mark";
import { SearchPalette } from "@/components/search-palette";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { sectionsFor } from "@/data/catalog";
import { NEWS_CHECKED, formatNewsDate } from "@/data/news";
import type { Part } from "@/data/types";
import { usePresence, useScrollLock } from "@/lib/presence";
import { cn } from "@/lib/utils";

function partFromPath(pathname: string): Part | null {
  if (pathname.startsWith("/mpc")) return "mpc";
  if (pathname.startsWith("/guitar")) return "guitar";
  return null;
}

function slugFromPath(pathname: string) {
  return pathname.split("/").filter(Boolean)[1] ?? "";
}

function coverLinkClass(active: boolean) {
  return cn(
    "flex min-h-11 items-center rounded-md px-3 text-sm transition-colors duration-150",
    active ? "bg-elevated text-fg" : "text-muted hover:bg-elevated hover:text-fg",
  );
}

function headerLinkClass(active: boolean) {
  return cn(
    "inline-flex h-9 items-center rounded-full px-3 text-sm transition-colors duration-150",
    active ? "bg-elevated text-fg" : "text-muted hover:text-fg",
  );
}

function Toc({
  part,
  slug,
  onPick,
}: {
  part: Part;
  slug: string;
  onPick?: () => void;
}) {
  return (
    <nav aria-label={part === "mpc" ? "MPC XL" : "Jackson"}>
      <p className="px-3 font-mono text-xs uppercase tracking-widest text-subtle">
        {part === "mpc" ? "Part 1 · MPC XL" : "Part 2 · Jackson"}
      </p>
      <ol className="mt-2 flex flex-col">
        {sectionsFor(part).map((s, i) => {
          const active = slug === s.slug;
          return (
            <li key={s.slug}>
              <Link
                to="/$part/$slug"
                params={{ part: s.part, slug: s.slug }}
                onClick={onPick}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors duration-150",
                  active
                    ? "bg-elevated text-fg shadow-[inset_2px_0_0_0_var(--color-accent)]"
                    : "text-muted hover:bg-elevated hover:text-fg",
                )}
              >
                <span className="w-5 shrink-0 font-mono text-xs text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="truncate">{s.title}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function CoverNav({
  pathname,
  onPick,
}: {
  pathname: string;
  onPick?: () => void;
}) {
  return (
    <nav aria-label="Manual" className="flex flex-col gap-1 px-1">
      <Link
        to="/"
        onClick={onPick}
        aria-current={pathname === "/" ? "page" : undefined}
        className={coverLinkClass(pathname === "/")}
      >
        Cover
      </Link>
      <Link
        to="/news"
        onClick={onPick}
        aria-current={pathname === "/news" ? "page" : undefined}
        className={coverLinkClass(pathname === "/news")}
      >
        Dispatch
      </Link>
      <Link
        to="/manual"
        onClick={onPick}
        aria-current={pathname === "/manual" ? "page" : undefined}
        className={coverLinkClass(pathname === "/manual")}
      >
        Print edition
      </Link>
      <Link
        to="/$part/$slug"
        params={{ part: "mpc", slug: "setup" }}
        onClick={onPick}
        className="flex min-h-11 items-center justify-between rounded-md px-3 text-sm text-muted transition-colors duration-150 hover:bg-elevated hover:text-fg"
      >
        <span>MPC XL</span>
        <span className="font-mono text-xs text-subtle">{sectionsFor("mpc").length}</span>
      </Link>
      <Link
        to="/$part/$slug"
        params={{ part: "guitar", slug: "spec" }}
        onClick={onPick}
        className="flex min-h-11 items-center justify-between rounded-md px-3 text-sm text-muted transition-colors duration-150 hover:bg-elevated hover:text-fg"
      >
        <span>Jackson</span>
        <span className="font-mono text-xs text-subtle">{sectionsFor("guitar").length}</span>
      </Link>
    </nav>
  );
}

function ReadingBar({ pathname }: { pathname: string }) {
  const [pct, setPct] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max <= 0 ? 1 : Math.min(1, el.scrollTop / max));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <div className="h-0.5 bg-elevated" aria-hidden>
      <div className="read-bar h-full bg-accent" style={{ transform: `scaleX(${pct})` }} />
    </div>
  );
}

function useDrawer() {
  const [open, setOpen] = useState(false);
  const { render, entered } = usePresence(open, 320);
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return { open, setOpen, render, entered };
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const part = partFromPath(pathname);
  const slug = slugFromPath(pathname);
  const [search, setSearch] = useState(false);
  const drawer = useDrawer();
  const panelRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!drawer.open || !drawer.render) return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusables = () =>
      [...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")].filter(
        (n) => n.tabIndex !== -1,
      );
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const nodes = focusables();
      if (nodes.length === 0) return;
      const start = nodes[0];
      const end = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === start) {
        e.preventDefault();
        end.focus();
      } else if (!e.shiftKey && document.activeElement === end) {
        e.preventDefault();
        start.focus();
      }
    };
    panel.addEventListener("keydown", onKey);
    return () => {
      panel.removeEventListener("keydown", onKey);
      menuBtnRef.current?.focus();
    };
  }, [drawer.open, drawer.render]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="sticky top-0 z-40 pt-[env(safe-area-inset-top)]">
        <ReadingBar pathname={pathname} />
        <header className="border-b border-border bg-bg/85 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:gap-3">
            <Button
              ref={menuBtnRef}
              variant="ghost"
              size="icon"
              className="text-fg lg:hidden"
              aria-label="Open contents"
              aria-expanded={drawer.open}
              onClick={() => drawer.setOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
            <Link to="/" className="flex min-w-0 items-center gap-2.5">
              <PadMark className="size-5 shrink-0" />
              <span className="truncate font-display text-base font-semibold tracking-wide sm:text-lg">
                Music Field Manual
              </span>
            </Link>
            <nav className="ml-2 hidden items-center gap-1 md:flex">
              <Link
                to="/$part/$slug"
                params={{ part: "mpc", slug: "setup" }}
                className={headerLinkClass(part === "mpc")}
              >
                MPC XL
              </Link>
              <Link
                to="/$part/$slug"
                params={{ part: "guitar", slug: "spec" }}
                className={headerLinkClass(part === "guitar")}
              >
                Jackson
              </Link>
              <Link to="/news" className={headerLinkClass(pathname === "/news")}>
                News
              </Link>
              <Link to="/manual" className={headerLinkClass(pathname === "/manual")}>
                PDF
              </Link>
            </nav>
            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setSearch(true)}
                aria-keyshortcuts="Meta+K Control+K"
                className="flex h-11 items-center gap-2 rounded-md border border-border bg-elevated px-3 text-sm text-muted transition-colors duration-150 hover:text-fg"
              >
                <Search className="size-4" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden rounded-sm border border-border px-1.5 font-mono text-xs text-subtle sm:inline">
                  ⌘K
                </kbd>
              </button>
            </div>
          </div>
        </header>
      </div>

      <div className="mx-auto flex max-w-7xl">
        <aside className="sticky top-[3.75rem] hidden h-[calc(100dvh-3.75rem)] w-64 shrink-0 overflow-y-auto border-r border-border py-6 pr-3 lg:block">
          <div className="flex flex-col gap-8">
            <CoverNav pathname={pathname} />
            {part ? <Toc part={part} slug={slug} /> : null}
          </div>
        </aside>
        <div className="min-w-0 flex-1">
          <main id="main" className="px-4 py-8 sm:px-8 sm:py-10">
            <div key={pathname} className="page-enter">
              {children}
            </div>
          </main>
          <footer className="border-t border-border px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-mono text-xs text-subtle">
                MPC XL · firmware 3.9.1 · Jackson Soloist SL2 DX
              </p>
              <p className="font-mono text-xs text-subtle">
                Dispatch checked {formatNewsDate(NEWS_CHECKED)} · progress stays on this device
              </p>
            </div>
          </footer>
        </div>
      </div>

      {drawer.render ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="drawer-scrim absolute inset-0 bg-scrim"
            data-open={drawer.entered}
            aria-label="Close contents"
            onClick={() => drawer.setOpen(false)}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Contents"
            className="drawer-panel relative flex h-full w-[min(20rem,86vw)] flex-col border-r border-border bg-surface pb-[env(safe-area-inset-bottom)]"
            data-open={drawer.entered}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="font-display text-lg font-semibold">Contents</p>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close contents"
                onClick={() => drawer.setOpen(false)}
              >
                <X className="size-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col gap-8">
                <CoverNav pathname={pathname} onPick={() => drawer.setOpen(false)} />
                {part ? (
                  <Toc part={part} slug={slug} onPick={() => drawer.setOpen(false)} />
                ) : (
                  <>
                    <Toc part="mpc" slug="" onPick={() => drawer.setOpen(false)} />
                    <Toc part="guitar" slug="" onPick={() => drawer.setOpen(false)} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <SearchPalette open={search} onOpenChange={setSearch} />
    </div>
  );
}
