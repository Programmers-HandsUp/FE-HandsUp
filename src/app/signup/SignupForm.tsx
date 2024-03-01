"use client";
import Input from "@/app/_component/common/Input";

import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSignUp, useIdDuplicateCheck } from "../hooks/queries/useAuth";

type LoginFormValues = {
  email: string;
  password: string;
};

const SignupForm = () => {
  const { register, handleSubmit, watch } = useForm<LoginFormValues>();
  const [idStatus, setIdStatus] = useState<"None" | "Change" | "Ok">("Change");
  const email = watch("email");
  const idDuplicateCheck = useIdDuplicateCheck(setIdStatus);

  const signUpMutation = useSignUp();

  useEffect(() => {
    setIdStatus("Change");
  }, [email]);

  const onSubmit = async (data: LoginFormValues) => {
    if (idStatus === "Ok") {
      signUpMutation.mutate(data);
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
    <div className="mx-auto w-fit mt-[12rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>아이디</label>
        <Input>
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
        <label>비밀번호</label>

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
        <div className="flex gap-4 w-fit mx-auto mt-6 mb-2 ">
          <button
            type="submit"
            className="bg-blue-200 px-2 py-1 rounded-md">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignupForm;
