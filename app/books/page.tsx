import { Suspense } from 'react';
import BooksClient from './BooksClient';
import { books, toCardData } from '@/app/data/books';
import { pageMetadata } from '@/app/utils/metadata';

export const metadata = pageMetadata({ title: 'Kitoblar', path: '/books' });

// useSearchParams tufayli statik HTML'da shu skelet turadi, roʻyxat brauzerda chiziladi
function BooksLoading() {
  return (
    <div className="container animate-pulse pb-16 pt-12" aria-hidden="true">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <div className="h-10 w-56 rounded-lg bg-line" />
        <div className="flex flex-wrap gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-9 w-24 rounded-full bg-line" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="overflow-hidden rounded-[14px] border border-line bg-card">
            <div className="h-[250px] bg-brand-soft" />
            <div className="space-y-2 p-[18px]">
              <div className="h-3 w-24 rounded bg-line" />
              <div className="h-6 w-40 rounded bg-line" />
              <div className="h-4 w-32 rounded bg-line" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Server komponent: client'ga butun book.json emas, faqat kartochka maydonlari uzatiladi
export default function BooksPage() {
  return (
    <Suspense fallback={<BooksLoading />}>
      <BooksClient books={books.map(toCardData)} />
    </Suspense>
  );
}
