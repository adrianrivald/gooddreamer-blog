/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
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
    ],
  },
};
