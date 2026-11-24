import { writeFileSync, mkdirSync } from "node:fs";

const sentence: string =
  'He can subpoena the chief executive of the largest AI company on earth and haul him before his committee, but he cannot turn his own one-page bill into a PDF, so his office prints it, scans the printout, and emails the scan to itself every single time.';

const outputDir: string = process.env.OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true, mode: 0o755 });
writeFileSync(outputDir + "/entry.txt", sentence, "utf8");
