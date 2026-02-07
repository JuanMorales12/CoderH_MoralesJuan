'use client';

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { createOrder } from "@/lib/orders";
import type { Buyer } from "@/types";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const cartTotal = cart.length > 0 ? total() : 0;

  const handleSubmit = async (buyer: Buyer) => {
    const items = cart.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
    }));
    setLoading(true);
    const id = await createOrder({ buyer, items, total: cartTotal });
    setOrderId(id);
    clearCart();
    setLoading(false);
  };

  if (orderId) {
    return (
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="font-playfair text-2xl mb-2">Order placed successfully!</h2>
          <p className="text-gray-600 mb-4">Your order ID is:</p>
          <p className="font-mono text-lg bg-white px-4 py-2 rounded-lg inline-block border border-emerald-200">
            {orderId}
          </p>
          <div className="mt-6">
            <Link href="/" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors inline-block">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (cart.length === 0 && !orderId) {
    return (
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 text-lg mb-4">You need to add items to your cart first.</p>
        <Link href="/" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors inline-block">
          Browse products
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="font-playfair text-3xl mb-8">Checkout</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <CheckoutForm onSubmit={handleSubmit} loading={loading} />
        <OrderSummary items={cart} total={cartTotal} />
      </div>
    </section>
  );
}
