import { Landing } from "@/components/init/landing";
import { ScrollDown } from "@/components/init/scroll-down";
import Items from "@/content/items.mdx";

export default () => {
  return (
    <>
      <div className="min-h-[800dvh] relative block">
        <Landing />

        <section
          id="items"
          className="container scroll-mt-[25dvh] scroll-smooth grid grid-cols-1 xl:grid-cols-3 gap-6 mx-auto">
          <Items />
        </section>
      </div>
      <ScrollDown />
    </>
  );
};
