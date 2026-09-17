import { useEffect, useState } from "react";

export function usePresence(open: boolean, exitMs: number) {
  const [render, setRender] = useState(open);
  const [entered, setEntered] = useState(open);

  useEffect(() => {
    if (open) {
      setRender(true);
      const id = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(id);
    }
    setEntered(false);
    const t = window.setTimeout(() => setRender(false), exitMs);
    return () => window.clearTimeout(t);
  }, [open, exitMs]);

  return { render, entered };
}

export function useScrollLock(lock: boolean) {
  useEffect(() => {
    if (!lock) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lock]);
}
