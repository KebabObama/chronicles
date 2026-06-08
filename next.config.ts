import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const prod = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  compiler: { removeConsole: prod },
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx"],
  images: { unoptimized: true },
  basePath: process.env.BASE_PATH,
  typedRoutes: true,
  allowedDevOrigins: process.env.ALLOWED_ORIGINS?.split(";"),
  experimental: { mdxRs: true },
  logging: {
    browserToTerminal: !prod,
    incomingRequests: !prod,
    fetches: { fullUrl: !prod, hmrRefreshes: !prod },
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
