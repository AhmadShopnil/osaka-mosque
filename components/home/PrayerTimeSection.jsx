import Image from "next/image";
import { getMetaValueFromExtraFields } from "@/helper/metaHelpers";
import { getPryerTime } from "@/helper/actions";
import { getImageUrl } from "@/helper/getImageUrl";
import { formatDateTime } from "@/helper/formatDateTime";

// Convert 24-hour time to 12-hour format (e.g., 04:20 AM)
function formatTime(time24) {
  if (!time24 || !time24.includes(":")) return "-";
  const [h, m] = time24.split(":").map(Number);
  if (isNaN(h) || isNaN(m)) return "-";
  const ampm = h >= 12 ? "PM" : "AM";
  const hr = h % 12 || 12;
  return `${hr.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")} ${ampm}`;
}

const PrayerTimeSection = async ({ settings, prayer_time }) => {
  const startTime = prayer_time?.custom_information.find((item) => item.label === "start_time");
  const nameOfSalat = prayer_time?.custom_information.find((item) => item.label === "name_of_salat");
  const prayerTime = prayer_time?.custom_information.find((item) => item.label === "prayer_time");
  const endTime = prayer_time?.custom_information.find((item) => item.label === "end_time");

  // console.log("prayer_time", prayer_time)

  const image = getImageUrl(prayer_time?.image_media);
  const localPrayers = await getPryerTime();
  const city = "Osaka";
  const country = "Japan";
  const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(
    city
  )}&country=${encodeURIComponent(country)}&method=2`;

  const apiRes = await fetch(apiUrl, { cache: "no-store" });
  const apiJson = await apiRes.json();
  const apiTimings = apiJson?.data?.timings || {};

  // Start times from API
  const startTimes = {
    Fajr: apiTimings.Fajr,
    Sunrise: apiTimings.Sunrise,
    Dhuhr: apiTimings.Dhuhr,
    Asr: apiTimings.Asr,
    Maghrib: apiTimings.Maghrib,
    Isha: apiTimings.Isha,
    Midnight: apiTimings.Midnight,
  };

  // Determine end times
  const getEndTime = (prayerName) => {
    switch (prayerName) {
      case "Fajr":
        return startTimes["Sunrise"];
      case "Dhuhr":
        return startTimes["Asr"];
      case "Asr":
        return startTimes["Maghrib"];
      case "Maghrib":
        return startTimes["Isha"];
      case "Isha":
        return startTimes["Midnight"];
      default:
        return "-";
    }
  };

  return (
    <section className="bg-[#f8f9fa] pt-12 pb-16">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[#00401A] text-lg">{prayer_time?.sub_title}</span>
          <h2 className="text-[#222] font-semibold text-3xl md:text-5xl">{prayer_time?.title}</h2>
          <Image src="/images/pshape.png" alt="Design Shape" width={100} height={50} className="mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            {image && (
              <Image
                src={image}
                alt="Prayer Visual"
                width={500}
                height={300}
                className="hidden md:block w-full h-full object-cover rounded-md"
              />
            )}
          </div>

          <div className="md:col-span-3">
            <h4 className="text-center text-xl font-medium mb-3">
             {prayer_time?.short_description}
            </h4>
            <h5 className="text-center text-sm font-medium mb-6">
             Last updated: {formatDateTime(prayer_time?.updated_at)}
            
            </h5>
            <table className="w-full rounded-lg border-collapse">
              <thead>
                <tr>
                  {/* {[, "Prayer Time", "Start Time", "End Time"].map((h, i) => (
                    <th key={i} className="p-3 text-center text-lg">
                      {h}
                      <div className="flex justify-center mt-2">
                        <Image src="/images/pshape.png" alt="Design Shape" width={100} height={50} />
                      </div>
                    </th>
                  ))} */}
                  <th className="p-3 text-center text-lg">
                    {nameOfSalat?.value}
                    <div className="flex justify-center mt-2">
                      <Image src="/images/pshape.png" alt="Design Shape" width={100} height={50} />
                    </div>
                  </th>
                  <th className="p-3 text-center text-lg">
                    {prayerTime?.value}
                    <div className="flex justify-center mt-2">
                      <Image src="/images/pshape.png" alt="Design Shape" width={100} height={50} />
                    </div>
                  </th>
                  <th className="p-3 text-center text-lg">
                    {startTime?.value}
                    <div className="flex justify-center mt-2">
                      <Image src="/images/pshape.png" alt="Design Shape" width={100} height={50} />
                    </div>
                  </th>
                  <th className="p-3 text-center text-lg">
                    {endTime?.value}
                    <div className="flex justify-center mt-2">
                      <Image src="/images/pshape.png" alt="Design Shape" width={100} height={50} />
                    </div>
                  </th>

                </tr>
              </thead>
              <tbody>
                {localPrayers?.reverse().map((p) => {
                  const name = p.name || "";
                  const prayerName = name.charAt(0).toUpperCase() + name.slice(1);
                  const localRaw = getMetaValueFromExtraFields(p, "time");
                  const prayerTime = localRaw ? formatTime(localRaw) : "-";

                  const startRaw = startTimes[prayerName];
                  const startTime = startRaw ? formatTime(startRaw) : "-";

                  const endRaw = getEndTime(prayerName);
                  const endTime = endRaw ? formatTime(endRaw) : "-";

                  return (
                    <tr key={name} className="text-center hover:text-[#00401A] transition">
                      <td className="p-3">{prayerName}</td>
                      <td className="p-3">{localRaw}</td>
                      <td className="p-3">{startTime}</td>
                      <td className="p-3">{endTime}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimeSection;
