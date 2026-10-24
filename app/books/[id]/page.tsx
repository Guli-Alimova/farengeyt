import { Metadata } from "next";
import { books } from "@/app/data/books";
import Image from "next/image";
import { pageMetadata, SITE_DESCRIPTION, truncate } from "@/app/utils/metadata";
import ComingSoonBadge from "@/components/common/ComingSoonBadge";

const priceFormat = new Intl.NumberFormat("uz-UZ");

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
    return <div className="p-10 text-red-500">Kitob topilmadi</div>;
  }

  const galleryImages = [book.image, ...(book.gallery || [])]
    .filter((img): img is string => typeof img === "string" && img.trim() !== "");

  // Qiymati bo'sh ("" yoki null) qatorlar ko'rsatilmaydi
  const details = [
    { label: "Muallif", value: book.author },
    { label: "Tarjimon", value: book.translator },
    { label: "Muharrir", value: book.editor },
    { label: "Asl nomi", value: book.originalTitle },
    { label: "Asl tili", value: book.originalLanguage },
    { label: "Janr", value: book.category },
    { label: "Tili", value: book.language },
    { label: "Nashr yili", value: book.publishYear },
    { label: "Sahifalar soni", value: book.totalPage },
    { label: "Muqova turi", value: book.format },
    { label: "ISBN", value: book.isbn },
    { label: "Mamlakat", value: book.country },
    { label: "Narx", value: book.price != null ? `${priceFormat.format(book.price)} soʻm` : null },
  ].filter((row): row is { label: string; value: string } => Boolean(row.value?.trim()));

  return (
    <div className="container mx-auto p-10">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Asosiy rasm */}
        <div className="flex justify-center">
          {book.image ? (
            <Image
              src={book.image}
              alt={book.title}
              width={450}
              height={300}
              className="rounded shadow-md object-contain w-full"
              priority
            />
          ) : (
            <div className="w-full h-[300px] bg-gray-100 rounded flex items-center justify-center text-gray-400">
              {"Rasm yoʻq"}
            </div>
          )}
        </div>

        {/* Kitob ma'lumotlari */}
        <div>
          {book.status === "coming-soon" && <ComingSoonBadge className="mb-2" />}
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{book.title}</h1>

          {/* Gallery rasmlari */}
          {galleryImages.length > 0 && (
            <div className="flex gap-3 mb-6 flex-wrap">
              {galleryImages.map((img, i) => (
                <Image
                  key={`gallery-${i}`}
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  width={100}
                  height={80}
                  className="border rounded hover:scale-105 transition object-cover"
                />
              ))}
            </div>
          )}

          {/* Sotib olish (nashr qilinmagan kitobda chiqmaydi) */}
          {book.status === "published" && book.uzumUrl?.trim() ? (
            <a
              href={book.uzumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition mb-6"
            >
              Sotib olish <span>→</span>
            </a>
          ) : null}

          {/* Kitob haqida */}
          {details.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-3">Kitob haqida</h2>
              <div className="border rounded-lg shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {details.map((row) => (
                      <tr key={row.label} className="border-b last:border-b-0">
                        <th scope="row" className="text-left font-semibold bg-gray-50 py-2 px-4 w-2/5">
                          {row.label}
                        </th>
                        <td className="py-2 px-4">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Tavsif */}
          <p className="mt-6 text-gray-600 text-sm leading-relaxed">
            {book.description || "Bu kitob haqida hozircha maʼlumot yoʻq."}
          </p>
        </div>
      </div>

      {/* Hamkorlar */}
      {book.hamkor && typeof book.hamkor === "string" && book.hamkor.trim() !== "" && (
        <div className="mt-10 text-sm">
          <p className="mb-2 font-semibold">Hamkorlarimiz:</p>
          <div className="flex items-center gap-6">
            <Image
              src={book.hamkor}
              alt="Partner"
              width={90}
              height={20}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}