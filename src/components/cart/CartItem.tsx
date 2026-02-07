'use client';

import Image from "next/image";
import { CloseIcon } from "@/components/ui/icons";
import type { CartItem as CartItemType } from "@/types";

interface Props {
  item: CartItemType;
  onRemove?: () => void;
  variant?: "compact" | "full" | "summary";
}

export function CartItem({ item, onRemove, variant = "full" }: Props) {
  const total = (item.price * item.quantity).toFixed(2);

  if (variant === "compact") {
    return (
      <div className="flex items-center justify-between py-2 gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xs font-medium bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center shrink-0">
            {item.quantity}
          </span>
          <span className="text-sm text-gray-700 truncate">{item.name}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-sm font-medium">${total}</span>
          {onRemove && (
            <CloseIcon
              className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer transition-colors"
              onClick={onRemove}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-50">
        <Image
          src={item.img}
          alt={item.name}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="font-semibold">${total}</p>
      </div>
      {variant !== "summary" && onRemove && (
        <button onClick={onRemove} className="p-1 text-gray-400 hover:text-red-500 transition-colors">
          <CloseIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
