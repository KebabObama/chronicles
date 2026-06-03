import Link from "next/link";
import { FantasyButton } from "@/components/ui/button";

export const Items = () => {
  return (
    <section id="items" className="container py-[15dvh] scroll-smooth grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div />
      <h1
        className="bg-card text-card-foreground border shadow-lg p-6 select-none
      corner-scoop rounded-4xl xl:border-t-6 xl:border-transparent font-bold
      flex flex-col h-full gap-4 transition-all ease-in text-4xl text-center
      duration-300 xl:hover:border-border ring-border ring-2">
        Předměty
      </h1>
      <div />
      <article
        className="bg-card text-card-foreground border shadow-lg p-6 
      corner-scoop rounded-4xl xl:border-b-6 xl:border-l-6 xl:border-transparent
      flex flex-col h-full gap-4 transition-all ease-in
      duration-300 xl:hover:border-border ring-border ring-2">
        <h2 className="text-3xl text-center font-semibold underline underline-offset-3">Zbraně</h2>
        <p className="text-muted-foreground mx-6 text-justify">
          V rukou správného hrdiny je zbraň víc než jen nástroj ničení - je to prodloužená ruka, jeho vůle a jediný
          skutečný přítel v temných kobkách světa. Od vyvážených čepelí, které tančí v rytmu boje, přes těžké palcáty
          drtící kosti nepřátel až po kouzelnické hole tříštící samotnou podstatu reality.
        </p>
        <Link href="/items#weapons" className="flex flex-row w-full items-center justify-center mt-auto">
          <FantasyButton variant="blood" size="lg">
            Objevit zbraně
          </FantasyButton>
        </Link>
      </article>
      <article
        className="bg-card text-card-foreground border shadow-lg p-6 
      corner-scoop rounded-4xl xl:border-b-6 xl:border-transparent
      flex flex-col h-full gap-4 transition-all ease-in
      duration-300 xl:hover:border-border ring-border ring-2">
        <h2 className="text-3xl text-center font-semibold underline underline-offset-3">Brnění</h2>
        <p className="text-muted-foreground mx-6 text-justify">
          Přežít další střet není jen o síle úderu, ale především o tom, co dokáže odrazit nepřátelskou ocel, ustát
          údery kouzelnických blesků nebo přežít inferno démonů. Od prošívaných gambesonů, které ti dodají obratnost, až
          po plátovou zbroj, o kterou se roztříští každé kopí. Tvá výbava je tvou druhou kůží.
        </p>
        <Link href="/items#armor" className="flex flex-row w-full items-center justify-center mt-auto">
          <FantasyButton variant="ice" size="lg">
            Prozkoumat zbroj
          </FantasyButton>
        </Link>
      </article>
      <article
        className="bg-card text-card-foreground border shadow-lg p-6 
      corner-scoop rounded-4xl xl:border-b-6 xl:border-r-6 xl:border-transparent
      flex flex-col h-full gap-4 transition-all ease-in
      duration-300 xl:hover:border-border ring-border ring-2">
        <h2 className="text-3xl text-center font-semibold underline underline-offset-3">Cetky</h2>
        <p className="text-muted-foreground mx-6 text-justify">
          Nejsou to jen lektvary v zakalených lahvičkách nebo sušené bylinky v koženém váčku. Jsou to okamžiky, kdy tě
          bohové štěstěny opět povolali zpět do světa živých, nebo ti poslední doušek životabudiče dodal sílu k
          závěrečnému vítězství. Měj vždy po ruce něco, co zvrátí osud v tvůj prospěch.
        </p>
        <Link href="/items#consumables" className="flex flex-row w-full items-center justify-center mt-auto">
          <FantasyButton variant="emerald" size="lg">
            Nalézt předměty
          </FantasyButton>
        </Link>
      </article>
    </section>
  );
};
