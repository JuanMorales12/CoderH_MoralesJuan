'use client';

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ItemCount } from "./ItemCount";
import type { Product } from "@/types";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem, isInCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity: number) => {
    const success = addItem(
      {
        id: product.id,
        name: product.nombre,
        price: product.precio,
        img: product.imagen,
      },
      quantity
    );
    if (success) setAdded(true);
  };

  const alreadyInCart = isInCart(product.id);

  return (
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-500 uppercase tracking-wider">{product.categoria}</p>
      <h1 className="font-playfair text-4xl mt-2 text-gray-900">
        {product.nombre}
      </h1>
      <p className="text-3xl font-semibold mt-4">${product.precio.toLocaleString("es-AR")}</p>

      <div className="mt-8">
        {added ? (
          <div className="px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-emerald-700 font-medium">Se agrego con exito al carrito!</p>
          </div>
        ) : alreadyInCart ? (
          <div className="px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-700 font-medium">Este producto ya esta en tu carrito.</p>
          </div>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
}
