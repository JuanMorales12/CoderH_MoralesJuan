'use client';

import { useState } from "react";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { CartWidget } from "@/components/cart/CartWidget";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center gap-1.5">
          <span className="font-playfair text-xl font-bold tracking-tight text-gray-900">GZ</span>
          <span className="hidden sm:inline text-xs text-gray-400 uppercase tracking-widest">Indumentaria</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        {/* Cart + Mobile Menu */}
        <div className="flex items-center gap-2">
          <CartWidget />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4">
          <NavLinks onNavigate={() => setMobileMenuOpen(false)} vertical />
        </div>
      )}
    </header>
  );
}
