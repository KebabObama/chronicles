import { Fragment } from "react";
import { Article } from "@/components/ui/article";

const ATTRIBUTES = [
  ["1", "-5"],
  ["2 - 3", "-4"],
  ["4 - 5", "-3"],
  ["6 - 7", "-2"],
  ["8 - 9", "-1"],
  ["10 - 11", "+0"],
  ["12 - 13", "+1"],
  ["14 - 15", "+2"],
  ["16 - 17", "+3"],
  ["18 - 19", "+4"],
] satisfies Array<[score: string, mod: string]>;

export const Attributes = () => {
  return (
    <Article title="Attributes">
      <div className="grid md:grid-cols-[1fr_auto] gap-4 lg:gap-6">
        <section className="flex flex-col gap-4 text-justify">
          <p>
            Each of a creature's attributes has a score, a number that defines the magnitude of that attributr. An
            attribute is not just a measure of innate capabilities, but also encompasses a creature's training and
            competence in activities related to that attribute.
          </p>
          <p>
            A score of 10 or 11 is the normal human average, but adventurers and many monsters are a cut above average
            in most attributes. A score of 18 is the highest that a person usually reaches. Adventurers can have
            attributes as high as 20, and monsters and divine beings can have attributes as high as 30 or beyond.
          </p>
          <p>
            Each attribute generates a modifier, which is used to adjust rolls. To calculate this, subtract 10 from the
            attribute score, divide the result by 2, and round down: Modifier = floor((Score - 10) / 2).
          </p>
          <p>
            Whenever you make an attribute check, an attack roll, or a saving throw, you roll a twenty-sided die (d20)
            and add the relevant attribute modifier. This sum is compared against a enemy to determine the success of
            your action.
          </p>
        </section>

        <section className="grid grid-cols-2 text-center border-2 lg:tracking-wide">
          <div className="font-bold border-b border-border p-2 bg-muted">Attribute</div>
          <div className="font-bold border-b border-border p-2 bg-muted">Modifier</div>

          {ATTRIBUTES.map(([score, mod]) => (
            <Fragment key={score}>
              <span className="p-2 border-r border-b border-border">{score}</span>
              <span className="p-2 border-b border-border">{mod}</span>
            </Fragment>
          ))}
        </section>
      </div>
    </Article>
  );
};
