import { getCountdownTime } from "@/helper/getCountdownTime";
import { getMetaValueFromExtraFields } from "@/helper/metaHelpers";
import Link from "next/link";
import { FaClock, FaLocationDot } from "react-icons/fa6";

const EventCard = ({ event }) => {
  const { featured_image, name, description, slug } = event;

  const day = getMetaValueFromExtraFields(event, "day");
  const month = getMetaValueFromExtraFields(event, "month");
  const time = getMetaValueFromExtraFields(event, "time");
  const location = getMetaValueFromExtraFields(event, "location");
  const year = getMetaValueFromExtraFields(event, "year");

  const countdown = getCountdownTime({ day, month, year, time });
  const countdownItems = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  return (
    <div className="bg-white">
      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src={`/images/event-img1.jpg`}
          alt={name}
        />
        <div className="top-0 left-0 z-50 py-[8px] px-[5px] leading-[22px] absolute w-[60px] text-white">
          <div className="z-[-33] absolute inset-0 bg-[#00401A] opacity-60" />
          <span className="flex flex-col items-center font-[500] text-[22px]">
            {day}
            <i className="text-[16px] block font-[400]">{month?.slice(0,3)}</i>
          </span>
        </div>

        <div className="right-0 bottom-0 left-0 absolute">
          <div className="absolute inset-0 bg-[#00401A] opacity-60" />
          <ul className="flex justify-evenly gap-4 p-4 border-r">
            {countdownItems.map((item, idx) => (
              <li key={idx} className="relative flex items-center">
                <div className="text-center">
                  <span className="text-white">{item?.value}</span>
                  <p>
                    <span className="text-white">{item?.label}</span>
                  </p>
                </div>
                {idx !== 3 && (
                  <div className="-right-5 absolute bg-white w-[1px] h-[40px]"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-[25px]">
        <h5>
          <Link
            className="text-[#222] text-[24px] hover:text-[#00401A] font-[500] transition"
            href={`#`}
          >
            {name}
          </Link>
        </h5>
        <ul className="flex items-start lg:items-center sm:flex-col lg:flex-row gap-3 text-[#666] text-[12px]">
          <li>
            <FaLocationDot className="mr-2 text-[#00401A] inline" />
            {location}
          </li>
          <li>
            <FaClock className="mr-2 text-[#00401A] inline" />
            {time}
          </li>
        </ul>

      {
description ?

  <div
          className=""
          dangerouslySetInnerHTML={{
            __html: `${description?.slice(0, 100)}...`,
          }}
        />
        :
      <p>No Description</p>
      }

        {/* <p>{description}</p> */}
        <Link
          href={`/events/${slug}`}
          className="font-[400] text-[#555] text-[15px] hover:text-[#00401A]"
        >
          Event Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
