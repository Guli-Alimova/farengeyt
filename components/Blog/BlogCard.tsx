import React from 'react'
interface BlogCardProps {
    title: string;
    date: string;
    author: string;
    image: string;
    category?: string;
  }
  
  export default function BlogCard({ title, date, author, image, category = "Activities" }: BlogCardProps) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm">
        <div className="pt-5 px-5 relative">
          <img src={image} alt={title} className="w-full h-52 object-cover" />
          <span className="absolute top-8 left-8 bg-secondary text-white text-xs font-medium px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <div className="p-4">
          <div className="flex items-center text-sm text-silver gap-4 mb-2">
            <span className="flex items-center gap-1"><i className="ri-calendar-line"></i> {date}</span>
            <span className="flex items-center gap-1"><i className="ri-user-line"></i> By {author}</span>
          </div>
          <h3 className="font-semibold text-md text-primary">{title}</h3>
          <a href="#" className="text-cyan-800 text-sm font-medium mt-3 inline-flex items-center gap-1">
            Read More <span>&rarr;</span>
          </a>
        </div>
      </div>
    );
  }
  