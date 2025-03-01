/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "aceternity.com",
      "api.microlink.io",
      "5.imimg.com",
      "i.ibb.co",
      "placehold.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
