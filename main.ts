import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word From Grandma: the single word Grandma would text about AI.
// "malarkey" — her warm, baffled dismissal of the whole AI fuss:
// everything the machines do, in her voice, is a load of malarkey.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
const word = "malarkey";
if (word.length < 1 || word.length > 30 || /\s/.test(word)) {
  throw new Error("entry must be exactly one word of 1-30 characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
