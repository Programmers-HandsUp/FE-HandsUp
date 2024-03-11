"use client";

import Icon from "@/app/_component/common/Icon";
import Modal from "@/app/_component/common/Modal";
import useModalState from "@/app/hooks/useModalState";

import { cn } from "@/utils/function/cn";
import { setCookie } from "@/utils/function/cookie";
import { MouseEvent } from "react";

interface RegionSelectProps {
  currentRegion: string;
}

const RegionSelect = ({ currentRegion }: RegionSelectProps) => {
  const { open, close, isOpen } = useModalState();

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
      <Modal
        elementId="modal-select"
        modalType="dropBox"
        isOpen={isOpen}
        close={close}>
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
