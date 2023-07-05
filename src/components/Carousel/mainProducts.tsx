import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import FEWhite from "@/assets/white-FE.png";

export const MainProductsCarousel = () => {
  const [slide1, setSlide1] = useState<any>(null);
  const [slide2, setSlide2] = useState<any>(null);

  const settingsSlide1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  const settingsSlide2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    swipeToSlide: true,
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
            />
          </div>
        </div>
        <div
          className=" w-full h-[100vh] 
        !flex justify-center items-center !border-none"
        >
          <div>
            <Image
              src={FEWhite.src}
              alt="Fire Extinguisher White"
              width={1000}
              height={1000}
              className="w-[600px] h-[600px] rotate-[30deg]"
            />
          </div>
        </div>
        <div
          className=" w-full h-[100vh] 
        !flex justify-center items-center !border-none"
        >
          <div>
            <Image
              src={FEWhite.src}
              alt="Fire Extinguisher White"
              width={1000}
              height={1000}
              className="w-[600px] h-[600px] rotate-[30deg]"
            />
          </div>
        </div>
      </Slider>

      <Slider
        asNavFor={slide1}
        {...settingsSlide2}
        className="w-[100vw] bottom-0 right-0 h-full flex flex-col !absolute
          -z-10"
        ref={(slider2) => setSlide2(slider2)}
      >
        <div
          className="w-full h-[100vh] m-0
          !flex justify-center items-center
        "
        >
          <h1
            className="text-[20rem] cus-title-color  
        font-victor text-center"
          >
            MDO1
          </h1>
        </div>
        <div
          className=" w-full h-[100vh]  m-0
        !flex justify-center items-center"
        >
          <h1
            className="text-[20rem] cus-title-color  
        font-victor text-center"
          >
            MDO2
          </h1>
        </div>
        <div
          className=" w-full h-[100vh]  m-0
        !flex justify-center items-center"
        >
          <h1
            className="text-[20rem] cus-title-color  
        font-victor text-center"
          >
            MDO3
          </h1>
        </div>
      </Slider>
    </div>
  );
};
