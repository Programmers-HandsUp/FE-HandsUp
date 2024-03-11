"use client";

import { ControllerRenderProps } from "react-hook-form";

import Icon from "@/app/_component/common/Icon";
import Modal from "@/app/_component/common/Modal";
import { SearchAddress } from "@/app/_component/common/searchAddress";
import useModalState from "@/app/hooks/useModalState";

import { RegisterAuction } from "../../page";

function SearchAddressBtn({
  field
}: {
  field: ControllerRenderProps<RegisterAuction, "address">;
}) {
  const { open, close, isOpen } = useModalState();
  const { value: address, onChange } = field;

  const handleClose = () => {
    close();
    onChange({ si: "", gu: "", dong: "" });
  };

  return (
    <main className="flex flex-col dark:text-black">
      {address && address.dong ? (
        <button
          type="button"
          className="p-2 rounded-lg bg-gray-100">
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-2">
              <Icon
                id="pin-fill"
                stroke="black"
              />
              <p>{address.dong}</p>
            </div>
            <button onClick={handleClose}>
              <Icon
                id="close-square"
                stroke="black"
              />
            </button>
          </div>
        </button>
      ) : (
        <>
          <button
            type="button"
            onClick={open}
            className="p-2 rounded-lg bg-gray-100"
            color="gray">
            <div className="flex w-full items-center gap-2">
              <Icon
                id="pin-fill"
                stroke="black"
              />
              <p className="">위치 추가</p>
            </div>
          </button>
          <Modal
            isOpen={isOpen}
            close={close}
            modalType="fullScreen"
            animate="slide"
            className="dark:bg-black">
            <SearchAddress
              close={close}
              onChange={onChange}
            />
          </Modal>
        </>
      )}
    </main>
  );
}

export default SearchAddressBtn;
