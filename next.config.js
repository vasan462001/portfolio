/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for Capacitor static export

  images: {
    unoptimized: true, // Required when using output: "export"
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  trailingSlash: true,

  turbopack: {},
};

module.exports = nextConfig;