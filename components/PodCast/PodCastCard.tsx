interface PodCastCardProps {
    title: string;
    subtitle: string;
    image: string;
    link: string;
  }
  
  export default function PodCastCard({ title, subtitle, image, link }: PodCastCardProps) {
    return (
      <div
        className="relative rounded-2xl overflow-hidden w-full max-w-sm h-64 bg-cover bg-center text-primary flex items-start justify-start p-6"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="z-10">
          <h3 className="text-2xl font-bold leading-tight mb-1">{title}</h3>
          <p className="text-sm mb-4">{subtitle}</p>
          <a
            href={link}
            className="bg-white text-primary text-sm font-semibold px-5 py-2 rounded-full inline-flex items-center gap-2 hover:bg-secondary transition mt-20 mr-20"
          >
            Show Now <span>→</span>
          </a>
        </div>
        <div className="absolute inset-0  bg-blue-500/20 rounded-2xl z-0" />
      </div>
    );
  }
  