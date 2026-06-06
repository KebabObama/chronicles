"use client";

import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Links } from "@/components/layout/links";
import { cn } from "@/lib/utils";

const CLOSING_DISTANCE = 50;

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  let touchStartX = 0;

  const start = (e: React.TouchEvent<HTMLButtonElement>) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const end = (e: React.TouchEvent<HTMLButtonElement>) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > CLOSING_DISTANCE) {
      setOpen(false);
    }
  };

  return (
    <>
      <button type="button" className="md:hidden" onClick={() => setOpen(!open)}>
        <BiMenu size={24} />
      </button>
      <button
        type="button"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-30 bg-muted/20 md:hidden cursor-auto backdrop-blur-xs",
          "will-change-auto transition-opacity duration-300 ease-in-out",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onTouchStart={start}
        onTouchEnd={end}
      />
      <aside
        onTouchStart={start}
        onTouchEnd={end}
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-64 bg-card p-6 md:hidden border-r-4 flex flex-col gap-6",
          "will-change-transform transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full pointer-events-none",
        )}>
        <Links />
      </aside>
    </>
  );
};
