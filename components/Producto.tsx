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
interface ProductoProps {
  producto: Producto;
}

const ProductCard = (prop: ProductoProps) => {
  const producto = prop.producto;

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
      </div>
    </div>
  );
};

export default ProductCard;
