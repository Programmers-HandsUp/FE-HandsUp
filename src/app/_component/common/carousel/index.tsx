"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import tempLeftButton from "@/public/tempLeftButton.svg";

interface Carousel {
  imageArray: string[];
  className: string;
  moveButton?: string;
}

const Carousel = ({
  className,
  imageArray,
  moveButton = tempLeftButton,
}: Carousel) => {
  const [selectedScene, setSelectedScene] = useState(0);

  return (
    <div className={`relative ${className}`}>
      {imageArray.length && (
        <Image
          className="w-full h-full"
          src={imageArray[selectedScene]}
          alt="highlithtedImage"
          width={0}
          height={0}
        />
      )}
      <div className="w-full absolute bottom-1/2 flex justify-between">
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
    </div>
  );
};

export default Carousel;
