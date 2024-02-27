"use client";

import { useState } from "react";
import useFunnel from "../hooks/useFunnel";
import Toast from "../_component/common/Toast";

import useProfileImageStore from "./component/store/store";

import FinishFunnel from "./component/funnel/FinishFunnel";
import SignupHeader from "./component/SignupHeader";
import SelectCategory from "./component/funnel/SelectCategory";
import SelectResidence from "./component/funnel/SelectResidence";
import UserProfileSetting from "./component/funnel/UserProfileSetting";

const OnBoarding = () => {
  const { show } = Toast();

  const profileImage = useProfileImageStore((state) => state.profileImage);
  const category = useProfileImageStore((state) => state.category);
  const [address, setAddress] = useState("");
  const [nickName, setNickName] = useState("");

  const { topComponent, topFunnelPage, pushFunnel } = useFunnel([
    <UserProfileSetting
      setNickName={setNickName}
      key="1"
    />,
    <SelectResidence
      setAddress={() => {
        pushFunnel();
        return setAddress;
      }}
      key="2"
    />,
    <SelectCategory key="3" />,
    <FinishFunnel
      profileImage={profileImage}
      category={category}
      nickName={nickName}
      address={address}
      key="4"
    />
  ]);

  const onClickNextButton = () => {
    switch (topFunnelPage) {
      case 0:
        if (profileImage && nickName.length > 1) {
          pushFunnel();
        } else if (!profileImage) {
          show("프로필 사진을 등록해주세요!", "warn-solid", 3000);
        } else if (nickName.length < 2) {
          show("닉네임을 입력해주세요!", "warn-solid", 3000);
        }
        break;
      case 1:
        if (address.length > 0) {
          pushFunnel();
        } else {
          show("거주지를 등록해주세요!", "warn-solid", 3000);
        }
        break;
      case 2:
        if (category.length > 0) {
          pushFunnel();
        } else {
          show("선호 카테고리를 선택해주세요", "warn-solid", 3000);
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
