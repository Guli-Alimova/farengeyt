'use client';

import { useRef, type CSSProperties, type PointerEvent } from "react";
import CoverFace from "./CoverFace";
import { inkFor, shapeRatio, thickness } from "./bookShape";

// Kitob boʻyi (px): sm kartochka, lg kitob sahifasi. Eni muqova nisbatidan hisoblanadi
const HEIGHTS = {
  sm: 186,
  lg: 266,
} as const;

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
  const w = Math.round(h * shapeRatio(cover, coverRatio));
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
            <CoverFace title={title} cover={cover} sizes={`${w}px`} scale={scale} />
          </span>
        </span>
      </span>
    </span>
  );
}
