import React from 'react';
import Link from 'next/link';

export default function AboutIntro() {
  return (
    <div className="border-b border-line">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Biz haqimizda
        </h1>
        <div className="text-primary">
          <Link href="/" className="hover:underline">Bosh sahifa</Link>
          <span> &gt; </span>
          <span className="font-semibold">Biz haqimizda</span>
        </div>
      </div>
    </div>
  );
}
