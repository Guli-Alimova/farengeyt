import Image from 'next/image';
import { getYouTubeThumbnail } from '@/app/utils/youtube';

interface PodCastCardProps {
  subtitle: string;
  link: string;
}

export default function PodCastCard({ subtitle, link }: PodCastCardProps) {
  const thumbnail = getYouTubeThumbnail(link);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-card focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ember"
    >
      {/* Video rasmi */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={subtitle}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/35" />

        {/* Play tugmasi markazda */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-card text-brand shadow-md transition-transform duration-300 motion-safe:group-hover:scale-110">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 h-6 w-6 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </div>

      <p className="line-clamp-2 px-[18px] py-4 text-[15px] font-semibold leading-snug text-ink">
        {subtitle}
      </p>
    </a>
  );
}
