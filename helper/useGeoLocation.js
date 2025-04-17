// hooks/useGeoLocation.ts
import { useEffect, useState } from 'react';

export default function useGeoLocation() {
  const [location, setLocation] = useState<{ lat, lon} | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.warn("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => console.error("Error getting location", error)
    );
  }, []);

  return location;
}
