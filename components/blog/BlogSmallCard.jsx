import Image from "next/image";
import React from "react";
import { Calendar } from "lucide-react";
import { formatDate } from "@/helper/formatDate";

const BlogSmallCard = ({ blog }) => {
  const date = formatDate(blog?.created_at);

  return (
    <div className="flex gap-3">
      <div className="relative w-[60px] h-[60px]">
        <Image
          src={blog?.featured_image}
          alt={blog?.name}
          fill
          className="object-cover rounded"
        />
      </div>
      <div>
        <h3 className="font-medium">
          {blog?.name.length > 20
            ? blog?.name.slice(0, 20) + "..."
            : blog?.name}
        </h3>
        <p className="text-sm text-green-900 flex items-center gap-1 mt-1">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogSmallCard;
