"use client";

import { useRef } from "react";
import { GiArchiveResearch, GiHamburgerMenu } from "react-icons/gi";
import { Search } from "@/components/layout/search";
import { Dialog } from "@/components/ui/dialog";
import { NavButton } from "@/components/ui/nav-button";

const CLOSING_DISTANCE = 50;

type Pointer = {
  clientX: number;
  clientY: number;
};

export const Sidebar = ({ children }: { children?: React.ReactNode }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  let pointerStart: Pointer = {
    clientX: 0,
    clientY: 0,
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    pointerStart = e;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();

    const deltaX = pointerStart.clientX - e.clientX;
    const deltaY = pointerStart.clientY - e.clientY;

    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    if (distance > CLOSING_DISTANCE) {
      dialogRef.current?.hidePopover();
    }
  };

  return (
    <Dialog>
      <Dialog.Trigger>
        <button type="button" className="md:hidden">
          <GiHamburgerMenu size={24} />
        </button>
      </Dialog.Trigger>
      <Dialog.Content
        ref={dialogRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] max-w-none touch-pan-y flex-col items-center text-center open:flex sm:inset-auto sm:top-0 sm:bottom-0 sm:left-0 sm:w-auto sm:min-w-xs sm:rounded-l-none md:open:hidden">
        {children}
        <Search>
          <button
            type="button"
            className="group/button group/arrow group/underline z-5 mt-auto flex cursor-pointer items-center gap-2 text-lg">
            <GiArchiveResearch className="hidden size-5 translate-x-full opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100 lg:block" />
            <NavButton className="text-foreground lg:text-muted-foreground">Search</NavButton>
          </button>
        </Search>
      </Dialog.Content>
    </Dialog>
  );
};
