// Round 3 entry for news-image-20261121: deliver the front-page image
// for Saturday 21 November 2026. Node 22, standard library only: read
// entry.png, check it is a real 1024x1024 PNG, copy it into
// MAKEFUN_OUTPUT_DIR, and verify the delivered copy byte-for-byte
// (SHA-256). The image is a fresh Round 3 build: 37 dated stories,
// 13 drawn cards each tagged by how sure it is, a UTC strip, a
// day-in-figures strip, a pinned world map and a date-check footer.
// See build_frontpage_r3.py in the work directory.
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
// height at 20-23, all big-endian) and reject anything else. The gate
// also caps the file at 1 MiB, and the PNG must end with a complete
// IEND chunk (12 bytes: length 0, type "IEND", CRC) so a truncated
// write can never be shipped as a whole image.
if (source.length > 1048576) {
  throw new Error(
    `entry.png is ${source.length} bytes, over the 1 MiB limit`,
  );
}
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
const IEND = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44]);
if (source.length < 20 || !source.subarray(-12, -4).equals(IEND)) {
  throw new Error('entry.png failed the IEND trailer check: file may be truncated');
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
