declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const title: string;
  export const summary: string;
  export const slug: string;

  const MDXComponent: ComponentType<Record<string, unknown>>;

  export default MDXComponent;
}
