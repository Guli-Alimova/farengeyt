// Ulashish (Open Graph) uchun kitob muqovalarining kichik nusxalarini yaratadi:
// public/images/... (5 MB gacha) -> public/og/books/<id>.jpg (1200 px)
import { mkdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const books = JSON.parse(await readFile(new URL("app/data/book.json", root), "utf8"));
const outDir = new URL("public/og/books/", root);

await mkdir(outDir, { recursive: true });

for (const book of books) {
  const src = fileURLToPath(new URL(`public${book.image}`, root));
  const out = fileURLToPath(new URL(`${book.id}.jpg`, outDir));

  await sharp(src)
    .resize({ width: 1200, withoutEnlargement: true })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(out);
}

console.log(`og-images: ${books.length} ta muqova tayyor`);
