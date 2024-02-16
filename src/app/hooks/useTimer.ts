"use client";

import { useEffect, useState } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useTimer = (deadline: Date): TimeRemaining => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const remainingTime = deadline.getTime() - now;

      if (remainingTime <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

      return { days, hours, minutes, seconds };
    };

    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [deadline]);

  return timeRemaining;
};

export default useTimer;
