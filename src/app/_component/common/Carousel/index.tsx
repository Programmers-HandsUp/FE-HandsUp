"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { carouselVariants } from "./Carousel.variants";
import { cn } from "../../../../utils/cn";
import Indicator from "./Indicator";
import MoveButtonsUI from "./MoveButtonsUI";

interface Carousel {
  imageArray: string[];
  size?:
    | "xxxsmall"
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";
  className?: string;
  moveButtonImage?: string;
  isMoveButton?: boolean;
  isIndicator?: boolean;
  changeDelay?: number;
}

const Carousel = ({
  className,
  imageArray,
  size,
  moveButtonImage,
  isMoveButton = true,
  isIndicator = true,
  changeDelay,
}: Carousel) => {
  const [selectedScene, setSelectedScene] = useState(0);
  const imageNum = imageArray.length;

  useEffect(() => {
    if (changeDelay === undefined) {
      return;
    }
    const intervalRef = setInterval(
      () =>
        setSelectedScene((selectedNum) =>
          selectedNum === imageNum - 1 ? 0 : selectedNum + 1
        ),
      changeDelay
    );

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  return (
    <div className={cn(carouselVariants({ size }), className)}>
      {imageArray.length && (
        <Image
          className="w-full h-full"
          src={imageArray[selectedScene]}
          alt="highlightedImage"
          width={0}
          height={0}
        />
      )}
      {isMoveButton && (
        <MoveButtonsUI
          moveButtonImage={moveButtonImage}
          setSelectedScene={setSelectedScene}
          imageNum={imageNum}
        />
      )}
      {isIndicator && (
        <Indicator
          imageNum={imageNum}
          selectedScene={selectedScene}
          onClickIndicatorIcon={(selectedIndex: number) =>
            setSelectedScene(selectedIndex)
          }
        />
      )}
    </div>
  );
};

export default Carousel;
