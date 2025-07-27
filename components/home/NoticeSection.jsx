"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getMetaValueByMetaName } from "@/helper/metaHelpers";
import Image from "next/image";

const NoticeSection = ({ notices, notice_heading, settings }) => {
  const noticeButton = getMetaValueByMetaName(settings, "notice_button") || "";

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
 <div className="flex flex-col items-center mb-[40px] text-center">
       <h3 className='pb-[5px] text-[#00401A] text-[20px]'>{notice_heading?.sub_title}</h3>
      <h3 className='font-semibold text-[#222] text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px]'>{notice_heading?.title}</h3>
       <Image className="mt-2" src="/images/pshape.png" alt="Design Shape" width={100} height={50} />
     </div>

     
        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="max-w-7xl mx-auto"
        >
          {notices?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border hover:bg-green-100 border-gray-200 p-8 rounded-lg shadow-sm relative h-full">
                <div className="absolute top-4 left-6 text-[#80B918] text-4xl opacity-20">
                  ❝
                </div>
                <Link href={`/notice/${item?.slug}`}>
                  <blockquote className="text-gray-800 font-serif text-lg md:text-xl italic text-center leading-relaxed z-10 relative">
                    {item?.name}
                  </blockquote>
                  <div className="mt-4 text-center text-md text-gray-500 font-medium">
                    {item?.sub_title}
                  </div>
                </Link>
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
            href="/notice"
            className="bg-[#00401A] hover:bg-[#80B918] text-white px-6 py-3 rounded-md text-sm font-semibold shadow-md transition duration-300"
          >
            {noticeButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;
