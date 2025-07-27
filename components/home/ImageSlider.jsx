'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const ImageSlider = ({ img_gallery,img_gallery_heading }) => {

  return (
    <div className="w-full max-w-6xl mx-auto mt-10  overflow-hidden shadow-xl">
     <div className="flex flex-col items-center mb-[40px] text-center">
       <h3 className='pb-[5px] text-[#00401A] text-[20px]'>{img_gallery_heading?.sub_title}</h3>
      <h3 className='font-semibold text-[#222] text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px]'>{img_gallery_heading?.title}</h3>
       <Image className="mt-2" src="/images/pshape.png" alt="Design Shape" width={100} height={50} />
     </div>
     <div>
       <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="w-full h-[300px] md:h-[400px]"
      >
        {img_gallery.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item?.featured_image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-sm"
            />
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    </div>
  );
};

export default ImageSlider;
