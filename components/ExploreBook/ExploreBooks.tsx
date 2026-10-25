import React from 'react'
import ExploreBooksCard from './ExploreBooksCard'
import { activeCategories } from '@/app/data/books';
import SectionHeading from '@/components/common/SectionHeading';

// Server komponent: faqat kitobi bor janrlar. Janr kam, shuning uchun karusel emas, grid
const ExploreBooks = () => {
  if (activeCategories.length === 0) return null;

  return (
    <section className="border-t border-line py-14">
      <div className="container">
        <SectionHeading eyebrow="Katalog" title="Kitob janrlari" />
        <ul className="mt-7 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
          {activeCategories.map((category, index) => (
            <li key={category.id}>
              <ExploreBooksCard index={index + 1} title={category.title} book={category.book} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ExploreBooks
