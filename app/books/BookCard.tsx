import Image from 'next/image';
import Link from 'next/link';
import { Book } from "../type/Book";

type BookCardProps = Pick<Book, "id" | "title" | "image">;

export default function BookCard({ id, image, title }: BookCardProps ) {
  return (
    <Link href={`/books/${id}`} key={id} className="bg-white">
      <div className="relative rounded-lg shadow hover:shadow-lg transition p-[30px] h-[292px] overflow-hidden bg-[#f5f5f5] mx-auto my-0">
        <Image
          src={image}
          alt={title}
          width={158}
          height={212}
          className="rounded"
        />
   <h3 className="mt-2 font-semibold text-sm">{title}</h3>
      </div>
      
    </Link>
  );
}
