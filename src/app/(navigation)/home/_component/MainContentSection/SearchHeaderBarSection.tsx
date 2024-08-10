"use client";
import Link from "next/link";

import Icon from "@/app/_component/common/Icon";
import Modal from "@/app/_component/common/Modal";
import Notification from "@/app/_component/notification";
import useModalState from "@/app/_hooks/useModalState";

interface SearchHeaderBarSectionProps {
  userInform: any;
  isUserInformFetchLoading: boolean;
}

const SearchHeaderBarSection = ({
  userInform,
  isUserInformFetchLoading
}: SearchHeaderBarSectionProps) => {
  const { open, close, isOpen } = useModalState();

  return (
    <div className="flex items-center justify-end gap-2">
      <Link href="/search">
        <Icon
          id="search"
          fill="black"
        />
      </Link>
      {userInform && isUserInformFetchLoading && (
        <>
          <button onClick={open}>
            <Icon id="bell-fill" />
          </button>
          <Modal
            modalType="fullScreen"
            isOpen={isOpen}
            close={close}
            animate="slide"
            className="dark:bg-black">
            <Notification close={close} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default SearchHeaderBarSection;
