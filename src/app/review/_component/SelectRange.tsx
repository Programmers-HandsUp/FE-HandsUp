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
    value: "bad",
    src: "/assets/images/bad.webp",
    alt: "별로였어요",
    label: "별로였어요"
  },
  {
    value: "soso",
    src: "/assets/images/soso.webp",
    alt: "아쉬웠어요",
    label: "아쉬웠어요"
  },
  {
    value: "normal",
    src: "/assets/images/normal.webp",
    alt: "보통이에요",
    label: "보통이에요"
  },
  {
    value: "good",
    src: "/assets/images/good.webp",
    alt: "만족했어요",
    label: "만족했어요"
  },
  {
    value: "veryGood",
    src: "/assets/images/veryGood.webp",
    alt: "최고예요",
    label: "최고예요"
  }
];

const SelectRange = ({ onSelected }: SelectRangeProps) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  useEffect(() => {
    onSelected(selectedItem);
  }, [selectedItem, onSelected]);

  return (
    <main className="">
      <Chips
        Items={selectedItem}
        setItems={setSelectedItem}
        className="text-xs">
        {CHIP_ITEMS.map((item) => (
          <Chip
            key={item.value}
            value={item.value}
            className={`p-0 grayscale hover:grayscale-0 border-none ${selectedItem === item.value ? "grayscale-0" : ""}`}
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
