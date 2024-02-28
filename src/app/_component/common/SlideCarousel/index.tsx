"use client";

import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  ReactNode,
  useRef
} from "react";

import { cn } from "@/utils/cn";

import Icon from "../Icon";
import useDragScroll from "./useDragScroll";

interface SlideCarouselProps extends ComponentProps<"div"> {
  children: ReactNode;
  itemsToShow?: number;
  childSize?: number;
  useButton?: boolean;
  groupGap?: number;
  useNav?: boolean;
  height?: number;
}

const SlideCarousel = ({
  children,
  itemsToShow = 4,
  childSize = 100,
  height,
  useButton = false,
  useNav = false,
  groupGap = 5,
  className,
  ...props
}: SlideCarouselProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemToShowWidth = itemsToShow * (childSize + groupGap) + childSize / 2;
  const totalSlideCarousels = Children.count(children);

  const child = Children.toArray(children).map((child: ReactNode) => {
    if (isValidElement(child)) {
      return cloneElement(child as JSX.Element, {
        style: {
          width: `${childSize}px`,
          height: `${height ? `${height}px` : "auto"}`
        },
        className: child.props.className
      });
    }
  });

  const {
    isLeftButtonActive,
    isRightButtonActive,
    buttonScrollLeft,
    buttonScrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchDown,
    handleClickIndicator,
    currentElement
  } = useDragScroll({
    containerRef,
    childSize: childSize + groupGap
  });

  return (
    <>
      <div
        className="flex items-center"
        {...props}>
        <div
          ref={containerRef}
          className={cn("order-2 flex overflow-hidden", className)}
          style={{
            width: `${itemToShowWidth}px`
          }}
          role="slider"
          aria-valuenow={itemsToShow}
          aria-valuemin={1}
          aria-valuemax={totalSlideCarousels}
          tabIndex={0}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          onMouseLeave={handleMouseUp}>
          <div
            style={{ gap: `${groupGap}px` }}
            className="flex items-center justify-center flex-nowrap">
            {child}
          </div>
          <div style={{ marginRight: `${childSize / 2}px` }}></div>
        </div>

        {useButton && (
          <>
            <button
              onClick={buttonScrollLeft}
              className="order-1"
              disabled={!isLeftButtonActive}>
              <Icon id="chevron-left" />
            </button>
            <button
              onClick={buttonScrollRight}
              className="order-3"
              disabled={!isRightButtonActive}>
              <Icon id="chevron-right" />
            </button>
          </>
        )}
      </div>
      {useNav && (
        <div className="flex gap-2 justify-center">
          {Array.from(Array(totalSlideCarousels), (_, index) => (
            <button
              key={index}
              onClick={() => handleClickIndicator(index)}
              className={`w-[0.8rem] h-[0.8rem] ${index === currentElement ? "bg-white" : " bg-gray-400"} rounded-full`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SlideCarousel;
