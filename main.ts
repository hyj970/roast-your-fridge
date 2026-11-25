import * as fs from "node:fs";

const ENTRY =
  "My fridge hums all night like it is pulling a double shift, yet the milk still expires first — all that overtime, and it cannot even stay cold.";

function formatEntry(line: string): string {
  return line.trim() + "\n";
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", formatEntry(ENTRY), "utf8");
