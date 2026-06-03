import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lich's chronicle",
  description: "Rules and notes for my own turned based tabletop roleplaying game",
  creator: "Lukáš Pražák",
};

export default ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html
      lang="cs"
      suppressHydrationWarning
      className={cn("h-full antialiased font-sans", geistSans.variable, geistMono.variable)}>
      <body className="relative bg-background text-foreground">
        <Navbar />
        <main className="flex flex-col gap-4 items-center p-4">{children}</main>
      </body>
    </html>
  );
};
