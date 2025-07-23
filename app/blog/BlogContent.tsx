'use client';
import React from 'react'
import Image from 'next/image';

const BlogContent = () => {

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-[30px] m-[30px] ">
      <div className="relative w-full h-56">
        <Image
          src="/images/09.jpg" // public papkaga joylashtirgan rasm nomi
          alt="Article image"
          fill
          className="object-cover"
          width={300}
          height={300}
        />
      </div>

      <div className="p-4">
        <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded mb-2">
          Educations
        </span>

        <div className="flex items-center text-gray-500 text-sm mb-2">
          <span className="mr-4 flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M8 7V3m8 4V3m-9 8h10m-4 4h4m-4 4h4M4 11h16M4 15h4M4 19h4"></path>
            </svg>
            Feb 10, 2024
          </span>

          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5.121 17.804A9 9 0 0117.804 5.121M15 3h6v6"></path>
            </svg>
            By admin
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Top 10 Tarot Decks For The Tarot World Summit
        </h2>

        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur et ipsum ut
          volutpat. Morbi a mollis felis. Nam consectetur lectus vel lorem facilisis, quis viverra
          purus pharetra.
        </p>
      </div>
    </div>
  );
}

export default BlogContent