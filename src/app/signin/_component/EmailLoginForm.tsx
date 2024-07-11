"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Input from "@/app/_component/common/Input";

import { useSignIn } from "../_hooks/mutations/useSignin";

type LoginFormValues = {
  email: string;
  password: string;
};

interface EmailLoginForm {
  setHansHandsAnimate: React.Dispatch<
    React.SetStateAction<"raiseUpHands" | "raiseDownHands" | "none">
  >;
}

const EmailLoginForm = ({ setHansHandsAnimate }: EmailLoginForm) => {
  const signInMutation = useSignIn();

  const { register, handleSubmit } = useForm<LoginFormValues>();
  const onSubmit = async (authForm: LoginFormValues) => {
    signInMutation.mutate(authForm);
  };

  const emailRegister = register("email", { required: true });
  const passwordRegister = register("password", { required: true });

  return (
    <div className="mx-auto w-fit mt-[25%]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input className="w-[15rem] h-[2.6rem] text-black">
          <label className="my-auto w-[4rem] text-left ml-2">이메일</label>
          <Input.InputForm
            {...emailRegister}
            className="my-1 w-[10rem] pt-1 text-[0.9rem]"
            type="email"
          />
        </Input>
        <Input className="w-[15rem] h-[2.6rem] my-1 text-black">
          <label className="my-auto w-[4rem] ml-1 text-left">비밀번호</label>
          <Input.InputForm
            {...passwordRegister}
            type="password"
            className="my-1 pl-[0.1rem] w-[10rem] text-2xl"
            onBlur={(e) => {
              setHansHandsAnimate("raiseDownHands");
              passwordRegister.onBlur(e);
            }}
            onFocus={() => setHansHandsAnimate("raiseUpHands")}
          />
        </Input>
        <div className="flex flex-col mt-[2.3rem] text-lg">
          <button
            type="submit"
            className="bg-blue-300 text-white rounded-sm h-[2.2rem]">
            로그인
          </button>
          <div className="flex gap-2 text-[0.75rem] justify-end">
            <p>아직 회원이 아니신가요?</p>
            <Link
              href="/signup"
              className="font-bold text-blue-600 mr-1">
              회원가입
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EmailLoginForm;
