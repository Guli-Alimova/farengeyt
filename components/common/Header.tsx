'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Burger from '../Burger'
import {Close} from "@/public/svg"
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Bosh sahifa' },
  { href: '/about', label: 'Biz haqimizda' },
  { href: '/books', label: 'Kitoblar' },
  { href: '/podcast', label: 'Podkastlar' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Aloqa' },
]



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="w-[86px] max-w-full">
          <Image
            src="/images/Farengeyt_Press_LOGO_small.png"
            alt="farengeyt"
            className="h-auto w-full"
            width={300}
            height={300}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-lg font-medium text-primary font-inter">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-300 hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Burger icon */}
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open Menu"
        >
         {isMenuOpen ? <Close/> : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-primary">
          <Burger onClose={() => setIsMenuOpen(false)} />
        </div>
      )}
    </header>
  )
}

export default Header

