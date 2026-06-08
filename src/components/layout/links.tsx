"use client";

import type { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import type { IconType } from "react-icons";
import { FaBalanceScale } from "react-icons/fa";
import { FaMagnifyingGlass, FaPeopleGroup } from "react-icons/fa6";
import { GiMagicSwirl, GiSwitchWeapon } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { Search } from "@/components/layout/search";
import { NavButton } from "@/components/ui/nav-button";

type LinkedUrl = {
  href: Route;
  label: string;
  Icon: IconType;
  sub?: Array<string>;
};

const LINKS: LinkedUrl[] = [
  { href: "/", label: "Home", Icon: HiHome },
  { href: "/rules", label: "Rules", Icon: FaBalanceScale, sub: ["turns", "actions", "attributes"] },
  { href: "/classes", label: "Characters", Icon: FaPeopleGroup },
  { href: "/items", label: "Items", Icon: GiSwitchWeapon, sub: ["weapons", "armor", "consumables", "miscellaneous"] },
  { href: "/spells", label: "Abilities", Icon: GiMagicSwirl },
];

export const Links = () => {
  const router = useRouter();

  const nav = (l: Route) => (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    router.push(l);
  };

  return (
    <>
      <Suspense>
        <Search>
          <div className="flex items-center text-lg gap-2 z-5 group/button cursor-pointer">
            <FaMagnifyingGlass className="size-5 -mt-0.5 translate-x-full opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-0 duration-300 transition-all" />
            <NavButton>Search</NavButton>
          </div>
        </Search>
      </Suspense>
      {LINKS.map(({ href, label, Icon, sub }) => (
        <Link href={href} key={label} className="flex items-center text-lg gap-2 z-5 group/button">
          <Icon className="size-5 -mt-0.5 translate-x-full opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-0 duration-300 transition-all" />
          <NavButton
            tabIndex={-1}
            sub={sub?.map((s) => (
              <button
                onClick={nav(`${href}#${s}`)}
                tabIndex={-1}
                className="hover:text-foreground text-muted-foreground text-base transition-all duration-300 ease-out drop-shadow-sm hover:drop-shadow-muted-foreground"
                type="button"
                key={s}>
                {s}
              </button>
            ))}>
            {label}
          </NavButton>
        </Link>
      ))}
    </>
  );
};
