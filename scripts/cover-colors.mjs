// Har bir kitob muqovasining asosiy rangini aniqlab, book.json'ga "spineColor" qilib yozadi
// (3D kitobning umurtqasi shu rangda boʻladi).
// Manba: "cover" (tekis muqova) boʻlsa undan, boʻlmasa "image" (maket) dan, oq/kulrang fonni hisobga olmay.
// Mavjud qiymatga tegmaydi (qoʻlda tuzatilgan boʻlishi mumkin); hammasini qayta hisoblash: --force
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const jsonPath = fileURLToPath(new URL("app/data/book.json", root));
const force = process.argv.includes("--force");

let text = await readFile(jsonPath, "utf8");
const books = JSON.parse(text);

const hex = (n) => Math.round(n).toString(16).padStart(2, "0").toUpperCase();

async function dominantColor(src, skipBackground) {
  const { data, info } = await sharp(src)
    .resize(64, 64, { fit: "inside" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Ranglar 4 bitlik qutilarga guruhlanadi; eng koʻp piksel tushgan qutining oʻrtachasi olinadi
  const buckets = new Map();
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    if (skipBackground && (max - min < 40 || min > 215)) continue;
    const key = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
    const s = buckets.get(key) ?? { n: 0, r: 0, g: 0, b: 0 };
    s.n++; s.r += r; s.g += g; s.b += b;
    buckets.set(key, s);
  }
  const top = [...buckets.values()].sort((a, b) => b.n - a.n)[0];
  if (!top) return null;
  return `#${hex(top.r / top.n)}${hex(top.g / top.n)}${hex(top.b / top.n)}`;
}

for (const book of books) {
  const fromCover = Boolean(book.cover?.trim());
  const src = fileURLToPath(new URL(`public${fromCover ? book.cover : book.image}`, root));
  const color = await dominantColor(src, !fromCover);
  const source = fromCover ? "cover" : "image";

  if (!color) {
    console.log(`id ${book.id} «${book.title}»: rang topilmadi (${source})`);
    continue;
  }

  // Faqat shu kitobning bloki ichida ishlanadi, fayl qayta formatlanmaydi
  const start = text.search(new RegExp(`"id":\\s*${book.id},`));
  const next = text.slice(start + 1).search(/"id":\s*\d+,/);
  const end = next === -1 ? text.length : start + 1 + next;
  let block = text.slice(start, end);

  if (book.spineColor && !force) {
    console.log(`id ${book.id} «${book.title}»: ${book.spineColor} (oʻzgartirilmadi, topilgani ${color})`);
    continue;
  }
  if (book.spineColor) {
    block = block.replace(/"spineColor":\s*"[^"]*"/, `"spineColor": "${color}"`);
  } else {
    // Qator oxiri (CRLF yoki LF) fayldagidek saqlanadi
    block = block.replace(
      /^([ \t]*)"image":[^\n]*?(\r?\n)/m,
      (line, indent, eol) => `${line}${indent}"spineColor": "${color}",${eol}`
    );
  }
  text = text.slice(0, start) + block + text.slice(end);
  console.log(`id ${book.id} «${book.title}»: ${color} (${source})`);
}

await writeFile(jsonPath, text);
