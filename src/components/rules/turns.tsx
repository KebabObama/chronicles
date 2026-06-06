import { Article } from "@/components/ui/article";

export const Turns = () => {
  return (
    <Article title="Taking turns">
      <p>Round outside of battle is commonly determined either by DM or by players's agreement.</p>
      <p>
        Most turns start by the DM setting the scene and describing the environment, actions of world and things that
        happen to the party. This is usually followed by players stating their intentions or actions. The DM then
        adjudicates those actions, describing the consequences and updating the state of the world before passing the
        focus to the next player.
      </p>
      <p>
        Combat can be triggered at any moment by a player's action or a narrative shift determined by the DM. When this
        occurs, the flow of play is immediately interrupted. This effectively locks the current scene into "combat
        mode", resetting the flow to a structured sequence where all participants act according to their initiative
        results until the conflict is resolved.
      </p>
      <p>
        Once combat begins, the turn order is established by rolling an Initiative check. Characters act in descending
        order of their initiative score. Once every character has taken their turn, the current Round ends, and a new
        one begins, maintaining the same turn order unless specified otherwise by game effects.
      </p>
    </Article>
  );
};
