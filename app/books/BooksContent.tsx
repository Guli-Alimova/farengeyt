'use client';

import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import BookCard from './BookCard';
import { useSearchParams } from 'next/navigation';
import books from "@/app/data/book.json";

const categories = [
  'Barchasi',
  'Bolalar adabiyoti',
  'Badiiy adabiyot',
  "O'quv kitoblari",
  'Ilmiy-ommabop kitoblar',
];

export default function BooksContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredBooks = books.filter((book) => {
    const matchesCategory = activeCategory === 'Barchasi' || book.category === activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-8">
      {/* Qidiruv */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 border-b pb-1 text-primary">Search</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Kitob qidiring..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded px-3 py-2 pr-10"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-silver" />
        </div>
      </div>

      {/* Kategoriyalar */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 border-b pb-1 text-primary">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-2 rounded ${
                activeCategory === category
                  ? 'bg-secondary text-white'
                  : 'bg-white border text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Kitoblar ro'yxati */}
      {filteredBooks.length === 0 ? (
        <p className="text-gray-500 mt-4">Kitob topilmadi.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              image={book.image}
              title={book.title}
              subtitle={book.subtitle}
              description={book.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}
