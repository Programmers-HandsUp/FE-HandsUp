import { useEffect, useState } from "react";

export interface GeolocationType {
  latitude: number;
  longitude: number;
}

interface GeolocationError {
  code: number;
  message: string;
}

const options = {
  timeout: 7000,
  maximumAge: 6000,
};

const useGeolocation = () => {
  const [geoLocation, setGeoLocation] = useState<GeolocationType>();
  const [error, setError] = useState<GeolocationError>();

  const handleGeolocationSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;

    setGeoLocation({
      latitude,
      longitude,
    });
  };

  const handleGeolocationError = (err: GeolocationError) => {
    const { code, message } = err;

    setError({ code, message });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            handleGeolocationSuccess,
            handleGeolocationError,
            options,
          );
        } else if (result.state === "denied") {
          setError({
            code: -1,
            message: "정확한 위치 확인을 위해 위치 정보 사용을 허용해 주세요.",
          });
        }
      });
    } else {
      setError({
        code: -1,
        message:
          "현재 브라우저에서는 위치 정보를 제공할 수 없어요. 다시 시도해주세요.",
      });
    }
  }, []);

  return { geoLocation, error };
};

export default useGeolocation;
