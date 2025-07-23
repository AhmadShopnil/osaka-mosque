'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


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

const FatwaSwiper = ({fatwas}) => {



  return (
    <div className="bg-yellow-100 py-2 overflow-hidden ">
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
            <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
              🕋 <strong>{fatwa?.title}:</strong> {fatwa?.sub_title}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FatwaSwiper;
