import cardBg from "@/assets/productCard-BG.png";
import { Product } from "@/pages/api/getProductsHomePage";
import Image from "next/image";

type Props = {
  product: Product;
};

export const HomeProductCard = (props: Props) => {
  const { product } = props;
  const { short_name, image_url } = product;
  return (
    <div
      className="keen-slider__slide
    h-full flex flex-col justify-center items-center
    !bg-cover !bg-no-repeat !bg-center rounded-2xl relative text-center
    "
      style={{
        background: `url('${cardBg.src}')`,
      }}
    >
      <h1
        className="text-white absolute top-4
        right-0 left-0 font-andantedtext_bold text-xl  
      "
      >
        {short_name ? short_name : "NO DATA"}
      </h1>

      <Image
        src={image_url ? image_url : "/images/placeholder.png"}
        alt={short_name ? short_name : "NO DATA"}
        width={500}
        height={500}
        className="w-[80%] "
      />

      <button
        className="w-[50%] h-[3rem]  
        absolute bottom-4 right-0 left-0 
        mx-auto "
      >
        {/* MORE INFO */}
        <a
          href="#_"
          className="relative inline-flex items-center justify-center 
          w-full h-full overflow-hidden font-andantedtext_regular
          tracking-tighter text-white bg-black rounded-lg group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[var(--main-red)] rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">MORE INFO</span>
        </a>
      </button>
    </div>
  );
};
