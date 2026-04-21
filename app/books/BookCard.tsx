import Image from 'next/image';
import Link from 'next/link';
import { Book } from "../type/Book";

type BookCardProps = Pick<Book, "id" | "title" | "image" | "description" | "subtitle">;

export default function BookCard({ id, image, title, description, subtitle }: BookCardProps) {
  return (
    <Link href={`/books/${id}`} className="block group">
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 group-hover:scale-105">
        
        {/* Rasm qismi */}
     <div className="bg-[#f5f5f5] rounded-t-lg flex items-center justify-center p-6" style={{ height: '240px' }}>
  <Image
    src={image}
    alt={title}
    width={158}
    height={212}
    className="rounded object-contain"
    style={{ height: '100%', width: 'auto', maxHeight: '212px' }}
  />
</div>

        {/* Matn qismi */}
        <div className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600">
            {title}
          </h3>
          {subtitle && (
            <span className="text-secondary text-sm block mt-1">{subtitle}</span>
          )}
          {description && (
            <p className="line-clamp-2 text-gray-500 text-sm mt-2">{description}</p>
          )}
        </div>

      </div>
    </Link>
  );
}