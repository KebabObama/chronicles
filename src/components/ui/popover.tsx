"use client";

import {
  Children,
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { cn, type TriggerElement } from "@/lib/utils";

export type PopoverSide = "top" | "right" | "bottom" | "left";
export type PopoverAlign = "start" | "center" | "end";

export type PopoverContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  side: PopoverSide;
  align: PopoverAlign;
  sideOffset: number;
};

export type RootProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onChange?: (open: boolean) => void;
  side?: PopoverSide;
  align?: PopoverAlign;
  sideOffset?: number;
  children: React.ReactNode;
};

type Position = {
  top: number;
  left: number;
};

export const popoverContext = createContext<PopoverContext>({} as PopoverContext);

export const Root = ({
  defaultOpen = false,
  open: controlledOpen,
  onChange,
  side = "bottom",
  align = "center",
  sideOffset = 12,
  children,
}: RootProps) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (value: React.SetStateAction<boolean>) => {
      const nextState = value instanceof Function ? value(open) : value;
      if (!isControlled) setInternalOpen(nextState);
      onChange?.(nextState);
    },
    [isControlled, open, onChange],
  );

  return (
    <popoverContext.Provider value={{ open, setOpen, triggerRef, contentRef, side, align, sideOffset }}>
      {children}
    </popoverContext.Provider>
  );
};

const Trigger = ({ children }: { children: TriggerElement }) => {
  const { open, setOpen, triggerRef } = useContext(popoverContext);
  const child = Children.only(children);

  return cloneElement(child, {
    ref: triggerRef,
    "aria-expanded": open,
    "aria-haspopup": "dialog",
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      child.props.onClick?.(e);
      setOpen((value) => !value);
    },
  });
};

const Content = ({
  children,
  className,
  close = true,
  side: sideProp,
  align: alignProp,
  sideOffset: sideOffsetProp,
}: {
  children?: React.ReactNode;
  className?: string;
  close?: boolean;
  side?: PopoverSide;
  align?: PopoverAlign;
  sideOffset?: number;
}) => {
  const { open, setOpen, triggerRef, contentRef, side, align, sideOffset } = useContext(popoverContext);
  const [position, setPosition] = useState<Position | null>(null);
  const resolvedSide = sideProp ?? side;
  const resolvedAlign = alignProp ?? align;
  const resolvedSideOffset = sideOffsetProp ?? sideOffset;

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    const content = contentRef.current;
    if (!trigger || !content) return;

    const triggerRect = trigger.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();

    let top = triggerRect.top;
    let left = triggerRect.left;

    switch (resolvedSide) {
      case "top":
        top = triggerRect.top - contentRect.height - resolvedSideOffset;
        if (resolvedAlign === "start") {
          left = triggerRect.left;
        } else if (resolvedAlign === "end") {
          left = triggerRect.right - contentRect.width;
        } else {
          left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
        }
        break;
      case "right":
        left = triggerRect.right + resolvedSideOffset;
        if (resolvedAlign === "start") {
          top = triggerRect.top;
        } else if (resolvedAlign === "end") {
          top = triggerRect.bottom - contentRect.height;
        } else {
          top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
        }
        break;
      case "left":
        left = triggerRect.left - contentRect.width - resolvedSideOffset;
        if (resolvedAlign === "start") {
          top = triggerRect.top;
        } else if (resolvedAlign === "end") {
          top = triggerRect.bottom - contentRect.height;
        } else {
          top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
        }
        break;
      default:
        top = triggerRect.bottom + resolvedSideOffset;
        if (resolvedAlign === "start") {
          left = triggerRect.left;
        } else if (resolvedAlign === "end") {
          left = triggerRect.right - contentRect.width;
        } else {
          left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
        }
        break;
    }

    setPosition({ top, left });
  }, [resolvedAlign, resolvedSide, resolvedSideOffset, triggerRef, contentRef]);

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      const trigger = triggerRef.current;
      const content = contentRef.current;
      if (!(target instanceof Node) || !content || !trigger) return;
      if (content.contains(target) || trigger.contains(target)) return;
      setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const handleReposition = () => updatePosition();

    window.addEventListener("pointerdown", handlePointerDown, true);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown, true);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  }, [open, setOpen, triggerRef, contentRef, updatePosition]);

  if (!open || typeof document === "undefined") return null;

  const originClass =
    resolvedSide === "top"
      ? "origin-bottom"
      : resolvedSide === "right"
        ? "origin-left"
        : resolvedSide === "left"
          ? "origin-right"
          : "origin-top";

  return createPortal(
    <div
      ref={contentRef}
      role="dialog"
      aria-modal="false"
      data-side={resolvedSide}
      className={cn(
        "fixed z-50 w-max max-w-[calc(100vw-1rem)] rounded-2xl border bg-card p-4 text-foreground shadow-lg",
        "animate-in fade-in-0 zoom-in-95 duration-150",
        originClass,
        className,
      )}
      style={{
        top: position?.top ?? 0,
        left: position?.left ?? 0,
        visibility: position ? "visible" : "hidden",
      }}>
      {children}
      {close && (
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
          ×
        </button>
      )}
    </div>,
    document.body,
  );
};

export const usePopover = () => {
  const context = useContext(popoverContext);
  if (!context) throw new Error("usePopover must be used within a Popover Provider");
  return context;
};

export const Popover = Object.assign(Root, {
  Trigger,
  Content,
});
