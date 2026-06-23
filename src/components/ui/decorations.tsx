import { cn } from "@/lib/utils";

export const Underline = ({
  variant = "growing",
  className = "",
}: {
  variant?: "growing" | "shrinking";
  className?: string;
}) => {
  return (
    <span
      role="presentation"
      className={cn(
        "absolute top-full left-1/2 h-px -translate-x-1/2 rounded",
        "z-39 duration-500 ease-out motion-safe:transition-all",
        "group-hover/underline:translate-y-0.75",
        "bg-linear-to-r from-40% from-muted-foreground via-background to-60% to-muted-foreground",
        variant === "shrinking" && "w-full group-hover/underline:w-0",
        variant === "growing" &&
          "w-6 from-20% to-80% group-hover/underline:w-full group-hover/underline:from-40% group-hover/underline:to-60%",
        className,
      )}
    />
  );
};

export const Arrow = ({
  className,
  fill = "none",
  viewBox = "0 0 12 11",
  title = "arrow",
  ...props
}: React.SVGProps<SVGSVGElement> & { title?: string }) => {
  return (
    <svg
      className={cn(
        "absolute top-[calc(100%-0.25rem)] left-1/2 z-41 size-2 -translate-x-1/2 duration-400 ease-out motion-safe:transition-all",
        "group-hover/arrow:size-3 group-hover/arrow:translate-y-0.5 group-hover/arrow:text-red-400",
        className,
      )}
      viewBox={viewBox}
      fill={fill}
      {...props}>
      <title>{title}</title>
      <path
        d="M5.99663 1.90164C6.17835 1.90164 6.36007 1.88524 6.53505 1.84699C7.8811 1.55737 10.3646 0.622951 11.7577 0L12 0.398905C8.27818 2.11475 6.74369 8.09836 6.212 11H5.788C5.25631 8.09836 3.72182 2.11475 0 0.398905L0.235558 0C1.62199 0.622951 4.10544 1.55737 5.45822 1.84699C5.6332 1.88524 5.81492 1.90164 5.99663 1.90164Z"
        fill="currentColor"></path>
    </svg>
  );
};
