/*import { useState, useEffect } from "react";
import ProductCard from "../components/Producto";

interface Producto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const Home = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetch("http://18.225.10.41/v1/productos/consultar")
      .then((response) => response.json())
      .then((data) => setProductos(data.products));
  }, []);

  return (
    <div className="my-10">
      <div className="text-4xl font-bold mb-5">Bienvenido a mi tienda</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-base-100 shadow-xl">
            <ProductCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;*/
