'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getMetaDescriptionByMetaName, getMetaValueByMetaName } from '@/helper/metaHelpers';

const PrayerTimeSection = ({ settings }) => {
  const [timings, setTimings] = useState(null);
  // Converts 24-hour "HH:MM" format to 12-hour "hh:mm AM/PM"
  const formatTime12Hour = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Add minutes and return time in 12-hour format
  const addMinutes = (time, minsToAdd) => {
    const [hour, minute] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute + minsToAdd);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          'https://api.aladhan.com/v1/timingsByCity?city=Dhaka&country=Bangladesh&method=2'
        );
        const data = await response.json();
        setTimings(data.data.timings);
      } catch (err) {
        console.error('Failed to fetch prayer times', err);
      }
    };

    fetchPrayerTimes();
  }, []);
  const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];


  const prayer_time_heading = getMetaValueByMetaName(settings, "prayer_time") || "";
  const prayer_time_sub_heading =
    getMetaDescriptionByMetaName(settings, "prayer_time") || "Select Country & City For";


  return (
    <section className="bg-[#f8f9fa] pt-[50px] lg:pt-[100px] pb-[100px]">
      <div className="container px-8 mx-auto">
        {/* Header */}
        <div className="text-start mb-[40px]">
          <span className="text-[#00401A] pb-[5px] text-[20px]">{prayer_time_sub_heading}</span>
          <h2 className="font-semibold text-[#222] text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px]">
            {prayer_time_heading}
          </h2>
          <Image
            className="mt-[20px]"
            src="/images/pshape.png"
            alt="Design Shape"
            width={100}
            height={50}
          />
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 mt-3 md:mt-8">
          <div className="w-full md:col-span-2">
            <Image
              className="md:block hidden w-full h-full object-center object-cover"
              src="/images/prayer-time-mockp.png"
              alt="Prayer Time Image"
              width={500}
              height={300}
            />
          </div>

          <div className="md:col-span-3">
            <h4 className="pb-10 text-[20px] text-center">Namaz Timings of Osaka Mosque</h4>
            <table className="rounded-lg w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-[10px] text-[18px] text-center">
                    Name of Salat
                    <div className="flex justify-center">
                      <Image className="mt-2" src="/images/pshape.png" alt="Design Shape" width={100} height={50} />
                    </div>
                  </th>
                  <th className="p-[10px] text-[18px] text-center">
                    Azan Time
                    <div className="flex justify-center">
                      <Image className="mt-2" src="/images/pshape.png" alt="Design Shape" width={100} height={50} />
                    </div>
                  </th>
                  <th className="p-[10px] text-[18px] text-center">
                    Iqamah Time
                    <div className="flex justify-center">
                      <Image className="mt-2" src="/images/pshape.png" alt="Design Shape" width={100} height={50} />
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {timings ? (
                  prayerNames.map((prayer) => (
                    <tr key={prayer} className="hover:text-[#00401A] text-center transition">
                      <td className="p-[10px] text-[18px]">{prayer}</td>
                      <td className="p-[10px] text-[18px]">{formatTime12Hour(timings[prayer])}</td>
                      <td className="p-[10px] text-[18px]">{addMinutes(timings[prayer], 10)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4">Loading prayer times...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimeSection;
