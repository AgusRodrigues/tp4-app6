import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/" legacyBehavior>
            <a>E-Commerce</a>
          </Link>
        </h1>
        <nav>
          <Link href="/cart" legacyBehavior>
            <a className="ml-4">Cart</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
