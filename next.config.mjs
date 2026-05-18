/** @type {import('next').NextConfig} */

// basePath is controlled by the NEXT_PUBLIC_BASE_PATH env var so the same
// build works on any host:
//   - Vercel / custom domain at root     -> leave the var unset (default)
//   - GitHub Pages at <user>.github.io/X -> set NEXT_PUBLIC_BASE_PATH=/X
//
// The env var is read by lib/asset.ts and app/layout.tsx as well so all
// public/ asset URLs and the OG image stay in sync.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
