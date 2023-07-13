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
    <div className="w-full h-[100vh] flex flex-col " id="frame2">
      <HomeProductsCarousel products={products} loading={loading} />
      <div
        className="w-full h-1/2 bg-[#F8F8F8] grid grid-cols-2 
      "
      >
        <div
          className=" flex justify-center
        items-end flex-col"
        >
          <div
            className="w-[60%] mb-[2rem] mr-[5rem]
          text-[var(--main-red)] font-andantedisplay_bold text-3xl"
          >
            WE DO BUSINESS FOR THE SAFETY OF YOUR LIFE & PROPERTY
          </div>
          <p className="w-[60%] mr-[5rem] font-magazinegrotesque_regular">
            From the year of establishment in 2001, DaiAn Company has been right
            the place where the active engineers have come to work together for
            the same goal of safety. With our special knowledge and work
            experience of fire protection systems and security systems from the
            different manufacturers in the world, we do business for the safety
            of life.
          </p>
        </div>
        <div
          className="flex 
          items-center"
        >
          <h1
            className="text-[8rem] font-futura_bold 
          text-[var(--main-red)]"
          >
            DaiAnCo.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
