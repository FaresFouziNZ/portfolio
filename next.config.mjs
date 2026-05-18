/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// Static export for GitHub Pages at faresfouzinz.github.io/portfolio
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
