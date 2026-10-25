import Link from "next/link";
import type { CSSProperties } from "react";
import { toCardData } from "@/app/data/books";
import { SERIES_TITLE, seriesBooks } from "@/app/data/series";
import CoverFace from "@/components/book/CoverFace";
import SectionHeading from "@/components/common/SectionHeading";
import { inkFor, shapeRatio } from "@/components/book/bookShape";

// Bosh sahifadagi «Boshlangʻich saboqlar» boʻlimi. Server komponent: yelpigʻich faqat CSS
// (.series-fan, styles/globals.css), shuning uchun client JS'ga hech narsa tushmaydi
export default function SeriesSection() {
  if (seriesBooks.length === 0) return null;

  const fanBooks = seriesBooks.map(toCardData);
  const onSale = fanBooks.filter((b) => b.status === "published").length;
  const comingSoon = fanBooks.filter((b) => b.status === "coming-soon").length;
  const stats = [
    { value: fanBooks.length, label: "kitob" },
    { value: onSale, label: "sotuvda" },
    { value: comingSoon, label: "tez kunda" },
  ].filter((s, i) => i === 0 || s.value > 0);

  return (
    <section id="seriya" className="scroll-mt-28 overflow-x-clip border-t border-line py-14">
      <div className="container grid items-center gap-10 min-[880px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div>
          <SectionHeading eyebrow="Seriya" title={SERIES_TITLE} />
          <p className="mt-3 max-w-[50ch] text-muted">
            {"Usborne nashriyotining «for Beginners» turkumi asosida. Murakkab fanlarni bolalar uchun sodda tilda, rasmlar bilan tushuntiradi."}
          </p>
          <p className="mb-6 mt-[18px] flex flex-wrap gap-x-5 gap-y-2 font-mono text-[13px] text-muted">
            {stats.map((s) => (
              <span key={s.label}>
                <b className="mr-1.5 font-display text-[26px] font-semibold text-ink">{s.value}</b>
                {s.label}
              </span>
            ))}
          </p>
          <Link
            href={`/books?category=${encodeURIComponent(fanBooks[0].category)}`}
            className="inline-flex items-center rounded-full bg-brand px-5 py-3 text-[15px] font-semibold text-brand-ink transition-opacity hover:opacity-90 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            Seriya kitoblari
          </Link>
        </div>

        <ul className="series-fan" aria-label={`${SERIES_TITLE} seriyasi kitoblari`}>
          {fanBooks.map((book, i) => (
            <li
              key={book.id}
              className="series-fan-book"
              style={
                {
                  "--i": i - (fanBooks.length - 1) / 2,
                  "--r": shapeRatio(book.cover, book.coverRatio),
                  "--spine": book.spineColor,
                  "--spine-ink": inkFor(book.spineColor),
                  zIndex: i,
                } as CSSProperties
              }
            >
              <Link href={`/books/${book.id}`} aria-label={`«${book.title}»`}>
                <CoverFace title={book.title} cover={book.cover} sizes="140px" scale={1} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
