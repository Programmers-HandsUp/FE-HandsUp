"use client";
import { useFormContext, useWatch } from "react-hook-form";

import Toast from "@/app/_component/common/Toast";

interface EmailFormProps {
  setStep: () => void;
}

const PassWordForm = ({ setStep }: EmailFormProps) => {
  const { show } = Toast();
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const password = useWatch({
    name: "password"
  });
  const checkPassword = useWatch({
    name: "checkPassword"
  });

  const checkValidation = () => {
    const errorList = Object.values(errors);
    if (!password.length || !checkPassword.length) {
      show("빈 칸이 있습니다.", "warn-solid", 3000);
    } else if (errorList.length > 0 && errorList[0] && errorList[0].message) {
      show(errorList[0].message as string, "warn-solid", 3000);
    } else {
      return true;
    }
    return false;
  };

  return (
    <div className="mx-auto w-fit mt-[8rem]">
      <div className="ml-4">
        <div className="text-[1.3rem] flex gap-1">
          <h1 className="text-blue-400"> {"Hands UP"}</h1>
          <h1 className="text-blue-400"> {"에서"}</h1>
        </div>
        <div className="text-[1.3rem] flex gap-1">
          <h1>{"사용하실"}</h1>
          <h1 className="text-green-500">비밀번호</h1>
          <h1> {"을 입력해주세요"}</h1>
        </div>
        <h2 className="mt-[2rem] text-[0.75rem] text-gray-500">비밀번호</h2>
        <input
          type="password"
          placeholder="사용하실 비밀번호를 입력해주세요."
          className=" w-[13.5rem] h-[2.6rem] text-black px-4 my-1 mr-1 text-[0.9rem] border-slate-300 border-b-[0.9px]"
          {...register("password")}
        />
        <h2 className="mt-1 text-[0.75rem] text-gray-500">비밀번호 확인</h2>
        <input
          type="password"
          placeholder="비밀번호를 다시 한번 입력해주세요."
          className=" w-[13.5rem] h-[2.6rem] text-black px-4 mr-1 text-[0.9rem]  border-slate-300 border-b-[0.9px]"
          {...register("checkPassword")}
        />
      </div>
      <div className="flex gap-4 w-fit mx-auto mt-6 mb-2 ">
        <button
          onClick={function onClickNextStepButton() {
            if (checkValidation()) {
              setStep();
            }
          }}
          className="w-[12.5rem] h-[2.5rem] mt-2 text-white bg-blue-300 px-2 py-1 rounded-md">
          다음으로
        </button>
      </div>
    </div>
  );
};
export default PassWordForm;
