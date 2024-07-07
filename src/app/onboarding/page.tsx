"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Toast from "../_component/common/Toast";
import useFunnel from "../_hooks/useFunnel";
import FinishFunnel from "./_component/funnel/FinishFunnel";
import SelectCategory from "./_component/funnel/SelectCategory";
import SelectResidence from "./_component/funnel/SelectResidence";
import UserProfileSetting from "./_component/funnel/UserProfileSetting";
import SignupHeader from "./_component/SignupHeader";
import useProfileImageStore from "./_component/store/store";

const OnBoarding = () => {
  const { show } = Toast();
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const passWord = searchParams.get("password");
  const profileImage = useProfileImageStore((state) => state.profileImage);
  const category = useProfileImageStore((state) => state.category);
  const [address, setAddress] = useState({ si: "", gu: "", dong: "" });

  const [nickName, setNickName] = useState("");

  const { topComponent, topFunnelPage, pushFunnel } = useFunnel([
    <UserProfileSetting
      setNickName={setNickName}
      key="1"
    />,
    <SelectResidence
      setAddress={setAddress}
      key="2"
    />,
    <SelectCategory key="3" />,
    <FinishFunnel
      profileImage={profileImage}
      category={category}
      nickName={nickName}
      address={address}
      id={id}
      passWord={passWord}
      key="4"
    />
  ]);
  useEffect(() => {
    if (!id || !passWord || id?.length <= 4 || passWord?.length <= 6) {
      router.push("/signin");
    }
  }, [id, passWord, router]);

  useEffect(() => {
    if (address.dong) {
      pushFunnel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const onClickNextButton = () => {
    switch (topFunnelPage) {
      case 0:
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
      case 1:
        if (address.dong) {
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
