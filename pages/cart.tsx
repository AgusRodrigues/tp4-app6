"use client";

import Header from "../components/Header";
import { useCart } from "../components/CartContext";
import Image from "next/image";

const Cart: React.FC = () => {
  const { cart } = useCart();

  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">Tu carrito</h1>
        {cart.length === 0 ? (
          <p>Tu carrito esta vacio.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {cart.map((producto) => (
              <div key={producto.id} className="card">
                <Image
                  src={`http://18.225.10.41/v1/productos/consultarImagen/${producto.id}`}
                  alt={producto.nombre}
                  width={300}
                  height={300}
                />
                <div className="card-body">
                  <h2 className="card-title">{producto.nombre}</h2>
                  <p className="card-text">${producto.precio}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
