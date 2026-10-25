import { books, toCardData } from '@/app/data/books';
import FeaturedBooksSlider from './FeaturedBooksSlider';
import SectionHeading from '@/components/common/SectionHeading';

// Server komponent: client slayderga butun book.json emas, faqat kartochka maydonlari uzatiladi
export default function FeaturedBooks() {
  return (
    <section className="border-t border-line py-14">
      <div className="container">
        <SectionHeading eyebrow="Kitoblar" title="Tanlangan kitoblar" />
        <div className="mt-7">
          <FeaturedBooksSlider books={books.map(toCardData)} />
        </div>
      </div>
    </section>
  );
}
