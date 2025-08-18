import PodcastCard from './PodCastCard';

const podcasts = [
  {
    title: 'Crime Fiction Talks',
    subtitle: '15% Off On Kids’ Toys And Gifts!',
    image: '/images/09.jpg',
    link: '/podcasts/1',
  },
  {
    title: 'One Year On A Bike',
    subtitle: '15% Off On Kids’ Toys And Gifts!',
    image: '/images/10.jpg',
    link: '/podcasts/2',
  },
  {
    title: 'Grow With Flower',
    subtitle: '15% Off On Kids’ Toys And Gifts!',
    image: '/images/11.jpg',
    link: '/podcasts/3',
  },
];

export default function PodCast() {
  return (
 <section id="podcast" className="bg-blue-100 py-14 text-center">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-primary mb-6">Explore Podcasts</h2>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {podcasts.map((podcast, index) => (
        <PodcastCard key={index} {...podcast} />
      ))}
    </div>
  </div>
</section>

  );
}
