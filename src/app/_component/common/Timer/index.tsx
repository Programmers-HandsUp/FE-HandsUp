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
  noneIcon?: boolean;
}

const Timer = ({
  createdAt,
  deadline,
  noneIcon = true,
  className,
}: TimerProps) => {
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
        `${isUnderOneHour ? "text-[#FF0000]" : "text-[#6874FF] dark:text-[#96E4FF]"}`,
        className
      )}
    >
      <div className="flex relative">
        {noneIcon && (
          <Clock
            rotation={currentAngle <= 360 ? currentAngle : 0}
            className={cn(
              `${isUnderOneHour && !isTimerFinished && "animate-watch"}`
            )}
          />
        )}
        <div className={cn("w-[90px] pt-[1px] pr-[2px] dark:border-white")}>
          <span aria-label="타이머">
            {formatNumber(days)}:{formatNumber(hours)}:{formatNumber(minutes)}:
            {formatNumber(seconds)}
          </span>
          {isTimerFinished && (
            <div className="absolute -bottom-2 left-8 w-[70px]">
              <Image
                src={deadlineImage}
                alt="deadline"
                className="w-full h-auto dark:saturate-200"
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
