import type { Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/navbar";
import { SearchPrefetch } from "@/components/layout/search-prefetch";
import { cn } from "@/lib/utils";

const dragonHunter = localFont({
  src: "../../public/fonts/dragon-hunter.otf",
  display: "swap",
  variable: "--dragon-hunter",
  preload: true,
  adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
  title: process.env.APP_NAME,
  applicationName: process.env.APP_NAME,
  description: "Rules and notes for homebrewed turned based tabletop roleplaying game",
  creator: "Lukáš Pražák",
};

export default ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn("h-full antialiased", dragonHunter.variable)}>
      <body className="relative bg-background text-foreground">
        <Navbar />
        {children}
        <SearchPrefetch />
      </body>
    </html>
  );
};
