import { Arrow, Underline } from "@/components/ui/decorations";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export const NavButton = ({ className, children, ...props }: ButtonProps) => {
  return (
    <div
      className={cn(
        "group/button group/arrow group/underline text-center overflow-visible font-dragon-hunter text-xl motion-safe:transition-all duration-150 ease-out relative tracking-widest font-light hover:font-normal w-fit text-muted-foreground group-hover/button:text-foreground",
        "*:data-inner-button:w-full *:data-inner-button:pb-1 *:data-inner-button:group-hover/button:scale-95 *:data-inner-button:origin-center *:data-inner-button:transition-all *:data-inner-button:duration-300 *:data-inner-button:-mb-1 *:data-inner-button:drop-shadow-md *:data-inner-button:group-hover/button:drop-shadow-muted-foreground",
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
