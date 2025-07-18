"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Include Autoplay module
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const HomeSlider = ({ sliders }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="hidden md:flex absolute z-10 top-1/2 left-0 -translate-y-1/2 
        bg-[#00401A] text-white w-12 h-20 justify-center items-center rounded-r-[50px] 
        shadow-md hover:bg-green-900 transition"
      >
        <span className="text-2xl">{"‹"}</span>
      </button>

      <button
        ref={nextRef}
        className="hidden md:flex absolute z-10 top-1/2 right-0 -translate-y-1/2 
        bg-[#00401A] text-white w-12 h-20 justify-center items-center rounded-l-[50px] 
        shadow-md hover:bg-green-900 transition"
      >
        <span className="text-2xl">{"›"}</span>
      </button>

      <Swiper
        modules={[Navigation, Autoplay]} // ✅ Add Autoplay
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false, // Keeps autoplay running after manual navigation
        }}
        loop={true} // ✅ Recommended for autoplay
        className="w-full h-full"
      >
        {sliders.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[500px] lg:h-[650px]">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-[1]"></div>

              <Image
                src={slide?.featured_image}
                alt={`Slide ${i + 1}`}
                layout="fill"
                objectFit="cover"
                className="z-0"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center pt-[250px] pb-[200px] text-white text-center z-[2]">
                <div className="w-[80%] lg:max-w-[50%] flex flex-col items-center pt-[100px]">
                  <h3 className="text-[35px] mt-1">{slide?.name}</h3>
                  <Image
                    src="/images/pshape.png"
                    alt="shape"
                    className="pt-4 pb-2"
                    width={100}
                    height={15}
                  />
                  <span className="font-semibold text-[18px] mt-4">
                    {slide?.sub_title}
                  </span>
                  <Link
                    href={`/quote/${slide?.slug}`}
                    className="bg-[#00401A] hover:bg-[#80b918] mt-6 px-10 py-3 rounded-md font-bold text-sm transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
