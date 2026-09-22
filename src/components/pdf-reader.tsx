import { ChevronLeft, ChevronRight, Download, Minus, Plus } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SOURCE_PDF } from "@/data/manual";
import { useField, useHasHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";

type PdfJs = typeof import("pdfjs-dist/legacy/build/pdf.mjs");
type PdfDoc = import("pdfjs-dist").PDFDocumentProxy;
type PdfTask = import("pdfjs-dist").PDFDocumentLoadingTask;
type PdfRender = import("pdfjs-dist").RenderTask;

const ZOOM_STEPS = [0.85, 1, 1.15, 1.35, 1.6];

export function PdfReader() {
  const hydrated = useHasHydrated();
  const savedPage = useField((s) => s.pdfPage);
  const setPdfPage = useField((s) => s.setPdfPage);

  const stackRef = useRef<HTMLDivElement>(null);
  const canvases = useRef<(HTMLCanvasElement | null)[]>([]);
  const docRef = useRef<PdfDoc | null>(null);
  const taskRef = useRef<PdfTask | null>(null);
  const restored = useRef(false);
  const renderGen = useRef(0);
  const painting = useRef<PdfRender | null>(null);

  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [status, setStatus] = useState<"load" | "ready" | "error">("load");

  const markPage = useCallback(
    (n: number) => {
      setPage(n);
      setPdfPage(n);
    },
    [setPdfPage],
  );

  const renderAll = useCallback(async (doc: PdfDoc, scaleMul: number) => {
    const stack = stackRef.current;
    if (!stack) return;
    const gen = ++renderGen.current;
    // A newer pass owns the canvases now. pdf.js refuses to draw into a canvas
    // that is still mid-render, so stop the old pass before this one starts.
    painting.current?.cancel();
    const cssWidth = stack.clientWidth;
    if (cssWidth < 32) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    for (let i = 1; i <= doc.numPages; i++) {
      if (gen !== renderGen.current) return;
      const canvas = canvases.current[i - 1];
      if (!canvas) continue;
      const pdfPage = await doc.getPage(i);
      if (gen !== renderGen.current) return;
      const base = pdfPage.getViewport({ scale: 1 });
      const cssScale = (cssWidth / base.width) * scaleMul;
      const viewport = pdfPage.getViewport({ scale: cssScale * dpr });
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
      canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;
      const ctx = canvas.getContext("2d");
      if (!ctx) continue;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      const task = pdfPage.render({ canvasContext: ctx, viewport, canvas });
      painting.current = task;
      try {
        await task.promise;
      } catch (err) {
        if (gen !== renderGen.current) return;
        throw err;
      }
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // The legacy build polyfills newer builtins (Map#getOrInsertComputed)
        // that the modern build assumes. Without it, pages render blank on
        // browsers that do not ship them yet.
        const pdfjs: PdfJs = await import("pdfjs-dist/legacy/build/pdf.mjs");
        const worker = await import("pdfjs-dist/legacy/build/pdf.worker.min.mjs?url");
        pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
        const loadingTask = pdfjs.getDocument({ url: SOURCE_PDF.src });
        taskRef.current = loadingTask;
        const doc = await loadingTask.promise;
        if (cancelled) {
          void loadingTask.destroy();
          return;
        }
        docRef.current = doc;
        canvases.current = Array.from({ length: doc.numPages }, () => null);
        setPages(doc.numPages);
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();
    return () => {
      cancelled = true;
      renderGen.current += 1;
      painting.current?.cancel();
      docRef.current = null;
      const task = taskRef.current;
      taskRef.current = null;
      void task?.destroy();
    };
  }, []);

  useEffect(() => {
    if (status !== "ready" || !docRef.current) return;
    const doc = docRef.current;
    const stack = stackRef.current;
    if (!stack) return;

    const paint = () => void renderAll(doc, zoom);
    paint();

    let resizeTimer = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(paint, 140);
    });
    ro.observe(stack);
    return () => {
      window.clearTimeout(resizeTimer);
      ro.disconnect();
    };
  }, [status, zoom, renderAll]);

  useEffect(() => {
    if (status !== "ready" || pages === 0) return;
    const onScroll = () => {
      const sheets = stackRef.current?.querySelectorAll<HTMLElement>("[data-pdf-page]");
      if (!sheets?.length) return;
      const line = 150;
      let best = 1;
      sheets.forEach((el) => {
        const n = Number(el.getAttribute("data-pdf-page"));
        if (n && el.getBoundingClientRect().top <= line) best = n;
      });
      markPage(best);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [status, pages, markPage]);

  useEffect(() => {
    if (status !== "ready" || !hydrated || restored.current) return;
    restored.current = true;
    const n = Math.min(Math.max(1, savedPage), pages || savedPage);
    if (n <= 1) return;
    requestAnimationFrame(() => {
      stackRef.current
        ?.querySelector(`[data-pdf-page="${n}"]`)
        ?.scrollIntoView({ block: "start" });
      setPage(n);
    });
  }, [status, hydrated, savedPage, pages]);

  const go = useCallback(
    (n: number) => {
      if (pages === 0) return;
      const next = Math.min(pages, Math.max(1, n));
      markPage(next);
      stackRef.current
        ?.querySelector(`[data-pdf-page="${next}"]`)
        ?.scrollIntoView({ block: "start" });
    },
    [pages, markPage],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(page - 1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(page + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, page]);

  const zoomAt = ZOOM_STEPS.indexOf(zoom);
  const zoomOut = zoomAt <= 0 ? ZOOM_STEPS[0] : ZOOM_STEPS[zoomAt - 1];
  const zoomIn =
    zoomAt === -1
      ? ZOOM_STEPS[2]
      : zoomAt >= ZOOM_STEPS.length - 1
        ? ZOOM_STEPS[ZOOM_STEPS.length - 1]
        : ZOOM_STEPS[zoomAt + 1];

  return (
    <div className="mx-auto max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-widest text-accent-ink">{SOURCE_PDF.subtitle}</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
        {SOURCE_PDF.title}
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{SOURCE_PDF.blurb}</p>

      <div className="sticky top-[3.75rem] z-20 mt-6 -mx-4 flex flex-wrap items-center gap-2 border-y border-border bg-bg/90 px-4 py-2 backdrop-blur-md sm:mx-0 sm:rounded-xl sm:border sm:px-3">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Previous page"
          disabled={page <= 1 || status !== "ready"}
          onClick={() => go(page - 1)}
        >
          <ChevronLeft />
        </Button>
        <label className="flex items-center gap-2 font-mono text-xs text-muted">
          <span className="sr-only">Page</span>
          <Input
            type="number"
            min={1}
            max={pages || undefined}
            value={page}
            disabled={status !== "ready"}
            onChange={(e) => go(Number(e.target.value) || 1)}
            className="h-11 w-16 px-2 text-center tabular-nums"
            aria-label="Page number"
          />
          <span className="tabular-nums">/ {pages || "—"}</span>
        </label>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Next page"
          disabled={status !== "ready" || page >= pages}
          onClick={() => go(page + 1)}
        >
          <ChevronRight />
        </Button>
        <span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden />
        <Button
          variant="ghost"
          size="icon"
          aria-label="Zoom out"
          disabled={zoom <= ZOOM_STEPS[0]}
          onClick={() => setZoom(zoomOut)}
        >
          <Minus />
        </Button>
        <span className="hidden w-10 text-center font-mono text-xs tabular-nums text-muted sm:inline">
          {Math.round(zoom * 100)}%
        </span>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Zoom in"
          disabled={zoom >= ZOOM_STEPS[ZOOM_STEPS.length - 1]}
          onClick={() => setZoom(zoomIn)}
        >
          <Plus />
        </Button>
        <a
          href={SOURCE_PDF.src}
          download="MPC-XL-Field-Manual.pdf"
          className="ml-auto inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm text-muted transition-colors duration-150 hover:bg-elevated hover:text-fg"
        >
          <Download className="size-4" />
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>

      {status === "error" ? (
        <div className="mt-8 rounded-xl border border-border bg-surface p-6 shadow-panel">
          <p className="text-base text-fg">The pages could not be drawn here.</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Download the file and open it in any PDF reader. Same 27 pages.
          </p>
          <a
            href={SOURCE_PDF.src}
            download="MPC-XL-Field-Manual.pdf"
            className="mt-5 inline-flex h-12 items-center rounded-md bg-accent-fill px-5 text-sm font-medium text-accent-fg"
          >
            Download PDF
          </a>
        </div>
      ) : (
        <div ref={stackRef} className="mt-6 flex flex-col gap-6 overflow-x-auto">
          {status === "load" ? (
            <>
              <div className="pdf-sheet pdf-skeleton" aria-hidden />
              <p className="font-mono text-xs text-subtle">Opening the print edition…</p>
            </>
          ) : (
            Array.from({ length: pages }, (_, i) => (
              <div
                key={i}
                data-pdf-page={i + 1}
                className="pdf-sheet"
                role="img"
                aria-label={`Page ${i + 1}`}
              >
                <canvas
                  ref={(el) => {
                    canvases.current[i] = el;
                  }}
                  className="pdf-page"
                />
              </div>
            ))
          )}
        </div>
      )}

      <p className={cn("mt-6 font-mono text-xs text-subtle", status !== "ready" && "invisible")}>
        Arrow keys turn the page. Last page stays in this browser.
      </p>
    </div>
  );
}
