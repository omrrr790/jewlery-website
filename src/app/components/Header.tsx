"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import logoWhite from "../../imports/logo.png";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Collections", href: "/collections" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(2);
  const [wishlistCount] = useState(3);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoSrc = logoWhite;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#C9A84C]/20 py-2 sm:py-3 shadow-lg"
            : "bg-gradient-to-b from-black/60 to-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Retains sizing but uses brightness filter to guarantee crisp visibility */}
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 hover:scale-105">
              <Image
                src={logoSrc}
                alt="Elegance by Rimsha"
                className="w-full h-full object-contain brightness-110 contrast-105"
                priority
              />
            </div>
              
            {/* Desktop Nav - Cleaned up variable fallbacks to ensure pure white text */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-[#C9A84C] transition-colors duration-300 tracking-widest uppercase text-xs font-semibold"
                  style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.15em" }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="hidden lg:flex items-center gap-6">
              <button className="text-white/80 hover:text-[#C9A84C] transition-colors duration-300 p-1">
                <Search size={19} />
              </button>
              <button className="text-white/80 hover:text-[#C9A84C] transition-colors duration-300 p-1">
                <User size={19} />
              </button>
              <button className="relative text-white/80 hover:text-[#C9A84C] transition-colors duration-300 p-1">
                <Heart size={19} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A84C] text-black text-[9px] font-extrabold rounded-full flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </button>
              {/* Wrapped Shopping Bag with Next.js Link pointing to /cart */}
              <Link href="/cart" className="relative text-white/80 hover:text-[#C9A84C] transition-colors duration-300 p-1">
                <ShoppingBag size={19} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A84C] text-black text-[9px] font-extrabold rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-4">
              {/* Wrapped Mobile Shopping Bag with Next.js Link pointing to /cart */}
              <Link href="/cart" className="relative text-white/80 hover:text-[#C9A84C] transition-colors duration-300 p-1">
                <ShoppingBag size={21} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A84C] text-black text-[9px] font-extrabold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="text-white/80 hover:text-[#C9A84C] transition-colors duration-300 p-1"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#080808] flex flex-col animate-fade-in">
          <div className="flex justify-between items-center px-6 py-5 border-b border-[#C9A84C]/20">
            <Image src={logoSrc} alt="Elegance by Rimsha" className="w-16 h-16 object-contain brightness-110" />
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-[#C9A84C] transition-colors p-1"
            >
              <X size={28} />
            </button>
          </div>
          
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white hover:text-[#C9A84C] transition-colors duration-300 tracking-widest uppercase text-xl font-medium"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex justify-center gap-8 pb-12">
            <button className="text-white/70 hover:text-[#C9A84C] transition-colors duration-300 p-2">
              <Search size={24} />
            </button>
            <button className="text-white/70 hover:text-[#C9A84C] transition-colors duration-300 p-2">
              <User size={24} />
            </button>
            <button className="text-white/70 hover:text-[#C9A84C] transition-colors duration-300 p-2">
              <Heart size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}