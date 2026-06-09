import { ToC } from "@/components/layout/toc";
import { AttributeTable } from "@/components/ui/attribute-table";
import Attributes from "@/content/rules/attributes.mdx";
import Checks from "@/content/rules/checks.mdx";
import Turns from "@/content/rules/turns.mdx";

export default () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-[1fr_auto] gap-4 p-4 lg:py-8 ">
      <main>
        <Turns />

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="grow">
            <Attributes />
          </div>

          <AttributeTable />
        </div>

        <Checks />
      </main>

      <ToC />
    </div>
  );
};
