import React from 'react'
import Link from 'next/link'
import { Email, Facebook, Instagram, Twitter } from '@/public/svg'

const Navbar = () => {
  return (
    <div className="bg-[#29479E] text-white text-sm py-3 font-inter hidden md:flex">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0">

          {/* Chap tomon – Aloqa ma'lumotlari */}
          <ul className="flex flex-wrap items-center gap-6">
            <li className="flex items-center gap-2">
              <i className="fa-regular fa-phone"></i>
              <a href="tel: +99890 999 18 19" className="hover:underline">
              +99890 999 18 19
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="far fa-envelope"></i>
              <a href="mailto: info@farengeyt.press" className="hover:underline">
              info@farengeyt.press
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="far fa-clock"></i>
              <span>Sunday - Fri: 9 AM - 6 PM</span>
            </li>
          </ul>

          {/* O‘ng tomon – Ijtimoiy tarmoqlar va foydalanuvchi */}
          <div className="flex items-center gap-6">
            <Link href="/"><Facebook /></Link>
            <Link href="/"><Instagram /></Link>
            <Link href="/"><Twitter /></Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
