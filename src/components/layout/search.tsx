"use client";

import type { Route } from "next";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { getSearchIndex, type SearchItem } from "@/lib/search-index";
import type { TriggerElement } from "@/lib/utils";

export const Search = ({ children }: { children: TriggerElement }) => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<SearchItem[]>([]);

  useEffect(() => {
    (async () => {
      setItems(await getSearchIndex());
    })();
  }, []);

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return items;
    return items.filter((item) => {
      const haystack = `${item.title} ${item.content}`.toLowerCase();
      return haystack.includes(value);
    });
  }, [items, query]);

  return (
    <Dialog defaultOpen={false}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content className="font-normal font-serif">
        <h1 className="text-lg font-light font-dragon-hunter">Search articles</h1>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search headings and body text"
          className="w-full rounded-lg border-2 bg-input px-3 py-2"
        />

        <div className="mt-4 grid gap-3">
          {filtered.map((item) => (
            <Link key={item.id} href={item.url as Route} className="hover:bg-muted/20">
              <p className="font-semibold">{item.title}</p>
            </Link>
          ))}
        </div>
      </Dialog.Content>
    </Dialog>
  );
};
