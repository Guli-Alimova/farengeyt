import type { ReactNode } from "react";
import { contact } from "@/app/data/contact";
import { InstagramIcon } from "@/public/svg";

type ContactItem = { label: string; value: string; href?: string; icon?: ReactNode };

const items: ContactItem[] = [
  { label: "Bizga qoʻngʻiroq qiling", value: contact.phone.label, href: contact.phone.href },
  { label: "Email", value: contact.email.label, href: contact.email.href },
  { label: "Instagram", value: contact.instagram.label, href: contact.instagram.href, icon: <InstagramIcon /> },
  { label: "Ish vaqti", value: contact.hours },
  { label: "Manzil", value: contact.address },
];

// Bogʻlanish kartalari. Maʼlumot footer bilan bitta joydan: app/data/contact.ts
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

        <ul className="mt-7 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
          {items.map((item) => {
            const body = (
              <>
                <span className="font-mono text-xs uppercase tracking-[0.09em] text-muted">{item.label}</span>
                <span className="mt-2 flex items-center gap-2 font-display text-lg font-semibold text-ink [overflow-wrap:anywhere]">
                  {item.icon && <span className="text-brand">{item.icon}</span>}
                  {item.value}
                </span>
              </>
            );
            const card = "flex h-full flex-col rounded-[14px] border border-line bg-card px-[18px] py-4";
            return (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`${card} transition-colors hover:border-brand focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ember`}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={card}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
