"use client";

import React, { useEffect, useState } from "react";
import Header from "../common/header/Header";
import { usePathname } from "next/navigation";
import { formatPathname } from "@/helper/formatPathname";
import axiosInstance from "@/helper/axiosInstance";
import { getImageUrl } from "@/helper/getImageUrl";

const HeroSection = ({ heroData }) => {
  const [settings, setSettings] = useState([]);
  const { title } = heroData;
  const pathname = usePathname();
 

  useEffect(() => {
    axiosInstance
      .get("/frontend/settings")
      .then((response) => {
        setSettings(response.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching settings:", error);
      });
  }, []);

  const data = settings.find((item) => item?.meta_name === "masjid_image");
  const image = getImageUrl(data);

  return (
    <section
      className="relative w-full h-[420px] bg-cover bg-center "
      style={{ backgroundImage: `url(${image})` }}
    >
      <Header settings={settings} />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center mt-32 p-6 ">
        <h1 className="text-[32px] md:text-[48px] font-bold">{title}</h1>
        {/* Optional subtitle or breadcrumb */}
        {/* <p className="text-lg">{prettyPath}</p> */}
      </div>
    </section>
  );
};

export default HeroSection;
