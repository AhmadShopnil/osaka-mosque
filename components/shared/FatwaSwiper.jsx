'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';


const fatwas = [
  {
    id: 1,
    title: 'Is online business halal?',
    summary: 'Buying and selling through online platforms is halal if done with honesty and transparency.',
  },
  {
    id: 2,
    title: 'Can Muslims invest in stocks?',
    summary: 'Investing in halal stocks is permissible as long as the company’s business is Shariah-compliant.',
  },
  {
    id: 3,
    title: 'Is Bitcoin allowed in Islam?',
    summary: 'Use of cryptocurrency is debated; permissibility depends on usage and absence of interest (riba).',
  },
  {
    id: 4,
    title: 'Can women lead prayers?',
    summary: 'A woman may lead prayer for other women but not in a mixed-gender congregation.',
  },
  {
    id: 5,
    title: 'Is celebrating birthdays allowed?',
    summary: 'While not forbidden, Muslims are advised to avoid imitating non-Islamic traditions without purpose.',
  },
];

const FatwaSwiper = ({fatwas,fatwa_heading_bar}) => {



  return (
    <div className=" overflow-hidden flex ">
      <div className='overflow-hidden bg-white py-2'>
        <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView="auto"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={15000}
        loop={true}
        className="flex items-center"
        allowTouchMove={false}
      >
        {fatwas.map((fatwa) => (
          <SwiperSlide
            key={fatwa.id}
            style={{ width: 'auto' }}
            className="!w-auto px-4 flex items-center"
          >
            <Link 
            href={`/fatwa/${fatwa?.slug}`}
            className="text-sm font-medium text-gray-800 whitespace-nowrap ">
              🕋 <strong>{fatwa?.name}:</strong> {fatwa?.sub_title}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className='bg-[#0D542B] text-white py-2 px-3 text-sm
       w-[180px] flex items-center justify-center'>
        <span> {fatwa_heading_bar}</span>
      </div>
    </div>
  );
};

export default FatwaSwiper;
