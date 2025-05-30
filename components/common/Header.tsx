import React from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Bosh sahifa' },
  { href: '/about', label: 'Biz haqimizda' },
  { href: '/books', label: 'Kitoblar' },
  { href: '/podcast', label: 'Podkastlar' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Aloqa' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex  items-center justify-between py-4">
          
          {/* Logo */}
          <div className="w-[86px] max-w-full">
            <Link href="/">
              <img
                src="/images/Farengeyt_Press_LOGO_small.png"
                alt="farengeyt"
                className="h-auto w-full"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="w-full lg:w-auto mt-4 lg:mt-0">
            <ul className="flex  justify-between items-center lg:justify-end gap-6 text-lg font-medium text-primary font-inter">
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
          

        </div>
      </div>
    </header>
  );
};

export default Header;
