import React from 'react'
import Link from 'next/link'
import {  Facebook, Instagram, Twitter } from '@/public/svg'
import Image from 'next/image';


const categories = [
  'Barchasi',
  'Bolalar adabiyoti',
  "O'quv kitoblar",
  'Ilmiy-ommabop kitoblar',
  'Badiiy adabiyot',
];

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
    <footer className="bg-[#012e4a] text-white py-[28px] px-6">
      <div className="container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Bookle Logo Section */}
        <div>
        <div className="w-[86px] max-w-full">
            <Link href="/">
              <Image
                src="/images/Farengeyt_Press_LOGO_small.png"
                alt="farengeyt"
                className="h-auto w-full"
                height={300}
                width={300}
              />
            </Link>
          </div>
       
          <div className="flex gap-3 mt-4">
          <Link href="https://facebook.com/FarengeytPress" className='px-[8px] py-[5px]  items-center hover:bg-secondary transition-all duration-300 max-w-[36px]'><Facebook /></Link>
            <Link href="https://instagram.com/farengeyt_press" className='px-[8px] py-[5px]  items-center hover:bg-secondary transition-all duration-300 max-w-[36px] text-center'><Instagram /></Link>
            <Link href="https://x.com/FarengeytPress" className='px-[8px] py-[5px]  items-center hover:bg-secondary transition-all duration-300 max-w-[36px]'><Twitter/></Link>
          </div>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customers Support</h3>
          <div className="h-[2px] w-8 bg-orange-500 mb-2"></div>
          <ul className="space-y-2 text-sm  text-white">
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

      <div>
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <div className="h-[2px] w-8 bg-orange-500 mb-2"></div>
        <ul className="space-y-2 text-white text-sm">
        {categories.map((category) => (
          <li key={category} className='hover:text-secondary hover:translate-x-1 transition-all duration-300 mb-5'>
            <Link href={`/books?category=${encodeURIComponent(category)}`}>
            »  {category}
            </Link>
          </li>
        ))}
      </ul>
      </div>


        {/* Newsletter */}
        <div className='relative text-white'>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="h-[2px] w-8 bg-orange-500 mb-2"></div>
        
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 rounded-l-md w-full text-white active:border-primary border-1 border-primary"
            />
            <button type="submit" className="bg-[#29479E] text-white px-4 py-2 rounded-r-md">
        Send
            </button>
          </form>
          <Image src="/images/frame-shape.png" alt="" className='absolute  bottom-9 left-14 animate-float-x' width={300} height={300}/>
        </div>
      </div> 
      </div>
     
    </footer>
  );
}
