'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CartIcon } from "@/components/ui/icons";
import { CartItem } from "./CartItem";
import { EmptyCart } from "./EmptyCart";

export function CartWidget() {
  const { cart, removeItem, total, cantElementos } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const count = cantElementos();
  const cartTotal = count > 0 ? total() : 0;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-700 hover:text-brand-600 transition-colors"
      >
        <CartIcon className="w-6 h-6" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {count}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50">
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Carrito</h3>

            {cart.length > 0 ? (
              <>
                <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto">
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      variant="compact"
                      onRemove={() => removeItem(item.id)}
                    />
                  ))}
                </div>

                <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between items-center">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-lg">${cartTotal.toFixed(2)}</span>
                </div>

                <div className="flex gap-2 mt-3">
                  <Link
                    href="/cart"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 text-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Ver carrito
                  </Link>
                  <Link
                    href="/checkout"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Pagar
                  </Link>
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-sm py-4 text-center">Tu carrito esta vacio</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
