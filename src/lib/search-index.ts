export type SearchItem = { id: string; url: string; title: string; content: string };

let promise: Promise<SearchItem[]> | null = null;

export const getSearchIndex = () => {
  if (!promise) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    promise = fetch(`${basePath}/search-index.json`).then((r) => r.json());
  }

  return promise;
};
