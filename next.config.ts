import type { NextConfig } from "next";

const prod = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  logging: {
    browserToTerminal: !prod,
    incomingRequests: !prod,
    fetches: { fullUrl: !prod, hmrRefreshes: !prod },
  },
  compiler: {
    removeConsole: prod,
    define: {
      APP_NAME: process.env.APP_NAME as string,
      BASE_PATH: process.env.BASE_PATH as string,
    },
  },
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.BASE_PATH,
  typedRoutes: true,
};

export default nextConfig;
