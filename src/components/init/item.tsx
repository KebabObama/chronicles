import type { Route } from "next";
import Link from "next/link";
import { FantasyButton, type FantasyVariant } from "@/components/ui/fantasy-button";

export const Item = ({
  label,
  link,
  children,
  variant,
}: {
  label: string;
  link: Route;
  children: React.ReactNode;
  variant?: FantasyVariant;
}) => {
  return (
    <article className="corner-scoop timeline-view block h-full animate-fade-in animate-range-entry rounded-4xl border bg-card px-8 py-4 text-center text-card-foreground shadow-lg ring-2 ring-border transition-all duration-300 ease-in first:text-center xl:border-transparent xl:hover:border-border [&_h1]:font-dragon-hunter [&_h1]:text-2xl [&_h1]:tracking-widest [&_h1]:sm:text-3xl">
      {children}
      <Link href={link} className="mt-auto flex w-full flex-row items-center justify-center">
        <FantasyButton variant={variant} size="lg">
          {label}
        </FantasyButton>
      </Link>
    </article>
  );
};
