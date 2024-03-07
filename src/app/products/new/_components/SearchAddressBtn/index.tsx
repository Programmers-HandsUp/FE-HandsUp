"use client";

import { useEffect, useState } from "react";
import useModal from "@/app/hooks/useModal";
import Icon from "@/app/_component/common/Icon";
import { ControllerRenderProps } from "react-hook-form";
import { RegisterProduct } from "../../page";
import { SearchAddress } from "@/app/_component/common/searchAddress";

function SearchAddressBtn({
  field
}: {
  field: ControllerRenderProps<RegisterProduct, "address">;
}) {
  const { Modal, open, close } = useModal({
    modalType: "fullScreen",
    animate: "slide"
  });
  const [dong, setDong] = useState("");
  const { value: address, onChange } = field;

  useEffect(() => {
    if (address) {
      const [, , dong] = address.split(" ");
      setDong(dong);
    }
  }, [address]);

  const handleClose = () => {
    close();
    setDong("");
    onChange("");
  };

  return (
    <main className="flex flex-col dark:text-black">
      {dong ? (
        <button
          type="button"
          className="p-2 rounded-lg bg-gray-100">
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-2">
              <Icon
                id="pin-fill"
                stroke="black"
              />
              <p>{dong}</p>
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
          <Modal className="dark:bg-black">
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
