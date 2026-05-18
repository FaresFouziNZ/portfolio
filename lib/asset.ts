// Prepend the configured basePath to a public asset URL.
//
// Next.js applies `basePath` automatically to internal routes and to
// next/image when optimization is on, but NOT to the `src` of an Image with
// `unoptimized: true`. Static export uses unoptimized images, so any /assets/*
// reference would 404 once deployed under /portfolio/. This helper plugs that
// gap. Keep it the only place we hard-code the basePath string.
const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function asset(path: string): string {
  // Ensure exactly one leading slash so callers can write either "/x" or "x".
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
