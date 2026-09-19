import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "oe-mgarage.com",
    //   },
    // ],
     localPatterns: [
      {
        pathname: '/images/carpics/**', // Allows any query params (?w=1200, etc.) on these images
      },
    ],
  },
};

export default nextConfig;
