import { FaClock, FaLocationDot } from 'react-icons/fa6';

const EventCard = ({ image, day, month, days, hours, minutes, seconds, title, location, time, description, link }) => {
  return (
    <div className="bg-white">
      <div className="relative">
        <img className="w-full h-full object-cover" src={image} alt={title} />
        <div className="top-0 left-0 z-[77] py-[8px] px-[5px] leading-[22px] absolute w-[60px] text-white">
          <div className="z-[-33] absolute inset-0 bg-[#00401A] opacity-60" />
          <span className="flex flex-col items-center font-[500] text-[22px]">
            {day}
            <i className="text-[16px] block font-[400]">{month}</i>
          </span>
        </div>

        <div className="right-0 bottom-0 left-0 absolute">
          <div className="absolute inset-0 bg-[#00401A] opacity-60" />
          <ul className="flex justify-evenly gap-4 p-4 border-r">
            {[{ label: 'Days', value: days }, { label: 'Hours', value: hours }, { label: 'Minutes', value: minutes }, { label: 'Seconds', value: seconds }]
              .map((item, idx) => (
                <li key={idx} className="relative flex items-center">
                  <div className="text-center">
                    <span className="text-white">{item.value}</span>
                    <p><span className="text-white">{item.label}</span></p>
                  </div>
                  {idx !== 3 && <div className="-right-5 absolute bg-white w-[1px] h-[40px]"></div>}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-[25px]">
        <h5>
          <a className="text-[#222] text-[24px] hover:text-[#00401A] font-[500] transition" href={link}>{title}</a>
        </h5>
        <ul className="flex items-start lg:items-center sm:flex-col lg:flex-row gap-3 text-[#666] text-[12px]">
          <li><FaLocationDot className="mr-2 text-[#00401A] inline" />{location}</li>
          <li><FaClock className="mr-2 text-[#00401A] inline" />{time}</li>
        </ul>
        <p>{description}</p>
        <a href={link} className="font-[400] text-[#555] text-[15px] hover:text-[#00401A]">Event Details</a>
      </div>
    </div>
  );
};

export default EventCard;
