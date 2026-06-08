"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { RULE_ARTICLES } from "@/content/rules";
import type { TriggerElement } from "@/lib/utils";

export const Search = ({ children }: { children: TriggerElement }) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return RULE_ARTICLES;
    return RULE_ARTICLES.filter((a) => `${a.title} ${a.summary}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <Dialog defaultOpen={false}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content>
        <h1 className="text-lg font-bold">Search articles</h1>
        <input
          autoFocus
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search titles and summaries"
          className="mt-2 w-full rounded-lg border-2 border-border bg-input px-3 py-2"
        />

        <div className="mt-4 grid gap-3">
          {filtered.map((a) => (
            <Link key={a.slug} href={`/rules#${a.slug}`} className="rounded-lg border p-3 hover:bg-muted/20">
              <p className="font-semibold">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.summary}</p>
            </Link>
          ))}
        </div>
      </Dialog.Content>
    </Dialog>
  );
};
