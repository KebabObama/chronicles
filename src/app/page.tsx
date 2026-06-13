import { Item } from "@/components/init/item";
import { Landing } from "@/components/init/landing";
import { ScrollDown } from "@/components/init/scroll-down";

export default () => {
  return (
    <>
      <Landing />

      <section
        id="items"
        className="scroll-mt-[25dvh] grid animate-zoom-in animate-range-entry timeline-view grid-cols-1 xl:grid-cols-3 gap-6">
        <Item link="/items#weapons" label="Inspect weapons" variant="blood">
          <h1>Weapons</h1>
          In the hands of a true hero, a weapon is more than just a tool of destruction—it is an extension of their arm,
          their will, and their only true friend in the dark dungeons of the world. From balanced blades that dance to
          the rhythm battle, to heavy maces that crush the bones of enemies, to wands that shatter the very fabric of
          reality.
        </Item>

        <Item link="/items#armor" label="Examine Armor">
          <h1>Armor</h1>
          Surviving the next battle isn't just about the force of your blow, but above all about what your armor can
          deflect—whether it's enemy steel, the strikes of a mage's lightning, or the inferno of demons. From quilted
          gambesons that grant you agility to plate armor that shatters every spear. Your gear is your second skin.
        </Item>

        <Item link="/items#consumables" label="Discover" variant="emerald">
          <h1>Armor</h1>
          They aren't just potions in cloudy vials or dried herbs in a leather pouch. They are moments when the gods of
          fortune have called you back to the world of the living, or when that last sip of a life-giving elixir gave
          you the for the final victory. Always keep something on hand that can turn the tide of fate in your favor.
        </Item>
      </section>
      <ScrollDown />
    </>
  );
};
