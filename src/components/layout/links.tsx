import type { Route } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaBalanceScale } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiMagicSwirl, GiSwitchWeapon } from "react-icons/gi";

type LinkedUrl = {
  href: Route;
  label: string;
  Icon: IconType;
};

const LINKS: LinkedUrl[] = [
  { href: "/rules", label: "Rules", Icon: FaBalanceScale },
  { href: "/classes", label: "Characters", Icon: FaPeopleGroup },
  { href: "/items", label: "Items", Icon: GiSwitchWeapon },
  { href: "/spells", label: "Abilities", Icon: GiMagicSwirl },
];

export const Links = () => {
  return LINKS.map(({ href, label, Icon }) => (
    <Link key={label} href={href} className="flex items-center gap-2 transition-colors hover:text-primary">
      <Icon className="size-5 -mt-0.5" />
      {label}
    </Link>
  ));
};
