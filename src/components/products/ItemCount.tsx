'use client';

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@/components/ui/icons";

interface Props {
  stock: number;
  initial: number;
  onAdd: (quantity: number) => void;
}

export function ItemCount({ stock, initial, onAdd }: Props) {
  const [quantity, setQuantity] = useState(initial);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <MinusIcon className="w-4 h-4" />
        </button>
        <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
        <button
          onClick={() => quantity < stock && setQuantity(quantity + 1)}
          className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <PlusIcon className="w-4 h-4" />
        </button>
        <span className="text-sm text-gray-400 ml-2">{stock} available</span>
      </div>

      <button
        onClick={() => onAdd(quantity)}
        className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
      >
        Add to cart
      </button>
    </div>
  );
}
