import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  sub?: React.ReactNode;
};

export const Button = ({ className, type = "button", children, sub, ...props }: ButtonProps) => {
  return (
    <div
      className={cn(
        "group/button text-center font-dragon-hunter text-xl relative tracking-widest font-light hover:font-normal w-fit",
        className,
      )}>
      <button
        type={type}
        {...props}
        className="transition-all duration-150 ease-out w-full text-muted-foreground group-hover/button:text-foreground group-hover/button:drop-shadow-[0_0_6px_var(--color-muted-foreground)] pb-1 -mb-1">
        {children}
      </button>
      <svg
        className="size-2 group-hover/button:size-3 absolute top-[calc(100%-0.25rem)] z-20 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover/button:text-red-400 group-hover/button:translate-y-0.5 ease-out"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <title>Arrow</title>
        <path
          d="M5.99663 1.90164C6.17835 1.90164 6.36007 1.88524 6.53505 1.84699C7.8811 1.55737 10.3646 0.622951 11.7577 0L12 0.398905C8.27818 2.11475 6.74369 8.09836 6.212 11H5.788C5.25631 8.09836 3.72182 2.11475 0 0.398905L0.235558 0C1.62199 0.622951 4.10544 1.55737 5.45822 1.84699C5.6332 1.88524 5.81492 1.90164 5.99663 1.90164Z"
          fill="currentColor"></path>
      </svg>
      {sub && (
        <div
          className={cn(
            "absolute hidden md:block top-full left-1/2 -translate-x-1/2 transition-all duration-300 z-10 ease-out bg-background px-3 py-2",
            "group-hover/button:opacity-100 group-hover/button:translate-y-1 group-hover/button:pointer-events-auto",
            "opacity-0 translate-y-2 pointer-events-none rounded-bl-2xl rounded-tr-2xl border-2",
          )}>
          {sub}
        </div>
      )}
      <div
        className={cn(
          "absolute top-full left-1/2 rounded group-hover/button:translate-y-0.75 -translate-y-0.5 -translate-x-1/2 group-hover/button:w-full w-0 bg-foreground h-0.5 transition-all duration-500 ease-out",
          sub && "md:hidden",
        )}
      />
      <div
        className={cn(
          "absolute rounded-full top-full left-1/2 group-hover/button:translate-y-0.75 -translate-y-0.5 -translate-x-1/2 group-hover/button:w-3.5 z-1 w-0 bg-card h-0.5 transition-all duration-300 ease-out",
          sub && "md:hidden",
        )}
      />
    </div>
  );
};
