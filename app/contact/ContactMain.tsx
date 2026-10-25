import { contact } from "@/app/data/contact";
import OpenNowBadge from "./OpenNowBadge";

type Row = { label: string; value: string; href?: string };

const rows: Row[] = [
  { label: "Telefon", value: contact.phone.label, href: contact.phone.href },
  { label: "Email", value: contact.email.label, href: contact.email.href },
  { label: "Telegram", value: contact.telegram.label, href: contact.telegram.href },
  { label: "Instagram", value: contact.instagram.label, href: contact.instagram.href },
  { label: "Manzil", value: contact.address },
];

const rowClass = "grid gap-x-4 gap-y-0.5 border-b border-page-line py-3 sm:grid-cols-[9rem_minmax(0,1fr)]";
const labelClass = "font-mono text-[12px] uppercase leading-6 tracking-[0.09em] text-page-ink/65";
const valueClass = "text-[16px] [overflow-wrap:anywhere]";

// Qiyshiq dumaloq muhr: faqat bezak, ekran oʻquvchilardan yashirilgan
function Stamp() {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className="pointer-events-none absolute right-3 top-16 h-[84px] w-[84px] -rotate-12 text-brand opacity-[0.18] sm:right-8 sm:top-14 sm:h-[110px] sm:w-[110px]"
    >
      <defs>
        <path id="stamp-arc" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
      </defs>
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="60" cy="60" r="33" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text fill="currentColor" fontSize="11" className="font-mono" fontWeight="600">
        <textPath href="#stamp-arc" textLength="272" lengthAdjust="spacing">
          FARENGEYT PRESS · TOSHKENT ·
        </textPath>
      </text>
      <text x="60" y="67" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="700" className="font-display">
        FP
      </text>
    </svg>
  );
}

// Bogʻlanish maʼlumotlari eski kutubxona kartochkasi koʻrinishida. Maʼlumot footer bilan bitta joydan:
// app/data/contact.ts. Server komponent, faqat «Hozir ochiqmi?» belgisi brauzerda hisoblanadi
export default function ContactMain() {
  return (
    <section className="border-t border-line bg-brand-soft py-14">
      <div className="container">
        <h2 className="font-display text-[clamp(24px,2.6vw,30px)] font-semibold leading-[1.15] text-ink">
          Savolingiz bormi? Bizga yozing!
        </h2>
        <p className="mt-3 max-w-[60ch] text-muted">
          {"Taklif va istaklaringizni bizga yozib yuboring. Kitoblarimiz, nashrlarimiz yoki xizmatlarimiz boʻyicha savollaringiz boʻlsa, biz doim javob berishga tayyormiz."}
        </p>

        <div className="catalog-card relative mt-8 max-w-[640px] overflow-hidden rounded-[6px] border border-page-line bg-page px-5 pb-12 pt-6 text-page-ink shadow-[0_1px_3px_var(--floor)] [--hole:var(--brand-soft)] sm:px-8">
          <Stamp />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b-2 border-ember/40 pb-3">
            <p className="font-display text-xl font-semibold">Farengeyt Press</p>
            <p className="font-mono text-[12px] uppercase tracking-[0.09em] text-page-ink/65">Bogʻlanish kartasi</p>
          </div>

          <dl>
            {rows.map((row) => (
              <div key={row.label} className={rowClass}>
                <dt className={labelClass}>{row.label}</dt>
                <dd className={valueClass}>
                  {row.href ? (
                    <a
                      href={row.href}
                      {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="rounded-sm underline decoration-page-line decoration-1 underline-offset-4 hover:decoration-current focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ember"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
            <div className={rowClass}>
              <dt className={labelClass}>Ish vaqti</dt>
              <dd className={valueClass}>
                {contact.hours}
                <OpenNowBadge />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
