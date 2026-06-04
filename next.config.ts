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
  basePath: "/chronicles",
  typedRoutes: true,
};

export default nextConfig;
