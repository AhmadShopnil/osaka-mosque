import Image from "next/image";
import Link from "next/link";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { getCountdownTime } from "@/helper/getCountdownTime";
import { getMetaValueFromExtraFields } from "@/helper/metaHelpers";

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
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative w-full h-[250px]">
        <Image
          src={featured_image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
        {/* Date Tag */}
        <div className="absolute top-0 left-0 z-10 py-2 px-3 text-white bg-[#00401A]/70 rounded-br-lg">
          <span className="text-[22px] font-semibold leading-none block text-center">
            {day}
          </span>
          <span className="text-sm block text-center">{month?.slice(0, 3)}</span>
        </div>

        {/* Countdown */}
        <div className="absolute inset-x-0 bottom-0 z-10 bg-[#00401A]/60 py-2 px-4">
          <ul className="flex justify-between items-center text-white text-center text-xs">
            {countdownItems.map((item, idx) => (
              <li key={idx} className="flex-1 relative">
                <div>
                  <div className="font-bold text-lg">{item.value}</div>
                  <div>{item.label}</div>
                </div>
                {idx !== countdownItems.length - 1 && (
                  <span className="absolute right-0 top-2 h-6 w-px bg-white/40" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h5 className="text-xl font-semibold text-[#222] hover:text-[#00401A] transition">
          <Link href={`/events/${slug}`}>{name}</Link>
        </h5>

        <ul className="flex flex-col sm:flex-row sm:items-center text-sm text-[#666] gap-2">
          <li>
            <FaLocationDot className="inline text-[#00401A] mr-1" />
            {location}
          </li>
          <li>
            <FaClock className="inline text-[#00401A] mr-1" />
            {time}
          </li>
        </ul>

        {description ? (
          <div
            className="text-sm text-[#444]"
            dangerouslySetInnerHTML={{
              __html: `${description?.slice(0, 100)}...`,
            }}
          />
        ) : (
          <p className="text-sm text-gray-500">No description available.</p>
        )}

        <Link
          href={`/events/${slug}`}
          className="text-[15px] font-medium text-[#00401A] hover:underline"
        >
          Event Details →
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
