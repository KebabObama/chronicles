import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export type DialogContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type RootProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onChange?: (open: boolean) => void;
  children: React.ReactNode;
};

type TriggerChildProps = React.ReactElement<{
  onClick?: React.MouseEventHandler;
}>;

export const dialogContext = createContext<DialogContext>({} as DialogContext);

export const Root = ({ defaultOpen = false, open: controlledOpen, onChange, children }: RootProps) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = (value: React.SetStateAction<boolean>) => {
    const nextState = value instanceof Function ? value(open) : value;
    if (!isControlled) setInternalOpen(nextState);
    onChange?.(nextState);
  };

  return <dialogContext.Provider value={{ open, setOpen }}>{children}</dialogContext.Provider>;
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
  const { setOpen } = useContext(dialogContext);

  const child = Children.toArray(children)[0];
  if (!isValidElement(child)) return <>{children}</>;

  return cloneElement(child as TriggerChildProps, {
    onClick: (e: React.MouseEvent) => {
      (child as TriggerChildProps).props.onClick?.(e);
      setOpen((p) => !p);
    },
  });
};

const Content = ({ children, className }: { children?: React.ReactNode; className?: string; close?: boolean }) => {
  const { open, setOpen } = useContext(dialogContext);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      role={"none"}
      className="bg-transparent border-none p-0 max-w-none max-h-none overflow-visible backdrop:bg-muted/60 backdrop:backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === dialogRef.current) setOpen(false);
      }}>
      <div
        role={"none"}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "fixed inset-0 z-50 m-auto grid w-full max-w-lg gap-4 border rounded-3xl text-foreground bg-card p-8 shadow-lg h-fit",
          "fade-in-0 zoom-in-95 duration-200 corner-scoop animate-in",
          className,
        )}>
        {children}
      </div>
    </dialog>
  );
};

export const useDialog = () => {
  const context = useContext(dialogContext);
  if (!context) throw new Error("useDialog must be used within a Dialog Provider");
  return context;
};

export const Dialog = Object.assign(Root, {
  Trigger,
  Content,
});
