import { Inventory } from "@/components/rules/inventory";
import { Turns } from "@/components/rules/turns";
import { Weapons } from "@/components/rules/weapns";

export default () => {
  return (
    <main className="grid grid-cols-2 gap-4 container mx-auto p-4">
      <Turns />
      <Turns />
      <Weapons />
      <Inventory />
    </main>
  );
};
