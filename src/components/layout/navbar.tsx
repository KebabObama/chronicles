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
          <span className="block first-letter:text-3xl text-2xl">{appName}</span>
        </NavButton>
      </Link>
      <Sidebar>
        <Links />
      </Sidebar>
      <header className="hidden items-center justify-center lg:justify-end w-full gap-6 lg:gap-2 md:flex">
        <Links />
        <Search>
          <button
            type="button"
            className="flex items-center text-lg gap-2 z-5 group/button group/arrow group/underline">
            <GiArchiveResearch className="size-5 translate-x-full hidden lg:block opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-0 duration-300 transition-all" />
            <NavButton className="text-foreground lg:text-muted-foreground">Search</NavButton>
          </button>
        </Search>
      </header>
    </nav>
  );
};
