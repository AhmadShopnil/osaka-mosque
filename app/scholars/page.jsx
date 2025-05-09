"use client";

import EventCard from "@/components/event/EventCard";
import HeroSection from "@/components/event/HeroSection";
import Pagination from "@/components/shared/Pagination";
import Image from "next/image";
import React, { useState } from "react";

const scholars = [
  {
    name: "Sharuf Al Hamman",
    title: "Islamic Scholar",
    image: "/images/team-img1-1.jpg",
    socials: ["facebook-f", "twitter", "linkedin-in", "google-plus-g"],
  },
  {
    name: "Sharuf Al Hamman",
    title: "Islamic Scholar",
    image: "/images/team-img1-1.jpg",
    socials: ["facebook-f", "twitter", "linkedin-in", "google-plus-g"],
  },
  {
    name: "Sharuf Al Hamman",
    title: "Islamic Scholar",
    image: "/images/team-img1-1.jpg",
    socials: ["facebook-f", "twitter", "linkedin-in", "google-plus-g"],
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Optional: trigger fetch or router navigation
  };

  return (
    <div className="pb-64">
      <HeroSection />
      <section className="pt-[100px] bg-[#f8f9fa]">
        <div className="container mx-auto px-2 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {scholars.map((scholar, index) => (
              <div key={index} className="group relative mb-20 lg:mb-0">
                <div className="relative group-hover:inset-0 group-hover:bg-black rounded-lg">
                  <div className="absolute inset-0 group-hover:bg-black group-hover:opacity-50 rounded-md duration-600"></div>
                  <Image
                    src={scholar.image}
                    alt={scholar.name}
                    width={500}
                    height={500}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="absolute flex flex-col justify-center items-center gap-3 bg-white group-hover:bg-[#00401A] mx-auto mt-[-70px] ml-[5%] p-4 rounded-b-lg w-[100%] max-w-[90%] text-[#222] group-hover:text-white text-center duration-600">
                  <div className="flex items-center text-black group-hover:text-black leading-[30px]">
                    {scholar.socials.map((icon, i) => (
                      <i
                        key={i}
                        className={`text-[14px] fab mx-[10px] fa-${icon}`}
                      ></i>
                    ))}
                  </div>
                  <h3 className="font-bold text-[18px] mt-[8px]">
                    {scholar.name}
                  </h3>
                  <div className="bg-[#00401A] group-hover:bg-white mx-auto w-[100px] h-[2px]"></div>
                  <p>
                    <span className="group-hover:text-white">
                      {scholar.title}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
};

export default Page;
