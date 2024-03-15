import { useEffect } from "react";

import useModalState from "@/app/_hooks/useModalState";

import Modal from "../common/Modal";
import PermissionDenied from "./_component/PermissionDenied";
import useCheckPermission from "./_hooks/useCheckPermission";

function CheckPermission() {
  const { open, close, isOpen } = useModalState();
  const { permissionStatus, requestPermission } = useCheckPermission();

  useEffect(() => {
    permissionStatus === "default" && open();
  }, [open, permissionStatus]);

  return (
    <div id="modal-select">
      {permissionStatus === "denied" && <PermissionDenied />}
      {permissionStatus === "default" && (
        <Modal
          elementId="modal-select"
          modalType="default"
          isOpen={isOpen}
          close={close}
          animate="raise"
          width={280}
          height={250}
          className="flex flex-col items-center justify-between p-3 bg-white rounded-xl text-black">
          <p className="text-xl">푸시 알림 받기</p>
          <p className="text-center">
            HandsUp에서 보내는 경매 관련 알림을 바로 확인하려면, 알림을
            허용해주세요.
          </p>
          <button
            onClick={requestPermission}
            className="w-full bg-[#96E4FF] rounded-full h-11 text-white">
            알림 설정하기
          </button>
        </Modal>
      )}
    </div>
  );
}

export default CheckPermission;
