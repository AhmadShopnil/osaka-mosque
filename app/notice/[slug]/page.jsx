
import HeroSection from '@/components/shared/HeroSection';
import { getSingleNotice } from '@/helper/actions';
import React from 'react';

const NoticeDetails = async({ params }) => {
      const { slug } = await params
      const notice= await getSingleNotice(slug);
      const heroData = {
    title: notice?.name || "Notice",
  };

  return (

<div className="pb-64">
      {/* Hero Section */}
      <HeroSection heroData={heroData} />
      <div className="container mx-auto px-2 lg:px-8   flex flex-col md:flex-row gap-8 mt-10">
      
      <div className="">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
     
        {notice?.name}
      </h1>

      <div className="text-sm text-gray-500 mb-6">
        <p><span className="font-medium text-gray-700">{notice.sub_title}</span></p>
        {/* <p>Updated on: {formatDateTime(notice.updatedAt)}</p> */}
      </div>

 <div
            className="text-[#666] text-[16px] leading-relaxed prose max-w-none lg:prose-lg prose-p:mb-4"
            dangerouslySetInnerHTML={{
              __html: notice?.description || "<p>No content available.</p>",
            }}
          />

      {/* <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-gray-700 leading-relaxed">
        {notice?.description.split('\n').map((para, i) => (
          <p key={i} className="mb-4">{para}</p>
        ))}
      </div> */}


    </div>
      </div>
    </div>

    
  );
};

export default NoticeDetails;
