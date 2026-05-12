import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // eslint: {
  //   ignoreDuringBuilds: true, // Build sırasında lint hatalarını geçici olarak yoksaymak için
  // },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
