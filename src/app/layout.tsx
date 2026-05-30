import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Sidebar, SidebarProvider } from "@/layout/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dragons notebook",
  description: "Rules and notes for specialized turned based tabletop roleplaying game",
  creator: "Lukáš Pražák",
};

export default ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="cs" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased font-sans`}>
      <body className="h-dvh w-dvw relative flex flex-row bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <Sidebar />
            <main className={"w-full"}>{children}</main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
