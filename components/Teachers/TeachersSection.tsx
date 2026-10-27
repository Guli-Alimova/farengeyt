import type { CSSProperties } from "react";
import { contact } from "@/app/data/contact";
import SectionHeading from "@/components/common/SectionHeading";

const offers = [
  {
    title: "Koʻp nusxada buyurtma",
    text: "Maktab va kutubxonalar uchun kitoblarni koʻp nusxada buyurtma qilish mumkin.",
  },
  {
    title: "Dars uchun materiallar",
    text: "Kitoblarimiz asosida topshiriqlar va taqdimotlar.",
  },
  {
    title: "Maktabda uchrashuv",
    text: "Maktabingizga borib, kitob taqdimoti yoki uchrashuv oʻtkazamiz.",
  },
];

const focusRing = "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ember";

// Bosh sahifadagi «Oʻqituvchilar va maktablar uchun» boʻlimi. Server komponent.
// Telegram va telefon app/data/contact.ts dan
export default function TeachersSection() {
  return (
    <section id="oqituvchilar" className="scroll-mt-28 border-t border-line py-14">
      <div className="container">
        <SectionHeading eyebrow="Taʼlim" title="Oʻqituvchilar va maktablar uchun" />
        <p className="mt-3 max-w-[60ch] text-muted">
          Kitoblarimizni darsda yoki kutubxonada foydalanmoqchi boʻlsangiz, biz bilan bogʻlaning.
        </p>

        {/* Daftar varagʻi kartalar: .teach-note, styles/globals.css. Oraliq katta: qiyshiq varaq va skotch sigʻadi */}
        <ul className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <li
              key={offer.title}
              // Planshetda (2 ustun) oxirgi karta yolgʻiz qolmasin: butun qatorni egallaydi
              className={`teach-note ${i === offers.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              style={{ "--tilt": ["-1.2deg", "0.8deg", "-0.6deg"][i] } as CSSProperties}
            >
              <span className="teach-tape" aria-hidden="true" />
              <span className="font-mono text-xs text-ember">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display text-xl font-semibold leading-[1.2] text-page-ink text-balance">
                {offer.title}
              </h3>
              <p className="mt-1 text-page-ink/75">{offer.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={contact.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center rounded-full bg-brand px-5 py-3 text-[15px] font-semibold text-brand-ink transition-opacity hover:opacity-90 ${focusRing}`}
          >
            Telegramda yozish
          </a>
          <a
            href={contact.phone.href}
            className={`inline-flex items-center rounded-full border border-line px-5 py-3 text-[15px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand ${focusRing}`}
          >
            Qoʻngʻiroq qilish
          </a>
        </div>
      </div>
    </section>
  );
}
