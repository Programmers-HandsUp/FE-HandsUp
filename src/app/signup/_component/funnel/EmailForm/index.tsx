"use client";

import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

import Toast from "@/app/_component/common/Toast";
import useDebounce from "@/app/_hooks/useDebounce";
import { useIdDuplicateCheck } from "@/app/signup/_hooks/mutations/useIdDuplicateCheck";
import { cn } from "@/utils/function/cn";

import EmailErrorText from "./EmailErrorText";

interface EmailFormProps {
  setStep: () => void;
}

const EmailForm = ({ setStep }: EmailFormProps) => {
  const { show } = Toast();
  const {
    register,
    formState: { errors }
  } = useFormContext();
  const [emailValueStatus, setEmailValueStatus] = useState<
    "Empty" | "Change" | "Ok" | "Warn"
  >("Empty");

  const email: string = useDebounce(
    useWatch({
      name: "email"
    }),
    1500
  );

  const idDuplicateCheck = useIdDuplicateCheck(setEmailValueStatus);

  useEffect(() => {
    if (emailValueStatus !== "Empty") {
      idDuplicateCheck.mutate(email);
    }
    setEmailValueStatus("Change");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const checkValidation = () => {
    const errorList = Object.values(errors);
    if (!email.length) {
      show("칸이 비어있습니다.", "warn-solid", 3000);
    }
    if (errorList.length > 0 && errorList[0] && errorList[0].message) {
      show(errorList[0].message as string, "warn-solid", 3000);
    } else if (emailValueStatus === "Change") {
      show("이메일 중복검사를 완료해주세요.", "info-solid", 3000);
    } else {
      return true;
    }
    return false;
  };

  return (
    <div className="mx-auto w-fit mt-[6rem]">
      <div className="ml-4">
        <div className="text-[1.3rem] flex gap-1">
          <h1 className="text-blue-400"> {"Hands UP"}</h1>
          <h1 className="text-blue-400"> {"에서"}</h1>
        </div>
        <div className="text-[1.3rem] flex gap-1">
          <h1>{"사용하실"}</h1>
          <h1 className="text-green-500">이메일</h1>
          <h1> {"을 입력해주세요"}</h1>
        </div>
      </div>
      <div className="ml-4 mt-[3.5rem]">
        <label className="text-sm text-gray-500 mx-1">이메일</label>
        <div className="flex">
          <input
            type="email"
            className={cn(
              "w-[250px] h-[2.7rem] text-black px-2 my-1 mr-1 text-[0.9rem] rounded-md border-slate-300 border-b-[0.9px]"
            )}
            placeholder="ex) abcd@handsup.com"
            {...register("email")}
          />
        </div>
        <EmailErrorText emailInputStatus={emailValueStatus} />
      </div>
      {emailValueStatus === "Ok" && (
        <div className="flex gap-4 w-fit mx-auto mt-10 mb-2 ">
          <button
            onClick={function onClickNextStepButton() {
              if (checkValidation()) {
                setStep();
              }
            }}
            className="bg-blue-300 ml-4 py-1 w-[250px] h-[2.7rem] rounded-md">
            다음으로
          </button>
        </div>
      )}
    </div>
  );
};
export default EmailForm;
