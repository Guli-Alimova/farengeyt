'use client';

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import type { BookCardData } from "@/app/data/books";
import CoverFace from "@/components/book/CoverFace";
import { hasPages, inkFor, shapeRatio, thickness } from "@/components/book/bookShape";

// Javondagi kitob boʻyi (px) globals.css dagi --H0 bilan bir xil. Qalinlik shu boʻyga moslab olinadi
const SHELF_HEIGHT = 232;
const SCALE = SHELF_HEIGHT / 186;
const HINT = "Kitobni bosing: u javondan chiqib, muqovasini koʻrsatadi.";

export default function HeroShelf({ books }: { books: BookCardData[] }) {
  const [openId, setOpenId] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const pointerX = useRef(0.5);
  const frame = useRef(0);
  const idleTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Sahifalar soni yoʻq kitoblar qalinligi: sahifasi bor kitoblarning oʻrtachasi
  const known = books.filter((b) => hasPages(b.totalPage)).map((b) => thickness(b.totalPage, SCALE));
  const avgThickness = known.length
    ? Math.round(known.reduce((sum, t) => sum + t, 0) / known.length)
    : thickness(undefined, SCALE);
  const shelf = books.map((book) => ({
    book,
    t: hasPages(book.totalPage) ? thickness(book.totalPage, SCALE) : avgThickness,
    r: shapeRatio(book.cover, book.coverRatio),
  }));
  const rmax = Math.max(...shelf.map((s) => s.r));
  const open = books.find((b) => b.id === openId);

  useEffect(() => {
    const stage = stageRef.current;
    const scene = sceneRef.current;
    const row = rowRef.current;
    if (!stage || !scene || !row) return;

    // Kitob koʻpaysa yoki ekran torsa javon kichrayib sigʻadi (balandlik oʻzgarmaydi)
    const fitShelf = () => {
      const fit = Number.parseFloat(stage.style.getPropertyValue("--fit")) || 1;
      const width = row.offsetWidth / fit;
      const depth = (row.offsetHeight / fit) * rmax;
      const next = Math.min(1, stage.clientWidth / (width + depth * 0.4)); // 0.4: burilganda chuqurlik ham koʻrinadi
      stage.style.setProperty("--fit", next.toFixed(3));
    };
    const resize = new ResizeObserver(fitShelf);
    resize.observe(stage);

    // Javon ekrandan chiqsa tebranish toʻxtaydi
    const visible = new IntersectionObserver(([entry]) => {
      scene.classList.toggle("is-paused", !entry.isIntersecting);
    });
    visible.observe(stage);

    return () => {
      resize.disconnect();
      visible.disconnect();
      cancelAnimationFrame(frame.current);
      clearTimeout(idleTimer.current);
    };
  }, [rmax]);

  // Kompyuterda javon sichqonchaga qarab biroz buriladi: CSS oʻzgaruvchi, React re-render yoʻq
  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    pointerX.current = (e.clientX - r.left) / r.width;
    clearTimeout(idleTimer.current);
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const scene = sceneRef.current;
      if (!scene) return;
      scene.classList.remove("is-idle");
      scene.style.setProperty("--ry", `${(-30 + pointerX.current * 28).toFixed(1)}deg`);
    });
  };

  const handleLeave = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      sceneRef.current?.style.removeProperty("--ry");
      sceneRef.current?.classList.add("is-idle");
    }, 1200);
  };

  // Chiqqan kitob muqovasi sahnaga toʻliq sigʻishi uchun gorizontal siljish
  const offsetFor = (button: HTMLButtonElement, ratio: number) => {
    const stage = stageRef.current;
    if (!stage) return 0;
    const s = stage.getBoundingClientRect();
    const b = button.getBoundingClientRect();
    const half = (button.offsetHeight * ratio * 1.15) / 2 + 12; // 1.15: oldinga chiqqanda perspektiva kattalashtiradi
    const center = b.left + b.width / 2;
    const target = s.width < half * 2
      ? s.left + s.width / 2
      : Math.min(Math.max(center, s.left + half), s.right - half);
    return Math.round(target - center);
  };

  const toggle = (button: HTMLButtonElement, id: number, ratio: number) => {
    if (openId === id) {
      setOpenId(null);
      return;
    }
    button.style.setProperty("--dx", `${offsetFor(button, ratio)}px`);
    setOpenId(id);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Escape" || openId === null) return;
    stageRef.current?.querySelector<HTMLButtonElement>(`[data-id="${openId}"]`)?.focus();
    setOpenId(null);
  };

  return (
    <div
      ref={stageRef}
      className="shelf3d-stage"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onKeyDown={handleKeyDown}
    >
      <div ref={sceneRef} className="shelf3d-scene is-idle" style={{ "--rmax": rmax } as CSSProperties}>
        <span className="shelf3d-plank-top" aria-hidden="true" />
        <span className="shelf3d-plank-front" aria-hidden="true" />
        <div ref={rowRef} className="shelf3d-row">
          {shelf.map(({ book, t, r }) => {
            const comingSoon = book.status === "coming-soon";
            const style = {
              "--t": t,
              "--r": r.toFixed(4),
              "--c": book.spineColor,
              "--ci": inkFor(book.spineColor),
            } as CSSProperties;
            return (
              <button
                key={book.id}
                type="button"
                data-id={book.id}
                className="shelf3d-book"
                style={style}
                aria-pressed={openId === book.id}
                onClick={(e) => toggle(e.currentTarget, book.id, r)}
              >
                <span className="shelf3d-face shelf3d-spine">
                  <span aria-hidden="true">{comingSoon && <span className="shelf3d-dot" />}</span>
                  <span className="shelf3d-title">{book.title}</span>
                  {comingSoon && <span className="sr-only">, tez kunda</span>}
                  <span className="shelf3d-mark" aria-hidden="true">F°</span>
                </span>
                <span className="shelf3d-face shelf3d-cover" aria-hidden="true">
                  <CoverFace title={book.title} cover={book.cover} sizes="160px" scale={SCALE} />
                </span>
                <span className="shelf3d-face shelf3d-back" aria-hidden="true" />
                <span className="shelf3d-face shelf3d-top" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>

      <p
        aria-live="polite"
        className="absolute inset-x-0 bottom-1.5 flex min-h-10 flex-wrap items-center justify-center gap-2.5 px-4 text-center text-sm text-muted"
      >
        {open ? (
          <>
            <span>
              «{open.title}»{open.status === "coming-soon" && " · tez kunda"}
            </span>
            <Link
              href={`/books/${open.id}`}
              className="px-0.5 py-1 font-semibold text-brand underline underline-offset-[3px] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              Batafsil
            </Link>
          </>
        ) : (
          HINT
        )}
      </p>
    </div>
  );
}
