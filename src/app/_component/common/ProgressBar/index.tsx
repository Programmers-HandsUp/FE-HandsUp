import React from "react";
import { VariantProps } from "class-variance-authority";

import { cn } from "@/utils/function/cn";
import { progressBarVariants, barVariants } from "./ProgressBar.variants";

interface ProgressBarProps
  extends VariantProps<typeof progressBarVariants>,
    VariantProps<typeof barVariants> {
  className?: string;
  width: number;
  height: number;
  percent: number;
}

const ProgressBar = ({
  className,
  round,
  width,
  height,
  percent,
  bgColor,
  barColor
}: ProgressBarProps) => {
  return (
    <div
      style={{ width: width, height: height }}
      className={cn(progressBarVariants({ round, bgColor }), className)}>
      <div
        style={{ width: `${percent}%`, height: height }}
        className={cn(barVariants({ barColor }))}
      />
    </div>
  );
};

export default ProgressBar;
