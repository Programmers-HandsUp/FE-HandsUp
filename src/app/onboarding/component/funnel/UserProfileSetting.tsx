"use client";

import onGetImageFile from "@/utils/onGetImageFile";
import Image from "next/image";

interface UserProfileSettingProps {
  profileImage: File | undefined;
  setProfileImage: React.Dispatch<React.SetStateAction<File | undefined>>;
  setNickName: React.Dispatch<React.SetStateAction<string>>;
}

const UserProfileSetting = ({
  profileImage,
  setProfileImage,
  setNickName
}: UserProfileSettingProps) => {
  return (
    <div>
      <form className="w-[300px] mx-auto flex flex-col">
        <h1 className="text-xl font-semibold mt-2 mb-6">유저 정보 등록</h1>
        <label className="mb-4 text-xl">프로필 사진</label>
        <button
          className="rounded-full w-[7rem] h-[7rem] bg-slate-400"
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
          ) : null}
        </button>

        <label className="mt-8 text-xl">닉네임</label>
        <input
          className="border-b-2 border-black mt-4 h-10"
          onChange={(event) => setNickName(event.target.value)}
        />
      </form>
    </div>
  );
};

export default UserProfileSetting;
