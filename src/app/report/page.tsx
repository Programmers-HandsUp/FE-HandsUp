"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import UserCard from "../_component/common/UserCard";
import onGetImageFile from "@/utils/onGetImageFile";
import TempImg from "@/public/tempImage.png";
import Icon from "../_component/common/Icon";

const TEMP_USER_DATA = {
  profileImage: TempImg.src,
  nickName: "닉네임#1234",
  goodness: 140
};

const ReportPage = () => {
  const router = useRouter();
  const [uploadImage, setUploadImage] = useState<File | undefined>();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="mt-4">
        <Icon id="arrow-back" />
      </button>
      <div className="w-[85%] mx-auto flex flex-col">
        <h1 className="text-xl mb-2">신고대상</h1>
        <div className="bg-slate-200 rounded-md text-black">
          <UserCard className=" mx-auto w-[92%] mt-2 mb-2 gap-2 ">
            <UserCard.Avatar
              className="w-[10rem] h-[10rem]"
              src={TempImg.src}
            />
            <UserCard.ContentArea>
              <p>{TEMP_USER_DATA.nickName}</p>
              <p>{TEMP_USER_DATA.goodness}</p>
            </UserCard.ContentArea>
          </UserCard>
        </div>
        <label className="text-lg my-2">신고내용</label>
        <div className="bg-white text-black rounded-sm">
          <textarea className="px-2 py-1 w-full min-h-[21rem] mx-auto " />
        </div>
        <button
          className="w-full h-[3.5rem] my-2 bg-[#96E4FF] mx-auto"
          onClick={() =>
            onGetImageFile((newImage) => setUploadImage(newImage))
          }>
          이미지 첨부하기
        </button>
        <button className="w-full h-[3.5rem] bg-[#96E4FF] mx-auto">
          제출하기
        </button>
      </div>
    </div>
  );
};

export default ReportPage;
