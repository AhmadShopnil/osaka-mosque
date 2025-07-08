import Image from "next/image";
import {
  BookOpen,
  Landmark,
  UserPlus,
  Handshake,
  UserCircle,
  HeartHandshake,
  UtensilsCrossed,
} from "lucide-react";

import {
  getMetaDescriptionByMetaName,
  getMetaValueByMetaName,
} from "@/helper/metaHelpers";
import { getPillarOfIslam } from "@/helper/actions";
import Link from "next/link";

// Map of string to Lucide icons
const lucideIconMap = {
  faBookOpen: BookOpen,
  Hajj: Landmark,
  Salah: UserPlus,
  Zakat: Handshake,
  Shahada: UserCircle,
  faHandHoldingHeart: HeartHandshake,
  Sawm: UtensilsCrossed,
};

const PillarOfIslamSection = async ({ settings }) => {
  const pillar_of_islam = await getPillarOfIslam();

  const pillar_of_islam_heading =
    getMetaValueByMetaName(settings, "pillar_of_islam") || "";
  const pillar_of_islam_sub_heading =
    getMetaDescriptionByMetaName(settings, "pillar_of_islam") ||
    "About Essential";

  return (
    <section className="pt-[130px] relative z-50">
      <div
        className="relative bg-cover bg-no-repeat bg-center bg-fixed py-[100px]"
        style={{ backgroundImage: `url('/images/parallax2.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="z-10 relative container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <span className="font-bold text-[#80b918] text-[20px]">
              About Essential
            </span>
            <h2 className="font-semibold text-white text-[38px] md:text-[42px] lg:text-[48px]">
              {pillar_of_islam_heading}
            </h2>
            <Image
              className="mt-2"
              src="/images/pshape.png"
              alt="Design Shape"
              width={100}
              height={10}
            />
          </div>

          <div className="gap-[10px] grid pillar-grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-8">
            {pillar_of_islam?.map((pillar, index) => {
              const LucideIcon = lucideIconMap[pillar?.name];

              return (
                <Link
                href={`/pillar-of-islam/${pillar?.slug}`}
                  key={index}
                  className="group flex flex-col items-center gap-4"
                >
                  <div className="text-center">
                    <div
                      className="bg-[#00401A] flex items-center justify-center w-[120px] h-[120px]
                        relative border-2 border-white rounded-full overflow-hidden mx-auto"
                    >
                      {LucideIcon ? (
                        <LucideIcon className="text-white w-8 h-8 md:w-10 md:h-10" />
                      ) : (
                        <BookOpen className="text-white w-10 h-10" />
                      )}

                    
                    </div>
                    <h5 className="mt-4 font-[400] text-[24px] text-white">
                      {pillar?.name}
                    </h5>
                    <span className="text-[#80b918] text-[18px]">
                      {pillar?.sub_title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarOfIslamSection;
