'use client';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const categories = [
  'Bolalar adabiyoti',
  'O`quv kitoblar',
  'Ilmiy-ommabop kitoblar',
  'Baddiy adabiyot',
 
];

export default function SearchBook() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Arts & Photography');

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 border-b pb-1 text-primary">Search</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded px-3 py-2 pr-10"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-silver" />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2 border-b pb-1 text-primary">Categories</h2>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-left px-3 py-2 rounded ${
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
    </div>
  );
}
