import React from 'react'
import Link from 'next/link'
import { FacebookBlue, InstagramBlue, TwitterBlue } from '@/public/svg'
import { ALL_CATEGORIES, categoryTitles } from '@/app/data/categories';
import { navLinks } from '@/app/data/navigation';

const categories = [ALL_CATEGORIES, ...categoryTitles];

const socials = [
  { href: "https://facebook.com/FarengeytPress", label: "Facebook", icon: <FacebookBlue /> },
  { href: "https://instagram.com/farengeyt_press", label: "Instagram", icon: <InstagramBlue /> },
  { href: "https://x.com/FarengeytPress", label: "X", icon: <TwitterBlue /> },
];

export default function Footer() {
  return (
    <footer className="border-t border-line pb-11 pt-9 text-sm text-muted">
      <div className="container grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
        <div>
          <Link
            href="/"
            className="flex items-center gap-1.5 font-display text-[23px] font-bold tracking-[-0.01em] text-ink"
          >
            Farengeyt
            <span className="font-body text-xs font-medium uppercase tracking-[0.09em] text-muted">
              Press
            </span>
          </Link>
          <p className="mt-2">{"Ilmiy-ommabop, taʼlimiy va tarjima adabiyot."}</p>
          <div className="mt-4 flex items-center gap-2">
            {socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors hover:bg-brand-soft"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-ink">{"Bogʻlanish"}</h3>
          <ul className="space-y-1">
            <li><a href="tel:+998909991819" className="hover:text-ink">+998 90 999 18 19</a></li>
            <li><a href="mailto:info@farengeyt.press" className="hover:text-ink">info@farengeyt.press</a></li>
            <li>Dushanba–Juma, 09:00–18:00</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-ink">Sahifalar</h3>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ink">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-ink">Janrlar</h3>
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/books?category=${encodeURIComponent(category)}`} className="hover:text-ink">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
