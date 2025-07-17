import React from "react"
import Link from "next/link"
import Image from "next/image"

type Category = {
  id: number
  image: string
  title: string
}

type ExploreBooksCardProps = {
  index: number
  image: string
  title: string
  category?: Category // bu yerda optional
}

const ExploreBooksCard: React.FC<ExploreBooksCardProps> = ({
  index,
  image,
  title,
  category,
}) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Rounded image with dashed border */}
      <div className="relative w-[230px] h-[230px] flex items-center justify-center bg-white rounded-full">
        {/* Aylanuvchi border */}
        <div className="absolute w-[200px] h-[200px] border-2 border-dashed border-secondary rounded-full animate-spin-slow"></div>

        {category ? (
          <Link href={`/books?category=${encodeURIComponent(category.title)}`}>
            <div className="relative z-10 flex flex-col items-center">
              <Image
                src={image}
                alt={title}
                className="w-[90px] h-[120px] object-cover rounded"
                width={90}
                height={120}
              />
              <div className="absolute -top-8 right-[-36px] bg-[#29479E] text-secondary text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center">
                {index < 10 ? `0${index}` : index}
              </div>
            </div>
          </Link>
        ) : (
          <div className="relative z-10 flex flex-col items-center">
            <Image
              src={image}
              alt={title}
              className="w-[90px] h-[120px] object-cover rounded"
              width={90}
              height={120}
            />
            <div className="absolute -top-8 right-[-36px] bg-[#29479E] text-secondary text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center">
              {index < 10 ? `0${index}` : index}
            </div>
          </div>
        )}
      </div>

      {/* Kitobning nomi */}
      <h3 className="text-primary font-semibold mt-4 text-[16px]">{title}</h3>
    </div>
  )
}

export default ExploreBooksCard


