import HeroSection from "@/components/event/HeroSection";
import Location from "@/components/shared/Location";
import Map from "@/components/shared/Map";
import ScholarCard from "@/components/shared/ScholarCard";
import SmallCard from "@/components/shared/SmallCard";
import Image from "next/image";
import React from "react";
import { FaClock, FaLocationDot } from "react-icons/fa6";

const event = {
  image: "/images/event-img1.jpg",
  day: "25",
  month: "Aug",
  days: 85,
  hours: 32,
  minutes: 54,
  seconds: 33,
  title: "Importance of Namaz?",
  location: "Delhi, Jamia Mosque",
  time: "4:00 pm - 08:00 pm",
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
   labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate.


   Lorem ipsum dolor sit amet, consectetur adipisicing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate.exercitation ullamco laboris nisi ut aliquip ex ea 
  commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate.Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id estsunt in culpa qui officia deserunt mollit anim 
  id est laborum.`,
  link: "1",
};

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

const recentevents = [
  {
    title: "Importance of Prayer",
    date: "Sept 09, 2023",
    image: "/images/r1.jpg", // Replace with your actual paths
  },
  {
    title: "Islamic Teachings",
    date: "Jun 05, 2023",
    image: "/images/r2.jpg",
  },
  {
    title: "Video Tutorials",
    date: "Mar 20, 2023",
    image: "/images/r3.jpg",
  },
  {
    title: "Give Zakat Online",
    date: "Feb 25, 2023",
    image: "/images/r4.jpg",
  },
];

const Page = () => {
  return (
    <div className="pb-96">
      <HeroSection />
      <div className="w-full px-2 sm:px-4 md:px-20 flex flex-col md:flex-row gap-8 mt-24">
        {/* Left side */}
        <div className="w-full md:w-3/4 min-h-screen">
          {/* Image section  start*/}
          <div className="relative">
            <Image
              src="/images/event-img.jpg"
              alt="hero"
              width={1000}
              height={1000}
              className="w-full h-96 object-cover"
            />

            <div className="top-0 left-0 z-[77] py-[8px] px-[5px] leading-[22px] absolute w-[60px] text-white">
              <div className="z-[-33] absolute inset-0 bg-[#53765B] opacity-60" />
              <span className="flex flex-col items-center font-[500] text-[22px]">
                {"25"}
                <i className="text-[16px] block font-[400]">{"Jan"}</i>
              </span>
            </div>

            {/* event coundown */}
            <div className="absolute right-0 bottom-0 bg-[#53765B]">
              <ul className="flex justify-evenly gap-4 py-3 pl-4">
                {[
                  { label: "Days", value: 20 },
                  { label: "Hours", value: 10 },
                  { label: "Minutes", value: 24 },
                  { label: "Seconds", value: 26 },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className=" border-r border-white  pr-3 flex items-center"
                  >
                    <div className="text-center">
                      <span className="text-white">{item.value}</span>
                      <p>
                        <span className="text-white">{item.label}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Image section end */}
          <div className="flex items-start lg:items-center sm:flex-col lg:flex-row gap-3 text-[#666] text-[14px] py-5">
            <span>
              <FaLocationDot className="mr-2 text-[#00401A] inline" />
              {event?.location}
            </span>
            <span>
              <FaClock className="mr-2 text-[#00401A] inline" />
              {event?.time}
            </span>
          </div>
          <p className="text-[#666] text-[16px]">{event?.description}</p>

          {/* Speakers section start */}
          <div>
            <h1 className="text-3xl py-5">Speakers</h1>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {scholars?.map((scholar, i) => (
                <ScholarCard key={i} scholar={scholar} />
              ))}
            </div>
          </div>

          {/* Location section start */}
          <div className="mt-24 ">
            <h1 className="text-3xl py-5">Location</h1>
            <Map />
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/4  min-h-screen ">
          <div className=" bg-white  w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Recent Events
            </h3>
            {recentevents.map((event, index) => (
              <SmallCard
                key={index}
                image={event.image}
                title={event.title}
                date={event.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
