"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getMetaValueByMetaName } from "@/helper/metaHelpers";

const NoticeSection = ({ notices,notice_heading,settings }) => {
const noticeButton = getMetaValueByMetaName(settings, "notice_button") || "";

  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-[#80B918] text-lg font-semibold uppercase mb-2">
           {notice_heading?.title}
          </h3>
          <h2 className="text-4xl font-bold text-gray-800">
            {notice_heading?.sub_title}
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
          {notices?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm relative">
                <div className="absolute top-4 left-6 text-[#80B918] text-4xl opacity-20">
                  ❝
                </div>
              <Link
              href={`/notice/${item?.slug}`}
              >
                <blockquote className="text-gray-800 font-serif text-lg md:text-xl italic text-center leading-relaxed z-10 relative">
                  {item?.name}
                </blockquote>
                <div className="mt-4 text-center text-sm text-gray-500 font-medium">
                  {item?.sub_title}
                </div></Link>
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
