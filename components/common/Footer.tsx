import React from 'react'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon, XIcon } from '@/public/svg'
import { ALL_CATEGORIES } from '@/app/data/categories';
import { activeCategoryTitles } from '@/app/data/books';
import { contact, socials } from '@/app/data/contact';
import { navLinks } from '@/app/data/navigation';

// Faqat kitobi bor janrlar
const categories = [ALL_CATEGORIES, ...activeCategoryTitles];

const socialIcons = { facebook: <FacebookIcon />, instagram: <InstagramIcon />, x: <XIcon /> };

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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-brand transition-colors hover:bg-brand-soft"
              >
                {socialIcons[social.key]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-ink">{"Bogʻlanish"}</h3>
          <ul className="space-y-1">
            <li><a href={contact.phone.href} className="hover:text-ink">{contact.phone.label}</a></li>
            <li><a href={contact.email.href} className="hover:text-ink">{contact.email.label}</a></li>
            <li>{contact.hours}</li>
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
