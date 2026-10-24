import data from "./book.json";
import { BOOK_STATUSES, type Book, type BookStatus } from "@/app/type/Book";
import { categoryTitles } from "./categories";

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
  if (book.isbn && !/^(\d{13}|\d{9}[\dX])$/.test(book.isbn.replace(/-/g, ""))) {
    throw new Error(`${where} ISBN'i 10 yoki 13 xonali emas: "${book.isbn}"`);
  }
}

export const books: Book[] = raw.map((book) => ({ ...book, status: book.status as BookStatus }));
