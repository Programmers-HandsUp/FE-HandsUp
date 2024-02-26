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
  const [depth_3, setDepth_3] = useState("");
  const { value: address, onChange } = field;

  useEffect(() => {
    if (address) {
      const [, , depth_3] = address.split(" ");
      setDepth_3(depth_3);
    }
  }, [address]);

  const handleClose = () => {
    close();
    setDepth_3("");
    onChange("");
  };

  return (
    <main className="flex flex-col dark:text-black">
      {depth_3 ? (
        <button
          type="button"
          className="p-2 rounded-lg bg-gray-100">
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-2">
              <Icon
                id="pin-fill"
                stroke="black"
              />
              <p>{depth_3}</p>
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
          <Modal>
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
