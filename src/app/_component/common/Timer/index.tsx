"use client";

import useTimer from "@/app/hooks/useTimer";
import { cn } from "@/utils/cn";
import Clock from "./Clock";
import Image from "next/image";
import deadlineImage from "/public/assets/images/deadline.webp";

interface TimerProps {
  deadline: Date;
  createdAt: Date;
  className?: string;
}

const Timer = ({ createdAt, deadline, className }: TimerProps) => {
  const timeRemaining = useTimer(deadline);
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const { days, hours, minutes, seconds } = timeRemaining;

  const isUnderOneHour = days <= 0 && hours <= 0 && minutes <= 60;
  const isTimerFinished =
    days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0;

  const totalTimeRange = deadline.getTime() - createdAt.getTime();
  const currentTimeElapsed = new Date().getTime() - createdAt.getTime();
  const percentageElapsed = (currentTimeElapsed / totalTimeRange) * 100;
  const currentAngle = Math.floor((percentageElapsed / 100) * 360);

  return (
    <div
      className={cn(
        "inline-flex justify-center items-center",
        `${isUnderOneHour ? "text-[#FF0000]" : "text-[#6874FF]"}`,
        className
      )}
    >
      <div className="flex relative">
        <Clock
          rotation={currentAngle <= 360 ? currentAngle : 0}
          className={cn(
            `${isUnderOneHour && !isTimerFinished && "animate-watch"}`
          )}
        />
        <div className={cn("w-[100px] flex justify-center dark:border-white")}>
          <p
            className={`${isUnderOneHour && !isTimerFinished && "animate-tiltAndScale"}`}
          >
            {formatNumber(days)}:{formatNumber(hours)}:{formatNumber(minutes)}:
            {formatNumber(seconds)}
          </p>
          {isTimerFinished && (
            <div className="absolute -bottom-3 w-[70px]">
              <Image
                src={deadlineImage}
                alt="deadline"
                className="w-full h-auto dark:hue-rotate-180"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
