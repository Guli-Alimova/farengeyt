import Link from "next/link";
import type { BookCardData } from "@/app/data/books";
import ComingSoonBadge from "@/components/common/ComingSoonBadge";
import Book3D from "./Book3D";

export default function BookCard({ book }: { book: BookCardData }) {
  const comingSoon = book.status === "coming-soon";
  const author = book.author?.trim() || (comingSoon ? "Tayyorlanmoqda" : "");

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-card">
      <Link
        href={`/books/${book.id}`}
        aria-label={`«${book.title}»: batafsil`}
        className="block bg-gradient-to-b from-brand-soft to-transparent to-[92%] pb-[18px] pt-[30px] focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-ember"
      >
        <Book3D
          title={book.title}
          author={book.author}
          cover={book.cover}
          spineColor={book.spineColor}
          pages={book.totalPage}
          className="pb-2"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 px-[18px] pb-[18px] pt-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{book.category}</span>
        <h3 className="text-balance font-display text-[22px] font-semibold leading-[1.2] text-ink">{book.title}</h3>
        {book.subtitle && (
          <p className="text-sm font-medium text-brand">{book.subtitle} seriyasi</p>
        )}
        {author && <p className="text-sm text-muted">{author}</p>}

        <div className="mt-auto flex min-h-[46px] items-center justify-between gap-2.5 border-t border-line pt-3">
          {comingSoon ? (
            <ComingSoonBadge />
          ) : (
            <>
              <span className="inline-flex items-center gap-[7px] text-[13px] font-semibold text-ink before:h-[7px] before:w-[7px] before:rounded-full before:bg-brand">
                Sotuvda
              </span>
              {book.uzumUrl && (
                <a
                  href={book.uzumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand underline-offset-[3px] hover:underline"
                >
                  Uzumda olish ↗
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
