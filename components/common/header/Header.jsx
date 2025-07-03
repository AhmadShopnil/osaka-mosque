"use client";
import React, { useState } from "react";
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
  FaInstagram,
} from "react-icons/fa";
import "swiper/css";
import Link from "next/link";
import {
  getMediaLinkByMetaName,
  getMetaValueByMetaName,
} from "@/helper/metaHelpers";
import Image from "next/image";

import GoogleTranslateDropdown from "@/components/shared/GoogleTranslateDropdown ";

const Header = ({ settings }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);

 const phone = getMetaValueByMetaName(settings, "company_phone") || "";
  const company_email = getMetaValueByMetaName(settings, "company_email") || "";
  const facebookLink = getMetaValueByMetaName(settings, "facebook_url") || "#";
  const linkedinLink = getMetaValueByMetaName(settings, "linkedin_url") || "#";
  const instagramLink =
    getMetaValueByMetaName(settings, "instagram_url") || "#";
  const youtubeLink = getMetaValueByMetaName(settings, "youtube_url") || "#";
  const footer_content =
    getMetaValueByMetaName(settings, "footer_content") || "";
  const bottom_footer_content =
    getMetaValueByMetaName(settings, "bottom_footer_content") || "";

  const logo = getMediaLinkByMetaName(settings, "site_logoimg_id");

  // console.log("phone", phone)
  // console.log("facebookLink", facebookLink)

  return (
    <div className=" ">
      {/* Social & Contact Section */}
      <div
        className="absolute top-0 right-0 left-0 z-50 flex md:flex-row flex-col justify-center
       items-center h-[38px] lg:h-auto lg:py-[15px] text-white text-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex md:flex-row flex-col justify-between lg:items-center gap-2 md:gap-4 h-full">
            {/* Mobile Social + Search */}
            <div className="block md:hidden w-full">
              <div className="flex items-center text-[14px] leading-[30px]">
                <a
                  href={facebookLink}
                  className="mx-[10px] hover:text-[#80b918] duration-500"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={linkedinLink}
                  className="mx-[10px] hover:text-[#80b918] duration-500"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={instagramLink}
                  className="mx-[10px] hover:text-[#80b918] duration-500"
                >
                  <FaInstagram />
                </a>
                
              </div>
            </div>

            {/* Desktop Social Icons */}
            <div className="md:block hidden">
              <div className="flex items-center text-[14px] leading-[30px]">
                <span className="mr-[15px]">Follow us:</span>
                <a
                  href={facebookLink}
                  className="mx-[10px] hover:text-[#80b918] duration-500"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={linkedinLink}
                  className="mx-[10px] hover:text-[#80b918] duration-500"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={instagramLink}
                  className="mx-[10px] hover:text-[#80b918] duration-500"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:block hidden z-50 ">
              <div className="flex md:flex-row flex-col items-center text-[12px] gap-4">
                <div className="flex items-center group">
                  <FaEnvelope className="text-white mr-[10px] group-hover:text-[#80b918] duration-500" />
                  <span className="group-hover:text-[#80b918] duration-500">
                    {company_email}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-white mr-[10px]" />
                  <span>{phone}</span>
                </div>
                {/* <div className="z-50">
                  <GoogleTranslateDropdown />
                </div> */}
                {/* <GoogleTranslate /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="absolute top-[38px] lg:top-[60px] bg-black/20 right-0 left-0 z-30 ">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <Link href="/" className="cursor-pointer ">
            {logo ? (
              <Image
                src={`https://admin.techlearnopedia.com${logo}`}
                alt="Logo"
                width={190}
                height={60}
              />
            ) : (
              <Image
                src="/images/logo1.png"
                alt="Logo"
                width={170}
                height={60}
              />
            )}
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-white text-2xl h-[40px] w-[40px] flex justify-center items-center bg-[#80b918] hover:bg-[#00401A] duration-700"
          >
            <FaListUl size={13} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-white text-md ">
              {/* Home */}
              <li className="relative group">
                <Link href="/" className="relative px-1 py-2 inline-block
                 hover:text-green-800 transition-all duration-500">
                  <span className="relative z-10">Home</span>
                  <span className="absolute top-0 left-0 w-0 h-[2px]
                   bg-green-800 group-hover:w-full transition-all duration-500"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-green-800
                   group-hover:w-full transition-all duration-500"></span>
                </Link>
              </li>

              {/* Event Dropdown */}
              <li className="relative group">
                <button className="relative px-1 py-2 inline-flex items-center gap-1">
                  <span className="relative z-10 hover:text-green-800 transition-all duration-500">Event</span>
                  <svg
                    className="w-4 h-4 group-hover:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="absolute top-0 left-0 w-0 h-[2px] bg-green-800 group-hover:w-full transition-all duration-500"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-green-800 group-hover:w-full transition-all duration-500"></span>
                </button>
                <ul className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-500 mt-2 bg-white text-black min-w-[180px] shadow-lg transition-all z-50">
                  <li>
                    <Link
                      href="/events/upcoming"
                      className="block px-4 py-2 hover:text-green-700"
                    >
                      Upcoming Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events/past"
                      className="block px-4 py-2 hover:text-green-700"
                    >
                      Past Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events/event-calendar"
                      className="block px-4 py-2 hover:text-green-700"
                    >
                      Event Calendar
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Blogs */}
              <li className="relative group">
                <Link href="/blogs" className="relative px-1 py-2 inline-block hover:text-green-800 transition-all duration-500">
                  <span className="relative z-10">Blogs</span>
                  <span className="absolute top-0 left-0 w-0 h-[2px] bg-green-800
                   group-hover:w-full transition-all duration-500"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-green-800
                   group-hover:w-full transition-all duration-500"></span>
                </Link>
              </li>

              {/* Scholars */}
              <li className="relative group">
                <Link
                  href="/scholars"
                  className="relative px-1 py-2 inline-block hover:text-green-800 transition-all duration-500"
                >
                  <span className="relative z-10">Scholars</span>
                  <span className="absolute top-0 left-0 w-0 h-[2px]
                   bg-green-800 group-hover:w-full transition-all duration-500"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-[2px]
                   bg-green-800 group-hover:w-full transition-all duration-500"></span>
                </Link>
              </li>

              {/* Contact */}
              <li className="relative group">
                <Link
                  href="/contact"
                  className="relative px-1 py-2 inline-block hover:text-green-800 transition-all duration-500"
                >
                  <span className="relative z-10">Contact</span>
                  <span className="absolute top-0 left-0 w-0 h-[2px] bg-green-800 group-hover:w-full transition-all duration-500"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-green-800 group-hover:w-full transition-all duration-500"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 w-64 h-full bg-black shadow-lg transition-all duration-500 ${
          sidebarOpen ? "right-0" : "right-[-100%]"
        }`}
      >
        <div className="flex justify-end px-6 py-4 border-b">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-2xl text-white ml-auto duration-700 h-[40px] w-[40px]
             hover:bg-[#6a994e] bg-[#303030] flex items-center justify-center"
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
              className="w-full flex justify-between items-center"
            >
              Event <span>{eventDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {eventDropdownOpen && (
              <ul className="pl-4 mt-2 border-l-2 border-gray-300">
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
