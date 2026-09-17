import { createFileRoute } from "@tanstack/react-router";
import { PdfReader } from "@/components/pdf-reader";

export const Route = createFileRoute("/manual")({ component: PdfReader });
