"use client";

import Image from "next/image";
import { useState } from "react";

import HandsUpLogo from "~/images/textLogo.webp";

import EmailLoginForm from "./_component/EmailLoginForm";
import Hans from "./_component/Hans";

const SignIn = () => {
  const [hansHandsAnimate, setHansHandsAnimate] = useState<
    "raiseUpHands" | "raiseDownHands" | "none"
  >("none");
  return (
    <div>
      <div className="w-[310px] mx-auto mt-6 mb-[4rem]">
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
      <Hans hansHandsAnimate={hansHandsAnimate} />
      <EmailLoginForm setHansHandsAnimate={setHansHandsAnimate} />
    </div>
  );
};

export default SignIn;
