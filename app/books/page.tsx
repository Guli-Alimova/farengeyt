import { Suspense } from 'react';
import BooksClient from './BooksClient';

// Loading component
function BooksLoading() {
  return (
    <div className="p-8">
      <div className="animate-pulse">
        {/* Search skeleton */}
        <div className="mb-6">
          <div className="h-6 bg-gray-200 rounded w-20 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded w-full"></div>
        </div>
        
        {/* Categories skeleton */}
        <div className="mb-6">
          <div className="h-6 bg-gray-200 rounded w-24 mb-2"></div>
          <div className="flex flex-wrap gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded w-20"></div>
            ))}
          </div>
        </div>

        {/* Books grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md">
              <div className="aspect-[3/4] bg-gray-200 rounded-t-lg"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main page component (Server Component)
export default function BooksPage() {
  return (
    <div>
      <Suspense fallback={<BooksLoading />}>
        <BooksClient />
      </Suspense>
    </div>
  );
}