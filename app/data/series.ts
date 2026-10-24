import { books } from "./books";
import type { Book } from "@/app/type/Book";

// «Boshlangʻich saboqlar» seriyasi: kitobning subtitle maydoni orqali aniqlanadi,
// shuning uchun roʻyxat qoʻlda yozilmaydi (yangi kitobga shu subtitle yozilsa, oʻzi qoʻshiladi)
export const SERIES_TITLE = "Boshlangʻich saboqlar";

export const isSeriesBook = (book: Pick<Book, "subtitle">) => book.subtitle === SERIES_TITLE;

export const seriesBooks = books.filter(isSeriesBook);
