// pages/blog.tsx

import BlogCard from "./BlogCard";
import SectionHeading from "@/components/common/SectionHeading";
// posts.ts
const posts = [
  {
    "id":1,
    "title": "Hujayraning kashf etilishi",
    "date": "2025-07-05",
    "author": "@farengeyt_press",
    "content": "Robert Huk mikroskop orqali hujayralarni koʻrib chiqqan ilk olimlardan biri boʻlgan. U oʻz kashfiyotini 1665-yilda eʼlon qilgan.",
    "image": "/images/post1.png",
    "url":"https://www.instagram.com/p/DLuS_qcxiAB/?img_index=1"
  },
  {
    "id":2,
    "title": "Moliyaviy savodxonlik uchun hamkorlik",
    "date": "2025-06-20",
    "author": "@farengeyt_press",
    "content": "Anorbank va Usborne bolalar uchun moliyaviy savodxonlik darsliklarini taqdim etmoqda. Bu hamkorlik yangi bosqichga chiqmoqda.",
    "image": "/images/post2.png",
    "url":"https://www.instagram.com/p/DLHDQ9_IjyD/?img_index=1",
  },
  {
    "id":3,
    "title": "Behalovat avlod",
    "date": "2025-05-19",
    "author": "@farengeyt_press",
    "content": "Jonathan Haidt bolalarning ruhiy holati va texnologiyalarning ularning hayotiga taʼsiri haqida yozadi.",
    "image": "/images/post3.png",
    "url":"https://www.instagram.com/p/DJ0rEbUoZse/"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-28 bg-brand-soft py-14">
      <div className="container">
        <SectionHeading eyebrow="Blog" title="Yangiliklar" />
        {/* Telefonda (640px dan tor) gorizontal suriladi: karta ~85% kenglikda, keyingisi chetdan koʻrinadi.
            -mx-4/px-4: lenta ekran chetigacha boradi, sahifada gorizontal skroll paydo boʻlmaydi */}
        <ul className="-mx-4 mt-7 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.id} className="w-[85%] shrink-0 snap-start sm:w-auto">
              <BlogCard {...post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
