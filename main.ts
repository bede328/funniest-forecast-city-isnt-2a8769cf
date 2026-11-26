// Writes the selected one-line weather forecast for the fictional city of
// Drizzlewick to /output/entry.txt (UTF-8, one line, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Drizzlewick: 52°F, rain falling sideways since Tuesday, expected to turn vertical by Thursday. Umbrellas useless.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
