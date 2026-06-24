"use client";

import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Dialog } from "@/components/ui/dialog";

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
      </Dialog.Content>
    </Dialog>
  );
};
