import type { Route } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import { GiCampingTent, GiMagicSwirl, GiPortrait, GiScales, GiSwitchWeapon } from "react-icons/gi";
import { NavButton } from "@/components/ui/nav-button";

type LinkedUrl = {
  href: Route;
  label: string;
  Icon: IconType;
  sub?: Array<string>;
};

const LINKS: LinkedUrl[] = [
  { href: "/", label: "Home", Icon: GiCampingTent },
  { href: "/rules", label: "Rules", Icon: GiScales },
  { href: "/classes", label: "Classes", Icon: GiPortrait },
  { href: "/items", label: "Items", Icon: GiSwitchWeapon },
  { href: "/spells", label: "Abilities", Icon: GiMagicSwirl },
];

export const Links = () => {
  return LINKS.map(({ href, label, Icon }) => (
    <Link
      href={href}
      key={label}
      className="group/button group/arrow group/underline z-5 flex items-center gap-2 text-lg">
      <Icon className="hidden size-5 translate-x-full opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100 lg:block" />
      <NavButton className="text-foreground lg:text-muted-foreground">{label}</NavButton>
    </Link>
  ));
};
