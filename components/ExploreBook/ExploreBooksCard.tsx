import React from "react"
import Link from "next/link"
import Image from "next/image"

type ExploreBooksCardProps = {
  index: number
  image: string
  title: string
}

// Janr kartochkasi: /books sahifasini shu janr filtri bilan ochadi
const ExploreBooksCard: React.FC<ExploreBooksCardProps> = ({ index, image, title }) => {
  return (
    <Link
      href={`/books?category=${encodeURIComponent(title)}`}
      className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-card focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ember"
    >
      <div className="relative grid place-items-center bg-linear-to-b from-brand-soft to-transparent pb-6 pt-8">
        <span className="absolute left-[18px] top-4 font-mono text-xs text-brand">
          {String(index).padStart(2, "0")}
        </span>
        <Image
          src={image}
          alt=""
          width={104}
          height={144}
          className="h-[144px] w-[104px] object-contain transition-transform duration-300 motion-safe:group-hover:-translate-y-1"
        />
      </div>
      <h3 className="mt-auto border-t border-line px-[18px] py-4 font-display text-xl font-semibold leading-[1.2] text-ink text-balance">
        {title}
      </h3>
    </Link>
  )
}

export default ExploreBooksCard
