'use client';

import Image from "next/image";
import { useRef, type CSSProperties, type PointerEvent } from "react";

// Kitob boʻyi (px): sm kartochka, lg kitob sahifasi. Eni muqova nisbatidan hisoblanadi
const HEIGHTS = {
  sm: 186,
  lg: 266,
} as const;

// Muqova fayli yoʻq kitoblar uchun nisbat
const DEFAULT_RATIO = 132 / 186;

type Book3DProps = {
  title: string;
  author?: string;
  cover?: string;
  coverRatio?: number; // muqova eni / boʻyi; kitob shu shaklda chiziladi, muqova kesilmaydi
  spineColor: string;
  pages?: string;
  size?: keyof typeof HEIGHTS;
  open?: boolean; // muqova doim biroz ochiq turadi (masalan, kitob sahifasida)
  className?: string;
};

// Qalinlik sahifalar soniga qarab, cheklangan oraliqda (sm oʻlchamda 14–34 px)
function thickness(pages: string | undefined, scale: number) {
  const n = Number.parseInt(pages ?? "", 10);
  const t = Number.isFinite(n) && n > 0 ? Math.min(34, Math.max(14, 8 + n * 0.06)) : 22;
  return Math.round(t * scale);
}

// Umurtqa rangiga qarab matn oq yoki toʻq boʻladi
function inkFor(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => Number.parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.55 ? "#1A1A1A" : "#FFFFFF";
}

export default function Book3D({
  title,
  author,
  cover,
  coverRatio,
  spineColor,
  pages,
  size = "sm",
  open = false,
  className = "",
}: Book3DProps) {
  const bookRef = useRef<HTMLSpanElement>(null);
  const h = HEIGHTS[size];
  const w = Math.round(h * (cover && coverRatio ? coverRatio : DEFAULT_RATIO));
  const scale = h / HEIGHTS.sm;

  // Faqat sichqoncha bilan va reduced motion oʻchiq boʻlsa: kitob kursorga qarab biroz buriladi
  const handleMove = (e: PointerEvent<HTMLSpanElement>) => {
    const book = bookRef.current;
    if (!book || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    book.style.setProperty("--ry", `${(8 + (x - 0.5) * 40).toFixed(1)}deg`);
    book.style.setProperty("--rx", `${((0.5 - y) * 16).toFixed(1)}deg`);
  };

  const handleLeave = () => {
    bookRef.current?.style.removeProperty("--ry");
    bookRef.current?.style.removeProperty("--rx");
  };

  const style = {
    "--w": `${w}px`,
    "--h": `${h}px`,
    "--t": `${thickness(pages, scale)}px`,
    "--spine": spineColor,
    "--spine-ink": inkFor(spineColor),
  } as CSSProperties;

  return (
    <span
      className={`book3d-stage ${open ? "book3d-open" : ""} ${className}`}
      style={style}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      aria-hidden="true"
    >
      <span className="book3d-floor" />
      <span ref={bookRef} className="book3d">
        <span className="book3d-back" />
        <span className="book3d-spine"><b>{title}</b></span>
        <span className="book3d-pages" />
        <span className="book3d-top" />
        <span className="book3d-inner">
          <span className="font-mono tracking-[0.12em]" style={{ fontSize: 8 * scale }}>
            FARENGEYT PRESS
          </span>
          <span className="mt-auto font-display font-bold leading-[1.1]" style={{ fontSize: 15 * scale }}>
            {title}
          </span>
          {author && (
            <span className="leading-[1.3] opacity-80" style={{ fontSize: 9 * scale }}>{author}</span>
          )}
          <span className="mt-auto font-mono opacity-70" style={{ fontSize: 8 * scale }}>Toshkent</span>
        </span>
        <span className="book3d-cover">
          <span className="book3d-cover-inside" />
          <span className="book3d-cover-front">
            {cover ? (
              <Image src={cover} alt="" fill sizes={`${w}px`} className="object-cover" />
            ) : (
              // Tekis muqova fayli kelguncha: umurtqa rangida nom
              <span className="flex h-full flex-col p-[10%]">
                <span
                  className="mt-auto font-display font-bold leading-none [overflow-wrap:anywhere]"
                  style={{ fontSize: (title.length > 9 ? 16 : 22) * scale }}
                >
                  {title}
                </span>
                <span className="mt-[6%] font-mono tracking-[0.12em] opacity-75" style={{ fontSize: 7 * scale }}>
                  FARENGEYT
                </span>
              </span>
            )}
          </span>
        </span>
      </span>
    </span>
  );
}
