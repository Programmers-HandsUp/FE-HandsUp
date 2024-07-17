"use client";

import { useFormContext, useWatch } from "react-hook-form";

import Toast from "@/app/_component/common/Toast";

interface NickNameForm {
  setStep: () => void;
}

const NickNameForm = ({ setStep }: NickNameForm) => {
  const { show: showToastMessage } = Toast();
  const {
    register,
    formState: { errors }
  } = useFormContext();

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
      <div className="mt-[5rem] ml-4">
        <div className="text-[1.3rem] flex gap-1">
          <h1 className="text-blue-400"> {"Hands UP"}</h1>
          <h1> {"에서"}</h1>
        </div>
        <div className="text-[1.3rem] flex gap-1">
          <h1>{"사용하실"}</h1>
          <h1 className="text-purple-500">닉네임</h1>
          <h1> {"을 입력해주세요."}</h1>
        </div>
      </div>
      <div className="w-[270px] mx-auto flex flex-col mt-[4rem]">
        <input
          placeholder="사용하실 닉네임을 2글자 ~ 12글자 사이로 적어주세요."
          className="border-b-2 border-black mt-4 h-10  text-sm text-center"
          {...register("nickname")}
        />
        <p className="text-[0.7rem] text-gray-500 text-center mt-1">
          * 다른 사람들에게 보일 멋진 닉네임을 적어주세요
        </p>

        <button
          className="w-[12.5rem] h-[2.5rem] mt-[3rem] mx-auto text-white bg-blue-300 px-2 py-1 rounded-md"
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

export default NickNameForm;
