import type { Book } from "@/app/type/Book";

// «Boshlangʻich saboqlar» seriyasi kitobning subtitle maydoni orqali aniqlanadi. Alohida faylda,
// chunki BookCard client JS'ga tushadi: series.ts esa books'ni (butun book.json'ni) import qiladi
export const SERIES_TITLE = "Boshlangʻich saboqlar";

export const isSeriesBook = (book: Pick<Book, "subtitle">) => book.subtitle === SERIES_TITLE;
