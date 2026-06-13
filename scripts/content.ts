import fs from "node:fs/promises";
import path from "node:path";
import GithubSlugger from "github-slugger";

export type SearchItem = {
  id: string;
  url: string;
  title: string;
  content: string;
};

const headingPattern = /^\s*(#{1,6})\s+(.+?)\s*$/; // Allowed leading whitespace for MDX tags

export const getMdxFiles = async (dir = "src/app"): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return getMdxFiles(fullPath);
      return fullPath.endsWith(".mdx") ? [fullPath] : [];
    }),
  );
  return files.flat();
};

const getDocumentRoute = (file: string) => {
  const relativePath = path.relative("src/app", file);
  const normalized = relativePath.split(path.sep).join("/");
  const segments = normalized.split("/");

  if (segments.length === 1) {
    return segments[0].replace(/\.mdx$/, "");
  }
  return segments.slice(0, -1).join("/");
};

const splitSections = (source: string) => {
  const lines = source.split(/\r?\n/);
  const sections: Array<{ title: string; level: number; content: string[] }> = [];
  const slugger = new GithubSlugger();

  let current: { title: string; level: number; content: string[] } | null = null;
  let inFence = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip JS/TS imports inside MDX so they don't clutter search text
    if (trimmed.startsWith("import ") && (trimmed.includes("from '") || trimmed.includes('from "'))) {
      continue;
    }

    if (/^```/.test(trimmed)) {
      inFence = !inFence;
    }

    const match = !inFence ? line.match(headingPattern) : null;

    if (match) {
      if (current) {
        sections.push(current);
      }

      current = {
        title: match[2].trim(),
        level: match[1].length,
        content: [],
      };

      // Clean up the heading text if it has trailing MDX characters
      if (current.title.endsWith(">")) {
        current.title = current.title.replace(/>+$/, "").trim();
      }

      continue;
    }

    if (current) {
      // Clean up standalone JSX/MDX tags from the content search text block if desired
      // but keep the text inside them intact.
      if (trimmed !== "" && !trimmed.startsWith("<Item") && trimmed !== "</Item>") {
        current.content.push(line);
      }
    }
  }

  if (current) {
    sections.push(current);
  }

  return sections.map((section) => ({
    ...section,
    id: slugger.slug(section.title),
  }));
};

export const buildSearchIndex = async () => {
  const files = await getMdxFiles();
  const searchEntries: SearchItem[] = [];

  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    const route = getDocumentRoute(file);
    const headings = splitSections(source);

    const entries = headings.map((heading) => ({
      id: heading.id,
      url: `/${route}#${heading.id}`,
      title: heading.title,
      content: heading.content.join("\n").trim(),
    }));

    searchEntries.push(...entries);
  }

  await fs.writeFile("public/search-index.json", JSON.stringify(searchEntries, null, 2));
};

if (import.meta.main) {
  await buildSearchIndex();
}
