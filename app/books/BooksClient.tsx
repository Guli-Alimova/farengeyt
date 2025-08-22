'use client';

import { useState, useEffect, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import books from "@/app/data/book.json";

const categories = ['Barchasi', 'Bolalar adabiyoti', 'Badiiy adabiyot', "O'quv kitoblari", 'Ilmiy-ommabop kitoblar'];

// Memoized BookCard component
const BookCard = ({ id, image, title, subtitle, description }: {
  id: number; image: string; title: string; subtitle?: string; description?: string;
}) => (
  <Link href={`/books/${id}`} className="block group">
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-105">
      <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-blue-600">
          {title}
        </h3>
        {subtitle && <p className="text-gray-600 text-sm mb-2 line-clamp-1">{subtitle}</p>}
        {description && <p className="text-gray-500 text-xs line-clamp-2">{description}</p>}
      </div>
    </div>
  </Link>
);

// Loading skeleton
const LoadingSkeleton = () => (
  <div className="p-8 animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({length: 8}, (_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md">
          <div className="aspect-[3/4] bg-gray-200 rounded-t-lg"></div>
          <div className="p-4 space-y-2">
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
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
    // URL'dan category o'qish
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, []);

  // Memoized filtered books
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
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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