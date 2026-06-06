import { Actions } from "@/components/rules/actions";
import { Attributes } from "@/components/rules/attributes";
import { Inventory } from "@/components/rules/inventory";
import { Turns } from "@/components/rules/turns";
import { Weapons } from "@/components/rules/weapns";

export default () => {
  return (
    <main className="grid xl:grid-cols-2 lg:gap-6 xl:gap-8 gap-4 container mx-auto p-4">
      <Turns />
      <Actions />
      <Attributes />
      <Weapons />
      <Inventory />
    </main>
  );
};
