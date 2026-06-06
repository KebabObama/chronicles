import Image from "next/image";
import image from "public/actions.webp";
import { Article } from "@/components/ui/article";

export const Actions = () => {
  return (
    <Article title="Player's turn">
      <p>
        Every character possesses a specific number of Action Points (AP) at the start of their turn. The total amount
        of AP is determined by the character's Level and Class. Action points are refreshed at the beginning of each
        turn right after applying effects. A player performs their actions one by one. Once a player has spent their
        available AP or chooses to "Pass", their turn officially ends.
      </p>
      <div className="relative w-full select-none aspect-21/3">
        <Image src={image} priority alt="Turn action order" fill className="pointer-events-none" />
      </div>
      <p>
        Each action has a fixed order of phases. The process begins when a player declares their intent; if the action
        requires an attack roll, it is resolved immediately. Following this, other characters may utilize their allotted
        Reactions. Each character has a specific limit of reactions per turn, which can be spent to cast defensive
        spells, counterattack, or attempt to dodge.
      </p>
      <p>
        Once reactions are resolved, the target of the action makes any required saving throws. Based on these results,
        the final damage and status effects are applied to conclude the action.
      </p>
    </Article>
  );
};
