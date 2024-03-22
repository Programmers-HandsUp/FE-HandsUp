"use client";

import Image from "next/image";

import homeLogo from "~/images/normal.webp";
import HandsUpLogo from "~/images/textLogo.webp";

import EmailLoginForm from "./_component/EmailLoginForm";

const SignIn = () => {
  return (
    <div>
      <div className="w-[310px] mx-auto mt-6 mb-2">
        <Image
          width={150}
          height={150}
          src={HandsUpLogo}
          alt="title"
        />
        <h2 className="text-[0.7rem]">
          다양한 중고 물품 경매에 참여하고 싶다면 Hands up을 찾아주세요.
        </h2>
      </div>
      <Image
        className="mx-auto mt-[6rem] rounded-md"
        src={homeLogo}
        alt="logo"
        width={100}
        height={100}
      />
      <EmailLoginForm />
    </div>
  );
};

export default SignIn;
