// Katta muqovalarni saytga moslab kichraytiradi:
// originals/images/*.jpg (asl nusxalar, 5000 px, ~5 MB) -> public/images/<shu nom>.jpg (2000 px)
// Yangi katta rasm qoʻshilsa: aslini originals/images/ ga qoʻyib, `node scripts/resize-images.mjs`
import { readdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const srcDir = new URL("originals/images/", root);
const outDir = new URL("public/images/", root);

for (const name of await readdir(srcDir)) {
  if (!/\.jpe?g$/i.test(name)) continue;

  const src = fileURLToPath(new URL(name, srcDir));
  const out = fileURLToPath(new URL(name, outDir));

  await sharp(src)
    .rotate()
    .resize({ width: 2000, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(out);

  const [before, after] = await Promise.all([stat(src), stat(out)]);
  console.log(`${name}: ${(before.size / 1e6).toFixed(1)} MB -> ${(after.size / 1e3).toFixed(0)} KB`);
}
