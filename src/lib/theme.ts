export type Theme = "dark" | "light";

export const THEME_KEY = "xl-theme";
export const THEME_EVENT = "xl-theme";

const THEME_COLOR: Record<Theme, string> = {
  dark: "#0c0b0a",
  light: "#f3eee4",
};

export function getTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* private mode */
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLOR[theme]);
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function subscribeTheme(onStore: () => void) {
  window.addEventListener(THEME_EVENT, onStore);
  return () => window.removeEventListener(THEME_EVENT, onStore);
}

export const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark")t="dark";document.documentElement.setAttribute("data-theme",t);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="light"?"#f3eee4":"#0c0b0a");}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;
