import Image from "next/image";
import { Inter } from "next/font/google";
import { ReactElement, useEffect, useState } from "react";
import { Product } from "./api/getProduct";
import { MainLayouts } from "@/layouts/main-layouts";
import { NextPageWithLayout } from "./_app";
import localFontLibrary from "@/fonts/local-fonts";
import { LineVertical } from "@/components/LineVertical";
import { HomeProductsCarousel } from "@/components/HomeProductsCarousel/index";
import "keen-slider/keen-slider.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div className="w-full h-[100vh] flex flex-row relative">
        <LineVertical left />
        <LineVertical middle />
        <LineVertical right />

        <div
          className="w-1/2 h-full flex flex-col justify-center
          items-center "
        >
          <div className="flex flex-col gap-5">
            <h1
              className="text-7xl font-futura_bold 
        tracking-wider text-[var(--main-red)]"
            >
              DaiAn
            </h1>
            <span className="text-3xl text-white font-andantedtext_light">
              DAIAN SAFETY TECHNOLOGY
            </span>
          </div>
        </div>

        <HomeProductsCarousel />
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayouts>{page}</MainLayouts>;
};

export default Home;
