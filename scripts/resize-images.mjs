// Katta rasmlarni saytga moslab kichraytiradi (asl nusxalar originals/ da, u gitignore qilingan):
//   originals/images/*.jpg      (maketlar, 5000 px, ~5 MB) -> public/images/<shu nom>.jpg         (2000 px)
//   originals/covers/*.jpg|png  (tekis muqovalar)          -> public/images/covers/<shu nom>.jpg  (800 px)
// Muqovalardan faqat book.json'da "cover" sifatida koʻrsatilganlari saytga chiqadi;
// hali saytda yoʻq kitoblarning muqovalari originals/covers/ da kutib turadi.
// Yangi rasm qoʻshilsa: aslini tegishli papkaga qoʻyib, `node scripts/resize-images.mjs`
import { mkdir, readdir, readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);

const books = JSON.parse(await readFile(new URL("app/data/book.json", root), "utf8"));
const usedCovers = new Set(books.map((b) => b.cover).filter(Boolean));

const jobs = [
  { src: "originals/images/", out: "public/images/", width: 2000, pattern: /\.jpe?g$/i },
  {
    src: "originals/covers/",
    out: "public/images/covers/",
    width: 800,
    pattern: /\.(jpe?g|png)$/i,
    include: (outName) => usedCovers.has(`/images/covers/${outName}`),
  },
];

for (const job of jobs) {
  const srcDir = new URL(job.src, root);
  const outDir = new URL(job.out, root);

  let names;
  try {
    names = await readdir(srcDir);
  } catch {
    continue; // papka hali yoʻq (masalan, muqovalar hali berilmagan)
  }
  await mkdir(outDir, { recursive: true });

  for (const name of names) {
    if (!job.pattern.test(name)) continue;

    const outName = name.replace(/\.(jpe?g|png)$/i, ".jpg");
    if (job.include && !job.include(outName)) {
      console.log(`${job.src}${name}: book.json'da yoʻq, oʻtkazib yuborildi`);
      continue;
    }

    const src = fileURLToPath(new URL(name, srcDir));
    const out = fileURLToPath(new URL(outName, outDir));

    await sharp(src)
      .rotate()
      .resize({ width: job.width, withoutEnlargement: true })
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(out);

    const [before, after] = await Promise.all([stat(src), stat(out)]);
    console.log(`${job.src}${name}: ${(before.size / 1e6).toFixed(1)} MB -> ${(after.size / 1e3).toFixed(0)} KB`);
  }
}
