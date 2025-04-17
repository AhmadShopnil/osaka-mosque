"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
  FaEnvelope,
  FaPhoneAlt,
  FaListUl,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const HeroSectionHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleEventDropdown = () => setEventDropdownOpen(!eventDropdownOpen);

  const slides = [1, 2, 3, 4];

  return (
    <section className="relative w-full h-screen">
      {/* Social & Contact Section */}
      <div className="absolute top-0 right-0 left-0 z-10 flex md:flex-row flex-col justify-center items-center h-[38px] lg:h-auto lg:py-[15px] text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex md:flex-row flex-col justify-between lg:items-center gap-2 md:gap-4 h-full">
            {/* Mobile Social + Search */}
            <div className="block lg:hidden w-full">
              <div className="flex items-center text-[14px] leading-[30px]">
                {[FaTwitter, FaFacebookF, FaLinkedinIn, FaGooglePlusG].map(
                  (Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="h-[38px] w-[38px] px-2 flex justify-center items-center bg-[rgb(61,61,61)] mr-[1px] hover:bg-[#80b918]"
                    >
                      <Icon size={12} className="text-white" />
                    </a>
                  )
                )}
                <input
                  className="outline-none text-[12px] italic text-white px-2 border-none h-full w-full bg-transparent"
                  placeholder="Enter your keyword"
                  type="text"
                />
                <FaSearch size={12} className="text-white ml-2" />
              </div>
            </div>

            {/* Desktop Social Icons */}
            <div className="lg:block hidden">
              <div className="flex items-center text-[14px] leading-[30px]">
                <span className="mr-[15px]">Follow us:</span>
                {[FaTwitter, FaFacebookF, FaLinkedinIn, FaGooglePlusG].map(
                  (Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="mx-[10px] hover:text-[#80b918] duration-500"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:block hidden">
              <div className="flex md:flex-row flex-col items-center text-[12px] gap-4">
                <div className="flex items-center group">
                  <FaEnvelope className="text-white mr-[10px] group-hover:text-[#80b918] duration-500" />
                  <span className="group-hover:text-[#80b918] duration-500">
                    info@bismillah.com
                  </span>
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
      <div className="absolute top-[38px] lg:top-[60px] bg-black/20 w-full z-30">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="w-[160px] lg:w-[173px] py-[10px] lg:py-[15px]">
            <Image
              src="/images/logo1.png"
              alt="logo"
              width={173}
              height={60}
              className="object-cover"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white text-2xl h-10 w-10 flex justify-center items-center bg-[#80b918] hover:bg-[#00401A] transition"
          >
            <i className="fa fa-list-ul text-sm font-bold"></i>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6 text-white text-sm">
              <li>
                <a href="/" className="hover:text-red-400">
                  Home
                </a>
              </li>
              <li className="relative group">
                <span className="cursor-pointer flex items-center gap-1">
                  Event
                  <svg
                    className="w-4 h-4 group-hover:rotate-180 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4-4-4a1 1 0 010-1.414z" />
                  </svg>
                </span>
                <ul className="absolute mt-2 invisible group-hover:visible group-hover:opacity-100 opacity-0 bg-white min-w-[180px] text-black shadow-lg transition-all duration-300">
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
                  <li>
                    <Link
                      href="#"
                      className="block hover:bg-gray-200 px-4 py-2"
                    >
                      Event Gallery
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Our Courses</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black z-50 transition-all duration-300 ${
          sidebarOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <div className="flex justify-end p-4 border-b">
          <button
            onClick={toggleSidebar}
            className="text-white h-10 w-10 flex justify-center items-center bg-[#303030] hover:bg-[#6a994e] transition"
          >
            <i className="fa fa-times text-sm"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-6 text-white">
          <li>
            <a href="/" className="hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <button
              onClick={toggleEventDropdown}
              className="flex justify-between items-center w-full"
            >
              Event
              <span>{eventDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {eventDropdownOpen && (
              <ul className="pl-4 mt-2 border-l border-gray-300">
                <li>
                  <a href="/event.html" className="block py-1">
                    Upcoming Events
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1">
                    Past Events
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1">
                    Event Gallery
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="hover:text-red-500">
              Our Courses
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500">
              Our Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Swiper */}
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
    </section>
  );
};

export default HeroSectionHome;
