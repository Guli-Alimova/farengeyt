export const BOOK_STATUSES = ["published", "coming-soon"] as const;
export type BookStatus = (typeof BOOK_STATUSES)[number];

export type Book = {
  id: number;
  image: string; // maket yoki fotosurat: kitob sahifasi, galereya va OG rasmi uchun
  cover?: string; // tekis old muqova (/images/covers/...): 3D kitobning old tomoni
  spineColor: string; // #RRGGBB, 3D kitobning umurtqasi; scripts/cover-colors.mjs aniqlaydi
  title: string;
  category: string;
  status: BookStatus; // "coming-soon" — hali nashr qilinmagan, «Tez kunda» belgisi chiqadi
  subtitle: string;
  description: string;
  totalPage: string;
  publishYear: string;
  format: string;
  language: string;
  country: string;
  gallery?: string[];
  hamkor?: string;
  originalTitle?: string;
  originalLanguage?: string;
  author?: string;
  translator?: string;
  editor?: string;
  isbn?: string;
  price?: number | null; // soʻmda
  uzumUrl?: string;
};
