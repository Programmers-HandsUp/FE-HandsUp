"use client";
import Link from "next/link";
import Input from "@/app/_component/common/Input";

import { useSignIn } from "@/app/hooks/mutations/useSignin";
import { useForm } from "react-hook-form";

type LoginFormValues = {
  email: string;
  password: string;
};

const EmailLoginForm = () => {
  const signInMutation = useSignIn();

  const { register, handleSubmit } = useForm<LoginFormValues>();
  const onSubmit = async (authForm: LoginFormValues) => {
    signInMutation.mutate(authForm);
  };
  
  return (
    <div className="mx-auto w-fit mt-[12rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <Input.InputInnerBox className="w-[13.2rem] h-[2.6rem] text-black">
            <label className="my-auto w-[3.5rem]"> 아이디 </label>

            <Input.InputForm
              className="my-1 w-[8rem]"
              {...register("email", { required: true })}
            />
          </Input.InputInnerBox>
        </Input>
        <Input>
          <Input.InputInnerBox className="w-[13.2rem] h-[2.6rem] my-1 text-black">
            <label className="my-auto w-[3.5rem]"> 비밀번호 </label>
            <Input.InputForm
              type="password"
              className="my-1"
              {...register("password", { required: true })}
            />
          </Input.InputInnerBox>
        </Input>
        <div className="flex gap-4 w-fit mx-auto mb-3">
          <button type="submit">로그인</button>
          <Link href="/signup">회원가입</Link>
        </div>
      </form>
    </div>
  );
};
export default EmailLoginForm;
