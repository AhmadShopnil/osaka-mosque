export function filterEventsByType(events, type = "upcoming") {
  const now = new Date();

  const monthMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };

  return events.filter((event) => {
    const getField = (name) =>
      event.extraFields?.find((f) => f.meta_name === name)?.meta_value || "";

    const day = parseInt(getField("day"));
    const year = parseInt(getField("year"));
    const monthName = getField("month").slice(0, 3); // e.g. "July" → "Jul"
    const month = monthMap[monthName] ?? now.getMonth();

    const timeString = getField("time").split("-")[0].trim(); // Take start time only
    const timeMatch = timeString.match(/(\d+):(\d+)\s*(AM|PM)?/i);
    let hours = 0, minutes = 0;

    if (timeMatch) {
      hours = parseInt(timeMatch[1], 10);
      minutes = parseInt(timeMatch[2], 10);
      const meridian = timeMatch[3];

      if (meridian?.toUpperCase() === "PM" && hours < 12) hours += 12;
      if (meridian?.toUpperCase() === "AM" && hours === 12) hours = 0;
    }

    const eventDate = new Date(year, month, day, hours, minutes);

    return type === "upcoming"
      ? eventDate >= now
      : type === "recent"
      ? eventDate < now
      : false;
  });
}
