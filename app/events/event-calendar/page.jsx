// app/event-calendar/page.tsx (or pages/event-calendar.tsx if using pages directory)

import EventCalendar from "@/components/event/Calender";
import HeroSection from "@/components/shared/HeroSection";
import { getEvents } from "@/helper/actions";


export default async function CalendarPage() {

const heroData={
  title:"Event Calendar"
}
const events=await getEvents()
// console.log("events", events)

  return (
    <div className="pb-96">
        <HeroSection heroData={heroData} />
      <div className="container mx-auto px-2 lg:px-8 pt-8">
        <EventCalendar events={events} />
      </div>
    </div>
  );
}
