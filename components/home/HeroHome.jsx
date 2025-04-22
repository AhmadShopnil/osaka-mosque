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
} from "react-icons/fa";
// import 'swiper/css';
import Link from "next/link";
import HomeSlider from "./HomeSlider";
import Header from "../common/header/Header";

const HeroHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);

  const slides = [1, 2, 3, 4];

  return (
    <section className="relative w-full h-screen">
      <Header />

      {/* Hero Swiper */}
      <HomeSlider />
    </section>
  );
};

export default HeroHome;
