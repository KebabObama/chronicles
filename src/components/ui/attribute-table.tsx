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
    <table className="w-full h-fit text-center tracking-wide border-2 self-center">
      <thead className="bg-muted font-dragon-hunter font-extralight">
        <tr>
          <th className="border-b p-2">Score</th>
          <th className="border-b p-2">Mod</th>
        </tr>
      </thead>
      <tbody>
        {ATTRIBUTES.map(([score, mod]) => (
          <tr key={score}>
            <td className="border-b px-2 border-r py-1">{score}</td>
            <td className="border-b px-2 py-1"> {mod}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
