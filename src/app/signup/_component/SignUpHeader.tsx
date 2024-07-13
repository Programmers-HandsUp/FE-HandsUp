"use client";

import { useRouter } from "next/navigation";

import Icon from "@/app/_component/common/Icon";

const SignUpHeader = ({}) => {
  const router = useRouter();
  return (
    <header className="w-[325px] h-[4rem] flex mx-[1.5rem] mr-[2rem] justify-between ">
      <button onClick={() => router.push("/signin")}>
        <Icon
          id="arrow-back"
          size={20}
        />
      </button>
      <button
        className="text-2xl"
        onClick={() => router.push("/signin")}>
        {"X"}
      </button>
    </header>
  );
};

export default SignUpHeader;

// <ProgressBar
//         className="mt-6"
//         round={"little"}
//         width={300}
//         height={18}
//         percent={PAGE_PERCENTAGES[nowPage]}
//       />
