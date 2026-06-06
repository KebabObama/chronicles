import Link from "next/link";
import { Links } from "@/components/layout/links";
import { Sidebar } from "@/components/layout/sidebar";

export const Navbar = () => {
  const appName = process.env.APP_NAME as string;
  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-2 gap-4 bg-background px-4 shadow-sm font-dragon-hunter font-light tracking-wider md:px-6">
      <Link
        href="/"
        className="text-2xl flex items-baseline gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
        {appName.split(" ").map((word) => (
          <span key={word} className="flex items-baseline">
            <span className="text-3xl font-semibold">{word[0]}</span>
            <span>{word.slice(1)}</span>
          </span>
        ))}
      </Link>
      <Sidebar />
      <header className="hidden items-center gap-2 md:flex">
        <Links />
      </header>
    </nav>
  );
};
