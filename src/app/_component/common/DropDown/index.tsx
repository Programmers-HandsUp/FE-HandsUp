"use client";
import { useState } from "react";

import { cn } from "@/utils/function/cn";

import Icon from "../Icon";

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
        "relative text-black  bg-slate-200 border-[0.12rem] border-gray-500 rounded-md",
        className
      )}>
      <button
        onClick={() => setIsOpenDropDown((isOpen) => !isOpen)}
        className="w-full flex justify-between">
        <p className="px-3 py-[0.1rem] text-[0.65rem]">{selectedOption}</p>
        <Icon
          className="text-black mr-1 my-[0.1rem] -rotate-90"
          fill="black"
          id="arrow-back"
          size={14}
        />
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
