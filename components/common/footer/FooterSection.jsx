// 'use client';

// import Image from 'next/image';

// export default function FooterSection() {
//   return (
//     <section className="p-footer">
//       <div className="bg-[#f8f9fa] w-full h-full">
//         <div className="relative bg-[#00401A] py-[270px] pb-[50px]">
//           <Image
//             className="absolute -z-10 -top-68 opacity-[0.6] hidden lg:block"
//             src="/images/bg-vector.png"
//             alt=""
//             width={1920}
//             height={500}
//           />
//           <div className="lg:-top-44 right-0 bottom-0 left-0 absolute container">
//             <div className="bg-white rounded-lg pb-5">
//               <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white px-8 py-10 rounded-lg">

//                 {/* About Us */}
//                 <div>
//                   <h2 className="mb-[25px] font-semibold text-xl">About Us</h2>
//                   <p className="mb-4 text-gray-600 text-[13px] leading-[24px]">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua tempor.
//                   </p>
//                   <div className="w-full h-24 mb-[15px]">
//                     <iframe
//                       className="rounded-lg w-full h-full"
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902120515761!2d90.390242!3d23.750885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89d043ca9a1%3A0xf0b57c0cf735b75e!2sDhaka!5e0!3m2!1sen!2sbd!4v1614853909120!5m2!1sen!2sbd"
//                       allowFullScreen
//                       loading="lazy"
//                     ></iframe>
//                   </div>
//                   <span className="text-[16px] text-[#212529]">
//                     <i className="fas mr-[10px] fa-map-marker-alt theme-clr"></i>Find us on Map
//                   </span>
//                 </div>

//                 {/* Latest Blogs */}
//                 <div>
//                   <h2 className="mb-[25px] font-semibold text-xl">Latest Blogs</h2>
//                   <div className="flex gap-3 p-4 rounded-lg">
//                     <Image
//                       src="/images/rcnt-img1.jpg"
//                       alt="Blog Image"
//                       width={64}
//                       height={64}
//                       className="rounded-md w-full h-16 object-cover"
//                     />
//                     <div>
//                       <h3 className="mt-2 font-[400] text-[14px] hover:text-[#00401A]">Help the poor people</h3>
//                       <p className="text-[#00401A] text-[12px]">
//                         <i className="mr-1 far fa-calendar-alt"></i> March 25, 2025
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Contact Info */}
//                 <div>
//                   <h2 className="mb-[25px] font-semibold text-xl">Contact Info</h2>
//                   {[1, 2, 3].map((_, i) => (
//                     <p key={i} className="py-2 border-[#ddd] border-b border-dashed">
//                       <strong className="text-[#ddd] text-[12px]">
//                         <i className="mr-2 text-[#00401A] far fa-envelope theme-clr"></i>
//                       </strong>
//                       info@example.com
//                     </p>
//                   ))}
//                   <div className="flex items-center gap-6 pt-6 text-[#222]">
//                     <i className="text-[14px] fab fa-facebook-f"></i>
//                     <i className="text-[14px] fab fa-twitter"></i>
//                     <i className="text-[14px] fab fa-linkedin-in"></i>
//                     <i className="text-[14px] fab fa-google-plus-g"></i>
//                   </div>
//                 </div>

//                 {/* Quick Contact */}
//                 <div>
//                   <h2 className="mb-[25px] font-semibold text-xl">Quick Contact</h2>
//                   <input type="text" placeholder="Your Name" className="mb-3 p-2 border border-gray-300 rounded-md outline-none w-full" />
//                   <input type="email" placeholder="Your Email" className="mb-3 p-2 border border-gray-300 rounded-md outline-none w-full" />
//                   <textarea placeholder="Your Message" rows="4" className="mb-3 p-2 border border-gray-300 rounded-md outline-none w-full"></textarea>
//                   <button className="bg-[#00401A] hover:bg-[#5d2b00] px-[45px] py-[14px] rounded-md text-[15px] text-white uppercase transition">
//                     Submit Now
//                   </button>
//                 </div>
//               </div>

//               <div className="flex items-center max-w-full justify-center text-[10px] gap-2">
//                 <a className="flex items-center" href="#" target="_blank" rel="noopener noreferrer">BISMILLAH</a>
//                 <span className="flex items-center">© 2024 / ALL RIGHTS RESERVED</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-[#00401A] py-5">
//             <div className="container">
//               <div className="flex lg:flex-row flex-col justify-center gap-4 icons">
//                 <h4 className="flex-1 text-[24px] text-white text-center lg:text-start">Subscribe, For Weekly Updates</h4>
//                 <form className="flex-1 lg:flex-auto">
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="Enter your email address"
//                       className="bg-white px-[45px] py-[10px] border border-white rounded-full focus:outline-none w-full"
//                     />
//                     <button
//                       type="submit"
//                       className="top-0 btn-hidden right-0 bottom-0 absolute bg-[#5d2b00] hover:bg-black ml-2 px-[45px] py-[10px] rounded-full text-white uppercase tracking-tighter transition"
//                     >
//                       SIGN UP
//                     </button>
//                     <button
//                       type="submit"
//                       className="bg-[#5d2b00] btn-visible hover:bg-black mt-2 w-full py-[10px] rounded-full text-white uppercase tracking-tighter transition"
//                     >
//                       SIGN UP
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
