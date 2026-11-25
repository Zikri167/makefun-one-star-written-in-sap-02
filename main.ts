import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One Star, Written in Sap — a one-line 1-star review by a houseplant about its human owner.
// Deterministic: no network, no randomness, no time dependence. Writes exactly one line.
const ENTRY =
  "One star. She has moved me six times this month chasing \"good light\" and finally parked me on top of the fridge next to the Wi-Fi router, where I photosynthesize pure regret for a living.";

const outPath = process.env.MAKEFUN_OUTPUT_DIR
  ? `${process.env.MAKEFUN_OUTPUT_DIR}/entry.txt`
  : "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
