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
      className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Rasm qismi */}
      <div className="relative w-full h-52 sm:h-60">
        <Image
          src={thumbnail}
          alt={subtitle}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

        {/* Play tugmasi - markazda */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-2xl ml-1">▶</span>
          </div>
        </div>
      </div>

      {/* Subtitle - rasm tashqarisida pastda */}
      <div className="bg-primary px-4 py-3">
        <p className="text-sm font-semibold text-white uppercase tracking-wide line-clamp-2">
          {subtitle}
        </p>
      </div>
    </a>
  );
}