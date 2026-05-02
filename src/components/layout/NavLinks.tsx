'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllCategories } from "@/lib/categories";
import { ChevronDownIcon } from "@/components/ui/icons";
import type { Category } from "@/types";

export function NavLinks({ onNavigate, vertical }: { onNavigate?: () => void; vertical?: boolean }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    getAllCategories().then(setCategories);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`flex ${vertical ? "flex-col gap-4" : "items-center gap-8"}`}>
      <Link
        href="/"
        onClick={onNavigate}
        className={`text-sm font-medium transition-colors hover:text-brand-600 ${
          isActive("/") ? "text-brand-600" : "text-gray-700"
        }`}
      >
        Inicio
      </Link>

      {/* Dropdown de Productos */}
      <div
        className="relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button
          className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-600 ${
            pathname.startsWith("/category") ? "text-brand-600" : "text-gray-700"
          }`}
        >
          Productos
          <ChevronDownIcon className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
        </button>

        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.categoria}`}
                onClick={() => {
                  setDropdownOpen(false);
                  onNavigate?.();
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors capitalize"
              >
                {cat.categoria}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/about"
        onClick={onNavigate}
        className={`text-sm font-medium transition-colors hover:text-brand-600 ${
          isActive("/about") ? "text-brand-600" : "text-gray-700"
        }`}
      >
        Sobre nosotros
      </Link>
    </nav>
  );
}
