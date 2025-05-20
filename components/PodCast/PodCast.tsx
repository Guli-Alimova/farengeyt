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
    <section className="py-14 px-4 text-center">
      <div className="container">
           <h2 className="text-3xl font-bold text-primary mb-6">Explore Podcasts</h2>
      <div className="flex justify-between gap-4">
        {podcasts.map((podcast, index) => (
          <PodcastCard key={index} {...podcast} />
        ))}
      </div> 
      </div>
  
    </section>
  );
}
