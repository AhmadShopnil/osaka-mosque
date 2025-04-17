'use client';

import { useEffect, useState } from 'react';

export default function PrayerTimes({ city = 'Dhaka', country = 'Bangladesh' }) {
  const [timings, setTimings] = useState(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`
        );
        const data = await res.json();
        setTimings(data.data.timings);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      }
    };

    fetchPrayerTimes();
  }, [city, country]);

  if (!timings) return <p>Loading prayer times...</p>;

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-bold mb-2">Prayer Times for {city}</h2>
      <ul className="space-y-1">
        <li>🕋 Fajr: {timings.Fajr}</li>
        <li>☀️ Dhuhr: {timings.Dhuhr}</li>
        <li>🌤 Asr: {timings.Asr}</li>
        <li>🌇 Maghrib: {timings.Maghrib}</li>
        <li>🌃 Isha: {timings.Isha}</li>
      </ul>
    </div>
  );
}
