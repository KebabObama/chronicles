import { Arrow, Underline } from "@/components/ui/decorations";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export const NavButton = ({ className, children, ...props }: ButtonProps) => {
  return (
    <div
      className={cn(
        "group/button group/arrow group/underline text-center font-dragon-hunter text-xl motion-safe:transition-all duration-150 ease-out relative tracking-widest font-light hover:font-normal w-fit text-muted-foreground group-hover/button:text-foreground",
        className,
      )}>
      <div
        {...props}
        className="w-full pb-1 group-hover/button:scale-95 origin-center transition-all duration-300 -mb-1 drop-shadow-md group-hover/button:drop-shadow-muted-foreground">
        {children}
      </div>
      <Arrow />
      <Underline />
    </div>
  );
};
