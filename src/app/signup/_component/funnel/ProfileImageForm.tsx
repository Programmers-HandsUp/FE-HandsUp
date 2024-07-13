"use client";

import Image from "next/image";
import { useFormContext, useWatch } from "react-hook-form";

import Icon from "@/app/_component/common/Icon";
import Toast from "@/app/_component/common/Toast";
import onGetImageFile from "@/utils/function/onGetImageFile";

interface ProfileImageFormProps {
  setStep: () => void;
}

const ProfileImageForm = ({ setStep }: ProfileImageFormProps) => {
  const { show: showToastMessage } = Toast();
  const {
    setValue,
    formState: { errors }
  } = useFormContext();

  const profileImage = useWatch({ name: "profileImageUrl" });
  const nickName = useWatch({ name: "nickname" });

  const checkValidation = () => {
    const errorArray = Object.values(errors);
    if (nickName && nickName.length < 1) {
      showToastMessage("닉네임을 입력해주세요.", "info-solid", 3000);
    } else if (
      (errorArray.length > 0 && errorArray[0], errorArray[0]?.message)
    ) {
      showToastMessage(errorArray[0].message as string, "info-solid", 3000);
    } else {
      return true;
    }
    return false;
  };

  return (
    <div className="w-[320px] mx-auto">
      <div className="w-[290px] mx-auto flex flex-col">
        <h1 className="text-lg text-center mt-[4rem]">
          회원님의 멋진 프로필 사진을 등록 해주세요
        </h1>
        <p className="text-[0.65em] font-light mx-auto mt-[0.2rem]">
          * 프로필 사진 등록을 원하지 않으시다면 다음버튼을 눌러주세요
        </p>
        <button
          className="rounded-full w-[7rem] h-[7rem] bg-slate-200 border-[0.1rem] border-slate-200  drop-shadow-lg relative mx-auto mt-[4rem]"
          onClick={function onClickProfileImageEnrollButton(event) {
            event.preventDefault();
            onGetImageFile((newImage) => setValue("profileImageUrl", newImage));
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

        <button
          className="w-[12.5rem] h-[2.5rem] mt-[4rem] text-white bg-blue-300 px-2 py-1 mx-auto rounded-md"
          onClick={() => {
            if (checkValidation()) {
              setStep();
            }
          }}>
          다음으로
        </button>
      </div>
    </div>
  );
};

export default ProfileImageForm;
