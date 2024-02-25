"use client";
import Link from "next/link";
import Input from "@/app/_component/common/Input";

import { useForm } from "react-hook-form";
import { tokenType } from "@/utils/mocks/api/types";

type LoginFormValues = {
  email: string;
  password: string;
};

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>();

  const setCookie = (token: tokenType) => {};

  const onSubmit = async (data: LoginFormValues) => {
    const req = await fetch("http://localhost:9090/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const token = await req.json();
    setCookie(token);
  };
  return (
    <div className="mx-auto w-fit mt-[12rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <Input.InputInnerBox className="w-[12rem] h-[2.6rem] text-black">
            <label className="my-auto"> 이메일 </label>
            <Input.InputForm />
            {errors.email && <p>이메일은 필수 입니다.</p>}
          </Input.InputInnerBox>
        </Input>
        <Input>
          <Input.InputInnerBox className="w-[12rem] h-[2.6rem] my-1 text-black">
            <label className="my-auto"> 비밀번호 </label>
            <Input.InputForm {...register("password", { required: true })} />
            {errors.password && <p>비밀번호는 필수 입니다.</p>}
          </Input.InputInnerBox>
        </Input>
        <div className="flex gap-4 w-fit mx-auto mb-2">
          <button type="submit">로그인</button>
          <Link href="/signup">회원가입</Link>
        </div>
      </form>
    </div>
  );
};
export default SignupForm;
