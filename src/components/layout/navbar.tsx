import Link from "next/link";
import { Links } from "@/components/layout/links";
import { Sidebar } from "@/components/layout/sidebar";
import { NavButton } from "@/components/ui/nav-button";

export const Navbar = () => {
  const appName = process.env.APP_NAME as string;

  return (
    <nav
      aria-label="navigation"
      className="sticky top-0 z-50 flex h-16 w-full items-center justify-between gap-4 bg-transparent px-4 lg:px-6">
      <Link href="/" className="group/button group/arrow group/underline hidden lg:block">
        <NavButton>
          <span className="block text-2xl first-letter:text-3xl">{appName}</span>
        </NavButton>
      </Link>
      <Sidebar>
        <Links />
      </Sidebar>
      <header className="hidden w-full items-center justify-center gap-6 md:flex lg:justify-end lg:gap-2">
        <Links />
      </header>
    </nav>
  );
};
