// app/hadith/page.tsx
import NoticeList from "@/components/notice/NoticeList";
import QuoteList from "@/components/quote/QuoteList";
import HeroSection from "@/components/shared/HeroSection";
import { getNotices, getQuran_Hadith } from "@/helper/actions";

const heroData = {
  title: "",
};


export default async function HadithPage({quran_Hadith}) {
  const notices = await getNotices()

  return (
    <div className="pb-64">
      <HeroSection heroData={heroData} />
      <NoticeList notices={notices}/>
    </div>
  );
}
