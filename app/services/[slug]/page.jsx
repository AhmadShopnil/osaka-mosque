
import HeroSection from "@/components/shared/HeroSection";
import { getSingleService } from "@/helper/actions";
import Image from "next/image";

const ServiceDetail = async ({ params }) => {
    const { slug } = await params
    const service = await getSingleService(slug);

    const heroData = {
        title: service?.name || "Service",
    };


    return (
        <div className="pb-56 ">
            <HeroSection heroData={heroData} />
            <div className="container mx-auto px-2 lg:px-8 text-center mt-10 text-center">
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                    <Image
                        src={service?.featured_image}
                        alt={service?.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div
                    className="text-[#555555] leading-7 text-[15px]"
                    dangerouslySetInnerHTML={{
                        __html: service?.description,
                    }}
                />

                {/* <p className="text-lg text-gray-700 whitespace-pre-line mb-6">
                    {service.description}
                </p> */}
                {/* <div className="bg-gray-100 p-4 rounded-lg text-left">
                    <p><span className="font-semibold">Schedule:</span> {service.schedule}</p>
                    <p><span className="font-semibold">Instructor:</span> {service.teacher}</p>
                </div> */}
            </div>
        </div>
    );
};

export default ServiceDetail;
