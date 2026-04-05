import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oe-mgarage.com",
      },
    ],
  },
};

export default nextConfig;
