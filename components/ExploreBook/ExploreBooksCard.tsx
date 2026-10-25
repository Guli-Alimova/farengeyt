import React, { type CSSProperties } from "react"
import Link from "next/link"
import type { BookCardData } from "@/app/data/books"
import CoverFace from "@/components/book/CoverFace"
import { inkFor, shapeRatio } from "@/components/book/bookShape"

type ExploreBooksCardProps = {
  index: number
  title: string
  book: BookCardData // janrdagi kitob: kartada uning tekis muqovasi
}

const COVER_HEIGHT = 150

// Janr kartochkasi: /books sahifasini shu janr filtri bilan ochadi
const ExploreBooksCard: React.FC<ExploreBooksCardProps> = ({ index, title, book }) => {
  const width = Math.round(COVER_HEIGHT * shapeRatio(book.cover, book.coverRatio))

  return (
    <Link
      href={`/books?category=${encodeURIComponent(title)}`}
      className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-card focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ember"
    >
      <div className="relative grid place-items-center bg-linear-to-b from-brand-soft to-transparent pb-6 pt-8">
        <span className="absolute left-[18px] top-4 font-mono text-xs text-brand">
          {String(index).padStart(2, "0")}
        </span>
        <span
          className="relative block overflow-hidden rounded-[2px] shadow-[0_14px_30px_-12px_var(--floor)] transition-transform duration-300 motion-safe:group-hover:-translate-y-1"
          style={
            {
              width,
              height: COVER_HEIGHT,
              background: book.spineColor,
              color: inkFor(book.spineColor),
            } as CSSProperties
          }
        >
          <CoverFace title={book.title} cover={book.cover} sizes={`${width}px`} scale={0.8} />
        </span>
      </div>
      <h3 className="mt-auto border-t border-line px-[18px] py-4 font-display text-xl font-semibold leading-[1.2] text-ink text-balance">
        {title}
      </h3>
    </Link>
  )
}

export default ExploreBooksCard
