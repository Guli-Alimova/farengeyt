'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import FeaturedBookCard from './FeaturedBookCard';
import { books } from '@/app/data/books';

export default function FeaturedBooks() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Tanlangan kitoblar</h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          rewind={true} // ✅ loop o'rniga rewind — clone yaratmaydi
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true, // ✅ ko'p nuqta bo'lsa dinamik ko'rsatadi (3ta)
          }}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
         
        >
          {books.map((item) => (
            <SwiperSlide   key={item.id}>
              <FeaturedBookCard
                id={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                subtitle={item.subtitle}
                status={item.status}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}