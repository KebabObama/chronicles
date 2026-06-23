import type { IconType } from "react-icons";
import {
  GiBiceps,
  GiClassicalKnowledge,
  GiGiftOfKnowledge,
  GiMineralHeart,
  GiRunningShoe,
  GiTheaterCurtains,
} from "react-icons/gi";

export type Atrribute = (typeof ATTRIBUTES)[number];

export const ATTRIBUTE_TABLE: [score: string, mod: string][] = [
  ["   1   ", "-5"],
  [" 2 -  3", "-4"],
  [" 4 -  5", "-3"],
  [" 6 -  7", "-2"],
  [" 8 -  9", "-1"],
  ["10 - 11", "+0"],
  ["12 - 13", "+1"],
  ["14 - 15", "+2"],
  ["16 - 17", "+3"],
  ["18 - 19", "+4"],
];

export const ATTRIBUTES = ["strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma"] as const;

export const ATTRIBUTE_ICONS: Record<Atrribute, IconType> = {
  strength: GiBiceps,
  dexterity: GiRunningShoe,
  constitution: GiMineralHeart,
  wisdom: GiClassicalKnowledge,
  intelligence: GiGiftOfKnowledge,
  charisma: GiTheaterCurtains,
} as const;

export const AttributeTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
      <section className="grow">{children}</section>
      <section className="flex w-full flex-col gap-4 lg:min-w-54 lg:max-w-3xs">
        <div className="ml-5 flex flex-row lg:ml-0 lg:self-center">
          <div className="-mr-24 ml-2 rotate-270 font-dragon-hunter text-lg tracking-widest">Attributes</div>
          <ul>
            {Object.entries(ATTRIBUTE_ICONS).map(([key, Icon]) => (
              <li key={key} className="flex flex-row items-center gap-2 capitalize tracking-widest">
                <Icon className="size-4" />
                {key}
              </li>
            ))}
          </ul>
        </div>
        <table className="corner-scoop w-full overflow-hidden rounded-2xl text-center tracking-wide">
          <thead className="h-8 border-2 bg-muted font-dragon-hunter font-extralight">
            <tr>
              <th className="p-2">Score</th>
              <th className="p-2">Mod</th>
            </tr>
          </thead>
          <tbody className="border-2">
            {ATTRIBUTE_TABLE.map(([score, mod]) => (
              <tr key={score}>
                <td className="border-r border-b px-2 py-1">{score}</td>
                <td className="border-b px-2 py-1"> {mod}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="h-8 w-full bg-muted text-center font-dragon-hunter font-extralight">
            <tr>
              <td colSpan={2} className="p-2">
                Table of attributes
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </div>
  );
};
