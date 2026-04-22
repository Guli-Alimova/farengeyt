
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import PodCastCard from '../PodCast/PodCastCard';

const podcasts = [
   {
    id: 1,
    subtitle: 'Jamiyatni oʻzgartiradigan kitoblar | Sigma Podkast',
    link: 'https://youtu.be/1ilODVvh8c0?si=b3KY37aTct6R-Yvs',
  },
  {
    id: 2,
    subtitle: 'Baxtli bolalikni ortga qaytarish uchun kitob | "Behalovat avlod" kitobi ustida suhbat',
    link: 'https://youtu.be/VNhXvoT_gco?si=xLw1Z3MOmCil3cGD',
  },
  {
    id: 3,
    subtitle: "RAQAMLI QAMOQXONA, BEHALOVAT AVLOD KITOBI TAHLILI | Paradoks PodkastGullar bilan o'sish va rivojlanish",
    link: 'https://youtu.be/vXF7UlMTJXI?si=-5CqdWbcS0KnP1EZ',
  },
  {
    id: 4,
    subtitle: "Yilning eng muhim kitobining tahlili | Sigma Podkast",
    link: 'https://youtu.be/IdP4CPaDDjA?si=sPpSgm9DqefZQZbp',
  },
];


export default function PodCast() {
  return (
    <section id="podcast" className="bg-blue-100 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Podkastlar</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          rewind={true}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {podcasts.map((podcast) => (
            <SwiperSlide key={podcast.id}>
              <PodCastCard
                subtitle={podcast.subtitle}
                link={podcast.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}