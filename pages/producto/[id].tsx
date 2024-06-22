import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Image from "next/image";

interface Producto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductPage = () => {
  const [producto, setProducto] = useState<Producto | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProducto(data));
    }
  }, [id]);

  if (!producto) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <main data-theme="luxury" className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center">
          <Image
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

export default ProductPage;
