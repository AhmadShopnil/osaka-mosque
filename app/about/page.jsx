import BackToHomeButton from "@/components/shared/BackToHomeButton";
import HeroSection from "@/components/shared/HeroSection";
import { getPage, getSettings } from "@/helper/actions";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const about = await getPage("about-us");
  const settings = await getSettings();

  const heroData = {
    title: about?.name || "About Us",
    subTitle: about?.sub_title || "",
    backgroundImage: about?.featured_image || "/images/default-hero.jpg",
  };

  return (
    <div className="pb-56">
      {/* Hero Section */}
      <HeroSection heroData={heroData} />

      {/* About Section */}
      <section className="container mx-auto px-4 md:px-20 pt-14 pb-5">
        <div className="grid lg:grid-cols-1 items-center">
          {/*  Text */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {about?.sub_title}
            </h2>

            
              <div
                className="text-[#555555] leading-7 text-[15px]"
                dangerouslySetInnerHTML={{
                  __html: about?.description,
                }}
              />

           
          </div>

          <div className="relative w-full h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-md mt-10">
            <Image
              src={about?.featured_image || "/images/placeholder.jpg"}
              alt={about?.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

    

      {/* Footer Image Shape (optional) */}
      <div className="text-center mt-10 mb-4">
        <Image
          src="/images/pshape.png"
          alt="Design Shape"
          width={100}
          height={20}
          className="mx-auto"
        />
      </div>
       <div className="flex justify-center items-center">
               <BackToHomeButton settings={settings}/>
            </div>
    </div>
  );
};

export default Page;
