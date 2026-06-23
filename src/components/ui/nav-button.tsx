import { Arrow, Underline } from "@/components/ui/decorations";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export const NavButton = ({ className, children, ...props }: ButtonProps) => {
  return (
    <div
      className={cn(
        "group/button group/arrow group/underline relative w-fit overflow-visible text-center font-dragon-hunter font-light text-muted-foreground text-xl tracking-widest duration-150 ease-out hover:font-normal group-hover/button:text-foreground motion-safe:transition-all",
        "*:data-inner-button:-mb-1 *:data-inner-button:w-full *:data-inner-button:origin-center *:data-inner-button:pb-1 *:data-inner-button:drop-shadow-md *:data-inner-button:transition-all *:data-inner-button:duration-300 *:data-inner-button:group-hover/button:scale-95 *:data-inner-button:group-hover/button:drop-shadow-muted-foreground",
        className,
      )}>
      <div {...props} data-inner-button>
        {children}
      </div>
      <Arrow />
      <Underline />
    </div>
  );
};
