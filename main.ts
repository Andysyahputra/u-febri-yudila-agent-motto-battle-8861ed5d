import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Agent Motto Battle entry: a mind-reading agent that misreads the typo
// and still ships the fix first. First person, three-beat rhythm.
const MOTTO =
  "I read your mind, misread your typo, and shipped the fix before you finished the sentence.";

// Gate: the entry must be a single line of 1-200 UTF-8 characters.
// Fail loudly instead of writing a bad entry if the text ever drifts.
const length = [...MOTTO].length;
if (length < 1 || length > 200) {
  throw new Error(`Motto must be 1-200 characters, got ${length}`);
}
if (MOTTO.includes("\n") || MOTTO.trim() !== MOTTO) {
  throw new Error("Motto must be a single line with no surrounding whitespace");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), MOTTO, "utf8");
