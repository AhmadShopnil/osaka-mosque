import Image from "next/image";
import {
  getMetaDescriptionByMetaName,
  getMetaValueByMetaName,
  getMetaValueFromExtraFields,
} from "@/helper/metaHelpers";
import { getPryerTime } from "@/helper/actions";
import { getImageUrl } from "@/helper/getImageUrl";

const PrayerTimeSection = async ({ settings, prayer_time }) => {
  const prayerTime = await getPryerTime();
  const image = getImageUrl(prayer_time?.image_media);




  return (
    <section className="bg-[#f8f9fa] pt-[50px] lg:pt-[80px] pb-[100px]">
      <div className="container px-8 mx-auto ">
        {/* Header */}
        <div className="text-start mb-[40px]">
          <span className="text-[#00401A] pb-[5px] text-[20px]">
            {prayer_time?.sub_title}
          </span>
          <h2 className="font-semibold text-[#222] text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px]">
            {prayer_time?.title}
          </h2>
          <Image
            className="mt-[20px]"
            src="/images/pshape.png"
            alt="Design Shape"
            width={100}
            height={50}
          />
        </div>

        <div className=" gap-8 grid grid-cols-1 md:grid-cols-5
         lg:grid-cols-5 mt-3 md:mt-8">
          <div className="w-full md:col-span-2">
            <Image
              className="md:block hidden w-full h-full object-center object-cover"
              src={image}
              alt="Prayer Time Image"
              width={500}
              height={300}
            />
          </div>

          <div className="md:col-span-3">
            <h4 className="pb-10 text-[20px] text-center">
              Namaz Timings of Osaka Mosque
            </h4>
            <table className="rounded-lg w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-[10px] text-[18px] text-center">
                    Name of Salat
                    <div className="flex justify-center">
                      <Image
                        className="mt-2"
                        src="/images/pshape.png"
                        alt="Design Shape"
                        width={100}
                        height={50}
                      />
                    </div>
                  </th>

                  <th className="p-[10px] text-[18px] text-center">
                    Prayer Time
                    <div className="flex justify-center">
                      <Image
                        className="mt-2"
                        src="/images/pshape.png"
                        alt="Design Shape"
                        width={100}
                        height={50}
                      />
                    </div>
                  </th>
                  <th className="p-[10px] text-[18px] text-center">
                    Start Time
                    <div className="flex justify-center">
                      <Image
                        className="mt-2"
                        src="/images/pshape.png"
                        alt="Design Shape"
                        width={100}
                        height={50}
                      />
                    </div>
                  </th>
                  <th className="p-[10px] text-[18px] text-center">
                    End Time
                    <div className="flex justify-center">
                      <Image
                        className="mt-2"
                        src="/images/pshape.png"
                        alt="Design Shape"
                        width={100}
                        height={50}
                      />
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {prayerTime?.reverse().map((prayer) => (
                  <tr
                    key={prayer}
                    className="hover:text-[#00401A] text-center transition"
                  >
                    <td className="p-[10px] text-[18px]">{prayer?.name}</td>
                    <td className="p-[10px] text-[18px]">
                      {getMetaValueFromExtraFields(prayer, "time")}
                    </td>
                    <td className="p-[10px] text-[18px]">
                      {getMetaValueFromExtraFields(prayer, "start_time")}
                    </td>
                    <td className="p-[10px] text-[18px]">
                      {getMetaValueFromExtraFields(prayer, "end_time")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimeSection;
