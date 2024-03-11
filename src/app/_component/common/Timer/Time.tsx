"use client";

import useTimer from "@/app/_hooks/useTimer";

interface TimeProps {
  deadline: Date;
  hiddenTimer: boolean;
}

const Time = ({ deadline, hiddenTimer }: TimeProps) => {
  const timeRemaining = useTimer(deadline);
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const { days, hours, minutes, seconds } = timeRemaining;

  return (
    <>
      {days === 0 &&
      hours === 0 &&
      minutes === 0 &&
      seconds === 0 &&
      hiddenTimer ? (
        <div className="h-[19px]"></div>
      ) : (
        <span aria-label="타이머">
          {formatNumber(days)}:{formatNumber(hours)}:{formatNumber(minutes)}:
          {formatNumber(seconds)}
        </span>
      )}
    </>
  );
};

export default Time;
