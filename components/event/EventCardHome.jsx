import { getMetaValueFromExtraFields } from "@/helper/metaHelpers";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";


const EventCardHome = ({ event }) => {
  const day = getMetaValueFromExtraFields(event, "day");
  const month = getMetaValueFromExtraFields(event, "month");
  const time = getMetaValueFromExtraFields(event, "time");
  const location = getMetaValueFromExtraFields(event, "location");

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden inset-shadow-xs h-full">
      <div className="relative p-7 transition-all duration-300">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ backgroundImage: `url(${event?.featured_image})` }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
        <div className="relative z-10 flex items-center gap-4">
          <div className="text-center text-[#222] group-hover:text-white transition-colors duration-300">
            <span className="text-[40px] font-semi-bold leading-[40px]">{day}</span>
            <div className="text-[18px]">{month}</div>
          </div>
          <div>
            <h5>
              <Link
                href={`/events/${event?.slug}`}
                className="text-[18px] font-semibold text-[#222] group-hover:text-white transition-colors duration-300"
              >
                {event?.name}
              </Link>
            </h5>
            <ul className="mt-2 flex gap-5 text-[12px] text-[#666] group-hover:text-white transition-colors duration-300">
              <li className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-green-800 group-hover:text-white" />
                {location}
              </li>
              <li className="flex items-center gap-1">
                <FaClock className="text-green-800 group-hover:text-white" />
                {time}
              </li>
            </ul>

            <Link
              href={`/events/${event?.slug}`}
              className="inline-block mt-4 text-[#555] hover:text-white group-hover:text-white transition-colors duration-300"
            >
              Event Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardHome;
