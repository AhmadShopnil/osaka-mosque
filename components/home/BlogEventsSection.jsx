'use client';

import Image from 'next/image';
import React from 'react';

const BlogEventsSection = () => {

  const blogPosts = [
    {
      id: 1,
      title: 'Is Islam a Liberal Philosophy?',
      date: 'Nov 17, 2023',
      author: 'William Blake',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
      image: '/images/post-img1-1.jpg',
      link: '/blog-detail',
    },
    {
      id: 2,
      title: 'Is Islam a Liberal Philosophy?',
      date: 'Nov 17, 2023',
      author: 'William Blake',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.',
      image: '/images/post-img1-1.jpg',
      link: '/blog-detail',
    },
  ];

  const event = {
    date: '17',
    month: 'May',
    title: 'Importance Of Prayer In Islam',
    location: 'Dehli, Jamia Mosque',
    time: '04:00 pm - 08:00 pm',
    image: '/images/event-img1-1.jpg',
    link: '/event-detail',
  };

  return (
    <section className="bg-[#f8f9fa] py-[100px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-[40px]">
          <span className="text-[#00401A] text-[20px]">Latest News & Updates</span>
          <h2 className="font-semibold text-[#222] text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px]">
            Our Blog & Events
          </h2>
          <Image src="/images/pshape.png" alt="Design Shape" width={80} height={10} className="mx-auto mt-2" />
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Blog Posts */}
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
            {blogPosts.map((post) => (
            <div
            key={post.id}
            className="group flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative w-full h-[200px] lg:w-1/2 lg:h-auto overflow-hidden">
              <Image
                src={post.image}
                alt="Blog"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
            </div>
          
            {/* Content Section */}
            <div className="p-5 flex flex-col justify-between gap-4 lg:w-1/2">
              <div className="flex flex-col gap-3">
                <h5 className="text-xl font-semibold text-gray-800 hover:text-green-900 transition-colors duration-300">
                  <a href={post.link}>{post.title}</a>
                </h5>
          
                <ul className="flex flex-wrap text-sm text-gray-500 gap-x-4 gap-y-1">
                  <li className="flex items-center">
                    <i className="far fa-calendar-alt text-green-800 mr-1" />
                    {post.date}
                  </li>
                  <li className="flex items-center">
                    <i className="far fa-user text-green-800 mr-1" />
                    <a href="#" className="hover:text-green-900 transition">{post.author}</a>
                  </li>
                </ul>
          
                <p className="text-gray-700 text-sm leading-relaxed">{post.description}</p>
              </div>
          
              <a
                href={post.link}
                className="text-sm text-green-800 hover:underline"
              >
                View Details
              </a>
            </div>
          </div>
          
            
            ))}
          </div>

          {/* Event */}
          <div className="col-span-1 lg:col-span-2">
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative p-6 transition-all duration-300">
                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="text-center text-[#222] group-hover:text-white transition-colors duration-300">
                    <span className="text-[50px] font-bold leading-[50px]">{event.date}</span>
                    <div className="text-[18px]">{event.month}</div>
                  </div>
                  <div>
                    <h5>
                      <a
                        href={event.link}
                        className="text-[18px] font-semibold text-[#222] group-hover:text-white transition-colors duration-300"
                      >
                        {event.title}
                      </a>
                    </h5>
                    <ul className="mt-2 flex flex-col gap-1 text-[12px] text-[#666] group-hover:text-white transition-colors duration-300">
                      <li>
                        <i className="fas fa-map-marker-alt mr-1" /> {event.location}
                      </li>
                      <li>
                        <i className="far fa-clock mr-1" /> {event.time}
                      </li>
                    </ul>
                    <a
                      href={event.link}
                      className="inline-block mt-4 text-[#555] hover:text-[#00401A] group-hover:text-white transition-colors duration-300"
                    >
                      Event Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogEventsSection;
