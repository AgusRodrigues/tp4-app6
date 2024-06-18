import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import image from "next/image"


interface producto {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  }

  const ProductPage = ({ producto }: { producto: producto }) => {
    return (
      <div>
        <h1>{producto.title}</h1>
        <p>Price: ${producto.price}</p>
        <img src={producto.thumbnail} alt={producto.title} />
      </div>
    );
  };


const Product = () => {
    const [producto, setProducto] = useState<producto>({
        id: 0,
        title: '',
        price: 0,
        thumbnail: '',
      });

  useEffect(() => {
    const id = window.location.pathname.split('/').pop();
    fetch(`https://dummyjson.com/products/${id}`)
     .then(response => response.json())
     .then(data => setProducto(data));
  }, []);

  return (
    <div>
        <Header />
      <main className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={producto.thumbnail}
            alt={producto.title}
            width={200}
            height={300}
            className="w-60 h-60"
          />
          <div className="ml-0 md:ml-8 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">{producto.title}</h1>
            <p className="mt-4 text-xl">${producto.price}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;