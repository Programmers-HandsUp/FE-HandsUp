import Image from "next/image";
import googleIcon from "~/google-icon.png";
import naverIcon from "~/naver-icon.png";

const SocialLoginContainer = () => {
  return (
    <div>
      <div className="flex flex-col mt-8 w-fit mx-auto">
        <button className="w-[9rem] h-[2.2rem] rounded-md bg-[#96E4FF] flex py-[0.3rem] justify-center gap-4">
          <Image
            className="w-[1.3rem] h-[1.3rem] my-[0.1rem]"
            src={naverIcon}
            alt="naverIcon"
          />
          네이버 로그인
        </button>
        <button className="w-[9rem] h-[2.2rem] rounded-md bg-[#96E4FF] my-1 flex py-[0.4rem] ">
          <Image
            className="w-[1.3rem] h-[1.3rem] mx-[1rem]"
            src={googleIcon}
            alt="googleIcon"
          />
          구글 로그인
        </button>
      </div>
    </div>
  );
};

export default SocialLoginContainer;
