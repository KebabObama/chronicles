"use client";

import type { Route } from "next";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { GiClockwork, GiCrossMark } from "react-icons/gi";
import { Dialog } from "@/components/ui/dialog";
import { getSearchIndex, type SearchItem } from "@/lib/search-index";

const HISTORY_KEY = "search-history";

export const Search = ({ children }: { children: React.ReactNode }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");
  const [items, setItems] = useState<SearchItem[]>([]);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    void (async () => {
      setItems(await getSearchIndex());
    })();

    setHistory(JSON.parse(localStorage.getItem(HISTORY_KEY) ?? "[]").slice(0, 3));

    const handle = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === "k") || e.key === "/") {
        e.preventDefault();
        dialogRef.current?.togglePopover();
      }
    };

    addEventListener("keydown", handle);
    return () => removeEventListener("keydown", handle);
  }, []);

  const addToHistory = (id: string) => {
    const next = [id, ...history.filter((x) => x !== id)].slice(0, 3);
    setHistory(next);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  };

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    return items
      .map((item) => {
        const title = item.title.toLowerCase();
        const content = item.content.toLowerCase();
        let score = 0;
        if (title === value) score += 1000;
        else if (title.startsWith(value)) score += 600;
        else if (title.includes(value)) score += 300;
        if (content.includes(value)) score += 75;
        const historyIndex = history.indexOf(item.id);
        if (historyIndex !== -1) score += 30 - historyIndex * 10;
        return { item, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.item)
      .slice(0, 5);
  }, [items, query, history]);

  return (
    <Dialog>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content className="min-h-82 space-y-4" ref={dialogRef}>
        <h1 className="text-xl font-light font-dragon-hunter">Search articles</h1>

        <div className="relative w-full">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search headings and body text"
            className="w-full rounded-lg border-2 bg-input px-3 py-2"
          />

          <GiCrossMark
            className="absolute top-1/2 right-2 z-5 size-6 -translate-y-1/2 cursor-pointer p-1"
            onClick={() => setQuery("")}
          />
        </div>

        <div className="mt-4 grid gap-3">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={item.url as Route}
              onClick={() => addToHistory(item.id)}
              className="group/select hover:bg-muted/20 relative flex flex-col px-2 py-0.5 text-start">
              <p className="font-semibold">{item.title}</p>
              <p className="text-muted-foreground text-xs">{item.url}</p>

              {history.includes(item.id) && (
                <GiClockwork className="text-muted-foreground group-hover/select:text-foreground group-focus/select:text-foreground absolute top-1/2 right-4 -translate-y-1/2" />
              )}
            </Link>
          ))}
        </div>
      </Dialog.Content>
    </Dialog>
  );
};
