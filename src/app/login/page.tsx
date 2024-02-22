"use client";

import { useState } from "react";
import EmailLoginForm from "./component/EmailLoginForm";
import LoginSelectionContainer from "./component/LoginSelectionContainer";

const Login = () => {
  const [isOpenEmailLoginForm, setIsOpenEmailLoginForm] =
    useState<boolean>(true);
  return (
    <div className="">
      {isOpenEmailLoginForm ? <EmailLoginForm /> : <LoginSelectionContainer />}
    </div>
  );
};

export default Login;
