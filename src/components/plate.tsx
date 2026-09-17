import { cn } from "@/lib/utils";

export function Plate({
  src,
  alt,
  caption,
  wide = false,
  priority = false,
  flush = false,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
  priority?: boolean;
  flush?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden bg-surface",
        !flush && "rounded-xl border border-border shadow-panel",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        width={wide ? 1792 : 1600}
        height={wide ? 1008 : 1200}
        fetchPriority={priority ? "high" : "low"}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "plate-img w-full object-cover object-center",
          wide ? "h-52 sm:h-64 lg:h-72" : "aspect-[4/3]",
        )}
      />
      {caption ? (
        <figcaption className="border-t border-border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
