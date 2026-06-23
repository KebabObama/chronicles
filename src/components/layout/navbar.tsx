import Link from "next/link";
import { GiArchiveResearch } from "react-icons/gi";
import { Links } from "@/components/layout/links";
import { Search } from "@/components/layout/search";
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
        <Search>
          <button
            type="button"
            className="group/button group/arrow group/underline z-5 flex items-center gap-2 text-lg">
            <GiArchiveResearch className="hidden size-5 translate-x-full opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100 lg:block" />
            <NavButton className="text-foreground lg:text-muted-foreground">Search</NavButton>
          </button>
        </Search>
      </header>
    </nav>
  );
};
