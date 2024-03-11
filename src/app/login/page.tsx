"use client";

import EmailLoginForm from "./_component/EmailLoginForm";
import SocialLoginContainer from "./_component/SocialLoginContainer";

const Login = () => {
  return (
    <div>
      <div className="w-[310px] mx-auto">
        <h1 className="text-xl mt-4 my-1">Hands Up!</h1>
        <h2 className="text-[0.7rem]">
          다양한 중고 물품 경매에 참여하고 싶다면 Hands up을 찾아주세요.
        </h2>
      </div>
      <EmailLoginForm />
      <SocialLoginContainer />
    </div>
  );
};

export default Login;
