"use client";

import { Children, cloneElement, createContext, isValidElement, useContext, useId } from "react";
import { cn, type TriggerElement } from "@/lib/utils";

export type DialogContext = {
  id: string;
};

export type DialogContent = Omit<
  React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
    ref?: React.RefObject<HTMLDivElement | null>;
  },
  "id" | "popover"
>;

export const dialogContext = createContext<DialogContext>({} as DialogContext);

export const Root = ({ children, id }: { id?: string; children: React.ReactNode }) => {
  const generated = useId();

  return <dialogContext.Provider value={{ id: id ?? generated }}>{children}</dialogContext.Provider>;
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
  const { id } = useContext(dialogContext);

  const child = Children.toArray(children)[0];
  if (!isValidElement(child)) return <>{children}</>;

  return cloneElement(child as TriggerElement, { popoverTarget: id });
};

const Content = ({ children, className, ...props }: DialogContent) => {
  const { id } = useContext(dialogContext);

  return (
    <div
      id={id}
      {...props}
      popover="auto"
      className={cn(
        "fixed hidden inset-auto inset-x-0 sm:inset-0 z-50 max-h-[calc(100dvh-2rem)] min-h-40 m-auto open:block w-[calc(100%-1rem)] top-4 sm:max-w-lg gap-4 border rounded-3xl text-foreground bg-card p-8 shadow-lg h-fit",
        "fade-in-0 zoom-in-95 duration-200 corner-scoop open:animate-in select-none",
        "overflow-visible backdrop:bg-muted/60 backdrop:backdrop-blur-sm",
        className,
      )}>
      {children}
    </div>
  );
};

export const Dialog = Object.assign(Root, {
  Trigger,
  Content,
});
