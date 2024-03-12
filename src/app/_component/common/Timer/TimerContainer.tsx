import Image from "next/image";
import { ReactNode } from "react";

import deadlineImage from "/public/assets/images/deadline.webp";
import { cn } from "@/utils/function/cn";
import { calculateTimeRemaining } from "@/utils/function/time";

import Clock from "./Clock";

interface TimerContainerProps {
  deadline: Date;
  createdAt: Date;
  className?: string;
  isIcon?: boolean;
  children: ReactNode;
}

const TimerContainer = ({
  deadline,
  createdAt,
  className,
  children,
  isIcon = true
}: TimerContainerProps) => {
  const { days, hours, minutes, seconds } = calculateTimeRemaining(deadline);

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
      )}>
      <div className="flex relative">
        {isIcon && (
          <Clock
            rotation={currentAngle <= 360 ? currentAngle : 0}
            className={cn(
              `${isUnderOneHour && !isTimerFinished && "animate-watch"}`
            )}
          />
        )}
        <div className={cn("w-[90px] pt-[1px] pr-[2px] dark:border-white")}>
          <div className="flex justify-center items-center ">
            {children}
            {isTimerFinished && (
              <div className="absolute w-[70px]">
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
    </div>
  );
};
export default TimerContainer;
