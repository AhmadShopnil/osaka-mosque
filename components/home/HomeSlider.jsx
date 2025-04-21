import React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const slides = [1, 2, 3, 4];

const HomeSlider = () => {
    return (
        <div>
            <Swiper modules={[Navigation]} navigation className="w-full h-full">
        {slides.map((_, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <Image
                src="/images/slide-4.jpg"
                alt={`Slide ${i + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center pt-[250px] pb-[200px] text-white text-center">
                <div className="w-[80%] lg:max-w-[50%] flex flex-col items-center pt-[100px]">
                  <Image
                    src="/images/bsml-txt.png"
                    alt="Bismillah"
                    width={200}
                    height={40}
                  />
                  <div className="mt-2">
                    <Image
                      src="/images/ayat-txt.png"
                      alt="Ayat"
                      width={250}
                      height={50}
                    />
                  </div>
                  <Image
                    src="/images/pshape.png"
                    alt="shape"
                    className="pt-4 pb-2"
                    width={100}
                    height={15}
                  />
                  <h3 className="text-[35px] mt-1">
                    He Raised the Sky and Set Up the Balance
                  </h3>
                  <span className="font-semibold text-[18px] mt-4">
                    (Surah Al-Rahmaan Verse 7)
                  </span>
                  <a
                    href="#"
                    className="bg-[#00401A] hover:bg-[#80b918] mt-6 px-10 py-3 rounded-md font-bold text-sm transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    );
}

export default HomeSlider;
