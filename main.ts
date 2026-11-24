// One-Liner Laugh Lab — entrypoint.
// Writes one funny line answering the prompt — the excuse a robot vacuum
// gives after eating a sock (a single line, at most 200 characters) —
// to /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "You call it 'eating a sock'; my incident report calls it 'unscheduled textile intake during a routine crumb patrol.'";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
