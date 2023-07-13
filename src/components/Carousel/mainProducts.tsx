import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import FEWhite from "@/assets/white-FE.png";
import SecurityProduct from "@/assets/security-product.png";

export const MainProductsCarousel = () => {
  const [slide1, setSlide1] = useState<any>(null);
  const [slide2, setSlide2] = useState<any>(null);

  const settingsSlide1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    initialSlide: 0,
    centerMode: false,
  };

  const settingsSlide2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    initialSlide: 0,
    centerMode: false,
  };

  return (
    <div className="w-1/2 h-full relative ">
      <Slider
        asNavFor={slide2}
        {...settingsSlide1}
        className="w-full h-full overflow-hidden  
        flex flex-col gap-2 relative z-0"
        ref={(slider1) => setSlide1(slider1)}
      >
        <div
          className=" w-full h-[100vh] 
        !flex justify-center items-center !border-none
        "
        >
          <div>
            <Image
              src={FEWhite.src}
              alt="Fire Extinguisher White"
              width={1000}
              height={1000}
              className="w-[600px] h-[600px] rotate-[30deg]"
              priority
            />
          </div>
        </div>
        <div
          className=" w-full h-[100vh] 
        !flex justify-center items-center !border-none"
        >
          <div>
            <Image
              src="https://atctpwmqlndnpmrxwsds.supabase.co/storage/v1/object/public/productImage/3.png"
              alt="Fire Extinguisher White"
              width={1000}
              height={1000}
              className="w-[400px] h-[400px] rotate-[30deg]"
              priority
            />
          </div>
        </div>
        <div
          className=" w-full h-[100vh] 
        !flex justify-center items-center !border-none"
        >
          <div>
            <Image
              src={SecurityProduct.src}
              alt="Fire Extinguisher White"
              width={1000}
              height={1000}
              className="w-[600px] h-[600px] rotate-[30deg]"
              priority
            />
          </div>
        </div>
      </Slider>

      <Slider
        asNavFor={slide1}
        {...settingsSlide2}
        className="w-[100vw] bottom-0 right-0 h-[100vh]  !absolute
          -z-10"
        ref={(slider2) => setSlide2(slider2)}
      >
        <div
          className="w-full h-[100vh] m-0
          !flex justify-center items-center
        "
        >
          <h1
            className="text-[10rem] cus-title-color  
            font-andantedisplay_bold  text-center "
          >
            FIRE EXTINGUISHING SYSTEMS
          </h1>
        </div>
        <div
          className=" w-full h-[100vh]  m-0
        !flex justify-center items-center"
        >
          <h1
            className="text-[10rem] cus-title-color  
            font-andantedisplay_bold text-center"
          >
            ADDRESSABLE FIRE ALARM SYSTEMS
          </h1>
        </div>
        <div
          className=" w-full h-[100vh]  m-0
        !flex justify-center items-center"
        >
          <h1
            className="text-[10rem] cus-title-color  
            font-andantedisplay_bold text-center"
          >
            SECURITY PROTECTION SYSTEMS
          </h1>
        </div>
      </Slider>
    </div>
  );
};
