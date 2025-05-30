import React from 'react'
import Link from 'next/link'
import { Email, FacebookBlue, InstagramBlue, TwitterBlue } from '@/public/svg'

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
    <footer className="bg-[#012e4a] text-primary py-[28px] px-6">
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
          <Link href="/" className='px-[8px] py-[5px] border-1 border-primary items-center hover:bg-secondary transition-all duration-300 max-w-[36px]'><FacebookBlue /></Link>
            <Link href="/" className='px-[8px] py-[5px] border-1 border-primary items-center hover:bg-secondary transition-all duration-300 max-w-[36px] text-center'><InstagramBlue /></Link>
            <Link href="/" className='px-[8px] py-[5px] border-1 border-primary items-center hover:bg-secondary transition-all duration-300 max-w-[36px]'><TwitterBlue /></Link>
          </div>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customers Support</h3>
          <div className="h-[2px] w-8 bg-orange-500 mb-2"></div>
          <ul className="space-y-2 text-sm  ">
              {navLinks.map((link) => (
                <li key={link.href} className='hover:text-secondary hover:translate-x-1 transition-all duration-300 mb-5'>
                  <Link
                    href={link.href}
                  >
                    » {link.label}
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
            <li className='hover:text-secondary hover:translate-x-1 transition-all duration-300 mb-5'>» Bolalar adabiyoti</li>
            <li className='hover:text-secondary hover:translate-x-1 transition-all duration-300 mb-5'>» O`quv kitoblar</li>
            <li className='hover:text-secondary hover:translate-x-1 transition-all duration-300 mb-5'>» Ilmiy-ommabop kitoblar</li>
            <li className='hover:text-secondary hover:translate-x-1 transition-all duration-300 mb-5'>» Badiiy adabiyot </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='relative'>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="h-[2px] w-8 bg-orange-500 mb-2"></div>
        
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 rounded-l-md w-full text-silver active:border-primary border-1 border-primary"
            />
            <button type="submit" className="bg-[#29479E] text-white px-4 py-2 rounded-r-md">
        Send
            </button>
          </form>
          <img src="/images/frame-shape.png" alt="" className='absolute  bottom-9 left-14 animate-float-x'/>
        </div>
      </div> 
      </div>
     
    </footer>
  );
}
