import Image from "next/image";
import Link from "next/link";

import hansImage2 from "~/images/hans/hans.webp";

interface OnBoardingSuccessProps {
  userNickName: string;
}

const OnBoardingSuccess = ({ userNickName }: OnBoardingSuccessProps) => {
  return (
    <div className="w-full h-full mt-[2rem]">
      <Image
        className="w-[9rem] mx-auto"
        src={hansImage2}
        alt="hansImage"
      />
      <h1 className="w-full text-xl mt-[3rem] mx-auto text-center h-fit flex justify-center">
        <p> 중고 경매 플랫폼 </p>
        <p className="text-blue-400"> 'Hands Up'</p>
        <p>에 가입해주신</p>
      </h1>
      <h1 className="flex justify-center text-center mt-1 text-xl">
        <p className="text-green-500">{userNickName}</p>
        <p>님 진심으로 환영합니다.</p>
      </h1>
      <h2 className="text-center text-[0.7rem] mt-8">
        Hands Up을 통해 다양한 경매에 참여하여 해보세요!
      </h2>
      <div className="mt-[6rem] h-fit w-fit mx-auto">
        <Link
          className="rounded-md border-2 text-center mx-auto w-fit h-fit px-3 py-1 border-white text-white bg-[#96E4FF]"
          href="/">
          확인
        </Link>
      </div>
    </div>
  );
};

export default OnBoardingSuccess;
