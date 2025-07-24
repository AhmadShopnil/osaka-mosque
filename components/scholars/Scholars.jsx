"use client";

import HeroSection from "@/components/shared/HeroSection";
import Pagination from "@/components/shared/Pagination";
import Image from "next/image";
import React, { useState } from "react";

const Scholars = ({ scholars }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const scholarsPerPage = 2;
  const totalPages = Math.ceil(scholars.length / scholarsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get scholars for the current page
  const startIndex = (currentPage - 1) * scholarsPerPage;
  const paginatedScholars = scholars.slice(startIndex, startIndex + scholarsPerPage);

  const heroData = {
    title: "学者",
  };

  return (
    <div className="pb-64">
      <HeroSection heroData={heroData} />
      <section className="pt-[100px] bg-[#f8f9fa]">
        <div className="container mx-auto px-2 lg:px-8 pb-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {paginatedScholars.map((scholar, index) => (
              <div key={index} className="group relative mb-20 lg:mb-0">
                <div className="relative group-hover:inset-0 group-hover:bg-black rounded-lg">
                  <div className="absolute inset-0 group-hover:bg-black group-hover:opacity-50 rounded-md duration-600"></div>
                  <Image
                    src={scholar?.featured_image}
                    alt={scholar?.name}
                    width={500}
                    height={500}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="absolute flex flex-col justify-center items-center gap-3 bg-white group-hover:bg-[#00401A] mx-auto mt-[-70px] ml-[5%] p-4 rounded-b-lg w-[100%] max-w-[90%] text-[#222] group-hover:text-white text-center duration-600">
                  <div className="flex items-center text-black group-hover:text-black leading-[30px]">
                    {/* Uncomment and customize if you want to show social icons
                    {scholar?.socials?.map((icon, i) => (
                      <i key={i} className={`text-[14px] fab mx-[10px] fa-${icon}`}></i>
                    ))} 
                    */}
                  </div>
                  <h3 className="font-bold text-[18px] mt-[8px]">{scholar?.name}</h3>
                  <div className="bg-[#00401A] group-hover:bg-white mx-auto w-[100px] h-[2px]"></div>
                  <p>
                    <span className="group-hover:text-white">{scholar.sub_title}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
};

export default Scholars;
