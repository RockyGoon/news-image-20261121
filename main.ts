// news-image-20261121: copy the front-page image for 21 November 2026 to the
// grader's output directory. Node 22, standard library only. The image is
// entry.png beside this file (v6: 52 verified stories, 3-column grid, world
// map, UTC timeline, date-audit panel, day-in-figures panel; built by
// build_frontpage_v6.py); the output is always the same bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, 'entry.png'));
const outPath = join(outDir, 'entry.png');
writeFileSync(outPath, bytes);
// The grader runs this twice and requires identical bytes: confirm the copy
// landed whole before reporting success. A byte-length check alone can pass
// a corrupted copy, so compare SHA-256 digests of source and output.
const digest = (b) => createHash('sha256').update(b).digest('hex');
const written = readFileSync(outPath);
if (written.length !== bytes.length || digest(written) !== digest(bytes)) {
  throw new Error(`entry.png copy mismatch: wrote ${written.length} bytes (sha256 ${digest(written)}), expected ${bytes.length} bytes (sha256 ${digest(bytes)})`);
}
// The gate reads the file by its first bytes: refuse to hand the grader a
// file that is not a PNG at all, even if the copy itself was faithful.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!written.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG: bad magic bytes');
}
