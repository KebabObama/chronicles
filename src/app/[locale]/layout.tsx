import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import { redirect } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const dragonHunter = localFont({
  src: "../../../public/fonts/dragon-hunter.otf",
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

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

export default async ({ children, params }: LayoutProps<"/[locale]">) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return redirect({ href: "/", locale: "en" });
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning className={cn("h-full antialiased", dragonHunter.variable)}>
      <body className="relative bg-background text-foreground overflow-x-hidden overflow-y-scroll scroll-smooth">
        <NextIntlClientProvider>
          <Navbar />
          <div className="pointer-events-none fixed top-0 left-0 right-0 h-32 z-43 backdrop-blur-3xl mask-linear-to-black mask-linear-from-transparent" />
          <div className="pointer-events-none fixed top-0 left-0 right-0 h-32 z-44 bg-linear-to-t to-background to-90% from-transparent" />
          <main className="container mx-auto p-4 text-muted-foreground">{children} </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
