import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  logging: {
    browserToTerminal: true,
    incomingRequests: true,
    fetches: { fullUrl: true, hmrRefreshes: true },
  },
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.BASE_PATH,
  typedRoutes: true,
};

export default nextConfig;
