'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/app/data/navigation'

// "/books" ham "/books/3" sahifasida faol koʻrinadi; "/#..." havolalari hech qachon faol emas
function isActive(pathname: string, href: string) {
  if (href.includes('#')) return false
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="container relative flex items-center gap-5 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-display text-[23px] font-bold tracking-[-0.01em] text-ink"
          onClick={() => setIsMenuOpen(false)}
        >
          Farengeyt
          <span className="font-body text-xs font-medium uppercase tracking-[0.09em] text-muted">
            Press
          </span>
        </Link>

        <button
          type="button"
          className="ml-auto inline-flex rounded-lg border border-line px-3 py-1.5 text-sm text-ink min-[821px]:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? 'Yopish' : 'Menyu'}
        </button>

        <nav
          id="site-nav"
          className={`${isMenuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col border-b border-line bg-paper px-4 pb-2.5 pt-1.5 min-[821px]:static min-[821px]:ml-auto min-[821px]:flex min-[821px]:flex-row min-[821px]:gap-[22px] min-[821px]:border-0 min-[821px]:bg-transparent min-[821px]:p-0`}
        >
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`border-t border-line py-2.5 text-[15px] transition-colors hover:text-ink min-[821px]:border-0 min-[821px]:py-0 ${active ? 'text-ink' : 'text-muted'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
