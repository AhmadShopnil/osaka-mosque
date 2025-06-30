import { getBlogs, getEvents } from "@/helper/actions";
import { getSliceDesc } from "@/helper/getSliceDesc";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogCard from "../shared/BlogCard";
import EventSmallCard from "../shared/EventSmallCard";

const blogPosts = [
  {
    id: 1,
    title: "Is Islam a Liberal Philosophy?",
    date: "Nov 17, 2023",
    author: "William Blake",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.",
    image: "/images/post-img1-1.jpg",
    link: "/blog-detail",
  },
  {
    id: 2,
    title: "Is Islam a Liberal Philosophy?",
    date: "Nov 17, 2023",
    author: "William Blake",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.",
    image: "/images/post-img1-1.jpg",
    link: "/blog-detail",
  },
];

const BlogEventsSection = async () => {
  const blogs = await getBlogs();
  const events = await getEvents();

  // console.log("sort des", sort)

  return (
    <section className="bg-[#f8f9fa] py-[100px]">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-[40px]">
          <span className="text-[#00401A] text-[20px]">
            Latest News & Updates
          </span>
          <h2 className="font-semibold text-[#222] text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px]">
            Our Blog & Events
          </h2>
          <Image
            src="/images/pshape.png"
            alt="Design Shape"
            width={80}
            height={10}
            className="mx-auto mt-2"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 h-[480px]">
          {/* Blog Posts */}
          <div className="flex flex-col gap-6 w-full lg:w-3/5 ">
            {blogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Event */}
          <div className="flex flex-col gap-4 w-full lg:w-2/5">
            {events?.map((event, i) => (
              <EventSmallCard key={i} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogEventsSection;
