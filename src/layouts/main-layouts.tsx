import localFontLibrary from "@/fonts/local-fonts";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from "@/hooks/uselsomorphicLayout";


interface MainLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });


export const MainLayouts = ({ children }: MainLayoutProps) => {
  const [fonts, setFonts] = useState<string>('');

  useIsomorphicLayoutEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        ease: 'power4.inOut',
        duration: 1
      }
    });
    timeline.from('.line', {scaleY: 0, duration: 2})

    return () => {
      timeline.kill();
      timeline.revert();
    }
  }, [])

  useEffect(() => {
    let localFont: string = '';
    Object.values(localFontLibrary).forEach((font: any) => {
      const variable = font.variable
      localFont += variable;
      localFont += ' ';
    });
    setFonts(localFont);
  }, [])

  return (         
    <div
      className={`
      ${inter.className}
      ${fonts}
      `}
    >
      <nav className="w-full h-[80px]  flex fixed">
        <div className="w-1/2 h-full text-center
        flex items-center justify-center">
          <h1 className="text-4xl font-futura_bold tracking-wider text-[var(--main-red)]  ">DaiAnCo.</h1>
        </div>    
        <ul className="w-full h-full flex flex-row items-center justify-center gap-10">
          <li className="text-white font-andantedisplay_bold text-md navChild">HOME</li>
          <li className="text-white font-andantedisplay_bold text-md navChild">PRODUCT</li>
          <li className="text-white font-andantedisplay_bold text-md navChild">SERVICE</li>
          <li className="text-white font-andantedisplay_bold text-md navChild">CONTACT</li>
          <li className="text-white font-andantedisplay_bold text-md navChild">LOGIN</li>
        </ul>
      </nav>
      <video
        autoPlay
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
}