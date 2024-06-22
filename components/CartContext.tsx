"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

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

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado con un CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Producto[]>([]);

  const addToCart = (producto: Producto) => {
    setCart((prevCart) => [...prevCart, producto]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
