import React from 'react'
import Image from 'next/image'

const AboutUS = () => {
  return (
  
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
{/* Chap rasm qismi */}
<div className="relative">
<Image
  src="/images/09.jpg"
  alt="Reading book"
  className="w-full rounded-lg"
  width={300}
  height={300}
/>
<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-primary"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
</button>
</div>

{/* O‘ng matn qismi */}
<div>
<h2 className="text-3xl font-bold text-gray-900 mb-4">
  Missiyamiz va maqsadimiz 
</h2>
<p className="text-gray-600 mb-4">
Farengeyt Press – chindan yangi nashriyot va unga turli sohalarda faoliyat koʻrsatib kelayotgan, ayni chogʻda, kitob va kitobxonlikka befarq boʻlmagan faollar va mutaxassislar asos soldi. Mushtarak gʻoyamiz va maqsadimiz ifodasi oʻlaroq “Farengeyt Press” nashriyoti nomini tanlashda yozuvchi Rey Bredberining 🔥“Farengeyt boʻyicha 451 daraja” asaridagi “Ahli kitob” (“Book People”) gʻoyasidan ilhomlandik. Ahli kitob – hayotini kitoblarni avaylash va ilmni odamlarga yetkazishga bagʻishlagan insonlardir. Biz endilikda kitob, mutolaa va maʼrifatga qilinajak xizmatimizni mustaqil nashriyot sifatida davom ettirishga qaror qildik. Shuningdek, jamoamizda oʻz sohasi yetakchilaridan boʻlmish art-direktor Orzu Aʼzam ham faoliyat yuritmoqda.
</p>
<p className="text-gray-600 mb-6">
  Nashriyotimizning bosh gʻoyasi oʻzbek kitobxoniga progressiv, yangi, dolzarb bilimlarni sifatli va tezkor surʼatlarda taqdim etish orqali ilm sarhadlarini kengaytirishga hissa qoʻshishdan iborat. Bunda biz ham tarjima, ham mahalliy muallif va mutaxassislar asarlarini kitobxonga taqdim etishni rejalashtirmoqdamiz. Bundan tashqari, nashriyotimiz faoliyati doirasida yana qator qoʻshimcha maʼrifiy loyihalarni amalga oshirish ham koʻzda tutilmoqda.
</p>
<a
  href="t.me/farengeyt_press"
  className="inline-flex items-center text-secondary font-semibold hover:underline"
>
Umumiy maʼlumot
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 ml-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</a>
</div>
</div>
  
  )
}

export default AboutUS