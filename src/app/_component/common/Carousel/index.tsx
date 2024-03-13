"use client";
import Image from "next/image";
import React from "react";
import { ReactElement, useEffect, useState } from "react";

import { cn } from "@/utils/function/cn";

import { carouselVariants } from "./Carousel.variants";
import Indicator from "./Indicator";
import MoveButtonsUI from "./MoveButtonsUI";

interface Carousel {
  itemList: string[] | ReactElement[];
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
  itemList,
  size,
  moveButtonImage,
  isMoveButton = true,
  isIndicator = true,
  changeDelay
}: Carousel) => {
  const [selectedScene, setSelectedScene] = useState(0);
  const imageNum = itemList.length;

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
      {itemList.length &&
        (typeof itemList[selectedScene] === "string" ? (
          <Image
            className="w-full h-full"
            src={itemList[selectedScene] as string}
            alt="highlightedImage"
            width={0}
            height={0}
          />
        ) : (
          React.cloneElement(itemList[selectedScene] as React.ReactElement)
        ))}
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
