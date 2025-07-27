import Image from "next/image";
import React from "react";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import HeroSection from "../shared/HeroSection";
import ScholarCard from "../shared/ScholarCard";
import Map from "../shared/Map";
import SmallCard from "./EventSmallCard";
import {
  getMetaValueFromExtra_Fields,
  getMetaValueFromExtraFields,
} from "@/helper/metaHelpers";
import { getCountdownTime } from "@/helper/getCountdownTime";
import { getEvents } from "@/helper/actions";
import Link from "next/link";

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

const SingleEvents = async ({ event }) => {
  const events = await getEvents();

  const speakers = getMetaValueFromExtra_Fields(event, "speakers");
  const day = getMetaValueFromExtra_Fields(event, "day");
  const month = getMetaValueFromExtra_Fields(event, "month");
  const time = getMetaValueFromExtra_Fields(event, "time");
  const location = getMetaValueFromExtra_Fields(event, "location");
  const year = getMetaValueFromExtra_Fields(event, "year");
  const countdown = getCountdownTime({ day, month, year, time });
  const countdownItems = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  const heroData = {
    title: event?.name || "Events",
  };

  //  console.log("event", event)
  //   console.log("location", location)
  //    console.log("time", time)

  return (
    <div className="pb-52 md:pb-64 ">
      <HeroSection heroData={heroData} />
      <div className="w-full px-2 sm:px-4 md:px-20 flex flex-col md:flex-row gap-8 mt-14 ">
        {/* Left side */}
        <div className="w-full md:w-3/4 min-h-screen">
          {/* Image section  start*/}
          <div className="relative bg-gray-200">
            <Image
              src={event?.featured_image }
              alt="hero"
              width={1000}
              height={1000}
              className="w-full h-96 object-cover"
            />

            <div className="top-0 left-0 z-[77] py-[8px] px-[5px] leading-[22px] absolute w-[60px] text-white">
              <div className="z-[-33] absolute inset-0 bg-[#53765B] opacity-60" />
              <span className="flex flex-col items-center font-[500] text-[22px]">
                {day}
                <i className="text-[16px] block font-[400]">{month?.slice(0,3)}</i>
              </span>
            </div>

            {/* event coundown */}
            <div className="absolute right-0 bottom-0 bg-[#53765B]">
              <ul className="flex justify-evenly gap-4 py-3 pl-4">
                {countdownItems?.map((item, idx) => (
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
              {location}
            </span>
            <span>
              <FaClock className="mr-2 text-[#00401A] inline" />
              {time}
            </span>
          </div>
          {/* <p className="text-[#666] text-[16px]">{description}</p> */}

          {event?.description ? (
            <div
              className="text-[#666] text-[16px]"
              dangerouslySetInnerHTML={{
                __html: event?.description,
              }}
            />
          ) : (
            <p></p>
          )}

          <p className=" mt-6">
            <span className="font-semibold"></span> {speakers}
          </p>
          {/* Speakers section start */}
          {/* <div>
            <h1 className="text-3xl py-5">Speakers</h1>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {scholars?.map((scholar, i) => (
                <ScholarCard key={i} scholar={scholar} />
              ))}
            </div>
          </div> */}

          {/* Location section start */}
          {/* <div className="mt-24 ">
            <h1 className="text-3xl py-5">Location</h1>
            <Map />
          </div> */}
        </div>

        {/* right side */}
        <div className="w-full md:w-1/4  ">
          <div className=" bg-white  w-full max-w-md">
            {/* <h3 className="text-xl font-bold text-gray-800 ">
              Recent Events
            </h3> */}
            {events?.slice(0, 4).map((event, index) => (
              <Link key={index} href={`/events/${event?.slug}`}>
                <SmallCard event={event} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvents;
