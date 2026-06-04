import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: '/chronicles'
  // cacheComponents: true,
};

export default nextConfig;
