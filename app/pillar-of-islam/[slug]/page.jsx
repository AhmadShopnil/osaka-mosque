
import HeroSection from "@/components/shared/HeroSection";
import { getSinglePillarOfIslam } from "@/helper/actions";
import Image from "next/image";

const PillarDetail = async ({ params }) => {
    const { slug } = await params
    const pillarOfIslam = await getSinglePillarOfIslam(slug);


    const heroData = {
        title: pillarOfIslam?.name || "Pillar Of Islam",
    };

    return (
        <div className="pb-56  ">
            <HeroSection heroData={heroData} />
            <div className="container mx-auto px-2 lg:px-8 text-center mt-10">
                {/* <h1 className="text-3xl font-bold mb-4 text-teal-700">{pillarOfIslam?.name}</h1> */}
                <div className="relative w-full h-64 mb-6">
                    <Image
                        src={pillarOfIslam?.featured_image}
                        alt={pillarOfIslam?.name}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
                <div
                    className="text-[#555555] leading-7 text-[15px]"
                    dangerouslySetInnerHTML={{
                        __html: pillarOfIslam?.description,
                    }}
                />


                {/* <p className="text-lg text-gray-700 leading-relaxed">{pillarOfIslam?.description}</p> */}
            </div>
        </div>


    );
};

export default PillarDetail;
