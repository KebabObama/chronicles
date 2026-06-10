"use client";

import type { Route } from "next";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { GiArchiveResearch, GiCrossMark } from "react-icons/gi";
import { Dialog } from "@/components/ui/dialog";
import { NavButton } from "@/components/ui/nav-button";
import { getSearchIndex, type SearchItem } from "@/lib/search-index";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<SearchItem[]>([]);

  useEffect(() => {
    (async () => {
      setItems(await getSearchIndex());
    })();
  }, []);

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    return items
      .filter((item) => {
        const haystack = `${item.title} ${item.content}`.toLowerCase();
        return haystack.includes(value);
      })
      .slice(0, 3);
  }, [items, query]);

  return (
    <Dialog>
      <Dialog.Trigger>
        <button
          type="button"
          className="flex items-center text-lg gap-2 z-5 group/button group/arrow group/underline cursor-pointer">
          <GiArchiveResearch className="size-5 translate-x-full opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-0 duration-300 transition-all" />
          <NavButton className="text-foreground lg:text-muted-foreground">Search</NavButton>
        </button>
      </Dialog.Trigger>
      <Dialog.Content className="min-h-82 space-y-4">
        <h1 className="text-xl font-light font-dragon-hunter">Search articles</h1>
        <div className="w-full relative">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search headings and body text"
            className="w-full rounded-lg border-2 bg-input px-3 py-2"
          />
          <GiCrossMark
            className="absolute top-1/2 p-1 size-6 -translate-y-1/2 right-2 z-5 cursor-pointer"
            tabIndex={0}
            onClick={() => setQuery("")}
          />
        </div>

        <div className="mt-4 grid gap-3">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={item.url as Route}
              className="hover:bg-muted/20 flex flex-col justify-between relative px-2 py-0.5">
              <p className="font-semibold">{item.title}</p>
              <p className="text-xs text-muted-foreground"> {item.url}</p>
            </Link>
          ))}
        </div>
      </Dialog.Content>
    </Dialog>
  );
};
