"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartContext";

interface Producto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard = () => {
  const [producto, setProducto] = useState<Producto | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchRandomProduct = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const randomProduct =
        data.products[Math.floor(Math.random() * data.products.length)];
      setProducto(randomProduct);
    };

    fetchRandomProduct();
  }, []);

  if (!producto) return <div>Loading...</div>;

  return (
    <div className="card">
      <Link href={`/producto/${producto.id}`}>
        <Image
          src={producto.thumbnail}
          alt={producto.title}
          width={300}
          height={300}
          className="cursor-pointer"
        />
      </Link>
      <div className="card-body">
        <h2 className="card-title">{producto.title}</h2>
        <p className="card-text">${producto.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(producto)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
