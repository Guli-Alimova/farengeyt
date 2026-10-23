import data from "./book.json";
import type { Book } from "@/app/type/Book";
import { categoryTitles } from "./categories";

export const books: Book[] = data;

// JSON'dagi janr nomi categories.ts'dagi ro'yxatda bo'lmasa, build to'xtaydi
for (const book of books) {
  if (!categoryTitles.includes(book.category)) {
    throw new Error(`book.json: id ${book.id} kitobining janri noma'lum: "${book.category}"`);
  }
}
