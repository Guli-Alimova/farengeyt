import Link from 'next/link';
import React from 'react'
type FeaturedBookCardProps = {
  id:number;
  image: string;
  title: string;
  category: string;
  subtitle: string;


}
const FeaturedBookCard: React.FC<FeaturedBookCardProps> = ({
  id,
  image,
  title,
  category,
  subtitle

}) => {
  return (
    <div   className="w-full max-w-[200px] flex flex-col gap-2">
      <div className="relative">
        <img src={image} alt={title} className="rounded-lg" />
      </div>
      <p className="text-xs text-secondary">{category}</p>
      <h3 className="font-semibold text-primary leading-tight">{title}</h3>
      <div className="flex items-center gap-1 text-sm text-silver">
       
        <span>{subtitle}</span>
      </div>
    
      <Link href={`/books/${id}`} key={id} className="bg-sky-100 hover:bg-sky-200 text-primary font-semibold py-2 mt-1 rounded flex items-center justify-center gap-2">
        Read More
      </Link>
    </div>
  );
}
export default FeaturedBookCard
