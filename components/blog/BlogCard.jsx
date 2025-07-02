import { formatDate } from "@/helper/formatDate";
import { getMetaValueFromExtraFields } from "@/helper/metaHelpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const BlogCard = ({ post }) => {

const date=formatDate(post?.created_at)
const short_description = getMetaValueFromExtraFields(
    post,
    "short_description"
  );


  return (
    <div className="group flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden 
    inset-shadow-xs h-full  duration-300">
      {/* Image Section */}
      <div className="relative w-full h-[200px] lg:w-1/2 lg:h-auto overflow-hidden">
        <Image
          src={post?.featured_image}
          alt={post?.name}
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
            <Link href={`/blogs/${post?.slug}`}>{post?.name}</Link>
          </h5>

          <ul className="flex flex-wrap text-sm text-gray-500 gap-x-4 gap-y-1">
            <li className="flex items-center">
              <i className="far fa-calendar-alt text-green-800 mr-1" />
              {date || "No date Available"}
            </li>
            <li className="flex items-center">
              <i className="far fa-user text-green-800 mr-1" />
              <a href="#" className="hover:text-green-900 transition">
                {post?.meta_author}
              </a>
            </li>
          </ul>
          {/* <div
            className="text-gray-700 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post?.description.slice(0, 50),
            }}
          /> */}

          <p className="text-gray-700 text-sm leading-relaxed">{short_description}</p>
        </div>

        <Link href={`/blogs/${post?.slug}`} className="text-sm text-green-800 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
