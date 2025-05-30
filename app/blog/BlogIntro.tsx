import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const BlogIntro = () => {
  return (  
    <div className="bg-blue-100">
      <div className="flex flex-col md:flex-row items-center justify-between  p-8">
        <div className="relative w-60 h-60 md:w-80 md:h-80">
          <Image
            src="/images/Unsplash.png"
            alt="Colorful books"
            fill
            className="object-contain w-60"
          />
        </div>

        <div className="text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl font-bold text-[#002f4b] mb-4">Blog</h1>
          <div className="text-[#002f4b]">
            <Link href="/" className="hover:underline">Home</Link> <span> &gt; </span> <span className="font-semibold">Blog</span>
          </div>
        </div>

        <div className="relative w-60 h-60 md:w-80 md:h-80">
          <Image
            src="/images/hero-book.png"
            alt="Stacked books"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}


export default BlogIntro