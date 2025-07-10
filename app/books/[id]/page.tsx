// app/books/[id]/page.tsx
import books from "../../data/book.json"

  export default function BookDetails({ params }: { params: { id: string } }) {
    const book = books.find((b) => String(b.id) === params.id);
  
    if (!book) {
      return <div className="p-10 text-red-500">Kitob topilmadi</div>;
    }
  
    return (
        <>
        <div className="container">
            <div className="flex justify-between items-center gap-4 p-6">
        <img src={book.image} alt={book.title} className="w-full h-96 object-cover rounded" />
        <div>
            <h1 className="text-3xl font-bold mt-6">{book.title}</h1>
             <p className="mt-4 text-gray-700">{book.description || "Bu kitob haqida hozircha ma'lumot yo'q."}</p>  
        </div>
      
      </div> 
        </div>
        </>
    );
  }
  