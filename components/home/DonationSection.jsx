"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getImageUrl } from "@/helper/getImageUrl";

const DonationSection = ({ make_your_donation,donationMethods }) => {
  const image = getImageUrl(make_your_donation?.image_media);

// console.log("donationMethods----",donationMethods)


  const slideImages = [
    "/images/car-img1-2.jpg",
    "/images/car-img1-2.jpg",
    "/images/car-img1-2.jpg",
  ];


  const [activeTab, setActiveTab] = useState(donationMethods[0]);

  return (
    <section className="relative">
      <div
        className="relative bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/parallax3.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#f8f9fa] opacity-80 z-0" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 z-10">
          {/* Slider */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-40 z-10 rounded-md" />

            <Swiper
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              modules={[Navigation]}
              className="w-full h-full relative z-0"
            >
              {slideImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image || img}
                    alt={`Slide ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Donation Info */}
          <div className="py-10 container mx-auto px-4">
            <div className="w-full mb-[20px]">
              <span className="mb-[5px] text-[#00401A] text-[20px]">
                {make_your_donation?.sub_title}
              </span>
              <h2 className="mt-2 text-[#222] text-[38px] md:text-[42px] lg:text-[48px] leading-12">
                {make_your_donation?.title}
              </h2>
              <Image
                className="mt-4"
                src="/images/pshape.png"
                alt="Design Shape"
                width={80}
                height={10}
              />
            </div>

            {/* Tab Buttons */}
            <div className="flex gap-3 flex-wrap mt-6">
              {donationMethods.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md font-semibold text-sm border transition duration-300 ${
                    activeTab?.name === tab?.name
                      ? "bg-[#00401A] text-white border-[#00401A]"
                      : "text-[#00401A] border-[#00401A] hover:bg-[#00401A] hover:text-white"
                  }`}
                >
                  {tab?.name}
                </button>
              ))}
              
            </div>

            {/* Bank Info */}
            <div className="mt-6 bg-white rounded-md shadow p-6 border border-gray-100 text-[#222]">
              <h4 className="text-xl font-bold mb-4 text-[#00401A]">
                Bank Information
              </h4>
              <div
              className="text-[#666] text-[16px]"
              dangerouslySetInnerHTML={{
                __html: activeTab?.description,
              }}
            />
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
