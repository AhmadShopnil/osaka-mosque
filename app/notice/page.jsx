// app/hadith/page.tsx
import NoticeList from "@/components/notice/NoticeList";
import QuoteList from "@/components/quote/QuoteList";
import BackToHomeButton from "@/components/shared/BackToHomeButton";
import HeroSection from "@/components/shared/HeroSection";
import { getNotices, getQuran_Hadith, getSettings } from "@/helper/actions";

const heroData = {
  title: "",
};


export default async function NoticePage() {
  const notices = await getNotices()
  const settings = await getSettings();

  return (
    <div className="pb-64">
      <HeroSection heroData={heroData} />
      <NoticeList notices={notices}/>
      <div className="flex justify-center items-center">
         <BackToHomeButton settings={settings}/>
      </div>
    </div>
  );
}
