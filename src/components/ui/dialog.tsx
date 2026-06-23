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
        "fixed inset-auto inset-x-0 top-4 z-50 m-auto hidden h-fit max-h-[calc(100dvh-2rem)] min-h-40 w-[calc(100%-1rem)] gap-4 rounded-3xl border bg-card p-8 text-foreground shadow-lg open:block sm:inset-0 sm:max-w-lg",
        "fade-in-0 zoom-in-95 corner-scoop select-none duration-200",
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
