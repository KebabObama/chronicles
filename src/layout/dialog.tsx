import React from "react";
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

export type Trigger = React.ReactElement<React.ComponentPropsWithoutRef<"button">>;

export const dialogContext = React.createContext<DialogContext>({} as DialogContext);

export const Root = ({ defaultOpen = false, open: controlledOpen, onChange, children }: RootProps) => {
  const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = React.useCallback(
    (value: React.SetStateAction<boolean>) => {
      const nextState = value instanceof Function ? value(open) : value;
      if (!isControlled) setInternalOpen(nextState);
      onChange?.(nextState);
    },
    [isControlled, open, onChange],
  );

  return <dialogContext.Provider value={{ open, setOpen }}>{children}</dialogContext.Provider>;
};

const Trigger = ({ children }: { children: Trigger }) => {
  const { setOpen } = React.useContext(dialogContext);
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      child.props.onClick?.(e);
      setOpen((p) => !p);
    },
  });
};

const Content = ({ children, className, close = true }: { children: React.ReactNode; className?: string; close?: boolean }) => {
  const { open, setOpen } = React.useContext(dialogContext);
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
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
      onClick={(e) => {
        if (e.target === dialogRef.current) setOpen(false);
      }}
      className="bg-transparent border-none p-0 max-w-none max-h-none overflow-visible backdrop:bg-black/80 backdrop:backdrop-blur-sm open:animate-in open:fade-in-0">
      <div
        role={"none"}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "fixed inset-0 z-50 m-auto grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg rounded-lg h-fit",
          "animate-in fade-in-0 zoom-in-95 duration-200",
          className,
        )}>
        {children}
        {close && (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
            ✕
          </button>
        )}
      </div>
    </dialog>
  );
};

export const useDialog = () => {
  const context = React.useContext(dialogContext);
  if (!context) throw new Error("useDialog must be used within a Dialog Provider");
  return context;
};

export const Dialog = Object.assign(Root, {
  Trigger,
  Content,
});
