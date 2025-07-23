import { Metadata } from "next";
import books from "@/app/data/book.json";
import Image from "next/image";

// Static params
export async function generateStaticParams() {
  return books.map((book) => ({
    id: String(book.id),
  }));
}

export const metadata: Metadata = {
  title: "Book Details",
};
type BookDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function BookDetails({ params }:BookDetailsPageProps) {
  const book = books.find((b) => String(b.id) === params.id);

  if (!book) {
    return <div className="p-10 text-red-500">Kitob topilmadi</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Asosiy rasm */}
        <div className="flex justify-center">
          <Image
            src={book.image}
            alt={book.title}
            width={300}
            height={400}
            className="rounded shadow-md object-contain"
          />
        </div>

        {/* Kitob ma'lumotlari */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{book.title}</h1>

          {/* Karusel (asosiy + 4 rasm) */}
          <div className="flex gap-5 mb-6">
            {[book.image, ...book.gallery || []].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Gallery image ${i}`}
                width={60}
                height={80}
                className="border rounded hover:scale-105 transition"
              />
            ))}
          </div>

          {/* Ma'lumotlar qatori */}
          <div className="border p-4 rounded-lg shadow-sm grid grid-cols-2 gap-2 text-sm">

            <p><span className="font-semibold">Total page:</span> {book.totalPage || "N/A"}</p>
            <p><span className="font-semibold">Publish Year:</span> {book.publishYear || "N/A"}</p>
            <p><span className="font-semibold">Category:</span> {book.category || "N/A"}</p>
            <p><span className="font-semibold">Format:</span> {book.format || "N/A"}</p>
            <p><span className="font-semibold">Language:</span> {book.language || "N/A"}</p>
            <p><span className="font-semibold">Country:</span> {book.country || "N/A"}</p>
          </div>

          {/* Tavsif */}
          <p className="mt-6 text-gray-600 text-sm leading-relaxed">
            {book.description || "Bu kitob haqida hozircha ma'lumot yo'q."}
          </p>
        </div>
      </div>

      {/* Footer: Available on */}
      <div className="mt-10 text-sm">
        <p className="mb-2 font-semibold">Hamkorlarimiz:</p>
        <div className="flex items-center gap-6">
          <Image src="/logos/customerio.png" alt="Customerio" width={90} height={20} />
          <Image src="/logos/amazon.png" alt="Amazon" width={90} height={20} />
        </div>
      </div>
    </div>
  );
}
