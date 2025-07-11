"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

import BlogCard from "../blog/BlogCard";

const BlogSlider = ({ blogs }) => {
  return (
    <Swiper
      direction="vertical"
      spaceBetween={24}
      slidesPerView={2}
      mousewheel={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Mousewheel]}
      className="h-full w-full"
    >
      {blogs?.map((post) => (
        <SwiperSlide key={post?.id}>
          <BlogCard post={post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogSlider;
