'use client';


import React, { useState } from "react";
import HeroSection from "./HeroSection";

import Pagination from "../shared/Pagination";
import EventCard from "./EventCard";

const events = [
    {
      image: '/images/event-img1.jpg',
      day: '25',
      month: 'Aug',
      days: 85,
      hours: 32,
      minutes: 54,
      seconds: 33,
      title: 'Importance of Namaz?',
      location: 'Delhi, Jamia Mosque',
      time: '4:00 pm - 08:00 pm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.',
      link: '1',
    },  {
      image: '/images/event-img1.jpg',
      day: '25',
      month: 'Aug',
      days: 85,
      hours: 32,
      minutes: 54,
      seconds: 33,
      title: 'Importance of Namaz?',
      location: 'Delhi, Jamia Mosque',
      time: '4:00 pm - 08:00 pm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.',
      link: '2',
    },  {
      image: '/images/event-img1.jpg',
      day: '25',
      month: 'Aug',
      days: 85,
      hours: 32,
      minutes: 54,
      seconds: 33,
      title: 'Importance of Namaz?',
      location: 'Delhi, Jamia Mosque',
      time: '4:00 pm - 08:00 pm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.',
      link: '3',
    },  {
      image: '/images/event-img1.jpg',
      day: '25',
      month: 'Aug',
      days: 85,
      hours: 32,
      minutes: 54,
      seconds: 33,
      title: 'Importance of Namaz?',
      location: 'Delhi, Jamia Mosque',
      time: '4:00 pm - 08:00 pm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.',
      link: '4',
    },
  
  ];
  



const Events = ({events}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
      // Optional: trigger fetch or router navigation
    };


const heroData={
  title:"Events"
}



  return (
    <div className=" pb-64">
      <HeroSection heroData={heroData} />
      <section className="pt-4 sm:pt-10 md:pt-[100px] bg-[#f8f9fa]">
        <div className="container mx-auto px-2 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <EventCard key={index} event={event}  path="upcoming" />
            ))}
          </div>
        </div>
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </section>
    </div>
  );
};

export default Events;
