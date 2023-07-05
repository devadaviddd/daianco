import { Product } from "@/pages/api/getProductsHomePage";
import { useKeenSlider } from "keen-slider/react";
import { HomeProductCard } from "../ProductCard/homeCard";
import { useEffect, useState } from "react";

type Props = {
  products: Product[];
  loading: boolean;
};

export const HomeProductsCarousel = (props: Props) => {
  const { products, loading } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const perView = 4;
  const [dotLength, setDotLength] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },

    slides: {
      perView,
      spacing: 17,
    },
  });

  useEffect(() => {
    console.log(instanceRef.current?.slides.length);
    if (instanceRef.current && dotLength === 1) {
      const slideLength = instanceRef.current.slides.length;
      setDotLength(dotLength + (slideLength % perView));
    }
  }, [instanceRef.current]);

  useEffect(() => {
    console.log("currentSlide", currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    console.log("dotlength", dotLength);
  }, [dotLength]);

  return (
    <>
      <div
        className="w-full h-[60%] flex items-center justify-center relative
          "
      >
        {!loading && (
          <>
            <div
              ref={ref}
              className="keen-slider !w-[65%] h-3/4 
      "
            >
              {products.map((product) => (
                <HomeProductCard key={product.id} product={product} />
              ))}
            </div>
            {loaded && instanceRef.current && (
              <div
                className="absolute bottom-0 w-full h-[3rem]
        flex gap-1 justify-center "
              >
                {Array.from(Array(dotLength).keys()).map((index) => (
                  <button
                    key={index}
                    className={`w-3 h-1 rounded-md ${
                      currentSlide === index ? "bg-[var(--main-red)] w-6" : "bg-black"
                    }`}
                    onClick={() => instanceRef.current?.moveToIdx(index)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
