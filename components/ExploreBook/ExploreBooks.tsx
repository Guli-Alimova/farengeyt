'use client';
import React from 'react'
import ExploreBooksCard from './ExploreBooksCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";
import { categories } from '@/app/data/categories';
import { useReducedMotion } from '@/app/utils/useReducedMotion';

const ExploreBooks = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative bg-blue-100 py-16  md:px-12 overflow-hidden">
      <div className="text-center">
        <h2 className="text-primary text-3xl md:text-4xl font-bold mb-10">
          Kitob janrlari
        </h2>
      </div>


      <div className="flex gap-10 justify-center flex-wrap md:flex-nowrap mt-10">
      <Swiper
      // reduced motion: autoplay yoʻq (Swiper uni faqat ishga tushishda oʻqiydi, shuning uchun key)
      key={reducedMotion ? 'static' : 'autoplay'}
      modules={[Navigation, Autoplay]}
      autoplay={reducedMotion ? false : {
        delay: 5000,
        disableOnInteraction: false,
         pauseOnMouseEnter: true,
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
            category={item}
           
         />
        
          </SwiperSlide>
        ))}
         </Swiper>
      </div>
    </section>

  )
}

export default ExploreBooks