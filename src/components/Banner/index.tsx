import { useIsomorphicLayoutEffect } from "@/hooks/uselsomorphicLayout";
import { LineVertical } from "../LineVertical";
import { gsap } from "gsap";
import Image from "next/image";
import bannerImg from "@/assets/banner.png";
import { HomeButton } from "../Button/home-btn";

export const BannerHome = () => {
  useIsomorphicLayoutEffect(() => {
    const animation = gsap.from(".banner", {
      scrollTrigger: ".banner-container",
      scaleY: 0,
      duration: 2,
      ease: "power4.inOut",
    });
    return () => {
      animation.kill();
    }
  }, []);

  return (
    <div
      className="w-full h-[40vh] bg-black relative z-10 
      banner-container flex "
    >
      <LineVertical left banner />
      <LineVertical middleBanner banner />
      <LineVertical right banner />

      <div className="w-1/2 h-full">
        <div
          className=" flex justify-center
        items-end flex-col h-full gap-5"
        >
          <div
            className="w-[60%] mr-[5rem]
          text-[var(--main-red)] font-andantedisplay_bold text-3xl"
          >
            INNOVATIVE AEROSOL FIRE EXTINGUISHING SYSTEM
          </div>
          <p
            className="w-[60%] mr-[5rem]
          font-magazinegrotesque_regular text-white"
          >
            DSPA FIXED AEROSOL EXTINGUISHING SYSTEMS
          </p>
          <div className="w-[60%] mr-[5rem] ">
            <HomeButton/>
          </div>
        </div>
      </div>
      <Image
        src={bannerImg.src}
        className="w-1/2 h-full"
        width={2225}
        height={927}
        alt="Banner"
        priority
      />
    </div>
  );
};
