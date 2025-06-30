
import AboutSection from "@/components/home/AboutSection";
import BlogEventsSection from "@/components/home/BlogEventsSection";
import DonationSection from "@/components/home/DonationSection";
import HeroHome from "@/components/home/HeroHome";
import IslamicScholarsSection from "@/components/home/IslamicScholarsSection";
import OfferedServicesSection from "@/components/home/OfferedServicesSection";
import PillarOfIslamSection from "@/components/home/PillerOfIslamSection";
import PrayerTimeSection from "@/components/home/PrayerTimeSection";


export default function Home() {
  return (
    <div>
      <HeroHome/>
      {/* <HeroSectionHome /> */}
      <AboutSection />
      {/* <PrayerTimes/> */}
      <PrayerTimeSection />
      <OfferedServicesSection />
      <PillarOfIslamSection />
      <BlogEventsSection />
      <DonationSection />
      <IslamicScholarsSection />
     
      
    </div>
  );
}
