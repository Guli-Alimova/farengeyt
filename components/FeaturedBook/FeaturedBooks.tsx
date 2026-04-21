'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import FeaturedBookCard from './FeaturedBookCard';

const books = [
  { id: 1, image: '/images/PUL.jpg', title: 'Pul', category: "Bolalar kitoblari", subtitle: "Boshlang'ich saboqlar" },
  { id: 2, image: '/images/BIOLOGIYA.jpg', title: 'Biologiya', category: "Bolalar kitoblari", subtitle: "Boshlang'ich saboqlar" },
  { id: 3, image: '/images/FIZIKA.jpg', title: 'Fizika', category: "Bolalar kitoblari", subtitle: "Boshlang'ich saboqlar" },
  { id: 4, image: '/images/IQTISODIYOT.jpg', title: 'Iqtisodiyot', category: "Bolalar kitoblari", subtitle: "Boshlang'ich saboqlar" },
  { id: 5, image: '/images/KIMYO.jpg', title: 'Kimyo', category: "Bolalar kitoblari", subtitle: "Boshlang'ich saboqlar" },
  { id: 6, image: '/images/MATEMATIKA.jpg', title: 'Matematika', category: "Bolalar kitoblari", subtitle: "Boshlang'ich saboqlar" },
  { id: 7, image: '/images/Behalovat.jpg', title: 'Behalovat avlod', category: "Ilmiy-ommabop kitoblar", subtitle: "" },
];

export default function FeaturedBooks() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Tanlangan Kitoblar</h2>
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
                
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}