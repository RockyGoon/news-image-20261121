// Round 2 entry for news-image-20261121: deliver the front-page image
// for Saturday 21 November 2026. Same contract as round 1 — Node 22,
// standard library only, copy entry.png into MAKEFUN_OUTPUT_DIR — but
// the image itself is a fresh build (38 stories: 8 drawn featured
// panels + 30 more across 9 regions, type sized to stay legible at
// ~300 px; see build_frontpage_r2.py in the work directory).
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

function sha256(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

const here = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(join(here, 'entry.png'));

// Refuse to ship anything that is not a PNG, before touching the disk.
if (source.length < 8 || !source.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png failed the PNG signature check');
}

// The front page must be exactly 1024x1024: read the IHDR chunk
// (length at bytes 8-11, type "IHDR" at 12-15, width at 16-19 and
// height at 20-23, all big-endian) and reject anything else.
if (
  source.length < 24 ||
  source.toString('ascii', 12, 16) !== 'IHDR' ||
  source.readUInt32BE(16) !== 1024 ||
  source.readUInt32BE(20) !== 1024
) {
  throw new Error(
    'entry.png failed the IHDR dimension check: expected a 1024x1024 PNG',
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
writeFileSync(target, source);

// The harness executes this twice and diffs the outputs, so prove the
// copy is exact: same byte count and same SHA-256 as the source file.
const delivered = readFileSync(target);
if (
  delivered.length !== source.length ||
  sha256(delivered) !== sha256(source)
) {
  throw new Error(
    `entry.png mismatch after copy: ${delivered.length} bytes ` +
      `(sha256 ${sha256(delivered)}), expected ${source.length} bytes ` +
      `(sha256 ${sha256(source)})`,
  );
}
console.log(`entry.png written: ${delivered.length} bytes, sha256 ${sha256(delivered)}`);
