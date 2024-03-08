"use client";

import { useState } from "react";
import UserCard from "../_component/common/UserCard";
import onGetImageFile from "@/utils/onGetImageFile";
import TempImg from "@/public/tempImage.png";

const TEMP_USER_DATA = {
  profileImage: TempImg.src,
  nickName: "닉네임#1234",
  goodness: 140
};



const ReportPage = () => {
  const [uploadImage, setUploadImage] = useState<File | undefined>();
  return (
    <div className="w-[85%] mx-auto flex flex-col">
      <UserCard className="mx-auto w-[92%]">
        <UserCard.Avatar
          className="w-[10rem] h-[10rem]"
          src={TempImg.src}
        />
        <UserCard.ContentArea>
          <p>{TEMP_USER_DATA.nickName}</p>
          <p>{TEMP_USER_DATA.goodness}</p>
        </UserCard.ContentArea>
      </UserCard>
      <label className="text-lg">상세설명</label>
      <input className="w-full min-h-[16rem] placeholder:-translate-y-[12rem] mx-auto" />
      <button
        className="w-full h-[4rem] my-4 bg-[#96E4FF] mx-auto"
        onClick={() => onGetImageFile((newImage) => setUploadImage(newImage))}>
        이미지 첨부하기
      </button>
      <button className="w-full  h-[4rem] bg-[#96E4FF] mx-auto">
        제출하기
      </button>
    </div>
  );
};

export default ReportPage;
