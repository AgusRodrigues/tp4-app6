import Grid from "../../components/Grid";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import { CartProvider } from "../../components/CartContext";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <Hero />
        <Grid />
      </main>
  );
}
