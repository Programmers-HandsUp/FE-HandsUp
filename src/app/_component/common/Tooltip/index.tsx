"use client";

import { VariantProps } from "class-variance-authority";
import React, { PropsWithChildren } from "react";

import { cn } from "@/utils/function/cn";

import {
  ArrowPositionVariants,
  MainPositionVariants,
  PositionVariants
} from "./Tooltip.variants";
import useInteraction, { EventType } from "./useInteraction";

interface TooltipProps extends VariantProps<typeof MainPositionVariants> {
  eventType: EventType;
  showArrow?: boolean;
  content: React.ReactNode;
  className?: string;
}

const Tooltip = ({
  eventType,
  position,
  showArrow = true,
  content,
  children,
  className,
  ...props
}: PropsWithChildren<TooltipProps>) => {
  const { ref, isInteracted } = useInteraction(eventType);
  return (
    <div className="cursor-pointer">
      <div
        className="relative"
        ref={ref}>
        {children}
        {isInteracted && (
          <div
            className={cn(MainPositionVariants({ position }))}
            {...props}>
            <span
              className={cn(PositionVariants({ position }))}
              {...props}>
              {content}
            </span>
            {showArrow && (
              <span
                className={cn(ArrowPositionVariants({ position }))}
                {...props}></span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
