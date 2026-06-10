import { AttributeTable } from "@/components/ui/attribute-table";
import Attributes from "@/content/rules/attributes.mdx";
import Checks from "@/content/rules/checks.mdx";
import Turns from "@/content/rules/turns.mdx";

export default () => {
  return (
    <main className="container mx-auto p-4">
      <Turns />

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="grow">
          <Attributes />
        </div>

        <AttributeTable />
      </div>

      <Checks />
    </main>
  );
};
