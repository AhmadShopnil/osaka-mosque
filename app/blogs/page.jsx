
import AllBlogs from "@/components/blog/AllBlogs";
import HeroSection from "@/components/shared/HeroSection";
import { getBlogs } from "@/helper/actions";

export const metadata = {
  title: "Latest Blogs | Osaka Masjid",
  description: "Explore our latest Islamic articles, reflections, and insights.",
};

const BlogPage = async () => {
  const blogs = await getBlogs();

  const heroData = {
    title: "",
    subtitle: "",
  };

  return (
    <div className="pb-64">
      <HeroSection heroData={heroData} />
      <AllBlogs blogs={blogs} />
    </div>
  );
};

export default BlogPage;
