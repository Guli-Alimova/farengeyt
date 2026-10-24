'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { BookCardData } from '@/app/data/books';
import BookCard from '@/components/book/BookCard';
import { useReducedMotion } from '@/app/utils/useReducedMotion';

export default function FeaturedBooksSlider({ books }: { books: BookCardData[] }) {
  const reducedMotion = useReducedMotion();

  return (
    <Swiper
      // Swiper autoplay sozlamasini faqat ishga tushishda oʻqiydi, shuning uchun qiymat oʻzgarsa qayta yaratiladi
      key={reducedMotion ? 'static' : 'autoplay'}
      modules={[Pagination, Autoplay]}
      autoplay={reducedMotion ? false : {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      rewind={true} // loop o'rniga rewind: clone yaratmaydi
      spaceBetween={24}
      slidesPerView={1}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        576: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      className="pb-10!"
    >
      {books.map((book) => (
        <SwiperSlide key={book.id} className="h-auto!">
          <BookCard book={book} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
