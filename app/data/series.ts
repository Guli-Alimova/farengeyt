import { books } from "./books";
import { isSeriesBook } from "./seriesTitle";

export { SERIES_TITLE, isSeriesBook } from "./seriesTitle";

// «Boshlangʻich saboqlar» seriyasi: kitobning subtitle maydoni orqali aniqlanadi,
// shuning uchun roʻyxat qoʻlda yozilmaydi (yangi kitobga shu subtitle yozilsa, oʻzi qoʻshiladi).
// Boshqa subtitle (masalan, «Argument»da) — oddiy kichik sarlavha, seriya emas
export const seriesBooks = books.filter(isSeriesBook);
