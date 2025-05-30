import React from 'react'

import BlogCard from './BlogCard';

const blogs = [
  {
    title: 'Montes Suspendisse Massa Curae Malesuada',
    date: 'Feb 10, 2024',
    author: 'Admin',
    image: '/images/09.jpg',
  },
  {
    title: 'Playful Picks Paradise: Kids’ Essentials With Dash.',
    date: 'Mar 20, 2024',
    author: 'Admin',
    image: '/images/10.jpg',
  },
  {
    title: 'Tiny Emporium: Playful Picks For Kids’ Delightful Days.',
    date: 'Jun 14, 2024',
    author: 'Admin',
    image: '/images/11.jpg',
  },

];

export default function LatestBlog() {
  return (
    <section className=" py-14  text-center">
        <div className="container">
             <h2 className="text-3xl font-bold text-primary">Our Latest Blog</h2>
      <p className="text-gray-600 mt-2">Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
      <p className="text-silver mb-10">Donec at nulla nulla. Duis posuere ex lacus</p>

      <div className="flex  justify-between gap-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>    
        </div>
 
    </section>
  );
}
