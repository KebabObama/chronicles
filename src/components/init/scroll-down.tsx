"use client";

import { useEffect, useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
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
        "fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-500 ease-in-out",
        visible ? "opacity-100 translate-y-0 animate-bounce" : "opacity-0 translate-y-10 pointer-events-none",
      )}>
      <span className="text-sm font-medium uppercase tracking-widest ">Scroll down</span>
      <IoChevronDownCircleOutline className="text-4xl" />
    </a>
  );
};
