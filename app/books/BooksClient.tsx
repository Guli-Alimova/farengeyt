'use client';

import { useState, useEffect, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import books from "@/app/data/book.json";
import BookCard from "@/app/books/BookCard"; // ✅ tashqi komponent

const categories = [
  'Barchasi',
  'Bolalar kitoblari',
  'Badiiy adabiyot',
  "O'quv va amaliy qo'llanmalar",
  'Ilmiy-ommabop kitoblar'
];

const LoadingSkeleton = () => (
  <div className="p-8 animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-48 mb-6" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md">
          <div className="aspect-[3/4] bg-gray-200 rounded-t-lg" />
          <div className="p-4 space-y-2">
            <div className="h-6 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-20" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, []);

  const filteredBooks = useMemo(() =>
    books.filter(book => {
      const matchesCategory = activeCategory === 'Barchasi' || book.category === activeCategory;
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    }), [activeCategory, searchTerm]
  );

  if (!mounted) return <LoadingSkeleton />;

  return (
    <div className="p-8">
      {/* Search */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 border-b pb-1">Qidiruv</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Kitob qidiring..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 border-b pb-1">Janrlar</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-2 rounded cursor-pointer transition-colors ${
                activeCategory === category
                  ? 'bg-secondary text-white'
                  : 'bg-white border hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      {filteredBooks.length === 0 ? (
        <p className="text-gray-500 mt-4 text-center">Kitob topilmadi.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      )}
    </div>
  );
}