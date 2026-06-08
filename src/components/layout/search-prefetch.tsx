"use client";

import { useEffect } from "react";
import { getSearchIndex } from "@/lib/search-index";

export const SearchPrefetch = () => {
  useEffect(() => {
    const id = requestIdleCallback(() => {
      void getSearchIndex();
    });

    return () => cancelIdleCallback(id);
  }, []);

  return null;
};
