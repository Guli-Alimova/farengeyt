// components/InstagramCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PostProps {
  image: string;
  title: string;
  date: string;
  author: string;
  content:string;
  url: string;
}

const BlogCard = ({
  image,
  title,
  date,
  author,
  content,
  url,
}: PostProps) => {
  return (
<div className="rounded-xl overflow-hidden shadow-md">
  <Link href={url} target="_blank">
    <Image
      src={image}
      alt={title}
      width={400}
      height={300}
      className="w-full h-100 object-cover" 
    />
  </Link>
  <div className="p-4">
    <div className="text-sm text-gray-400">{date}</div>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-sm text-gray-600">{content}</p>
    <div className="text-xs text-gray-500 mt-2">by {author}</div>
  </div>
</div>

  );
};

export default BlogCard;
