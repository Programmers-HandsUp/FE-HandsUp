"use client";

import { useState } from "react";
import useFunnel from "../hooks/useFunnel";

import SignupHeader from "./component/SignupHeader";
import SelectCategory from "./component/funnel/SelectCategory";
import SelectResidence from "./component/funnel/SelectResidence";
import UserProfileSetting from "./component/funnel/UserProfileSetting";

const OnBoarding = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [address, setAddress] = useState("");
  const [profielImage, setProfileImage] = useState<File | undefined>();
  const [nickName, setNickName] = useState<string>("");

  const { topComponent, topFunnelPage, pushFunnel } = useFunnel([
    <UserProfileSetting
      profileImage={profielImage}
      setProfileImage={setProfileImage}
      setNickName={setNickName}
      key="1"
    />,
    <SelectResidence
      setAddress={setAddress}
      key="2"
    />,
    <SelectCategory
      category={category}
      setCategory={setCategory}
      key="3"
    />
  ]);

  const onClickNextButton = () => {
    switch (topFunnelPage) {
      case 0:
        if (profielImage || nickName.length > 1) {
          pushFunnel();
        }
        break;
      case 1:
        if (address.length > 0) {
          pushFunnel();
        }
        break;
      case 2:
        if (category.length > 0) {
          pushFunnel();
        }
        break;
    }
  };
  return (
    <div className="">
      <SignupHeader
        nowPage={topFunnelPage}
        onClickRightButton={onClickNextButton}
      />
      {topComponent}
    </div>
  );
};

export default OnBoarding;
