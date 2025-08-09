// pages/blog.tsx

import BlogCard from "./BlogCard";
// posts.ts
const posts = [
  {
    "id":1,
    "title": "Hujayraning kashf etilishi",
    "date": "2025-07-05",
    "author": "@farengeyt_press",
    "content": "Robert Huk mikroskop orqali hujayralarni ko‘rib chiqqan ilk olimlardan biri bo‘lgan. U o‘z kashfiyotini 1665-yilda e’lon qilgan.",
    "image": "/images/post1.png",
    "url":"https://www.instagram.com/p/DLuS_qcxiAB/?img_index=1"
  },
  {
    "id":2,
    "title": "Moliiyaviy savodxonlik uchun hamkorlik",
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
    "content": "Jonatan Hait bolalarning ruhiy holati va texnologiyalarning ularning hayotiga ta’siri haqida yozadi.",
    "image": "/images/post3.png",
    "url":"https://www.instagram.com/p/DJ0rEbUoZse/"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container">
        <div className="text-center">
        <h2 className="text-primary text-3xl md:text-4xl font-bold mb-10">
          Blogs
        </h2>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
      </div>

    </section>
   
  );
}
