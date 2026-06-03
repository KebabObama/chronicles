import Link from "next/link";
import { FaBalanceScale, FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiMagicSwirl, GiSwitchWeapon } from "react-icons/gi";

const LINKS = [
  { href: "/", label: "Domů", icon: FaHome },
  { href: "/rules", label: "Pravidla", icon: FaBalanceScale },
  { href: "/classes", label: "Postavy", icon: FaPeopleGroup },
  { href: "/items", label: "Předměty", icon: GiSwitchWeapon },
  { href: "/spells", label: "Schopnosti", icon: GiMagicSwirl },
];

export const Links = () => {
  return LINKS.map(({ href, label, icon: Icon }) => (
    <Link key={href} href={href} className="flex items-center gap-2 transition-colors hover:text-primary">
      <Icon />
      {label}
    </Link>
  ));
};
