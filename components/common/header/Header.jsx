"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaListUl,
  FaTimes,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import {
  getMediaLinkByMetaName,
  getMetaValueByMetaName,
} from "@/helper/metaHelpers";
import Image from "next/image";
import GoogleTranslate from "@/components/shared/GoogleTranslate";
import GoogleTranslateCustom from "@/components/shared/GoogleTranslateCustom";

const Header = ({ settings }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phone = getMetaValueByMetaName(settings, "company_phone") || "";
  const company_email = getMetaValueByMetaName(settings, "company_email") || "";
  const facebookLink = getMetaValueByMetaName(settings, "facebook_url") || "#";
  const linkedinLink = getMetaValueByMetaName(settings, "linkedin_url") || "#";
  const instagramLink = getMetaValueByMetaName(settings, "instagram_url") || "#";
  const logo = getMediaLinkByMetaName(settings, "site_logoimg_id");

  return (
    <div>

      {/* Top Contact & Social */}
      <div className="top-0 right-0 left-0 z-50 absolute flex md:flex-row flex-col justify-center items-center lg:py-[15px] h-[38px] lg:h-auto text-white text-center">
        <div className="mx-auto px-4 container">
          <div className="flex md:flex-row flex-col justify-between lg:items-center gap-2 md:gap-4 h-full">
            <div className="md:hidden block w-full">
              <div className="flex items-center text-[14px] leading-[30px]">
                <a href={facebookLink} className="mx-[10px] hover:text-[#80b918] duration-500"><FaFacebookF /></a>
                <a href={linkedinLink} className="mx-[10px] hover:text-[#80b918] duration-500"><FaLinkedinIn /></a>
                <a href={instagramLink} className="mx-[10px] hover:text-[#80b918] duration-500"><FaInstagram /></a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center text-[14px] leading-[30px]">
                <span className="mr-[15px]">Follow us:</span>
                <a href={facebookLink} className="mx-[10px] hover:text-[#80b918] duration-500"><FaFacebookF /></a>
                <a href={linkedinLink} className="mx-[10px] hover:text-[#80b918] duration-500"><FaLinkedinIn /></a>
                <a href={instagramLink} className="mx-[10px] hover:text-[#80b918] duration-500"><FaInstagram /></a>
              </div>
            </div>
            <div className="hidden md:block z-50">
              <div className="flex md:flex-row flex-col items-center gap-4 text-[12px]">
                <div className="group flex items-center">
                  <FaEnvelope className="mr-[10px] text-white group-hover:text-[#80b918] duration-500" />
                  <span className="group-hover:text-[#80b918] duration-500">{company_email}</span>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="mr-[10px] text-white" />
                  <span>{phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div
        ref={navbarRef}
        className={`right-0 left-0 z-60 transition-all duration-300 ${isSticky ? "fixed top-0 shadow-md  bg-[#00401A]" : "absolute top-[38px] lg:top-[60px] bg-black/20"
          }`}
      >
        <div className="flex justify-between items-center mx-auto px-4 container">
          {/* Logo */}
          <Link href="/" className="overflow-hidden cursor-pointer">
            {logo ? (
              <Image src={`https://admin.osakamasjid.org${logo}`} alt="Logo" width={80} height={20} />
            ) : (
              <Image src="/images/logo1.png" alt="Logo" width={80} height={20} />
            )}
          </Link>

          {/* Mobile Button */}
          {!sidebarOpen && <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden flex justify-center items-center bg-[#80b918] hover:bg-[#00401A] w-[40px] h-[40px] text-white text-2xl duration-700"
          >
            <FaListUl size={13} />
          </button>}

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-md text-white">
              {/* Home */}
              <li className="group relative">
                <Link href="/" className="inline-block relative px-1 py-2 hover:text-green-800 transition-all duration-500">
                  <span className="z-10 relative">Home</span>
                  <span className="top-0 left-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                  <span className="right-0 bottom-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                </Link>
              </li>

              {/* Event Dropdown */}
              <li className="group relative">
                <button className="inline-flex relative items-center gap-1 px-1 py-2">
                  <span className="z-10 relative hover:text-green-800 transition-all duration-500">Event</span>
                  <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="top-0 left-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                  <span className="right-0 bottom-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                </button>
                <ul className="invisible group-hover:visible z-50 absolute bg-white opacity-0 group-hover:opacity-100 shadow-lg mt-2 min-w-[180px] text-black transition-all duration-500">
                  <li><Link href="/events/upcoming" className="block px-4 py-2 hover:text-green-700">Upcoming Events</Link></li>
                  <li><Link href="/events/past" className="block px-4 py-2 hover:text-green-700">Past Events</Link></li>
                  <li><Link href="/events/event-calendar" className="block px-4 py-2 hover:text-green-700">Event Calendar</Link></li>
                </ul>
              </li>

              {/* Other Menu Items */}
              <li className="group relative">
                <Link href="/blogs" className="inline-block relative px-1 py-2 hover:text-green-800 transition-all duration-500">
                  <span className="z-10 relative">Blogs</span>
                  <span className="top-0 left-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                  <span className="right-0 bottom-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link href="/scholars" className="inline-block relative px-1 py-2 hover:text-green-800 transition-all duration-500">
                  <span className="z-10 relative">Scholars</span>
                  <span className="top-0 left-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                  <span className="right-0 bottom-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link href="/#donation" className="inline-block relative px-1 py-2 hover:text-green-800 transition-all duration-500">
                  <span className="z-10 relative">Donation</span>
                  <span className="top-0 left-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                  <span className="right-0 bottom-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                </Link>
              </li>
              <li className="group relative">
                <Link href="/contact" className="inline-block relative px-1 py-2 hover:text-green-800 transition-all duration-500">
                  <span className="z-10 relative">Contact</span>
                  <span className="top-0 left-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                  <span className="right-0 bottom-0 absolute bg-green-800 w-0 group-hover:w-full h-[2px] transition-all duration-500"></span>
                </Link>
              </li>

              {/* <li className="">
                <GoogleTranslate />
              </li> */}
              {/* <GoogleTranslate/> */}

            </ul>
            <div className="ml-3"><GoogleTranslateCustom /></div>
            
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-80 w-64 h-full bg-black shadow-lg transition-all duration-500 ${sidebarOpen ? "right-0" : "right-[-100%]"
          }`}
      >
        <div className="flex justify-end px-6 py-4 border-b">
          <button
            onClick={() => setSidebarOpen(false)}
            className="flex justify-center items-center bg-[#303030] hover:bg-[#6a994e] ml-auto w-[40px] h-[40px] text-white text-2xl duration-700"
          >
            <FaTimes size={13} />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-6 text-white">
          <li>
            <Link href="/" className="hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={() => setEventDropdownOpen(!eventDropdownOpen)}
              className="flex justify-between items-center w-full"
            >
              Event <span>{eventDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {eventDropdownOpen && (
              <ul className="mt-2 pl-4 border-gray-300 border-l-2">
                <li>
                  <Link href="/events/upcoming" className="block py-1">
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-1">
                    Past Events
                  </Link>
                </li>
                <li>
                  <Link href="/events/event-calendar" className="block py-1">
                    Event Calendar
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/scholars" className="hover:text-red-500">
              Scholars
            </Link>
          </li>
          <li>
            <Link href="/#donation" className="hover:text-red-500">
              Donation
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-red-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>



    </div>
  );
};

export default Header;
