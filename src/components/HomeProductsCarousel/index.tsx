import "keen-slider/keen-slider.min.css";
import KeenSlider, { KeenSliderInstance, TrackDetails } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import FEWhite from "@/assets/white-FE.png";
import React from "react";

const WheelControls = (slider: {
  container: {
    dispatchEvent: (arg0: CustomEvent<{ x: any; y: any }>) => void;
    addEventListener: (
      arg0: string,
      arg1: (e: any) => void,
      arg2: { passive: boolean }
    ) => void;
  };
  on: (arg0: string, arg1: () => void) => void;
}) => {
  let touchTimeout: string | number | NodeJS.Timeout | undefined;
  let position: { x: any; y: any };
  let wheelActive: boolean;

  function dispatch(e: { deltaX: number; deltaY: number }, name: string) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e: {
    pageX: any;
    pageY: any;
    deltaX: number;
    deltaY: number;
  }) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
  }

  function wheel(e: any) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e: any) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e: {
    preventDefault: () => void;
    pageX: any;
    pageY: any;
    deltaX: number;
    deltaY: number;
  }) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 100);
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};

export const HomeProductsCarousel = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: false,
      rubberband: false,
      vertical: true,
      mode: "snap",
      slides: {
        perView: 1,
        origin: "center",
      },
      slideChanged: (slider) => {
        const slides = Array.from(slider.slides); // Get all the slides
        const currentSlideIndex = slides.findIndex((slide) => slide.classList.contains('keen-slider__slide--active'));
        console.log(currentSlideIndex);
        slides.forEach((slide, index) => {
          slide.classList.toggle('keen-slider__slide--inactive', slide.classList.contains('keen-slider__slide--active'));
          slide.classList.toggle('keen-slider__slide--active',  !slide.classList.contains('keen-slider__slide--inactive'));

        });

      },
    },
    [WheelControls]
  );

  return (
    <div
      ref={sliderRef}
      className="keen-slider custom-keen !w-1/2 h-full flex justify-center items-center
    relative z-0"
    >
      <div className="keen-slider__slide keen-slider__slide--active flex justify-center items-center">
        <Image
          src={FEWhite.src}
          alt="Fire Extinguisher White"
          width={1000}
          height={1000}
          className=" custom-keen absolute w-[600px] h-[600px] rotate-[30deg]"
        />
      </div>

      <div className="keen-slider__slide keen-slider__slide--inactive flex justify-center items-center">
        <Image
          src={FEWhite.src}
          alt="Fire Extinguisher White"
          width={1000}
          height={1000}
          className=" custom-keen absolute w-[600px] h-[600px] rotate-[30deg]"
        />
      </div>
      <div className="keen-slider__slide keen-slider__slide--active flex justify-center items-center">
        <Image
          src={FEWhite.src}
          alt="Fire Extinguisher White"
          width={1000}
          height={1000}
          className=" custom-keen absolute w-[600px] h-[600px] rotate-[30deg]"
        />
      </div>
    </div>
  );
};
