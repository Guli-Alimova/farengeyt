import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { books, toCardData } from "@/app/data/books";
import { isSeriesBook, SERIES_TITLE } from "@/app/data/series";
import { pageMetadata, SITE_DESCRIPTION, truncate } from "@/app/utils/metadata";
import Book3D from "@/components/book/Book3D";
import ComingSoonBadge from "@/components/common/ComingSoonBadge";

const priceFormat = new Intl.NumberFormat("uz-UZ");

const buttonClass =
  "inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-[15px] font-semibold text-brand-ink transition-opacity hover:opacity-90 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ember";
const labelClass = "font-mono text-xs uppercase tracking-[0.09em]";
const headingClass = `${labelClass} mb-3 text-muted`;

export async function generateStaticParams() {
  return books.map((book) => ({
    id: String(book.id),
  }));
}

type BookDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: BookDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const book = books.find((b) => String(b.id) === id);

  if (!book) return pageMetadata({ path: `/books/${id}` });

  const title = `«${book.title}»`;

  return pageMetadata({
    title,
    description: truncate(book.description || book.subtitle || SITE_DESCRIPTION),
    path: `/books/${book.id}`,
    // scripts/og-images.mjs prebuild'da yaratadi
    image: `/og/books/${book.id}.jpg`,
    imageAlt: title,
    type: "book",
  });
}

export default async function BookDetails({ params }: BookDetailsPageProps) {
  const { id } = await params;

  const book = books.find((b) => String(b.id) === id);

  if (!book) {
    return (
      <section className="container max-w-[720px] py-20 text-center">
        <h1 className="font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.1] text-ink">
          Kitob topilmadi
        </h1>
        <p className="mb-7 mt-3 text-muted">{"Bunday kitob yoʻq yoki u olib tashlangan."}</p>
        <Link href="/books" className={buttonClass}>
          Barcha kitoblar
        </Link>
      </section>
    );
  }

  const { coverRatio } = toCardData(book);
  const comingSoon = book.status === "coming-soon";
  const canBuy = book.status === "published" && Boolean(book.uzumUrl?.trim());

  const galleryImages = [book.image, ...(book.gallery || [])]
    .filter((img): img is string => typeof img === "string" && img.trim() !== "");

  // Qiymati bo'sh ("" yoki null) qatorlar ko'rsatilmaydi. mono: raqamlar IBM Plex Mono'da
  const details = [
    { label: "Muallif", value: book.author },
    { label: "Tarjimon", value: book.translator },
    { label: "Muharrir", value: book.editor },
    { label: "Asl nomi", value: book.originalTitle },
    { label: "Asl tili", value: book.originalLanguage },
    { label: "Janr", value: book.category },
    { label: "Tili", value: book.language },
    { label: "Nashr yili", value: book.publishYear },
    { label: "Sahifalar soni", value: book.totalPage, mono: true },
    { label: "Muqova turi", value: book.format },
    { label: "ISBN", value: book.isbn, mono: true },
    { label: "Mamlakat", value: book.country },
    { label: "Narx", value: book.price != null ? `${priceFormat.format(book.price)} soʻm` : null },
  ].filter((row): row is { label: string; value: string; mono?: boolean } => Boolean(row.value?.trim()));

  return (
    <article className="pb-16">
      {/* Katta 3D kitob: muqova yopiq, kompyuterda sichqonchaga qarab buriladi (Book3D) */}
      <div className="bg-gradient-to-b from-brand-soft to-transparent">
        <Book3D
          size="lg"
          closed
          priority
          title={book.title}
          author={book.author}
          cover={book.cover}
          coverRatio={coverRatio}
          spineColor={book.spineColor}
          pages={book.totalPage}
          className="container pb-10 pt-12"
        />
      </div>

      <div className="container max-w-[720px]">
        <p className={`${labelClass} text-brand`}>
          {isSeriesBook(book) ? `${SERIES_TITLE} seriyasi` : book.category}
        </p>
        <h1 className="mt-2 text-balance font-display text-[clamp(32px,4.6vw,48px)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink">
          {book.title}
        </h1>
        {book.author && <p className="mt-2 text-lg text-muted">{book.author}</p>}

        {comingSoon && (
          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] text-muted">
            <ComingSoonBadge />
            {"Bu kitob hozir tayyorlanmoqda. Maʼlumotlari nashrdan soʻng qoʻshiladi."}
          </p>
        )}

        {canBuy && (
          <a href={book.uzumUrl} target="_blank" rel="noopener noreferrer" className={`${buttonClass} mt-6`}>
            Sotib olish <span aria-hidden="true">↗</span>
          </a>
        )}

        {book.description && (
          <p className="mt-8 max-w-[65ch] text-[17px] leading-relaxed text-ink">{book.description}</p>
        )}

        {details.length > 0 && (
          <section className="mt-10">
            <h2 className={headingClass}>Kitob haqida</h2>
            <dl className="grid grid-cols-[minmax(0,10em)_minmax(0,1fr)] gap-x-4 border-t border-line">
              {details.map((row) => (
                <div key={row.label} className="contents">
                  <dt className="min-w-0 border-b border-line py-2.5 text-sm text-muted">{row.label}</dt>
                  <dd
                    className={`min-w-0 border-b border-line py-2.5 text-[15px] text-ink ${
                      row.mono ? "font-mono tabular-nums" : ""
                    }`}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {galleryImages.length > 0 && (
          <section className="mt-10">
            <h2 className={headingClass}>Rasmlar</h2>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
              {galleryImages.map((img, i) => (
                <li key={`${i}-${img}`}className="overflow-hidden rounded-[10px] border border-line bg-card">
                  <Image
                    src={img}
                    alt={i === 0 ? `«${book.title}» kitobi` : `«${book.title}» kitobi: ${i + 1}-rasm`}
                    width={400}
                    height={300}
                    sizes="(max-width: 720px) 50vw, 230px"
                    loading="lazy"
                    className="aspect-[4/3] h-auto w-full object-contain"
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {book.hamkor?.trim() && (
          <section className="mt-10 border-t border-line pt-6">
            <h2 className={headingClass}>Hamkorimiz</h2>
            <Image
              src={book.hamkor}
              alt="Hamkor logotipi"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </section>
        )}
      </div>
    </article>
  );
}
