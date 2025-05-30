'use client';
import React from 'react'
import ExploreBooksCard from './ExploreBooksCard'
import { LeftOrange,RightOrange } from '@/public/svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";

const categories = [
  {
    id: 1,
    image: '/images/01.png',
    title: 'Bolalar adabiyot',
  },
  {
    id: 2,
    image: '/images/02.png',
    title: 'O`quv kitoblar',
  },
  {
    id: 3,
    image: '/images/04.png',
    title: 'Ilmiy-ommabop kitoblar',
  },
  {
    id: 4,
    image: '/images/05.png',
    title: ' Badiiy adabiyot',
  },

]
const ExploreBooks = () => {
  return (
    <section className="relative bg-blue-100 py-16  md:px-12 overflow-hidden">
      <div className="text-center">
        <h2 className="text-primary text-3xl md:text-4xl font-bold mb-10">
          Top Categories Book
        </h2>
      </div>

      {/* Arrows */}
      {/* <div className="absolute top-[50%] left-4 transform -translate-y-1/2 z-10">
        <div className="bg-[#29479E] text-white p-2 w-[27px] h-[27px] rounded-full cursor-pointer">
          <LeftOrange/>
        </div>
      </div>
      <div className="absolute top-[50%] right-4 transform -translate-y-1/2 z-10">
        <div className="bg-[#29479E] text-white w-[27px] p-2 rounded-full cursor-pointer">
          <RightOrange />
        </div>
      </div> */}

      {/* Cards */}
      <div className="flex gap-10 justify-center flex-wrap md:flex-nowrap mt-10">
      <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 5000, 
        disableOnInteraction: false, 
      }}
      loop={true} // qayta aylanish
        spaceBetween={3}
        slidesPerView={1}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {categories.map((item, index) => (
             <SwiperSlide key={index}>
          <ExploreBooksCard
            index={index + 1}
            image={item.image}
            title={item.title}
          />
          </SwiperSlide>
        ))}
         </Swiper>
      </div>
    </section>

  )
}

export default ExploreBooks