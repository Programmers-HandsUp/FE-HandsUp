"use client";

import { MouseEvent } from "react";

import Icon from "@/app/_component/common/Icon";
import Modal from "@/app/_component/common/Modal";
import useModalState from "@/app/_hooks/useModalState";
import { cn } from "@/utils/function/cn";

interface RegionSelectProps {
  si: string;
  gu: string;
  dong: string;
  currentRegion: string;
  setState: (data: string) => void;
}

const RegionSelect = ({
  si,
  gu,
  dong,
  currentRegion,
  setState
}: RegionSelectProps) => {
  const { open, close, isOpen } = useModalState();

  const handleClickStore = (e: MouseEvent<HTMLUListElement>) => {
    if (!e.target || !(e.target instanceof HTMLLIElement)) return;
    const targetValue = e.target.id;
    setState(targetValue);
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
          <li id="전국">전국</li>
          <li id={si}>{si}</li>
          <li id={gu}>{gu}</li>
          <li id={dong}>{dong}</li>
        </ul>
      </Modal>
    </div>
  );
};

export default RegionSelect;
