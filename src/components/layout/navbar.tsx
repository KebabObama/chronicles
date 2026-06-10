import Link from "next/link";
import { GiHouse } from "react-icons/gi";
import { Links } from "@/components/layout/links";
import { Search } from "@/components/layout/search";
import { Sidebar } from "@/components/layout/sidebar";
import { NavButton } from "@/components/ui/nav-button";

export const Navbar = () => {
  const appName = process.env.APP_NAME as string;

  return (
    <nav
      aria-label="navigation"
      className="sticky top-0 z-50 flex h-16 w-full items-center justify-between gap-4 bg-transparent px-4 md:px-6">
      <Link href="/" className="group/button group/arrow group/underline">
        <NavButton>
          <span className="first-letter:text-3xl text-2xl block">{appName}</span>
        </NavButton>
      </Link>
      <Sidebar>
        <Link href={"/"} className="flex items-center text-lg gap-2 z-5 group/button group/arrow group/underline">
          <GiHouse className="size-5 translate-x-full opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-0 duration-300 transition-all" />
          <NavButton className="text-foreground lg:text-muted-foreground">Home</NavButton>
        </Link>
        <Links />
        <div className="mt-auto">
          <Search />
        </div>
      </Sidebar>
      <header className="hidden items-center gap-2 lg:flex">
        <Search />
        <Links />
      </header>
    </nav>
  );
};
