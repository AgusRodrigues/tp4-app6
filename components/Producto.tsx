import Link from 'next/link';
import Image from 'next/image';

interface Producto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductCardProps {
  producto: Producto;
}

const ProductCard: React.FC<ProductCardProps> = ({ producto }) => {
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
      <Image
        src={producto.thumbnail}
        alt={producto.title}
        width={200}
        height={300}
        className="w-60 h-60"
      />
      <div className="card-body">
        <h2 className="card-title">{producto.title}</h2>
        <p>${producto.price}</p>
        <div className="card-actions justify-end">
          <Link href={`/product/${producto.id}`}>
            <a className="btn btn-primary">View</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;