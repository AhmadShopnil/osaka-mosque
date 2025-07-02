'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Link from 'next/link';

function extractDate(extraFields) {
  const getField = (name) =>
    extraFields.find((f) => f.meta_name === name)?.meta_value;

  const day = getField("day")?.padStart(2, '0');
  const monthName = getField("month");
  const year = getField("year");

  const monthMap = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };

  const month = monthMap[monthName ?? ""] ?? "01";

  return `${year}-${month}-${day}`;
}

export default function EventCalendar({ events: rawEvents }) {
  const events = rawEvents.map((event) => ({
    title: event?.name,
    date: extractDate(event?.extraFields),
    slug: event?.slug,
  }));

  const handleDateClick = (arg) => {
    alert(`Date clicked: ${arg.dateStr}`);
  };

  const renderEventContent = (eventInfo) => {
    const slug = eventInfo.event.extendedProps.slug;
    return (
      <Link
        href={`/events/${slug}`}
        className="text-white underline hover:text-gray-100 p-1"
      >
        {eventInfo.event.title.slice(0,22)+".."}
      </Link>
    );
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
      events={events}
      eventContent={renderEventContent}
    />
  );
}
