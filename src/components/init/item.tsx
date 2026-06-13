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
    <article
      className="bg-card text-card-foreground border shadow-lg px-8 py-4 first:text-center
  corner-scoop rounded-4xl xl:border-transparent [&_h1]:font-dragon-hunter [&_h1]:sm:text-3xl [&_h1]:text-2xl text-center [&_h1]:tracking-widest
  block h-full transition-all ease-in timeline-view animate-fade-in animate-range-entry
  duration-300 xl:hover:border-border ring-border ring-2">
      {children}
      <Link href={link} className="flex flex-row w-full items-center justify-center mt-auto">
        <FantasyButton variant={variant} size="lg">
          {label}
        </FantasyButton>
      </Link>
    </article>
  );
};
