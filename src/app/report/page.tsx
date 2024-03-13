"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import onGetImageFile from "@/utils/function/onGetImageFile";
import tempImage from "~/images/tempImage.png";

import Icon from "../_component/common/Icon";
import Modal from "../_component/common/Modal";
import Toast from "../_component/common/Toast";
import UserCard from "../_component/common/UserCard";
import CompleteReport from "./_component/CompleteReport";

const TEMP_USER_DATA = {
  profileImage: tempImage.src,
  nickName: "닉네임#1234",
  goodness: 140
};

const ReportPage = () => {
  const router = useRouter();
  const [isOpenFinishReport, setIsOpenFinishReport] = useState(false);
  const [uploadImage, setUploadImage] = useState<File | undefined>();
  const [reportText, setReportText] = useState<string>();

  const { show } = Toast();

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
              src={TEMP_USER_DATA.profileImage}
            />
            <UserCard.ContentArea>
              <p>{TEMP_USER_DATA.nickName}</p>
              <p>{TEMP_USER_DATA.goodness}</p>
            </UserCard.ContentArea>
          </UserCard>
        </div>
        <label className="text-lg my-2">신고내용</label>
        <div className="bg-white text-black rounded-sm">
          <textarea
            onChange={(event) => setReportText(event.target.value)}
            className="px-2 py-1 w-full min-h-[21rem] mx-auto "
          />
        </div>
        <button
          className="w-full h-[3.5rem] my-2 bg-[#96E4FF] mx-auto"
          onClick={() =>
            onGetImageFile((newImage) => setUploadImage(newImage))
          }>
          {uploadImage ? (
            <div className="flex justify-center gap-6 mr-16">
              <Image
                className="bg-gray-100 px-1 py-1"
                src={URL.createObjectURL(uploadImage)}
                width={40}
                height={40}
                alt="image"
              />
              <p className="my-auto">{"이미지 변경하기"}</p>
            </div>
          ) : (
            "이미지 첨부하기"
          )}
        </button>
        <button
          onClick={() =>
            reportText && reportText?.length > 10
              ? setIsOpenFinishReport(true)
              : show("최소 10글자이상 입력해주세요", "info-solid", 3000)
          }
          className="w-full h-[3.5rem] bg-[#96E4FF] mx-auto">
          제출하기
        </button>
      </div>
      <Modal
        className="bg-black"
        modalType="fullScreen"
        animate="slide"
        isOpen={isOpenFinishReport}
        close={() => setIsOpenFinishReport}>
        <CompleteReport />
      </Modal>
    </div>
  );
};

export default ReportPage;
