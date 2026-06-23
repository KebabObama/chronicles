"use client";

import { useEffect, useState } from "react";
import { GiSmashArrows } from "react-icons/gi";
import { cn } from "@/lib/utils";

export const ScrollDown = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();
    addEventListener("scroll", () => setVisible(scrollY <= 10), ctrl);
    return () => ctrl.abort();
  }, []);

  return (
    <a
      href="#items"
      className={cn(
        "fixed bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-dragon-hunter font-thin tracking-widest transition-all duration-500 ease-in-out",
        visible ? "translate-y-0 animate-bounce opacity-100" : "pointer-events-none translate-y-10 opacity-0",
      )}>
      <span className="font-medium text-sm uppercase tracking-widest">Scroll down</span>
      <GiSmashArrows className="text-4xl" />
    </a>
  );
};
