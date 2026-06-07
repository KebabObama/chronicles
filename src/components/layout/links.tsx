"use client";

import type { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { IconType } from "react-icons";
import { FaBalanceScale } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiMagicSwirl, GiSwitchWeapon } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { Button } from "@/components/ui/button";

type LinkedUrl = {
  href: Route;
  label: string;
  Icon: IconType;
  sub: Array<string>;
};

const LINKS = [
  { href: "/", label: "Home", Icon: HiHome, sub: [] },
  { href: "/rules", label: "Rules", Icon: FaBalanceScale, sub: [] },
  { href: "/classes", label: "Characters", Icon: FaPeopleGroup, sub: [] },
  { href: "/items", label: "Items", Icon: GiSwitchWeapon, sub: ["weapons", "armor", "consumables", "miscellaneous"] },
  { href: "/spells", label: "Abilities", Icon: GiMagicSwirl, sub: [] },
] as const satisfies LinkedUrl[];

export const Links = () => {
  const router = useRouter();
  return LINKS.map(({ href, label, Icon, sub }) => (
    <Link href={href} key={label} className="flex items-center text-lg gap-2 z-5 group/button">
      <Icon className="size-5 -mt-0.5 translate-x-full opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-0 duration-300 transition-all" />
      <Button
        className="text-lg z-5"
        sub={
          !!sub.length &&
          sub.map((s) => (
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                router.push(`${href}#${s}`);
              }}
              className="hover:text-foreground text-muted-foreground text-sm transition-all duration-300 ease-out"
              type="button"
              key={s}>
              {s}
            </button>
          ))
        }>
        {label}
      </Button>
    </Link>
  ));
};
