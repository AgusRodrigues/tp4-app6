"use client";

import React, { useState, ReactNode } from "react";

interface Producto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface CartContextType {
  cart: Producto[];
  addToCart: (producto: Producto) => void;
}

export const useCart = (): CartContextType => {
  const [cart, setCart] = useState<Producto[]>([]);
  console.log('useCart initialized with cart:', cart);

  const addToCart = (producto: Producto) => {
    setCart((prevCart) => [...prevCart, producto]);
  };

  return { cart, addToCart };
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cartContext = useCart();

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

const CartContext = React.createContext<CartContextType | undefined>(undefined);
