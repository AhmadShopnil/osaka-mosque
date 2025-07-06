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

const pastEvents = filterEventsByType(events, "recent");

  return (
    <div>
      <Events events={pastEvents} />
    </div>
  );
};

export default Page;
