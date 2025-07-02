import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";
import { getServices } from "@/helper/actions";
import { getMetaValueByMetaName } from "@/helper/metaHelpers";



// ✅ Metadata generation
export async function generateMetadata() {
  return {
    title: "Our Services | Osaka Masjid",
    description: "Explore the spiritual and educational services offered by Osaka Masjid including Quran and Hadith learning.",
  };
}

// ✅ Fetching data during build time (SSG)

export default async function ServicesPage({settings}) {
  const services = await getServices();


const service_heading = getMetaValueByMetaName(settings, "service_heading") || "";

  return (
    <section className="z-10 pt-[100px] relative bg-white">
      <div className="absolute right-0 -z-10 -bottom-25 opacity-[0.65]">
        <Image src="/images/bg-vector-3.png" alt="Background Vector" width={500} height={500} />
      </div>
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-[40px] text-center">
          <span className="pb-[5px] text-[#00401A] text-[20px]">Our Worldwide</span>
          <h2 className="font-semibold text-[#222] text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px]">
            {service_heading}
          </h2>
          <Image className="mt-2" src="/images/pshape.png" alt="Design Shape" width={100} height={50} />
        </div>

        <div className="gap-8 grid offer-grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-[-30px]">
          {services.map((service) => (
            <div key={service.id} className="group flex flex-col items-center gap-4">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-[#00401A] text-[70px] group-hover:text-[#80b918] transition mx-auto"
                />
                <h5 className="mt-4 font-[500] text-[#222] text-[18px]">
                  <a href={`/services/${service.slug}`}>{service.name}</a>
                </h5>
              </div>

              <div className="relative mt-4">
                <div className="top-[-6px] right-0 left-0 absolute bg-[#00401A] group-hover:bg-[#80b918] rounded-[10px] h-[40px] pt-[20px] pr-[25px] pb-[25px] -rotate-5 duration-600"></div>
                <div className="top-[-6px] right-0 left-0 absolute group-hover:invisible visible group-hover:z-10 bg-[#00401A] group-hover:bg-[#80b918] rounded-[10px] pt-[20px] pr-[25px] pb-[25px] -rotate-5 duration-700"></div>
                <div className="relative">
                  <div
                    className="inset-0 pt-[20px] pr-[25px] pb-[25px] bg-[#00401A] group-hover:bg-[#80b918] mt-4 p-4 rounded-md text-white transition z-50 group-hover:z-50"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
