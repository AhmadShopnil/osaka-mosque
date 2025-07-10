import AboutSection from "@/components/home/AboutSection";
import BlogEventsSection from "@/components/home/BlogEventsSection";
import DonationPage from "@/components/home/DonationPage";
import HeroHome from "@/components/home/HeroHome";
import IslamicScholarsSection from "@/components/home/IslamicScholarsSection";
import OfferedServicesSection from "@/components/home/OfferedServicesSection";
import PillarOfIslamSection from "@/components/home/PillerOfIslamSection";
import PrayerTimeSection from "@/components/home/PrayerTimeSection";
import { getPage, getSettings } from "@/helper/actions";

export default async function Home() {
  const settings = await getSettings();
  const homePage = await getPage("home-")
  const sections = homePage.sections_on_api;
  // console.log("sections", sections)

  const prayer_time = sections.find((s) => s.title_slug === "prayer-time");
  const offered_services = sections.find((s) => s.title_slug === "offered-services");
  const pillar_of_islam_info = sections.find((s) => s.title_slug === "pillar-of-islam");
  const our_blog_events = sections.find((s) => s.title_slug === "our-blog-events");
  const make_your_donation = sections.find((s) => s.title_slug === "make-your-donation");
  const islamic_scholars = sections.find((s) => s.title_slug === "islamic-scholars");

  //  console.log("offered_services", prayer_time)

  return (
    <div>
      {/* <GoogleTranslateDropdown /> */}
      <HeroHome />
      {/* <HeroSectionHome /> */}
      <AboutSection />
      {/* <PrayerTimes/> */}
      <PrayerTimeSection settings={settings} prayer_time={prayer_time} />
      <OfferedServicesSection settings={settings} offered_services={offered_services} />
      <PillarOfIslamSection settings={settings} pillar_of_islam_info={pillar_of_islam_info} />
      <BlogEventsSection settings={settings} our_blog_events={our_blog_events} />
      {/* <DonationSection /> */}
      <div id="donation">
        <DonationPage settings={settings} make_your_donation={make_your_donation} />
      </div>
      <IslamicScholarsSection settings={settings} islamic_scholars={islamic_scholars} />
    </div>
  );
}
