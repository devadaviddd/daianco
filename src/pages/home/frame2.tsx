import { useEffect, useState } from "react";
import { Product } from "../api/getProductsHomePage";
import { HomeProductsCarousel } from "@/components/Carousel/homeProducts";

const Frame2 = () => {
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
      className="w-full h-[120vh] flex flex-col " id='frame2'
    >
      <HomeProductsCarousel products={products} loading={loading} />
      <div
        className="w-full h-1/2 bg-[#f8f1f1]
      "
      ></div>
    </div>
  );
};

export default Frame2;
