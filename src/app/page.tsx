import { Items } from "@/components/init/items";
import { Landing } from "@/components/init/landing";
import { ScrollDown } from "@/components/init/scroll-down";

export default () => {
  return (
    <>
      <div className="min-h-[200dvh] relative block">
        <Landing />
        <Items />
      </div>
      <ScrollDown />
    </>
  );
};
