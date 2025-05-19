// components/FeaturedBooks.tsx
import FeaturedBookCard from './FeaturedBookCard';

const books = [
  {
    id: 1,
    image: '/images/Pul.jpg',
    title: 'Pul',
    category:"O'quv kitoblar",
    subtitle:"Boshlang'ich saboqlar"
  },
  {
    id: 2,
    image: '/images/BIOLOGIYA.jpg',
    title: 'Biologiya',
    category:"O'quv kitoblar",
    subtitle:"Boshlang'ich saboqlar"
  },
  {
    id: 3,
    image: '/images/FIZIKA.jpg',
    title: 'Fizika',
    category:"O'quv kitoblar",
    subtitle:"Boshlang'ich saboqlar"
  },
  {
    id: 4,
    image: '/images/IQTISODIYOT.jpg',
    title: 'Iqtisodiyot',
    category:"O'quv kitoblar",
    subtitle:"Boshlang'ich saboqlar"
  },
  {
    id: 5,
    image: '/images/KIMYO.jpg',
    title: 'Kimyo',
    category:"O'quv kitoblar",
    subtitle:"Boshlang'ich saboqlar"
  },
  {
    id: 6,
    image: '/images/MATEMATIKA.jpg',
    title: 'Matematika',
    category:"O'quv kitoblar",
    subtitle:"Boshlang'ich saboqlar"
  },
];

export default function FeaturedBooks() {
  return (
    <section className="px-6 py-10">
      <div className="container">
           <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Featured Books</h2>
        <button className="border border-gray-300 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100">
          Explore More →
        </button>
      </div>
      <div className="flex flex-wrap gap-6">
        {books.map((item, index) => (
          <FeaturedBookCard key={index} 
          image={item.image}
          title={item.title}
          category={item.category}
          subtitle={item.subtitle}
          />
        ))}
      </div> 
      </div>
  
    </section>
  );
}

