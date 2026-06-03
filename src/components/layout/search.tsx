"use client";

import { Dialog } from "@/layout/dialog";
import type { TriggerElement } from "@/lib/utils";

export const Search = ({ children }: { children: TriggerElement }) => {
  return (
    <Dialog defaultOpen={false}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content>
        <h1 className="text-lg font-bold">Search</h1>
        <input type={"text"} className={"border bg-input rounded-lg"} />
      </Dialog.Content>
    </Dialog>
  );
};
