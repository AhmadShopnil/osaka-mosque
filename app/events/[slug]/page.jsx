import SingleEvents from "@/components/event/SingleEvents";
import { getSingleEvent } from "@/helper/actions";
import { BASE_URL } from "@/helper/baseUrl";

// export async function generateMetadata({ params }) {
//   const event = await getSingleEvent(params.slug);

//   return {
//     title: event?.meta_title || event?.name || "Event Details",
//     description: event?.meta_description || event?.name || "View event details",
//     openGraph: {
//       title: event?.meta_title,
//       description:
//         event?.meta_description || event?.meta_title || event?.name,
//       type: "article",
//       images: [
//         {
//           url: event?.featured_image || "/default-og-image.jpg",
//           width: 1200,
//           height: 630,
//           alt: event?.meta_title || "Event Image",
//         },
//       ],
//     },
//   };
// }

export async function generateMetadata({ params }) {
  const { slug } =await params;
  const API_URL = `${BASE_URL}/api/v1/post?slug=${slug}`;

  // console.log("from action slug", slug)
  const res = await fetch(API_URL, {
    next: { revalidate: 30 },
  });
  const json = await res.json();
  // console.log("from action", json)

  const event = json?.data || {};

  return {
    title: event?.meta_title || event?.name || "Event Details",
    description: event?.meta_description || event?.name || "View event details",
    openGraph: {
      title: event?.meta_title,
      description: event?.meta_description || event?.meta_title || event?.name,
      type: "article",
      images: [
        {
          url: event?.featured_image || "/default-og-image.jpg",
          width: 1200,
          height: 630,
          alt: event?.meta_title || "Event Image",
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const event = await getSingleEvent(params.slug);
  return <SingleEvents event={event} />;
}
