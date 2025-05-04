import React from 'react'
import Link from 'next/link'


const navLinks = [
    { href: '/', label: 'Bosh sahifa' },
    { href: '/about', label: 'Biz haqimizda' },
    { href: '/books', label: 'Kitoblar' },
    { href: '/podcast', label:'Podkastlar'},
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Aloqa' },
  ];
  
const Header = () => {

  return (
    <div>
      <div className="container">
        <div className="flex items-center">
          <div className='w-[86px] max-w-full mr-[260px]'>
            <img src="/images/Farengeyt_Press_LOGO_small.png" alt="farengeyt" />
          </div>
          <ul className="flex  gap-[42px] text-lg font-normal leading-5 tracking-wide text-black inter">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header