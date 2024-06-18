import Header from '../components/Header';

const Cart: React.FC = () => {
  // Aquí irá la lógica del carrito
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        {/* Implementar el contenido del carrito */}
      </main>
    </div>
  );
};

export default Cart;