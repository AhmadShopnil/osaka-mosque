
import AllBlogs from "@/components/blog/AllBlogs";
import BackToHomeButton from "@/components/shared/BackToHomeButton";
import HeroSection from "@/components/shared/HeroSection";
import { getBlogs, getSettings } from "@/helper/actions";

export const metadata = {
  title: "Latest Blogs | Osaka Masjid",
  description: "Explore our latest Islamic articles, reflections, and insights.",
};

const BlogPage = async () => {
  const blogs = await getBlogs();
const settings = await getSettings();
  const heroData = {
    title: "",
    subtitle: "",
  };

  return (
    <div className="pb-64">
      <HeroSection heroData={heroData} />
      <AllBlogs blogs={blogs} settings={settings} />
      
    </div>
  );
};

export default BlogPage;
