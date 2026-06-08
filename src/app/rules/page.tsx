import { AttributeTable } from "@/components/ui/attribute-table";
import * as Actions from "@/content/rules/actions.mdx";
import * as Attributes from "@/content/rules/attributes.mdx";
import * as Turns from "@/content/rules/turns.mdx";

export default () => {
  return (
    <main className="container mx-auto grid lg:grid-cols-2 gap-4 p-4 lg:py-8 lg:gap-6 xl:gap-10">
      <article id={Turns.slug} className="scroll-mt-24">
        <Turns.default />
      </article>

      <article id={Actions.slug} className="scroll-mt-24">
        <Actions.default />
      </article>

      <article id={Attributes.slug} className="scroll-mt-24 flex flex-col lg:flex-row gap-4">
        <div className="grow">
          <Attributes.default />
        </div>
        <AttributeTable />
      </article>
    </main>
  );
};
