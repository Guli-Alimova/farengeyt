import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutIntro() {
  return (
    <div className="bg-blue-100 relative overflow-hidden">

      {/* Chap rasm - ekran chetiga yopishgan */}
      <div className="absolute left-0 bottom-0 w-[200px] h-[180px] lg:block hidden">
        <Image
          src="/images/book.png"
          alt="Colorful books"
          fill
          className="object-contain object-left-bottom"
        />
      </div>

      {/* O'ng rasm - ekran chetiga yopishgan */}
      <div className="absolute right-0 bottom-0 w-[180px] h-[180px] lg:block hidden">
        <Image
          src="/images/book2.png"
          alt="Stacked books"
          fill
          className="object-contain object-right-bottom"
        />
      </div>

      {/* O'rta matn */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-primary mb-4 uppercase">
          Biz haqimizda
        </h1>
        <div className="text-primary">
          <Link href="/" className="hover:underline">Bosh Sahifa</Link>
          <span> &gt; </span>
          <span className="font-semibold">Biz haqimizda</span>
        </div>
      </div>

    </div>
  );
}