"use client";

import React, { useState } from "react";
import HeroSection from "../shared/HeroSection";
import Pagination from "../shared/Pagination";
import EventCard from "./EventCard";
import { CalendarX } from "lucide-react"; // Optional: nice icon

const Events = ({ events }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * eventsPerPage;
  const paginatedEvents = events.slice(startIndex, startIndex + eventsPerPage);

  const heroData = {
    title: "イベント",
  };

  return (
    <div className="pb-64">
      <HeroSection heroData={heroData} />
      <section className="pt-4 sm:pt-10 md:pt-[50px] bg-[#f8f9fa] min-h-[400px]">
        <div className="container mx-auto px-2 lg:px-8">
          {events.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center pb-10 pt-10">
              <CalendarX className="w-16 h-16 text-gray-400 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-600">
                No events found
              </h2>
              <p className="text-gray-500 mt-2">
                Please check back later for upcoming events.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {paginatedEvents.map((event, index) => (
                  <EventCard key={index} event={event} path="upcoming" />
                ))}
              </div>

              {/* ✅ Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
