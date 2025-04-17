import Footer from "@/components/common/footer/Footer";
import AboutSection from "@/components/home/AboutSection";
import BlogEventsSection from "@/components/home/BlogEventsSection";
import DonationSection from "@/components/home/DonationSection";
import HeroSectionHome from "@/components/home/HeroSectionHome";
import IslamicScholarsSection from "@/components/home/IslamicScholarsSection";
import OfferedServicesSection from "@/components/home/OfferedServicesSection";
import PillarOfIslamSection from "@/components/home/PillerOfIslamSection";
import PrayerTimeSection from "@/components/home/PrayerTimeSection";
import PrayerTimes from "@/components/shared/PrayerTimes";

export default function Home() {
  return (
    <div>
      <HeroSectionHome />
      <AboutSection />
      {/* <PrayerTimes/> */}
      <PrayerTimeSection />
      <OfferedServicesSection />
      <PillarOfIslamSection />
      <BlogEventsSection />
      <DonationSection />
      <IslamicScholarsSection />
      <Footer />
      
    </div>
  );
}
