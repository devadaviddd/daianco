import localFontLibrary from "@/fonts/local-fonts";
import { Inter } from "next/font/google";
import { gsap } from "gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/uselsomorphicLayout";
import { ReactNode } from "react";
import { NavBar } from "@/components/Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MainLayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const MainLayouts = ({ children }: MainLayoutProps) => {
  useIsomorphicLayoutEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 1,
      },
    });
    timeline.from(".line", { scaleY: 0, duration: 2 });

    return () => {
      timeline.kill();
      timeline.revert();
    };
  }, []);

  return (
    <div
      className={`
      ${inter.className}
      ${Object.values(localFontLibrary)
        .map((font) => font.variable)
        .join(" ")}
      w-[100vw]
      overflow-x-hidden
      `}
    >
      <NavBar />
      <video
        autoPlay
        key={'video'}
        loop
        muted 
        className="w-full h-full object-cover absolute -z-10  "
        
      >
        <source
          src="https://static.vecteezy.com/system/resources/previews/007/525/563/mp4/loop-of-smoke-fire-sparks-rising-up-particle-free-video.mp4"
          type="video/mp4"
          
        />
      </video>
      {children}
    </div>
  );
};
