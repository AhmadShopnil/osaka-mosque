// app/hadith/page.tsx
import QuoteList from "@/components/quote/QuoteList";
import HeroSection from "@/components/shared/HeroSection";
import { getQuran_Hadith } from "@/helper/actions";

const heroData = {
  title: "Hadith and Quran Collections",
};


export default async function HadithPage({quran_Hadith}) {
  const quotes = await getQuran_Hadith()

  return (
    <div className="pb-64">
      <HeroSection heroData={heroData} />
      <QuoteList quotes={quotes}/>
    </div>
  );
}
