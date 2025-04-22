'use client';

import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGooglePlusG, FaEnvelope, FaPhoneAlt, FaListUl, FaTimes, FaSearch } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { formatPathname } from '@/helper/formatPathname';
import Header from '../common/header/Header';

const HeroSection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);
  const pathname = usePathname();
  const prettyPath = formatPathname(pathname)
  return (
    <section className="relative w-full h-[400px]">
     <Header/>
      {/* Hero Slider */}
      <Swiper className="w-full h-full">
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/images/slide-4.jpg" className="w-full h-full object-cover" alt="Slide 1" />
            <div className="absolute inset-0 flex flex-col justify-center items-center mt-20 p-6 text-white text-center">
              <h1 className="text-[48px]">Upcoming Event</h1>
              <div className="bg-[#6a994e] my-4 w-[70px] h-[2px]"></div>
              <ol className="flex items-center gap-2 text-[16px] leading-[30px]">
                <li><a href="/">Home</a></li>
             
                <li><a href="#" className="text-[#6a994e]">{prettyPath}</a></li>
              </ol>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
