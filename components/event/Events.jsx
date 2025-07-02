"use client";

import React, { useState } from "react";
import HeroSection from "../shared/HeroSection";
import Pagination from "../shared/Pagination";
import EventCard from "./EventCard";

const Events = ({ events }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Slice events for current page
  const startIndex = (currentPage - 1) * eventsPerPage;
  const paginatedEvents = events.slice(startIndex, startIndex + eventsPerPage);

  const heroData = {
    title: "Events",
  };

  return (
    <div className="pb-64">
      <HeroSection heroData={heroData} />
      <section className="pt-4 sm:pt-10 md:pt-[50px] bg-[#f8f9fa]">
        <div className="container mx-auto px-2 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {paginatedEvents.map((event, index) => (
              <EventCard key={index} event={event} path="upcoming" />
            ))}
          </div>
        </div>

        {/* ✅ Pagination Component */}
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
