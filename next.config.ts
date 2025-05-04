import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
