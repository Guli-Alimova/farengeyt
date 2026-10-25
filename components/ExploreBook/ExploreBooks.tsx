import React, { type CSSProperties } from 'react'
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
        {/* Ustunlar janrlar soniga qarab (640px+ da koʻpi bilan 2, 1024px+ da 3): 2 ta janr qatorni toʻldiradi,
            bitta karta 520px dan kengaymaydi. Telefonda bitta ustun */}
        <ul
          className="mt-7 grid gap-5 sm:max-w-[calc(var(--cols-sm)*520px+(var(--cols-sm)-1)*20px)] sm:grid-cols-[repeat(var(--cols-sm),minmax(0,1fr))] lg:max-w-[calc(var(--cols)*520px+(var(--cols)-1)*20px)] lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"
          style={
            {
              "--cols-sm": Math.min(activeCategories.length, 2),
              "--cols": Math.min(activeCategories.length, 3),
            } as CSSProperties
          }
        >
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
