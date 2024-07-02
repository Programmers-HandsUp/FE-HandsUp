"use client";

import { useEffect, useState } from "react";

import Toast from "../_component/common/Toast";
import useFunnel from "../_hooks/useFunnel";
import FinishFunnel from "../signup/_component/funnel/FinishFunnel";
import SelectCategory from "../signup/_component/funnel/SelectCategory";
import SelectResidence from "../signup/_component/funnel/SelectResidence";
import UserProfileSetting from "../signup/_component/funnel/UserProfileSetting";
import SignUpForm from "./_component/SignupForm";
import SignupHeader from "./_component/SignupHeader";
import useProfileImageStore from "./store/store";

const USER_LOGIN_FUNNEL = 0;
const USER_PROFILESETTINGS_FUNNEL = 1;
const SELECT_RESIDENT_FUNNEL = 2;
const SELECT_CATEGORY_FUNNEL = 3;

const OnBoarding = () => {
  const { show } = Toast();

  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");
  const profileImage = useProfileImageStore((state) => state.profileImage);
  const category = useProfileImageStore((state) => state.category);
  const [address, setAddress] = useState({ si: "", gu: "", dong: "" });

  const [nickName, setNickName] = useState("");

  const { topComponent, topFunnelPage, pushFunnel } = useFunnel([
    <SignUpForm
      key="signUpFormFunnel"
      setId={(newId) => setId(newId)}
      setPassWord={(newPassword: string) => setPassWord(newPassword)}
    />,
    <UserProfileSetting
      setNickName={setNickName}
      key="userProfileSettingFunnel"
    />,
    <SelectResidence
      setAddress={setAddress}
      key="selectResidenceFunnel"
    />,
    <SelectCategory key="selectCategoryFunnel" />,
    <FinishFunnel
      profileImage={profileImage}
      category={category}
      nickName={nickName}
      address={address}
      id={id}
      passWord={passWord}
      key="finishFunnel"
    />
  ]);

  useEffect(() => {
    if (address.dong) {
      pushFunnel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const onClickNextButton = () => {
    switch (topFunnelPage) {
      case USER_LOGIN_FUNNEL: {
        if (id.length > 6 && id.length < 20 && passWord.length > 6 && passWord.length < 20) {
          pushFunnel();
        }
      }
      case USER_PROFILESETTINGS_FUNNEL:
        if (profileImage && nickName.length > 1 && nickName.length <= 8) {
          pushFunnel();
        } else if (!profileImage) {
          show("프로필 사진을 등록해주세요!", "warn-solid", 3000);
        } else if (nickName.length < 2) {
          show("닉네임을 2글자 이상 입력해주세요!", "warn-solid", 3000);
        } else if (nickName.length > 8) {
          show("닉네임을 8글자 이하로 입력해주세요!", "warn-solid", 3000);
        }
        break;
      case SELECT_RESIDENT_FUNNEL:
        if (address.dong) {
          pushFunnel();
        } else {
          show("거주지를 등록해주세요!", "warn-solid", 3000);
        }
        break;
      case SELECT_CATEGORY_FUNNEL:
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
