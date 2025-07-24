import { getScholars } from "@/helper/actions";
import { getMetaDescriptionByMetaName, getMetaValueByMetaName } from "@/helper/metaHelpers";
import Image from "next/image";
import Link from "next/link";

export default async function IslamicScholarsSection({ settings,islamic_scholars }) {
  const scholars = await getScholars();
  // const islamic_scholars_heading =
  //   getMetaValueByMetaName(settings, "islamic_scholars") || "";
  // const islamic_scholars_sub_heading =
  //   getMetaDescriptionByMetaName(settings, "islamic_scholars") || "";

const scholars_button = getMetaValueByMetaName(settings, "scholars_button") || "See More";
// console.log("scholars", )
  return (
    <section className="z-10 pt-[50px] lg:pt-[100px] relative bg-[#fafafa] pb-64">
      {/* Left Background Image */}
      <div className="absolute left-0 -z-10 -bottom-25 opacity-[0.65]">
        <Image
          src="/images/bg-vector.png" // Use any left-side graphic like bg-vector-2.png
          alt="Background Vector"
          width={500}
          height={500}
        />
      </div>

      <div className="container mx-auto px-4 md:px-20">
        {/* Header */}
        <div className="text-center mb-[40px]">
          <span className="text-[#00401A] text-[20px] mb-[5px]">
            {islamic_scholars?.sub_title}
          </span>
          <h2 className="mt-2 font-semibold text-[#222] text-[38px] md:text-[42px] lg:text-[48px]">
            {islamic_scholars?.title}
          </h2>
          <Image
            width={160}
            height={20}
            className="mx-auto mt-4"
            src="/images/pshape.png"
            alt="Design Shape"
          />
        </div>

        {/* Scholars Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {scholars.map((scholar, index) => (
            <div key={index} className="group relative mb-20 lg:mb-0">
              <div className="relative group-hover:inset-0 group-hover:bg-black rounded-lg">
                <div className="absolute inset-0 group-hover:bg-black group-hover:opacity-50 rounded-md duration-600" />
                <Image
                  src={scholar?.featured_image}
                  alt={scholar?.name}
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div
                className="absolute flex flex-col justify-center items-center gap-3
               bg-white group-hover:bg-[#00401A] mx-auto mt-[-70px] ml-[5%] px-4 py-6
              rounded-b-lg w-[100%] max-w-[90%] text-[#222] group-hover:text-white text-center duration-600"
              >
                <div className="flex items-center text-black group-hover:text-black leading-[30px]">
                  <i className={`text-[14px] fab mx-[10px] fa-facebook-f`} />
                </div>
                <h3 className="font-bold text-[18px] mt-[8px]">
                  {scholar?.name}
                </h3>
                <div className="bg-[#00401A] group-hover:bg-white mx-auto w-[100px] h-[2px]" />
                <p>
                  <span className="group-hover:text-white">
                    {scholar?.sub_title}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="flex justify-center items-center mt-8 lg:mt-32">
          <Link
            href="/scholars"
            className="bg-[#00401A] hover:bg-[#80b918] px-[45px] py-[14px] rounded-md font-bold text-[15px] text-white transition"
          >
            {scholars_button}
          </Link>
        </div>
      </div>
    </section>
  );
}
