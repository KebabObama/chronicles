import type { Route } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import { GiMagicSwirl, GiPortrait, GiScales, GiSwitchWeapon } from "react-icons/gi";
import { NavButton } from "@/components/ui/nav-button";

type LinkedUrl = {
  href: Route;
  label: string;
  Icon: IconType;
  sub?: Array<string>;
};

const LINKS: LinkedUrl[] = [
  { href: "/rules", label: "Rules", Icon: GiScales },
  { href: "/classes", label: "Characters", Icon: GiPortrait },
  { href: "/items", label: "Items", Icon: GiSwitchWeapon },
  { href: "/spells", label: "Abilities", Icon: GiMagicSwirl },
];

export const Links = () => {
  return LINKS.map(({ href, label, Icon }) => (
    <Link
      href={href}
      key={label}
      className="flex items-center text-lg gap-2 z-5 group/button group/arrow group/underline">
      <Icon className="size-5 translate-x-full opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-0 duration-300 transition-all" />
      <NavButton className="text-foreground lg:text-muted-foreground">{label}</NavButton>
    </Link>
  ));
};
