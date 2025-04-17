'use client';

import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGooglePlusG, FaEnvelope, FaPhoneAlt, FaListUl, FaTimes, FaSearch } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { formatPathname } from '@/helper/formatPathname';

const HeroSection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);
  const pathname = usePathname();
  const prettyPath = formatPathname(pathname)
  return (
    <section className="relative w-full h-[400px]">
      {/* Social & Contact Section */}
      <div className="absolute top-0 right-0 left-0 z-10 flex md:flex-row flex-col justify-center items-center h-[38px] lg:h-auto lg:py-[15px] text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex md:flex-row flex-col justify-between lg:items-center gap-2 md:gap-4 h-full">

            {/* Mobile Social + Search */}
            <div className="block lg:hidden w-full">
              <div className="flex items-center text-[14px] leading-[30px]">
                {[FaTwitter, FaFacebookF, FaLinkedinIn, FaGooglePlusG].map((Icon, idx) => (
                  <a key={idx} href="#" className="h-[38px] w-[38px] px-2 flex justify-center items-center bg-[rgb(61,61,61)] mr-[1px] hover:bg-[#80b918]">
                    <Icon size={12} className="text-white" />
                  </a>
                ))}
                <input className="outline-none text-[12px] italic text-white px-2 border-none h-full w-full bg-transparent" placeholder="Enter your keyword" type="text" />
                <FaSearch size={12} className="text-white ml-2" />
              </div>
            </div>

            {/* Desktop Social Icons */}
            <div className="lg:block hidden">
              <div className="flex items-center text-[14px] leading-[30px]">
                <span className="mr-[15px]">Follow us:</span>
                {[FaTwitter, FaFacebookF, FaLinkedinIn, FaGooglePlusG].map((Icon, idx) => (
                  <a key={idx} href="#" className="mx-[10px] hover:text-[#80b918] duration-500">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:block hidden">
              <div className="flex md:flex-row flex-col items-center text-[12px] gap-4">
                <div className="flex items-center group">
                  <FaEnvelope className="text-white mr-[10px] group-hover:text-[#80b918] duration-500" />
                  <span className="group-hover:text-[#80b918] duration-500">info@bismillah.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-white mr-[10px]" />
                  <span>+(00) 123-345-11</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="absolute top-[38px] lg:top-[60px] bg-black/20 right-0 left-0 z-30">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className=" ">
            <img className="lg:w-[173px] w-[160px] lg:py-[15px] py-[10px] object-cover" src="/images/logo1.png" alt="logo" />
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setSidebarOpen(true)} className="md:hidden text-white text-2xl h-[40px] w-[40px] flex justify-center items-center bg-[#80b918] hover:bg-[#00401A] duration-700">
            <FaListUl size={13} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex ">
            <ul className="flex gap-6 text-white text-sm">
              <li><a href="/" className="hover:text-red-400">Home</a></li>
              <li className="relative group">
                <button className="flex items-center gap-1">
                  Event
                  <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <ul className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-500 mt-2 bg-white text-black min-w-[180px] shadow-lg transition-all">
                <li>
                    <Link
                      href="/events/upcoming"
                      className="block px-4 py-2 hover:text-[#00401A]"
                    >
                      Upcoming Events
                    </Link>
                  </li>
                  <li>
                    <Link
                     href="/events/past"
                      className="block px-4 py-2 hover:text-[#00401A]"
                    >
                      Past Events
                    </Link>
                  </li>
                  <li><Link href="#" className="block hover:bg-gray-200 px-4 py-2">Event Gallery</Link></li>
                </ul>
              </li>
              <li><a href="#">Our Courses</a></li>
              <li><a href="#">Our Services</a></li>
              <Link href="/contact">Contact</Link>
            </ul>
          </nav>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 z-50 w-64 h-full bg-black shadow-lg transition-all duration-300 ${sidebarOpen ? 'right-0' : 'right-[-100%]'}`}>
        <div className="flex justify-end px-6 py-4 border-b">
          <button onClick={() => setSidebarOpen(false)} className="text-2xl text-white ml-auto duration-700 h-[40px] w-[40px] hover:bg-[#6a994e] bg-[#303030] flex items-center justify-center">
            <FaTimes size={13} />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-6 text-white">
          <li><a href="/" className="hover:text-red-500">Home</a></li>
          <li>
            <button onClick={() => setEventDropdownOpen(!eventDropdownOpen)} className="w-full flex justify-between items-center">
              Event <span>{eventDropdownOpen ? '▲' : '▼'}</span>
            </button>
            {eventDropdownOpen && (
              <ul className="pl-4 mt-2 border-l-2 border-gray-300">
                <li><a href="/event.html" className="block py-1">Upcoming Events</a></li>
                <li><a href="#" className="block py-1">Past Events</a></li>
                <li><a href="#" className="block py-1">Event Gallery</a></li>
              </ul>
            )}
          </li>
          <li><a href="#" className="hover:text-red-500">Our Courses</a></li>
          <li><a href="#" className="hover:text-red-500">Our Services</a></li>
          <li><a href="#" className="hover:text-red-500">Contact</a></li>
        </ul>
      </div>

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
