'use client';

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/cart/CartItem";
import { EmptyCart } from "@/components/cart/EmptyCart";

export default function CartPage() {
  const { cart, clearCart, removeItem, total } = useCart();
  const cartTotal = cart.length > 0 ? total() : 0;

  if (cart.length === 0) return <EmptyCart />;

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-playfair text-3xl mb-8">Tu Carrito</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onRemove={() => removeItem(item.id)} />
        ))}
      </div>

      <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-2xl font-semibold">Total: ${cartTotal.toFixed(2)}</p>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Limpiar carrito
          </button>
          <Link
            href="/checkout"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </section>
  );
}
