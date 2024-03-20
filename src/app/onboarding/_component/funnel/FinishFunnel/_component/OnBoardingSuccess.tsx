import Link from "next/link";

const OnBoardingSuccess = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-2xl mt-[8rem] w-fit mx-auto text-center h-fit">
        등록이 완료되었습니다.
      </h1>
      <div className="mt-[6rem] h-fit w-fit mx-auto">
        <Link
          className="rounded-md border-2 text-center mx-auto w-fit h-fit px-2 py-1 border-white bg-[#96E4FF]"
          href="/">
          홈으로 가기
        </Link>
      </div>
    </div>
  );
};

export default OnBoardingSuccess;
