import { useIsomorphicLayoutEffect } from "@/hooks/uselsomorphicLayout";
import { LineVertical } from "../LineVertical";
import { gsap } from "gsap";

export const BannerHome = () => {

  useIsomorphicLayoutEffect(() => {

    gsap.from('.banner', {
      scrollTrigger: '.banner-container',
      scaleY: 0,
      duration: 2,
      ease: "power4.inOut",
    });

  }, []);

  return (
    <div
      className="w-full h-[40vh] bg-black relative z-10 
      banner-container"
    >

      <LineVertical left banner />
      <LineVertical middleBanner banner />
      <LineVertical right banner />
    </div>
  );
};
