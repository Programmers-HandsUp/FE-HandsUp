"use client";

import { cn } from "@/utils/cn";
import useInteraction, { EventType } from "./useInteraction";
import {
  MainPositionVariants,
  PositionVariants,
  ArrowPositionVariants
} from "./Tooltip.variants";
import React, { PropsWithChildren } from "react";
import { VariantProps } from "class-variance-authority";

interface TooltipProps extends VariantProps<typeof MainPositionVariants> {
  eventType: EventType;
  showArrow?: boolean;
  content: React.ReactNode;
}

const Tooltip = ({
  eventType,
  position,
  showArrow = true,
  content,
  children,
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
