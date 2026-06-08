import Link from "next/link";
import { FantasyButton } from "@/components/ui/fantasy-button";

export const Items = () => {
  return (
    <section id="items" className="container scroll-smooth grid grid-cols-1 xl:grid-cols-3 xl:py-[20dvh] gap-6 mx-auto">
      <article
        className="bg-card text-card-foreground border shadow-lg p-6 
      corner-scoop rounded-4xl xl:border-b-6 xl:border-l-6 xl:border-transparent
      flex flex-col h-full gap-4 transition-all ease-in
      duration-300 xl:hover:border-border ring-border ring-2">
        <h2 className="text-3xl text-center font-thiner font-dragon-hunter">Weapons</h2>
        <p className="text-muted-foreground mx-6 text-justify">
          In the hands of a true hero, a weapon is more than just a tool of destruction—it is an extension of their arm,
          their will, and their only true friend in the dark dungeons of the world. From balanced blades that dance to
          the rhythm of battle, to heavy maces that crush the bones of enemies, to wands that shatter the very fabric of
          reality.
        </p>
        <Link href="/items#weapons" className="flex flex-row w-full items-center justify-center mt-auto">
          <FantasyButton variant="blood" size="lg">
            Inspect weapons
          </FantasyButton>
        </Link>
      </article>
      <article
        className="bg-card text-card-foreground border shadow-lg p-6 
      corner-scoop rounded-4xl xl:border-b-6 xl:border-transparent
      flex flex-col h-full gap-4 transition-all ease-in
      duration-300 xl:hover:border-border ring-border ring-2">
        <h2 className="text-3xl text-center font-thiner font-dragon-hunter">Armor</h2>
        <p className="text-muted-foreground mx-6 text-justify">
          Surviving the next battle isn't just about the force of your blow, but above all about what your armor can
          deflect—whether it's enemy steel, the strikes of a mage's lightning, or the inferno of demons. From quilted
          gambesons that grant you agility to plate armor that shatters every spear. Your gear is your second skin.
        </p>
        <Link href="/items#armor" className="flex flex-row w-full items-center justify-center mt-auto">
          <FantasyButton variant="ice" size="lg">
            Examine armor
          </FantasyButton>
        </Link>
      </article>
      <article
        className="bg-card text-card-foreground border shadow-lg p-6 
      corner-scoop rounded-4xl xl:border-b-6 xl:border-r-6 xl:border-transparent
      flex flex-col h-full gap-4 transition-all ease-in
      duration-300 xl:hover:border-border ring-border ring-2">
        <h2 className="text-3xl text-center font-thiner font-dragon-hunter">Consumables</h2>
        <p className="text-muted-foreground mx-6 text-justify">
          They aren't just potions in cloudy vials or dried herbs in a leather pouch. They are moments when the gods of
          fortune have called you back to the world of the living, or when that last sip of a life-giving elixir gave
          you the strength for the final victory. Always keep something on hand that can turn the tide of fate in your
          favor.
        </p>
        <Link href="/items#consumables" className="flex flex-row w-full items-center justify-center mt-auto">
          <FantasyButton variant="emerald" size="lg">
            Discover items
          </FantasyButton>
        </Link>
      </article>
    </section>
  );
};
