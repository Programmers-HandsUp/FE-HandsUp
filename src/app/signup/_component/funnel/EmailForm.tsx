"use client";
import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

import Input from "@/app/_component/common/Input";
import Toast from "@/app/_component/common/Toast";
import { cn } from "@/utils/function/cn";

import { useIdDuplicateCheck } from "../../_hooks/mutations/useIdDuplicateCheck";

interface EmailFormProps {
  setStep: () => void;
}

const EmailForm = ({ setStep }: EmailFormProps) => {
  console.log("*");
  const { show } = Toast();
  const {
    register,
    formState: { errors }
  } = useFormContext();
  const [emailValueStatus, setEmailValueStatus] = useState<
    "Empty" | "Change" | "Ok" | "Warn"
  >("Ok");
  const email = useWatch({
    name: "email"
  });
  const password = useWatch({
    name: "password"
  });
  const checkPassword = useWatch({
    name: "checkPassword"
  });

  useEffect(() => {
    console.log(email);
  }, [email]);
  const idDuplicateCheck = useIdDuplicateCheck(setEmailValueStatus);

  useEffect(() => {
    setEmailValueStatus("Change");
  }, [email]);

  const getEmailInputBorderColor = () => {
    if (emailValueStatus === "Warn") {
      return "border-red-600 border-4";
    } else if (emailValueStatus === "Ok") {
      return "border-green-200 border-4";
    }
    return "border-slate-300 border-[0.15px]";
  };

  const checkValidation = () => {
    if (!email.length || !password.length || !checkPassword.length) {
      show("빈 칸이 있습니다.", "warn-solid", 3000);
    } else if (errors) {
      console.log(errors);
    } else if (emailValueStatus === "Change" || emailValueStatus === "Warn") {
      show("이메일 중복검사를 완료해주세요.", "info-solid", 3000);
    } else {
      return true;
    }
    return false;
  };

  return (
    <div className="mx-auto w-fit mt-[8rem]">
      <div className="ml-4">
        <label>이메일</label>
        <div className="flex">
          <Input
            className={cn(
              getEmailInputBorderColor(),
              "w-[13rem] h-[2.6rem] text-black "
            )}>
            <Input.InputForm
              type="email"
              placeholder="사용하실 이메일을 입력해주세요."
              className="px-1 my-1 mr-1 w-[12.5rem] text-[0.85rem]"
              {...register("email")}
            />
          </Input>
          <Input.SubmitButton
            className="mx-2 px-1 py-[0.3rem] h-fit my-auto text-[0.75rem] bg-blue-300 rounded-md"
            onClick={function onClickEmailDuplicateButton() {
              idDuplicateCheck.mutate(email);
            }}>
            중복검사
          </Input.SubmitButton>
        </div>
        <h2 className="mt-[2rem]">비밀번호</h2>
        <Input>
          <Input.InputForm
            type="password"
            placeholder="사용하실 비밀번호를 입력해주세요."
            className="px-1 my-1 w-[12.5rem] text-[0.85rem]"
            {...register("password")}
          />
        </Input>
        <h2>비밀번호 확인</h2>
        <Input className="w-[13rem] h-[2.6rem] my-1 text-black">
          <Input.InputForm
            type="password"
            placeholder="비밀번호를 다시 한번 입력해주세요."
            className="px-1 my-1 w-[12.5rem] text-[0.85rem]"
            {...register("checkPassword")}
          />
        </Input>
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
export default EmailForm;
