import type { NextConfig } from "next";

const prod = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  compiler: { removeConsole: prod },
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.BASE_PATH,
  typedRoutes: true,
  logging: {
    browserToTerminal: !prod,
    incomingRequests: !prod,
    fetches: { fullUrl: !prod, hmrRefreshes: !prod },
  },
};

export default nextConfig;
