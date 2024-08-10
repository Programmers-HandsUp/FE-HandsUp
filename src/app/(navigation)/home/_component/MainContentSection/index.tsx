"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

import Header from "@/app/_component/common/Header";
import Icon from "@/app/_component/common/Icon";
import Modal from "@/app/_component/common/Modal";
import Notification from "@/app/_component/notification";
import useModalState from "@/app/_hooks/useModalState";

import useUserInformation from "../../_hooks/queries/useGetUserInformation";
import RegionSelect from "../RegionSelect";
import AuctionListSection from "./AuctionListSection";
import MainSectionLoading from "./MainSectionLoading";

export interface AddressState {
  si: string | null;
  gu: string | null;
  dong: string | null;
}

const MainContentSection = () => {
  const [currentRegion, setCurrentRegion] = useState("전국");
  const [address, setAddress] = useState<AddressState>({
    si: "",
    gu: "",
    dong: ""
  });
  const { open, close, isOpen } = useModalState();
  const { data: userInform, isLoading } = useUserInformation();

  useEffect(() => {
    const updateAddress = (region: string): AddressState => {
      if (region === "전국") {
        return { si: "", gu: "", dong: "" };
      }

      const regionEndsWith = (suffix: string) => region.endsWith(suffix);

      if (regionEndsWith("시")) {
        return { si: region, gu: "", dong: "" };
      } else if (regionEndsWith("구")) {
        return { si: "", gu: region, dong: "" };
      } else if (regionEndsWith("동")) {
        return { si: "", gu: "", dong: region };
      }

      return { si: "", gu: "", dong: "" };
    };

    setAddress(updateAddress(currentRegion));
  }, [currentRegion]);

  const HeaderRightSection = (
    <div className="flex items-center justify-end gap-2">
      <Link href="/search">
        <Icon
          id="search"
          fill="black"
        />
      </Link>
      {userInform && isLoading && (
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

  return (
    <>
      <header>
        <Header
          left={
            <RegionSelect
              si={userInform?.address.si ? userInform.address.si : ""}
              gu={userInform?.address.gu ? userInform.address.gu : ""}
              dong={userInform?.address.dong ? userInform.address.dong : ""}
              currentRegion={currentRegion}
              setState={setCurrentRegion}
            />
          }
          right={HeaderRightSection}
        />
      </header>
      <Suspense fallback={<MainSectionLoading />}>
        <AuctionListSection address={address} />
      </Suspense>
    </>
  );
};

export default MainContentSection;
