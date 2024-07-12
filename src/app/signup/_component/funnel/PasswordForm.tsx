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
        <h2 className="mt-[2rem]">비밀번호</h2>
        <input
          type="password"
          placeholder="사용하실 비밀번호를 입력해주세요."
          className=" w-[13rem] h-[2.6rem] text-black px-2 my-1 mr-1 text-[0.85rem] rounded-md border-slate-300 border-[0.9px]"
          {...register("password")}
        />
        <h2>비밀번호 확인</h2>
        <input
          type="password"
          placeholder="비밀번호를 다시 한번 입력해주세요."
          className=" w-[13rem] h-[2.6rem] text-black px-2 my-1 mr-1 text-[0.85rem] rounded-md border-slate-300 border-[0.9px]"
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
          className="bg-blue-200 px-2 py-1 rounded-md">
          다음으로
        </button>
      </div>
    </div>
  );
};
export default PassWordForm;
