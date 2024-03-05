"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";

interface DropDownProps {
  className?: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: (newSelectedOption: string) => void;
}

const DropDown = ({
  className,
  options,
  setSelectedOption,
  selectedOption
}: DropDownProps) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  return (
    <div
      className={cn(
        "relative text-black bg-slate-200 border-[0.12rem] border-gray-500 rounded-md",
        className
      )}>
      <button onClick={() => setIsOpenDropDown((isOpen) => !isOpen)}>
        <p className="px-2">{selectedOption}</p>
      </button>
      {isOpenDropDown && (
        <div className="rounded-md absolute my-1 bg-slate-300 text-black pb-3 w-[6rem] grid">
          {options.map((item, index) => (
            <button
              className="text-end mx-2"
              onClick={() => {
                setSelectedOption(item);
                setIsOpenDropDown((isOpen) => !isOpen);
              }}
              key={index}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
