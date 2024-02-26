"use client";

import useTimer from "@/app/hooks/useTimer";

interface TimeProps {
  deadline: Date;
}

const Time = ({ deadline }: TimeProps) => {
  const timeRemaining = useTimer(deadline);
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const { days, hours, minutes, seconds } = timeRemaining;

  return (
    <span aria-label="타이머">
      {formatNumber(days)}:{formatNumber(hours)}:{formatNumber(minutes)}:
      {formatNumber(seconds)}
    </span>
  );
};

export default Time;
