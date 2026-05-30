"use client";

import Link from "next/link";
import { createContext, type Dispatch, type SetStateAction, useContext, useState } from "react";
import { FaBalanceScale, FaHome } from "react-icons/fa";
import { FaMagnifyingGlass, FaPeopleGroup } from "react-icons/fa6";
import { GiMagicSwirl, GiSwitchWeapon } from "react-icons/gi";
import { Search } from "@/layout/search";
import { cn } from "@/lib/utils";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext({} as SidebarContextType);

export const SidebarProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>;
};

export const Sidebar = () => {
  const { isOpen } = useContext(SidebarContext);

  return (
    <aside className={cn("bg-sidebar fixed top-0 left-0 text-xl font-semibold h-dvh min-w-48 p-2", "md:relative", !isOpen && "hidden")}>
      <section className="sticky top-0">
        <Search>
          <button type="button" className={"flex flex-row gap-1.5 items-center"}>
            <FaMagnifyingGlass />
            Search
          </button>
        </Search>
      </section>
      <section className="flex flex-col mt-2 gap-2">
        <Link className={"flex flex-row gap-1.5 items-center"} href="/">
          <FaHome />
          Domů
        </Link>
        <Link className={"flex flex-row gap-1.5 items-center"} href="/rules">
          <FaBalanceScale />
          Pravidla
        </Link>
        <Link className={"flex flex-row gap-1.5 items-center"} href="/classes">
          <FaPeopleGroup />
          Postavy
        </Link>
        <Link className={"flex flex-row gap-1.5 items-center"} href="/items">
          <GiSwitchWeapon />
          Předměty
        </Link>
        <Link className={"flex flex-row gap-1.5 items-center"} href="/spells">
          <GiMagicSwirl />
          Schopnosti
        </Link>
      </section>
    </aside>
  );
};
