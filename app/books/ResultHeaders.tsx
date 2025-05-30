'use client';
import { FaThList, FaThLarge } from 'react-icons/fa';
import { useState } from 'react';

interface ResultsHeaderProps {
  showingStart: number;
  showingEnd: number;
  totalResults: number;
  sorting: string;
  setSorting: (value: string) => void;
}

export default function ResultsHeader({
  showingStart,
  showingEnd,
  totalResults,
  sorting,
  setSorting,
}: ResultsHeaderProps) {
  const [view, setView] = useState<'list' | 'grid'>('grid');

  return (
    <div className="flex justify-between items-center border rounded px-4 py-2 mb-4">
      <div>
        <span className="text-gray-700">
          Showing {showingStart}–{showingEnd} of {totalResults} Results
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => setView('list')}
            className={`p-1 ${view === 'list' ? 'text-orange-500' : 'text-gray-700'}`}
          >
            <FaThList size={20} />
          </button>
          <button
            onClick={() => setView('grid')}
            className={`p-1 ${view === 'grid' ? 'text-orange-500' : 'text-gray-700'}`}
          >
            <FaThLarge size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
