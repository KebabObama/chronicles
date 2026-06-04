import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type Heading = "h1" | "h2" | "h3";

export type ArticleProps = {
  id?: string;
  title: string;
  children?: React.ReactNode;
  heading?: Heading;
  className?: string;
};

const headerVariants = cva("tracking-tight underline", {
  variants: {
    heading: {
      h1: "font-extrabold text-3xl md:text-4xl",
      h2: "font-bold text-2xl",
      h3: "font-semibold text-xl",
    },
  },
  defaultVariants: { heading: "h2" },
});

export const Article = ({ title, children, id, heading: Tag = "h2", className }: ArticleProps) => {
  const generatedId = id ?? title.toLowerCase().replace(/\s+/g, "-");

  return (
    <article id={generatedId} className={cn("flex flex-col gap-4 py-6 container", className)}>
      <Tag className={headerVariants({ heading: Tag })}>{title}</Tag>
      {children}
    </article>
  );
};
