'use client';

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/app/utils/useReducedMotion";

// Hero'dagi uchqunlar (prototipdagi .embers). Canvas hero section boʻyicha joylashadi
// (Intro'da section relative isolate, oradagi bloklar positioned emas) va -z-10 bilan javon ortida turadi.
// Reduced motion'da chiqmaydi; ekrandan chiqsa yoki tab yashirilsa rAF toʻxtaydi.
type Ember = { x: number; y: number; vy: number; r: number; ph: number; sw: number };

export default function HeroEmbers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || reducedMotion) return;

    const color =
      getComputedStyle(document.documentElement).getPropertyValue("--ember").trim() || "#C94A22";
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;
    let inView = true;
    let embers: Ember[] = [];

    // Uchqunlar asosan oʻng tomonda, javon ortidan koʻtariladi
    const spawn = (fresh: boolean): Ember => ({
      x: w * (0.3 + Math.random() * 0.7),
      y: fresh ? Math.random() * h : h + 10,
      vy: -(0.2 + Math.random() * 0.45),
      r: 0.8 + Math.random() * 1.4,
      ph: Math.random() * Math.PI * 2,
      sw: 0.3 + Math.random() * 0.6,
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Telefonda kamroq zarracha
      embers = Array.from({ length: w < 600 ? 14 : 30 }, () => spawn(true));
    };

    const frame = (t: number) => {
      // Tezlik kadrlar soniga emas, vaqtga bogʻliq (120 Hz ekranda ham bir xil)
      const step = last ? Math.min((t - last) / 16.7, 3) : 1;
      last = t;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      for (let i = 0; i < embers.length; i++) {
        const p = embers[i];
        p.y += p.vy * step;
        p.x += Math.sin(t / 900 + p.ph) * p.sw * 0.4 * step;
        if (p.y < -10) {
          embers[i] = spawn(false);
          continue;
        }
        const life = Math.max(0, Math.min(1, p.y / h));
        ctx.globalAlpha = (0.2 + 0.3 * Math.sin(t / 300 + p.ph * 3) ** 2) * (0.3 + 0.7 * life);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };

    const run = () => {
      cancelAnimationFrame(raf);
      last = 0;
      if (inView && !document.hidden) raf = requestAnimationFrame(frame);
      else ctx.clearRect(0, 0, w, h);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      run();
    });
    resizeObserver.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      run();
    });
    visibility.observe(canvas);
    document.addEventListener("visibilitychange", run);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", run);
      ctx.clearRect(0, 0, w, h);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full motion-reduce:hidden"
    />
  );
}
