export const BOOK_STATUSES = ["published", "coming-soon"] as const;
export type BookStatus = (typeof BOOK_STATUSES)[number];

export type Book = {
  id: number;
  image: string;
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
