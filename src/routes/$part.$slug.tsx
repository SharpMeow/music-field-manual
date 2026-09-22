import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SectionView } from "@/components/section-view";
import { getSection } from "@/data/catalog";
import type { Part } from "@/data/types";

function isPart(v: string): v is Part {
  return v === "mpc" || v === "guitar";
}

export const Route = createFileRoute("/$part/$slug")({
  loader: ({ params }) => {
    if (!isPart(params.part)) throw notFound();
    const section = getSection(params.part, params.slug);
    if (!section) throw notFound();
    return { section };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.section.title} · Music Field Manual` }] : [],
  }),
  component: SectionPage,
  notFoundComponent: Missing,
});

function SectionPage() {
  const { section } = Route.useLoaderData();
  return <SectionView section={section} />;
}

function Missing() {
  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">Missing page</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">That section is not in the book.</h1>
      <Link
        to="/"
        className="mt-6 inline-flex h-11 items-center rounded-md bg-accent px-4 text-sm text-accent-fg"
      >
        Back to cover
      </Link>
    </div>
  );
}
