import Link from "next/link";

import Icon from "@/app/_component/common/Icon";

const OnBoardingFail = () => {
  return (
    <div className="w-full h-full">
      <span className="w-fit flex mx-auto my-[9rem] text-xl gap-2">
        <Icon
          id="warning"
          className="h-fit my-auto"
        />
        회원가입에 실패했습니다
      </span>
      <h1 className="text-2xl mt-[14rem] w-fit mx-auto text-center h-fit"></h1>
      <div className="mt-[6rem] h-fit w-fit mx-auto">
        <Link
          className="rounded-md border-2 text-center mx-auto w-fit h-fit px-2 py-1 border-white bg-[#96E4FF]"
          href="/">
          홈으로 되돌아가기
        </Link>
      </div>
    </div>
  );
};

export default OnBoardingFail;
