import { Arrow, Underline } from "@/components/ui/decorations";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  title: string;
};

export const T = ({ title, children, className, ...props }: Props) => {
  return (
    <span
      className={cn(
        "group/tooltip group/underline group/arrow relative inline-flex overflow-visible italic hover:z-80 hover:text-foreground",
        "tooltip:absolute tooltip:top-full tooltip:hidden tooltip:w-max tooltip:not-italic tooltip:lg:block",
        "tooltip:min-w-48 tooltip:max-w-xs tooltip:translate-y-2 tooltip:text-muted-foreground tooltip:sm:max-w-sm tooltip:md:max-w-md",
        "tooltip:left-1/2 tooltip:text-start tooltip:drop-shadow-muted-foreground tooltip:drop-shadow-sm",
        "tooltip:z-40 tooltip:-translate-x-1/2 tooltip:cursor-auto tooltip:transition-all tooltip:duration-500",
        "tooltip:bg-background tooltip:px-6 tooltip:pt-1 tooltip:pb-2 tooltip:opacity-0 tooltip:ease-out",
        "tooltip:pointer-events-none tooltip:rounded-tr-2xl tooltip:rounded-bl-2xl tooltip:border-2",
        "tooltip:text-sm tooltip:group-hover/tooltip:translate-y-0.75 tooltip:group-hover/tooltip:opacity-100",
        className,
      )}
      {...props}>
      {title}
      <Arrow />
      <Underline variant="shrinking" />
      <span data-tooltip>{children}</span>
    </span>
  );
};
