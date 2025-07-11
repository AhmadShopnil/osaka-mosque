"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Quran_Hadith_Section = ({ quotes,quran_hadith_heading }) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-[#80B918] text-lg font-semibold uppercase mb-2">
           {quran_hadith_heading?.title}
          </h3>
          <h2 className="text-4xl font-bold text-gray-800">
            {quran_hadith_heading?.sub_title}
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="max-w-3xl mx-auto"
        >
          {quotes?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm relative">
                <div className="absolute top-4 left-6 text-[#80B918] text-4xl opacity-20">
                  ❝
                </div>
                <blockquote className="text-gray-800 font-serif text-lg md:text-xl italic text-center leading-relaxed z-10 relative">
                  {item?.name}
                </blockquote>
                <div className="mt-4 text-center text-sm text-gray-500 font-medium">
                  {item?.sub_title}
                </div>
                <div className="absolute bottom-4 right-6 text-[#80B918] text-4xl opacity-20">
                  ❝
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/quote"
            className="bg-[#00401A] hover:bg-[#80B918] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition duration-300"
          >
            See All Quotes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Quran_Hadith_Section;
