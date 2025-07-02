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
import Link from "next/link";
import Image from "next/image";
import {
  getMediaLinkByMetaName,
  getMetaValueByMetaName,
} from "@/helper/metaHelpers";
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
  const logo = getMediaLinkByMetaName(settings, "site_logoimg_id");

  return (
    <div>
      {/* Top Bar */}
      <div className=" text-white text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Left: Socials on mobile */}
          <div className="flex items-center gap-2 md:hidden w-full">
            {[FaTwitter, FaFacebookF, FaLinkedinIn, FaGooglePlusG].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="h-8 w-8 flex justify-center items-center bg-gray-700 hover:bg-[#80b918]"
                >
                  <Icon size={12} />
                </a>
              )
            )}
            <input
              className="ml-2 flex-1 px-2 text-white placeholder:text-white text-xs bg-transparent border-none outline-none"
              placeholder="Enter your keyword"
              type="text"
            />
            <FaSearch size={12} className="ml-1" />
          </div>

          {/* Desktop: Socials */}
          <div className="hidden md:flex items-center gap-4">
            <span>Follow us:</span>
            <a href={facebookLink} className="hover:text-[#80b918]">
              <FaFacebookF />
            </a>
            <a href={linkedinLink} className="hover:text-[#80b918]">
              <FaLinkedinIn />
            </a>
            <a href={instagramLink} className="hover:text-[#80b918]">
              <FaInstagram />
            </a>
          </div>

          {/* Contact + Translate */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>{company_email}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>{phone}</span>
            </div>
            <GoogleTranslateDropdown />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-black/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
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

          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden bg-[#80b918] hover:bg-[#00401A] text-white p-2"
          >
            <FaListUl size={13} />
          </button>

          <nav className="hidden md:flex gap-6 text-white text-sm">
            <Link href="/" className="hover:text-red-400">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1">
                Event
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all min-w-[180px]">
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
                    href="/events/event-calendar"
                    className="block px-4 py-2 hover:text-[#00401A]"
                  >
                    Event Calendar
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/blogs">Blogs</Link>
            <Link href="/scholars">Scholars</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 w-64 h-full bg-black transition-transform duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white bg-[#303030] hover:bg-[#6a994e] p-2"
          >
            <FaTimes size={13} />
          </button>
        </div>
        <ul className="p-6 text-white space-y-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <button
              onClick={() => setEventDropdownOpen(!eventDropdownOpen)}
              className="w-full flex justify-between"
            >
              Event <span>{eventDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {eventDropdownOpen && (
              <ul className="mt-2 pl-4 border-l border-gray-400 space-y-2">
                <li>
                  <Link href="/events/upcoming">Upcoming Events</Link>
                </li>
                <li>
                  <Link href="/events/past">Past Events</Link>
                </li>
                <li>
                  <Link href="/events/event-calendar">Event Calendar</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/scholars">Scholars</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
