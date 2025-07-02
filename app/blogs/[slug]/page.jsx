
import { getBlogs, getSingleBlog } from "@/helper/actions";
import { notFound } from "next/navigation";
import SingleBlog from "@/components/blog/SingleBlog";

// Optional: Dynamic SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  if (!blog) return {};

  return {
    title: blog?.meta_title || blog?.name,
    description: blog?.meta_description || blog?.name,
    openGraph: {
      title: blog?.meta_title || blog?.name,
      description: blog?.meta_description || blog?.name,
      images: [
        {
          url: blog?.featured_image ,
          width: 1200,
          height: 630,
          alt: blog?.meta_title || "Blog Image",
        },
      ],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params
  const blog= await getSingleBlog(slug);
  const blogs = await getBlogs();

  if (!blog) return notFound();

  return (
    <div className="">
      <SingleBlog blog={blog} blogs={blogs} />
    </div>
  );
}
