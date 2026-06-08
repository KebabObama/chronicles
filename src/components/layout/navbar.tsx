import Link from "next/link";
import { Links } from "@/components/layout/links";
import { Sidebar } from "@/components/layout/sidebar";

export const Navbar = () => {
  const appName = process.env.APP_NAME as string;
  return (
    <nav
      aria-label="navigation"
      className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-2 gap-4 bg-background px-4 shadow-sm font-dragon-hunter font-light tracking-widest md:px-6">
      <Link
        href="/"
        className="text-2xl gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 ease-in drop-shadow-lg hover:drop-shadow-muted-foreground first-letter:text-3xl">
        {appName}
      </Link>
      <Sidebar />
      <header className="hidden items-center gap-2 lg:flex">
        <Links />
      </header>
    </nav>
  );
};
