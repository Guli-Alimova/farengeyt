import data from "./book.json";
import { BOOK_STATUSES, type Book, type BookStatus } from "@/app/type/Book";
import { categories, categoryTitles } from "./categories";
import sizes from "./cover-sizes.json"; // scripts/resize-images.mjs yozadi
import spineSizesJson from "./spine-sizes.json"; // scripts/resize-images.mjs yozadi

const coverSizes: Record<string, { width: number; height: number } | undefined> = sizes;
const spineSizes: Record<string, { width: number; height: number } | undefined> = spineSizesJson;

// JSON importida status oddiy string bo'lib keladi; quyida tekshirilgach BookStatus'ga o'tkaziladi
type BookJson = Omit<Book, "status"> & { status: string };
const raw: BookJson[] = data;

const UZUM_URL = /^https:\/\/(www\.)?uzum\.uz\//;

// book.json'dagi noto'g'ri qiymat build'ni to'xtatadi (bo'sh qiymatlar tekshirilmaydi)
for (const book of raw) {
  const where = `book.json: id ${book.id} kitobining`;
  if (!categoryTitles.includes(book.category)) {
    throw new Error(`${where} janri noma'lum: "${book.category}"`);
  }
  if (!(BOOK_STATUSES as readonly string[]).includes(book.status)) {
    throw new Error(`${where} statusi ${BOOK_STATUSES.join(" yoki ")} bo'lishi kerak: "${book.status}"`);
  }
  if (book.uzumUrl && !UZUM_URL.test(book.uzumUrl)) {
    throw new Error(`${where} uzumUrl https://uzum.uz/ bilan boshlanishi kerak: "${book.uzumUrl}"`);
  }
  if (book.price != null && !(Number.isInteger(book.price) && book.price > 0)) {
    throw new Error(`${where} narxi musbat butun son (soʻmda) bo'lishi kerak: ${book.price}`);
  }
  if (!/^#[0-9A-Fa-f]{6}$/.test(book.spineColor)) {
    throw new Error(`${where} spineColor #RRGGBB koʻrinishida boʻlishi kerak: "${book.spineColor}"`);
  }
  if (book.cover && !book.cover.startsWith("/images/covers/")) {
    throw new Error(`${where} cover /images/covers/ bilan boshlanishi kerak: "${book.cover}"`);
  }
  if (book.cover && !coverSizes[book.cover]) {
    throw new Error(`${where} muqovasi cover-sizes.json'da yoʻq: "${book.cover}". node scripts/resize-images.mjs ni ishga tushiring`);
  }
  if (book.spine && !book.spine.startsWith("/images/spines/")) {
    throw new Error(`${where} spine /images/spines/ bilan boshlanishi kerak: "${book.spine}"`);
  }
  if (book.spine && !spineSizes[book.spine]) {
    throw new Error(`${where} umurtqasi spine-sizes.json'da yoʻq: "${book.spine}". node scripts/resize-images.mjs ni ishga tushiring`);
  }
  if (book.isbn && !/^(\d{13}|\d{9}[\dX])$/.test(book.isbn.replace(/-/g, ""))) {
    throw new Error(`${where} ISBN'i 10 yoki 13 xonali emas: "${book.isbn}"`);
  }
}

export const books: Book[] = raw.map((book) => ({ ...book, status: book.status as BookStatus }));

// Kartochka uchun kerakli maydonlar. Client komponentlarga butun book.json emas, shu uzatiladi
export type BookCardData = Pick<
  Book,
  "id" | "title" | "category" | "subtitle" | "author" | "status" | "uzumUrl" | "cover" | "spineColor" | "totalPage" | "originalTitle"
> & {
  coverRatio?: number; // muqova eni / boʻyi: 3D kitob shu nisbatda chiziladi
};

export function toCardData(book: Book): BookCardData {
  const { id, title, category, subtitle, author, status, uzumUrl, cover, spineColor, totalPage, originalTitle } = book;
  const size = cover ? coverSizes[cover] : undefined;
  const coverRatio = size ? size.width / size.height : undefined;
  return { id, title, category, subtitle, author, status, uzumUrl, cover, coverRatio, spineColor, totalPage, originalTitle };
}

// Kitobi bor janrlar (categories.ts tartibida): bosh sahifa, footer va /books filtri shundan oladi.
// Janrga kitob qoʻshilsa, oʻzi paydo boʻladi. Karta rasmi: janrdagi tekis muqovasi bor birinchi kitob
export const activeCategories = categories.flatMap((category) => {
  const inCategory = books.filter((book) => book.category === category.title);
  if (inCategory.length === 0) return [];
  const coverBook = inCategory.find((book) => book.cover) ?? inCategory[0];
  return [{ ...category, book: toCardData(coverBook) }];
});

export const activeCategoryTitles = activeCategories.map((c) => c.title);
