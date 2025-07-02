"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Pagination from "@/components/shared/Pagination";
import { formatDate } from "@/helper/formatDate";

const AllBlogs = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil((blogs.length - 1) / blogsPerPage);

  const featuredBlog = blogs[0];
  const currentBlogs = blogs
    .slice(1)
    .slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  return (
    <section className="bg-[#f9f9f9] pt-10 ">
      <div className="container mx-auto  ">
        {/* Header */}
        {/* <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#00401A]">{featuredBlog?.name}</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover our thoughts, stories, and updates on Islamic knowledge, events, and more.
          </p>
        </div> */}

        {/* Featured Blog */}
        <Link href={`/blogs/${featuredBlog.slug}`}>
          <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg 
          transition mb-20">
            <Image
              src={featuredBlog.featured_image || "/images/default.jpg"}
              alt={featuredBlog.name}
              width={1200}
              height={600}
              className="w-full h-[350px] sm:h-[450px] object-cover transition-transform 
              duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6
             flex flex-col justify-end">
              <span className="text-white text-sm mb-2">
                <Calendar className="inline w-4 h-4 mr-1" />
                {formatDate(featuredBlog.created_at)}
              </span>
              <h2 className="text-white text-2xl sm:text-4xl font-semibold leading-snug">
                {featuredBlog.name}
              </h2>
            </div>
          </div>
        </Link>

        {/* Grid of Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentBlogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.id}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden group transition-all duration-300">
                <Image
                  src={blog.featured_image || "/images/default.jpg"}
                  alt={blog.name}
                  width={600}
                  height={350}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#00401A]" />
                    {formatDate(blog.created_at)}
                  </p>
                  <h3 className="text-lg font-semibold text-[#00401A] group-hover:text-[#80b918] line-clamp-2">
                    {blog.name}
                  </h3>
                  <p className="text-gray-600 mt-2 line-clamp-3 text-sm">
                    {blog.meta_description || blog.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-2 lg:mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
