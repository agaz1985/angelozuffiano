import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

const MATH_PATTERN =
  /\$\$[\s\S]+?\$\$|\\\((?:[^)]|\\\))*?\\\)|\\\[[\s\S]*?\\\]|\$\S(?:[^$\n]{0,300}?\S)?\$/;

/**
 * Detects whether a markdown body contains math, so the (heavy) KaTeX
 * stylesheet can be loaded only on the pages that actually need it.
 */
export function hasMath(markdown: string | undefined) {
  if (!markdown) return false;
  return MATH_PATTERN.test(markdown);
}

