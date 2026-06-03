"use client";

import { Links } from "@/components/layout/links";
import { Sidebar } from "@/components/layout/sidebar";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-2 bg-background px-4 shadow-sm font-semibold">
      <Sidebar />

      <header className="hidden items-center gap-8 md:flex">
        <Links />
      </header>
    </nav>
  );
};
