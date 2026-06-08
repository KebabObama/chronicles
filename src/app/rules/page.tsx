import { AttributeTable } from "@/components/ui/attribute-table";
import Actions from "@/content/rules/actions.mdx";
import Attributes from "@/content/rules/attributes.mdx";
import Checks from "@/content/rules/checks.mdx";
import Turns from "@/content/rules/turns.mdx";

export default () => {
  return (
    <main className="container mx-auto grid xl:grid-cols-2 gap-4 p-4 lg:py-8 lg:gap-6 xl:gap-10">
      <article>
        <Turns />
      </article>

      <article>
        <Actions />
      </article>

      <article className="flex flex-col lg:flex-row gap-4">
        <div className="grow">
          <Attributes />
        </div>
        <AttributeTable />
      </article>

      <article>
        <Checks />
      </article>
    </main>
  );
};
