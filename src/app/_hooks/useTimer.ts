"use client";

import { useEffect, useState } from "react";

import { calculateTimeRemaining } from "@/utils/function/time";

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
    seconds: 0
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining(deadline);
      if (
        newTimeRemaining.days === 0 &&
        newTimeRemaining.hours === 0 &&
        newTimeRemaining.minutes === 0 &&
        newTimeRemaining.seconds === 0
      ) {
        clearInterval(intervalId);
      } else {
        setTimeRemaining(newTimeRemaining);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [deadline]);

  return timeRemaining;
};

export default useTimer;
