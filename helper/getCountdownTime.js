// utils/getCountdownTime.ts

export function getCountdownTime({
  day,
  month,
  year,
  time = "00:00",
}) {
  try {
    // Normalize time format (e.g., "11:00 am - 12:30 pm" => "11:00 am")
    const startTime = time.split("-")[0].trim();

    // Create full date string
    const dateString = `${month} ${day}, ${year} ${startTime}`;

    // Parse the date
    const eventDate = new Date(dateString);
    const now = new Date();

    const diff = eventDate.getTime() - now.getTime();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  } catch (error) {
    console.error("Error in getCountdownTime:", error);
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
}
