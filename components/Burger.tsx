"use client";
import Link from "next/link";
import Image from "next/image";
import { Close } from "@/public/svg";

const navLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/about", label: "Biz haqimizda" },
  { href: "/books", label: "Kitoblar" },
  { href: "#podcast", label: "Podkastlar" },
  { href: "#blog", label: "Blog" },
  { href: "/contact", label: "Aloqa" },
];

type BurgerProps = {
  onClose: () => void;
};

export default function Burger({ onClose }: BurgerProps) {
  return (
    <div className="bg-[#cde3e8] h-screen w-full max-w-xs ml-auto shadow-lg p-6 transition-transform duration-300 flex flex-col">
      {/* Header (Logo chapda, X o‘ngda) */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/" onClick={onClose} className="w-[80px]">
          <Image
            src="/images/Farengeyt_Press_LOGO_small.png"
            alt="farengeyt"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </Link>
        <button onClick={onClose} aria-label="Close Menu">
          <Close />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1">
        <ul className="flex flex-col gap-3 text-center space-y-5 text-lg font-medium text-blue-900 font-inter">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors duration-300 hover:text-secondary"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    
    </div>
  );
}



