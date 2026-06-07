import Link from "next/link";
import { Links } from "@/components/layout/links";
import { Sidebar } from "@/components/layout/sidebar";

export const Navbar = () => {
  const appName = process.env.APP_NAME as string;
  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-2 gap-4 bg-background px-4 shadow-sm font-dragon-hunter font-light tracking-wider md:px-6">
      <Link
        href="/"
        className="mt-1.5 text-2xl flex items-baseline gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 hover:drop-shadow-[0_0_6px_var(--color-muted-foreground)]">
        {appName.split(" ").map((word) => (
          <span
            key={word}
            className="first-letter:float-left first-letter:text-3xl first-letter:-mt-1 first-letter:mr-px">
            {word}
          </span>
        ))}
      </Link>
      <Sidebar />
      <header className="hidden items-center gap-2 lg:flex">
        <Links />
      </header>
    </nav>
  );
};
