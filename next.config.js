/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gaaga.wpengine.com",
      },
    ],
  },
};

module.exports = nextConfig;
