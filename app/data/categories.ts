export const ALL_CATEGORIES = "Barchasi";

// Barcha janrlar: book.json tekshiruvi shu roʻyxat boʻyicha. Saytda faqat kitobi bor janrlar
// koʻrinadi (activeCategories, app/data/books.ts)
export const categories = [
  { id: 1, title: "Bolalar kitoblari" },
  { id: 2, title: "Badiiy adabiyot" },
  { id: 3, title: "Oʻquv va amaliy qoʻllanmalar" },
  { id: 4, title: "Ilmiy-ommabop kitoblar" },
  { id: 5, title: "Tanqidiy fikrlash va falsafa" },
];

export const categoryTitles = categories.map((c) => c.title);
