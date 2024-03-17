import Link from "next/link";
import { useEffect, useState } from "react";

interface FinishFunnelProps {
  profileImage: File | undefined;
  category: string[];
  address: { si: string; dong: string; gu: string };
  nickName: string;
  id: string | null;
  passWord: string | null;
}

const FinishFunnel = ({
  id,
  passWord,
  profileImage,
  category,
  address,
  nickName
}: FinishFunnelProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const setOnboardingPost = async () => {
    console.log(profileImage, category, address, nickName); // 추후 사용 예정
    setTimeout(() => {
      // api 통신 예정 (profileImage  / category / address / )
      // 통신되는 척 딜레이
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setOnboardingPost();
  }, []);


  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center my-[8rem]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default FinishFunnel;
