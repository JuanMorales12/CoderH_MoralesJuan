'use client';

import { createContext, useContext, useState, type ReactNode } from "react";
import type { CartItem } from "@/types";

interface CartContextType {
  cart: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, quantity: number) => boolean;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  total: () => number;
  cantElementos: () => number;
  isInCart: (itemId: string) => boolean;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addItem: () => false,
  removeItem: () => {},
  clearCart: () => {},
  total: () => 0,
  cantElementos: () => 0,
  isInCart: () => false,
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const isInCart = (itemId: string) => cart.some((prod) => prod.id === itemId);

  const addItem = (item: Omit<CartItem, 'quantity'>, quantity: number) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      return true;
    }
    return false;
  };

  const removeItem = (itemId: string) => {
    setCart((prev) => prev.filter((prod) => prod.id !== itemId));
  };

  const clearCart = () => setCart([]);

  const cantElementos = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  const total = () =>
    cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, total, cantElementos, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
