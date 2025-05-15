import React from 'react'
import ExploreBooksCard from './ExploreBooksCard'
import { LeftOrange,RightOrange } from '@/public/svg'

const categories = [
  {
    id: 1,
    image: '/images/romance.png',
    title: 'Romance Books (80)',
  },
  {
    id: 2,
    image: '/images/design.png',
    title: 'Design Low Book (6)',
  },
  {
    id: 3,
    image: '/images/safe.png',
    title: 'Safe Home (5)',
  },
  {
    id: 4,
    image: '/images/grow.png',
    title: 'Grow Flower (7)',
  },
  {
    id: 5,
    image: '/images/adventure.png',
    title: 'Adventure Book (4)',
  },
]
const ExploreBooks = () => {
  return (
    <section className="relative bg-[#d2e4eb] py-16 px-4 md:px-12 overflow-hidden">
      <div className="text-center">
        <h2 className="text-[#0a2d4a] text-3xl md:text-4xl font-bold mb-10">
          Top Categories Book
        </h2>
      </div>

      {/* Arrows */}
      <div className="absolute top-[50%] left-4 transform -translate-y-1/2 z-10">
        <div className="bg-[#01497C] text-white p-2 rounded-full cursor-pointer">
          <LeftOrange/>
        </div>
      </div>
      <div className="absolute top-[50%] right-4 transform -translate-y-1/2 z-10">
        <div className="bg-[#01497C] text-white p-2 rounded-full cursor-pointer">
          <RightOrange />
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-10 justify-center flex-wrap md:flex-nowrap mt-10">
        {categories.map((item, index) => (
          <ExploreBooksCard
            key={item.id}
            index={index + 1}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </section>

  )
}

export default ExploreBooks