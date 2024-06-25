"use client";

import { useCart } from "./CartContext";
import Image from "next/image";

const CartModal: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {
  const { cart } = useCart();

  return (
    <div className={`fixed inset-0 z-50 ${isVisible ? '' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-4 rounded shadow-lg w-3/4 max-w-lg relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h1 className="text-3xl font-bold mb-4">Tu carrito</h1>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {cart.map((producto) => (
                <div key={producto.id} className="card">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    width={100}
                    height={100}
                  />
                  <div className="card-body">
                    <h2 className="card-title">{producto.nombre}</h2>
                    <p className="card-text">${producto.precio}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button onClick={onClose} className="btn btn-secondary mt-4">Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
