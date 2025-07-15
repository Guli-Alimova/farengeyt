// app/books/[id]/page.tsx
import books from "@/app/data/book.json";
import Image from "next/image";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function BookDetails({ params }: PageProps) {
  const book = books.find((b) => String(b.id) === params.id);

  if (!book) {
    return <div className="p-10 text-red-500">Kitob topilmadi</div>;
  }

  return (
    <div className="container">
      <div className="flex justify-between items-center gap-4 p-6">
        <Image
          src={book.image}
          alt={book.title}
          width={500}
          height={400}
          className="w-full h-96 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mt-6">{book.title}</h1>
          <p className="mt-4 text-gray-700">
            {book.description || "Bu kitob haqida hozircha ma'lumot yo'q."}
          </p>
        </div>
      </div>
    </div>
  );
}
