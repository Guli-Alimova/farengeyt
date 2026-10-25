
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import PodCastCard from '../PodCast/PodCastCard';
import { useReducedMotion } from '@/app/utils/useReducedMotion';
import SectionHeading from '@/components/common/SectionHeading';

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
  const reducedMotion = useReducedMotion();

  return (
    <section id="podcast" className="scroll-mt-28 bg-brand-soft py-14">
      <div className="container">
        <SectionHeading eyebrow="Video" title="Podkastlar" />

        <Swiper
          // reduced motion: autoplay yoʻq (Swiper uni faqat ishga tushishda oʻqiydi, shuning uchun key)
          key={reducedMotion ? 'static' : 'autoplay'}
          modules={[Pagination, Autoplay]}
          autoplay={reducedMotion ? false : {
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
          className="mt-7 pb-10!"
        >
          {podcasts.map((podcast) => (
            <SwiperSlide key={podcast.id} className="h-auto!">
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