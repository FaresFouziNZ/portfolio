// /** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === "production";
// const nextConfig = {
//   reactStrictMode: true,
//   basePath: "/portfolio",
//   // output: "export",
//   images: {
//     domains: ["b2332b54ed.imgdist.com"],
//     unoptimized: true,
//   },
//   trailingSlash: true,
//   assetPrefix: isProd ? "./" : undefined,
// };

// export default nextConfig;
const repoName = "portfolio";

const nextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
