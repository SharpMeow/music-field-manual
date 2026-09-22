#!/usr/bin/env node
/**
 * Crawl the running app from `/` and fail on anything a reader would hit:
 * a non-200 page, an uncaught error in the page, or a page that scrolls
 * sideways on a phone.
 *
 *   npm run dev            # in one terminal
 *   npm run check:routes   # in another
 *
 * BASE_URL overrides the target (default http://127.0.0.1:8080).
 * CHROMIUM_PATH points at a browser binary when Playwright's own is not
 * installed.
 */
import { chromium } from "playwright";

const BASE = (process.env.BASE_URL || "http://127.0.0.1:8080").replace(/\/$/, "");
const START = ["/", "/news", "/manual"];
const WIDTHS = [1280, 375];

const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);

const problems = [];
let pages = 0;

for (const width of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  const seen = new Set();
  const queue = [...START];

  while (queue.length) {
    const path = queue.shift();
    if (seen.has(path)) continue;
    seen.add(path);

    const page = await ctx.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));

    const res = await page.goto(BASE + path, { waitUntil: "networkidle" }).catch((e) => {
      errors.push(e.message);
      return null;
    });
    const status = res?.status() ?? 0;
    if (status !== 200) problems.push(`${width}px ${path}: HTTP ${status}`);

    const { links, overflow } = await page.evaluate(() => ({
      links: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
      overflow: document.documentElement.scrollWidth - window.innerWidth,
    }));
    if (overflow > 0) problems.push(`${width}px ${path}: scrolls sideways by ${overflow}px`);
    for (const e of errors) problems.push(`${width}px ${path}: ${e}`);

    for (const href of links) {
      if (!href?.startsWith("/") || href.startsWith("//")) continue;
      const next = href.split(/[?#]/)[0];
      if (/\.[a-z0-9]+$/i.test(next)) continue; // files, not routes
      if (!seen.has(next)) queue.push(next);
    }
    await page.close();
    pages += 1;
  }
  await ctx.close();
}

await browser.close();

if (problems.length) {
  console.error(`check-routes: ${problems.length} problem(s)\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
console.log(`check-routes: ${pages} page loads across ${WIDTHS.join("px, ")}px, all clean`);
