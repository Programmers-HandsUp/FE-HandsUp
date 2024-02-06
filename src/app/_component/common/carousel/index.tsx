"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

interface Carousel {
  imageArray: string[];
  className: string;
}

const Carousel = ({ className, imageArray }: Carousel) => {
  const [selectedScene, setSelectedScene] = useState(0);

  return (
    <div className={className}>
      {imageArray.length && (
        <Image
          className="w-full h-full"
          src={imageArray[selectedScene]}
          alt="highlithtedImage"
          width={0}
          height={0}
        />
      )}
    </div>
  );
};

export default Carousel;
