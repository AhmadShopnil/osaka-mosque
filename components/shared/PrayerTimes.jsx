'use client';
import useGeoLocation from '@/helper/useGeoLocation';
import { useEffect, useState } from 'react';


export default function PrayerTimes() {
  const location = useGeoLocation();
  const [prayerTimes, setPrayerTimes] = useState<any>(null);

  useEffect(() => {
    if (location) {
      const fetchPrayerTimes = async () => {
        const res = await fetch(
          `https://api.aladhan.com/v1/timings?latitude=${location.lat}&longitude=${location.lon}&method=2`
        );
        const data = await res.json();
        setPrayerTimes(data.data.timings);
      };

      fetchPrayerTimes();
    }
  }, [location]);

  if (!location || !prayerTimes) return <p>Loading prayer times...</p>;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Prayer Times-tests</h2>
      <ul className="text-sm">
        {Object.entries(prayerTimes).map(([name, time]) => (
          <li key={name}>
            <strong>{name}</strong>: {time}
          </li>
        ))}
      </ul>
    </div>
  );
}
