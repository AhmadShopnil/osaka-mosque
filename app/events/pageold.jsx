// 'use client';

// import EventCard from "@/components/event/EventCard";
// import HeroSection from "@/components/event/HeroSection";
// import Pagination from "@/components/shared/Pagination";
// import React, { useState } from "react";

// const events = [
//     {
//       image: 'images/event-img1.jpg',
//       day: '25',
//       month: 'Aug',
//       days: 85,
//       hours: 32,
//       minutes: 54,
//       seconds: 33,
//       title: 'Importance of Namaz?',
//       location: 'Delhi, Jamia Mosque',
//       time: '4:00 pm - 08:00 pm',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.',
//       link: 'blog-detail.html',
//     },  {
//       image: 'images/event-img1.jpg',
//       day: '25',
//       month: 'Aug',
//       days: 85,
//       hours: 32,
//       minutes: 54,
//       seconds: 33,
//       title: 'Importance of Namaz?',
//       location: 'Delhi, Jamia Mosque',
//       time: '4:00 pm - 08:00 pm',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.',
//       link: 'blog-detail.html',
//     },  {
//       image: 'images/event-img1.jpg',
//       day: '25',
//       month: 'Aug',
//       days: 85,
//       hours: 32,
//       minutes: 54,
//       seconds: 33,
//       title: 'Importance of Namaz?',
//       location: 'Delhi, Jamia Mosque',
//       time: '4:00 pm - 08:00 pm',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.',
//       link: 'blog-detail.html',
//     },  {
//       image: 'images/event-img1.jpg',
//       day: '25',
//       month: 'Aug',
//       days: 85,
//       hours: 32,
//       minutes: 54,
//       seconds: 33,
//       title: 'Importance of Namaz?',
//       location: 'Delhi, Jamia Mosque',
//       time: '4:00 pm - 08:00 pm',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.',
//       link: 'blog-detail.html',
//     },
  
//   ];
  



// const Page = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const totalPages = 10;
  
//     const handlePageChange = (page) => {
//       setCurrentPage(page);
//       // Optional: trigger fetch or router navigation
//     };

// const heroData={
//   title:"Events"
// }



//   return (
//     <div>
//       <HeroSection heroData={heroData} />
//       <section className="pt-[100px] bg-[#f8f9fa]">
//         <div className="container mx-auto px-2 lg:px-8">
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
//             {events.map((event, index) => (
//               <EventCard key={index} {...event} />
//             ))}
//           </div>
//         </div>
//         <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//       </section>
//     </div>
//   );
// };

// export default Page;
