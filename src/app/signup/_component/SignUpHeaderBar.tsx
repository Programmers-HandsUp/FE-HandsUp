"use client";

import { useRouter } from "next/navigation";

import Icon from "@/app/_component/common/Icon";

interface SignUpHeaderBarProps {
  step: string;
}

const SignUpHeaderBar = ({ step }: SignUpHeaderBarProps) => {
  const router = useRouter();
  return (
    <header className="w-[325px] h-[4rem] flex mx-[1.5rem] mr-[2rem] justify-between ">
      {step !== "emailForm" && step !== "SignUpFinish" ? (
        <button onClick={() => history.back()}>
          <Icon
            id="arrow-back"
            size={20}
          />
        </button>
      ) : (
        <div />
      )}
      <button
        className="text-2xl"
        onClick={() => router.push("/signin")}>
        {"X"}
      </button>
    </header>
  );
};

export default SignUpHeaderBar;
