import { Article } from "@/components/ui/article";

export const Turns = () => {
  return (
    <Article title="Taking turns">
      <p>Turn order is commonly determined either by DM or by players agreement outside of battle.</p>
      <p>
        Once combat begins, the turn order is established by rolling an Initiative check. Characters act in descending
        order of their initiative score. Once every character has taken their turn, the current Round ends, and a new
        one begins, maintaining the same turn order unless specified otherwise by game effects.
      </p>
      <p>
        Every character possesses a specific number of Action Points (AP) at the start of their turn. The total amount
        of AP is determined by the character's Level and Class. Action points are refreshed at the beginning of each
        turn. A player performs their actions one by one. Once a player has spent their available AP or chooses to
        "Pass" their turn officially ends.
      </p>
    </Article>
  );
};
