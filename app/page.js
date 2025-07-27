import AboutSection from "@/components/home/AboutSection";
import BlogEventsSection from "@/components/home/BlogEventsSection";
import DonationPage from "@/components/home/DonationPage";
import DonationSection from "@/components/home/DonationSection";
import HeroHome from "@/components/home/HeroHome";
import ImageSlider from "@/components/home/ImageSlider";
import IslamicScholarsSection from "@/components/home/IslamicScholarsSection";
import NoticeSection from "@/components/home/NoticeSection";
import OfferedServicesSection from "@/components/home/OfferedServicesSection";
import PillarOfIslamSection from "@/components/home/PillerOfIslamSection";
import PrayerTimeSection from "@/components/home/PrayerTimeSection";
import Quran_Hadith_Section from "@/components/home/Quran_Hadith_Section ";
import { getDonationsMethods, getImageGallery, getNotices, getPage, getQuran_Hadith, getSettings } from "@/helper/actions";

export default async function Home() {
  const img_gallery = await getImageGallery();
   const about = await getPage("about-us");
  const donationMethods = await getDonationsMethods();
  const settings = await getSettings();
  const homePage = await getPage("home-sections-heading-management")

  const notices = await getNotices()
  const sections = homePage.sections_on_api;
  // console.log("sections", sections)
  const prayer_time = sections.find((s) => s.title_slug === "prayer_time");
  const offered_services = sections.find((s) => s.title_slug === "offered-services");
  const pillar_of_islam_info = sections.find((s) => s.title_slug === "pillar-of-islam");
  const our_blog_events = sections.find((s) => s.title_slug === "islamic-blogs-and-events");
  const make_your_donation = sections.find((s) => s.title_slug === "make-your-doantion");
  const islamic_scholars = sections.find((s) => s.title_slug === "islamic-scholars");
    const img_gallery_heading = sections.find((s) => s.title_slug === "gallery");
  // const quran_hadith_heading = sections.find((s) => s.title_slug === "quran-hadith");
    const notice_heading = sections.find((s) => s.title_slug === "notice-board");
  //  console.log("prayer_time from home", make_your_donation)

  return (
    <div>
      {/* <GoogleTranslateDropdown /> */}
      <HeroHome />
      {/* <HeroSectionHome /> */}
      {about?.slug && <AboutSection about={about} settings={settings} />}
      <NoticeSection notices={notices}  notice_heading={notice_heading} settings={settings}/>
      {/* <Quran_Hadith_Section quotes={quotes}  quran_hadith_heading={quran_hadith_heading}/> */}
      <PrayerTimeSection settings={settings} prayer_time={prayer_time} />

<ImageSlider img_gallery={img_gallery} img_gallery_heading={img_gallery_heading} />

      <OfferedServicesSection settings={settings} offered_services={offered_services} />
      <PillarOfIslamSection settings={settings} pillar_of_islam_info={pillar_of_islam_info} />
      <BlogEventsSection settings={settings} our_blog_events={our_blog_events} />
      {/* <DonationSection /> */}
      <div id="donation">
        <DonationSection settings={settings} donationMethods={donationMethods} make_your_donation={make_your_donation} />
      </div>
      <IslamicScholarsSection settings={settings} islamic_scholars={islamic_scholars} />
    </div>
  );
}
