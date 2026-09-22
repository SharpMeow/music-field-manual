import { createFileRoute } from "@tanstack/react-router";
import { PdfReader } from "@/components/pdf-reader";

export const Route = createFileRoute("/manual")({
  head: () => ({ meta: [{ title: "Print edition · Music Field Manual" }] }),
  component: PdfReader,
});
