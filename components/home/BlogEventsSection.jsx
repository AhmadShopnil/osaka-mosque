import { getBlogs, getEvents } from "@/helper/actions";
import Image from "next/image";
import React from "react";
import BlogCard from "../blog/BlogCard";
import EventSmallCard from "../event/EventCardHome";
import { getMetaDescriptionByMetaName, getMetaValueByMetaName } from "@/helper/metaHelpers";


const BlogEventsSection = async ({settings}) => {
  const blogs = await getBlogs();
  const events = await getEvents();

  const our_blog_events_heading = getMetaValueByMetaName(settings, "our_blog___events") || "";
    const our_blog_events_sub_heading = getMetaDescriptionByMetaName(settings, "our_blog___events") || "";
  // console.log("sort des", sort)

  return (
    <section className="bg-[#f8f9fa] pt-[60px] pb-[80px] ">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-[40px]">
          <span className="text-[#00401A] text-[20px]">
            {our_blog_events_sub_heading}
          </span>
          <h2 className="font-semibold text-[#222] text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px]">
           {our_blog_events_heading}
          </h2>
          <Image
            src="/images/pshape.png"
            alt="Design Shape"
            width={80}
            height={10}
            className="mx-auto mt-2"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:h-[480px]">
          {/* Blog Posts */}
          <div className="flex flex-col gap-6 w-full lg:w-3/5 h-full ">
            {blogs?.slice(0,2).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Event */}
          <div className="flex flex-col gap-4 w-full lg:w-2/5 h-full">
            {events?.slice(0,3).map((event, i) => (
              <EventSmallCard key={i} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogEventsSection;
