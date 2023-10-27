/** @type {import('next').NextConfig} */
const nextConfig = {
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
