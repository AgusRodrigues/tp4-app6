"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartContext";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

interface ProductoProps {
  producto: Producto;
}

const ProductCard = ({ producto }: ProductoProps) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <Link href={`/producto/${producto.id}`}>
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          width={300}
          height={300}
          className="cursor-pointer"
        />
      </Link>
      <div className="card-body">
        <h2 className="card-title">{producto.nombre}</h2>
        <p className="card-text">${producto.precio}</p>
        <button onClick={() => addToCart(producto)} className="btn btn-primary">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
