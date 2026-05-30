"use client";

import { Dialog, type Trigger } from "@/layout/dialog";

export const Search = ({ children }: { children: Trigger }) => {
  return (
    <Dialog defaultOpen={false}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content>
        <div>haha</div>
        <Dialog.Trigger>
          <button type={"button"}>Close</button>
        </Dialog.Trigger>
      </Dialog.Content>
    </Dialog>
  );
};
