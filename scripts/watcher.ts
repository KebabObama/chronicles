import { watch } from "node:fs";
import { buildSearchIndex } from "./content";

let timeout: NodeJS.Timeout | undefined;

const watcher = watch("src/app", { recursive: true }, (event, filename) => {
  clearTimeout(timeout);

  timeout = setTimeout(async () => {
    console.log(`Detected ${event} in ${filename}`);

    try {
      await Promise.all([buildSearchIndex()]);
    } catch (error) {
      console.error("Failed to build search index:", error);
    }
  }, 500);
});

console.log("\nWatching for changes in src/content...\n");

process.on("SIGINT", () => {
  console.log("Closing watcher...");
  watcher.close();

  if (timeout) {
    clearTimeout(timeout);
  }

  process.exit(0);
});
