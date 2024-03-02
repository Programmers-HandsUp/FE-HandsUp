import { cn } from "@/utils/cn";
import { ProgressBarVariants, BarVariants } from "./ProgressBar.variants";
import React from "react";
import { VariantProps } from "class-variance-authority";

interface ProgressBarProps
  extends VariantProps<typeof ProgressBarVariants>,
    VariantProps<typeof BarVariants> {
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
      className={cn(ProgressBarVariants({ round, bgColor }), className)}>
      <div
        style={{ width: `${percent}%`, height: height }}
        className={cn(BarVariants({ barColor }))}
      />
    </div>
  );
};

export default ProgressBar;
