import { books, toCardData } from '@/app/data/books';
import FeaturedBooksSlider from './FeaturedBooksSlider';

// Server komponent: client slayderga butun book.json emas, faqat kartochka maydonlari uzatiladi
export default function FeaturedBooks() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-7 font-display text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink">
          Tanlangan kitoblar
        </h2>
        <FeaturedBooksSlider books={books.map(toCardData)} />
      </div>
    </section>
  );
}
