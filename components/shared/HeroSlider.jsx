'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSlider = () => {
  const slides = [1, 2, 3, 4]; // repeatable slides

  return (
    <div className="w-full h-full swiper mySwiper relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className="swiper-wrapper"
      >
        {slides.map((_, index) => (
          <SwiperSlide key={index} className="relative swiper-slide">
            <img
              src="images/slide-4.jpg"
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center pt-[250px] pb-[200px] text-white text-center">
              <div className="flex flex-col justify-center items-center pt-[100px] w-[80%] lg:max-w-[50%]">
                <img src="images/bsml-txt.png" alt="Bismillah" />
                <h1 className="mt-[10px]">
                  <img src="images/ayat-txt.png" alt="Ayat" />
                </h1>
                <img className="pt-4 pb-2" src="images/pshape.png" alt="PShape" />
                <h3 className="text-[35px] mt-[3px]">
                  He Raised the Sky and Set Up the Balance
                </h3>
                <span className="font-semibold text-[18px] mt-[15px]">
                  (Surah Al-Rahmaan Verse 7)
                </span>
                <a
                  href="#"
                  className="bg-[#00401A] hover:bg-[#80b918] mt-[30px] px-[45px] py-[14px] rounded-md font-bold text-[15px] transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Nav Buttons */}
      <div className="text-white swiper-button-prev"></div>
      <div className="text-white swiper-button-next"></div>
    </div>
  );
};

export default HeroSlider;
