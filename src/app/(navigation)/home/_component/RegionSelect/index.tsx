"use client";

import Icon from "@/app/_component/common/Icon";
import useModal from "@/app/hooks/useModal";
import { cn } from "@/utils/cn";
import { setCookie } from "@/utils/cookie";
import { MouseEvent } from "react";

interface RegionSelectProps {
  currentRegion: string;
}

const RegionSelect = ({ currentRegion }: RegionSelectProps) => {
  const { Modal, open, close, isOpen } = useModal({
    elementId: "modal-select",
    modalType: "dropBox",
    animate: "grow"
  });

  const handleClickStore = (e: MouseEvent<HTMLUListElement>) => {
    if (!e.target || !(e.target instanceof HTMLLIElement)) return;
    const targetValue = e.target.id;
    setCookie({ name: "region", value: targetValue });
    close();
  };
  return (
    <div
      id="modal-select"
      className="relative">
      <div className="flex items-center">
        <div>{currentRegion}</div>
        <button
          onClick={open}
          disabled={isOpen}>
          <Icon
            id="arrow-dropdown"
            size={24}
            className={cn(
              "transition-transform rotate-[180deg] hover:opacity-70",
              isOpen ? "rotate-0" : ""
            )}
          />
        </button>
      </div>
      <Modal>
        <ul
          className="text-black [&_li]:cursor-pointer hover:[&_li]:opacity-60 [&_li]:transition-opacity"
          onClick={handleClickStore}>
          <li id={currentRegion}>{currentRegion}</li>
          <div
            id="Nationwide"
            className="text-gray-500 cursor-not-allowed">
            전국(준비중)
          </div>
        </ul>
      </Modal>
    </div>
  );
};

export default RegionSelect;
