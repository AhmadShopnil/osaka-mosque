import HomeSlider from "./HomeSlider";
import Header from "../common/header/Header";
import { getSettings, getSliders } from "@/helper/actions";
import { getMetaValueByMetaName } from "@/helper/metaHelpers";

const HeroHome = async () => {
  const sliders = await getSliders();
  const settings = await getSettings();


  // console.log("phone", phone)

  return (
    <section className="relative w-full ">
      <Header settings={settings} />
      {/* Hero Swiper */}
      <HomeSlider sliders={sliders} settings={settings} />
    </section>
  );
};

export default HeroHome;
