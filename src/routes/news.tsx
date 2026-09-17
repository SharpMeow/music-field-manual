import { createFileRoute } from "@tanstack/react-router";
import { NewsDesk } from "@/components/news-feed";

export const Route = createFileRoute("/news")({ component: NewsDesk });
