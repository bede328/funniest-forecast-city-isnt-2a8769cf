// Writes the selected one-line weather forecast for the fictional city of
// Drizzlewick to /output/entry.txt (UTF-8, one line, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Drizzlewick: 52°F, rain falling sideways since Tuesday, expected to turn vertical by Thursday. Umbrellas useless.";

// Guard the gate before writing: one line, 1-120 characters, no newline.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.includes("\n")) {
  throw new Error(
    `entry must be one line of 1-120 characters, got ${ENTRY.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
