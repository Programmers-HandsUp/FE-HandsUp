"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Input from "@/app/_component/common/Input";
import { cn } from "@/utils/function/cn";

import Toast from "../../_component/common/Toast";
import { useIdDuplicateCheck } from "../_hooks/mutations/useIdDuplicateCheck";
import { useSignUp } from "../_hooks/mutations/useSignup";

type LoginFormValues = {
  email: string;
  password: string;
};

const SignupForm = () => {
  const { show } = Toast();
  const { register, handleSubmit, watch } = useForm<LoginFormValues>();
  const [idStatus, setIdStatus] = useState<"None" | "Change" | "Ok">("Change");
  const [checkPassWord, setCheckPassWord] = useState("");

  const email = watch("email");
  const passWord = watch("password");

  const idDuplicateCheck = useIdDuplicateCheck(setIdStatus);

  const signUpMutation = useSignUp();

  useEffect(() => {
    setIdStatus("Change");
  }, [email]);

  const onSubmit = async (data: LoginFormValues) => {
    if (passWord !== checkPassWord) {
      show("비밀번호가 일치하지 않습니다", "info-solid", 3000);
    } else if (idStatus === "Ok") {
      signUpMutation.mutate(data);
    } else {
      show("사용하실 아이디, 비밀번호를 입력해주세요", "info-solid", 3000);
    }
  };
  const getInputBorderColor = () => {
    if (idStatus === "None") {
      return "border-red-600 border-4";
    } else if (idStatus === "Change") {
      return "border-white border-4";
    }
    return "border-green-200 border-4";
  };

  return (
    <div className="mx-auto w-fit mt-[8rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>아이디</label>
        <Input className="gap-1">
          <Input.InputInnerBox
            className={cn(
              getInputBorderColor(),
              "w-[13rem] h-[2.6rem] text-black"
            )}>
            <Input.InputForm
              placeholder="사용하실 아이디를 입력해주세요."
              className="px-1 my-1 mr-1 w-[12.5rem] text-[0.85rem]"
              {...register("email", { required: true })}
            />
          </Input.InputInnerBox>
          <Input.SubmitButton
            className="mx-2 px-1 py-[0.3rem] h-fit my-auto text-[0.75rem] bg-blue-300 rounded-md"
            onClick={() => idDuplicateCheck.mutate(email)}>
            중복검사
          </Input.SubmitButton>
        </Input>
        <h2 className="mt-[2rem]">비밀번호</h2>
        <Input>
          <Input.InputInnerBox className="w-[13rem] h-[2.6rem] my-1 text-black">
            <Input.InputForm
              type="password"
              placeholder="사용하실 비밀번호를 입력해주세요."
              className="px-1 my-1 w-[12.5rem] text-[0.85rem]"
              {...register("password", { required: true })}
            />
          </Input.InputInnerBox>
        </Input>
        <h2>비밀번호 확인</h2>
        <Input>
          <Input.InputInnerBox className="w-[13rem] h-[2.6rem] my-1 text-black">
            <Input.InputForm
              type="password"
              placeholder="비밀번호를 다시 한번 입력해주세요."
              className="px-1 my-1 w-[12.5rem] text-[0.85rem]"
              onChange={(event) => setCheckPassWord(event.target.value)}
            />
          </Input.InputInnerBox>
        </Input>
        <div className="flex gap-4 w-fit mx-auto mt-6 mb-2 ">
          <button
            type="submit"
            onClick={() =>
              idStatus !== "Ok" &&
              show(
                "사용하실 아이디, 비밀번호를 입력해주세요",
                "info-solid",
                3000
              )
            }
            className="bg-blue-200 px-2 py-1 rounded-md">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignupForm;
