"use client";

import DropBoxSelect from "@/app/_component/common/DropBoxSelect";
import Icon from "@/app/_component/common/Icon";
import { cn } from "@/utils/cn";
import { MouseEvent, useState } from "react";

const RegionSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickStore = (e: MouseEvent<HTMLUListElement>) => {
    if (!e.target || !(e.target instanceof HTMLLIElement)) return;
    const targetValue = e.target.id;
    localStorage.setItem("regionSelect", JSON.stringify(targetValue));
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <div>현재 지역</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Icon
            id="arrow-dropdown"
            size={24}
            className={cn(
              "transition-transform rotate-[180deg]",
              isOpen ? "rotate-0" : ""
            )}
          />
        </button>
      </div>
      <DropBoxSelect visible={isOpen} onClose={() => setIsOpen(false)}>
        <ul className="text-black" onClick={handleClickStore}>
          <li id="currentRegion">우리 동네</li>
          <li id="Nationwide">전국</li>
        </ul>
      </DropBoxSelect>
    </div>
  );
};

export default RegionSelect;
