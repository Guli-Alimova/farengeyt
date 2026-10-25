import React from "react";
import Image from "next/image";

interface PostProps {
  image: string;
  title: string;
  date: string;
  author: string;
  content: string;
  url: string;
}

// Instagram posti kartochkasi: butun karta postga olib boradi
const BlogCard = ({ image, title, date, author, content, url }: PostProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-card focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ember"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-[18px] pb-[18px] pt-4">
        <time dateTime={date} className="font-mono text-xs text-muted">{date}</time>
        <h3 className="font-display text-xl font-semibold leading-[1.2] text-ink text-balance">{title}</h3>
        <p className="text-[15px] text-muted">{content}</p>
        <div className="mt-auto border-t border-line pt-3 font-mono text-xs text-muted">{author}</div>
      </div>
    </a>
  );
};

export default BlogCard;
