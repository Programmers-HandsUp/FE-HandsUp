"use client";

import Image from "next/image";

import Icon from "@/app/_component/common/Icon";
import onGetImageFile from "@/utils/function/onGetImageFile";

import useOnboardingStore from "../store/store";

interface UserProfileSettingProps {
  setNickName: React.Dispatch<React.SetStateAction<string>>;
}

const UserProfileSetting = ({ setNickName }: UserProfileSettingProps) => {
  const profileImage = useOnboardingStore((state) => state.profileImage);
  const setProfileImage = useOnboardingStore((state) => state.setProfileImage);

  return (
    <div className="w-[320px] mx-auto">
      <h1 className="text-xl font-semibold mt-2 mb-6">유저 정보 등록</h1>

      <form className="w-[290px] mx-auto flex flex-col">
        <label className="mb-4 text-lg">프로필 사진 등록</label>
        <button
          className="rounded-full w-[7rem] h-[7rem] bg-slate-200 border-[0.1rem] border-slate-200  drop-shadow-lg relative mx-auto"
          onClick={(event) => {
            event.preventDefault();
            onGetImageFile((newImage) => setProfileImage(newImage));
          }}>
          {profileImage ? (
            <Image
              className="w-[7rem] h-[7rem] bg-white rounded-full "
              width={0}
              height={0}
              src={URL.createObjectURL(profileImage)}
              alt="img"
            />
          ) : (
            <Icon
              id="people"
              size={60}
              className="mx-auto"
            />
          )}
          <Icon
            id="addImage"
            className="absolute bottom-0 right-1 rounded-full w-8 h-8 pl-[0.2rem] py-[0.2rem] bg-[#96E4FF] border-blue-600 border-[0.05rem] drop-shadow-2xl"
          />
        </button>
        <label className="mt-8 text-lg">닉네임</label>
        <input
          placeholder="사용하실 닉네임을 2글자 ~ 8글자 사이로 적어주세요."
          className="border-b-2 border-black mt-4 h-10 px-2 text-sm"
          onChange={(event) => setNickName(event.target.value)}
        />
      </form>
    </div>
  );
};

export default UserProfileSetting;
