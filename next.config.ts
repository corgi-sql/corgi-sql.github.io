import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: "./",
  // basePath: "/corgi-sql",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
