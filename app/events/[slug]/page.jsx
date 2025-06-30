import SingleEvents from "@/components/event/SingleEvents";
import { getSingleEvent } from "@/helper/actions";
import React from "react";

const Page = async ({ params }) => {
  const { slug } = await params;
  const event = await getSingleEvent(slug);
  // console.log("event--", event);

  return (
    <div>
      <SingleEvents event={event} />
    </div>
  );
};

export default Page;
