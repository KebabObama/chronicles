export const ATTRIBUTES: [score: string, mod: string][] = [
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

export const AttributeTable = () => {
  return (
    <table className="w-full lg:max-w-3xs text-center tracking-wide rounded-2xl overflow-hidden corner-scoop self-center">
      <thead className="bg-muted font-dragon-hunter font-extralight border-2 h-8">
        <tr>
          <th className="p-2">Score</th>
          <th className="p-2">Mod</th>
        </tr>
      </thead>
      <tbody className="border-2">
        {ATTRIBUTES.map(([score, mod]) => (
          <tr key={score}>
            <td className="border-b px-2 border-r py-1">{score}</td>
            <td className="border-b px-2 py-1"> {mod}</td>
          </tr>
        ))}
      </tbody>
      <tfoot className="h-8 w-full bg-muted font-dragon-hunter text-center font-extralight">
        <tr>
          <td colSpan={2} className="p-2">
            Table of attributes
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
