import { MainProductsCarousel } from "@/components/Carousel/mainProducts";
import { LineVertical } from "@/components/LineVertical";
import MouseScroll from "@/assets/mouseScroll.png";
import Image from "next/image";
import * as Scroll from "react-scroll";

const Frame1 = () => {
  return (
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

      <Scroll.Link to={"frame2"} smooth={true} >
        <Image
          src={MouseScroll.src}
          alt="Mouse Scroll"
          width={64}
          height={64}
          className="absolute w-[3rem] bottom-4 mx-auto left-0 right-0
          cursor-pointer z-0"
        />
      </Scroll.Link>

      <MainProductsCarousel />
    </div>
  );
};

export default Frame1;
