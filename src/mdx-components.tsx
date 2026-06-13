import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";

const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1
      {...props}
      className="mt-8 mb-4 scroll-mt-24 font-dragon-hunter text-foreground/90 text-2xl sm:text-3xl tracking-widest underline underline-offset-6 md:text-4xl text-center lg:text-start">
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      {...props}
      className="scroll-mt-24 mt-6 font-dragon-hunter text-foreground/90 underline underline-offset-4 text-xl sm:text-2xl font-extralight tracking-widest text-center lg:text-start">
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      {...props}
      className="scroll-mt-24 mt-4 text-lg font-dragon-hunter text-foreground/90 font-extralight tracking-widest text-center lg:text-start">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="leading-7 my-2 text-muted-foreground text-justify">{children}</p>,
  a: ({ href, children }) => (
    <a href={href} className="underline underline-offset-4 transition-colors hover:text-muted-foreground">
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="list-disc space-y-2 pl-6">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal space-y-2 pl-6">{children}</ol>,
  li: ({ children }) => <li className="leading-7">{children}</li>,
  table: ({ children }) => (
    <table className="w-full border-2 border-border text-center tracking-wide">{children}</table>
  ),
  thead: ({ children }) => <thead className="bg-muted font-dragon-hunter font-extralight">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => <th className="border-b border-border p-2">{children}</th>,
  td: ({ children }) => <td className="border-b border-border p-2">{children}</td>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-border pl-4 italic text-muted-foreground">{children}</blockquote>
  ),
  pre: ({ children }) => (
    <pre className="overflow-x-auto rounded-2xl border border-border bg-muted p-4">{children}</pre>
  ),
  code: ({ className, children }) => (
    <code className={cn("rounded bg-muted px-1.5 py-0.5 text-sm", className)}>{children}</code>
  ),
};

export const useMDXComponents = () => {
  return components;
};
