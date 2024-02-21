"use Client";

import { useState } from "react";

import Input from "@/app/_component/common/Input";
import Button from "@/app/_component/common/Button";

const EmailLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickLoginButton = async () => {
    if (email.length === 0 && password.length === 0) {
      return;
    }
    const req = fetch("/api/login", {
      method: "POST",
      body: {
        email: email,
        password: password,
      },
    });
  };

  return (
    <div className="">
      <h1>로그인</h1>
      <Input>
        <Input.InputInnerBox className="w-[10rem] text-black">
          <label> 이메일 </label>
          <Input.InputForm onChange={(e) => setEmail(e.target.value)} />
        </Input.InputInnerBox>
      </Input>
      <Input>
        <Input.InputInnerBox className="w-[10rem] text-black">
          <label> 비밀번호 </label>
          <Input.InputForm onChange={(e) => setPassword(e.target.value)} />
        </Input.InputInnerBox>
      </Input>
      <Button onClick={onClickLoginButton}>로그인</Button>
      <Button>회원가입</Button>
    </div>
  );
};

export default EmailLoginForm;
