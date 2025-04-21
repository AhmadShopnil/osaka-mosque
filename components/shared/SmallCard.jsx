import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const SmallCard= ({ image, title, date }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div>
        <h4 className="text-sm font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
          {title}
        </h4>
        <div className="text-orange-400 text-sm flex items-center mt-1">
          <FontAwesomeIcon icon={faCalendarDays} className="w-3 h-3 mr-1" />
          {date}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
