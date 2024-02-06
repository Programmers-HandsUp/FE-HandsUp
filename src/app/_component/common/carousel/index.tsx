"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import tempLeftButton from "@/public/tempLeftButton.svg";

interface Carousel {
  imageArray: string[];
  className?: string;
  moveButtonImage?: string;
  isMoveButton?: boolean;
  isIndicator?: boolean;
  changeDelay?: number;
}

const Carousel = ({
  className,
  imageArray,
  moveButtonImage = tempLeftButton,
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

  const MoveButtons = () => {
    return (
      <div className="w-full absolute bottom-1/2 flex justify-between">
        <button
          onClick={() =>
            setSelectedScene((selectedNum) =>
              selectedNum ? selectedNum - 1 : selectedNum
            )
          }
        >
          <Image src={moveButtonImage} alt="leftButton" />
        </button>
        <button
          onClick={() =>
            setSelectedScene((selectedNum) =>
              selectedNum !== imageNum - 1 ? selectedNum + 1 : selectedNum
            )
          }
        >
          <Image
            className="rotate-180"
            src={moveButtonImage}
            alt="rightButton"
          />
        </button>
      </div>
    );
  };

  const Indicator = () => {
    return (
      <div className="absolute left-1/2 -translate-x-1/2 bottom-1 flex gap-2">
        {imageArray.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedScene(index)}
            className={`w-[0.8rem] h-[0.8rem] ${index === selectedScene ? "bg-white" : " bg-gray-400"} rounded-full`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`relative ${className}`}>
      {imageArray.length && (
        <Image
          className="w-full h-full"
          src={imageArray[selectedScene]}
          alt="highlightedImage"
          width={0}
          height={0}
        />
      )}
      {isMoveButton && MoveButtons()}
      {isIndicator && Indicator()}
    </div>
  );
};

export default Carousel;
