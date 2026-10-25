'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import type { BookCardData } from "@/app/data/books";
import { ALL_CATEGORIES } from "@/app/data/categories";
import BookCard from "@/components/book/BookCard";

// Qidiruvda ʻ/ʼ va oddiy apostroflar farq qilmaydi: "o'quv" ham "oʻquv" ni topadi
const normalize = (s: string) => s.toLowerCase().replace(/[ʻʼ'‘’`]/g, "");

// categoryTitles: faqat kitobi bor janrlar (activeCategoryTitles, server komponentdan keladi)
export default function BooksClient({ books, categoryTitles }: { books: BookCardData[]; categoryTitles: string[] }) {
  const categories = useMemo(() => [ALL_CATEGORIES, ...categoryTitles], [categoryTitles]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const categoryParam = useSearchParams().get('category');

  // /books ichida havola bosilganda ham URL'dagi janrga moslashadi
  useEffect(() => {
    setActiveCategory(
      categoryParam && categories.includes(categoryParam) ? categoryParam : ALL_CATEGORIES
    );
  }, [categoryParam, categories]);

  const filteredBooks = useMemo(() => {
    const query = normalize(searchTerm.trim());
    return books.filter(book => {
      const matchesCategory = activeCategory === ALL_CATEGORIES || book.category === activeCategory;
      const haystack = normalize([book.title, book.author, book.originalTitle].filter(Boolean).join(" "));
      return matchesCategory && (!query || haystack.includes(query));
    });
  }, [books, activeCategory, searchTerm]);

  return (
    <section className="container pb-16 pt-12">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <h1 className="font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink">
          Kitoblarimiz
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="search"
            placeholder="Kitob yoki muallif"
            aria-label="Kitob yoki muallif boʻyicha qidirish"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-[min(260px,100%)] rounded-full border border-line bg-card px-3.5 py-2 text-[15px] text-ink placeholder:text-muted focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ember"
          />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Janrlar">
            {categories.map(category => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-pointer rounded-full border px-3.5 py-[7px] text-sm transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ember ${
                    active ? 'border-ink bg-ink text-paper' : 'border-line bg-card text-muted hover:text-ink'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {filteredBooks.length === 0 ? (
        <p className="py-6 text-muted">{"Hech narsa topilmadi. Boshqa soʻz bilan qidirib koʻring."}</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
}
