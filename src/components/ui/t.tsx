import { Arrow, Underline } from "@/components/ui/decorations";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  title: string;
};

export const T = ({ title, children, className, ...props }: Props) => {
  return (
    <span
      className={cn(
        "group/tooltip group/underline group/arrow italic hover:text-foreground relative inline-flex overflow-visible hover:z-80",
        "tooltip:absolute tooltip:hidden tooltip:lg:block tooltip:top-full tooltip:w-max tooltip:not-italic",
        "tooltip:max-w-xs tooltip:sm:max-w-sm tooltip:md:max-w-md tooltip:min-w-48 tooltip:text-muted-foreground tooltip:translate-y-2",
        "tooltip:text-start tooltip:drop-shadow-sm tooltip:drop-shadow-muted-foreground tooltip:left-1/2",
        "tooltip:-translate-x-1/2 tooltip:transition-all tooltip:duration-500 tooltip:cursor-auto tooltip:z-40",
        "tooltip:ease-out tooltip:bg-background tooltip:px-6 tooltip:pb-2 tooltip:pt-1 tooltip:opacity-0",
        "tooltip:pointer-events-none tooltip:rounded-bl-2xl tooltip:rounded-tr-2xl tooltip:border-2",
        "tooltip:group-hover/tooltip:opacity-100 tooltip:group-hover/tooltip:translate-y-0.75 tooltip:text-sm",
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
