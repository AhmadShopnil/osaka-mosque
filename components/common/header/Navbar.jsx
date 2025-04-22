// 'use client';

// import React, { useEffect } from 'react';

// const Navbar = () => {
//   useEffect(() => {
//     const menuToggle = document.getElementById('menuToggle');
//     const closeMenu = document.getElementById('closeMenu');
//     const sidebar = document.getElementById('sidebar');
//     const eventToggle = document.getElementById('eventToggle');
//     const eventDropdown = document.getElementById('eventDropdown');
//     const eventArrow = document.getElementById('eventArrow');

//     if (menuToggle) {
//       menuToggle.addEventListener('click', () => {
//         sidebar.style.right = '0';
//       });
//     }

//     if (closeMenu) {
//       closeMenu.addEventListener('click', () => {
//         sidebar.style.right = '-100%';
//       });
//     }

//     if (eventToggle) {
//       eventToggle.addEventListener('click', () => {
//         if (eventDropdown.style.display === 'block') {
//           eventDropdown.style.display = 'none';
//           eventArrow.innerText = '▼';
//         } else {
//           eventDropdown.style.display = 'block';
//           eventArrow.innerText = '▲';
//         }
//       });
//     }
//   }, []);

//   return (
//     <>
//       {/* Navbar Section */}
//       <div className="absolute top-[38px] lg:top-[60px] bg-black/20 right-0 left-0 z-30">
//         <div className="flex container justify-between items-center">
//           {/* Logo */}
//           <div className="logo">
//             <a href="index.html" className="w-[80%]">
//               <img
//                 className="lg:w-[173px] w-[160px] lg:py-[15px] py-[10px] object-cover"
//                 src="images/logo1.png"
//                 alt="logo"
//               />
//             </a>
//           </div>

//           {/* Hamburger Menu Button (Mobile) */}
//           <button
//             id="menuToggle"
//             className="md:hidden text-white text-2xl h-[40px] w-[40px] flex justify-center items-center hover:bg-[#00401A] duration-700 leading-[40px] bg-[#80b918]"
//           >
//             <i className="fa fa-list-ul font-[900] text-[13px]"></i>
//           </button>

//           {/* Navigation (Desktop) */}
//           <nav className="hidden md:flex">
//             <ul className="flex gap-6 text-white">
//               <li><a href="index.html" className="hover:text-red-400">Home</a></li>
//               <li className="relative group">
//                 <a className="cursor-pointer flex items-center gap-1">
//                   Event
//                   <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 {/* Dropdown */}
//                 <ul className="invisible group-hover:visible duration-500 mt-2 group-hover:opacity-100 opacity-0 absolute bg-white min-w-[180px] text-black transition-all shadow-lg">
//                   <li><a href="/event.html" className="block px-4 py-2 hover:text-[#00401A]">Upcoming Events</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:text-[#00401A]">Past Events</a></li>
//                   <li><a href="#" className="block hover:bg-gray-200 px-4 py-2">Event Gallery</a></li>
//                 </ul>
//               </li>
//               <li><a href="#">Our Courses</a></li>
//               <li><a href="#">Our Services</a></li>
//               <li><a href="#">Contact</a></li>
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Sidebar (Mobile) */}
//       <div id="sidebar" className="fixed right-[-100%] top-0 w-64 h-full bg-black shadow-lg transition-all duration-300 z-50">
//         <div className="flex justify-end items-center px-6 py-4 border-b">
//           <button
//             id="closeMenu"
//             className="text-2xl text-white ml-auto duration-700 h-[40px] w-[40px] hover:bg-[#6a994e] bg-[#303030] flex items-center justify-center text-center"
//           >
//             <i className="fa fa-times font-[900] text-[13px] text-white"></i>
//           </button>
//         </div>
//         <ul className="flex flex-col gap-4 p-6 text-white">
//           <li><a href="index.html" className="block hover:text-red-500">Home</a></li>
//           <li className="relative">
//             <button id="eventToggle" className="w-full text-left flex justify-between items-center text-white">
//               Event
//               <span id="eventArrow">▼</span>
//             </button>
//             <ul id="eventDropdown" className="hidden text-white pl-4 mt-2 border-l-2 border-gray-300">
//               <li><a href="/event.html" className="block py-1">Upcoming Events</a></li>
//               <li><a href="#" className="block py-1">Past Events</a></li>
//               <li><a href="#" className="block py-1">Event Gallery</a></li>
//             </ul>
//           </li>
//           <li><a href="#" className="block hover:text-red-500">Our Courses</a></li>
//           <li><a href="#" className="block hover:text-red-500">Our Services</a></li>
//           <li><a href="#" className="block hover:text-red-500">Contact</a></li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;
