"use client";

import onGetImageFile from "@/utils/onGetImageFile";
import { useState } from "react";

interface Profile {
  profileImage: string | File;
  nickName: string;
}

const UserProfileSetting = () => {
  const [profielImage, setProfileImage] = useState<File | undefined>();
  const [nickName, setNickName] = useState<string>();

  return (
    <div>
      <form className="flex flex-col">
        <h1 className="font-xl">유저 정보 등록</h1>
        <label>프로필 사진</label>
        <button
          className="rounded-full w-[8rem] h-[8rem] bg-slate-400"
          onClick={() =>
            onGetImageFile((newImage) => setProfileImage(newImage))
          }>
          {" "}
        </button>
        <label>닉네임</label>
        <input
          className="border-b-2 border-black "
          onChange={(event) => setNickName(event.target.value)}
        />
      </form>
    </div>
  );
};

export default UserProfileSetting;
