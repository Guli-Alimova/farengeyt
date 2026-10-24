import React from 'react';
import Link from 'next/link';

export default function ContactIntro() {
  return (
    <div className="border-b border-line">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {"Bogʻlanish"}
        </h1>
        <div className="text-primary">
          <Link href="/" className="hover:underline">Bosh sahifa</Link>
          <span> &gt; </span>
          <span className="font-semibold">{"Bogʻlanish"}</span>
        </div>
      </div>
    </div>
  );
}
