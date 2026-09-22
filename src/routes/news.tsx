import { createFileRoute } from "@tanstack/react-router";
import { NewsDesk } from "@/components/news-feed";

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [{ title: "Dispatch · Music Field Manual" }] }),
  component: NewsDesk,
});
