// app/learn-more/page.tsx
import HeroSection from "@/components/shared/HeroSection";
import { getSettings, getSingleSlider } from "@/helper/actions";
import { getMetaValueFromExtra_Fields } from "@/helper/metaHelpers";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Learn More | Osaka Masjid",
  description:
    "Explore the divine wisdom behind 'He Raised the Sky and Set Up the Balance' (Surah Ar-Rahman).",
};

export default async function LearnMorePage({ params }) {
  const { slug } = await params;
  const slide = await getSingleSlider(slug);
  const settings = await getSettings();

  const short_description = getMetaValueFromExtra_Fields(
    slide,
    "short_description"
  );

  // console.log("slider--", slide);

  const heroData = {
    title: slide?.name,
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 pb-64">
      <HeroSection heroData={heroData} />
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-white pt-10 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-xl md:text-2xl font-bold text-teal-700 mb-6">
            “{slide?.sub_title}”
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {short_description}
           
          </p>
        </div>
      </section>

      {/* Interpretation Section */}
      <section className="py-10 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src={slide?.featured_image}
            alt="Sky and Balance"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
          <div>
            <div
              className="text-[#666] text-[16px]"
              dangerouslySetInnerHTML={{
                __html: slide?.description,
              }}
            />

           
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className=" text-white text-center px-6">
        <Link
          href="/"
          className="inline-block bg-[#016630] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
