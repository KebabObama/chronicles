import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { buildSearchIndex } from "./scripts/content";

buildSearchIndex();

const prod = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  compiler: { removeConsole: prod },
  output: "export",

  env: { NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH },
  pageExtensions: ["ts", "tsx", "mdx", "md"],
  images: { unoptimized: true },
  basePath: process.env.BASE_PATH,
  typedRoutes: true,
  allowedDevOrigins: process.env.ALLOWED_ORIGINS?.split(";"),
  logging: {
    browserToTerminal: !prod,
    incomingRequests: !prod,
    fetches: { fullUrl: !prod, hmrRefreshes: !prod },
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
