import type { ReactNode } from "react";

// Eski kutubxona kartochkasi: --page qogʻoz fon, --page-ink matn, pastida teshik (.catalog-card,
// styles/globals.css). «Bogʻlanish» va «Biz haqimizda» sahifalarida. Teshik orqadagi fonga mos:
// kartochka bg-brand-soft boʻlimda turadi
export default function CatalogCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`catalog-card relative overflow-hidden rounded-[6px] border border-page-line bg-page px-5 pb-12 pt-6 text-page-ink shadow-[0_1px_3px_var(--floor)] [--hole:var(--brand-soft)] sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
