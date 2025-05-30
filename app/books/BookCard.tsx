import Image from 'next/image';

interface BookCardProps {
  image: string;
  title: string;

}

export default function BookCard({ image, title }: BookCardProps) {
  return (
    <div className="bg-white">
      <div className="relative rounded-lg shadow hover:shadow-lg transition p-[30px] h-[292px] overflow-hidden bg-[#f5f5f5] mx-auto my-0">
        <Image
          src={image}
          alt={title}
          width={158}
          height={212}
          className="rounded"
        />
   
      </div>
      <h3 className="mt-2 font-semibold text-sm">{title}</h3>
    </div>
  );
}
