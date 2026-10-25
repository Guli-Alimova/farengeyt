import React from 'react'
import Image from 'next/image'

const AboutUS = () => {
  return (
    <section className="border-t border-line bg-brand-soft py-14">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <Image
          src="/images/09.jpg"
          alt="Reading book"
          width={342}
          height={223}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="w-full rounded-[14px] border border-line"
        />

        <div>
          <h2 className="mb-4 font-display text-[clamp(24px,2.6vw,30px)] font-semibold leading-[1.15] text-ink">
            Missiyamiz va maqsadimiz
          </h2>
          <p className="mb-4 text-muted">
            Farengeyt Press – chindan yangi nashriyot va unga turli sohalarda faoliyat koʻrsatib kelayotgan, ayni chogʻda, kitob va kitobxonlikka befarq boʻlmagan faollar va mutaxassislar asos soldi. Mushtarak gʻoyamiz va maqsadimiz ifodasi oʻlaroq “Farengeyt Press” nashriyoti nomini tanlashda yozuvchi Rey Bredberining 🔥“Farengeyt boʻyicha 451 daraja” asaridagi “Ahli kitob” (“Book People”) gʻoyasidan ilhomlandik. Ahli kitob – hayotini kitoblarni avaylash va ilmni odamlarga yetkazishga bagʻishlagan insonlardir. Biz endilikda kitob, mutolaa va maʼrifatga qilinajak xizmatimizni mustaqil nashriyot sifatida davom ettirishga qaror qildik. Shuningdek, jamoamizda oʻz sohasi yetakchilaridan boʻlmish art-direktor Orzu Aʼzam ham faoliyat yuritmoqda.
          </p>
          <p className="mb-6 text-muted">
            Nashriyotimizning bosh gʻoyasi oʻzbek kitobxoniga progressiv, yangi, dolzarb bilimlarni sifatli va tezkor surʼatlarda taqdim etish orqali ilm sarhadlarini kengaytirishga hissa qoʻshishdan iborat. Bunda biz ham tarjima, ham mahalliy muallif va mutaxassislar asarlarini kitobxonga taqdim etishni rejalashtirmoqdamiz. Bundan tashqari, nashriyotimiz faoliyati doirasida yana qator qoʻshimcha maʼrifiy loyihalarni amalga oshirish ham koʻzda tutilmoqda.
          </p>
          <a
            href="https://t.me/farengeyt_press"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-brand px-5 py-3 text-[15px] font-semibold text-brand-ink transition-opacity hover:opacity-90 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Umumiy maʼlumot
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1.5 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutUS
