"use client";

import Icon from "@/app/_component/common/Icon";
import useModal from "@/app/hooks/useModal";
import { cn } from "@/utils/cn";
import { MouseEvent } from "react";

const RegionSelect = () => {
  const { Modal, open, close, isOpen } = useModal({
    elementId: "modal-select",
    modalType: "dropBox",
    animate: "grow"
  });

  const handleClickStore = (e: MouseEvent<HTMLUListElement>) => {
    if (!e.target || !(e.target instanceof HTMLLIElement)) return;
    const targetValue = e.target.id;
    localStorage.setItem("regionSelect", JSON.stringify(targetValue));
  };
  return (
    <div
      id="modal-select"
      className="relative">
      <div className="flex items-center">
        <div>현재 지역</div>
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
          className="text-black"
          onClick={handleClickStore}>
          <li id="currentRegion">우리 동네</li>
          <li id="Nationwide">전국</li>
        </ul>
      </Modal>
    </div>
  );
};

export default RegionSelect;
