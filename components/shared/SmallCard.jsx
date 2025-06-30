import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { getMetaValueFromExtraFields } from "@/helper/metaHelpers";

const SmallCard= ({ event }) => {


  const day = getMetaValueFromExtraFields(event, "day");
  const month = getMetaValueFromExtraFields(event, "month");
  const time = getMetaValueFromExtraFields(event, "time");
  const location = getMetaValueFromExtraFields(event, "location");
  const year = getMetaValueFromExtraFields(event, "year");

  return (
    <div className="flex items-center space-x-4 mb-6">
      <img
        src={event?.featured_image}
        alt={event?.name}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div>
        <h4 className="text-sm font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
          {event?.name}
        </h4>
        <div className="text-orange-400 text-sm flex items-center mt-1">
          <FontAwesomeIcon icon={faCalendarDays} className="w-3 h-3 mr-2" />
          {day} {month} {year}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
