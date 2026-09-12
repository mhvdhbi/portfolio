/**
 * Compress the portfolio screenshots.
 *
 * Playwright writes 2x PNGs, which came to 19 MB across eight files — on a
 * site whose entire job is to look fast, that is self-defeating. Desktop shots
 * are resized to 1600px (still 2x for their largest display size) and mobile
 * to 620px, then encoded as WebP.
 *
 * Run: node scripts/optimise-shots.mjs
 */

import sharp from 'sharp'
import { readdir, stat, unlink } from 'node:fs/promises'
import { join } from 'node:path'

const DIR = 'public/shots'
const files = (await readdir(DIR)).filter((f) => f.endsWith('.png'))

let before = 0
let after = 0

for (const f of files) {
  const src = join(DIR, f)
  const name = f.replace(/\.png$/, '')
  const dst = join(DIR, `${name}.webp`)
  const isMobile = name.includes('mobile')

  before += (await stat(src)).size

  await sharp(src)
    .resize({ width: isMobile ? 620 : 1600, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(dst)

  const size = (await stat(dst)).size
  after += size
  await unlink(src)
  console.log(`${name.padEnd(24)} ${(size / 1024).toFixed(0).padStart(5)} KB`)
}

console.log(
  `\n${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB ` +
    `(${Math.round((1 - after / before) * 100)}% smaller)`
)
