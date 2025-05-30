'use client';
import React from 'react'
import BookCard from './BookCard';
import { useState } from 'react';
import ResultsHeaders from "../books/ResultHeaders"

const Books = () => {
    const [sorting, setSorting] = useState('default');
    const books = [
        {
          image: '/images/01.png',
          title: 'Simple Things You Save BOOK',
          badge: 'Hot',
          discount: '-30%',
        },
        {
          image: '/images/02.png',
          title: 'How Deal With Very Bad BOOK',
        },
        {
          image: '/images/03.png',
          title: 'The Hidden Mystery Behind',
        },
        {
          image: '/images/04.png',
          title: 'Qple GPad With Retina Display',
          badge: '-12%',
        },
      ];
    
      return (
        <div className="p-8">
     <ResultsHeaders
        showingStart={1}
        showingEnd={books.length}
        totalResults={34}
        sorting={sorting}
        setSorting={setSorting}
      />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <BookCard
                key={index}
                image={book.image}
                title={book.title}
              />
            ))}
          </div>
        </div>
  )
}

export default Books