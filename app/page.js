
import AboutSection from "@/components/home/AboutSection";
import BlogEventsSection from "@/components/home/BlogEventsSection";
import DonationPage from "@/components/home/DonationPage";
import HeroHome from "@/components/home/HeroHome";
import IslamicScholarsSection from "@/components/home/IslamicScholarsSection";
import OfferedServicesSection from "@/components/home/OfferedServicesSection";
import PillarOfIslamSection from "@/components/home/PillerOfIslamSection";
import PrayerTimeSection from "@/components/home/PrayerTimeSection";
import { getSettings } from "@/helper/actions";


export default async function Home() {
const settings = await getSettings();

  return (
    <div>
      {/* <GoogleTranslateDropdown /> */}
      <HeroHome/>
      {/* <HeroSectionHome /> */}
      <AboutSection />
      {/* <PrayerTimes/> */}
      <PrayerTimeSection settings={settings} />
      <OfferedServicesSection settings={settings} />
      <PillarOfIslamSection settings={settings} />
      <BlogEventsSection settings={settings} />
      {/* <DonationSection /> */}
      <DonationPage settings={settings}/>
      <IslamicScholarsSection  settings={settings}/>
     
      
    </div>
  );
}
