"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Chip, Chips } from "@/app/_component/common/Chips";

interface SelectRangeProps {
  onSelected: (value: string) => void;
}

const IMAGE_SIZE = 48;
const CHIP_ITEMS = [
  {
    value: "-2",
    src: "/assets/images/bad.webp",
    alt: "별로였어요",
    label: "별로였어요"
  },
  {
    value: "-1",
    src: "/assets/images/soso.webp",
    alt: "아쉬웠어요",
    label: "아쉬웠어요"
  },
  {
    value: "0",
    src: "/assets/images/normal.webp",
    alt: "보통이에요",
    label: "보통이에요"
  },
  {
    value: "1",
    src: "/assets/images/good.webp",
    alt: "만족했어요",
    label: "만족했어요"
  },
  {
    value: "2",
    src: "/assets/images/veryGood.webp",
    alt: "최고예요",
    label: "최고예요"
  }
];

const SelectRange = ({ onSelected }: SelectRangeProps) => {
  const [selectedScoreItem, setSelectedScoreItem] = useState<string>("");

  useEffect(() => {
    onSelected(selectedScoreItem);
  }, [selectedScoreItem, onSelected]);

  return (
    <main className="">
      <Chips
        Items={selectedScoreItem}
        setItems={setSelectedScoreItem}
        className="text-xs">
        {CHIP_ITEMS.map((item) => (
          <Chip
            key={item.value}
            value={item.value}
            className={`p-0 grayscale hover:grayscale-0 border-none ${selectedScoreItem === item.value ? "grayscale-0" : ""}`}
            selectedStyle="grayscale-0">
            <Image
              src={item.src}
              alt={item.alt}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              className="rounded-xl"
            />
            <span>{item.label}</span>
          </Chip>
        ))}
      </Chips>
    </main>
  );
};

export default SelectRange;
