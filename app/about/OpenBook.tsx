'use client';

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";

// «Biz haqimizda»dagi CSS 3D sahna: logoli kitob ochiladi, 3 varaq oʻgiriladi, sahifalardan
// iliq nur va uchqunlar chiqadi, keyin kitob yopiladi. Faqat bezak (aria-hidden).
// Reduced motion'da ochiq kitob tinch turadi; ekrandan chiqsa animatsiya toʻxtaydi
const LINES = 11;
const LEAVES = 3;
const EMBERS = 14;

function Lines() {
  return (
    <>
      {Array.from({ length: LINES }, (_, i) => (
        <i key={i} />
      ))}
    </>
  );
}

export default function OpenBook() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const visible = new IntersectionObserver(([entry]) => {
      scene.classList.toggle("is-paused", !entry.isIntersecting);
    });
    visible.observe(scene);
    return () => visible.disconnect();
  }, []);

  return (
    <div className="container pb-12">
      <div ref={sceneRef} className="openbook" aria-hidden="true">
        <div className="openbook-light" />
        <div className="openbook-sway">
          <div className="openbook-book">
            <div className="openbook-back" />
            <div className="openbook-shadow" />
            {/* Oʻng tomondagi varaqlar bloki */}
            <div className="openbook-edge openbook-redge" />
            <div className="openbook-edge openbook-rfoot" />
            <div className="openbook-paper openbook-rpage"><Lines /></div>
            {/* Oʻgiriladigan varaqlar */}
            {Array.from({ length: LEAVES }, (_, i) => (
              <div key={i} className="openbook-leaf" style={{ "--leaf": `openbook-leaf${i}` } as CSSProperties}>
                <div className="openbook-paper openbook-leaf-front"><Lines /></div>
                <div className="openbook-paper openbook-leaf-back"><Lines /></div>
              </div>
            ))}
            {/* Muqova va chap tomondagi varaqlar: birga ochiladi */}
            <div className="openbook-cover">
              <div className="openbook-cover-out">
                <span className="openbook-badge">
                  <Image src="/images/logo-mark.png" width={223} height={256} alt="" />
                </span>
                <b>Farengeyt</b>
                <small>Press</small>
              </div>
              <div className="openbook-cover-in" />
              <div className="openbook-edge openbook-ledge" />
              <div className="openbook-paper openbook-lpage"><Lines /></div>
            </div>
            <div className="openbook-spine" />
          </div>
        </div>
        <div className="openbook-embers">
          {Array.from({ length: EMBERS }, (_, i) => (
            <i
              key={i}
              style={{
                "--x": `${((i * 47) % 100) - 50}px`,
                "--dx": `${((i * 29) % 70) - 35}px`,
                animationDelay: `${(i * 0.37).toFixed(2)}s`,
              } as CSSProperties}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
