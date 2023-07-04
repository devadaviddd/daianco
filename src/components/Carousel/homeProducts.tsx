import { Product } from "@/pages/api/getProductsHomePage";
import { useKeenSlider } from "keen-slider/react";
import { HomeProductCard } from "../ProductCard/homeCard";

type Props = {
  products: Product[];
  loading: boolean;
};

export const HomeProductsCarousel = (props: Props) => {
  const { products, loading } = props;

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 17,
    },
  });

  return (
    <div
      className="w-full h-1/2 flex items-center justify-center
    "
    >
      {!loading && (
        <div
          ref={ref}
          className="keen-slider !w-[65%] h-3/4 
      "
        >
          {products.map((product) => (
            <HomeProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
