'use client';
import React from 'react'
import ExploreBooksCard from './ExploreBooksCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { categories } from '@/app/data/categories';
import { useReducedMotion } from '@/app/utils/useReducedMotion';
import SectionHeading from '@/components/common/SectionHeading';

const ExploreBooks = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="overflow-x-clip border-t border-line py-14">
      <div className="container">
        <SectionHeading eyebrow="Katalog" title="Kitob janrlari" />

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
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-7"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={item.id} className="h-auto!">
              <ExploreBooksCard index={index + 1} image={item.image} title={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ExploreBooks
