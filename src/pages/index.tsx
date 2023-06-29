import Image from "next/image";
import { Inter } from "next/font/google";
import { ReactElement, useEffect, useState } from "react";
import { Product } from "./api/getProduct";
import { MainLayouts } from "@/layouts/main-layouts";
import { NextPageWithLayout } from "./_app";
import localFontLibrary from "@/fonts/local-fonts";
import { LineVertical } from "@/components/LineVertical";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("/api/getProduct");
      const product: Product[] = await res.json();
      setProducts(product);
      console.log(product);
    }
    getProducts();
  }, []);

  return (
    <>
      <div className="w-full h-[100vh]">
        <LineVertical left />
        <LineVertical middle />
        <LineVertical right />
      </div>

    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayouts>{page}</MainLayouts>;
};

export default Home;
