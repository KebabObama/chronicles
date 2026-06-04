import type { Route } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaBalanceScale, FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiMagicSwirl, GiSwitchWeapon } from "react-icons/gi";

type LinkedUrl = {
  href: Route;
  label: string;
  Icon: IconType;
};

const LINKS: LinkedUrl[] = [
  { href: "/", label: "Domů", Icon: FaHome },
  { href: "/rules", label: "Pravidla", Icon: FaBalanceScale },
  { href: "/classes", label: "Postavy", Icon: FaPeopleGroup },
  { href: "/items", label: "Předměty", Icon: GiSwitchWeapon },
  { href: "/spells", label: "Schopnosti", Icon: GiMagicSwirl },
];

export const Links = () => {
  return LINKS.map(({ href, label, Icon }) => (
    <Link key={label} href={href} className="flex items-center gap-2 transition-colors hover:text-primary">
      <Icon />
      {label}
    </Link>
  ));
};
