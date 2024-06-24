"use client";

import { useState, useEffect } from "react";
import ProductCard from "./Producto";

interface Producto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const getRandomProducts = (products: Producto[], count: number): Producto[] => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Grid = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const randomProducts = getRandomProducts(data.products, 12);
        setProductos(randomProducts);
      });
  }, []);

  return (
    <div className="my-10">
      <div className="text-4xl font-bold mb-5">Bienvenido a mi tienda</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-base-100 shadow-xl">
            <ProductCard producto={producto} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
