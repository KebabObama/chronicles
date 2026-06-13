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
        className="sm:rounded-l-none touch-pan-y sm:inset-auto open:flex flex-col h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] items-center max-w-none sm:w-auto text-center md:open:hidden sm:min-w-xs sm:top-0 sm:left-0 sm:bottom-0">
        {children}
        <Search>
          <button
            type="button"
            className="flex items-center text-lg gap-2 z-5 group/button group/arrow group/underline cursor-pointer mt-auto">
            <GiArchiveResearch className="size-5 translate-x-full hidden lg:block opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-0 duration-300 transition-all" />
            <NavButton className="text-foreground lg:text-muted-foreground">Search</NavButton>
          </button>
        </Search>
      </Dialog.Content>
    </Dialog>
  );
};
