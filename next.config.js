/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  // distDir: "build",
  // output: "export",
  basePath: "/blog",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage-dev.gooddreamer.id",
      },
      {
        protocol: "https",
        hostname: "api.gooddreamer.id",
      },
      {
        protocol: "https",
        hostname: "storage.gooddreamer.id",
      },
    ],
  },
};
