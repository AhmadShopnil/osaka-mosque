import React from "react";
import Events from "@/components/event/Events";
import { getEvents } from "@/helper/actions";
import { filterEventsByType } from "@/helper/filterEventsByType";


// ✅ Metadata generation
export async function generateMetadata() {
  return {
    title: "Events | Osaka Masjid",
    description:
      "Explore the spiritual and educational services offered by Osaka Masjid including Quran and Hadith learning.",
  };
}

const Page = async () => {
  const events = await getEvents();


const upcomingEvents  = filterEventsByType(events, "upcoming"); // or "recent"

  // console.log("Events from event server", upcomingEvents);

  return (
    <div>
      <Events events={upcomingEvents } />
    </div>
  );
};

export default Page;
