"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

import Header from "@/app/_component/common/Header";
import Icon from "@/app/_component/common/Icon";

import RegionSelect from "../RegionSelect";
import AuctionListSection from "./AuctionListSection";
import MainSectionLoading from "./MainSectionLoading";

export interface AddressState {
  si: string | null;
  gu: string | null;
  dong: string | null;
}

interface MainContentSectionProps {
  userSi: string;
  userGu: string;
  userDong: string;
}

const MainContentSection = ({
  userSi,
  userGu,
  userDong
}: MainContentSectionProps) => {
  const [currentRegion, setCurrentRegion] = useState("전국");
  const [address, setAddress] = useState<AddressState>({
    si: "",
    gu: "",
    dong: ""
  });

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
      <Link href="/notification">
        <Icon id="bell-fill" />
      </Link>
    </div>
  );

  return (
    <>
      <header>
        <Header
          left={
            <RegionSelect
              si={userSi}
              gu={userGu}
              dong={userDong}
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
