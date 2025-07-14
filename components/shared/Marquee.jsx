
import { getSettings } from "@/helper/actions";
import { getMetaValueByMetaName } from "@/helper/metaHelpers";
import React from "react";



const Marquee = async({ text, speed = 5 }) => {
  const settings = await getSettings();
   const slogan = getMetaValueByMetaName(settings, "slogan") || "";
  return (
     <div className="w-full bg-green-100 border border-green-400 flex py-1 ">
      <marquee direction="right" scrollamount={speed.toString()}>
        <span className="text-green-900 font-semibold text-[16px]">{slogan}</span>
      </marquee>
    </div>
  );
};

export default Marquee;
