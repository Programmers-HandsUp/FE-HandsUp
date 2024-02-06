"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import tempLeftButton from "@/public/tempLeftButton.svg";

interface Carousel {
  imageArray: string[];
  className: string;
  moveButton?: string;
  isMoveButton?: boolean;
  isIndicator?: boolean;
}

const Carousel = ({
  className,
  imageArray,
  moveButton = tempLeftButton,
  isMoveButton = true,
  isIndicator = true,
}: Carousel) => {
  const [selectedScene, setSelectedScene] = useState(0);

  const MoveButtons = () => {
    return (
      <div className=" w-full absolute bottom-1/2 flex justify-between">
        <button
          onClick={() =>
            setSelectedScene((selectedNum) =>
              selectedNum ? selectedNum - 1 : selectedNum
            )
          }
        >
          <Image src={moveButton} alt="leftButton" />
        </button>
        <button
          onClick={() =>
            setSelectedScene((selectedNum) =>
              selectedNum !== imageArray.length - 1
                ? selectedNum + 1
                : selectedNum
            )
          }
        >
          <Image className="rotate-180" src={moveButton} alt="rightButton" />
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
