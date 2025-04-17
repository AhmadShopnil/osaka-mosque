// components/Topbar.js

'use client';
import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
  FaEnvelope,
  FaPhoneAlt,
  FaSearch,
} from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="top-0 right-0 left-0 z-10 absolute flex md:flex-row flex-col justify-center items-center h-[38px] lg:h-auto lg:py-[15px] text-white text-center">
      <div className="container">
        <div className="flex md:flex-row flex-col justify-between lg:items-center gap-2 md:gap-4 h-full">
          {/* Mobile View */}
          <div className="block lg:hidden w-full">
            <div className="flex items-center text-[14px] leading-[30px]">
              {[FaTwitter, FaFacebookF, FaLinkedinIn, FaGooglePlusG].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="h-[38px] w-[38px] px-2 flex justify-center items-center bg-[rgb(61,61,61)] mr-[1px] hover:bg-[#80b918]"
                >
                  <Icon className="text-[10px] text-white" />
                </a>
              ))}
              <input
                className="outline-none text-[12px] italic text-white sm:px-[7%] px-[2%] border-none h-full w-full bg-transparent"
                placeholder="Enter your keyword"
                type="text"
              />
              <FaSearch className="text-white text-[10px] ml-2" />
            </div>
          </div>

          {/* Social Icons */}
          <div className="lg:block hidden">
            <div className="flex items-center text-[14px] leading-[30px]">
              <span className="mr-[15px]">Follow us:</span>
              {[FaTwitter, FaFacebookF, FaLinkedinIn, FaGooglePlusG].map((Icon, index) => (
                <a key={index} href="#" className="mx-[10px]">
                  <Icon className="hover:text-[#80b918] duration-500" />
                </a>
              ))}
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
  );
};

export default Topbar;
