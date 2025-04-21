import Image from "next/image";
import React from "react";

const ScholarCard = ({scholar}) => {
  return (
    <div  className="group relative mb-20 lg:mb-0">
      <div className="relative group-hover:inset-0 group-hover:bg-black rounded-lg">
        <div className="absolute inset-0 group-hover:bg-black group-hover:opacity-50 rounded-md duration-600"></div>
        <Image
          src={scholar.image}
          alt={scholar.name}
          width={500}
          height={500}
          className="rounded-lg w-full h-auto"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center gap-3 bg-white group-hover:bg-[#00401A] mx-auto mt-[-70px] ml-[5%] p-4 rounded-lg w-[100%] 
      max-w-[90%] text-[#222] group-hover:text-white text-center duration-600 shadow-md">
        <div className="flex items-center text-black group-hover:text-black leading-[30px]">
          {scholar.socials.map((icon, i) => (
            <i key={i} className={`text-[14px] fab mx-[10px] fa-${icon}`}></i>
          ))}
        </div>
        <h3 className="font-bold text-[18px] mt-[8px]">{scholar.name}</h3>
        <div className="bg-[#00401A] group-hover:bg-white mx-auto w-[100px] h-[2px]"></div>
        <p>
          <span className="group-hover:text-white">{scholar.title}</span>
        </p>
      </div>
    </div>
  );
};

export default ScholarCard;
