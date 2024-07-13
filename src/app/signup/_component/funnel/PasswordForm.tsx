"use client";
import { useFormContext, useWatch } from "react-hook-form";

import Toast from "@/app/_component/common/Toast";
import useDebounce from "@/app/_hooks/useDebounce";

interface EmailFormProps {
  setStep: () => void;
}

const PassWordForm = ({ setStep }: EmailFormProps) => {
  const { show } = Toast();
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const password = useDebounce(
    useWatch({
      name: "password"
    }),
    850
  );
  const checkPassword = useDebounce(
    useWatch({
      name: "checkPassword"
    }),
    850
  );

  const checkValidation = () => {
    const errorList = Object.values(errors);
    if (!password.length || !checkPassword.length) {
      show("빈 칸이 있습니다.", "warn-solid", 2500);
    } else if (password !== checkPassword) {
      show("비밀번호와 확인용 비밀번호가 다릅니다.", "warn-solid", 2500);
    } else if (errorList.length > 0 && errorList[0] && errorList[0].message) {
      show(errorList[0].message as string, "warn-solid", 3000);
    } else {
      return true;
    }
    return false;
  };

  return (
    <div className="mx-auto w-fit mt-[7rem]">
      <div className="w-full">
        <div className="text-[1.3rem] flex gap-1">
          <h1 className="text-blue-400"> {"Hands UP"}</h1>
          <h1> {"에서"}</h1>
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
          className=" w-[15rem] h-[2.6rem] text-black pl-8 my-1 mx-auto text-[0.9rem] border-slate-300 border-b-[0.9px]"
          {...register("password")}
        />
        <h2 className="mt-1 text-[0.75rem] text-gray-500">비밀번호 확인</h2>
        <input
          type="password"
          placeholder="비밀번호를 다시 한번 입력해주세요."
          className=" w-[15rem] h-[2.6rem] mx-auto text-black pl-8 text-[0.9rem]  border-slate-300 border-b-[0.9px]"
          {...register("checkPassword")}
        />
        <p className="text-center text-[0.6rem] mt-2 mx-auto text-gray-500">
          * 비밀번호는 최소 8글자 이상 20글자 이하로 입력해주세요.
        </p>
      </div>
      {password &&
        checkPassword &&
        password.length > 7 &&
        password === checkPassword &&
        checkPassword.length < 21 && (
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
        )}
    </div>
  );
};
export default PassWordForm;
