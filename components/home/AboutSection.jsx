import React from "react";
import Image from "next/image";
import { getPage } from "@/helper/actions";
import { getMetaValueFromExtra_Fields } from "@/helper/metaHelpers";

const AboutSection = async () => {
  const about = await getPage("about-us");

  const short_description = getMetaValueFromExtra_Fields(
    about,
    "short_description"
  );



  // console.log("about", short_description);

  return (
    <div className="py-[40px] lg:py-[60px]  bg-white">
      <div className="container px-4 sm:px-8 md:px-16 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-between items-center">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[390px] lg:h-[430px]">
              {/* Border box for tablet and larger */}
              <div className="hidden md:block absolute top-7 right-7 w-full h-full border-[10px] border-[#00401A] rounded-md z-0" />

              {/* Actual image */}
              <div className="absolute inset-0 z-10 rounded-md overflow-hidden">
                <Image
                  src={about?.featured_image}
                  // src="/images/abt-img2.jpg"
                  alt="About"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 ">
            <div className="flex flex-col">
              <h1 className="text-[#00401A] text-[20px] pb-[5px]">
                Our History
              </h1>
              <div className="mb-1">
                <h2
                  className="font-[500] text-[#222] text-[40px] sm:text-[38px]
                 md:text-[42px] lg:text-[48px] leading-11 mb-3"
                >
                  {about?.sub_title}
                </h2>
                <Image
                  className="mt-2"
                  src="/images/pshape.png"
                  alt="Design Shape"
                  width={100}
                  height={10}
                />
              </div>

              <div className="text-[#555555] leading-7 text-[15px] ">
                <p className="mt-[20px]">{short_description}</p>
              </div>

              {/* 
              <div
                className="text-[#555555] leading-7 text-[15px]"
                dangerouslySetInnerHTML={{
                  __html: about?.description,
                }}
              /> */}

              

              <div className="mt-[35px]">
                <a
                  href="/about"
                  className="bg-[#00401A] hover:bg-[#80b918] px-[45px] py-[14px] rounded-md font-bold text-[15px] text-white transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
