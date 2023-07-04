import { useEffect, useState } from "react";
import { Product } from "../api/getProductsHomePage";
import { HomeProductsCarousel } from "@/components/Carousel/homeProducts";

export const Frame2 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("/api/getProductsHomePage");
      const product: Product[] = await res.json();
      setProducts(product);
      setLoading(false);
    }
    getProducts();
  }, []);

  return (
    <div
      className="w-full h-[120vh] flex flex-col 
  bg-white"
    >
      <HomeProductsCarousel products={products} loading={loading} />
      <div className="w-full h-1/2 bg-black"></div>
    </div>
  );
};
