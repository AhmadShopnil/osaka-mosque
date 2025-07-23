"use client";

import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { formatPathname } from "@/helper/formatPathname";
import Header from "../common/header/Header";
import { getSettings } from "@/helper/getSettings";
import axiosInstance from "@/helper/axiosInstance";

const HeroSection = ({ heroData , }) => {
   const [settings, setSettings] = useState([]);
  const { title } = heroData;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);
  const pathname = usePathname();
  const prettyPath = formatPathname(pathname);
  

  
  useEffect(() => {
    axiosInstance
      .get("/frontend/settings")
      .then((response) => {
        setSettings(response.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching settings:", error);
      });

   
  }, []);
// const settings=getSettings()
  
// console.log("settings",settings)

  return (
    <section className="relative w-full h-[420px]">
      <Header settings={settings} />
      {/* Hero Slider */}
      <Swiper className="w-full h-full">
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/images/slide-4.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center mt-40 p-6 text-white text-center">
              <h1 className="text-[48px] ">{title}</h1>
              {/* <div className="bg-[#6a994e] my-4 w-[70px] h-[2px]"></div> */}
              {/* <ol className="flex items-center gap-2 text-[16px] leading-[30px]">
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="#" className="text-[#6a994e]">
                    {prettyPath}
                  </a>
                </li>
              </ol> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
