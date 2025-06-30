import HomeSlider from "./HomeSlider";
import Header from "../common/header/Header";
import { getSliders } from "@/helper/actions";

const HeroHome = async () => {
  const sliders = await getSliders();

  // console.log("slider", sliders)
  return (
    <section className="relative w-full h-screen">
      <Header />
      {/* Hero Swiper */}
      <HomeSlider sliders={sliders} />
    </section>
  );
};

export default HeroHome;
