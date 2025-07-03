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
    title: "Quote Details",
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 pb-64">
      <HeroSection heroData={heroData} />
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
            “{slide?.name}”
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {short_description}
            {/* From <strong>Surah Ar-Rahman (55:7)</strong>,
            {` this verse reminds us of Allah's perfect creation and the balance He established in the universe—a message that resonates deeply with our purpose as believers.`} */}
          </p>
        </div>
      </section>

      {/* Interpretation Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/images/abt-img2.jpg"
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

            {/* <h2 className="text-2xl md:text-3xl font-semibold text-teal-800 mb-4">
              Divine Balance and Harmony
            </h2>
            <p className="text-gray-700 mb-4">
              Allah ﷻ raised the sky without pillars that you see, and set the
              balance so that everything in creation—spiritual, natural, and
              social—functions in harmony.
            </p>
            <p className="text-gray-700 mb-4">
              The verse teaches us about justice (`Mizan`) and fairness in all
              aspects of life. Just as Allah created the universe with
              precision, we are commanded to uphold balance in our dealings, our
              worship, and our communities.
            </p> */}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-600 py-16 text-white text-center px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Reflect. Practice. Spread Justice.
        </h3>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Let this verse inspire you to uphold justice, seek balance in life,
          and recognize the signs of your Lord in the sky above and the world
          around you.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
