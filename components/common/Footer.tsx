import React from 'react'
import Link from 'next/link'
import { Email, Facebook, Instagram, Twitter } from '@/public/svg'

const navLinks = [
  { href: '/', label: 'Bosh sahifa' },
  { href: '/about', label: 'Biz haqimizda' },
  { href: '/books', label: 'Kitoblar' },
  { href: '/podcast', label: 'Podkastlar' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Aloqa' },
];
export default function Footer() {
  return (
    <footer className="bg-white text-primary py-12 px-6">
      <div className="container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Bookle Logo Section */}
        <div>
        <div className="w-[86px] max-w-full">
            <Link href="/">
              <img
                src="/images/Farengeyt_Press_LOGO_small.png"
                alt="farengeyt"
                className="h-auto w-full"
              />
            </Link>
          </div>
       
          <div className="flex gap-3 mt-4">
          <Link href="/"><Facebook /></Link>
            <Link href="/"><Instagram /></Link>
            <Link href="/"><Twitter /></Link>
          </div>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customers Support</h3>
          <div className="h-[2px] w-8 bg-orange-500 mb-2"></div>
          <ul className="space-y-2 text-sm  ">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-blue-600"
                  >
                    »{link.label}
                  </Link>
                </li>
              ))}
            </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <div className="h-[2px] w-8 bg-orange-500 mb-2"></div>
          <ul className="space-y-2 text-sm">
            <li>» Novel Books</li>
            <li>» Poetry Books</li>
            <li>» Political Books</li>
            <li>» History Books</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="h-[2px] w-8 bg-orange-500 mb-2"></div>
          <p className="text-sm mb-4">
            Sign up to searing weekly newsletter to get the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 rounded-l-md w-full text-black"
            />
            <button type="submit" className="bg-teal-600 px-4 py-2 rounded-r-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9 4 9-4-9-4-9 4z" />
              </svg>
            </button>
          </form>
        </div>
      </div> 
      </div>
     
    </footer>
  );
}
