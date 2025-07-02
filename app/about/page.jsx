import HeroSection from '@/components/shared/HeroSection';
import { getPage } from '@/helper/actions';
import Image from 'next/image';
import React from 'react';

const Page = async () => {
  const about = await getPage("about-us");

  const heroData = {
    title: about?.name || "About Us",
    subTitle: about?.sub_title || "",
    backgroundImage: about?.featured_image || "/images/default-hero.jpg",
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <HeroSection heroData={heroData} />

      {/* About Section */}
      <section className="container mx-auto px-4 md:px-20 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Image */}
          <div className="relative w-full h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={about?.featured_image || "/images/placeholder.jpg"}
              alt={about?.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {about?.sub_title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We established our center in 1954, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Visit our premises sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold mb-4 text-[#00401A]">Our Mission {index + 1}</h4>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quae.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Image Shape (optional) */}
      <div className="text-center mt-10">
        <Image
          src="/images/pshape.png"
          alt="Design Shape"
          width={100}
          height={20}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Page;
