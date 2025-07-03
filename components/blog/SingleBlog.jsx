import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import HeroSection from "../shared/HeroSection";
import BlogSmallCard from "./BlogSmallCard";


const SingleBlog = ({ blog, blogs }) => {
  // Extracting date parts
  const [day, month] = (blog?.post_date || "01 Jan").split(" ");
  const heroData = {
    title: blog?.name || "Blog",
  };

  // console.log("blog date", blog)

  return (
    <div className="pb-64">
      {/* Hero Section */}
      <HeroSection heroData={heroData} />
      <div className="w-full px-2 sm:px-4 md:px-20 flex flex-col md:flex-row gap-8 mt-14">
        {/* Left Content */}
        <div className="w-full md:w-3/4 min-h-screen">
          {/* Blog Image */}
          <div className="relative">
            <Image
              src={blog?.featured_image || "/images/default-blog.jpg"}
              alt={blog?.name}
              width={1000}
              height={1000}
              className="w-full h-96 object-cover rounded"
            />

            {/* Date Badge */}
            <div className="top-0 left-0 z-10 py-[8px] px-[5px] leading-[22px] absolute w-[60px] text-white">
              <div className="absolute inset-0 bg-[#53765B] opacity-60 rounded" />
              <span className="relative flex flex-col items-center font-semibold text-[22px] z-10">
                {day}
                <i className="text-[14px] font-normal">{month}</i>
              </span>
            </div>
          </div>

          {/* Blog Meta */}
          <div className="flex items-start lg:items-center flex-col sm:flex-row gap-3 text-[#666] text-[14px] py-5">
            <span>
              <FaUser className="mr-2 text-[#00401A] inline" />
              {blog?.meta_author || "Admin"}
            </span>
            <span>
              <FaCalendarAlt className="mr-2 text-[#00401A] inline" />
              {blog?.post_date || "Unknown date"}
            </span>
          </div>

          {/* Blog Title */}
          <h1 className="text-3xl font-bold text-[#222] mb-4">{blog?.name}</h1>

          {/* Blog Content */}
          <div
            className="text-[#666] text-[16px] leading-relaxed prose max-w-none lg:prose-lg prose-p:mb-4"
            dangerouslySetInnerHTML={{
              __html: blog?.description || "<p>No content available.</p>",
            }}
          />
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-1/4 min-h-screen">
          <div className="bg-white w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Recent Blogs
            </h3>
            <div className="flex flex-col gap-4">
              {blogs?.slice(0, 5).map((recent, index) => (
                <Link key={index} href={`/blogs/${recent?.slug}`}>
                  <BlogSmallCard blog={recent} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
