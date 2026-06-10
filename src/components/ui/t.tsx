import { Arrow, Underline } from "@/components/ui/decorations";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  tooltip: React.ReactNode;
  tClassName?: string;
};

export const T = ({ tooltip, children, className, tClassName, ...props }: Props) => {
  return (
    <i className={cn("group/tooltip group/underline group/arrow relative inline-flex", className)} {...props}>
      {children}
      <Arrow className="mt-1" />
      <Underline className="mt-1" variant="shrinking" />
      <span
        className={cn(
          "absolute hidden lg:block top-full -mt-px drop-shadow-sm drop-shadow-muted-foreground left-1/2 -translate-x-1/2 transition-all duration-500 cursor-auto z-10 ease-out bg-background px-6 pb-2 pt-1 opacity-0 translate-y-2 pointer-events-none rounded-bl-2xl rounded-tr-2xl border-2",
          "group-hover/tooltip:opacity-100 group-hover/tooltip:pointer-events-auto",
          tClassName,
        )}>
        {tooltip}
      </span>
    </i>
  );
};
