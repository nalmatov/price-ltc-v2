import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/index.html',
        destination: '/',
      },
    ];
  }
};

export default nextConfig;
