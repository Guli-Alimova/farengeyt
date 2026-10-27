import Link from "next/link";
import React from "react";
import { books, toCardData } from "@/app/data/books";
import HeroShelf from "./HeroShelf";
import HeroEmbers from "./HeroEmbers";

const Intro = () => {
  // Javonda faqat sotuvdagi (published) kitoblar, «Tez kunda»lari yoʻq. Faqat kartochka maydonlari
  // uzatiladi: tavsiflar client JS'ga tushmaydi
  const shelfBooks = books.filter((b) => b.status === "published").map(toCardData);

  return (
    // relative isolate: uchqunlar canvas'i (-z-10) section boʻyicha joylashadi va kontent ortida qoladi.
    // Oradagi container va ustunlarni positioned qilmang, aks holda canvas ularga bogʻlanib qoladi
    <section className="relative isolate overflow-hidden pb-12 pt-11">
      <div className="container grid items-center gap-8 min-[880px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.09em] text-brand">
            {"Ilmiy-ommabop, taʼlimiy va tarjima adabiyot"}
          </p>
          <h1 className="mb-[18px] mt-3.5 max-w-[16ch] text-balance font-display text-[clamp(34px,5.2vw,58px)] font-semibold leading-[1.06] tracking-[-0.015em] text-ink">
            Kitob olami biz bilan <em className="text-brand">yanada yaqin</em>
          </h1>
          <p className="max-w-[44ch] text-lg text-muted">
            {"Farengeyt Press dunyo ilm-fani va tafakkurining eng yaxshi kitoblarini oʻzbek oʻquvchisiga yetkazadi."}
          </p>
          <div className="mt-[26px] flex flex-wrap gap-3">
            <Link
              href="/books"
              className="inline-flex items-center rounded-full bg-brand px-5 py-3 text-[15px] font-semibold text-brand-ink"
            >
              {"Kitoblarni koʻrish"}
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-line px-5 py-3 text-[15px] font-semibold text-ink"
            >
              Biz haqimizda
            </Link>
          </div>
          <HeroEmbers />
        </div>
        <HeroShelf books={shelfBooks} />
      </div>
    </section>
  )
}

export default Intro;
