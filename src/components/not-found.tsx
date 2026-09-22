import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-8">
      <p className="font-mono text-xs uppercase tracking-widest text-accent-ink">Missing page</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
        That isn’t in the manual
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        The link may be old, or the section moved. Cover still has both machines.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-12 items-center rounded-md bg-accent-fill px-5 text-sm font-medium text-accent-fg transition-transform duration-150 active:scale-[0.96]"
      >
        Back to cover
      </Link>
    </div>
  );
}
