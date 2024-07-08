"use client";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import Input from "@/app/_component/common/Input";
import Toast from "@/app/_component/common/Toast";
import { cn } from "@/utils/function/cn";

import { useIdDuplicateCheck } from "../../_hooks/mutations/useIdDuplicateCheck";

interface EmailFormProps {
  setStep: () => void;
}

const EmailForm = ({ setStep }: EmailFormProps) => {
  const { show } = Toast();
  const { register, watch } = useFormContext();
  const [emailValueStatus, setEmailValueStatus] = useState<
    "Empty" | "Change" | "Ok" | "Warn"
  >("Empty");
  const [checkPassWord, setCheckPassWord] = useState("");

  const email = watch("email");
  const passWord = watch("password");

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

  const checkValiation = () => {
    if (emailValueStatus === "Empty") {
      show("사용하실 이메일을 입력해주세요.", "info-solid", 3000);
    } else if (emailValueStatus === "Change" || emailValueStatus === "Warn") {
      show("이메일 중복검사를 완료해주세요.", "info-solid", 3000);
    } else if (passWord !== checkPassWord) {
      show("두 비밀번호가 서로 다릅니다.", "info-solid", 3000);
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
              {...register("email", {
                required: "사용하실 이메일을 입력해주세요.",
                validate: {
                  notDuplicateCheck: () =>
                    emailValueStatus === "Ok" || "이메일 중복검사를 해주세요."
                },
                minLength: {
                  value: 9,
                  message: "올바른 이메일 형식을 넣어주세요"
                }
              })}
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
            {...register("password", {
              required: "사용하실 비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "최소 8글자 이상 입력해주세요."
              },
              maxLength: {
                value: 20,
                message: "최대 20글자 이하로 입력해주세요."
              },
              validate: {
                passNotSame: () =>
                  passWord === checkPassWord || "비밀번호가 일치하지 않습니다"
              }
            })}
          />
        </Input>
        <h2>비밀번호 확인</h2>
        <Input className="w-[13rem] h-[2.6rem] my-1 text-black">
          <Input.InputForm
            type="password"
            placeholder="비밀번호를 다시 한번 입력해주세요."
            className="px-1 my-1 w-[12.5rem] text-[0.85rem]"
            onChange={(event) => setCheckPassWord(event.currentTarget.value)}
          />
        </Input>
      </div>
      <div className="flex gap-4 w-fit mx-auto mt-6 mb-2 ">
        <button
          onClick={function onClickNextStepButton() {
            if (checkValiation()) {
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
