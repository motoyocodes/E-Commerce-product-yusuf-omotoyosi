import Header from "./header";
import Hero from "./heroSection";
import { useState } from "react";

export default function HomePage() {
  const [cart, setCart] = useState<null | {
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>(null);
  return (
    <div className="bg-[hsl(0, 0%, 100%)] ">
      <>
        <Header cart={cart} />
        <Hero onAddToCart={setCart} />
      </>
    </div>
  );
}
