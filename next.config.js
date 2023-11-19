/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gaaga.wpengine.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: `/images/**`,
      },
    ],
  },
};

module.exports = nextConfig;
