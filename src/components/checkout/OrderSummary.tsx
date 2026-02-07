'use client';

import { CartItem } from "@/components/cart/CartItem";
import type { CartItem as CartItemType } from "@/types";

interface Props {
  items: CartItemType[];
  total: number;
}

export function OrderSummary({ items, total }: Props) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <h3 className="font-playfair text-xl mb-4">Order Summary</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <CartItem key={item.id} item={item} variant="summary" />
        ))}
      </div>
      <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-2xl font-bold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
