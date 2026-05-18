// Prepend the configured basePath to a public asset URL.
//
// Next.js applies `basePath` automatically to internal routes and to
// next/image when optimization is on, but NOT to the `src` of an Image with
// `unoptimized: true`. Static export uses unoptimized images, so any /assets/*
// reference would 404 once deployed under a non-root path. This helper plugs
// that gap.
//
// The basePath is read from NEXT_PUBLIC_BASE_PATH so the same code works on
// any host - leave the env var unset for Vercel / root deploys, set it to
// "/portfolio" (or whatever sub-path) for GitHub Pages.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  // Ensure exactly one leading slash so callers can write either "/x" or "x".
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
